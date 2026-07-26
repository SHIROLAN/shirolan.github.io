<template>
  <section id="about" aria-label="About me">
    <div class="about-container">
      <SectionTitle number="01" title="About" heading="Engineering data into insight." />
      <div class="about-grid" :class="{ visible: isVisible }" ref="el">
        <div class="about-bio">
          <p>I build <strong>data-driven applications</strong> that transform raw information into reliable, actionable insights. My background spans <strong>Data Engineering</strong>, <strong>Data Analytics</strong>, AI, and Backend Development, with experience building scalable ETL pipelines, automating data workflows, developing analytics solutions, and creating production-ready APIs.</p>
          <p>I'm passionate about designing reliable data systems that process large datasets efficiently, maintain data quality, and enable meaningful business insights. My experience includes data collection, transformation, automation, analytics, distributed systems, and integrating AI into modern data workflows.</p>
          <p>Alongside data engineering, I enjoy applying <strong>machine learning</strong> and <strong>large language models</strong> to solve real-world business problems through intelligent, data-driven applications.</p>
          <p>Currently based in <strong>Pune, Maharashtra</strong>, I'm seeking opportunities in Data Engineering, Data Analytics, and AI where I can contribute to building scalable data platforms and impactful analytics solutions.</p>
        </div>
        <aside class="skills-block">
          <div v-for="group in skillGroups" :key="group.label" class="skill-group">
            <p class="skill-group-label">{{ group.label }}</p>
            <div class="chips">
              <span
                v-for="chip in group.chips"
                :key="chip"
                class="chip"
                tabindex="0"
              >{{ chip }}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skillGroups } from '../data/skills'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import SectionTitle from './SectionTitle.vue'

const { target: el, isVisible } = useIntersectionObserver({ threshold: 0.08 })
</script>

<style scoped>
#about {
  background: var(--bg2);
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.about-grid.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-bio {
  font-size: 18px;
  line-height: 1.8;
  color: var(--text);
}

.about-bio p + p {
  margin-top: 20px;
}

.about-bio strong {
  color: var(--texthi);
}

.skills-block {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.skill-group-label {
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

.chip:hover,
.chip:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
}

.chip:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

@media (max-width: 768px) {
  .about-container {
    padding: 0 20px;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .about-bio {
    font-size: 16px;
  }
}
</style>
