if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const o=e=>s(e,c),f={module:{uri:c},exports:n,require:o};i[c]=Promise.all(a.map((e=>f[e]||o(e)))).then((e=>(r(...e),n)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6uA5A-7IzVjerZcer9v6U/_buildManifest.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/6uA5A-7IzVjerZcer9v6U/_middlewareManifest.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/6uA5A-7IzVjerZcer9v6U/_ssgManifest.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/929-4b3f96b266cc1326.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/990-459d4621bfb3fbc3.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/ea88be26.9c1bc965bb5248dc.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/framework-b2b803b7657b42a9.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/main-74bde068080c8fa2.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/pages/404-a5a43e71047cc1a9.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/pages/_app-39ffd6f774405a1f.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/chunks/webpack-3813eaf64fffb3be.js",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/css/0ef2e08138eec0c3.css",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/css/25fd06b074fffb95.css",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/css/c6d5c1504e3d5025.css",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Black.707e8663.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-BlackItalic.1fef1822.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Bold.dc7066a5.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-BoldItalic.c1024c36.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Light.d7e98823.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-LightItalic.e4a91e14.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Medium.5111882c.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-MediumItalic.be217c2e.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Regular.909f29a1.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-RegularItalic.00b20aab.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Semibold.63d76c8c.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-SemiboldItalic.a958d780.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-Thin.271aa736.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/Calibre-ThinItalic.a449c255.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-Bold.361c6dbd.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-BoldItalic.a328fd9b.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-ExtraBold.9a496520.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-ExtraBoldItalic.e0c56c41.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-Italic.8715f23e.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-Medium.56a03373.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-MediumItalic.08700a5f.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/_next/static/media/JetBrainsMono-Regular.0bb0fc01.woff2",revision:"6uA5A-7IzVjerZcer9v6U"},{url:"/favicons/android-chrome-192x192.png",revision:"60adb84399df73322ea9336445b17763"},{url:"/favicons/android-chrome-512x512.png",revision:"5a8e97eb80820733baefaa0efd134a18"},{url:"/favicons/apple-touch-icon.png",revision:"391eaeb483429aab9dd273f6d808a7e0"},{url:"/favicons/favicon-16x16.png",revision:"b02874a35570d24b994f59e17bace40a"},{url:"/favicons/favicon-32x32.png",revision:"5bea6fb0be8abaa69a84598cbdb343ab"},{url:"/favicons/favicon.ico",revision:"61163a93ee1d0c14e60779e466003e18"},{url:"/favicons/site.webmanifest",revision:"03f454ba8ef22393aca0e46eccb50e67"},{url:"/fonts/Calibre/Calibre-Black.woff2",revision:"36ffd75d821e3d35f0260e7ee71f2294"},{url:"/fonts/Calibre/Calibre-BlackItalic.woff2",revision:"57442766c282f7f2243c7123d0fc0b33"},{url:"/fonts/Calibre/Calibre-Bold.woff2",revision:"87cc6590c65275a830c12acc9817874c"},{url:"/fonts/Calibre/Calibre-BoldItalic.woff2",revision:"2efc6f2bac2d3c720aab0a3dca82463a"},{url:"/fonts/Calibre/Calibre-Light.woff2",revision:"183de736efe789394f26ed013b0b5cdd"},{url:"/fonts/Calibre/Calibre-LightItalic.woff2",revision:"f34c1430353885b55d271d473235eb6a"},{url:"/fonts/Calibre/Calibre-Medium.woff2",revision:"46b36969c7bb1d7ed4c8253e8f274788"},{url:"/fonts/Calibre/Calibre-MediumItalic.woff2",revision:"3df14639dd2cb07c83bd39707d70910f"},{url:"/fonts/Calibre/Calibre-Regular.woff2",revision:"b63c62e591d0c8fbe2c8f009883346d5"},{url:"/fonts/Calibre/Calibre-RegularItalic.woff2",revision:"35657aa2d12ff78e3d8a8a5ba28c2c35"},{url:"/fonts/Calibre/Calibre-Semibold.woff2",revision:"d8b856473a51d7eec2a9bccf2fbea54c"},{url:"/fonts/Calibre/Calibre-SemiboldItalic.woff2",revision:"8f3e4b3eaed73e67bbc4fc81f308a35f"},{url:"/fonts/Calibre/Calibre-Thin.woff2",revision:"7d7d9bd8558b1df58d4682d2b1be7d9e"},{url:"/fonts/Calibre/Calibre-ThinItalic.woff2",revision:"dd10d58f7aa26b4de8c8ab98f984f030"},{url:"/fonts/Calibre/_Calibre.scss",revision:"7cefd863c6abad86373661d9a61e3daa"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Bold.woff2",revision:"63a1019d2b51b21694f850aeb9bc1018"},{url:"/fonts/JetBrainsMono/JetBrainsMono-BoldItalic.woff2",revision:"2ae6bcd7881599d63204b10fa5a341d1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBold.woff2",revision:"8e7024a8af502c88f27b14f5b908d2a1"},{url:"/fonts/JetBrainsMono/JetBrainsMono-ExtraBoldItalic.woff2",revision:"2f5619c1232f40a3db6c0f9e969bd7cc"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Italic.woff2",revision:"25d08cca52c3530b9dfb8cb9f50a06d6"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Medium.woff2",revision:"cb46fdd3d9a6162984ee0840fb84bdfe"},{url:"/fonts/JetBrainsMono/JetBrainsMono-MediumItalic.woff2",revision:"f1a3a53b5aa2bb3ddea185f16b8085cf"},{url:"/fonts/JetBrainsMono/JetBrainsMono-Regular.woff2",revision:"29db71a58086c177f6e2332206ec4e9c"},{url:"/fonts/JetBrainsMono/_JetBrainsMono.scss",revision:"4eb507a781ed5cd8484f27324f00c35f"},{url:"/footer-curve.svg",revision:"389f5016e80c7394f1ac0f67c0bd2e8b"},{url:"/footer/background.png",revision:"c445b49a4e471ec1dbb4f3de6195035d"},{url:"/footer/cyclist.gif",revision:"4421150abf00f9197ea79118dec916ea"},{url:"/footer/volkswagen.gif",revision:"4184b68ddaed02cebed2d3aed6239868"},{url:"/left-pattern.svg",revision:"636a902d520fe7fcd87845009d60a620"},{url:"/logo1.png",revision:"8ca9f194a288cd1822761576e53bf298"},{url:"/lottie/lottie.json",revision:"2e9364d63c2acb9cac2f92b6a1626185"},{url:"/manifest.json",revision:"5f30f6fb7b00cfa7d4e9c7925149eea1"},{url:"/project-bg.svg",revision:"4410e8a36a86c9b96af57cebbb90da9f"},{url:"/projects/project1.png",revision:"d2aff5d33b4d604e85c6cecb10e027a4"},{url:"/projects/project2.png",revision:"6b84506ea818b28255de2066179c3e24"},{url:"/projects/project3.png",revision:"b4a096017ea3408f69155e30dc4d1361"},{url:"/projects/project4.png",revision:"89e2fd009312859ba1b2507150640b0c"},{url:"/projects/project5.png",revision:"f0d2b04df16c6b1ae4c3eda7e4b8b082"},{url:"/projects/tech/alan.svg",revision:"7ebb30121ac8f7379361f62946bce939"},{url:"/projects/tech/chakra-ui.svg",revision:"cadc6b5ba38acb59809f32ec067c291c"},{url:"/projects/tech/firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/projects/tech/mapbox.svg",revision:"caa9aca22ebeb8e7bc0550a2a4efcdf5"},{url:"/projects/tech/metamask.svg",revision:"fbf33967fa244d21d61fb85f233fc331"},{url:"/projects/tech/mongodb.svg",revision:"af804f594ce7af2e48cec3a31283c679"},{url:"/projects/tech/moralis.svg",revision:"1cf323f2c5d5a26356299e0f13871145"},{url:"/projects/tech/nextjs.svg",revision:"b7442d0c0f25545250db94b2ba290578"},{url:"/projects/tech/react.svg",revision:"ebfb3a104c4ad193bf41e7eb5ccb1e29"},{url:"/projects/tech/redux.svg",revision:"5303018d945f48c8d8eb00e250e72776"},{url:"/projects/tech/sanity.io.svg",revision:"e2fdcf374f1e2af25baa831c8a7bc414"},{url:"/projects/tech/sass.svg",revision:"b446ca5a397c1ef6fb94cd02c4e94335"},{url:"/projects/tech/stripe.svg",revision:"32bbcf78a6343325c6fe43ff16a5ba4d"},{url:"/projects/tech/styledcomponents.svg",revision:"837c6b955af0093e5c7c0361bfac951a"},{url:"/projects/tech/tailwindcss.svg",revision:"9796f161fbe0845caa30ff1df54afefe"},{url:"/projects/tech/typescript.svg",revision:"592b2c1ebe113ba914fe260f6647c60b"},{url:"/right-pattern.svg",revision:"537ba8cb190abb1ea2ad3de93f6e6508"},{url:"/skills/Commercetools.svg",revision:"b29cec6a3e8efa9717fbba2c2376f51d"},{url:"/skills/Firebase.svg",revision:"007bad50400405f896843d18f305d894"},{url:"/skills/Java.svg",revision:"d2c2d862b40d01e0baf239213f9a2a91"},{url:"/skills/Microservices.svg",revision:"80a980d125a73620d3222aef69fab56e"},{url:"/skills/MySQL.svg",revision:"3aefea6f0041d2421f84aa95a098e542"},{url:"/skills/Spring Boot.svg",revision:"03caf502dd101ccd4f130e13164eec57"},{url:"/skills/Spring JPA.svg",revision:"b4df9017872a12482afcef7c3b01ea91"},{url:"/skills/Spring MVC.svg",revision:"dc377f075c40b93e3cf1db34c6d0da88"},{url:"/skills/Spring Security.svg",revision:"bcbb5f729fa161b9f7ff859a72ed8474"},{url:"/skills/chakra-ui.svg",revision:"cadc6b5ba38acb59809f32ec067c291c"},{url:"/skills/cpp.svg",revision:"8a0a10bc2c6d0af6da7cd71a8806d256"},{url:"/skills/css.svg",revision:"a70a7e3e545f3ddc5707d4c4da8cfa17"},{url:"/skills/figma.svg",revision:"7c90bba025bd1853426a1a5d8fc86b2d"},{url:"/skills/git.svg",revision:"8f888496f4ef70c566e7d50a1b197594"},{url:"/skills/html.svg",revision:"7cd33616b792466b289d6a7468c1afb0"},{url:"/skills/mongodb.svg",revision:"576b09ba131e9242f876cdf3f1b98ecc"},{url:"/skills/moralis.svg",revision:"f09e988236496235546dadb9564eaaa5"},{url:"/skills/nextjs.svg",revision:"dadd8bb8365609a325cfaf4bdae54a63"},{url:"/skills/nodejs.svg",revision:"170363c3fe2f148a046986ccb1d07f01"},{url:"/skills/python.svg",revision:"192a5a42443ed2a20a0f559fb0def72e"},{url:"/skills/react.svg",revision:"1470b028744b39844cff0978c471f78c"},{url:"/skills/redux.svg",revision:"c9697122945cbe411cf891d09ccf5543"},{url:"/skills/sanity-io.svg",revision:"e2fdcf374f1e2af25baa831c8a7bc414"},{url:"/skills/stripe.svg",revision:"3928493cceb093b9feedf545b436b41f"},{url:"/skills/styledcomponents.svg",revision:"837c6b955af0093e5c7c0361bfac951a"},{url:"/skills/tailwindcss.svg",revision:"ecc93fbc84f1ba83dbd7222ad97f9ec4"},{url:"/skills/tanstack-query.svg",revision:"b12bcadc08a62987cffc7889ceb48905"},{url:"/skills/vite.svg",revision:"a59916067dcd00f50cdf31015e1f818c"},{url:"/skills/webpack.svg",revision:"3676010c00e567bdc429eb3b8e8c4721"},{url:"/sounds/charge-up.wav",revision:"663d6af2f4d8f32361ca44975b2c59db"},{url:"/sounds/disable-sound.mp3",revision:"cf602b2081a275a749d9631a5a72df0a"},{url:"/sounds/enable-sound.mp3",revision:"ad6c6f0fd8ac86f14c71d9bb906c77db"},{url:"/sounds/glug-a.mp3",revision:"438a61d8fcfa7c976afdfffbb19ae056"},{url:"/sounds/key1.wav",revision:"c7a96e8ca2b438598bfd87019330ab6f"},{url:"/sounds/key2.wav",revision:"11c235c6afa491d3a6899d55a314ccd7"},{url:"/sounds/key3.wav",revision:"da32d4d6458fabc316282dd3f086a358"},{url:"/sounds/key4.wav",revision:"28d23943f4268f0f7af496214e251db0"},{url:"/sounds/key5.wav",revision:"faa84c1a0b1d669e2044cd4ae960e5c2"},{url:"/sounds/key6.wav",revision:"74dc9ce3adec6cda7712690fdc09fd9e"},{url:"/sounds/pop-down.mp3",revision:"a0249d355a7e4bbba56b8af25c537184"},{url:"/sounds/song.mp3",revision:"79b1714e438e506e69543fdc994d0be7"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));