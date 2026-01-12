/**
 * 서일메디컬 마케팅 제안서 - 타입 정의
 * Boris Cherny 원칙: 타입을 먼저 정의하고, 구현은 그 다음
 */

// ============================================
// 1. 기본 타입 (Literal Types)
// ============================================

/** 섹션 타입 - Discriminated Union */
export type SectionType = 'cover' | 'toc' | 'content' | 'closing';

/** 섹션 ID - 1부터 17까지 */
export type SectionId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;

/** 총 섹션 수 - Literal Type */
export type TotalSections = 17;

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

/** 17개 섹션 정의 */
export const SECTIONS: readonly Section[] = [
  { id: 1, type: 'cover', title: '표지' },
  { id: 2, type: 'toc', title: '목차' },
  { id: 3, type: 'content', title: '제안 개요' },
  { id: 4, type: 'content', title: '의료 시장 현황' },
  { id: 5, type: 'content', title: '서일메디컬 현황' },
  { id: 6, type: 'content', title: '경쟁사 분석' },
  { id: 7, type: 'content', title: 'SWOT 분석' },
  { id: 8, type: 'content', title: '핵심 전략' },
  { id: 9, type: 'content', title: '브랜드 포지셔닝' },
  { id: 10, type: 'content', title: '디지털 마케팅' },
  { id: 11, type: 'content', title: '콘텐츠 전략' },
  { id: 12, type: 'content', title: '고객 여정 설계' },
  { id: 13, type: 'content', title: 'CRM 구축 방안' },
  { id: 14, type: 'content', title: '실행 로드맵' },
  { id: 15, type: 'content', title: '예상 성과' },
  { id: 16, type: 'content', title: '투자 비용' },
  { id: 17, type: 'closing', title: '마무리' },
] as const;

/** 총 섹션 수 */
export const TOTAL_SECTIONS: TotalSections = 17;
