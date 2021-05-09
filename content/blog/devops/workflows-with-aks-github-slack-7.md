---
title: aks, github, slack으로 워크플로우 구축하기 - 7편 (회고)
date: 2021-05-06 19:05:07
category: devops
thumbnail: { thumbnailSrc }
draft: false
---

# Index

|       |                                                            |
| ----- | ---------------------------------------------------------- |
| 1편   | [소개](/devops/workflows-with-aks-github-slack-1)          |
| 2편   | [blueprint](/devops/workflows-with-aks-github-slack-2)     |
| 3편   | [인프라 생성](/devops/workflows-with-aks-github-slack-3)   |
| 4편   | [github 설정](/devops/workflows-with-aks-github-slack-4)   |
| 5편   | [slack 설정](/devops/workflows-with-aks-github-slack-5)    |
| 6편   | [github action](/devops/workflows-with-aks-github-slack-6) |
| `7편` | [회고](/devops/workflows-with-aks-github-slack-7)          |

# 아쉬운 점

1. k8s config으로 환경변수 컨트롤 못한거
1. 생각보다 중복되는 yaml이 많았다 helm 차트를 도입허고 싶었지만 시간과 타엽하지 못했습니다.
1. github action 실패시 slack 알림이 안가는거
1. 인프라를 테라폼 등을 이용하여 완벽하게 iac으로 만들지 못한 것
