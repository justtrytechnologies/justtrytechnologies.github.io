"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[744],{884:function(e,t,a){var l=a(7294),n=a(1168),c=a(6462),s=a(7132),o=a(7536),i=a(2305),r=a(6310),d=a(6693);const m=r.Ry().shape({name:r.Z_().label("Name").required(),email:r.Z_().label("Email").required(),country:r.Z_().label("Country").required(),mobile:r.Z_().label().required("Required"),content:r.Z_().label("Content").required()});t.Z=e=>{var t,a,r,b,f;console.log("firebase keys:;",e);const{0:u,1:g}=(0,l.useState)(!1),{db:p}=e,{register:w,handleSubmit:v,formState:{errors:h},reset:E}=(0,o.cI)({resolver:(0,i.X)(m)}),x=n.Z.getAllCountries();return l.createElement("section",{className:"section-cta p-5"},l.createElement("div",{className:"container p-5 col-md-12 bg-white shadow rounded-5",style:{background:"linear-gradient(to right bottom, #3c267d, #c27492)"}},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-6  col-12 p-5"},l.createElement("h2",{className:"text-uppercase text-white"},"BOOK A QUICK CONSULTATION"),l.createElement("p",{className:"text-white"},"Increase efficency, productivity, and business performance with Justtry various products that have been used by tens of thousands of businesses in the word."),l.createElement("form",{onSubmit:v((async e=>{const{name:t,email:a,country:l,content:n,mobile:o}=e,i={name:t,email:a,country:l,content:n,mobile:o,date:new Date};g(!0);try{const e=(0,c.hJ)(p,"clients"),t=await(0,c.ET)(e,i);console.log("resp::",t),s.P.showSuccssMsg("We will contact/talk to you soon"),E(),g(!1)}catch(r){s.P.showErrMsg("Error adding document"),console.log("e::",r),g(!1)}})),className:"cta-form"},l.createElement("div",null,l.createElement("label",{for:"full-name"},"Name"),l.createElement("input",Object.assign({id:"full-name",type:"text",placeholder:"Enter Your Name"},w("name"),{maxLength:30})),l.createElement("p",{className:"text-danger mb-0"},null===(t=h.name)||void 0===t?void 0:t.message)),l.createElement("div",null,l.createElement("label",{for:"email"},"Email address"),l.createElement("input",Object.assign({id:"email",type:"email",placeholder:"me@example.com"},w("email"),{maxLength:50})),l.createElement("p",{className:"text-danger mb-0"},null===(a=h.email)||void 0===a?void 0:a.message)),l.createElement("div",null,l.createElement("label",{for:"select-where"},"Country"),l.createElement("select",Object.assign({id:"select-where"},w("country")),l.createElement("option",{value:""},"Please choose one option:"),x.map(((e,t)=>l.createElement("option",{key:t,value:e.isoCode},e.name)))),l.createElement("p",{className:"text-danger mb-0"},null===(r=h.country)||void 0===r?void 0:r.message)),l.createElement("div",null,l.createElement("label",{for:"mobile"},"Skype / Whatsapp / Mobile"),l.createElement("input",Object.assign({id:"mobile",type:"tel",placeholder:"Skype / Whatsapp / Mobile"},w("mobile"),{maxLength:50})),l.createElement("p",{className:"text-danger mb-0"},null===(b=h.mobile)||void 0===b?void 0:b.message)),l.createElement("div",null,l.createElement("label",{for:"content"},"Content"),l.createElement("textarea",Object.assign({id:"content",placeholder:"Type content here",rows:5,className:"input"},w("content"),{maxLength:200})),l.createElement("p",{className:"text-danger mb-0"},null===(f=h.content)||void 0===f?void 0:f.message)),l.createElement("button",{disabled:u,className:"custom-btn btn--form"},"Submit ",u&&l.createElement(d.Z,null)))),l.createElement("div",{className:"col-md-6 col-12 p-5 d-flex flex-column align-items-center justify-content-center"},l.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2126470840517!2d78.1340045741623!3d9.916240074472167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c539e6118b11%3A0x6c3891e5d1526c93!2sJusttry%20Technologies!5e0!3m2!1sen!2sin!4v1694181975876!5m2!1sen!2sin",className:"map-frame",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})))))}},6768:function(e,t,a){a.r(t);var l=a(7294),n=a(3032),c=a(884),s=a(8032);t.default=e=>{var t,o,i,r,d,m,b,f,u,g,p,w,v,h,E;const{pageContext:x}=e;return console.log("pageContext::",x),l.createElement(l.Fragment,null,l.createElement(n.Z,{db:null==x||null===(t=x.firestore)||void 0===t||null===(o=t.data)||void 0===o||null===(i=o.site)||void 0===i||null===(r=i.siteMetadata)||void 0===r?void 0:r.firestore},l.createElement("div",{className:"blog-bg"}),l.createElement("div",{className:"container"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-md-12 col-sm-11 col-11 blog-custom-width"},l.createElement("div",{className:"blog-site"},l.createElement("h1",{className:"blog-title text-white"},null==x||null===(d=x.data)||void 0===d?void 0:d.title),l.createElement("span",{className:"d-flex text-white"},l.createElement("p",{className:"me-3"},null==x||null===(m=x.data)||void 0===m?void 0:m.blog_created_date),l.createElement("p",{className:"ms-3"},null==x||null===(b=x.data)||void 0===b?void 0:b.author_name)),"unraveling-defi"===(null==x||null===(f=x.data)||void 0===f?void 0:f.slug)&&l.createElement(s.S,{src:"../images/blog-1.png",alt:"unraveling-defi",__imageData:a(5873)}),"crypto"===(null==x||null===(u=x.data)||void 0===u?void 0:u.slug)&&l.createElement(s.S,{src:"../images/blog-2.png",alt:"crypto",__imageData:a(4429)}),"blockchain"===(null==x||null===(g=x.data)||void 0===g?void 0:g.slug)&&l.createElement(s.S,{src:"../images/blog-3.png",alt:"blockchain",__imageData:a(2407)}),l.createElement("div",{className:"blog-const",dangerouslySetInnerHTML:{__html:null==x||null===(p=x.data)||void 0===p?void 0:p.description}}))))),l.createElement(c.Z,{db:null==x||null===(w=x.firestore)||void 0===w||null===(v=w.data)||void 0===v||null===(h=v.site)||void 0===h||null===(E=h.siteMetadata)||void 0===E?void 0:E.firestore})))}},4429:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080838","images":{"fallback":{"src":"/static/518539fe6affab39f27acda080ce4b3c/245fe/blog-2.png","srcSet":"/static/518539fe6affab39f27acda080ce4b3c/01f88/blog-2.png 225w,\\n/static/518539fe6affab39f27acda080ce4b3c/412ba/blog-2.png 450w,\\n/static/518539fe6affab39f27acda080ce4b3c/245fe/blog-2.png 900w","sizes":"(min-width: 900px) 900px, 100vw"},"sources":[{"srcSet":"/static/518539fe6affab39f27acda080ce4b3c/ef819/blog-2.webp 225w,\\n/static/518539fe6affab39f27acda080ce4b3c/79371/blog-2.webp 450w,\\n/static/518539fe6affab39f27acda080ce4b3c/ff899/blog-2.webp 900w","type":"image/webp","sizes":"(min-width: 900px) 900px, 100vw"}]},"width":900,"height":500}')},2407:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#282848","images":{"fallback":{"src":"/static/af419d4845cb4d43786098beb15d17ea/245fe/blog-3.png","srcSet":"/static/af419d4845cb4d43786098beb15d17ea/01f88/blog-3.png 225w,\\n/static/af419d4845cb4d43786098beb15d17ea/412ba/blog-3.png 450w,\\n/static/af419d4845cb4d43786098beb15d17ea/245fe/blog-3.png 900w","sizes":"(min-width: 900px) 900px, 100vw"},"sources":[{"srcSet":"/static/af419d4845cb4d43786098beb15d17ea/ef819/blog-3.webp 225w,\\n/static/af419d4845cb4d43786098beb15d17ea/79371/blog-3.webp 450w,\\n/static/af419d4845cb4d43786098beb15d17ea/ff899/blog-3.webp 900w","type":"image/webp","sizes":"(min-width: 900px) 900px, 100vw"}]},"width":900,"height":500}')},5873:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080818","images":{"fallback":{"src":"/static/a716bf304c709f99358b6dddc1bfb520/245fe/blog-1.png","srcSet":"/static/a716bf304c709f99358b6dddc1bfb520/01f88/blog-1.png 225w,\\n/static/a716bf304c709f99358b6dddc1bfb520/412ba/blog-1.png 450w,\\n/static/a716bf304c709f99358b6dddc1bfb520/245fe/blog-1.png 900w","sizes":"(min-width: 900px) 900px, 100vw"},"sources":[{"srcSet":"/static/a716bf304c709f99358b6dddc1bfb520/ef819/blog-1.webp 225w,\\n/static/a716bf304c709f99358b6dddc1bfb520/79371/blog-1.webp 450w,\\n/static/a716bf304c709f99358b6dddc1bfb520/ff899/blog-1.webp 900w","type":"image/webp","sizes":"(min-width: 900px) 900px, 100vw"}]},"width":900,"height":500}')}}]);
//# sourceMappingURL=component---src-templates-blog-js-8fe730cbcc5dd6080bd8.js.map