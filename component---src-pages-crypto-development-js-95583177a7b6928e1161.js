/*! For license information please see component---src-pages-crypto-development-js-95583177a7b6928e1161.js.LICENSE.txt */
"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[624],{7067:function(e,t,n){var a=n(7294),r=n(1883),l=n(682),c=n(4051);t.Z=e=>{let{items:t}=e;return console.log(t),a.createElement(l.Z,{fluid:!0,className:"gx-0"},a.createElement(c.Z,null,a.createElement("nav",{"aria-label":"breadcrumb",className:"custom-breadcrumb"},a.createElement("ol",{className:"breadcrumb"},t.map(((e,n)=>a.createElement("li",{key:n,className:"breadcrumb-item"+(n===t.length-1?" active":""),"aria-current":n===t.length-1?"page":null},n===t.length-1?e.text:a.createElement(r.Link,{to:e.link},e.text))))))))}},7217:function(e,t,n){n.r(t),n.d(t,{default:function(){return Y}});var a=n(7294),r=n(5649),l=n(9357),c=n(682),s=n(4051),o=n(1555),i=n(4184),u=n.n(i),m=n(861),d=n(6792),p=n(5893);const h=a.forwardRef((({as:e,bsPrefix:t,variant:n="primary",size:a,active:r=!1,disabled:l=!1,className:c,...s},o)=>{const i=(0,d.vE)(t,"btn"),[h,{tagName:y}]=(0,m.FT)({tagName:e,disabled:l,...s}),g=y;return(0,p.jsx)(g,{...h,...s,ref:o,disabled:l,className:u()(c,i,r&&"active",n&&`${i}-${n}`,a&&`${i}-${a}`,s.href&&l&&"disabled")})}));h.displayName="Button";var y=h,g=n(6025),f=n(7069),E=n(2081),b=n(1939),v=n(6787),x=n(4691),C=n(1244),w=n(8752),N=n(5103),Z=n(3439),_=n(6101);function k(e){let t;return(0,Z.Ed)(e,(e=>{null==t&&(t=e.props.eventKey)})),t}function S(e){const{title:t,eventKey:n,disabled:a,tabClassName:r,tabAttrs:l,id:c}=e.props;return null==t?null:(0,p.jsx)(C.Z,{as:"li",role:"presentation",children:(0,p.jsx)(x.Z,{as:"button",type:"button",eventKey:n,disabled:a,id:c,className:r,...l,children:t})})}const T=e=>{const{id:t,onSelect:n,transition:a,mountOnEnter:r=!1,unmountOnExit:l=!1,variant:c="tabs",children:s,activeKey:o=k(s),...i}=(0,E.Ch)(e,{activeKey:"onSelect"});return(0,p.jsxs)(b.Z,{id:t,activeKey:o,onSelect:n,transition:(0,_.Z)(a),mountOnEnter:r,unmountOnExit:l,children:[(0,p.jsx)(v.Z,{...i,role:"tablist",as:"ul",variant:c,children:(0,Z.UI)(s,S)}),(0,p.jsx)(w.Z,{children:(0,Z.UI)(s,(e=>{const t={...e.props};return delete t.title,delete t.disabled,delete t.tabClassName,delete t.tabAttrs,(0,p.jsx)(N.Z,{...t})}))})]})};T.displayName="Tabs";var j=T,I=n(7905),L=n.p+"static/crypto1-c62b5009a60a15f5e4d63430ac3fbabc.png",R=n.p+"static/crypto2-c3eabec78ff1905c0ebceb6fdbe68ba5.svg",O=n.p+"static/crypto3-f3d0801f17ea282f2e058edcc48e1bd2.png",A=n.p+"static/crypto4-38e6cfd481eb16ca1e60f37f22093b14.png",P=n.p+"static/cryptoanim-5c2b0933bf542c6f9857e2418e7c5a0d.png",$=n.p+"static/first-271b5fa2ddd71957becf7acedb501bda.jpg",M=n.p+"static/second-83710a81b5f5232c5806a7f1ca7301e0.jpg",B=n.p+"static/third-6e7cefb3ee44046fc98ab7ee0da59952.jpg",D=n(1971),F=n(2305),K=n(6310),H=n(8779),q=n(7536),U=n(1168),W=n(6462),J=n(7132);const z=K.Ry().shape({name:K.Z_().label("Name").required(),email:K.Z_().label("Email").required(),country:K.Z_().label("Country").required(),mobile:K.Z_().label().required("Required"),content:K.Z_().label("Content").required()});var G=e=>{var t,n,r,l,i;const{db:u}=e;console.log("db::",u);const m=(0,a.useRef)(null),{0:d,1:p}=(0,a.useState)(!1),{0:h,1:E}=(0,a.useState)(!1),{0:b,1:v}=(0,a.useState)(!0),{0:x,1:C}=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=setInterval((()=>{v((e=>!e)),C((e=>!e))}),1e3);return()=>clearInterval(e)}),[]);const{register:w,handleSubmit:N,formState:{errors:Z},reset:_}=(0,q.cI)({resolver:(0,F.X)(z)}),k=()=>{E(!h),_()},S=U.Z.getAllCountries();return a.createElement(c.Z,null,a.createElement(s.Z,null,a.createElement(o.Z,null,a.createElement("div",{className:"crypto-page"},a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container"},a.createElement(o.Z,{md:6,sm:12,className:"px-5"},a.createElement("h1",null,"Cryptocurrency Exchange Development Services"),a.createElement("p",null,"Step into the future by launching a groundbreaking cryptocurrency exchange brimming with features. Harness Justtry's expertise in crypto exchange development today and dominate the cryptocurrency realm."),a.createElement(y,{onClick:k},"TALK TO US")),a.createElement(o.Z,{md:6,sm:12},a.createElement("img",{className:"w-100 ",src:L,alt:"Crypto Exchange images"})))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container g-5 d-flex align-items-center"},a.createElement(o.Z,{md:4,sm:12,className:"d-flex align-items-center justify-content-center"},a.createElement("img",{className:"bitcoin w-75",src:R,alt:"Crypto Exchange images"})),a.createElement(o.Z,{md:8,sm:12,className:"px-5"},a.createElement("h2",null,"Cryptocurrency Exchange Development: A Concise Overview"),a.createElement("p",null,"Although the history of cryptocurrencies dates way back to the 1980s, when they were known as cyber currencies, these digital currencies gained popularity only after the launch of Bitcoin in 2009. Over the years, the acceptance of cryptocurrencies has only grown, with many financing cryptocurrency-based projects. But what are these platforms? Crypto exchanges are digital marketplaces that allow users to buy, sell, or trade their digital currencies as well as assets."),a.createElement("p",null,"There are more than 235 cryptocurrency exchanges available today, and each one offers a unique set of features and functionalities. Due to the soaring demand and popularity of crypto exchanges, entrepreneurs, startups, and even large organizations have started to invest in cryptocurrency exchange development projects. This is where we come in. As one of the leading crypto exchange development companies with expert minds on our team, Justtry can help you soar to the top of the crypto market and generate revenue like never before.")))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container align-items-center"},a.createElement(o.Z,{md:8,sm:12,className:"px-5"},a.createElement("h2",null,"Why Should You Invest in Crypto Exchange Development?"),a.createElement("p",null,"The crypto industry has grown by leaps and bounds in the past few years. The mainstream acceptance of crypto-based platforms has skyrocketed the demand for cryptocurrency exchange apps. With G20 leaders deciding to swiftly implement the Crypto Asset Reporting Framework (CARF), one can clearly conclude that cryptocurrencies as well as crypto-powered platforms will remain intact for the time being. Binance, the largest cryptocurrency exchange to date, saw its revenue grow 10 times in the past two years. The fact that crypto exchange platforms not only survived the bear market but also emerged profitable serves as strong motivation to develop and launch a feature-packed cryptocurrency exchange app today.")),a.createElement(o.Z,{md:4,sm:12,className:"d-flex justify-content-center"},b&&a.createElement("img",{src:O,alt:"Crypto Man Images"}),x&&a.createElement("img",{src:P,alt:"Crypto Man Images"})))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container-both  d-flex align-items-center justify-content-center"},a.createElement(o.Z,{md:10,sm:12,xs:12},a.createElement("div",{className:"crypto-custom-container-both"},a.createElement("div",{className:"content-btn-type"},a.createElement("h3",null,"Join the Crypto Craze with Our State-of-the-Art Cryptocurrency Exchange Today!"),a.createElement("div",{className:"demo-btn d-flex justify-content-between"},a.createElement("h3",{onClick:k},"Get Demo with our Experts!"))))))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container-both py-5"},a.createElement(o.Z,{md:12,className:"px-5"},a.createElement("h2",{className:"text-center"},"Various Approaches To Building a Sensational Crypto Exchange"),a.createElement("p",null,"To meet the surging necessity for cutting-edge cryptocurrency exchange platforms, numerous strategies came into existence to build and launch these crypto exchange softwares into the global market as soon as possible. Let’s look at these one by one. "))),a.createElement(s.Z,{className:"crypto-custom-container-both gy-3 pb-5 "},a.createElement(o.Z,{md:4,lg:4},a.createElement("div",{className:"number-wrapper"},a.createElement(g.Z,{className:"crypto-cards"},a.createElement(g.Z.Body,null,a.createElement(g.Z.Title,null,a.createElement("h3",null,"Developing Crypto Exchange From Scratch")),a.createElement(g.Z.Text,{className:"text-start"},"This approach involves building the whole platform from the ground up. From ideation to coding to launch, every process is carried out step-by-step. This strategy, although it helps you build your dream cryptocurrency exchange app, might prove costly and time-consuming in the long run. If you want to launch your platform in a matter of months, you can go ahead with this approach.")),a.createElement("div",{className:"number-one"},a.createElement("h2",null,"01"))))),a.createElement(o.Z,{md:4,lg:4},a.createElement("div",{className:"number-wrapper"},a.createElement(g.Z,{className:"crypto-cards"},a.createElement(g.Z.Body,null,a.createElement(g.Z.Title,null,a.createElement("h3",null,"Building Cryptocurrency Exchanges Via Clone Script")),a.createElement(g.Z.Text,{className:"text-start"},"Clone scripts are nothing but a pre-built version of existing cryptocurrency exchanges like Binance. These are ready-to-launch and can be modified as per your requirements. The best thing about using these clone scripts is that you can launch your crypto exchange app in a matter of weeks and start generating revenue.")),a.createElement("div",{className:"number-one"},a.createElement("h2",null,"02"))))),a.createElement(o.Z,{md:4,lg:4},a.createElement("div",{className:"number-wrapper"},a.createElement(g.Z,{className:"crypto-cards"},a.createElement(g.Z.Body,null,a.createElement(g.Z.Title,null,a.createElement("h3",null,"Utilizing a White Label Solution")),a.createElement(g.Z.Text,{className:"text-start"},"A white label solution is readily available software developed by one company but sold by another company as your own. These, too, can be modified on the go and launched in a couple of weeks. These are quite similar to clone scripts, although you can advertise the white-label crypto exchange as your own product as opposed to clone scripts.")),a.createElement("div",{className:"number-one"},a.createElement("h2",null,"03"))))))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container-both pt-3"},a.createElement(o.Z,{lg:6,className:"d-flex flex-column align-items-center justify-content-center"},a.createElement("div",{className:"crypto_go_solution_lhs"},a.createElement("h2",null,"Unlock Instant Success on Your Crypto Adventure with Our Ready-to-Go Solution!"),a.createElement("div",{className:"crypto_go_solution_carousel"},a.createElement("button",{onClick:()=>{m.current.prev()}},a.createElement("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.80705 15.9165C9.61106 15.6712 9.50098 15.3387 9.50098 14.992C9.50098 14.6453 9.61106 14.3128 9.80705 14.0676L13.7533 9.13298C13.9496 8.88768 14.2159 8.74992 14.4935 8.75C14.6309 8.75004 14.767 8.78392 14.894 8.84971C15.021 8.91549 15.1363 9.0119 15.2335 9.13342C15.3307 9.25493 15.4077 9.39919 15.4603 9.55793C15.5129 9.71668 15.5399 9.88682 15.5399 10.0586C15.5399 10.2304 15.5128 10.4006 15.4601 10.5593C15.4075 10.718 15.3304 10.8622 15.2332 10.9837L12.0265 14.992L15.2332 19.0004C15.3332 19.121 15.4129 19.2653 15.4679 19.4249C15.5228 19.5845 15.5517 19.7561 15.553 19.9298C15.5542 20.1035 15.5278 20.2758 15.4753 20.4366C15.4227 20.5974 15.3451 20.7435 15.2468 20.8664C15.1486 20.9893 15.0318 21.0865 14.9032 21.1523C14.7746 21.2182 14.6368 21.2514 14.4979 21.25C14.3589 21.2485 14.2215 21.2125 14.0938 21.144C13.9661 21.0756 13.8506 20.976 13.754 20.8511L9.80565 15.9165H9.80705Z",fill:"#F2C762"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M9.80705 15.9165C9.61106 15.6712 9.50098 15.3387 9.50098 14.992C9.50098 14.6453 9.61106 14.3128 9.80705 14.0676L13.7533 9.13298C13.9496 8.88768 14.2159 8.74992 14.4935 8.75C14.6309 8.75004 14.767 8.78392 14.894 8.84971C15.021 8.91549 15.1363 9.0119 15.2335 9.13342C15.3307 9.25493 15.4077 9.39919 15.4603 9.55793C15.5129 9.71668 15.5399 9.88682 15.5399 10.0586C15.5399 10.2304 15.5128 10.4006 15.4601 10.5593C15.4075 10.718 15.3304 10.8622 15.2332 10.9837L12.0265 14.992L15.2332 19.0004C15.3332 19.121 15.4129 19.2653 15.4679 19.4249C15.5228 19.5845 15.5517 19.7561 15.553 19.9298C15.5542 20.1035 15.5278 20.2758 15.4753 20.4366C15.4227 20.5974 15.3451 20.7435 15.2468 20.8664C15.1486 20.9893 15.0318 21.0865 14.9032 21.1523C14.7746 21.2182 14.6368 21.2514 14.4979 21.25C14.3589 21.2485 14.2215 21.2125 14.0938 21.144C13.9661 21.0756 13.8506 20.976 13.754 20.8511L9.80565 15.9165H9.80705Z",fill:"white"}))),a.createElement("button",{onClick:()=>{m.current.next()}},a.createElement("svg",{width:"25",height:"30",viewBox:"0 0 25 30",fill:"none",xmlns:"http://www.w3.org/2000/svg"},a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.3697 14.0835C16.5657 14.3288 16.6758 14.6613 16.6758 15.008C16.6758 15.3547 16.5657 15.6872 16.3697 15.9324L12.4234 20.867C12.2271 21.1123 11.9609 21.2501 11.6833 21.25C11.5458 21.25 11.4097 21.2161 11.2828 21.1503C11.1558 21.0845 11.0404 20.9881 10.9432 20.8666C10.8461 20.7451 10.769 20.6008 10.7164 20.4421C10.6639 20.2833 10.6368 20.1132 10.6369 19.9414C10.6369 19.7696 10.664 19.5994 10.7166 19.4407C10.7693 19.282 10.8464 19.1378 10.9436 19.0163L14.1503 15.008L10.9436 10.9996C10.8436 10.879 10.7638 10.7347 10.7089 10.5751C10.654 10.4155 10.6251 10.2439 10.6238 10.0702C10.6225 9.89649 10.6489 9.72421 10.7015 9.5634C10.7541 9.4026 10.8317 9.25649 10.9299 9.1336C11.0281 9.01071 11.145 8.91351 11.2736 8.84765C11.4021 8.7818 11.5399 8.74862 11.6789 8.75004C11.8179 8.75147 11.9552 8.78748 12.0829 8.85596C12.2106 8.92445 12.3262 9.02404 12.4227 9.14893L16.3711 14.0835H16.3697Z",fill:"#F2C762"}),a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.3697 14.0835C16.5657 14.3288 16.6758 14.6613 16.6758 15.008C16.6758 15.3547 16.5657 15.6872 16.3697 15.9324L12.4234 20.867C12.2271 21.1123 11.9609 21.2501 11.6833 21.25C11.5458 21.25 11.4097 21.2161 11.2828 21.1503C11.1558 21.0845 11.0404 20.9881 10.9432 20.8666C10.8461 20.7451 10.769 20.6008 10.7164 20.4421C10.6639 20.2833 10.6368 20.1132 10.6369 19.9414C10.6369 19.7696 10.664 19.5994 10.7166 19.4407C10.7693 19.282 10.8464 19.1378 10.9436 19.0163L14.1503 15.008L10.9436 10.9996C10.8436 10.879 10.7638 10.7347 10.7089 10.5751C10.654 10.4155 10.6251 10.2439 10.6238 10.0702C10.6225 9.89649 10.6489 9.72421 10.7015 9.5634C10.7541 9.4026 10.8317 9.25649 10.9299 9.1336C11.0281 9.01071 11.145 8.91351 11.2736 8.84765C11.4021 8.7818 11.5399 8.74862 11.6789 8.75004C11.8179 8.75147 11.9552 8.78748 12.0829 8.85596C12.2106 8.92445 12.3262 9.02404 12.4227 9.14893L16.3711 14.0835H16.3697Z",fill:"white"})))))),a.createElement(o.Z,{lg:6,className:"d-flex align-items-center justify-content-center"},a.createElement("div",{className:"crypto_carousel_slider"},a.createElement(f.Z,{ref:m,indicators:!1,controls:!1,interval:null},a.createElement(f.Z.Item,null,a.createElement("img",{className:"w-100",src:$})),a.createElement(f.Z.Item,null,a.createElement("img",{className:"w-100",src:M})),a.createElement(f.Z.Item,null,a.createElement("img",{className:"w-100",src:B}))))))),a.createElement("section",null,a.createElement(s.Z,{className:"d-flex align-items-center justify-content-center "},a.createElement(o.Z,{md:12,sm:10,xs:10},a.createElement("h2",{className:"text-center mt-5"},"Two Pioneering Services Offered by Our Cryptocurrency Exchange"),a.createElement("div",{className:"trade-tab crypto-custom-container"},a.createElement(j,{defaultActiveKey:"Spot",id:"justify-tab-example",className:"mb-3",justify:!0},a.createElement(I.Z,{eventKey:"Spot",title:"Spot-Trading"},a.createElement("p",null,"When it comes to spot trading, users buy cryptocurrencies and wait for their price to rise before selling them. The best thing about spot trading is that you buy cryptocurrencies with your own money. You can only buy what you can afford. This is why spot trading is often considered safer when compared to other trading markets. Also, the transactions between traders are settled ‘on the spot’, hence the name. The ultimate goal of spot trading is to buy assets at a certain price and sell them once the price rises. That’s why users might hold assets for numerous years. Often, traders wait for the bull market to sell their assets. Spot markets also consist of buyers, sellers, and order books. Buyers post an order with a certain bid or purchase price, and sellers place an order with a specified ask or sale price for any cryptocurrency.")),a.createElement(I.Z,{eventKey:"p2p",title:"Peer-2-Peer (P2P) Trading"},a.createElement("p",null,"P2P trading allows users to trade directly with one another  without any intermediaries. This feature gives traders the freedom to choose a trader of their choice. A user looking to buy cryptocurrency can check out the seller’s list and choose the one that aligns with his or her needs. This is what makes P2P trading appealing to traders, as it is quite straightforward. When compared to other traditional exchanges, P2P platforms offer elevated privacy and control. Since there is no intermediary involved, it results in reduced or eliminated transaction fees. Our exchange leverages blockchain technology to facilitate transactions. Transactions are initiated by users by generating offers or by accepting existing offers. An automated escrow system holds the digital currencies until both traders involved fulfill their responsibilities. Anyone with an internet connection can participate in P2P trading."))))))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container-both d-flex align-items-center coincrypto"},a.createElement(o.Z,{md:8,sm:12,className:"px-5"},a.createElement("h2",null,"Why Justtry for Cryptocurrency Exchange Development?"),a.createElement("p",null,"Since 2020, Justtry has worked with several clients all across the world, allowing us to gain insight into their needs. Our skilled development team strives to create high-quality products with cutting-edge features. Our cryptocurrency exchanges are incorporated with next-generation technologies that will help you thrive in the global market in the future. Leverage our cryptocurrency exchange development services and launch yourself into the global crypto market. Get in touch with us today to transform your valuable vision into a spectacular reality. We offer:"),a.createElement("ul",{className:"currency"},a.createElement("li",null,"In-House Team of Experts"),a.createElement("li",null,"Bug-Free Solutions"),a.createElement("li",null,"ound-the-Clock Support"),a.createElement("li",null,"Intuitive UI/UX"),a.createElement("li",null,"Quality Assurance"))),a.createElement(o.Z,{md:4},a.createElement("img",{className:" coin-man w-100",src:A,alt:"Crypto Exchange images"})))),a.createElement("section",null,a.createElement(s.Z,{className:"crypto-custom-container-both"},a.createElement("div",{id:"ctus"},a.createElement("p",{className:"text-center"},"Ready to get Started? "),a.createElement("h1",{className:"text-center"},"Get started with the Customer",a.createElement("br",null)," Success Center"),a.createElement("button",{className:"text-center",id:"ctus-button",onClick:k},"Let's Connect"))))),a.createElement(D.Z,{show:h,onHide:k,closeButton:!0,size:"lg"},a.createElement("div",{class:"screen__content"},a.createElement("form",{onSubmit:N((async e=>{const{name:t,email:n,country:a,content:r,mobile:l}=e,c={name:t,email:n,country:a,content:r,mobile:l,date:new Date};p(!0);try{const e=(0,W.hJ)(u,"clients");await(0,W.ET)(e,c),J.P.showSuccssMsg("We will contact/talk to you soon"),_(),p(!1),setTimeout((()=>{k()}),1e3)}catch(s){J.P.showErrMsg("Error adding document"),console.log("e::",s),p(!1)}})),class:"login"},a.createElement("div",{class:"login__field"},a.createElement("i",{class:"login__icon fas fa-user"}),a.createElement("input",Object.assign({type:"text",class:"login__input"},w("name"),{placeholder:"Your Name"})),a.createElement("p",{className:"text-danger mb-0"},null===(t=Z.name)||void 0===t?void 0:t.message)),a.createElement("div",{class:"login__field"},a.createElement("i",{class:"login__icon fas fa-lock"}),a.createElement("input",Object.assign({type:"email",class:"login__input"},w("email"),{placeholder:"Email"})),a.createElement("p",{className:"text-danger mb-0"},null===(n=Z.email)||void 0===n?void 0:n.message)),a.createElement("div",{class:"login__field"},a.createElement("i",{class:"login__icon fas fa-lock"}),a.createElement("input",Object.assign({type:"text",class:"login__input",placeholder:"Skype / Mobile"},w("mobile"))),a.createElement("p",{className:"text-danger mb-0"},null===(r=Z.mobile)||void 0===r?void 0:r.message)),a.createElement("div",{class:"login__field"},a.createElement("i",{class:"login__icon fas fa-lock"}),a.createElement("select",Object.assign({class:"login__input"},w("country")),a.createElement("option",{value:""},"Select"),S.map(((e,t)=>a.createElement("option",{key:t,value:e.isoCode},e.name)))),a.createElement("p",{className:"text-danger mb-0"},null===(l=Z.country)||void 0===l?void 0:l.message)),a.createElement("div",{class:"login__field"},a.createElement("i",{class:"login__icon fas fa-lock"}),a.createElement("textarea",Object.assign({id:"content",placeholder:"Type content here",rows:5,className:"login__input"},w("content"),{maxLength:200})),a.createElement("p",{className:"text-danger mb-0"},null===(i=Z.content)||void 0===i?void 0:i.message)),a.createElement("button",{disabled:d,class:"button login__submit"},a.createElement("span",{class:"button__text"}," ","Submit ",d&&a.createElement(H.Z,null)),a.createElement("i",{class:"button__icon fas fa-chevron-right"})))),a.createElement("div",{class:"screen__background"},a.createElement("span",{class:"screen__background__shape screen__background__shape4"}),a.createElement("span",{class:"screen__background__shape screen__background__shape3"}),a.createElement("span",{class:"screen__background__shape screen__background__shape2"}),a.createElement("span",{class:"screen__background__shape screen__background__shape1"}))))))},V=n(7067),X=n(3977);var Y=e=>{var t,n,c;const s=(0,X.ZF)(null==e||null===(t=e.data)||void 0===t||null===(n=t.site)||void 0===n||null===(c=n.siteMetadata)||void 0===c?void 0:c.firestore),o=(0,W.ad)(s);return a.createElement(r.Z,{db:o},a.createElement(l.Z,{title:"Crypto Development"}),a.createElement(V.Z,{items:[{text:"Home",link:"/"},{text:"Cryptocurrency Exchange Development",link:null}]}),a.createElement(G,{db:o}))}},6025:function(e,t,n){n.d(t,{Z:function(){return Z}});var a=n(4184),r=n.n(a),l=n(7294),c=n(6792),s=n(4680),o=n(9602),i=n(5893);const u=l.forwardRef((({bsPrefix:e,className:t,variant:n,as:a="img",...l},s)=>{const o=(0,c.vE)(e,"card-img");return(0,i.jsx)(a,{ref:s,className:r()(n?`${o}-${n}`:o,t),...l})}));u.displayName="CardImg";var m=u,d=n(9059);const p=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},s)=>{const o=(0,c.vE)(e,"card-header"),u=(0,l.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,i.jsx)(d.Z.Provider,{value:u,children:(0,i.jsx)(n,{ref:s,...a,className:r()(t,o)})})}));p.displayName="CardHeader";var h=p;const y=(0,o.Z)("h5"),g=(0,o.Z)("h6"),f=(0,s.Z)("card-body"),E=(0,s.Z)("card-title",{Component:y}),b=(0,s.Z)("card-subtitle",{Component:g}),v=(0,s.Z)("card-link",{Component:"a"}),x=(0,s.Z)("card-text",{Component:"p"}),C=(0,s.Z)("card-footer"),w=(0,s.Z)("card-img-overlay"),N=l.forwardRef((({bsPrefix:e,className:t,bg:n,text:a,border:l,body:s=!1,children:o,as:u="div",...m},d)=>{const p=(0,c.vE)(e,"card");return(0,i.jsx)(u,{ref:d,...m,className:r()(t,p,n&&`bg-${n}`,a&&`text-${a}`,l&&`border-${l}`),children:s?(0,i.jsx)(f,{children:o}):o})}));N.displayName="Card";var Z=Object.assign(N,{Img:m,Title:E,Subtitle:b,Body:f,Link:v,Text:x,Header:h,Footer:C,ImgOverlay:w})},7069:function(e,t,n){n.d(t,{Z:function(){return _}});var a=n(8146),r=n(7294);var l=function(e,t){const n=(0,r.useRef)(!0);(0,r.useEffect)((()=>{if(!n.current)return e();n.current=!1}),t)},c=n(2029),s=n(6454),o=n(5088);const i=2**31-1;function u(e,t,n){const a=n-Date.now();e.current=a<=i?setTimeout(t,a):setTimeout((()=>u(e,t,n)),i)}function m(){const e=(0,s.Z)(),t=(0,r.useRef)();return(0,o.Z)((()=>clearTimeout(t.current))),(0,r.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(a,r=0){e()&&(n(),r<=i?t.current=setTimeout(a,r):u(t,a,Date.now()+r))},clear:n}}),[])}var d=n(1586),p=n(4184),h=n.n(p),y=n(2081),g=(0,n(4680).Z)("carousel-caption"),f=n(6792),E=n(5893);const b=r.forwardRef((({as:e="div",bsPrefix:t,className:n,...a},r)=>{const l=h()(n,(0,f.vE)(t,"carousel-item"));return(0,E.jsx)(e,{ref:r,...a,className:l})}));b.displayName="CarouselItem";var v=b,x=n(3439),C=n(3825),w=n(4509),N=n(360);const Z=r.forwardRef((({defaultActiveIndex:e=0,...t},n)=>{const{as:s="div",bsPrefix:o,slide:i=!0,fade:u=!1,controls:p=!0,indicators:g=!0,indicatorLabels:b=[],activeIndex:v,onSelect:Z,onSlide:_,onSlid:k,interval:S=5e3,keyboard:T=!0,onKeyDown:j,pause:I="hover",onMouseOver:L,onMouseOut:R,wrap:O=!0,touch:A=!0,onTouchStart:P,onTouchMove:$,onTouchEnd:M,prevIcon:B=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:D="Previous",nextIcon:F=(0,E.jsx)("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:K="Next",variant:H,className:q,children:U,...W}=(0,y.Ch)({defaultActiveIndex:e,...t},{activeIndex:"onSelect"}),J=(0,f.vE)(o,"carousel"),z=(0,f.SC)(),G=(0,r.useRef)(null),[V,X]=(0,r.useState)("next"),[Y,Q]=(0,r.useState)(!1),[ee,te]=(0,r.useState)(!1),[ne,ae]=(0,r.useState)(v||0);(0,r.useEffect)((()=>{ee||v===ne||(G.current?X(G.current):X((v||0)>ne?"next":"prev"),i&&te(!0),ae(v||0))}),[v,ee,ne,i]),(0,r.useEffect)((()=>{G.current&&(G.current=null)}));let re,le=0;(0,x.Ed)(U,((e,t)=>{++le,t===v&&(re=e.props.interval)}));const ce=(0,c.Z)(re),se=(0,r.useCallback)((e=>{if(ee)return;let t=ne-1;if(t<0){if(!O)return;t=le-1}G.current="prev",null==Z||Z(t,e)}),[ee,ne,Z,O,le]),oe=(0,a.Z)((e=>{if(ee)return;let t=ne+1;if(t>=le){if(!O)return;t=0}G.current="next",null==Z||Z(t,e)})),ie=(0,r.useRef)();(0,r.useImperativeHandle)(n,(()=>({element:ie.current,prev:se,next:oe})));const ue=(0,a.Z)((()=>{!document.hidden&&function(e){if(!(e&&e.style&&e.parentNode&&e.parentNode.style))return!1;const t=getComputedStyle(e);return"none"!==t.display&&"hidden"!==t.visibility&&"none"!==getComputedStyle(e.parentNode).display}(ie.current)&&(z?se():oe())})),me="next"===V?"start":"end";l((()=>{i||(null==_||_(ne,me),null==k||k(ne,me))}),[ne]);const de=`${J}-item-${V}`,pe=`${J}-item-${me}`,he=(0,r.useCallback)((e=>{(0,w.Z)(e),null==_||_(ne,me)}),[_,ne,me]),ye=(0,r.useCallback)((()=>{te(!1),null==k||k(ne,me)}),[k,ne,me]),ge=(0,r.useCallback)((e=>{if(T&&!/input|textarea/i.test(e.target.tagName))switch(e.key){case"ArrowLeft":return e.preventDefault(),void(z?oe(e):se(e));case"ArrowRight":return e.preventDefault(),void(z?se(e):oe(e))}null==j||j(e)}),[T,j,se,oe,z]),fe=(0,r.useCallback)((e=>{"hover"===I&&Q(!0),null==L||L(e)}),[I,L]),Ee=(0,r.useCallback)((e=>{Q(!1),null==R||R(e)}),[R]),be=(0,r.useRef)(0),ve=(0,r.useRef)(0),xe=m(),Ce=(0,r.useCallback)((e=>{be.current=e.touches[0].clientX,ve.current=0,"hover"===I&&Q(!0),null==P||P(e)}),[I,P]),we=(0,r.useCallback)((e=>{e.touches&&e.touches.length>1?ve.current=0:ve.current=e.touches[0].clientX-be.current,null==$||$(e)}),[$]),Ne=(0,r.useCallback)((e=>{if(A){const t=ve.current;Math.abs(t)>40&&(t>0?se(e):oe(e))}"hover"===I&&xe.set((()=>{Q(!1)}),S||void 0),null==M||M(e)}),[A,I,se,oe,xe,S,M]),Ze=null!=S&&!Y&&!ee,_e=(0,r.useRef)();(0,r.useEffect)((()=>{var e,t;if(!Ze)return;const n=z?se:oe;return _e.current=window.setInterval(document.visibilityState?ue:n,null!=(e=null!=(t=ce.current)?t:S)?e:void 0),()=>{null!==_e.current&&clearInterval(_e.current)}}),[Ze,se,oe,ce,S,ue,z]);const ke=(0,r.useMemo)((()=>g&&Array.from({length:le},((e,t)=>e=>{null==Z||Z(t,e)}))),[g,le,Z]);return(0,E.jsxs)(s,{ref:ie,...W,onKeyDown:ge,onMouseOver:fe,onMouseOut:Ee,onTouchStart:Ce,onTouchMove:we,onTouchEnd:Ne,className:h()(q,J,i&&"slide",u&&`${J}-fade`,H&&`${J}-${H}`),children:[g&&(0,E.jsx)("div",{className:`${J}-indicators`,children:(0,x.UI)(U,((e,t)=>(0,E.jsx)("button",{type:"button","data-bs-target":"","aria-label":null!=b&&b.length?b[t]:`Slide ${t+1}`,className:t===ne?"active":void 0,onClick:ke?ke[t]:void 0,"aria-current":t===ne},t)))}),(0,E.jsx)("div",{className:`${J}-inner`,children:(0,x.UI)(U,((e,t)=>{const n=t===ne;return i?(0,E.jsx)(N.Z,{in:n,onEnter:n?he:void 0,onEntered:n?ye:void 0,addEndListener:C.Z,children:(t,a)=>r.cloneElement(e,{...a,className:h()(e.props.className,n&&"entered"!==t&&de,("entered"===t||"exiting"===t)&&"active",("entering"===t||"exiting"===t)&&pe)})}):r.cloneElement(e,{className:h()(e.props.className,n&&"active")})}))}),p&&(0,E.jsxs)(E.Fragment,{children:[(O||0!==v)&&(0,E.jsxs)(d.Z,{className:`${J}-control-prev`,onClick:se,children:[B,D&&(0,E.jsx)("span",{className:"visually-hidden",children:D})]}),(O||v!==le-1)&&(0,E.jsxs)(d.Z,{className:`${J}-control-next`,onClick:oe,children:[F,K&&(0,E.jsx)("span",{className:"visually-hidden",children:K})]})]})]})}));Z.displayName="Carousel";var _=Object.assign(Z,{Caption:g,Item:v})},3439:function(e,t,n){n.d(t,{Ed:function(){return l},UI:function(){return r}});var a=n(7294);function r(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}function l(e,t){let n=0;a.Children.forEach(e,(e=>{a.isValidElement(e)&&t(e,n++)}))}},3977:function(e,t,n){n.d(t,{ZF:function(){return a.ZF}});var a=n(1657);(0,a.KN)("firebase","10.3.1","app")}}]);
//# sourceMappingURL=component---src-pages-crypto-development-js-95583177a7b6928e1161.js.map