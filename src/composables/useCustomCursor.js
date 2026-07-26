import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion'

export function useCustomCursor() {
  const cursorX = ref(-100)
  const cursorY = ref(-100)
  const isBig = ref(false)
  const isEnabled = ref(false)
  const { prefersReducedMotion } = useReducedMotion()

  function handleMove(e) {
    cursorX.value = e.clientX
    cursorY.value = e.clientY
  }

  function handleEnterBig() {
    isBig.value = true
  }

  function handleLeaveBig() {
    isBig.value = false
  }

  onMounted(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches
    const isSmallScreen = window.innerWidth < 768

    if (!hasFinePointer || isSmallScreen || prefersReducedMotion.value) {
      isEnabled.value = false
      return
    }

    isEnabled.value = true
    window.addEventListener('mousemove', handleMove, { passive: true })

    document.querySelectorAll('a, button, .project-card, .article-card, .chip').forEach(el => {
      el.addEventListener('mouseenter', handleEnterBig)
      el.addEventListener('mouseleave', handleLeaveBig)
    })
  })

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMove)
  })

  return { cursorX, cursorY, isBig, isEnabled }
}
