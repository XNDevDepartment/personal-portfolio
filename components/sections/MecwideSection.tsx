"use client"

import { useState } from "react"
import { Building2 } from "lucide-react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { EnterpriseCard } from "@/components/ui/EnterpriseCard"
import { EnterpriseDetailSidebar } from "@/components/ui/EnterpriseDetailSidebar"
import { MECWIDE_PROJECTS } from "@/lib/data"
import type { EnterpriseProject } from "@/types"

export function MecwideSection() {
  const [selected, setSelected] = useState<EnterpriseProject | null>(null)

  return (
    <>
      <AnimatedSection className="mt-20">
        <div className="flex items-center gap-3 mb-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
            <Building2 size={16} className="text-slate-500" />
          </span>
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Enterprise Work
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
          Selected Work at Mecwide
        </h2>
        <p className="text-slate-500 text-base max-w-2xl mb-10">
          Internal systems and applications delivered within a multinational industrial company — focused on operational efficiency, usability, and cross-functional execution.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {MECWIDE_PROJECTS.map((project, i) => (
            <EnterpriseCard
              key={project.id}
              project={project}
              delay={i * 0.08}
              onClick={setSelected}
            />
          ))}
        </div>
      </AnimatedSection>

      <EnterpriseDetailSidebar
        project={selected}
        onClose={() => setSelected(null)}
      />
    </>
  )
}
