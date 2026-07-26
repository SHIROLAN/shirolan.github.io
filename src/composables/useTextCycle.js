import { ref, onMounted, onUnmounted } from 'vue'
import { useReducedMotion } from './useReducedMotion'

export function useTextCycle(words) {
  const currentIndex = ref(0)
  const translateY = ref(0)
  let intervalId = null
  let timeoutId = null
  const { prefersReducedMotion } = useReducedMotion()

  function nextWord() {
    const next = currentIndex.value + 1
    currentIndex.value = next
    translateY.value = -(next * 32)

    if (next >= words.length - 1) {
      clearInterval(intervalId)
      timeoutId = setTimeout(() => {
        translateY.value = 0
        currentIndex.value = 0
        intervalId = setInterval(nextWord, 2200)
      }, 520)
    }
  }

  onMounted(() => {
    if (!prefersReducedMotion.value && words.length > 1) {
      intervalId = setInterval(nextWord, 2200)
    }
  })

  onUnmounted(() => {
    if (intervalId) clearInterval(intervalId)
    if (timeoutId) clearTimeout(timeoutId)
  })

  return { currentIndex, translateY }
}
