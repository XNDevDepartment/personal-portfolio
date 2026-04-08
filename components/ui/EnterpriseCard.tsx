"use client"

import Image from "next/image"
import { m, LazyMotion, domAnimation } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { EnterpriseProject } from "@/types"

interface EnterpriseCardProps {
  project: EnterpriseProject
  delay?: number
  onClick: (project: EnterpriseProject) => void
}

export function EnterpriseCard({ project, delay = 0, onClick }: EnterpriseCardProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.button
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        whileHover={{ y: -4 }}
        onClick={() => onClick(project)}
        className="group rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col text-left w-full cursor-pointer transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-200/60 hover:border-slate-300"
        aria-label={`View ${project.title} details`}
      >
        {/* Screenshot — full image, no crop */}
        <div className="relative w-full bg-slate-50 border-b border-slate-200 flex items-center justify-center p-4">
          {/* Type badge */}
          <span className="absolute top-3 left-3 z-10 inline-block rounded-full bg-white/90 backdrop-blur-sm border border-slate-200 px-2.5 py-0.5 text-[11px] font-semibold text-slate-600">
            {project.type}
          </span>
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg shadow-sm"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-6 gap-3">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-lg">{project.title}</h3>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-400 group-hover:bg-accent group-hover:text-white transition-colors shrink-0">
              <ArrowRight size={13} />
            </span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{project.problem}</p>
          <p className="text-xs font-medium text-accent mt-auto">View details →</p>
        </div>
      </m.button>
    </LazyMotion>
  )
}
