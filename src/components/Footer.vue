<template>
  <footer role="contentinfo">
    <span>&copy; 2025 Sumeet Chandankar — Built with <em>precision</em>.</span>
    <span class="footer-location">Pune, MH</span>
  </footer>
</template>

<style scoped>
footer {
  padding: 32px 40px;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
}

footer span em {
  color: var(--accent);
  font-style: normal;
}

.footer-location {
  font-size: 10px;
  letter-spacing: .15em;
}

@media (max-width: 768px) {
  footer {
    flex-direction: column;
    gap: 8px;
    text-align: center;
    padding: 24px 20px;
  }
}
</style>
