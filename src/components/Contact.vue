<template>
  <section id="contact" aria-label="Contact">
    <div class="contact-container">
      <SectionTitle number="05" title="Contact" heading="Let's build something." />
      <div class="contact-inner">
        <div class="contact-info" :class="{ visible: infoVisible }" ref="infoEl">
          <div class="status-badge">
            <span class="status-dot"></span>
            Open to opportunities
          </div>
          <h3>Say hello.</h3>
          <p>Whether it's a full-time role, a contract project, or just a question about data engineering — my inbox is always open.</p>
          <div class="socials">
            <a href="mailto:sumeetchandankar@gmail.com" class="social-link" aria-label="Email sumeetchandankar@gmail.com">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Sumeetchandankar
            </a>
            <a href="https://github.com/SHIROLAN" target="_blank" class="social-link" rel="noopener noreferrer" aria-label="GitHub profile">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              github
            </a>
            <a href="https://www.linkedin.com/in/sumeet-chandankar" target="_blank" class="social-link" rel="noopener noreferrer" aria-label="LinkedIn profile">
              <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              linkedin
            </a>
          </div>
        </div>
        <form
          class="contact-form"
          :class="{ visible: formVisible }"
          ref="formEl"
          @submit.prevent="handleSubmit"
          novalidate
        >
          <div class="form-group">
            <label class="form-label" for="contact-name">Name</label>
            <input
              id="contact-name"
              class="form-input"
              type="text"
              v-model="form.name"
              placeholder="Jane Smith"
              required
              aria-required="true"
              :aria-invalid="!!errors.name"
            />
            <p v-if="errors.name" class="form-error" role="alert">{{ errors.name }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-email">Email</label>
            <input
              id="contact-email"
              class="form-input"
              type="email"
              v-model="form.email"
              placeholder="jane@company.com"
              required
              aria-required="true"
              :aria-invalid="!!errors.email"
            />
            <p v-if="errors.email" class="form-error" role="alert">{{ errors.email }}</p>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-message">Message</label>
            <textarea
              id="contact-message"
              class="form-textarea"
              v-model="form.message"
              placeholder="Tell me what you're building..."
              required
              aria-required="true"
              :aria-invalid="!!errors.message"
            ></textarea>
            <p v-if="errors.message" class="form-error" role="alert">{{ errors.message }}</p>
          </div>
          <button type="submit" class="btn btn-primary" :disabled="submitting">
            {{ submitting ? 'Sending...' : sent ? '✓ Sent!' : 'Send Message →' }}
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useIntersectionObserver } from '../composables/useIntersectionObserver'
import SectionTitle from './SectionTitle.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const submitting = ref(false)
const sent = ref(false)

const { target: infoEl, isVisible: infoVisible } = useIntersectionObserver({ threshold: 0.08 })
const { target: formEl, isVisible: formVisible } = useIntersectionObserver({ threshold: 0.08 })

function validate() {
  let valid = true
  errors.name = ''
  errors.email = ''
  errors.message = ''

  if (!form.name.trim()) {
    errors.name = 'Name is required'
    valid = false
  }

  if (!form.email.trim()) {
    errors.email = 'Email is required'
    valid = false
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email'
    valid = false
  }

  if (!form.message.trim()) {
    errors.message = 'Message is required'
    valid = false
  }

  return valid
}

function handleSubmit() {
  if (!validate()) return
  submitting.value = true
  sent.value = false

  // Simulate sending — replace with actual API call
  setTimeout(() => {
    submitting.value = false
    sent.value = true
    form.name = ''
    form.email = ''
    form.message = ''
    setTimeout(() => { sent.value = false }, 3000)
  }, 1000)
}
</script>

<style scoped>
#contact {
  background: var(--bg2);
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.contact-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: start;
}

.contact-info {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.contact-info.visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-info h3 {
  font-family: var(--display);
  font-size: 28px;
  font-weight: 700;
  color: var(--texthi);
  margin-bottom: 16px;
}

.contact-info p {
  font-size: 15px;
  color: var(--text);
  margin-bottom: 32px;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--accent);
  background: rgba(168, 255, 62, .07);
  border: 1px solid rgba(168, 255, 62, .25);
  border-radius: 100px;
  padding: 6px 16px;
  margin-bottom: 32px;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  animation: pulse 2s infinite;
}

.socials {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.social-link {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--text);
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: border-color .2s, color .2s;
}

.social-link:hover,
.social-link:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
}

.social-link:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.contact-form.visible {
  opacity: 1;
  transform: translateY(0);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-label {
  font-family: var(--mono);
  font-size: 10px;
  letter-spacing: .15em;
  text-transform: uppercase;
  color: var(--muted);
}

.form-input,
.form-textarea {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 12px 16px;
  font-family: var(--body);
  font-size: 14px;
  color: var(--texthi);
  outline: none;
  transition: border-color .2s;
  resize: none;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--accent);
}

.form-input[aria-invalid="true"],
.form-textarea[aria-invalid="true"] {
  border-color: #ef4444;
}

.form-textarea {
  min-height: 120px;
}

.form-error {
  font-family: var(--mono);
  font-size: 10px;
  color: #ef4444;
}

@media (max-width: 768px) {
  .contact-container {
    padding: 0 20px;
  }

  .contact-inner {
    grid-template-columns: 1fr;
    gap: 40px;
  }
}
</style>
