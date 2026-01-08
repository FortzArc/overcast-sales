"use client"

import { useEffect, useRef } from "react"
import * as THREE from "three"
import { SimulationMaterial } from "@/lib/shaders/simulationMaterial"
import { DofPointsMaterial } from "@/lib/shaders/pointMaterial"

export function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x000000)

    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    )
    camera.position.set(0, 3, 8)
    camera.lookAt(0, 0, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Create FBO for particle positions
    const size = 512
    const simulationMaterial = new SimulationMaterial(10.0)
    
    // Create render targets for particle simulation
    let positionRenderTarget = new THREE.WebGLRenderTarget(size, size, {
      minFilter: THREE.NearestFilter,
      magFilter: THREE.NearestFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    })

    // Create a plane to render the simulation
    const simulationGeometry = new THREE.PlaneGeometry(2, 2)
    const simulationMesh = new THREE.Mesh(simulationGeometry, simulationMaterial)
    const simulationScene = new THREE.Scene()
    simulationScene.add(simulationMesh)
    const simulationCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    // Create particle points geometry
    const particleCount = size * size
    const particlePositions = new Float32Array(particleCount * 2)
    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 2] = (i % size) / size
      particlePositions[i * 2 + 1] = Math.floor(i / size) / size
    }

    const particlesGeometry = new THREE.BufferGeometry()
    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 2)
    )

    const pointsMaterial = new DofPointsMaterial()
    pointsMaterial.uniforms.positions.value = positionRenderTarget.texture
    pointsMaterial.uniforms.initialPositions.value = simulationMaterial.uniforms.positions.value

    const particles = new THREE.Points(particlesGeometry, pointsMaterial)
    scene.add(particles)

    // Animation
    let animationId: number
    const clock = new THREE.Clock()
    let revealProgress = 0

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      
      const time = clock.getElapsedTime()
      
      // Update simulation
      simulationMaterial.uniforms.uTime.value = time
      renderer.setRenderTarget(positionRenderTarget)
      renderer.render(simulationScene, simulationCamera)
      renderer.setRenderTarget(null)

      // Animate reveal
      if (revealProgress < 1) {
        revealProgress = Math.min(revealProgress + 0.005, 1)
        pointsMaterial.uniforms.uRevealProgress.value = revealProgress
        pointsMaterial.uniforms.uRevealFactor.value = 15 * (1 - revealProgress)
      }

      // Update points material
      pointsMaterial.uniforms.uTime.value = time
      pointsMaterial.uniforms.positions.value = positionRenderTarget.texture

      // Render main scene
      renderer.render(scene, camera)
    }

    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
      renderer.dispose()
      particlesGeometry.dispose()
      simulationGeometry.dispose()
      positionRenderTarget.dispose()
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={containerRef} className="absolute inset-0 w-full h-full" />
}
