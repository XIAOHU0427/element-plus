import{e as g,t as f,v as a,f as i,x as p,y as t,E as o,C as l,D as k,h as m,j as c,F as h,U as y,o as S}from"./framework.ccb220c6.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const T=g({setup(r){const _=f(!1);return(n,e)=>{const u=a("el-button"),s=a("el-tooltip");return i(),p(s,{disabled:_.value,content:"click to close tooltip function",placement:"bottom",effect:"light"},{default:t(()=>[o(u,{onClick:e[0]||(e[0]=v=>_.value=!_.value)},{default:t(()=>[l("click to "+k(_.value?"active":"close")+" tooltip function",1)]),_:1})]),_:1},8,["disabled"])}}});var yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:T});const C={},M=l("trigger me");function B(r,_){const n=a("el-button"),e=a("el-tooltip");return i(),p(e,{content:"I am an el-tooltip"},{default:t(()=>[o(n,null,{default:t(()=>[M]),_:1})]),_:1})}var j=b(C,[["render",B]]),St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:j});const R={},z={class:"tooltip-base-box"},O={class:"row center"},w=l("top-start"),L=l("top"),U=l("top-end"),D={class:"row"},E=l("left-start"),N=l("right-start"),V={class:"row"},F=l("left"),H=l("right"),I={class:"row"},X=l("left-end"),Y=l("right-end"),q={class:"row center"},A=l("bottom-start"),G=l("bottom"),J=l("bottom-end");function K(r,_){const n=a("el-button"),e=a("el-tooltip");return i(),m("div",z,[c("div",O,[o(e,{class:"box-item",effect:"dark",content:"Top Left prompts info",placement:"top-start"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[w]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Center prompts info",placement:"top"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[L]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Top Right prompts info",placement:"top-end"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[U]),_:1})]),_:1})]),c("div",D,[o(e,{class:"box-item",effect:"dark",content:"Left Top prompts info",placement:"left-start"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[E]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Top prompts info",placement:"right-start"},{default:t(()=>[o(n,null,{default:t(()=>[N]),_:1})]),_:1})]),c("div",V,[o(e,{class:"box-item",effect:"dark",content:"Left Center prompts info",placement:"left"},{default:t(()=>[o(n,{class:"mt-3 mb-3"},{default:t(()=>[F]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Center prompts info",placement:"right"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[H]),_:1})]),_:1})]),c("div",I,[o(e,{class:"box-item",effect:"dark",content:"Left Bottom prompts info",placement:"left-end"},{default:t(()=>[o(n,null,{default:t(()=>[X]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Right Bottom prompts info",placement:"right-end"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[Y]),_:1})]),_:1})]),c("div",q,[o(e,{class:"box-item",effect:"dark",content:"Bottom Left prompts info",placement:"bottom-start"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[A]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Center prompts info",placement:"bottom"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[G]),_:1})]),_:1}),o(e,{class:"box-item",effect:"dark",content:"Bottom Right prompts info",placement:"bottom-end"},{default:t(()=>[o(n,{class:"item"},{default:t(()=>[J]),_:1})]),_:1})])])}var P=b(R,[["render",K]]),Tt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:P});const Q=c("span",null,[c("p",null,"Content")],-1),W=g({setup(r){const _=f(!1);return(n,e)=>{const u=a("el-tooltip");return i(),p(u,{visible:_.value,"onUpdate:visible":e[2]||(e[2]=s=>_.value=s)},{content:t(()=>[Q]),default:t(()=>[c("span",{onMouseenter:e[0]||(e[0]=s=>_.value=!0),onMouseleave:e[1]||(e[1]=s=>_.value=!1)},"Hover me",32)]),_:1},8,["visible"])}}});var Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W});const Z={},tt=l("hover me");function et(r,_){const n=a("el-button"),e=a("el-tooltip");return i(),p(e,{content:"<p>The content can be <strong>HTML</strong></p>","raw-content":""},{default:t(()=>[o(n,null,{default:t(()=>[tt]),_:1})]),_:1})}var ot=b(Z,[["render",et]]),Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ot});const nt={},lt=l(" multiple lines"),_t=c("br",null,null,-1),st=l("second line "),at=l("Top center");function ct(r,_){const n=a("el-button"),e=a("el-tooltip");return i(),p(e,{placement:"top"},{content:t(()=>[lt,_t,st]),default:t(()=>[o(n,null,{default:t(()=>[at]),_:1})]),_:1})}var it=b(nt,[["render",ct]]),Bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:it});const rt=l("Click to open tooltip"),ut=c("span",null," Some content ",-1),ft=g({setup(r){const _=f(),n=f(),e=f(!1);return(u,s)=>{const v=a("el-button"),x=a("el-tooltip");return i(),m(h,null,[c("div",null,[(i(),m(h,null,y(3,d=>o(v,{key:d,onMouseover:s[0]||(s[0]=$=>_.value=$.currentTarget),onClick:s[1]||(s[1]=$=>e.value=!e.value)},{default:t(()=>[rt]),_:2},1024)),64))]),o(x,{ref_key:"tooltipRef",ref:n,visible:e.value,"onUpdate:visible":s[2]||(s[2]=d=>e.value=d),"popper-options":{modifiers:[{name:"computeStyles",options:{adaptive:!1,enabled:!1}}]},"virtual-ref":_.value,"virtual-triggering":"",trigger:"click","popper-class":"singleton-tooltip"},{content:t(()=>[ut]),_:1},8,["visible","virtual-ref"])],64)}}});var jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ft});const dt={},pt=l("Dark"),mt=l("Light"),bt=l("Customized theme");function vt(r,_){const n=a("el-button"),e=a("el-tooltip");return i(),m(h,null,[o(e,{content:"Top center",placement:"top"},{default:t(()=>[o(n,null,{default:t(()=>[pt]),_:1})]),_:1}),o(e,{content:"Bottom center",placement:"bottom",effect:"light"},{default:t(()=>[o(n,null,{default:t(()=>[mt]),_:1})]),_:1}),o(e,{content:"Bottom center",effect:"customized"},{default:t(()=>[o(n,null,{default:t(()=>[bt]),_:1})]),_:1})],64)}var gt=b(dt,[["render",vt]]),Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt});const ht=l("test"),xt=g({setup(r){const _=f(!1),n=f({getBoundingClientRect(){return e.value}}),e=f({top:0,left:0,bottom:0,right:0});return S(()=>{document.addEventListener("mousemove",u=>{e.value=DOMRect.fromRect({width:0,height:0,x:u.clientX,y:u.clientY})})}),(u,s)=>{const v=a("el-tooltip"),x=a("el-button");return i(),m(h,null,[o(v,{visible:_.value,"onUpdate:visible":s[0]||(s[0]=d=>_.value=d),content:"Bottom center",placement:"bottom",effect:"light",trigger:"click","virtual-triggering":"","virtual-ref":n.value},null,8,["visible","virtual-ref"]),o(x,{onClick:s[1]||(s[1]=d=>_.value=!_.value)},{default:t(()=>[ht]),_:1})],64)}}});var zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xt});export{yt as _,St as a,Tt as b,Ct as c,Mt as d,Bt as e,jt as f,Rt as g,zt as h};
