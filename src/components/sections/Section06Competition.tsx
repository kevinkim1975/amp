/**
 * Section06Competition - 경쟁사 분석: 경쟁 구도 개요
 * Design Guide (docs/design-guide.md) 기반
 * 
 * 생성: 2026-01-13
 * v0.dev MCP로 자동 생성
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 7)
 */

import { Info, Lightbulb } from "lucide-react"

export function Section06Competition() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">3. 경쟁사 분석 - 경쟁 구도 개요</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Info Callout */}
        <div className="mb-8 p-4 bg-[#F6F8FA] border-l-4 border-[#48A9C5] rounded-r-lg">
          <div className="flex items-center gap-2">
            <Info className="text-[#48A9C5] flex-shrink-0" size={20} />
            <p className="text-lg text-[#1F2937]">서일메디컬은 두 가지 시장에서 경쟁합니다</p>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 재건성형 시장 카드 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#004B8D] mb-6">재건성형 시장</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">경쟁 유형</p>
                <p className="text-base text-[#1F2937]">대학병원 + 전문 클리닉</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">주요 경쟁사</p>
                <p className="text-base text-[#1F2937]">부산대학교병원, 고신대학교복음병원, 동아대학교병원</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">경쟁 특징</p>
                <p className="text-base text-[#1F2937]">대학병원들 온라인 마케팅 소극적 → 키워드 선점 기회</p>
              </div>
            </div>
          </div>

          {/* 미용성형 시장 카드 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[#004B8D] mb-6">미용성형 시장</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">경쟁 유형</p>
                <p className="text-base text-[#1F2937]">온라인 노출 경쟁</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">주요 경쟁사</p>
                <p className="text-base text-[#1F2937]">
                  하늘성형외과 (44%), 갤럭시성형외과 (21%), 아이앤코성형외과 (19%)
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#6B7280] mb-1">경쟁 특징</p>
                <p className="text-base text-[#1F2937]">하늘성형외과가 4채널 동시 운영으로 압도적 1위 점유</p>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Callout */}
        <div className="p-6 bg-[#F6F8FA] border-l-4 border-[#004B8D] rounded-r-lg">
          <div className="flex gap-3">
            <Lightbulb className="text-[#004B8D] flex-shrink-0 mt-1" size={24} />
            <div className="space-y-2">
              <p className="text-base font-medium text-[#1F2937]">서일메디컬 포지션</p>
              <ul className="space-y-1.5 text-base text-[#1F2937]">
                <li>• 재건성형: 대학병원급 전문성 + 개인병원 접근성 → 차별화 가능</li>
                <li>• 미용성형: 온라인 노출 0% → 신규 진입 전략 필요</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
