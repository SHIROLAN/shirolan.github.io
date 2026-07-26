<template>
  <nav
    class="navbar"
    :class="{ hidden: isHidden, scrolled: isScrolled }"
    role="navigation"
    aria-label="Main navigation"
  >
    <div class="nav-container">
      <a href="#hero" class="nav-logo" aria-label="Home">SC<span class="nav-logo-muted">.dev</span></a>

      <button
        class="hamburger"
        :class="{ active: menuOpen }"
        @click="toggleMenu"
        aria-label="Toggle navigation menu"
        aria-expanded="menuOpen"
        :aria-controls="menuId"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <ul
        :id="menuId"
        class="nav-links"
        :class="{ 'nav-links--open': menuOpen }"
        role="menubar"
      >
        <li v-for="link in navLinks" :key="link.href" role="none">
          <a
            :href="link.href"
            class="nav-link"
            role="menuitem"
            @click="closeMenu"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <div
        v-if="menuOpen"
        class="nav-overlay"
        @click="closeMenu"
        @keydown.escape="closeMenu"
      ></div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks } from '../data/navigation'
import { useNavScroll } from '../composables/useNavScroll'

const { isHidden, isScrolled } = useNavScroll()
const menuOpen = ref(false)
const menuId = 'main-nav-menu'

function toggleMenu() {
  menuOpen.value = !menuOpen.value
  if (menuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

function closeMenu() {
  menuOpen.value = false
  document.body.style.overflow = ''
}

function handleKeydown(e) {
  if (e.key === 'Escape' && menuOpen.value) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  background: rgba(11, 12, 14, .88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transition: transform .35s ease;
}

.navbar.hidden {
  transform: translateY(-100%);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-logo {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
  letter-spacing: .08em;
}

.nav-logo-muted {
  color: var(--muted);
}

.nav-links {
  display: flex;
  gap: 32px;
  list-style: none;
}

.nav-link {
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--muted);
  transition: color .2s;
}

.nav-link:hover,
.nav-link:focus-visible {
  color: var(--accent);
}

.nav-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 4px;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 8px;
  z-index: 110;
}

.hamburger-line {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text);
  border-radius: 2px;
  transition: all .3s ease;
}

.hamburger.active .hamburger-line:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.hamburger.active .hamburger-line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .hamburger-line:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav-overlay {
  display: none;
}

@media (max-width: 768px) {
  .navbar {
    padding: 0 20px;
  }

  .hamburger {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 0;
    right: 0;
    width: 260px;
    height: 100vh;
    flex-direction: column;
    gap: 0;
    padding: 80px 32px 32px;
    background: rgba(11, 12, 14, .96);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-left: 1px solid var(--border);
    transform: translateX(100%);
    transition: transform .35s ease;
    z-index: 105;
  }

  .nav-links--open {
    transform: translateX(0);
  }

  .nav-links li {
    border-bottom: 1px solid var(--border);
  }

  .nav-link {
    display: block;
    padding: 16px 0;
    font-size: 13px;
  }

  .nav-overlay {
    display: block;
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .5);
    z-index: 104;
  }
}
</style>
