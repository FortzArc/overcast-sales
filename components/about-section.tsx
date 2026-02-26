"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const ease = [0.22, 1, 0.36, 1] as const

interface Testimonial {
  company: string
  title: string
  executiveName: string
  executiveRole: string
  description: string
  stats: { label: string; value: string }[]
}

const testimonials: Testimonial[] = [
  {
    company: "Cosmed",
    title: "See how Overcast helped this Medical Manufacturing Company cut MTTR in half",
    executiveName: "Nathan Miller",
    executiveRole: "Product Manager",
    description:
      "Cosmed, a leading medical manufacturing company, faced significant challenges with distributed tracing across their microservices architecture. The engineering team had successfully resolved seven production issues, but an eighth issue remained undiagnosed for over a week despite extensive debugging efforts. Traditional monitoring tools failed to correlate logs effectively across their complex system architecture. After implementing Overcast, the platform analyzed the codebase and correlated logs from multiple systems, identifying the root cause—a subtle race condition that only manifested under specific load conditions—in less than 30 minutes. Overcast's forecasting capabilities have reduced Cosmed's mean time to resolution by 50%, enabling the engineering team to shift focus from firefighting production incidents to building new features and improving system reliability.",
    stats: [
      { label: "MTTR_REDUCTION", value: "50%" },
      { label: "ISSUES_RESOLVED", value: "8" },
      { label: "RESOLUTION_TIME", value: "30min" },
      { label: "UPTIME", value: "99.8%" },
    ],
  },
  {
    company: "Playgent AI",
    title: "This YC backed company used Overcast to manage downtime during their initial launch",
    executiveName: "Aniruddh Sriram",
    executiveRole: "CEO",
    description:
      "Playgent AI, a Y Combinator-backed startup, required exceptional uptime and reliability from day one of their launch. Prior to implementing Overcast, the development team frequently took the site offline to diagnose and fix issues in development, which significantly impacted their early user base and growth trajectory. Overcast's real-time production code suggestions and automated PR fixes transformed their operational approach, allowing the team to address potential issues proactively before they affected users. During the critical launch phase, Overcast proved instrumental in maintaining service availability. The platform enabled Playgent AI to achieve 99.9% uptime during their launch period, preventing over 12 hours of potential downtime and resolving 24 incidents before they could impact user experience. This reliability directly contributed to user trust and retention during their most vulnerable growth phase.",
    stats: [
      { label: "UPTIME", value: "99.9%" },
      { label: "DOWNTIME_PREVENTED", value: "12hrs" },
      { label: "INCIDENTS_RESOLVED", value: "24" },
      { label: "LAUNCH_SUCCESS", value: "100%" },
    ],
  },
  {
    company: "Bedrock AI",
    title: "Impliments Overcast for post prod. on their growing rental property management platform",
    executiveName: "Aravind Ganesan",
    executiveRole: "CEO",
    description:
      "Bedrock AI's rental property management platform experienced rapid growth as they ramped up their go-to-market strategy, with traffic doubling in a short period. Without comprehensive operational management software, the operations team struggled to identify and address potential issues before they became critical production incidents. Overcast's implementation transformed their production management approach. The platform's forecasting capabilities proved essential during the scaling phase, analyzing the codebase and correlating logs to identify 45 potential production issues before they could impact users. Automated PR fixes reduced Bedrock AI's mean time to resolution by 65%, enabling confident scaling without compromising reliability. Overcast has been critical in maintaining 100% scale success during their rapid growth phase, ensuring the platform remains stable and reliable as they continue onboarding new customers and expanding their market presence.",
    stats: [
      { label: "TRAFFIC_GROWTH", value: "2x" },
      { label: "ISSUES_FORECASTED", value: "45" },
      { label: "MTTR_REDUCTION", value: "65%" },
      { label: "SCALE_SUCCESS", value: "100%" },
    ],
  },
]

/* ── scramble text reveal ── */
function ScrambleText({ text, className }: { text: string; className?: string }) {
  const [display, setDisplay] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_./:"

  useEffect(() => {
    if (!inView) return
    let iteration = 0
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((char, i) => {
            if (char === " ") return " "
            if (i < iteration) return text[i]
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      iteration += 0.5
      if (iteration >= text.length) {
        setDisplay(text)
        clearInterval(interval)
      }
    }, 30)
    return () => clearInterval(interval)
  }, [inView, text])

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  )
}

