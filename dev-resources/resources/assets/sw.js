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
    "revision": "736b9acf821361aac1019e9e4919e60c"
  },
  {
    "url": "js/manifest.edn",
    "revision": "d29be466148d2936fc7b9c7a59ba2227"
  },
  {
    "url": "manifest.json",
    "revision": "9301ad50a79342b554d3e66b0a0075c6"
  }
]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
