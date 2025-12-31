document.addEventListener('DOMContentLoaded', function () {

  /* ================= HERO INTRO ANIMATION ================= */
  const heroElements = document.querySelectorAll('.hero h1, .subtitle, .tagline, .btn');
  heroElements.forEach((el, i) => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    setTimeout(() => {
      el.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }, i * 300);
  });

  /* ================= CARD HOVER EFFECT ================= */
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-10px)';
      card.style.boxShadow = '0 15px 30px rgba(28,163,236,0.3)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
      card.style.boxShadow = 'none';
    });
  });

  /* ================= SMOOTH SCROLL ================= */
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ================= SCROLL TO TOP BUTTON ================= */
  const scrollBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    scrollBtn.style.display =
      document.documentElement.scrollTop > 300 ? 'flex' : 'none';
  });

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ================= TYPEWRITER EFFECT ================= */
  const tagline = document.querySelector('.tagline');
  if (tagline) {
    const text = tagline.textContent;
    tagline.textContent = '';
    let i = 0;

    function typeWriter() {
      if (i < text.length) {
        tagline.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50);
      }
    }
    typeWriter();
  }

  /* ================= HAMBURGER MENU (UX FIXED) ================= */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const overlay = document.querySelector('.nav-overlay');
  const navLinks = document.querySelectorAll('.nav-panel a');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      document.body.style.overflow =
        mobileNav.classList.contains('active') ? 'hidden' : '';
    });

    /* Close when clicking overlay (NO forced selection) */
    overlay.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
    });

    /* Close when clicking a nav link */
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
});

/* ================= SKILL BAR ANIMATION ================= */
const skillFills = document.querySelectorAll('.skill-fill');

function animateSkills() {
  const triggerBottom = window.innerHeight - 100;
  skillFills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if (skillTop < triggerBottom) {
      skill.style.width = skill.dataset.level;
    }
  });
}

window.addEventListener('scroll', animateSkills);
window.addEventListener('load', animateSkills);
