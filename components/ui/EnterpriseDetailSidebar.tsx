"use client"

import Image from "next/image"
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { X } from "lucide-react"
import { useEffect } from "react"
import type { EnterpriseProject } from "@/types"

interface Props {
  project: EnterpriseProject | null
  onClose: () => void
}

export function EnterpriseDetailSidebar({ project, onClose }: Props) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [onClose])

  // Lock body scroll while open
  useEffect(() => {
    if (project) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [project])

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {project && (
          <>
            {/* Backdrop */}
            <m.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={onClose}
              aria-hidden="true"
            />

            {/* Sidebar panel */}
            <m.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed right-0 top-0 bottom-0 z-50 w-full max-w-lg bg-white shadow-2xl flex flex-col overflow-y-auto"
              aria-label={`${project.title} details`}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 shrink-0">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-0.5">
                    {project.type}
                  </p>
                  <h2 className="text-xl font-bold text-slate-900">{project.title}</h2>
                </div>
                <button
                  onClick={onClose}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
                  aria-label="Close panel"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Screenshot — full, no crop */}
              <div className="bg-slate-50 border-b border-slate-200 p-6">
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-md"
                />
              </div>

              {/* Details */}
              <div className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Problem</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.problem}</p>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex flex-col gap-2">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Contribution</p>
                  <p className="text-slate-600 text-sm leading-relaxed">{project.contribution}</p>
                </div>

                <div className="h-px bg-slate-100" />

                <div className="flex flex-col gap-2 rounded-xl bg-accent-light border border-accent/10 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-accent/70">Outcome</p>
                  <p className="text-slate-700 text-sm leading-relaxed font-medium">{project.outcome}</p>
                </div>
              </div>
            </m.aside>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
