(function() {
  'use strict';

  // Jahr im Footer setzen
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Startseite: Weißer Header schon beim ersten kleinen Scroll
  (function startpageHeaderSticky() {
    if (!document.body.classList.contains('startpage')) return;
    var header = document.getElementById('mainHeader');
    var heroCard = document.querySelector('.startpage .hero-card');
    var placeholder = document.getElementById('headerPlaceholder');
    if (!header || !heroCard || !placeholder) return;
    function getThresholds() {
      var t = header.offsetTop;
      return { stick: t, unstick: t - 12 };
    }
    var thresholds = getThresholds();
    var ticking = false;
    function update() {
      var headerH = header.offsetHeight;
      var marginBottom = parseFloat(getComputedStyle(header).marginBottom) || 0;
      thresholds = getThresholds();
      var scrollY = window.scrollY;
      var isSticky = header.classList.contains('header-sticky');
      var shouldStick = isSticky
        ? scrollY > thresholds.unstick
        : scrollY > thresholds.stick;
      if (shouldStick) {
        header.classList.add('header-sticky');
        placeholder.classList.add('active');
        placeholder.style.transition = '';
        placeholder.style.height = (headerH + marginBottom) + 'px';
      } else {
        header.classList.remove('header-sticky');
        placeholder.classList.remove('active');
        placeholder.style.transition = 'none';
        placeholder.style.height = '0';
        placeholder.offsetHeight;
        placeholder.style.transition = '';
      }
      ticking = false;
    }
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    update();
  })();

  // Video-Rotation: 1, 2, … x nacheinander, dann von vorne. Erkennt video/1.mp4 … video/50.mp4 oder data-video-sources.
  (function videoRotation() {
    var section = document.getElementById('videoHeroSection');
    if (!section) return;
    var player = document.getElementById('videoHeroPlayer');
    if (!player) return;

    var DURATION_MS = 5000;
    var MAX_VIDEOS = 50;

    function discoverVideos(done) {
      var raw = (section.getAttribute('data-video-sources') || '').trim();
      if (raw) {
        done(raw.split(',').map(function(s) { return s.trim(); }).filter(Boolean));
        return;
      }
      var list = [];
      var i = 1;
      function tryNext() {
        if (i > MAX_VIDEOS) {
          done(list.length ? list : ['video/1.mp4']);
          return;
        }
        var src = 'video/' + i + '.mp4';
        var temp = document.createElement('video');
        temp.preload = 'metadata';
        temp.onloadeddata = function() {
          list.push(src);
          i++;
          tryNext();
        };
        temp.onerror = function() {
          done(list.length ? list : ['video/1.mp4']);
        };
        temp.src = src;
      }
      tryNext();
    }

    function startRotation(sources) {
      var currentIndex = 0;

      function playCurrent() {
        player.src = sources[currentIndex];
        player.currentTime = 0;
        player.play().catch(function() {});
      }

      function toNext() {
        currentIndex = (currentIndex + 1) % sources.length;
        playCurrent();
      }

      playCurrent();
      if (sources.length > 1) {
        setInterval(toNext, DURATION_MS);
      }
    }

    discoverVideos(startRotation);
  })();

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

})();
