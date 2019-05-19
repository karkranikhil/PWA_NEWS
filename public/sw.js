
var cacheName = 'pwa-news';
var dataCacheName = 'pwa-news1';

var cachedFiles = [
    '/',
    '/index.html',
    '/manifest.json',
    '/src/*',
    '/images'
];
  

self.addEventListener('install', function(evt){
    console.log('Service Worker Install Event');
    //Add the file to the cache
    evt.waitUntil(
        caches.open(cacheName).then(function(cache){
            console.log('Caching Files');
            return cache.addAll(cachedFiles);
        }).then(function(){
            return self.skipWaiting();
        }).catch(function(err){
            console.log('Cache Failed', err);
        })    
    );
});

self.addEventListener('activate', function(evt){
    console.log('Service Worker Activated');
    evt.waitUntil(
       caches.keys().then(function(keyList){
           return Promise.all(keyList.map(function(key){
               if(key !== cacheName){
                   console.log('Removing Old Cache', key);
                   return caches.delete(key)
               }
           }));
       })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(evt){
    console.log('Fetch Event ' + evt.request.url);
  var dataUrl = 'https://newsapi.org/v2/everything?q=bitcoin&from=2019-04-18&sortBy=publishedAt&apiKey=b84166fa08d94634a8f0b29d5314afba';
  if (evt.request.url.indexOf(dataUrl) > -1) {
    evt.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(evt.request).then(function(response){
          cache.put(evt.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    evt.respondWith(
      caches.match(evt.request).then(function(response){
          return response || fetch(evt.request);
      })
   );
  }
    
});

