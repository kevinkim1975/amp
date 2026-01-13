/**
 * Section08Cosmetic - 미용성형 경쟁사 분석 (부산 지역)
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 데이터 소스: data/seoil-medical.yaml (page 9)
 */

import { AlertTriangle } from "lucide-react"

export function Section08Cosmetic() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-[#004B8D] mb-2">3.3 미용성형 경쟁사 분석 - 부산 지역</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* 2x2 Grid - 경쟁사 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* 하늘성형외과 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥇</span>
              <h3 className="text-xl font-semibold text-[#004B8D]">하늘성형외과 (점유율 44%)</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">위치</span>
                <span className="text-[#1F2937]">서면 에이스메디칼타워 3~10층</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">규모</span>
                <span className="text-[#1F2937]">8개층 운영</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">경력</span>
                <span className="text-[#1F2937]">대표원장 30년+, 마취전문의 32년</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">채널 전략</span>
                <span className="text-[#1F2937]">4채널 동시 운영</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">핵심 강점</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  강남언니 후기 5,057건, 전후사진 적극 활용, 30년 경력 강조
                </p>
              </div>
            </div>
          </div>

          {/* 갤럭시성형외과 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥈</span>
              <h3 className="text-xl font-semibold text-[#004B8D]">갤럭시성형외과 (점유율 21%)</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">위치</span>
                <span className="text-[#1F2937]">서면 롯데백화점 후문 2~3층</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">대표</span>
                <span className="text-[#1F2937]">신정훈 원장</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">포지셔닝</span>
                <span className="text-[#1F2937]">바른성형 원칙</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">채널 전략</span>
                <span className="text-[#1F2937]">2채널 운영 (블로그, 카페)</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">핵심 강점</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  재수술 전문 포지셔닝, 과잉진료 반대 → 신뢰 구축
                </p>
              </div>
            </div>
          </div>

          {/* 아이앤코성형외과 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md p-6 shadow-sm md:col-span-2 md:max-w-[calc(50%-12px)]">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🥉</span>
              <h3 className="text-xl font-semibold text-[#004B8D]">아이앤코성형외과 (점유율 19%)</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-[#6B7280]">위치</span>
                <span className="text-[#1F2937]">서면 마일드빌딩2 3~4층</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">포지셔닝</span>
                <span className="text-[#1F2937]">눈, 코 전문</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#6B7280]">채널 전략</span>
                <span className="text-[#1F2937]">3채널 운영 (블로그, 지식인, 뉴스)</span>
              </div>
              <div className="pt-2 border-t border-[#E5E7EB]">
                <p className="text-[#6B7280] mb-1">핵심 강점</p>
                <p className="text-[#1F2937] text-xs leading-relaxed">
                  리얼모델 전후사진 공개, 눈/코 시술 범위 좁혀 전문성 강조
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 경쟁사 비교 요약 테이블 */}
        <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden mb-8">
          <div className="bg-[#F6F8FA] px-6 py-3 border-b border-[#E5E7EB]">
            <h3 className="text-lg font-semibold text-[#1F2937]">경쟁사 비교 요약</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-[#F6F8FA]">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-[#6B7280]">항목</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#6B7280]">하늘</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#6B7280]">갤럭시</th>
                  <th className="px-6 py-3 text-center text-sm font-medium text-[#6B7280]">아이앤코</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E5E7EB]">
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">채널 수</td>
                  <td className="px-6 py-3 text-sm text-center text-[#1F2937]">4</td>
                  <td className="px-6 py-3 text-sm text-center text-[#1F2937]">2</td>
                  <td className="px-6 py-3 text-sm text-center text-[#1F2937]">3</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">전후사진</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">●</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">●</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">●</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">마취전문의</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">●</td>
                  <td className="px-6 py-3 text-sm text-center text-[#10B981]">●</td>
                  <td className="px-6 py-3 text-sm text-center text-[#6B7280]">-</td>
                </tr>
                <tr>
                  <td className="px-6 py-3 text-sm text-[#1F2937]">점유율</td>
                  <td className="px-6 py-3 text-sm text-center font-semibold text-[#004B8D]">44%</td>
                  <td className="px-6 py-3 text-sm text-center font-semibold text-[#004B8D]">21%</td>
                  <td className="px-6 py-3 text-sm text-center font-semibold text-[#004B8D]">19%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Warning Callout */}
        <div className="p-6 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-r-lg">
          <div className="flex gap-3">
            <AlertTriangle className="text-[#EF4444] flex-shrink-0 mt-0.5" size={24} />
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-2">서일메디컬 현황</p>
              <p className="text-base text-[#1F2937]">
                채널 수: 1 / 전후사진: ✕ / 점유율: 0% → 다채널 전략 + 콘텐츠 차별화 필요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
