"use client"

import { useEffect, useState } from "react"
import { Zap, FileText, Activity } from "lucide-react"

const STAGES = [
  "Ingesting logs",
  "Correlating metrics",
  "Sampling traces",
  "Assembling RCA",
  "Drafting summary",
  "Complete",
]

const LOG_SAMPLES = [
  "2024-01-15 16:58:23 ERROR inventory-api timeout",
  "2024-01-15 16:58:24 WARN checkout-service retry failed",
  "2024-01-15 16:58:25 ERROR payment-gateway connection lost",
]

export function LightningFastAnalysisCard() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % STAGES.length), 1600)
    return () => clearInterval(id)
  }, [])

  const progress = ((step + 1) / STAGES.length) * 100

  return (
    <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10">
      <div className="absolute inset-0">
        <img src="/images/mountain-landscape-grainy.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      <div className="relative w-full h-full flex flex-col">
        <div className="px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4">
          <h3 className="text-2xl sm:text-4xl font-semibold text-white">Lightning-Fast Analysis</h3>
          <p className="text-sm sm:text-lg text-slate-300 mt-1 sm:mt-2">
            Complete RCA in seconds with intelligent data sampling
          </p>
        </div>

        <div className="md:hidden flex-1 flex items-center justify-center p-4">
          <div className="w-full max-w-sm rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-3">
            <div className="space-y-1.5 mb-3">
              {STAGES.map((stage, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                    idx === step
                      ? "bg-black/40 text-sky-100 border border-sky-500/60"
                      : idx < step
                        ? "bg-[#05020f] text-slate-400 border border-[#252336]"
                        : "bg-[#05020f] text-slate-500 border border-[#252336]"
                  }`}
                >
                  <span className="text-[10px] flex-shrink-0">{idx + 1}</span>
                  <span className="text-xs">{stage}</span>
                  {idx === step && <span className="ml-auto text-[10px] text-sky-300">...</span>}
                  {idx < step && <span className="ml-auto text-[10px] text-emerald-300">✓</span>}
                </div>
              ))}
            </div>

            <div className="p-2 rounded-lg bg-black/40 border border-[#252336] text-[10px] text-slate-300">
              Analysis completed in <span className="text-sky-300 font-mono">11.4s</span>
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-3 flex-1 items-center justify-center p-6 gap-4">
          {/* Column 1: Progress */}
          <div className="rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <Zap className="h-4 w-4 text-sky-300" />
                Progress
              </span>
              <span className="text-xs text-slate-500">{progress.toFixed(0)}%</span>
            </div>

            <div className="h-2 w-full rounded-full bg-[#05020f] overflow-hidden mb-4">
              <div
                style={{ width: `${progress}%` }}
                className="h-full rounded-full bg-gradient-to-r from-sky-500 to-sky-300 transition-all duration-300"
              />
            </div>

            <div className="space-y-2">
              {STAGES.map((stage, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all ${
                    idx === step
                      ? "bg-black/40 text-sky-100 border border-sky-500/60"
                      : idx < step
                        ? "bg-[#05020f] text-slate-400 border border-[#252336]"
                        : "bg-[#05020f] text-slate-500 border border-[#252336]"
                  }`}
                >
                  <span className="text-xs">{idx + 1}</span>
                  <span className="flex-1">{stage}</span>
                  {idx === step && <span className="text-xs text-sky-300">...</span>}
                  {idx < step && <span className="text-xs text-emerald-300">✓</span>}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Streaming Logs */}
          <div className="rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full font-mono">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <FileText className="h-4 w-4 text-purple-400" />
                Streaming Logs
              </span>
            </div>

            <div className="space-y-2 text-xs">
              {LOG_SAMPLES.map((log, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded-lg border transition-all ${
                    idx <= step / 2
                      ? "bg-black/40 border-purple-500/30 text-slate-200"
                      : "bg-[#05020f] border-[#252336] text-slate-600"
                  }`}
                >
                  {log}
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-black/40 border border-[#252336] text-xs text-slate-300">
              <div className="text-sky-300 mb-1">Sampling Strategy:</div>
              <div className="text-slate-400">• Critical error patterns</div>
              <div className="text-slate-400">• High-latency traces</div>
              <div className="text-slate-400">• Deployment correlations</div>
            </div>
          </div>

          {/* Column 3: Summary */}
          <div className="rounded-2xl bg-[#0b0915]/95 border border-[#252336] p-4 h-full">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-slate-200 flex items-center gap-2">
                <Activity className="h-4 w-4 text-emerald-400" />
                Summary
              </span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-black/40 border border-[#252336]">
                <div className="text-xs text-slate-400 mb-1">Analysis Time</div>
                <div className="text-2xl font-bold text-emerald-400">11.4s</div>
                <div className="text-xs text-slate-500 mt-1">↓ 94% faster than full scan</div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-[#252336]">
                <div className="text-xs text-slate-400 mb-1">Data Sampled</div>
                <div className="text-lg font-semibold text-slate-200">2.1 GB</div>
                <div className="text-xs text-slate-500 mt-1">from 180 GB total</div>
              </div>

              <div className="p-3 rounded-lg bg-black/40 border border-[#252336]">
                <div className="text-xs text-slate-400 mb-1">Root Cause Found</div>
                <div className="text-lg font-semibold text-slate-200">Yes</div>
                <div className="text-xs text-slate-500 mt-1">inventory-api timeout</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
