import { ref, onMounted, onUnmounted } from 'vue'

export function useIntersectionObserver(options = {}) {
  const target = ref(null)
  const isVisible = ref(false)
  let observer = null

  const {
    threshold = 0.12,
    once = true,
    rootMargin = '0px'
  } = options

  onMounted(() => {
    if (!target.value) return

    observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        if (once) observer.unobserve(entry.target)
      } else if (!once) {
        isVisible.value = false
      }
    }, { threshold, rootMargin })

    observer.observe(target.value)
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })

  return { target, isVisible }
}
