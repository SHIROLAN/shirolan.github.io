import { ref, onMounted, onUnmounted } from 'vue'

export function useReducedMotion() {
  const prefersReducedMotion = ref(false)
  let mq = null

  onMounted(() => {
    mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.value = mq.matches
    mq.addEventListener('change', onChange)
  })

  onUnmounted(() => {
    if (mq) mq.removeEventListener('change', onChange)
  })

  function onChange(e) {
    prefersReducedMotion.value = e.matches
  }

  return { prefersReducedMotion }
}
