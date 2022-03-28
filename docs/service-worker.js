// キャッシュファイルの指定
var CACHE_NAME = "pwa-mobile-caches";
var urlsToCache = [
    "./offline.htm",
    "./help/android.png",
    "./help/iphone.png",
];

// インストール処理
self.addEventListener("install", function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});
// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});
//メッセージを受け取ったとき
self.addEventListener('message', function(event) {
    switch (event.data) {
        case 'updateCache':
            event.waitUntil(
                caches
                .open(CACHE_NAME)
                .then(function(cache){
                    return cache.addAll(urlsToCache);
                })
            );
            break;
        default:
            break;
    }
});