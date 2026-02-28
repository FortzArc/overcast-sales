"use client"

import React from "react"
import { motion } from "framer-motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Code2, Cloud, TrendingUp, Brain, Bug } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

export function WhyOvercastSection() {
  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          {"// SECTION: WHY_OVERCAST"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">003</span>
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
          Why Overcast?
        </h2>
        <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-4xl">
          The first-of-its-kind dev platform that closes the development cycle gap. Overcast combines log curation 
          with codebase analysis to forecast production issues before they break—no trigger event needed.
        </p>
      </motion.div>

      {/* Tabbed Interface */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: 0.2, ease }}
        className="border-2 border-foreground bg-background"
      >
        <Tabs defaultValue="forecasting" className="w-full">
          <div className="border-b-2 border-foreground">
            <TabsList className="w-full h-auto bg-transparent p-0 border-0 rounded-none flex flex-col md:flex-row">
              <TabsTrigger
                value="forecasting"
                className="flex-1 border-b-2 md:border-b-0 md:border-r-2 border-foreground rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none px-4 py-3 text-xs font-mono tracking-wider uppercase justify-center"
              >
                <TrendingUp size={18} className="shrink-0 md:mr-2" />
                <span className="hidden md:inline text-left md:text-center truncate" title="Production Forecasting">Production Forecasting</span>
              </TabsTrigger>
              <TabsTrigger
                value="domain-intelligence"
                className="flex-1 border-b-2 md:border-b-0 md:border-r-2 border-foreground rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none px-4 py-3 text-xs font-mono tracking-wider uppercase justify-center"
              >
                <Brain size={18} className="shrink-0 md:mr-2" />
                <span className="hidden md:inline text-left md:text-center truncate" title="Domain Specific Intelligence">Domain Specific Intelligence</span>
              </TabsTrigger>
              <TabsTrigger
                value="openclaw-native"
                className="flex-1 rounded-none data-[state=active]:bg-foreground data-[state=active]:text-background data-[state=active]:shadow-none px-4 py-3 text-xs font-mono tracking-wider uppercase justify-center"
              >
                <Bug size={18} className="shrink-0 md:mr-2" />
                <span className="hidden md:inline text-left md:text-center truncate" title="OpenClaw Native">OpenClaw Native</span>
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Production Forecasting Tab - Combined with Code Analysis */}
          <TabsContent value="forecasting" className="m-0 p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-mono font-bold tracking-tight uppercase text-foreground">
                  Forecast what existing code will break production
                </h3>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  Overcast curates your logs itself (or through integrations) and reads your entire codebase to come up with 
                  a forecast of what existing code will break production using dev code and logs as evidence. By combining 
                  log curation with codebase analysis, we identify patterns and potential production failures before they occur.
                </p>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  No trigger event needed—real-time production code suggestions as new features are pushed. Overcast analyzes 
                  your codebase in depth, automatically generates PRs to fix forecasted issues, and provides the code changes 
                  needed to prevent production breaks before they happen.
                </p>
              </div>
              <div className="border-2 border-foreground bg-muted/20 p-6">
                <div className="border-2 border-[#2E3F4F] bg-[#111418] -m-6">
                  {/* File tab */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
                    <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
                      forecast.js
                    </span>
                    <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
                      example
                    </span>
                  </div>
                  
                  {/* CLI Flowchart + Code */}
                  <div className="p-4 text-[8px] sm:text-[9px] leading-relaxed font-mono" style={{ lineHeight: "1.65" }}>
                    {/* CLI Flowchart */}
                    <div className="mb-4 font-mono">
                      <div className="text-[#6B7C85] mb-2">$ overcast forecast</div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">├─ <span className="text-[#8E9BA3]">curate</span> <span className="text-[#b0bec5]">logs</span> <span className="text-[#6B7C85]">+</span> <span className="text-[#8E9BA3]">analyze</span> <span className="text-[#b0bec5]">codebase</span></div>
                      <div className="text-[#6B7C85]">│  <span className="text-[#6B7C85]">└─{'>'}</span> <span className="text-[#8E9BA3]">identify</span> <span className="text-[#b0bec5]">patterns</span></div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">├─ <span className="text-[#8E9BA3]">forecast</span> <span className="text-[#b0bec5]">failures</span></div>
                      <div className="text-[#6B7C85]">│  <span className="text-[#6B7C85]">└─{'>'}</span> <span className="text-[#8E9BA3]">generate</span> <span className="text-[#b0bec5]">PR</span> <span className="text-[#b0bec5]">fixes</span></div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">└─ <span className="text-[#8E9BA3]">prevent</span> <span className="text-[#b0bec5]">breaks</span></div>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-[#2E3F4F] my-3"></div>
                    
                    {/* Code Example */}
                    <div className="font-mono">
                        {`// Example: Combined analysis
const forecast = await overcast.forecast({
  logs: curatedLogs,
  codebase: fullCodebase,
  patterns: identifiedPatterns
});

// Returns: { risk: 0.85, fix: PR#1234 }
`.split('\n').map((line, i) => {
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
                          
                          const keywords = ['const', 'await', 'new', 'from', 'import']
                          const functions = ['forecast', 'overcast']
                          
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Domain Specific Intelligence Tab */}
          <TabsContent value="domain-intelligence" className="m-0 p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-mono font-bold tracking-tight uppercase text-foreground">
                  Agents designed for your specific regulations & rules
                </h3>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  Overcast's agents are designed specifically for your domain's regulations and rules. Each agent can be 
                  customized with Prompt Packets tailored to your industry requirements, compliance standards, and operational 
                  guidelines.
                </p>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  Whether you're in healthcare, finance, or any regulated industry, our Domain Specific Intelligence ensures 
                  that forecasts and recommendations align with your specific regulatory framework. Customize Prompt Packets to 
                  fit your needs, ensuring agents understand your unique constraints and requirements.
                </p>
              </div>
              <div className="border-2 border-foreground bg-muted/20 p-6 min-h-[300px]">
                <div className="space-y-3">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono border-b-2 border-foreground pb-2">
                    PROMPT_PACKET_CONFIG
                  </div>
                  <div className="space-y-2 text-xs font-mono">
                    <div className="text-foreground/80">
                      <div className="text-muted-foreground text-[10px] mb-1">REGULATIONS:</div>
                      <div>HIPAA, GDPR, SOC 2</div>
                    </div>
                    <div className="text-foreground/80">
                      <div className="text-muted-foreground text-[10px] mb-1">RULES:</div>
                      <div>Data retention, Access control, Audit trails</div>
                    </div>
                    <div className="text-foreground/80 pt-2 border-t border-foreground/20">
                      <div className="text-muted-foreground text-[10px] mb-1">CUSTOM_PROMPTS:</div>
                      <div className="text-[10px]">Fully customizable for your domain</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* OpenClaw Native Tab */}
          <TabsContent value="openclaw-native" className="m-0 p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="space-y-4">
                <h3 className="text-xl lg:text-2xl font-mono font-bold tracking-tight uppercase text-foreground">
                  OpenClaw Native Architecture
                </h3>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  To be OpenClaw-native means Overcast isn't just calling an agent framework—it's architected around an agent 
                  runtime as its core execution layer. Instead of static pipelines that analyze logs or PRs after the fact, 
                  Overcast runs structured, stateful agents that continuously reason over your codebase, deploy history, logs, 
                  and incident memory inside a unified execution graph.
                </p>
                <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed">
                  Every forecast, RCA, or production recommendation is generated by agents that can plan, call infra tools 
                  (GitHub, Prometheus, Kubernetes), simulate impact chains, and retain context over time. In other words, 
                  OpenClaw-native means Overcast behaves less like an observability dashboard and more like an autonomous 
                  production intelligence system that thinks across time, changes, and environments—not just reacts to them.
                </p>
              </div>
              <div className="border-2 border-foreground bg-muted/20 p-6">
                <div className="border-2 border-[#2E3F4F] bg-[#111418] -m-6">
                  {/* File tab */}
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-[#2E3F4F] bg-[#0a0c0e]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#6B7C85]" />
                    <span className="text-[9px] font-mono font-semibold text-[#C8CDD0] tracking-wider">
                      openclaw.js
                    </span>
                    <span className="ml-auto text-[8px] text-[#6B7C85] tracking-wider uppercase border border-[#2E3F4F] px-1.5 py-0.5">
                      architecture
                    </span>
                  </div>
                  
                  {/* CLI Flowchart */}
                  <div className="p-4 text-[8px] sm:text-[9px] leading-relaxed font-mono" style={{ lineHeight: "1.65" }}>
                    <div className="mb-4 font-mono">
                      <div className="text-[#6B7C85] mb-2">$ overcast runtime</div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">├─ <span className="text-[#8E9BA3]">unified</span> <span className="text-[#b0bec5]">execution</span> <span className="text-[#b0bec5]">graph</span></div>
                      <div className="text-[#6B7C85]">│  <span className="text-[#6B7C85]">└─{'>'}</span> <span className="text-[#8E9BA3]">stateful</span> <span className="text-[#b0bec5]">agents</span> <span className="text-[#6B7C85]">(</span><span className="text-[#b0bec5]">plan</span><span className="text-[#6B7C85]">,</span> <span className="text-[#b0bec5]">reason</span><span className="text-[#6B7C85]">,</span> <span className="text-[#b0bec5]">retain</span><span className="text-[#6B7C85]">)</span></div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">├─ <span className="text-[#8E9BA3]">infra</span> <span className="text-[#b0bec5]">tools</span> <span className="text-[#6B7C85]">(</span><span className="text-[#b0bec5]">GitHub</span><span className="text-[#6B7C85]">,</span> <span className="text-[#b0bec5]">K8s</span><span className="text-[#6B7C85]">,</span> <span className="text-[#b0bec5]">Prometheus</span><span className="text-[#6B7C85]">)</span></div>
                      <div className="text-[#6B7C85]">│  <span className="text-[#6B7C85]">└─{'>'}</span> <span className="text-[#8E9BA3]">autonomous</span> <span className="text-[#b0bec5]">intelligence</span></div>
                      <div className="text-[#6B7C85]">│</div>
                      <div className="text-[#6B7C85]">└─ <span className="text-[#8E9BA3]">dynamic</span> <span className="text-[#b0bec5]">agent</span> <span className="text-[#b0bec5]">runtime</span></div>
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-[#2E3F4F] my-3"></div>
                    
                    {/* Key Differences */}
                    <div className="font-mono">
                      <div className="text-[#3a4a58] italic mb-2">// KEY DIFFERENCE:</div>
                      <div className="text-[#b0bec5]">Not static pipelines <span className="text-[#6B7C85]">→</span> Dynamic agent runtime</div>
                      <div className="text-[#b0bec5]">Not reactive <span className="text-[#6B7C85]">→</span> Proactive reasoning</div>
                      <div className="text-[#b0bec5]">Not dashboard <span className="text-[#6B7C85]">→</span> Autonomous system</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

        </Tabs>
      </motion.div>
    </section>
  )
}

