import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/sections/Hero"
import { CredibilityStrip } from "@/components/sections/CredibilityStrip"
import { Projects } from "@/components/sections/Projects"
import { Experience } from "@/components/sections/Experience"
import { TechnicalCapabilities } from "@/components/sections/TechnicalCapabilities"
import { About } from "@/components/sections/About"
import { AwardsLanguages } from "@/components/sections/AwardsLanguages"
import { Contact } from "@/components/sections/Contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <CredibilityStrip />
        <Projects />
        <Experience />
        <TechnicalCapabilities />
        <About />
        <AwardsLanguages />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
