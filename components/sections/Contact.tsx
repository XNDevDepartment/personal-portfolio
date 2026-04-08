import { Mail, Phone, ArrowUpRight } from "lucide-react"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { CONTACT } from "@/lib/data"

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-28 bg-slate-900">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <AnimatedSection>
          <p className="text-sm font-semibold uppercase tracking-widest text-accent-muted mb-4">
            Get in Touch
          </p>
          <h2
            id="contact-heading"
            className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight"
          >
            {CONTACT.headline}
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {CONTACT.subtext}
          </p>

          {/* Primary CTA */}
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-7 py-3.5 text-base font-semibold text-white transition-opacity hover:opacity-90 mb-10"
          >
            Send a Message
            <ArrowUpRight size={16} />
          </a>

          {/* Contact links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={16} />
              {CONTACT.email}
            </a>
            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <Phone size={16} />
              {CONTACT.phone}
            </a>
            <a
              href={`https://linkedin.com/in/${CONTACT.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm"
            >
              <LinkedInIcon size={16} />
              linkedin.com/in/{CONTACT.linkedin}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
