/**
 * Section07Reconstruction - 재건성형 경쟁사 분석 (대학병원)
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 8)
 */

import { Check } from "lucide-react"

export function Section07Reconstruction() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">3.2 재건성형 경쟁사 분석 - 대학병원</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Three Column Grid - 대학병원 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 부산대학교병원 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#004B8D] mb-4">부산대학교병원</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">설립</span>
                <span className="text-[#1F2937]">1976년 성형외과</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">등급</span>
                <span className="text-[#1F2937]">상급종합병원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">장비</span>
                <span className="text-[#1F2937]">다빈치 로봇 3대</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">실적</span>
                <span className="text-[#1F2937]">로봇수술 5,000례</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">주요 의료진</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  배용찬(소아성형,유방), 남수봉(유방재건), 김주형(수부외상), 이재우(소아재건)
                </p>
              </div>
            </div>
          </div>

          {/* 고신대학교복음병원 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#004B8D] mb-4">고신대학교복음병원</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">설립</span>
                <span className="text-[#1F2937]">1951년</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">규모</span>
                <span className="text-[#1F2937]">957병상</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">특징</span>
                <span className="text-[#1F2937]">부산 최고령 대학병원</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">암센터</span>
                <span className="text-[#1F2937]">지방 최초 (1978)</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">진료과 구성</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  성형외과(미용/재건), 유방외과(별도 운영)
                </p>
              </div>
            </div>
          </div>

          {/* 동아대학교병원 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-[#004B8D] mb-4">동아대학교병원</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">위치</span>
                <span className="text-[#1F2937]">부산 서구</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">특수</span>
                <span className="text-[#1F2937]">구순구개열 지정기관</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">주요 의료진</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  이동민(유방재건), 이근철(안면윤곽)
                </p>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">역대 인물</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  김석권 - 성전환수술 대부, 수술 1만건+
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 대학병원 공통 */}
          <div className="bg-[#F6F8FA] border border-[#E5E7EB] rounded-md p-6">
            <h3 className="text-lg font-semibold text-[#1F2937] mb-4">대학병원 공통</h3>
            <ul className="space-y-2 text-[#1F2937]">
              <li className="flex items-start gap-2">
                <span className="text-[#10B981] font-medium">강점:</span>
                <span>종합병원 인프라, 브랜드</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#EF4444] font-medium">약점:</span>
                <span>긴 대기, 접근성 낮음</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#6B7280] font-medium">온라인:</span>
                <span>마케팅 소극적</span>
              </li>
            </ul>
          </div>

          {/* 서일메디컬 차별화 포인트 */}
          <div className="bg-white border-2 border-[#004B8D] rounded-md p-6">
            <h3 className="text-lg font-semibold text-[#004B8D] mb-4">서일메디컬 차별화 포인트</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="text-[#10B981] flex-shrink-0 mt-0.5" size={18} />
                <span className="text-[#1F2937]">부산대 교수 경력 → 대학병원급 전문성</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#10B981] flex-shrink-0 mt-0.5" size={18} />
                <span className="text-[#1F2937]">개인병원 접근성 → 빠른 예약, 밀착 케어</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="text-[#10B981] flex-shrink-0 mt-0.5" size={18} />
                <span className="text-[#1F2937]">재건+미용 통합 → 원스톱 진료</span>
              </li>
              <li className="flex items-start gap-3 pt-2 border-t border-[#E5E7EB]">
                <span className="text-[#004B8D] font-medium">→ 대학병원 온라인 소극적 = 키워드 선점 기회</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
