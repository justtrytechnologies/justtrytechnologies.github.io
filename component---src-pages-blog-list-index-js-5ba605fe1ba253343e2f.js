"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[1044],{7067:function(e,t,a){var l=a(7294),s=a(1883),n=a(682),o=a(4051);t.Z=e=>{let{items:t}=e;return l.createElement(n.Z,{fluid:!0,className:"gx-0"},l.createElement(o.Z,null,l.createElement("nav",{"aria-label":"breadcrumb",className:"custom-breadcrumb"},l.createElement("ol",{className:"breadcrumb"},t.map(((e,a)=>l.createElement("li",{key:a,"aria-current":a===t.length-1?"page":null,className:"breadcrumb-item"+(a===t.length-1?" active":"")},a===t.length-1?e.text:l.createElement(s.Link,{to:e.link},e.text))))))))}},6379:function(e,t,a){var l=a(7294);t.Z=e=>{const{0:t,1:a}=(0,l.useState)(e),{0:s,1:n}=(0,l.useState)(!1);return{numberItemsPagination:t,loadMoreItems:l=>{n(!0);a(t+e<l?t+e:l),n(!1)},isLoading:s}}},2439:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return x}});var l=a(9213),s=a(9357),n=a(7294),o=a(1883),r=a(682),i=a(4051),c=a(1555),m=a(6025),d=a(5005),g=a(4266),u=a(381),_=a.n(u),b=a(8032),v=a(8779),p=a(6379);var E=e=>{const{db:t}=e;let l=0;const{numberItemsPagination:s,loadMoreItems:u,isLoading:E}=(0,p.Z)(6),{0:f,1:w}=(0,n.useState)([]),{0:h,1:N}=(0,n.useState)(!1),{0:x,1:Z}=(0,n.useState)([]);return(0,n.useEffect)((()=>{h&&t&&(async e=>{try{const t=await g.P.getDocData(e,"blog");(null==t?void 0:t.length)>0?Z(t):Z([])}catch(t){Z([]),console.log("err:;",t)}})(t)}),[h,t]),(0,n.useEffect)((()=>{N(!0)}),[]),(0,n.useEffect)((()=>{if(h&&(null==x?void 0:x.length)>0){const e=async(e,t)=>{let a=[],l=await g.P.getDocData(e,"viewCount");for(let s of t){for(let e of l)(null==s?void 0:s.slug)===(null==e?void 0:e.key)&&(s.viewCount=null==e?void 0:e.count,a.push(s));w(a)}};e(t,x)}}),[h,t,x]),f.sort(((e,t)=>t.viewCount-e.viewCount)),n.createElement(r.Z,{fluid:!0,className:"p-0"},(null==f?void 0:f.length)>0&&n.createElement(n.Fragment,null,n.createElement("div",{className:"blog_details_bg"},n.createElement("h1",null,"Trending Blogs")),n.createElement("div",{className:"blog_list_bg"},n.createElement(r.Z,{className:"blog_container_position"},n.createElement(i.Z,{className:"blog_row_gap"},null==f?void 0:f.slice(0,6).map(((e,t)=>(t%2==0&&(l+=1),n.createElement(c.Z,{lg:6,xs:12,className:"p-lg-0"},l%2!=0?n.createElement(m.Z,{key:e.id,className:"jt_blog_card"},n.createElement(i.Z,{className:"mx-lg-0"},n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"text-decoration-none  d-block "},n.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},n.createElement(b.S,{src:"../../styles/assets/images/no-image.jpg",alt:null==e?void 0:e.image_alt,className:"jt_blog_img",__imageData:a(2313)}),n.createElement("div",{className:"blog_arrow_first"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},n.createElement("path",{d:"M0 9L15 0.339745L15 17.6603L0 9Z",fill:"white"})))))),n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0 d-flex justify-content-center "},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"jt_blog_card_body"},n.createElement("p",{className:"jt_blog_date"},_()(null==e?void 0:e.blog_created_date).format("DD MMMM YYYY")),n.createElement("p",{className:"jt_blog_title"},null==e?void 0:e.title),n.createElement("p",{className:"jt_blog_description"},(null==e?void 0:e.short_description.slice(0,65))+"..."))))):n.createElement(m.Z,{key:e.id,className:"jt_blog_card"},n.createElement(i.Z,{className:"mx-lg-0"},n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0 order_two"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"jt_blog_card_body"},n.createElement("p",{className:"jt_blog_date"},_()(null==e?void 0:e.blog_created_date).format("DD MMMM YYYY")),n.createElement("p",{className:"jt_blog_title"},null==e?void 0:e.title),n.createElement("p",{className:"jt_blog_description"},(null==e?void 0:e.short_description.slice(0,65))+"..."))),n.createElement(c.Z,{sm:6,xs:12,className:"p-0 order_one"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"text-decoration-none  d-block "},n.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},n.createElement(b.S,{src:"../../styles/assets/images/no-image.jpg",alt:null==e?void 0:e.image_alt,className:"jt_blog_img",__imageData:a(2313)}),n.createElement("div",{className:"blog_arrow_second"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},n.createElement("path",{d:"M15 9.22363L0 17.8839L0 0.563378L15 9.22363Z",fill:"white"})))))))))))))))),(null==x?void 0:x.length)>0&&n.createElement(n.Fragment,null,n.createElement("div",{className:"blog_details_bg",style:{background:"transparent"}},n.createElement("h2",{style:{color:"#7534fc"}},"Latest Blogs")),n.createElement("div",{className:"blog_list_bg",style:{background:"transparent"}},n.createElement(r.Z,{className:"blog_container_position"},n.createElement(i.Z,{className:"blog_row_gap"},null==x?void 0:x.slice(0,s).map(((e,t)=>{t%2==0&&(l+=1);null==e||e.image_path;return n.createElement(c.Z,{lg:6,xs:12,className:"p-lg-0"},l%2!=0?n.createElement(m.Z,{key:e.id,className:"jt_blog_card"},n.createElement(i.Z,{className:"mx-lg-0"},n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"text-decoration-none d-block "},n.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},n.createElement(b.S,{src:"../../styles/assets/images/no-image.jpg",alt:null==e?void 0:e.image_alt,className:"jt_blog_img",__imageData:a(2313)}),n.createElement("div",{className:"blog_arrow_first"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},n.createElement("path",{d:"M0 9L15 0.339745L15 17.6603L0 9Z",fill:"white"})))))),n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"jt_blog_card_body"},n.createElement("p",{className:"jt_blog_date"},_()(null==e?void 0:e.blog_created_date).format("DD MMMM YYYY")),n.createElement("p",{className:"jt_blog_title"},null==e?void 0:e.title),n.createElement("p",{className:"jt_blog_description"},(null==e?void 0:e.short_description.slice(0,65))+"..."))))):n.createElement(m.Z,{key:e.id,className:"jt_blog_card"},n.createElement(i.Z,{className:"mx-lg-0"},n.createElement(c.Z,{sm:6,xs:12,className:"p-sm-0 order_two"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"jt_blog_card_body"},n.createElement("p",{className:"jt_blog_date"},_()(null==e?void 0:e.blog_created_date).format("DD MMMM YYYY")),n.createElement("p",{className:"jt_blog_title"},null==e?void 0:e.title),n.createElement("p",{className:"jt_blog_description"},(null==e?void 0:e.short_description.slice(0,65))+"..."))),n.createElement(c.Z,{sm:6,xs:12,className:"p-0 order_one"},n.createElement(o.Link,{to:""+(null==e?void 0:e.slug),className:"text-decoration-none  d-block "},n.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},n.createElement(b.S,{src:"../../styles/assets/images/no-image.jpg",alt:null==e?void 0:e.image_alt,className:"jt_blog_img",__imageData:a(2313)}),n.createElement("div",{className:"blog_arrow_second"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},n.createElement("path",{d:"M15 9.22363L0 17.8839L0 0.563378L15 9.22363Z",fill:"white"})))))))))})),s!==(null==x?void 0:x.length)&&n.createElement(c.Z,{md:12},n.createElement(d.Z,{disabled:E||s>=(null==x?void 0:x.length),className:"blog_load_btn",onClick:()=>u(s+2)},"Load more ",E&&n.createElement(v.Z,null))))))))},f=a(3977),w=a(6462),h=a(7067);const N=e=>{var t,a,l,o,r,i;const{data:c}=e,m=null==c||null===(t=c.allImageSharp)||void 0===t||null===(a=t.edges)||void 0===a?void 0:a.find((e=>{var t,a,l,s,n;return null==e||null===(t=e.node)||void 0===t||null===(a=t.gatsbyImageData)||void 0===a||null===(l=a.images)||void 0===l||null===(s=l.fallback)||void 0===s||null===(n=s.src)||void 0===n?void 0:n.includes("new_logo.png")}));return n.createElement(s.Z,{title:"Justtry Technologies Blog: Updates, news, Articles",metaTitle:"Justtry Technologies Blog: Updates, news, Articles",description:"Dive into the world of innovation with Justtry Technologies' blog. Uncover the latest tech trends, gain insights from industry experts, and empower yourself with cutting-edge knowledge. Explore a fusion of expertise and creativity as we unravel the future of technology together. Justtry Technologies - where curiosity meets innovation.",image:null==m||null===(l=m.node)||void 0===l||null===(o=l.gatsbyImageData)||void 0===o||null===(r=o.images)||void 0===r||null===(i=r.fallback)||void 0===i?void 0:i.src})};var x=e=>{var t,a,s,o,r,i,c,m,d;const g=(0,f.ZF)(null==e||null===(t=e.data)||void 0===t||null===(a=t.site)||void 0===a||null===(s=a.siteMetadata)||void 0===s?void 0:s.firestore),u=(0,w.ad)(g);return n.createElement(l.Z,{db:u},n.createElement(h.Z,{items:[{text:"Home",link:"/"},{text:"Blogs",link:""}]}),n.createElement(E,{blogs:null==e||null===(o=e.data)||void 0===o?void 0:o.allDataJson,blogImages:null==e||null===(r=e.data)||void 0===r||null===(i=r.allImageSharp)||void 0===i?void 0:i.edges,db:u,siteUrl:null==e||null===(c=e.data)||void 0===c||null===(m=c.site)||void 0===m||null===(d=m.siteMetadata)||void 0===d?void 0:d.siteUrl}))}},6025:function(e,t,a){a.d(t,{Z:function(){return j}});var l=a(4184),s=a.n(l),n=a(7294),o=a(6792),r=a(4680),i=a(9602),c=a(5893);const m=n.forwardRef((({bsPrefix:e,className:t,variant:a,as:l="img",...n},r)=>{const i=(0,o.vE)(e,"card-img");return(0,c.jsx)(l,{ref:r,className:s()(a?`${i}-${a}`:i,t),...n})}));m.displayName="CardImg";var d=m,g=a(9059);const u=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},r)=>{const i=(0,o.vE)(e,"card-header"),m=(0,n.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,c.jsx)(g.Z.Provider,{value:m,children:(0,c.jsx)(a,{ref:r,...l,className:s()(t,i)})})}));u.displayName="CardHeader";var _=u;const b=(0,i.Z)("h5"),v=(0,i.Z)("h6"),p=(0,r.Z)("card-body"),E=(0,r.Z)("card-title",{Component:b}),f=(0,r.Z)("card-subtitle",{Component:v}),w=(0,r.Z)("card-link",{Component:"a"}),h=(0,r.Z)("card-text",{Component:"p"}),N=(0,r.Z)("card-footer"),x=(0,r.Z)("card-img-overlay"),Z=n.forwardRef((({bsPrefix:e,className:t,bg:a,text:l,border:n,body:r=!1,children:i,as:m="div",...d},g)=>{const u=(0,o.vE)(e,"card");return(0,c.jsx)(m,{ref:g,...d,className:s()(t,u,a&&`bg-${a}`,l&&`text-${l}`,n&&`border-${n}`),children:r?(0,c.jsx)(p,{children:i}):i})}));Z.displayName="Card";var j=Object.assign(Z,{Img:d,Title:E,Subtitle:f,Body:p,Link:w,Text:h,Header:_,Footer:N,ImgOverlay:x})},2313:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#e8e8e8","images":{"fallback":{"src":"/static/ac6989d6da03bdfcbc9d2b900fa1e35e/09c07/no-image.jpg","srcSet":"/static/ac6989d6da03bdfcbc9d2b900fa1e35e/94792/no-image.jpg 56w,\\n/static/ac6989d6da03bdfcbc9d2b900fa1e35e/1f68a/no-image.jpg 112w,\\n/static/ac6989d6da03bdfcbc9d2b900fa1e35e/09c07/no-image.jpg 223w","sizes":"(min-width: 223px) 223px, 100vw"},"sources":[{"srcSet":"/static/ac6989d6da03bdfcbc9d2b900fa1e35e/5844b/no-image.webp 56w,\\n/static/ac6989d6da03bdfcbc9d2b900fa1e35e/e1710/no-image.webp 112w,\\n/static/ac6989d6da03bdfcbc9d2b900fa1e35e/f8d8c/no-image.webp 223w","type":"image/webp","sizes":"(min-width: 223px) 223px, 100vw"}]},"width":223,"height":200}')}}]);
//# sourceMappingURL=component---src-pages-blog-list-index-js-5ba605fe1ba253343e2f.js.map