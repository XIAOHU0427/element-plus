import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";import{v as a,f as r,x as S,y as c,h as n,U as p,F as s,j as _,D as m,e as k,t as u,o as V,E as d,C as j}from"./framework.ccb220c6.js";const $={};function z(b,l){const o=a("el-scrollbar");return r(),S(o,{height:"400px"},{default:c(()=>[(r(),n(s,null,p(20,e=>_("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))]),_:1})}var M=y($,[["render",z]]),A=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:M});const B={},D={class:"flex-content"};function O(b,l){const o=a("el-scrollbar");return r(),S(o,null,{default:c(()=>[_("div",D,[(r(),n(s,null,p(50,e=>_("p",{key:e,class:"scrollbar-demo-item"},m(e),1)),64))])]),_:1})}var R=y(B,[["render",O]]),H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:R});const w=k({setup(b){const l=u(0),o=u(0),e=u(),v=u();V(()=>{l.value=e.value.clientHeight-380});const x=t=>{v.value.setScrollTop(t)},f=({scrollTop:t})=>{o.value=t},g=t=>`${t} px`;return(t,h)=>{const T=a("el-scrollbar"),C=a("el-slider");return r(),n(s,null,[d(T,{ref_key:"scrollbarRef",ref:v,height:"400px",always:"",onScroll:f},{default:c(()=>[_("div",{ref_key:"innerRef",ref:e},[(r(),n(s,null,p(20,i=>_("p",{key:i,class:"scrollbar-demo-item"},m(i),1)),64))],512)]),_:1},512),d(C,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=i=>o.value=i),max:l.value,"format-tooltip":g,onInput:x},null,8,["modelValue","max"])],64)}}});var L=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:w});const I=j("Add Item"),N=j("Delete Item"),U=k({setup(b){const l=u(3),o=()=>{l.value++},e=()=>{l.value>0&&l.value--};return(v,x)=>{const f=a("el-button"),g=a("el-scrollbar");return r(),n(s,null,[d(f,{onClick:o},{default:c(()=>[I]),_:1}),d(f,{onClick:e},{default:c(()=>[N]),_:1}),d(g,{"max-height":"400px"},{default:c(()=>[(r(!0),n(s,null,p(l.value,t=>(r(),n("p",{key:t,class:"scrollbar-demo-item"},m(t),1))),128))]),_:1})],64)}}});var q=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:U});export{A as _,H as a,L as b,q as c};
