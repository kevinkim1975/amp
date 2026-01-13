/**
 * Section14PhotoStrategy - 전략 제안: 전후사진 확보 전략
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - v0.dev MCP 기반 컴팩트 레이아웃
 * - 하단 겹침 해결: py-12 → py-5, mb-8 → mb-4
 * - 카드 내부 간격 축소: space-y-6 → space-y-3
 * - 한 페이지에 모든 콘텐츠 표시 (스크롤 없음)
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 14)
 */

import { AlertTriangle, Lightbulb, Camera, FileText } from "lucide-react"

export function Section14PhotoStrategy() {
  return (
    <section className="min-h-[calc(100vh-144px)] bg-white">
      <div className="max-w-7xl mx-auto px-6 py-5">
        {/* Section Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-semibold text-[#004B8D] mb-2">6. 전략 제안 - 전후사진 확보 전략 (최우선)</h2>
          <div className="mx-auto w-16 h-0.5 bg-gradient-to-r from-[#004B8D] to-[#48A9C5]" />
        </div>

        {/* Warning Callout */}
        <div className="mb-4 p-3 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-r-lg">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-[#EF4444] flex-shrink-0" size={18} />
            <p className="text-sm text-[#1F2937] font-medium">
              전후사진 = 성형외과 마케팅의 핵심 자산 → 확보 프로세스 구축 필수
            </p>
          </div>
        </div>

        {/* Two Column Strategy */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* 사진 확보 방안 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#004B8D] px-4 py-2 flex items-center gap-2">
              <Camera className="text-white" size={16} />
              <h3 className="text-sm font-semibold text-white">사진 확보 방안 (1~3개월)</h3>
            </div>
            <div className="p-4 space-y-3">
              {/* 기존 환자 동의 획득 */}
              <div>
                <h4 className="text-xs font-semibold text-[#004B8D] mb-1.5">① 기존 환자 동의 획득</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    재방문 환자 대상 동의서 수집
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    혜택 제공 (리터치 시술 할인 등)
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    익명 처리 옵션 안내
                  </li>
                </ul>
              </div>

              {/* 신규 환자 동의 프로세스 */}
              <div>
                <h4 className="text-xs font-semibold text-[#004B8D] mb-1.5">② 신규 환자 동의 프로세스</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    초진 시 사진 촬영 + 동의 루틴화
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    마케팅 동의서 표준 양식 마련
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    환자 혜택 프로그램 연계
                  </li>
                </ul>
              </div>

              {/* 일러스트/3D 시뮬레이션 활용 */}
              <div>
                <h4 className="text-xs font-semibold text-[#004B8D] mb-1.5">③ 일러스트/3D 시뮬레이션 활용</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    시술 전후 예상 결과 일러스트
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    유방재건 과정 애니메이션
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 대체 콘텐츠 전략 */}
          <div className="bg-white border border-[#E5E7EB] rounded-md overflow-hidden">
            <div className="bg-[#48A9C5] px-4 py-2 flex items-center gap-2">
              <FileText className="text-white" size={16} />
              <h3 className="text-sm font-semibold text-white">대체 콘텐츠 전략 (사진 확보 전)</h3>
            </div>
            <div className="p-4 space-y-3">
              {/* 시술 과정/원리 설명 콘텐츠 */}
              <div>
                <h4 className="text-xs font-semibold text-[#48A9C5] mb-1.5">① 시술 과정/원리 설명 콘텐츠</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    인포그래픽 활용
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    수술 과정 상세 설명
                  </li>
                </ul>
              </div>

              {/* 의료진 전문성 콘텐츠 */}
              <div>
                <h4 className="text-xs font-semibold text-[#48A9C5] mb-1.5">② 의료진 전문성 콘텐츠</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    의료진 인터뷰/칼럼
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    논문/학술자료 기반 콘텐츠
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    부산대 교수 경력 강조
                  </li>
                </ul>
              </div>

              {/* 시설/장비 소개 콘텐츠 */}
              <div>
                <h4 className="text-xs font-semibold text-[#48A9C5] mb-1.5">③ 시설/장비 소개 콘텐츠</h4>
                <ul className="space-y-1 text-xs text-[#1F2937] ml-3">
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    수술실/장비 소개
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    3.0T MRI, VECTRA 3D 등
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-[#10B981]">•</span>
                    협진 시스템 안내
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Insight Callout */}
        <div className="p-4 bg-[#F6F8FA] border-l-4 border-[#004B8D] rounded-r-lg">
          <div className="flex gap-2 items-center">
            <Lightbulb className="text-[#004B8D] flex-shrink-0" size={20} />
            <p className="text-sm text-[#1F2937] font-medium">
              핵심 메시지: 사진 확보는 중장기 과제, 당장은 대체 콘텐츠로 전문성 어필
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
