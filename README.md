# 📖 당료병 환자를 위한 건강식 간편 구독서비스, 원툴 README
[원툴_세종대.pdf](https://github.com/user-attachments/files/16509744/_.pdf)


- 배포 URL : http://www.onetool.co.kr
(회원가입이 가능합니다.)

<br>

## 프로젝트 소개

- 당뇨병 환자를 위한 간편식 구매 서비스
- 대한민국 전단계 당뇨환자는 1500만 명 시대입니다.
- 원툴은 당뇨의 식사관리를 위한 나트륨, 단백질, 열량 맞춤식 구매 서비스이다.
- 현재 총 20개의 간편식으로, 일주일 5끼 × 4주간 직장인의 하루 한끼 당뇨관리를 돕는다.

<br>

## 팀원 구성

<div align="center">

| **강인권** | **조형준** | **윤성원** | **이동훈** | **정다영** |
| :------: |  :------: | :------: | :------: | :------: |
| [<img src="https://avatars.githubusercontent.com/u/105264785?v=4" height=150 width=150> <br/> @tnqkr3494](https://github.com/tnqkr3494) | [<img src="https://avatars.githubusercontent.com/u/157940718?v=4" height=150 width=150> <br/> @chocheeko](https://github.com/chocheeko) | [<img src="https://avatars.githubusercontent.com/u/63222221?v=4" height=150 width=150> <br/> @mete0rfish](https://github.com/mete0rfish) | [<img src="https://avatars.githubusercontent.com/u/123933574?v=4" height=150 width=150> <br/> @LEEDONGH00N](https://github.com/LEEDONGH00N) | [<img src="https://avatars.githubusercontent.com/u/92675692?v=4" height=150 width=150> <br/> @day024](https://github.com/day024) |

</div>

<br>

## 1. 개발 환경

- Front : HTML, React, Typescript
- Back-end : Spring Boot, MySQL
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : AWS EC2, Docker, Github Actions
- 디자인 : [Figma](https://www.figma.com/login?is_not_gen_0=true&resource_type=team)
- [ERD](https://www.erdcloud.com/d/rqSQ55f4JyqbtkCs5)

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, styled-component

- React
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.
- styled-component
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.
    - S dot naming을 통해 일반 컴포넌트와 스타일드 컴포넌트를 쉽게 구별하도록 했습니다.
    
### Github Actions
- CI/CD 제공 툴 중 Jenkins과 Github Actions 중 선택하였습니다.
- Jenkins와 달리 별도의 구축이 필요없고 속도가 빠릅니다.

### Docker
- Spring 프로젝트를 빌드할 때, 리눅스와 윈도우 간의 이식 문제를 해결하기 위해 Docker를 사용했습니다.
- Docker를 통해 Spring 프로젝트를 이미지로 만들고, docekrhub를 이용하여 ec2에 이미지를 푸시했습니다.

### 브랜치 전략

- 기업 레포지토리에서 각 개인 fork 레포지토리를 만들어 개인 레포지토리에서 개발을 합니다.
- 그 후, Pull Request를 통해 프로덕션 코드에 반영합니다.
- Github Flow를 이용하여 dev 브랜치에서 기능별 구현 후, 코드리뷰를 통해 최종적으로 프로덕션 코드에 반영합니다.

<br>

## 4. 역할 분담

### 🍊강인권

- **UI**
  
- **기능**
    
<br>
    
### 👻조형준

- **UI**

- **기능**

<br>

### 😎윤성원
- **기능**

- **그 외**

<br>

### 🐬이동훈

- **기능**
  
- **그 외**

### 😺정다영
- **기능**
  
- **그 외**
<br>

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 24.04 ~ 24.08
- UI 구현 : 24.06 ~ 24.08
- 기능 구현 : 24.06 ~ 24.08

<br>

### 작업 관리

- GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다.
- 주간회의를 진행하며 작업 순서와 방향성에 대한 고민을 나누고 노션 회의록에 기록했습니다.

<br>

## 6. 서비스 제공 기능

