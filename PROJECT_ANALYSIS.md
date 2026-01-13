# 프로젝트 맥락 분석: 서일메디컬 마케팅 제안서
## Boris Cherny 관점의 단계별 분석

> "타입을 먼저 정의하고, 구현은 그 다음" - Programming TypeScript

---

## 1. 프로젝트 개요 (Project Overview)

### 1.1 프로젝트 본질
- **이름**: `amp` (AutoMed Proposal Generator)
- **목적**: 서일메디컬그룹을 위한 19페이지 하드코딩 마케팅 제안서 웹 애플리케이션
- **배포**: Vercel (GitHub 연동 자동 배포)
- **마감**: 2026년 1월 13일

### 1.2 기술 스택
- **프레임워크**: Next.js 15 (App Router)
- **언어**: TypeScript 5.9.3 (strict mode)
- **스타일링**: Tailwind CSS 3.4.17
- **아이콘**: lucide-react
- **유틸리티**: clsx, tailwind-merge
- **패키지 매니저**: pnpm

### 1.3 아키텍처 철학
이 프로젝트는 원래 **자동화된 제안서 생성기**로 기획되었으나, 현재는 **하드코딩된 단일 제안서**로 구현됨:
- 원래 목표: JSON → 자동 페이지 생성
- 현재 상태: YAML 데이터 + 하드코딩 컴포넌트
- 이유: 빠른 배포를 위한 실용적 접근

---

## 2. 타입 시스템 분석 (Type System Analysis)

### 2.1 타입 정의 구조 (`src/types/index.ts`)

**강점:**
```typescript
// ✅ Literal Types 사용 - 타입 안전성 극대화
export type SectionType = 'cover' | 'toc' | 'content' | 'closing';
export type SectionId = 1 | 2 | 3 | ... | 19;
export type TotalSections = 19;

// ✅ Discriminated Union 패턴
export interface Section {
  readonly id: SectionId;
  readonly type: SectionType;
  readonly title: string;
}
```

**Boris Cherny 관점:**
- ✅ **타입을 먼저 정의**: `types/index.ts`가 모든 컴포넌트보다 먼저 존재
- ✅ **readonly 사용**: 불변성 보장 (`readonly id`, `readonly type`)
- ✅ **Literal Types**: 런타임 오류 방지 (SectionId는 1~19만 허용)
- ✅ **as const**: SECTIONS 배열의 타입 추론 강화

**개선 가능성:**
```typescript
// 현재: SectionId가 19개 literal union
// 개선: 더 유연한 타입 (하지만 현재 프로젝트는 고정 19페이지)
// → 현재 상태가 적절함 (YAGNI 원칙)
```

### 2.2 Props 타입 설계

**잘 설계된 부분:**
```typescript
// ✅ 명확한 인터페이스 분리
export interface TopbarHeaderProps {
  readonly title: string;
  readonly progress: ProgressState;
}

export interface ProgressFooterProps {
  readonly progress: ProgressState;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}
```

**Boris Cherny 관점:**
- ✅ **명시적 타입**: 모든 Props에 타입 정의
- ✅ **함수 시그니처**: `() => void` 명확히 표현
- ✅ **readonly**: Props 불변성 보장

---

## 3. 컴포넌트 아키텍처 (Component Architecture)

### 3.1 계층 구조

```
src/app/
├── layout.tsx          # Root Layout (Metadata)
├── page.tsx            # Main Page (State Management)
└── globals.css         # Design System CSS Variables

src/components/
├── layout/
│   ├── TopbarHeader.tsx    # Fixed Header (64px)
│   └── ProgressFooter.tsx  # Fixed Footer (80px)
└── sections/
    ├── SectionContainer.tsx  # Router Component
    ├── Section01Cover.tsx
    ├── Section02TOC.tsx
    └── ... (19개 섹션)
```

**Boris Cherny 관점:**
- ✅ **관심사 분리**: Layout vs Content 섹션 분리
- ✅ **단일 책임**: 각 섹션 컴포넌트는 하나의 페이지만 담당
- ✅ **Container 패턴**: `SectionContainer`가 라우팅 로직 담당

### 3.2 상태 관리 (`src/app/page.tsx`)

**현재 구현:**
```typescript
const [currentSection, setCurrentSection] = useState<SectionId>(1);
const sectionRefs = useRef<(HTMLElement | null)[]>([]);
```

**Boris Cherny 관점:**
- ✅ **타입 안전한 상태**: `SectionId` literal type 사용
- ✅ **Ref 배열**: DOM 접근을 위한 적절한 패턴
- ✅ **Intersection Observer**: 네이티브 API 활용 (의존성 최소화)

