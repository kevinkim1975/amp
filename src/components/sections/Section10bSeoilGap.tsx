/**
 * Section10bSeoilGap - 서일메디컬 경쟁력 격차
 * Nancy Duarte: 한 슬라이드 = 한 메시지 ("실력과 인지도 사이 격차가 크다")
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13 - Section10에서 분리
 * 데이터 소스: data/seoil-medical.yaml (page 10 chart)
 */

import { TrendingDown } from "lucide-react"

export function Section10bSeoilGap() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">3.4 서일메디컬 경쟁력 격차</h2>
          <p className="text-lg text-[#6B7280]">실력은 최상위, 인지도는 최하위</p>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] mt-4" />
        </div>

        {/* Gap Indicator */}
        <div className="mb-8 p-4 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-r-lg">
          <div className="flex items-center gap-2">
            <TrendingDown className="text-[#EF4444] flex-shrink-0" size={20} />
            <p className="text-lg text-[#1F2937] font-medium">
              서일메디컬: 실제 경쟁력 95점 vs 온라인 인지도 10점 → <span className="text-[#EF4444]">85점 격차</span>
            </p>
          </div>
        </div>

        {/* Gap Chart - flex-1로 남은 공간 채우기 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md p-8 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-[#1F2937] mb-8">실제 경쟁력 vs 온라인 인지도 격차</h3>

          <div className="space-y-10 flex-1">
            {/* 실제 경쟁력 */}
            <div>
              <p className="text-base font-semibold text-[#6B7280] mb-4">실제 경쟁력</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base font-medium text-[#1F2937]">서일메디컬</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#004B8D] rounded-full flex items-center justify-end pr-3" style={{ width: '95%' }}>
                      <span className="text-sm text-white font-semibold">95</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base text-[#1F2937]">하늘성형</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#48A9C5] rounded-full flex items-center justify-end pr-3" style={{ width: '80%' }}>
                      <span className="text-sm text-white font-semibold">80</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base text-[#1F2937]">갤럭시</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#6B7280] rounded-full flex items-center justify-end pr-3" style={{ width: '60%' }}>
                      <span className="text-sm text-white font-semibold">60</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 온라인 인지도 */}
            <div>
              <p className="text-base font-semibold text-[#6B7280] mb-4">온라인 인지도</p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base font-medium text-[#1F2937]">서일메디컬</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#EF4444] rounded-full flex items-center justify-end pr-3" style={{ width: '10%' }}>
                      <span className="text-sm text-white font-semibold">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base text-[#1F2937]">하늘성형</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full flex items-center justify-end pr-3" style={{ width: '90%' }}>
                      <span className="text-sm text-white font-semibold">90</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="w-28 text-base text-[#1F2937]">갤럭시</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-8 overflow-hidden">
                    <div className="h-full bg-[#6B7280] rounded-full flex items-center justify-end pr-3" style={{ width: '60%' }}>
                      <span className="text-sm text-white font-semibold">60</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 핵심 인사이트 */}
          <div className="mt-8 p-6 bg-[#F6F8FA] rounded-lg border border-[#E5E7EB]">
            <p className="text-center text-xl text-[#004B8D] font-semibold">
              실력은 최상위권이나 온라인에서 알려지지 않음
            </p>
            <p className="text-center text-base text-[#6B7280] mt-2">
              → 온라인 마케팅 강화로 인지도 격차 해소 필요
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
