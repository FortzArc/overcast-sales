"use client"

import { useEffect, useRef } from "react"

const BAYER8 = [
  [0, 32, 8, 40, 2, 34, 10, 42],
  [48, 16, 56, 24, 50, 18, 58, 26],
  [12, 44, 4, 36, 14, 46, 6, 38],
  [60, 28, 52, 20, 62, 30, 54, 22],
  [3, 35, 11, 43, 1, 33, 9, 41],
  [51, 19, 59, 27, 49, 17, 57, 25],
  [15, 47, 7, 39, 13, 45, 5, 37],
  [63, 31, 55, 23, 61, 29, 53, 21],
]

export function DitheredCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get container dimensions for responsive sizing
    const container = canvas.parentElement?.parentElement
    if (!container) return

    const containerWidth = container.clientWidth || 320
    const containerHeight = 320 // Fixed height to match other components
    const aspectRatio = 4 / 3
    const W = Math.floor(containerWidth * 2) // Higher resolution for crisp rendering
    const H = Math.floor((containerWidth / aspectRatio) * 2)
    
    canvas.width = W
    canvas.height = H
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerWidth / aspectRatio}px`

    // Original blue palette from dither-card-palette.html
    const PALETTE: [number, number, number][] = [
      [44, 58, 58],   // Dark teal
      [46, 63, 79],   // Dark blue-gray
      [107, 124, 133], // Medium blue-gray
      [142, 155, 163], // Light blue-gray
      [200, 205, 208], // Very light blue-gray
    ]

    const imageData = ctx.createImageData(W, H)
    const data = imageData.data
    const cx = W / 2
    const cy = H / 2
    const maxDist = Math.sqrt(cx * cx + cy * cy)
    const N = PALETTE.length

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const idx = (y * W + x) * 4
        const dist = Math.sqrt((x - cx) ** 2 + (y - cy) ** 2)
        const gradient = 1 - dist / maxDist
        const wave = Math.sin(x * 0.05) * Math.cos(y * 0.03) * 0.3
        const value = Math.max(0, Math.min(1, gradient + wave))
        const scaled = value * (N - 1)
        const lo = Math.floor(scaled)
        const hi = Math.min(lo + 1, N - 1)
        const frac = scaled - lo
        const threshold = BAYER8[y % 8][x % 8] / 64
        const [r, g, b] = PALETTE[frac > threshold ? hi : lo]
        data[idx] = r
        data[idx + 1] = g
        data[idx + 2] = b
        data[idx + 3] = 255
      }
    }

    ctx.putImageData(imageData, 0, 0)
  }, [])

  return (
    <div className="relative border-2 border-foreground bg-[#1e2a2a]" style={{ height: "320px", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-[#6B7C85] px-4 py-2">
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#8E9BA3] font-mono">
          neural_scan.dither
        </span>
        <span className="text-[10px] tracking-[0.15em] uppercase text-[#8E9BA3] font-mono">
          320x240
        </span>
      </div>

      {/* Canvas */}
      <div className="flex items-center justify-center p-4 bg-[#1e2a2a] flex-1 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-contain"
          style={{
            imageRendering: "pixelated",
            imageRendering: "crisp-edges",
            maxWidth: "100%",
            maxHeight: "100%",
          }}
          aria-label="Dithered neural network visualization"
          role="img"
        />
      </div>
    </div>
  )
}

