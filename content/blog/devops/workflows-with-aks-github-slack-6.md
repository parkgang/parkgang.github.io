---
title: aks, github, slack으로 워크플로우 구축하기 - 6편 (github action)
date: 2021-05-06 19:05:06
category: devops
thumbnail: { thumbnailSrc }
draft: false
---

# Hi

1. 웹 훅 활성화
2. 깃허브 액션 작성
   1. Container Registry
      1. 정책
         1. latest를 최대한 피합니다.
            1. 배포시 어떤 이미지를 pull 해야하는지 매우 모호합니다.
            2. org 정책에서 기본 cr를 public으로 변경합니다.
         2. 환경 및 리소스 유형에 맞게 모두 한 Registry에 저장합니다. (helm도 포함)
      2. 자동화 배포라인 생성
   2. aks 자동화 배포
      1. qa
         1. release branch가 push 될 때
      2. prod
         1. release tag가 생성될 때
