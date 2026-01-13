import { Lightbulb } from "lucide-react"

export default function Section16BudgetAnalysis() {
  return (
    <div className="min-h-[calc(100vh-144px)] flex items-center justify-center px-8 py-6">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-bold text-[#004B8D] mb-2">7. 마케팅 예산안 - 파워링크 효율 분석</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-full mx-auto" />
        </div>

        {/* Main Layout: 2 Columns */}
        <div className="grid grid-cols-10 gap-4">
          {/* Left Column - Main Analysis (70%) */}
          <div className="col-span-7 bg-white rounded-xl shadow-lg p-5">
            {/* Subheader */}
            <div className="mb-4 text-center">
              <h3 className="text-lg font-bold text-[#004B8D] mb-1">
                파워링크 운영 효율 분석 (미이관 기준, 총 운영비 57.5만원)
              </h3>
              <p className="text-sm text-slate-600">운영비 250,000원 + 수수료 325,000원 = 575,000원</p>
            </div>

            {/* Scenario Cards */}
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Scenario 1 - Red */}
              <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-4">
                <div className="text-center mb-2">
                  <div className="text-sm font-semibold text-red-900 mb-1">클릭수 20% 증가</div>
                  <div className="text-2xl font-bold text-red-600">-75,000원</div>
                </div>
                <div className="flex justify-center">
                  <span className="inline-block bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    -3% 비효율
                  </span>
                </div>
              </div>

              {/* Scenario 2 - Green */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-2 border-emerald-300 rounded-lg p-4">
                <div className="text-center mb-2">
                  <div className="text-sm font-semibold text-emerald-900 mb-1">클릭수 40% 증가</div>
                  <div className="text-2xl font-bold text-emerald-600">425,000원</div>
                </div>
                <div className="flex justify-center">
                  <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    17% 개선
                  </span>
                </div>
              </div>

              {/* Scenario 3 - Green Highlighted */}
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 border-4 border-emerald-500 rounded-lg p-4 shadow-md">
                <div className="text-center mb-2">
                  <div className="text-sm font-semibold text-emerald-900 mb-1">클릭수 2배 증가</div>
                  <div className="text-2xl font-bold text-emerald-600">1,925,000원</div>
                </div>
                <div className="flex justify-center">
                  <span className="inline-block bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    77% 개선
                  </span>
                </div>
              </div>
            </div>

            {/* Analysis Notes */}
            <div className="bg-slate-50 rounded-lg p-3 space-y-1.5 border border-slate-200">
              <p className="text-sm text-slate-700 flex items-start">
                <span className="text-[#48A9C5] font-bold mr-2">→</span>
                <span>40% 이상 클릭수 증가 시 운영비 투자 대비 효율 확보</span>
              </p>
              <p className="text-sm text-slate-700 flex items-start">
                <span className="text-[#48A9C5] font-bold mr-2">→</span>
                <span>다만, 클릭수 개선과 상관없이 노출 시간은 반드시 개선 확보 가능</span>
              </p>
            </div>
          </div>

          {/* Right Column - Recommendations Sidebar (30%) */}
          <div className="col-span-3 bg-gradient-to-br from-[#004B8D] to-[#48A9C5] rounded-xl shadow-lg p-5 text-white flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 rounded-full p-2">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">권고사항</h3>
            </div>

            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">•</span>
                <p className="text-sm leading-relaxed">카페 예산 → 지식인 재배분으로 효율 개선</p>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg mt-0.5">•</span>
                <p className="text-sm leading-relaxed">전후사진 확보 후 카페 재활성화 + 예산 확장 검토</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
