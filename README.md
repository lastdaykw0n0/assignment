# IoTrust 프론트엔드 실기 과제 - 디센트 Discovery 페이지

## 📋 프로젝트 개요

디센트 모바일 앱의 Discovery 메인 화면을 구현한 프로젝트입니다.

다음 세 가지 주요 기능을 포함합니다:

1. **배너 슬라이더**: 가로 스크롤 슬라이드 및 CTA 버튼
2. **즐겨찾기 리스트**: 삭제 기능 및 확인 모달
3. **Web3 서비스 리스트**: 조건부 필터링, 무한 스크롤, 검색 기능

## 🛠️ 사용한 기술 스택

### Core

- **React 19.2.0** - UI 라이브러리
- **TypeScript 5.9.3** - 타입 안정성
- **Vite 7.2.2** - 빌드 도구 및 개발 서버

### 상태 관리 & 데이터 페칭

- **@tanstack/react-query 5.90.7** - 서버 상태 관리 및 데이터 페칭
  - Infinite Query를 사용한 무한 스크롤 구현
  - Optimistic Update를 활용한 즐겨찾기 삭제 처리
- **@tanstack/react-virtual 3.13.12** - 가상 스크롤링 라이브러리 (설치되어 있으나 현재 미사용)

### UI & 스타일링

- **CSS Modules** - 컴포넌트 스코프 스타일링
- **react-i18next 16.2.4** - 다국어 지원 (한국어/영어)

### 라우팅

- **react-router-dom 7.9.5** - 클라이언트 사이드 라우팅

### HTTP 클라이언트

- **axios 1.13.2** - HTTP 요청

### 개발 도구

- **ESLint** - 코드 품질 관리
- **TypeScript ESLint** - TypeScript 린팅

## 🏗️ 프로젝트 아키텍처

본 프로젝트는 **FSD (Feature-Sliced Design)** 구조를 기반으로 설계하였습니다.

```
src/
├── app/              # 전역 설정, Provider, 환경 변수 관리
│   ├── config/       # 환경 변수, 라우트 설정
│   └── providers/    # React Query, i18n, Router Provider
├── pages/            # URL 단위 페이지 구성
│   └── discovery/    # Discovery 메인 페이지
├── widgets/          # 페이지를 구성하는 주요 UI 블록 단위
│   ├── banner-slider/      # 배너 슬라이더
│   ├── favorites/          # 즐겨찾기 리스트
│   └── web3-service-list/   # Web3 서비스 리스트
├── features/         # 사용자의 액션 단위 기능
│   ├── favorite/           # 즐겨찾기 관련 기능 (조회, 삭제)
│   └── web3-service/       # Web3 서비스 관련 기능 (조회, 필터링)
├── entities/         # 비즈니스 모델
│   ├── banner-slider/      # 배너 엔티티
│   ├── favorite/           # 즐겨찾기 엔티티
│   └── web3-service/       # Web3 서비스 엔티티
└── shared/           # 재사용 가능한 공용 컴포넌트 및 유틸리티
    ├── api/          # API 클라이언트
    ├── config/       # 다국어 설정
    ├── ui/           # 공용 UI 컴포넌트
    └── utils/        # 유틸리티 함수
```

## 🚀 프로젝트 실행 및 빌드 방법

### 사전 요구사항

- Node.js 18 이상
- npm 또는 yarn

### 설치

```bash
npm install
```

### 개발 환경 실행

```bash
npm run dev
```

- 개발 서버가 `http://localhost:5173`에서 실행됩니다
- 개발 환경에서는 mock 데이터를 사용합니다

### 빌드

#### Development 환경 빌드

```bash
npm run build:dev
```

#### Stage 환경 빌드

```bash
npm run build:stage
```

#### Production 환경 빌드

```bash
npm run build:prod
```

### 환경 변수 설정

각 환경별로 `.env` 파일을 생성하여 환경 변수를 설정할 수 있습니다.

- `.env.development` - 개발 환경
- `.env.stage` - 스테이징 환경
- `.env.production` - 프로덕션 환경

필요한 환경 변수:

- `VITE_APP_ENV`: `dev`, `stage`, `prod`
- `VITE_API_BASE_URL`: API 베이스 URL

## 🧱 구현한 주요 요소 설명

### 1. 상단 배너 슬라이더

- **위치**: `src/widgets/banner-slider/`
- **기능**:
  - 가로 스크롤 슬라이드 (CSS scroll-snap 사용)
  - 배너 클릭 또는 CTA 버튼 클릭 시 관련 URL로 이동
  - 다국어 지원 (한국어/영어)
  - 이미지 지연 로딩 (첫 번째 배너는 eager, 나머지는 lazy)
  - 현재 배너 인덱스 표시 (예: "1/3")

### 2. 즐겨찾기 리스트

