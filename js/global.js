/**
 * SAEBTrack — utilitários globais
 * Ícones: Lucide (https://lucide.dev) — renderização consistente em todos os SO
 */

function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();

  document.querySelectorAll('form[data-prevent-default]').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });
});