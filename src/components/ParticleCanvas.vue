<template>
  <canvas ref="canvasRef" id="stars" aria-hidden="true"></canvas>
</template>

<script setup>
import { useParticleCanvas } from '../composables/useParticleCanvas'

const { canvasRef } = useParticleCanvas()
</script>

<style scoped>
canvas#stars {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
