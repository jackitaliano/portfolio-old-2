var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function s(t){return"function"==typeof t}function r(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,i;function l(t,e){return t===e||(c||(c=document.createElement("a")),c.href=e,t===c.href)}function a(t,e,n,o){if(t){const s=u(t,e,n,o);return t[0](s)}}function u(t,e,n,o){return t[1]&&o?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](o(e))):n.ctx}function $(t,e,n,o){if(t[2]&&o){const s=t[2](o(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|s[o];return t}return e.dirty|s}return e.dirty}function d(t,e,n,o,s,r){if(s){const c=u(e,n,o,r);t.p(c,s)}}function f(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function p(t,e){t.appendChild(e)}function m(t,e,n){t.insertBefore(e,n||null)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function x(t){return document.createTextNode(t)}function h(){return x(" ")}function b(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t){i=t}function L(t){(function(){if(!i)throw new Error("Function called outside component initialization");return i})().$$.on_mount.push(t)}const E=[],k=[];let _=[];const C=[],j=Promise.resolve();let I=!1;function S(t){_.push(t)}const M=new Set;let A=0;function N(){if(0!==A)return;const t=i;do{try{for(;A<E.length;){const t=E[A];A++,w(t),T(t.$$)}}catch(t){throw E.length=0,A=0,t}for(w(null),E.length=0,A=0;k.length;)k.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];M.has(e)||(M.add(e),e())}_.length=0}while(E.length);for(;C.length;)C.pop()();I=!1,M.clear(),w(t)}function T(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}const B=new Set;let Y;function q(){Y={r:0,c:[],p:Y}}function X(){Y.r||o(Y.c),Y=Y.p}function D(t,e){t&&t.i&&(B.delete(t),t.i(e))}function O(t,e,n,o){if(t&&t.o){if(B.has(t))return;B.add(t),Y.c.push((()=>{B.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function V(t){t&&t.c()}function H(t,n,r){const{fragment:c,after_update:i}=t.$$;c&&c.m(n,r),S((()=>{const n=t.$$.on_mount.map(e).filter(s);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),i.forEach(S)}function P(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];_.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),_=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function R(t,e){-1===t.$$.dirty[0]&&(E.push(t),I||(I=!0,j.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function z(e,s,r,c,l,a,u=null,$=[-1]){const d=i;w(e);const f=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:l,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(d?d.$$.context:[])),callbacks:n(),dirty:$,skip_bound:!1,root:s.target||d.$$.root};u&&u(f.root);let p=!1;if(f.ctx=r?r(e,s.props||{},((t,n,...o)=>{const s=o.length?o[0]:n;return f.ctx&&l(f.ctx[t],f.ctx[t]=s)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](s),p&&R(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!c&&c(f.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);f.fragment&&f.fragment.l(t),t.forEach(g)}else f.fragment&&f.fragment.c();s.intro&&D(e.$$.fragment),H(e,s.target,s.anchor),N()}w(d)}class F{$$=void 0;$$set=void 0;$destroy(){P(this,1),this.$destroy=t}$on(e,n){if(!s(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function G(e){let n,o,s,r,c;return{c(){n=v("div"),o=v("div"),o.innerHTML="",s=h(),r=v("img"),y(o,"class","bg-filter svelte-1iouwxo"),y(r,"class","bg-img svelte-1iouwxo"),l(r.src,c=e[0])||y(r,"src",c),y(r,"alt",e[1]),y(n,"class","bg-img-container svelte-1iouwxo")},m(t,e){m(t,n,e),p(n,o),p(n,s),p(n,r)},p(t,[e]){1&e&&!l(r.src,c=t[0])&&y(r,"src",c),2&e&&y(r,"alt",t[1])},i:t,o:t,d(t){t&&g(n)}}}function J(t,e,n){let{image:o}=e,{alt:s}=e;return t.$$set=t=>{"image"in t&&n(0,o=t.image),"alt"in t&&n(1,s=t.alt)},[o,s]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");class U extends F{constructor(t){super(),z(this,t,J,G,r,{image:0,alt:1})}}function W(e){let n,s,r,c,i,l,a,u,$,d;return{c(){n=v("nav"),s=v("button"),s.textContent="About Me",r=h(),c=v("button"),c.textContent="Experience",i=h(),l=v("button"),l.textContent="Projects",a=h(),u=v("button"),u.textContent="Contact Me",y(s,"class","navbar-item svelte-1p927x"),y(s,"tabindex","0"),y(c,"class","navbar-item svelte-1p927x"),y(c,"tabindex","0"),y(l,"class","navbar-item svelte-1p927x"),y(l,"tabindex","0"),y(u,"class","navbar-item svelte-1p927x"),y(u,"tabindex","0"),y(n,"class","navbar flex justify-around svelte-1p927x")},m(t,o){m(t,n,o),p(n,s),p(n,r),p(n,c),p(n,i),p(n,l),p(n,a),p(n,u),$||(d=[b(s,"click",e[0]),b(c,"click",e[1]),b(l,"click",e[2]),b(u,"click",e[3])],$=!0)},p:t,i:t,o:t,d(t){t&&g(n),$=!1,o(d)}}}function K(t,e){document.getElementById(e).scrollIntoView({behavior:"smooth",block:"start"}),t.target.blur()}function Q(t){return[t=>K(t,"aboutMe"),t=>K(t,"experience"),t=>K(t,"projects"),t=>K(t,"contact")]}class Z extends F{constructor(t){super(),z(this,t,Q,W,r,{})}}function tt(e){let n,o,s;return{c(){n=v("button"),n.innerHTML='<img id="hamburger-img" class="hamburger-img svelte-137oxwz" src="static/images/hamburg.svg" alt="menu button"/>',y(n,"class","hamburger svelte-137oxwz")},m(t,r){m(t,n,r),o||(s=b(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&g(n),o=!1,s()}}}function et(t,e,n){let{handleClick:o}=e,{rotated:s}=e;return t.$$set=t=>{"handleClick"in t&&n(2,o=t.handleClick),"rotated"in t&&n(1,s=t.rotated)},[function(){var t;o(),n(1,s=!s),t=s,document.getElementById("hamburger-img").style.transform=t?"rotate(90deg)":"none"},s,o]}class nt extends F{constructor(t){super(),z(this,t,et,tt,r,{handleClick:2,rotated:1})}}function ot(t){let e,n,s,r,c,i,l,a,u,$,d,f,x,w,L,E,_,j;function I(e){t[3](e)}let S={handleClick:t[1]};return void 0!==t[0]&&(S.rotated=t[0]),s=new nt({props:S}),k.push((()=>function(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}(s,"rotated",I))),{c(){e=v("div"),n=v("div"),V(s.$$.fragment),c=h(),i=v("div"),i.innerHTML="<p>test</p>",l=h(),a=v("nav"),u=v("button"),u.textContent="About Me",$=h(),d=v("button"),d.textContent="Experience",f=h(),x=v("button"),x.textContent="Projects",w=h(),L=v("button"),L.textContent="Contact Me",y(n,"class","menu-button svelte-2gmnl7"),y(i,"id","nav-filter"),y(i,"class","svelte-2gmnl7"),y(u,"class","navmenu-item svelte-2gmnl7"),y(u,"tabindex","0"),y(d,"class","navmenu-item svelte-2gmnl7"),y(d,"tabindex","0"),y(x,"class","navmenu-item svelte-2gmnl7"),y(x,"tabindex","0"),y(L,"class","navmenu-item svelte-2gmnl7"),y(L,"tabindex","0"),y(a,"id","navmenu"),y(a,"class","navmenu flex flex-col svelte-2gmnl7")},m(o,r){m(o,e,r),p(e,n),H(s,n,null),p(e,c),p(e,i),p(e,l),p(e,a),p(a,u),p(a,$),p(a,d),p(a,f),p(a,x),p(a,w),p(a,L),E=!0,_||(j=[b(u,"mouseup",t[4]),b(d,"mouseup",t[5]),b(x,"mouseup",t[6]),b(L,"mouseup",t[7])],_=!0)},p(t,[e]){const n={};var o;!r&&1&e&&(r=!0,n.rotated=t[0],o=()=>r=!1,C.push(o)),s.$set(n)},i(t){E||(D(s.$$.fragment,t),E=!0)},o(t){O(s.$$.fragment,t),E=!1},d(t){t&&g(e),P(s),_=!1,o(j)}}}function st(t){const e=document.getElementById("navmenu"),n=document.getElementById("nav-filter");t?(e.style.top="0",e.style.opacity="1",n.style.top="0",n.style.webkitBackdropFilter="blur(4px)"):(e.style.top="-15em",e.style.opacity="0",n.style.top="-15em",n.style.webkitBackdropFilter="none")}function rt(t,e,n){let o=!1,s=0,r=0;async function c(){n(0,o=!o),st(o)}function i(t){n(0,o=!1),st(o);document.getElementById(t).scrollIntoView({behavior:"smooth",block:"start"})}L((()=>{const t=document.getElementById("navmenu");t.addEventListener("touchstart",(t=>{s=t.changedTouches[0].screenY})),t.addEventListener("touchend",(t=>{r=t.changedTouches[0].screenY,function(){const t=40;r<s&&s-r>t&&c()}()}))}));return[o,c,i,function(t){o=t,n(0,o)},()=>i("aboutMe"),()=>i("experience"),()=>i("projects"),()=>i("contact")]}class ct extends F{constructor(t){super(),z(this,t,rt,ot,r,{})}}function it(t){let e,n;const o=t[2].default,s=a(o,t,t[1],null);return{c(){e=v("div"),s&&s.c(),y(e,"id",t[0]),y(e,"class","section svelte-ajktmx")},m(t,o){m(t,e,o),s&&s.m(e,null),n=!0},p(t,[r]){s&&s.p&&(!n||2&r)&&d(s,o,t,t[1],n?$(o,t[1],r,null):f(t[1]),null),(!n||1&r)&&y(e,"id",t[0])},i(t){n||(D(s,t),n=!0)},o(t){O(s,t),n=!1},d(t){t&&g(e),s&&s.d(t)}}}function lt(t,e,n){let{$$slots:o={},$$scope:s}=e,{id:r}=e;return t.$$set=t=>{"id"in t&&n(0,r=t.id),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class at extends F{constructor(t){super(),z(this,t,lt,it,r,{id:0})}}function ut(t){let e,n;const o=t[1].default,s=a(o,t,t[0],null);return{c(){e=v("h1"),s&&s.c(),y(e,"class","svelte-1l885ha")},m(t,o){m(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&d(s,o,t,t[0],n?$(o,t[0],e,null):f(t[0]),null)},i(t){n||(D(s,t),n=!0)},o(t){O(s,t),n=!1},d(t){t&&g(e),s&&s.d(t)}}}function $t(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class dt extends F{constructor(t){super(),z(this,t,$t,ut,r,{})}}function ft(t){let e,n;const o=t[1].default,s=a(o,t,t[0],null);return{c(){e=v("p"),s&&s.c(),y(e,"class","svelte-1keslms")},m(t,o){m(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&d(s,o,t,t[0],n?$(o,t[0],e,null):f(t[0]),null)},i(t){n||(D(s,t),n=!0)},o(t){O(s,t),n=!1},d(t){t&&g(e),s&&s.d(t)}}}function pt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class mt extends F{constructor(t){super(),z(this,t,pt,ft,r,{})}}const gt=t=>({}),vt=t=>({class:"li svelte-b5063g"});function xt(t){let e,n;const o=t[1].default,s=a(o,t,t[0],vt);return{c(){e=v("ul"),s&&s.c(),y(e,"class","svelte-b5063g")},m(t,o){m(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&d(s,o,t,t[0],n?$(o,t[0],e,gt):f(t[0]),vt)},i(t){n||(D(s,t),n=!0)},o(t){O(s,t),n=!1},d(t){t&&g(e),s&&s.d(t)}}}function ht(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class bt extends F{constructor(t){super(),z(this,t,ht,xt,r,{})}}function yt(t){let e;return{c(){e=x("I'm Jack")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function wt(t){let e;return{c(){e=x("I'm a:")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Lt(e){let n,o,s;return{c(){n=v("li"),n.textContent="Computer Science & Engineering Student at The Ohio State University",o=h(),s=v("li"),s.textContent="AI / Web Development Intern at NASA Glenn Research"},m(t,e){m(t,n,e),m(t,o,e),m(t,s,e)},p:t,d(t){t&&(g(n),g(o),g(s))}}}function Et(t){let e,n,o,s,r,c,i,l;return o=new dt({props:{$$slots:{default:[yt]},$$scope:{ctx:t}}}),r=new mt({props:{$$slots:{default:[wt]},$$scope:{ctx:t}}}),i=new bt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}}),{c(){e=v("div"),n=v("div"),V(o.$$.fragment),s=h(),V(r.$$.fragment),c=h(),V(i.$$.fragment),y(e,"class","flex justify-between")},m(t,a){m(t,e,a),p(e,n),H(o,n,null),p(n,s),H(r,n,null),p(n,c),H(i,n,null),l=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const s={};1&e&&(s.$$scope={dirty:e,ctx:t}),r.$set(s);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),i.$set(c)},i(t){l||(D(o.$$.fragment,t),D(r.$$.fragment,t),D(i.$$.fragment,t),l=!0)},o(t){O(o.$$.fragment,t),O(r.$$.fragment,t),O(i.$$.fragment,t),l=!1},d(t){t&&g(e),P(o),P(r),P(i)}}}class kt extends F{constructor(t){super(),z(this,t,null,Et,r,{})}}function _t(t){let e;return{c(){e=x("Experience")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Ct(t){let e;return{c(){e=x("Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function jt(t){let e,n,o,s,r;return n=new dt({props:{$$slots:{default:[_t]},$$scope:{ctx:t}}}),s=new mt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){e=v("div"),V(n.$$.fragment),o=h(),V(s.$$.fragment)},m(t,c){m(t,e,c),H(n,e,null),p(e,o),H(s,e,null),r=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){r||(D(n.$$.fragment,t),D(s.$$.fragment,t),r=!0)},o(t){O(n.$$.fragment,t),O(s.$$.fragment,t),r=!1},d(t){t&&g(e),P(n),P(s)}}}class It extends F{constructor(t){super(),z(this,t,null,jt,r,{})}}function St(t){let e;return{c(){e=x("Projects")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Mt(t){let e;return{c(){e=x("Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function At(t){let e,n,o,s,r;return n=new dt({props:{$$slots:{default:[St]},$$scope:{ctx:t}}}),s=new mt({props:{$$slots:{default:[Mt]},$$scope:{ctx:t}}}),{c(){e=v("div"),V(n.$$.fragment),o=h(),V(s.$$.fragment)},m(t,c){m(t,e,c),H(n,e,null),p(e,o),H(s,e,null),r=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){r||(D(n.$$.fragment,t),D(s.$$.fragment,t),r=!0)},o(t){O(n.$$.fragment,t),O(s.$$.fragment,t),r=!1},d(t){t&&g(e),P(n),P(s)}}}class Nt extends F{constructor(t){super(),z(this,t,null,At,r,{})}}function Tt(t){let e;return{c(){e=x("Contact Me")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Bt(t){let e;return{c(){e=x("Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function Yt(t){let e,n,o,s,r;return n=new dt({props:{$$slots:{default:[Tt]},$$scope:{ctx:t}}}),s=new mt({props:{$$slots:{default:[Bt]},$$scope:{ctx:t}}}),{c(){e=v("div"),V(n.$$.fragment),o=h(),V(s.$$.fragment)},m(t,c){m(t,e,c),H(n,e,null),p(e,o),H(s,e,null),r=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r)},i(t){r||(D(n.$$.fragment,t),D(s.$$.fragment,t),r=!0)},o(t){O(n.$$.fragment,t),O(s.$$.fragment,t),r=!1},d(t){t&&g(e),P(n),P(s)}}}class qt extends F{constructor(t){super(),z(this,t,null,Yt,r,{})}}const Xt=t=>({}),Dt=t=>({}),Ot=t=>({}),Vt=t=>({}),Ht=t=>({}),Pt=t=>({});function Rt(t){let e,n,o,s;const r=t[11].prev,c=a(r,t,t[10],Pt);return{c(){e=v("button"),c&&c.c(),y(e,"tabindex","0"),y(e,"class","arrow svelte-112tdfi")},m(r,i){m(r,e,i),c&&c.m(e,null),t[12](e),n=!0,o||(s=b(e,"click",t[4]),o=!0)},p(t,e){c&&c.p&&(!n||1024&e[0])&&d(c,r,t,t[10],n?$(r,t[10],e,Ht):f(t[10]),Pt)},i(t){n||(D(c,t),n=!0)},o(t){O(c,t),n=!1},d(n){n&&g(e),c&&c.d(n),t[12](null),o=!1,s()}}}function zt(t){let e,n,o,s;const r=t[11].next,c=a(r,t,t[10],Dt);return{c(){e=v("button"),c&&c.c(),y(e,"tabindex","0"),y(e,"class","arrow svelte-112tdfi")},m(r,i){m(r,e,i),c&&c.m(e,null),t[14](e),n=!0,o||(s=b(e,"click",t[3]),o=!0)},p(t,e){c&&c.p&&(!n||1024&e[0])&&d(c,r,t,t[10],n?$(r,t[10],e,Xt):f(t[10]),Dt)},i(t){n||(D(c,t),n=!0)},o(t){O(c,t),n=!1},d(n){n&&g(e),c&&c.d(n),t[14](null),o=!1,s()}}}function Ft(t){let e,n,o,s,r,c=t[5].prev&&Rt(t);const i=t[11].content,l=a(i,t,t[10],Vt);let u=t[5].next&&zt(t);return{c(){e=v("div"),c&&c.c(),n=h(),o=v("div"),l&&l.c(),s=h(),u&&u.c(),y(o,"class","items flex justify-between w-full h-full svelte-112tdfi"),y(e,"class","carousel flex justify-between items-center w-full h-full svelte-112tdfi")},m(i,a){m(i,e,a),c&&c.m(e,null),p(e,n),p(e,o),l&&l.m(o,null),t[13](o),p(e,s),u&&u.m(e,null),r=!0},p(t,o){t[5].prev?c?(c.p(t,o),32&o[0]&&D(c,1)):(c=Rt(t),c.c(),D(c,1),c.m(e,n)):c&&(q(),O(c,1,1,(()=>{c=null})),X()),l&&l.p&&(!r||1024&o[0])&&d(l,i,t,t[10],r?$(i,t[10],o,Ot):f(t[10]),Vt),t[5].next?u?(u.p(t,o),32&o[0]&&D(u,1)):(u=zt(t),u.c(),D(u,1),u.m(e,null)):u&&(q(),O(u,1,1,(()=>{u=null})),X())},i(t){r||(D(c),D(l,t),D(u),r=!0)},o(t){O(c),O(l,t),O(u),r=!1},d(n){n&&g(e),c&&c.d(),l&&l.d(n),t[13](null),u&&u.d()}}}function Gt(t,e,n){let{$$slots:o={},$$scope:s}=e;const r=function(t){const e={};for(const n in t)e[n]=!0;return e}(o);let{swipeable:c={mobile:!0,desktop:!1}}=e,{autoScroll:i={duration:!0,reverse:!1}}=e,{animation:l={slide:!0,scale:!1,fade:!1}}=e,{lockDuration:a=0}=e;const u=[],$=[];let d,f,p,m,g,v=0,x=!1;function h(t){0!==i.duration&&(d&&clearInterval(d),d=i.reverse?setInterval(E,t):setInterval(w,t))}function b(t){for(let e=0;e<t;e++)m[e].classList.remove("curr"),u.forEach((t=>{m[e].classList.add(t)})),$.forEach((t=>{m[e].classList.remove(t)}));m[t].classList.add("curr"),u.forEach((e=>{m[t].classList.remove(e)})),$.forEach((e=>{m[t].classList.remove(e)}));for(let e=t+1;e<m.length;e++)m[e].classList.remove("curr"),u.forEach((t=>{m[e].classList.remove(t)})),$.forEach((t=>{m[e].classList.add(t)}));t===m.length-1&&(u.forEach((t=>{m[0].classList.remove(t)})),$.forEach((t=>{m[0].classList.add(t)}))),0===t&&(u.forEach((t=>{m[m.length-1].classList.add(t)})),$.forEach((t=>{m[m.length-1].classList.remove(t)})))}function y(){p&&(n(1,p.style.visibility="visible",p),setTimeout((()=>{n(1,p.style.opacity=1,p),n(1,p.style.cursor="pointer",p),p.blur()}),500)),f&&(n(0,f.style.visibility="visible",f),setTimeout((()=>{n(0,f.style.opacity=1,f),n(0,f.style.cursor="pointer",f),f.blur()}),500))}async function w(){x||(x=!0,setTimeout((()=>x=!1),a),h(i.duration),p&&(n(1,p.style.opacity=0,p),n(1,p.style.cursor="default",p)),v<m.length-1?v+=1:v=0,b(v),y())}async function E(){x||(x=!0,setTimeout((()=>x=!1),a),f&&(n(0,f.style.opacity=0,f),n(0,f.style.cursor="default",f)),v>0?v-=1:v=m.length-1,b(v),y())}L((()=>{m=g.children,l.scale&&(u.push("prev-scale"),$.push("next-scale")),l.slide&&(u.push("prev-slide"),$.push("next-slide")),l.fade&&(u.push("prev-fade"),$.push("next-fade"));for(let t=0;t<m.length;t++)m[t].classList.add("item"),c.mobile&&(m[t].addEventListener("touchstart",(t=>N(t))),m[t].addEventListener("touchmove",(t=>T(t))),m[t].addEventListener("touchend",(t=>B())),m[t].addEventListener("touchcancel",(t=>B()))),c.desktop&&(m[t].addEventListener("mousedown",(t=>S())),m[t].addEventListener("mousemove",(t=>M(t))),m[t].addEventListener("mouseleave",(t=>A())),m[t].addEventListener("mouseup",(t=>A())));b(v),y(),h(i.duration)}));let _,C,j=!1,I=0;function S(){clearInterval(d),d=null,p&&n(1,p.style.opacity="0.1",p),f&&n(0,f.style.opacity="0.1",f),j=!0,m[v].style.transition="none"}function M(t){j&&(I+=t.movementX,m[v].style.left=I+"px")}function A(){j=!1,m[v].style="",m[v].blur();const t=function(t){return t<-100?(w(),!0):t>100&&(E(),!0)}(I);I=0,t||(p&&n(1,p.style.opacity="1",p),f&&n(0,f.style.opacity="1",f)),m[v].blur(),h(i.duration)}function N(t){C=t.touches[0],_=C,S()}function T(t){const e=t.touches[0];t.movementX=e.pageX-_.pageX,t.movementY=e.pageY-_.pageY,t.totalX=e.pageX-C.pageX,t.totalY=e.pageY-C.pageY,M(t),_=e}function B(t){A()}return t.$$set=t=>{"swipeable"in t&&n(6,c=t.swipeable),"autoScroll"in t&&n(7,i=t.autoScroll),"animation"in t&&n(8,l=t.animation),"lockDuration"in t&&n(9,a=t.lockDuration),"$$scope"in t&&n(10,s=t.$$scope)},[f,p,g,w,E,r,c,i,l,a,s,o,function(t){k[t?"unshift":"push"]((()=>{f=t,n(0,f)}))},function(t){k[t?"unshift":"push"]((()=>{g=t,n(2,g)}))},function(t){k[t?"unshift":"push"]((()=>{p=t,n(1,p)}))}]}class Jt extends F{constructor(t){super(),z(this,t,Gt,Ft,r,{swipeable:6,autoScroll:7,animation:8,lockDuration:9},null,[-1,-1])}}function Ut(t){let e,n;const o=t[1].default,s=a(o,t,t[0],null);return{c(){e=v("div"),s&&s.c(),y(e,"class","card w-full h-full svelte-1yr9dgl")},m(t,o){m(t,e,o),s&&s.m(e,null),n=!0},p(t,[e]){s&&s.p&&(!n||1&e)&&d(s,o,t,t[0],n?$(o,t[0],e,null):f(t[0]),null)},i(t){n||(D(s,t),n=!0)},o(t){O(s,t),n=!1},d(t){t&&g(e),s&&s.d(t)}}}function Wt(t,e,n){let{$$slots:o={},$$scope:s}=e;return t.$$set=t=>{"$$scope"in t&&n(0,s=t.$$scope)},[s,o]}class Kt extends F{constructor(t){super(),z(this,t,Wt,Ut,r,{})}}function Qt(t){let e,n;return e=new kt({}),{c(){V(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Zt(e){let n,o;return{c(){n=v("img"),y(n,"slot","prev"),y(n,"class","arrow-img svelte-1dgop7"),l(n.src,o="static/images/caret-left.svg")||y(n,"src","static/images/caret-left.svg"),y(n,"alt","left")},m(t,e){m(t,n,e)},p:t,d(t){t&&g(n)}}}function te(t){let e;return{c(){e=x("project 1")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function ee(t){let e;return{c(){e=x("project 2")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function ne(t){let e;return{c(){e=x("project 3")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function oe(t){let e;return{c(){e=x("project 4")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function se(t){let e;return{c(){e=x("project 5")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function re(t){let e;return{c(){e=x("project 6")},m(t,n){m(t,e,n)},d(t){t&&g(e)}}}function ce(t){let e,n,o,s,r,c,i,l,a,u,$,d;return e=new Kt({props:{$$slots:{default:[te]},$$scope:{ctx:t}}}),o=new Kt({props:{$$slots:{default:[ee]},$$scope:{ctx:t}}}),r=new Kt({props:{$$slots:{default:[ne]},$$scope:{ctx:t}}}),i=new Kt({props:{$$slots:{default:[oe]},$$scope:{ctx:t}}}),a=new Kt({props:{$$slots:{default:[se]},$$scope:{ctx:t}}}),$=new Kt({props:{$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment),n=h(),V(o.$$.fragment),s=h(),V(r.$$.fragment),c=h(),V(i.$$.fragment),l=h(),V(a.$$.fragment),u=h(),V($.$$.fragment)},m(t,f){H(e,t,f),m(t,n,f),H(o,t,f),m(t,s,f),H(r,t,f),m(t,c,f),H(i,t,f),m(t,l,f),H(a,t,f),m(t,u,f),H($,t,f),d=!0},p(t,n){const s={};1&n&&(s.$$scope={dirty:n,ctx:t}),e.$set(s);const c={};1&n&&(c.$$scope={dirty:n,ctx:t}),o.$set(c);const l={};1&n&&(l.$$scope={dirty:n,ctx:t}),r.$set(l);const u={};1&n&&(u.$$scope={dirty:n,ctx:t}),i.$set(u);const d={};1&n&&(d.$$scope={dirty:n,ctx:t}),a.$set(d);const f={};1&n&&(f.$$scope={dirty:n,ctx:t}),$.$set(f)},i(t){d||(D(e.$$.fragment,t),D(o.$$.fragment,t),D(r.$$.fragment,t),D(i.$$.fragment,t),D(a.$$.fragment,t),D($.$$.fragment,t),d=!0)},o(t){O(e.$$.fragment,t),O(o.$$.fragment,t),O(r.$$.fragment,t),O(i.$$.fragment,t),O(a.$$.fragment,t),O($.$$.fragment,t),d=!1},d(t){t&&(g(n),g(s),g(c),g(l),g(u)),P(e,t),P(o,t),P(r,t),P(i,t),P(a,t),P($,t)}}}function ie(e){let n,o;return{c(){n=v("img"),y(n,"slot","next"),y(n,"class","arrow-img svelte-1dgop7"),l(n.src,o="static/images/caret-right.svg")||y(n,"src","static/images/caret-right.svg"),y(n,"alt","right")},m(t,e){m(t,n,e)},p:t,d(t){t&&g(n)}}}function le(t){let e,n;return e=new Jt({props:{autoScroll:{duration:5e3,reverse:!1},swipeable:{mobile:!0,desktop:!0},animation:{slide:!0,scale:!0,fade:!0},lockDuration:500,$$slots:{next:[ie],content:[ce],prev:[Zt]},$$scope:{ctx:t}}}),{c(){V(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function ae(t){let e,n;return e=new It({}),{c(){V(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function ue(t){let e,n;return e=new Nt({}),{c(){V(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function $e(t){let e,n;return e=new qt({}),{c(){V(e.$$.fragment)},m(t,o){H(e,t,o),n=!0},i(t){n||(D(e.$$.fragment,t),n=!0)},o(t){O(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function de(t){let e,n,o,s,r,c,i,l,a,u,$;return n=new at({props:{id:"aboutMe",$$slots:{default:[Qt]},$$scope:{ctx:t}}}),s=new at({props:{$$slots:{default:[le]},$$scope:{ctx:t}}}),c=new at({props:{id:"experience",$$slots:{default:[ae]},$$scope:{ctx:t}}}),l=new at({props:{id:"projects",$$slots:{default:[ue]},$$scope:{ctx:t}}}),u=new at({props:{id:"contact",$$slots:{default:[$e]},$$scope:{ctx:t}}}),{c(){e=v("div"),V(n.$$.fragment),o=h(),V(s.$$.fragment),r=h(),V(c.$$.fragment),i=h(),V(l.$$.fragment),a=h(),V(u.$$.fragment),y(e,"class","content-container w-full h-full svelte-1dgop7")},m(t,d){m(t,e,d),H(n,e,null),p(e,o),H(s,e,null),p(e,r),H(c,e,null),p(e,i),H(l,e,null),p(e,a),H(u,e,null),$=!0},p(t,[e]){const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),s.$set(r);const i={};1&e&&(i.$$scope={dirty:e,ctx:t}),c.$set(i);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),u.$set($)},i(t){$||(D(n.$$.fragment,t),D(s.$$.fragment,t),D(c.$$.fragment,t),D(l.$$.fragment,t),D(u.$$.fragment,t),$=!0)},o(t){O(n.$$.fragment,t),O(s.$$.fragment,t),O(c.$$.fragment,t),O(l.$$.fragment,t),O(u.$$.fragment,t),$=!1},d(t){t&&g(e),P(n),P(s),P(c),P(l),P(u)}}}class fe extends F{constructor(t){super(),z(this,t,null,de,r,{})}}function pe(e){let n;return{c(){n=v("div"),n.innerHTML="",y(n,"class","footbar svelte-1ry9fk8")},m(t,e){m(t,n,e)},p:t,i:t,o:t,d(t){t&&g(n)}}}class me extends F{constructor(t){super(),z(this,t,null,pe,r,{})}}function ge(e){let n,o,s,r,c,i,l,a,u,$,d,f,x,b,w,L;return s=new U({props:{image:"static/images/nebula.jpg",alt:"Nebula"}}),i=new Z({}),u=new ct({}),f=new fe({}),w=new me({}),{c(){n=v("main"),o=v("div"),V(s.$$.fragment),r=h(),c=v("div"),V(i.$$.fragment),l=h(),a=v("div"),V(u.$$.fragment),$=h(),d=v("div"),V(f.$$.fragment),x=h(),b=v("div"),V(w.$$.fragment),y(o,"class","background svelte-1crpbp5"),y(c,"class","navbar svelte-1crpbp5"),y(a,"class","navmenu svelte-1crpbp5"),y(d,"class","content svelte-1crpbp5"),y(b,"class","footbar svelte-1crpbp5"),y(n,"class","svelte-1crpbp5")},m(t,e){m(t,n,e),p(n,o),H(s,o,null),p(n,r),p(n,c),H(i,c,null),p(n,l),p(n,a),H(u,a,null),p(n,$),p(n,d),H(f,d,null),p(n,x),p(n,b),H(w,b,null),L=!0},p:t,i(t){L||(D(s.$$.fragment,t),D(i.$$.fragment,t),D(u.$$.fragment,t),D(f.$$.fragment,t),D(w.$$.fragment,t),L=!0)},o(t){O(s.$$.fragment,t),O(i.$$.fragment,t),O(u.$$.fragment,t),O(f.$$.fragment,t),O(w.$$.fragment,t),L=!1},d(t){t&&g(n),P(s),P(i),P(u),P(f),P(w)}}}return new class extends F{constructor(t){super(),z(this,t,null,ge,r,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map