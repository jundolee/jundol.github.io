"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[678],{8771:function(e,t,l){var n=l(7294),a=l(1883);t.Z=()=>{var e;const t=null===(e=(0,a.useStaticQuery)("3257411868").site.siteMetadata)||void 0===e?void 0:e.author;return n.createElement("div",{className:"bio"},(null==t?void 0:t.name)&&n.createElement("p",null,(null==t?void 0:t.summary)||null," "))}},8678:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{let{location:t,title:l,children:r}=e;const o="/"===t.pathname;let i=n.createElement("h1",{className:"main-heading"},n.createElement(a.Link,{to:"/"},l));return n.createElement("div",{className:"global-wrapper","data-is-root-path":o},n.createElement("header",{className:"global-header"},i),n.createElement("main",null,r),n.createElement("footer",null,n.createElement("a",{href:"https://jundolee.github.io"},"jun")))}},9357:function(e,t,l){var n=l(7294),a=l(1883);t.Z=e=>{var t,l,r;let{description:o,title:i,children:c}=e;const{site:m}=(0,a.useStaticQuery)("2841359383"),s=o||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return n.createElement(n.Fragment,null,n.createElement("title",null,u?i+" | "+u:i),n.createElement("meta",{name:"description",content:s}),n.createElement("meta",{property:"og:title",content:i}),n.createElement("meta",{property:"og:description",content:s}),n.createElement("meta",{property:"og:type",content:"website"}),n.createElement("meta",{name:"twitter:card",content:"summary"}),n.createElement("meta",{name:"twitter:creator",content:(null===(l=m.siteMetadata)||void 0===l||null===(r=l.social)||void 0===r?void 0:r.twitter)||""}),n.createElement("meta",{name:"twitter:title",content:i}),n.createElement("meta",{name:"twitter:description",content:s}),c)}},6558:function(e,t,l){l.r(t),l.d(t,{Head:function(){return c}});var n=l(7294),a=l(1883),r=l(8771),o=l(8678),i=l(9357);t.default=e=>{var t;let{data:l,location:i,pageContext:c}=e;const m=(null===(t=l.site.siteMetadata)||void 0===t?void 0:t.title)||"Title",s=l.allMarkdownRemark.nodes,u=(l.allMarkdownRemark.distinct||[]).map((e=>e)),[d,p]=n.useState(c.category);return 0===s.length?n.createElement(o.Z,{location:i,title:m},n.createElement(r.Z,null),n.createElement("p",null,'No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).')):n.createElement(o.Z,{location:i,title:m},n.createElement(r.Z,null),n.createElement("div",{className:"cat_nav"},n.createElement("p",{style:{fontWeight:d?"normal":"bold"},onClick:()=>{p(null)}},n.createElement(a.Link,{to:"/"},"All")),u.map((e=>n.createElement("p",{style:{fontWeight:d===e?"bold":"normal"},onClick:()=>p(e)},n.createElement(a.Link,{to:"/"+e+"/"},e))))),n.createElement("ol",{style:{listStyle:"none"}},s.map((e=>{const t=e.frontmatter.title||e.fields.slug;return n.createElement("li",{key:e.fields.slug},n.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},n.createElement(a.Link,{to:e.fields.slug,itemProp:"url"},n.createElement("header",null,n.createElement("h2",null,n.createElement("span",{itemProp:"headline"},t)),n.createElement("small",null,e.frontmatter.date)),n.createElement("section",null,n.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt},itemProp:"excerpt"})))))}))))};const c=()=>n.createElement(i.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-pages-index-js-f436ccb37f8c8c0a0167.js.map