---
title: aks, github, slack으로 워크플로우 구축하기 - 3편 (인프라 생성)
date: 2021-05-06 19:05:03
category: devops
thumbnail: { thumbnailSrc }
draft: false
---

# Index

|       |                                                            |
| ----- | ---------------------------------------------------------- |
| 1편   | [소개](/devops/workflows-with-aks-github-slack-1)          |
| 2편   | [blueprint](/devops/workflows-with-aks-github-slack-2)     |
| `3편` | [인프라 생성](/devops/workflows-with-aks-github-slack-3)   |
| 4편   | [github 설정](/devops/workflows-with-aks-github-slack-4)   |
| 5편   | [slack 설정](/devops/workflows-with-aks-github-slack-5)    |
| 6편   | [github action](/devops/workflows-with-aks-github-slack-6) |
| 7편   | [회고](/devops/workflows-with-aks-github-slack-7)          |

# 정리해야되는 것들

# Hi

1. 클라우드 네이티브 이므로 가격에 주의하는 내용을 기술합니다.

# 비용 계산

1.  사용 가능한 가격
    1. 새로운 구독 계정: ₩168,698
    1. 이전에 사용하던 구독 계정: ₩144,967
2.  AKS
    1. 한달 기준
    2. Node 2개 사용
    3. B2S: vCPU 2개, 4GB RAM, 8GB 임시 스토리지, ₩58.482(대략) / 시간
    4. ₩85,383.43
3.  Azure Diks
    1. mysql server에서 사용 됨
    1. 표준 SSD LRS
    1. E3: 16 GiB, 500 프로비저닝된 IOPS, 60 프로비저닝된 MB/초, ₩1,349.580/월
4.  Azure Storage
    1. 공식문서의 spec에 맞게 100gb 이라면 약 ₩7,495.23
    1. 가격이 저렴해서 일단은 10gb으로 시작하고 올리는 것을 전략으로 설정
    1. 10gb를 사용하면 월 약 ₩814 소요됨
5.  App Insight
    1. 따로 가격이 없는 듯
6.  Dashboard
    1. 따로 가격이 없는 듯

# Blueprint

1. [인프라 구성도를 그립니다.](https://github.com/dhslrl321/Finx-App)
2. 템플릿은 최대한 helm을 적용합니다.
3. namespace로 환경에 맞게 구분합니다.
4. ingress 설정시 `.yaml` 으로 처리 안하는 것도 모두 iac에 맞게 export 하도록 합니다.
5. `.yml` 말고 `.yaml` 만 사용합니다.
6. StorageClass 용량 설계
   1. pvc의 경우 하나의 스토리지 클래스에 여러게의 파일 공유영역이 생성됩니다
7. Mysql 접속 계정 설정
8. Ingress 도메인 설계
9. replicat 개수
10. ARM template를 export 합니다.
    1. 인수인계 및 다른 환경으로 프로비저닝을 위함입니다.
11. 리소스 명칭
    1. 리소스 그룹 이름
    2. k8s cluster 이름
    3. acr 이름
       1. image 이름
    4. 네임 스페이스
    5. 워크로드 리소스 네이밍 컨벤션

# use case

1. aks (아래의 set가 qa, prod로 프로비저닝)
   1. 1 \* next server
   2. 3 \* gin or nest or express server
   3. 1 \* redis server
   4. 2 \* mysql server
   5. 스토리지
      1. config
      2. 정적, 이미지, 비디오

# Hi

인프라를 생성해 봅시다.

1. azure resource group 생성
2. aks 생성
   1. http 컨트롤러 사용으로 생성
   2. Azure Monitor 사용 안함 (돈이 많이 들어감)
   3. 이외의 값은 동적으로 변경이 가능함
3. azure cli 설치 후 로그인
4. 클러스터 접속
5. ingress 생성
   1. [해당 문서를 참고합니다.](https://docs.microsoft.com/ko-kr/azure/aks/ingress-tls)
   1. aks가이드에 있는 yaml이 레거시라서 모던으로 교체했습니다.
   1. https 활성화
   1. 이메일 주소 변경
   1. 삭제하게 편하게 테스트 컨테이너는 `test` namespace에 배치함
      1. 주의, service endpoint는 ns에 맞게 설정되므로 ingress의 path도 수정해줘야합니다.
   1. ingress apply시 open된 nginx ip를 입력한 DNS 정보를 기입합니다.
6. 네임 스페이스 생성
7. 스토리지 클레스 생성
   1. azure files를 위함
