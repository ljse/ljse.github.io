(function(e){function t(t){for(var o,r,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);b&&b(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,r=1;r<n.length;r++){var i=n[r];0!==a[i]&&(o=!1)}o&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},r={app:0},a={app:0},c=[];function i(e){return u.p+"js/"+({about:"about",portfolio:"portfolio"}[e]||e)+"."+{about:"2355d6a3",portfolio:"fe2f85b1"}[e]+".js"}function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,portfolio:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var o="css/"+({about:"about",portfolio:"portfolio"}[e]||e)+"."+{about:"12da0a5a",portfolio:"8782fcfb"}[e]+".css",a=u.p+o,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===o||l===a))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===o||l===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var o=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=o,delete r[e],b.parentNode.removeChild(b),n(c)},b.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(b)})).then((function(){r[e]=0})));var o=a[e];if(0!==o)if(o)t.push(o[2]);else{var c=new Promise((function(t,n){o=a[e]=[t,n]}));t.push(o[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+o+": "+r+")",f.name="ChunkLoadError",f.type=o,f.request=r,n[1](f)}a[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)u.d(n,o,function(t){return e[t]}.bind(null,o));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var b=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1e29":function(e,t,n){},"2cb4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23"),r={class:"content"},a={class:"content__container"},c={class:"content__wrap"};function i(e,t,n,i,u,s){var l=Object(o["z"])("navigation"),f=Object(o["z"])("social-media"),b=Object(o["z"])("router-view");return Object(o["s"])(),Object(o["e"])("div",null,[Object(o["i"])(l),Object(o["i"])(f),Object(o["f"])("div",r,[Object(o["f"])("div",a,[Object(o["f"])("div",c,[Object(o["i"])(b)])])])])}var u={id:"nav"},s=Object(o["h"])("Home"),l=Object(o["h"])("Portfolio"),f=Object(o["h"])("About");function b(e,t){var n=Object(o["z"])("router-link");return Object(o["s"])(),Object(o["e"])("nav",null,[Object(o["f"])("div",u,[Object(o["i"])(n,{to:"/"},{default:Object(o["E"])((function(){return[s]})),_:1}),Object(o["i"])(n,{to:"/portfolio"},{default:Object(o["E"])((function(){return[l]})),_:1}),Object(o["i"])(n,{to:"/about"},{default:Object(o["E"])((function(){return[f]})),_:1})])])}n("5a5f");var d=n("6b0d"),p=n.n(d);const v={},h=p()(v,[["render",b]]);var m=h,j={class:"social"},O=Object(o["g"])('<div class="social__icons" data-v-2cbe2551><a href="https://www.facebook.com/lj.severino122/" target="_blank" data-v-2cbe2551><i class="fab fa-facebook-f" data-v-2cbe2551></i></a></div><div class="social__icons" data-v-2cbe2551><a href="https://www.linkedin.com/in/lawrence-julius-severino-570a8b173" target="_blank" data-v-2cbe2551><i class="fab fa-linkedin-in" data-v-2cbe2551></i></a></div><div class="social__icons" data-v-2cbe2551><a href="https://github.com/ljse" target="_blank" data-v-2cbe2551><i class="fab fa-github-alt" data-v-2cbe2551></i></a></div>',3),g=[O];function _(e,t){return Object(o["s"])(),Object(o["e"])("div",j,g)}n("eec0");const w={},y=p()(w,[["render",_],["__scopeId","data-v-2cbe2551"]]);var k=y,P={components:{Navigation:m,SocialMedia:k},watch:{$route:{immediate:!0,handler:function(e){document.title=e.meta.title}}}};n("fdab");const E=p()(P,[["render",i]]);var S=E,A=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),L=function(e){return Object(o["v"])("data-v-2e5a3448"),e=e(),Object(o["t"])(),e},x={class:"home"},C=L((function(){return Object(o["f"])("div",{class:"home__container"},[Object(o["f"])("div",{class:"home__wrap"},[Object(o["f"])("h1",null,[Object(o["h"])("Hi ! "),Object(o["f"])("br"),Object(o["h"])(" I'm Lawrence "),Object(o["f"])("span",null,".")])])],-1)})),T=L((function(){return Object(o["f"])("div",{class:"home__box"},null,-1)})),N=[C,T];function H(e,t,n,r,a,c){return Object(o["s"])(),Object(o["e"])("div",x,N)}var M={name:"Home",components:{}};n("8ef2");const z=p()(M,[["render",H],["__scopeId","data-v-2e5a3448"]]);var I=z,B=[{path:"/",name:"Home",component:I,meta:{title:"Lawrence"}},{path:"/about",name:"About",meta:{title:"Lawrence | About"},component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/portfolio",name:"Porfolio",meta:{title:"Lawrence | Porfolio"},component:function(){return n.e("portfolio").then(n.bind(null,"c9e5"))}}],q=Object(A["a"])({history:Object(A["b"])("/"),routes:B}),D=q,J=n("5502"),F=Object(J["a"])({state:{},mutations:{},actions:{},modules:{}});Object(o["c"])(S).use(F).use(D).mount("#app")},"5a5f":function(e,t,n){"use strict";n("7559")},7559:function(e,t,n){},"8ef2":function(e,t,n){"use strict";n("adb3")},adb3:function(e,t,n){},eec0:function(e,t,n){"use strict";n("2cb4")},fdab:function(e,t,n){"use strict";n("1e29")}});
//# sourceMappingURL=app.9f9c40de.js.map