<template>
  <div
    v-if="isEnabled"
    id="cursor"
    class="custom-cursor"
    :class="{ big: isBig }"
    :style="{ left: cursorX + 'px', top: cursorY + 'px' }"
  ></div>
</template>

<script setup>
import { useCustomCursor } from '../composables/useCustomCursor'

const { cursorX, cursorY, isBig, isEnabled } = useCustomCursor()
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 10px;
  height: 10px;
  background: var(--accent);
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: transform .15s ease, width .2s ease, height .2s ease, opacity .2s;
  mix-blend-mode: screen;
}

.custom-cursor.big {
  width: 36px;
  height: 36px;
  opacity: .5;
}
</style>
