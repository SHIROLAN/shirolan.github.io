<template>
  <section id="projects" aria-label="Projects">
    <div class="projects-container">
      <SectionTitle number="02" title="Projects" heading="Things I've shipped." />
      <div class="projects-grid">
        <ProjectCard
          v-for="(project, i) in projects"
          :key="project.title"
          :project="project"
          :style="{ transitionDelay: (i * 0.1) + 's' }"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '../data/projects'
import SectionTitle from './SectionTitle.vue'
import ProjectCard from './ProjectCard.vue'
</script>

<style scoped>
.projects-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 24px;
}

@media (max-width: 768px) {
  .projects-container {
    padding: 0 20px;
  }
}

@media (max-width: 400px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
