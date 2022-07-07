"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3785],{29547:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(g,i(i({ref:t},s),{},{components:n})):r.createElement(g,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},83175:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p}});var r=n(99853),a=n(5309),o=(n(76687),n(29547)),i=(n(74954),["components"]),c={date:new Date("2021-09-06T15:09:55.000Z"),toc_max_heading_level:6,tags:["nextjs","SSG"]},l="next.js\uc758 SSG \uc81c\ub300\ub85c \uc774\ud574\ud558\uace0 \uc0ac\uc6a9\ud558\uae30",u={permalink:"/blog/2021/09/07/lets-properly-understand-and-use-the-ssg-of-nextjs",source:"@site/blog/2021/09-07-lets-properly-understand-and-use-the-ssg-of-nextjs/index.mdx",title:"next.js\uc758 SSG \uc81c\ub300\ub85c \uc774\ud574\ud558\uace0 \uc0ac\uc6a9\ud558\uae30",description:"next.js\uc758 \uc7a5\uc810 \uc911 \ud558\ub098\ub85c SSR \uc744 \uc9c0\uc6d0\ud558\ub294 \uac83 \uc778\ub370 \uc5b4\ub5bb\uac8c \uc804\uc5ed \uc0c1\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uac78\uae4c? PHP, JSP\uc640 \uac19\uc740 SSR\uacfc \ub2e4\ub978 \uac78\uae4c?",date:"2021-09-06T15:09:55.000Z",formattedDate:"2021\ub144 9\uc6d4 6\uc77c",tags:[{label:"nextjs",permalink:"/blog/tags/nextjs"},{label:"SSG",permalink:"/blog/tags/ssg"}],readingTime:18.055,truncated:!0,authors:[],frontMatter:{date:"2021-09-06T15:09:55.000Z",toc_max_heading_level:6,tags:["nextjs","SSG"]},prevItem:{title:"gin\uacfc \ud568\uaed8\ud558\ub294 react boilerplate\ub97c \uacf5\uc720\ud569\ub2c8\ub2e4",permalink:"/blog/2021/09/13/share-react-boilerplate-with-gin"},nextItem:{title:"next.js\uc5d0\uc11c recoil \uc0ac\uc6a9\ud558\uae30",permalink:"/blog/2021/05/06/using-recoil-in-nextjs"}},s={authorsImageUrls:[]},p=[],f={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"next.js\uc758 \uc7a5\uc810 \uc911 \ud558\ub098\ub85c ",(0,o.kt)("inlineCode",{parentName:"p"},"SSR")," \uc744 \uc9c0\uc6d0\ud558\ub294 \uac83 \uc778\ub370 \uc5b4\ub5bb\uac8c \uc804\uc5ed \uc0c1\ud0dc\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uac78\uae4c? PHP, JSP\uc640 \uac19\uc740 SSR\uacfc \ub2e4\ub978 \uac78\uae4c?"))}d.isMDXComponent=!0},74954:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(15418),a=n(37691),o=n(21136),i=n(86355),c=n(48134),l=n(76687),u="imgContainer_g3cu",s="spacer_xInT";function p(e){var t=(0,o.I)().colorMode,n=(0,l.useRef)(null),p=(0,l.useState)(),f=p[0],d=p[1],g="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,l.useEffect)((function(){var e=n.current.children[0],t=new MutationObserver((function(e){for(var t,n=(0,r.Z)(e);!(t=n()).done;){var a=t.value;if("attributes"===a.type){var o=(0,c.Z)(a.target.children[0],{margin:20,background:g});d(o)}}}));t.observe(e,{attributes:!0,childList:!0})}),[n]),(0,l.useEffect)((function(){null==f||f.update({background:g})}),[g]),l.createElement("div",{ref:n,className:(0,i.Z)(u,!e.disableSpacer&&s),style:{width:e.width,height:e.height}},l.createElement(a.Z,e))}}}]);