(this.webpackJsonpshic_util=this.webpackJsonpshic_util||[]).push([[14],{364:function(e,t,c){"use strict";var s=c(367),j=c.n(s);t.a=j.a.create({baseURL:"http:146.56.171.145:8080/"})},489:function(e,t,c){"use strict";c.r(t);var s=c(1),j=c(359),b=c(360),r=c(19),n=c(364),l=c(16);t.default=function(){const[e,t]=Object(s.useState)("default"),[c,i]=Object(s.useState)("test"),h={result:"dd"},o=Object(r.g)(),a=n.a,d={Connection:"keep-alive",Accept:"*/*"};return Object(l.jsx)(j.vb,{children:Object(l.jsx)(j.C,{xs:12,children:Object(l.jsxs)(j.p,{className:"mb-4",children:[Object(l.jsxs)(j.t,{children:[Object(l.jsx)("strong",{children:"System Check"})," ",Object(l.jsx)("small",{children:"was check"})]}),Object(l.jsx)(j.q,{children:Object(l.jsxs)(b.f,{children:[Object(l.jsxs)(j.M,{className:"row gy-2 gx-3 align-items-center",onSubmit:e=>{var s;s=c,a.defaults.headers.common.Authorization="Bearer "+localStorage.getItem("token"),a.post("/api/check",{userId:s},d).then((e=>{h.result=e.data.test,t(e.data.test)})).catch((e=>{localStorage.removeItem("token"),o.push("/login")})),e.preventDefault()},children:[Object(l.jsx)(j.C,{xs:"auto",children:Object(l.jsxs)(j.T,{id:"autoSizingSelect",value:c.value,onChange:e=>{i(e.target.value)},children:[Object(l.jsx)("option",{defaultValue:"Test",children:"Test"}),Object(l.jsx)("option",{children:"Prod"})]})}),Object(l.jsx)(j.C,{xs:"auto",children:Object(l.jsx)(j.l,{type:"submit",children:"Submit"})})]}),Object(l.jsx)(j.C,{xs:"auto"}),Object(l.jsxs)(j.Db,{children:[Object(l.jsx)(j.Hb,{children:Object(l.jsxs)(j.Jb,{children:[Object(l.jsx)(j.Ib,{scope:"col",children:e}),Object(l.jsx)(j.Ib,{scope:"col",children:c}),Object(l.jsx)(j.Ib,{scope:"col",children:h.result}),Object(l.jsx)(j.Ib,{scope:"col",children:"ss"})]})}),Object(l.jsxs)(j.Eb,{children:[Object(l.jsxs)(j.Jb,{children:[Object(l.jsx)(j.Ib,{scope:"row",children:"1"}),Object(l.jsx)(j.Gb,{children:"Mark"}),Object(l.jsx)(j.Gb,{children:"Otto"}),Object(l.jsx)(j.Gb,{children:"@mdo"})]}),Object(l.jsxs)(j.Jb,{children:[Object(l.jsx)(j.Ib,{scope:"row",children:"2"}),Object(l.jsx)(j.Gb,{children:"Jacob"}),Object(l.jsx)(j.Gb,{children:"Thornton"}),Object(l.jsx)(j.Gb,{children:"@fat"})]}),Object(l.jsxs)(j.Jb,{children:[Object(l.jsx)(j.Ib,{scope:"row",children:"3"}),Object(l.jsx)(j.Gb,{colSpan:"2",children:"Larry the Bird"}),Object(l.jsx)(j.Gb,{children:"@twitter"})]})]})]})]})})]})})})}}}]);
//# sourceMappingURL=14.1ab2ef61.chunk.js.map