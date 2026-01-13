/**
 * Section11PositioningReconstruction - 재건성형 시장 포지셔닝 분석
 * Design Guide (docs/design-guide.md) 기반
 *
 * 수정: 2026-01-13 - 레이아웃 최적화 (한 페이지 내 완전 표시)
 * 
 * 30년차 디자이너 원칙:
 * - 콘텐츠가 한 페이지에 완전히 들어오도록 공간 최적화
 * - 차트 가독성 유지하면서 공간 효율성 확보
 * - Design Guide의 max-w-content 및 스페이싱 시스템 준수
 * 
 * 데이터 소스: data/seoil-medical.yaml (page 11)
 */

import { Lightbulb } from "lucide-react"

// ============================================================================
// Type Definitions (Boris Cherny: readonly 타입으로 불변성 보장)
// ============================================================================

interface Position {
  readonly id: string
  readonly label: string
  readonly description?: string
  readonly x: number
  readonly y: number
  readonly highlight?: 'current' | 'target'
}

// ============================================================================
// Sample Data (YAML page 11 기반)
// ============================================================================

const positions: readonly Position[] = [
  { id: 'pusan-univ', label: '부산대병원', description: '재건 권위', x: 20, y: 95 },
  { id: 'kosin-univ', label: '고신대병원', description: '로봇수술', x: 25, y: 75 },
  { id: 'donga-univ', label: '동아대병원', description: '구순구개열', x: 30, y: 65 },
  { id: 'seoil-current', label: '서일메디컬 현재', x: 80, y: 65, highlight: 'current' },
  { id: 'seoil-target', label: '서일메디컬 목표', description: '재건전문 + 접근성', x: 85, y: 80, highlight: 'target' },
] as const

const strategyItems: readonly string[] = [
  '대학병원 수준 전문성 + 개인병원 접근성 = 유일한 포지션',
  '부산대 교수 출신 → 대학병원급 기술력 어필 가능',
  '빠른 예약, 개인 맞춤 상담 → 대학병원 대비 차별화',
  '대학병원들 온라인 마케팅 소극적 → 키워드 선점 기회',
] as const

// ============================================================================
// Component (레이아웃 최적화: 한 페이지 내 완전 표시)
// ============================================================================

export function Section11PositioningReconstruction() {
  return (
    <section className="w-full bg-background py-6">
      {/* Design Guide 준수: max-w-content (1280px), 콘텐츠 크기에 맞춤 */}
      <div className="mx-auto max-w-content px-6 min-h-[calc(100vh-144px)] flex flex-col justify-start">
        {/* Section Header - 압축 */}
        <div className="text-center mb-4">
          <h2 className="text-heading-2 text-primary mb-1">
            4. 포지셔닝 분석 - 재건성형 시장
          </h2>
          <div 
            className="mx-auto w-16 h-0.5 bg-gradient-to-r from-primary to-secondary" 
            aria-hidden="true"
          />
        </div>

        {/* Positioning Map - 공간 최적화 (상단 여백 증가, 하단 여백 제거) */}
        <div className="flex flex-col">
          <div className="bg-background border border-border rounded-lg p-5 shadow-card">
            <h3 className="text-lg font-semibold text-text-primary mb-4">
              재건성형 시장 포지셔닝 맵
            </h3>

            {/* 차트 컨테이너 - 상단 패딩 추가하여 박스가 잘리지 않도록 */}
            <div className="relative h-[280px] bg-surface rounded-md pt-12 pb-8 px-8">
              {/* Axis Labels */}
              <div className="absolute left-2 top-1/2 -translate-y-1/2 -rotate-90 text-sm font-medium text-text-secondary z-10">
                전문성 ↑
              </div>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-sm font-medium text-text-secondary z-10">
                접근성 →
              </div>

              {/* Grid - 상단 여백 증가 (부산대병원 박스가 잘리지 않도록) */}
              <div className="absolute inset-8 border border-dashed border-border">
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-border" />
                <div className="absolute left-1/2 top-0 bottom-0 border-l border-dashed border-border" />
              </div>

              {/* Positions - 단순화된 좌표 계산 */}
              {positions.map((pos) => {
                const isCurrent = pos.highlight === 'current'
                const isTarget = pos.highlight === 'target'
                const isUniversity = !isCurrent && !isTarget

                return (
                  <div
                    key={pos.id}
                    className="absolute z-20"
                    style={{
                      left: `${pos.x}%`,
                      top: `${100 - pos.y}%`, // Y축 반전 (위쪽이 높은 값)
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <div
                      className={`px-2.5 py-1 rounded-md text-xs shadow-card ${
                        isUniversity
                          ? 'bg-text-secondary text-white'
                          : isCurrent
                          ? 'bg-secondary text-white border-2 border-white'
                          : 'bg-primary text-white border-2 border-accent'
                      }`}
                    >
                      <p className="font-medium whitespace-nowrap">{pos.label}</p>
                      {pos.description && (
                        <p className="text-[10px] opacity-80 mt-0.5">{pos.description}</p>
                      )}
                    </div>
                  </div>
                )
              })}

              {/* Arrow from current to target */}
              <svg
                className="absolute z-10"
                style={{
                  left: '75%',
                  top: '35%',
                  width: '10%',
                  height: '15%',
                  transform: 'translate(-50%, -50%)',
                }}
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
              >
                <defs>
                  <marker
                    id="arrowhead-reconstruction"
                    markerWidth="8"
                    markerHeight="6"
                    refX="7"
                    refY="3"
                    orient="auto"
                  >
                    <polygon points="0 0, 8 3, 0 6" fill="currentColor" />
                  </marker>
                </defs>
                <path
                  d="M0,65 Q50,50 100,35"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  markerEnd="url(#arrowhead-reconstruction)"
                  strokeDasharray="4,3"
                  className="text-accent"
                />
              </svg>

              {/* Legend */}
              <div className="absolute bottom-3 right-3 bg-background p-2.5 rounded-md shadow-sm text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-text-secondary rounded" />
                  <span className="text-text-secondary">대학병원</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary rounded" />
                  <span className="text-text-secondary">현재 위치</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary rounded border border-accent" />
                  <span className="text-text-secondary">목표 위치</span>
                </div>
              </div>
            </div>
          </div>

          {/* Insight Callout - 차트 바로 아래 연결 (하단 여백 최소화) */}
          <div className="mt-3 p-4 bg-surface border-l-4 border-primary rounded-r-lg">
            <div className="flex gap-3">
              <Lightbulb className="text-primary flex-shrink-0 mt-0.5" size={20} strokeWidth={1.5} />
              <div className="flex-1">
                <p className="text-sm font-semibold text-text-primary mb-2">
                  서일메디컬 재건성형 포지션 전략
                </p>
                <ul className="space-y-1.5 text-sm text-text-primary">
                  {strategyItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-accent font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
