"use client"

import React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check } from "lucide-react"
import { useState } from "react"

const ease = [0.22, 1, 0.36, 1] as const

const solutions = [
  {
    title: "Production Forecasting",
    description:
      "Forecast what existing code will break production using dev code and logs as evidence. Real-time production code suggestions as new features are pushed—no trigger event needed.",
    demo: {
      type: "code",
      content: `// Example: Forecasting production breakage
const forecast = await overcast.forecast({
  codebase: currentPR,
  logs: productionLogs,
  evidence: devCodeChanges
});

// Returns: { risk: 0.85, affected: ['/api/users', '/api/orders'] }
if (forecast.risk > 0.7) {
  await overcast.suggestFix(forecast);
}`,
    },
  },
  {
    title: "Distributed Tracing",
    description:
      "Automatically correlates logs from multiple agents and systems into a single, coherent timeline for forecasting how failures will propagate.",
    demo: {
      type: "timeline",
      content: [
        { time: "00:00", service: "API Gateway", event: "Request received", status: "ok" },
        { time: "00:01", service: "Auth Service", event: "Authentication", status: "ok" },
        { time: "00:02", service: "Database", event: "Query executed", status: "slow" },
        { time: "00:03", service: "Cache", event: "Cache miss", status: "warning" },
        { time: "00:04", service: "API Gateway", event: "Response sent", status: "ok" },
      ],
    },
  },
  {
    title: "GitHub Ingestions",
    description:
      "Reads your codebase and identifies which code changes will cause production issues with git blame, PR tracking, and stack trace analysis for forecasting.",
    demo: {
      type: "git",
      content: {
        pr: "#1234 - Add user authentication",
        files: [
          { path: "src/auth.js", risk: "high", changes: "+45 -12" },
          { path: "src/middleware.js", risk: "medium", changes: "+20 -5" },
          { path: "tests/auth.test.js", risk: "low", changes: "+30 -0" },
        ],
      },
    },
  },
  {
    title: "Domain Specific Intelligence",
    description:
      "Our agents are designed for your specific regulations & rules, with customizable Prompt Packets that fit your needs. Whether you're in healthcare, finance, or any regulated industry, agents understand your unique constraints and requirements.",
    demo: {
      type: "domain",
      content: {
        regulations: ["HIPAA", "GDPR", "SOC 2", "PCI-DSS"],
        rules: ["Data retention policies", "Access control requirements", "Audit trail standards"],
        promptPackets: [
          { name: "Healthcare Compliance", customizable: true },
          { name: "Financial Regulations", customizable: true },
          { name: "Custom Domain Rules", customizable: true },
        ],
      },
    },
  },
  {
    title: "Lightning Fast Analysis",
    description:
      "8-15 seconds from log ingestion to complete forecasting analysis. Intelligent filtering reduces LLM costs by 80%.",
    demo: {
      type: "metrics",
      content: {
        ingestionTime: "2.3s",
        analysisTime: "8.7s",
        totalTime: "11.0s",
        costReduction: "82%",
        logsProcessed: "1.2M",
      },
    },
  },
  {
    title: "AI That Forecasts Production Issues",
    description:
      "Complete production forecasting with evidence, timeline reconstruction, and confidence scoring. Not just anomaly detection—real predictions before issues occur.",
    demo: {
      type: "forecast",
      content: {
        prediction: "High memory usage in /api/orders",
        confidence: 0.92,
        timeframe: "2-4 hours",
        evidence: ["Recent code changes", "Similar past incidents", "Resource trends"],
      },
    },
  },
  {
    title: "Automated PR Fixes",
    description:
      "Automatically generates PRs to fix forecasted issues, providing the code changes needed to prevent production breaks before they happen.",
    demo: {
      type: "pr",
      content: {
        title: "Fix: Memory leak in order processing",
        changes: [
          { file: "src/orders.js", action: "Added cleanup", line: 45 },
          { file: "src/orders.js", action: "Fixed memory leak", line: 78 },
        ],
        status: "Ready to merge",
      },
    },
  },
  {
    title: "Enterprise-Ready Security",
    description:
      "Multi-tenant architecture with complete customer isolation. Row-level security ensures your data stays yours.",
    demo: {
      type: "security",
      content: {
        tenants: ["acme-corp", "globex-inc", "initech"],
        isolation: "Row-level security enabled",
        compliance: ["SOC 2", "GDPR", "HIPAA"],
      },
    },
  },
]

