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
