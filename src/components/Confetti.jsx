import { useEffect, useRef } from 'react'

const COLORS = ['#e8607a', '#f5a0b0', '#b5384f', '#c9a84c', '#fde8ec', '#ffffff']

export default function Confetti() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 180; i++) {
      particles.push({
        x:    Math.random() * canvas.width,
        y:    Math.random() * canvas.height * 0.4 - canvas.height * 0.1,
        vx:   (Math.random() - 0.5) * 5,
        vy:   Math.random() * 4 + 1,
        size: Math.random() * 9 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rot:  Math.random() * 360,
        rotV: (Math.random() - 0.5) * 6,
        life: 1,
      })
    }

    let rafId
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]
        p.x   += p.vx
        p.y   += p.vy
        p.rot += p.rotV
        p.life -= 0.012

        if (p.life <= 0) { particles.splice(i, 1); continue }

        ctx.save()
        ctx.globalAlpha = p.life
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rot * Math.PI) / 180)
        ctx.fillStyle = p.color
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5)
        ctx.restore()
      }

      if (particles.length > 0) rafId = requestAnimationFrame(draw)
      else ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    rafId = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(rafId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 999,
      }}
    />
  )
}