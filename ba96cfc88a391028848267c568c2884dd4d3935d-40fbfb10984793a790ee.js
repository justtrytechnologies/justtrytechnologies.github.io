"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[20],{8986:function(e,t,a){a.d(t,{Z:function(){return Q}});var l=a(7294),s=a(1168),r=a(6462),n=a(7132),o=a(7536),c=a(2305),i=a(6310),m=a(8779),d=a(682),u=a(4051),f=a(4184),p=a.n(f),b=a(5697),v=a.n(b),h=a(5893);const x={type:v().string,tooltip:v().bool,as:v().elementType},y=l.forwardRef((({as:e="div",className:t,type:a="valid",tooltip:l=!1,...s},r)=>(0,h.jsx)(e,{...s,ref:r,className:p()(t,`${a}-${l?"tooltip":"feedback"}`)})));y.displayName="Feedback",y.propTypes=x;var N=y;var E=l.createContext({}),g=a(6792);const w=l.forwardRef((({id:e,bsPrefix:t,className:a,type:s="checkbox",isValid:r=!1,isInvalid:n=!1,as:o="input",...c},i)=>{const{controlId:m}=(0,l.useContext)(E);return t=(0,g.vE)(t,"form-check-input"),(0,h.jsx)(o,{...c,ref:i,type:s,id:e||m,className:p()(a,t,r&&"is-valid",n&&"is-invalid")})}));w.displayName="FormCheckInput";var j=w;const C=l.forwardRef((({bsPrefix:e,className:t,htmlFor:a,...s},r)=>{const{controlId:n}=(0,l.useContext)(E);return e=(0,g.vE)(e,"form-check-label"),(0,h.jsx)("label",{...s,ref:r,htmlFor:a||n,className:p()(t,e)})}));C.displayName="FormCheckLabel";var I=C,k=a(3439);const $=l.forwardRef((({id:e,bsPrefix:t,bsSwitchPrefix:a,inline:s=!1,reverse:r=!1,disabled:n=!1,isValid:o=!1,isInvalid:c=!1,feedbackTooltip:i=!1,feedback:m,feedbackType:d,className:u,style:f,title:b="",type:v="checkbox",label:x,children:y,as:w="input",...C},$)=>{t=(0,g.vE)(t,"form-check"),a=(0,g.vE)(a,"form-switch");const{controlId:F}=(0,l.useContext)(E),P=(0,l.useMemo)((()=>({controlId:e||F})),[F,e]),R=!y&&null!=x&&!1!==x||(0,k.XW)(y,I),O=(0,h.jsx)(j,{...C,type:"switch"===v?"checkbox":v,ref:$,isValid:o,isInvalid:c,disabled:n,as:w});return(0,h.jsx)(E.Provider,{value:P,children:(0,h.jsx)("div",{style:f,className:p()(u,R&&t,s&&`${t}-inline`,r&&`${t}-reverse`,"switch"===v&&a),children:y||(0,h.jsxs)(h.Fragment,{children:[O,R&&(0,h.jsx)(I,{title:b,children:x}),m&&(0,h.jsx)(N,{type:d,tooltip:i,children:m})]})})})}));$.displayName="FormCheck";var F=Object.assign($,{Input:j,Label:I});a(2473);const P=l.forwardRef((({bsPrefix:e,type:t,size:a,htmlSize:s,id:r,className:n,isValid:o=!1,isInvalid:c=!1,plaintext:i,readOnly:m,as:d="input",...u},f)=>{const{controlId:b}=(0,l.useContext)(E);let v;return e=(0,g.vE)(e,"form-control"),v=i?{[`${e}-plaintext`]:!0}:{[e]:!0,[`${e}-${a}`]:a},(0,h.jsx)(d,{...u,type:t,size:s,ref:f,readOnly:m,id:r||b,className:p()(n,v,o&&"is-valid",c&&"is-invalid","color"===t&&`${e}-color`)})}));P.displayName="FormControl";var R=Object.assign(P,{Feedback:N}),O=(0,a(4680).Z)("form-floating");const S=l.forwardRef((({controlId:e,as:t="div",...a},s)=>{const r=(0,l.useMemo)((()=>({controlId:e})),[e]);return(0,h.jsx)(E.Provider,{value:r,children:(0,h.jsx)(t,{...a,ref:s})})}));S.displayName="FormGroup";var Z=S,L=a(1555);const T=l.forwardRef((({as:e="label",bsPrefix:t,column:a=!1,visuallyHidden:s=!1,className:r,htmlFor:n,...o},c)=>{const{controlId:i}=(0,l.useContext)(E);t=(0,g.vE)(t,"form-label");let m="col-form-label";"string"==typeof a&&(m=`${m} ${m}-${a}`);const d=p()(r,t,s&&"visually-hidden",a&&m);return n=n||i,a?(0,h.jsx)(L.Z,{ref:c,as:"label",className:d,htmlFor:n,...o}):(0,h.jsx)(e,{ref:c,className:d,htmlFor:n,...o})}));T.displayName="FormLabel";var V=T;const z=l.forwardRef((({bsPrefix:e,className:t,id:a,...s},r)=>{const{controlId:n}=(0,l.useContext)(E);return e=(0,g.vE)(e,"form-range"),(0,h.jsx)("input",{...s,type:"range",ref:r,className:p()(t,e),id:a||n})}));z.displayName="FormRange";var _=z;const M=l.forwardRef((({bsPrefix:e,size:t,htmlSize:a,className:s,isValid:r=!1,isInvalid:n=!1,id:o,...c},i)=>{const{controlId:m}=(0,l.useContext)(E);return e=(0,g.vE)(e,"form-select"),(0,h.jsx)("select",{...c,size:a,ref:i,className:p()(s,e,t&&`${e}-${t}`,r&&"is-valid",n&&"is-invalid"),id:o||m})}));M.displayName="FormSelect";var q=M;const A=l.forwardRef((({bsPrefix:e,className:t,as:a="small",muted:l,...s},r)=>(e=(0,g.vE)(e,"form-text"),(0,h.jsx)(a,{...s,ref:r,className:p()(t,e,l&&"text-muted")}))));A.displayName="FormText";var W=A;const G=l.forwardRef(((e,t)=>(0,h.jsx)(F,{...e,ref:t,type:"switch"})));G.displayName="Switch";var J=Object.assign(G,{Input:F.Input,Label:F.Label});const U=l.forwardRef((({bsPrefix:e,className:t,children:a,controlId:l,label:s,...r},n)=>(e=(0,g.vE)(e,"form-floating"),(0,h.jsxs)(Z,{ref:n,className:p()(t,e),controlId:l,...r,children:[a,(0,h.jsx)("label",{htmlFor:l,children:s})]}))));U.displayName="FloatingLabel";var X=U;const K={_ref:v().any,validated:v().bool,as:v().elementType},B=l.forwardRef((({className:e,validated:t,as:a="form",...l},s)=>(0,h.jsx)(a,{...l,ref:s,className:p()(e,t&&"was-validated")})));B.displayName="Form",B.propTypes=K;var D=Object.assign(B,{Group:Z,Control:R,Floating:O,Check:F,Switch:J,Label:V,Text:W,Range:_,Select:q,FloatingLabel:X});const H=i.Ry().shape({name:i.Z_().label("Name").required(),email:i.Z_().email("Please Enter a Valid Email").label("Email").required(),country:i.Z_().label("Country").required(),mobile:i.Z_().label("Mobile Number").required(),content:i.Z_().label("Content").required()});var Q=e=>{var t,a,i,f,p;console.log("firebase keys:;",e);const{0:b,1:v}=(0,l.useState)(!1),{0:h,1:x}=(0,l.useState)(),{db:y}=e,{register:N,handleSubmit:E,formState:{errors:g},reset:w,setValue:j}=(0,o.cI)({resolver:(0,c.X)(H)}),C=s.Z.getAllCountries();return l.createElement(d.Z,null,l.createElement("section",{className:"section-cta",id:"cta"},l.createElement("div",{className:"container p-5 col-md-12 bg-white shadow rounded-5",style:{background:"linear-gradient(to right bottom, #3c267d, #c27492)"}},l.createElement("div",{className:"row d-flex justify-content-start"},l.createElement("div",{className:"col-md-7 col-12 p-3"},l.createElement("div",null,l.createElement("h2",{className:"text-uppercase text-white"},"BOOK A QUICK CONSULTATION"),l.createElement("p",{className:"text-white"},"Increase efficency, productivity, and business performance with Justtry various products that have been used by tens of thousands of businesses in the word.")),l.createElement("form",{onSubmit:E((async e=>{const{name:t,email:a,country:l,content:s,mobile:o}=e,c={name:t,email:a,country:l,content:s,mobile:o,date:new Date};v(!0);try{const e=(0,r.hJ)(y,"clients"),t=await(0,r.ET)(e,c);console.log("resp::",t),n.P.showSuccssMsg("We will contact/talk to you soon"),w(),v(!1)}catch(i){n.P.showErrMsg("Error adding document"),console.log("e::",i),v(!1)}})),className:"cta-form"},l.createElement(u.Z,null,l.createElement("div",{className:"col-sm-12 col-12"},l.createElement("label",{for:"full-name"},"Name"),l.createElement("input",Object.assign({id:"full-name",type:"text",placeholder:"Enter Your Name"},N("name"),{maxLength:30})),l.createElement("p",{className:"text-light mb-0"},null===(t=g.name)||void 0===t?void 0:t.message)),l.createElement("div",{className:"col-sm-12 col-12"},l.createElement("label",{for:"email"},"Email address"),l.createElement("input",Object.assign({id:"email",type:"email",placeholder:"me@example.com"},N("email"),{maxLength:50})),l.createElement("p",{className:"text-light mb-0"},null===(a=g.email)||void 0===a?void 0:a.message))),l.createElement(u.Z,null,l.createElement("div",{className:"col-md-12 col-sm-12 col-12"},l.createElement("label",{for:"select-where"},"Country"),l.createElement("select",Object.assign({id:"select-where"},N("country")),l.createElement("option",{value:"",disabled:!0,selected:!0},"Please choose one option:"),C.map(((e,t)=>l.createElement("option",{key:t,value:e.isoCode},e.name)))),l.createElement("p",{className:"text-white mb-0"},null===(i=g.country)||void 0===i?void 0:i.message)),l.createElement("div",{className:"col-md-12 col-sm-12 col-12"},l.createElement("label",{for:"mobile"},"Mobile / Whatsapp"),l.createElement(D.Control,Object.assign({id:"mobile",type:"text",placeholder:"Mobile / Whatsapp"},N("mobile"),{onChange:e=>{(""===e.target.value||/^[0-9\b]+$/.test(e.target.value))&&(j("mobile",e.target.value,{shouldValidate:!0}),x(e.target.value))},value:h,maxLength:50})),l.createElement("p",{className:"text-light mb-0"},null===(f=g.mobile)||void 0===f?void 0:f.message))),l.createElement("div",null,l.createElement("label",{for:"content"},"Content"),l.createElement("textarea",Object.assign({id:"content",placeholder:"Type content here",rows:5,className:"input"},N("content"),{maxLength:200})),l.createElement("p",{className:"text-light mb-0"},null===(p=g.content)||void 0===p?void 0:p.message)),l.createElement("button",{disabled:b,className:"custom-btn btn--form"},"Submit ",b&&l.createElement(m.Z,null)))),l.createElement("div",{className:"col-md-5 col-12 p-4 d-flex flex-column align-items-center justify-content-center"},l.createElement("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2126470840517!2d78.1340045741623!3d9.916240074472167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c539e6118b11%3A0x6c3891e5d1526c93!2sJusttry%20Technologies!5e0!3m2!1sen!2sin!4v1694181975876!5m2!1sen!2sin",className:"map-frame",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}))))))}},1555:function(e,t,a){var l=a(4184),s=a.n(l),r=a(7294),n=a(6792),o=a(5893);const c=r.forwardRef(((e,t)=>{const[{className:a,...l},{as:r="div",bsPrefix:c,spans:i}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,n.vE)(t,"col");const r=(0,n.pi)(),o=(0,n.zG)(),c=[],i=[];return r.forEach((e=>{const a=l[e];let s,r,n;delete l[e],"object"==typeof a&&null!=a?({span:s,offset:r,order:n}=a):s=a;const m=e!==o?`-${e}`:"";s&&c.push(!0===s?`${t}${m}`:`${t}${m}-${s}`),null!=n&&i.push(`order${m}-${n}`),null!=r&&i.push(`offset${m}-${r}`)})),[{...l,className:s()(a,...c,...i)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,o.jsx)(r,{...l,ref:t,className:s()(a,!i.length&&c)})}));c.displayName="Col",t.Z=c},3439:function(e,t,a){a.d(t,{Ed:function(){return r},UI:function(){return s},XW:function(){return n}});var l=a(7294);function s(e,t){let a=0;return l.Children.map(e,(e=>l.isValidElement(e)?t(e,a++):e))}function r(e,t){let a=0;l.Children.forEach(e,(e=>{l.isValidElement(e)&&t(e,a++)}))}function n(e,t){return l.Children.toArray(e).some((e=>l.isValidElement(e)&&e.type===t))}},2473:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=ba96cfc88a391028848267c568c2884dd4d3935d-40fbfb10984793a790ee.js.map