**잘 설계된 부분:**
```typescript
// ✅ useCallback으로 메모이제이션
const scrollToSection = useCallback((sectionId: SectionId) => {
  const targetRef = sectionRefs.current[sectionId - 1];
  if (targetRef) {
    targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}, []);
```

### 3.3 섹션 라우팅 (`SectionContainer.tsx`)

**현재 구현:**
```typescript
const SectionComponents: Partial<Record<number, React.ComponentType>> = {
  1: Section01Cover,
  2: Section02TOC,
  // ...
};
```

**Boris Cherny 관점:**
- ⚠️ **타입 안전성 부족**: `Record<number, ...>` 대신 `Record<SectionId, ...>` 사용 가능
- ✅ **Partial 사용**: 아직 구현되지 않은 섹션 허용
- ✅ **forwardRef**: DOM ref 전달을 위한 적절한 패턴

**개선 제안:**
```typescript
// 개선안: 더 타입 안전한 매핑
const SectionComponents: Record<SectionId, React.ComponentType | undefined> = {
  1: Section01Cover,
  2: Section02TOC,
  // ...
} as const;
```

---

## 4. 디자인 시스템 (Design System)

### 4.1 Single Source of Truth

**설계 철학:**
- `docs/design-guide.md` → 디자인 스펙 정의
- `tailwind.config.ts` → Tailwind 설정
- `src/app/globals.css` → CSS Variables

**Boris Cherny 관점:**
- ✅ **중앙 집중식 관리**: 색상, 타이포그래피, 스페이싱이 한 곳에 정의
- ✅ **타입 안전한 디자인**: Tailwind config에서 타입 추론 가능
- ✅ **CSS Variables**: 런타임 변경 가능 (필요 시)

**예시:**
```typescript
// tailwind.config.ts
colors: {
  primary: { DEFAULT: "#004B8D" },
  secondary: { DEFAULT: "#48A9C5" },
}

// globals.css
:root {
  --color-primary: #004B8D;
  --color-secondary: #48A9C5;
}
```

### 4.2 타이포그래피 시스템

**잘 설계된 부분:**
```typescript
fontSize: {
  "heading-1": ["3rem", { lineHeight: "1.2", fontWeight: "600" }],
  "heading-2": ["2.25rem", { lineHeight: "1.2", fontWeight: "600" }],
  // ...
}
```

**Boris Cherny 관점:**
- ✅ **일관성**: 모든 타이포그래피가 디자인 가이드와 일치
- ✅ **명확한 네이밍**: `text-heading-1` 같은 의미 있는 클래스명
- ✅ **타입 안전성**: Tailwind IntelliSense로 자동완성

---

## 5. 데이터 구조 분석 (Data Structure)

### 5.1 YAML 데이터 (`data/seoil-medical.yaml`)

**구조:**
```yaml
pages:
  - page: 1
    type: cover
    data: { ... }
  - page: 2
    type: toc
    data: { ... }
```

**Boris Cherny 관점:**
- ⚠️ **타입 불일치**: YAML 구조와 TypeScript 타입이 완전히 동기화되지 않음
- ⚠️ **하드코딩**: 각 섹션 컴포넌트가 데이터를 직접 하드코딩
- ✅ **명확한 구조**: YAML이 문서 역할을 수행

**현재 상태:**
- YAML은 참고용 (실제 사용 안 함)
- 각 섹션 컴포넌트가 자체 데이터 보유
- 예: `Section05Keywords.tsx` 내부에 `keywordsData` 상수

### 5.2 데이터 동기화 문제

**문제점:**
```typescript
// Section05Keywords.tsx
const keywordsData: KeywordsData = {
  section: '2. 바이럴 키워드 노출 현황 분석',
  tables: [ /* 하드코딩 */ ],
} as const;
```

**Boris Cherny 관점:**
- ⚠️ **DRY 위반**: YAML과 TypeScript 코드 중복
- ⚠️ **유지보수 어려움**: 데이터 변경 시 두 곳 수정 필요
- ✅ **타입 안전성**: TypeScript로 데이터 검증 가능

**개선 방향 (향후):**
```typescript
// YAML → TypeScript 자동 변환 (빌드 타임)
import { seoilMedicalData } from '@/data/seoil-medical';
// → 타입 안전한 데이터 사용
```

---

## 6. 코드 품질 분석 (Code Quality)

### 6.1 강점

**1. 타입 안전성:**
```typescript
// ✅ Literal Types로 런타임 오류 방지
const handleNext = useCallback(() => {
  if (currentSection < TOTAL_SECTIONS) {
    const nextSection = (currentSection + 1) as SectionId;
    scrollToSection(nextSection);
  }
}, [currentSection, scrollToSection]);
```

