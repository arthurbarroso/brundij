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
  {
    "url": "index.html",
    "revision": "418ed226d24df6f8ccfc12cdf009683b"
  },
  {
    "url": "js/app.js",
    "revision": "277bc9753666c53c63ef1ee2cee0b552"
  },
  {
    "url": "js/manifest.edn",
    "revision": "ba012c28024f2277bf17e013b1a97504"
  },
  {
    "url": "manifest.json",
    "revision": "9301ad50a79342b554d3e66b0a0075c6"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
