/**
 * Section10PositioningReconstruction - 재건성형 시장 포지셔닝 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 11)
 */

import { Lightbulb } from "lucide-react"

export function Section10PositioningReconstruction() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">4. 포지셔닝 분석 - 재건성형 시장</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Positioning Map */}
        <div className="bg-white border border-[#E5E7EB] rounded-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-6">재건성형 시장 포지셔닝 맵</h3>

          <div className="relative h-[400px] bg-[#F6F8FA] rounded-md overflow-hidden">
            {/* Axis Labels */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-[#6B7280]">
              전문성 ↑
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-[#6B7280]">
              접근성 →
            </div>

            {/* Grid */}
            <div className="absolute inset-8 border border-dashed border-[#D1D5DB]">
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#D1D5DB]" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[#D1D5DB]" />
            </div>

            {/* Positions */}
            {/* 부산대병원 - x:20, y:95 */}
            <div className="absolute" style={{ left: '20%', top: '5%' }}>
              <div className="bg-[#6B7280] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">부산대병원</p>
                <p className="text-xs opacity-80">재건 권위</p>
              </div>
            </div>

            {/* 고신대병원 - x:25, y:75 */}
            <div className="absolute" style={{ left: '25%', top: '25%' }}>
              <div className="bg-[#6B7280] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">고신대병원</p>
                <p className="text-xs opacity-80">로봇수술</p>
              </div>
            </div>

            {/* 동아대병원 - x:30, y:65 */}
            <div className="absolute" style={{ left: '30%', top: '35%' }}>
              <div className="bg-[#6B7280] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">동아대병원</p>
                <p className="text-xs opacity-80">구순구개열</p>
              </div>
            </div>

            {/* 서일메디컬 현재 - x:80, y:65 */}
            <div className="absolute" style={{ left: '75%', top: '35%' }}>
              <div className="bg-[#48A9C5] text-white px-3 py-1.5 rounded-md text-sm border-2 border-white shadow-lg">
                <p className="font-medium">서일메디컬 현재</p>
              </div>
            </div>

            {/* 서일메디컬 목표 - x:85, y:80 */}
            <div className="absolute" style={{ left: '80%', top: '20%' }}>
              <div className="bg-[#004B8D] text-white px-3 py-1.5 rounded-md text-sm border-2 border-[#10B981] shadow-lg">
                <p className="font-medium">서일메디컬 목표</p>
                <p className="text-xs opacity-80">재건전문 + 접근성</p>
              </div>
              {/* Arrow from current to target */}
              <svg className="absolute -left-16 top-1/2" width="60" height="40" viewBox="0 0 60 40">
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                  </marker>
                </defs>
                <path d="M0,35 Q30,20 55,10" stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" strokeDasharray="5,3" />
              </svg>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-sm text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#6B7280] rounded" />
                <span>대학병원</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#48A9C5] rounded" />
                <span>현재 위치</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#004B8D] rounded border border-[#10B981]" />
                <span>목표 위치</span>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Callout */}
        <div className="p-6 bg-[#F6F8FA] border-l-4 border-[#004B8D] rounded-r-lg">
          <div className="flex gap-3">
            <Lightbulb className="text-[#004B8D] flex-shrink-0 mt-1" size={24} />
            <div className="space-y-3">
              <p className="text-base font-semibold text-[#1F2937]">서일메디컬 재건성형 포지션 전략</p>
              <ul className="space-y-2 text-base text-[#1F2937]">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  대학병원 수준 전문성 + 개인병원 접근성 = 유일한 포지션
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  부산대 교수 출신 → 대학병원급 기술력 어필 가능
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  빠른 예약, 개인 맞춤 상담 → 대학병원 대비 차별화
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  대학병원들 온라인 마케팅 소극적 → 키워드 선점 기회
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
