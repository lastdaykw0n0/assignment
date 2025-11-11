## 🏗️ 프로젝트 아키텍쳐

본 프로젝트는 **FSD (Feature-Sliced Design)** 구조를 기반으로 설계하였습니다.

- **app/**: 전역 설정, Provider, 환경 변수 관리
- **pages/**: URL 단위 페이지 구성
- **widgets/**: 페이지를 구성하는 주요 UI 블록 단위
- **features/**: 사용자의 액션 단위 기능
- **entities/**: 비즈니스 모델
- **shared/**: 재사용 가능한 공용 컴포넌트 및 유틸리티

## 🧱 구현한 주요 요소 설명

- **상단 배너(features/banner)**
