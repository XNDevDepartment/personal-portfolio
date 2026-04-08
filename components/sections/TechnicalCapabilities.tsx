import { SectionHeading } from "@/components/ui/SectionHeading"
import { SkillGroup } from "@/components/ui/SkillGroup"
import { SKILLS } from "@/lib/data"

export function TechnicalCapabilities() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Capabilities"
          title="Technical Skills"
          description="A cross-functional skill set spanning AI engineering, product development, and team execution."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {SKILLS.map((group, i) => (
            <SkillGroup key={group.title} group={group} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  )
}
