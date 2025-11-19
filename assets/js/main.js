import { LINKS } from './links.js';
import { initMenuToggle, initLanguageSwitcher } from './components.js';
import { buildProjects } from './projects.js';
import { buildContacts } from './contacts.js';

const translations = {
  en: {
    'sidebar-name': 'Tharindu',
    'sidebar-tagline': 'Web Developer & Designer',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'page-title': 'My Projects',
    'page-subtitle': 'A collection of my recent work and projects',
    'footer-text': LINKS.site?.copyright
  },
  si: {
    'sidebar-name': 'තරින්දු',
    'sidebar-tagline': 'වෙබ් සංවර්ධක සහ නිර්මාණකරු',
    'nav-projects': 'ව්‍යාපෘති',
    'nav-contact': 'සම්බන්ධ වන්න',
    'page-title': 'මගේ ව්‍යාපෘති',
    'page-subtitle': 'මගේ මෑත ව්‍යාපෘති',
    'footer-text': LINKS.site?.copyright?.replace("Tharindu","තරින්දු")
  }
};

document.addEventListener('DOMContentLoaded', () => {
  initMenuToggle();
  initLanguageSwitcher(translations);

  if (document.getElementById('projectsGrid')) {
    buildProjects();
  }

  if (document.getElementById('contactGrid')) {
    buildContacts();
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('SW registered', reg))
      .catch(err => console.warn('SW registration failed', err));
  }
});
