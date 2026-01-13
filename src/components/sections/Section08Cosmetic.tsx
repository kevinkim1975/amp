/**
 * Section08Cosmetic - 미용성형 경쟁사 분석 (부산 지역)
 * Design Guide (docs/design-guide.md) 기반
 *
 * 생성: 2026-01-13
 * 수정: 2026-01-13 - 레이아웃 개선 (푸터와 콘텐츠 간격 최적화)
 * 
 * 30년차 디자이너 원칙:
 * - 한 화면 = 한 주제 (3개 경쟁사 카드)
 * - 빈 공간 제거, 콘텐츠와 푸터 간격 최적화
 * - Design Guide의 max-w-content (1280px) 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 9)
 */

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface CompetitorDetail {
  readonly label: string;
  readonly value: string;
}

interface Competitor {
  readonly rank: string;
  readonly name: string;
  readonly share: string;
  readonly color: string;
  readonly details: readonly CompetitorDetail[];
  readonly strength: string;
}

// ============================================================================
// Sample Data (YAML page 9 기반)
// ============================================================================

const competitors: readonly Competitor[] = [
  {
    rank: "🥇",
    name: "하늘성형외과",
    share: "44%",
    color: "from-yellow-400 to-amber-500",
    details: [
      { label: "위치", value: "서면 에이스메디칼타워 3~10층" },
      { label: "규모", value: "8개층 운영" },
      { label: "경력", value: "대표원장 30년+, 마취전문의 32년" },
      { label: "채널 전략", value: "4채널 동시 운영" },
    ],
    strength: "강남언니 후기 5,057건, 전후사진 적극 활용, 30년 경력 강조",
  },
  {
    rank: "🥈",
    name: "갤럭시성형외과",
    share: "21%",
    color: "from-gray-300 to-gray-400",
    details: [
      { label: "위치", value: "서면 롯데백화점 후문 2~3층" },
      { label: "대표", value: "신정훈 원장" },
      { label: "포지셔닝", value: "바른성형 원칙" },
      { label: "채널 전략", value: "2채널 운영 (블로그, 카페)" },
    ],
    strength: "재수술 전문 포지셔닝, 과잉진료 반대 → 신뢰 구축",
  },
  {
    rank: "🥉",
    name: "아이앤코성형외과",
    share: "19%",
    color: "from-orange-300 to-orange-400",
    details: [
      { label: "위치", value: "서면 마일드빌딩2 3~4층" },
      { label: "포지셔닝", value: "눈, 코 전문" },
      { label: "채널 전략", value: "3채널 운영 (블로그, 지식인, 뉴스)" },
    ],
    strength: "리얼모델 전후사진 공개, 눈/코 시술 범위 좁혀 전문성 강조",
  },
] as const;

// ============================================================================
// Component (레이아웃 최적화: 빈 공간 제거, 푸터와 콘텐츠 간격 조정)
// ============================================================================

export function Section08Cosmetic() {
  return (
    <section className="w-full bg-background py-8">
      {/* Design Guide 준수: max-w-content (1280px), min-h로 화면 채우기 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-heading-2 text-primary mb-2">
            3.3 미용성형 경쟁사 분석 - 부산 지역
          </h2>
          <div 
            className="mx-auto w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" 
            aria-hidden="true"
          />
        </div>

        {/* 3-Column Grid - 경쟁사 카드 (flex-1로 공간 채우기) */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {competitors.map((comp, idx) => (
              <div
                key={idx}
                className="bg-background border border-border rounded-lg overflow-hidden shadow-card hover:shadow-md transition-all duration-150"
              >
                {/* Card Header with Gradient */}
                <div className={`bg-gradient-to-r ${comp.color} px-5 py-4`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl" aria-hidden="true">{comp.rank}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white drop-shadow-sm">
                        {comp.name}
                      </h3>
                      <p className="text-white/90 text-sm font-medium">
                        점유율 {comp.share}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5">
                  <div className="space-y-3">
                    {comp.details.map((detail, dIdx) => (
                      <div 
                        key={dIdx} 
                        className="flex justify-between items-start gap-2"
                      >
                        <span className="text-sm text-text-secondary shrink-0 font-medium">
                          {detail.label}
                        </span>
                        <span className="text-sm text-text-primary text-right">
                          {detail.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Strength Section */}
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-primary mb-2 uppercase tracking-wide">
                      핵심 강점
                    </p>
                    <p className="text-sm text-text-primary leading-relaxed">
                      {comp.strength}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Page Indicator (고정 마진으로 푸터와 적절한 간격 유지) */}
        <div className="text-center mt-8 mb-4">
          <p className="text-caption text-text-secondary">
            → 다음 페이지에서 경쟁사 비교 요약 확인
          </p>
        </div>
      </div>
    </section>
  );
}
