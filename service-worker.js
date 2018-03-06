"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","6e06ba276c701f9800f9ed9ce8ecd2df"],["/static/css/main.62cecb67.css","c71a15370437cac6094384a5ff9f3efd"],["/static/js/main.cafe9944.js","434d8f5daed42a373be38eccdba95c94"],["/static/media/1.92029cfd.jpg","92029cfdc1ae3b11271402fddfb9db8b"],["/static/media/2.7afb8b68.jpg","7afb8b68a5316cd3e108686259a0e55f"],["/static/media/3.19d901aa.jpg","19d901aaf0223714008878572ce342d5"],["/static/media/arrows.b4fc690c.svg","b4fc690cab833798c96c0f6c8e4cf093"],["/static/media/availablemobile.c44c3d1d.png","c44c3d1d8e1e608bec2489c448720812"],["/static/media/close-x.edeef416.png","edeef4168343ed0619aba3ef79e65082"],["/static/media/event_calendar.c35115ba.png","c35115baea2a81f6a604ea19c6a69de5"],["/static/media/fackbook-icon.cfff9089.png","cfff90899636b39d836c690cd7cba68a"],["/static/media/featuremobile.c02dbef9.png","c02dbef954765616d990e6e391e170bf"],["/static/media/groupstar_big.c6572a70.png","c6572a709e114b950b1377f42235b030"],["/static/media/icomoon.027292e8.svg","027292e89495f176987c3fd1d3563ba3"],["/static/media/icomoon.4267c8ce.ttf","4267c8ce63dfa02b206be94552e612e4"],["/static/media/icomoon.d9b31276.woff","d9b3127697bdd400fd26742176e6c7e6"],["/static/media/icomoon.f1c2dae0.eot","f1c2dae028e506f96dac2155bf57177a"],["/static/media/left.842be406.png","842be406e811d7bbeacd16d20342a762"],["/static/media/main-image1.5732ed33.png","5732ed331d140bd8b0f88522890dd56f"],["/static/media/right.feef3b17.png","feef3b1702875c1de99d9ba0c07be9ec"],["/static/media/signup_phone.17d79839.png","17d798391327148a9f200892110b1d17"],["/static/media/signup_phone_full.86dce056.png","86dce056dc802158b8ac39c6035fda51"],["/static/media/twitter-logo.46f08179.png","46f0817959b2b6e4d4022ddf0805adf3"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var c="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(c,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});