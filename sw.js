const CACHE_NAME = 'tharindu-cache-v1';
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
  './manifest.json'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).catch(() => caches.match('./index.html'));
    })
  );
});
