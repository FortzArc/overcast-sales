"use client"

import { useEffect, useState } from "react"
import { Target, CheckCircle2 } from "lucide-react"

const RCA_STEPS = [
  "Deploy identified as trigger",
  "Latency spike correlated",
  "DB saturation detected",
  "Root cause determined",
]

export function RealRCACard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % RCA_STEPS.length), 2200)
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
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">Real Root Cause Analysis</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">Evidence-backed RCA with confidence scoring</p>
        </div>

        <div className="flex-1 flex items-center justify-center p-4 sm:p-6">
          <div className="w-full max-w-sm rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3 sm:p-4">
            <div className="hidden md:flex items-center justify-between mb-3">
              <span className="text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2">
                <Target className="h-4 w-4 text-violet-300" />
                RCA Pipeline
              </span>
              <span className="rounded-full bg-violet-500/15 px-2 sm:px-3 py-1 text-[10px] sm:text-xs text-violet-200 border border-violet-500/40">
                85% confidence
              </span>
            </div>

            <div className="space-y-2 mb-3">
              {RCA_STEPS.map((stepText, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 sm:py-2.5 border transition-all ${
                    idx <= step
                      ? "bg-black/40 border-violet-500/60 text-violet-100"
                      : "bg-[#05020f] border-[#252336] text-slate-500"
                  }`}
                >
                  {idx <= step ? (
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 text-violet-300 flex-shrink-0" />
                  ) : (
                    <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border border-slate-600 flex-shrink-0" />
                  )}
                  <span className="text-xs sm:text-sm">{stepText}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-black border border-[#252336] p-2 sm:p-3 font-mono text-[10px] sm:text-xs">
              <div className="text-violet-300 mb-2">
                ⇢ Root cause: <span className="font-semibold">fraud_v2 sync call + reduced DB pool</span>
              </div>
              <div className="space-y-1 text-slate-400">
                <div>• Deploy: v214.3.1 at 16:58:01</div>
                <div>• Spike detected: 16:58:23 (+22s)</div>
                <div>• Supporting evidence: DB saturation, retry storms</div>
                <div>• Unaffected paths: search, auth, homepage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
