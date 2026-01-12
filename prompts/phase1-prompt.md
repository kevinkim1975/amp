# 서일메디컬 제안서 - Phase 1: 세부 작업 단계

## ⚠️ 작업 환경

| 항목 | 값 |
|------|-----|
| **작업 위치** | `C:\MyProject\amp\` (로컬) |
| **배포 흐름** | 로컬 파일 생성 → GitHub 푸시 → Vercel 자동 배포 |
| **검증 방법** | Vercel 배포 URL로 직접 확인 |
| **로컬 실행** | ❌ 사용 안 함 (npm install/run dev 없음) |

---

## 워크플로우

```
[1-0] GitHub 저장소 생성 + Vercel 연결 (⚠️ 사용자 직접 수행)
     ↓
[파일 생성] Desktop Commander로 로컬에 파일 저장
     ↓
[GitHub 푸시] 로컬 Git 명령어로 푸시 (⚠️ 사용자 직접 수행)
     ↓
[Vercel 빌드] 자동 빌드 (~30초 대기)
     ↓
[URL 검증] Vercel URL에서 결과 확인
     ↓
[수정 필요 시] 파일 수정 → GitHub 푸시 → 재검증
```

---

## Phase 1 세부 단계 (7개)

### 1-0: GitHub 저장소 생성 + Vercel 연결 ⭐ 첫 번째 작업

⚠️ **사용자 직접 수행** (MCP 불가)

**작업 순서:**

1. **GitHub 저장소 생성**
   - GitHub 웹사이트 → New repository
   - 저장소명: `amp`
   - Public 선택 (Vercel 무료 연결)
   - "Add a README file" 체크
   - Create repository 클릭

2. **로컬 Git 연결**
   ```bash
   cd C:\MyProject\amp
   git init
   git remote add origin https://github.com/[username]/amp.git
   ```

3. **Vercel 프로젝트 연결**
   - Vercel 대시보드 → Add New → Project
   - Import Git Repository → `amp` 선택
   - Framework Preset: Next.js
   - Deploy 클릭

**검증:**
- GitHub 저장소 URL 확인: `https://github.com/[username]/amp`
- Vercel 프로젝트 생성 확인

**완료 기준:** ✅ Vercel 대시보드에서 프로젝트 연결 완료

**완료 후:** Claude에게 "1-0 완료" 보고

---

### 1-A: 프로젝트 파일 구조 생성

**작업:** Next.js 프로젝트 기본 파일 생성 (Desktop Commander 사용)

**생성할 파일:**
```
C:\MyProject\amp\
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .gitignore
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    └── lib/
        └── utils.ts
```

**푸시:** (사용자 직접 수행)
```bash
cd C:\MyProject\amp
git add .
git commit -m "1-A: Project scaffold"
git push origin main
```

**검증:** Vercel 빌드 성공 확인

**완료 기준:** ✅ Vercel 빌드 성공 (기본 페이지 표시)

---

### 1-B: 타입 정의 (Boris Cherny 핵심)

**작업:** `src/types/index.ts` 생성

```typescript
// 섹션 타입
export interface Section {
  id: number;
  type: 'cover' | 'toc' | 'content' | 'closing';
  title: string;
}

// 진행 상태 타입
export interface ProgressState {
  currentSection: number;
  totalSections: number;
}

// 컴포넌트 Props 타입
export interface TopbarHeaderProps {
  title: string;
  progress: ProgressState;
}

export interface ProgressFooterProps {
  progress: ProgressState;
  onPrev: () => void;
  onNext: () => void;
}

export interface SectionProps {
  section: Section;
  isActive: boolean;
}
```

**푸시:** (사용자 직접 수행)
```bash
git add .
git commit -m "1-B: Type definitions"
git push origin main
```

**검증:** Vercel 빌드 성공

**완료 기준:** ✅ 타입 에러 없이 빌드 성공

---

### 1-C: TopbarHeader 컴포넌트

**v0.dev 요청:**
```
높이 64px 고정 헤더를 만들어주세요.
- 배경색: #004B8D
- 왼쪽: 제목 (흰색, font-semibold)
- 오른쪽: 진행률 "3 / 17" (흰색)
- position: fixed, top: 0, z-index: 50
- 전체 너비 100%
- Tailwind CSS + TypeScript React
- Props: title: string, currentSection: number, totalSections: number
```

**저장 위치:** `C:\MyProject\amp\src\components\layout\TopbarHeader.tsx`

**푸시:** (사용자 직접 수행)
```bash
git add .
git commit -m "1-C: TopbarHeader component"
git push origin main
```

**검증:** Vercel URL에서 헤더 표시 확인

**완료 기준:** ✅ 헤더가 상단에 고정 표시

---

### 1-D: ProgressFooter 컴포넌트

**v0.dev 요청:**
```
높이 80px 고정 푸터를 만들어주세요.
- 배경: 흰색, 상단 border (gray-200)
- 왼쪽: 이전 버튼 (outline 스타일)
- 중앙: 진행바 (17단계, 현재 위치 표시)
- 오른쪽: 다음 버튼 (Primary #004B8D)
- position: fixed, bottom: 0, z-index: 50
- 최대 너비 1280px, 중앙 정렬
- Tailwind CSS + TypeScript React
- Props: currentSection: number, totalSections: number, onPrev, onNext
```

**저장 위치:** `C:\MyProject\amp\src\components\layout\ProgressFooter.tsx`

