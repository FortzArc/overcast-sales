import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { GlitchMarquee } from "@/components/glitch-marquee"
import { WhyOvercastSection } from "@/components/why-overcast-section"
import { DifferentiationSection } from "@/components/differentiation-section"
import { FeatureGrid } from "@/components/feature-grid"
import { AboutSection } from "@/components/about-section"
import { SdkSection } from "@/components/sdk-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <GlitchMarquee />
        <WhyOvercastSection />
        <DifferentiationSection />
        <FeatureGrid />
        <AboutSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}
