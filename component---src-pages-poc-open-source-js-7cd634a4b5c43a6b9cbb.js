"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[558],{884:function(e,t,n){var a=n(7294),l=n(1168),o=n(6462),c=n(7132),r=n(7536),s=n(2305),i=n(6310);const m=i.Ry().shape({name:i.Z_().label("Name").required(),email:i.Z_().label("Email").required(),country:i.Z_().label("Country").required(),mobile:i.Z_().label().required("Required"),content:i.Z_().label("Content").required()});t.Z=e=>{var t,n,i,d,u;console.log("firebase keys:;",e);const{db:p}=e,{register:f,handleSubmit:E,formState:{errors:v},reset:h}=(0,r.cI)({resolver:(0,s.X)(m)}),b=l.Z.getAllCountries();return a.createElement("section",{className:"section-cta p-5"},a.createElement("div",{className:"container p-5 col-md-12 bg-white shadow rounded-5",style:{background:"linear-gradient(to right bottom, #3c267d, #c27492)"}},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-md-6  col-12 p-5"},a.createElement("h2",{className:"text-uppercase text-white"},"BOOK A QUICK CONSULTATION"),a.createElement("p",{className:"text-white"},"Increase efficency, productivity, and business performance with Flipflop various products that have been used by tens of thousands of businesses in the word."),a.createElement("form",{onSubmit:E((async e=>{const{name:t,email:n,country:a,content:l,mobile:r}=e,s={name:t,email:n,country:a,content:l,mobile:r,date:new Date},i=(0,o.hJ)(p,"clients"),m=await(0,o.ET)(i,s);console.log("resp::",m),c.P.showSuccssMsg("We will contact/talk to you soon"),h()})),className:"cta-form"},a.createElement("div",null,a.createElement("label",{for:"full-name"},"Name"),a.createElement("input",Object.assign({id:"full-name",type:"text",placeholder:"Enter Your Name"},f("name"),{maxLength:30})),a.createElement("p",{className:"text-danger mb-0"},null===(t=v.name)||void 0===t?void 0:t.message)),a.createElement("div",null,a.createElement("label",{for:"email"},"Email address"),a.createElement("input",Object.assign({id:"email",type:"email",placeholder:"me@example.com"},f("email"),{maxLength:50})),a.createElement("p",{className:"text-danger mb-0"},null===(n=v.email)||void 0===n?void 0:n.message)),a.createElement("div",null,a.createElement("label",{for:"select-where"},"Country"),a.createElement("select",Object.assign({id:"select-where"},f("country")),a.createElement("option",{value:""},"Please choose one option:"),b.map(((e,t)=>a.createElement("option",{key:t,value:e.isoCode},e.name)))),a.createElement("p",{className:"text-danger mb-0"},null===(i=v.country)||void 0===i?void 0:i.message)),a.createElement("div",null,a.createElement("label",{for:"mobile"},"Skype / Whatsapp / Mobile"),a.createElement("input",Object.assign({id:"mobile",type:"tel",placeholder:"Skype / Whatsapp / Mobile"},f("mobile"),{maxLength:50})),a.createElement("p",{className:"text-danger mb-0"},null===(d=v.mobile)||void 0===d?void 0:d.message)),a.createElement("div",null,a.createElement("label",{for:"content"},"Content"),a.createElement("textarea",Object.assign({id:"content",placeholder:"Type content here",rows:5,className:"input"},f("content"),{maxLength:200})),a.createElement("p",{className:"text-danger mb-0"},null===(u=v.content)||void 0===u?void 0:u.message)),a.createElement("button",{className:"btn btn--form"},"Submit"))),a.createElement("div",{className:"col-md-6 p-5 d-flex flex-column align-items-center justify-content-center"},a.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2126470840517!2d78.1340045741623!3d9.916240074472167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c539e6118b11%3A0x6c3891e5d1526c93!2sJusttry%20Technologies!5e0!3m2!1sen!2sin!4v1694181975876!5m2!1sen!2sin",className:"map-frame",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"})))))}},9357:function(e,t,n){var a=n(7294),l=n(1883);function o(e){var t,n;let{description:o,title:c,children:r}=e;const{site:s}=(0,l.useStaticQuery)("63159454"),i=o||s.siteMetadata.description,m=null===(t=s.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,m?c+" | "+m:c),a.createElement("meta",{name:"description",content:i}),a.createElement("meta",{property:"og:title",content:c}),a.createElement("meta",{property:"og:description",content:i}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=s.siteMetadata)||void 0===n?void 0:n.author)||""}),a.createElement("meta",{name:"twitter:title",content:c}),a.createElement("meta",{name:"twitter:description",content:i}),r)}o.defaultProps={description:""},t.Z=o},1622:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(3032),l=n(7294),o=n.p+"static/proof-d1d2dfcdf9f50231f6fe32285d3134da.png",c=n.p+"static/research-289a4ccd85470442f4fdc8000e738174.png",r=n.p+"static/development-611ac47ea41c5721ad50095b55dd2045.png",s=n.p+"static/proof-ed836fd248e5664e41d55ccc43f983a1.jpg",i=n.p+"static/research-con-91470764b221fbcd091eb8d3ea32177a.webp",m=n.p+"static/developmentcon-b9b63ac6570f86ce869be0ca89b25e15.jpg",d=n(8852),u=n(4051),p=n(1555),f=n(7142);const E=[{img:o,title:"PROOF OF CONCEPT",description:" With years of experience working with a wide range ofclients and technologies, we are well-equipped to help you unlock the full potential of your POC and open source projects. Whether you're looking to create a new product or service, or simply need help optimizing an existing one, we are here to help.",eventKey:"poc"},{img:c,title:"RESEARCH CONCEPT DEVELOPMENT",description:"Our POC and open source development services includeeverything from research and concept development, to prototyping and testing, to full-scale development and deployment. We work closely with you to understand your unique needs and goals, and then use our expertise to help you achieve them.",eventKey:"research-dev"},{img:r,title:"PROVEN DEVELOPMENT METHODS",description:"With our cutting-edge technologies and proven development methodologies, we can help you create truly innovative and flexible products and services that are sure to stand out in the marketplace. And with our commitment to open source development, you can be confident that your projects will be built on the latest and greatest technologies, without the need to spend a fortune on licensing fees.",eventKey:"dev-method"}],v=[{img:s,alt:"poc-img",eventKey:"poc"},{img:i,alt:"research-img",eventKey:"research-dev"},{img:m,alt:"development-img",eventKey:"dev-method"}];var h=()=>{const{0:e,1:t}=(0,l.useState)("poc");return l.createElement(l.Fragment,null,l.createElement("div",{class:"business-wrap my-5 pt-5"},l.createElement("div",{class:"container-fluid"},l.createElement("div",{class:"business-need p-5 row"},l.createElement("div",{class:"col-12"},l.createElement("div",{class:"mx-5"},l.createElement("h3",{class:"mb-2 fw-bold"},"POC And Open Source Development Services"),l.createElement("p",{class:"text-dark fw-semibold fs-3 mt-4"},"Looking for a reliable and innovative partner to help you navigate the complex world of POC and open source development? Look no further than our expert team at Justtry.")))))),l.createElement("div",{class:"container"},l.createElement("div",{class:"text-center justify-content-center d-flex row"},l.createElement("div",{class:"col-md-7"},l.createElement("h4",{class:"fw-semibold text-dark my-5"},"Unlock the Power of Innovation and Flexibility with Our Expertise"))),l.createElement(d.Z.Container,{activeKey:e},l.createElement(u.Z,{className:"d-flex align-items-center"},l.createElement(p.Z,{className:"col-md-6 col-lg-6 col-sm-8 col-12 d-none d-md-block"},l.createElement(d.Z.Content,null,v.map(((e,t)=>l.createElement(d.Z.Pane,{key:t,eventKey:null==e?void 0:e.eventKey},l.createElement("div",null,l.createElement("img",{className:"d-flex m-auto d-flex justify-content-center shadow rounded w-75",src:e.img,alt:"poc"}))))))),l.createElement(p.Z,{className:"col-md-6 col-lg-6 col-sm-8 col-12"},l.createElement(u.Z,null,l.createElement(p.Z,{md:12},l.createElement("div",{className:"webdev-head "},l.createElement("h2",{className:"text-capitalize titlecard fs-1 font-weight-normal"},"POC and Open Source Development Services")))),l.createElement(u.Z,{className:"webdev-nav-link"},l.createElement(p.Z,{md:12},l.createElement(f.Z,{variant:"pills",className:"flex-column"},E.map(((e,n)=>{const{img:a,description:o,title:c,eventKey:r}=e;return l.createElement(f.Z.Item,{key:n,onMouseEnter:()=>t(r)},l.createElement(f.Z.Link,{eventKey:r},l.createElement("img",{alt:"poc",src:a}),c),l.createElement("p",null,o))})))))))),l.createElement("div",{class:"row"},l.createElement("h3",{class:"titlecard fw-bold"},"Conclusion"),l.createElement("p",{class:"fs-3 fw-semibold"},"So why wait? Contact us today to learn more about our POC and open source development services, and to see how we can help you unleash the full power of innovation and flexibility in your next project."))))},b=n(884);var g=()=>l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(b.Z,null)),y=n(9357);var w=()=>l.createElement(a.Z,null,l.createElement(y.Z,{title:"POC Opensource Installation"}),l.createElement(g,null))},1555:function(e,t,n){var a=n(4184),l=n.n(a),o=n(7294),c=n(6792),r=n(5893);const s=o.forwardRef(((e,t)=>{const[{className:n,...a},{as:o="div",bsPrefix:s,spans:i}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,c.vE)(t,"col");const o=(0,c.pi)(),r=(0,c.zG)(),s=[],i=[];return o.forEach((e=>{const n=a[e];let l,o,c;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:o,order:c}=n):l=n;const m=e!==r?`-${e}`:"";l&&s.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=c&&i.push(`order${m}-${c}`),null!=o&&i.push(`offset${m}-${o}`)})),[{...a,className:l()(n,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,r.jsx)(o,{...a,ref:t,className:l()(n,!i.length&&s)})}));s.displayName="Col",t.Z=s},4051:function(e,t,n){var a=n(4184),l=n.n(a),o=n(7294),c=n(6792),r=n(5893);const s=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},o)=>{const s=(0,c.vE)(e,"row"),i=(0,c.pi)(),m=(0,c.zG)(),d=`${s}-cols`,u=[];return i.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==m?`-${e}`:"";null!=n&&u.push(`${d}${l}-${n}`)})),(0,r.jsx)(n,{ref:o,...a,className:l()(t,s,...u)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-poc-open-source-js-7cd634a4b5c43a6b9cbb.js.map