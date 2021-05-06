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

# Hi

인프라를 생성해 봅시다.

1. azure resource group 생성
2. aks 생성
   1. http 컨트롤러 사용으로 생성
   2. 이외의 값은 동적으로 변경이 가능함
3. 네임 스페이스 생성
4. ingress 생성
   1. https 활성화
5. 스토리지 클레스 생성
   1. azure files를 위함
