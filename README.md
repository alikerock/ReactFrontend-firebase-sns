# 나만의 SNS 서비스를 완성한다! AI 활용 React·Firebase 개발 프로젝트

Figma 디자인을 기반으로 React 프론트엔드를 구현하고, Firebase를 연동하여 실제 데이터가 동작하는 **SNS 서비스를 단계적으로 완성하는 실습 프로젝트**입니다.

Figma Make와 AI 도구를 활용하여 초기 UI를 빠르게 구현한 뒤, 생성된 코드를 분석하고 리팩토링하면서 실제 서비스 개발에 필요한 기능을 하나씩 추가합니다.

각 차시가 완료된 시점의 코드는 **GitHub Tag와 Release**로 관리합니다.

---

## 📌 과정 개요

최근 AI 기반 개발 도구를 활용하면 디자인을 분석하고 React 코드를 빠르게 생성할 수 있습니다.

하지만 AI가 생성한 코드만으로 실제 서비스를 완성하기는 어렵습니다.

이 과정에서는 **Figma → React → Firebase → 테스트 → 배포**의 전체 개발 과정을 하나의 SNS 프로젝트를 통해 경험합니다.

```text
Figma 디자인
     ↓
Figma Make
     ↓
React UI 생성
     ↓
React 코드 분석 및 리팩토링
     ↓
Firebase 연동
     ↓
Authentication
     ↓
Firestore
     ↓
Storage
     ↓
SNS 기능 구현
     ↓
테스트 및 최적화
     ↓
배포
```

단순히 AI에게 코드를 생성하도록 요청하는 것에 그치지 않고, **생성된 코드를 개발자가 분석하고 수정하여 실제 서비스로 발전시키는 과정**에 초점을 맞춥니다.

---

## 🎯 학습 목표

이 과정을 완료하면 다음 내용을 이해하고 구현할 수 있습니다.

* Figma 디자인을 분석하여 웹 서비스의 화면 구조를 파악할 수 있습니다.
* Figma Make를 활용하여 React 기반 UI를 생성할 수 있습니다.
* AI가 생성한 React 프로젝트의 구조와 코드를 분석할 수 있습니다.
* 컴포넌트와 Props를 활용하여 재사용 가능한 UI를 구성할 수 있습니다.
* React Router를 이용하여 SPA의 페이지 이동을 구현할 수 있습니다.
* Firebase Authentication을 이용하여 사용자 인증을 구현할 수 있습니다.
* Cloud Firestore를 이용하여 데이터를 저장하고 조회할 수 있습니다.
* Firebase Storage를 이용하여 이미지 파일을 관리할 수 있습니다.
* React와 Firebase를 이용하여 게시글 CRUD 기능을 구현할 수 있습니다.
* 실제 사용자 정보를 기반으로 SNS 기능을 구현할 수 있습니다.
* 테스트 및 코드 검증을 거쳐 서비스를 배포할 수 있습니다.

---

## 👨‍💻 학습 대상

다음과 같은 학습자에게 적합합니다.

* HTML, CSS, JavaScript의 기본 문법을 학습한 분
* React의 기본적인 컴포넌트 구조를 이해하고 있는 분
* React 프로젝트를 실제 서비스 형태로 발전시켜 보고 싶은 분
* Firebase를 활용한 백엔드 연동을 경험하고 싶은 분
* Figma 디자인을 React 코드로 구현하는 과정을 경험하고 싶은 분
* Figma Make 등 AI 기반 개발 도구의 실무 활용 방법을 배우고 싶은 분
* 프론트엔드 포트폴리오 프로젝트를 제작하고 싶은 분

---

## 🛠 주요 기술

| 분야              | 기술                      |
| --------------- | ----------------------- |
| Design          | Figma                   |
| AI Development  | Figma Make              |
| Frontend        | React                   |
| Build Tool      | Vite                    |
| UI              | Material UI             |
| Routing         | React Router            |
| Backend Service | Firebase                |
| Authentication  | Firebase Authentication |
| Database        | Cloud Firestore         |
| File Storage    | Firebase Storage        |
| Version Control | Git / GitHub            |
| Test            | Vitest                  |
| CI/CD           | GitHub Actions          |
| Deployment      | Firebase Hosting        |

