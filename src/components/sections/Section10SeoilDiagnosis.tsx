/**
 * Section09SeoilDiagnosis - 서일메디컬 현황 진단
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 10)
 */

import { AlertTriangle, Check, X, Minus } from "lucide-react"

export function Section10SeoilDiagnosis() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">3.4 서일메디컬 현황 진단</h2>
          <p className="text-lg text-[#6B7280]">서일은 가진 것을 다 알리지 못하고 있습니다</p>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] mt-4" />
        </div>

        {/* Warning Callout */}
        <div className="mb-8 p-4 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-r-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-[#EF4444] flex-shrink-0" size={20} />
            <p className="text-lg text-[#1F2937] font-medium">핵심 문제: 대학병원급 인프라 보유 → 온라인 홍보 부재</p>
          </div>
        </div>

        {/* Two Column Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* 보유 자산 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#004B8D] px-6 py-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span>💪</span> 보유 자산 (실제)
              </h3>
            </div>
            <div className="p-6 space-y-6">
              {/* 고급 장비 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">고급 장비</h4>
                <div className="space-y-2">
                  {["3.0T MRI", "CB-CT (Cone Beam CT)", "VECTRA 3D 시뮬레이션", "클라리티 레이저"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981]" size={16} />
                      <span className="text-sm text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 협진 시스템 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">협진 시스템</h4>
                <div className="space-y-2">
                  {[
                    "마취통증의학과 전문의 상주",
                    "영상의학과 (당일 판독)",
                    "내과·신경과 협진",
                    "정신건강의학과 연계"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981]" size={16} />
                      <span className="text-sm text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 의료진 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">의료진</h4>
                <div className="space-y-2">
                  {["대학병원 교수 출신", "재건성형 다수 경험"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981]" size={16} />
                      <span className="text-sm text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 온라인 노출 현황 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#6B7280] px-6 py-3">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <span>🔍</span> 온라인 노출 현황
              </h3>
            </div>
            <div className="p-6 space-y-6">
              {/* 노출 상태 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">노출 상태</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B]" size={16} />
                    <span className="text-sm text-[#1F2937]">3.0T MRI - 일부 노출</span>
                  </div>
                  {["CB-CT - 미노출", "VECTRA 3D - 미노출", "클라리티 레이저 - 미노출"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <X className="text-[#EF4444]" size={16} />
                      <span className="text-sm text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 홍보 방식 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">홍보 방식</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B]" size={16} />
                    <span className="text-sm text-[#1F2937]">의료진 명단에만 존재</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B]" size={16} />
                    <span className="text-sm text-[#1F2937]">센터 나열 수준</span>
                  </div>
                  {["환자 관점 스토리 부재", "안전성 메시지 부재"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <X className="text-[#EF4444]" size={16} />
                      <span className="text-sm text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 경쟁사 대비 */}
              <div>
                <h4 className="text-sm font-semibold text-[#6B7280] mb-3">경쟁사 대비</h4>
                <div className="space-y-2 text-sm text-[#1F2937]">
                  <p>• 하늘성형외과: 30년 경력 적극 홍보</p>
                  <p>• 서일메디컬: 교수 경력 온라인 노출 미약</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gap Chart */}
        <div className="bg-white border border-[#E5E7EB] rounded-md p-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-6">실제 경쟁력 vs 온라인 인지도 격차</h3>

          <div className="space-y-6">
            {/* 실제 경쟁력 */}
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-3">실제 경쟁력</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">서일메디컬</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#004B8D] rounded-full flex items-center justify-end pr-2" style={{ width: '95%' }}>
                      <span className="text-xs text-white font-medium">95</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">하늘성형</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#48A9C5] rounded-full flex items-center justify-end pr-2" style={{ width: '80%' }}>
                      <span className="text-xs text-white font-medium">80</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">갤럭시</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#6B7280] rounded-full flex items-center justify-end pr-2" style={{ width: '60%' }}>
                      <span className="text-xs text-white font-medium">60</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 온라인 인지도 */}
            <div>
              <p className="text-sm font-medium text-[#6B7280] mb-3">온라인 인지도</p>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">서일메디컬</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#EF4444] rounded-full flex items-center justify-end pr-2" style={{ width: '10%' }}>
                      <span className="text-xs text-white font-medium">10</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">하늘성형</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#10B981] rounded-full flex items-center justify-end pr-2" style={{ width: '90%' }}>
                      <span className="text-xs text-white font-medium">90</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-24 text-sm text-[#1F2937]">갤럭시</span>
                  <div className="flex-1 bg-[#E5E7EB] rounded-full h-6 overflow-hidden">
                    <div className="h-full bg-[#6B7280] rounded-full flex items-center justify-end pr-2" style={{ width: '60%' }}>
                      <span className="text-xs text-white font-medium">60</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-[#F6F8FA] rounded-md">
            <p className="text-center text-[#004B8D] font-medium">
              실력은 최상위권이나 온라인에서 알려지지 않음
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
