(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7oih":function(e,t,n){"use strict";var a=n("Wbzz"),o=n("q1tI"),r=n.n(o),i=n("krhX"),l=n("7Wum"),c=n("72Yz"),d=n("p3AD"),p=n("vOnD"),u=n("cA5w");var s=p.a.h1.withConfig({displayName:"Layout__Header",componentId:"ycha8a-0"})(["margin-top:0;font-weight:300;font-size:1.7rem;",""],(function(e){if(e.darkMode)return"\n  transition: all 0.3s ease;\n  \n  a, a:visited {\n    color: #fff !important;\n  }"})),m=Object(p.a)(a.Link).withConfig({displayName:"Layout__StyledLink",componentId:"ycha8a-1"})(["box-shadow:none;text-decoration:none;color:inherit;"]),f=p.a.div.withConfig({displayName:"Layout__FlexContainer",componentId:"ycha8a-2"})(["display:flex;flex-direction:column;min-height:100vh;transition:all 0.3s ease;",""],(function(e){if(e.darkMode)return"background-color: #2a2b2d;\n  color: #fff;\n  transition: all 0.3s ease;\n  \n  a, a:visited {\n    color: rgb(73, 223, 255);\n  }\n  \n  hr {\n    background: #505050;\n  }\n  \n  blockquote: {\n    color: inherit;\n    border-color: inherit;\n  }\n  "})),h=p.a.div.withConfig({displayName:"Layout__MainContainer",componentId:"ycha8a-3"})(["flex:1;"]),y=p.a.div.withConfig({displayName:"Layout__LeftContainer",componentId:"ycha8a-4"})(["@media (min-width:735px){margin:0 10%;}margin:0 1%;max-width:",";padding:"," ",";"],Object(d.a)(24),Object(d.a)(1.5),Object(d.a)(.75)),g=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=(e.location,e.title),n=e.children;return r.a.createElement(c.a.Consumer,null,(function(e){return r.a.createElement(f,{darkMode:e.darkMode},r.a.createElement(h,null,r.a.createElement(y,null,r.a.createElement(s,{darkMode:e.darkMode},r.a.createElement(m,{to:"/"},t)),r.a.createElement(l.a,null),r.a.createElement(u.a,{theme:e}),n)),r.a.createElement(i.a,{darkMode:e.darkMode}))}))},a}(r.a.Component);t.a=g},Xqdu:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return m}));var a=n("q1tI"),o=n.n(a),r=n("Wbzz"),i=n("7oih"),l=n("EYWl"),c=n("p3AD"),d=n("vOnD");var p=d.a.h3.withConfig({displayName:"journal__Title",componentId:"sc-77edy1-0"})(["font-family:'IBM Plex Serif';"]),u=d.a.p.withConfig({displayName:"journal__P",componentId:"sc-77edy1-1"})(["font-family:'IBM Plex Serif';"]),s=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,n=e.allMarkdownRemark.edges;return o.a.createElement(i.a,{location:this.props.location,title:t},o.a.createElement(l.a,{title:"Journal",keywords:["blog","journal","javascript","react","gatsby","purdue","mac","unix","web","engineer"]}),o.a.createElement("h2",null,"Journal"),n.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement(p,{style:{marginBottom:Object(c.a)(1/8),fontWeight:500}},o.a.createElement(r.Link,{style:{boxShadow:"none"},to:t.fields.slug},n)),o.a.createElement("small",null,t.frontmatter.date),o.a.createElement(u,{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))},a}(o.a.Component);t.default=s;var m="57123526"}}]);
//# sourceMappingURL=component---src-pages-journal-jsx-ce2b7d921a85a1901901.js.map