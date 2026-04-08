"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
  delay?: number
}

export function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        whileHover={{ y: -6 }}
        className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden cursor-default transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60"
      >
        {/* Header band */}
        <div className={cn("relative px-6 pt-6 pb-5", project.color)}>
          {/* Metric badge */}
          <span className="absolute top-5 right-5 inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-700 gap-1">
            <span className="text-accent font-bold">{project.metric}</span>
            <span>{project.metricLabel}</span>
          </span>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">
            {project.category}
          </p>
          <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
        </div>

        {/* Body */}
        <div className="flex flex-col flex-1 px-6 py-5 gap-4">
          <p className="text-slate-600 text-sm leading-relaxed">{project.summary}</p>

          <ul className="flex flex-col gap-2">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-slate-100 px-3 py-0.5 text-xs font-medium text-slate-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </m.div>
    </LazyMotion>
  )
}
