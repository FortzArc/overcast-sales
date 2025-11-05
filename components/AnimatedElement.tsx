"use client"

import { useEffect, useRef, ReactNode } from "react"

interface AnimatedElementProps {
  children: ReactNode
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "fade-in-left" | "fade-in-right" | "scale-in"
  delay?: number
  className?: string
  threshold?: number
}

export function AnimatedElement({
  children,
  animation = "fade-in-up",
  delay = 0,
  className = "",
  threshold = 0.1
}: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animated class to trigger the animation
            entry.target.classList.add("animated")
            entry.target.classList.add(`animate-${animation}`)
          }
        })
      },
      {
        threshold,
        rootMargin: "50px"
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [animation, threshold])

  const delayClass = delay > 0 ? `delay-${delay}` : ""

  return (
    <div
      ref={elementRef}
      className={`animate-on-scroll ${delayClass} ${className}`}
    >
      {children}
    </div>
  )
}