/* ── blinking cursor ── */
function BlinkDot() {
  return <span className="inline-block h-2 w-2 bg-[#7a96a4] animate-blink" />
}

/* ── live uptime counter ── */
function UptimeCounter() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const base = 31536000 + Math.floor(Math.random() * 1000000)
    setSeconds(base)
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(interval)
  }, [])

  const format = (n: number) => {
    const d = Math.floor(n / 86400)
    const h = Math.floor((n % 86400) / 3600)
    const m = Math.floor((n % 3600) / 60)
    const s = n % 60
    return `${d}d ${String(h).padStart(2, "0")}h ${String(m).padStart(2, "0")}m ${String(s).padStart(2, "0")}s`
  }

  return (
    <span className="font-mono text-[#7a96a4]" style={{ fontVariantNumeric: "tabular-nums" }}>
      {format(seconds)}
    </span>
  )
}

function StatBlock({ label, value, index }: { label: string; value: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: 0.15 + index * 0.08, duration: 0.5, ease }}
      className="flex flex-col gap-1 border-2 border-foreground px-4 py-3"
    >
      <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
        {label}
      </span>
      <span className="text-xl lg:text-2xl font-mono font-bold tracking-tight">
        <ScrambleText text={value} />
      </span>
    </motion.div>
  )
}

/* ── main about section ── */
export function AboutSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = testimonials[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 60000) // 60 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

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
          {"// SECTION: ABOUT_OVERCAST"}
        </span>
        <div className="flex-1 border-t border-border" />
        <BlinkDot />
        <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
          005
        </span>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex flex-col lg:flex-row gap-0 border-2 border-foreground">
        {/* Left: Mountain Image with Stats Overlay */}
        <motion.div
          initial={{ opacity: 0, x: -30, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease }}
          className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-[600px] border-b-2 lg:border-b-0 lg:border-r-2 border-foreground overflow-hidden bg-gradient-to-br from-muted via-muted/80 to-muted/60"
        >
          <Image
            src="/hero-mountain.png"
            alt="Mountain landscape"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          
          {/* Stats Overlay */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex flex-col gap-3 items-center justify-center p-6"
            >
              {current.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                  className="border-2 border-foreground px-4 py-3 w-full max-w-xs"
                >
                  <span className="text-[10px] tracking-[0.2em] uppercase text-foreground font-mono block mb-1">
                    {stat.label}
                  </span>
                  <span className="text-2xl lg:text-3xl font-mono font-bold tracking-tight text-foreground">
                    <ScrambleText text={stat.value} />
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Right: Testimonial Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
          className="flex flex-col w-full lg:w-1/2"
        >
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b-2 border-foreground">
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
              TESTIMONIALS.md
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
              v3.1.0
            </span>
          </div>

          {/* Content body */}
          <div className="flex-1 flex flex-col justify-between px-5 py-6 lg:py-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease }}
                className="flex flex-col gap-6"
              >
                {/* Company Name */}
                <div>
                  <h2 className="text-2xl lg:text-3xl font-mono font-bold tracking-tight uppercase text-foreground">
                    {current.company}
                  </h2>
                </div>

                {/* Title */}
                <h3 className="text-base lg:text-lg font-mono font-normal leading-relaxed text-balance text-foreground">
                  {current.title}
                </h3>

                {/* Executive Information */}
                <div className="border-t-2 border-foreground pt-4">
                  <p className="text-foreground text-sm lg:text-base font-mono font-medium">{current.executiveName}</p>
                  <p className="text-muted-foreground text-xs lg:text-sm font-mono mt-0.5">{current.executiveRole}</p>
                </div>

                {/* Case Study Excerpt */}
                <div className="space-y-4 border-t-2 border-foreground pt-4">
                  <p className="text-xs lg:text-sm font-mono text-foreground leading-relaxed">
                    {current.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            <div className="flex items-center justify-center gap-4 mt-6 pt-6 border-t-2 border-foreground">
              <button
                onClick={prevSlide}
                className="p-2 border-2 border-foreground hover:bg-muted/30 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4 text-foreground" />
              </button>

              <div className="flex gap-1.5">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-foreground w-6"
                        : "bg-muted-foreground w-1.5 hover:bg-foreground/60"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="p-2 border-2 border-foreground hover:bg-muted/30 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4 text-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
