!function(){"use strict";const e=1615702505315,t=`cache${e}`,s=["/client/client.e32c6b4b.js","/client/inject_styles.5607aec6.js","/client/index.5a52fd1d.js","/client/index.b1904fb2.js","/client/recursion.99cd8fca.js","/client/promises.eac1a187.js","/client/proto.894360c4.js"].concat(["/service-worker-index.html","/ellipse-transformer.xsl","/favicon.png","/forsenpls.gif","/global.css","/logo-192.png","/logo-512.png","/manifest.json","/math-transformer.xsl","/original-math.xml","/original-svg.xml","/waytoodank.gif"]),n=new Set(s);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(s))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const s of e)s!==t&&await caches.delete(s);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const s=new URL(t.request.url),a=s.protocol.startsWith("http"),c=s.hostname===self.location.hostname&&s.port!==self.location.port,i=s.host===self.location.host&&n.has(s.pathname),o="only-if-cached"===t.request.cache&&!i;!a||c||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const s=await caches.open(`offline${e}`);try{const e=await fetch(t);return s.put(t,e.clone()),e}catch(e){const n=await s.match(t);if(n)return n;throw e}}(t.request))())}))}();
