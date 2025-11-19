const CACHE_NAME = 'tharindu-cache-v2'; // Updated version
const ASSETS = [
  './',
  './index.html',
  './contact.html',
  './assets/css/style.css',
  './assets/js/main.js',
  './assets/js/components.js',
  './assets/js/projects.js',
  './assets/js/contacts.js',
  './assets/js/links.js',
  './assets/icons/profile.jpg',
  './manifest.json'
];

self.addEventListener('install', e => {
  console.log('SW Install');
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS).catch(err => {
        console.error('Cache addAll failed:', err);
      });
    })
  );
});

self.addEventListener('activate', e => {
  console.log('SW Activate');
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).catch(() => {
        if (e.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});