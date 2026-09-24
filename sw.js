const CACHE='camping-v16';
const ASSETS=['./','index.html','styles.css','data.js','drive-content.js','drive-videos.js','channel-videos.js','pro-guide.js','app.js','modes.js','assets/menu-principal-v2.png','assets/zona-scout.png','assets/logo.png','assets/interior-ultraligera.png','assets/guia-analitica.pdf'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||new URL(e.request.url).origin!==self.location.origin)return;e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy))}return r}).catch(()=>caches.match(e.request)))});
