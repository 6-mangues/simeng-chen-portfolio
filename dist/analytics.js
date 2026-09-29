(function () {
  const config = window.PORTFOLIO_ANALYTICS || {};
  const measurementId = config.measurementId;
  const consentKey = 'simeng-portfolio-analytics-consent';
  const languageKey = 'simeng-portfolio-language';
  const validMeasurementId = /^G-[A-Z0-9]+$/i.test(measurementId || '') && measurementId !== 'G-XXXXXXXXXX';

  const copy = {
    fr: {
      text: 'Ce site utilise des cookies de mesure d’audience pour comprendre les visites et améliorer le portfolio.',
      accept: 'Accepter', refuse: 'Refuser', privacy: 'Mesure d’audience'
    },
    en: {
      text: 'This site uses audience measurement cookies to understand visits and improve the portfolio.',
      accept: 'Accept', refuse: 'Decline', privacy: 'Audience measurement'
    },
    zh: {
      text: '本网站使用访问统计 Cookie，以了解访问情况并持续优化作品集。',
      accept: '同意', refuse: '拒绝', privacy: '访问统计'
    }
  };

  let language = 'fr';
  try { language = localStorage.getItem(languageKey) || 'fr'; } catch (_) {}
  if (!copy[language]) language = 'fr';

  // Tracking remains fully disabled until a real GA4 measurement ID is configured.
  if (!validMeasurementId) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };

  function loadAnalytics() {
    if (!validMeasurementId || document.querySelector('script[data-portfolio-analytics]')) return;
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    script.dataset.portfolioAnalytics = 'true';
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      anonymize_ip: true,
      transport_type: 'beacon'
    });
  }

  function saveConsent(value) {
    try { localStorage.setItem(consentKey, value); } catch (_) {}
  }

  function setConsent(value) {
    const granted = value === 'granted';
    window.gtag('consent', 'update', {
      analytics_storage: granted ? 'granted' : 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    saveConsent(value);
    if (granted) loadAnalytics();
    document.querySelector('.analytics-consent')?.remove();
  }

  function showConsent() {
    const banner = document.createElement('aside');
    banner.className = 'analytics-consent';
    banner.setAttribute('aria-label', copy[language].privacy);
    banner.innerHTML = `<p>${copy[language].text}</p><div><button type="button" data-consent="denied">${copy[language].refuse}</button><button class="consent-primary" type="button" data-consent="granted">${copy[language].accept}</button></div>`;
    banner.addEventListener('click', event => {
      const button = event.target.closest('[data-consent]');
      if (button) setConsent(button.dataset.consent);
    });
    document.body.appendChild(banner);
  }

  window.gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    wait_for_update: 500
  });

  let storedConsent = null;
  try { storedConsent = localStorage.getItem(consentKey); } catch (_) {}
  if (storedConsent === 'granted') {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied'
    });
    loadAnalytics();
  }
  else if (storedConsent !== 'denied') showConsent();

  function track(eventName, parameters) {
    let currentConsent = storedConsent;
    try { currentConsent = localStorage.getItem(consentKey); } catch (_) {}
    if (currentConsent === 'granted') {
      window.gtag('event', eventName, parameters || {});
    }
  }

  document.addEventListener('click', event => {
    const link = event.target.closest('a[href]');
    if (!link) return;
    const href = link.getAttribute('href') || '';
    if (/cv-simeng-chen.*\.pdf(?:$|[?#])/i.test(href)) {
      track('cv_download', { file_name: href.split('/').pop().split(/[?#]/)[0], link_url: link.href });
    } else if (/linkedin\.com/i.test(href)) {
      track('linkedin_click', { link_url: link.href });
    } else if (/^mailto:/i.test(href)) {
      track('email_click', { contact_method: 'email' });
    }
  });
})();