- **위치**: `src/widgets/favorites/`
- **기능**:
  - 즐겨찾기 목록 표시
  - 삭제 버튼 클릭 시 확인 모달 팝업 표시
  - 확인 후 삭제 처리 (Optimistic Update 적용)
  - 삭제 후 UI 즉시 반영
  - 이미지 최적화 (WebP 우선, fallback 지원)

### 3. Web3 서비스 리스트

- **위치**: `src/widgets/web3-service-list/`
- **기능**:
  - **조건부 필터링**: 언어(한국어/영어), 플랫폼(Android/iOS), 빌드환경(dev/stage/prod)에 따라 서비스 표시 여부 결정
  - **무한 스크롤**: Intersection Observer를 사용한 자동 페이지네이션
  - **스켈레톤 UI**: 로딩 중 스켈레톤 UI 표시
  - **검색 기능**: 서비스 이름 및 설명으로 검색 가능
  - **서비스 상세**: 서비스 클릭 시 BottomSheet로 상세 정보 표시 및 이동
  - **다국어 지원**: 언어에 따라 서비스 설명 표시

### 4. 이미지 최적화

- **위치**: `src/shared/ui/OptimizedImage/`
- **기능**:
  - WebP 포맷 우선 지원
  - WebP 미지원 브라우저에서는 PNG/JPG로 fallback
  - Lazy Loading 지원 (loading 속성)

### 5. 다국어 지원

- **위치**: `src/app/providers/i18n.tsx`, `src/shared/config/locales/`
- **기능**:
  - 한국어/영어 지원
  - 언어 전환 토글 버튼
  - localStorage에 언어 설정 저장
  - 브라우저 언어 자동 감지

### 6. 환경별 API 설정

- **위치**: `src/app/config/env.ts`
- **기능**:
  - dev/stage/prod 환경별 API base URL 분리
  - 개발 환경에서는 mock 데이터 사용
  - 환경별 빌드 스크립트 지원

## ⚠️ 보완하고 싶은 점

### 1. 가상 스크롤링 (Virtual Scrolling)

Web3ServiceList 컴포넌트에 가상 스크롤링을 적용했으나, 전체 스크롤과 개별 스크롤 영역이 분리되어 있어 스크롤 이동이 다소 자연스럽지 않은 문제가 발생했습니다. 이로 인해 사용자 경험 측면에서 개선이 필요합니다.

### 2. FSD 아키텍처 적용 경험

작은 프로젝트임에도 불구하고 FSD(Feature-Sliced Design) 아키텍처를 적용해보았습니다. FSD는 레이어를 명확히 분리하고 모듈화를 체계적으로 진행할 수 있는 장점이 있지만, 레이어별 구조 설계가 까다롭고 초기 설계 및 폴더 분리에 시간이 상당히 소요된다는 점을 경험했습니다. 특히, 각 기능을 구현할 때마다 레이어별로 폴더와 파일을 분리하는 과정에서 구조 설계에 대한 고민이 많았으며, 이 과정은 프로젝트 규모가 작은 경우에는 오버엔지니어링이 될 수 있다는 점을 체감했습니다.

### 3. 서비스 리스트 필터링 로직

현재 서비스 리스트는 전체 데이터를 불러온 후 클라이언트에서 언어, 플랫폼, 빌드 환경 등의 조건으로 필터링하고 있습니다. 보다 효율적인 접근 방식은 요청 시점에서 해당 조건들을 인자로 전달하여 서버나 API에서 조건에 맞는 데이터만 가져오는 것이 더 효율적인 방법으로 생각됩니다.

### 4. 에러 처리 및 예외 상황 대응

현재 API 클라이언트(`src/shared/api/client.ts`)에는 에러 핸들링이 구현되어 있지 않습니다. 네트워크 오류, 타임아웃, 4xx/5xx 응답 등에 대한 명시적 처리가 필요합니다. React Query의 `error` 상태를 활용하여 사용자에게 명확한 에러 메시지를 표시하고, 재시도 기능을 제공해야 합니다.

### 5. 성능 최적화

- **검색 디바운싱**: 검색어 입력 시 매번 필터링을 수행하는 대신 디바운싱을 적용하여 불필요한 연산을 줄여야 합니다.
- **메모이제이션**: `useMemo`는 일부 적용되어 있지만, 컴포넌트 렌더링 최적화를 위해 `React.memo`를 적절히 활용할 수 있습니다.
- **코드 스플리팅**: 라우트별 또는 위젯별로 코드 스플리팅을 적용하여 초기 로딩 시간을 단축할 수 있습니다.

## 🤖 AI 도구 사용 여부

### 사용한 도구

- **Cursor AI**
- **ChatGPT**

### 사용 방법 및 목적

1. Cursor의 경우 자동완성에 AI 도구를 활용하였습니다.
2. ChatGPT는 가이드에 첨부된 이미지를 입력값으로 하여 간단한 UI 구성에 활용하였습니다.
