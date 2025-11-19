// components.js - small UI helpers and language switcher (exported for ES module usage)

export function initMenuToggle() {
  const toggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  if (!toggle || !sidebar || !overlay) return;

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  overlay.addEventListener('click', () => {
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });
}

/**
 * initLanguageSwitcher(translations)
 * translations: { en: {...}, si: {...} }
 */
export function initLanguageSwitcher(translations) {
  if (!translations) return;
  const enBtn = document.getElementById('langEn');
  const siBtn = document.getElementById('langSi');

  function change(lang) {
    const map = translations[lang] || translations.en;
    Object.keys(map).forEach(key => {
      const el = document.getElementById(key);
      if (el) el.textContent = map[key];
    });

    if (enBtn) enBtn.classList.toggle('active', lang === 'en');
    if (siBtn) siBtn.classList.toggle('active', lang === 'si');

    localStorage.setItem('preferred-language', lang);
    document.documentElement.lang = (lang === 'si' ? 'si' : 'en');
  }

  if (enBtn) enBtn.addEventListener('click', () => change('en'));
  if (siBtn) siBtn.addEventListener('click', () => change('si'));

  const saved = localStorage.getItem('preferred-language') || 'en';
  change(saved === 'si' ? 'si' : 'en');
}
