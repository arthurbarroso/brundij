importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js"
);

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.routing.registerRoute("https://unpkg.com/react-toastify@8.0.2/dist/ReactToastify.css", new workbox.stategies.CacheFirst)

  workbox.precaching.precacheAndRoute([
  ]);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
