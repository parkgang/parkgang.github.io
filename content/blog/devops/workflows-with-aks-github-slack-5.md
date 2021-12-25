---
title: aks, github, slack으로 워크플로우 구축하기 - 5편 (slack 설정)
date: 2021-05-06 19:05:05
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
| `5편` | [slack 설정](/devops/workflows-with-aks-github-slack-5)    |
| 6편   | [github action](/devops/workflows-with-aks-github-slack-6) |
| 7편   | [회고](/devops/workflows-with-aks-github-slack-7)          |

# Overview

# slack 워크스페이스 생성

![](./images/workflows-with-aks-github-slack-5/1-0.png)

# github app 설정

## 채널 생성

![](./images/workflows-with-aks-github-slack-5/1-1.png)

## 워크스페이스에 github app 추가

![](./images/workflows-with-aks-github-slack-5/2.png)

![](./images/workflows-with-aks-github-slack-5/3.png)

![](./images/workflows-with-aks-github-slack-5/4.png)

![](./images/workflows-with-aks-github-slack-5/5.png)

## GitHub 계정 연결

![](./images/workflows-with-aks-github-slack-5/6.png)

![](./images/workflows-with-aks-github-slack-5/7.png)

![](./images/workflows-with-aks-github-slack-5/8.png)

![](./images/workflows-with-aks-github-slack-5/9.png)

## Organizations 연결

![](./images/workflows-with-aks-github-slack-5/10.png)

![](./images/workflows-with-aks-github-slack-5/11.png)

![](./images/workflows-with-aks-github-slack-5/12.png)

![](./images/workflows-with-aks-github-slack-5/13.png)

![](./images/workflows-with-aks-github-slack-5/14.png)

## issue 등록 시 알림 테스트

![](./images/workflows-with-aks-github-slack-5/15.png)

![](./images/workflows-with-aks-github-slack-5/16-0.png)

## 필요한 구독만 남기기

| slack issue 채널 필요한 정보만 알림 받도록 수정 | slack release 채널 필요한 정보만 알림 받도록 수정 |
| ------------------------------------------------------------------------ | -------------------------------------------------------------------------- |
| ![](./images/workflows-with-aks-github-slack-5/16-1.png)                 | ![](./images/workflows-with-aks-github-slack-5/16-2.png)                   |

# Webhooks 생성

## 채널 생성

![](./images/workflows-with-aks-github-slack-5/17-0.png)

## App 생성

![](./images/workflows-with-aks-github-slack-5/17-1.png)

![](./images/workflows-with-aks-github-slack-5/18-0.png)

## App 수정

![](./images/workflows-with-aks-github-slack-5/18-1.png)

## Webhooks 생성

![](./images/workflows-with-aks-github-slack-5/19.png)

![](./images/workflows-with-aks-github-slack-5/20.png)

![](./images/workflows-with-aks-github-slack-5/21.png)

## Webhooks 테스트

![](./images/workflows-with-aks-github-slack-5/22.png)

![](./images/workflows-with-aks-github-slack-5/23.png)

![](./images/workflows-with-aks-github-slack-5/24.png)

# 마무리
