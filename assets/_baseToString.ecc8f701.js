import{a4 as f,R as S,K as l,W as _,t as p,I as A,c as m,u as E,i as C,g as k}from"./framework.ccb220c6.js";import{v as T,h as $,w as x,l as j}from"./_getTag.3780281c.js";import{i as P}from"./index.adaedb96.js";const d=Symbol();var O=Array.isArray,M=O;class z extends Error{constructor(r){super(r);this.name="ElementPlusError"}}function I(e,r){throw new z(`[${e}] ${r}`)}function le(e,r){}const F="Util",pe=(e,r="")=>{let t=e;return r.split(".").map(n=>{t=t==null?void 0:t[n]}),t};function me(e,r,t){let n=e,a,o;if(e&&f(e,r))a=r,o=n==null?void 0:n[r];else{r=r.replace(/\[(\w+)\]/g,".$1"),r=r.replace(/^\./,"");const s=r.split(".");let i=0;for(i;i<s.length-1&&!(!n&&!t);i++){const u=s[i];if(u in n)n=n[u];else{t&&I(F,"Please transfer a valid prop path to form item!");break}}a=s[i],o=n==null?void 0:n[s[i]]}return{o:n,k:a,v:o}}const de=()=>Math.floor(Math.random()*1e4),ye=(e="")=>String(e).replace(/[|\\{}()[\]^$+*?.]/g,"\\$&"),ge=e=>!e&&e!==0?[]:Array.isArray(e)?e:[e],ve=function(){return P&&!!window.navigator.userAgent.match(/firefox/i)},he=function(e){const r=["transform","transition","animation"],t=["ms-","webkit-"];return r.forEach(n=>{const a=e[n];n&&a&&t.forEach(o=>{e[o+n]=a})}),e},be=e=>typeof e=="boolean",R=e=>typeof e=="number";function we(e){let r=!1;return function(...t){r||(r=!0,window.requestAnimationFrame(()=>{Reflect.apply(e,this,t),r=!1}))}}function Se(e){return e===void 0}function _e(e){return!!(!e&&e!==0||S(e)&&!e.length||l(e)&&!Object.keys(e).length)}function N(e){return e.reduce((r,t)=>{const n=Array.isArray(t)?N(t):t;return r.concat(n)},[])}function Ae(e){return Array.from(new Set(e))}function Ee(e){return _(e)?e:R(e)?`${e}px`:""}const G=(e,r)=>{var t;const n=[...new Set([...Object.keys(e),...Object.keys(r)])],a={};for(const o of n)a[o]=(t=r[o])!=null?t:e[o];return a},y=p({});function U(e){const r=C(d,y);return e?l(r.value)&&f(r.value,e)?m(()=>r.value[e]):p(void 0):r}const Ce=(e,r)=>{var t;const n=!!k(),a=n?U():void 0,o=(t=r==null?void 0:r.provide)!=null?t:n?A:void 0;if(!o)return;const s=m(()=>{const i=E(e);return a?G(a.value,i):i});return o(d,s),y.value=s.value,s};var B=T,q=$,K="[object Symbol]";function L(e){return typeof e=="symbol"||q(e)&&B(e)==K}var V=L,g=x,W="Expected a function";function c(e,r){if(typeof e!="function"||r!=null&&typeof r!="function")throw new TypeError(W);var t=function(){var n=arguments,a=r?r.apply(this,n):n[0],o=t.cache;if(o.has(a))return o.get(a);var s=e.apply(this,n);return t.cache=o.set(a,s)||o,s};return t.cache=new(c.Cache||g),t}c.Cache=g;var X=c,Z=X,Y=500;function D(e){var r=Z(e,function(n){return t.size===Y&&t.clear(),n}),t=r.cache;return r}var H=D,J=H,Q=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ee=/\\(\\)?/g,re=J(function(e){var r=[];return e.charCodeAt(0)===46&&r.push(""),e.replace(Q,function(t,n,a,o){r.push(a?o.replace(ee,"$1"):n||t)}),r}),ke=re;function te(e,r){for(var t=-1,n=e==null?0:e.length,a=Array(n);++t<n;)a[t]=r(e[t],t,e);return a}var ne=te,v=j,ae=ne,oe=M,se=V,ie=1/0,h=v?v.prototype:void 0,b=h?h.toString:void 0;function w(e){if(typeof e=="string")return e;if(oe(e))return ae(e,w)+"";if(se(e))return b?b.call(e):"";var r=e+"";return r=="0"&&1/e==-ie?"-0":r}var Te=w;export{Te as _,be as a,R as b,V as c,Ee as d,Se as e,he as f,de as g,_e as h,M as i,Ae as j,N as k,ge as l,me as m,ve as n,pe as o,Ce as p,ye as q,we as r,le as s,I as t,X as u,U as v,ke as w};
