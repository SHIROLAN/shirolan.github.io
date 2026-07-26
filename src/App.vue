<template>
  <CustomCursor />
  <Navbar />
  <main id="main-content" role="main">
    <Hero />
    <About />
    <Projects />
    <Experience />
    <Contact />
  </main>
  <Footer />
</template>

<script setup>
import CustomCursor from './components/CustomCursor.vue'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Experience from './components/Experience.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<style>
html {
  scroll-behavior: smooth;
}

::selection {
  background: rgba(168, 255, 62, 0.25);
  color: #fff;
}

:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}

input:-webkit-autofill,
textarea:-webkit-autofill {
  -webkit-box-shadow: 0 0 0 30px var(--surface) inset !important;
  -webkit-text-fill-color: var(--texthi) !important;
}
</style>
