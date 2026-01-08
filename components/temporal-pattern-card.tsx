"use client"

import { useEffect, useState } from "react"
import { Activity, AlertTriangle } from "lucide-react"

const PATTERNS = [
  { time: "08:30 AM", pattern: "Batch Job Spike", incidents: 5 },
  { time: "12:00 PM", pattern: "Lunch Traffic", incidents: 3 },
  { time: "06:00 PM", pattern: "Evening Deploy", incidents: 7 },
]

export function TemporalPatternCard() {
  const [activePattern, setActivePattern] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActivePattern((s) => (s + 1) % PATTERNS.length), 2400)
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
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">Temporal Pattern Detection</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">
            AI-powered analysis identifies recurring incident patterns
          </p>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-sm rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3 sm:p-4">
            <div className="hidden md:flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2">
                <Activity className="h-4 w-4 text-sky-300" />
                Today's Patterns
              </span>
              <span className="text-[10px] sm:text-xs text-slate-500">Auto-detected</span>
            </div>

            <div className="space-y-2 mb-3">
              {PATTERNS.map((pattern, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between rounded-xl px-3 sm:px-4 py-2 sm:py-3 border transition-all ${
                    idx === activePattern
                      ? "bg-black/40 border-sky-500/60 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.7)]"
                      : "bg-[#05020f] border-[#252336] text-slate-300"
                  }`}
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="font-mono text-xs sm:text-sm">{pattern.time}</span>
                    <span className="text-xs sm:text-sm">{pattern.pattern}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <AlertTriangle className="h-3 w-3 text-amber-400" />
                    <span className="text-xs font-medium">{pattern.incidents}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-black border border-[#252336] p-2 sm:p-3 font-mono text-[10px] sm:text-xs text-slate-300">
              <div className="text-sky-300 mb-2">AI Hypothesis:</div>
              <div className="space-y-1 text-slate-400">
                <div>• Pattern: Every 28 minutes during peak hours</div>
                <div>• Likely cause: Scheduled batch job at {PATTERNS[activePattern].time}</div>
                <div>• Recommendation: Move to off-peak hours</div>
                <div>• Similar pattern detected over last 14 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
