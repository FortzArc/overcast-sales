"use client"

import { useEffect, useState } from "react"
import { TerminalSquare, Server, Sparkles } from "lucide-react"

const MODES = [
  { label: "Windows PowerShell", icon: TerminalSquare, cmd: "overcast diagnose-checkout | Format-Table" },
  { label: "Linux Bash", icon: TerminalSquare, cmd: "overcast diagnose checkout-api --format table" },
  { label: "Kubernetes", icon: Server, cmd: "overcast trace pods -l app=checkout-api" },
  { label: "Internal Presets", icon: Sparkles, cmd: "overcast rca payments-latency --preset prod" },
]

export function DomainSpecificAICard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % MODES.length), 2400)
    return () => clearInterval(id)
  }, [])

  const activeMode = MODES[step]

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
      <div className="absolute inset-0">
        <img src="/images/mountain-landscape-grainy.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">Domain-Specific AI</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">
            Trained on your infrastructure vocabulary and deployment patterns
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-md rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3 sm:p-4">
            <div className="space-y-2 mb-3">
              {MODES.map((mode, idx) => {
                const Icon = mode.icon
                return (
                  <button
                    key={idx}
                    className={`flex w-full items-center justify-between rounded-xl px-3 sm:px-4 py-2 sm:py-3 border transition-all ${
                      idx === step
                        ? "bg-black/40 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                        : "bg-[#05020f] border-[#252336] text-slate-300"
                    }`}
                  >
                    <span className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                      <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      {mode.label}
                    </span>
                    <span className="text-[10px] sm:text-xs text-slate-500">
                      {idx === step ? "active" : "available"}
                    </span>
                  </button>
                )
              })}
            </div>

            <div className="rounded-xl bg-black border border-[#252336] p-2 sm:p-3 font-mono">
              <div className="text-[10px] sm:text-xs text-slate-400 mb-2">$ {activeMode.cmd}</div>
              <div className="text-[10px] sm:text-xs text-slate-300 space-y-1">
                <div className="text-sky-300">⇢ Parsing logs with {activeMode.label} context</div>
                <div className="text-slate-400">• Understands platform-specific commands</div>
                <div className="text-slate-400">• Adapts output format to your environment</div>
                <div className="text-slate-400">• Uses your internal service names</div>
              </div>
            </div>

            <div className="mt-2 p-2 rounded-lg bg-black/40 border border-[#252336] text-[10px] sm:text-xs text-slate-300">
              Trained on your infrastructure docs, runbooks, and incident history
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
