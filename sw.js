self.addEventListener('install', (event) => {
  console.log('SW instalado');
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Apenas deixa passar, sem cache por enquanto para não dar erro
  event.respondWith(fetch(event.request));
});
