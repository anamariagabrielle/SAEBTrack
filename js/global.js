/**
 * SAEBTrack — utilitários globais
 * Ícones: Lucide (https://lucide.dev) — renderização consistente em todos os SO
 */

function initLucideIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

window.initLucideIcons = initLucideIcons;

const PROFESSOR_DISCIPLINA_LABELS = {
  lp: 'Língua Portuguesa',
  mat: 'Matemática',
};

function getProfessorDisciplina() {
  const params = new URLSearchParams(window.location.search);
  const fromUrl = params.get('disciplina');
  if (fromUrl === 'lp' || fromUrl === 'mat') {
    sessionStorage.setItem('professorDisciplina', fromUrl);
    return fromUrl;
  }
  return sessionStorage.getItem('professorDisciplina') === 'mat' ? 'mat' : 'lp';
}

function applyProfessorDisciplinaUI() {
  const nav = document.querySelector('.navbar-professor');
  if (!nav) return getProfessorDisciplina();

  const disciplina = getProfessorDisciplina();
  const label = PROFESSOR_DISCIPLINA_LABELS[disciplina];

  nav.querySelectorAll('.navbar-user-meta').forEach((el) => {
    el.textContent = label;
  });

  const matrizTitulo = document.getElementById('matriz-disciplina-titulo');
  if (matrizTitulo) {
    matrizTitulo.textContent = `Matriz de Habilidades — ${label}`;
  }

  return disciplina;
}

window.getProfessorDisciplina = getProfessorDisciplina;
window.applyProfessorDisciplinaUI = applyProfessorDisciplinaUI;

function initNavbarMobile() {
  const MOBILE_BREAKPOINT = 768;

  document.querySelectorAll('.navbar[data-navbar]').forEach((nav) => {
    const toggle = nav.querySelector('.navbar-toggle');
    const backdrop = nav.querySelector('.navbar-backdrop');
    const panel = nav.querySelector('.navbar-panel');
    if (!toggle || !panel) return;

    const closeMenu = () => {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('navbar-menu-open');
    };

    const openMenu = () => {
      nav.classList.add('is-open');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('navbar-menu-open');
      initLucideIcons();
    };

    toggle.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    backdrop?.addEventListener('click', closeMenu);
    panel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMenu);
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        closeMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) {
        closeMenu();
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  initNavbarMobile();

  if (document.querySelector('.navbar-professor')) {
    applyProfessorDisciplinaUI();
  }

  document.querySelectorAll('form[data-prevent-default]').forEach((form) => {
    form.addEventListener('submit', (e) => e.preventDefault());
  });
});