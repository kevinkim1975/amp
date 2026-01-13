/**
 * Section11PositioningCosmetic - 미용성형 시장 포지셔닝 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 12)
 */

import { Lightbulb } from "lucide-react"

export function Section11PositioningCosmetic() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">4. 포지셔닝 분석 - 미용성형 시장 (부산 지역)</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Positioning Map */}
        <div className="bg-white border border-[#E5E7EB] rounded-md p-6 mb-8">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-6">미용성형 시장 포지셔닝 맵</h3>

          <div className="relative h-[400px] bg-[#F6F8FA] rounded-md overflow-hidden">
            {/* Axis Labels */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-[#6B7280]">
              온라인 점유율 ↑
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-[#6B7280]">
              차별화 →
            </div>

            {/* Grid */}
            <div className="absolute inset-8 border border-dashed border-[#D1D5DB]">
              <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-[#D1D5DB]" />
              <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-[#D1D5DB]" />
            </div>

            {/* Positions */}
            {/* 하늘성형외과 44% - x:50, y:90 */}
            <div className="absolute" style={{ left: '45%', top: '10%' }}>
              <div className="bg-[#EF4444] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">하늘성형외과 44%</p>
                <p className="text-xs opacity-80">부산 압도적 1위</p>
              </div>
            </div>

            {/* 갤럭시성형외과 21% - x:45, y:60 */}
            <div className="absolute" style={{ left: '40%', top: '40%' }}>
              <div className="bg-[#F59E0B] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">갤럭시성형외과 21%</p>
                <p className="text-xs opacity-80">재수술 전문</p>
              </div>
            </div>

            {/* 아이앤코 19% - x:40, y:45 */}
            <div className="absolute" style={{ left: '35%', top: '55%' }}>
              <div className="bg-[#F59E0B] text-white px-3 py-1.5 rounded-md text-sm">
                <p className="font-medium">아이앤코 19%</p>
                <p className="text-xs opacity-80">눈/코 전문</p>
              </div>
            </div>

            {/* 서일메디컬 현재 0% - x:30, y:5 */}
            <div className="absolute" style={{ left: '25%', top: '90%' }}>
              <div className="bg-[#48A9C5] text-white px-3 py-1.5 rounded-md text-sm border-2 border-white shadow-lg">
                <p className="font-medium">서일메디컬 현재: 0%</p>
              </div>
            </div>

            {/* 서일메디컬 목표 - x:80, y:50 */}
            <div className="absolute" style={{ left: '75%', top: '50%' }}>
              <div className="bg-[#004B8D] text-white px-3 py-1.5 rounded-md text-sm border-2 border-[#10B981] shadow-lg">
                <p className="font-medium">서일메디컬 목표</p>
                <p className="text-xs opacity-80">재건+미용 결합</p>
              </div>
              {/* Arrow from current to target */}
              <svg className="absolute -left-[180px] top-[40px]" width="180" height="100" viewBox="0 0 180 100">
                <defs>
                  <marker id="arrowhead2" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10B981" />
                  </marker>
                </defs>
                <path d="M0,90 Q90,50 175,5" stroke="#10B981" strokeWidth="2" fill="none" markerEnd="url(#arrowhead2)" strokeDasharray="5,3" />
              </svg>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-sm text-xs space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#EF4444] rounded" />
                <span>1위 경쟁사</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-[#F59E0B] rounded" />
                <span>2-3위 경쟁사</span>
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
              <p className="text-base font-semibold text-[#1F2937]">서일메디컬 미용성형 포지션 전략</p>
              <ul className="space-y-2 text-base text-[#1F2937]">
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  전후사진 확보 전까지 직접적인 점유율 경쟁 회피
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  &quot;재건+미용 결합&quot; 포지셔닝으로 차별화 (재건 기술력 = 미용 품질 신뢰)
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  지식인/언론보도 통해 전문성·안전성 메시지 우선 확산
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  중장기: 전후사진 확보 후 본격적인 점유율 경쟁 진입
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
