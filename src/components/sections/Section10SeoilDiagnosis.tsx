/**
 * Section10SeoilDiagnosis - 서일메디컬 현황 진단 (보유자산 vs 온라인노출)
 * Nancy Duarte: 한 슬라이드 = 한 메시지 ("서일은 보유 자산을 알리지 못하고 있다")
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - 차트 부분 Section10b로 분리
 * 데이터 소스: data/seoil-medical.yaml (page 10)
 */

import { AlertTriangle, Check, X, Minus } from "lucide-react"

export function Section10SeoilDiagnosis() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-6 py-12 flex-1 flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
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

        {/* Two Column Comparison - flex-1로 남은 공간 채우기 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 flex-1">
          {/* 보유 자산 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden flex flex-col">
            <div className="bg-[#004B8D] px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>💪</span> 보유 자산 (실제)
              </h3>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {/* 고급 장비 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">고급 장비</h4>
                <div className="space-y-2.5">
                  {["3.0T MRI", "CB-CT (Cone Beam CT)", "VECTRA 3D 시뮬레이션", "클라리티 레이저"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981] flex-shrink-0" size={18} />
                      <span className="text-base text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 협진 시스템 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">협진 시스템</h4>
                <div className="space-y-2.5">
                  {[
                    "마취통증의학과 전문의 상주",
                    "영상의학과 (당일 판독)",
                    "내과·신경과 협진",
                    "정신건강의학과 연계"
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981] flex-shrink-0" size={18} />
                      <span className="text-base text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 의료진 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">의료진</h4>
                <div className="space-y-2.5">
                  {["대학병원 교수 출신", "재건성형 다수 경험"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <Check className="text-[#10B981] flex-shrink-0" size={18} />
                      <span className="text-base text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 온라인 노출 현황 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden flex flex-col">
            <div className="bg-[#6B7280] px-6 py-4">
              <h3 className="text-xl font-semibold text-white flex items-center gap-2">
                <span>🔍</span> 온라인 노출 현황
              </h3>
            </div>
            <div className="p-6 space-y-6 flex-1">
              {/* 노출 상태 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">노출 상태</h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B] flex-shrink-0" size={18} />
                    <span className="text-base text-[#1F2937]">3.0T MRI - 일부 노출</span>
                  </div>
                  {["CB-CT - 미노출", "VECTRA 3D - 미노출", "클라리티 레이저 - 미노출"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <X className="text-[#EF4444] flex-shrink-0" size={18} />
                      <span className="text-base text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 홍보 방식 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">홍보 방식</h4>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B] flex-shrink-0" size={18} />
                    <span className="text-base text-[#1F2937]">의료진 명단에만 존재</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Minus className="text-[#F59E0B] flex-shrink-0" size={18} />
                    <span className="text-base text-[#1F2937]">센터 나열 수준</span>
                  </div>
                  {["환자 관점 스토리 부재", "안전성 메시지 부재"].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <X className="text-[#EF4444] flex-shrink-0" size={18} />
                      <span className="text-base text-[#1F2937]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 경쟁사 대비 */}
              <div>
                <h4 className="text-base font-semibold text-[#6B7280] mb-3">경쟁사 대비</h4>
                <div className="space-y-2 text-base text-[#1F2937]">
                  <p>• 하늘성형외과: 30년 경력 적극 홍보</p>
                  <p>• 서일메디컬: 교수 경력 온라인 노출 미약</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
