/**
 * Section03Diagnosis - 서일메디컬 현황 진단 (병원 개요)
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 변경: 2026-01-13 - 테이블 분리 (Section04Channel로 이동)
 * 30년차 디자이너 관점: 한 화면 = 한 주제 (카드 그룹만)
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 3)
 * 
 * 타이포그래피:
 *   - Heading 2: 36px (2.25rem), Weight 600
 *   - Heading 3: 24px (1.5rem), Weight 600
 *   - Body: 18px (1.125rem), Weight 400
 *   - Caption: 14px (0.875rem), Weight 400
 */

import { Check, Building2, Award } from 'lucide-react';

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface LabelValueItem {
  readonly label: string;
  readonly value: string;
}

interface HospitalCard {
  readonly title: string;
  readonly items: readonly LabelValueItem[];
}

interface StrengthsCard {
  readonly title: string;
  readonly items: readonly string[];
}

interface DiagnosisData {
  readonly section: string;
  readonly cards: {
    readonly hospital: HospitalCard;
    readonly strengths: StrengthsCard;
  };
}

// ============================================================================
// Sample Data (YAML page 3 기반)
// ============================================================================

const diagnosisData: DiagnosisData = {
  section: '1. 서일메디컬 현황 진단',
  cards: {
    hospital: {
      title: '병원 개요',
      items: [
        { label: '병원명', value: '서일메디컬그룹' },
        { label: '위치', value: '부산' },
        { label: '유형', value: '의원급 (개인병원)' },
        { label: '주력', value: '재건성형 + 미용성형' },
      ],
    },
    strengths: {
      title: '핵심 강점',
      items: [
        '부산대학교병원 성형외과 교수 경력',
        '재건성형 + 미용성형 통합 진료',
        '대학병원 수준 전문성 + 개인병원 접근성/가격 경쟁력',
      ],
    },
  },
} as const;

// ============================================================================
// Component
// ============================================================================

export function Section03Diagnosis() {
  const data = diagnosisData;

  return (
    <section className="w-full bg-surface py-16">
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-heading-2 text-primary mb-3">
            {data.section}
          </h2>
          <div 
            className="mx-auto w-20 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Card Group - 2열 그리드, 수직 중앙 정렬 */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {/* 병원 개요 카드 */}
            <div className="bg-background border border-border rounded-lg p-10 shadow-card transition-all duration-150 hover:shadow-md">
              <div className="flex items-center gap-3 mb-8 border-l-[3px] border-primary pl-4">
                <Building2 
                  className="text-primary" 
                  size={28} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-heading-3 text-text-primary">
                  {data.cards.hospital.title}
                </h3>
              </div>
              <div className="space-y-0">
                {data.cards.hospital.items.map((item, index) => (
                  <div
                    key={item.label}
                    className={`py-4 ${
                      index < data.cards.hospital.items.length - 1 
                        ? 'border-b border-border' 
                        : ''
                    }`}
                  >
                    <div className="text-caption uppercase tracking-wide text-text-secondary mb-1.5">
                      {item.label}
                    </div>
                    <div className="text-body-lg font-medium text-text-primary">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 핵심 강점 카드 */}
            <div className="bg-background border border-border rounded-lg p-10 shadow-card transition-all duration-150 hover:shadow-md">
              <div className="flex items-center gap-3 mb-8 border-l-[3px] border-primary pl-4">
                <Award 
                  className="text-primary" 
                  size={28} 
                  strokeWidth={1.5} 
                />
                <h3 className="text-heading-3 text-text-primary">
                  {data.cards.strengths.title}
                </h3>
              </div>
              <div className="space-y-5">
                {data.cards.strengths.items.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check 
                        className="text-accent" 
                        size={20} 
                        strokeWidth={2} 
                      />
                    </div>
                    <div className="text-body-lg text-text-primary leading-relaxed">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 다음 페이지 안내 */}
        <div className="text-center mt-12">
          <p className="text-caption text-text-secondary">
            마케팅 채널 현황은 다음 페이지에서 확인하세요
          </p>
        </div>
      </div>
    </section>
  );
}