**푸시:** (사용자 직접 수행)
```bash
git add .
git commit -m "1-D: ProgressFooter component"
git push origin main
```

**검증:** Vercel URL에서 푸터 표시 확인

**완료 기준:** ✅ 푸터가 하단에 고정 표시, 버튼 표시

---

### 1-E: 페이지 통합 + 17개 섹션

**작업:** 
- 헤더 + 푸터 + 스크롤 영역 통합
- 17개 섹션 플레이스홀더 포함

**핵심 로직:**
- Intersection Observer로 현재 섹션 감지
- 상태: currentSection (1~17)
- 버튼 클릭 시 해당 섹션으로 스크롤

**17개 섹션 구조:**
| # | ID | 표시 내용 |
|---|-----|-----------|
| 1 | section-1 | 표지 |
| 2 | section-2 | 목차 |
| 3 | section-3 | 1. 서일메디컬 현황 진단 |
| 4 | section-4 | 2. 바이럴 키워드 노출 현황 분석 |
| 5 | section-5 | 3. 경쟁 구도 개요 |
| 6 | section-6 | 3.2 재건성형 경쟁사 |
| 7 | section-7 | 3.3 미용성형 경쟁사 |
| 8 | section-8 | 3.4 서일메디컬 현황 진단 |
| 9 | section-9 | 4. 포지셔닝 (재건성형) |
| 10 | section-10 | 4. 포지셔닝 (미용성형) |
| 11 | section-11 | 5. 핵심 문제점 진단 |
| 12 | section-12 | 6. 전후사진 확보 전략 |
| 13 | section-13 | 6. 채널별 전략 |
| 14 | section-14 | 7. 마케팅 예산안 |
| 15 | section-15 | 8. 향후 확장 방향 |
| 16 | section-16 | 9. 요약 및 권장사항 |
| 17 | section-17 | 감사합니다 |

**저장 위치:** `C:\MyProject\amp\src\app\page.tsx`

**푸시:** (사용자 직접 수행)
```bash
git add .
git commit -m "1-E: Page integration with 17 sections"
git push origin main
```

**검증:** Vercel URL에서 확인
- 스크롤 시 헤더 진행률 업데이트
- 이전/다음 버튼으로 섹션 이동
- 17개 섹션 모두 표시

**완료 기준:** ✅ 스크롤 연동 + 17개 섹션 표시

---

### 1-F: 최종 검증 및 정리

**검증 항목:**
- [ ] Vercel URL 접속 가능
- [ ] TopbarHeader 상단 고정 (64px)
- [ ] ProgressFooter 하단 고정 (80px)
- [ ] 17개 섹션 모두 표시
- [ ] 스크롤 시 진행률 업데이트
- [ ] 이전/다음 버튼 동작
- [ ] 진행바 현재 위치 표시

**완료 기준:** ✅ 모든 검증 항목 통과

---

## 디자인 스펙

### 컬러
| 용도 | 색상 |
|------|------|
| Primary | #004B8D |
| Secondary | #48A9C5 |
| Accent | #10B981 |
| 배경 | #FFFFFF |
| 텍스트 | #1F2937 |

### 레이아웃
| 컴포넌트 | 높이 |
|----------|------|
| TopbarHeader | 64px (고정) |
| Main Content | calc(100vh - 144px) |
| ProgressFooter | 80px (고정) |

### 치수
- 최대 너비: 1280px
- 섹션 패딩: 64px (상하)
- 모서리 반경: 6px

---

## 폴더 구조

```
C:\MyProject\amp\
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── .gitignore
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   └── layout/
    │       ├── TopbarHeader.tsx
    │       └── ProgressFooter.tsx
    ├── types/
    │   └── index.ts
    └── lib/
        └── utils.ts
```

---

## 체크리스트

| Sub-Phase | 작업 | 수행자 | 상태 |
|-----------|------|--------|------|
| **1-0** | **GitHub + Vercel 연결** | **사용자** | ⬜ ⭐ 첫 작업 |
| 1-A | 프로젝트 파일 구조 | Claude + 사용자(푸시) | ⬜ |
| 1-B | 타입 정의 | Claude + 사용자(푸시) | ⬜ |
| 1-C | TopbarHeader | Claude + 사용자(푸시) | ⬜ |
| 1-D | ProgressFooter | Claude + 사용자(푸시) | ⬜ |
| 1-E | 페이지 통합 + 17개 섹션 | Claude + 사용자(푸시) | ⬜ |
| 1-F | 최종 검증 | 사용자 | ⬜ |

---

## 작업 원칙

1. **1-0 먼저** - GitHub + Vercel 연결 없이 다음 단계 진행 금지
2. **사용자 직접 수행** - GitHub 저장소 생성, Vercel 연결, Git 푸시
3. **Claude 역할** - 파일 생성 (Desktop Commander), v0.dev 컴포넌트 생성
4. **npm 사용 안 함** - 로컬에서 npm install/run dev 하지 않음
5. **Vercel에서 검증** - 모든 확인은 Vercel URL로
6. **한 번에 하나씩** - Sub-Phase 완료 후 다음 진행
7. **타입 먼저** - 1-B 완료 전 컴포넌트 작성 금지

---

## 코딩 규칙

1. **'use client'** - 상태/이벤트 컴포넌트에 명시
2. **TypeScript strict** - 타입 명시 필수
3. **함수형 컴포넌트** - 클래스 금지
4. **Early Return** - 중첩 조건문 회피
5. **한글 UTF-8** - 한글 지원
