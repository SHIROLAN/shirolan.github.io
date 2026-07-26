<template>
  <section id="hero" aria-label="Hero">
    <ParticleCanvas />
    <div class="hero-inner">
      <p class="hero-label">// Data Engineering · Data Analytics · AI Engineering</p>
      <div class="hero-grid">
        <div class="hero-text-col">
          <h1>Sumeet<br /><em>Chandankar.</em></h1>
          <HeroTextCycle :words="heroWords" />
          <p class="hero-tagline">Transforming raw data into reliable pipelines, analytics, and intelligent applications.</p>
          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">View Work &rarr;</a>
            <a href="#contact" class="btn btn-ghost">Contact Me</a>
          </div>
        </div>
        <div class="hero-image-col">
          <img :src="profileImage" alt="Sumeet Chandankar" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { heroWords } from '../data/navigation'
import ParticleCanvas from './ParticleCanvas.vue'
import HeroTextCycle from './HeroTextCycle.vue'
import profileImage from '../assets/1000142888-removebg-preview.png'
</script>

<style scoped>
#hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + 60px) 40px 80px;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1100px;
}

.hero-label {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 24px;
  opacity: 0;
  animation: fadeUp .8s .2s ease forwards;
}

h1 {
  font-family: var(--display);
  font-size: clamp(48px, 7vw, 88px);
  font-weight: 800;
  line-height: 1.02;
  color: var(--texthi);
  letter-spacing: -.02em;
  opacity: 0;
  animation: fadeUp .9s .35s ease forwards;
}

h1 em {
  font-style: normal;
  color: var(--accent);
}

.hero-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: center;
}

.hero-text-col {
  opacity: 0;
  animation: fadeUp .9s .35s ease forwards;
}

.hero-text-col h1 {
  opacity: 1;
  animation: none;
}

.hero-image-col {
  opacity: 0;
  animation: fadeUp .9s .45s ease forwards;
}

.hero-image-col img {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--accent);
  box-shadow: 0 0 40px rgba(168, 255, 62, .25);
  transition: transform .3s ease, box-shadow .3s ease;
}

.hero-image-col img:hover {
  transform: scale(1.05);
  box-shadow: 0 0 60px rgba(168, 255, 62, .4);
}

.hero-tagline {
  font-size: clamp(18px, 2.2vw, 24px);
  color: var(--text);
  margin-top: 20px;
  max-width: 560px;
}

.hero-cta {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 48px;
}

@media (max-width: 1200px) {
  .hero-image-col img {
    width: 320px;
    height: 320px;
  }
}

@media (max-width: 1024px) {
  .hero-image-col img {
    width: 220px;
    height: 220px;
  }
}

@media (max-width: 768px) {
  #hero {
    padding-left: 20px;
    padding-right: 20px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 24px;
  }

  .hero-image-col {
    order: -1;
    display: flex;
    justify-content: center;
  }

  .hero-image-col img {
    width: 180px;
    height: 180px;
  }

  .hero-cta {
    justify-content: center;
  }

  .hero-tagline {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-image-col img {
    width: 140px;
    height: 140px;
  }
}
</style>
