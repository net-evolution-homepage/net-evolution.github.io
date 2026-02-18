(function() {
  'use strict';

  // Jahr im Footer setzen
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile-Menü
  var btn = document.getElementById('mobileMenuBtn');
  var nav = document.getElementById('mainNav');
  if (btn && nav) {
    btn.addEventListener('click', function() {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    }, { passive: true });
    nav.querySelectorAll('a').forEach(function(link) {
      link.addEventListener('click', function() {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.setAttribute('aria-label', 'Menü öffnen');
      });
    });
  }

  // Scroll zu Kontakt (für Seiten mit #contact)
  function scrollToContact(subject) {
    var sel = document.getElementById('service');
    if (sel) sel.value = subject;
    var contact = document.getElementById('contact');
    if (contact) contact.scrollIntoView({ behavior: 'smooth', block: 'start' });
    var v = document.getElementById('vorname');
    if (v) v.focus();
  }
  window.scrollToContact = scrollToContact;

  // Toast anzeigen
  function showToast(msg, timeout) {
    var t = document.getElementById('toast');
    if (!t) return;
    t.textContent = msg || t.textContent;
    t.classList.add('show');
    setTimeout(function() { t.classList.remove('show'); }, timeout || 4200);
    var sr = document.getElementById('sr-announcer');
    if (sr) sr.textContent = msg;
  }
  window.showToast = showToast;

  // Reveal-Animation (data-reveal)
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var reveals = [].slice.call(document.querySelectorAll('[data-reveal]'));
    if (reveals.length && 'IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      }, { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
      reveals.forEach(function(el, i) {
        el.style.transitionDelay = (i * 45) + 'ms';
        io.observe(el);
      });
    } else if (reveals.length) {
      reveals.forEach(function(el) { el.classList.add('visible'); });
    }
  }

  // Testimonial-Rotator
  if (window.matchMedia && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var items = document.querySelectorAll('.testimonial');
    var dots = document.querySelectorAll('.testimonial-indicators button');
    var container = document.querySelector('.testimonials');
    if (items.length) {
      var idx = 0, interval;
      function show(i) {
        items.forEach(function(it, j) { it.classList.toggle('active', j === i); });
        dots.forEach(function(d, j) { d.classList.toggle('active', j === i); });
      }
      function start() { interval = setInterval(function() { idx = (idx + 1) % items.length; show(idx); }, 4200); }
      function stop() { clearInterval(interval); interval = null; }
      show(idx);
      start();
      if (container) {
        container.addEventListener('mouseenter', stop, { passive: true });
        container.addEventListener('mouseleave', function() { if (!interval) start(); }, { passive: true });
        container.addEventListener('focusin', stop);
        container.addEventListener('focusout', function() { if (!interval) start(); });
      }
      dots.forEach(function(d, i) {
        d.addEventListener('click', function() {
          stop(); idx = i; show(idx);
          setTimeout(function() { if (!interval) start(); }, 6000);
        });
      });
    }
  }

  // Parallax für .hero-image.parallax
  var hero = document.querySelector('.hero-image.parallax');
  if (hero && (!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    function onScroll() {
      var sc = window.scrollY || window.pageYOffset;
      var t = Math.min(Math.max(sc * 0.05, -8), 36);
      var s = 1 + Math.min(sc * 0.0004, 0.012);
      hero.style.transform = 'translateY(' + (t * 0.45) + 'px) scale(' + s + ')';
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
})();
