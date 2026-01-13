/**
 * Section10SeoilDiagnosis - 서일메디컬 현황 진단 (보유자산 vs 온라인노출)
 * Nancy Duarte: 한 슬라이드 = 한 메시지 ("서일은 보유 자산을 알리지 못하고 있다")
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - 레이아웃 최적화 (한 페이지 내 완전 표시)
 * 
 * 30년차 디자이너 원칙:
 * - 콘텐츠가 한 페이지에 완전히 들어오도록 공간 최적화
 * - 적절한 밀도 유지 (너무 짧지 않게)
 * - Design Guide의 max-w-content 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 10)
 */

import { AlertTriangle, Check, X, Minus } from "lucide-react";

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface AssetItem {
  readonly text: string;
}

interface AssetSection {
  readonly title: string;
  readonly items: readonly AssetItem[];
}

interface ExposureItem {
  readonly text: string;
  readonly status: 'partial' | 'none';
}

interface ExposureSection {
  readonly title: string;
  readonly items: readonly ExposureItem[];
}

interface ComparisonItem {
  readonly text: string;
}

// ============================================================================
// Sample Data (YAML page 10 기반)
// ============================================================================

const assetSections: readonly AssetSection[] = [
  {
    title: '고급 장비',
    items: [
      { text: '3.0T MRI' },
      { text: 'CB-CT (Cone Beam CT)' },
      { text: 'VECTRA 3D 시뮬레이션' },
      { text: '클라리티 레이저' },
    ],
  },
  {
    title: '협진 시스템',
    items: [
      { text: '마취통증의학과 전문의 상주' },
      { text: '영상의학과 (당일 판독)' },
      { text: '내과·신경과 협진' },
      { text: '정신건강의학과 연계' },
    ],
  },
  {
    title: '의료진',
    items: [
      { text: '대학병원 교수 출신' },
      { text: '재건성형 다수 경험' },
    ],
  },
] as const;

const exposureSections: readonly ExposureSection[] = [
  {
    title: '노출 상태',
    items: [
      { text: '3.0T MRI - 일부 노출', status: 'partial' },
      { text: 'CB-CT - 미노출', status: 'none' },
      { text: 'VECTRA 3D - 미노출', status: 'none' },
      { text: '클라리티 레이저 - 미노출', status: 'none' },
    ],
  },
  {
    title: '홍보 방식',
    items: [
      { text: '의료진 명단에만 존재', status: 'partial' },
      { text: '센터 나열 수준', status: 'partial' },
      { text: '환자 관점 스토리 부재', status: 'none' },
      { text: '안전성 메시지 부재', status: 'none' },
    ],
  },
] as const;

const comparisonItems: readonly ComparisonItem[] = [
  { text: '하늘성형외과: 30년 경력 적극 홍보' },
  { text: '서일메디컬: 교수 경력 온라인 노출 미약' },
] as const;

// ============================================================================
// Component (레이아웃 최적화: 한 페이지 내 완전 표시)
// ============================================================================

export function Section10SeoilDiagnosis() {
  return (
    <section className="w-full bg-background py-6">
      {/* Design Guide 준수: max-w-content (1280px), min-h로 화면 채우기 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header - 압축 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            3.4 서일메디컬 현황 진단
          </h2>
          <p className="text-body text-text-secondary mb-2">
            서일은 가진 것을 다 알리지 못하고 있습니다
          </p>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Warning Callout - 압축 */}
        <div className="mb-4 p-3 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-red-500 flex-shrink-0" size={18} strokeWidth={1.5} />
            <p className="text-sm font-medium text-text-primary">
              핵심 문제: 대학병원급 인프라 보유 → 온라인 홍보 부재
            </p>
          </div>
        </div>

        {/* Two Column Comparison - 공간 최적화 */}
        <div className="flex-1 flex items-start">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
            {/* 보유 자산 */}
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-card">
              <div className="bg-primary px-4 py-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span aria-hidden="true">💪</span> 보유 자산 (실제)
                </h3>
              </div>
              <div className="p-4 space-y-4">
                {assetSections.map((section, sIdx) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold text-text-secondary mb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-1.5">
                      {section.items.map((item) => (
                        <div key={item.text} className="flex items-center gap-2">
                          <Check className="text-accent flex-shrink-0" size={16} strokeWidth={2} />
                          <span className="text-sm text-text-primary">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 온라인 노출 현황 */}
            <div className="bg-background border border-border rounded-lg overflow-hidden shadow-card">
              <div className="bg-text-secondary px-4 py-3">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span aria-hidden="true">🔍</span> 온라인 노출 현황
                </h3>
              </div>
              <div className="p-4 space-y-4">
                {exposureSections.map((section, sIdx) => (
                  <div key={section.title}>
                    <h4 className="text-sm font-semibold text-text-secondary mb-2">
                      {section.title}
                    </h4>
                    <div className="space-y-1.5">
                      {section.items.map((item) => (
                        <div key={item.text} className="flex items-center gap-2">
                          {item.status === 'partial' ? (
                            <Minus className="text-amber-500 flex-shrink-0" size={16} strokeWidth={2} />
                          ) : (
                            <X className="text-red-500 flex-shrink-0" size={16} strokeWidth={2} />
                          )}
                          <span className="text-sm text-text-primary">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}

                {/* 경쟁사 대비 */}
                <div>
                  <h4 className="text-sm font-semibold text-text-secondary mb-2">
                    경쟁사 대비
                  </h4>
                  <div className="space-y-1">
                    {comparisonItems.map((item) => (
                      <p key={item.text} className="text-sm text-text-primary">
                        • {item.text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
