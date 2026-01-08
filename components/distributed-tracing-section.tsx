"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, Mail, Key, FileText } from "lucide-react"
import Image from "next/image"

const authFlowItems = [
  {
    id: "signup",
    title: "Self-Service Signup",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• Both Customer and first Admin User are created together atomically</li>
        <li>• Secure API key generation for the Customer (cust_xxxx format)</li>
        <li>• bcrypt password hashing with strong cost factors</li>
        <li>• Automatic email verification token generation and welcome email</li>
      </ul>
    ),
  },
  {
    id: "verify",
    title: "Email Verification",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• Token-based email verification via secure verification link</li>
        <li>• Sets is_verified = true on User record after validation</li>
        <li>• Sends welcome email upon successful verification</li>
        <li>• Redirects to verified email confirmation page</li>
      </ul>
    ),
  },
  {
    id: "login",
    title: "User Login",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• JWT-based authentication with signed, expiring tokens</li>
        <li>• Password verification using secure bcrypt comparison</li>
        <li>• Active and verified user checks before token generation</li>
        <li>• Session record creation with user and customer context</li>
      </ul>
    ),
  },
  {
    id: "agents",
    title: "Agent Installation",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• API key passed securely via environment variables to agents</li>
        <li>• OpenTelemetry collector configuration with automatic discovery</li>
        <li>• Container-based deployment with Docker Compose support</li>
        <li>• Automatic heartbeat and health check monitoring</li>
      </ul>
    ),
  },
]

const SIGNUP_DATA = {
  company: "Acme Corp",
  email: "admin@acme.com",
  apiKey: "cust_a1b2c3d4e5f6...",
}

const LOGIN_STEPS = [
  { time: "10:30:01", event: "POST /api/v1/auth/login", status: "200 OK" },
  { time: "10:30:02", event: "JWT token generated", status: "success" },
  { time: "10:30:03", event: "Session created", status: "active" },
]

