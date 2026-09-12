/* ============================================================
   CONFIGURATION — à modifier facilement
   ============================================================
   Pour changer le CV téléchargeable, remplace juste la valeur
   ci-dessous par le nom (ou chemin) exact de ton fichier PDF,
   déposé dans le même dossier que index.html.
   Pas besoin de chercher un titre ou un lien ailleurs dans le
   code : tout le site utilise cette seule variable.
*/
const CV_PATH = "cv-damien-renard.pdf";

document.addEventListener('DOMContentLoaded', () => {
  const cvLink = document.getElementById('cvLink');
  if (cvLink) {
    cvLink.href = CV_PATH;
  }
});

// ---------------- Menu mobile ----------------
const toggle = document.getElementById('navToggle');
const sidebar = document.getElementById('sidebar');
const backdrop = document.getElementById('navBackdrop');

function setMenu(open) {
  sidebar.classList.toggle('open', open);
  toggle.classList.toggle('open', open);
  backdrop.classList.toggle('open', open);
  document.body.classList.toggle('nav-open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

if (toggle && sidebar && backdrop) {
  toggle.addEventListener('click', () => {
    setMenu(!sidebar.classList.contains('open'));
  });

  backdrop.addEventListener('click', () => setMenu(false));

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => setMenu(false));
  });
}

// ---------------- Lien actif selon la section visible ----------------
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.toggle('active', link.dataset.target === id);
      });
    }
  });
}, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });

sections.forEach(section => sectionObserver.observe(section));

// ---------------- Curseur personnalisé (souris uniquement) ----------------
const isFinePointer = window.matchMedia('(pointer: fine)').matches;
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

if (isFinePointer && dot && ring) {
  document.body.classList.add('cursor-active');

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverables = document.querySelectorAll('a, button, .project-card, .contact-card, .trait-card, .skill-tags span');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('cursor-hover'));
  });
}

// ---------------- Effet de clic (ripple) sur les boutons ----------------
document.querySelectorAll('[data-ripple]').forEach(btn => {
  btn.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.width = span.style.height = size + 'px';
    span.style.left = (e.clientX - rect.left - size / 2) + 'px';
    span.style.top = (e.clientY - rect.top - size / 2) + 'px';
    this.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
  });
});

// ---------------- Spotlight qui suit le curseur sur les cartes ----------------
document.querySelectorAll('[data-spotlight]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--mx', ((e.clientX - rect.left) / rect.width) * 100 + '%');
    card.style.setProperty('--my', ((e.clientY - rect.top) / rect.height) * 100 + '%');
  });
});
