/* ===============================
   EduSathi – Clean Unified Script.js (FINAL)
   Features:
   - Password toggle
   - Login handling
   - Page transitions (ONLY real pages)
   - Safe navbar navigation
   - Contact scroll fix
   =============================== */

/* ===== Helpers ===== */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);

/* ===============================
   Password Eye Toggle
   =============================== */
(() => {
  const toggle = $('#togglePassword');
  const input = $('#password');
  if (!toggle || !input) return;

  toggle.addEventListener('click', () => {
    const show = input.type === 'password';
    input.type = show ? 'text' : 'password';
    toggle.textContent = show ? '🙈' : '👁️';
  });
})();

/* ===============================
   Login Form (Dummy)
   =============================== */
(() => {
  const form = $('.login-card form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = $('#email')?.value.trim();
    const password = $('#password')?.value.trim();

    if (!email || !password) {
      alert('Please fill all fields');
      return;
    }

    alert(`Welcome back, ${email}`);
    form.reset();
  });
})();

/* ===============================
   Page Fade Handling
   =============================== */
document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('page-loaded');
});

function navigateWithTransition(url) {
  document.body.classList.remove('page-loaded');
  document.body.classList.add('page-exit');

  setTimeout(() => {
    window.location.href = url;
  }, 350);
}

/* ===============================
   Card Navigation
   =============================== */
function openPage(page) {
  const routes = {
    'pass-out': 'pass-out.html',
    roadmap: 'roadmap.html',
    resume: 'resume.html',
    skills: 'skills.html',
    note: 'note.html',
    projects: 'projects.html'
  };

  if (routes[page]) {
    navigateWithTransition(routes[page]);
  }
}

/* ===============================
   Navbar Navigation (FIXED)
   =============================== */
(() => {
  const routes = {
    home: 'index.html',
    problems: 'problems.html',
    tutorials: 'tutorials.html',
    projects: 'projects.html'
  };

  $$('.navbar nav a').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      const key = link.textContent.toLowerCase().trim();

      /* 🔥 CONTACT = SCROLL ONLY */
      if (href && href.startsWith('#')) {
        return; // no fade, no black screen
      }

      /* 🔥 REAL PAGE = FADE */
      if (routes[key]) {
        e.preventDefault();
        navigateWithTransition(routes[key]);
      }
    });
  });
})();

(() => {
  const btn = document.querySelector('.btn-login');
  const alertBox = document.getElementById('loginAlert');
  const closeBtn = document.getElementById('closeAlert');

  if (!btn || !alertBox || !closeBtn) return;

  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alertBox.classList.add('show');
  });

  closeBtn.addEventListener('click', () => {
    alertBox.classList.remove('show');
  });
})();

function showAlert(message) {
      alert(message);
    }



/* ===============================
   Active Navbar Highlight
   =============================== */
(() => {
  const current = window.location.pathname.split('/').pop() || 'index.html';

  $$('nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    }
  });
})();

/* ===============================
   YouTube Open (Safe)
   =============================== */
function openYouTube(videoId) {
  window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
}
(() => {
  const alertBox = document.getElementById('featureAlert');
  const closeBtn = document.getElementById('closeFeatureAlert');

  if (!alertBox || !closeBtn) return;

  // Projects button
  const projectsBtn = document.querySelector('nav a[href="projects.html"]');
  if (projectsBtn) {
    projectsBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alertBox.classList.add('show');
    });
  }

  // Resume button
  const resumeBtn = document.querySelector('nav a[href="resume.html"]');
  if (resumeBtn) {
    resumeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      alertBox.classList.add('show');
    });
  }

  // Close alert
  closeBtn.addEventListener('click', () => {
    alertBox.classList.remove('show');
  });
})();
