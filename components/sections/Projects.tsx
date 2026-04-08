import { SectionHeading } from "@/components/ui/SectionHeading"
import { ProjectCard } from "@/components/ui/ProjectCard"
import { MecwideSection } from "@/components/sections/MecwideSection"
import { PROJECTS } from "@/lib/data"

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          label="Selected Work"
          title="Projects"
          description="Real products and systems built from concept to production — with measurable outcomes."
        />

        {/* Main projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Mecwide enterprise subsection with sidebar */}
        <MecwideSection />
      </div>
    </section>
  )
}