**2. 함수형 프로그래밍:**
```typescript
// ✅ useCallback으로 불필요한 리렌더링 방지
// ✅ Early Return 패턴
if (!ref) return;
```

**3. 접근성 (A11y):**
```typescript
// ✅ ARIA 속성 사용
role="progressbar"
aria-valuenow={currentSection}
aria-label={`진행률: ${currentSection}/${totalSections} 페이지`}
```

### 6.2 개선 가능 영역

**1. 에러 처리 부족:**
```typescript
// 현재: 에러 처리 없음
const targetRef = sectionRefs.current[sectionId - 1];
if (targetRef) {
  targetRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 개선: 더 명확한 에러 처리
if (!targetRef) {
  console.warn(`Section ${sectionId} not found`);
  return;
}
```

**2. 매직 넘버:**
```typescript
// 현재: 하드코딩된 값
{ threshold: 0.5 }  // Intersection Observer threshold

// 개선: 상수로 추출
const INTERSECTION_THRESHOLD = 0.5;
```

**3. 타입 단언 (Type Assertion):**
```typescript
// 현재: 타입 단언 사용
setCurrentSection((index + 1) as SectionId);

// 개선: 타입 가드 사용
const isValidSectionId = (id: number): id is SectionId => {
  return id >= 1 && id <= TOTAL_SECTIONS;
};
```

---

## 7. 아키텍처 패턴 (Architecture Patterns)

### 7.1 현재 패턴

**1. Container-Presenter 패턴:**
- `SectionContainer`: 라우팅 로직 (Container)
- `Section01Cover` 등: UI 렌더링 (Presenter)

**2. Compound Component 패턴:**
- `TopbarHeader` + `ProgressFooter` + `SectionContainer` = 완전한 페이지

**3. Controlled Component 패턴:**
- `page.tsx`가 모든 상태 관리
- 하위 컴포넌트는 Props로 상태 받음

### 7.2 Boris Cherny 관점

**잘 설계된 부분:**
- ✅ **단방향 데이터 흐름**: Props down, Events up
- ✅ **관심사 분리**: Layout vs Content
- ✅ **재사용 가능한 컴포넌트**: 각 섹션은 독립적

**개선 가능성:**
- ⚠️ **상태 관리 복잡도**: 섹션이 많아질수록 `page.tsx` 복잡해짐
- ⚠️ **Props Drilling**: 깊은 컴포넌트 트리에서 Props 전달 필요

---

## 8. 성능 고려사항 (Performance)

### 8.1 현재 최적화

**1. 메모이제이션:**
```typescript
const scrollToSection = useCallback(...);
const handlePrev = useCallback(...);
const handleNext = useCallback(...);
```

**2. Intersection Observer:**
- 네이티브 API 사용 (라이브러리 의존성 없음)
- 효율적인 스크롤 감지

**3. Code Splitting:**
- Next.js App Router 자동 코드 분할
- 각 섹션 컴포넌트는 필요 시 로드

### 8.2 개선 가능성

**1. Lazy Loading:**
```typescript
// 현재: 모든 섹션 즉시 로드
import { Section01Cover } from './Section01Cover';

// 개선: 필요 시 로드
const Section01Cover = lazy(() => import('./Section01Cover'));
```

**2. 이미지 최적화:**
- 현재: 이미지 사용 없음 (텍스트 중심)
- 향후: Next.js Image 컴포넌트 사용 권장

---

## 9. 테스트 가능성 (Testability)

### 9.1 현재 상태

**테스트 파일 없음:**
- 단위 테스트 없음
- 통합 테스트 없음
- E2E 테스트 없음

**Boris Cherny 관점:**
- ⚠️ **테스트 부재**: 프로덕션 코드에 테스트 없음
- ⚠️ **타입 테스트**: TypeScript만으로 검증

**개선 방향:**
```typescript
// 예시: 단위 테스트
describe('scrollToSection', () => {
  it('should scroll to valid section', () => {
    // ...
  });
  
  it('should handle invalid section ID', () => {
    // ...
  });
});
```

---

## 10. 문서화 (Documentation)

### 10.1 현재 문서

**잘 문서화된 부분:**
- ✅ `docs/PRD.md`: 제품 요구사항
- ✅ `docs/design-guide.md`: 디자인 시스템
- ✅ `docs/code-guide.md`: 코딩 가이드라인
- ✅ `TASK.md`: 작업 진행 상황

**Boris Cherny 관점:**
- ✅ **명확한 목적**: 각 문서가 명확한 역할
- ✅ **단계별 접근**: Phase별 작업 분리
- ✅ **타입 우선**: 타입 정의가 먼저 문서화됨

