var ae=Object.defineProperty;var se=(o,t,s)=>t in o?ae(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;var P=(o,t,s)=>(se(o,typeof t!="symbol"?t+"":t,s),s);import{S as Qt,i as Xt,s as Yt,k as T,q as L,a as w,l as d,m as y,r as C,c as b,h as f,n as i,b as B,G as n,u as q,H as Bt,y as J,z as W,A as K,g as E,d as N,B as Q,o as le,N as Nt,J as ne,v as Zt,f as te,O as re,e as Pt}from"../chunks/index.2e46d056.js";import"../chunks/paths.20e62d71.js";import{P as oe,H as ie}from"../chunks/pageWrapper.134020c0.js";import{T as ge}from"../chunks/textBlock.456b3aaa.js";import{c as ce,w as ue,a as k,b as fe,d as _e,e as It,j as pe,f as he,g as Te,h as At,k as de,i as xe,l as me,m as Gt,v as we,n as be,o as ve,p as Ot,q as ye,r as ke,s as $e,t as Le,u as Ce,x as Ee,y as De,z as St,A as Be,B as Ne,C as Pe,D as Mt,E as Ie,F as Ae,G as Ge,H as Oe,I as Se,J as Me,K as je,L as jt,M as Ue,N as Ve,O as Re,P as Ut,Q as ze,R as Fe,S as He,T as Vt,U as qe,V as Je,W as We,X as Ke,Y as Rt,Z as Qe,_ as Xe,$ as Ye,a0 as zt,a1 as Ze,a2 as ta,a3 as ea,a4 as Ft,a5 as aa,a6 as sa,a7 as la,a8 as Ht,a9 as na,aa as ra,ab as oa,ac as qt,ad as ia}from"../chunks/ngoText.2efae566.js";import{M as ga}from"../chunks/myLink.6f973151.js";function ca(o){let t,s=o[0].getText()+"",e,a,l,r;return{c(){t=T("a"),e=L(s),a=w(),l=L(o[2]),this.h()},l(_){t=d(_,"A",{href:!0,target:!0,rel:!0});var c=y(t);e=C(c,s),a=b(c),l=C(c,o[2]),c.forEach(f),this.h()},h(){i(t,"href",r="mailto:"+o[1]),i(t,"target","_blank"),i(t,"rel","noreferrer")},m(_,c){B(_,t,c),n(t,e),n(t,a),n(t,l)},p(_,[c]){c&1&&s!==(s=_[0].getText()+"")&&q(e,s),c&4&&q(l,_[2]),c&2&&r!==(r="mailto:"+_[1])&&i(t,"href",r)},i:Bt,o:Bt,d(_){_&&f(t)}}}function ua(o,t,s){let{baseContact:e=ce}=t,{ngoContact:a}=t,{ngoDisplay:l}=t;return o.$$set=r=>{"baseContact"in r&&s(0,e=r.baseContact),"ngoContact"in r&&s(1,a=r.ngoContact),"ngoDisplay"in r&&s(2,l=r.ngoDisplay)},[e,a,l]}class fa extends Qt{constructor(t){super(),Xt(this,t,ua,ca,Yt,{baseContact:0,ngoContact:1,ngoDisplay:2})}}class ${constructor(t,s,e,a,l,r,_){P(this,"link");P(this,"title");P(this,"genLangs");P(this,"langs");P(this,"body");P(this,"contact");P(this,"displayContact");this.link=t,this.title=s,this.genLangs=e,this.langs=a,this.body=l,this.contact=r,this.displayContact=_}getString(){return this.link+this.title+this.genLangs+this.langs+this.body+this.contact}getLink(){return this.link}getTitle(){return this.title}getGenLangs(){return this.genLangs}getLangs(){return this.langs}getBody(){return this.body}getContact(){return this.contact}getContactDisplay(){return this.displayContact}}function Jt(o,t,s){const e=o.slice();return e[4]=t[s],e}function Wt(o){let t,s;return t=new ge({props:{$$slots:{contact:[Ta],body:[ha],languages:[pa],title:[_a]},$$scope:{ctx:o}}}),{c(){J(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,a){K(t,e,a),s=!0},p(e,a){const l={};a&129&&(l.$$scope={dirty:a,ctx:e}),t.$set(l)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function _a(o){let t,s;return t=new ga({props:{slot:"title",link:o[4].getLink(),text:o[4].getTitle()}}),{c(){J(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,a){K(t,e,a),s=!0},p(e,a){const l={};a&1&&(l.link=e[4].getLink()),a&1&&(l.text=e[4].getTitle()),t.$set(l)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function pa(o){let t,s=o[4].getGenLangs()+"",e,a,l=o[4].getLangs()+"",r,_;return{c(){t=T("p"),e=L(s),a=w(),r=L(l),_=w(),this.h()},l(c){t=d(c,"P",{slot:!0,class:!0});var v=y(t);e=C(v,s),a=b(v),r=C(v,l),_=b(v),v.forEach(f),this.h()},h(){i(t,"slot","languages"),i(t,"class","svelte-1nap308")},m(c,v){B(c,t,v),n(t,e),n(t,a),n(t,r),n(t,_)},p(c,v){v&1&&s!==(s=c[4].getGenLangs()+"")&&q(e,s),v&1&&l!==(l=c[4].getLangs()+"")&&q(r,l)},d(c){c&&f(t)}}}function ha(o){let t,s=o[4].getBody()+"",e,a;return{c(){t=T("p"),e=L(s),a=w(),this.h()},l(l){t=d(l,"P",{slot:!0,class:!0});var r=y(t);e=C(r,s),a=b(r),r.forEach(f),this.h()},h(){i(t,"slot","body"),i(t,"class","svelte-1nap308")},m(l,r){B(l,t,r),n(t,e),n(t,a)},p(l,r){r&1&&s!==(s=l[4].getBody()+"")&&q(e,s)},d(l){l&&f(t)}}}function Ta(o){let t,s;return t=new fa({props:{slot:"contact",ngoContact:o[4].getContact(),ngoDisplay:o[4].getContactDisplay()}}),{c(){J(t.$$.fragment)},l(e){W(t.$$.fragment,e)},m(e,a){K(t,e,a),s=!0},p(e,a){const l={};a&1&&(l.ngoContact=e[4].getContact()),a&1&&(l.ngoDisplay=e[4].getContactDisplay()),t.$set(l)},i(e){s||(E(t.$$.fragment,e),s=!0)},o(e){N(t.$$.fragment,e),s=!1},d(e){Q(t,e)}}}function Kt(o){let t=o[4].getString().toLowerCase().indexOf(o[1].toLowerCase())!==-1,s,e,a=t&&Wt(o);return{c(){a&&a.c(),s=Pt()},l(l){a&&a.l(l),s=Pt()},m(l,r){a&&a.m(l,r),B(l,s,r),e=!0},p(l,r){r&3&&(t=l[4].getString().toLowerCase().indexOf(l[1].toLowerCase())!==-1),t?a?(a.p(l,r),r&3&&E(a,1)):(a=Wt(l),a.c(),E(a,1),a.m(s.parentNode,s)):a&&(Zt(),N(a,1,1,()=>{a=null}),te())},i(l){e||(E(a),e=!0)},o(l){N(a),e=!1},d(l){a&&a.d(l),l&&f(s)}}}function da(o){let t,s,e,a=ia.getText()+"",l,r,_,c,v,et,at,U,u,I,st,lt,D,nt,X,rt,V,ot,A,it,gt,Y,ct,R,ut,G,ft,_t,Z,pt,z,ht,O,Tt,dt,F,H,S,tt,xt,wt;t=new ie({});let M=o[0],h=[];for(let g=0;g<M.length;g+=1)h[g]=Kt(Jt(o,M,g));const ee=g=>N(h[g],1,1,()=>{h[g]=null});return{c(){J(t.$$.fragment),s=w(),e=T("p"),l=L(a),r=w(),_=T("div"),c=T("div"),v=T("p"),et=L("Filter NGOs"),at=w(),U=T("div"),u=T("form"),I=T("label"),st=L("Search:"),lt=w(),D=T("input"),nt=w(),X=T("br"),rt=w(),V=T("input"),ot=w(),A=T("label"),it=L("Legal"),gt=w(),Y=T("br"),ct=w(),R=T("input"),ut=w(),G=T("label"),ft=L("Legal"),_t=w(),Z=T("br"),pt=w(),z=T("input"),ht=w(),O=T("label"),Tt=L("Legal"),dt=w(),F=T("div"),H=T("div"),S=T("ul");for(let g=0;g<h.length;g+=1)h[g].c();this.h()},l(g){W(t.$$.fragment,g),s=b(g),e=d(g,"P",{class:!0});var m=y(e);l=C(m,a),m.forEach(f),r=b(g),_=d(g,"DIV",{class:!0});var p=y(_);c=d(p,"DIV",{class:!0});var j=y(c);v=d(j,"P",{class:!0});var bt=y(v);et=C(bt,"Filter NGOs"),bt.forEach(f),at=b(j),U=d(j,"DIV",{class:!0});var vt=y(U);u=d(vt,"FORM",{class:!0});var x=y(u);I=d(x,"LABEL",{for:!0,class:!0});var yt=y(I);st=C(yt,"Search:"),yt.forEach(f),lt=b(x),D=d(x,"INPUT",{type:!0,id:!0,class:!0}),nt=b(x),X=d(x,"BR",{class:!0}),rt=b(x),V=d(x,"INPUT",{type:!0,id:!0,class:!0}),ot=b(x),A=d(x,"LABEL",{for:!0,class:!0});var kt=y(A);it=C(kt,"Legal"),kt.forEach(f),gt=b(x),Y=d(x,"BR",{class:!0}),ct=b(x),R=d(x,"INPUT",{type:!0,id:!0,class:!0}),ut=b(x),G=d(x,"LABEL",{for:!0,class:!0});var $t=y(G);ft=C($t,"Legal"),$t.forEach(f),_t=b(x),Z=d(x,"BR",{class:!0}),pt=b(x),z=d(x,"INPUT",{type:!0,id:!0,class:!0}),ht=b(x),O=d(x,"LABEL",{for:!0,class:!0});var Lt=y(O);Tt=C(Lt,"Legal"),Lt.forEach(f),x.forEach(f),vt.forEach(f),j.forEach(f),dt=b(p),F=d(p,"DIV",{class:!0});var Ct=y(F);H=d(Ct,"DIV",{class:!0});var Et=y(H);S=d(Et,"UL",{class:!0});var Dt=y(S);for(let mt=0;mt<h.length;mt+=1)h[mt].l(Dt);Dt.forEach(f),Et.forEach(f),Ct.forEach(f),p.forEach(f),this.h()},h(){i(e,"class","ngo-title svelte-1nap308"),i(v,"class","filter-title svelte-1nap308"),i(I,"for","searchbar"),i(I,"class","svelte-1nap308"),i(D,"type","search"),i(D,"id","searchbar"),i(D,"class","svelte-1nap308"),i(X,"class","svelte-1nap308"),i(V,"type","checkbox"),i(V,"id","legal"),i(V,"class","svelte-1nap308"),i(A,"for","legal"),i(A,"class","svelte-1nap308"),i(Y,"class","svelte-1nap308"),i(R,"type","checkbox"),i(R,"id","legal"),i(R,"class","svelte-1nap308"),i(G,"for","legal"),i(G,"class","svelte-1nap308"),i(Z,"class","svelte-1nap308"),i(z,"type","checkbox"),i(z,"id","legal"),i(z,"class","svelte-1nap308"),i(O,"for","legal"),i(O,"class","svelte-1nap308"),i(u,"class","filter-list-form svelte-1nap308"),i(U,"class","filter-list svelte-1nap308"),i(c,"class","filter-wrapper svelte-1nap308"),i(S,"class","svelte-1nap308"),i(H,"class","block-wrapper svelte-1nap308"),i(F,"class","ngo-wrapper svelte-1nap308"),i(_,"class","page-wrapper svelte-1nap308")},m(g,m){K(t,g,m),B(g,s,m),B(g,e,m),n(e,l),B(g,r,m),B(g,_,m),n(_,c),n(c,v),n(v,et),n(c,at),n(c,U),n(U,u),n(u,I),n(I,st),n(u,lt),n(u,D),Nt(D,o[1]),n(u,nt),n(u,X),n(u,rt),n(u,V),n(u,ot),n(u,A),n(A,it),n(u,gt),n(u,Y),n(u,ct),n(u,R),n(u,ut),n(u,G),n(G,ft),n(u,_t),n(u,Z),n(u,pt),n(u,z),n(u,ht),n(u,O),n(O,Tt),n(_,dt),n(_,F),n(F,H),n(H,S);for(let p=0;p<h.length;p+=1)h[p]&&h[p].m(S,null);tt=!0,xt||(wt=ne(D,"input",o[2]),xt=!0)},p(g,m){if(m&2&&D.value!==g[1]&&Nt(D,g[1]),m&3){M=g[0];let p;for(p=0;p<M.length;p+=1){const j=Jt(g,M,p);h[p]?(h[p].p(j,m),E(h[p],1)):(h[p]=Kt(j),h[p].c(),E(h[p],1),h[p].m(S,null))}for(Zt(),p=M.length;p<h.length;p+=1)ee(p);te()}},i(g){if(!tt){E(t.$$.fragment,g);for(let m=0;m<M.length;m+=1)E(h[m]);tt=!0}},o(g){N(t.$$.fragment,g),h=h.filter(Boolean);for(let m=0;m<h.length;m+=1)N(h[m]);tt=!1},d(g){Q(t,g),g&&f(s),g&&f(e),g&&f(r),g&&f(_),re(h,g),xt=!1,wt()}}}function xa(o){let t,s,e;return s=new oe({props:{$$slots:{default:[da]},$$scope:{ctx:o}}}),{c(){t=T("main"),J(s.$$.fragment),this.h()},l(a){t=d(a,"MAIN",{class:!0});var l=y(t);W(s.$$.fragment,l),l.forEach(f),this.h()},h(){i(t,"class","svelte-1nap308")},m(a,l){B(a,t,l),K(s,t,null),e=!0},p(a,[l]){const r={};l&131&&(r.$$scope={dirty:l,ctx:a}),s.$set(r)},i(a){e||(E(s.$$.fragment,a),e=!0)},o(a){N(s.$$.fragment,a),e=!1},d(a){a&&f(t),Q(s)}}}function ma(o,t,s){let e=[],a="";l();function l(){s(0,e=[new $("https://www.welcome-united.org",ue.getText(),k.getText(),fe.getText(),_e.getText(),It.getText(),It.getText()),new $("http://jogspace.net",pe.getText(),k.getText(),he.getText(),Te.getText(),At.getText(),At.getText()),new $("http://thecaravan.org",de.getText(),k.getText(),xe.getText(),me.getText(),Gt.getText(),Gt.getText()),new $("http://www.thevoiceforum.org/",we.getText(),k.getText(),be.getText(),ve.getText(),Ot.getText(),Ot.getText()),new $("https://www.proasyl.de",ye.getText(),k.getText(),ke.getText(),$e.getText(),Le.getText(),"proasyl@proasyl.de"),new $("https://w2eu.info",Ce.getText(),k.getText(),Ee.getText(),De.getText(),St.getText(),St.getText()),new $("https://www.frauenrechte.de/",Be.getText(),k.getText(),Ne.getText(),Pe.getText(),Mt.getText(),Mt.getText()),new $("https://www.medibuero-kiel.de/",Ie.getText(),k.getText(),Ae.getText(),Ge.getText(),Oe.getText(),"info@medibuero-kiel.de"),new $("https://verband-dsh.de/ussa/",Se.getText(),k.getText(),Me.getText(),je.getText(),jt.getText(),jt.getText()),new $("https://www.unitedforukraine.org",Ue.getText(),k.getText(),Ve.getText(),Re.getText(),Ut.getText(),Ut.getText()),new $("https://immigration4ukraine.eu/",ze.getText(),k.getText(),Fe.getText(),He.getText(),Vt.getText(),Vt.getText()),new $(qe.getText(),Je.getText(),k.getText(),We.getText(),Ke.getText(),Rt.getText(),Rt.getText()),new $("https://gsbtb.org/",Qe.getText(),k.getText(),Xe.getText(),Ye.getText(),zt.getText(),zt.getText()),new $("https://www.willkommensbuendnis-steglitz-zehlendorf.de/",Ze.getText(),k.getText(),ta.getText(),ea.getText(),Ft.getText(),Ft.getText()),new $("https://fluechtlingsrat-berlin.de/",aa.getText(),k.getText(),sa.getText(),la.getText(),Ht.getText(),Ht.getText()),new $("https://www.refugees-welcome.net/",na.getText(),k.getText(),ra.getText(),oa.getText(),qt.getText(),qt.getText())])}le(async()=>{l()});function r(){a=this.value,s(1,a)}return[e,a,r]}class Ca extends Qt{constructor(t){super(),Xt(this,t,ma,xa,Yt,{})}}export{Ca as default};
