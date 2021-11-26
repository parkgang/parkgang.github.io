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

> 추가 작성 예정입니다.

1. 생각보다 중복되는 yaml이 많았다 helm 차트를 도입하고 싶었지만 시간과 타엽하지 못했습니다.
1. github action 실패시 slack 알림이 안가는거
1. 인프라를 테라폼 등을 이용하여 완벽하게 iac으로 만들지 못한 것
   1. 특히 구독 비용 부족으로 자주 마이그레이션 해야하는 상황마다 필요성을 느낌
1. ingress 불필요하게 도메인이 많은 점, 하나의 도메인을 path 단위로 `/` 화 시키지 못하여 복잡도가 증가되었습니다.
1. 더 가벼운 docker image를 연구하지 못한 것
1. orm 연결을 위해서 db가 생성되어야 하는데 db container을 올리는 곳과 orm이 다른 코드로 관리되어 자동화 되지 않은 점
1. 마이크로서비스의 중복되는 인터페이스 문제를 해결하지 못한 점
   1. 추가적은 스터디를 통해 알게된 사실로 다음 분기때는 gRPC 도입을 생각 중 입니다.
1. `qa` 라는 네임스페이스라고 붙인게 아쉽다.
   1. 실제 qa 인력이 없는데 굳이 `qa` 라는 네임스페이스가 맞았던걸 까?
   2. 차란히 `stage` 위딩이 더 올바른 표현이라고 생각들었습니다.
