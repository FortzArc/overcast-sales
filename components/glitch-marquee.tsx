"use client"

import { motion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const CLIENTS = [
  "COSMED",
  "BEDROCK AI",
  "PLAYGENT AI",
  "POLICY CORTEX",
  "SMARTUP",
  "CLAM",
  "BLOCKHOUSE",
]

function LogoBlock({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-4 py-3 sm:px-8 sm:py-4 border-r-2 border-foreground shrink-0">
      <span className="text-xs sm:text-sm font-mono tracking-[0.15em] uppercase text-foreground whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

export function GlitchMarquee() {
  const marqueeContent = [...CLIENTS, ...CLIENTS, ...CLIENTS]

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-12">
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="flex items-center gap-4 mb-8"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">
          {"// CLIENTS"}
        </span>
        <div className="flex-1 border-t border-border" />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">002</span>
      </motion.div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease }}
        className="overflow-hidden border-2 border-foreground"
      >
        <div
          className="flex animate-marquee will-change-transform"
          style={{ width: "max-content" }}
        >
          {marqueeContent.map((name, i) => (
            <LogoBlock key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </motion.div>
    </section>
  )
}
