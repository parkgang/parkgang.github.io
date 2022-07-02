"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[569],{53528:function(e,t,n){n.d(t,{Z:function(){return k}});var a=n(5309),r=n(76687),l=n(86355),i=n(15592),o=n(4532),c=n(2221),s=n(56153),m="sidebar_gWp3",u="sidebarItemTitle_v2wW",d="sidebarItemList_eBty",v="sidebarItem_UUXV",f="sidebarItemLink_C8B2",g="sidebarItemLinkActive_yXCq";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:v},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:g},e.title))})))))}var h=n(33585);function b(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(c.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return r.createElement(h.Zo,{component:b,props:e})}function L(e){var t=e.sidebar,n=(0,o.i)();return null!=t&&t.items.length?"mobile"===n?r.createElement(E,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var N=["sidebar","toc","children"];function k(e){var t=e.sidebar,n=e.toc,o=e.children,c=(0,a.Z)(e,N),s=t&&t.items.length>0;return r.createElement(i.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(L,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),n&&r.createElement("div",{className:"col col--2"},n))))}},28218:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(76687),r=n(86355),l=n(82524),i=n(98551),o=n(53528),c=n(19316),s=n(36071),m=n(45260);function u(e){var t,n=e.content,r=n.assets,i=n.metadata,o=i.title,c=i.description,s=i.date,m=i.tags,u=i.authors,d=i.frontMatter,v=d.keywords,f=null!=(t=r.image)?t:d.image;return a.createElement(l.d,{title:o,description:c,keywords:v,image:f},a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"article:published_time",content:s}),u.some((function(e){return e.url}))&&a.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&a.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function d(e){var t=e.content,n=e.sidebar,r=t.assets,l=t.metadata,i=l.nextItem,u=l.prevItem,d=l.frontMatter,v=d.hide_table_of_contents,f=d.toc_min_heading_level,g=d.toc_max_heading_level;return a.createElement(o.Z,{sidebar:n,toc:!v&&t.toc&&t.toc.length>0?a.createElement(m.Z,{toc:t.toc,minHeadingLevel:f,maxHeadingLevel:g}):void 0},a.createElement(c.Z,{frontMatter:d,assets:r,metadata:l,isBlogPostPage:!0},a.createElement(t,null)),(i||u)&&a.createElement(s.Z,{nextItem:i,prevItem:u}))}function v(e){return a.createElement(l.FG,{className:(0,r.Z)(i.k.wrapper.blogPages,i.k.page.blogPostPage)},a.createElement(u,e),a.createElement(d,e))}},81369:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(99853),r=n(76687),l=n(56153),i=n(99112);function o(e){var t=e.nextItem,n=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,l.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n&&r.createElement(i.Z,(0,a.Z)({},n,{subLabel:r.createElement(l.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(i.Z,(0,a.Z)({},t,{subLabel:r.createElement(l.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}},45260:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(99853),r=n(5309),l=n(76687),i=n(86355),o=n(88652),c="tableOfContents_MOFZ",s=["className"];function m(e){var t=e.className,n=(0,r.Z)(e,s);return l.createElement("div",{className:(0,i.Z)(c,"thin-scrollbar",t)},l.createElement(o.Z,(0,a.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},88652:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(99853),r=n(5309),l=n(76687),i=["parentIndex"];function o(e){var t=e.map((function(e){return Object.assign({},e,{parentIndex:-1,children:[]})})),n=Array(7).fill(-1);t.forEach((function(e,t){var a=n.slice(2,e.level);e.parentIndex=Math.max.apply(Math,a),n[e.level]=t}));var a=[];return t.forEach((function(e){var n=e.parentIndex,l=(0,r.Z)(e,i);n>=0?t[n].children.push(l):a.push(l)})),a}function c(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return t.flatMap((function(e){var t=c({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[Object.assign({},e,{children:t})]:t}))}var s=n(44170);function m(e){var t=e.getBoundingClientRect();return t.top===t.bottom?m(e.parentNode):t}function u(e,t){var n,a,r=t.anchorTopOffset,l=e.find((function(e){return m(e).top>=r}));return l?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(m(l))?l:null!=(a=e[e.indexOf(l)-1])?a:null:null!=(n=e[e.length-1])?n:null}function d(){var e=(0,l.useRef)(0),t=(0,s.L)().navbar.hideOnScroll;return(0,l.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function v(e){var t=(0,l.useRef)(void 0),n=d();(0,l.useEffect)((function(){if(!e)return function(){};var a=e.linkClassName,r=e.linkActiveClassName,l=e.minHeadingLevel,i=e.maxHeadingLevel;function o(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(a),o=function(e){for(var t=e.minHeadingLevel,n=e.maxHeadingLevel,a=[],r=t;r<=n;r+=1)a.push("h"+r+".anchor");return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:l,maxHeadingLevel:i}),c=u(o,{anchorTopOffset:n.current}),s=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),function(){document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,n])}function f(e){var t=e.toc,n=e.className,a=e.linkClassName,r=e.isChild;return t.length?l.createElement("ul",{className:r?void 0:n},t.map((function(e){return l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=a?a:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(f,{isChild:!0,toc:e.children,className:n,linkClassName:a}))}))):null}var g=l.memo(f),p=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function h(e){var t=e.toc,n=e.className,i=void 0===n?"table-of-contents table-of-contents__left-border":n,m=e.linkClassName,u=void 0===m?"table-of-contents__link":m,d=e.linkActiveClassName,f=void 0===d?void 0:d,h=e.minHeadingLevel,b=e.maxHeadingLevel,E=(0,r.Z)(e,p),L=(0,s.L)(),N=null!=h?h:L.tableOfContents.minHeadingLevel,k=null!=b?b:L.tableOfContents.maxHeadingLevel,_=function(e){var t=e.toc,n=e.minHeadingLevel,a=e.maxHeadingLevel;return(0,l.useMemo)((function(){return c({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})}),[t,n,a])}({toc:t,minHeadingLevel:N,maxHeadingLevel:k});return v((0,l.useMemo)((function(){if(u&&f)return{linkClassName:u,linkActiveClassName:f,minHeadingLevel:N,maxHeadingLevel:k}}),[u,f,N,k])),l.createElement(g,(0,a.Z)({toc:_,className:i,linkClassName:u},E))}},71263:function(e,t,n){n.d(t,{c:function(){return s}});var a=n(76687),r=n(11959),l=["zero","one","two","few","many","other"];function i(e){return l.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:i(["one","other"]),select:function(e){return 1===e?"one":"other"}};function c(){var e=(0,r.Z)().i18n.currentLocale;return(0,a.useMemo)((function(){try{return t=e,n=new Intl.PluralRules(t),{locale:t,pluralForms:i(n.resolvedOptions().pluralCategories),select:function(e){return n.select(e)}}}catch(a){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+a.message+"\n"),o}var t,n}),[e])}function s(){var e=c();return{selectMessage:function(t,n){return function(e,t,n){var a=e.split("|");if(1===a.length)return a[0];a.length>n.pluralForms.length&&console.error("For locale="+n.locale+", a maximum of "+n.pluralForms.length+" plural forms are expected ("+n.pluralForms.join(",")+"), but the message contains "+a.length+": "+e);var r=n.select(t),l=n.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(n,t,e)}}}}}]);