export default function DistributedTracingSection() {
  const [openId, setOpenId] = useState<string | null>("signup")
  const [step, setStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      const scrollProgress = -rect.top / (sectionHeight - viewportHeight)

      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const accordionIndex = Math.floor(scrollProgress * 4)
        const clampedIndex = Math.min(accordionIndex, 3)

        const newId = authFlowItems[clampedIndex]?.id
        if (newId && newId !== openId) {
          setOpenId(newId)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [openId])

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 3), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="min-h-[150vh] md:min-h-[200vh] lg:min-h-[300vh] w-full bg-black text-white px-4 sm:px-6 py-8 sm:py-12 relative"
    >
      <div className="container mx-auto max-w-7xl mb-6 sm:mb-8 lg:mb-12">
        <div className="space-y-3 sm:space-y-4 lg:space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white">Get Started in Minutes</h2>
          <p className="text-sm sm:text-base lg:text-2xl text-white/70 max-w-3xl leading-relaxed text-pretty">
            From self-service signup to production-ready agents in under 10 minutes. Overcast provides a seamless
            onboarding experience that gets you up and running instantly, no DevOps team required.
          </p>
        </div>
      </div>

      <div className="sticky top-4 md:top-8 lg:top-12 container mx-auto max-w-7xl">
        <div className="rounded-2xl lg:rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left side - Accordion details */}
            <div className="md:col-span-7 p-4 sm:p-5 lg:p-8 bg-black space-y-2.5 sm:space-y-3 flex flex-col justify-center order-1">
              {authFlowItems.map((item) => {
                const isOpen = openId === item.id

                return (
                  <div key={item.id}>
                    <button
                      className="flex w-full flex-col bg-black border border-white/20 rounded-xl lg:rounded-2xl p-3 sm:p-4 lg:p-8 text-left transition hover:bg-white/5 hover:border-white/30"
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-light text-white" style={{ fontSize: "clamp(14px, 3vw, 24px)" }}>
                          {item.title}
                        </span>

                        <span
                          className={`flex items-center justify-center rounded-full border border-white/30 text-white transition-transform flex-shrink-0 ${
                            isOpen ? "rotate-45" : ""
                          }`}
                          style={{
                            width: "clamp(24px, 5vw, 32px)",
                            height: "clamp(24px, 5vw, 32px)",
                            fontSize: "clamp(14px, 3vw, 18px)",
                          }}
                        >
                          +
                        </span>
                      </div>

                      {isOpen && (
                        <div
                          className="pt-3 sm:pt-4 lg:pt-6 text-white/80 leading-relaxed"
                          style={{ fontSize: "clamp(11px, 2.5vw, 16px)" }}
                        >
                          {item.content}
                        </div>
                      )}
                    </button>
                  </div>
                )
              })}
            </div>

            {/* Right side - Image with demo overlay */}
            <div className="md:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] order-2">
              <Image
                src="/images/mountain-landscape-grainy.jpg"
                alt="Mountain landscape background"
                fill
                className="object-cover opacity-50"
              />

              <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 overflow-y-auto">
                {openId === "signup" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">Account Created</span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-sky-500/10 border border-sky-500/30 p-2 sm:p-3">
                        <div className="text-white/50 text-[10px] mb-1">Company</div>
                        <div className="text-white text-sm sm:text-base md:text-lg font-medium truncate">
                          {SIGNUP_DATA.company}
                        </div>
                      </div>
                      <div className="rounded-lg bg-sky-500/10 border border-sky-500/30 p-2 sm:p-3">
                        <div className="text-white/50 text-[11px] sm:text-sm mb-1">Email</div>
                        <div className="text-white text-[11px] sm:text-sm md:text-base font-medium truncate">
                          {SIGNUP_DATA.email}
                        </div>
                      </div>
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-2 sm:p-3">
                        <div className="text-emerald-300 text-[11px] sm:text-sm font-medium">✓ Email Verified</div>
                      </div>
                    </div>
                  </div>
                )}

                {openId === "verify" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">Email Verification</span>
                    </div>
                    <div className="space-y-2">
                      <div className="rounded-lg bg-sky-500/10 border border-sky-500/30 p-2 sm:p-3">
                        <div className="text-white/70 text-[11px] sm:text-sm mb-2">Verification Link Clicked</div>
                        <div className="text-sky-300 text-[10px] font-mono truncate">
                          token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpX
                        </div>
                      </div>
                      <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-2 sm:p-3">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 mb-1" />
                        <div className="text-emerald-300 text-[11px] sm:text-sm font-medium">Token Validated</div>
                        <div className="text-emerald-400/70 text-[10px] mt-1">User verified successfully</div>
                      </div>
                    </div>
                  </div>
                )}

                {openId === "login" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <Key className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">User Login</span>
                    </div>
                    <div className="space-y-2">
                      {LOGIN_STEPS.map((item, idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg p-2 sm:p-3 transition-all ${
                            idx === step
                              ? "bg-sky-500/15 border border-sky-500/40"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="text-white/50 text-[10px] mb-1">{item.time}</div>
                          <div className="text-white text-[11px] sm:text-sm break-words">{item.event}</div>
                          <div className="text-emerald-300 text-[10px] mt-1">{item.status}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {openId === "agents" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">Agent Setup</span>
                    </div>
                    <div className="rounded-lg bg-[#0f172a] border border-slate-700 p-3 sm:p-4 font-mono space-y-2">
                      <div className="text-white/60 text-[10px] sm:text-xs">$ docker-compose up -d</div>
                      <div className="space-y-1 text-white/80 text-[10px] sm:text-xs">
                        <div>✓ OpenTelemetry Collector</div>
                        <div>✓ API Key Configured</div>
                        <div>✓ Container Started</div>
                      </div>
                      <div className="text-emerald-300 text-[10px] sm:text-xs pt-2">Agent streaming logs</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
