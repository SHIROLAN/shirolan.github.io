<template>
  <section id="skills" aria-label="Skills">
    <div class="skills-container">
      <SectionTitle number="02" title="Skills" />
      <div class="skills-inline-chips">
        <div class="skill-cat">
          <p class="skill-cat-label">Languages</p>
          <div class="chips">
            <span v-for="c in skills.Languages" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
        <div class="skill-cat">
          <p class="skill-cat-label">Data Engineering</p>
          <div class="chips">
            <span v-for="c in skills['Data Engineering']" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
        <div class="skill-cat">
          <p class="skill-cat-label">Databases</p>
          <div class="chips">
            <span v-for="c in skills.Databases" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
        <div class="skill-cat">
          <p class="skill-cat-label">Analytics & BI</p>
          <div class="chips">
            <span v-for="c in skills['Analytics & BI']" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
        <div class="skill-cat">
          <p class="skill-cat-label">Machine Learning & AI</p>
          <div class="chips">
            <span v-for="c in skills['Machine Learning & AI']" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
        <div class="skill-cat">
          <p class="skill-cat-label">Backend</p>
          <div class="chips">
            <span v-for="c in skills.Backend" :key="c" class="chip">{{ c }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../data/skills'
import SectionTitle from './SectionTitle.vue'

const skills = {}
for (const group of skillGroups) {
  skills[group.label] = group.chips
}
</script>

<style scoped>
#skills {
  background: var(--bg2);
}

.skills-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.skills-inline-chips {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.skill-cat-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: 10px;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip {
  font-family: var(--mono);
  font-size: 11px;
  padding: 5px 12px;
  border-radius: 100px;
  border: 1px solid var(--border);
  color: var(--text);
  background: var(--surface);
  transition: border-color .2s, color .2s;
}

.chip:hover {
  border-color: var(--accent);
  color: var(--accent);
}

@media (max-width: 768px) {
  .skills-container {
    padding: 0 20px;
  }
}
</style>
