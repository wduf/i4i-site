import{S as z,i as F,s as K,k as _,y as k,l as d,m as h,z as w,h as o,n as $,b as f,A as y,g as b,d as E,B as P,a as B,q as G,c as C,r as R,G as A,H as S}from"../chunks/index.2e46d056.js";import{b as N}from"../chunks/paths.20e62d71.js";import{D as u,P as O,H as W}from"../chunks/pageWrapper.134020c0.js";import{T as j}from"../chunks/textBlock.456b3aaa.js";import{M as J}from"../chunks/myLink.6f973151.js";let D=u.languages,v=D.English,I=D.German;D.Persian;let Q=new u;Q.setText(v,"Available in: ");let V=new u;V.setText(v,"Contact:");V.setText(I,"Kontact:");let H=new u;H.setText(v,"Legal Information");H.setText(I,"Rechtsinformation");let L=new u;L.setText(v,"Legal Roadmap");L.setText(I,"german translation needed");let M=new u;M.setText(v,"An interactive legal roadmap that can guide asylum seekers through the refugee legal process. (Information from the Federal Office).");M.setText(I,"german translation needed");function U(c){let e,r;return e=new J({props:{slot:"title",link:`${N}/roadmap`,text:L.getText()}}),{c(){k(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,a){y(e,t,a),r=!0},p:S,i(t){r||(b(e.$$.fragment,t),r=!0)},o(t){E(e.$$.fragment,t),r=!1},d(t){P(e,t)}}}function X(c){let e,r=M.getText()+"",t;return{c(){e=_("p"),t=G(r),this.h()},l(a){e=d(a,"P",{slot:!0,class:!0});var n=h(e);t=R(n,r),n.forEach(o),this.h()},h(){$(e,"slot","body"),$(e,"class","svelte-1p3gskv")},m(a,n){f(a,e,n),A(e,t)},p:S,d(a){a&&o(e)}}}function Y(c){let e,r,t,a,n=H.getText()+"",m,x,p,i,T;return e=new W({}),i=new j({props:{$$slots:{body:[X],title:[U]},$$scope:{ctx:c}}}),{c(){k(e.$$.fragment),r=B(),t=_("div"),a=_("p"),m=G(n),x=B(),p=_("div"),k(i.$$.fragment),this.h()},l(s){w(e.$$.fragment,s),r=C(s),t=d(s,"DIV",{class:!0});var l=h(t);a=d(l,"P",{class:!0});var g=h(a);m=R(g,n),g.forEach(o),l.forEach(o),x=C(s),p=d(s,"DIV",{class:!0});var q=h(p);w(i.$$.fragment,q),q.forEach(o),this.h()},h(){$(a,"class","svelte-1p3gskv"),$(t,"class","title-wrapper svelte-1p3gskv"),$(p,"class","tools-wrapper svelte-1p3gskv")},m(s,l){y(e,s,l),f(s,r,l),f(s,t,l),A(t,a),A(a,m),f(s,x,l),f(s,p,l),y(i,p,null),T=!0},p(s,l){const g={};l&1&&(g.$$scope={dirty:l,ctx:s}),i.$set(g)},i(s){T||(b(e.$$.fragment,s),b(i.$$.fragment,s),T=!0)},o(s){E(e.$$.fragment,s),E(i.$$.fragment,s),T=!1},d(s){P(e,s),s&&o(r),s&&o(t),s&&o(x),s&&o(p),P(i)}}}function Z(c){let e,r,t;return r=new O({props:{$$slots:{default:[Y]},$$scope:{ctx:c}}}),{c(){e=_("main"),k(r.$$.fragment),this.h()},l(a){e=d(a,"MAIN",{class:!0});var n=h(e);w(r.$$.fragment,n),n.forEach(o),this.h()},h(){$(e,"class","svelte-1p3gskv")},m(a,n){f(a,e,n),y(r,e,null),t=!0},p(a,[n]){const m={};n&1&&(m.$$scope={dirty:n,ctx:a}),r.$set(m)},i(a){t||(b(r.$$.fragment,a),t=!0)},o(a){E(r.$$.fragment,a),t=!1},d(a){a&&o(e),P(r)}}}class ne extends z{constructor(e){super(),F(this,e,null,Z,K,{})}}export{ne as default};
