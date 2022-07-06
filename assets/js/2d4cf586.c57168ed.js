"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8793],{29547:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),v=p(n),s=a,u=v["".concat(c,".").concat(s)]||v[s]||m[s]||i;return n?r.createElement(u,l(l({ref:t},d),{},{components:n})):r.createElement(u,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}v.displayName="MDXCreateElement"},29020:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(76687),a=n(86355),i={note:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})),tip:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})),danger:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})),info:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})),caution:r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},r.createElement("path",{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))},l={note:"secondary",tip:"success",danger:"danger",info:"info",caution:"warning"};function o(e){var t=e.children,n=e.type,o=e.title,c=void 0===o?n:o,p=e.icon,d=void 0===p?i[n]:p;return r.createElement("div",{className:(0,a.Z)("admonition","admonition-"+n,"alert","alert--"+l[n])},r.createElement("div",{className:"admonition-heading"},r.createElement("h5",null,r.createElement("span",{className:"admonition-icon"},d),c)),r.createElement("div",{className:"admonition-content"},t))}},30811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return u},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return v}});var r=n(99853),a=n(5309),i=(n(76687),n(29547)),l=n(29020),o=["components"],c={sidebar_position:1,toc_max_heading_level:6,tags:["Azure","VM"]},p="VM\uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub294 \uc774\uc720",d={unversionedId:"build-server-with-vm-and-manage-with-docker/why-build-server-with-vm/index",id:"build-server-with-vm-and-manage-with-docker/why-build-server-with-vm/index",title:"VM\uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub294 \uc774\uc720",description:"PaaS , SaaS \uc640 \uac19\uc740 \uac83\uc774 \ub354 \ud3b8\ub9ac\ud55c \uac83\uc774 \uc788\ub294\ub370 \ubd88\uad6c\ud558\uace0 \uc65c \uad73\uc774 VM \uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub824\ub294 \uac83 \uc77c\uae4c\uc694?",source:"@site/series/build-server-with-vm-and-manage-with-docker/why-build-server-with-vm/index.mdx",sourceDirName:"build-server-with-vm-and-manage-with-docker/why-build-server-with-vm",slug:"/build-server-with-vm-and-manage-with-docker/why-build-server-with-vm/",permalink:"/series/build-server-with-vm-and-manage-with-docker/why-build-server-with-vm/",draft:!1,tags:[{label:"Azure",permalink:"/series/tags/azure"},{label:"VM",permalink:"/series/tags/vm"}],version:"current",lastUpdatedAt:1657133915,formattedLastUpdatedAt:"2022. 7. 6.",sidebarPosition:1,frontMatter:{sidebar_position:1,toc_max_heading_level:6,tags:["Azure","VM"]},sidebar:"tutorialSidebar",previous:{title:"VM\uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\uace0 Docker\ub85c \uad00\ub9ac\ud558\uae30",permalink:"/series/build-server-with-vm-and-manage-with-docker/"},next:{title:"Azure VM \ub9cc\ub4e4\uae30",permalink:"/series/build-server-with-vm-and-manage-with-docker/create-azure-vm/"}},m={},v=[{value:"\uba3c\uc800 Server\ub780?",id:"\uba3c\uc800-server\ub780",level:2},{value:"\uc6a9\ub3c4\uc5d0 \ub9de\ub294 \uc11c\ube44\uc2a4 \uc774\uc6a9",id:"\uc6a9\ub3c4\uc5d0-\ub9de\ub294-\uc11c\ube44\uc2a4-\uc774\uc6a9",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810",level:3},{value:"\uadf8\ub7fc\uc5d0\ub3c4 VM? \ud83d\ude44",id:"\uadf8\ub7fc\uc5d0\ub3c4-vm-",level:2},{value:"\uc7a5\uc810",id:"\uc7a5\uc810-1",level:3},{value:"\ub2e8\uc810",id:"\ub2e8\uc810-1",level:3},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"Reference",id:"reference",level:2}],s={toc:v};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"vm\uc73c\ub85c-server\ub97c-\uad6c\ucd95\ud558\ub294-\uc774\uc720"},"VM\uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub294 \uc774\uc720"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PaaS")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"SaaS")," \uc640 \uac19\uc740 \uac83\uc774 \ub354 \ud3b8\ub9ac\ud55c \uac83\uc774 \uc788\ub294\ub370 \ubd88\uad6c\ud558\uace0 \uc65c \uad73\uc774 ",(0,i.kt)("inlineCode",{parentName:"p"},"VM")," \uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub824\ub294 \uac83 \uc77c\uae4c\uc694?"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\uc628 \ud504\ub808\ubbf8\uc2a4 \ud658\uacbd")," \uc744 \uad6c\ucd95\ud558\ub294\uac8c \uc544\ub2cc \uc774\uc0c1 \ubcf4\ud3b8\uc801\uc73c\ub85c AWS, Azure\uc640 \uac19\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud074\ub77c\uc6b0\ub4dc \ucef4\ud4e8\ud305 \uc11c\ube44\uc2a4")," \ub97c \uc774\uc6a9\ud558\uac8c \ub429\ub2c8\ub2e4."),(0,i.kt)(l.Z,{type:"info",title:"4\ub300 \ud074\ub77c\uc6b0\ub4dc",mdxType:"Admonition"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"AWS-Amazon"),(0,i.kt)("li",{parentName:"ol"},"IBM Cloud-IBM"),(0,i.kt)("li",{parentName:"ol"},"Azure-MS"),(0,i.kt)("li",{parentName:"ol"},"Google Cloud Platform-Google"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"\uc628 \ud504\ub808\ubbf8\uc2a4 \ud658\uacbd")," \uacfc ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud074\ub77c\uc6b0\ub4dc \ud658\uacbd")," \uc758 \uc7a5/\ub2e8\uc810 \uc874\uc7ac\ud558\uc9c0\ub9cc \uc5c4\uccad\ub09c \ub300\ud615 \uc11c\ube44\uc2a4\ub97c \uc6b4\uc601\ud558\ub294 \uac8c \uc544\ub2cc \uac04\ub2e8\ud558\uac8c \uc11c\ubc84\ub97c \uc5f4\uc5b4\uc11c \ud14c\uc2a4\ud2b8\ud558\uac70\ub098 \uc18c\uaddc\ubaa8 Project\uc6a9 \ud639\uc740 \ucde8\ubbf8\uc6a9\uc73c\ub85c \uc0ac\uc6a9\ud558\ub294 \uacbd\uc6b0\uc5d0\ub294 \uc0ac\uc6a9\ud55c \ub9cc\ud07c \uac00\uaca9\uc744 \uc9c0\ubd88\ud558\uace0 \ubcf4\uc548 \ubc0f \uad00\ub9ac\uac00 \uc6a9\uc774\ud55c ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud074\ub77c\uc6b0\ub4dc \ud658\uacbd")," \uc774 \ud3b8\ub9ac\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"AWS, Azure\ub294 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud074\ub77c\uc6b0\ub4dc \ud658\uacbd")," \uc5d0\uc11c ",(0,i.kt)("a",{parentName:"p",href:"https://brunch.co.kr/@leedongins/60"},"PaaS")," \ud615\ud0dc\ub85c \uc6a9\ub3c4\uc5d0 \ub9de\uac8c \uc5ec\ub7ec \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774 \uc911\uc5d0 \uc6a9\ub3c4\uc5d0 \ub9de\ub294 Service\ub97c \uc120\ud0dd\ud558\uc9c0 \uc54a\uace0 \ud558\ub098\uc758 VM\uc73c\ub85c Server\ub97c \uad6c\ucd95\ud558\ub294 \uc774\uc720\ub294 \ubb58\uae4c\uc694?"),(0,i.kt)("h2",{id:"\uba3c\uc800-server\ub780"},"\uba3c\uc800 Server\ub780?"),(0,i.kt)("p",null,"Server\ub294 ",(0,i.kt)("strong",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uac8c \ub124\ud2b8\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc11c\ube44\uc2a4\ud558\ub294 \ucef4\ud4e8\ud130\ub97c \uc758\ubbf8"),"\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"DB Server\uac00 \ub418\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"\ud074\ub77c\uc774\uc5b8\ud2b8 \uc0ac\uc6a9\uc790\ub4e4\uc774 DB\uc5d0 \uc800\uc7a5\ub41c \uc815\ubcf4\ub97c \uc694\uccad\ud558\uba74 DB\uc5d0\uc11c \uc694\uccad\ub41c \uc815\ubcf4\ub97c(\ub54c\ub85c\ub294 \uac00\uacf5\ud558\uc5ec) \uc81c\uacf5\ud558\ub294 \uc11c\ube44\uc2a4")," \uc5ed\ud560\uc744 \ud560 \uc218\ub3c4 \uc788\uace0"),(0,i.kt)("p",null,"\ub610\ub294, Web Server\uac00 \ub418\uba74 ",(0,i.kt)("inlineCode",{parentName:"p"},"\uc6f9 \ube0c\ub77c\uc6b0\uc800\uc640 \uac19\uc740 \ud074\ub77c\uc774\uc5b8\ud2b8\ub85c\ubd80\ud130 HTTP \uc694\uccad\uc744 \ubc1b\uc544\ub4e4\uc774\uace0, HTML \ubb38\uc11c\uc640 \uac19\uc740 \uc6f9 \ud398\uc774\uc9c0\ub97c \ubc18\ud658\ud558\ub294")," \uc5ed\ud560\uc744 \ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc774\uc640 \uac19\uc774 Server\ub294 \ub113\uc740 \uc5ed\ud560\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"\uc6a9\ub3c4\uc5d0-\ub9de\ub294-\uc11c\ube44\uc2a4-\uc774\uc6a9"},"\uc6a9\ub3c4\uc5d0 \ub9de\ub294 \uc11c\ube44\uc2a4 \uc774\uc6a9"),(0,i.kt)("p",null,"\ud074\ub77c\uc6b0\ub4dc \ud658\uacbd\uc5d0\ub294 \uc6a9\ub3c4\uc5d0 \ub9de\ub294 \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"Azure\ub97c \uc608\ub85c \ub4e4\uba74"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc6f9 \uc0ac\uc774\ud2b8\ub97c \ud638\uc2a4\ud305 \ud558\uae30 \uc704\ud55c ",(0,i.kt)("inlineCode",{parentName:"li"},"App Services")),(0,i.kt)("li",{parentName:"ol"},"DB Server\uc778 ",(0,i.kt)("inlineCode",{parentName:"li"},"Azure Cosmos DB")),(0,i.kt)("li",{parentName:"ol"},"\ub4f1\ub4f1...")),(0,i.kt)("p",null,"\ud574\ub2f9 \uc11c\ube44\uc2a4\ub97c \uc774\uc6a9\ud558\uba74 \uc6a9\ub3c4\uc5d0 \ub9de\uac8c ",(0,i.kt)("strong",{parentName:"p"},"\ud2b9\ud654\ub418\uace0 \uac15\ub825\ud55c \uae30\ub2a5"),"\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4."),(0,i.kt)("h3",{id:"\uc7a5\uc810"},"\uc7a5\uc810"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc11c\ube44\uc2a4\uc5d0 \ub9de\ub294 \uac15\ub825\ud55c \uae30\ub2a5 \uc81c\uacf5"),(0,i.kt)("li",{parentName:"ol"},"\ub3c5\ub9bd\uc801\uc778 \ub9ac\uc18c\uc2a4\ub85c \uad00\ub9ac\uac00 \uac00\ub2a5"),(0,i.kt)("li",{parentName:"ol"},"\uc11c\ube44\uc2a4 \uc0ac\uc6a9\ub7c9\ub9cc\ud07c \uac00\uaca9\uc744 \uc9c0\ubd88\ud558\ub294 \ud615\ud0dc\ub77c \ud569\ub9ac\uc801\uc774\ub2e4"),(0,i.kt)("li",{parentName:"ol"},"\uc11c\ube44\uc2a4\uac00 \ub2e4\uc6b4\ub418\ub354\ub77c\ub3c4 \ub3c5\ub9bd\uc801\uc774\uae30 \ub54c\ubb38\uc5d0 \ud558\ub098\ub9cc \ub2e4\uc6b4\ub428")),(0,i.kt)("h3",{id:"\ub2e8\uc810"},"\ub2e8\uc810"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\uc5ec\ub7ec \uc11c\ube44\uc2a4\ub97c \uad00\ub9ac\ud574\uc57c \ud558\ub294 \uc5b4\ub824\uc6c0")),(0,i.kt)("h2",{id:"\uadf8\ub7fc\uc5d0\ub3c4-vm-"},"\uadf8\ub7fc\uc5d0\ub3c4 VM? \ud83d\ude44"),(0,i.kt)("p",null,"\uadf8\ub7fc\uc5d0\ub3c4 \ubd88\uad6c\ud558\uace0 VM\ub97c \uc0ac\uc6a9\ud558\uac8c \ub418\uba74 \uc0dd\uae30\ub294 \uc774\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\ub370\uc77c\ub9ac \ud558\uac8c \uac00\ubccd\uac8c \uc0ac\uc6a9\ud558\ub294 \uc0ac\uc6a9\uc790 \uc785\uc7a5\uc73c\ub85c \uc11c\uc220\ub418\uc5c8\uc73c\uba70 \ud558\ub098\uc758 VM\ub9cc \uc0ac\uc6a9\ud55c\ub2e4\ub294 \uac00\uc815\uc73c\ub85c \uc11c\uc220\ub418\uc5c8\uc2b5\ub2c8\ub2e4."))),(0,i.kt)("h3",{id:"\uc7a5\uc810-1"},"\uc7a5\uc810"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"VM \ud558\ub098\ub85c \ubaa8\ub4e0 \uc11c\ube44\uc2a4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\ub2e4.")," \ud83d\ude0d"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"\uc628\ud504\ub808\ubbf8\uc2a4 \ud658\uacbd")," \uacfc \ube44\uc2b7\ud55c \ud658\uacbd\uc744 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\uc6d0\ud558\ub294 \uae30\ub2a5\uc744 \uc81c\uc57d \uc5c6\uc774 \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud558\ub4dc\uc6e8\uc5b4 \uc131\ub2a5\uc744 \uc120\ud0dd\ud560 \uc218 \uc788\uc73c\uba70 \ubcc0\uacbd\uc774 \uc790\uc720\ub86d\ub2e4."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"\ud544\uc694\ud55c \uae30\ub2a5\uc744 \ud558\ub098\ud558\ub098 \uc124\uce58\ud558\uace0 Setting \ud574\uc57c \ub418\uae30 \ub54c\ubb38\uc5d0 \uad6c\ub3d9 \uba54\ucee4\ub2c8\uc998 \uc774\ud574\uc5d0 \ub3c4\uc6c0\uc774 \ub41c\ub2e4."))),(0,i.kt)("h3",{id:"\ub2e8\uc810-1"},"\ub2e8\uc810"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"VM \ub2e4\uc6b4\uc2dc \ubaa8\ub4e0 \uc11c\ube44\uc2a4\uac00 \ub2e4\uc6b4\ub41c\ub2e4.")," \ud83d\ude31"),(0,i.kt)("li",{parentName:"ol"},"\ubcf4\uc548 \uad00\ub9ac\uac00 \uc5b4\ub835\ub2e4."),(0,i.kt)("li",{parentName:"ol"},"\ud56d\uc0c1 \uc791\ub3d9 \uac00\uc815\uc73c\ub85c \ub3c5\ub9bd\uc801\uc778 \uc11c\ube44\uc2a4\ubcf4\ub2e4 \uc9c0\ucd9c\uc774 \ud06c\ub2e4.")),(0,i.kt)("h2",{id:"\uacb0\ub860"},"\uacb0\ub860"),(0,i.kt)("p",null,"\ub0b4\uac00 \uad6c\ud604\ud558\ub294 \uc11c\ube44\uc2a4\ub098 \ud658\uacbd\uc5d0 \ub9de\uac8c \uc798 \uc120\ud0dd\ud574\uc11c \uc0ac\uc6a9\ud558\ub294 \uac83\uc774 \ubc14\ub78c\uc9c1\ud569\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uc544\uc9c1\uc740 \uacbd\ud5d8\uce58\uac00 \ubd80\uc871\ud558\uc5ec \uc5ec\ub7ec \uc11c\ube44\uc2a4\ub97c \uacf5\ubd80\ud558\ub294 \uac83\ubcf4\ub2e4 \ud558\ub098\uc758 VM\uc73c\ub85c \uad00\ub9ac\ud558\uace0 \ub290\uaef4\ubcf4\ub294 \uac83\uc774 \uc88b\ub2e4\uace0 \ud310\ub2e8\ub418\uc5b4 \ud574\ub2f9 \uc2dc\ub9ac\uc988\uc5d0\uc11c\ub294 VM\uc744 Server\ub85c \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \uac00\uc774\ub4dc \ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/ko-kr/azure/guides/developer/azure-developer-guide"},"Azure \uacf5\uc2dd Docs"))))}u.isMDXComponent=!0}}]);