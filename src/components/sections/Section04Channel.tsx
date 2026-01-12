/**
 * Section04Channel - 서일메디컬 현황 진단 (마케팅 채널)
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 신규: 2026-01-13 - Section03에서 테이블 분리
 * 수정: 2026-01-13 - 레이아웃 압축 (한 화면 내 완전 표시)
 * 
 * 30년차 디자이너 원칙: 스크롤 없이 한 화면에 모든 정보 표시
 */

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

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

interface ChannelData {
  readonly section: string;
  readonly subtitle: string;
  readonly table: {
    readonly title: string;
    readonly summary: string;
    readonly columns: readonly TableColumn[];
    readonly rows: readonly TableRow[];
  };
}

// ============================================================================
// Sample Data (YAML page 4 기반)
// ============================================================================

const channelData: ChannelData = {
  section: '1. 서일메디컬 현황 진단',
  subtitle: '마케팅 채널 현황',
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
// Component (레이아웃 압축: 한 화면 내 완전 표시)
// ============================================================================

export function Section04Channel() {
  const data = channelData;

  return (
    <section className="w-full bg-background py-6">
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header - 압축 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            {data.section}
          </h2>
          <p className="text-body text-text-secondary mb-2">
            {data.subtitle}
          </p>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* 마케팅 채널 테이블 */}
        <div className="flex-1 flex flex-col justify-center">
          <h3 className="text-lg font-semibold text-text-primary mb-3">
            {data.table.title}
          </h3>
          <div className="bg-surface border border-border rounded-lg shadow-card overflow-hidden">
            <table className="w-full" role="table">
              <thead>
                <tr className="bg-primary/5">
                  {data.table.columns.map((column) => (
                    <th
                      key={column.key}
                      scope="col"
                      className={`py-2.5 px-4 text-xs uppercase tracking-wide text-primary font-semibold ${
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
                    <td className="py-2.5 px-4 text-sm font-medium text-text-primary">
                      {row.channel}
                    </td>
                    <td className="py-2.5 px-4">
                      <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                          row.status.includes('운영중')
                            ? 'bg-accent/10 text-accent'
                            : 'bg-text-secondary/10 text-text-secondary'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-right text-sm font-bold text-text-primary font-mono">
                      {row.budget}
                    </td>
                    <td className="py-2.5 px-4 text-sm text-text-secondary">
                      {row.issue}
                    </td>
                  </tr>
                ))}
                {/* Summary Row */}
                <tr className="border-t-2 border-primary bg-primary/5">
                  <td className="py-3 px-4 text-sm font-semibold text-primary" colSpan={2}>
                    월 마케팅 예산 합계
                  </td>
                  <td className="py-3 px-4 text-right text-lg font-bold text-primary font-mono">
                    {data.table.summary}
                  </td>
                  <td className="py-3 px-4" />
                </tr>
              </tbody>
            </table>
          </div>

          {/* 인사이트 박스 - 압축 */}
          <div className="mt-4 p-4 bg-secondary/5 border-l-4 border-secondary rounded-r-lg">
            <p className="text-sm text-text-primary">
              <span className="font-semibold text-secondary">💡 인사이트:</span>{' '}
              현재 7개 채널에 월 562만원을 투자 중이나, 전후사진 부재로 카페 채널 효율이 제한적입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
