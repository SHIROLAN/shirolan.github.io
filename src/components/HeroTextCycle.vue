<template>
  <div class="hero-cycle" aria-live="polite" aria-atomic="true">
    <div class="cycle-inner" :style="{ transform: 'translateY(' + translateY + 'px)' }">
      <span v-for="(word, i) in words" :key="i">{{ word }}</span>
    </div>
  </div>
</template>

<script setup>
import { useTextCycle } from '../composables/useTextCycle'

const props = defineProps({
  words: {
    type: Array,
    required: true
  }
})

const { translateY } = useTextCycle(props.words)
</script>

<style scoped>
.hero-cycle {
  font-family: var(--mono);
  font-size: clamp(16px, 2vw, 22px);
  color: var(--muted);
  margin-top: 24px;
  height: 32px;
  overflow: hidden;
  opacity: 1;
}

.cycle-inner {
  display: flex;
  flex-direction: column;
  transition: transform .5s cubic-bezier(.4, 0, .2, 1);
}

.cycle-inner span {
  flex-shrink: 0;
  line-height: 32px;
}

.cycle-inner span::before {
  content: '> ';
  color: var(--accent);
}
</style>
