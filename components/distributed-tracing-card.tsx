"use client"

import { useEffect, useState } from "react"
import { Activity, AlertTriangle, Clock } from "lucide-react"

type Hop = {
  service: string
  status: "ok" | "error"
  latency: string
}

const TRACE_STEPS: Hop[] = [
  { service: "frontend", status: "ok", latency: "45ms" },
  { service: "api-gateway", status: "ok", latency: "120ms" },
  { service: "inventory-api", status: "error", latency: "2840ms" },
  { service: "database", status: "ok", latency: "85ms" },
]

export function DistributedTracingCard() {
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveStep((s) => (s + 1) % TRACE_STEPS.length), 2000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
      <div className="absolute inset-0">
        <img src="/images/mountain-landscape-grainy.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">Distributed Tracing</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">
            Automatically correlates logs, metrics, and traces across services
          </p>
        </div>

        <div className="md:hidden flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-md rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3">
            <div className="space-y-2">
              {TRACE_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 border transition-all ${
                    idx === activeStep
                      ? "bg-black/40 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                      : "bg-[#05020f] border-[#252336] text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-[10px] text-slate-500 flex-shrink-0">{idx + 1}</span>
                    <span className="text-xs truncate">{step.service}</span>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-[10px] font-mono text-slate-400">{step.latency}</span>
                    {step.status === "ok" ? (
                      <span className="text-[10px] text-emerald-300">OK</span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] text-amber-300">
                        <AlertTriangle className="h-3 w-3" />
                        ERR
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 p-2 rounded-lg bg-black/40 border border-[#252336]">
              <p className="text-[10px] text-slate-300">
                <span className="text-sky-300 font-medium">Root Cause:</span> Inventory API timeout causing failures
              </p>
            </div>
          </div>
        </div>

        <div className="hidden md:flex flex-1 items-center justify-center p-6 gap-4">
          {/* Panel 1: Primary Impact */}
          <div className="flex-1 rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                Primary Impact
              </span>
            </div>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-black/40 border border-amber-500/30">
                <div className="text-xs text-slate-400 mb-1">Error Rate</div>
                <div className="text-2xl font-bold text-amber-400">23.4%</div>
                <div className="text-xs text-slate-500 mt-1">↑ 18.9% from baseline</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-[#252336]">
                <div className="text-xs text-slate-400 mb-1">Affected Services</div>
                <div className="text-lg font-semibold text-slate-200">3 critical</div>
                <div className="text-xs text-slate-500 mt-1">checkout, payment, inventory</div>
              </div>
              <div className="p-3 rounded-lg bg-black/40 border border-[#252336]">
                <div className="text-xs text-slate-400 mb-1">User Impact</div>
                <div className="text-lg font-semibold text-slate-200">~2.1k users</div>
                <div className="text-xs text-slate-500 mt-1">Failed transactions</div>
              </div>
            </div>
          </div>

          {/* Panel 2: Trace Failing Path */}
          <div className="flex-1 rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full max-w-sm">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <Activity className="h-4 w-4 text-sky-400" />
                Trace · failing path
              </span>
              <span className="text-xs text-slate-500">Real-time</span>
            </div>

            <div className="space-y-2">
              {TRACE_STEPS.map((step, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 border transition-all ${
                    idx === activeStep
                      ? "bg-black/40 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                      : "bg-[#05020f] border-[#252336] text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-xs text-slate-500">{idx + 1}</span>
                    <span className="text-sm">{step.service}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">{step.latency}</span>
                    {step.status === "ok" ? (
                      <span className="text-xs text-emerald-300">OK</span>
                    ) : (
                      <span className="flex items-center gap-1 text-xs text-amber-300">
                        <AlertTriangle className="h-3 w-3" />
                        ERR
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 p-3 rounded-lg bg-black/40 border border-[#252336]">
              <p className="text-xs text-slate-300">
                <span className="text-sky-300 font-medium">Root Cause:</span> Inventory API timeout at step 3
              </p>
            </div>
          </div>

          {/* Panel 3: Timeline & Events */}
          <div className="flex-1 rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full max-w-xs">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400" />
                Timeline & Events
              </span>
            </div>
            <div className="space-y-3">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400" />
                  <div className="w-px flex-1 bg-purple-400/30 mt-1" />
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-xs text-slate-400">16:58:01</div>
                  <div className="text-sm text-slate-200 mt-1">Deploy: inventory-api v2.4.1</div>
                  <div className="text-xs text-slate-500 mt-1">PR #214 merged</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-amber-400" />
                  <div className="w-px flex-1 bg-amber-400/30 mt-1" />
                </div>
                <div className="flex-1 pb-4">
                  <div className="text-xs text-slate-400">16:58:23</div>
                  <div className="text-sm text-slate-200 mt-1">Error spike detected</div>
                  <div className="text-xs text-slate-500 mt-1">Latency +2400ms</div>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-sky-400" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-slate-400">16:58:31</div>
                  <div className="text-sm text-slate-200 mt-1">RCA completed</div>
                  <div className="text-xs text-slate-500 mt-1">8.2s analysis time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
