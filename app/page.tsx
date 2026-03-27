import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GlitchMarquee } from "@/components/glitch-marquee"
import { WhyRaincurveSection } from "@/components/why-raincurve-section"
import { DifferentiationSection } from "@/components/differentiation-section"
import { FeatureGrid } from "@/components/feature-grid"
import { AboutSection } from "@/components/about-section"
import { SdkSection } from "@/components/sdk-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <GlitchMarquee />
        <WhyRaincurveSection />
        <DifferentiationSection />
        <FeatureGrid />
        <AboutSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