const mcpCommands = [
  "list_incidents",
  "root_cause",
  "analyze_logs",
  "deploy_diff",
  "assign_owner",
  "link_ticket",
  "runbook_apply",
  "safe_rollback",
  "silence_alerts",
  "guardrails_verify",
  "sim_incident",
  "auto_fix",
  "status_board",
  "trace_perf",
  "agent_mesh",
  "resume_tl",
]

// Demo content renderer component
function DemoContent({ demo }: { demo: typeof solutions[0]["demo"] }) {
  if (demo.type === "code") {
    const content = demo.content as string
    return (
      <div className="border-2 border-foreground bg-muted/20 p-4 sm:p-6">
        <div className="border-2 border-[#2E3F4F] bg-[#111418] -m-4 sm:-m-6 overflow-x-auto">
          {/* File tab */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
            <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
            <span className="text-[8px] sm:text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
              forecast.js
            </span>
            <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
              example
            </span>
          </div>
          {/* Code content */}
          <div className="p-4 text-[8px] sm:text-[9px] leading-relaxed" style={{ lineHeight: "1.65" }}>
            <pre className="font-mono text-[#C8CDD0] overflow-x-auto whitespace-pre-wrap">
              <code>
                {content.split('\n').map((line, i) => {
                // Simple syntax highlighting
                const parts: React.ReactElement[] = []
                let processed = line
                
                // Handle comments first
                const commentMatch = processed.match(/\/\/.*$/)
                let comment = ''
                if (commentMatch) {
                  comment = commentMatch[0]
                  processed = processed.substring(0, commentMatch.index || 0)
                }
                
                // Simple tokenization
                const tokens: Array<{ text: string; type: 'keyword' | 'function' | 'string' | 'number' | 'punctuation' | 'text' }> = []
                let current = processed
                
                // Extract strings
                const stringRegex = /(['"])(?:(?=(\\?))\2.)*?\1/g
                const strings: Array<{ start: number; end: number; text: string }> = []
                let strMatch
                while ((strMatch = stringRegex.exec(processed)) !== null) {
                  strings.push({ start: strMatch.index, end: strMatch.index + strMatch[0].length, text: strMatch[0] })
                }
                
                // Extract numbers
                const numberRegex = /\b\d+\.?\d*\b/g
                const numbers: Array<{ start: number; end: number; text: string }> = []
                let numMatch
                while ((numMatch = numberRegex.exec(processed)) !== null) {
                  numbers.push({ start: numMatch.index, end: numMatch.index + numMatch[0].length, text: numMatch[0] })
                }
                
                // Keywords
                const keywords = ['const', 'await', 'if', 'new', 'from', 'import', 'return']
                const functions = ['forecast', 'suggestFix', 'on', 'Overcast']
                
                let lastIndex = 0
                const allMatches: Array<{ start: number; end: number; type: string; text: string }> = []
                
                // Add all matches
                strings.forEach(s => allMatches.push({ ...s, type: 'string' }))
                numbers.forEach(n => allMatches.push({ ...n, type: 'number' }))
                
                // Check for keywords and functions
                keywords.forEach(kw => {
                  const regex = new RegExp(`\\b${kw}\\b`, 'g')
                  let m
                  while ((m = regex.exec(processed)) !== null) {
                    allMatches.push({ start: m.index, end: m.index + m[0].length, type: 'keyword', text: m[0] })
                  }
                })
                
                functions.forEach(fn => {
                  const regex = new RegExp(`\\b${fn}\\b`, 'g')
                  let m
                  while ((m = regex.exec(processed)) !== null) {
                    allMatches.push({ start: m.index, end: m.index + m[0].length, type: 'function', text: m[0] })
                  }
                })
                
                // Sort and deduplicate
                allMatches.sort((a, b) => a.start - b.start)
                const filtered: typeof allMatches = []
                allMatches.forEach(m => {
                  const overlaps = filtered.some(f => (m.start >= f.start && m.start < f.end) || (m.end > f.start && m.end <= f.end))
                  if (!overlaps) filtered.push(m)
                })
                
                // Build parts
                filtered.forEach(match => {
                  if (match.start > lastIndex) {
                    const text = processed.substring(lastIndex, match.start)
                    // Check for punctuation
                    text.split('').forEach((char, idx) => {
                      if (/[\(\)\[\]\{\},;\.=:>]/.test(char)) {
                        parts.push(<span key={`${i}-${lastIndex + idx}-punc`} className="text-[#6B7C85]">{char}</span>)
                      } else if (char.trim()) {
                        parts.push(<span key={`${i}-${lastIndex + idx}-text`} className="text-[#b0bec5]">{char}</span>)
                      } else {
                        parts.push(<span key={`${i}-${lastIndex + idx}-space`}>{char}</span>)
                      }
                    })
                  }
                  
                  const colorMap: Record<string, string> = {
                    keyword: '#8E9BA3',
                    function: '#C8CDD0',
                    string: '#a8bfc9',
                    number: '#7a9bae',
                  }
                  parts.push(
                    <span key={`${i}-${match.start}`} style={{ color: colorMap[match.type] || '#b0bec5' }}>
                      {match.text}
                    </span>
                  )
                  lastIndex = match.end
                })
                
                if (lastIndex < processed.length) {
                  const text = processed.substring(lastIndex)
                  text.split('').forEach((char, idx) => {
                    if (/[\(\)\[\]\{\},;\.=:>]/.test(char)) {
                      parts.push(<span key={`${i}-${lastIndex + idx}-punc`} className="text-[#6B7C85]">{char}</span>)
                    } else if (char.trim()) {
                      parts.push(<span key={`${i}-${lastIndex + idx}-text`} className="text-[#b0bec5]">{char}</span>)
                    } else {
                      parts.push(<span key={`${i}-${lastIndex + idx}-space`}>{char}</span>)
                    }
                  })
                }
                
                if (comment) {
                  parts.push(<span key={`${i}-comment`} className="text-[#3a4a58] italic">{comment}</span>)
                }
                
                return <div key={i}>{parts.length > 0 ? parts : <span className="text-[#b0bec5]">{line}</span>}</div>
              })}
              </code>
            </pre>
          </div>
        </div>
      </div>
    )
  }

  if (demo.type === "timeline") {
    const content = demo.content as Array<{ time: string; service: string; event: string; status: string }>
    return (
      <div className="space-y-2">
        {content.map((item, i) => (
          <div key={i} className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono border-l-2 border-foreground pl-4 py-2">
            <span className="text-muted-foreground w-16 shrink-0">{item.time}</span>
            <span className="text-foreground flex-1 font-semibold">{item.service}</span>
            <span className="text-muted-foreground flex-1">{item.event}</span>
            <span className={`px-2 py-1 border-2 shrink-0 ${
              item.status === "ok" ? "border-[#7a96a4] text-[#7a96a4]" :
              item.status === "warning" ? "border-yellow-500 text-yellow-500" :
              "border-red-500 text-red-500"
            }`}>
              {item.status}
            </span>
          </div>
        ))}
      </div>
    )
  }

  if (demo.type === "git") {
    const content = demo.content as { pr: string; files: Array<{ path: string; risk: string; changes: string }> }
    return (
      <div className="border-2 border-foreground p-4 bg-muted/30">
        <div className="text-sm font-mono font-bold text-foreground mb-3">{content.pr}</div>
        <div className="space-y-2">
          {content.files.map((file, i) => (
            <div key={i} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs font-mono border-l-2 border-foreground pl-3 py-2">
              <span className="text-foreground font-semibold">{file.path}</span>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">{file.changes}</span>
                <span className={`px-2 py-1 border-2 shrink-0 ${
                  file.risk === "high" ? "border-red-500 text-red-500" :
                  file.risk === "medium" ? "border-yellow-500 text-yellow-500" :
                  "border-[#7a96a4] text-[#7a96a4]"
                }`}>
                  {file.risk}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (demo.type === "ai") {
    const content = demo.content as unknown as { stack: string; patterns: string[]; commands: string[] }
    return (
      <div className="space-y-3">
        <div className="border-2 border-foreground p-4 bg-muted/30">
          <div className="text-xs font-mono space-y-3">
            <div>
              <span className="text-muted-foreground uppercase tracking-wider">Stack: </span>
              <span className="text-foreground font-semibold">{content.stack}</span>
            </div>
            <div>
              <span className="text-muted-foreground uppercase tracking-wider">Patterns: </span>
              <span className="text-foreground">{content.patterns.join(", ")}</span>
            </div>
            <div className="pt-3 border-t-2 border-foreground">
              <span className="text-muted-foreground uppercase tracking-wider block mb-2">Commands: </span>
              <div className="space-y-1">
                {content.commands.map((cmd, i) => (
                  <div key={i} className="text-foreground font-mono bg-background px-3 py-2 border border-foreground/30">
                    {cmd}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (demo.type === "domain") {
    const content = demo.content as { regulations: string[]; rules: string[]; promptPackets: Array<{ name: string; customizable: boolean }> }
    return (
      <div className="border-2 border-foreground p-4 bg-muted/30">
          <div className="text-xs font-mono space-y-3">
            <div>
              <span className="text-muted-foreground uppercase tracking-wider">Regulations: </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {content.regulations.map((reg, i) => (
                  <span key={i} className="text-foreground font-semibold px-2 py-1 border border-foreground/30">
                    {reg}
                  </span>
                ))}
              </div>
            </div>
            <div className="pt-3 border-t-2 border-foreground">
              <span className="text-muted-foreground uppercase tracking-wider block mb-2">Rules: </span>
              <ul className="space-y-1">
                {content.rules.map((rule, i) => (
                  <li key={i} className="text-foreground flex items-start gap-2">
                    <Check size={10} className="text-[#7a96a4] mt-1 shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t-2 border-foreground">
              <span className="text-muted-foreground uppercase tracking-wider block mb-2">Prompt Packets: </span>
              <div className="space-y-2">
                {content.promptPackets.map((packet, i) => (
                  <div key={i} className="flex items-center justify-between text-foreground font-mono bg-background px-3 py-2 border border-foreground/30">
                    <span>{packet.name}</span>
                    <span className="text-[10px] text-muted-foreground">
                      {packet.customizable ? "Customizable" : "Fixed"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
  }

  if (demo.type === "metrics") {
    const content = demo.content as unknown as Record<string, string>
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {Object.entries(content).map(([key, value]) => (
          <div key={key} className="border-2 border-foreground p-4 bg-muted/30">
            <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
              {key.replace(/([A-Z])/g, " $1").trim()}
            </div>
            <div className="text-xl font-mono font-bold text-foreground">{value}</div>
          </div>
        ))}
      </div>
    )
  }

  if (demo.type === "forecast") {
    const content = demo.content as { prediction: string; confidence: number; timeframe: string; evidence: string[] }
    return (
      <div className="border-2 border-foreground p-4 bg-muted/30 space-y-4">
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Prediction</div>
            <div className="text-base font-mono font-bold text-foreground">{content.prediction}</div>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Confidence</div>
              <div className="text-xl font-mono font-bold text-foreground">
                {Math.round(content.confidence * 100)}%
              </div>
            </div>
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">Timeframe</div>
              <div className="text-sm font-mono text-foreground">{content.timeframe}</div>
            </div>
          </div>
          <div className="pt-3 border-t-2 border-foreground">
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Evidence</div>
            <ul className="space-y-2">
              {content.evidence.map((item, i) => (
                <li key={i} className="text-xs font-mono text-foreground flex items-center gap-2">
                  <Check size={12} className="text-[#7a96a4] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
  }

  if (demo.type === "pr") {
    const content = demo.content as { title: string; changes: Array<{ file: string; line: number; action: string }>; status: string }
    return (
      <div className="border-2 border-foreground p-4 bg-muted/30 space-y-4">
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">PR Title</div>
            <div className="text-base font-mono font-bold text-foreground">{content.title}</div>
          </div>
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Changes</div>
            <div className="space-y-2">
              {content.changes.map((change, i) => (
                <div key={i} className="text-xs font-mono border-l-2 border-foreground pl-3 py-2">
                  <div className="text-foreground font-semibold">{change.file}</div>
                  <div className="text-muted-foreground">Line {change.line}: {change.action}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t-2 border-foreground">
            <span className="text-xs font-mono px-3 py-1.5 border-2 border-[#7a96a4] text-[#7a96a4] uppercase tracking-wider">
              {content.status}
            </span>
          </div>
        </div>
    )
  }

  if (demo.type === "security") {
    const content = demo.content as { tenants: string[]; isolation: string; compliance: string[] }
    return (
      <div className="border-2 border-foreground p-4 bg-muted/30 space-y-4">
          <div>
            <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-3">Active Tenants</div>
            <div className="flex flex-wrap gap-2">
              {content.tenants.map((tenant, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1.5 border-2 border-foreground text-foreground">
                  {tenant}
                </span>
              ))}
            </div>
          </div>
          <div className="pt-3 border-t-2 border-foreground space-y-3">
            <div className="text-xs font-mono text-foreground font-semibold">{content.isolation}</div>
            <div>
              <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">Compliance</div>
              <div className="flex flex-wrap gap-2">
                {content.compliance.map((item, i) => (
                  <span key={i} className="text-xs font-mono px-3 py-1.5 border-2 border-[#7a96a4] text-[#7a96a4]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
    )
  }

  return null
}

export function FeatureGrid() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const handleCardClick = (index: number) => {
    if (expandedIndex === index) {
      // Clicking the same card collapses it
      setExpandedIndex(null)
    } else {
      // Clicking a card expands it
      setExpandedIndex(index)
    }
  }

  return (
    <section id="solutions" className="w-full px-4 sm:px-6 py-6 sm:py-8 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: SOLUTIONS"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">004</span>
      </motion.div>

      {/* Solutions Grid */}
      {expandedIndex === null ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-2 border-foreground mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: index * 0.1, duration: 0.6, ease }}
              onClick={() => handleCardClick(index)}
              className={`border-2 border-foreground bg-background text-foreground cursor-pointer ${
                index % 4 !== 3 ? "md:border-r-2" : ""
              } ${index < 4 ? "border-b-2 md:border-b-2" : ""}`}
            >
              <div className="px-5 py-6 flex flex-col gap-3 min-h-[200px]">
                <div className="flex items-center justify-between border-b-2 border-foreground pb-3 mb-2">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <Check size={12} strokeWidth={2.5} className="text-[#7a96a4]" />
                </div>
                <h3 className="text-lg lg:text-xl font-mono font-bold tracking-tight uppercase">
                  {solution.title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground leading-relaxed flex-grow">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={expandedIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="border-2 border-foreground bg-background mb-12"
          >
            {/* Expanded Feature */}
            <div className="px-4 py-5 sm:px-5 sm:py-6 lg:px-8 lg:py-8 flex flex-col gap-4 min-h-[400px] lg:min-h-[600px]">
              <div className="flex items-center justify-between border-b-2 border-foreground pb-3 mb-2">
                <span className="text-[10px] tracking-[0.2em] uppercase font-mono">
                  {String(expandedIndex + 1).padStart(2, "0")}
                </span>
                <button
                  onClick={() => setExpandedIndex(null)}
                  className="text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
              <h3 className="text-xl lg:text-2xl font-mono font-bold tracking-tight uppercase">
                {solutions[expandedIndex].title}
              </h3>
              <p className="text-sm font-mono text-muted-foreground leading-relaxed">
                {solutions[expandedIndex].description}
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease }}
                className="mt-4 flex-grow"
              >
                <div className="border-t-2 border-foreground pt-6">
                  <DemoContent demo={solutions[expandedIndex].demo} />
                </div>
              </motion.div>

              {/* Other Cards as Small Rectangles */}
              <div className="mt-8 pt-6 border-t-2 border-foreground">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-4">
                  Other Features
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2">
                  {solutions.map((solution, index) => {
                    if (index === expandedIndex) return null
                    return (
                      <motion.button
                        key={solution.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: (index > expandedIndex ? index - 1 : index) * 0.05, duration: 0.3 }}
                        onClick={() => handleCardClick(index)}
                        className="border-2 border-foreground bg-background text-foreground cursor-pointer hover:bg-muted/30 transition-colors text-left p-3 flex flex-col gap-2 min-h-[100px]"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] tracking-[0.2em] uppercase font-mono">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <Check size={10} strokeWidth={2.5} className="text-[#7a96a4]" />
                        </div>
                        <h4 className="text-xs font-mono font-bold tracking-tight uppercase leading-tight">
                          {solution.title}
                        </h4>
                      </motion.button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* MCP Commands Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="border-2 border-foreground bg-background mb-12"
      >
        <div className="px-5 py-3 border-b-2 border-foreground">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
            MCP_COMMANDS
          </span>
        </div>
        <div className="p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground">
              With Overcast MCP, you control your incidents
            </h3>
            <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-4xl">
              We fill in the gaps so teams can ship safely. Overcast commands are fast, quick, and to the point. A layer
              on top of your observability with MCP agents - tracing performance, limiting risky actions, and turning
              noisy signals into decisive fixes.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-t-2 border-foreground pt-6">
            {mcpCommands.map((command, i) => (
              <motion.div
                key={command}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.03, duration: 0.3, ease }}
                className="border-2 border-foreground px-3 py-2 text-xs font-mono text-foreground text-center bg-background"
              >
                {command}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* SDK Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="border-2 border-foreground bg-background"
      >
        <div className="px-5 py-3 border-b-2 border-foreground">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
            SDK_SETUP
          </span>
        </div>
        <div className="p-6 lg:p-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease }}
            className="mb-8"
          >
            <h2 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground mb-3">
              Set Up in Minutes
            </h2>
            <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-4xl">
              Get started with Overcast in minutes. Our drag and drop SDK makes setup effortless—no complex 
              configuration or infrastructure changes required.
            </p>
          </motion.div>

          {/* Two-column layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground">
            {/* Left: Steps */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease }}
              className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground p-6 lg:p-8"
            >
              <div className="space-y-6">
                {[
                  {
                    icon: "01",
                    title: "Drag & Drop Setup",
                    description: "Easy drag and drop SDK for instant setup. No complex configuration needed.",
                  },
                  {
                    icon: "02",
                    title: "Automatic Integration",
                    description: "SDK automatically connects to your codebase and log sources for seamless forecasting.",
                  },
                  {
                    icon: "03",
                    title: "Start Forecasting",
                    description: "Begin forecasting production issues immediately with real-time code suggestions.",
                  },
                ].map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 border-2 border-foreground flex items-center justify-center bg-background">
                        <span className="text-xs font-mono text-[#7a96a4]">{step.icon}</span>
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="text-lg font-mono font-bold tracking-tight uppercase text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
              className="p-6 lg:p-8 bg-muted/20"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-foreground pb-3">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
                    SDK_INTEGRATION
                  </span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
                    npm install @overcast/sdk
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="border-2 border-foreground bg-muted/20 p-4 sm:p-6">
                    <div className="border-2 border-[#2E3F4F] bg-[#111418] -m-4 sm:-m-6 overflow-x-auto">
                      {/* File tab */}
                      <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
                        <span className="text-[8px] sm:text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
                          sdk.js
                        </span>
                        <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
                          integration
                        </span>
                      </div>
                      {/* Code content */}
                      <div className="p-4 text-[8px] sm:text-[9px] leading-relaxed" style={{ lineHeight: "1.65" }}>
                        <pre className="font-mono overflow-x-auto whitespace-pre-wrap">
                          <code>
                            {`import { Overcast } from '@overcast/sdk'

// Drag & drop setup
const overcast = new Overcast({
  apiKey: process.env.OVERCAST_API_KEY,
  // Auto-detects codebase
  // Auto-connects to logs
})

// Start forecasting
overcast.forecast()

// Real-time suggestions
overcast.on('suggestion', (fix) => {
  // Auto-generates PR
  console.log(fix)
})`.split('\n').map((line, i) => {
                              const parts: React.ReactElement[] = []
                              let processed = line
                              
                              // Handle comments
                              const commentMatch = processed.match(/\/\/.*$/)
                              let comment = ''
                              if (commentMatch) {
                                comment = commentMatch[0]
                                processed = processed.substring(0, commentMatch.index || 0)
                              }
                              
                              // Extract strings, numbers, keywords, functions
                              const strings: Array<{ start: number; end: number; text: string }> = []
                              const stringRegex = /(['"])(?:(?=(\\?))\2.)*?\1/g
                              let strMatch
                              while ((strMatch = stringRegex.exec(processed)) !== null) {
                                strings.push({ start: strMatch.index, end: strMatch.index + strMatch[0].length, text: strMatch[0] })
                              }
                              
                              const numbers: Array<{ start: number; end: number; text: string }> = []
                              const numberRegex = /\b\d+\.?\d*\b/g
                              let numMatch
                              while ((numMatch = numberRegex.exec(processed)) !== null) {
                                numbers.push({ start: numMatch.index, end: numMatch.index + numMatch[0].length, text: numMatch[0] })
                              }
                              
                              const keywords = ['const', 'new', 'from', 'import']
                              const functions = ['Overcast', 'forecast', 'on', 'console', 'log']
                              
                              const allMatches: Array<{ start: number; end: number; type: string; text: string }> = []
                              strings.forEach(s => allMatches.push({ ...s, type: 'string' }))
                              numbers.forEach(n => allMatches.push({ ...n, type: 'number' }))
                              
                              keywords.forEach(kw => {
                                const regex = new RegExp(`\\b${kw}\\b`, 'g')
                                let m
                                while ((m = regex.exec(processed)) !== null) {
                                  allMatches.push({ start: m.index, end: m.index + m[0].length, type: 'keyword', text: m[0] })
                                }
                              })
                              
                              functions.forEach(fn => {
                                const regex = new RegExp(`\\b${fn}\\b`, 'g')
                                let m
                                while ((m = regex.exec(processed)) !== null) {
                                  allMatches.push({ start: m.index, end: m.index + m[0].length, type: 'function', text: m[0] })
                                }
                              })
                              
                              allMatches.sort((a, b) => a.start - b.start)
                              const filtered: typeof allMatches = []
                              allMatches.forEach(m => {
                                const overlaps = filtered.some(f => (m.start >= f.start && m.start < f.end) || (m.end > f.start && m.end <= f.end))
                                if (!overlaps) filtered.push(m)
                              })
                              
                              let lastIndex = 0
                              filtered.forEach(match => {
                                if (match.start > lastIndex) {
                                  const text = processed.substring(lastIndex, match.start)
                                  text.split('').forEach((char, idx) => {
                                    if (/[\(\)\[\]\{\},;\.=:>]/.test(char)) {
                                      parts.push(<span key={`${i}-${lastIndex + idx}-punc`} className="text-[#6B7C85]">{char}</span>)
                                    } else if (char.trim()) {
                                      parts.push(<span key={`${i}-${lastIndex + idx}-text`} className="text-[#b0bec5]">{char}</span>)
                                    } else {
                                      parts.push(<span key={`${i}-${lastIndex + idx}-space`}>{char}</span>)
                                    }
                                  })
                                }
                                
                                const colorMap: Record<string, string> = {
                                  keyword: '#8E9BA3',
                                  function: '#C8CDD0',
                                  string: '#a8bfc9',
                                  number: '#7a9bae',
                                }
                                parts.push(
                                  <span key={`${i}-${match.start}`} style={{ color: colorMap[match.type] || '#b0bec5' }}>
                                    {match.text}
                                  </span>
                                )
                                lastIndex = match.end
                              })
                              
                              if (lastIndex < processed.length) {
                                const text = processed.substring(lastIndex)
                                text.split('').forEach((char, idx) => {
                                  if (/[\(\)\[\]\{\},;\.=:>]/.test(char)) {
                                    parts.push(<span key={`${i}-${lastIndex + idx}-punc`} className="text-[#6B7C85]">{char}</span>)
                                  } else if (char.trim()) {
                                    parts.push(<span key={`${i}-${lastIndex + idx}-text`} className="text-[#b0bec5]">{char}</span>)
                                  } else {
                                    parts.push(<span key={`${i}-${lastIndex + idx}-space`}>{char}</span>)
                                  }
                                })
                              }
                              
                              if (comment) {
                                parts.push(<span key={`${i}-comment`} className="text-[#3a4a58] italic">{comment}</span>)
                              }
                              
                              return <div key={i}>{parts.length > 0 ? parts : <span className="text-[#b0bec5]">{line}</span>}</div>
                            })}
                          </code>
                        </pre>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4 border-t-2 border-foreground">
                    <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-2">
                      FEATURES
                    </div>
                    <ul className="space-y-1 text-xs font-mono text-foreground/80">
                      <li>• Auto-detects codebase structure</li>
                      <li>• Connects to existing log sources</li>
                      <li>• Zero configuration required</li>
                      <li>• Real-time forecasting enabled</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
