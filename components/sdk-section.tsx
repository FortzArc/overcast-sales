"use client"

import React from "react"
import { motion } from "framer-motion"
import { Download, Code, Zap } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

const sdkSteps = [
  {
    icon: Download,
    title: "Drag & Drop Setup",
    description: "Easy drag and drop SDK for instant setup. No complex configuration needed.",
  },
  {
    icon: Code,
    title: "Automatic Integration",
    description: "SDK automatically connects to your codebase and log sources for seamless forecasting.",
  },
  {
    icon: Zap,
    title: "Start Forecasting",
    description: "Begin forecasting production issues immediately with real-time code suggestions.",
  },
]

export function SdkSection() {
  return (
    <section className="w-full px-6 py-8 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: SDK_SETUP"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">007</span>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="mb-8"
      >
        <h2 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground mb-3">
          Easy Drag & Drop SDK
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
            {sdkSteps.map((step, index) => {
              const Icon = step.icon
              return (
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
                      <Icon size={20} className="text-[#7a96a4]" />
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
              )
            })}
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
              <div className="border-2 border-foreground bg-muted/20 p-6">
                <div className="border-2 border-[#2E3F4F] bg-[#111418] -m-6">
                  {/* File tab */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
                    <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
                      sdk.js
                    </span>
                    <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
                      integration
                    </span>
                  </div>
                  {/* Code content */}
                  <div className="p-4" style={{ fontSize: "9px", lineHeight: "1.65" }}>
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
    </section>
  )
}

