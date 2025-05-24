import { cn } from "@/lib/utils"

export interface Stat {
  value: string
  label: string
  gradientColors: [string, string]
}

export interface CywareStatsSectionProps {
  title?: string
  subtitle?: string
  stats?: Stat[]
  className?: string
  showGrid?: boolean
  titleClassName?: string
  subtitleClassName?: string
}

const defaultStats: Stat[] = [
  {
    value: "12.2B+",
    label: "Threat Intel Feeds Ingested",
    gradientColors: ["#1A3EE8", "#FFFFFF"],
  },
  {
    value: "30K+",
    label: "Global Enterprises use Cyware Platform",
    gradientColors: ["#097865", "#FFFFFF"],
  },
  {
    value: "10M+",
    label: "Threat Intel Actions Executed",
    gradientColors: ["#B428D6", "#FFFFFF"],
  },
]

export function CywareStatsSection({
  title = "Delivering Threat Intelligence Operationalization at Scale",
  subtitle = "Unmatched Scalability, Seamless Collaboration, and Real-Time Action.",
  stats = defaultStats,
  className,
  showGrid = true,
  titleClassName,
  subtitleClassName,
}: CywareStatsSectionProps) {
  return (
    <div className={cn("relative", className)}>
      {showGrid && <StatsGrid />}
      <div className="relative z-10 px-4 py-16">
        {title && (
          <h1
            className={cn("text-white text-3xl md:text-4xl lg:text-5xl font-medium text-center mb-4", titleClassName)}
          >
            {title}
          </h1>
        )}
        {subtitle && (
          <p
            className={cn(
              "text-center text-[#b4bcd0]/60 text-xl md:text-2xl font-light max-w-4xl mx-auto mb-16",
              subtitleClassName,
            )}
          >
            {subtitle}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatCard key={index} value={stat.value} label={stat.label} gradientColors={stat.gradientColors} />
          ))}
        </div>
      </div>
    </div>
  )
}

interface StatCardProps {
  value: string
  label: string
  gradientColors: [string, string]
}

function StatCard({ value, label, gradientColors }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h3
        className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
        }}
      >
        {value}
      </h3>
      <p className="text-[#b4bcd0]/60 text-lg md:text-xl max-w-xs font-light">{label}</p>
    </div>
  )
}

function StatsGrid() {
  return (
    <div className="absolute inset-0 grid grid-cols-12 w-full h-full">
      {Array.from({ length: 13 }).map((_, i) => (
        <div key={`v-${i}`} className="border-l border-[#3d3e47]/10 h-full" />
      ))}

      {Array.from({ length: 13 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute border-t border-[#3d3e47]/10 w-full"
          style={{ top: `${(i / 12) * 100}%` }}
        />
      ))}
    </div>
  )
}
