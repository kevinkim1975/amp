/**
 * Section13Problems - 핵심 문제점 진단
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - v0.dev MCP 기반 레이아웃 최적화
 * - 한 페이지에 모든 콘텐츠 표시 (스크롤 없음)
 * - 컴팩트한 패딩과 간격
 * - 매트릭스 높이 220px로 축소
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 13)
 */

"use client"

export function Section13Problems() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col py-4">
        {/* Section Header - 컴팩트 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">5. 핵심 문제점 진단</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" />
        </div>

        {/* Problem Cards Grid - flex-1로 공간 분배 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 flex-1">
          {/* Critical */}
          <div className="flex flex-col bg-background border-2 border-red-500 rounded-lg overflow-hidden">
            <div className="bg-red-500 px-3 py-2">
              <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                🔴 Critical
              </h3>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="bg-red-50 border border-red-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary mb-1">1. 전후사진 부재</p>
                <p className="text-xs text-text-secondary leading-relaxed">
                  → 성형 마케팅 핵심 원천 없음, 카페 채널 효과 제한
                </p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary mb-1">2. 부산 지역 키워드 미노출</p>
                <p className="text-xs text-text-secondary leading-relaxed">→ 지역 환자 유입 경로 차단</p>
              </div>
            </div>
          </div>

          {/* Major */}
          <div className="flex flex-col bg-background border-2 border-amber-500 rounded-lg overflow-hidden">
            <div className="bg-amber-500 px-3 py-2">
              <h3 className="text-white font-semibold text-sm flex items-center gap-2">
                🟠 Major
              </h3>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="bg-amber-50 border border-amber-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary mb-1">3. 채널 편중 (블로그만)</p>
                <p className="text-xs text-text-secondary leading-relaxed">→ 경쟁사는 4채널 동시 운영</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary mb-1">4. 파워링크 혼합 운영</p>
                <p className="text-xs text-text-secondary leading-relaxed">→ 정신과+성형 통합 캠페인</p>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary mb-1">5. 의료진 경력 활용 미흡</p>
                <p className="text-xs text-text-secondary leading-relaxed">→ 부산대 교수 경력 미노출</p>
              </div>
            </div>
          </div>

          {/* Minor */}
          <div className="flex flex-col bg-background border-2 border-yellow-400 rounded-lg overflow-hidden">
            <div className="bg-yellow-400 px-3 py-2">
              <h3 className="text-text-primary font-semibold text-sm flex items-center gap-2">
                🟡 Minor
              </h3>
            </div>
            <div className="flex-1 p-3 space-y-2">
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary">6. 카페 비효율</p>
              </div>
              <div className="bg-yellow-50 border border-yellow-200 rounded p-2">
                <p className="text-xs font-semibold text-text-primary">7. 지식인 미활용</p>
              </div>
            </div>
          </div>
        </div>

        {/* Priority Matrix - 컴팩트 높이 */}
        <div className="bg-surface border border-border rounded-lg p-4">
          <h3 className="text-sm font-semibold text-text-primary mb-3 text-center">
            문제 우선순위 매트릭스
          </h3>
          
          <div className="relative h-[220px]">
            {/* Axis Labels */}
            <div className="absolute -left-1 top-1/2 -translate-y-1/2 -translate-x-full">
              <p className="text-xs text-text-secondary [writing-mode:vertical-lr] rotate-180">← 영향도</p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
              <p className="text-xs text-text-secondary">해결 용이 →</p>
            </div>

            {/* Grid Container - 2x2 */}
            <div className="grid grid-cols-2 grid-rows-2 h-full border-2 border-border">
              {/* Top-Left: 어려움/높은영향 */}
              <div className="relative border-r border-b border-dashed border-border bg-red-50/30 p-2">
                <span className="absolute top-1 left-1 text-[10px] text-text-secondary">어려움/높은영향</span>
                <div className="absolute top-8 left-4">
                  <span className="inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    1.전후사진 부재
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">최우선 해결</span>
                </div>
                <div className="absolute bottom-6 left-4">
                  <span className="inline-block bg-amber-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    4.파워링크
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">구조 개선</span>
                </div>
              </div>

              {/* Top-Right: 용이/높은영향 */}
              <div className="relative border-b border-dashed border-border bg-amber-50/20 p-2">
                <span className="absolute top-1 right-1 text-[10px] text-text-secondary">용이/높은영향</span>
                <div className="absolute top-8 right-4">
                  <span className="inline-block bg-red-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    2.지역 키워드
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">지식인 확대</span>
                </div>
                <div className="absolute bottom-6 right-4">
                  <span className="inline-block bg-amber-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    3.채널 편중
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">확장 필요</span>
                </div>
              </div>

              {/* Bottom-Left: 어려움/낮은영향 */}
              <div className="relative border-r border-dashed border-border bg-gray-50/30 p-2">
                <span className="absolute bottom-1 left-1 text-[10px] text-text-secondary">어려움/낮은영향</span>
                <div className="absolute top-1/2 -translate-y-1/2 left-4">
                  <span className="inline-block bg-gray-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    5.강점 부각
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">콘텐츠 강화</span>
                </div>
              </div>

              {/* Bottom-Right: 용이/낮은영향 */}
              <div className="relative bg-yellow-50/20 p-2">
                <span className="absolute bottom-1 right-1 text-[10px] text-text-secondary">용이/낮은영향</span>
                <div className="absolute top-1/2 -translate-y-1/2 right-4">
                  <span className="inline-block bg-gray-500 text-white text-[10px] px-2 py-1 rounded font-medium shadow-sm">
                    6.카페 재활성
                  </span>
                  <span className="block text-[9px] text-text-secondary mt-0.5 ml-1">중기 과제</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
