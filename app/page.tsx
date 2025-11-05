import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FragmentedToolsAnimation } from "@/components/FragmentedToolsAnimation"
import { SurfaceAnalysisAnimation } from "@/components/SurfaceAnalysisAnimation"
import { WastedTimeAnimation } from "@/components/WastedTimeAnimation"
import { MCPCommandsSection } from "@/components/MCPCommandsSection"
import { CaseStudiesSection } from "@/components/CaseStudiesSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black font-[family-name:var(--font-poppins)]">
        <div className="max-w-[1600px] mx-auto py-4 md:py-6 px-4 md:px-0 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity">
            <Image 
              src="/overcastlogo.png" 
              alt="Overcast Logo" 
              width={48} 
              height={48} 
              className="w-8 h-8 md:w-12 md:h-12"
            />
            <span className="text-2xl md:text-4xl font-medium tracking-tight">Overcast</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-6 md:gap-12 text-base md:text-2xl">
            <Link href="#case-studies" className="hover:opacity-70 transition-opacity">
              Case Studies
            </Link>
            <Link href="/docs" className="hover:opacity-70 transition-opacity">
              Docs
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 font-[family-name:var(--font-poppins)]">
        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
          {/* Hero Title and Mobile Backing */}
          <div className="flex-1 text-center lg:text-left flex flex-col gap-8">
            <h1 className="font-light tracking-tight">
              <div className="text-[clamp(3rem,12vw,10rem)] leading-[1.1] bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] bg-clip-text text-transparent">
                Your AI
              </div>
              <div className="text-[clamp(3rem,12vw,10rem)] leading-[1.1] bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] bg-clip-text text-transparent">
                Operations
              </div>
              <div className="text-[clamp(3rem,12vw,10rem)] leading-[1.1] bg-gradient-to-br from-[#1c87ec] via-[#6ec5eb] via-[#007cca] to-[#c5e3ff] bg-clip-text text-transparent pb-4">
                Engineer
              </div>
            </h1>
            
            {/* Mobile backing text - inline with hero */}
            <div className="lg:hidden flex flex-col items-center gap-6">
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                backed by Fusen Ventures
                <br />
                @ Georgia Tech
              </p>
              
              {/* Try it Out Link - Mobile */}
              <Link 
                href="https://platform.overcastsre.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg md:text-xl font-normal border-2 border-white px-6 py-3 hover:bg-white hover:text-black transition-colors"
              >
                Try it Out
                <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
              </Link>
            </div>
         </div>

          {/* Backing Text - Desktop */}
          <div className="hidden lg:flex flex-col text-right flex-shrink-0 self-start mt-32">
            <p className="text-5xl font-bold leading-relaxed mb-8">
              backed by Fusen Ventures
              <br />
              @ Georgia Tech
            </p>
            
            {/* Try it Out Link */}
            <Link 
              href="https://platform.overcastsre.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-end gap-3 text-3xl font-normal border-4 border-white px-8 py-4 hover:bg-white hover:text-black transition-colors"
            >
              Try it Out
              <ArrowUpRight className="w-8 h-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section id="problems" className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
          {/* Section Title */}
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-light mb-8 md:mb-16">
            Problems w/ Post Prod. Today
          </h2>

          {/* Problems Grid */}
          <div className="space-y-8 md:space-y-12">
            {/* Problem 1: Fragmented tool ecosystem */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="border-2 border-white p-6 md:p-12 flex-1 w-full">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">
                  Fragmented tool ecosystem
                </h3>
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
                  Every tool claims to have AI, but none of them talk to each other. Your logs are in Datadog, metrics in Grafana, traces in Jaeger, and errors in Sentry. When an incident happens, you're stuck manually correlating data across 5+ different dashboards.
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-xl lg:text-2xl">
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Hours wasted switching between tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Context lost in translation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Incomplete picture of incidents</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block flex-shrink-0 w-[450px]">
                <FragmentedToolsAnimation />
              </div>
            </div>

            {/* Problem 2: Surface-level AI analysis */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="border-2 border-white p-6 md:p-12 flex-1 w-full">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">
                  Surface-level AI analysis
                </h3>
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
                  Most "AI-powered" tools just detect anomalies and alert you. They don't understand how your services interact, can't correlate logs across microservices, and definitely can't tell you why your checkout flow broke when the payment service is fine.
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-xl lg:text-2xl">
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>No cross-service intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Can't stitch logs, metrics, and traces</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>You still do the detective work</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block flex-shrink-0 w-[450px]">
                <SurfaceAnalysisAnimation />
              </div>
            </div>

            {/* Problem 3: Wasted engineer time */}
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
              <div className="border-2 border-white p-6 md:p-12 flex-1 w-full">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-4 md:mb-6">
                  Wasted engineer time
                </h3>
                <p className="text-base md:text-xl lg:text-2xl leading-relaxed mb-4 md:mb-6">
                  Engineers spend 20-25% of their time on manual incident response tasks: gathering details, writing post-incident reports, updating stakeholders across Slack, Teams, and Google Docs. This repetitive work drains productivity and delays resolution.
                </p>
                <ul className="space-y-2 md:space-y-3 text-base md:text-xl lg:text-2xl">
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Manual documentation and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Constant context switching between tools</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 md:mr-3">•</span>
                    <span>Hours lost in meetings and status updates</span>
                  </li>
                </ul>
              </div>
              <div className="hidden lg:block flex-shrink-0 w-[450px]">
                <WastedTimeAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}

      <section id="features" className="py-12 md:py-24 font-[family-name:var(--font-poppins)]">
        <div className="max-w-[1600px] w-full mx-auto px-4 md:px-0">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-light mb-8 md:mb-12">
          Solutions
        </h2>
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Feature 1: Cross-System Correlation */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  Cross-System Correlation
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  Automatically correlates logs from multiple agents and systems into a single, coherent incident timeline showing exactly how failures propagate.
                </p>
              </div>
            </div>

            {/* Feature 2: GitHub Ingestions */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  GitHub Ingestions
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  Identifies which code changes caused incidents with git blame, PR tracking, and stack trace analysis. Know who changed what and when.
                </p>
              </div>
            </div>

            {/* Feature 3: Domain-Specific AI */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  Domain-Specific AI
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  AI learns your tech stack, naming conventions, and infrastructure patterns. Get Windows PowerShell or Linux bash — whatever fits your environment.
                </p>
              </div>
            </div>

            {/* Feature 4: Lightning Fast Analysis */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  Lightning Fast Analysis
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  8-15 seconds from log ingestion to complete incident analysis. Intelligent filtering reduces LLM costs by 80%.
                </p>
              </div>
            </div>

            {/* Feature 5: AI That Actually Solves RCA */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  AI That Actually Solves RCA
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  Complete root cause analysis with evidence, timeline reconstruction, and confidence scoring. Not just anomaly detection—real answers.
                </p>
              </div>
            </div>

            {/* Feature 6: Enterprise-Ready Security */}
            <div className="border-4 border-white p-[5px] bg-black">
              <div className="bg-gradient-to-br from-[#4a9fd8] to-[#1c6ba8] p-6 md:p-10 lg:p-12 h-full">
                <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 lg:mb-8">
                  Enterprise-Ready Security
                </h3>
                <p className="text-white text-lg md:text-2xl lg:text-3xl leading-relaxed font-light">
                  Multi-tenant architecture with complete customer isolation. Row-level security ensures your data stays yours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MCP Commands Section */}
      <MCPCommandsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />
    </div>
  )
}

