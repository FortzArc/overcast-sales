"use client"

import { useState, useEffect, useRef } from "react"
import { Lock, User, FileText, Users, Shield } from "lucide-react"
import Image from "next/image"

const items = [
  {
    id: "team",
    title: "Team controls",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• Role-based access control with Admin and Member roles for every organization</li>
        <li>• Team management for invites, role changes, and safe deactivate/remove flows</li>
        <li>• Security settings for password requirements, session timeout, and API key regeneration</li>
        <li>• Audit logging around sensitive actions like incident deletion and account changes</li>
      </ul>
    ),
  },
  {
    id: "isolation",
    title: "Battle-tested isolation",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>
          • "Brick wall" multi-tenant design with a customer_id on every core table and enforced row-level security
        </li>
        <li>• Unique API key per customer, validated on every ingest and dashboard request</li>
        <li>• Tenant-scoped Redis caches for deduplication, incident fingerprints, and agent heartbeats</li>
        <li>
          • Manual log forwarding and agents that keep production credentials and infrastructure fully under your
          control
        </li>
      </ul>
    ),
  },
  {
    id: "compliance",
    title: "SOC2 & HIPAA (readiness)",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>• bcrypt password hashing with strong cost factors and JWT-based auth with signed, expiring tokens</li>
        <li>
          • Strict input validation via Pydantic models, ORM-based queries to prevent SQL injection, and XSS-hardened
          frontend
        </li>
        <li>• OAuth tokens for integrations stored encrypted and all secrets managed through environment variables</li>
        <li>
          • Architecture and controls designed to align with SOC2/HIPAA-style practices, with enterprise SSO and
          advanced RBAC on the roadmap
        </li>
      </ul>
    ),
  },
  {
    id: "residency",
    title: "Data residency controls",
    content: (
      <ul className="mt-3 space-y-1 text-sm text-white/70">
        <li>
          • Hard tenant boundary at the database layer so each customer's data can be isolated, moved, or deleted
          independently
        </li>
        <li>
          • Cache keys and background processing keyed by customer, keeping transient data separated across tenants
        </li>
        <li>
          • Platform roadmap includes multi-region deployment and region-pinned storage for stricter residency
          requirements
        </li>
        <li>
          • Support for dedicated single-tenant deployments and white-label scenarios for customers with strong
          regulatory needs
        </li>
      </ul>
    ),
  },
]

const SECURITY_STEPS = [
  "Multi-tenant isolation enforced",
  "Guardrails verify blast radius",
  "Every action written to audit log",
]

const TEAM_MEMBERS = [
  { name: "Admin User", role: "Admin", status: "active" },
  { name: "Dev Lead", role: "Member", status: "active" },
  { name: "On-call Eng", role: "Member", status: "active" },
]

