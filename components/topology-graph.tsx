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

const CONTAINER_HEIGHT = 320

export function TopologyGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get container dimensions
    const container = canvas.parentElement
    if (!container) return

    const containerWidth = container.clientWidth
    const containerHeight = CONTAINER_HEIGHT
    const W = Math.floor(containerWidth * 2) // Higher resolution for crisp rendering
    const H = Math.floor(containerHeight * 2)
    
    canvas.width = W
    canvas.height = H
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`

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

    // Create grid of rounded squares (squircles)
    const gridCols = 6
    const gridRows = 6
    const cellWidth = W / gridCols
    const cellHeight = H / gridRows
    const squareSize = Math.min(cellWidth, cellHeight) * 0.7
    const cornerRadius = squareSize * 0.3

    for (let y = 0; y < H; y++) {
      for (let x = 0; x < W; x++) {
        const idx = (y * W + x) * 4
        
        // Horizontal gradient from dark (left) to light (right)
        const horizontalGradient = x / W
        
        // Find which grid cell we're in
        const gridX = Math.floor(x / cellWidth)
        const gridY = Math.floor(y / cellHeight)
        const cellCenterX = gridX * cellWidth + cellWidth / 2
        const cellCenterY = gridY * cellHeight + cellHeight / 2
        
        // Calculate distance from cell center
        const dx = x - cellCenterX
        const dy = y - cellCenterY
        const distFromCenter = Math.sqrt(dx * dx + dy * dy)
        
        // Create rounded square shape (squircle)
        // Use a superellipse formula for rounded squares
        const n = 3.5 // Controls roundness (higher = more square, lower = more circle)
        const normalizedX = Math.abs(dx) / (squareSize / 2)
        const normalizedY = Math.abs(dy) / (squareSize / 2)
        const squircleDist = Math.pow(Math.pow(normalizedX, n) + Math.pow(normalizedY, n), 1 / n)
        
        // Create soft edges for the squares
        const squareIntensity = Math.max(0, 1 - squircleDist)
        const softEdge = Math.pow(squareIntensity, 2) // Soft falloff
        
        // Add slight wave/undulation to grid
        const waveX = Math.sin(gridY * 0.3) * 0.1
        const waveY = Math.cos(gridX * 0.3) * 0.1
        const adjustedDist = Math.sqrt((dx - waveX * cellWidth) ** 2 + (dy - waveY * cellHeight) ** 2)
        const adjustedSquircleDist = Math.pow(
          Math.pow(Math.abs(dx - waveX * cellWidth) / (squareSize / 2), n) +
          Math.pow(Math.abs(dy - waveY * cellHeight) / (squareSize / 2), n),
          1 / n
        )
        const adjustedSquareIntensity = Math.max(0, 1 - adjustedSquircleDist)
        const adjustedSoftEdge = Math.pow(adjustedSquareIntensity, 2)
        
        // Combine horizontal gradient with square pattern
        // Squares are slightly lighter than background, creating raised effect
        const baseValue = horizontalGradient * 0.9 // Base gradient (slightly darker overall)
        const squareValue = baseValue + adjustedSoftEdge * 0.15 // Squares add brightness
        const value = Math.max(0, Math.min(1, squareValue))
        
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
    <div className="relative border-2 border-foreground bg-background" style={{ height: `${CONTAINER_HEIGHT}px`, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{
          imageRendering: "pixelated",
          imageRendering: "crisp-edges",
        }}
        aria-label="Dithered neural network topology visualization"
        role="img"
      />
    </div>
  )
}
