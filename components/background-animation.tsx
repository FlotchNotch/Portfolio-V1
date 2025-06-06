"use client"

import { useEffect, useRef } from "react"

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let time = 0

    const animate = () => {
      time += 0.01

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Gradient de base avec touches violettes plus visibles
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2
      )

      gradient.addColorStop(0, "#0f0d18")    // Violet plus prononcé
      gradient.addColorStop(0.5, "#0b0a12")  // Noir avec violet plus visible
      gradient.addColorStop(1, "#000000")    // Noir pur

      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Overlay violet plus marqué
      const overlayGradient = ctx.createRadialGradient(
        canvas.width * 0.3 + Math.sin(time * 0.2) * 50,
        canvas.height * 0.4 + Math.cos(time * 0.15) * 40,
        0,
        canvas.width * 0.7,
        canvas.height * 0.6,
        Math.max(canvas.width, canvas.height) * 0.6
      )

      overlayGradient.addColorStop(0, "rgba(139, 92, 246, 0.035)")  // Violet plus fort
      overlayGradient.addColorStop(0.6, "rgba(88, 28, 135, 0.018)") // Violet sombre plus visible
      overlayGradient.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = overlayGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Overlay teal subtil
      const tealOverlay = ctx.createRadialGradient(
        canvas.width * 0.7 + Math.sin(time * 0.15) * 60,
        canvas.height * 0.3 + Math.cos(time * 0.1) * 50,
        0,
        canvas.width * 0.8,
        canvas.height * 0.5,
        Math.max(canvas.width, canvas.height) * 0.5
      )

      tealOverlay.addColorStop(0, "rgba(20, 184, 166, 0.025)")  // Teal subtil
      tealOverlay.addColorStop(0.5, "rgba(14, 116, 144, 0.012)") // Teal sombre
      tealOverlay.addColorStop(1, "rgba(0, 0, 0, 0)")

      ctx.fillStyle = tealOverlay
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}