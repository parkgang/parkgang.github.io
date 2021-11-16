---
title: 간단한 HTTP 캐시 서버를 만들어보자 (with golang)
date: 2021-11-17 00:11:73
category: golang
thumbnail: { thumbnailSrc }
draft: false
---

# Overview

HTTP Cache에 대해서 찾아보면 대부분 각 Header가 어떻게 동작하는지에 대해 중점으로 알려줍니다.

어떻게 보면 Client와 Server가 HTTP Spec에 규정된 Header 값을 바탕으로 캐시하는 것이 전부이긴 하지만 Header 값을 실제 프로그램이 어떻게 읽어서 처리하느냐도 중요합니다.

필자는 HTTP Cache를 공부할 때 Header에 대한 내용만 나오고 그 Header를 어떤 로직으로 보내는지 서버는 Header를 읽어서 어떻게 하는지 로직적으로 살펴볼 수 없어서 이해가 너무 힘들었습니다.

특히, `ETag` 부분은 도데체 어떤 경우에 생기며 `ETag` 가 변경되는 기준은 무엇이며 검증은 어떤 식으로 하는지 너무 답답했습니다.

이에 따라 직접 캐시 서버를 만들어서 이해하기로 결심했고 [Learning HTTP caching in Go](https://www.sanarias.com/blog/115LearningHTTPcachinginGo) 글을 기준으로 잡고 간단한 캐시 서버를 제작하게 되었습니다.

# 시작하기 전에

해당 글에서는 HTTP Cache와 관련된 Header에 대해서 자세히 설명하지 않으며 HTTP Cache와 관련된 Header가 어떻게 Request되고 Server는 어떤 식으로 처리되는지를 그에 대한 효율성을 중점적으로 서술합니다.

# TL;DR

1. HTTP Cache Header는 HTTP로 통신하는 주체들이 캐시를 처리하기 위한 하나의 interface일 뿐 그것에 대한 처리 로직을 구현하는 것은 Client (browser) 와 Server (web server) 입니다.
1. `Express.js` 니 `ASP.NET Core` 과 같은 상용화 된 웹 서버 제품을 사용하는 경우 캐시 관련 해더를 처리하는 부분은 블랙박스 영역이라고 생각하면 됩니다.

# 요구사항

1. 우선 캐시가 적용된 경우와 적용되지 않은 경우를 보기 쉽도록 이미지 파일을 읽어오는 API를 만들고 가장 궁금했던 `ETag` 처리 로직을 위해서 텍스트 파일을 읽어오는 API를 만들도록 합니다.
1. 이미지 API의 경우 제일 단순하게 `Cache-Control` Header를 통해서 `max-age` 만을 가지고 캐시 적용 유무 차이를 볼 것이고
1. 텍스트 API의 경우 파일이 수정될 때마다 `ETag` 값을 변경하여 Response 하는 로직과 함께 `Cache-Control` Header로 시간에 따른 캐시 변화도 볼 것입니다.

# 코드를 보여주세요

> 아래에 사용된 코드는 [parkgang/http-cache-server-with-go](https://github.com/parkgang/http-cache-server-with-go) 에서 살펴보실 수 있습니다.

## main.go

1. HTTP Cache를 이해하기 위한 간단한 서버라서 로직은 모두 `main.go` 에 몰아져있습니다.
1. endpoint는 `/image`, `/text` 2가지가 있고 위에서 말한 이미지와 텍스트를 조회하는 API 입니다.
   1. 이미지의 경우 메모리 상에서 생성하고 응답할 것이며
   1. 텍스트의 경우 `assets` 디렉터리에 있는 `note.txt` 파일을 사용할 것입니다.
1. `Cache-Control` Header의 경우 이미지와 텍스트 모두 동일하게 `private, max-age=5` 가 적용됩니다.
   1. 확실한 테스트를 위해 브라우저만 캐시되도록 `private` 을 지정하였고
   1. 캐시 적용 유무를 빠르게 보기 위하여 아주 짧은 시간인 `max-age` 를 5초로 지정하였습니다.
1. `ETag` 의 경우 만드는 방법이 여러가지 있는 것으로 알지만 가장 단순하게 파일이 수정된 일자를 MD5 해시 함수를 이용하여 생성하였습니다.
   1. 이로써 파일이 수정될 때마다 (파일을 그냥 저장할 때도 해당) 수정된 일자가 변경되어서 `ETag` 가 계속 변하게 될 것입니다.
1. `r.Header.Get("If-None-Match")` 쪽 코드를 보면 `ETag` 를 검증하는 로직이 있는데 request header에 `If-None-Match` 값이 존재하고 request한 `ETag` 와 현재 파일의 `ETag` 를 구해서 비교 후 같으면 `304` 를 응답하는 코드입니다.
   > 물론 제품 수준의 퀄리티는 아니지만 메커니즘 이해를 위한 구현은 이렇게 쉬운데 이 부분이 블랙박스로 처리되어 참으로 이해가 어려웠습니다.

```go{46,66,69-76}
package main

import (
	"bytes"
	"crypto/md5"
	"flag"
	"fmt"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

var root = flag.String("root", "./assets", "file system path")

func main() {
	http.Handle("/", http.FileServer(http.Dir(*root)))
	http.HandleFunc("/image", imageHandler)
	http.HandleFunc("/text", textHandler)

	log.Println("Listening on 8080")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal("ListenAndServe:", err)
	}
}

func imageHandler(w http.ResponseWriter, r *http.Request) {
	m := image.NewRGBA(image.Rect(0, 0, 240, 240))
	// 검은색 이미지 생성
	tempImage := color.RGBA{0, 0, 0, 255}
	draw.Draw(m, m.Bounds(), &image.Uniform{tempImage}, image.Point{}, draw.Src)

	// jpeg 형식으로 이미지를 인코딩하고 ResponseWriter에 writes 합니다.
	var img image.Image = m
	buffer := new(bytes.Buffer)
	if err := jpeg.Encode(buffer, img, nil); err != nil {
		log.Println("unable to encode image.")
	}

	w.Header().Set("Cache-Control", "private, max-age=5")
	w.Header().Set("Content-Type", "image/jpeg")
	w.Header().Set("Content-Length", strconv.Itoa(len(buffer.Bytes())))
	if _, err := w.Write(buffer.Bytes()); err != nil {
		log.Println("unable to write image.")
	}
}

func textHandler(w http.ResponseWriter, r *http.Request) {
	filename := "./assets/note.txt"

	// 마지막 수정 시간 가져오기
	file, err := os.Stat(filename)
	if err != nil {
		log.Println(err)
	}
	modifiedtime := file.ModTime()

	etag := fmt.Sprintf("%x", md5.Sum([]byte(modifiedtime.String())))
	w.Header().Set("Etag", etag)
	w.Header().Set("Cache-Control", "private, max-age=5")

	// etag가 변하지 않았다면 304 응답
	if match := r.Header.Get("If-None-Match"); match != "" {
		if strings.Contains(match, etag) {
			log.Println("etag가 변하지 않았음으로 304 응답")
			w.WriteHeader(http.StatusNotModified)
			return
		}
	}

	// 파일을 읽은 후 응답
	dat, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Println(err)
	}
	log.Println("파일 응답")
	fmt.Fprint(w, string(dat))
}
```

## assets/note.txt

1. 텍스트 API에서 응답할 때 사용되는 텍스트 파일인데 일부로 `3MB` 으로 무겁개 해서 캐시 효과가 얼마나 큰지 알 수 있도록 디자인하였습니다.
1. 또한, `304` 응답 시 얼마나 응답 바디가 작은지 확인할 수 있습니다.

## assets/index.html

1. Server API를 소비하는 Client 웹 페이지 입니다.
1. `이미지 요청` 버튼을 누르면 이미지를 조회해서 보여주고
1. `텍스트 요청` 버튼을 누르면 텍스트를 조회해서 보여주는 아주 간단한 웹 페이지 입니다.

> 독자분들은 아시나요...? 정적 파일 요청을 브라우저의 URL에 직접 넣어서 요청하면 캐시 되지 않는다는 것을...🥲
>
> 분명 캐시가 적용된 URL인데 계속 요청을 해도 캐시되지 않고 새롭게 응답받길래 왜 그러지 하고 트러블 슈팅을 해보니 브라우저 URL에 직접 넣어서 호출해서 그렇더군요  
> 그래서 아래와 같이 간단한 웹 페이지를 만들어서 호출할 수 있도록 디자인하였습니다.  
> 에초에 GUI라서 확인하기도 쉬우실 꺼에요!

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .text-area {
        display: inline-block;
        width: 240px;
        height: 240px;
        border: 1px solid black;
        overflow: hidden;
      }
    </style>
  </head>
  <body>
    <div>
      <button onclick="handleGetImage()">이미지 요청</button><br />
      <img id="image" src="" alt="이미지가 표시 안됨" />
    </div>
    <hr />
    <div>
      <button onclick="handleGetTxt()">텍스트 요청</button><br />
      <span class="text-area"></span>
    </div>
  </body>
  <script>
    async function handleGetImage() {
      const response = await fetch(`${window.location.origin}/image`)
      if (response.ok) {
        const imageBlob = await response.blob()
        const imageObjectURL = URL.createObjectURL(imageBlob)
        document.getElementById('image').src = imageObjectURL
      } else {
        alert('HTTP-Error: ' + response.status)
      }
    }
    async function handleGetTxt() {
      const response = await fetch(`${window.location.origin}/text`)
      if (response.ok) {
        const text = await response.text()
        document.getElementsByClassName('text-area')[0].innerHTML = text
      } else {
        alert('HTTP-Error: ' + response.status)
      }
    }
  </script>
</html>
```

# 원하는 대로 동작하는지 확인해보자

## 이미지

## 텍스트

# 결론

# temp

```
# Feature

1. 앱의 리소스를 캐싱하고 있는지 확인하려고 합니다.
1. `/black/` URL이 호출 될 때 이미지를 생성하며 그 이미지를 캐시하려고 합니다.
1. [http://localhost:8080/black/](http://localhost:8080/black/) 으로 요청을 보내면서 console에 요청 전달 여부를 확인합니다.
   > Chrome 개발자 도구로 `네트워크` 에서 `캐시 사용 중지` 체크박스를 여부에 따라서 어떻게 동작하는지 확인하면 편리합니다.

1. etag그냥 막 만들었다고 하기
   1. 사실 지금하는 동작은 라스트 모디파인드랑 크게 다를껀 없지만 그냥 헀다고 말하기
1. 일부로 3mb 무겁개 해서 캐시 효과가 얼마나 큰지 서술 ㄱ
   1. 304 응답시 얼마나 응답 바디가 작은지
1. 이미지 부터 캐시 컨트롤 설명하고 텍스트에서 etag 사용법 서술
1. 일부로 어떻게 응답되는지 확인할 수 있도록 프린트 에프같은거 찍어놓음
```
