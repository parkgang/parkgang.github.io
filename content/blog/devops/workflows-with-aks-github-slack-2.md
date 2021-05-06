---
title: aks, github, slack으로 워크플로우 구축하기 - 2편 (blueprint)
date: 2021-05-06 19:05:02
category: devops
thumbnail: { thumbnailSrc }
draft: false
---

# Index

# Hi

1. 클라우드 네이티브 이므로 가격에 주의하도록 합니다.

# 비용 계산

1.  사용 가능한 가격
    1. ₩168,698
2.  AKS
    1. B2S: 2 vCPU, 4GB RAM, 8GB 임시 스토리지, ₩58.482(대략) /시간 _ vm2 _ 한달
    2. ₩85,383.43
3.  App Insight
    1. 따로 가격이 없는 듯
4.  Dashboard
    1. 따로 가격이 없는 듯
5.  azure storage
    1. 공식문서의 spec에 맞게 100gb
    2. ₩7,495.23

# blueprint

1. [인프라 구성도를 그립니다.](https://github.com/dhslrl321/Finx-App)
2. 템플릿은 최대한 helm을 적용합니다.
3. namespace로 환경에 맞게 구분합니다.
4. ingress 설정시 `.yaml` 으로 처리 안하는 것도 모두 iac에 맞게 export 하도록 합니다.
5. StorageClass 용량 설계
6. Mysql 접속 계정 설정
7. Ingress 도메인 설계
8. replicat 개수
9. ARM template를 export 합니다.
   1. 인수인계 및 다른 환경으로 프로비저닝을 위함입니다.
10. 리소스 명칭
    1. 리소스 그룹 이름
    2. k8s cluster 이름
    3. acr 이름
       1. image 이름
    4. 네임 스페이스
    5. 워크로드 리소스 네이밍 컨벤션

# use case

1. aks (아래의 set가 qa, prod로 프로비저닝)
   1. 1 \* next server
   2. 3 \* gin or nest or express server
   3. 1 \* redis server
   4. 2 \* mysql server
   5. 스토리지
      1. config
      2. 정적, 이미지, 비디오
