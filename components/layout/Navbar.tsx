"use client"

import { useEffect, useState } from "react"
import { m, AnimatePresence, LazyMotion, domAnimation } from "framer-motion"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { NAV_LINKS } from "@/lib/data"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("")

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""))
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: "-40% 0px -55% 0px" }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const handleNav = (href: string) => {
    setOpen(false)
    const id = href.replace("#", "")
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <LazyMotion features={domAnimation}>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-6xl px-6 h-[72px] flex items-center justify-between">
          {/* Wordmark */}
          <button
            onClick={() => handleNav("#hero")}
            className="flex items-center gap-2 group"
            aria-label="Go to top"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white text-sm font-bold tracking-tight">
              FF
            </span>
            <span className="text-slate-900 font-semibold text-sm hidden sm:block">
              Francisco Forte
            </span>
          </button>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "")
              return (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "text-sm font-medium transition-colors",
                    active === id
                      ? "text-accent"
                      : "text-slate-600 hover:text-slate-900"
                  )}
                >
                  {link.label}
                </button>
              )
            })}
            <button
              onClick={() => handleNav("#contact")}
              className="ml-2 inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Get in Touch
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {open && (
            <m.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="text-left text-sm font-medium text-slate-700 hover:text-accent py-2.5 border-b border-slate-100 last:border-0 transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
                <button
                  onClick={() => handleNav("#contact")}
                  className="mt-3 w-full rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white text-center"
                >
                  Get in Touch
                </button>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </header>
    </LazyMotion>
  )
}
