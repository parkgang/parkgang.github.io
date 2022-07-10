"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3279],{29547:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(76687);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),p=c,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||o;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function p(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,a=new Array(o);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:c,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},70847:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d}});var r=n(99853),c=n(5309),o=(n(76687),n(29547)),a=(n(29020),n(74954),["components"]),i={title:"Docker in Docker\ub97c \uc774\uc6a9\ud574 CI/CD \uad6c\ucd95\ud558\uae30 (with jenkins, slack)",date:new Date("2020-11-28T04:00:00.000Z"),toc_max_heading_level:6,tags:["docker","jenkins","slack","CI/CD","DevOps"]},l=void 0,s={permalink:"/blog/2020/11/28/building-ci-cd-using-docker-in-docker-with-jenkins-slack",source:"@site/blog/2020/11-28-building-ci-cd-using-docker-in-docker-with-jenkins-slack/index.mdx",title:"Docker in Docker\ub97c \uc774\uc6a9\ud574 CI/CD \uad6c\ucd95\ud558\uae30 (with jenkins, slack)",description:"docker in docker \ud14c\ud06c\ub2c9\uc744 \uc774\uc6a9\ud574 docker\ub85c \uc2e4\ud589\ub41c jenkins \ud658\uacbd\uc5d0 \ub610 docker\ub97c \uc774\uc6a9\ud574 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub744\uc5b4\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.",date:"2020-11-28T04:00:00.000Z",formattedDate:"2020\ub144 11\uc6d4 28\uc77c",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"jenkins",permalink:"/blog/tags/jenkins"},{label:"slack",permalink:"/blog/tags/slack"},{label:"CI/CD",permalink:"/blog/tags/ci-cd"},{label:"DevOps",permalink:"/blog/tags/dev-ops"}],readingTime:9.465,truncated:!0,authors:[],frontMatter:{title:"Docker in Docker\ub97c \uc774\uc6a9\ud574 CI/CD \uad6c\ucd95\ud558\uae30 (with jenkins, slack)",date:"2020-11-28T04:00:00.000Z",toc_max_heading_level:6,tags:["docker","jenkins","slack","CI/CD","DevOps"]},prevItem:{title:"nginx\ub97c \uc774\uc6a9\ud574 Load Balancer \uad6c\ud604 \ud574\ubcf4\uae30 (with docker)",permalink:"/blog/2020/11/29/implement-load-balancer-using-nginx-with-docker"},nextItem:{title:"Docker\ub85c Tomcat \uc2e4\ud589\ud574\ubcf4\uae30",permalink:"/blog/2020/11/28/running-tomcat-with-docker"}},u={authorsImageUrls:[]},d=[],m={toc:d};function p(e){var t=e.components,n=(0,c.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"docker in docker \ud14c\ud06c\ub2c9\uc744 \uc774\uc6a9\ud574 docker\ub85c \uc2e4\ud589\ub41c jenkins \ud658\uacbd\uc5d0 \ub610 docker\ub97c \uc774\uc6a9\ud574 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub744\uc5b4\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."))}p.isMDXComponent=!0},29020:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(76687),c=n(86355),o={note:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},a={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function i(e){var t=e.children,n=e.type,i=e.title,l=void 0===i?n:i,s=e.icon,u=void 0===s?o[n]:s;return r.createElement("div",{className:(0,c.Z)("admonition","admonition-"+n,"alert","alert--"+a[n])},r.createElement("div",{className:"admonition-heading"},r.createElement("h5",null,r.createElement("span",{className:"admonition-icon"},u),l)),r.createElement("div",{className:"admonition-content"},t))}},74954:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(15418),c=n(37691),o=n(21136),a=n(86355),i=n(48134),l=n(76687),s="imgContainer_g3cu",u="spacer_xInT";function d(e){var t=(0,o.I)().colorMode,n=(0,l.useRef)(null),d=(0,l.useState)(),m=d[0],p=d[1],g="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,l.useEffect)((function(){var e=n.current.children[0],t=new MutationObserver((function(e){for(var t,n=(0,r.Z)(e);!(t=n()).done;){var c=t.value;if("attributes"===c.type){var o=(0,i.Z)(c.target.children[0],{margin:20,background:g});p(o)}}}));t.observe(e,{attributes:!0,childList:!0})}),[n]),(0,l.useEffect)((function(){null==m||m.update({background:g})}),[g]),l.createElement("div",{ref:n,className:(0,a.Z)(s,!e.disableSpacer&&u),style:{width:e.width,height:e.height}},l.createElement(c.Z,e))}}}]);