export default function OvercastSecuritySection() {
  const [openId, setOpenId] = useState<string | null>("team")
  const [step, setStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const section = sectionRef.current
      const rect = section.getBoundingClientRect()
      const sectionHeight = rect.height
      const viewportHeight = window.innerHeight

      // Calculate how far through the section we've scrolled
      const scrollProgress = -rect.top / (sectionHeight - viewportHeight)

      // Only trigger when section is in view
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        // Divide scroll progress into 4 sections (one for each accordion)
        const accordionIndex = Math.floor(scrollProgress * 4)
        const clampedIndex = Math.min(accordionIndex, 3)

        const newId = items[clampedIndex]?.id
        if (newId) {
          setOpenId(newId)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener("scroll", handleScroll)
  }, []) // Removed openId from dependency array to prevent infinite loop

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-white">
            Security and governance
          </h2>
          <p className="text-sm sm:text-base lg:text-2xl text-white/70 max-w-3xl leading-relaxed text-pretty">
            Overcast is built as a production-grade, multi-tenant incident platform with strict tenant isolation,
            hardened authentication, and secure-by-default handling for every log and incident we process.
          </p>
        </div>
      </div>

      <div className="sticky top-4 md:top-8 lg:top-12 container mx-auto max-w-7xl">
        <div className="rounded-2xl lg:rounded-3xl border border-zinc-800 bg-zinc-900 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Left side - Image with demo overlay */}
            <div className="md:col-span-5 relative min-h-[350px] sm:min-h-[450px] lg:min-h-[600px] order-2 md:order-1">
              <Image
                src="/images/mountain-landscape-grainy.jpg"
                alt="Mountain landscape background"
                fill
                className="object-cover opacity-50"
              />

              <div className="absolute inset-0 flex flex-col justify-center p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 md:space-y-4 overflow-y-auto">
                {openId === "team" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">Team Management</span>
                    </div>
                    <div className="space-y-2">
                      {TEAM_MEMBERS.map((member, idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg p-2 sm:p-3 transition-all ${
                            idx === step
                              ? "bg-emerald-500/15 border border-emerald-500/40"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-1">
                            <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-300 flex-shrink-0" />
                            <span className="text-white text-[11px] sm:text-sm font-medium truncate">
                              {member.name}
                            </span>
                          </div>
                          <div className="flex gap-2 text-[10px]">
                            <span className="text-white/50">{member.role}</span>
                            <span className="text-emerald-300">{member.status}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {openId === "isolation" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="text-white/70 text-[11px] sm:text-sm mb-2">Multi-Tenant Isolation</div>
                    <div className="space-y-2">
                      {["Tenant A", "Tenant B", "Tenant C"].map((t, idx) => (
                        <div
                          key={t}
                          className={`rounded-lg p-2 sm:p-3 transition-all ${
                            idx === step
                              ? "bg-emerald-500/15 border border-emerald-500/40"
                              : "bg-white/5 border border-white/10"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-white text-[11px] sm:text-sm font-medium">{t}</span>
                            <span className="text-emerald-300 text-[10px]">Isolated</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="text-white/50 text-[10px] mt-2">Complete data separation per tenant</div>
                  </div>
                )}

                {openId === "compliance" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="text-white/70 text-[11px] sm:text-sm mb-2">Audit Log</div>
                    <div className="space-y-2 text-[10px] sm:text-xs font-mono text-white/70">
                      <div className="flex items-start gap-2 p-2 rounded bg-white/5">
                        <User className="w-3 h-3 text-white/40 mt-0.5 flex-shrink-0" />
                        <span className="text-emerald-300 truncate">oncall@tenant-b</span>
                      </div>
                      <div className="flex items-start gap-2 p-2 rounded bg-white/5">
                        <FileText className="w-3 h-3 text-white/40 mt-0.5 flex-shrink-0" />
                        <span className="truncate">plan approved</span>
                      </div>
                      <div className="flex items-start gap-2 p-2 rounded bg-white/5">
                        <FileText className="w-3 h-3 text-white/40 mt-0.5 flex-shrink-0" />
                        <span className="text-white truncate">change-set applied</span>
                      </div>
                    </div>
                    <div className="text-white/50 text-[10px] mt-2">Immutable compliance trail</div>
                  </div>
                )}

                {openId === "residency" && (
                  <div className="rounded-lg sm:rounded-xl border border-white/20 bg-black/95 backdrop-blur animate-in fade-in duration-500 p-3 sm:p-4 md:p-6 space-y-2 sm:space-y-3 max-h-[700px] sm:max-h-none overflow-y-auto">
                    <div className="flex items-center gap-2">
                      <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400 flex-shrink-0" />
                      <span className="text-white/70 text-[11px] sm:text-sm">Data Residency</span>
                    </div>
                    <div className="rounded-lg bg-[#0f172a] border border-slate-700 p-3 sm:p-4 font-mono space-y-2 text-[10px] sm:text-xs">
                      <div className="text-white/60">$ overcast config</div>
                      <div className="text-white/80 space-y-1">
                        <div>• Region: us-west-2</div>
                        <div>• Status: Locked</div>
                        <div>• Compliance: GDPR</div>
                      </div>
                      <div className="text-emerald-300 pt-2">Region boundary enforced</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right side - Accordion details */}
            <div className="md:col-span-7 p-4 sm:p-5 lg:p-8 bg-black space-y-2.5 sm:space-y-3 flex flex-col justify-center order-1 md:order-2">
              {items.map((item, index) => {
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
          </div>
        </div>
      </div>
    </section>
  )
}
