<template>
  <div
    class="project-card"
    :class="{ visible: isVisible }"
    ref="el"
    role="article"
    :aria-label="project.title"
  >
    <div class="project-tags">
      <span
        v-for="tag in project.tags"
        :key="tag.label"
        :class="['tag', tag.class]"
      >{{ tag.label }}</span>
    </div>
    <p class="project-title">{{ project.title }}</p>
    <p class="project-desc">{{ project.description }}</p>
    <p class="project-summary">{{ project.summary }}</p>
    <div class="project-stack">
      <span class="stack-chip" v-for="tech in project.stack" :key="tech">{{ tech }}</span>
    </div>
    <div class="project-links">
      <a
        v-for="link in project.links"
        :key="link.label"
        :href="link.url"
        class="project-link"
        :class="{ 'project-link--disabled': link.disabled }"
        :aria-disabled="link.disabled ? 'true' : undefined"
        :tabindex="link.disabled ? -1 : undefined"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg v-if="link.icon === 'github'" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        <svg v-else-if="link.icon === 'external'" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
        </svg>
        {{ link.label }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { useIntersectionObserver } from '../composables/useIntersectionObserver'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const { target: el, isVisible } = useIntersectionObserver({ threshold: 0.08 })
</script>

<style scoped>
.project-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 28px;
  position: relative;
  overflow: hidden;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}

.project-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(168, 255, 62, .04) 0%, transparent 60%);
  opacity: 0;
  transition: opacity .3s;
  pointer-events: none;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: rgba(168, 255, 62, .35);
  box-shadow: 0 12px 40px rgba(0, 0, 0, .5), 0 0 0 1px rgba(168, 255, 62, .12);
}

.project-card:hover::before {
  opacity: 1;
}

.project-tags {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-bottom: 16px;
}

.tag {
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .12em;
  text-transform: uppercase;
  padding: 3px 9px;
  border-radius: 4px;
  border: 1px solid;
}

.tag-ai { color: var(--accent); border-color: rgba(168, 255, 62, .35); background: rgba(168, 255, 62, .05); }
.tag-web { color: #60a5fa; border-color: rgba(96, 165, 250, .35); background: rgba(96, 165, 250, .05); }
.tag-api { color: #f59e0b; border-color: rgba(245, 158, 11, .35); background: rgba(245, 158, 11, .05); }
.tag-oss { color: #c084fc; border-color: rgba(192, 132, 252, .35); background: rgba(192, 132, 252, .05); }
.tag-cli { color: #34d399; border-color: rgba(52, 211, 153, .35); background: rgba(52, 211, 153, .05); }
.tag-devtools { color: #38bdf8; border-color: rgba(56, 189, 248, .35); background: rgba(56, 189, 248, .05); }
.tag-distributed { color: #c084fc; border-color: rgba(192, 132, 252, .35); background: rgba(192, 132, 252, .05); }

.project-title {
  font-family: var(--display);
  font-size: 20px;
  font-weight: 700;
  color: var(--texthi);
  margin-bottom: 8px;
}

.project-desc {
  font-size: 14px;
  color: var(--text);
  line-height: 1.6;
}

.project-summary {
  font-size: 13px;
  color: var(--muted);
  line-height: 1.6;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
  max-height: 0;
  overflow: hidden;
  transition: max-height .4s ease, opacity .3s ease;
  opacity: 0;
}

.project-card:hover .project-summary {
  max-height: 100px;
  opacity: 1;
}

.project-stack {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.stack-chip {
  font-family: var(--mono);
  font-size: 10px;
  padding: 3px 8px;
  border-radius: 4px;
  background: rgba(255, 255, 255, .04);
  color: var(--muted);
  border: 1px solid var(--border);
}

.project-links {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.project-link {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color .2s;
  display: flex;
  align-items: center;
  gap: 6px;
}

.project-link:hover,
.project-link:focus-visible {
  color: var(--accent);
}

.project-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.project-link--disabled {
  opacity: 0.45;
  pointer-events: none;
}

.project-card.visible {
  opacity: 1;
  transform: translateY(0);
}
</style>
