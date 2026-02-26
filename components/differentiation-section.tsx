"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import Image from "next/image"
import { DitheredDiagram } from "@/components/dithered-diagram"
import { TopologyGraph } from "@/components/topology-graph"
import { RlFlowAnimation } from "@/components/rl-flow-animation"
import { RlAlgorithmsChart } from "@/components/rl-algorithms-chart"
import { CodeHeatmap } from "@/components/code-heatmap"
import { DependencyChunkingDiff } from "@/components/dependency-chunking-diff"

const ease = [0.22, 1, 0.36, 1] as const

const competitors = [
  {
    category: "Post-Production Monitoring",
    names: ["Datadog", "Sentry"],
    whatTheyDo: "Curate logs, error handling after trigger events",
    limitation: "Reactive - only helps after issues occur",
    features: [
      { text: "Log curation", included: true },
      { text: "Error handling", included: true },
      { text: "After trigger events", included: true },
      { text: "Forecast issues", included: false },
      { text: "Codebase analysis", included: false },
      { text: "Proactive prevention", included: false },
    ],
  },
  {
    category: "AI Code Review",
    names: ["Coderabit", "Greptile"],
    whatTheyDo: "AI code review and PR suggestions",
    limitation: "Only analyzes code, not production behavior",
    features: [
      { text: "Code review", included: true },
      { text: "PR suggestions", included: true },
      { text: "Code analysis", included: true },
      { text: "Log integration", included: false },
      { text: "Production forecasting", included: false },
      { text: "Real-time suggestions", included: false },
    ],
  },
  {
    category: "Overcast - The Gap Closer",
    names: ["Overcast"],
    whatTheyDo: "Combines both approaches",
    limitation: "Forecasts production issues before they break",
    value: "Closes the development cycle gap",
    features: [
      { text: "Log curation", included: true },
      { text: "Codebase analysis", included: true },
      { text: "Production forecasting", included: true },
      { text: "Real-time suggestions", included: true },
      { text: "No trigger event needed", included: true },
      { text: "Automated PR fixes", included: true },
    ],
    highlighted: true,
  },
]

