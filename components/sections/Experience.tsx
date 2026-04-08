import { SectionHeading } from "@/components/ui/SectionHeading"
import { TimelineItem } from "@/components/ui/TimelineItem"
import { EXPERIENCE } from "@/lib/data"

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-heading" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Background"
          title="Experience"
          description="A track record across founding, engineering, and team leadership."
        />
        <div className="relative border-l-2 border-slate-200 ml-1.5">
          {EXPERIENCE.map((entry, i) => (
            <TimelineItem
              key={i}
              entry={entry}
              delay={i * 0.1}
              isLast={i === EXPERIENCE.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