---

# 📚 차시별 학습 내용

각 차시의 **Release**에서는 해당 차시의 학습 내용과 완료 시점의 전체 소스 코드를 확인할 수 있습니다.

> 아직 진행하지 않은 차시의 Release 링크는 차시 완료 후 순차적으로 활성화됩니다.

| 차시   | 학습 내용                           | 소스                                                                                           |
| ---- | ------------------------------- | -------------------------------------------------------------------------------------------- |
| 01차시 | 프론트엔드 서비스와 Firebase 이해          |                                                                                    |
| 02차시 | React 프로젝트와 개발 환경 구성            |                                                                                    |
| 03차시 | Figma 디자인 분석과 화면 구조 설계          |                                                                                    |
| 04차시 | Figma Make를 활용한 React UI 구현     | [📖 설명 및 소스](https://github.com/alikerock/ReactFrontend-firebase-sns/releases/tag/lesson-04) |
| 05차시 | AI 생성 React 코드 분석과 프로젝트 구조 정리   | Release 준비                                                                                   |
| 06차시 | Firebase 프로젝트 생성과 React 연동      | Release 준비                                                                                   |
| 07차시 | Firebase Authentication 회원가입 구현 | Release 준비                                                                                   |
| 08차시 | 로그인·로그아웃과 인증 상태 관리              | Release 준비                                                                                   |
| 09차시 | 사용자 프로필 데이터와 Firestore 연동       | Release 준비                                                                                   |
| 10차시 | Firestore 데이터 구조와 게시글 등록        | Release 준비                                                                                   |
| 11차시 | 게시글 목록 조회와 데이터 렌더링              | Release 준비                                                                                   |
| 12차시 | 게시글 상세 조회와 동적 라우팅               | Release 준비                                                                                   |
| 13차시 | 게시글 수정·삭제와 CRUD 완성              | Release 준비                                                                                   |
| 14차시 | Firebase Storage 이미지 업로드        | Release 준비                                                                                   |
| 15차시 | 사용자별 게시글과 마이페이지 구현              | Release 준비                                                                                   |
| 16차시 | 좋아요 기능 구현                       | Release 준비                                                                                   |
| 17차시 | 댓글 기능 구현                        | Release 준비                                                                                   |
| 18차시 | 예외 처리와 사용자 피드백 UI 개선            | Release 준비                                                                                   |
| 19차시 | 테스트 및 코드 품질 검증                  | Release 준비                                                                                   |
| 20차시 | 최종 검수와 Firebase Hosting 배포      | Release 준비                                                                                   |

---

# 🧭 프로젝트 개발 흐름

## 01 ~ 04차시 : UI 설계 및 구현

Figma 디자인을 분석하고 Figma Make를 활용하여 React 기반 SNS 화면을 구현합니다.

이 단계에서는 실제 서버 데이터를 연결하지 않고 **UI와 페이지 구조를 먼저 완성**합니다.

---

## 05차시 : AI 생성 코드 분석 및 정리

Figma Make가 생성한 코드를 직접 분석합니다.

* 프로젝트 실행 구조 확인
* JSX 기반 파일 구조 확인
* 중복 및 미사용 파일 점검
* pages / components 역할 분석
* Props 데이터 전달 확인
* Firebase 연동을 고려한 구조 정리

AI가 생성한 코드를 그대로 사용하는 것이 아니라 **개발자가 코드를 이해하고 판단하는 과정**을 경험합니다.

---

## 06 ~ 09차시 : Firebase와 사용자 인증

React 프로젝트에 Firebase를 연결하고 사용자 기능을 구현합니다.

```text
React
   ↓
Firebase SDK
   ↓
Authentication
   ↓
사용자 인증
   ↓
Firestore 사용자 정보
```

회원가입, 로그인, 로그아웃 및 사용자 프로필을 구현하면서 프론트엔드와 백엔드 서비스가 연결되는 과정을 학습합니다.

---

## 10 ~ 15차시 : Firestore와 게시글 CRUD

SNS 서비스의 핵심인 게시글 기능을 구현합니다.

```text
Create
  게시글 등록

Read
  게시글 목록 / 상세

Update
  게시글 수정

Delete
  게시글 삭제
```

Firestore를 활용하여 실제 데이터를 저장하고 React 화면에 렌더링합니다.

Firebase Storage를 연결하여 게시글 이미지 업로드도 구현합니다.

---

## 16 ~ 17차시 : SNS 인터랙션 구현

사용자가 게시글과 상호작용할 수 있는 기능을 구현합니다.

* 좋아요
* 좋아요 상태 표시
* 댓글 등록
* 댓글 조회
* 사용자별 데이터 처리

이를 통해 단순 CRUD 서비스를 **사용자 간 상호작용이 가능한 SNS 서비스**로 발전시킵니다.

---

## 18 ~ 20차시 : 서비스 완성 및 배포

서비스 완성도를 높이기 위한 마무리 작업을 진행합니다.

```text
예외 처리
   ↓
사용자 피드백
   ↓
테스트
   ↓
코드 검증
   ↓
Build
   ↓
Deploy
```

최종적으로 프로젝트를 빌드하고 Firebase Hosting을 이용하여 웹에 배포합니다.

---

# 🔖 차시별 소스 관리

이 프로젝트는 하나의 프로젝트가 차시별로 발전하는 구조입니다.

`main` 브랜치는 **가장 최근까지 진행된 코드**를 유지하고 각 차시의 완료 상태는 Git Tag로 보관합니다.

```text
main
 │
 ● 04차시 완료
 │  └─ lesson-04
 │
 ● 05차시 완료
 │  └─ lesson-05
 │
 ● 06차시 완료
 │  └─ lesson-06
 │
 ● 07차시 완료
 │  └─ lesson-07
 │
 ▼
최신 강의 코드
```

---

## 💾 특정 차시 코드 실행하기

저장소를 Clone합니다.

```bash
git clone https://github.com/alikerock/ReactFrontend-firebase-sns.git

cd ReactFrontend-firebase-sns
```

원하는 차시의 Tag로 이동합니다.

예를 들어 4차시 코드를 확인하려면:

```bash
git checkout lesson-04
```

패키지를 설치하고 프로젝트를 실행합니다.

```bash
npm install
npm run dev
```

다시 최신 강의 코드로 돌아가려면:

```bash
git checkout main
```

---

# 📦 GitHub Release 활용

각 차시가 완료되면 다음 형식의 Tag와 Release가 추가됩니다.

```text
lesson-04
lesson-05
lesson-06
...
lesson-20
```

Release 페이지에서는 다음 내용을 확인할 수 있습니다.

* 해당 차시 학습 내용
* 주요 구현 기능
* 프로젝트 진행 상태
* 다음 차시에서 구현할 내용
* 해당 차시 완료 시점의 Source code

따라서 학습 중 현재 코드와 강의 코드가 달라졌다면 **해당 차시의 Release를 기준으로 코드를 비교**해 보세요.

---

## ⚠️ 학습 시 참고사항

본 프로젝트는 하나의 SNS 서비스를 차시별로 발전시키는 방식으로 진행합니다.

따라서 이전 차시의 결과물이 다음 차시의 시작점이 됩니다.

코드가 정상적으로 동작하지 않는 경우 먼저 해당 차시의 Release 소스와 자신의 코드를 비교하고, 이전 차시까지 정상적으로 구현되었는지 확인하는 것을 권장합니다.

또한 Firebase 설정 정보와 API Key 등 환경별 설정값은 강의 소스와 다를 수 있으므로 자신의 Firebase 프로젝트 설정을 사용해야 합니다.

---

## 🚀 최종 결과물

20차시까지 학습을 완료하면 다음 기능을 갖춘 React + Firebase 기반 SNS 서비스를 완성합니다.

* 사용자 회원가입 / 로그인 / 로그아웃
* 사용자 프로필 관리
* 게시글 등록 / 조회 / 수정 / 삭제
* 이미지 업로드
* 사용자별 게시글 관리
* 좋아요
* 댓글
* 인증 상태 관리
* 예외 처리 및 사용자 피드백
* 테스트 및 코드 검증
* 웹 서비스 배포

**Figma 디자인에서 시작하여 AI 코드 생성, React 프론트엔드 개발, Firebase 백엔드 연동, 테스트와 배포까지 하나의 프로젝트로 경험하는 것을 목표로 합니다.**
