if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const t=s=>l(s,n),o={module:{uri:n},exports:u,require:t};e[n]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(r(...s),u)))}}define(["./workbox-dd21dd66"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/_id.17ad2991.js",revision:null},{url:"assets/_id.2367de67.js",revision:null},{url:"assets/Account.2ecedf11.js",revision:null},{url:"assets/AppHolder.87aa44ec.js",revision:null},{url:"assets/AuthHolder.111cd66c.js",revision:null},{url:"assets/ChecklistsTable.ed9247f4.js",revision:null},{url:"assets/ClientError.740520bf.js",revision:null},{url:"assets/createVueComponent.12d7077d.js",revision:null},{url:"assets/ForgotPassword.f53c5f3b.js",revision:null},{url:"assets/Home.fa420841.js",revision:null},{url:"assets/index.1fcb0f53.js",revision:null},{url:"assets/index.5902a74d.css",revision:null},{url:"assets/index.5a4feb33.js",revision:null},{url:"assets/index.8c7fcc53.js",revision:null},{url:"assets/loader-2.0652a3c4.js",revision:null},{url:"assets/Login.a304ff40.js",revision:null},{url:"assets/paymentCancel.51f282e5.js",revision:null},{url:"assets/paymentSuccess.97314d15.js",revision:null},{url:"assets/plus.d021a9a1.js",revision:null},{url:"assets/query.checklist.6f8adba9.js",revision:null},{url:"assets/Register.d3da95d8.js",revision:null},{url:"assets/RouteHolder.8957e64c.js",revision:null},{url:"assets/trash-2.acf5b66a.js",revision:null},{url:"assets/useSocket.4eb3b914.js",revision:null},{url:"assets/x.752848a9.js",revision:null},{url:"index.html",revision:"77809726f3b6fb085fcb53859f402d14"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"manifest.webmanifest",revision:"3eeac99cb85b1bca0bc9b78e89d4ea01"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));