// Força instalação do novo service worker
self.addEventListener('install', event => {
  console.log('Service Worker instalado!');
  self.skipWaiting(); // ativa imediatamente o novo SW
});

// Ativa o service worker imediatamente em todas as abas
self.addEventListener('activate', event => {
  console.log('Service Worker ativado!');
  event.waitUntil(clients.claim()); // garante que todos os clientes usem o novo SW
});

// Intercepta requisições e força sempre buscar a versão mais nova
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
