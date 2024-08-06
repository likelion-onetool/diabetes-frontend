# 📖 당료병 환자를 위한 건강식 간편 구독서비스, 원툴 README
![KakaoTalk_Photo_2024-08-06-19-53-41](https://github.com/user-attachments/assets/7332f9c8-2554-4fbc-918b-a116b6989d8b)



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

- Front : React, Typescript
- Back-end : Spring Boot, MySQL
- 버전 및 이슈관리 : Github, Github Issues, Github Project
- 협업 툴 : Discord, Notion
- 서비스 배포 환경 : AWS EC2, Docker, Github Actions
- 디자인 : [Figma](https://www.figma.com/login?is_not_gen_0=true&resource_type=team)
- [ERD](https://www.erdcloud.com/d/rqSQ55f4JyqbtkCs5)

<br>

## 2. 채택한 개발 기술과 브랜치 전략

### React, Typescript, styled-component, framer-motion, react-router-dom, react-hook-form, react-query

- React 
    - 컴포넌트화를 통해 추후 유지보수와 재사용성을 고려했습니다.
    - 유저 배너, 상단과 하단 배너 등 중복되어 사용되는 부분이 많아 컴포넌트화를 통해 리소스 절약이 가능했습니다.

- Styled-component, framer-motion
    - props를 이용한 조건부 스타일링을 활용하여 상황에 알맞은 스타일을 적용시킬 수 있었습니다.
    - 빌드될 때 고유한 클래스 이름이 부여되어 네이밍 컨벤션을 정하는 비용을 절약할 수 있었습니다.


- Typescript
    - Javascript에서 생기는 여러 타입오류들을 막기위해 언어를 Typescript로 구현하였습니다.
    - 백엔드에서 response값으로 받아오는 data들의 구조를 정의해서 사용하기 쉽게 하였습니다.

- React-hook-form
    - 백엔드로 제출할 form 처리를 편리하게 하기 위해 이 라이브러리를 사용하였습니다.


- React-router-dom
    - 라우팅 기능 구현을 위해 react-router-dom을 사용하였습니다.


- React-query
    - API요청 최적화, data 캐싱을 위해 react-query를 사용하였습니다.
    - useQuery, useMutation등의 기능을 통해 사용자의 경험을 개선하도록 노력하였습니다.

    
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
    1. 로그인, 회원가입, 아이디&비밀번호 찾기
    2. 유저 프로필 페이지
    3. 장바구니, 결제 관련 페이지
    4. FAQ 페이지
  
- **기능**
    1. 백엔드와 API통신
    2. react-query를 이용한 최적화
    3. 페이지별 기능 로직 구현
    
<br>
    
### 👻조형준

- **UI**

- **기능**

<br>

### 😎윤성원
- **기능**
  로그인, 회원가입, 검색 
- **그 외**
  서버 배포, CI/CD
<br>

### 🐬이동훈

- **기능**
  
- **그 외**

### 😺정다영
- **기능**
  상품CRUD, 회원CRUD
  
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
- 로그인, 로그아웃, 회원가입, 아이디&비밀번호 찾기
-  유저 프로필 조희, 수정, 탈퇴, 구매했던 아이템 조회
- 아이템 검색, 카테고리별 아이템 조회, pagination
- 아이템 장바구니에 담기, 장바구니에서 삭제
- 아이템 구매
- 자주묻는질문 페이지

