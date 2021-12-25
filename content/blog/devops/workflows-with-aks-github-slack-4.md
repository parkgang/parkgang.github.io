---
title: aks, github, slack으로 워크플로우 구축하기 - 4편 (github 설정)
date: 2021-05-06 19:05:04
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
| `4편` | [github 설정](/devops/workflows-with-aks-github-slack-4)   |
| 5편   | [slack 설정](/devops/workflows-with-aks-github-slack-5)    |
| 6편   | [github action](/devops/workflows-with-aks-github-slack-6) |
| 7편   | [회고](/devops/workflows-with-aks-github-slack-7)          |

# Overview

1. 이전 시간에 어떤 것을 했는지, 앞으로 해야할 것은 어떤 것인지
1. CI/CD 를 통제하기 위해서 PR 승인은 제가 하도록 디자인할 것이다.
1. 이전에 설계한 git flow에 맞도록 branch 보호 정책을 만들 것 이다.

# Organizations 설정

## Organizations 만들기

![](./images/workflows-with-aks-github-slack-4/1.png)

## Organizations 정책 설정

![](./images/workflows-with-aks-github-slack-4/2.png)

![](./images/workflows-with-aks-github-slack-4/3.png)

## Teams 생성 및 Members 추가

![](./images/workflows-with-aks-github-slack-4/4.png)

![](./images/workflows-with-aks-github-slack-4/5.png)

![](./images/workflows-with-aks-github-slack-4/6.png)

# Repositories 설정

## Repositories 생성

![](./images/workflows-with-aks-github-slack-4/7.png)

## 필수 리뷰어 지정

![](./images/workflows-with-aks-github-slack-4/8.png)

## Branch 보호 규칙 설정

![](./images/workflows-with-aks-github-slack-4/9.png)

## Merge Settings

1. `Allow squash merging` 활성화
1. `Allow rebase merging` 활성화
1. `Automatically delete head branches` 활성화
1. 왜 squash, rebase 사용하게 됬는지 설명 및 git graph 첨부

![](./images/workflows-with-aks-github-slack-4/10.png)

![](./images/workflows-with-aks-github-slack-4/11.png)

# teams에 repositories 추가

![](./images/workflows-with-aks-github-slack-4/12.png)

![](./images/workflows-with-aks-github-slack-4/13.png)

![](./images/workflows-with-aks-github-slack-4/14.png)

# 마무리
