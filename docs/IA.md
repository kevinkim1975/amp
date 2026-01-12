# AutoMed Proposal Generator 정보 아키텍처 (IA)

## 1. 사이트맵

```
AutoMed Proposal Generator
├── / (홈페이지/표지)
├── /proposal/[uuid] (제안서 뷰어)
│   ├── 표지 (Cover)
│   ├── 요약 (Executive Summary)
│   ├── 시장 개요 (Market Overview) *조건부
│   ├── 경쟁사 분석 (Competitive Analysis)
│   ├── 환자 인구통계 (Patient Demographics)
│   ├── 마케팅 목표 (Marketing Objectives)
│   ├── 예산 배분 (Budget Allocation)
│   ├── 제안 채널 및 전략 (Proposed Channels)
│   ├── 일정 및 마일스톤 (Timeline & Milestones)
│   ├── 예상 KPI 및 ROI (Expected KPI & ROI)
│   ├── 사례 연구 (Case Studies) *조건부
│   ├── 팀 자격증명 (Team Credentials)
│   └── 다음 단계 (Next Steps)
├── /404 (페이지를 찾을 수 없음)
└── /500 (서버 오류)
```

*조건부: JSON 데이터가 없으면 자동 제외

## 2. 사용자 흐름

### 핵심 작업 1: 컨설턴트 제안서 생성
1. 컨설턴트가 hospital.json 파일 작성
2. npm run build 명령어 실행
3. JSON 스키마 검증 수행
4. 검증 성공 시 동적 페이지 생성
5. git add && git commit && git push 실행
6. Vercel에서 자동 빌드 및 배포
7. 배포 완료 시 UUID 기반 URL 생성
8. 컨설턴트가 URL을 고객에게 전달

### 핵심 작업 2: 병원 경영진 제안서 열람
1. 경영진이 URL 수신
2. URL 클릭하여 표지 페이지 접속
3. 목차 버튼으로 전체 구조 확인
4. 목차에서 원하는 섹션으로 이동
5. 차트/테이블에서 데이터 확인
6. 다음 버튼으로 순차 열람
7. 전체 제안서 검토 완료

### 핵심 작업 3: 모바일 열람
1. 스마트폰에서 URL 클릭
2. 반응형 레이아웃 (세로 스크롤)
3. 터치 제스처로 페이지 이동
4. 차트는 가로 스크롤 또는 축소
5. 핀치 줌으로 상세 확인

## 3. 네비게이션 구조

### TopbarHeader
- 위치: 모든 페이지 상단 고정
- 구성: 로고(좌), 제목(중앙), 목차 버튼(우), 페이지 번호(우)
- 배경색: #004B8D
- 높이: 64px

### TocDrawer
- 위치: 우측에서 슬라이드 인
- 트리거: 상단바 목차 버튼
- 구성: 페이지 목록, 현재 페이지 하이라이트
- 기능: 클릭 시 해당 섹션으로 스크롤

### ProgressFooter
- 위치: 모든 페이지 하단 고정
- 구성: 이전 버튼(좌), 진행률 바(중앙), 다음 버튼(우)
- 키보드: 화살표 키 지원

## 4. 페이지 계층 구조

```
/ (Depth 1)
├── proposal/ (Depth 1)
│   └── [uuid]/ (Depth 2)
│       ├── #cover (Depth 3)
│       ├── #executive-summary (Depth 3)
│       ├── #market-overview (Depth 3) *조건부
│       ├── #competitive-analysis (Depth 3)
│       └── ... (기타 섹션)
├── 404 (Depth 1)
└── 500 (Depth 1)
```

## 5. 콘텐츠 구성

| 페이지 | 주요 콘텐츠 요소 |
|---|---|
| 표지 | 제목, 병원명, 작성일, 컨설턴트 정보, 시작 버튼 |
| 요약 | 핵심 제안, 예상 효과, ROI 요약 |
| 시장 개요 | 시장 규모 차트, 성장률 그래프, 트렌드 분석 |
| 경쟁사 분석 | 비교 테이블, 포지셔닝 차트, SWOT |
| 환자 인구통계 | 연령대 차트, 지역 분포, 성별 파이 차트 |
| 마케팅 목표 | 목표 텍스트, KPI 테이블, 달성 기준 |
| 예산 배분 | 예산 파이 차트, 월별 지출 테이블 |
| 제안 채널 | 채널별 전략, 우선순위 매트릭스 |
| 일정 | 간트 차트, 단계별 일정표, 마일스톤 |
| 예상 KPI | 성과 지표 테이블, ROI 차트 |
| 사례 연구 | 성공 사례, Before/After 차트 |
| 팀 자격증명 | 팀원 프로필, 자격증, 경력 |
| 다음 단계 | 실행 계획, 연락처, CTA 버튼 |

## 6. 인터랙션 패턴

### 네비게이션 패턴
- 스크롤 기반 페이지 이동
- 목차 드로어 슬라이드
- 진행률 실시간 업데이트

### 데이터 시각화 패턴
- 차트 호버 툴팁
- 모바일 핀치 줌

### 피드백 패턴
- 로딩: 스켈레톤 UI
- 오류: 재시도 버튼 + 메시지
- 성공: 체크마크 아이콘

## 7. URL 구조

### URL 패턴
- 홈페이지: /
- 제안서 뷰어: /proposal/[uuid]
- 오류 페이지: /404, /500

### UUID 기반 보안
- 형식: /proposal/a1b2c3d4-e5f6-7890-abcd-ef1234567890
- 특징: 128비트 무작위, 추측 불가능
- SEO 제외: noindex, robots disallow

### 앵커 링크
- 섹션별: #cover, #executive-summary 등
- 예시: /proposal/[uuid]#budget-allocation

## 8. 컴포넌트 계층 구조

### 전역 컴포넌트 (Global)
- TopbarHeader
- TocDrawer
- ProgressFooter
- Layout

### 페이지 컴포넌트 (Page)
- ProposalViewer
- SectionCard
- ErrorPage

### 콘텐츠 컴포넌트 (Content)
- TextSection
- ChartBlock
- TableSection
- ImageSection

### UI 컴포넌트 (UI)
- Button (Primary, Secondary, Ghost)
- Chart (Bar, Line, Pie, Area)
- Table
- Tooltip

### 유틸리티 컴포넌트 (Utility)
- LoadingSpinner
- ErrorBoundary
- SkeletonLoader

### 조건부 렌더링 로직
- JSON 데이터 유무에 따른 섹션 자동 포함/제외
- 빈 데이터 시 해당 섹션 숨김
- 총 페이지 수 동적 계산
