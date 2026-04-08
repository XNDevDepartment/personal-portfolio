"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "left" | "none"
}

export function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const initial =
    direction === "up"
      ? { opacity: 0, y: 28 }
      : direction === "left"
      ? { opacity: 0, x: -20 }
      : { opacity: 0 }

  const animate =
    direction === "up"
      ? { opacity: 1, y: 0 }
      : direction === "left"
      ? { opacity: 1, x: 0 }
      : { opacity: 1 }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={initial}
        whileInView={animate}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: "easeOut", delay }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
