// Menu mobile
const toggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');

if (toggle && sidebar) {
  toggle.addEventListener('click', () => {
    const isOpen = sidebar.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Mise en surbrillance du lien actif selon la section visible
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => observer.observe(section));
