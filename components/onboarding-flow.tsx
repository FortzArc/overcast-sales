"use client"

import { useState, useEffect } from "react"
import { CheckCircle2, Copy } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    id: 1,
    title: "Create Account",
    subtitle: "Sign up and get your API key",
    fields: [
      { label: "Company", value: "Acme Corp" },
      { label: "Email", value: "admin@acme.com" },
      { label: "Status", value: "✓ Email verified", highlight: true },
    ],
    terminal: "API Key: cust_a1b2c3d4e5f6...",
    status: "Creating organization...",
  },
  {
    id: 2,
    title: "Choose Method",
    subtitle: "Select installation approach",
    fields: [
      { label: "Method", value: "Kubernetes (Helm)" },
      { label: "Region", value: "us-east-1" },
      { label: "Version", value: "v2.4.1" },
    ],
    terminal: "helm repo add overcast https://charts.overcast.io",
    status: "Configuring deployment...",
  },
  {
    id: 3,
    title: "Install Agent",
    subtitle: "Deploy the OTel collector",
    fields: [
      { label: "Status", value: "Connected", highlight: true },
      { label: "Protocol", value: "OTLP/gRPC" },
      { label: "Latency", value: "12ms" },
    ],
    terminal: "helm install overcast-agent overcast/agent --set apiKey=$API_KEY",
    status: "Agent deployed successfully",
  },
  {
    id: 4,
    title: "Verify Connection",
    subtitle: "Confirm agent is sending data",
    fields: [
      { label: "Logs/min", value: "1,247" },
      { label: "Traces/min", value: "823" },
      { label: "Metrics/min", value: "3,456" },
    ],
    terminal: "✓ Receiving telemetry data from 12 services",
    status: "Data flowing successfully",
  },
  {
    id: 5,
    title: "First Incident",
    subtitle: "AI detecting issues",
    fields: [
      { label: "Detected", value: "Memory leak - Auth service" },
      { label: "Root Cause", value: "Connection pool exhaustion" },
      { label: "Confidence", value: "94%", highlight: true },
    ],
    terminal: "overcast incidents list --status=active",
    status: "1 incident detected 2 minutes ago",
  },
]

export function OnboardingFlow() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = steps.find((s) => s.id === activeStep) || steps[0]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="min-h-screen w-full bg-black text-white px-4 sm:px-6 py-12 sm:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white">Get Started in Minutes</h2>
          <p className="text-lg lg:text-xl text-white/70 max-w-3xl leading-relaxed">
            From signup to full observability in 5 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left side - Step navigation */}
          <div className="space-y-3">
            {steps.map((step, idx) => {
              const isActive = activeStep === step.id
              const isPast = step.id < activeStep

              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className={`w-full text-left transition-all duration-300 ${
                    isActive ? "opacity-100" : isPast ? "opacity-40" : "opacity-30"
                  }`}
                >
                  <h3 className={`text-3xl font-light mb-1 ${isActive ? "text-white" : "text-white/60"}`}>
                    {step.title}
                  </h3>
                  <p className={`text-base ${isActive ? "text-white/70" : "text-white/40"}`}>{step.subtitle}</p>
                </button>
              )
            })}
          </div>

          {/* Right side - Browser/Terminal interface */}
          <div className="relative">
            {/* Background image */}
            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden">
              <Image
                src="/images/mountain-landscape-grainy.jpg"
                alt="Mountain landscape"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Browser window */}
            <div className="rounded-3xl border border-white/10 bg-[#0f0f1a]/95 backdrop-blur-xl overflow-hidden shadow-2xl">
              {/* Browser header */}
              <div className="flex items-center gap-2 px-6 py-4 bg-[#1a1a2e]/90 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="ml-4 text-sm text-white/40 tracking-wider uppercase font-mono">
                  Account Setup · Overcast
                </span>
              </div>

              {/* Content */}
              <div className="p-8 space-y-6">
                {/* Header with icon */}
                <div className="flex items-center gap-4 pb-4 border-b border-white/10">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/20 border border-sky-400/40">
                    <CheckCircle2 className="h-6 w-6 text-sky-300" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-light text-white mb-1">Account Setup</h4>
                    <p className="text-sm text-white/50">{currentStep.status}</p>
                  </div>
                </div>

                {/* Form fields */}
                <div className="space-y-4">
                  {currentStep.fields.map((field, idx) => (
                    <div
                      key={idx}
                      className={`rounded-xl border p-4 flex items-center justify-between transition-all ${
                        field.highlight
                          ? "bg-black/40 border-sky-500/60 shadow-[0_0_20px_rgba(56,189,248,0.3)]"
                          : "bg-[#0b0915] border-[#252336]"
                      }`}
                    >
                      <span className="text-sm text-white/50">{field.label}</span>
                      <span className={`text-base ${field.highlight ? "text-white font-medium" : "text-white/90"}`}>
                        {field.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Terminal section */}
                <div className="rounded-xl border border-[#252336] bg-[#0b0915] overflow-hidden">
                  <div className="px-4 py-2 bg-black/40 border-b border-white/10 flex items-center justify-between">
                    <span className="text-xs text-white/40 uppercase tracking-wider font-mono">Terminal</span>
                    <button className="text-white/40 hover:text-white/70 transition-colors">
                      <Copy className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <div className="p-4 font-mono text-sm text-green-400">{currentStep.terminal}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
