/**
 * Section09CosmeticComparison - 미용성형 경쟁사 비교 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13 - 2페이지 분리 (비교 테이블 + 현황)
 * 데이터 소스: data/seoil-medical.yaml (page 9)
 */

import { AlertTriangle, TrendingUp, CheckCircle2, XCircle } from "lucide-react"

export function Section09CosmeticComparison() {
  const comparisonData = [
    {
      item: "채널 수",
      sky: { value: "4", type: "number" },
      galaxy: { value: "2", type: "number" },
      iandco: { value: "3", type: "number" },
    },
    {
      item: "전후사진",
      sky: { value: true, type: "boolean" },
      galaxy: { value: true, type: "boolean" },
      iandco: { value: true, type: "boolean" },
    },
    {
      item: "마취전문의",
      sky: { value: true, type: "boolean" },
      galaxy: { value: true, type: "boolean" },
      iandco: { value: false, type: "boolean" },
    },
    {
      item: "점유율",
      sky: { value: "44%", type: "highlight" },
      galaxy: { value: "21%", type: "highlight" },
      iandco: { value: "19%", type: "highlight" },
    },
  ]

  const renderCell = (data: { value: string | boolean; type: string }) => {
    if (data.type === "boolean") {
      return data.value ? (
        <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />
      ) : (
        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    if (data.type === "highlight") {
      return (
        <span className="font-bold text-[#004B8D] text-lg">{data.value}</span>
      )
    }
    return <span className="text-[#1F2937]">{data.value}</span>
  }

  return (
    <section className="min-h-[calc(100vh-144px)] bg-white flex flex-col justify-start">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-3">
            3.3 미용성형 경쟁사 비교 분석
          </h2>
          <div className="mx-auto w-20 h-1 bg-gradient-to-r from-[#004B8D] to-[#48A9C5] rounded-full" />
          <p className="mt-4 text-[#6B7280]">
            부산 서면 지역 미용성형 TOP 3 경쟁사 핵심 지표 비교
          </p>
        </div>

        {/* 비교 테이블 */}
        <div className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-[#004B8D] to-[#48A9C5] px-6 py-4">
            <h3 className="text-xl font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              경쟁사 비교 요약
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#F8FAFC]">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-[#374151] w-1/4">
                    항목
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#374151] w-1/4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl">🥇</span>
                      <span>하늘성형</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#374151] w-1/4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl">🥈</span>
                      <span>갤럭시성형</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-[#374151] w-1/4">
                    <div className="flex flex-col items-center gap-1">
                      <span className="text-xl">🥉</span>
                      <span>아이앤코</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                {comparisonData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? "bg-white" : "bg-[#F8FAFC]/50"}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#374151]">
                      {row.item}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {renderCell(row.sky)}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {renderCell(row.galaxy)}
                    </td>
                    <td className="px-6 py-4 text-sm text-center">
                      {renderCell(row.iandco)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 서일메디컬 현황 Callout */}
        <div className="bg-gradient-to-r from-[#FEF2F2] to-[#FFF7ED] border-l-4 border-[#EF4444] rounded-lg p-6 shadow-sm">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-[#EF4444]/10 rounded-full flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
              </div>
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-[#1F2937] mb-3">
                서일메디컬 현황 진단
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF4444]">1</p>
                  <p className="text-sm text-[#6B7280]">채널 수</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF4444]">✕</p>
                  <p className="text-sm text-[#6B7280]">전후사진</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3 text-center">
                  <p className="text-2xl font-bold text-[#EF4444]">0%</p>
                  <p className="text-sm text-[#6B7280]">점유율</p>
                </div>
              </div>
              <div className="bg-white/80 rounded-lg p-4">
                <p className="text-base font-semibold text-[#DC2626]">
                  → 다채널 전략 + 콘텐츠 차별화 필요
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