### 10.2 코드 주석

**현재 상태:**
```typescript
/**
 * Section05Keywords - 바이럴 키워드 노출 현황 분석
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 생성: 2026-01-13
 */
```

**Boris Cherny 관점:**
- ✅ **의도 설명**: "왜" 작성했는지 명시
- ✅ **참조 문서**: Design Guide 연결
- ✅ **변경 이력**: 날짜 기록

---

## 11. 보안 고려사항 (Security)

### 11.1 현재 상태

**보안 조치:**
- ✅ **정적 콘텐츠**: 서버 사이드 데이터 없음
- ✅ **클라이언트 사이드**: 모든 로직이 브라우저에서 실행
- ✅ **타입 안전성**: TypeScript로 런타임 오류 방지

**Boris Cherny 관점:**
- ✅ **최소 권한**: 필요한 기능만 구현
- ✅ **의존성 최소화**: 외부 라이브러리 적게 사용

---

## 12. 유지보수성 (Maintainability)

### 12.1 강점

**1. 명확한 구조:**
```
src/
├── app/          # Next.js App Router
├── components/   # 재사용 가능한 컴포넌트
├── types/        # 타입 정의 (Single Source of Truth)
└── lib/          # 유틸리티 함수
```

**2. 타입 안전성:**
- 모든 컴포넌트가 타입 정의됨
- 리팩토링 시 타입 체커가 오류 감지

**3. 디자인 시스템:**
- 중앙 집중식 스타일 관리
- 일관된 디자인 언어

### 12.2 개선 가능성

**1. 데이터 중복:**
- YAML과 TypeScript 코드 중복
- 향후 자동화 필요

**2. 섹션 컴포넌트 일관성:**
- 각 섹션이 독립적으로 구현됨
- 공통 패턴 추출 가능

---

## 13. 결론 및 권장사항 (Conclusion & Recommendations)

### 13.1 프로젝트 강점

1. **타입 안전성**: Boris Cherny 원칙 준수
2. **명확한 구조**: 관심사 분리 잘 됨
3. **디자인 시스템**: Single Source of Truth
4. **단계별 접근**: Phase별 작업 분리

### 13.2 개선 권장사항

**즉시 개선 (High Priority):**
1. ✅ **타입 단언 개선**: `as SectionId` → 타입 가드 사용
2. ✅ **에러 처리 추가**: null 체크 및 경고 로그
3. ✅ **매직 넘버 상수화**: 하드코딩된 값 추출

**중기 개선 (Medium Priority):**
1. ⚠️ **데이터 동기화**: YAML → TypeScript 자동 변환
2. ⚠️ **테스트 추가**: 단위 테스트 및 통합 테스트
3. ⚠️ **성능 최적화**: Lazy Loading 및 이미지 최적화

**장기 개선 (Low Priority):**
1. 📝 **문서화 강화**: JSDoc 주석 추가
2. 📝 **접근성 개선**: ARIA 속성 보강
3. 📝 **국제화 준비**: i18n 구조 설계

### 13.3 Boris Cherny 원칙 준수도

| 원칙 | 준수도 | 평가 |
|------|--------|------|
| 타입 먼저 정의 | ⭐⭐⭐⭐⭐ | 완벽 |
| 불변성 보장 | ⭐⭐⭐⭐☆ | readonly 사용 |
| 함수형 프로그래밍 | ⭐⭐⭐⭐☆ | useCallback 활용 |
| 명확한 네이밍 | ⭐⭐⭐⭐⭐ | 의미 있는 이름 |
| 단일 책임 원칙 | ⭐⭐⭐⭐☆ | 컴포넌트 분리 |
| DRY 원칙 | ⭐⭐⭐☆☆ | 데이터 중복 존재 |

**전체 평가: ⭐⭐⭐⭐☆ (4.5/5)**

---

## 14. 다음 단계 (Next Steps)

### 14.1 즉시 작업 가능

1. **Section19Closing 추가**: `SectionContainer.tsx`에 누락된 섹션 추가
2. **타입 안전성 개선**: 타입 단언을 타입 가드로 변경
3. **에러 처리 추가**: null 체크 및 경고 로그

### 14.2 Phase 2 완료 후

1. **데이터 동기화**: YAML → TypeScript 자동 변환 스크립트
2. **테스트 추가**: Jest + React Testing Library
3. **성능 최적화**: Lazy Loading 및 코드 분할

---

**작성일**: 2026-01-13  
**분석 기준**: Boris Cherny의 "Programming TypeScript" 원칙  
**프로젝트 상태**: Phase 2 진행 중 (19페이지 중 5페이지 완료)
