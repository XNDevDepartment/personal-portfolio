"use client"

import Image from "next/image"
import { m, LazyMotion, domAnimation } from "framer-motion"
import type { EnterpriseProject } from "@/types"

interface EnterpriseCardProps {
  project: EnterpriseProject
  delay?: number
}

export function EnterpriseCard({ project, delay = 0 }: EnterpriseCardProps) {
  // Mobile screenshots get a taller, centered treatment; desktop screenshots stay wide
  const isMobile = project.id === "tool-allocation"

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col"
      >
        {/* Screenshot */}
        <div className={`relative w-full border-b border-slate-200 bg-slate-100 overflow-hidden ${isMobile ? "h-56" : "h-44"}`}>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            className={`object-cover ${isMobile ? "object-center" : "object-top"} transition-transform duration-500 group-hover:scale-105`}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Subtle overlay to keep badge legible */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          {/* Type badge */}
          <span className="absolute top-3 left-3 inline-block rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
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
