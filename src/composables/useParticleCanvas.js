import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion'

export function useParticleCanvas() {
  const canvasRef = ref(null)
  const { prefersReducedMotion } = useReducedMotion()
  let animationId = null
  let pts = []
  let W = 0
  let H = 0
  let ctx = null
  let isActive = true
  let isFocused = true
  const ACCENT = '#a8ff3e'
  const MAX_PARTICLES = 80

  function resize() {
    const canvas = canvasRef.value
    if (!canvas) return
    const parent = canvas.parentElement
    W = canvas.width = parent.offsetWidth
    H = canvas.height = parent.offsetHeight
    const count = Math.min(MAX_PARTICLES, Math.floor((W * H) / 15000))
    pts = Array.from({ length: count }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.5 + 0.5
    }))
  }

  function draw() {
    if (!isActive || !ctx) return
    ctx.clearRect(0, 0, W, H)

    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x
        const dy = pts[i].y - pts[j].y
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 120) {
          ctx.beginPath()
          ctx.strokeStyle = `rgba(168,255,62,${(1 - d / 120) * 0.12})`
          ctx.lineWidth = 0.5
          ctx.moveTo(pts[i].x, pts[i].y)
          ctx.lineTo(pts[j].x, pts[j].y)
          ctx.stroke()
        }
      }
    }

    for (const p of pts) {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(168,255,62,0.35)'
      ctx.fill()
      p.x += p.vx
      p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
    }

    animationId = requestAnimationFrame(draw)
  }

  function start() {
    if (prefersReducedMotion.value) return
    const canvas = canvasRef.value
    if (!canvas) return
    ctx = canvas.getContext('2d')
    resize()
    isActive = true
    draw()
  }

  function stop() {
    isActive = false
    if (animationId) {
      cancelAnimationFrame(animationId)
      animationId = null
    }
  }

  function handleVisibility() {
    if (document.hidden) {
      stop()
    } else if (isFocused) {
      start()
    }
  }

  function handleBlur() {
    isFocused = false
    stop()
  }

  function handleFocus() {
    isFocused = true
    if (!document.hidden) start()
  }

  onMounted(() => {
    start()
    window.addEventListener('resize', resize, { passive: true })
    document.addEventListener('visibilitychange', handleVisibility)
    window.addEventListener('blur', handleBlur)
    window.addEventListener('focus', handleFocus)
  })

  onUnmounted(() => {
    stop()
    window.removeEventListener('resize', resize)
    document.removeEventListener('visibilitychange', handleVisibility)
    window.removeEventListener('blur', handleBlur)
    window.removeEventListener('focus', handleFocus)
  })

  return { canvasRef }
}
