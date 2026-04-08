"use client"

import { Trophy } from "lucide-react"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { AWARDS, LANGUAGES } from "@/lib/data"
import { useInView } from "framer-motion"
import { useRef } from "react"

function LanguageBar({ name, level, proficiency }: { name: string; level: string; proficiency: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <div ref={ref} className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-800">{name}</span>
        <span className="text-xs font-semibold text-slate-500 bg-slate-100 rounded-full px-2 py-0.5">{level}</span>
      </div>
      <div className="h-1.5 rounded-full bg-slate-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-accent transition-all duration-700 ease-out"
          style={{ width: inView ? `${proficiency}%` : "0%" }}
        />
      </div>
    </div>
  )
}

export function AwardsLanguages() {
  return (
    <section aria-label="Awards and Languages" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Recognition & Languages" title="Awards & Languages" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* Awards */}
          <AnimatedSection className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-slate-900 text-lg flex items-center gap-2">
              <Trophy size={18} className="text-amber-500" />
              Awards
            </h3>
            <div className="flex flex-col gap-4">
              {AWARDS.map((award, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-amber-50 border border-amber-100">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 border border-amber-200">
                    <span className="text-sm font-bold text-amber-700">{award.placement}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{award.title}</p>
                    <p className="text-slate-500 text-xs mt-0.5">{award.event} · {award.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Languages */}
          <AnimatedSection delay={0.1} className="rounded-2xl border border-slate-200 bg-white p-6 flex flex-col gap-4">
            <h3 className="font-bold text-slate-900 text-lg">Languages</h3>
            <div className="flex flex-col gap-4">
              {LANGUAGES.map((lang) => (
                <LanguageBar key={lang.name} {...lang} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
