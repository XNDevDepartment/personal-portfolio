import { Mail } from "lucide-react"
import { SITE_META } from "@/lib/data"

function LinkedInIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-900 text-sm">Francisco Forte</p>
          <p className="text-xs text-slate-400 mt-0.5">AI Solutions Engineer · Braga, Portugal</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={`mailto:${SITE_META.email}`}
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
            <span className="hidden sm:block">{SITE_META.email}</span>
          </a>
          <a
            href={`https://linkedin.com/in/${SITE_META.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={15} />
            <span className="hidden sm:block">LinkedIn</span>
          </a>
        </div>

        <p className="text-xs text-slate-400">© {year} Francisco Forte</p>
      </div>
    </footer>
  )
}
