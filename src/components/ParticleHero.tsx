'use client'
import { useEffect, useRef } from 'react'
import { useTheme } from './ThemeContext'

export default function ParticleHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let mouse = { x: -999, y: -999 }

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const onMove = (e: MouseEvent | TouchEvent) => {
      const rect = canvas.getBoundingClientRect()
      if ('touches' in e) {
        mouse.x = e.touches[0].clientX - rect.left
        mouse.y = e.touches[0].clientY - rect.top
      } else {
        mouse.x = (e as MouseEvent).clientX - rect.left
        mouse.y = (e as MouseEvent).clientY - rect.top
      }
    }
    const onLeave = () => { mouse.x = -999; mouse.y = -999 }

    canvas.addEventListener('mousemove', onMove)
    canvas.addEventListener('touchmove', onMove as any, { passive: true })
    canvas.addEventListener('mouseleave', onLeave)
    canvas.addEventListener('touchend', onLeave)

    // Fewer particles on mobile
    const isMobile = window.innerWidth < 768
    const COUNT = isMobile ? 35 : 70

    const pts = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      r: 1.5 + Math.random() * 1.5,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const isDark = theme === 'dark'
      const dotColor   = isDark ? 'rgba(245,197,24,0.8)' : 'rgba(180,140,0,0.6)'
      const lineColor  = (a: number) => isDark
        ? `rgba(245,197,24,${a * 0.3})`
        : `rgba(180,140,0,${a * 0.2})`

      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        const dm = Math.hypot(p.x - mouse.x, p.y - mouse.y)
        if (dm < 100) {
          p.x += (p.x - mouse.x) * 0.04
          p.y += (p.y - mouse.y) * 0.04
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = dotColor
        ctx.fill()
      })

      const CONN = isMobile ? 80 : 110
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y)
          if (d < CONN) {
            ctx.beginPath()
            ctx.moveTo(pts[i].x, pts[i].y)
            ctx.lineTo(pts[j].x, pts[j].y)
            ctx.strokeStyle = lineColor(1 - d / CONN)
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMove)
      canvas.removeEventListener('mouseleave', onLeave)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'auto',
      }}
    />
  )
}
