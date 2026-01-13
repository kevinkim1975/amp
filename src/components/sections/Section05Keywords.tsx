/**
 * Section05Keywords - 바이럴 키워드 노출 현황 분석
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 생성: 2026-01-13
 * 30년차 디자이너 원칙: 스크롤 없이 한 화면에 모든 정보 표시
 * 레이아웃: 테이블 2개 가로 배치 + 하단 Callout
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 5)
 */

import { Lightbulb } from 'lucide-react';

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface KeywordRow {
  readonly keyword: string;
  readonly volume: string;
  readonly exposure: string;
  readonly note?: string;
  readonly competitor?: string;
}

interface KeywordTable {
  readonly title: string;
  readonly isPositive: boolean;
  readonly columns: readonly string[];
  readonly rows: readonly KeywordRow[];
}

interface InsightItem {
  readonly text: string;
}

interface KeywordsData {
  readonly section: string;
  readonly tables: readonly KeywordTable[];
  readonly insights: readonly InsightItem[];
}

// ============================================================================
// Sample Data (YAML page 5 기반)
// ============================================================================

const keywordsData: KeywordsData = {
  section: '2. 바이럴 키워드 노출 현황 분석',
  tables: [
    {
      title: '재건성형 키워드 (서일메디컬 노출 있음)',
      isPositive: true,
      columns: ['키워드', '월검색량', '노출', '비고'],
      rows: [
        { keyword: '유방재건술', volume: '3,190', exposure: '● 노출', note: '블로그 상위노출' },
        { keyword: '구순구개열', volume: '2,660', exposure: '● 노출', note: '블로그 상위노출' },
        { keyword: '안면비대칭', volume: '2,040', exposure: '● 노출', note: '블로그 상위노출' },
        { keyword: '지방종제거', volume: '1,340', exposure: '● 노출', note: '블로그 상위노출' },
      ],
    },
    {
      title: '부산 미용성형 키워드 (노출 없음)',
      isPositive: false,
      columns: ['키워드', '월검색량', '노출', '상위 노출 병원'],
      rows: [
        { keyword: '부산코성형', volume: '4,080', exposure: '✕ 미노출', competitor: '하늘성형, 갤럭시' },
        { keyword: '부산성형외과', volume: '2,420', exposure: '✕ 미노출', competitor: '하늘성형, 아이앤코' },
        { keyword: '서면성형외과', volume: '1,020', exposure: '✕ 미노출', competitor: '하늘성형외과' },
        { keyword: '부산눈성형', volume: '980', exposure: '✕ 미노출', competitor: '하늘성형, 갤럭시' },
      ],
    },
  ],
  insights: [
    { text: '재건성형: 일부 키워드 노출 → 유지 및 강화 필요' },
    { text: '미용성형: 부산 지역 키워드 점유율 0% → 신규 진입 필요' },
    { text: '경쟁사(하늘성형외과)가 대부분의 키워드 상위 점유 중' },
  ],
} as const;

// ============================================================================
// Sub-Components
// ============================================================================

/** 키워드 테이블 컴포넌트 */
function KeywordTable({ table }: { readonly table: KeywordTable }) {
  const isPositive = table.isPositive;
  
  return (
    <div className="flex flex-col h-full">
      {/* 테이블 제목 */}
      <div className="flex items-center gap-2 mb-2">
        <span 
          className={`w-2 h-2 rounded-full ${isPositive ? 'bg-accent' : 'bg-red-500'}`}
          aria-hidden="true"
        />
        <h3 className="text-sm font-semibold text-text-primary">
          {table.title}
        </h3>
      </div>
      
      {/* 테이블 */}
      <div className="bg-surface border border-border rounded-lg overflow-hidden flex-1">
        <table className="w-full text-xs" role="table">
          <thead>
            <tr className="bg-primary/5">
              {table.columns.map((col, idx) => (
                <th
                  key={col}
                  scope="col"
                  className={`py-2 px-3 font-semibold text-primary ${
                    idx === 1 ? 'text-right' : 'text-left'
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.rows.map((row, index) => (
              <tr
                key={row.keyword}
                className={`border-t border-border ${
                  index % 2 === 1 ? 'bg-surface/50' : 'bg-background'
                }`}
              >
                <td className="py-2 px-3 font-medium text-text-primary">
                  {row.keyword}
                </td>
                <td className="py-2 px-3 text-right font-mono text-text-primary">
                  {row.volume}
                </td>
                <td className="py-2 px-3">
                  <span className={`font-medium ${isPositive ? 'text-accent' : 'text-red-500'}`}>
                    {row.exposure}
                  </span>
                </td>
                <td className="py-2 px-3 text-text-secondary">
                  {row.note || row.competitor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function Section05Keywords() {
  const data = keywordsData;

  return (
    <section className="w-full bg-background py-6">
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            {data.section}
          </h2>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* 2열 테이블 그리드 */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            {data.tables.map((table) => (
              <KeywordTable key={table.title} table={table} />
            ))}
          </div>

          {/* Callout: 시사점 */}
          <div className="p-4 bg-surface border-l-4 border-primary rounded-r-lg">
            <div className="flex items-center gap-2 mb-2">
              <Lightbulb className="text-primary" size={18} strokeWidth={1.5} />
              <h3 className="text-sm font-semibold text-text-primary">시사점</h3>
            </div>
            <ul className="space-y-1">
              {data.insights.map((insight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-text-primary">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{insight.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
