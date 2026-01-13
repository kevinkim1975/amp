import { Lightbulb } from "lucide-react"

export default function Section16BudgetAnalysis() {
  return (
    <div className="flex flex-col justify-center px-16 py-8">
      {/* Section Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-[#004B8D] mb-3">7. 마케팅 예산안 - 파워링크 효율 분석</h2>
        <div className="h-1 w-32 bg-gradient-to-r from-[#004B8D] via-[#48A9C5] to-transparent rounded-full mx-auto" />
      </div>

      {/* Main Analysis Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-5">
        {/* Card Header */}
        <div className="mb-5 text-center">
          <h3 className="text-xl font-bold text-[#004B8D] mb-2">
            파워링크 운영 효율 분석 (미이관 기준, 총 운영비 57.5만원)
          </h3>
          <p className="text-base text-slate-600">운영비 250,000원 + 수수료 325,000원 = 575,000원</p>
        </div>

        {/* Scenario Cards */}
        <div className="grid grid-cols-3 gap-5 mb-5">
          {/* Scenario 1 - Negative */}
          <div className="bg-gradient-to-br from-red-50 to-white border-2 border-red-200 rounded-xl p-5">
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-600 mb-2">클릭수 20% 증가</div>
              <div className="text-2xl font-bold text-red-600 mb-2">-75,000원</div>
              <div className="inline-block bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                -3% 비효율
              </div>
            </div>
          </div>

          {/* Scenario 2 - Positive */}
          <div className="bg-gradient-to-br from-emerald-50 to-white border-2 border-emerald-200 rounded-xl p-5">
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-600 mb-2">클릭수 40% 증가</div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">425,000원</div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                17% 개선
              </div>
            </div>
          </div>

          {/* Scenario 3 - Best */}
          <div className="bg-gradient-to-br from-emerald-50 via-emerald-100/50 to-white border-2 border-emerald-300 rounded-xl p-5 shadow-md">
            <div className="text-center">
              <div className="text-sm font-semibold text-slate-600 mb-2">클릭수 2배 증가</div>
              <div className="text-2xl font-bold text-emerald-600 mb-2">1,925,000원</div>
              <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-semibold">
                77% 개선
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Notes */}
        <div className="space-y-1.5 bg-slate-50 rounded-xl p-4 border border-slate-200">
          <p className="text-slate-700 flex items-start text-sm">
            <span className="text-[#48A9C5] font-bold mr-2">→</span>
            <span>40% 이상 클릭수 증가 시 운영비 투자 대비 효율 확보</span>
          </p>
          <p className="text-slate-700 flex items-start text-sm">
            <span className="text-[#48A9C5] font-bold mr-2">→</span>
            <span>다만, 클릭수 개선과 상관없이 노출 시간은 반드시 개선 확보 가능</span>
          </p>
        </div>
      </div>

      {/* Bottom Callout */}
      <div className="bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-2xl shadow-lg p-5 text-white">
        <div className="flex items-start gap-4">
          <div className="bg-white/20 rounded-full p-2.5 flex-shrink-0">
            <Lightbulb className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold mb-2">권고사항</h4>
            <div className="space-y-1.5 text-sm">
              <p className="flex items-start text-white/95">
                <span className="mr-2">•</span>
                <span>카페 예산 → 지식인 재배분으로 효율 개선</span>
              </p>
              <p className="flex items-start text-white/95">
                <span className="mr-2">•</span>
                <span>전후사진 확보 후 카페 재활성화 + 예산 확장 검토</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
