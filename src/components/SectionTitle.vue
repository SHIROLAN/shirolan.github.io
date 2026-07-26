<template>
  <div class="section-label">
    {{ number }} &mdash; {{ title }}
  </div>
  <h2 v-if="heading">{{ heading }}</h2>
</template>

<script setup>
defineProps({
  number: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  heading: {
    type: String,
    default: ''
  }
})
</script>
