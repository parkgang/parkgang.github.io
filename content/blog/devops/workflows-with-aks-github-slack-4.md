---
title: aks, github, slack으로 워크플로우 구축하기 - 4편 (github 설정)
date: 2021-05-06 19:05:04
category: devops
thumbnail: { thumbnailSrc }
draft: false
---

# Hi

1. github org 생성
2. 팀 생성
   1. 전략적으로 하나의 팀으로 관리하는게 편할 꺼 같음
   2. Yamu
3. 리포 생성
   1. infrastructure-as-code
   2. front-server
   3. oauth-server
   4. api-gateway
   5. mock-service
   6. todo-service
4. 브랜치 정책
   1. main
   2. release/\*
   3. feature/사람 이름
5. 권한 부여
   1. 필수 리뷰어
   2. branch보호 (main, release)
   3. 컨테이너 레지스터리 기본 값을 public으로 설정합니다.
   4. 팀 단위로 기본 리뷰어 설정
   5. 스쿼시 병합만 가능 (Squash and merge)
      1. 승인할 때 코멘트는 이슈 쫓아가면 상관 없지만 이름은 잘 작성하기
      2. 그래야지 pr 단위로 롤백이 쉬움
      3. 때문에 하나의 Pull Request는 배포 가능한 단위여야 합니다. 또한 사이드이펙트를 최소화하기 위하여 작으면 작을수록 좋습니다.
      4. db 접속 정보과 같이 중요한 부분은 GitHub Secrets 기능을 활용
