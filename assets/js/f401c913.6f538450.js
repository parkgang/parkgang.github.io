"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3357],{9547:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(6687);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),g=a,m=s["".concat(l,".").concat(g)]||s[g]||f[g]||o;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},4630:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return g},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return f}});var n=r(9853),a=r(5309),o=(r(6687),r(9547)),c=(r(4954),["components"]),i={date:new Date("2021-11-16T15:12:13.000Z"),toc_max_heading_level:6,tags:["golang","HTTP","cache"]},l="\uac04\ub2e8\ud55c HTTP \uce90\uc2dc \uc11c\ubc84\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790 (with golang)",u={permalink:"/blog/2021/11/17/lets-create-an-http-cache-server-with-golang",source:"@site/blog/2021-11-17-lets-create-an-http-cache-server-with-golang/index.mdx",title:"\uac04\ub2e8\ud55c HTTP \uce90\uc2dc \uc11c\ubc84\ub97c \ub9cc\ub4e4\uc5b4\ubcf4\uc790 (with golang)",description:"HTTP Cache\ub97c \uc704\ud55c Header \uac12 \uc124\uba85\uc774 \uc544\ub2cc \uc2e4\uc81c Server \ud504\ub85c\uadf8\ub7a8\uc774 \uc5b4\ub5a4 \ub85c\uc9c1\uc73c\ub85c \ucc98\ub9ac\uac00 \ub418\ub294\uc9c0 \uc124\uba85\ud569\ub2c8\ub2e4.",date:"2021-11-16T15:12:13.000Z",formattedDate:"2021\ub144 11\uc6d4 16\uc77c",tags:[{label:"golang",permalink:"/blog/tags/golang"},{label:"HTTP",permalink:"/blog/tags/http"},{label:"cache",permalink:"/blog/tags/cache"}],readingTime:17.275,truncated:!0,authors:[],frontMatter:{date:"2021-11-16T15:12:13.000Z",toc_max_heading_level:6,tags:["golang","HTTP","cache"]},prevItem:{title:"k8s\uc758 EXTERNAL-IP\ub294 Azure\uc5d0\uc11c \uc5b4\ub5bb\uac8c \ucc98\ub9ac\ub420\uae4c?",permalink:"/blog/2021/12/06/how-is-k8s-external-ip-handled-in-azure"},nextItem:{title:"gin\uacfc \ud568\uaed8\ud558\ub294 react boilerplate\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4",permalink:"/blog/2021/09/13/share-react-boilerplate-with-gin"}},p={authorsImageUrls:[]},f=[],s={toc:f};function g(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"HTTP Cache\ub97c \uc704\ud55c Header \uac12 \uc124\uba85\uc774 \uc544\ub2cc \uc2e4\uc81c Server \ud504\ub85c\uadf8\ub7a8\uc774 \uc5b4\ub5a4 \ub85c\uc9c1\uc73c\ub85c \ucc98\ub9ac\uac00 \ub418\ub294\uc9c0 \uc124\uba85\ud569\ub2c8\ub2e4."))}g.isMDXComponent=!0},4954:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(5418),a=r(7691),o=r(1136),c=r(8134),i=r(6687),l="imgContainer_g3cu";function u(e){var t=(0,o.I)().colorMode,r=(0,i.useRef)(null),u=(0,i.useState)(),p=u[0],f=u[1],s="dark"===t?"rgb(50, 50, 50)":"rgb(255, 255, 255)";return(0,i.useEffect)((function(){var e=r.current.children[0],t=new MutationObserver((function(e){for(var t,r=(0,n.Z)(e);!(t=r()).done;){var a=t.value;if("attributes"===a.type){var o=(0,c.Z)(a.target.children[0],{background:s});f(o)}}}));t.observe(e,{attributes:!0,childList:!0})}),[r]),(0,i.useEffect)((function(){null==p||p.update({background:s})}),[s]),i.createElement("div",{ref:r,className:l,style:{width:e.width,height:e.height}},i.createElement(a.Z,e))}}}]);