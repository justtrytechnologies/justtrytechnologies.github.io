"use strict";(self.webpackChunkjusttry_app=self.webpackChunkjusttry_app||[]).push([[3007],{7067:function(e,l,t){var a=t(7294),n=t(1883),o=t(682),s=t(4051);l.Z=e=>{let{items:l}=e;return a.createElement(o.Z,{fluid:!0,className:"gx-0"},a.createElement(s.Z,null,a.createElement("nav",{"aria-label":"breadcrumb",className:"custom-breadcrumb"},a.createElement("ol",{className:"breadcrumb"},l.map(((e,t)=>a.createElement("li",{key:t,className:"breadcrumb-item"+(t===l.length-1?" active":""),"aria-current":t===l.length-1?"page":null},t===l.length-1?e.text:a.createElement(n.Link,{to:e.link},e.text))))))))}},7234:function(e,l,t){t.r(l),t.d(l,{Head:function(){return k},default:function(){return j}});var a=t(9748),n=t(9357),o=t(7294),s=t(1883),i=t(682),r=t(4051),d=t(1555),c=t(6025),m=t(4184),u=t.n(m),g=t(5697),v=t.n(g),b=t(6792),f=t(5893);v().string,v().bool,v().bool,v().bool,v().bool;const _=o.forwardRef((({bsPrefix:e,className:l,fluid:t=!1,rounded:a=!1,roundedCircle:n=!1,thumbnail:o=!1,...s},i)=>(e=(0,b.vE)(e,"img"),(0,f.jsx)("img",{ref:i,...s,className:u()(l,t&&`${e}-fluid`,a&&"rounded",n&&"rounded-circle",o&&`${e}-thumbnail`)}))));_.displayName="Image";var p=_,E=t(5005),h=t(8779);var N=e=>{const{0:l,1:t}=(0,o.useState)(e),{0:a,1:n}=(0,o.useState)(!1);return{numberItemsPagination:l,loadMoreItems:a=>{n(!0);t(l+e<a?l+e:a),n(!1)},isLoading:a}};var x=e=>{const{siteUrl:l,blogImages:t}=e;let a=0;const{0:n,1:m}=(0,o.useState)([]),{0:u,1:g}=(0,o.useState)(0),{numberItemsPagination:v,loadMoreItems:b,isLoading:f}=N(6),_=(0,o.useCallback)((async()=>{var l;const a=[];let n=e.blogs;if(null==n||n.edges.sort(((e,l)=>l.node.keyId-e.node.keyId)),(null==n||null===(l=n.edges)||void 0===l?void 0:l.length)>0)for(let e of null==n?void 0:n.edges)for(let l of t){var o,s,i,r,d,c,u;const t=null==e||null===(o=e.node)||void 0===o||null===(s=o.image)||void 0===s?void 0:s.split("/"),n=null==l||null===(i=l.node)||void 0===i||null===(r=i.gatsbyImageData)||void 0===r||null===(d=r.images)||void 0===d||null===(c=d.fallback)||void 0===c||null===(u=c.src)||void 0===u?void 0:u.split("/");var g,v,b,f;if((null==t?void 0:t[2])===(null==n?void 0:n[4]))e.node.blogImg=null==l||null===(g=l.node)||void 0===g||null===(v=g.gatsbyImageData)||void 0===v||null===(b=v.images)||void 0===b||null===(f=b.fallback)||void 0===f?void 0:f.src,a.push({blog:e}),m(a)}}),[e.blogs,t]);return(0,o.useEffect)((()=>{_()}),[u,_]),n.sort(((e,l)=>l.blog.blog_created_date-e.blog.blog_created_date)),o.createElement(i.Z,{fluid:!0,className:"p-0"},o.createElement("div",{className:"blog_details_bg"},o.createElement("h1",null,"Trending Blogs")),o.createElement("div",{className:"blog_list_bg"},o.createElement(i.Z,{className:"blog_container_position"},o.createElement(r.Z,{className:"blog_row_gap"},null==n?void 0:n.slice(0,v).map(((e,t)=>{var n,i,m,u,g,v,b,f,_,E,h,N,x,w;const{blog:y}=e;return t%2==0&&(a+=1),o.createElement(d.Z,{lg:6,xs:12,className:"p-lg-0"},a%2!=0?o.createElement(c.Z,{key:e.id,className:"jt_blog_card"},o.createElement(r.Z,{className:"mx-lg-0"},o.createElement(d.Z,{sm:6,xs:12,className:"p-sm-0 d-flex justify-content-center"},o.createElement(s.Link,{to:""+(null==y||null===(n=y.node)||void 0===n?void 0:n.slug),className:"text-decoration-none  d-block "},o.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},o.createElement(p,{src:l+(null==y||null===(i=y.node)||void 0===i?void 0:i.blogImg),alt:null==y||null===(m=y.node)||void 0===m?void 0:m.title,className:"jt_blog_img"}),o.createElement("div",{className:"blog_arrow_first"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},o.createElement("path",{d:"M0 9L15 0.339745L15 17.6603L0 9Z",fill:"white"})))))),o.createElement(d.Z,{sm:6,xs:12,className:"p-sm-0 d-flex justify-content-center "},o.createElement(s.Link,{to:""+(null==y||null===(u=y.node)||void 0===u?void 0:u.slug),className:"jt_blog_card_body"},o.createElement("p",{className:"jt_blog_date"},null==y||null===(g=y.node)||void 0===g?void 0:g.blog_created_date),o.createElement("p",{className:"jt_blog_title"},null==y||null===(v=y.node)||void 0===v?void 0:v.title),o.createElement("p",{className:"jt_blog_description"},(null==y||null===(b=y.node)||void 0===b?void 0:b.short_description.slice(0,65))+"..."))))):o.createElement(c.Z,{key:e.id,className:"jt_blog_card"},o.createElement(r.Z,{className:"mx-lg-0"},o.createElement(d.Z,{sm:6,xs:12,className:"p-sm-0 d-flex justify-content-center order_two "},o.createElement(s.Link,{to:""+(null==y||null===(f=y.node)||void 0===f?void 0:f.slug),className:"jt_blog_card_body"},o.createElement("p",{className:"jt_blog_date"},null==y||null===(_=y.node)||void 0===_?void 0:_.blog_created_date),o.createElement("p",{className:"jt_blog_title"},null==y||null===(E=y.node)||void 0===E?void 0:E.title),o.createElement("p",{className:"jt_blog_description"},(null==y||null===(h=y.node)||void 0===h?void 0:h.short_description.slice(0,65))+"..."))),o.createElement(d.Z,{sm:6,xs:12,className:"p-0 d-flex justify-content-center order_one"},o.createElement(s.Link,{to:""+(null==y||null===(N=y.node)||void 0===N?void 0:N.slug),className:"text-decoration-none  d-block "},o.createElement("div",{id:"arrow_right",className:"jt_blog_img_wrapper"},o.createElement(p,{src:l+(null==y||null===(x=y.node)||void 0===x?void 0:x.blogImg),alt:null==y||null===(w=y.node)||void 0===w?void 0:w.title,className:"jt_blog_img"}),o.createElement("div",{className:"blog_arrow_second"},o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"15",height:"18",viewBox:"0 0 15 18",fill:"none"},o.createElement("path",{d:"M15 9.22363L0 17.8839L0 0.563378L15 9.22363Z",fill:"white"})))))))))})),v!==(null==n?void 0:n.length)&&o.createElement(d.Z,{md:12},o.createElement(E.Z,{disabled:f||v>=(null==n?void 0:n.length),className:"blog_load_btn",onClick:()=>b(v+2)},"Load more ",f&&o.createElement(h.Z,null)))))))},w=t(3977),y=t(6462),Z=t(7067);const k=e=>{var l,t,a,s,i,r;const{data:d}=e,c=null==d||null===(l=d.allImageSharp)||void 0===l||null===(t=l.edges)||void 0===t?void 0:t.find((e=>{var l,t,a,n,o;return null==e||null===(l=e.node)||void 0===l||null===(t=l.gatsbyImageData)||void 0===t||null===(a=t.images)||void 0===a||null===(n=a.fallback)||void 0===n||null===(o=n.src)||void 0===o?void 0:o.includes("new_logo.png")}));return o.createElement(n.Z,{title:"Justtry Technologies Blog: Updates, news, Articles",metaTitle:"Justtry Technologies Blog: Updates, news, Articles",description:"Dive into the world of innovation with Justtry Technologies' blog. Uncover the latest tech trends, gain insights from industry experts, and empower yourself with cutting-edge knowledge. Explore a fusion of expertise and creativity as we unravel the future of technology together. Justtry Technologies - where curiosity meets innovation.",image:null==c||null===(a=c.node)||void 0===a||null===(s=a.gatsbyImageData)||void 0===s||null===(i=s.images)||void 0===i||null===(r=i.fallback)||void 0===r?void 0:r.src})};var j=e=>{var l,t,n,s,i,r,d,c,m;const u=(0,w.ZF)(null==e||null===(l=e.data)||void 0===l||null===(t=l.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n?void 0:n.firestore),g=(0,y.ad)(u);return o.createElement(a.Z,{db:g},o.createElement(Z.Z,{items:[{text:"Home",link:"/"},{text:"Blogs",link:""}]}),o.createElement(x,{blogs:null==e||null===(s=e.data)||void 0===s?void 0:s.allDataJson,blogImages:null==e||null===(i=e.data)||void 0===i||null===(r=i.allImageSharp)||void 0===r?void 0:r.edges,siteUrl:null==e||null===(d=e.data)||void 0===d||null===(c=d.site)||void 0===c||null===(m=c.siteMetadata)||void 0===m?void 0:m.siteUrl}))}},6025:function(e,l,t){t.d(l,{Z:function(){return Z}});var a=t(4184),n=t.n(a),o=t(7294),s=t(6792),i=t(4680),r=t(9602),d=t(5893);const c=o.forwardRef((({bsPrefix:e,className:l,variant:t,as:a="img",...o},i)=>{const r=(0,s.vE)(e,"card-img");return(0,d.jsx)(a,{ref:i,className:n()(t?`${r}-${t}`:r,l),...o})}));c.displayName="CardImg";var m=c,u=t(9059);const g=o.forwardRef((({bsPrefix:e,className:l,as:t="div",...a},i)=>{const r=(0,s.vE)(e,"card-header"),c=(0,o.useMemo)((()=>({cardHeaderBsPrefix:r})),[r]);return(0,d.jsx)(u.Z.Provider,{value:c,children:(0,d.jsx)(t,{ref:i,...a,className:n()(l,r)})})}));g.displayName="CardHeader";var v=g;const b=(0,r.Z)("h5"),f=(0,r.Z)("h6"),_=(0,i.Z)("card-body"),p=(0,i.Z)("card-title",{Component:b}),E=(0,i.Z)("card-subtitle",{Component:f}),h=(0,i.Z)("card-link",{Component:"a"}),N=(0,i.Z)("card-text",{Component:"p"}),x=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),y=o.forwardRef((({bsPrefix:e,className:l,bg:t,text:a,border:o,body:i=!1,children:r,as:c="div",...m},u)=>{const g=(0,s.vE)(e,"card");return(0,d.jsx)(c,{ref:u,...m,className:n()(l,g,t&&`bg-${t}`,a&&`text-${a}`,o&&`border-${o}`),children:i?(0,d.jsx)(_,{children:r}):r})}));y.displayName="Card";var Z=Object.assign(y,{Img:m,Title:p,Subtitle:E,Body:_,Link:h,Text:N,Header:v,Footer:x,ImgOverlay:w})}}]);
//# sourceMappingURL=component---src-pages-blog-js-d2e2b6cae0e22b3e8951.js.map