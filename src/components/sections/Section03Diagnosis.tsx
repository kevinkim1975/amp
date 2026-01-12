/**
 * Section03Diagnosis - 서일메디컬 현황 진단
 * Design Guide (docs/design-guide.md) 기반
 * v0.dev 생성 후 Boris Cherny 원칙 적용
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 3)
 * 
 * 타이포그래피:
 *   - Heading 2: 36px (2.25rem), Weight 600
 *   - Heading 3: 24px (1.5rem), Weight 600
 *   - Body: 18px (1.125rem), Weight 400
 *   - Caption: 14px (0.875rem), Weight 400
 * 색상:
 *   - Primary: #004B8D
 *   - Secondary: #48A9C5
 *   - Accent: #10B981
 *   - Surface: #F6F8FA
 *   - Text Primary: #1F2937
 *   - Text Secondary: #6B7280
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

interface TableColumn {
  readonly key: string;
  readonly label: string;
  readonly align?: 'left' | 'right';
}

interface TableRow {
  readonly channel: string;
  readonly status: string;
  readonly budget: string;
  readonly issue: string;
}

interface MarketingTable {
  readonly title: string;
  readonly summary: string;
  readonly columns: readonly TableColumn[];
  readonly rows: readonly TableRow[];
}

interface DiagnosisData {
  readonly section: string;
  readonly cards: {
    readonly hospital: HospitalCard;
    readonly strengths: StrengthsCard;
  };
  readonly table: MarketingTable;
}

// ============================================================================
// Sample Data (YAML page 3 기반)
// TODO: YAML 파서 통합 시 import로 대체
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
  table: {
    title: '현재 마케팅 채널 운영 현황',
    summary: '총 562만원',
    columns: [
      { key: 'channel', label: '채널' },
      { key: 'status', label: '상태' },
      { key: 'budget', label: '월 예산', align: 'right' },
      { key: 'issue', label: '현황/이슈' },
    ],
    rows: [
      { channel: '블로그', status: '● 운영중', budget: '115만원', issue: '콘텐츠 차별화 부족' },
      { channel: '카페', status: '● 운영중', budget: '112만원', issue: '전후사진 없이 비효율 운영' },
      { channel: '지식인', status: '○ 미운영', budget: '-', issue: '미활용 채널' },
      { channel: '언론보도', status: '● 운영중', budget: '20만원', issue: '확장성 떨어지는 언론보도 운영' },
      { channel: '파워링크', status: '● 운영중', budget: '250만원', issue: '캠페인 통합 운영 중' },
      { channel: '당근마켓', status: '● 운영중', budget: '10만원', issue: '지역광고' },
      { channel: '유튜브', status: '● 운영중', budget: '55만원', issue: '제작' },
    ],
  },
} as const;

// ============================================================================
// Component
// ============================================================================

export function Section03Diagnosis() {
  const data = diagnosisData;

  return (
    <section className="w-full bg-surface py-16">
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)]">
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

        {/* Card Group - 2열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* 병원 개요 카드 */}
          <div className="bg-background border border-border rounded p-8 shadow-card transition-all duration-150 hover:shadow-md min-h-full">
            <div className="flex items-center gap-3 mb-6 border-l-[3px] border-primary pl-4">
              <Building2 
                className="text-primary" 
                size={24} 
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
                  className={`py-3 ${
                    index < data.cards.hospital.items.length - 1 
                      ? 'border-b border-border' 
                      : ''
                  }`}
                >
                  <div className="text-caption uppercase tracking-wide text-text-secondary mb-1">
                    {item.label}
                  </div>
                  <div className="text-body font-medium text-text-primary">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 핵심 강점 카드 */}
          <div className="bg-background border border-border rounded p-8 shadow-card transition-all duration-150 hover:shadow-md min-h-full">
            <div className="flex items-center gap-3 mb-6 border-l-[3px] border-primary pl-4">
              <Award 
                className="text-primary" 
                size={24} 
                strokeWidth={1.5} 
              />
              <h3 className="text-heading-3 text-text-primary">
                {data.cards.strengths.title}
              </h3>
            </div>
            <div className="space-y-4">
              {data.cards.strengths.items.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                    <Check 
                      className="text-accent" 
                      size={20} 
                      strokeWidth={1.5} 
                    />
                  </div>
                  <div className="text-body text-text-primary leading-relaxed">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 마케팅 채널 테이블 */}
        <div className="mt-12">
          <h3 className="text-heading-3 text-text-primary mb-6">
            {data.table.title}
          </h3>
          <div className="bg-background border border-border rounded shadow-card overflow-hidden">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-surface">
                  {data.table.columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`py-4 px-6 text-caption uppercase tracking-wide text-text-secondary font-medium ${
                        column.align === 'right' ? 'text-right' : 'text-left'
                      }`}
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.table.rows.map((row, index) => (
                  <tr
                    key={row.channel}
                    className={`border-t border-border transition-all duration-150 hover:bg-surface ${
                      index % 2 === 1 ? 'bg-surface/50' : 'bg-background'
                    }`}
                  >
                    <td className="py-4 px-6 text-body text-text-primary">
                      {row.channel}
                    </td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-medium ${
                          row.status.includes('운영중')
                            ? 'bg-accent/10 text-accent'
                            : 'bg-text-secondary/10 text-text-secondary'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right text-body font-bold text-text-primary font-mono">
                      {row.budget}
                    </td>
                    <td className="py-4 px-6 text-body text-text-secondary">
                      {row.issue}
                    </td>
                  </tr>
                ))}
                {/* Summary Row */}
                <tr className="border-t-2 border-primary bg-surface">
                  <td className="py-4 px-6" colSpan={2} />
                  <td className="py-4 px-6 text-right text-body font-bold text-primary font-mono">
                    {data.table.summary}
                  </td>
                  <td className="py-4 px-6" />
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
