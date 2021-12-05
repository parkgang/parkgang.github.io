---
title: k8s의 EXTERNAL-IP는 Azure에서 어떻게 처리될 까?
date: 2021-12-06 05:12:84
category: azure
thumbnail: { thumbnailSrc }
draft: false
---

# Overview

Azure에서 AKS를 사용하면서 문득 이런 궁금증이 생겼다.

> ingress를 통해 외부의 트래픽을 받아오는데 ingress IP은 어디서 생성되었으며 어떻게 Load balancing이 되는거지?

> svc를 LoadBalancer으로 생성하는 경우 IP가 생성되는데 어디서 생성된거지? 해당 IP는 어떻게 Load balancing 된다고 장담할 수 있는거지?

Azure에 k8s cluster를 올려놓고 k8s가 하라는대로 `.yaml` 을 적용하니 원하는대로 동작이 되어서 Azure가 핸들링 한건지 k8s가 핸들링한건지 큰 관심을 안가지고 있었는데 AKS 관련 내용을 정리하다가 갑자기 궁금해져서 간단하게 찾아보고 정리해도록 하겠습니다.

# 리소스 관련이므로 Azure가 할꺼야

IP 생성이랑 Load balancing 이부분은 리소스를 제공하는 Azure만 핸들링할 수 있다고 생각합니다.

그렇다면 어떤 리소스 타입으로 핸들링하느냐를 찾아야하는대 생각보다 쉽게 찾을 수 있었습니다.

# 부하 분산 장치와 공용 IP 주소

AKS를 생성하면 자동으로 `부하 분산 장치` 라는 리소스가 생성됩니다.

또한, ingress를 설치하고 LoadBalancer type svc를 생성하다 보면 리소스 그룹에서 `공용 IP 주소` 라는 것을 쉽게 찾아볼 수 있습니다.

![](./images/how-is-k8s-external-ip-handled-in-azure/1.png)
