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

# Hi

1. github org 생성
2. 팀 생성 및 맴버 추가
   1. 전략적으로 하나의 팀으로 관리하는게 편할 꺼 같음
   2. Yamu
3. 리포 생성
   1. 기본적으로 `README.md` 를 포함하도록 합니다. 그래야 기본 branch가 main으로 잡힙니다.
   1. infrastructure-as-code
   1. front-server
   1. oauth-server
   1. api-gateway
   1. mock-service
   1. todo-service
4. hello, world test 코드 작성
5. docker file 작성
6. 빌드 후 컨테이너 레지스터리로 push
   1. 깃허브 컨테이너 레지스터 token 확보
   1. org에 package 기능 사용하는거 활성화
   1. 컨테이너 레지스터리 기본 값을 public으로 설정합니다.
      1. 버그인지는 모르겠지만 public으로 바꿔 계속 private가 기본으로 설정됩니다.
   1. 빌드 명령어
      > 이미지 이름에 `.`은 사용하지 않습니다. (사진을 첨부하고) 깃허브에서 정상적으로 페이지를 불러오지 못합니다.
      ```shell
      docker build -t ghcr.io/belf-kr/front-server/nextjs:v0.1.0 .
      docker push ghcr.io/belf-kr/front-server/nextjs:v0.1.0
      ```
7. k8s에서 ingress와 함께 정상적으로 동작하는지 확인
   1. k8s를 위한 yaml 작성
   1. apply 후 ingress에 달아서 접속 테스트
8. 브랜치 보호 규칙 생성
   1. main
   2. release
   3. feature/사람 이름
9. 브랜치 보호 규칙 설정 (main, release)
   > 보호 규칙의 선택 박스의 경우 notion의 사진을 그대로 사용하도록 합니다.
   3. 팀 단위로 기본 리뷰어 설정해야합니다.
   4. 필수 리뷰어
      1. 필수 리뷰어 지정하는 파일 추가
         ```
         * @parkgang ruddms936@naver.com
         ```
   5. 팀에 해당 repo를 추가하고 쓰기 권한으로 변경
      1. 그래야 일반 팀원은 필수 리뷰어를 거치도록 디자인 됨
10. 이외
    5. 스쿼시 병합만 가능 (Squash and merge)
       1. 승인할 때 코멘트는 이슈 쫓아가면 상관 없지만 이름은 잘 작성하기
       2. 그래야지 pr 단위로 롤백이 쉬움
       3. 때문에 하나의 Pull Request는 배포 가능한 단위여야 합니다. 또한 사이드이펙트를 최소화하기 위하여 작으면 작을수록 좋습니다.
       4. db 접속 정보과 같이 중요한 부분은 GitHub Secrets 기능을 활용
11. 추가적으로 설정한 github 정책을 사진으로 첨부합니다.
    1. 머지시 자동으로 브랜치 삭제
    2. 스쿼시 병합만 허용
12. 추가적으로 깃허브 프로젝트 설정한 것을 사진으로 첨부합니다.
