"use client"

import { useEffect, useState } from "react"
import { GitCommit, GitBranch, AlertTriangle } from "lucide-react"

const LOG_LINES = [
  { icon: GitBranch, text: "PR #214 • checkout-api • latency tuning", highlight: false },
  { icon: GitCommit, text: "git blame • FraudHandler.java:87 • sync call", highlight: true },
  { icon: AlertTriangle, text: "TimeoutException at FraudHandler • 504", highlight: true },
  { icon: GitBranch, text: "PR #211 • db-config • connection pool", highlight: false },
]

export function GitHubIngestionsCard() {
  const [activeLine, setActiveLine] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveLine((s) => (s + 1) % LOG_LINES.length), 2200)
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
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">GitHub Integration</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">
            Correlates code changes with incidents using PR data and git blame
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-md rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3 sm:p-4 font-mono">
            <div className="text-[10px] sm:text-xs text-slate-400 mb-2">
              $ overcast github correlate --incident checkout-latency
            </div>

            <div className="space-y-1.5">
              {LOG_LINES.map((line, idx) => {
                const Icon = line.icon
                const active = idx === activeLine
                return (
                  <div
                    key={idx}
                    className={`flex items-center gap-2 sm:gap-3 rounded-lg px-3 py-2 sm:py-2.5 border transition-all ${
                      active
                        ? "bg-black/40 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                        : "bg-[#05020f] border-[#252336] text-slate-300"
                    }`}
                  >
                    <Icon className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="text-[10px] sm:text-xs truncate flex-1">{line.text}</span>
                    {line.highlight && active && (
                      <span className="text-[9px] sm:text-[10px] text-amber-300 flex-shrink-0">suspected</span>
                    )}
                  </div>
                )
              })}
            </div>

            <div className="mt-3 p-2 rounded-lg bg-black/40 border border-[#252336] text-[10px] sm:text-xs text-slate-300">
              <span className="text-sky-300 font-medium">Analysis:</span> PR #214 introduced synchronous fraud_v2 call
              in checkout path, causing latency spike at deploy time 16:58:01
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
