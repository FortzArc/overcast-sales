"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface MCPCommandsProps {
  commands: string[]
}

function CommandItem({ command, index, scrollYProgress }: { command: string; index: number; scrollYProgress: any }) {
  const progress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  const y = useTransform(progress, [0, 1], [100 + index * 5, 0])

  const opacity = useTransform(progress, [0, 0.3, 1], [0, 0.5, 1])

  return (
    <motion.div
      style={{ y, opacity }}
      className="bg-white/5 border border-white/10 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-mono text-center hover:bg-white/10 transition-colors"
    >
      {command}
    </motion.div>
  )
}

export function MCPCommands({ commands }: MCPCommandsProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 pt-4 sm:pt-6 bg-black rounded-lg"
    >
      {commands.map((command, index) => (
        <CommandItem key={command} command={command} index={index} scrollYProgress={scrollYProgress} />
      ))}
    </div>
  )
}
