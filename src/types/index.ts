/**
 * 서일메디컬 마케팅 제안서 - 타입 정의
 * Boris Cherny 원칙: 타입을 먼저 정의하고, 구현은 그 다음
 * 
 * 변경: 2026-01-13 - 18페이지 → 19페이지 (Section08 분리)
 */

// ============================================
// 1. 기본 타입 (Literal Types)
// ============================================

/** 섹션 타입 - Discriminated Union */
export type SectionType = 'cover' | 'toc' | 'content' | 'closing';

/** 섹션 ID - 1부터 19까지 */
export type SectionId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19;

/** 총 섹션 수 - Literal Type */
export type TotalSections = 19;

// ============================================
// 2. 섹션 인터페이스
// ============================================

/** 섹션 정의 */
export interface Section {
  readonly id: SectionId;
  readonly type: SectionType;
  readonly title: string;
}


// ============================================
// 3. 상태 타입
// ============================================

/** 진행 상태 */
export interface ProgressState {
  readonly currentSection: SectionId;
  readonly totalSections: TotalSections;
}

// ============================================
// 4. 컴포넌트 Props
// ============================================

/** TopbarHeader Props */
export interface TopbarHeaderProps {
  readonly title: string;
  readonly progress: ProgressState;
}

/** ProgressFooter Props */
export interface ProgressFooterProps {
  readonly progress: ProgressState;
  readonly onPrev: () => void;
  readonly onNext: () => void;
}

/** Section Props */
export interface SectionProps {
  readonly section: Section;
  readonly isActive: boolean;
}


// ============================================
// 5. 상수 데이터 (as const)
// ============================================

/** 19개 섹션 정의 (YAML 데이터와 동기화) */
export const SECTIONS: readonly Section[] = [
  { id: 1, type: 'cover', title: '표지' },
  { id: 2, type: 'toc', title: '목차' },
  { id: 3, type: 'content', title: '1. 서일메디컬 현황 진단' },
  { id: 4, type: 'content', title: '1. 서일메디컬 현황 진단 - 마케팅 채널' },
  { id: 5, type: 'content', title: '2. 바이럴 키워드 노출 현황 분석' },
  { id: 6, type: 'content', title: '3. 경쟁사 분석 - 경쟁 구도 개요' },
  { id: 7, type: 'content', title: '3.2 재건성형 경쟁사 분석' },
  { id: 8, type: 'content', title: '3.3 미용성형 경쟁사 분석' },
  { id: 9, type: 'content', title: '3.3 미용성형 경쟁사 비교 분석' },
  { id: 10, type: 'content', title: '3.4 서일메디컬 현황 진단' },
  { id: 11, type: 'content', title: '4. 포지셔닝 분석 - 재건성형' },
  { id: 12, type: 'content', title: '4. 포지셔닝 분석 - 미용성형' },
  { id: 13, type: 'content', title: '5. 핵심 문제점 진단' },
  { id: 14, type: 'content', title: '6. 전략 제안 - 전후사진 확보' },
  { id: 15, type: 'content', title: '6. 전략 제안 - 채널별 전략' },
  { id: 16, type: 'content', title: '7. 마케팅 예산안' },
  { id: 17, type: 'content', title: '8. 향후 확장 방향' },
  { id: 18, type: 'content', title: '9. 요약 및 권장사항' },
  { id: 19, type: 'closing', title: '감사합니다' },
] as const;

/** 총 섹션 수 */
export const TOTAL_SECTIONS: TotalSections = 19;
