"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import type { EnterpriseProject } from "@/types"

interface EnterpriseCardProps {
  project: EnterpriseProject
  delay?: number
}

export function EnterpriseCard({ project, delay = 0 }: EnterpriseCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col"
      >
        {/* Screenshot placeholder */}
        <div className="relative w-full h-36 bg-slate-100 flex items-center justify-center border-b border-slate-200">
          <div className="flex flex-col items-center gap-2 text-slate-300">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs font-medium tracking-wide">Screenshot coming soon</span>
          </div>
          {/* Type badge */}
          <span className="absolute top-3 left-3 inline-block rounded-full bg-white border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 tracking-wide">
            {project.type}
          </span>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-4">
          <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>

          <dl className="flex flex-col gap-3">
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                Problem
              </dt>
              <dd className="text-sm text-slate-600 leading-relaxed">{project.problem}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-0.5">
                Contribution
              </dt>
              <dd className="text-sm text-slate-600 leading-relaxed">{project.contribution}</dd>
            </div>
            <div>
              <dt className="text-[11px] font-bold uppercase tracking-widest text-accent/70 mb-0.5">
                Outcome
              </dt>
              <dd className="text-sm text-slate-700 leading-relaxed font-medium">{project.outcome}</dd>
            </div>
          </dl>
        </div>
      </m.div>
    </LazyMotion>
  )
}
