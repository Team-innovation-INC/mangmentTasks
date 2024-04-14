"use strict";(self.webpackChunkmanagement_tasks_progress=self.webpackChunkmanagement_tasks_progress||[]).push([[837],{2837:function(e,r,t){t.r(r),t.d(r,{default:function(){return $}});var a=t(8545),s=t(2483),n=t(8587),i=t(8168),o=t(9765),c=t(254),l=t(4122),d=t(1251),h=t(988),u=t(6855),m=t(5024),v=t(2304);function f(e){return(0,v.Ay)("MuiCircularProgress",e)}(0,m.A)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var k=t(6723);const p=["className","color","disableShrink","size","style","thickness","value","variant"];let g,y,w,A,x=e=>e;const S=44,b=(0,l.i7)(g||(g=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),C=(0,l.i7)(y||(y=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),D=(0,u.Ay)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${(0,d.A)(t.color)}`]]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.A)({display:"inline-block"},"determinate"===r.variant&&{transition:t.transitions.create("transform")},"inherit"!==r.color&&{color:(t.vars||t).palette[r.color].main})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&(0,l.AH)(w||(w=x`
      animation: ${0} 1.4s linear infinite;
    `),b)})),P=(0,u.Ay)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),M=(0,u.Ay)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${(0,d.A)(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})((e=>{let{ownerState:r,theme:t}=e;return(0,i.A)({stroke:"currentColor"},"determinate"===r.variant&&{transition:t.transitions.create("stroke-dashoffset")},"indeterminate"===r.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(e=>{let{ownerState:r}=e;return"indeterminate"===r.variant&&!r.disableShrink&&(0,l.AH)(A||(A=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),C)}));var j=s.forwardRef((function(e,r){const t=(0,h.A)({props:e,name:"MuiCircularProgress"}),{className:a,color:s="primary",disableShrink:l=!1,size:u=40,style:m,thickness:v=3.6,value:g=0,variant:y="indeterminate"}=t,w=(0,n.A)(t,p),A=(0,i.A)({},t,{color:s,disableShrink:l,size:u,thickness:v,value:g,variant:y}),x=(e=>{const{classes:r,variant:t,color:a,disableShrink:s}=e,n={root:["root",t,`color${(0,d.A)(a)}`],svg:["svg"],circle:["circle",`circle${(0,d.A)(t)}`,s&&"circleDisableShrink"]};return(0,c.A)(n,f,r)})(A),b={},C={},j={};if("determinate"===y){const e=2*Math.PI*((S-v)/2);b.strokeDasharray=e.toFixed(3),j["aria-valuenow"]=Math.round(g),b.strokeDashoffset=`${((100-g)/100*e).toFixed(3)}px`,C.transform="rotate(-90deg)"}return(0,k.jsx)(D,(0,i.A)({className:(0,o.A)(x.root,a),style:(0,i.A)({width:u,height:u},C,m),ownerState:A,ref:r,role:"progressbar"},j,w,{children:(0,k.jsx)(P,{className:x.svg,ownerState:A,viewBox:"22 22 44 44",children:(0,k.jsx)(M,{className:x.circle,style:b,ownerState:A,cx:S,cy:S,r:(S-v)/2,fill:"none",strokeWidth:v})})}))}));var $=function(){return(0,s.useEffect)((()=>{!async function(){const e=new URLSearchParams(window.location.search).get("token");(0,a.A)().setToken(e);try{const e=(await(0,a.A)().getConnectedUser()).data;e.user&&((0,a.A)().setUserData(e.user),window.location.replace("/"))}catch(r){window.location.replace("/auth")}}()}),[]),(0,k.jsx)("div",{children:(0,k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,k.jsx)(j,{})})})}}}]);
//# sourceMappingURL=837.34dfa153.chunk.js.map