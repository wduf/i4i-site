import{S as C,i as q,s as U,a as j,e as d,c as z,b as w,d as h,f as P,g,h as E,j as G,o as W,k as F,l as H,m as J,n as A,p,q as K,r as M,u as Q,v as O,w as D,x as v,y as k,z as I,A as R,B as L}from"../chunks/index.2e46d056.js";const X="modulepreload",Y=function(a,e){return new URL(a,e).href},T={},m=function(e,n,i){if(!n||n.length===0)return e();const r=document.getElementsByTagName("link");return Promise.all(n.map(_=>{if(_=Y(_,i),_ in T)return;T[_]=!0;const t=_.endsWith(".css"),s=t?'[rel="stylesheet"]':"";if(!!i)for(let l=r.length-1;l>=0;l--){const u=r[l];if(u.href===_&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${s}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":X,t||(o.as="script",o.crossOrigin=""),o.href=_,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${_}`)))})})).then(()=>e())},ie={};function Z(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],form:t[2]}}}return r&&(e=v(r,_(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),w(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][0])){if(e){O();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=v(r,_(t)),t[12](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[12](null),t&&E(n),e&&L(e,t)}}}function $(a){let e,n,i;var r=a[1][0];function _(t){return{props:{data:t[3],$$slots:{default:[x]},$$scope:{ctx:t}}}}return r&&(e=v(r,_(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),w(t,n,s),i=!0},p(t,s){const c={};if(s&8&&(c.data=t[3]),s&8215&&(c.$$scope={dirty:s,ctx:t}),s&2&&r!==(r=t[1][0])){if(e){O();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=v(r,_(t)),t[11](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[11](null),t&&E(n),e&&L(e,t)}}}function x(a){let e,n,i;var r=a[1][1];function _(t){return{props:{data:t[4],form:t[2]}}}return r&&(e=v(r,_(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=d()},l(t){e&&I(e.$$.fragment,t),n=d()},m(t,s){e&&R(e,t,s),w(t,n,s),i=!0},p(t,s){const c={};if(s&16&&(c.data=t[4]),s&4&&(c.form=t[2]),s&2&&r!==(r=t[1][1])){if(e){O();const o=e;h(o.$$.fragment,1,0,()=>{L(o,1)}),P()}r?(e=v(r,_(t)),t[10](e),k(e.$$.fragment),g(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else r&&e.$set(c)},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&h(e.$$.fragment,t),i=!1},d(t){a[10](null),t&&E(n),e&&L(e,t)}}}function V(a){let e,n=a[6]&&y(a);return{c(){e=F("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(e);n&&n.l(r),r.forEach(E),this.h()},h(){A(e,"id","svelte-announcer"),A(e,"aria-live","assertive"),A(e,"aria-atomic","true"),p(e,"position","absolute"),p(e,"left","0"),p(e,"top","0"),p(e,"clip","rect(0 0 0 0)"),p(e,"clip-path","inset(50%)"),p(e,"overflow","hidden"),p(e,"white-space","nowrap"),p(e,"width","1px"),p(e,"height","1px")},m(i,r){w(i,e,r),n&&n.m(e,null)},p(i,r){i[6]?n?n.p(i,r):(n=y(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&E(e),n&&n.d()}}}function y(a){let e;return{c(){e=K(a[7])},l(n){e=M(n,a[7])},m(n,i){w(n,e,i)},p(n,i){i&128&&Q(e,n[7])},d(n){n&&E(e)}}}function ee(a){let e,n,i,r,_;const t=[$,Z],s=[];function c(l,u){return l[1][1]?0:1}e=c(a),n=s[e]=t[e](a);let o=a[5]&&V(a);return{c(){n.c(),i=j(),o&&o.c(),r=d()},l(l){n.l(l),i=z(l),o&&o.l(l),r=d()},m(l,u){s[e].m(l,u),w(l,i,u),o&&o.m(l,u),w(l,r,u),_=!0},p(l,[u]){let b=e;e=c(l),e===b?s[e].p(l,u):(O(),h(s[b],1,1,()=>{s[b]=null}),P(),n=s[e],n?n.p(l,u):(n=s[e]=t[e](l),n.c()),g(n,1),n.m(i.parentNode,i)),l[5]?o?o.p(l,u):(o=V(l),o.c(),o.m(r.parentNode,r)):o&&(o.d(1),o=null)},i(l){_||(g(n),_=!0)},o(l){h(n),_=!1},d(l){s[e].d(l),l&&E(i),o&&o.d(l),l&&E(r)}}}function te(a,e,n){let{stores:i}=e,{page:r}=e,{constructors:_}=e,{components:t=[]}=e,{form:s}=e,{data_0:c=null}=e,{data_1:o=null}=e;G(i.page.notify);let l=!1,u=!1,b=null;W(()=>{const f=i.page.subscribe(()=>{l&&(n(6,u=!0),n(7,b=document.title||"untitled page"))});return n(5,l=!0),f});function N(f){D[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){D[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,r=f.page),"constructors"in f&&n(1,_=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,s=f.form),"data_0"in f&&n(3,c=f.data_0),"data_1"in f&&n(4,o=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(r)},[t,_,s,c,o,l,u,b,i,r,N,S,B]}class re extends C{constructor(e){super(),q(this,e,te,ee,U,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const se=[()=>m(()=>import("../chunks/0.197330d9.js"),["..\\chunks\\0.197330d9.js","..\\chunks\\_layout.da46b06b.js","./layout.svelte.4371a2c7.js","..\\chunks\\index.2e46d056.js"],import.meta.url),()=>m(()=>import("../chunks/1.6cadbcd0.js"),["..\\chunks\\1.6cadbcd0.js","./error.svelte.6c95197a.js","..\\chunks\\index.2e46d056.js","..\\chunks\\singletons.68151a75.js","..\\chunks\\paths.f876cf0b.js"],import.meta.url),()=>m(()=>import("../chunks/2.5ad17af1.js"),["..\\chunks\\2.5ad17af1.js","./_page.svelte.9d9e4ce1.js","..\\chunks\\index.2e46d056.js","..\\chunks\\paths.f876cf0b.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\assets\\pageWrapper.5847b86c.css","..\\assets\\_page.c3c3ea7a.css","..\\assets\\textBlock.20fa12d4.css"],import.meta.url),()=>m(()=>import("../chunks/3.42c87ff8.js"),["..\\chunks\\3.42c87ff8.js","./about-page.svelte.b7b1bcff.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.0c404cb4.css"],import.meta.url),()=>m(()=>import("../chunks/4.e962dcd9.js"),["..\\chunks\\4.e962dcd9.js","./community-page.svelte.4e7cdd63.js","..\\chunks\\index.2e46d056.js","..\\chunks\\paths.f876cf0b.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\assets\\_page.a721ed2d.css"],import.meta.url),()=>m(()=>import("../chunks/5.3fe4f57e.js"),["..\\chunks\\5.3fe4f57e.js","./education-page.svelte.286f99ca.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.a327e094.css"],import.meta.url),()=>m(()=>import("../chunks/6.afd33388.js"),["..\\chunks\\6.afd33388.js","./housing-page.svelte.fb447b3c.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.6f868218.css"],import.meta.url),()=>m(()=>import("../chunks/7.b6dd6a18.js"),["..\\chunks\\7.b6dd6a18.js","./jobs-page.svelte.677aee76.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.6f868218.css"],import.meta.url),()=>m(()=>import("../chunks/8.b386f97d.js"),["..\\chunks\\8.b386f97d.js","./legal-page.svelte.e2d3b588.js","..\\chunks\\index.2e46d056.js","..\\chunks\\paths.f876cf0b.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.4c05cb44.css"],import.meta.url),()=>m(()=>import("../chunks/9.b7d01466.js"),["..\\chunks\\9.b7d01466.js","./NGOs-page.svelte.48a68142.js","..\\chunks\\index.2e46d056.js","..\\chunks\\paths.f876cf0b.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\ngoText.101b963f.js","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.0c76b65d.css"],import.meta.url),()=>m(()=>import("../chunks/10.d4b3e4b6.js"),["..\\chunks\\10.d4b3e4b6.js","./roadmap-page.svelte.62a2edbb.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\assets\\_page.9985dd3d.css","..\\assets\\textBlock.20fa12d4.css"],import.meta.url),()=>m(()=>import("../chunks/11.c5017477.js"),["..\\chunks\\11.c5017477.js","./social-page.svelte.b87f1398.js","..\\chunks\\index.2e46d056.js","..\\chunks\\paths.f876cf0b.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\textBlock.456b3aaa.js","..\\assets\\textBlock.20fa12d4.css","..\\chunks\\myLink.6f973151.js","..\\chunks\\ngoText.101b963f.js","..\\assets\\_page.23c51e92.css"],import.meta.url),()=>m(()=>import("../chunks/12.1b7234f3.js"),["..\\chunks\\12.1b7234f3.js","./terms-page.svelte.d19b5a11.js","..\\chunks\\index.2e46d056.js","..\\chunks\\pageWrapper.df0ca1fe.js","..\\chunks\\paths.f876cf0b.js","..\\assets\\pageWrapper.5847b86c.css","..\\chunks\\myLink.6f973151.js","..\\assets\\_page.0c404cb4.css"],import.meta.url)],oe=[],ae={"/":[2],"/NGOs":[9],"/about":[3],"/community":[4],"/education":[5],"/housing":[6],"/jobs":[7],"/legal":[8],"/roadmap":[10],"/social":[11],"/terms":[12]},le={handleError:({error:a})=>{console.error(a)}};export{ae as dictionary,le as hooks,ie as matchers,se as nodes,re as root,oe as server_loads};