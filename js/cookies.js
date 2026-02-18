(function() {
  'use strict';

  var banner = document.getElementById('cookieBanner');
  var consent = localStorage.getItem('gaConsent');

  if (consent === 'accepted') {
    if (typeof loadAnalytics === 'function') loadAnalytics();
    if (banner) banner.style.display = 'none';
  }
  if (consent === 'declined' && banner) banner.style.display = 'none';

  var acceptBtn = document.getElementById('acceptCookies');
  if (acceptBtn) {
    acceptBtn.addEventListener('click', function() {
      localStorage.setItem('gaConsent', 'accepted');
      if (typeof loadAnalytics === 'function') loadAnalytics();
      if (banner) banner.style.display = 'none';
    });
  }

  var declineBtn = document.getElementById('declineCookies');
  if (declineBtn) {
    declineBtn.addEventListener('click', function() {
      localStorage.setItem('gaConsent', 'declined');
      if (banner) banner.style.display = 'none';
    });
  }
})();

function loadAnalytics() {
  // Google Analytics wurde noch nicht konfiguriert
  // Bei Bedarf können Sie hier Ihre echte GA4-Tracking-ID eintragen
  console.log('Analytics wurde akzeptiert, aber noch nicht konfiguriert');
}
