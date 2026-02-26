"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const RL_NODES = [
  { id: "observation", label: "OBSERVATION", description: "Collects production data and system state" },
  { id: "preprocess", label: "PREPROCESS", description: "Normalizes and prepares data for analysis" },
  { id: "rl_agent", label: "RL_AGENT", description: "Reinforcement learning algorithm processes patterns" },
  { id: "validate", label: "VALIDATE", description: "Validates predictions against historical data" },
  { id: "action", label: "ACTION", description: "Generates forecasts and recommendations" },
]

const NODE_DURATION = 2500 // 2.5 seconds per node

export function RlFlowAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % RL_NODES.length)
    }, NODE_DURATION)

    return () => clearInterval(interval)
  }, [])

  const currentNode = RL_NODES[currentIndex]

  return (
    <div className="relative border-2 border-foreground bg-background" style={{ height: "320px", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div className="relative flex-1 flex items-center justify-center p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentNode.id}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative flex flex-col items-center justify-center"
          >
            {/* Pointer/Arrow pointing to the box */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2"
            >
              <svg width="40" height="40" viewBox="0 0 40 40" className="text-foreground">
                <path
                  d="M20 0 L20 30 L15 25 M20 30 L25 25"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Main Node Box */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="border-4 border-foreground bg-background px-12 py-8 relative"
              style={{ minWidth: "280px" }}
            >
              {/* Glow effect */}
              <motion.div
                className="absolute inset-0 border-4 border-foreground opacity-50"
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Node Label */}
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground text-center mb-4"
              >
                {currentNode.label}
              </motion.h3>

              {/* Node Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-sm lg:text-base font-mono text-muted-foreground text-center leading-relaxed"
              >
                {currentNode.description}
              </motion.p>

              {/* Corner indicators */}
              <div className="absolute top-2 left-2 w-3 h-3 border-2 border-foreground" />
              <div className="absolute top-2 right-2 w-3 h-3 border-2 border-foreground" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-2 border-foreground" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-2 border-foreground" />
            </motion.div>

            {/* Progress indicator */}
            <div className="mt-8 flex gap-2">
              {RL_NODES.map((node, index) => (
                <motion.div
                  key={node.id}
                  className={`h-2 rounded-full ${
                    index === currentIndex ? "bg-foreground" : "bg-muted-foreground"
                  }`}
                  initial={{ width: index === currentIndex ? "24px" : "8px" }}
                  animate={{
                    width: index === currentIndex ? "24px" : "8px",
                    opacity: index === currentIndex ? 1 : 0.4,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ width: index === currentIndex ? "24px" : "8px" }}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

