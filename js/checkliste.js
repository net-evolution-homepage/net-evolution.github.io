(function() {
  'use strict';
  window.addEventListener('load', function() {
    setTimeout(function() {
      window.print();
      setTimeout(function() {
        var btn = document.querySelector('.print-btn');
        if (btn) {
          btn.textContent = '✓ Bereit als PDF gespeichert!';
          btn.style.background = '#22c55e';
        }
      }, 100);
    }, 500);
  });
})();
