"use client"

import { motion } from "framer-motion"

interface DitheredDiagramProps {
  title?: string
  variant?: "default" | "heatmap" | "dependency" | "forecast" | "code" | "timeline" | "git" | "metrics" | "pr" | "security" | "domain"
  className?: string
}

export function DitheredDiagram({ title, variant = "default", className = "" }: DitheredDiagramProps) {
  // Generate dithered pattern using CSS
  const getPatternStyle = () => {
    switch (variant) {
      case "heatmap":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            radial-gradient(circle at 30% 30%, rgba(0,0,0,0.3) 0%, transparent 50%),
            radial-gradient(circle at 70% 70%, rgba(0,0,0,0.2) 0%, transparent 50%)
          `,
        }
      case "dependency":
        return {
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            linear-gradient(135deg, rgba(0,0,0,0.2) 0%, transparent 50%, rgba(0,0,0,0.2) 100%)
          `,
        }
      case "forecast":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.15) 2px, rgba(0,0,0,0.15) 4px),
            radial-gradient(ellipse at center, rgba(0,0,0,0.25) 0%, transparent 70%)
          `,
        }
      case "code":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px),
            repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(0,0,0,0.1) 1px, rgba(0,0,0,0.1) 2px),
            linear-gradient(90deg, rgba(0,0,0,0.2) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)
          `,
        }
      case "timeline":
        return {
          backgroundImage: `
            repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(0,0,0,0.1) 4px, rgba(0,0,0,0.1) 8px),
            linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 20%, transparent 80%, rgba(0,0,0,0.2) 100%)
          `,
        }
      case "git":
        return {
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)
          `,
        }
      case "metrics":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            radial-gradient(circle at 50% 50%, rgba(0,0,0,0.15) 0%, transparent 60%)
          `,
        }
      case "pr":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px),
            linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.2) 100%)
          `,
        }
      case "security":
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            radial-gradient(circle at 25% 25%, rgba(0,0,0,0.2) 0%, transparent 40%),
            radial-gradient(circle at 75% 75%, rgba(0,0,0,0.2) 0%, transparent 40%)
          `,
        }
      case "domain":
        return {
          backgroundImage: `
            repeating-linear-gradient(30deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            repeating-linear-gradient(-30deg, transparent, transparent 3px, rgba(0,0,0,0.1) 3px, rgba(0,0,0,0.1) 6px),
            radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 65%)
          `,
        }
      default:
        return {
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px),
            radial-gradient(ellipse at center, rgba(0,0,0,0.2) 0%, transparent 60%)
          `,
        }
    }
  }

  // Get animation configuration based on variant
  const getAnimationConfig = () => {
    switch (variant) {
      case "heatmap":
        return {
          scanningDirection: "horizontal" as const,
          scanningSpeed: 3,
          pulsingSpeed: 2.5,
          rotationSpeed: 0,
        }
      case "dependency":
        return {
          scanningDirection: "diagonal" as const,
          scanningSpeed: 4,
          pulsingSpeed: 2,
          rotationSpeed: 20,
        }
      case "forecast":
        return {
          scanningDirection: "radial" as const,
          scanningSpeed: 3.5,
          pulsingSpeed: 2,
          rotationSpeed: 0,
        }
      case "code":
        return {
          scanningDirection: "vertical" as const,
          scanningSpeed: 2.5,
          pulsingSpeed: 3,
          rotationSpeed: 0,
        }
      case "timeline":
        return {
          scanningDirection: "horizontal" as const,
          scanningSpeed: 3,
          pulsingSpeed: 2.5,
          rotationSpeed: 0,
        }
      case "git":
        return {
          scanningDirection: "diagonal" as const,
          scanningSpeed: 4,
          pulsingSpeed: 2.5,
          rotationSpeed: 15,
        }
      case "metrics":
        return {
          scanningDirection: "radial" as const,
          scanningSpeed: 3,
          pulsingSpeed: 2,
          rotationSpeed: 0,
        }
      case "pr":
        return {
          scanningDirection: "vertical" as const,
          scanningSpeed: 3,
          pulsingSpeed: 2.5,
          rotationSpeed: 0,
        }
      case "security":
        return {
          scanningDirection: "radial" as const,
          scanningSpeed: 3.5,
          pulsingSpeed: 2,
          rotationSpeed: 0,
        }
      case "domain":
        return {
          scanningDirection: "diagonal" as const,
          scanningSpeed: 4,
          pulsingSpeed: 2.5,
          rotationSpeed: 12,
        }
      default:
        return {
          scanningDirection: "horizontal" as const,
          scanningSpeed: 3,
          pulsingSpeed: 2.5,
          rotationSpeed: 0,
        }
    }
  }

  const animConfig = getAnimationConfig()

  // Scanning line component
  const ScanningLine = ({ direction }: { direction: "horizontal" | "vertical" | "diagonal" | "radial" }) => {
    if (direction === "horizontal") {
      return (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="absolute w-full h-[1px] bg-foreground/20"
            style={{ willChange: "transform" }}
            animate={{
              y: [0, 192, 0],
            }}
            transition={{
              duration: animConfig.scanningSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-full h-[1px] bg-foreground/15"
            style={{ willChange: "transform" }}
            animate={{
              y: [96, 288, 96],
            }}
            transition={{
              duration: animConfig.scanningSpeed * 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )
    }
    if (direction === "vertical") {
      return (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="absolute w-[1px] h-full bg-foreground/20"
            style={{ willChange: "transform" }}
            animate={{
              x: [0, 256, 0],
            }}
            transition={{
              duration: animConfig.scanningSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-[1px] h-full bg-foreground/15"
            style={{ willChange: "transform" }}
            animate={{
              x: [128, 384, 128],
            }}
            transition={{
              duration: animConfig.scanningSpeed * 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )
    }
    if (direction === "diagonal") {
      return (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          style={{ willChange: "transform" }}
        >
          <motion.div
            className="absolute w-[200%] h-[1px] bg-foreground/20 origin-left"
            style={{
              willChange: "transform",
              transform: "rotate(45deg)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: animConfig.scanningSpeed,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute w-[200%] h-[1px] bg-foreground/15 origin-left"
            style={{
              willChange: "transform",
              transform: "rotate(-45deg)",
            }}
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: animConfig.scanningSpeed * 1.1,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )
    }
    // radial
    return (
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <motion.div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle, transparent 0%, transparent 30%, rgba(0,0,0,0.1) 50%, transparent 70%)",
            willChange: "transform",
          }}
          animate={{
            scale: [0.5, 1.5, 0.5],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: animConfig.scanningSpeed,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    )
  }

  return (
    <div className={`relative border-2 border-foreground bg-background overflow-hidden ${className}`} style={{ height: "320px", display: "flex", flexDirection: "column" }}>
      {/* Dithered pattern overlay */}
      <motion.div
        className="absolute inset-0 opacity-60"
        style={{
          ...getPatternStyle(),
          backgroundBlendMode: "multiply",
          imageRendering: "pixelated",
          willChange: "transform",
        }}
        animate={
          animConfig.rotationSpeed > 0
            ? {
                rotate: [0, 360],
              }
            : {}
        }
        transition={
          animConfig.rotationSpeed > 0
            ? {
                duration: animConfig.rotationSpeed,
                repeat: Infinity,
                ease: "linear",
              }
            : {}
        }
      />

      {/* Scanning lines */}
      <ScanningLine direction={animConfig.scanningDirection} />
      
      {/* Content */}
      <div className="relative z-10 p-4 flex-1 flex flex-col">
        {title && (
          <div className="mb-2">
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-mono mb-1">
              NEURAL_SCAN.DITHER
            </div>
            <div className="text-xs font-mono text-foreground/80">{title}</div>
          </div>
        )}
        
        {/* Abstract shape - central organic form with pulsing */}
        <div className="relative w-full flex-1 flex items-center justify-center" style={{ minHeight: "240px" }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 40%, transparent 70%),
                radial-gradient(ellipse 40% 50% at 30% 30%, rgba(0,0,0,0.3) 0%, transparent 50%),
                radial-gradient(ellipse 40% 50% at 70% 70%, rgba(0,0,0,0.3) 0%, transparent 50%)
              `,
              filter: "contrast(1.2) brightness(0.9)",
              willChange: "transform, opacity",
            }}
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: animConfig.pulsingSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Variant-specific pulsing hotspots */}
          {variant === "heatmap" && (
            <>
              <motion.div
                className="absolute w-16 h-16 rounded-full border-2 border-foreground/40"
                style={{
                  top: "20%",
                  left: "25%",
                  willChange: "transform, opacity",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.7, 0.3],
                }}
                transition={{
                  duration: animConfig.pulsingSpeed * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-12 h-12 rounded-full border-2 border-foreground/40"
                style={{
                  bottom: "25%",
                  right: "30%",
                  willChange: "transform, opacity",
                }}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: animConfig.pulsingSpeed * 1.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </>
          )}

          {variant === "security" && (
            <>
              <motion.div
                className="absolute w-10 h-10 rounded-full border-2 border-foreground/40"
                style={{
                  top: "20%",
                  left: "20%",
                  willChange: "transform, opacity",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: animConfig.pulsingSpeed,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute w-10 h-10 rounded-full border-2 border-foreground/40"
                style={{
                  bottom: "20%",
                  right: "20%",
                  willChange: "transform, opacity",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: animConfig.pulsingSpeed,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </>
          )}
          
          {/* Corner circles with pulsing animation */}
          <motion.div
            className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-foreground/30 bg-foreground/10"
            style={{ willChange: "transform, opacity" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: animConfig.pulsingSpeed * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute top-2 right-2 w-8 h-8 rounded-full border-2 border-foreground/30 bg-foreground/10"
            style={{ willChange: "transform, opacity" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: animConfig.pulsingSpeed * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.4,
            }}
          />
          <motion.div
            className="absolute bottom-2 left-2 w-8 h-8 rounded-full border-2 border-foreground/30 bg-foreground/10"
            style={{ willChange: "transform, opacity" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: animConfig.pulsingSpeed * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          <motion.div
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full border-2 border-foreground/30 bg-foreground/10"
            style={{ willChange: "transform, opacity" }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: animConfig.pulsingSpeed * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            }}
          />
        </div>
        
        {/* Resolution label */}
        <div className="mt-2 text-right">
          <span className="text-[8px] tracking-[0.2em] uppercase text-muted-foreground font-mono">
            320x240
          </span>
        </div>
      </div>
    </div>
  )
}

