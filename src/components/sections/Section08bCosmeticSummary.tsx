/**
 * Section08bCosmeticSummary - 미용성형 경쟁사 비교 요약
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 8 분리)
 */

import { AlertTriangle, TrendingUp, Target, Zap } from "lucide-react"

export function Section08bCosmeticSummary() {
  const comparisonData = [
    { item: "채널 수", haneul: "4", galaxy: "2", iandco: "3" },
    { item: "전후사진", haneul: "●", galaxy: "●", iandco: "●", isIcon: true },
    { item: "마취전문의", haneul: "●", galaxy: "●", iandco: "-", isIcon: true },
    { item: "점유율", haneul: "44%", galaxy: "21%", iandco: "19%", isHighlight: true },
  ]

  const insights = [
    {
      icon: TrendingUp,
      title: "채널 다각화",
      desc: "상위 경쟁사 평균 3채널 운영",
    },
    {
      icon: Target,
      title: "전후사진 필수",
      desc: "모든 경쟁사가 활용 중",
    },
    {
      icon: Zap,
      title: "전문성 차별화",
      desc: "각자 고유 포지셔닝 확보",
    },
  ]

  return (
    <section className="min-h-[calc(100vh-144px)] bg-gradient-to-b from-white to-[#F8FAFC] flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-[#48A9C5] mb-2 tracking-wide">
            3.3 미용성형 경쟁사 분석
          </p>
          <h2 className="text-3xl font-semibold text-[#004B8D] mb-3">
            경쟁사 비교 요약
          </h2>
          <div className="mx-auto w-16 h-1 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-full" />
        </div>

        {/* Comparison Table */}
        <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden shadow-sm mb-8">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-[#004B8D] to-[#0066B3]">
                <th className="px-6 py-4 text-left text-sm font-semibold text-white">항목</th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  🥇 하늘
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  🥈 갤럭시
                </th>
                <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                  🥉 아이앤코
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-[#E5E7EB] last:border-b-0 ${
                    idx % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"
                  } hover:bg-[#F0F7FF] transition-colors`}
                >
                  <td className="px-6 py-4 text-sm font-medium text-[#1F2937]">
                    {row.item}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    row.isIcon ? "text-lg" : row.isHighlight ? "text-base font-bold text-[#004B8D]" : "text-sm text-[#1F2937]"
                  }`}>
                    {row.isIcon ? (
                      <span className={row.haneul === "●" ? "text-[#10B981]" : "text-[#9CA3AF]"}>
                        {row.haneul}
                      </span>
                    ) : row.haneul}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    row.isIcon ? "text-lg" : row.isHighlight ? "text-base font-bold text-[#004B8D]" : "text-sm text-[#1F2937]"
                  }`}>
                    {row.isIcon ? (
                      <span className={row.galaxy === "●" ? "text-[#10B981]" : "text-[#9CA3AF]"}>
                        {row.galaxy}
                      </span>
                    ) : row.galaxy}
                  </td>
                  <td className={`px-6 py-4 text-center ${
                    row.isIcon ? "text-lg" : row.isHighlight ? "text-base font-bold text-[#004B8D]" : "text-sm text-[#1F2937]"
                  }`}>
                    {row.isIcon ? (
                      <span className={row.iandco === "●" ? "text-[#10B981]" : "text-[#9CA3AF]"}>
                        {row.iandco}
                      </span>
                    ) : row.iandco}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Insight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {insights.map((insight, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E5E7EB] rounded-lg p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-10 h-10 rounded-lg bg-[#004B8D]/10 flex items-center justify-center shrink-0">
                <insight.icon className="w-5 h-5 text-[#004B8D]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1F2937] mb-1">{insight.title}</p>
                <p className="text-sm text-[#6B7280]">{insight.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Warning Callout - 서일메디컬 현황 */}
        <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FEE2E2] border-l-4 border-[#EF4444] rounded-r-xl p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-full bg-[#EF4444]/10 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-[#EF4444]" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-[#991B1B] mb-2">
                서일메디컬 현황
              </h3>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full">
                  <span className="text-[#6B7280]">채널 수:</span>
                  <span className="font-semibold text-[#EF4444]">1개</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full">
                  <span className="text-[#6B7280]">전후사진:</span>
                  <span className="font-semibold text-[#EF4444]">✕</span>
                </span>
                <span className="inline-flex items-center gap-2 bg-white/60 px-3 py-1.5 rounded-full">
                  <span className="text-[#6B7280]">점유율:</span>
                  <span className="font-semibold text-[#EF4444]">0%</span>
                </span>
              </div>
              <p className="mt-3 text-base font-medium text-[#991B1B]">
                → 다채널 전략 + 콘텐츠 차별화 필요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
