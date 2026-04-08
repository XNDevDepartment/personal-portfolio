import { AnimatedSection } from "./AnimatedSection"
import type { ExperienceEntry } from "@/types"

interface TimelineItemProps {
  entry: ExperienceEntry
  delay?: number
  isLast?: boolean
}

export function TimelineItem({ entry, delay = 0, isLast = false }: TimelineItemProps) {
  return (
    <AnimatedSection delay={delay} className="relative pl-8">
      {/* Timeline rail dot */}
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white ring-4 ring-white z-10" />

      {/* Connector line (hidden for last item) */}
      {!isLast && (
        <span className="absolute left-[5px] top-4 bottom-0 w-[2px] bg-slate-200" />
      )}

      <div className="pb-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
          <div>
            <h3 className="font-bold text-slate-900 text-lg">{entry.role}</h3>
            <p className="text-accent font-medium text-sm">{entry.company}</p>
          </div>
          <div className="text-right shrink-0">
            <span className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-semibold text-slate-600">
              {entry.period}
            </span>
            <p className="text-xs text-slate-400 mt-1">{entry.location}</p>
          </div>
        </div>

        <p className="text-slate-600 text-sm leading-relaxed mb-3">{entry.description}</p>

        <ul className="flex flex-col gap-1.5">
          {entry.highlights.map((h, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-300" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}
