"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[558],{7067:function(e,t,n){var a=n(7294),l=n(1883),r=n(682),c=n(4051);t.Z=e=>{let{items:t}=e;return a.createElement(r.Z,{fluid:!0,className:"gx-0"},a.createElement(c.Z,null,a.createElement("nav",{"aria-label":"breadcrumb",className:"custom-breadcrumb"},a.createElement("ol",{className:"breadcrumb"},t.map(((e,n)=>a.createElement("li",{key:n,className:"breadcrumb-item"+(n===t.length-1?" active":""),"aria-current":n===t.length-1?"page":null},n===t.length-1?e.text:a.createElement(l.Link,{to:e.link},e.text))))))))}},884:function(e,t,n){var a=n(7294),l=n(1168),r=n(6462),c=n(4266),s=n(7536),o=n(2305),i=n(6310),m=n(8779),u=n(682),d=n(4051);const p=i.Ry().shape({name:i.Z_().label("Name").required(),email:i.Z_().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email address").label("Email").required(),country:i.Z_().label("Country").required(),mobile:i.Z_().label("Mobile Number or Skype ID").required(),content:i.Z_().label("Content").required()});t.Z=e=>{var t,n,i,v,f;const{0:h,1:b}=(0,a.useState)(!1),{db:E}=e,{register:g,handleSubmit:N,formState:{errors:y},reset:w}=(0,s.cI)({resolver:(0,o.X)(p)}),x=l.Z.getAllCountries();return a.createElement(u.Z,null,a.createElement("section",{className:"section-cta",id:"cta"},a.createElement("div",{className:"container p-5 col-md-12 bg-white shadow rounded-5",style:{background:"linear-gradient(to right bottom, #3c267d, #c27492)"}},a.createElement("div",{className:"row d-flex justify-content-start"},a.createElement("div",{className:"col-md-7 col-12 p-3"},a.createElement("div",null,a.createElement("h2",{className:"text-uppercase text-white"},"BOOK A QUICK CONSULTATION"),a.createElement("p",{className:"text-white"},"Increase efficency, productivity, and business performance with Justtry various products that have been used by tens of thousands of businesses in the word.")),a.createElement("form",{onSubmit:N((async e=>{const{name:t,email:n,country:a,content:l,mobile:s}=e,o={name:t,email:n,country:a,content:l,mobile:s,date:new Date};b(!0);try{const e=(0,r.hJ)(E,"clients");await(0,r.ET)(e,o);c.P.showSuccssMsg("We will contact/talk to you soon"),w(),b(!1)}catch(i){c.P.showErrMsg("Error adding document"),b(!1)}})),className:"cta-form"},a.createElement(d.Z,null,a.createElement("div",{className:"col-sm-12 col-12"},a.createElement("label",{htmlFor:"full-name"},"Name"),a.createElement("input",Object.assign({id:"full-name",type:"text",placeholder:"Enter Your Name"},g("name"),{maxLength:30})),a.createElement("p",{className:"text-light mb-0"},null===(t=y.name)||void 0===t?void 0:t.message)),a.createElement("div",{className:"col-sm-12 col-12"},a.createElement("label",{htmlFor:"email"},"Email address"),a.createElement("input",Object.assign({id:"email",type:"email",placeholder:"me@example.com"},g("email"),{maxLength:50})),a.createElement("p",{className:"text-light mb-0"},null===(n=y.email)||void 0===n?void 0:n.message))),a.createElement(d.Z,null,a.createElement("div",{className:"col-md-12 col-sm-12 col-12"},a.createElement("label",{htmlFor:"select-where"},"Country"),a.createElement("select",Object.assign({id:"select-where"},g("country")),a.createElement("option",{value:"",disabled:!0,selected:!0},"Select Country"),x.map(((e,t)=>a.createElement("option",{key:t,value:e.isoCode},e.name)))),a.createElement("p",{className:"text-white mb-0"},null===(i=y.country)||void 0===i?void 0:i.message)),a.createElement("div",{className:"col-md-12 col-sm-12 col-12"},a.createElement("label",{htmlFor:"mobile"},"Skype / Mobile / Whatsapp"),a.createElement("input",Object.assign({id:"mobile",type:"text",placeholder:"Skype / Mobile / Whatsapp"},g("mobile"),{maxLength:50})),a.createElement("p",{className:"text-light mb-0"},null===(v=y.mobile)||void 0===v?void 0:v.message))),a.createElement("div",null,a.createElement("label",{htmlFor:"content"},"Content"),a.createElement("textarea",Object.assign({id:"content",placeholder:"Type content here",rows:5,className:"input"},g("content"),{maxLength:200})),a.createElement("p",{className:"text-light mb-0"},null===(f=y.content)||void 0===f?void 0:f.message)),a.createElement("button",{disabled:h,className:"custom-btn btn--form"},"Submit ",h&&a.createElement(m.Z,null)))),a.createElement("div",{className:"col-md-5 col-12 p-4 d-flex flex-column align-items-center justify-content-center"},a.createElement("iframe",{title:"Justtry Office",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2126470840517!2d78.1340045741623!3d9.916240074472167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c539e6118b11%3A0x6c3891e5d1526c93!2sJusttry%20Technologies!5e0!3m2!1sen!2sin!4v1694181975876!5m2!1sen!2sin",className:"map-frame",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"}))))))}},1622:function(e,t,n){n.r(t),n.d(t,{Head:function(){return h},default:function(){return b}});var a=n(1426),l=n(7294),r=(n.p,n.p,n.p,n.p+"static/proof-ed836fd248e5664e41d55ccc43f983a1.jpg"),c=n.p+"static/research-con-91470764b221fbcd091eb8d3ea32177a.webp",s=n.p+"static/developmentcon-b9b63ac6570f86ce869be0ca89b25e15.jpg",o=n(7069);var i=()=>{const{0:e,1:t}=(0,l.useState)("poc");return l.createElement(l.Fragment,null,l.createElement("div",{className:"business-wrap my-5 pt-5"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"business-need p-5 row"},l.createElement("div",{className:"col-12"},l.createElement("div",{className:"mx-5"},l.createElement("h3",{className:"mb-2 fw-bold"},"POC And Open Source Development Services"),l.createElement("p",{className:"text-dark fw-semibold fs-3 mt-4"},"Integrating Proof of Concept (POC) and Open Source Development Services into our company's offerings is a strategic decision that can significantly enhance our competitiveness and value proposition.")))))),l.createElement("main",null,l.createElement("div",{className:"container merncarousel"},l.createElement("div",{className:"business"},l.createElement("div",{className:"text-center justify-content-center d-flex row"},l.createElement("div",{className:"col-md-10 pb-5"},l.createElement("h4",{className:"fw-semibold text-dark my-5"},"Why should you invest in a professional web development team for your business? Here are just a few reasons")))),l.createElement("div",{className:"d-flex align-items-center row mb-5"},l.createElement("div",{className:"col-md-12"},l.createElement(o.Z,{interval:1e5},l.createElement(o.Z.Item,null,l.createElement("div",{className:"d-flex align-items-center row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"fs-5 fw-semibold p-5"},l.createElement("p",{className:"fs-4 fw-semibold"},"With years of experience working with a wide range ofclients and technologies, we are well-equipped to help you unlock the full potential of your POC and open source projects. Whether you're looking to create a new product or service, or simply need help optimizing an existing one, we are here to help."))),l.createElement("div",{className:"col-md-5"},l.createElement("img",{className:"d-block w-100",src:r,alt:"poc-proof-img"})),l.createElement("div",{className:"col-md-1"}))),l.createElement(o.Z.Item,null,l.createElement("div",{className:"d-flex align-items-center row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"mern-content"},l.createElement("p",{className:"fs-4 fw-semibold"},"Our POC and open source development services includeeverything from research and concept development, to prototyping and testing, to full-scale development and deployment. We work closely with you to understand your unique needs and goals, and then use our expertise to help you achieve them."))),l.createElement("div",{className:"col-md-5"},l.createElement("img",{className:"d-block w-100",src:c,alt:"research-img"})),l.createElement("div",{className:"col-md-1"}))),l.createElement(o.Z.Item,null,l.createElement("div",{className:"d-flex align-items-center row"},l.createElement("div",{className:"col-md-6"},l.createElement("div",{className:"mern-content"},l.createElement("p",{className:"fs-4 fw-semibold"},"With our cutting-edge technologies and proven development methodologies, we can help you create truly innovative and flexible products and services that are sure to stand out in the marketplace. And with our commitment to open source development, you can be confident that your projects will be built on the latest and greatest technologies, without the need to spend a fortune on licensing fees."))),l.createElement("div",{className:"col-md-5"},l.createElement("img",{className:"d-block w-100",src:s,alt:"poc-development-img"})),l.createElement("div",{className:"col-md-1"})))))))))};var m=()=>l.createElement(l.Fragment,null,l.createElement(i,null)),u=n(9357),d=n(3977),p=n(6462),v=n(884),f=n(7067);const h=()=>l.createElement(u.Z,{title:"POC Open-Source Development Services",description:"Explore open-source possibilities with Justtry Technologies. We specialize in POC development, delivering customized solutions with open-source technologies. Elevate your projects with innovation and reliability. Discover more with us.\r ",keywords:"Proof of Concept (POC) Development, Open-Source POC Solutions,Prototype Development Services, POC Software Development, POC Application Design, Open-Source Technology Stack, POC Customization Services, POC Project Consulting, Rapid Prototyping, POC MVP (Minimum Viable Product) Development, POC Testing and Validation, POC Codebase Review, POC Open-Source Integration, Open-Source POC Frameworks, POC UI/UX Design, Open-Source POC Deployment, POC Scalability Assessment, POC Security Analysis, POC Documentation Services, POC Maintenance and Support, Open-Source Community Collaboration, POC Code Refactoring, Cross-Platform POC Development, POC for Emerging Technologies, POC for New Features or Modules"});var b=e=>{var t,n,r;const c=(0,d.ZF)(null==e||null===(t=e.data)||void 0===t||null===(n=t.site)||void 0===n||null===(r=n.siteMetadata)||void 0===r?void 0:r.firestore),s=(0,p.ad)(c);return l.createElement(a.Z,{db:s},l.createElement(f.Z,{items:[{text:"Home",link:"/"},{text:"POC Open-Source Development Services",link:null}]}),l.createElement(m,null),l.createElement(v.Z,{db:s}))}},7069:function(e,t,n){n.d(t,{Z:function(){return S}});var a=n(8146),l=n(7294);var r=function(e,t){const n=(0,l.useRef)(!0);(0,l.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)},c=n(2029),s=n(6454),o=n(5088);const i=2**31-1;function m(e,t,n){const a=n-Date.now();e.current=a<=i?setTimeout(t,a):setTimeout((()=>m(e,t,n)),i)}function u(){const e=(0,s.Z)(),t=(0,l.useRef)();return(0,o.Z)((()=>clearTimeout(t.current))),(0,l.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(a,l=0){e()&&(n(),l<=i?t.current=setTimeout(a,l):m(t,a,Date.now()+l))},clear:n}}),[])}var d=n(1586),p=n(4184),v=n.n(p),f=n(2081),h=(0,n(4680).Z)("carousel-caption"),b=n(6792),E=n(5893);const g=l.forwardRef((({as:e="div",bsPrefix:t,className:n,...a},l)=>{const r=v()(n,(0,b.vE)(t,"carousel-item"));return(0,E.jsx)(e,{ref:l,...a,className:r})}));g.displayName="CarouselItem";var N=g,y=n(3439),w=n(3825),x=n(4509),C=n(360);const O=l.forwardRef((({defaultActiveIndex:e=0,...t},n)=>{const{as:s="div",bsPrefix:o,slide:i=!0,fade:m=!1,controls:p=!0,indicators:h=!0,indicatorLabels:g=[],activeIndex:N,onSelect:O,onSlide:S,onSlid:k,interval:P=5e3,keyboard:Z=!0,onKeyDown:j,pause:I="hover",onMouseOver:D,onMouseOut:T,wrap:M=!0,touch:A=!0,onTouchStart:R,onTouchMove:$,onTouchEnd:F,prevIcon:L=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:W="Previous",nextIcon:_=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:q="Next",variant:U,className:z,children:J,...V}=(0,f.Ch)({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),H=(0,b.vE)(o,"carousel"),K=(0,b.SC)(),X=(0,l.useRef)(null),[B,Q]=(0,l.useState)("next"),[Y,G]=(0,l.useState)(!1),[ee,te]=(0,l.useState)(!1),[ne,ae]=(0,l.useState)(N||0);(0,l.useEffect)((()=>{ee||N===ne||(X.current?Q(X.current):Q((N||0)>ne?"next":"prev"),i&&te(!0),ae(N||0))}),[N,ee,ne,i]),(0,l.useEffect)((()=>{X.current&&(X.current=null)}));let le,re=0;(0,y.Ed)(J,((e,t)=>{++re,t===N&&(le=e.props.interval)}));const ce=(0,c.Z)(le),se=(0,l.useCallback)((e=>{if(ee)return;let t=ne-1;if(t<0){if(!M)return;t=re-1}X.current="prev",null==O||O(t,e)}),[ee,ne,O,M,re]),oe=(0,a.Z)((e=>{if(ee)return;let t=ne+1;if(t>=re){if(!M)return;t=0}X.current="next",null==O||O(t,e)})),ie=(0,l.useRef)();(0,l.useImperativeHandle)(n,(()=>({element:ie.current,prev:se,next:oe})));const me=(0,a.Z)((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&(K?se():oe())})),ue="next"===B?"start":"end";r((()=>{i||(null==S||S(ne,ue),null==k||k(ne,ue))}),[ne]);const de=`${H}-item-${B}`,pe=`${H}-item-${ue}`,ve=(0,l.useCallback)((e=>{(0,x.Z)(e),null==S||S(ne,ue)}),[S,ne,ue]),fe=(0,l.useCallback)((()=>{te(!1),null==k||k(ne,ue)}),[k,ne,ue]),he=(0,l.useCallback)((e=>{if(Z&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(K?oe(e):se(e));case"ArrowRight":return e.preventDefault(),void(K?se(e):oe(e))}null==j||j(e)}),[Z,j,se,oe,K]),be=(0,l.useCallback)((e=>{"hover"===I&&G(!0),null==D||D(e)}),[I,D]),Ee=(0,l.useCallback)((e=>{G(!1),null==T||T(e)}),[T]),ge=(0,l.useRef)(0),Ne=(0,l.useRef)(0),ye=u(),we=(0,l.useCallback)((e=>{ge.current=e.touches[0].clientX,Ne.current=0,"hover"===I&&G(!0),null==R||R(e)}),[I,R]),xe=(0,l.useCallback)((e=>{e.touches&&e.touches.length>1?Ne.current=0:Ne.current=e.touches[0].clientX-ge.current,null==$||$(e)}),[$]),Ce=(0,l.useCallback)((e=>{if(A){const t=Ne.current;Math.abs(t)>40&&(t>0?se(e):oe(e))}"hover"===I&&ye.set((()=>{G(!1)}),P||void 0),null==F||F(e)}),[A,I,se,oe,ye,P,F]),Oe=null!=P&&!Y&&!ee,Se=(0,l.useRef)();(0,l.useEffect)((()=>{var e,t;if(!Oe)return;const n=K?se:oe;return Se.current=window.setInterval(document.visibilityState?me:n,null!=(e=null!=(t=ce.current)?t:P)?e:void 0),()=>{null!==Se.current&&clearInterval(Se.current)}}),[Oe,se,oe,ce,P,me,K]);const ke=(0,l.useMemo)((()=>h&&Array.from({length:re},((e,t)=>e=>{null==O||O(t,e)}))),[h,re,O]);return(0,E.jsxs)(s,{ref:ie,...V,onKeyDown:he,onMouseOver:be,onMouseOut:Ee,onTouchStart:we,onTouchMove:xe,onTouchEnd:Ce,className:v()(z,H,i&&"slide",m&&`${H}-fade`,U&&`${H}-${U}`),children:[h&&(0,E.jsx)("div",{className:`${H}-indicators`,children:(0,y.UI)(J,((e,t)=>(0,E.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=g&&g.length?g[t]:`Slide ${t+1}`,className:t===ne?"active":void 0,onClick:ke?ke[t]:void 0,"aria-current":t===ne},t)))}),(0,E.jsx)("div",{className:`${H}-inner`,children:(0,y.UI)(J,((e,t)=>{const n=t===ne;return i?(0,E.jsx)(C.Z,{in:n,onEnter:n?ve:void 0,onEntered:n?fe:void 0,addEndListener:w.Z,children:(t,a)=>l.cloneElement(e,{...a,className:v()(e.props.className,n&&"entered"!==t&&de,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})}):l.cloneElement(e,{className:v()(e.props.className,n&&"active")})}))}),p&&(0,E.jsxs)(E.Fragment,{children:[(M||0!==N)&&(0,E.jsxs)(d.Z,{className:`${H}-control-prev`,onClick:se,children:[L,W&&(0,E.jsx)("span",{className:"visually-hidden",children:W})]}),(M||N!==re-1)&&(0,E.jsxs)(d.Z,{className:`${H}-control-next`,onClick:oe,children:[_,q&&(0,E.jsx)("span",{className:"visually-hidden",children:q})]})]})]})}));O.displayName="Carousel";var S=Object.assign(O,{Caption:h,Item:N})},3439:function(e,t,n){n.d(t,{Ed:function(){return r},UI:function(){return l}});var a=n(7294);function l(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}function r(e,t){let n=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&t(e,n++)}))}}}]);
//# sourceMappingURL=component---src-pages-poc-open-source-js-2667a7d24b37d9f31cdf.js.map