"use strict";(self.webpackChunkmanagement_tasks_progress=self.webpackChunkmanagement_tasks_progress||[]).push([[486],{4486:function(t,e,i){i.r(e);var n=i(2483),a=i(5619),s=i(5470),r=i(5572),o=i(8369),l=i(227),c=i(7990),d=i(1056),h=i(9461),g=i(4864),u=i(1060),p=i(6809),x=i(6650),f=i(7482),m=i(8545),j=i(3422),y=i(6723);const w=t=>{let{type:e,loadingProviders:i,handleConnect:n,integrationStatus:s}=t;switch(s){case"soon":return(0,y.jsx)(a.A,{variant:"contained",fullWidth:!0,disabled:!0,children:"Soon"});case"available":return(0,y.jsx)(a.A,{variant:"contained",fullWidth:!0,onClick:()=>n(e),children:i===e?(0,y.jsx)(o.A,{}):"Connect"});default:return(0,y.jsx)(a.A,{variant:"contained",fullWidth:!0,color:"success",children:"Connected"})}};function v(t){let{category:e,type:i,handleConnect:n}=t;return(0,y.jsx)(f.A,{title:i,contentSX:{display:"flex",gap:2,flexWarp:"warp",overflowX:"scroll"},children:e.map((t=>(0,y.jsx)("div",{style:{minWidth:200},children:(0,y.jsx)(b,{provider:t,handleConnect:n})},t.type)))})}function b(t){let{provider:e,loadingProviders:i,handleConnect:n}=t;const{type:a,providerId:s,integrationStatus:r}=e;return(0,y.jsxs)(f.A,{contentSX:{display:"flex",flexDirection:"column",gap:2,alignItems:"center"},title:a,children:["GitHub"===a&&(0,y.jsx)("img",{src:l,alt:"github-icon",width:80,height:80}),"Jira"===a&&(0,y.jsx)("img",{src:c,alt:"jira-icon",width:80,height:80}),"Mega"===a&&(0,y.jsx)("img",{src:d,alt:"mega-icon",width:80,height:80}),"Bitbucket"===a&&(0,y.jsx)("img",{src:h,alt:"bitbucket-icon",width:80,height:80}),"GitLab"===a&&(0,y.jsx)("img",{src:g,alt:"gitlab-icon",width:80,height:80}),"Gmail"===a&&(0,y.jsx)("img",{src:u,alt:"gmail-icon",width:80,height:80}),"Google Calendar"===a&&(0,y.jsx)("img",{src:p,alt:"googleCalendar-icon",width:80,height:80}),"Google Meet"===a&&(0,y.jsx)("img",{src:x,alt:"googleMeet-icon",width:80,height:80}),(0,y.jsx)(w,{handleConnect:n,integrationStatus:r,loadingProviders:i,providerId:s,type:a})]})}e.default=()=>{const[t,e]=n.useState(!0),[i,a]=n.useState([]),[o,l]=n.useState();n.useEffect((()=>{!async function(){try{const t=(await(0,m.A)().getProviderList()).data;t.success&&a(t.data),j.oR.info(t.message)}catch(t){j.oR.error(t.message)}finally{e(!1)}}()}),[]);const c=async t=>{l(t);try{if("GitHub"===t){const t=(await(0,m.A)().accessToGithHub()).data;j.oR.info(t.message),window.open(t.data.authorizationUrl)}const e=(await(0,m.A)().getProviderList()).data;a(e.data),j.oR.info(e.message)}catch(e){console.error("Error connecting:",e)}finally{l(null)}};return(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:12},children:(0,y.jsxs)(f.A,{title:"List of integrations applications",style:{width:"100%"},children:[(0,y.jsx)(s.A,{variant:"body2",children:"Welcome for the most important part of the application that you can make integration with"}),(0,y.jsx)(f.A,{children:t||o?(0,y.jsx)(y.Fragment,{children:Array.from({length:3}).map(((t,e)=>(0,y.jsxs)("div",{style:{display:"flex",flexDirection:"column",gap:5},children:[(0,y.jsx)(r.A,{variant:"rectangular",width:"100%",height:50}),(0,y.jsx)(r.A,{variant:"rectangular",width:"100%",height:100})]},e)))}):(0,y.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:16,width:"100%"},children:Object.keys(i).map((t=>(0,y.jsx)(v,{category:i[t],handleConnect:c,type:t},t)))})})]})})}}}]);
//# sourceMappingURL=486.f397bc88.chunk.js.map