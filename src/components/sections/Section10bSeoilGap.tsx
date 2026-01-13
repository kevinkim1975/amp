/**
 * Section10bSeoilGap - 서일메디컬 경쟁력 격차
 * Nancy Duarte: 한 슬라이드 = 한 메시지 ("실력과 인지도 사이 격차가 크다")
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - 레이아웃 최적화 (한 페이지 내 완전 표시)
 * 
 * 30년차 디자이너 원칙:
 * - 콘텐츠가 한 페이지에 완전히 들어오도록 공간 최적화
 * - 차트 가독성 유지하면서 공간 효율성 확보
 * - Design Guide의 max-w-content 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 10 chart)
 */

import { TrendingDown } from "lucide-react";

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface BarItem {
  readonly label: string;
  readonly value: number;
  readonly color: string;
}

interface ChartCategory {
  readonly name: string;
  readonly items: readonly BarItem[];
}

// ============================================================================
// Sample Data (YAML page 10 chart 기반)
// ============================================================================

const chartData: readonly ChartCategory[] = [
  {
    name: '실제 경쟁력',
    items: [
      { label: '서일메디컬', value: 95, color: 'bg-primary' },
      { label: '하늘성형', value: 80, color: 'bg-secondary' },
      { label: '갤럭시', value: 60, color: 'bg-text-secondary' },
    ],
  },
  {
    name: '온라인 인지도',
    items: [
      { label: '서일메디컬', value: 10, color: 'bg-red-500' },
      { label: '하늘성형', value: 90, color: 'bg-accent' },
      { label: '갤럭시', value: 60, color: 'bg-text-secondary' },
    ],
  },
] as const;

// ============================================================================
// Component (레이아웃 최적화: 한 페이지 내 완전 표시)
// ============================================================================

export function Section10bSeoilGap() {
  return (
    <section className="w-full bg-background py-6">
      {/* Design Guide 준수: max-w-content (1280px), min-h로 화면 채우기 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header - 압축 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            3.4 서일메디컬 경쟁력 격차
          </h2>
          <p className="text-body text-text-secondary mb-2">
            실력은 최상위, 인지도는 최하위
          </p>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Gap Indicator - 압축 */}
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
          <div className="flex items-center gap-2">
            <TrendingDown className="text-red-500 flex-shrink-0" size={18} strokeWidth={1.5} />
            <p className="text-sm font-medium text-text-primary">
              서일메디컬: 실제 경쟁력 95점 vs 온라인 인지도 10점 →{' '}
              <span className="text-red-500 font-semibold">85점 격차</span>
            </p>
          </div>
        </div>

        {/* Gap Chart - 공간 최적화 */}
        <div className="flex-1 flex flex-col">
          <div className="bg-background border border-border rounded-lg p-5 shadow-card flex-1 flex flex-col">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              실제 경쟁력 vs 온라인 인지도 격차
            </h3>

            <div className="space-y-6 flex-1">
              {chartData.map((category) => (
                <div key={category.name}>
                  <p className="text-sm font-semibold text-text-secondary mb-3">
                    {category.name}
                  </p>
                  <div className="space-y-2.5">
                    {category.items.map((item) => (
                      <div key={`${category.name}-${item.label}`} className="flex items-center gap-3">
                        <span className="w-24 text-sm font-medium text-text-primary shrink-0">
                          {item.label}
                        </span>
                        <div className="flex-1 bg-surface rounded-full h-6 overflow-hidden">
                          <div
                            className={`h-full ${item.color} rounded-full flex items-center justify-end pr-2`}
                            style={{ width: `${item.value}%` }}
                            role="progressbar"
                            aria-valuenow={item.value}
                            aria-valuemin={0}
                            aria-valuemax={100}
                            aria-label={`${item.label}: ${item.value}점`}
                          >
                            <span className="text-xs text-white font-semibold">
                              {item.value}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* 핵심 인사이트 - 압축 */}
            <div className="mt-4 p-4 bg-surface rounded-lg border border-border">
              <p className="text-center text-base font-semibold text-primary">
                실력은 최상위권이나 온라인에서 알려지지 않음
              </p>
              <p className="text-center text-sm text-text-secondary mt-1">
                → 온라인 마케팅 강화로 인지도 격차 해소 필요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
