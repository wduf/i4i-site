var qt=Object.defineProperty;var Kt=(i,e,l)=>e in i?qt(i,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):i[e]=l;var V=(i,e,l)=>(Kt(i,typeof e!="symbol"?e+"":e,l),l);import{S as Rt,i as Vt,s as Gt,k as _,q as z,a as m,l as p,m as w,r as L,c as T,h as d,n as s,b as $,G as n,u as se,H as Tt,y as ne,L as Ft,z as re,A as ie,g as C,d as R,B as oe,o as Jt,N as vt,J as Q,v as St,f as Ot,O as Wt,K as Qt,e as bt}from"../chunks/index.2e46d056.js";import"../chunks/paths.e55a0629.js";import{P as Xt,H as Yt}from"../chunks/pageWrapper.b1f52674.js";import{T as Zt}from"../chunks/textBlock.0f562fb3.js";import{c as ea,t as Qe,w as ta,a as y,b as aa,d as la,e as xt,j as sa,f as na,g as ra,h as wt,k as ia,i as oa,l as ca,m as kt,v as ga,n as ua,o as fa,p as yt,q as ha,r as _a,s as pa,u as da,x as ma,y as Ta,z as va,A as jt,B as ba,C as xa,D as wa,E as zt,F as ka,G as ya,H as ja,I as za,J as La,K as $a,L as Ea,M as Lt,N as Ca,O as Ba,P as Ia,Q as $t,R as Da,S as Pa,T as Na,U as Et,V as Aa,W as Ua,X as Ma,Y as Ra,Z as Ct,_ as Va,$ as Ga,a0 as Sa,a1 as Bt,a2 as Oa,a3 as Ha,a4 as qa,a5 as It,a6 as Ka,a7 as Fa,a8 as Ja,a9 as Dt,aa as Wa,ab as Qa,ac as Xa,ad as Pt,ae as Ya,af as Za,ag as el,ah as tl,ai as al,aj as ll,ak as sl,al as nl,am as rl}from"../chunks/ngoText.7770cab0.js";import{M as il}from"../chunks/myLink.6f973151.js";function ol(i){let e,l=i[0].getText()+"",t,r,a,c;return{c(){e=_("a"),t=z(l),r=m(),a=z(i[2]),this.h()},l(u){e=p(u,"A",{href:!0,target:!0,rel:!0});var h=w(e);t=L(h,l),r=T(h),a=L(h,i[2]),h.forEach(d),this.h()},h(){s(e,"href",c="mailto:"+i[1]),s(e,"target","_blank"),s(e,"rel","noreferrer")},m(u,h){$(u,e,h),n(e,t),n(e,r),n(e,a)},p(u,[h]){h&1&&l!==(l=u[0].getText()+"")&&se(t,l),h&4&&se(a,u[2]),h&2&&c!==(c="mailto:"+u[1])&&s(e,"href",c)},i:Tt,o:Tt,d(u){u&&d(e)}}}function cl(i,e,l){let{baseContact:t=ea}=e,{ngoContact:r}=e,{ngoDisplay:a}=e;return i.$$set=c=>{"baseContact"in c&&l(0,t=c.baseContact),"ngoContact"in c&&l(1,r=c.ngoContact),"ngoDisplay"in c&&l(2,a=c.ngoDisplay)},[t,r,a]}class gl extends Rt{constructor(e){super(),Vt(this,e,cl,ol,Gt,{baseContact:0,ngoContact:1,ngoDisplay:2})}}class j{constructor(e,l,t,r,a,c,u){V(this,"link");V(this,"title");V(this,"genLangs");V(this,"langs");V(this,"body");V(this,"contact");V(this,"displayContact");this.link=e,this.title=l,this.genLangs=t,this.langs=r,this.body=a,this.contact=c,this.displayContact=u}getString(){return this.link+this.title+this.genLangs+this.langs+this.body+this.contact}getLink(){return this.link}getTitle(){return this.title}getGenLangs(){return this.genLangs}getLangs(){return this.langs}getBody(){return this.body}getContact(){return this.contact}getContactDisplay(){return this.displayContact}}function Nt(i,e,l){const t=i.slice();return t[11]=e[l],t}function At(i){let e,l;return e=new Zt({props:{$$slots:{contact:[_l],body:[hl],languages:[fl],title:[ul]},$$scope:{ctx:i}}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ie(e,t,r),l=!0},p(t,r){const a={};r&16385&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function ul(i){let e,l;return e=new il({props:{slot:"title",link:i[11].getLink(),text:i[11].getTitle()}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ie(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.link=t[11].getLink()),r&1&&(a.text=t[11].getTitle()),e.$set(a)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function fl(i){let e,l=i[11].getGenLangs()+"",t,r,a=i[11].getLangs()+"",c,u;return{c(){e=_("p"),t=z(l),r=m(),c=z(a),u=m(),this.h()},l(h){e=p(h,"P",{slot:!0,class:!0});var k=w(e);t=L(k,l),r=T(k),c=L(k,a),u=T(k),k.forEach(d),this.h()},h(){s(e,"slot","languages"),s(e,"class","svelte-1jh5z5t")},m(h,k){$(h,e,k),n(e,t),n(e,r),n(e,c),n(e,u)},p(h,k){k&1&&l!==(l=h[11].getGenLangs()+"")&&se(t,l),k&1&&a!==(a=h[11].getLangs()+"")&&se(c,a)},d(h){h&&d(e)}}}function hl(i){let e,l=i[11].getBody()+"",t,r;return{c(){e=_("p"),t=z(l),r=m(),this.h()},l(a){e=p(a,"P",{slot:!0,class:!0});var c=w(e);t=L(c,l),r=T(c),c.forEach(d),this.h()},h(){s(e,"slot","body"),s(e,"class","svelte-1jh5z5t")},m(a,c){$(a,e,c),n(e,t),n(e,r)},p(a,c){c&1&&l!==(l=a[11].getBody()+"")&&se(t,l)},d(a){a&&d(e)}}}function _l(i){let e,l;return e=new gl({props:{slot:"contact",ngoContact:i[11].getContact(),ngoDisplay:i[11].getContactDisplay()}}),{c(){ne(e.$$.fragment)},l(t){re(e.$$.fragment,t)},m(t,r){ie(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.ngoContact=t[11].getContact()),r&1&&(a.ngoDisplay=t[11].getContactDisplay()),e.$set(a)},i(t){l||(C(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){oe(e,t)}}}function Ut(i){let e=Mt(i[11].getString(),i[1],i[2]),l,t,r=e&&At(i);return{c(){r&&r.c(),l=bt()},l(a){r&&r.l(a),l=bt()},m(a,c){r&&r.m(a,c),$(a,l,c),t=!0},p(a,c){c&7&&(e=Mt(a[11].getString(),a[1],a[2])),e?r?(r.p(a,c),c&7&&C(r,1)):(r=At(a),r.c(),C(r,1),r.m(l.parentNode,l)):r&&(St(),R(r,1,1,()=>{r=null}),Ot())},i(a){t||(C(r),t=!0)},o(a){R(r),t=!1},d(a){r&&r.d(a),a&&d(l)}}}function pl(i){let e,l,t,r=Qe.getText()+"",a,c,u,h,k=Ya.getText()+"",ae,X,E,B,Y,Xe=Za.getText()+"",Te,ve,Z,g,G,Ye=el.getText()+"",be,xe,I,we,ce,ke,D,ye,S,Ze=tl.getText()+"",je,ze,ge,Le,P,$e,O,et=al.getText()+"",Ee,Ce,ue,Be,N,Ie,H,tt=ll.getText()+"",De,Pe,fe,Ne,A,Ae,q,at=sl.getText()+"",Ue,Me,he,Re,U,Ve,K,lt=nl.getText()+"",Ge,Se,_e,Oe,M,He,F,st=rl.getText()+"",qe,Ke,ee,te,J,pe,Fe,nt;e=new Yt({});let W=i[0],b=[];for(let o=0;o<W.length;o+=1)b[o]=Ut(Nt(i,W,o));const Ht=o=>R(b[o],1,1,()=>{b[o]=null});return{c(){ne(e.$$.fragment),l=m(),t=_("p"),a=z(r),c=m(),u=_("div"),h=_("p"),ae=z(k),X=m(),E=_("div"),B=_("div"),Y=_("p"),Te=z(Xe),ve=m(),Z=_("div"),g=_("form"),G=_("label"),be=z(Ye),xe=m(),I=_("input"),we=m(),ce=_("br"),ke=m(),D=_("input"),ye=m(),S=_("label"),je=z(Ze),ze=m(),ge=_("br"),Le=m(),P=_("input"),$e=m(),O=_("label"),Ee=z(et),Ce=m(),ue=_("br"),Be=m(),N=_("input"),Ie=m(),H=_("label"),De=z(tt),Pe=m(),fe=_("br"),Ne=m(),A=_("input"),Ae=m(),q=_("label"),Ue=z(at),Me=m(),he=_("br"),Re=m(),U=_("input"),Ve=m(),K=_("label"),Ge=z(lt),Se=m(),_e=_("br"),Oe=m(),M=_("input"),He=m(),F=_("label"),qe=z(st),Ke=m(),ee=_("div"),te=_("div"),J=_("ul");for(let o=0;o<b.length;o+=1)b[o].c();this.h()},l(o){re(e.$$.fragment,o),l=T(o),t=p(o,"P",{class:!0});var v=w(t);a=L(v,r),v.forEach(d),c=T(o),u=p(o,"DIV",{class:!0});var x=w(u);h=p(x,"P",{class:!0});var le=w(h);ae=L(le,k),le.forEach(d),x.forEach(d),X=T(o),E=p(o,"DIV",{class:!0});var de=w(E);B=p(de,"DIV",{class:!0});var me=w(B);Y=p(me,"P",{class:!0});var rt=w(Y);Te=L(rt,Xe),rt.forEach(d),ve=T(me),Z=p(me,"DIV",{class:!0});var it=w(Z);g=p(it,"FORM",{class:!0});var f=w(g);G=p(f,"LABEL",{for:!0,class:!0});var ot=w(G);be=L(ot,Ye),ot.forEach(d),xe=T(f),I=p(f,"INPUT",{type:!0,id:!0,class:!0}),we=T(f),ce=p(f,"BR",{class:!0}),ke=T(f),D=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),ye=T(f),S=p(f,"LABEL",{for:!0,class:!0});var ct=w(S);je=L(ct,Ze),ct.forEach(d),ze=T(f),ge=p(f,"BR",{class:!0}),Le=T(f),P=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),$e=T(f),O=p(f,"LABEL",{for:!0,class:!0});var gt=w(O);Ee=L(gt,et),gt.forEach(d),Ce=T(f),ue=p(f,"BR",{class:!0}),Be=T(f),N=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),Ie=T(f),H=p(f,"LABEL",{for:!0,class:!0});var ut=w(H);De=L(ut,tt),ut.forEach(d),Pe=T(f),fe=p(f,"BR",{class:!0}),Ne=T(f),A=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),Ae=T(f),q=p(f,"LABEL",{for:!0,class:!0});var ft=w(q);Ue=L(ft,at),ft.forEach(d),Me=T(f),he=p(f,"BR",{class:!0}),Re=T(f),U=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),Ve=T(f),K=p(f,"LABEL",{for:!0,class:!0});var ht=w(K);Ge=L(ht,lt),ht.forEach(d),Se=T(f),_e=p(f,"BR",{class:!0}),Oe=T(f),M=p(f,"INPUT",{type:!0,id:!0,name:!0,class:!0}),He=T(f),F=p(f,"LABEL",{for:!0,class:!0});var _t=w(F);qe=L(_t,st),_t.forEach(d),f.forEach(d),it.forEach(d),me.forEach(d),Ke=T(de),ee=p(de,"DIV",{class:!0});var pt=w(ee);te=p(pt,"DIV",{class:!0});var dt=w(te);J=p(dt,"UL",{class:!0});var mt=w(J);for(let Je=0;Je<b.length;Je+=1)b[Je].l(mt);mt.forEach(d),dt.forEach(d),pt.forEach(d),de.forEach(d),this.h()},h(){s(t,"class","ngo-title center-text svelte-1jh5z5t"),s(h,"class","svelte-1jh5z5t"),s(u,"class","desc-wrapper center-text svelte-1jh5z5t"),s(Y,"class","filter-title svelte-1jh5z5t"),s(G,"for","searchbar"),s(G,"class","svelte-1jh5z5t"),s(I,"type","search"),s(I,"id","searchbar"),s(I,"class","svelte-1jh5z5t"),s(ce,"class","svelte-1jh5z5t"),s(D,"type","checkbox"),s(D,"id","legal"),s(D,"name","legal"),s(D,"class","svelte-1jh5z5t"),s(S,"for","legal"),s(S,"class","svelte-1jh5z5t"),s(ge,"class","svelte-1jh5z5t"),s(P,"type","checkbox"),s(P,"id","medical"),s(P,"name","medical"),s(P,"class","svelte-1jh5z5t"),s(O,"for","medical"),s(O,"class","svelte-1jh5z5t"),s(ue,"class","svelte-1jh5z5t"),s(N,"type","checkbox"),s(N,"id","community"),s(N,"name","community"),s(N,"class","svelte-1jh5z5t"),s(H,"for","medical"),s(H,"class","svelte-1jh5z5t"),s(fe,"class","svelte-1jh5z5t"),s(A,"type","checkbox"),s(A,"id","wiki"),s(A,"name","wiki"),s(A,"class","svelte-1jh5z5t"),s(q,"for","medical"),s(q,"class","svelte-1jh5z5t"),s(he,"class","svelte-1jh5z5t"),s(U,"type","checkbox"),s(U,"id","iran"),s(U,"name","iran"),s(U,"class","svelte-1jh5z5t"),s(K,"for","medical"),s(K,"class","svelte-1jh5z5t"),s(_e,"class","svelte-1jh5z5t"),s(M,"type","checkbox"),s(M,"id","syria"),s(M,"name","syria"),s(M,"class","svelte-1jh5z5t"),s(F,"for","legal"),s(F,"class","svelte-1jh5z5t"),s(g,"class","filter-list-form svelte-1jh5z5t"),s(Z,"class","filter-list svelte-1jh5z5t"),s(B,"class","filter-wrapper svelte-1jh5z5t"),s(J,"class","svelte-1jh5z5t"),s(te,"class","block-wrapper svelte-1jh5z5t"),s(ee,"class","ngo-wrapper svelte-1jh5z5t"),s(E,"class","page-wrapper svelte-1jh5z5t")},m(o,v){ie(e,o,v),$(o,l,v),$(o,t,v),n(t,a),$(o,c,v),$(o,u,v),n(u,h),n(h,ae),$(o,X,v),$(o,E,v),n(E,B),n(B,Y),n(Y,Te),n(B,ve),n(B,Z),n(Z,g),n(g,G),n(G,be),n(g,xe),n(g,I),vt(I,i[1]),n(g,we),n(g,ce),n(g,ke),n(g,D),D.checked=i[2][0],n(g,ye),n(g,S),n(S,je),n(g,ze),n(g,ge),n(g,Le),n(g,P),P.checked=i[2][1],n(g,$e),n(g,O),n(O,Ee),n(g,Ce),n(g,ue),n(g,Be),n(g,N),N.checked=i[2][2],n(g,Ie),n(g,H),n(H,De),n(g,Pe),n(g,fe),n(g,Ne),n(g,A),A.checked=i[2][3],n(g,Ae),n(g,q),n(q,Ue),n(g,Me),n(g,he),n(g,Re),n(g,U),U.checked=i[2][5],n(g,Ve),n(g,K),n(K,Ge),n(g,Se),n(g,_e),n(g,Oe),n(g,M),M.checked=i[2][6],n(g,He),n(g,F),n(F,qe),n(E,Ke),n(E,ee),n(ee,te),n(te,J);for(let x=0;x<b.length;x+=1)b[x]&&b[x].m(J,null);pe=!0,Fe||(nt=[Q(I,"input",i[3]),Q(D,"change",i[4]),Q(P,"change",i[5]),Q(N,"change",i[6]),Q(A,"change",i[7]),Q(U,"change",i[8]),Q(M,"change",i[9])],Fe=!0)},p(o,v){if(v&2&&I.value!==o[1]&&vt(I,o[1]),v&4&&(D.checked=o[2][0]),v&4&&(P.checked=o[2][1]),v&4&&(N.checked=o[2][2]),v&4&&(A.checked=o[2][3]),v&4&&(U.checked=o[2][5]),v&4&&(M.checked=o[2][6]),v&7){W=o[0];let x;for(x=0;x<W.length;x+=1){const le=Nt(o,W,x);b[x]?(b[x].p(le,v),C(b[x],1)):(b[x]=Ut(le),b[x].c(),C(b[x],1),b[x].m(J,null))}for(St(),x=W.length;x<b.length;x+=1)Ht(x);Ot()}},i(o){if(!pe){C(e.$$.fragment,o);for(let v=0;v<W.length;v+=1)C(b[v]);pe=!0}},o(o){R(e.$$.fragment,o),b=b.filter(Boolean);for(let v=0;v<b.length;v+=1)R(b[v]);pe=!1},d(o){oe(e,o),o&&d(l),o&&d(t),o&&d(c),o&&d(u),o&&d(X),o&&d(E),Wt(b,o),Fe=!1,Qt(nt)}}}function dl(i){let e,l,t,r,a,c;return document.title=l="Immigration4Iran | "+Qe.getText(),a=new Xt({props:{$$slots:{default:[pl]},$$scope:{ctx:i}}}),{c(){e=_("link"),t=m(),r=_("main"),ne(a.$$.fragment),this.h()},l(u){const h=Ft("svelte-4sarwk",document.head);e=p(h,"LINK",{rel:!0,href:!0,type:!0,class:!0}),h.forEach(d),t=T(u),r=p(u,"MAIN",{class:!0});var k=w(r);re(a.$$.fragment,k),k.forEach(d),this.h()},h(){s(e,"rel","icon"),s(e,"href","./favicon.png"),s(e,"type","image/png"),s(e,"class","svelte-1jh5z5t"),s(r,"class","svelte-1jh5z5t")},m(u,h){n(document.head,e),$(u,t,h),$(u,r,h),ie(a,r,null),c=!0},p(u,[h]){(!c||h&0)&&l!==(l="Immigration4Iran | "+Qe.getText())&&(document.title=l);const k={};h&16391&&(k.$$scope={dirty:h,ctx:u}),a.$set(k)},i(u){c||(C(a.$$.fragment,u),c=!0)},o(u){R(a.$$.fragment,u),c=!1},d(u){d(e),u&&d(t),u&&d(r),oe(a)}}}let ml=!1,Tl=!1;function Mt(i,e,l){return console.log("legal",ml),console.log(Tl),We(i,e)&&(We(i,"legal")||!l[0])&&(We(i,"medical")||!l[1])}function We(i,e){return i.toLowerCase().indexOf(e.toLowerCase())!==-1}function vl(i,e,l){let t=[],r="",a=[];c();function c(){l(0,t=[new j("https://www.welcome-united.org",ta.getText(),y.getText(),aa.getText(),la.getText(),xt.getText(),xt.getText()),new j("http://jogspace.net",sa.getText(),y.getText(),na.getText(),ra.getText(),wt.getText(),wt.getText()),new j("http://thecaravan.org",ia.getText(),y.getText(),oa.getText(),ca.getText(),kt.getText(),kt.getText()),new j("http://www.thevoiceforum.org/",ga.getText(),y.getText(),ua.getText(),fa.getText(),yt.getText(),yt.getText()),new j("https://www.proasyl.de",ha.getText(),y.getText(),_a.getText(),pa.getText(),da.getText(),"proasyl@proasyl.de"),new j("https://w2eu.info",ma.getText(),y.getText(),Ta.getText(),va.getText(),jt.getText(),jt.getText()),new j("https://www.frauenrechte.de/",ba.getText(),y.getText(),xa.getText(),wa.getText(),zt.getText(),zt.getText()),new j("https://www.medibuero-kiel.de/",ka.getText(),y.getText(),ya.getText(),ja.getText(),za.getText(),"info@medibuero-kiel.de"),new j("https://verband-dsh.de/ussa/",La.getText(),y.getText(),$a.getText(),Ea.getText(),Lt.getText(),Lt.getText()),new j("https://www.unitedforukraine.org",Ca.getText(),y.getText(),Ba.getText(),Ia.getText(),$t.getText(),$t.getText()),new j("https://immigration4ukraine.eu/",Da.getText(),y.getText(),Pa.getText(),Na.getText(),Et.getText(),Et.getText()),new j(Aa.getText(),Ua.getText(),y.getText(),Ma.getText(),Ra.getText(),Ct.getText(),Ct.getText()),new j("https://gsbtb.org/",Va.getText(),y.getText(),Ga.getText(),Sa.getText(),Bt.getText(),Bt.getText()),new j("https://www.willkommensbuendnis-steglitz-zehlendorf.de/",Oa.getText(),y.getText(),Ha.getText(),qa.getText(),It.getText(),It.getText()),new j("https://fluechtlingsrat-berlin.de/",Ka.getText(),y.getText(),Fa.getText(),Ja.getText(),Dt.getText(),Dt.getText()),new j("https://www.refugees-welcome.net/",Wa.getText(),y.getText(),Qa.getText(),Xa.getText(),Pt.getText(),Pt.getText())])}Jt(async()=>{c()});function u(){r=this.value,l(1,r)}function h(){a[0]=this.checked,l(2,a)}function k(){a[1]=this.checked,l(2,a)}function ae(){a[2]=this.checked,l(2,a)}function X(){a[3]=this.checked,l(2,a)}function E(){a[5]=this.checked,l(2,a)}function B(){a[6]=this.checked,l(2,a)}return[t,r,a,u,h,k,ae,X,E,B]}class Ll extends Rt{constructor(e){super(),Vt(this,e,vl,dl,Gt,{})}}export{Ll as default};