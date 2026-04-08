import { AnimatedSection } from "./AnimatedSection"
import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  centered?: boolean
  className?: string
}

export function SectionHeading({
  label,
  title,
  description,
  centered = false,
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection className={cn("mb-12", centered && "text-center", className)}>
      <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">
        {label}
      </p>
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {description && (
        <p className="text-slate-600 text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </AnimatedSection>
  )
}
