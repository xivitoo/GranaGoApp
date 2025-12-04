const CACHE_NAME = 'granago-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './css/styles.css',
  './js/main.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Archivos cacheados correctamente');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Si está en caché, lo devuelve, si no, lo pide a internet
        return response || fetch(event.request);
      })
  );
});