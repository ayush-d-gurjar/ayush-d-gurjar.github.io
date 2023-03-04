(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[7],{151:function(e,a,t){"use strict";var c=t(7),r=t(2),n=t(3),s=t(4),o=t.n(s),i=t(0),d=t(8),b=t(1),l=["as","bsPrefix","className"],j=["className"];var f=i.forwardRef((function(e,a){var t=function(e){var a=e.as,t=e.bsPrefix,c=e.className,s=Object(n.a)(e,l);t=Object(d.c)(t,"col");var i=Object(d.a)(),b=Object(d.b)(),j=[],f=[];return i.forEach((function(e){var a,c,r,n=s[e];delete s[e],"object"===typeof n&&null!=n?(a=n.span,c=n.offset,r=n.order):a=n;var o=e!==b?"-".concat(e):"";a&&j.push(!0===a?"".concat(t).concat(o):"".concat(t).concat(o,"-").concat(a)),null!=r&&f.push("order".concat(o,"-").concat(r)),null!=c&&f.push("offset".concat(o,"-").concat(c))})),[Object(r.a)(Object(r.a)({},s),{},{className:o.a.apply(void 0,[c].concat(j,f))}),{as:a,bsPrefix:t,spans:j}]}(e),s=Object(c.a)(t,2),i=s[0],f=i.className,O=Object(n.a)(i,j),u=s[1],p=u.as,x=void 0===p?"div":p,m=u.bsPrefix,v=u.spans;return Object(b.jsx)(x,Object(r.a)(Object(r.a)({},O),{},{ref:a,className:o()(f,!v.length&&m)}))}));f.displayName="Col",a.a=f},92:function(e,a,t){"use strict";t.r(a);var c=t(2),r=t(0),n=t(151),s=t(3),o=t(4),i=t.n(o),d=t(8),b=t(25),l=t(67),j=t(1),f=["bsPrefix","className","variant","as"],O=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.variant,o=e.as,b=void 0===o?"img":o,l=Object(s.a)(e,f),O=Object(d.c)(t,"card-img");return Object(j.jsx)(b,Object(c.a)({ref:a,className:i()(n?"".concat(O,"-").concat(n):O,r)},l))}));O.displayName="CardImg";var u=O,p=t(68),x=["bsPrefix","className","as"],m=r.forwardRef((function(e,a){var t=e.bsPrefix,n=e.className,o=e.as,b=void 0===o?"div":o,l=Object(s.a)(e,x),f=Object(d.c)(t,"card-header"),O=Object(r.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return Object(j.jsx)(p.a.Provider,{value:O,children:Object(j.jsx)(b,Object(c.a)(Object(c.a)({ref:a},l),{},{className:i()(n,f)}))})}));m.displayName="CardHeader";var v=m,g=["bsPrefix","className","bg","text","border","body","children","as"],y=Object(l.a)("h5"),h=Object(l.a)("h6"),N=Object(b.a)("card-body"),P=Object(b.a)("card-title",{Component:y}),S=Object(b.a)("card-subtitle",{Component:h}),C=Object(b.a)("card-link",{Component:"a"}),k=Object(b.a)("card-text",{Component:"p"}),w=Object(b.a)("card-footer"),B=Object(b.a)("card-img-overlay"),T=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,n=e.bg,o=e.text,b=e.border,l=e.body,f=e.children,O=e.as,u=void 0===O?"div":O,p=Object(s.a)(e,g),x=Object(d.c)(t,"card");return Object(j.jsx)(u,Object(c.a)(Object(c.a)({ref:a},p),{},{className:i()(r,x,n&&"bg-".concat(n),o&&"text-".concat(o),b&&"border-".concat(b)),children:l?Object(j.jsx)(N,{children:f}):f}))}));T.displayName="Card",T.defaultProps={body:!1};var R=Object.assign(T,{Img:u,Title:P,Subtitle:S,Body:N,Link:C,Text:k,Header:v,Footer:w,ImgOverlay:B}),I=t(7),V=t(41),z=["as","bsPrefix","variant","size","active","className"],F=r.forwardRef((function(e,a){var t=e.as,r=e.bsPrefix,n=e.variant,o=e.size,b=e.active,l=e.className,f=Object(s.a)(e,z),O=Object(d.c)(r,"btn"),u=Object(V.b)(Object(c.a)({tagName:t},f)),p=Object(I.a)(u,2),x=p[0],m=p[1].tagName;return Object(j.jsx)(m,Object(c.a)(Object(c.a)(Object(c.a)({},x),f),{},{ref:a,className:i()(l,O,b&&"active",n&&"".concat(O,"-").concat(n),o&&"".concat(O,"-").concat(o),f.href&&f.disabled&&"disabled")}))}));F.displayName="Button",F.defaultProps={variant:"primary",active:!1,disabled:!1};var H=F,J=["bsPrefix","bg","pill","text","className","as"],L=r.forwardRef((function(e,a){var t=e.bsPrefix,r=e.bg,n=e.pill,o=e.text,b=e.className,l=e.as,f=void 0===l?"span":l,O=Object(s.a)(e,J),u=Object(d.c)(t,"badge");return Object(j.jsx)(f,Object(c.a)(Object(c.a)({ref:a},O),{},{className:i()(b,u,n&&"rounded-pill",o&&"text-".concat(o),r&&"bg-".concat(r))}))}));L.displayName="Badge",L.defaultProps={bg:"primary",pill:!1};var A=L,D=t(20),E=t(181),M={badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5}};a.default=function(e){var a,t=Object(r.useContext)(D.a),s=e.project;return Object(j.jsx)(n.a,{children:Object(j.jsxs)(R,{style:Object(c.a)(Object(c.a)({},M.cardStyle),{},{backgroundColor:t.cardBackground,borderColor:t.cardBorderColor}),text:t.bsSecondaryVariant,children:[Object(j.jsx)(R.Img,{variant:"top",src:null===s||void 0===s?void 0:s.image,width:"334",height:"209"}),Object(j.jsxs)(R.Body,{children:[Object(j.jsx)(R.Title,{style:M.cardTitleStyle,children:s.title}),Object(j.jsx)(R.Text,{style:M.cardTextStyle,children:s.bodyText.map((function(e){return Object(j.jsx)(E.a,{children:e},e)}))})]}),Object(j.jsx)(R.Body,{children:null===s||void 0===s||null===(a=s.links)||void 0===a?void 0:a.map((function(e){return Object(j.jsx)(H,{style:M.buttonStyle,variant:"outline-"+t.bsSecondaryVariant,onClick:function(){return window.open(e.href,"_blank")},children:e.text},e.href)}))}),s.tags&&Object(j.jsx)(R.Footer,{style:{backgroundColor:t.cardFooterBackground},children:s.tags.map((function(e){return Object(j.jsx)(A,{pill:!0,bg:t.bsSecondaryVariant,text:t.bsPrimaryVariant,style:M.badgeStyle,children:e},e)}))})]})})}}}]);
//# sourceMappingURL=7.9b0cf4d8.chunk.js.map