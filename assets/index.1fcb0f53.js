import{p as Pe,k as I,u as Ie,s as Le,E as ye,H as $e,U as je,_ as ge,r as V,o as E,c as S,a as v,t as O,F as Z,m as ee,e as Y,b as M,l as Re,w as De,d as Be}from"./index.8c7fcc53.js";import{R as Fe}from"./RouteHolder.8957e64c.js";import{T as ve}from"./trash-2.acf5b66a.js";import{L as Ne}from"./loader-2.0652a3c4.js";import{c as Ue}from"./createVueComponent.12d7077d.js";import{P as Ve}from"./plus.d021a9a1.js";var Me=Ue("ShoppingCartIcon",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);const Ge=Me,He=Pe`
    query {
        templates {
            id
            name
            items
        }
    }
`;let q=I(0);const N=I([]),be=()=>{const e=()=>(console.log("GetNumberOfTemplates",q.value),q.value),n=()=>N.value;return{GetNumberOfTemplates:e,GetTemplatesInCart:n,AddTemplateToCart:l=>{console.log("AddTemplateToCart",l),N.value.find(d=>d.id===l.id)?console.log("Template already in cart"):(q.value++,N.value.push(l),e())},DeleteTemplateFromCart:l=>{console.log("DeleteTemplateFromCart",l),q.value--;const s=N.value.findIndex(d=>d.name===l);console.log("index",s),s>-1&&N.value.splice(s,1)},DeleteAllTemplatesFromCart:()=>{console.log("DeleteAllTemplates"),q.value=0,n(),console.log("templatesInCart after",N.value)}}};var U={};const qe="@vue-stripe/vue-stripe",Ye="4.4.4",ze="Stripe Checkout & Elements for Vue.js",Xe="jofftiquez@gmail.com",Qe={build:"rollup -c",lint:"vue-cli-service lint --fix",prebuild:"rimraf dist",test:"jest"},We="dist/index.js",Je="dist",Ke={"@stripe/stripe-js":"^1.13.2","vue-coerce-props":"^1.0.0"},Ze={"@babel/cli":"^7.7.5","@babel/core":"^7.7.5","@babel/plugin-proposal-export-default-from":"^7.7.4","@babel/plugin-proposal-optional-chaining":"^7.10.4","@babel/plugin-transform-runtime":"^7.7.5","@babel/preset-env":"^7.7.5","@babel/preset-es2015":"^7.0.0-beta.53","@babel/runtime":"^7.7.5","@rollup/plugin-node-resolve":"^6.0.0","@vue/cli-plugin-eslint":"~4.5.0","@vue/cli-service":"^4.5.10","@vue/eslint-config-standard":"^5.1.2","babel-eslint":"^10.1.0","babel-minify":"^0.5.1","cross-env":"^6.0.3",eslint:"^6.8.0","eslint-plugin-import":"^2.20.2","eslint-plugin-node":"^11.1.0","eslint-plugin-promise":"^4.2.1","eslint-plugin-standard":"^4.0.0","eslint-plugin-vue":"^6.2.2",jest:"^24.9.0","lint-staged":"^9.5.0",rimraf:"^3.0.0",rollup:"^1.27.9","rollup-plugin-babel":"^4.3.3","rollup-plugin-commonjs":"^10.1.0","rollup-plugin-postcss":"^2.0.3","rollup-plugin-terser":"^5.1.3","rollup-plugin-uglify":"^6.0.3","rollup-plugin-vue":"^5.1.4","vue-template-compiler":"^2.6.11"},en={url:"https://github.com/vue-stripe/vue-stripe/issues"},nn={"pre-commit":"lint-staged"},tn="https://github.com/vue-stripe/vue-stripe#readme",rn=["vue","vuejs","stripe","checkout","payment"],on="MIT",sn={type:"git",url:"git@github.com:vue-stripe/vue-stripe.git"},an="typings/index.d.ts",ln={name:qe,version:Ye,description:ze,author:Xe,scripts:Qe,main:We,module:Je,dependencies:Ke,devDependencies:Ze,bugs:en,gitHooks:nn,homepage:tn,keywords:rn,license:on,"lint-staged":{"*.{js,jsx,vue}":["vue-cli-service lint","git add"]},repository:sn,typings:an};var Ee;Object.defineProperty(U,"__esModule",{value:!0});var ae="auto",cn=["auto","bg","cs","da","de","el","en","en-GB","es","es-419","et","fi","fr","fr-CA","hu","id","it","ja","lt","lv","ms","mt","nb","nl","pl","pt","pt-BR","ro","ru","sk","sl","sv","tr","zh","zh-HK","zh-TW"],pn=["auto","book","donate","pay"],un=["required","auto"],dn={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},mn=ln.version,z={name:"vue-stripe",version:mn,url:"https://vuestripe.com",partner_id:"pp_partner_IqtOXpBSuz0IE2"},hn={install:function(e,n){var r=n.pk,t=n.stripeAccount,c=n.apiVersion,l=n.locale,s=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:l});s.registerAppInfo(z),e.prototype.$stripe=s}};function fn(e,n){return e(n={exports:{}},n.exports),n.exports}var yn=fn(function(e){var n=function(r){var t,c=Object.prototype,l=c.hasOwnProperty,s=typeof Symbol=="function"?Symbol:{},d=s.iterator||"@@iterator",b=s.asyncIterator||"@@asyncIterator",u=s.toStringTag||"@@toStringTag";function g(i,o,p,m){var a=o&&o.prototype instanceof ne?o:ne,_=Object.create(a.prototype),D=new ie(m||[]);return _._invoke=function(T,H,y){var w=f;return function(P,B){if(w===G)throw new Error("Generator is already running");if(w===X){if(P==="throw")throw B;return de()}for(y.method=P,y.arg=B;;){var F=y.delegate;if(F){var k=ue(F,y);if(k){if(k===C)continue;return k}}if(y.method==="next")y.sent=y._sent=y.arg;else if(y.method==="throw"){if(w===f)throw w=X,y.arg;y.dispatchException(y.arg)}else y.method==="return"&&y.abrupt("return",y.arg);w=G;var A=h(T,H,y);if(A.type==="normal"){if(w=y.done?X:$,A.arg===C)continue;return{value:A.arg,done:y.done}}A.type==="throw"&&(w=X,y.method="throw",y.arg=A.arg)}}}(i,p,D),_}function h(i,o,p){try{return{type:"normal",arg:i.call(o,p)}}catch(m){return{type:"throw",arg:m}}}r.wrap=g;var f="suspendedStart",$="suspendedYield",G="executing",X="completed",C={};function ne(){}function Q(){}function j(){}var te={};te[d]=function(){return this};var re=Object.getPrototypeOf,W=re&&re(re(se([])));W&&W!==c&&l.call(W,d)&&(te=W);var R=j.prototype=ne.prototype=Object.create(te);function pe(i){["next","throw","return"].forEach(function(o){i[o]=function(p){return this._invoke(o,p)}})}function J(i){var o;this._invoke=function(p,m){function a(){return new Promise(function(_,D){(function T(H,y,w,P){var B=h(i[H],i,y);if(B.type!=="throw"){var F=B.arg,k=F.value;return k&&typeof k=="object"&&l.call(k,"__await")?Promise.resolve(k.__await).then(function(A){T("next",A,w,P)},function(A){T("throw",A,w,P)}):Promise.resolve(k).then(function(A){F.value=A,w(F)},function(A){return T("throw",A,w,P)})}P(B.arg)})(p,m,_,D)})}return o=o?o.then(a,a):a()}}function ue(i,o){var p=i.iterator[o.method];if(p===t){if(o.delegate=null,o.method==="throw"){if(i.iterator.return&&(o.method="return",o.arg=t,ue(i,o),o.method==="throw"))return C;o.method="throw",o.arg=new TypeError("The iterator does not provide a 'throw' method")}return C}var m=h(p,i.iterator,o.arg);if(m.type==="throw")return o.method="throw",o.arg=m.arg,o.delegate=null,C;var a=m.arg;return a?a.done?(o[i.resultName]=a.value,o.next=i.nextLoc,o.method!=="return"&&(o.method="next",o.arg=t),o.delegate=null,C):a:(o.method="throw",o.arg=new TypeError("iterator result is not an object"),o.delegate=null,C)}function Oe(i){var o={tryLoc:i[0]};1 in i&&(o.catchLoc=i[1]),2 in i&&(o.finallyLoc=i[2],o.afterLoc=i[3]),this.tryEntries.push(o)}function oe(i){var o=i.completion||{};o.type="normal",delete o.arg,i.completion=o}function ie(i){this.tryEntries=[{tryLoc:"root"}],i.forEach(Oe,this),this.reset(!0)}function se(i){if(i){var o=i[d];if(o)return o.call(i);if(typeof i.next=="function")return i;if(!isNaN(i.length)){var p=-1,m=function a(){for(;++p<i.length;)if(l.call(i,p))return a.value=i[p],a.done=!1,a;return a.value=t,a.done=!0,a};return m.next=m}}return{next:de}}function de(){return{value:t,done:!0}}return Q.prototype=R.constructor=j,j.constructor=Q,j[u]=Q.displayName="GeneratorFunction",r.isGeneratorFunction=function(i){var o=typeof i=="function"&&i.constructor;return!!o&&(o===Q||(o.displayName||o.name)==="GeneratorFunction")},r.mark=function(i){return Object.setPrototypeOf?Object.setPrototypeOf(i,j):(i.__proto__=j,u in i||(i[u]="GeneratorFunction")),i.prototype=Object.create(R),i},r.awrap=function(i){return{__await:i}},pe(J.prototype),J.prototype[b]=function(){return this},r.AsyncIterator=J,r.async=function(i,o,p,m){var a=new J(g(i,o,p,m));return r.isGeneratorFunction(o)?a:a.next().then(function(_){return _.done?_.value:a.next()})},pe(R),R[u]="Generator",R[d]=function(){return this},R.toString=function(){return"[object Generator]"},r.keys=function(i){var o=[];for(var p in i)o.push(p);return o.reverse(),function m(){for(;o.length;){var a=o.pop();if(a in i)return m.value=a,m.done=!1,m}return m.done=!0,m}},r.values=se,ie.prototype={constructor:ie,reset:function(i){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(oe),!i)for(var o in this)o.charAt(0)==="t"&&l.call(this,o)&&!isNaN(+o.slice(1))&&(this[o]=t)},stop:function(){this.done=!0;var i=this.tryEntries[0].completion;if(i.type==="throw")throw i.arg;return this.rval},dispatchException:function(i){if(this.done)throw i;var o=this;function p(H,y){return _.type="throw",_.arg=i,o.next=H,y&&(o.method="next",o.arg=t),!!y}for(var m=this.tryEntries.length-1;m>=0;--m){var a=this.tryEntries[m],_=a.completion;if(a.tryLoc==="root")return p("end");if(a.tryLoc<=this.prev){var D=l.call(a,"catchLoc"),T=l.call(a,"finallyLoc");if(D&&T){if(this.prev<a.catchLoc)return p(a.catchLoc,!0);if(this.prev<a.finallyLoc)return p(a.finallyLoc)}else if(D){if(this.prev<a.catchLoc)return p(a.catchLoc,!0)}else{if(!T)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return p(a.finallyLoc)}}}},abrupt:function(i,o){for(var p=this.tryEntries.length-1;p>=0;--p){var m=this.tryEntries[p];if(m.tryLoc<=this.prev&&l.call(m,"finallyLoc")&&this.prev<m.finallyLoc){var a=m;break}}a&&(i==="break"||i==="continue")&&a.tryLoc<=o&&o<=a.finallyLoc&&(a=null);var _=a?a.completion:{};return _.type=i,_.arg=o,a?(this.method="next",this.next=a.finallyLoc,C):this.complete(_)},complete:function(i,o){if(i.type==="throw")throw i.arg;return i.type==="break"||i.type==="continue"?this.next=i.arg:i.type==="return"?(this.rval=this.arg=i.arg,this.method="return",this.next="end"):i.type==="normal"&&o&&(this.next=o),C},finish:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.finallyLoc===i)return this.complete(p.completion,p.afterLoc),oe(p),C}},catch:function(i){for(var o=this.tryEntries.length-1;o>=0;--o){var p=this.tryEntries[o];if(p.tryLoc===i){var m=p.completion;if(m.type==="throw"){var a=m.arg;oe(p)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(i,o,p){return this.delegate={iterator:se(i),resultName:o,nextLoc:p},this.method==="next"&&(this.arg=t),C}},r}(e.exports);try{regeneratorRuntime=n}catch{Function("r","regeneratorRuntime = r")(n)}}),x=yn;function Se(e){return(Se=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(e)}var _e,Ae="https://js.stripe.com/v3",gn=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,me="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",vn=function(){for(var e=document.querySelectorAll('script[src^="'.concat(Ae,'"]')),n=0;n<e.length;n++){var r=e[n];if(gn.test(r.src))return r}return null},bn=function(e){var n=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",r=document.createElement("script");r.src="".concat(Ae).concat(n);var t=document.head||document.body;if(!t)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return t.appendChild(r),r},En=function(e,n){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.13.2",startTime:n})},le=null,Sn=function(e){return le!==null?le:le=new Promise(function(n,r){if(typeof window<"u")if(window.Stripe&&e&&console.warn(me),window.Stripe)n(window.Stripe);else try{var t=vn();t&&e?console.warn(me):t||(t=bn(e)),t.addEventListener("load",function(){window.Stripe?n(window.Stripe):r(new Error("Stripe.js not available"))}),t.addEventListener("error",function(){r(new Error("Failed to load Stripe.js"))})}catch(c){return void r(c)}else n(null)})},_n=function(e,n,r){if(e===null)return null;var t=e.apply(void 0,n);return En(t,r),t},An=function(e){var n=`invalid load parameters; expected object of shape

    {advancedFraudSignals: boolean}

but received

    `.concat(JSON.stringify(e),`
`);if(e===null||Se(e)!=="object")throw new Error(n);if(Object.keys(e).length===1&&typeof e.advancedFraudSignals=="boolean")return e;throw new Error(n)},we=!1,L=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];we=!0;var t=Date.now();return Sn(_e).then(function(c){return _n(c,n,t)})};L.setLoadParameters=function(e){if(we)throw new Error("You cannot change load parameters after calling loadStripe");_e=An(e)};/**
 * vue-coerce-props v1.0.0
 * (c) 2018 Eduardo San Martin Morote <posva13@gmail.com>
 * @license MIT
 */var wn={beforeCreate:function(){var e=this.$options.props;e&&(this._$coertions=Object.keys(e).filter(function(n){return e[n].coerce}).map(function(n){return[n,e[n].coerce]}))},computed:{$coerced:function(){var e=this;return this._$coertions.reduce(function(n,r){var t=r[0],c=r[1];return n[t]=c.call(e,e.$props[t]),n},{})}}},Cn={pk:{type:String,required:!0},mode:{type:String,validator:function(e){return["payment","subscription"].includes(e)}},lineItems:{type:Array,default:void 0},items:{type:Array},successUrl:{type:String,default:window.location.href},cancelUrl:{type:String,default:window.location.href},submitType:{type:String,validator:function(e){return pn.includes(e)}},billingAddressCollection:{type:String,default:"auto",validator:function(e){return un.includes(e)}},clientReferenceId:{type:String},customerEmail:{type:String},sessionId:{type:String},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:ae,coerce:function(e){return cn.includes(e)?e:(console.warn("VueStripe Warning: '".concat(e,"' is not supported by Stripe yet. Falling back to default '").concat(ae,"'.")),ae)}},shippingAddressCollection:{type:Object,validator:function(e){return Object.prototype.hasOwnProperty.call(e,"allowedCountries")}},disableAdvancedFraudDetection:{type:Boolean},stripeOptions:{type:Object,default:null}},xn={props:Cn,mixins:[wn],render:function(e){return e},methods:{redirectToCheckout:function(){var e,n,r;return x.async(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.$emit("loading",!0),this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},t.next=6,x.awrap(L(this.pk,e));case 6:if((n=t.sent).registerAppInfo(z),!this.sessionId){t.next=11;break}return n.redirectToCheckout({sessionId:this.sessionId}),t.abrupt("return");case 11:if(!this.lineItems||!this.lineItems.length||this.mode){t.next=14;break}return console.error("Error: Property 'mode' is required when using 'lineItems'. See https://stripe.com/docs/js/checkout/redirect_to_checkout#stripe_checkout_redirect_to_checkout-options-mode"),t.abrupt("return");case 14:return r={billingAddressCollection:this.billingAddressCollection,cancelUrl:this.cancelUrl,clientReferenceId:this.clientReferenceId,customerEmail:this.customerEmail,items:this.items,lineItems:this.lineItems,locale:this.$coerced.locale,mode:this.mode,shippingAddressCollection:this.shippingAddressCollection,submitType:this.submitType,successUrl:this.successUrl},t.abrupt("return",n.redirectToCheckout(r));case 18:t.prev=18,t.t0=t.catch(0),console.error(t.t0),this.$emit("error",t.t0);case 22:case"end":return t.stop()}},null,this,[[0,18]])}}};function kn(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}var Tn=kn;function he(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),r.push.apply(r,t)}return r}function On(e){for(var n=1;n<arguments.length;n++){var r=arguments[n]!=null?arguments[n]:{};n%2?he(Object(r),!0).forEach(function(t){Tn(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):he(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var Pn="card",In={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},elementsOptions:{type:Object,default:function(){return{}}},tokenData:{type:Object,default:function(){return{}}},disableAdvancedFraudDetection:{type:Boolean},classes:{type:Object,default:function(){return{}}},elementStyle:{type:Object,default:function(){return dn}},value:{type:String,default:void 0},hidePostalCode:Boolean,iconStyle:{type:String,default:"default",validator:function(e){return["solid","default"].includes(e)}},hideIcon:Boolean,disabled:Boolean},data:function(){return{loading:!1,stripe:null,elements:null,element:null,card:null}},computed:{form:function(){return document.getElementById("stripe-element-form")}},mounted:function(){var e,n,r=this;return x.async(function(t){for(;;)switch(t.prev=t.next){case 0:return this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},n={classes:this.classes,style:this.elementStyle,value:this.value,hidePostalCode:this.hidePostalCode,iconStyle:this.iconStyle,hideIcon:this.hideIcon,disabled:this.disabled},t.next=5,x.awrap(L(this.pk,e));case 5:this.stripe=t.sent,this.stripe.registerAppInfo(z),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Pn,n),this.element.mount("#stripe-element-mount-point"),this.element.on("change",function(c){var l=document.getElementById("stripe-element-errors");c.error?l.textContent=c.error.message:l.textContent="",r.onChange(c)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(c){var l,s,d,b;return x.async(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,r.$emit("loading",!0),c.preventDefault(),l=On({},r.element),r.amount&&(l.amount=r.amount),u.next=7,x.awrap(r.stripe.createToken(l,r.tokenData));case 7:if(s=u.sent,d=s.token,!(b=s.error)){u.next=15;break}return document.getElementById("stripe-element-errors").textContent=b.message,r.$emit("error",b),u.abrupt("return");case 15:r.$emit("token",d),u.next=22;break;case 18:u.prev=18,u.t0=u.catch(0),console.error(u.t0),r.$emit("error",u.t0);case 22:return u.prev=22,r.$emit("loading",!1),u.finish(22);case 25:case"end":return u.stop()}},null,null,[[0,18,22,25]])});case 17:case"end":return t.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};function Ce(e,n,r,t,c,l,s,d,b,u){typeof s!="boolean"&&(b=d,d=s,s=!1);const g=typeof r=="function"?r.options:r;let h;if(e&&e.render&&(g.render=e.render,g.staticRenderFns=e.staticRenderFns,g._compiled=!0,c&&(g.functional=!0)),t&&(g._scopeId=t),l?(h=function(f){(f=f||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||typeof __VUE_SSR_CONTEXT__>"u"||(f=__VUE_SSR_CONTEXT__),n&&n.call(this,b(f)),f&&f._registeredComponents&&f._registeredComponents.add(l)},g._ssrRegister=h):n&&(h=s?function(f){n.call(this,u(f,this.$root.$options.shadowRoot))}:function(f){n.call(this,d(f))}),h)if(g.functional){const f=g.render;g.render=function($,G){return h.call(G),f($,G)}}else{const f=g.beforeCreate;g.beforeCreate=f?[].concat(f,h):[h]}return r}const Ln=typeof navigator<"u"&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function xe(e){return(n,r)=>$n(n,r)}let ce;const fe={};function $n(e,n){const r=Ln?n.media||"default":e,t=fe[r]||(fe[r]={ids:new Set,styles:[]});if(!t.ids.has(e)){t.ids.add(e);let c=n.source;if(n.map&&(c+=`
/*# sourceURL=`+n.map.sources[0]+" */",c+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(n.map))))+" */"),t.element||(t.element=document.createElement("style"),t.element.type="text/css",n.media&&t.element.setAttribute("media",n.media),ce===void 0&&(ce=document.head||document.getElementsByTagName("head")[0]),ce.appendChild(t.element)),"styleSheet"in t.element)t.styles.push(c),t.element.styleSheet.cssText=t.styles.filter(Boolean).join(`
`);else{const l=t.ids.size-1,s=document.createTextNode(c),d=t.element.childNodes;d[l]&&t.element.removeChild(d[l]),d.length?t.element.insertBefore(s,d[l]):t.element.appendChild(s)}}}const jn=In;var ke=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-element-form"}},[n("div",{attrs:{id:"stripe-element-mount-point"}}),this._v(" "),this._t("stripe-element-errors",[n("div",{attrs:{id:"stripe-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Rn=[];ke._withStripped=!0;const Dn=function(e){e&&e("data-v-4dd8360e_0",{source:`





















































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement[data-v-4dd8360e] {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}
.StripeElement--focus[data-v-4dd8360e] {
  box-shadow: 0 1px 3px 0 #cfd7df;
}
.StripeElement--invalid[data-v-4dd8360e] {
  border-color: #fa755a;
}
.StripeElement--webkit-autofill[data-v-4dd8360e] {
  background-color: #fefde5 !important;
}
.hide[data-v-4dd8360e] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Card.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAsPA;;;EAGA;AACA;EACA,sBAAA;;EAEA,YAAA;;EAEA,kBAAA;;EAEA,6BAAA;EACA,kBAAA;EACA,uBAAA;;EAEA,+BAAA;EACA,yCAAA;EACA,iCAAA;AACA;AAEA;EACA,+BAAA;AACA;AAEA;EACA,qBAAA;AACA;AAEA;EACA,oCAAA;AACA;AAEA;EACA,aAAA;AACA",file:"Card.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-element-form">
      <div id="stripe-element-mount-point" />
      <slot name="stripe-element-errors">
        <div
          id="stripe-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  DEFAULT_ELEMENT_STYLE,
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'card';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    elementsOptions: {
      type: Object,
      default: () => ({}),
    },
    tokenData: {
      type: Object,
      default: () => ({}),
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
    // element specific options
    classes: {
      type: Object,
      default: () => ({}),
    },
    elementStyle: {
      type: Object,
      default: () => (DEFAULT_ELEMENT_STYLE),
    },
    value: {
      type: String,
      default: undefined,
    },
    hidePostalCode: Boolean,
    iconStyle: {
      type: String,
      default: 'default',
      validator: value => ['solid', 'default'].includes(value),
    },
    hideIcon: Boolean,
    disabled: Boolean,
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
      card: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById('stripe-element-mount-point').innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) loadStripe.setLoadParameters({ advancedFraudSignals: false });

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };
    const createOptions = {
      classes: this.classes,
      style: this.elementStyle,
      value: this.value,
      hidePostalCode: this.hidePostalCode,
      iconStyle: this.iconStyle,
      hideIcon: this.hideIcon,
      disabled: this.disabled,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);
    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, createOptions);
    this.element.mount('#stripe-element-mount-point');

    this.element.on('change', (event) => {
      var displayError = document.getElementById('stripe-element-errors');
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async (event) => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const data = {
          ...this.element,
        };
        if (this.amount) data.amount = this.amount;
        const { token, error } = await this.stripe.createToken(data, this.tokenData);
        if (error) {
          const errorElement = document.getElementById('stripe-element-errors');
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
        this.$emit('token', token);
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn('This method will currently not work on iOS 13+ due to a system limitation.');
      this.element.focus();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element
     * @param {string} opts.classes.base The base class applied to the container. Defaults to StripeElement.
     * @param {string} opts.classes.complete The class name to apply when the Element is complete. Defaults to StripeElement--complete.
     * @param {string} opts.classes.empty The class name to apply when the Element is empty. Defaults to StripeElement--empty.
     * @param {string} opts.classes.focus The class name to apply when the Element is focused. Defaults to StripeElement--focus.
     * @param {string} opts.classes.invalid The class name to apply when the Element is invalid. Defaults to StripeElement--invalid.
     * @param {string} opts.classes.webkitAutoFill The class name to apply when the Element has its value autofilled by the browser (only on Chrome and Safari). Defaults to StripeElement--webkit-autofill.
     * @param {Object} opts.style Customize the appearance of this element using CSS properties passed in a Style object.
     * @param {string} opts.value A pre-filled set of values to include in the input (e.g., {postalCode: '94110'}). Note that sensitive card information (card number, CVC, and expiration date) cannot be pre-filled
     * @param {boolean} opts.hidePostalCode Hide the postal code field. Default is false. If you are already collecting a full billing address or postal code elsewhere, set this to true.
     * @param {string} opts.iconStyle Appearance of the icon in the Element. Either solid or default.
     * @param {boolean} opts.hideIcon Hides the icon in the Element. Default is false.
     * @param {boolean} opts.disabled Applies a disabled state to the Element such that user input is not accepted. Default is false.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.StripeElement {
  box-sizing: border-box;

  height: 40px;

  padding: 10px 12px;

  border: 1px solid transparent;
  border-radius: 4px;
  background-color: white;

  box-shadow: 0 1px 3px 0 #e6ebf1;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}

.hide {
  display: none;
}
</style>
`]},media:void 0})},Bn="data-v-4dd8360e",Fn=Ce({render:ke,staticRenderFns:Rn},Dn,jn,Bn,!1,void 0,!1,xe,void 0,void 0);var Nn="payment",Un={props:{pk:{type:String,required:!0},testMode:{type:Boolean,default:!1},elementsOptions:{type:Object,required:!0,default:function(){return{}}},confirmParams:{type:Object,required:!0,default:function(){return{}}},redirect:{type:String,default:"always"},createOptions:{type:Object,default:function(){return{}}},stripeAccount:{type:String,default:void 0},apiVersion:{type:String,default:void 0},locale:{type:String,default:"auto"},disableAdvancedFraudDetection:{type:Boolean}},data:function(){return{loading:!1,stripe:null,elements:null,element:null}},computed:{form:function(){return document.getElementById("stripe-payment-element-form")}},mounted:function(){var e,n=this;return x.async(function(r){for(;;)switch(r.prev=r.next){case 0:return this.disableAdvancedFraudDetection&&L.setLoadParameters({advancedFraudSignals:!1}),e={stripeAccount:this.stripeAccount,apiVersion:this.apiVersion,locale:this.locale},r.next=4,x.awrap(L(this.pk,e));case 4:this.stripe=r.sent,this.stripe.registerAppInfo(z),this.elements=this.stripe.elements(this.elementsOptions),this.element=this.elements.create(Nn,this.createOptions),this.element.mount("#stripe-payment-element-mount-point"),this.element.on("change",function(t){var c=document.getElementById("stripe-payment-element-errors");t.error?c.textContent=t.error.message:c.textContent="",n.onChange(t)}),this.element.on("blur",this.onBlur),this.element.on("click",this.onClick),this.element.on("escape",this.onEscape),this.element.on("focus",this.onFocus),this.element.on("ready",this.onReady),this.form.addEventListener("submit",function(t){var c,l;return x.async(function(s){for(;;)switch(s.prev=s.next){case 0:return s.prev=0,n.$emit("loading",!0),t.preventDefault(),s.next=5,x.awrap(n.stripe.confirmPayment({elements:n.elements,confirmParams:n.confirmParams,redirect:n.redirect}));case 5:if(c=s.sent,!(l=c.error)){s.next=12;break}return document.getElementById("stripe-payment-element-errors").textContent=l.message,n.$emit("error",l),s.abrupt("return");case 12:s.next=18;break;case 14:s.prev=14,s.t0=s.catch(0),console.error(s.t0),n.$emit("error",s.t0);case 18:return s.prev=18,n.$emit("loading",!1),s.finish(18);case 21:case"end":return s.stop()}},null,null,[[0,14,18,21]])});case 16:case"end":return r.stop()}},null,this)},methods:{submit:function(){this.$refs.submitButtonRef.click()},clear:function(){this.element.clear()},destroy:function(){this.element.destroy()},focus:function(){console.warn("This method will currently not work on iOS 13+ due to a system limitation."),this.element.focus()},collapse:function(){this.element.collapse()},getElement:function(){this.element.getElement()},unmount:function(){this.element.unmount()},update:function(e){this.element.update(e)},onChange:function(e){this.$emit("element-change",e)},onReady:function(e){this.$emit("element-ready",e)},onFocus:function(e){this.$emit("element-focus",e)},onBlur:function(e){this.$emit("element-blur",e)},onEscape:function(e){this.$emit("element-escape",e)},onClick:function(e){this.$emit("element-click",e)}}};const Vn=Un;var Te=function(){var e=this.$createElement,n=this._self._c||e;return n("div",[n("form",{attrs:{id:"stripe-payment-element-form"}},[n("div",{attrs:{id:"stripe-payment-element-mount-point"}}),this._v(" "),this._t("stripe-payment-element-errors",[n("div",{attrs:{id:"stripe-payment-element-errors",role:"alert"}})]),this._v(" "),n("button",{ref:"submitButtonRef",staticClass:"hide",attrs:{type:"submit"}})],2)])},Mn=[];Te._withStripped=!0;const Gn=function(e){e&&e("data-v-3329b3f8_0",{source:`


































































































































































































































































/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide[data-v-3329b3f8] {
  display: none;
}
`,map:{version:3,sources:["/home/runner/work/vue-stripe/vue-stripe/src/elements/Payment.vue"],names:[],mappings:";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAmQA;;;EAGA;AACA;EACA,aAAA;AACA",file:"Payment.vue",sourcesContent:[`<template>
  <div>
    <form id="stripe-payment-element-form">
      <div id="stripe-payment-element-mount-point" />
      <slot name="stripe-payment-element-errors">
        <div
          id="stripe-payment-element-errors"
          role="alert"
        />
      </slot>
      <button
        ref="submitButtonRef"
        type="submit"
        class="hide"
      />
    </form>
  </div>
</template>

<script>
import { loadStripe } from '@stripe/stripe-js/dist/pure.esm.js';
// import { isSecureHost } from '../utils';
import {
  STRIPE_PARTNER_DETAILS,
  // INSECURE_HOST_ERROR_MESSAGE,
} from '../constants';
const ELEMENT_TYPE = 'payment';
export default {
  props: {
    pk: {
      type: String,
      required: true,
    },
    testMode: {
      type: Boolean,
      default: false,
    },
    elementsOptions: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    confirmParams: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    redirect: {
      type: String,
      default: 'always',
    },
    createOptions: {
      type: Object,
      default: () => ({}),
    },
    stripeAccount: {
      type: String,
      default: undefined,
    },
    apiVersion: {
      type: String,
      default: undefined,
    },
    locale: {
      type: String,
      default: 'auto',
    },
    disableAdvancedFraudDetection: {
      type: Boolean,
    },
  },
  data () {
    return {
      loading: false,
      stripe: null,
      elements: null,
      element: null,
    };
  },
  computed: {
    form () {
      return document.getElementById('stripe-payment-element-form');
    },
  },
  async mounted () {
    // FIXME: temporarily remove to avoid problems with remote non-production deployments
    // if (!isSecureHost(this.testMode)) {
    //   document.getElementById(
    //     'stripe-payment-element-mount-point',
    //   ).innerHTML = \`<p style="color: red">\${INSECURE_HOST_ERROR_MESSAGE}</p>\`;
    //   return;
    // }

    if (this.disableAdvancedFraudDetection) {
      loadStripe.setLoadParameters({ advancedFraudSignals: false });
    }

    const stripeOptions = {
      stripeAccount: this.stripeAccount,
      apiVersion: this.apiVersion,
      locale: this.locale,
    };

    this.stripe = await loadStripe(this.pk, stripeOptions);
    this.stripe.registerAppInfo(STRIPE_PARTNER_DETAILS);

    this.elements = this.stripe.elements(this.elementsOptions);
    this.element = this.elements.create(ELEMENT_TYPE, this.createOptions);
    this.element.mount('#stripe-payment-element-mount-point');

    this.element.on('change', event => {
      var displayError = document.getElementById(
        'stripe-payment-element-errors',
      );
      if (event.error) {
        displayError.textContent = event.error.message;
      } else {
        displayError.textContent = '';
      }
      this.onChange(event);
    });

    this.element.on('blur', this.onBlur);
    this.element.on('click', this.onClick);
    this.element.on('escape', this.onEscape);
    this.element.on('focus', this.onFocus);
    this.element.on('ready', this.onReady);

    this.form.addEventListener('submit', async event => {
      try {
        this.$emit('loading', true);
        event.preventDefault();
        const { error } = await this.stripe.confirmPayment({
          elements: this.elements,
          confirmParams: this.confirmParams,
          redirect: this.redirect,
        });
        if (error) {
          const errorElement = document.getElementById(
            'stripe-payment-element-errors',
          );
          errorElement.textContent = error.message;
          this.$emit('error', error);
          return;
        }
      } catch (error) {
        console.error(error);
        this.$emit('error', error);
      } finally {
        this.$emit('loading', false);
      }
    });
  },
  methods: {
    /**
     * Triggers the submission of the form
     * @return {void}
     */
    submit () {
      this.$refs.submitButtonRef.click();
    },
    /**
     * Clears the element
     * @return {void}
     */
    clear () {
      this.element.clear();
    },
    /**
     * Destroys the element
     * @return {void}
     */
    destroy () {
      this.element.destroy();
    },
    /**
     * Focuses on the element
     * @return {void}
     */
    focus () {
      console.warn(
        'This method will currently not work on iOS 13+ due to a system limitation.',
      );
      this.element.focus();
    },
    /**
     * Collapses the Payment Element into a row of payment method tabs
     * @return {void}
     */
    collapse () {
      this.element.collapse();
    },
    /**
     * Retrieves a previously created element
     */
    getElement () {
      this.element.getElement();
    },
    /**
     * Unmounts the element
     * @return {void}
     */
    unmount () {
      this.element.unmount();
    },
    /**
     * Updates the element. See official docs for more detail: https://site-admin.stripe.com/docs/js/elements_object/update_payment_element
     * @param {string} opts.business.name  Information about your business that will be displayed in the Payment Element. This information will be retrieved from the Stripe account if not provided.
     * @param {array} opts.paymentMethodOrder Sets order in which payment methods are displayed. Otherwise payment methods are ordered dynamically to optimize for conversion.
     * @param {string | Object} opts.fields.billingDetails The Payment Element automatically creates input fields to collect required billing information for some payment methods like SEPA debit. Specify 'never' to avoid collecting billing details in the Payment Element if you're collecting them outside of the Payment Element.
     * @param {string} opts.fields.billingDetails.name Specify 'never' to avoid collecting a name as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.email Specify 'never' to avoid collecting an email address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.phone Specify 'never' to avoid collecting a phone number as part of the billing details in the Payment Element.
     * @param {string | Object} opts.fields.billingDetails.address Specify 'never' to avoid collecting an address as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line1 Specify 'never' to avoid collecting an address line1 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.line2 Specify 'never' to avoid collecting an address line2 as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.city Specify 'never' to avoid collecting an address city as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.state Specify 'never' to avoid collecting an address state as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.country Specify 'never' to avoid collecting an address country as part of the billing details in the Payment Element.
     * @param {string} opts.fields.billingDetails.address.postalCode Specify 'never' to avoid collecting an address postal code as part of the billing details in the Payment Element.
     * @param {string} opts.fields.terms The Payment Element automatically displays mandates or other legal agreements when required by the payment method, like SEPA debit. Specify 'never' to never show legal agreements.
     * @param {string} opts.fields.terms.auBecsDebit Specify 'never' to never show legal agreements for the BECS Debit payment method.
     * @param {string} opts.fields.terms.bancontact Specify 'never' to never show legal agreements for the Bancontact payment method.
     * @param {string} opts.fields.terms.card Specify 'never' to never show legal agreements for the credit card payment method.
     * @param {string} opts.fields.terms.ideal Specify 'never' to never show legal agreements for the iDEAL payment method.
     * @param {string} opts.fields.terms.sepaDebit Specify 'never' to never show legal agreements for the SEPA Debit payment method.
     * @param {string} opts.fields.terms.sofort Specify 'never' to never show legal agreements for the SOFORT payment method.
     * @param {string} opts.fields.terms.usBankAccount Specify 'never' to never show legal agreements for the US Bank accounts payment method.
     * @param {string} opts.wallets Specify 'never' to never show digital wallet payment methods like Apple Pay and Google Pay.
     * @param {string} opts.wallets.applePay Specify 'never' to never show the Apple Pay digital wallet payment method.
     * @param {string} opts.wallets.googlePay Specify 'never' to never show the Google Pay digital wallet payment method.
     */
    update (opts) {
      this.element.update(opts);
    },
    // events
    onChange (e) {
      this.$emit('element-change', e);
    },
    onReady (e) {
      this.$emit('element-ready', e);
    },
    onFocus (e) {
      this.$emit('element-focus', e);
    },
    onBlur (e) {
      this.$emit('element-blur', e);
    },
    onEscape (e) {
      this.$emit('element-escape', e);
    },
    onClick (e) {
      this.$emit('element-click', e);
    },
  },
};
<\/script>

<style scoped>
/**
 * The CSS shown here will not be introduced in the Quickstart guide, but shows
 * how you can use CSS to style your Element's container.
 */
.hide {
  display: none;
}
</style>
`]},media:void 0})},Hn=Ce({render:Te,staticRenderFns:Mn},Gn,Vn,"data-v-3329b3f8",!1,void 0,!1,xe,void 0,void 0);var qn={install:function(e,n){var r,t,c,l,s,d,b;return x.async(function(u){for(;;)switch(u.prev=u.next){case 0:r=n.pk,t=n.stripeAccount,c=n.apiVersion,l=n.locale,s=n.elementsOptions,(d=window.Stripe(r,{stripeAccount:t,apiVersion:c,locale:l})).registerAppInfo(z),b=d.elements(s),e.prototype.$stripe=d,e.prototype.$stripeElements=b;case 6:case"end":return u.stop()}})}};Ee=U.StripeCheckout=xn,U.StripeElementCard=Fn,U.StripeElementPayment=Hn,U.StripeElementsPlugin=qn,U.StripePlugin=hn;const{GetTemplatesInCart:Yn,DeleteTemplateFromCart:zn,DeleteAllTemplatesFromCart:Xn}=be();let K=I(!1);const Qn={components:{StripeCheckout:Ee,Trash2:ve,Loader2:Ne},setup(){var u;const e=I(Yn()),{user:n}=Ie(),r=I(!1),t=Le({uid:(u=n==null?void 0:n.value)==null?void 0:u.uid,templates:e.value});console.log("templatesInCartvoor",e);const c=()=>{r.value=!0;const{mutate:g}=$e(je,()=>({variables:{updateUserInput:t}}));try{g(),K.value=!0,r.value=!1,e.value=[],Xn()}catch(h){console.log(h),K.value=!1}console.log("paymentSuccessfull.value",K.value)},{loadLanguage:l,AVAILABLE_LANGUAGES:s,t:d}=ye();return{DeleteTemplateFromCart:zn,updateDB:c,setLanguage:g=>{const h=g.target.value;console.log(h),l(h)},templatesInCart:e,paymentSuccessfull:K,loading:r,AVAILABLE_LANGUAGES:s}}},Wn={class:"w-70 fixed bottom-24 right-3.5 h-80 rounded-md bg-white p-6 shadow-md"},Jn={class:"flex flex-col"},Kn={key:0,class:"self-center text-base font-bold text-gray-500"},Zn={class:"text-black"},et=["onClick"],nt={key:0},tt={key:1};function rt(e,n,r,t,c,l){const s=V("Trash2"),d=V("Loader2");return E(),S("div",Wn,[v("div",Jn,[t.templatesInCart.length==0?(E(),S("h3",Kn,O(e.$t("templates.emptyShoppingCart")),1)):t.templatesInCart.length>0?(E(!0),S(Z,{key:1},ee(t.templatesInCart,b=>(E(),S("div",{key:b.id,class:"flex justify-between"},[v("label",Zn,O(b.name),1),v("button",{onClick:u=>t.DeleteTemplateFromCart(b.name)},[M(s,{class:"h-4 w-4 self-center stroke-red-600"})],8,et)]))),128)):Y("",!0),t.templatesInCart.length>0?(E(),S("button",{key:2,class:"bg-green700 hover:bg-green900 font-bold text-white shadow-sm",onClick:n[0]||(n[0]=b=>t.updateDB())},[t.loading?(E(),S("div",tt,[M(d,{class:"animate-spin"})])):(E(),S("span",nt,O(e.$t("templates.pay")),1))])):Y("",!0)])])}const ot=ge(Qn,[["render",rt]]),it={components:{RouteHolder:Fe,AppShoppingCart:ot,Plus:Ve,ShoppingCart:Ge,Trash2:ve},setup(){const{result:e,loading:n,error:r}=Re(He);console.log(e);const{AddTemplateToCart:t,GetNumberOfTemplates:c}=be(),l=I(4),s=I(!1),{loadLanguage:d,AVAILABLE_LANGUAGES:b,t:u}=ye();return{result:e,loading:n,error:r,skeletons:l,IsHidden:s,AVAILABLE_LANGUAGES:b,ShowShoppingCart:()=>{console.log("show shopping cart")},AddTemplateToCart:t,GetNumberOfTemplates:c,setLanguage:f=>{const $=f.target.value;console.log($),d($)}}}},st={class:"flex justify-center"},at={class:"bg-white py-8 px-8 shadow-lg sm:px-32 sm:py-20"},lt={class:"my-3 flex justify-center"},ct={class:"font-theme mb-8 text-lg font-bold sm:text-4xl lg:text-5xl"},pt={class:"flex flex-col items-center"},ut={key:0,class:"animate-pulse"},dt=v("p",{class:"bg-neutral-300"},null,-1),mt=v("div",null,[v("ul",null,[v("li",{class:"bg-neutral-200"}),v("li",{class:"bg-neutral-200"}),v("li",{class:"bg-neutral-200"}),v("li",{class:"bg-neutral-200"})])],-1),ht=[dt,mt],ft={key:1},yt={key:2},gt=v("p",null,"There are no templates",-1),vt=[gt],bt={key:3,class:"flex flex-col gap-12 p-10 px-8"},Et={class:"mb-8 font-bold sm:text-xl lg:text-2xl"},St={class:"mb-8"},_t=v("input",{type:"checkbox",name:"item",id:"item"},null,-1),At={class:"pl-4"},wt=["onClick"],Ct={key:1};function xt(e,n,r,t,c,l){const s=V("Plus"),d=V("ShoppingCart"),b=V("AppShoppingCart"),u=V("route-holder");return E(),S("div",st,[M(u,null,{default:De(()=>{var g;return[v("div",at,[v("div",lt,[v("h1",ct,O(e.$t("templates.title")),1)]),v("div",pt,[t.loading?(E(),S("div",ut,[(E(!0),S(Z,null,ee(t.skeletons,h=>(E(),S("div",{key:h},ht))),128))])):t.error?(E(),S("div",ft,[v("p",null,O(e.$t("templates.error")),1)])):t.result.templates.length===0?(E(),S("div",yt,vt)):t.result.templates.length!==0?(E(),S("div",bt,[(E(!0),S(Z,null,ee(t.result.templates,h=>(E(),S("div",{key:h.id,class:"pb-8"},[v("h3",Et,O(h.name),1),v("ul",St,[(E(!0),S(Z,null,ee(h.items,f=>(E(),S("li",{key:f.id},[_t,v("label",At,O(f),1)]))),128))]),v("button",{onClick:f=>t.AddTemplateToCart(h),class:"bg-green700 hover:bg-green900 flex rounded-lg py-3 px-6"},[M(s,{class:"w-4 stroke-white"}),M(d,{class:"stroke-white"})],8,wt)]))),128))])):Y("",!0)]),t.IsHidden?(E(),Be(b,{key:0})):Y("",!0),((g=t.result)==null?void 0:g.templates.length)!==0?(E(),S("div",Ct,[v("button",{onClick:[n[0]||(n[0]=h=>t.IsHidden=!t.IsHidden),n[1]||(n[1]=h=>t.ShowShoppingCart())],class:"bg-green700 hover:bg-green900 fixed bottom-[60px] right-3.5 rounded-full p-5 shadow-sm"},[M(d,{class:"stroke-white"})]),(E(),S("div",{class:"fixed bottom-[105px] right-3 flex h-6 w-6 flex-col items-center rounded-full bg-red-600 text-white",key:t.GetNumberOfTemplates()},O(t.GetNumberOfTemplates()),1))])):Y("",!0)])]}),_:1})])}const $t=ge(it,[["render",xt]]);export{$t as default};
