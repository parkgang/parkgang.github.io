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
| 7편   | [회고](/devops/workflows-with-aks-github-slack-7)          |

# Overview

이전 챕터에서 말한 blueprint에 맞게 인프라를 생성하도록 하겠습니다.

Azure의 AKS(Azure Kubernetes Service) 를 중점으로 사용할 것인데 클라우드 환경을 사용하므로 우선 가격에 주의해야겠죠?

저는 회사에서 `Visual Studio Enterprise` 구독으로 Azure에 월간 \$150 (약 ₩168,698) 개별 크레딧이 제공됩니다. 해당 금액을 최대한 활용하여 인프라를 생성하려고 합니다.

# 필요한 것들이 뭐가 있지? (비용 계산)

서비스를 운영하기 위해서 필요한 것들을 나열하면서 가격을 어림잡아 계산해 보았습니다.

> 필요한 리소스를 추려서 월 단위로 [Azure 가격 계산기](https://azure.microsoft.com/ko-kr/pricing/calculator/) 를 사용하여 계산하였습니다.

| 리소스        | 타입        | 용도 및 비고                                                                                                                                                                                                                        | 가격     |
| ------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| AKS           | k8s         | 1. 안정적인 롤링 업데이트 등 k8s 운영을 위해 Node를 3개로 잡고 컴퓨팅 파워를 줄이는 방향으로 설정되었습니다. <br/> 2. B2s: vCPU 2개, 4GB RAM, 8GB 임시 스토리지, ₩61.695(대략) / 시간 <br/> 3. Node 3개 사용 기준 ₩135,112.93 <br/> | ₩135,000 |
| Azure Diks    | 정적 저장소 | 1. mysql replication 을 위해 사용 됨 <br/> 2. 표준 SSD LRS <br/> 3. E3: 16 GiB, 500 프로비저닝된 IOPS, 60 프로비저닝된 MB/초, ₩1,349.580/월 <br/>                                                                                   | ₩1,500   |
| Azure Storage | 정적 저장소 | 1. 공식문서의 spec에 맞게 100gb 이라면 약 ₩7,495.23 <br/> 2. 가격이 저렴해서 일단은 10gb으로 시작하고 올리는 것을 전략으로 설정 <br/> 3. 10gb를 사용하면 월 약 ₩814 소요됨 <br/>                                                    | ₩1,000   |
| App Insight   | 모니터링    | 따로 가격이 없는 듯                                                                                                                                                                                                                 | ₩0       |
| Dashboard     | 모니터링    | 따로 가격이 없는 듯                                                                                                                                                                                                                 | ₩0       |

이외 AKS를 생성하면서 부가적으로 따라오는 DNS, IP, Load Balancer 등이 있을 것이며 실제로 운영하면서 리소스양과 옵션이 더 늘나고 줄어들 수 있을 것 입니다.

대략적으로 도합 ₩140,000 정도 산출되었는데 사실 크래딧에 비해서 많이 여유가 없는 편입니다. 예상하지 못한 곳에서 비용이 많이 청구될 수도 있고 예상하지 못한 리소스를 추가할 수도 있기 때문입니다.

하지만 사이드 프로젝트 성격이 강하여 만약에 금액이 부족한 상황이 온다면 엔지니어가 잠자는 시간과 같은 IDLE 상태에 서버를 down 시켜놓을려고 합니다.

> 일단은 한번이라도 운영을 해보면서 경험을 쌓아야할 꺼 같아요!

# Hi

인프라를 생성해 봅시다.

1. azure resource group 생성
2. aks 생성
   1. http 컨트롤러 사용으로 생성
   2. Azure Monitor 사용 안함 (돈이 많이 들어감)
   3. 이외의 값은 동적으로 변경이 가능함
3. azure cli 설치 후 로그인
4. 클러스터 접속
5. ingress 생성
   1. [해당 문서를 참고합니다.](https://docs.microsoft.com/ko-kr/azure/aks/ingress-tls)
   1. aks가이드에 있는 yaml이 레거시라서 모던으로 교체했습니다.
   1. https 활성화
   1. 이메일 주소 변경
   1. 삭제하게 편하게 테스트 컨테이너는 `test` namespace에 배치함
      1. 주의, service endpoint는 ns에 맞게 설정되므로 ingress의 path도 수정해줘야합니다.
   1. ingress apply시 open된 nginx ip를 입력한 DNS 정보를 기입합니다.
6. 네임 스페이스 생성
7. 스토리지 클레스 생성
   1. azure files를 위함
