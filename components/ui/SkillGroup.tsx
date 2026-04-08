import { Brain, Code2, Target } from "lucide-react"
import { AnimatedSection } from "./AnimatedSection"
import type { SkillGroup as SkillGroupType } from "@/types"

const ICONS = {
  Brain,
  Code2,
  Target,
} as const

interface SkillGroupProps {
  group: SkillGroupType
  delay?: number
}

export function SkillGroup({ group, delay = 0 }: SkillGroupProps) {
  const Icon = ICONS[group.icon as keyof typeof ICONS]

  return (
    <AnimatedSection
      delay={delay}
      className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-5"
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-light">
            <Icon size={18} className="text-accent" />
          </span>
        )}
        <h3 className="font-bold text-slate-900 text-lg">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 transition-colors hover:bg-accent-light hover:text-accent"
          >
            {skill}
          </span>
        ))}
      </div>
    </AnimatedSection>
  )
}
