// sw.js — No Caching, Always Live Response

// Activate immediately
self.addEventListener("install", (e) => {
  self.skipWaiting();
});

// Take control immediately
self.addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

// Always fetch from network, never use or save cache
self.addEventListener("fetch", (event) => {
  event.respondWith(fetch(event.request));
});
