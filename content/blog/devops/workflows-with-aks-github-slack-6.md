---
title: aks, github, slack으로 워크플로우 구축하기 - 6편 (github action)
date: 2021-05-06 19:05:06
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
| `6편` | [github action](/devops/workflows-with-aks-github-slack-6) |
| 7편   | [회고](/devops/workflows-with-aks-github-slack-7)          |

# Hi

1. 전략
   1. 환경 별로 ns 이외 yaml이 비슷하더리도 나중에 추가 설정이 들어갈 경우 의존이 생기므로 비슷해도 따로 만드는게 전략적으로 좋습니다.
   1. 같은 이미지는 배포해도 업데이트가 되지 않습니다
1. 웹 훅 활성화
   1. notion를 그대로 인용합니다.
   1. 추가적으로 아이콘이랑 이름 정보를 수정했습니다.
1. 정책
   1. Container Registry
      1. 정책
         1. latest를 최대한 피합니다.
            1. 배포시 어떤 이미지를 pull 해야하는지 매우 모호합니다.
         2. 환경 및 리소스 유형에 맞게 모두 한 Registry에 저장합니다. (helm도 포함)
1. aks 자동화 배포
   1. qa
      1. release branch가 push 될 때
   2. prod
      1. release tag가 생성될 때
1. 자동화 배포라인 생성
   1. 일단 main push 될 떄 마다 배포 되도록 github action 작성
   1. org 시크릿 등록
      1. CR_PAT
         1. 깃허브 컨테이너 레지스터리에 올리기 위한 토큰 값
      1. AZURE_CREDENTIALS
         1. aks 접근 권한
         1. 발급 과정 노션에 있는거 그대로 사용
      1. CLUSTER_NAME
         1. aks 클러스터 이름
         1. "myResourceGroup"
      1. CLUSTER_RESOURCE_GROUP
         1. aks 클러스터 리소스 그룹
         1. "myAKSCluster"
      1. SLACK_WEBHOOK
         1. cicd 결과를 전달하는 slack app token
         1. 노션에 있는 정보 사용
