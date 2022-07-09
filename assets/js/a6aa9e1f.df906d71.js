"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{53528:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(5309),n=a(76687),i=a(86355),l=a(15592),o=a(4532),s=a(2221),c=a(56153),m="sidebar_gWp3",u="sidebarItemTitle_v2wW",d="sidebarItemList_eBty",f="sidebarItem_UUXV",p="sidebarItemLink_C8B2",x="sidebarItemLinkActive_yXCq";function g(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,i.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,i.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,i.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:f},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:x},e.title))})))))}var h=a(33585);function y(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function k(e){return n.createElement(h.Zo,{component:y,props:e})}function v(e){var t=e.sidebar,a=(0,o.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(k,{sidebar:t}):n.createElement(g,{sidebar:t}):null}var b=["sidebar","toc","children"];function E(e){var t=e.sidebar,a=e.toc,o=e.children,s=(0,r.Z)(e,b),c=t&&t.items.length>0;return n.createElement(l.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(v,{sidebar:t}),n.createElement("main",{className:(0,i.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},43735:function(e,t,a){a.r(t),a.d(t,{default:function(){return p}});var r=a(76687),n=a(86355),i=a(11959),l=a(82524),o=a(98551),s=a(53528),c=a(19316),m=a(85870),u=a(99550);function d(e){var t=e.metadata,a=(0,i.Z)().siteConfig.title,n=t.blogDescription,o=t.blogTitle,s="/"===t.permalink?a:o;return r.createElement(r.Fragment,null,r.createElement(l.d,{title:s,description:n}),r.createElement(u.Z,{tag:"blog_posts_list"}))}function f(e){var t=e.metadata,a=e.items,n=e.sidebar;return r.createElement(s.Z,{sidebar:n},a.map((function(e){var t=e.content;return r.createElement(c.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(m.Z,{metadata:t}))}function p(e){return r.createElement(l.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(d,e),r.createElement(f,e))}},85870:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(76687),n=a(56153),i=a(99112);function l(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(i.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(i.Z,{permalink:l,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},71263:function(e,t,a){a.d(t,{c:function(){return c}});var r=a(76687),n=a(11959),i=["zero","one","two","few","many","other"];function l(e){return i.filter((function(t){return e.includes(t)}))}var o={locale:"en",pluralForms:l(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:l(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),o}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),i=a.pluralForms.indexOf(n);return r[Math.min(i,r.length-1)]}(a,t,e)}}}},20483:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(86355),n=a(76687),i="divider_mzZv";function l(e){var t=e.className,a=e.style,l=e.children;return n.createElement("div",{className:(0,r.Z)("breadcrumbs__item--active",i,t),style:a},l)}},41047:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(20483),n=a(76687);function i(e){var t=e.className,a=e.style,i=e.isEllipse,l=e.children;return n.createElement(r.Z,{className:t,style:a},n.createElement("span",{className:"breadcrumbs__link",style:Object.assign({flexShrink:0,margin:"0 10px"},i&&{borderRadius:"50%"})},l))}},13041:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(21136),n=a(38442),i=a(11959),l=a(20483),o=a(41047),s=a(76687),c="btnContainer_Llw6";function m(e){var t=e.version,a=void 0===t?"v14.0":t,r=e.language,n=void 0===r?"ko_KR":r,i=e.href,l=e.layout,o=void 0===l?"standard":l,m=e.action,u=void 0===m?"like":m,d=e.size,f=void 0===d?"small":d,p=e.share,x=void 0===p||p,g=e.showFaces,h=void 0===g||g,y=e.width,k=e.reference,v=e.colorscheme,b=void 0===v?"light":v,E=e.kidDirectedSite,w=void 0!==E&&E,Z=e.lazy,N=void 0!==Z&&Z,B=(0,s.useRef)(null);return(0,s.useEffect)((function(){document&&"undefined"!=typeof document&&function(e,t,r){if(!e.getElementById(r)){var i=e.getElementsByTagName(t).length-1,l=e.getElementsByTagName(t)[i],o=e.createElement(t);o.id=r,o.src="//connect.facebook.net/"+n+"/sdk.js#xfbml=1&version="+a,l.parentNode.insertBefore(o,l)}}(document,"script","facebook-jssdk")}),[]),(0,s.useEffect)((function(){window.FB&&window.FB.XFBML.parse(B.current)})),s.createElement("div",{ref:B,className:c},s.createElement("div",{id:"fb-root"}),s.createElement("div",{className:"fb-like","data-href":i,"data-layout":o,"data-action":u,"data-size":f,"data-show-faces":h,"data-share":x,"data-width":y,"data-ref":k,"data-colorscheme":b,"data-kid-directed-site":w,"data-lazy":N}))}var u="btnContainer_IjeK";function d(e){var t=e.version,a=void 0===t?"v14.0":t,r=e.language,n=void 0===r?"ko_KR":r,i=e.href,l=e.lazy,o=void 0!==l&&l,c=e.layout,m=void 0===c?"button_count":c,d=e.size,f=void 0===d?"small":d,p=(0,s.useRef)(null);return(0,s.useEffect)((function(){document&&"undefined"!=typeof document&&function(e,t,r){if(!e.getElementById(r)){var i=e.getElementsByTagName(t).length-1,l=e.getElementsByTagName(t)[i],o=e.createElement(t);o.id=r,o.src="//connect.facebook.net/"+n+"/sdk.js#xfbml=1&version="+a,l.parentNode.insertBefore(o,l)}}(document,"script","facebook-jssdk")}),[]),(0,s.useEffect)((function(){window.FB&&window.FB.XFBML.parse(p.current)})),s.createElement("div",{ref:p,className:u},s.createElement("div",{className:"fb-share-button","data-href":i,"data-lazy":o,"data-layout":m,"data-size":f}))}var f,p,x,g=a(62719),h=a(61656),y=["title","titleId"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},k.apply(this,arguments)}function v(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=function(e){var t=e.title,a=e.titleId,r=v(e,y);return s.createElement("svg",k({viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,f||(f=s.createElement("rect",{fill:"var(--ifm-color-emphasis-200)",rx:40,ry:40,height:256,width:256})),p||(p=s.createElement("path",{fill:"var(--ifm-color-emphasis-700)",d:"M210 46a51.8 51.8 0 0 0-73.5 0l-19.8 19.8A8 8 0 0 0 128 77.1l19.8-19.8a36.1 36.1 0 0 1 50.9 0 35.9 35.9 0 0 1 0 50.9l-28.3 28.3a36.1 36.1 0 0 1-50.9 0 8 8 0 1 0-11.3 11.3 52 52 0 0 0 73.5 0l28.3-28.3a51.8 51.8 0 0 0 0-73.5Z"})),x||(x=s.createElement("path",{fill:"var(--ifm-color-emphasis-700)",d:"m128 178.9-19.8 19.8a36 36 0 0 1-50.9-50.9l28.3-28.3a36.1 36.1 0 0 1 50.9 0 8 8 0 0 0 11.3-11.3 52 52 0 0 0-73.5 0L46 136.5a52 52 0 1 0 73.5 73.5l19.8-19.8a8 8 0 0 0-11.3-11.3Z"})))},E={divider:"divider_L1Q2",contour:"contour_l844",link:"link_mt_N"},w=["title","titleId"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Z.apply(this,arguments)}function N(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var B=function(e){var t=e.title,a=e.titleId,r=N(e,w);return s.createElement("svg",Z({style:{fillRule:"evenodd",clipRule:"evenodd",strokeLinejoin:"round",strokeMiterlimit:2},viewBox:"0 0 512 512",xmlSpace:"preserve",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":a},r),t?s.createElement("title",{id:a},t):null,s.createElement("path",{d:"M448 512H64c-35.328 0-64-28.672-64-64V64C0 28.672 28.672 0 64 0h384c35.328 0 64 28.672 64 64v384c0 35.328-28.672 64-64 64Z",style:{fill:"#1da1f2",fillRule:"nonzero"}}),s.createElement("path",{d:"M196.608 386.048c120.704 0 186.752-100.096 186.752-186.752 0-2.816 0-5.632-.128-8.448 12.8-9.216 23.936-20.864 32.768-34.048-11.776 5.248-24.448 8.704-37.76 10.368 13.568-8.064 23.936-20.992 28.928-36.352-12.672 7.552-26.752 12.928-41.728 15.872-12.032-12.8-29.056-20.736-47.872-20.736-36.224 0-65.664 29.44-65.664 65.664 0 5.12.64 10.112 1.664 14.976-54.528-2.688-102.912-28.928-135.296-68.608-5.632 9.728-8.832 20.992-8.832 33.024 0 22.784 11.648 42.88 29.184 54.656a66.39 66.39 0 0 1-29.696-8.192v.896c0 31.744 22.656 58.368 52.608 64.384-5.504 1.536-11.264 2.304-17.28 2.304-4.224 0-8.32-.384-12.288-1.152 8.32 26.112 32.64 45.056 61.312 45.568-22.528 17.664-50.816 28.16-81.536 28.16-5.248 0-10.496-.256-15.616-.896 28.928 18.432 63.488 29.312 100.48 29.312",style:{fill:"#fff",fillRule:"nonzero"}}))};function _(e){var t=e.permalink,a=(0,i.Z)().siteConfig.customFields,c=(0,n.C)().withBaseUrl,u=(0,r.I)().colorMode,f=c(t,{absolute:!0});return s.createElement(s.Fragment,null,s.createElement(o.Z,{className:E.divider},s.createElement("span",{style:{color:"var(--ifm-color-content-secondary)"}},"\ub3c4\uc6c0\uc774 \ub418\uc168\ub098\uc694? \ud83d\udc81\u200d\u2642\ufe0f")),s.createElement("div",{className:E.link},s.createElement(m,{lazy:!0,size:"large",share:!1,layout:"button_count",href:f}),s.createElement("span",{className:E.contour}),s.createElement(d,{lazy:!0,size:"large",href:f}),s.createElement(B,{onClick:function(){var e=encodeURI(encodeURI(f)),t=a.name;window.open("https://twitter.com/share?text=\uc544\ub798\uc758 \ud3ec\uc2a4\ud130\ub97c \uacf5\uc720\ud588\uc5b4\uc694! \ud55c\ubc88 \uc77d\uc5b4\ubcf4\uc138\uc694.&url="+e+"&hashtags="+t,"Twitter","height=285,width=550,resizable=1")}}),s.createElement(g.CopyToClipboard,{text:f},s.createElement(b,{className:E.linkIcon,onClick:function(){h.Am.success("\ub9c1\ud06c\uac00 \ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub410\uc5b4\uc694. \u2728",{position:"bottom-center",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"===u?"light":"dark"})}}))),s.createElement(l.Z,null))}},13418:function(e,t,a){a.d(t,{Z:function(){return x}});var r=a(34458),n=a(38442),i=a(2172),l=a(20344),o=a(51916),s=a(98398),c=a(3748),m=a(33439),u=a.n(m),d=a(76687),f=JSON.parse('{"v":"4.8.0","meta":{"g":"LottieFiles AE ","a":"","k":"","d":"","tc":""},"fr":60,"ip":0,"op":210,"w":512,"h":512,"nm":"heart-blow","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":2,"ty":4,"nm":"heart 5","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":17,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":37,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":167,"s":[100]},{"t":197,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.571,"y":0.571},"o":{"x":0.167,"y":0.167},"t":17,"s":[253.997,259.488,0],"to":[0,0,0],"ti":[16.447,118.997,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.4,"y":0.4},"t":91.73,"s":[176.012,289.001,0],"to":[-27.976,-101.304,0],"ti":[8.438,81.87,0]},{"t":197,"s":[32.997,145.986,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":17,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":37,"s":[260.218,260.218,100]},{"t":197,"s":[136.218,136.218,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.993,0.422],[1.079,0.007],[0.998,-0.41],[0.763,-0.763],[0.41,-0.998],[-0.007,-1.079],[-0.423,-0.993],[-0.773,-0.753],[0,0],[-0.198,-0.082],[-0.214,0],[-0.198,0.082],[-0.151,0.152],[0,0],[-0.414,0.99],[-0.002,1.074],[0.41,0.992],[0.759,0.759],[0.992,0.41],[1.074,-0.002],[0.99,-0.414],[0.756,-0.762]],"o":[[0,0],[0,0],[-0.753,-0.773],[-0.993,-0.422],[-1.079,-0.007],[-0.998,0.41],[-0.763,0.763],[-0.41,0.998],[0.007,1.079],[0.423,0.993],[0,0],[0.151,0.152],[0.198,0.082],[0.214,0],[0.198,-0.082],[0,0],[0.762,-0.756],[0.414,-0.99],[0.002,-1.074],[-0.41,-0.992],[-0.759,-0.759],[-0.992,-0.41],[-1.074,0.002],[-0.99,0.414],[0,0]],"v":[[0.024,-9.385],[-1.128,-10.539],[-1.13,-10.538],[-3.776,-12.348],[-6.916,-12.998],[-10.063,-12.387],[-12.732,-10.61],[-14.508,-7.941],[-15.119,-4.794],[-14.468,-1.654],[-12.657,0.991],[-1.128,12.52],[-0.599,12.874],[0.025,12.998],[0.649,12.874],[1.179,12.52],[12.706,0.991],[14.488,-1.654],[15.119,-4.78],[14.502,-7.91],[12.731,-10.563],[10.078,-12.333],[6.949,-12.951],[3.822,-12.32],[1.177,-10.538]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.247058823705,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":17,"op":317,"st":17,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"heart 4","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":9,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":29,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":159,"s":[100]},{"t":189,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.572,"y":0.572},"o":{"x":0.167,"y":0.167},"t":9,"s":[253.997,259.488,0],"to":[0,0,0],"ti":[34.447,66.997,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.401,"y":0.401},"t":84.553,"s":[229.012,165.001,0],"to":[-27.976,-52.304,0],"ti":[-42.562,38.87,0]},{"t":189,"s":[257.997,44.986,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":9,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":29,"s":[274.218,274.218,100]},{"t":189,"s":[203.218,203.218,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.993,0.422],[1.079,0.007],[0.998,-0.41],[0.763,-0.763],[0.41,-0.998],[-0.007,-1.079],[-0.423,-0.993],[-0.773,-0.753],[0,0],[-0.198,-0.082],[-0.214,0],[-0.198,0.082],[-0.151,0.152],[0,0],[-0.414,0.99],[-0.002,1.074],[0.41,0.992],[0.759,0.759],[0.992,0.41],[1.074,-0.002],[0.99,-0.414],[0.756,-0.762]],"o":[[0,0],[0,0],[-0.753,-0.773],[-0.993,-0.422],[-1.079,-0.007],[-0.998,0.41],[-0.763,0.763],[-0.41,0.998],[0.007,1.079],[0.423,0.993],[0,0],[0.151,0.152],[0.198,0.082],[0.214,0],[0.198,-0.082],[0,0],[0.762,-0.756],[0.414,-0.99],[0.002,-1.074],[-0.41,-0.992],[-0.759,-0.759],[-0.992,-0.41],[-1.074,0.002],[-0.99,0.414],[0,0]],"v":[[0.024,-9.385],[-1.128,-10.539],[-1.13,-10.538],[-3.776,-12.348],[-6.916,-12.998],[-10.063,-12.387],[-12.732,-10.61],[-14.508,-7.941],[-15.119,-4.794],[-14.468,-1.654],[-12.657,0.991],[-1.128,12.52],[-0.599,12.874],[0.025,12.998],[0.649,12.874],[1.179,12.52],[12.706,0.991],[14.488,-1.654],[15.119,-4.78],[14.502,-7.91],[12.731,-10.563],[10.078,-12.333],[6.949,-12.951],[3.822,-12.32],[1.177,-10.538]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.247058823705,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":9,"op":309,"st":9,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"heart 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":30,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":50,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":180,"s":[100]},{"t":210,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.585,"y":0.585},"o":{"x":0.167,"y":0.167},"t":30,"s":[253.997,259.488,0],"to":[0,0,0],"ti":[-13.553,117.997,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.418,"y":0.418},"t":121.953,"s":[384.012,259.001,0],"to":[13.024,-91.304,0],"ti":[-73.562,19.87,0]},{"t":210,"s":[470.997,130.986,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":30,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":50,"s":[266.218,266.218,100]},{"t":210,"s":[148.218,148.218,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.993,0.422],[1.079,0.007],[0.998,-0.41],[0.763,-0.763],[0.41,-0.998],[-0.007,-1.079],[-0.423,-0.993],[-0.773,-0.753],[0,0],[-0.198,-0.082],[-0.214,0],[-0.198,0.082],[-0.151,0.152],[0,0],[-0.414,0.99],[-0.002,1.074],[0.41,0.992],[0.759,0.759],[0.992,0.41],[1.074,-0.002],[0.99,-0.414],[0.756,-0.762]],"o":[[0,0],[0,0],[-0.753,-0.773],[-0.993,-0.422],[-1.079,-0.007],[-0.998,0.41],[-0.763,0.763],[-0.41,0.998],[0.007,1.079],[0.423,0.993],[0,0],[0.151,0.152],[0.198,0.082],[0.214,0],[0.198,-0.082],[0,0],[0.762,-0.756],[0.414,-0.99],[0.002,-1.074],[-0.41,-0.992],[-0.759,-0.759],[-0.992,-0.41],[-1.074,0.002],[-0.99,0.414],[0,0]],"v":[[0.024,-9.385],[-1.128,-10.539],[-1.13,-10.538],[-3.776,-12.348],[-6.916,-12.998],[-10.063,-12.387],[-12.732,-10.61],[-14.508,-7.941],[-15.119,-4.794],[-14.468,-1.654],[-12.657,0.991],[-1.128,12.52],[-0.599,12.874],[0.025,12.998],[0.649,12.874],[1.179,12.52],[12.706,0.991],[14.488,-1.654],[15.119,-4.78],[14.502,-7.91],[12.731,-10.563],[10.078,-12.333],[6.949,-12.951],[3.822,-12.32],[1.177,-10.538]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.247058823705,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":30,"op":330,"st":30,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"heart 2","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":5,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":25,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":155,"s":[100]},{"t":185,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.57,"y":0.57},"o":{"x":0.167,"y":0.167},"t":5,"s":[253.997,259.488,0],"to":[0,0,0],"ti":[-11.553,80.997,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.397,"y":0.397},"t":76.867,"s":[322.012,163.001,0],"to":[13.024,-91.304,0],"ti":[10.438,49.87,0]},{"t":185,"s":[453.997,52.986,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":5,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":25,"s":[378.218,378.218,100]},{"t":185,"s":[122.218,122.218,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.993,0.422],[1.079,0.007],[0.998,-0.41],[0.763,-0.763],[0.41,-0.998],[-0.007,-1.079],[-0.423,-0.993],[-0.773,-0.753],[0,0],[-0.198,-0.082],[-0.214,0],[-0.198,0.082],[-0.151,0.152],[0,0],[-0.414,0.99],[-0.002,1.074],[0.41,0.992],[0.759,0.759],[0.992,0.41],[1.074,-0.002],[0.99,-0.414],[0.756,-0.762]],"o":[[0,0],[0,0],[-0.753,-0.773],[-0.993,-0.422],[-1.079,-0.007],[-0.998,0.41],[-0.763,0.763],[-0.41,0.998],[0.007,1.079],[0.423,0.993],[0,0],[0.151,0.152],[0.198,0.082],[0.214,0],[0.198,-0.082],[0,0],[0.762,-0.756],[0.414,-0.99],[0.002,-1.074],[-0.41,-0.992],[-0.759,-0.759],[-0.992,-0.41],[-1.074,0.002],[-0.99,0.414],[0,0]],"v":[[0.024,-9.385],[-1.128,-10.539],[-1.13,-10.538],[-3.776,-12.348],[-6.916,-12.998],[-10.063,-12.387],[-12.732,-10.61],[-14.508,-7.941],[-15.119,-4.794],[-14.468,-1.654],[-12.657,0.991],[-1.128,12.52],[-0.599,12.874],[0.025,12.998],[0.649,12.874],[1.179,12.52],[12.706,0.991],[14.488,-1.654],[15.119,-4.78],[14.502,-7.91],[12.731,-10.563],[10.078,-12.333],[6.949,-12.951],[3.822,-12.32],[1.177,-10.538]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.247058823705,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":5,"op":305,"st":5,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"heart","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":20,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":150,"s":[100]},{"t":180,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.579,"y":0.579},"o":{"x":0.167,"y":0.167},"t":0,"s":[253.997,259.488,0],"to":[0,0,0],"ti":[-11.553,80.997,0]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.412,"y":0.412},"t":84.814,"s":[153.012,172.001,0],"to":[13.024,-91.304,0],"ti":[10.438,49.87,0]},{"t":180,"s":[66.997,37.986,0]}],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":1,"k":[{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":0,"s":[0,0,100]},{"i":{"x":[0.833,0.833,0.833],"y":[0.833,0.833,0.833]},"o":{"x":[0.167,0.167,0.167],"y":[0.167,0.167,0.167]},"t":20,"s":[378.218,378.218,100]},{"t":180,"s":[203.218,203.218,100]}],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.993,0.422],[1.079,0.007],[0.998,-0.41],[0.763,-0.763],[0.41,-0.998],[-0.007,-1.079],[-0.423,-0.993],[-0.773,-0.753],[0,0],[-0.198,-0.082],[-0.214,0],[-0.198,0.082],[-0.151,0.152],[0,0],[-0.414,0.99],[-0.002,1.074],[0.41,0.992],[0.759,0.759],[0.992,0.41],[1.074,-0.002],[0.99,-0.414],[0.756,-0.762]],"o":[[0,0],[0,0],[-0.753,-0.773],[-0.993,-0.422],[-1.079,-0.007],[-0.998,0.41],[-0.763,0.763],[-0.41,0.998],[0.007,1.079],[0.423,0.993],[0,0],[0.151,0.152],[0.198,0.082],[0.214,0],[0.198,-0.082],[0,0],[0.762,-0.756],[0.414,-0.99],[0.002,-1.074],[-0.41,-0.992],[-0.759,-0.759],[-0.992,-0.41],[-1.074,0.002],[-0.99,0.414],[0,0]],"v":[[0.024,-9.385],[-1.128,-10.539],[-1.13,-10.538],[-3.776,-12.348],[-6.916,-12.998],[-10.063,-12.387],[-12.732,-10.61],[-14.508,-7.941],[-15.119,-4.794],[-14.468,-1.654],[-12.657,0.991],[-1.128,12.52],[-0.599,12.874],[0.025,12.998],[0.649,12.874],[1.179,12.52],[12.706,0.991],[14.488,-1.654],[15.119,-4.78],[14.502,-7.91],[12.731,-10.563],[10.078,-12.333],[6.949,-12.951],[3.822,-12.32],[1.177,-10.538]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[1,0.247058823705,0.427450984716,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Vector","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":300,"st":0,"bm":0}],"markers":[]}');function p(e){var t=e.permalink,a=e.shouldCount,r=(0,n.C)().withBaseUrl,m=(0,i.Z)(),p=(0,l.Z)().ifmColorPrimaryDark,x=(0,d.useRef)(),g=(0,d.useState)(function(){switch(!0){case(0,o.x)():return"keep";case a:return"incr";default:return"keep"}}()),h=g[0],y=g[1],k=(0,d.useState)(p),v=k[0],b=k[1];(0,d.useEffect)((function(){if("keep"!==h){var e=u().loadAnimation({container:x.current,renderer:"svg",loop:!1,autoplay:!1,animationData:f});setTimeout((function(){e.play()}),250)}}),[h]),(0,d.useEffect)((function(){void 0!==m&&(y("keep"),b(p))}),[m]);var E=(0,c.k)([{key:"url",value:r(t,{absolute:!0})},{key:"count_bg",value:v},{key:"icon",value:""},{key:"icon_color",value:""},{key:"title_bg",value:s.g},{key:"title",value:"\uc870\ud68c \uc218 \ud83d\udc40"},{key:"edge_flat",value:"false"}]);return d.createElement("div",{style:{display:"inline-flex",position:"relative",height:"20px",justifyContent:"center",zIndex:-1}},d.createElement("img",{src:"https://hits.seeyoufarm.com/api/count/"+h+"/badge.svg?"+E,alt:"hit-badge",height:"100%"}),d.createElement("div",{ref:x,style:{position:"absolute",top:"-40px",width:"100px"}}))}function x(e){return d.createElement(r.Z,null,(function(){return d.createElement(p,e)}))}},35903:function(e,t,a){a.d(t,{Z:function(){return l}});var r=a(11959),n=a(93996),i=a(76687);function l(){var e=(0,r.Z)().siteConfig.customFields;return i.createElement(n.Z,{author:{email:e.email,imageURL:e.github+".png",name:e.name,title:"Software Engineer \u2022 DevOps \u2764\ufe0f \u2022 \ud53c\ub4dc\ubc31 \ubc1b\ub294 \uac83\uc744 \uc88b\uc544\ud558\uba70 \uc990\uac81\uac8c \uc77c\ud558\uace0 \uc2f6\uc5b4 \ud569\ub2c8\ub2e4.",url:"/about"}})}},98398:function(e,t,a){a.d(t,{g:function(){return r}});var r="#757575"},3748:function(e,t,a){function r(e){return e.map((function(e){return e.key+"="+encodeURIComponent(e.value)})).join("&")}a.d(t,{k:function(){return r}})},19316:function(e,t,a){a.d(t,{Z:function(){return b}});var r=a(2221),n=a(71263),i=a(56153),l=a(38442),o=a(1877),s=a(13041),c=a(13418),m=a(35903),u=a(98398),d=a(76687);function f(e){var t=e.content,a=e.alt,r=u.g;return d.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-"+r.replace("#",""),alt:a})}var p=a(55041),x=a(51059),g=a(18711),h=a(86355),y="blogPostTitle_uMeh",k="blogPostData_Vfxe",v="blogPostDetailsFull_enUA";function b(e){var t,a,u=(a=(0,n.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,l.C)().withBaseUrl,E=e.children,w=e.frontMatter,Z=e.assets,N=e.metadata,B=e.truncated,_=e.isBlogPostPage,P=void 0!==_&&_,F=N.date,O=N.formattedDate,I=N.permalink,A=N.tags,T=N.readingTime,C=N.title,D=N.editUrl,j=null!=(t=Z.image)?t:w.image,V=!P&&B,R=A.length>0,z=P?"h1":"h2";return d.createElement("article",{className:P?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},d.createElement("header",null,d.createElement(z,{className:y,itemProp:"headline"},P?C:d.createElement(r.Z,{itemProp:"url",to:I},C)),d.createElement("div",{className:(0,h.Z)(k,"margin-vert--md"),style:{display:"flex",flexWrap:"wrap",alignItems:"center"}},d.createElement("time",{dateTime:F,itemProp:"datePublished",style:{height:"20px"}},d.createElement(f,{content:O+" \ud83d\uddd3\ufe0f",alt:"formatted-date"})),void 0!==T&&d.createElement(d.Fragment,null,"\xa0","\xb7","\xa0",d.createElement(f,{content:u(T)+" \u23f1\ufe0f",alt:"reading-time-plural"}),"\xa0","\xb7","\xa0",d.createElement(c.Z,{permalink:I,shouldCount:P})))),j&&d.createElement("meta",{itemProp:"image",content:b(j,{absolute:!0})}),d.createElement("div",{id:P?o.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},d.createElement(x.Z,null,E)),(R||B)&&d.createElement("footer",{className:(0,h.Z)("row docusaurus-mt-lg",P&&v)},P&&d.createElement("div",{className:"col"},d.createElement(m.Z,null)),R&&d.createElement("div",{className:(0,h.Z)("col",{"col--9":V})},d.createElement(g.Z,{tags:A})),P&&D&&d.createElement("div",{className:"col margin-top--sm"},d.createElement(p.Z,{editUrl:D})),V&&d.createElement("div",{className:(0,h.Z)("col text--right",{"col--3":R})},d.createElement(r.Z,{to:N.permalink,"aria-label":(0,i.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},d.createElement("b",null,d.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))),P&&d.createElement(s.Z,{permalink:I}))}}}]);