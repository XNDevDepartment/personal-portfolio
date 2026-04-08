"use client"

import { m, LazyMotion, domAnimation } from "framer-motion"
import { ArrowRight, Mail } from "lucide-react"
import { HERO_CONTENT } from "@/lib/data"

export function Hero() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" aria-labelledby="hero-heading" className="relative min-h-screen flex items-center overflow-hidden bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Abstract ambient orb */}
      <LazyMotion features={domAnimation}>
        <m.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.4, 0.25] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.55 0.19 240 / 0.15) 0%, transparent 70%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-6 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text column */}
            <div>
              {/* Label */}
              <m.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-sm font-semibold uppercase tracking-widest text-accent mb-4"
              >
                {HERO_CONTENT.title} · Braga, Portugal
              </m.p>

              {/* Name */}
              <m.h1
                id="hero-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                className="text-5xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
              >
                {HERO_CONTENT.name}
              </m.h1>

              {/* Headline */}
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.3 }}
                className="text-xl md:text-2xl font-semibold text-slate-700 leading-snug mb-4"
              >
                {HERO_CONTENT.headline}
              </m.p>

              {/* Subheadline */}
              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.4 }}
                className="text-slate-500 text-base leading-relaxed mb-8 max-w-lg"
              >
                {HERO_CONTENT.subheadline}
              </m.p>

              {/* CTAs */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.5 }}
                className="flex flex-wrap gap-3 mb-10"
              >
                <button
                  onClick={() => handleScroll("projects")}
                  className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                >
                  View Projects
                  <ArrowRight size={15} />
                </button>
                <button
                  onClick={() => handleScroll("contact")}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail size={15} />
                  Get in Touch
                </button>
              </m.div>

              {/* Credibility badges */}
              <m.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.65 }}
                className="flex flex-wrap gap-2"
              >
                {HERO_CONTENT.badges.map((badge) => (
                  <span
                    key={badge}
                    className="inline-block rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {badge}
                  </span>
                ))}
              </m.div>
            </div>

            {/* Visual column — abstract rings */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="hidden lg:flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="relative w-80 h-80">
                {/* Concentric rings */}
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="absolute inset-0 rounded-full border border-slate-200"
                    style={{
                      transform: `scale(${0.4 + i * 0.2})`,
                      opacity: 1 - i * 0.2,
                    }}
                  />
                ))}
                {/* Center dot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-12 w-12 rounded-full bg-accent/10 border-2 border-accent/30 flex items-center justify-center">
                    <span className="text-accent font-bold text-xs">FF</span>
                  </div>
                </div>
                {/* Floating labels */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap">AI Systems</div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap pt-2">Automation</div>
                <div className="absolute right-0 top-1/2 translate-x-full -translate-y-1/2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap pl-2">Products</div>
                <div className="absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 text-[11px] font-semibold text-slate-400 uppercase tracking-wider whitespace-nowrap pr-2">Engineering</div>
              </div>
            </m.div>
          </div>
        </div>
      </LazyMotion>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-300">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-slate-300" />
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
      </div>
    </section>
  )
}
