"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[1576],{7067:function(e,t,n){var r=n(7294),a=n(1883),o=n(682),l=n(4051);t.Z=e=>{let{items:t}=e;return r.createElement(o.Z,{fluid:!0,className:"gx-0"},r.createElement(l.Z,null,r.createElement("nav",{"aria-label":"breadcrumb",className:"custom-breadcrumb"},r.createElement("ol",{className:"breadcrumb"},t.map(((e,n)=>r.createElement("li",{key:n,className:"breadcrumb-item"+(n===t.length-1?" active":""),"aria-current":n===t.length-1?"page":null},n===t.length-1?e.text:r.createElement(a.Link,{to:e.link},e.text))))))))}},4925:function(e,t,n){n.d(t,{Z:function(){return E}});var r=n(7294),a=n(1168),o=n(6462),l=n(4266),i=n(7536),c=n(2305),s=n(6310),u=n(8779),m=n(682),d=n(4051),p=n(1555),f=n(1881),h=n(316);const v=s.Ry().shape({email:s.Z_().email("Please Enter a Email").label("Email").required()});var y=e=>{var t;const{0:n,1:a}=(0,r.useState)(!1),{register:o,handleSubmit:s,formState:{errors:m},reset:d}=(0,i.cI)({resolver:(0,c.X)(v)});return r.createElement(r.Fragment,null,r.createElement(f.Z,Object.assign({},e,{size:"md",className:"form_modal_layout"}),r.createElement("div",{className:"form_modal_wrapper"},r.createElement(f.Z.Header,null,r.createElement(f.Z.Title,null,r.createElement("span",{className:"clr_text"},"Free "),"Consult")),r.createElement(f.Z.Body,null,r.createElement("p",null,"Secure a cost-free consultation for expert insights and personalized advice tailored to your needs. No charges, just"," ",r.createElement("span",{className:"bold_txt"},"valuable guidance.")),r.createElement("form",{autoComplete:"on",onSubmit:s((async e=>{a(!0);const{email:t}=e,n=await(0,h.Z)(t);"success"===n.result?(l.P.showSuccssMsg(null==n?void 0:n.msg),a(!1),d()):(l.P.showErrMsg(null==n?void 0:n.msg),a(!1))}))},r.createElement("input",Object.assign({},o("email"),{className:"form_modal_input",placeholder:"Enter your mail",id:"email",type:"email",maxLength:50})),r.createElement("p",{style:{fontSize:"12px",color:"#FF0000",fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,lineHeight:"20px"}},null===(t=m.email)||void 0===t?void 0:t.message),r.createElement("button",{disabled:n,className:"form_modal_btn",type:"submit"},"Submit Now ",n&&r.createElement(u.Z,null)))))))},b=n(7555),w=n.n(b);const g=s.Ry().shape({name:s.Z_().label("Name").required(),contact:s.Z_().label("Contact").required(),email:s.Z_().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,"Invalid email address").label("Email").required(),mobile:s.Z_().when("contact",((e,t)=>{let[n]=e;return"mobileNum"===n&&""!==n?t.label("Mobile number").required():"whatsapp"===n&&""!==n?t.label("Whatsapp no").required():"telegram"===n&&""!==n?t.label("Telegram no").required():"skype"===n&&""!==n?t.label("Skype link").url("Invalid Skype link").required():void 0})),service:s.Z_().label("Service").required(),content:s.Z_().label("Content").required()});var E=e=>{var t,n,s,f,h;const{0:v,1:b}=(0,r.useState)(!1),[E,_]=r.useState(!1),{0:x,1:N}=(0,r.useState)(""),{0:S,1:j}=(0,r.useState)(""),k=(a.Z.getAllCountries(),()=>{_(!E)}),{db:Z}=e,{register:O,handleSubmit:C,formState:{errors:P},reset:D,setValue:W,getValues:A,trigger:I}=(0,i.cI)({resolver:(0,c.X)(g),mode:"onChange",criteriaMode:"firstError"});A("contact");return r.createElement("section",{className:"justtry_cta_sec"},r.createElement(m.Z,null,r.createElement("div",{className:"d-flex align-items-center justify-content-center"},r.createElement(d.Z,{className:"justtry_cta_form_wrapper"},r.createElement(p.Z,{xxl:7,xl:6,lg:6,md:12,className:"d-flex align-items-center justify-content-center"},r.createElement("div",{className:"justtry_cta_form_sec"},r.createElement("h2",{className:"text-dark"},"Get in ",r.createElement("span",{style:{color:"#7534fc"}},"Touch")),r.createElement("p",null,"We're available to assist and address any inquiries you may have. We eagerly anticipate receiving your communication."),r.createElement("form",{onSubmit:C((async e=>{e.date=new Date,delete e.contact,b(!0);try{const t=(0,o.hJ)(Z,"clients");await(0,o.ET)(t,e),l.P.showSuccssMsg("We will contact/talk to you soon"),D(),N(""),b(!1)}catch(t){l.P.showErrMsg("Error adding document"),b(!1)}})),className:"justtry_cta_form"},r.createElement("div",{className:"justtry_cta_form_content"},r.createElement("div",{className:"justtry_cta_form_lhs"},r.createElement("input",Object.assign({placeholder:"Enter your name",id:"full-name",type:"text"},O("name"),{maxLength:30})),r.createElement("span",{className:"error_msg_text"},null===(t=P.name)||void 0===t?void 0:t.message)),r.createElement("div",{className:"justtry_cta_form_rhs"},r.createElement("input",Object.assign({placeholder:"Enter your mail",id:"email",type:"email"},O("email"),{maxLength:50})),r.createElement("span",{className:"error_msg_text"},null===(n=P.email)||void 0===n?void 0:n.message))),r.createElement("div",{className:"justtry_cta_form_phone"},r.createElement(w(),Object.assign({className:"phone_input",country:"us",value:S,enableSearch:!0,searchPlaceholder:""},O("contact"),{onChange:e=>{W("contact",e,{shouldValidate:!0}),j(e)}})),r.createElement("span",{className:"error_msg_text"},null===(s=P.contact)||void 0===s?void 0:s.message)),r.createElement("div",{className:"justtry_cta_form_service"},r.createElement("select",Object.assign({},O("service"),{className:"classic"}),r.createElement("option",{value:"Select your services"},"Select your services"),r.createElement("option",{value:"crypto exchange development"},"Crypto Exchange Development"),r.createElement("option",{value:"nft marketplace development"},"NFT Marketplace Development"),r.createElement("option",{value:"defi development"},"DeFi Development"),r.createElement("option",{value:"metaverse development"},"Metaverse Development"),r.createElement("option",{value:"blockchain solutions"},"Blockchain Solutions"),r.createElement("option",{value:"web 3.0 development"},"Web 3.0 Development"),r.createElement("option",{value:"crypto wallet development"},"Crypto Wallet Development"),r.createElement("option",{value:"custom software development"},"Custom Software Development"),r.createElement("option",{value:"mobile app development services"},"Mobile App Development Services"),r.createElement("option",{value:"artificial intelligence solutions"},"Artificial Intelligence Solutions"),r.createElement("option",{value:"others"}," Others")),r.createElement("span",{className:"error_msg_text"},null===(f=P.service)||void 0===f?void 0:f.message)),r.createElement("div",{className:"justtry_cta_textarea"},r.createElement("textarea",Object.assign({placeholder:"Text your message here...",id:"content",rows:5},O("content"),{maxLength:200})),r.createElement("span",{className:"error_msg_text"},null===(h=P.content)||void 0===h?void 0:h.message)),r.createElement("div",{className:"justtry_cta_sumbit"},r.createElement("button",{className:"form_submit_btn",disabled:v,type:"submit"},"Submit Now ",v&&r.createElement(u.Z,null)),r.createElement("button",{className:"form_consult_btn",onClick:k,type:"button"},"Free consult"))),r.createElement(y,{onAddProps:e,show:E,onHide:k}))),r.createElement(p.Z,{xxl:5,xl:6,lg:6,md:12,className:"d-flex align-items-center justify-content-center"},r.createElement("div",{className:"justtry_cta_map_sec"},r.createElement("iframe",{title:"Justtry Office",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2126470840517!2d78.1340045741623!3d9.916240074472167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c539e6118b11%3A0x6c3891e5d1526c93!2sJusttry%20Technologies!5e0!3m2!1sen!2sin!4v1694181975876!5m2!1sen!2sin",className:"map_frame",allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})))))))}},6025:function(e,t,n){n.d(t,{Z:function(){return S}});var r=n(4184),a=n.n(r),o=n(7294),l=n(6792),i=n(4680),c=n(9602),s=n(5893);const u=o.forwardRef((({bsPrefix:e,className:t,variant:n,as:r="img",...o},i)=>{const c=(0,l.vE)(e,"card-img");return(0,s.jsx)(r,{ref:i,className:a()(n?`${c}-${n}`:c,t),...o})}));u.displayName="CardImg";var m=u,d=n(9059);const p=o.forwardRef((({bsPrefix:e,className:t,as:n="div",...r},i)=>{const c=(0,l.vE)(e,"card-header"),u=(0,o.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,s.jsx)(d.Z.Provider,{value:u,children:(0,s.jsx)(n,{ref:i,...r,className:a()(t,c)})})}));p.displayName="CardHeader";var f=p;const h=(0,c.Z)("h5"),v=(0,c.Z)("h6"),y=(0,i.Z)("card-body"),b=(0,i.Z)("card-title",{Component:h}),w=(0,i.Z)("card-subtitle",{Component:v}),g=(0,i.Z)("card-link",{Component:"a"}),E=(0,i.Z)("card-text",{Component:"p"}),_=(0,i.Z)("card-footer"),x=(0,i.Z)("card-img-overlay"),N=o.forwardRef((({bsPrefix:e,className:t,bg:n,text:r,border:o,body:i=!1,children:c,as:u="div",...m},d)=>{const p=(0,l.vE)(e,"card");return(0,s.jsx)(u,{ref:d,...m,className:a()(t,p,n&&`bg-${n}`,r&&`text-${r}`,o&&`border-${o}`),children:i?(0,s.jsx)(y,{children:c}):c})}));N.displayName="Card";var S=Object.assign(N,{Img:m,Title:b,Subtitle:w,Body:y,Link:g,Text:E,Header:f,Footer:_,ImgOverlay:x})},8137:function(e,t,n){var r=n(6459);var a=(0,n(5016).Z)("email",(function(e,t){var n=t.subject,a=t.body,o=t.separator;return"mailto:"+(0,r.Z)({subject:n,body:a?a+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}});t.Z=a},3597:function(e,t,n){var r=n(5456),a=n(6459);var o=(0,n(5016).Z)("linkedin",(function(e,t){var n=t.title,o=t.summary,l=t.source;return(0,r.Z)(e,"linkedin.url"),"https://linkedin.com/shareArticle"+(0,a.Z)({url:e,mini:"true",title:n,summary:o,source:l})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600});t.Z=o},2834:function(e,t,n){var r=n(5456),a=n(6459);var o=(0,n(5016).Z)("whatsapp",(function(e,t){var n=t.title,o=t.separator;return(0,r.Z)(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+(0,a.Z)({text:n?n+o+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400});t.Z=o},5016:function(e,t,n){n.d(t,{Z:function(){return h}});var r,a=n(7294),o=n(4184),l=n.n(o),i=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},c.apply(this,arguments)},s=function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function l(e){try{c(r.next(e))}catch(t){o(t)}}function i(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,i)}c((r=r.apply(e,t||[])).next())}))},u=function(e,t){var n,r,a,o,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function i(o){return function(i){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,r=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=t.call(e,l)}catch(i){o=[6,i],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,i])}}},m=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};var d=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n,r,a=t.props,o=a.onShareWindowClose,l=a.windowHeight,i=void 0===l?400:l,s=a.windowPosition,u=void 0===s?"windowCenter":s,d=a.windowWidth,p=void 0===d?550:d;!function(e,t,n){var r=t.height,a=t.width,o=m(t,["height","width"]),l=c({height:r,width:a,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},o),i=window.open(e,"",Object.keys(l).map((function(e){return"".concat(e,"=").concat(l[e])})).join(", "));if(n)var s=window.setInterval((function(){try{(null===i||i.closed)&&(window.clearInterval(s),n(i))}catch(e){console.error(e)}}),1e3)}(e,c({height:i,width:p},"windowCenter"===u?(n=p,r=i,{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-n/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-r/2}):function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}}(p,i)),o)},t.handleClick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,a,o,l,i,c,s,m;return u(this,(function(u){switch(u.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,a=t.networkLink,o=t.onClick,l=t.url,i=t.openShareDialogOnClick,c=t.opts,s=a(l,c),r?[2]:(e.preventDefault(),n?(m=n(),!(d=m)||"object"!=typeof d&&"function"!=typeof d||"function"!=typeof d.then?[3,2]:[4,m]):[3,2]);case 1:u.sent(),u.label=2;case 2:return i&&this.openShareDialog(s),o&&o(e,s),[2]}var d}))}))},t}return i(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,o=e.disabledStyle,i=e.forwardedRef,s=(e.networkLink,e.networkName),u=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),d=e.style,p=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,m(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),f=l()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),h=c(c(u?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},d),r&&o);return a.createElement("button",c({},p,{"aria-label":p["aria-label"]||s,className:f,onClick:this.handleClick,ref:i,style:h}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(a.Component),p=d,f=function(){return f=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},f.apply(this,arguments)};var h=function(e,t,n,r){function o(o,l){var i=n(o),c=f({},o);return Object.keys(i).forEach((function(e){delete c[e]})),a.createElement(p,f({},r,c,{forwardedRef:l,networkName:e,networkLink:t,opts:n(o)}))}return o.displayName="ShareButton-".concat(e),(0,a.forwardRef)(o)}},5456:function(e,t,n){n.d(t,{Z:function(){return l}});var r,a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),o=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return a(t,e),t}(Error);function l(e,t){if(!e)throw new o(t)}},6459:function(e,t,n){function r(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return"".concat(encodeURIComponent(t),"=").concat(encodeURIComponent(String(n)))}));return t.length>0?"?".concat(t.join("&")):""}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=6eebc0f9b43779592d9924ee997e3b27d6c58466-21b89eefd58700c05943.js.map