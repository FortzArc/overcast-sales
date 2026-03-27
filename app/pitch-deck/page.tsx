"use client"

import Image from "next/image"
import Link from "next/link"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const tamSamSomData = [
  { label: "TAM", value: 15, fill: "#7a96a4", desc: "DevOps / Platform Eng" },
  { label: "SAM", value: 5, fill: "#6B7C85", desc: "Log + Codebase Tools" },
  { label: "SOM", value: 0.5, fill: "#8E9BA3", desc: "Y1 Target" },
]

const icpCompanySizeData = [
  { segment: "Startups (10 - 50 eng)", pct: 40 },
  { segment: "SMB (50 - 200 eng)", pct: 35 },
  { segment: "Enterprise", pct: 25 },
]

const icpIndustryData = [
  { industry: "SaaS / AI", focus: 35 },
  { industry: "Healthcare", focus: 25 },
  { industry: "Proptech", focus: 20 },
  { industry: "Fintech", focus: 20 },
]

const tamChartConfig = {
  value: { label: "Value ($B)", color: "#7a96a4" },
}

const icpChartConfig = {
  pct: { label: "%", color: "#7a96a4" },
  focus: { label: "Focus %", color: "#7a96a4" },
}

const slides = [
  {
    id: "cover",
    label: "// SLIDE: COVER",
    content: (
      <div className="flex flex-col gap-6">
        <div className="relative w-full border-2 border-foreground overflow-hidden">
          <div className="relative w-full h-[280px] sm:h-[340px] lg:h-[420px] bg-gradient-to-br from-muted via-muted/80 to-muted/60">
            <Image
              src="/hero-mountain.png"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10" style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.5)" }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground font-mono tracking-tight uppercase">
                Raincurve
              </h1>
              <p className="text-sm sm:text-base lg:text-lg font-mono text-foreground/90 tracking-wider mt-3">
                RL Agents for Reliability Intelligence
              </p>
              <p className="text-xs font-mono text-muted-foreground tracking-widest uppercase mt-1">
                Forecast production issues before they break
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "problem",
    label: "// SLIDE: PROBLEM",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          The Problem
        </h2>
        <p className="text-sm md:text-base font-mono text-muted-foreground leading-relaxed mb-6">
          Code review and monitoring tools miss production behavior. Teams discover issues only after they break.
        </p>
        <ul className="space-y-4 font-mono text-sm md:text-base">
          <li className="flex items-start gap-3">
            <span className="text-[#7a96a4] mt-1">×</span>
            <span className="text-muted-foreground">Post - production monitoring (Datadog, Sentry)  —  reactive, after issues occur</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7a96a4] mt-1">×</span>
            <span className="text-muted-foreground">AI code review (CodeRabbit, Greptile)  —  code only, no production behavior</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-[#7a96a4] mt-1">×</span>
            <span className="text-muted-foreground">The development cycle gap: nothing correlates logs + codebase before deploy</span>
          </li>
        </ul>
        <p className="mt-8 text-xs font-mono text-muted-foreground tracking-widest uppercase">
          Teams are reactive. We make them proactive.
        </p>
      </div>
    ),
  },
  {
    id: "solution",
    label: "// SLIDE: SOLUTION",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          The Solution
        </h2>
        <p className="text-xl md:text-2xl font-mono text-foreground/90 mb-8 leading-relaxed">
          Agentic Reliability Intelligence  —  forecast production issues before they break.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-2 border-foreground p-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4]">Log + Codebase</span>
            <p className="mt-2 text-sm font-mono text-muted-foreground">Unifies production logs with codebase analysis. No trigger event needed.</p>
          </div>
          <div className="border-2 border-foreground p-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4]">Proactive</span>
            <p className="mt-2 text-sm font-mono text-muted-foreground">Real - time suggestions as features are pushed. Fix before users are impacted.</p>
          </div>
        </div>
        <p className="mt-8 text-sm font-mono text-foreground">
          The only dev platform that closes the development cycle gap.
        </p>
      </div>
    ),
  },
  {
    id: "how-it-works",
    label: "// SLIDE: HOW_IT_WORKS",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          How It Works
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {[
            { label: "PRODUCTION_FORECASTING", desc: "Forecast what existing code will break production using dev code + logs" },
            { label: "DISTRIBUTED_TRACING", desc: "Correlate logs across systems into a single timeline" },
            { label: "GITHUB_INTEGRATIONS", desc: "Code changes with risk tagging (git blame, PRs, stack traces)" },
            { label: "AUTOMATED_PR_FIXES", desc: "Generate PRs to fix forecasted issues automatically" },
          ].map((item, i) => (
            <div key={i} className="border-2 border-foreground p-4 flex items-start gap-3">
              <span className="text-[10px] font-mono text-[#7a96a4] shrink-0">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <span className="text-xs font-mono tracking-widest uppercase text-foreground">{item.label}</span>
                <p className="mt-1 text-sm font-mono text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "why-now",
    label: "// SLIDE: WHY_NOW",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          Why Now
        </h2>
        <ul className="space-y-6 font-mono">
          <li className="flex gap-4 items-start">
            <span className="text-[#7a96a4] font-bold">01</span>
            <div>
              <span className="text-foreground font-medium uppercase tracking-wider">AI / RL maturity</span>
              <p className="text-sm text-muted-foreground mt-1">Agents can reason over logs + code at scale</p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-[#7a96a4] font-bold">02</span>
            <div>
              <span className="text-foreground font-medium uppercase tracking-wider">Microservices complexity</span>
              <p className="text-sm text-muted-foreground mt-1">Distributed systems amplify the development cycle gap</p>
            </div>
          </li>
          <li className="flex gap-4 items-start">
            <span className="text-[#7a96a4] font-bold">03</span>
            <div>
              <span className="text-foreground font-medium uppercase tracking-wider">Cost of downtime</span>
              <p className="text-sm text-muted-foreground mt-1">Every minute of outage costs more  —  proactive beats reactive</p>
            </div>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "market",
    label: "// SLIDE: MARKET",
    content: (
      <div className="max-w-4xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground">
          Market & Positioning
        </h2>
        <div className="border-2 border-foreground bg-[#111418] p-4">
          <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4] block mb-3">TAM / SAM / SOM ($B)</span>
          <ChartContainer config={tamChartConfig} className="h-[200px] w-full [&_.recharts-cartesian-axis-tick_text]:fill-[#6B7C85] [&_.recharts-cartesian-grid_line]:stroke-[#2E3F4F]">
            <BarChart data={tamSamSomData} layout="vertical" margin={{ top: 0, right: 20, left: 60, bottom: 0 }}>
              <CartesianGrid strokeDasharray="2 2" stroke="#2E3F4F" />
              <XAxis type="number" domain={[0, 20]} tick={{ fill: "#8E9BA3", fontSize: 9 }} />
              <YAxis type="category" dataKey="label" width={55} tick={{ fill: "#8E9BA3", fontSize: 10, fontFamily: "JetBrains Mono, monospace" }} />
              <Bar dataKey="value" radius={0} fill="#7a96a4" />
              <ChartTooltip content={<ChartTooltipContent />} />
            </BarChart>
          </ChartContainer>
          <div className="flex gap-4 mt-2 text-[10px] font-mono text-[#6B7C85] tracking-wider">
            <span>TAM: DevOps / Platform Eng (~$15B)</span>
            <span>SAM: Log + Codebase (~$5B)</span>
            <span>SOM: Y1 Target (~$500M)</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-2 border-foreground font-mono text-sm">
            <thead>
              <tr className="border-b-2 border-foreground">
                <th className="text-left p-3 uppercase tracking-wider">Tool</th>
                <th className="text-left p-3 uppercase tracking-wider">Focus</th>
                <th className="text-left p-3 uppercase tracking-wider">Raincurve Advantage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-3 text-muted-foreground">Datadog, Sentry</td>
                <td className="p-3 text-muted-foreground">Post - production monitoring</td>
                <td className="p-3 text-foreground">Proactive before deploy</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-3 text-muted-foreground">CodeRabbit, Greptile</td>
                <td className="p-3 text-muted-foreground">Code review only</td>
                <td className="p-3 text-foreground">Log + codebase correlation</td>
              </tr>
              <tr>
                <td className="p-3 text-muted-foreground">Raincurve</td>
                <td className="p-3 text-foreground">Logs + codebase</td>
                <td className="p-3 text-[#7a96a4]">Forecast before break</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    ),
  },
  {
    id: "icp",
    label: "// SLIDE: ICP",
    content: (
      <div className="max-w-4xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground">
          Ideal Customer Profile
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border-2 border-foreground bg-[#111418] p-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4] block mb-3">Company Size Mix</span>
            <ChartContainer config={icpChartConfig} className="h-[160px] w-full [&_.recharts-cartesian-axis-tick_text]:fill-[#6B7C85] [&_.recharts-cartesian-grid_line]:stroke-[#2E3F4F]">
              <BarChart data={icpCompanySizeData} layout="vertical" margin={{ top: 0, right: 10, left: 100, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#2E3F4F" />
                <XAxis type="number" domain={[0, 50]} tick={{ fill: "#8E9BA3", fontSize: 9 }} />
                <YAxis type="category" dataKey="segment" width={95} tick={{ fill: "#8E9BA3", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} />
                <Bar dataKey="pct" fill="#7a96a4" radius={0} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>
          <div className="border-2 border-foreground bg-[#111418] p-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4] block mb-3">Target Industries</span>
            <ChartContainer config={icpChartConfig} className="h-[160px] w-full [&_.recharts-cartesian-axis-tick_text]:fill-[#6B7C85] [&_.recharts-cartesian-grid_line]:stroke-[#2E3F4F]">
              <BarChart data={icpIndustryData} margin={{ top: 0, right: 10, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="2 2" stroke="#2E3F4F" />
                <XAxis dataKey="industry" tick={{ fill: "#8E9BA3", fontSize: 9, fontFamily: "JetBrains Mono, monospace" }} />
                <YAxis tick={{ fill: "#8E9BA3", fontSize: 9 }} />
                <Bar dataKey="focus" fill="#6B7C85" radius={0} />
                <ChartTooltip content={<ChartTooltipContent />} />
              </BarChart>
            </ChartContainer>
          </div>
        </div>
        <div className="border-2 border-foreground p-4 font-mono text-xs text-muted-foreground space-y-2">
          <p className="text-foreground font-medium uppercase tracking-wider text-[10px]">ICP Attributes</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-1">
            <li><span className="text-[#7a96a4]">→</span> Microservices / distributed systems</li>
            <li><span className="text-[#7a96a4]">→</span> Pain: MTTR, downtime, reactive firefighting</li>
            <li><span className="text-[#7a96a4]">→</span> Compliance: HIPAA, SOC 2, GDPR (enterprise)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    id: "product",
    label: "// SLIDE: PRODUCT_SNAPSHOT",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          Product Snapshot
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { k: "CODE_HEATMAP", v: "Highlights risky code areas" },
            { k: "DEPENDENCY_CHUNKING", v: "Analyzes chains across dev - to - prod" },
            { k: "MCP_COMMANDS", v: "list_incidents, root_cause, auto_fix, trace_perf" },
            { k: "ANALYSIS_SPEED", v: "8 – 15s from log ingestion to forecast" },
            { k: "LLM_COST", v: "~80% reduction vs baseline" },
            { k: "ENTERPRISE", v: "Multi-tenant, SOC 2, HIPAA, GDPR" },
          ].map((item, i) => (
            <div key={i} className="border-2 border-foreground p-3 flex justify-between items-center gap-4">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4] shrink-0">{item.k}</span>
              <span className="text-xs font-mono text-muted-foreground text-right">{item.v}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "traction",
    label: "// SLIDE: TRACTION",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          Traction
        </h2>
        <div className="space-y-6">
          {[
            { company: "Cosmed", sector: "Medical Manufacturing", stats: ["50% MTTR reduction", "Root cause in under 30min", "8 issues resolved"] },
            { company: "Playgent AI", sector: "YC Backed", stats: ["99.9% uptime at launch", "12+ hrs downtime prevented", "24 incidents resolved pre-impact"] },
            { company: "Bedrock AI", sector: "Rental Property Platform", stats: ["45 issues forecasted before impact", "65% MTTR reduction", "100% scale success"] },
          ].map((c, i) => (
            <div key={i} className="border-2 border-foreground p-4">
              <div className="flex flex-wrap gap-2 items-center mb-2">
                <span className="text-lg font-mono font-bold text-foreground uppercase">{c.company}</span>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#7a96a4]">({c.sector})</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {c.stats.map((s, j) => (
                  <span key={j} className="text-xs font-mono px-2 py-1 border border-foreground text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "business-model",
    label: "// SLIDE: BUSINESS_MODEL",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          Business Model
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { tier: "STARTUPS_SMB", price: "$150/user/mo", features: ["SDK", "Forecasting + auto PR fixes", "3 agents", "7-day history"] },
            { tier: "MIDMARKET", price: "$350/user/mo", features: ["10 agents", "30-day history", "99.9% SLA"], recommended: true },
            { tier: "ENTERPRISE", price: "Custom", features: ["HIPAA", "On - prem", "Unlimited agents", "24/7 support"] },
          ].map((t) => (
            <div key={t.tier} className={`border-2 border-foreground p-4 ${t.recommended ? "ring-2 ring-[#7a96a4]" : ""}`}>
              {t.recommended && (
                <span className="text-[10px] font-mono tracking-widest text-[#7a96a4] block mb-2">RECOMMENDED</span>
              )}
              <span className="text-xs font-mono tracking-widest uppercase text-foreground">{t.tier}</span>
              <p className="text-2xl font-mono font-bold text-foreground mt-2">{t.price}</p>
              <ul className="mt-2 space-y-1 text-xs font-mono text-muted-foreground">
                {t.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ask",
    label: "// SLIDE: THE_ASK",
    content: (
      <div className="max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-6">
          The Ask
        </h2>
        <div className="space-y-6 font-mono text-sm text-muted-foreground">
          <p>Raising [ROUND] to scale go-to-market and product.</p>
          <ul className="space-y-2">
            <li className="flex gap-2">
              <span className="text-[#7a96a4]">→</span>
              <span>Engineering & product</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7a96a4]">→</span>
              <span>Sales & customer success</span>
            </li>
            <li className="flex gap-2">
              <span className="text-[#7a96a4]">→</span>
              <span>Enterprise security & compliance</span>
            </li>
          </ul>
          <p className="text-xs tracking-widest uppercase text-foreground mt-8">
            Key milestones: [CUSTOMIZE]
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "contact",
    label: "// SLIDE: CONTACT",
    content: (
      <div className="max-w-4xl flex flex-col items-center justify-center text-center min-h-[60vh]">
        <h2 className="text-2xl md:text-3xl font-bold font-mono tracking-tight uppercase text-foreground mb-8">
          Let&apos;s Talk
        </h2>
        <div className="space-y-4 font-mono text-sm">
          <p>
            <Link href="https://platform.raincurvesre.com/" target="_blank" rel="noopener noreferrer" className="text-[#7a96a4] underline hover:no-underline">
              platform.raincurvesre.com
            </Link>
          </p>
          <p>
            <Link href="https://calendly.com/mohan-raincurvesre/30min" target="_blank" rel="noopener noreferrer" className="text-[#7a96a4] underline hover:no-underline">
              calendly.com/mohan-raincurvesre/30min
            </Link>
          </p>
          <p className="text-muted-foreground">@raincurve</p>
        </div>
        <p className="mt-12 text-[10px] font-mono tracking-widest uppercase text-muted-foreground">
          Raincurve SRE · (C) 2026
        </p>
      </div>
    ),
  },
]

export default function PitchDeckPage() {
  return (
    <div className="pitch-deck bg-background min-h-screen">
      {slides.map((slide, index) => (
        <section
          key={slide.id}
          className={`pitch-slide min-h-screen flex flex-col px-6 sm:px-8 lg:px-12 py-12 lg:py-16 print:min-h-0 print:py-8 ${index === slides.length - 1 ? "print:break-after-auto" : "print:break-after-page"}`}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">{slide.label}</span>
            <div className="flex-1 border-t border-border" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="flex-1">{slide.content}</div>
        </section>
      ))}
    </div>
  )
}
