const staticCacheName = 'LifeSAVERSv1.0';
const assets = [
    '/',
    '/index.html',
    "/src/index.js",
    "/static/js/bundle.js",
    "/static/js/0.chunk.js",
    "/static/js/main.chunk.js",
    "/manifest.json",
    "/favicon.ico",
    "/static/media/Tibetan%20Gong.ef556d70.mp3",
];

self.addEventListener('install', (event) => {
    //console.log("[Service Worker] Installing Service Worker...", event);
    event.waitUntil(
        caches.open(staticCacheName).then(cache => {
            cache.addAll(assets)
        })
    )
})


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then(resp=>{
            if (resp){
                return resp
            }
        })
    )
})
