(this.webpackJsonpshic_util=this.webpackJsonpshic_util||[]).push([[15],{364:function(e,t,c){"use strict";var s=c(367),r=c.n(s);t.a=r.a.create({baseURL:"http://146.56.171.145:8080/"})},490:function(e,t,c){"use strict";c.r(t);var s=c(1),r=c(359),l=c(360),o=c(19),a=c(364),n=c(16);t.default=function(){const e=Object(o.g)(),t=a.a,[c,j]=Object(s.useState)([]),[i,b]=Object(s.useState)([]),h=e=>{j(e.target.value)},d=s=>{var r;r=c,t.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),t.post("/userprove",{username:r},u).then(O).catch((t=>{alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694"),localStorage.removeItem("token"),localStorage.removeItem("role"),e.push("/login")}))},u={Connection:"keep-alive",Accept:"*/*"};function O(){t.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),t.post("/userlist",{},u).then((e=>b(e.data))).catch((t=>{alert("\ub85c\uadf8\uc778 \ud6c4 \uc774\uc6a9\ud574 \uc8fc\uc138\uc694"),localStorage.removeItem("token"),localStorage.removeItem("role"),e.push("/login")}))}return Object(s.useEffect)((()=>(O(),()=>{})),[]),Object(n.jsx)(r.vb,{children:Object(n.jsx)(r.C,{xs:12,children:Object(n.jsxs)(r.p,{className:"mb-4",children:[Object(n.jsxs)(r.t,{children:[Object(n.jsx)("strong",{children:"\uc0ac\uc6a9\uc790 \uc2b9\uc778"})," ",Object(n.jsx)("small",{children:"Users for register"})]}),Object(n.jsx)(r.q,{children:Object(n.jsx)(l.f,{children:Object(n.jsxs)(r.Db,{children:[Object(n.jsx)(r.Hb,{children:Object(n.jsxs)(r.Jb,{children:[Object(n.jsx)(r.Ib,{scope:"col",children:"No"}),Object(n.jsx)(r.Ib,{scope:"col",children:"User ID"}),Object(n.jsx)(r.Ib,{scope:"col",children:"Email "}),Object(n.jsx)(r.Ib,{scope:"col"})]})}),Object(n.jsx)(r.Eb,{children:i.map((e=>Object(n.jsxs)(r.Jb,{children:[Object(n.jsx)(r.Ib,{scope:"row",children:"1"}),Object(n.jsx)(r.Gb,{children:Object(n.jsx)(r.N,{type:"radio",name:"flexRadioDefault",label:e.userId,value:e.userId,onChange:h})}),Object(n.jsx)(r.Gb,{children:e.email}),Object(n.jsx)(r.Gb,{children:Object(n.jsx)(r.C,{xs:"auto",children:Object(n.jsx)(r.l,{type:"button",onClick:d,children:"\uc2b9\uc778"})})})]},e.userId)))})]})})})]})})})}}}]);
//# sourceMappingURL=15.dd379e43.chunk.js.map