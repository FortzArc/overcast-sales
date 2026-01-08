"use client"

import { useEffect, useState } from "react"
import { ShieldCheck, Lock, User, FileText } from "lucide-react"

const SECURITY_STEPS = [
  "Multi-tenant isolation enforced",
  "Guardrails verify blast radius",
  "Every action written to audit log",
]

export function EnterpriseSecurityCard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % SECURITY_STEPS.length), 2400)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="w-full rounded-3xl border border-[#252336] bg-[#05020f] text-slate-100 shadow-[0_0_60px_rgba(0,0,0,0.9)]">
      <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-[#252336]">
        <div>
          <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
              <ShieldCheck className="h-3 w-3" />
            </span>
            Enterprise-Ready Security
          </div>
          <p className="mt-1 text-xs text-slate-400">
            Multi-tenant architecture with row-level isolation and enforced guardrails.
          </p>
        </div>
        <span className="rounded-full bg-[#12101f] px-3 py-1 text-[11px] text-emerald-200 border border-emerald-500/40">
          SOC2-friendly by design
        </span>
      </div>

      <div className="px-4 py-3 grid grid-cols-3 gap-3 text-xs">
        {/* left: tenants */}
        <div className="col-span-1 space-y-2">
          <span className="text-[11px] font-medium text-slate-200">Tenants</span>
          <div className="flex flex-col gap-1.5">
            {["Tenant A", "Tenant B", "Tenant C"].map((t, idx) => (
              <div
                key={t}
                className={`flex items-center justify-between rounded-xl px-3 py-2 border ${
                  idx === step
                    ? "bg-sky-500/15 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                    : "bg-[#0b0915] border-[#252336] text-slate-300"
                }`}
              >
                <span>{t}</span>
                <span className="text-[10px] text-slate-500">isolated</span>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-slate-500">Each tenant's metrics, incidents, and RCAs stay fully separate.</p>
        </div>

        {/* middle: guardrails */}
        <div className="col-span-1 rounded-2xl bg-[#0b0915] border border-[#252336] p-2.5 font-mono text-[11px] text-slate-300">
          <div className="flex items-center justify-between mb-1">
            <span className="inline-flex items-center gap-1 text-slate-300">
              <Lock className="h-3.5 w-3.5 text-emerald-300" />
              guardrails.verify change-set
            </span>
            <span className="text-[10px] text-emerald-300">{SECURITY_STEPS[step]}</span>
          </div>
          <div className="h-[90px] rounded-lg bg-[#05020f] border border-[#252336] p-2">
            <div className="text-slate-400">$ overcast apply /auto_fix --tenant tenant-b</div>
            <div className="mt-1 text-slate-300">• scope: services=[checkout-api, fraud-service]</div>
            <div className="text-slate-300">• restricted: pci-scoped services (auth, billing)</div>
            <div className="text-slate-300">• approvals: oncall + platform lead</div>
            <div className="mt-1 text-[10px] text-slate-500">
              Change is rejected if it crosses tenant or compliance boundaries.
            </div>
          </div>
        </div>

        {/* right: audit log */}
        <div className="col-span-1 rounded-2xl bg-[#0b0915] border border-[#252336] p-2.5 text-[11px]">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-slate-200">Audit log excerpt</span>
            <span className="text-[10px] text-slate-500">immutable</span>
          </div>
          <div className="space-y-1.5 text-slate-300 text-[10px] font-mono">
            <div className="flex items-center gap-2">
              <User className="h-3 w-3 text-slate-400" />
              16:59:02 · <span className="text-emerald-300">oncall@tenant-b</span> ran{" "}
              <span className="text-slate-100">/agent_mesh diagnose</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-3 w-3 text-slate-400" />
              17:00:10 · /auto_fix plan approved by platform-lead
            </div>
            <div className="flex items-center gap-2">
              <FileText className="h-3 w-3 text-slate-400" />
              17:01:05 · change-set <span className="text-slate-100">oc-change-7f2</span> applied
            </div>
          </div>
          <p className="mt-2 text-[10px] text-slate-500">
            Every Overcast action is tied to a user, tenant, and incident for clean compliance stories.
          </p>
        </div>
      </div>
    </div>
  )
}
