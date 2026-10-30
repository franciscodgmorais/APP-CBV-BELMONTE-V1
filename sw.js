/* CBV BELMONTE — cache local + mosaicos cartográficos já consultados.
   Nota: não descarrega em massa mosaicos do OpenStreetMap. Guarda apenas os mosaicos
   que o utilizador efetivamente abre, respeitando as condições do fornecedor. */
const VERSION = 'cbv-belmonte-offline-v1';
const SHELL = [
  './', './index.html', './logo-cbv-belmonte.png', './frota-cbv-belmonte.jpg',
  './rede-estradas-belmonte.jpg', './dados/hidrantes-regadio.geojson',
  './dados/hidrantes-regadio.gpx'
];
const TILE_CACHE = 'cbv-map-tiles-v1';
const ASSET_CACHE = 'cbv-external-assets-v1';
const TILE_HOSTS = ['tile.openstreetmap.org', 'server.arcgisonline.com'];
const ASSET_HOSTS = ['unpkg.com'];

self.addEventListener('install', event => event.waitUntil((async () => {
  const cache = await caches.open(VERSION);
  await Promise.all(SHELL.map(async path => {
    try { const response = await fetch(path, {cache:'reload'}); if (response.ok) await cache.put(path, response); } catch (_) {}
  }));
  await Promise.all([
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
  ].map(async url => {
    try { const response = await fetch(url, {mode:'cors'}); if (response.ok) { const c = await caches.open(ASSET_CACHE); await c.put(url, response); } } catch (_) {}
  }));
  await self.skipWaiting();
})()));

self.addEventListener('activate', event => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter(key => key.startsWith('cbv-belmonte-') && ![VERSION,TILE_CACHE,ASSET_CACHE].includes(key)).map(key => caches.delete(key)));
  await self.clients.claim();
})()));

async function trimTileCache(cache, maxEntries=800) {
  const keys = await cache.keys();
  if (keys.length > maxEntries) {
    for (const key of keys.slice(0, keys.length - maxEntries)) await cache.delete(key);
  }
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  const isTile = TILE_HOSTS.includes(url.hostname);
  const isExternalAsset = ASSET_HOSTS.includes(url.hostname) && /leaflet/i.test(url.pathname);

  if (isTile) {
    event.respondWith((async () => {
      const cache = await caches.open(TILE_CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response.ok || response.type === 'opaque') { await cache.put(request, response.clone()); await trimTileCache(cache); }
        return response;
      } catch (_) { return new Response('', {status:504, statusText:'Mosaico não disponível offline'}); }
    })());
    return;
  }

  if (isExternalAsset) {
    event.respondWith((async () => {
      const cache = await caches.open(ASSET_CACHE);
      const cached = await cache.match(request);
      if (cached) return cached;
      try { const response = await fetch(request); if (response.ok) await cache.put(request, response.clone()); return response; }
      catch (_) { return cached || Response.error(); }
    })());
    return;
  }

  if (url.origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cache = await caches.open(VERSION);
    const cached = await cache.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok && request.destination !== 'document') await cache.put(request, response.clone());
      return response;
    } catch (_) {
      if (request.mode === 'navigate') return (await cache.match('./index.html')) || Response.error();
      return Response.error();
    }
  })());
});
