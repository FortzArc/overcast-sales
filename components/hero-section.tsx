"use client"

import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const ease = [0.22, 1, 0.36, 1] as const

export function HeroSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="w-full px-4 sm:px-6 py-6 sm:py-8 lg:px-12">
      {/* Image Container with Border */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease }}
        className="relative w-full border-2 border-foreground overflow-hidden"
      >
        {/* Image */}
        <div className="relative w-full h-[380px] sm:h-[450px] lg:h-[600px] bg-gradient-to-br from-muted via-muted/80 to-muted/60">
          {!imageError && (
            <Image
              src="/hero-mountain.png"
              alt="Mountain landscape"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1200px"
              priority
              onError={() => setImageError(true)}
            />
          )}

          {/* Main Header and Subtext Overlay - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease }}
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10"
          >
            <div className="w-full max-w-5xl space-y-4">
              <h1 style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)' }}>
                <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground font-mono tracking-tight uppercase block">
                  Agentic Reliability Intelligence
                </span>
              </h1>
              
              {/* Subtext - Centered under Header */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5, ease }}
                className="text-xs sm:text-sm lg:text-base font-mono text-foreground/80 tracking-wider max-w-3xl mx-auto"
              >
                Forecast production issues before they break. The only dev platform that closes the development cycle gap.
              </motion.p>
            </div>
          </motion.div>

          {/* CTA Button Overlay - Centered */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl px-6 z-10 flex justify-center">
            <motion.a
              href="https://platform.overcastsre.com/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6, ease }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group flex items-center gap-0 bg-foreground text-background text-xs sm:text-sm font-mono tracking-wider uppercase"
            >
              <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-[#7a96a4]">
                <motion.span
                  className="inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                >
                  <ArrowRight size={16} strokeWidth={2} className="text-background" />
                </motion.span>
              </span>
              <span className="px-4 py-2 sm:px-5 sm:py-2.5">
                Sign Up Today
              </span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
