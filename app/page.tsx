"use client"

import { Button } from "@/components/ui/button"
import { CheckIcon } from "@radix-ui/react-icons"
import { CardStack } from "@/components/card-stack"
import { MCPCommands } from "@/components/mcp-commands"
import { motion } from "framer-motion"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { LogoCarousel } from "@/components/logo-carousel"
import OvercastSecuritySection from "@/components/overcast-security-section"
import DistributedTracingSection from "@/components/distributed-tracing-section"
import { CommunityCarousel } from "@/components/community-carousel"
import { Footer } from "@/components/footer"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  const solutions = [
    {
      title: "Distributed Tracing",
      description:
        "Automatically correlates logs from multiple agents and systems into a single, coherent incident timeline showing exactly how failures propagate.",
    },
    {
      title: "GitHub Ingestions",
      description:
        "Identifies which code changes caused incidents with git blame, PR tracking, and stack trace analysis. Know who changed what and when.",
    },
    {
      title: "Domain-Specific AI",
      description:
        "AI learns your tech stack, naming conventions, and infrastructure patterns. Get Windows PowerShell or Linux bash — whatever fits your environment.",
    },
    {
      title: "Lightning Fast Analysis",
      description:
        "8-15 seconds from log ingestion to complete incident analysis. Intelligent filtering reduces LLM costs by 80%.",
    },
    {
      title: "AI That Actually Solves RCA",
      description:
        "Complete root cause analysis with evidence, timeline reconstruction, and confidence scoring. Not just anomaly detection—real answers.",
    },
    {
      title: "Enterprise-Ready Security",
      description:
        "Multi-tenant architecture with complete customer isolation. Row-level security ensures your data stays yours.",
    },
  ]

  const caseStudies = [
    {
      title: "Medical Devices",
      quote:
        "We had a few tracing issues...we solved 7 different issues but couldn't find the last one for days...with [overcast] we were able to find it and fix it in less then 30 mins",
      description: "See how Overcast helped this Medical Manufacturing Company cut MTTR in half with AI-powered RCA",
      industry: "Healthcare",
    },
    {
      title: "YC Backed Agent Testing",
      quote:
        "...to be honest, yeah, and it's super useful for keeping things online otherwise we had to keep pulling the site down and fix it in dev but [Overcast] really saves the time with finding and fixing...",
      description: "This YC backed-company used Overcast to manage downtime during their initial launch",
      industry: "Technology",
    },
    {
      title: "Property Management",
      quote:
        "yeah, like lately we've been ramping up our GTM...so we've had doubled traffic to the app but since we don't use any op management software we had a hard time before [Overcast]",
      description: "Implements Overcast for post prod. on their growing rental property management platform",
      industry: "Real Estate Tech",
    },
  ]

  const plans = [
    {
      name: "Devs & Indies",
      price: "$8",
      period: "/user/mo",
      description: "Plug-and-play sidecar for instant reliability",
      features: [
        "Overcast SDK — scale without infra setup",
        "Auto incident reports + recovery guidance",
        "3 agents",
        "7-day history",
        "Community support",
      ],
    },
    {
      name: "Startups & SMBs",
      price: "$50",
      period: "/user/mo",
      description: "Compliance-ready audit trails + secure logging",
      features: [
        "Advanced tracing + multi-agent RCA",
        "Automated postmortems into Jira/Confluence",
        "10 agents",
        "30-day history",
        "99.9% SLA",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited agents + custom integrations",
      features: [
        "HIPAA/FedRAMP compliance + on-prem options",
        "Predictive analytics + full observability mesh",
        "Unlimited agents",
        "1-year+ history",
        "24/7 support · 99.99% SLA",
      ],
    },
  ]

  return (
    <main className="w-full">
      <section className="relative min-h-screen w-full flex flex-col pb-8 sm:pb-12">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/image-fotor.jpeg"
            alt="Mountain landscape"
            className="w-full h-full object-cover object-[center_30%]"
          />
          {/* Gradient overlay from transparent at top to darker at bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
        </div>

        <div className="absolute top-0 left-0 right-0 z-40">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            {/* Logo - Left side */}
            <div className="flex items-center gap-1.5">
              <img src="/images/overcast-header-logo.png" alt="Overcast logo" className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-base sm:text-lg text-white font-medium">Overcast</span>
            </div>

            {/* Menu - Right side */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#solutions" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Solutions
              </a>
              <a href="#case-studies" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Case Studies
              </a>
              <a href="#pricing" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Pricing
              </a>
              <a href="/docs" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Docs
              </a>
              <a href="/about" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
              <a href="/contact" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                Contact
              </a>
              <Button size="sm" asChild>
                <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 py-4 px-6">
              <div className="flex flex-col gap-4">
                <a
                  href="#solutions"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solutions
                </a>
                <a
                  href="#case-studies"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </a>
                <a
                  href="#pricing"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a
                  href="/docs"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Docs
                </a>
                <a
                  href="/about"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="/contact"
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <Button size="sm" className="w-full" asChild>
                  <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="relative z-10 flex-1 flex flex-col items-center justify-center gap-4 sm:gap-6 px-4 mt-32 sm:mt-48">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="px-3 py-1.5 sm:px-6 sm:py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <span className="text-white text-[10px] sm:text-sm">Backed by Fusen Ventures</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-8xl text-white font-light text-center px-4 leading-tight"
          >
            Your AI Platform Engineer
          </motion.h1>
        </div>

        <div className="relative z-10 mt-24 sm:mt-40">
          <LogoCarousel />
        </div>

        <div className="relative z-10 flex items-center justify-center px-4 mt-6 sm:mt-10">
          <div className="border-2 border-white/30 rounded-3xl overflow-hidden shadow-2xl max-w-4xl w-full backdrop-blur-sm bg-white/10 relative">
            {!isVideoPlaying && (
              <div className="absolute inset-0 z-20 cursor-pointer group" onClick={() => setIsVideoPlaying(true)}>
                <img src="/images/image.png" alt="Video thumbnail" className="w-full h-full object-cover" />
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1" />
                  </div>
                </div>
              </div>
            )}
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-3xl"
                src={`https://www.youtube.com/embed/f08ss7FEaUc${isVideoPlaying ? "?autoplay=1" : ""}`}
                title="Overcast Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-gradient-to-b from-black via-gray-950 to-black text-white py-16 sm:py-24">
        <div className="w-full">
          <CardStack items={solutions} />

          <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-12 py-8 sm:py-16 space-y-8 sm:space-y-12">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-2xl sm:text-4xl md:text-5xl text-center font-light px-4">
                  With Overcast MCP, you control your incidents
                </h3>
                <p className="text-base sm:text-lg md:text-2xl text-white/70 text-center max-w-4xl mx-auto leading-relaxed px-4">
                  We fill in the gaps so teams can ship safely. Overcast commands are fast, quick, and to the point. A
                  layer on top of your observability with MCP agents - tracing performance, limiting risky actions, and
                  turning noisy signals into decisive fixes.
                </p>
              </div>

              <MCPCommands
                commands={[
                  "list_incidents",
                  "root_cause",
                  "analyze_logs",
                  "deploy_diff",
                  "assign_owner",
                  "link_ticket",
                  "runbook_apply",
                  "safe_rollback",
                  "silence_alerts",
                  "guardrails_verify",
                  "sim_incident",
                  "auto_fix",
                  "status_board",
                  "trace_perf",
                  "agent_mesh",
                  "resume_tl",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <DistributedTracingSection />

      <OvercastSecuritySection />

      <section id="case-studies" className="bg-black text-white py-8 sm:py-12 px-4 sm:px-0">
        <TestimonialCarousel />
      </section>

      <CommunityCarousel />

      <section id="pricing" className="bg-black text-white py-8 sm:py-16 px-4 sm:px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-light">Pricing</h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl text-pretty">
              Choose the plan that fits your team. Scale as you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`border rounded-2xl p-6 sm:p-8 space-y-4 sm:space-y-6 flex flex-col ${
                  plan.featured ? "bg-white/10 border-white/30 ring-2 ring-white/20" : "bg-white/5 border-white/10"
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-light">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-light">{plan.price}</span>
                    <span className="text-white/60">{plan.period}</span>
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 shrink-0 mt-0.5" />
                      <span className="text-white/80 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full" variant={plan.featured ? "default" : "outline"} asChild>
                  <a
                    href={plan.price === "Custom" ? "https://calendly.com/raghavb5120/30min?month=2026-01" : "https://platform.overcastsre.com/login"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {plan.price === "Custom" ? "Talk to us" : "Get Started"}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
