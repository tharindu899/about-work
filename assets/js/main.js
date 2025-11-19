// ============================================
// MAIN.JS - NO CACHE VERSION
// ============================================

// Generate unique timestamp for cache busting
const cacheBuster = Date.now();

// Clear session storage on load (keep localStorage for language preference)
try {
  sessionStorage.clear();
  console.log('Session storage cleared');
} catch(e) {
  console.warn('Could not clear session storage:', e);
}

// Prevent back-forward cache (bfcache)
window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    console.log('Page restored from bfcache - forcing reload');
    window.location.reload();
  }
});

// Prevent page caching on unload
window.addEventListener('beforeunload', function() {
  // Clear any temporary data
  sessionStorage.clear();
});

// Dynamic imports with cache busting timestamps
const linksPromise = import(`./links.js?v=${cacheBuster}`);
const componentsPromise = import(`./components.js?v=${cacheBuster}`);
const projectsPromise = import(`./projects.js?v=${cacheBuster}`);
const contactsPromise = import(`./contacts.js?v=${cacheBuster}`);

// Wait for all modules to load
Promise.all([linksPromise, componentsPromise, projectsPromise, contactsPromise])
  .then(([linksModule, componentsModule, projectsModule, contactsModule]) => {
    // Extract imported functions and data
    const { LINKS } = linksModule;
    const { initMenuToggle, initLanguageSwitcher } = componentsModule;
    const { buildProjects } = projectsModule;
    const { buildContacts } = contactsModule;

    // Translation data for bilingual support
    const translations = {
      en: {
        'sidebar-name': 'Tharindu',
        'sidebar-tagline': 'Web Developer & Designer',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'page-title': 'My Projects',
        'page-subtitle': 'A collection of my recent work and projects',
        'footer-text': `${LINKS.site?.copyright || '© 2025 Tharindu. All rights reserved.'} ${LINKS.site?.version || ''}`
      },
      si: {
        'sidebar-name': 'තරින්දු',
        'sidebar-tagline': 'වෙබ් සංවර්ධක සහ නිර්මාණකරු',
        'nav-projects': 'ව්‍යාපෘති',
        'nav-contact': 'සම්බන්ධ වන්න',
        'page-title': 'මගේ ව්‍යාපෘති',
        'page-subtitle': 'මගේ මෑත ව්‍යාපෘති',
        'footer-text': `${(LINKS.site?.copyright || '© 2025 Tharindu. All rights reserved.').replace("Tharindu","තරින්දු")} ${LINKS.site?.version || ''}`
      }
    };

    // Initialize app when DOM is ready
    function initializeApp() {
      console.log('Initializing app with fresh data...');
      
      // Initialize menu toggle functionality
      initMenuToggle();
      
      // Initialize language switcher
      initLanguageSwitcher(translations);

      // Build projects grid if on projects page
      if (document.getElementById('projectsGrid')) {
        buildProjects();
        console.log('Projects loaded');
      }

      // Build contacts grid if on contact page
      if (document.getElementById('contactGrid')) {
        buildContacts();
        console.log('Contacts loaded');
      }
    }

    // Check if DOM is already loaded
    if (document.readyState === 'loading') {
      // DOM is still loading, wait for it
      document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
      // DOM is already ready, initialize immediately
      initializeApp();
    }
  })
  .catch(err => {
    console.error('Error loading modules:', err);
    // Show error to user
    document.body.innerHTML += `
      <div style="position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);
                  background:#f44336;color:#fff;padding:20px;border-radius:10px;
                  text-align:center;z-index:9999;">
        <h3>⚠️ Error Loading Page</h3>
        <p>Failed to load resources. Please refresh the page.</p>
        <button onclick="location.reload()" style="margin-top:10px;padding:10px 20px;
                background:#fff;color:#f44336;border:none;border-radius:5px;
                cursor:pointer;font-weight:bold;">
          Refresh Page
        </button>
      </div>
    `;
  });

// Force reload every resource on page visibility change
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    console.log('Page became visible - checking for updates');
    // Optional: Add logic here to check for updates
  }
});

// Disable browser cache programmatically
if ('caches' in window) {
  caches.keys().then(function(names) {
    for (let name of names) {
      caches.delete(name);
      console.log('Cache deleted:', name);
    }
  });
}

// Log cache buster value for debugging
console.log('Cache buster:', cacheBuster);
console.log('Page loaded at:', new Date().toLocaleTimeString());