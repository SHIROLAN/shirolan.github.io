import { ref, onMounted, onUnmounted } from 'vue'

export function useNavScroll() {
  const isHidden = ref(false)
  const isScrolled = ref(false)
  let lastScroll = 0

  function handleScroll() {
    const s = window.scrollY
    isHidden.value = s > lastScroll && s > 120
    isScrolled.value = s > 20
    lastScroll = s
  }

  onMounted(() => {
    lastScroll = window.scrollY
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isHidden, isScrolled }
}
