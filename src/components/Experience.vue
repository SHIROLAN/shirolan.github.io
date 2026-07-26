<template>
  <section id="experience" aria-label="Experience">
    <div class="experience-container">
      <SectionTitle number="03" title="Experience" heading="Where I've worked." />
      <div class="timeline" :class="{ visible: isVisible }" ref="el">
        <div v-for="exp in experiences" :key="exp.company" class="tl-item">
          <div class="tl-meta">
            <p class="tl-date">{{ exp.date }}</p>
            <p class="tl-company">{{ exp.company }}</p>
          </div>
          <div>
            <p class="tl-role">{{ exp.role }}</p>
            <ul class="tl-duties" v-if="exp.duties.length">
              <li v-for="(duty, i) in exp.duties" :key="i">{{ duty }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { experiences } from '../data/experience'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import SectionTitle from './SectionTitle.vue'

const { target: el, isVisible } = useIntersectionObserver({ threshold: 0.08 })
</script>

<style scoped>
#experience {
  background: var(--bg2);
}

.experience-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.timeline.visible {
  opacity: 1;
  transform: translateY(0);
}

.timeline::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  bottom: 8px;
  width: 1px;
  background: var(--border);
}

.tl-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 32px;
  padding: 32px 0 32px 32px;
  position: relative;
  border-bottom: 1px solid var(--border);
}

.tl-item:last-child {
  border-bottom: none;
}

.tl-item::before {
  content: '';
  position: absolute;
  left: -4px;
  top: 40px;
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 12px var(--accent);
}

.tl-meta {
  padding-top: 4px;
}

.tl-date {
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  letter-spacing: .1em;
  margin-bottom: 4px;
}

.tl-company {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  letter-spacing: .05em;
}

.tl-role {
  font-family: var(--display);
  font-size: 18px;
  font-weight: 700;
  color: var(--texthi);
  margin-bottom: 8px;
}

.tl-duties {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tl-duties li {
  font-size: 14px;
  color: var(--text);
  line-height: 1.7;
  padding-left: 16px;
  position: relative;
}

.tl-duties li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--accent);
}

@media (max-width: 768px) {
  .experience-container {
    padding: 0 20px;
  }

  .tl-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
