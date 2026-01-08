"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Flag, Zap, Brain, Cloud, Bell, Shield } from "lucide-react"
import { DistributedTracingCard } from "./distributed-tracing-card"
import { GitHubIngestionsCard } from "./github-ingestions-card"
import { DomainSpecificAICard } from "./domain-specific-ai-card"
import { LightningFastAnalysisCard } from "./lightning-fast-analysis-card"
import { RealRCACard } from "./real-rca-card"
import { TemporalPatternCard } from "./temporal-pattern-card"

interface CardStackProps {
  items: Array<{
    title: string
    description: string
  }>
}

export function CardStack({ items }: CardStackProps) {
  const icons = [Flag, Zap, Brain, Cloud, Bell, Shield]

  return (
    <div className="relative w-full pb-0">
      {items.map((card, index) => (
        <Card key={card.title} card={card} index={index} totalCards={items.length} Icon={icons[index % icons.length]} />
      ))}
    </div>
  )
}

interface CardProps {
  card: {
    title: string
    description: string
  }
  index: number
  totalCards: number
  Icon: any
}

function Card({ card, index, totalCards, Icon }: CardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.95])
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.8])

  const stickyTop = index * 20

  const isDistributedTracing = index === 0
  const isGitHubIngestions = index === 1
  const isDomainSpecificAI = index === 2
  const isLightningFastAnalysis = index === 3
  const isRealRCA = index === 4
  const isTemporalPattern = index === 5

  return (
    <motion.div
      ref={cardRef}
      style={{
        scale,
        y,
        opacity,
        position: "sticky",
        top: `${Math.max(10, stickyTop)}px`,
        zIndex: index + 1,
      }}
      className={`h-[450px] sm:h-[550px] lg:h-[600px] w-full mx-auto overflow-hidden rounded-2xl px-4 sm:px-6 lg:px-0 ${
        index === totalCards - 1 ? "mb-0" : "mb-[15vh] sm:mb-[20vh]"
      }`}
    >
      <motion.div className="relative flex h-full flex-col overflow-hidden rounded-2xl">
        {isDistributedTracing ? (
          <div className="h-full flex items-center justify-center">
            <DistributedTracingCard />
          </div>
        ) : isGitHubIngestions ? (
          <div className="h-full flex items-center justify-center">
            <GitHubIngestionsCard />
          </div>
        ) : isDomainSpecificAI ? (
          <div className="h-full flex items-center justify-center">
            <DomainSpecificAICard />
          </div>
        ) : isLightningFastAnalysis ? (
          <div className="h-full flex items-center justify-center">
            <LightningFastAnalysisCard />
          </div>
        ) : isRealRCA ? (
          <div className="h-full flex items-center justify-center">
            <RealRCACard />
          </div>
        ) : isTemporalPattern ? (
          <div className="h-full flex items-center justify-center">
            <TemporalPatternCard />
          </div>
        ) : null}
      </motion.div>
    </motion.div>
  )
}
