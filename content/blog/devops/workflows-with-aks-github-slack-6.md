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

# Overview

드디어 워크플로우 구축 마지막 섹션입니다. 😼

이전부터 설정하고 만들어 놓은 인프라를 자동화 파이프라인으로 태울 수 있도록 설정할 것입니다.

# Github Action

CI/CD Service는 Github Action을 사용할 것입니다.

## 배포 정책

해당 시리즈의 워크플로우를 구축하면서 `develop` branch으로 걸리는 PR은 `qa` 를 위한 배포, release는 `main` 을 위한 배포라고 말했었습니다. 해당 요구사항을 명시적으로 정의하면 아래와 같습니다.

1. qa
   1. release branch가 push 될 때
1. prod
   1. release tag가 생성될 때

## yaml

사용되는 yaml은 아래와 같으며 github action 관련 파일은 `.github/workflows` 에 정의하면 됩니다.

`qa` 와 `prod` 의 트리거 조건이 달라서 2개의 yaml이 존재하며 아래의 yaml도 정답은 아닙니다.

또한, 아래의 yaml은 배포 환경에 맞게 `Dockerfile` 을 따로 정의해서 돌아가도록 되어있습니다. 즉, 중요한 것은 yaml 내용을 이해하는 것이며 여기서는 큰 틀에서 돌아가는 step에 대해 설명하도록 하겠습니다.

> 아래의 yaml은 [front-server - aks-qa-deploy.yaml](https://github.com/belf-kr/front-server/blob/main/.github/workflows/aks-qa-deploy.yaml) 의 내용이며 해당 yaml 이외 pvc를 사용하는 case도 [storage-service - aks-qa-deploy.yaml](https://github.com/belf-kr/storage-service/blob/main/.github/workflows/aks-qa-deploy.yaml) 에 존재합니다. 이외 `prod` yaml도 구경해보세요!

### steps

1. repo를 checkout 합니다.
1. 명시된 `Dockerfile` 대로 image를 build 합니다.
1. container registry에 로그인 합니다.
1. build 된 image를 container registry으로 push 합니다.
1. AKS에 로그인 합니다.
1. k8s에 namespace를 생성합니다.
1. 정의된 k8s yaml에 맞게 object를 적용합니다.
1. k8s ingress에 등록합니다.
1. slack에 배포 완료 알림을 전송합니다.

```yaml
name: AKS-Deploy-Qa

on:
  pull_request:
    branches:
      - develop

env:
  IMAGE_HOST: ghcr.io/${{ github.repository }}
  IMAGE_NAME: nextjs-qa
  IMAGE_TAG: ${{ github.sha }}
  NAMESPACE: qa

jobs:
  apply:
    runs-on: ubuntu-latest
    steps:
      - name: repo checkout
        uses: actions/checkout@v2

      - name: build image
        run: docker build . --file Dockerfile.qa --tag $IMAGE_NAME

      - name: log into registry
        run: echo "${{ secrets.CR_PAT }}" | docker login ghcr.io -u ${{ github.actor }} --password-stdin

      - name: push image
        run: |
          docker tag $IMAGE_NAME $IMAGE_HOST/$IMAGE_NAME:$IMAGE_TAG
          docker push $IMAGE_HOST/$IMAGE_NAME:$IMAGE_TAG

      - name: aks login
        uses: azure/aks-set-context@v1
        with:
          creds: '${{ secrets.AZURE_CREDENTIALS }}'
          resource-group: '${{ secrets.CLUSTER_RESOURCE_GROUP }}'
          cluster-name: '${{ secrets.CLUSTER_NAME }}'
        id: login

      - name: create namespace
        run: |
          kubectl create namespace ${{ env.NAMESPACE }} --dry-run=client -o json | kubectl apply -f -

      - name: aks apply object
        uses: Azure/k8s-deploy@v1.4
        with:
          namespace: ${{ env.NAMESPACE }}
          manifests: |
            ./k8s/qa.yaml
          images: |
            ${{ env.IMAGE_HOST }}/${{ env.IMAGE_NAME }}:${{ env.IMAGE_TAG }}

      - name: aks apply service for ingress
        uses: Azure/k8s-deploy@v1.4
        with:
          namespace: ingress-basic
          manifests: |
            ./k8s/qa-external.yaml

      - name: slack notification
        uses: rtCamp/action-slack-notify@v2
        env:
          SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
          SLACK_MESSAGE: ${{ github.repository }}가 ${{ env.NAMESPACE }} 환경에 배포되었습니다 🚀
```

# Github Organizations Secrets

## Github Container Registry Token

## Azure Credentials

## Slack Webhook URL

# CI/CD 테스트

# 마무리
