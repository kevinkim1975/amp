import { Lightbulb } from "lucide-react"

export default function Section16BudgetOptions() {
  return (
    <div className="flex flex-col justify-center px-16 py-8">
      {/* Section Header */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-[#004B8D] mb-3">7. 마케팅 예산안 - 옵션별 비교</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-full mx-auto"></div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-3 gap-6 mb-6">
        {/* Option 1 - Recommended */}
        <div className="relative bg-white rounded-2xl shadow-lg border-2 border-[#004B8D] flex flex-col h-full">
          {/* Recommended Badge */}
          <div className="absolute -top-3 right-6">
            <span className="bg-gradient-to-r from-[#004B8D] to-[#48A9C5] text-white px-4 py-1 rounded-full text-sm font-semibold shadow-md">
              추천
            </span>
          </div>

          <div className="p-6 flex flex-col flex-grow">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-[#004B8D] mb-1">옵션 1</h3>
              <p className="text-base font-semibold text-slate-700 mb-1">바이럴 + 파워링크</p>
              <p className="text-sm text-slate-600">전체 마케팅 통합 관리</p>
            </div>

            {/* Items */}
            <div className="space-y-2 mb-4 flex-grow text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">블로그 20건</span>
                <span className="font-semibold text-slate-900">150만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">지식인 20건</span>
                <span className="font-semibold text-slate-900">88만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">언론보도 1건</span>
                <span className="font-semibold text-slate-900">39.6만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">파워링크 광고비</span>
                <span className="font-semibold text-slate-900">250만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">파워링크 운영비</span>
                <span className="font-semibold text-slate-900">25만원</span>
              </div>
            </div>

            {/* Note */}
            <div className="mb-3">
              <p className="text-xs text-[#48A9C5] italic">* 미이관 시 수수료 13% +32.5만원</p>
            </div>

            {/* Total */}
            <div className="bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-xl p-4 mt-auto">
              <div className="flex justify-between items-center mb-1">
                <span className="text-white font-semibold text-sm">합계</span>
                <span className="text-white text-xl font-bold">552.6만원</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-xs">미이관 시</span>
                <span className="text-white text-base font-semibold">585만원</span>
              </div>
            </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-800 mb-1">옵션 2</h3>
              <p className="text-base font-semibold text-slate-700 mb-1">바이럴만</p>
              <p className="text-sm text-slate-600">콘텐츠 마케팅 집중</p>
            </div>

            {/* Items */}
            <div className="space-y-2 mb-4 flex-grow text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">블로그 20건</span>
                <span className="font-semibold text-slate-900">150만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">지식인 20건</span>
                <span className="font-semibold text-slate-900">88만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">언론보도 1건</span>
                <span className="font-semibold text-slate-900">39.6만원</span>
              </div>
            </div>

            {/* Note */}
            <div className="mb-3">
              <p className="text-xs text-slate-500 italic">* 파워링크는 기존 내부 운영 유지</p>
            </div>

            {/* Total */}
            <div className="bg-slate-100 rounded-xl p-4 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-semibold text-sm">합계</span>
                <span className="text-slate-900 text-xl font-bold">277.6만원</span>
              </div>
            </div>
          </div>
        </div>

        {/* Option 3 */}
        <div className="bg-white rounded-2xl shadow-md border border-slate-200 flex flex-col h-full">
          <div className="p-6 flex flex-col flex-grow">
            {/* Header */}
            <div className="mb-4">
              <h3 className="text-xl font-bold text-slate-800 mb-1">옵션 3</h3>
              <p className="text-base font-semibold text-slate-700 mb-1">채널 전환형</p>
              <p className="text-sm text-slate-600">기존 예산 재배분</p>
            </div>

            {/* Items */}
            <div className="space-y-2 mb-4 flex-grow text-sm">
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">블로그 20건 (콘텐츠만)</span>
                <span className="font-semibold text-slate-900">66만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">지식인 20건</span>
                <span className="font-semibold text-slate-900">88만원</span>
              </div>
              <div className="flex justify-between items-center py-1.5 border-b border-slate-100">
                <span className="text-slate-700">언론보도 1건</span>
                <span className="font-semibold text-slate-900">39.6만원</span>
              </div>
            </div>

            {/* Note */}
            <div className="mb-3">
              <p className="text-xs text-slate-500 italic">* 기존 대행사 협업 구조</p>
            </div>

            {/* Total */}
            <div className="bg-slate-100 rounded-xl p-4 mt-auto">
              <div className="flex justify-between items-center">
                <span className="text-slate-700 font-semibold text-sm">합계</span>
                <span className="text-slate-900 text-xl font-bold">193.6만원</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="bg-gradient-to-r from-amber-50 to-amber-100/50 border-l-4 border-amber-500 rounded-lg p-4 flex items-center gap-3">
        <div className="flex-shrink-0">
          <div className="bg-amber-500 rounded-full p-2">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
        </div>
        <p className="text-slate-800 font-medium text-sm">
          <span className="font-bold text-[#004B8D]">권고:</span> 옵션 1 추천 - 통합 관리로 시너지 효과 극대화
        </p>
      </div>
    </div>
  )
}
