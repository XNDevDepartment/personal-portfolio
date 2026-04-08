"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { useCountUp } from "@/lib/hooks"
import type { Stat } from "@/types"

export function StatItem({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const count = useCountUp(value, 1200, isInView)

  return (
    <div ref={ref} className="flex flex-col items-center gap-1 px-6 py-4">
      <span className="text-3xl md:text-4xl font-bold text-slate-900 tabular-nums">
        {count}
        {suffix}
      </span>
      <span className="text-sm text-slate-500 text-center leading-tight">{label}</span>
    </div>
  )
}
