# Claude Code 핸드오프 문서
# 작성일: 2026-01-13
# 목적: v0.dev MCP를 사용한 섹션 컴포넌트 자동 생성

## 프로젝트 정보

- **프로젝트명**: 서일메디컬 AutoMed Proposal Generator
- **작업 디렉토리**: C:\MyProject\amp\
- **마감일**: 2026-01-13 (오늘)
- **기술 스택**: Next.js 15 + TypeScript strict + Tailwind + shadcn/ui

## 현재 상태

### 완료된 섹션 (5개)
- Section01Cover.tsx (표지)
- Section02TOC.tsx (목차)
- Section03Diagnosis.tsx (서일메디컬 현황 진단)
- Section04Channel.tsx (마케팅 채널)
- Section05Keywords.tsx (바이럴 키워드 노출 현황 분석)

### 남은 섹션 (13개)
- Section06 ~ Section18

## 핵심 파일 위치

```
C:\MyProject\amp\
├── data\seoil-medical.yaml      # 콘텐츠 데이터 (18페이지)
├── docs\design-guide.md         # 디자인 가이드
├── src\components\sections\     # 섹션 컴포넌트 디렉토리
│   └── index.ts                 # 배럴 export
└── src\app\page.tsx             # 메인 페이지
```

## 작업 지침

### 1. 각 섹션별 작업 순서

1. `data/seoil-medical.yaml`에서 해당 page 데이터 확인
2. `docs/design-guide.md` 참조하여 디자인 규칙 적용
3. v0.dev MCP로 컴포넌트 생성 요청
4. 결과를 `src/components/sections/SectionNN{Name}.tsx`로 저장
5. `src/components/sections/index.ts`에 export 추가

### 2. v0.dev MCP 프롬프트 템플릿

각 섹션 생성 시 아래 템플릿을 사용하세요:

```
컴포넌트명: Section{NN}{Name}

데이터 소스: data/seoil-medical.yaml의 page {N}

디자인 가이드 (반드시 준수):
- Primary Color: #004B8D
- Secondary Color: #48A9C5
- Accent Color: #10B981
- Warning Color: #EF4444
- Surface: #F6F8FA
- Text Primary: #1F2937
- Text Secondary: #6B7280
- Heading 2: 36px, Weight 600
- Heading 3: 24px, Weight 600
- Body: 18px, Weight 400
- 카드: 흰색 배경, 1px solid #E5E7EB, 패딩 32px, 모서리 6px
- 그림자: 0 1px 3px rgba(0,0,0,0.1)

컨테이너:
- min-h-[calc(100vh-144px)]
- 최대 너비: 1280px
- 패딩: 32px
- 배경: 흰색

기술 요구사항:
- TypeScript strict
- export function Section{NN}{Name}()
- Tailwind CSS
- lucide-react 아이콘
- 반응형 (모바일 우선)

YAML 데이터:
{해당 page의 YAML 데이터 전체}
```

### 3. YAML 블록 타입별 컴포넌트 매핑

| YAML type | UI 컴포넌트 |
|-----------|------------|
| table | 테이블 (헤더: Surface 배경) |
| card_group | 카드 그리드 (2열, 모바일 1열) |
| callout | 박스 (좌측 4px 보더) |
| comparison | 좌우 비교 레이아웃 |
| chart | 차트/그래프 |
| timeline | 타임라인 |
| options | 옵션 카드 (가격표 스타일) |

### 4. 색상 규칙

| 상태 | 색상 | 용도 |
|------|------|------|
| ● 노출/운영중 | #10B981 | 긍정적 상태 |
| ✕ 미노출 | #EF4444 | 부정적 상태 |
| ○ 미운영 | #6B7280 | 중립 상태 |

### 5. Callout variant별 스타일

| variant | 좌측 보더 | 아이콘 |
|---------|----------|--------|
| info | #48A9C5 | Info |
| insight | #004B8D | Lightbulb |
| warning | #EF4444 | AlertTriangle |
| default | #E5E7EB | - |

## 섹션별 YAML 페이지 매핑

| Section | Page | Title |
|---------|------|-------|
| 06 | 6 | 3. 경쟁사 분석 - 경쟁 구도 개요 |
| 07 | 7 | 3.2 재건성형 경쟁사 분석 |
| 08 | 8 | 3.3 미용성형 경쟁사 분석 |
| 09 | 9 | 3.4 서일메디컬 현황 진단 |
| 10 | 10 | 4. 포지셔닝 분석 - 재건성형 |
| 11 | 11 | 4. 포지셔닝 분석 - 미용성형 |
| 12 | 12 | 5. 핵심 문제점 진단 |
| 13 | 13 | 6. 전략 제안 - 전후사진 확보 |
| 14 | 14 | 6. 전략 제안 - 채널별 전략 |
| 15 | 15 | 7. 마케팅 예산안 |
| 16 | 16 | 8. 향후 확장 방향 |
| 17 | 17 | 9. 요약 및 권장사항 |
| 18 | 18 | 감사합니다 (closing) |

## 완료 후 체크리스트

1. [ ] 모든 섹션 파일 생성 (Section06-18)
2. [ ] index.ts에 모든 export 추가
3. [ ] TypeScript 빌드 성공 (`npm run build`)
4. [ ] Git commit & push
5. [ ] Vercel 배포 확인

## 주의사항

- 하드코딩 금지: 모든 콘텐츠는 YAML 데이터 기반
- TypeScript strict 모드 준수
- 컴포넌트당 하나의 파일
- 반응형 필수 (모바일 우선)
