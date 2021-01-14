
const doCache = false;
const CACHE_NAME = 'pwa-cache';

self.addEventListener('activate', (event) => {
  const cacheWhiteList = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then((keyList) => Promise.all(keyList.map((key) => {
        if (!cacheWhiteList.includes(key)) {
          console.log(`Deleting Cache: ${key}`);
          return cache.delete(key);
        }
      }))),
  );
});

self.addEventListener('install', (event) => {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then((cache) => {
          fetch('manifest.json')
            .then((response) => {
              response.json();
            })
            .then((assets) => {
              const urlToCache = [
                '/',
                assets['bundle.js'],
              ];
              cache.addAll(urlToCache);
              console.log('Cached');
            });
        }),
    );
  }
});

self.addEventListener('fetch', (event) => {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      }),
    );
  }
});
