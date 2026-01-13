/**
 * Section15Budget - 마케팅 예산안 (옵션별 비교)
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 15)
 */

import { Lightbulb } from "lucide-react"

export function Section16Budget() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">7. 마케팅 예산안 - 옵션별 비교</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* 옵션 1 */}
          <div className="bg-white border-2 border-[#004B8D] rounded-md overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-[#004B8D] text-white text-xs px-2 py-1 rounded-bl">
              추천
            </div>
            <div className="bg-[#004B8D] px-6 py-4">
              <h3 className="text-xl font-semibold text-white">옵션 1</h3>
              <p className="text-sm text-white/80">바이럴 + 파워링크</p>
              <p className="text-xs text-white/60 mt-1">전체 마케팅 통합 관리</p>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">블로그 20건</span>
                  <span className="text-[#6B7280]">150만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">지식인 20건</span>
                  <span className="text-[#6B7280]">88만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">언론보도 1건</span>
                  <span className="text-[#6B7280]">39.6만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">파워링크 광고비</span>
                  <span className="text-[#6B7280]">250만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">파워링크 운영비</span>
                  <span className="text-[#6B7280]">25만원</span>
                </div>
                <div className="text-xs text-[#6B7280] pt-2 border-t border-dashed">
                  * 미이관 시 수수료 13% +32.5만원
                </div>
              </div>
              <div className="bg-[#F6F8FA] p-4 rounded-md text-center">
                <p className="text-2xl font-bold text-[#004B8D]">552.6만원</p>
                <p className="text-xs text-[#6B7280]">미이관 시 585만원</p>
              </div>
            </div>
          </div>

          {/* 옵션 2 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#48A9C5] px-6 py-4">
              <h3 className="text-xl font-semibold text-white">옵션 2</h3>
              <p className="text-sm text-white/80">바이럴만</p>
              <p className="text-xs text-white/60 mt-1">콘텐츠 마케팅 집중</p>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">블로그 20건</span>
                  <span className="text-[#6B7280]">150만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">지식인 20건</span>
                  <span className="text-[#6B7280]">88만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">언론보도 1건</span>
                  <span className="text-[#6B7280]">39.6만원</span>
                </div>
                <div className="text-xs text-[#6B7280] pt-2 border-t border-dashed">
                  * 파워링크는 기존 내부 운영 유지
                </div>
              </div>
              <div className="bg-[#F6F8FA] p-4 rounded-md text-center mt-[84px]">
                <p className="text-2xl font-bold text-[#48A9C5]">277.6만원</p>
              </div>
            </div>
          </div>

          {/* 옵션 3 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#6B7280] px-6 py-4">
              <h3 className="text-xl font-semibold text-white">옵션 3</h3>
              <p className="text-sm text-white/80">채널 전환형</p>
              <p className="text-xs text-white/60 mt-1">기존 예산 재배분</p>
            </div>
            <div className="p-6">
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">블로그 20건 (콘텐츠만)</span>
                  <span className="text-[#6B7280]">66만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">지식인 20건</span>
                  <span className="text-[#6B7280]">88만원</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#1F2937]">언론보도 1건</span>
                  <span className="text-[#6B7280]">39.6만원</span>
                </div>
                <div className="text-xs text-[#6B7280] pt-2 border-t border-dashed">
                  * 기존 대행사 협업 구조
                </div>
              </div>
              <div className="bg-[#F6F8FA] p-4 rounded-md text-center mt-[84px]">
                <p className="text-2xl font-bold text-[#6B7280]">193.6만원</p>
              </div>
            </div>
          </div>
        </div>

        {/* 파워링크 운영 효율 분석 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden mb-8">
          <div className="bg-[#F6F8FA] px-6 py-3 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937]">파워링크 운영 효율 분석 (미이관 기준, 총 운영비 57.5만원)</h3>
            <p className="text-sm text-[#6B7280]">운영비 250,000원 + 수수료 325,000원 = 575,000원</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F6F8FA]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">클릭수 증가</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#6B7280]">이익 금액</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#6B7280]">광고비 250만원 대비</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">20% 증가</td>
                  <td className="px-6 py-3 text-sm text-center text-[#EF4444] font-medium">-75,000원</td>
                  <td className="px-6 py-3 text-sm text-center text-[#EF4444]">-3% 비효율</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">40% 증가</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981] font-medium">425,000원</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">17% 개선</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">2배 증가</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981] font-medium">1,925,000원</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">77% 개선</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-[#F6F8FA] border-t border-[#E5E7EB] space-y-1">
            <p className="text-sm text-[#1F2937]">→ 40% 이상 클릭수 증가 시 운영비 투자 대비 효율 확보</p>
            <p className="text-sm text-[#1F2937]">→ 다만, 클릭수 개선과 상관없이 노출 시간은 반드시 개선 확보 가능</p>
          </div>
        </div>

        {/* Insight Callout */}
        <div className="p-6 bg-[#F6F8FA] border-l-4 border-[#004B8D] rounded-r-lg">
          <div className="flex gap-3">
            <Lightbulb className="text-[#004B8D] flex-shrink-0 mt-1" size={24} />
            <div className="space-y-2">
              <p className="text-base font-semibold text-[#1F2937]">권고사항</p>
              <ul className="space-y-1 text-base text-[#1F2937]">
                <li>• 카페 예산 → 지식인 재배분으로 효율 개선</li>
                <li>• 전후사진 확보 후 카페 재활성화 + 예산 확장 검토</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
