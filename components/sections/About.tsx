import { SectionHeading } from "@/components/ui/SectionHeading"
import { AnimatedSection } from "@/components/ui/AnimatedSection"
import { ABOUT_CONTENT, SITE_META } from "@/lib/data"
import { MapPin } from "lucide-react"

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading label="Background" title="About" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Visual card */}
          <AnimatedSection className="lg:col-span-2" direction="left">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 flex flex-col gap-5">
              {/* Avatar placeholder */}
              <div className="h-20 w-20 rounded-2xl bg-accent/10 border-2 border-accent/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-accent">FF</span>
              </div>

              <div>
                <p className="font-bold text-slate-900 text-lg">Francisco Forte</p>
                <p className="text-accent text-sm font-medium mt-0.5">AI Solutions Engineer</p>
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-500">
                <MapPin size={14} />
                <span>{SITE_META.location}</span>
              </div>

              <div className="border-t border-slate-100 pt-4 flex flex-col gap-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Founder</span>
                  <span className="font-medium text-slate-800">ProduktPix.com</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Focus</span>
                  <span className="font-medium text-slate-800">AI · Systems · Products</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-slate-500">Available for</span>
                  <span className="font-medium text-slate-800">Roles · Collaboration</span>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Text content */}
          <AnimatedSection delay={0.15} className="lg:col-span-3 flex flex-col gap-5">
            {ABOUT_CONTENT.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-slate-600 text-base leading-relaxed">
                {paragraph}
              </p>
            ))}
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
