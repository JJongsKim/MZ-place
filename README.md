# 🌱 라이프스타일 개선 서비스 `서울산책` 🌱

## [프로젝트 소개]

서울특별시 2030 세대의 여가활동 현황은 실내 활동 위주의 여가활동이 절반 이상이지만 희망 여가 활동은 야외 활동이 우세하다는 설문 결과가 있습니다.  
또한 움직이지 않고 실내에서 SNS만 하는 생활 패턴으로 인해, 우울증 비율이 급격하게 높아진 것을 알 수 있습니다.  
즉, 건강한 생활 습관을 가질 수 있도록 도움이 필요하며 야외 활동을 자주 할 수 있도록, 취미를 만들 수 있도록 하는 것이 중요하다고 느꼈습니다.  

**2030 세대들의 니즈는 다음과 같지 않을까?**
- 실외활동 희망
- 재정상태로 인한 스트레스
- 우울감 해소

### 우리 프로젝트의 방향성 💚
- 값싸며 재미있는 실외활동을 **한 눈에 보이도록 소개**하는 프로젝트를 만들어보자!
- 개인 취향에 따라 **추천 장소가 다르도록 설정**하는 프로젝트를 만들어보자!

서울산책의 백엔드 레포지토리가 궁금하시다면 [여기로 들어오세요](https://github.com/seoyun-dev/MZplace)🙌🏻

## [팀원 소개]

![팀원소개](https://github.com/JJongsKim/Seoul-Walk/assets/81777778/08da5de7-81da-4264-bada-2aa5e207bcf9)

## [프로젝트 실행 방법]

> 🚨 해당 프로젝트는 env를 사전에 필요로 합니다.

```
yarn install

⬇️

yarn start
```

## [프로젝트 바로 보러가기]

## [Branch Naming Convention]

| 머릿말  | 설명                                |
| ------- | ----------------------------------- |
| main    | 메인 브랜치                         |
| feat    | 기능 단위 구현 브랜치               |
| style   | 프로젝트 UI 퍼블리싱 브랜치         |
| fix     | 프로젝트 수정 건에 대한 처리 브랜치 |
| setting | 세팅용 브랜치                       |

## [Commit Convention]

| 머릿말   | 설명                         |
| -------- | ---------------------------- |
| Feat     | 기능 단위 구현               |
| Style    | 프로젝트 UI 퍼블리싱         |
| Fix      | 프로젝트 수정 건에 대한 처리 |
| Refactor | 코드 리팩토링                |
| Docs     | 문서 작업                    |
| Chore    | 기타 작업                    |

## [Tech Stack]

🔥 **개발 환경** : <img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"> <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"> <img src="https://img.shields.io/badge/Github-181717?style=flat&logo=Github&logoColor=white"> <img src="https://img.shields.io/badge/Yarn-2C8EBB?style=flat&logo=Yarn&logoColor=white">

🔥 **주요 스택** : <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white">&nbsp;

🔥 **스타일링 도구** : <img src="https://img.shields.io/badge/styled components-DB7093.svg?&style=flat&logo=styled-components&logoColor=white">

🔥 **상태 관리** : <img src="https://img.shields.io/badge/Redux Toolkit-764ABC?style=flat&logo=Redux&logoColor=white"/> <img src="https://img.shields.io/badge/React Query-FF4154?style=flat&logo=React Query&logoColor=white"/>

🔥 **배포** : <img src="https://img.shields.io/badge/Github Actions-2088FF?style=flat&logo=Github Actions&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon EC2-FF9900?style=flat&logo=Amazon EC2&logoColor=white"/> <img src="https://img.shields.io/badge/Amazon S3-569A31?style=flat&logo=Amazon S3&logoColor=white"/> <img src="https://img.shields.io/badge/Route53-8C4FFF?style=flat&logo=Amazon Route 53&logoColor=white"/> <img src="https://img.shields.io/badge/Code Deploy-232F3E?style=flat&logo=Amazon AWS&logoColor=white"/>

🔥 **기타** : <img src="https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=ESLint&logoColor=white"/> <img src="https://img.shields.io/badge/Prettier-F7B93E?style=flat&logo=Prettier&logoColor=white"/>

## [폴더 구조]

폴더 구조는 메인이 되는 폴더들 위주로 표시해두었습니다.

```
├── 📂 public
│
├── 📂 src
│   ├── 📂 application
│   ├── 📂 assets
│   ├── 📂 images
│   │
│   ├── 📂 store
│   │    └── 📂 reducers
│   │
│   ├── 📂 hooks
│   ├── 📂 types
│   ├── 📂 infra
│   │
│   ├── 📂 components
│   │    └── 📂 common
│   │    └── 📂 layout
│   │    └── 📂 HOC
│   │    └── 📂 ...
│   ├── 📂 pages
│   │    └── 📂 Auth
│   │    └── 📂 MainPage
│   │    └── 📂 SearchPage
│   │    └── 📂 LikePage
│   │    └── 📂 MyPage
│   │    └── 📂 DetailPage
│   │    └── 📂 ExplainPage
│   │
│   ├── 📂 styles
│   └── 📝 App.tsx, index.tsx, ...
│
├── 🛠 eslint, prettier ...
│
└── 🛠 package.json, README.md, gitignore ...

```

## [프로젝트의 주요 기능]

**[Places]**
### ⚡️ TOP20 장소 목록
- 가장 많은 좋아요가 눌린 장소를 내림차순 순서대로 20개까지 표시

### ⚡️ 카테고리별 장소 목록
- 카테고리별 고유한 Id를 이용하여 카테고리별 장소를 조회할 수 있습니다.

### ⚡️ 거리별 추천 장소 목록
- 첫 거리별 추천 페이지로 들어가면, `현 위치`로 먼저 디바이스 위치를 조회하여 사용자의 위치를 표시
- 드롭다운으로 서울특별시의 자치구를 따로 선택하여 조회 가능
- 지도에 표시되는 크기만큼 `북동쪽-남서쪽` 위도 경도를 넘겨 필요한 장소 목록을 받아옵니다.
- 너무 많은 데이터를 받아오지 않기 위해 지도의 줌 레벨을 일정 레벨 이하로 받아오도록 정해두었으며, 장소가 없는 경우 토스트 알림을 띄웁니다.

### ⚡️ 맞춤 필터 장소 목록
- 유료/무료 여부, 활동 취향, 활동 지역 등에 유저가 선택한 정보를 넘겨 장소 조회

### ⚡️ 코스 목록
- 산책 코스를 가진 장소 목록들을 표시

### ⚡️ 코스 상세 정보
- 장소 상세 페이지와 다르게 코스 상세 페이지를 다르게 표현하기 위해 따로 받아옵니다.
- 코스 내부에 어떤 장소들이 있는지 보여주며, 지도로 코스가 어떻게 이루어져있는지 한 눈에 볼 수 있습니다.

### ⚡️ 장소 상세 정보
- 장소명, 장소 주소와 위치를 표시하는 지도를 띄웁니다.
- 전화번호/홈페이지 주소/기타 정보/클립보드 복사 가능

### ⚡️ 찜 기반 장소 목록 페이지 [ML]
- 유저가 찜을 누른 장소들을 기반으로, UBCF + IBCF 알고리즘을 통해 맞춤 장소를 추천합니다.
- 유사도 행렬을 계산하기 때문에 다른 API보다 시간이 걸리는 편이며, 해당 페이지에서의 로딩창은 다른 로딩과 다르게 멘트를 추가했습니다.

**[Hearts]**
### ⚡️ 찜 추가

### ⚡️ 찜 취소

### ⚡️ 찜 조회 목록

**[User]**
### ⚡️ 홈페이지 자체 로그인
- 아이디, 비밀번호 Input 창이 모두 입력되었는지 확인 후 로그인 동작을 넘깁니다.

### ⚡️ 홈페이지 자체 회원가입
- 회원가입에 필요한 Input 창이 모두 입력되었는지 확인 후 회원가입 동작을 넘깁니다.

### ⚡️ 카카오 소셜 로그인

### ⚡️ 회원 탈퇴
- 회원 탈퇴와 같이 예민한 작업은 한 번 더 확인 모달을 띄운 후, 유저가 원한다면 탈퇴를 진행하도록 했습니다.

## [프로젝트 UI 확인하기]
[서울산책 최종시연영상(배속ver) 보러오세요!](https://youtu.be/bkNFukoFNGQ)🙌🏻



