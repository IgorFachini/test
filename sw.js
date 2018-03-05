var mainCaches = [`test4`];
var urlsToCache = ["./", "./css/main.css", "./js/main.js", "./p.png"];

self.addEventListener("install", function(event) {
  // Perform install steps
  self.skipWaiting();
  event.waitUntil(
    caches.open(mainCaches[0]).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
  var cacheWhitelist = mainCaches;

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      ).then(function() {
        self.skipWaiting();
      });
    })
  );
});

// self.addEventListener("fetch", event => {
//   const url = new URL(event.request.url);
//   console.log("fetch", url);
//   // serve the cat SVG from the cache if the request is
//   // same-origin and the path is '/dog.svg'
//   if (url.origin == location.origin && url.pathname == "/PWA/test/logo.png") {
//     event.respondWith(caches.match("./p.png"));
//   }
// });


// when the browser fetches a url
self.addEventListener('fetch', function(event) {
  // either respond with the cached object or go ahead and fetch the actual url
  event.respondWith(
      caches.match(event.request).then(function(response) {
          if (response) {
              console.log('Retrieved from cache', response.url);
              // retrieve from cache
              return response;
          }
          // fetch as normal
          return fetch(event.request);
      })
  );
});
// self.addEventListener("fetch", function(event) {
//   console.log("fetch", event);
//   event.respondWith(
//     caches.match(event.request).then(function(response) {
//       // Cache hit - return response
//       if (response) {
//         return response;
//       }

//       // IMPORTANT: Clone the request. A request is a stream and
//       // can only be consumed once. Since we are consuming this
//       // once by cache and once by the browser for fetch, we need
//       // to clone the response.
//       var fetchRequest = event.request.clone();

//       return fetch(fetchRequest).then(function(response) {
//         // Check if we received a valid response
//         if (!response || response.status !== 200 || response.type !== "basic") {
//           return response;
//         }

//         // IMPORTANT: Clone the response. A response is a stream
//         // and because we want the browser to consume the response
//         // as well as the cache consuming the response, we need
//         // to clone it so we have two streams.
//         var responseToCache = response.clone();

//         caches.open(mainCaches[0]).then(function(cache) {
//           cache.put(event.request, responseToCache);
//         });

//         return response;
//       });
//     })
//   );
// });
