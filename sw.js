const CACHE = 'camping-v102';

// Solo se precarga la interfaz esencial. Las fotografías, los carnets PDF y
// las insignias se guardan cuando se consultan para que la primera visita sea
// rápida y no obligue a descargar decenas de megabytes.
const CORE_ASSETS = [
  './',
  'index.html',
  'styles.css',
  'data.js',
  'drive-content.js',
  'drive-videos.js',
  'channel-videos.js',
  'pro-guide.js',
  'car-guide-pro.js',
  'car-experience.js',
  'backpacking-experience.js',
  'bushcraft-experience.js',
  'ultralight-experience.js',
  'app.js',
  'modes.js',
  'manada-progress.js',
  'manada-camp.js',
  'tropa-progress.js',
  'tropa-camp.js',
  'admin.js',
  'data/contenido-sitio.json',
  'manifest.webmanifest',
  'robots.txt',
  'sitemap.xml',
  'assets/click-madera.wav',
  'assets/menu-background.webp',
  'assets/logo.png',
  'assets/app-icon-192.png',
  'assets/app-icon-512.png',
  'assets/menu-icons/camping-coche.webp',
  'assets/menu-icons/mochilero.webp',
  'assets/menu-icons/bushcraft.webp',
  'assets/menu-icons/ultraligera.webp',
  'assets/menu-icons/tecnicas.webp',
  'assets/menu-icons/reviews-v2.webp'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (new URL(request.url).pathname.endsWith('/data/contenido-sitio.json')) {
    event.respondWith(fetch(request, { cache: 'no-store' }).catch(() => caches.match('data/contenido-sitio.json', { ignoreSearch: true })));
    return;
  }

  event.respondWith(
    fetch(request)
      .then(response => {
        if (response.ok) {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      })
      .catch(async () => {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (request.mode === 'navigate') return caches.match('index.html');
        return Response.error();
      })
  );
});
