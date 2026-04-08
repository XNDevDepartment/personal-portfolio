import { StatItem } from "@/components/ui/StatItem"
import { STATS } from "@/lib/data"

export function CredibilityStrip() {
  return (
    <section aria-label="Key metrics" className="bg-slate-50 border-y border-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap justify-center divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {STATS.map((stat, i) => (
            <StatItem key={i} {...stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