export function DifferentiationSection() {
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
          {"// SECTION: THE_GAP"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">005</span>
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
          How Overcast Differs
        </h2>
        <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-4xl">
          While others focus on reactive monitoring or code review alone, Overcast combines both approaches to 
          forecast production issues before they break—closing the development cycle gap.
        </p>
      </motion.div>

      {/* Three-column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-2 border-foreground">
        {competitors.map((competitor, index) => (
          <motion.div
            key={competitor.category}
            initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ delay: index * 0.1, duration: 0.6, ease }}
            className={`border-2 border-foreground relative overflow-hidden ${
              competitor.highlighted
                ? "bg-gradient-to-br from-muted via-muted/80 to-muted/60"
                : "bg-background text-foreground"
            } ${index < 2 ? "md:border-r-2" : ""}`}
          >
            {competitor.highlighted && (
              <div className="absolute inset-0 z-0">
                <Image
                  src="/hero-mountain.png"
                  alt="Mountain landscape"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className={`relative z-10 px-5 py-6 flex flex-col gap-4 min-h-[400px] ${
              competitor.highlighted ? "text-white" : ""
            }`}>
              {/* Header */}
              <div className={`space-y-2 border-b-2 pb-4 ${
                competitor.highlighted ? "border-white/20" : "border-foreground/20"
              }`}>
                <div className={`text-[10px] tracking-[0.2em] uppercase font-mono ${
                  competitor.highlighted ? "text-white/70" : "opacity-60"
                }`}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg lg:text-xl font-mono font-bold tracking-tight uppercase">
                  {competitor.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {competitor.names.map((name) => (
                    <span
                      key={name}
                      className={`text-xs font-mono px-2 py-1 border-2 ${
                        competitor.highlighted
                          ? "border-white/40 text-white bg-white/10"
                          : "border-foreground/30 text-foreground/90"
                      }`}
                    >
                      {name}
                    </span>
                  ))}
                </div>
              </div>

              {/* What they do */}
              <div className="space-y-2 flex-grow">
                <div className={`text-[10px] tracking-[0.2em] uppercase font-mono ${
                  competitor.highlighted ? "text-white/70" : "opacity-60"
                }`}>
                  WHAT_THEY_DO
                </div>
                <p
                  className={`text-xs font-mono leading-relaxed ${
                    competitor.highlighted ? "text-white" : "text-muted-foreground"
                  }`}
                >
                  {competitor.whatTheyDo}
                </p>

                {/* Limitation */}
                <div className="pt-2">
                  <div className={`text-[10px] tracking-[0.2em] uppercase font-mono ${
                    competitor.highlighted ? "text-white/70" : "opacity-60"
                  }`}>
                    LIMITATION
                  </div>
                  <p
                    className={`text-xs font-mono leading-relaxed ${
                      competitor.highlighted ? "text-white/90" : "text-muted-foreground/70"
                    }`}
                  >
                    {competitor.limitation}
                  </p>
                </div>

                {/* Value prop for Overcast */}
                {competitor.value && (
                  <div className="pt-2">
                    <div className={`text-[10px] tracking-[0.2em] uppercase font-mono ${
                      competitor.highlighted ? "text-white/70" : "opacity-60"
                    }`}>
                      VALUE
                    </div>
                    <p className="text-xs font-mono leading-relaxed text-white">
                      {competitor.value}
                    </p>
                  </div>
                )}

                {/* Features */}
                <div className="pt-4 space-y-2">
                  <div className={`text-[10px] tracking-[0.2em] uppercase font-mono ${
                    competitor.highlighted ? "text-white/70" : "opacity-60"
                  }`}>
                    CAPABILITIES
                  </div>
                  {competitor.features.map((feature, fi) => (
                    <div key={fi} className="flex items-start gap-2">
                      {feature.included ? (
                        <Check
                          size={12}
                          strokeWidth={2.5}
                          className={`mt-0.5 shrink-0 ${
                            competitor.highlighted ? "text-white" : "text-[#7a96a4]"
                          }`}
                        />
                      ) : (
                        <X
                          size={12}
                          strokeWidth={2.5}
                          className={`mt-0.5 shrink-0 ${
                            competitor.highlighted ? "text-white/30" : "text-muted-foreground/40"
                          }`}
                        />
                      )}
                      <span
                        className={`text-xs font-mono leading-relaxed ${
                          feature.included
                            ? competitor.highlighted
                              ? "text-white"
                              : "text-foreground"
                            : competitor.highlighted
                            ? "text-white/40 line-through"
                            : "text-muted-foreground/40 line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Under the Hood Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease }}
        className="mt-12 border-2 border-foreground bg-background"
      >
        <div className="px-5 py-3 border-b-2 border-foreground">
          <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
            UNDER_THE_HOOD
          </span>
        </div>
        <div className="p-6 lg:p-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground">
                Under The Agentic Hood
              </h2>
              <p className="text-xs lg:text-sm font-mono text-muted-foreground leading-relaxed max-w-4xl">
                How our agents are RL-Equipped: advanced RL algorithms that forecast and advise, heatmapping areas of code 
                that are problematic, chain-of-dependency chunking while you push from dev to prod.
              </p>
            </div>

            {/* Horizontal boxes for RL features */}
            <div className="space-y-6 border-t-2 border-foreground pt-6">
              {/* RL Algorithms */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5, ease }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground"
              >
                <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground">
                  <RlAlgorithmsChart />
                </div>
                <div className="p-6 lg:p-8 bg-muted/20">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-3">
                    01 // RL_ALGORITHMS
                  </div>
                  <h3 className="text-lg font-mono font-bold tracking-tight uppercase text-foreground mb-3">
                    Advanced RL Algorithms
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-3">
                    Our agents use reinforcement learning algorithms that continuously learn from production patterns, 
                    forecasting issues and providing actionable advice before problems occur.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    These RL algorithms are sourced from the same battle-tested systems used at quantitative trading firms 
                    for high-frequency trading, where millisecond-level decision-making and pattern recognition are critical. 
                    This pedigree ensures our forecasting and advisory capabilities operate at the highest level of precision, 
                    adapting to your production environment's unique patterns with the same rigor applied to financial markets.
                  </p>
                </div>
              </motion.div>

              {/* Code Heatmap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5, ease }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground"
              >
                <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground">
                  <CodeHeatmap />
                </div>
                <div className="p-6 lg:p-8 bg-muted/20">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-3">
                    02 // CODE_HEATMAP
                  </div>
                  <h3 className="text-lg font-mono font-bold tracking-tight uppercase text-foreground mb-3">
                    Problematic Code Heatmapping
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-3">
                    Intelligent heatmapping identifies areas of code that are most likely to cause production issues, 
                    allowing teams to focus on high-risk areas before deployment.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    By analyzing historical failure patterns, code complexity metrics, and dependency relationships, the 
                    heatmap provides a visual risk assessment that prioritizes critical code paths. This enables teams to 
                    allocate review resources effectively, catch potential issues early, and deploy with greater confidence 
                    knowing that high-risk areas have been thoroughly examined and validated.
                  </p>
                </div>
              </motion.div>

              {/* Dependency Chunking */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5, ease }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-2 border-foreground"
              >
                <div className="border-b-2 lg:border-b-0 lg:border-r-2 border-foreground">
                  <DependencyChunkingDiff />
                </div>
                <div className="p-6 lg:p-8 bg-muted/20">
                  <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-3">
                    03 // DEPENDENCY_CHUNKING
                  </div>
                  <h3 className="text-lg font-mono font-bold tracking-tight uppercase text-foreground mb-3">
                    Chain-of-Dependency Chunking
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed mb-3">
                    As you push from dev to prod, our agents perform chain-of-dependency chunking, analyzing how changes 
                    propagate through your system and identifying potential failure points.
                  </p>
                  <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                    This allows for rapid code deployment with confidence, as the system maintains full observability 
                    across dependency chains even as state changes propagate through your infrastructure. By understanding 
                    the complete dependency graph before deployment, teams can push code fast while maintaining visibility 
                    into how each change impacts downstream services and state transitions.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

