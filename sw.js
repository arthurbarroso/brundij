importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.routing.registerRoute(
    new RegExp('https:.*\.(css|js)'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'cdn-cache'
    })
  )

  workbox.routing.registerRoute(
    new RegExp('https://fonts.*'),
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'cdn-font-cache'
    })
  )
  workbox.precaching.precacheAndRoute([
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
