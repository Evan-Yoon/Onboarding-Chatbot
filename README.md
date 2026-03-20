# Onboarding Chatbot Assistant

React Native 기반의 신규 입사자 온보딩 챗봇 어시스턴트 애플리케이션입니다.

## 🚀 프로젝트 개요

본 프로젝트는 신규 입사자가 회사 생활에 빠르게 적응할 수 있도록 돕는 모바일 애플리케이션입니다. 주요 기능으로 온보딩 체크리스트, AI 챗봇, FAQ 검색, 그리고 업무 가이드가 포함되어 있습니다.

## ✨ 주요 기능

- **온보딩 체크리스트**
  - 단계별(첫째 날, 첫째 주, 첫째 달) 체크리스트 관리
  - 진행 상황 추적 및 완료 표시
  - 최근 완료 항목 히스토리

- **AI 챗봇 어시스턴트**
  - 자연어 처리 기반 질의응답
  - 추천 질문 기능
  - 대화 기록 저장 및 관리

- **FAQ 검색**
  - 회사 생활 관련 자주 묻는 질문 검색
  - 카테고리별 분류

- **업무 가이드**
  - 업무 관련 문서 및 가이드 제공
  - 카테고리별 분류

## 🛠️ 기술 스택

- **프레임워크**: React Native
- **상태 관리**: React Context API
- **내비게이션**: React Navigation
- **UI 라이브러리**:
  - React Native Paper
  - React Native Gesture Handler
- **데이터**: 로컬 JSON 파일

## 📂 프로젝트 구조

```
chatbot-assistant/
├── src/
│   ├── components/      # 재사용 가능한 UI 컴포넌트
│   ├── context/         # 전역 상태 관리 (ChecklistContext)
│   ├── data/            # 정적 데이터 (FAQ, 챗봇, 체크리스트)
│   ├── navigation/      # 앱 내비게이션 설정
│   ├── screens/         # 화면별 컴포넌트
│   └── theme/           # 테마 및 스타일 설정
├── App.js               # 애플리케이션 진입점
└── package.json         # 프로젝트 의존성
```

## 📦 설치 및 실행

### 1. 의존성 설치

프로젝트 디렉토리에서 다음 명령어를 실행하여 필요한 패키지를 설치합니다.

```bash
npm install
```

### 2. 애플리케이션 실행

개발 서버를 시작하여 시뮬레이터 또는 실제 기기에서 앱을 실행합니다.

```bash
npm start
```

## 🎨 디자인 시스템

### 색상 팔레트

- **Primary**: `#6366F1` (보라색)
- **Background**: `#F8F9FC` (밝은 회색)
- **Surface**: `#FFFFFF` (흰색)
- **Text**: `#1F2937` (진한 회색)

### 주요 컴포넌트

- **AppHeader**: 상단 헤더 컴포넌트
- **GreetingSection**: 인사말 및 사용자 정보 표시
- **UrgentMissionCard**: 긴급 업무 알림
- **FeatureGrid**: 기능 바로가기 그리드
- **ChecklistHeroCard**: 체크리스트 개요
- **ChecklistSegmentTabs**: 체크리스트 탭
- **ChecklistProgressCard**: 진행률 카드
- **ChecklistItemList**: 체크리스트 항목 목록
- **ChecklistHelpCard**: 도움말 카드
- **RecentCompletedList**: 최근 완료 항목

## 📝 데이터 구조

### Checklist Data (`src/data/checklistData.js`)

```javascript
[
  {
    key: "firstDay",
    title: "첫째 날",
    items: [
      {
        id: "1",
        title: "[더미 데이터] 회사 계정 로그인",
        completed: false,
      },
      // ...
    ],
  },
  // ...
];
```

### FAQ Data (`src/data/faqData.js`)

```javascript
[
  {
    id: "1",
    category: "회사 생활",
    question: "[더미 데이터] 점심 식사는 어디서 하나요?",
    answer: "[더미 데이터] 1층 구내식당에서 제공됩니다.",
  },
  // ...
];
```

### Chatbot Data (`src/data/chatbotData.js`)

```javascript
{
  suggestions: [
    "[더미 데이터] 첫째 날 해야 할 일은 무엇인가요?",
    "[더미 데이터] 휴가 신청은 어떻게 하나요?",
    // ...
  ],
}
```

## 🤝 기여 가이드

1. **브랜치 생성**: 새로운 기능 개발 시 feature/ 접두사를 사용한 브랜치를 생성합니다.
2. **커밋 메시지**: 커밋 메시지는 영어로 작성하며, 변경 사항을 간략하게 설명합니다.
3. **코드 스타일**: ESLint 규칙을 준수합니다.

## 📄 라이선스

본 프로젝트는 MIT 라이선스를 따릅니다.
