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

우선 캐시가 적용된 경우와 적용되지 않은 경우를 보기 쉽도록 이미지 파일을 읽어오는 API를 만들고 가장 궁금했던 `ETag` 처리 로직을 위해서 텍스트 파일을 읽어오는 API를 만들도록 합니다.

1. 이미지 API의 경우 제일 단순하게 `Cache-Control` Header를 통해서 `max-age` 만을 가지고 캐시 적용 유무 차이를 볼 것이고
1. 텍스트 API의 경우 파일이 수정될 때마다 `ETag` 값을 변경하여 Response 하는 로직과 함께 `Cache-Control` Header로 시간에 따른 캐시 변화도 볼 것입니다.

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
