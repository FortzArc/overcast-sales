import { Background } from "@/components/background"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Overcast - the AI-powered operations engineering platform transforming incident response.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <div className="fixed inset-0 z-0">
        <img
          src="/images/image-fotor.jpeg"
          alt="Mountain landscape"
          className="w-full h-full object-cover object-[center_30%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black" />
      </div>

      <Navigation />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-8xl text-white font-light">About Overcast</h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto">
              We're building the future of AI-powered operations engineering
            </p>
          </div>

          {/* Mission Section */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light">Our Mission</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              At Overcast, we're transforming incident response from reactive firefighting into proactive, AI-powered
              operations engineering. Our platform helps engineering teams solve complex production issues with total
              clarity, speed, and confidence.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe that downtime shouldn't be inevitable, and that modern teams deserve intelligent tools that
              understand their systems, predict issues, and provide actionable solutions in seconds, not hours.
            </p>
          </div>

          {/* Company Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
              <h2 className="text-3xl text-white font-light">Founded</h2>
              <p className="text-4xl font-medium text-white">2025</p>
              <p className="text-white/70">
                Built by engineers who experienced the pain of 3am incident responses and knew there had to be a better
                way
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
              <h2 className="text-3xl text-white font-light">Backed By</h2>
              <p className="text-2xl font-medium text-white">Fusen Ventures</p>
              <p className="text-white/70">
                Supported by leading venture capital focused on infrastructure and developer tools
              </p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
              <h2 className="text-3xl text-white font-light">Location</h2>
              <p className="text-2xl font-medium text-white">Dallas, Texas</p>
              <p className="text-white/70">Headquartered in the heart of Texas tech ecosystem</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 space-y-4">
              <h2 className="text-3xl text-white font-light">Team</h2>
              <p className="text-2xl font-medium text-white">Growing Fast</p>
              <p className="text-white/70">
                A passionate team of engineers, designers, and operations experts from top tech companies
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="backdrop-blur-xl bg-white/5 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light">What We Do</h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p className="text-lg">
                Overcast is your AI Platform Engineer — an intelligent operations platform that understands your
                infrastructure, learns from your incidents, and provides real-time root cause analysis.
              </p>
              <p className="text-lg">Our platform includes:</p>
              <ul className="list-disc pl-6 space-y-2 text-lg">
                <li>
                  <strong className="text-white font-medium">Distributed Tracing:</strong> Automatically correlate logs from multiple agents and systems into
                  coherent incident timelines
                </li>
                <li>
                  <strong className="text-white font-medium">GitHub Integration:</strong> Identify which code changes caused incidents with git blame and PR
                  tracking
                </li>
                <li>
                  <strong className="text-white font-medium">Domain-Specific AI:</strong> AI that learns your tech stack, naming conventions, and
                  infrastructure patterns
                </li>
                <li>
                  <strong className="text-white font-medium">Lightning Fast Analysis:</strong> 8-15 seconds from log ingestion to complete incident analysis
                </li>
                <li>
                  <strong className="text-white font-medium">Enterprise Security:</strong> HIPAA compliant with enterprise-grade security and complete data isolation
                </li>
              </ul>
            </div>
          </div>

          {/* Values */}
          <div className="backdrop-blur-xl bg-white/10 border-2 border-white/10 rounded-3xl p-8 md:p-12 space-y-8">
            <h2 className="text-4xl md:text-5xl text-white font-light text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <span className="text-3xl">⚡</span>
                </div>
                <h3 className="text-xl text-white font-medium">Speed</h3>
                <p className="text-white/70">
                  Every second counts during an incident. We optimize for rapid detection and resolution.
                </p>
              </div>
              <div className="space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-xl text-white font-medium">Accuracy</h3>
                <p className="text-white/70">
                  No false positives. Our AI provides real root cause analysis, not just anomaly detection.
                </p>
              </div>
              <div className="space-y-3 text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 border-2 border-white/30 mx-auto flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
                <h3 className="text-xl text-white font-medium">Security</h3>
                <p className="text-white/70">
                  Your data is sacred. Complete isolation, enterprise-grade security, and compliance certifications.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="backdrop-blur-xl bg-white/10 border-2 border-white/10 rounded-3xl p-12 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl text-white font-light">Join Us</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for building better operations tools.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" asChild>
                <a href="https://platform.overcastsre.com/login" target="_blank" rel="noopener noreferrer">
                  Get Started
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
