"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[198],{29547:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(76687);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||u[d]||p;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11320:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(99853),a=n(5309),p=(n(76687),n(29547)),o=["components"],l={date:new Date("2021-01-01T03:00:00.000Z"),toc_max_heading_level:6,tags:["react","typescript"]},i="\uc65c React.FC\ub294 \uc548 \uc4f0\uc77c\uae4c?",c={permalink:"/blog/2021/01/01/why-is-react-fc-not-used",source:"@site/blog/2021/01-01-why-is-react-fc-not-used/index.mdx",title:"\uc65c React.FC\ub294 \uc548 \uc4f0\uc77c\uae4c?",description:"typescript \ub85c React Function Component Type\uc744 \uc9c0\uc815\ud558\ub2e4 \ubcf4\uba74 \ub9cc\ub098\uac8c \ub418\ub294 React.FC \uc774 \uce5c\uad6c\ub294 \uc65c \uc548 \uc4f0\uc77c\uae4c?",date:"2021-01-01T03:00:00.000Z",formattedDate:"2021\ub144 1\uc6d4 1\uc77c",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:4.515,truncated:!0,authors:[],frontMatter:{date:"2021-01-01T03:00:00.000Z",toc_max_heading_level:6,tags:["react","typescript"]},prevItem:{title:"Github Blog \uc2dc\uc791 \uc774\uc720",permalink:"/blog/2021/05/06/why-start-github-blog"},nextItem:{title:"Blue-Green \ubc30\ud3ec \ubc29\ubc95\uc744 \uc774\uc6a9\ud558\uc5ec \ubb34\uc911\ub2e8 \ubc30\ud3ec\ub97c \uad6c\ud604\ud574\ubcf4\uae30 (with docker)",permalink:"/blog/2020/11/29/implement-blue-green-deployment-with-docker"}},s={authorsImageUrls:[]},u=[{value:"props",id:"props",level:2},{value:"\uacf5\uc2dd\uc801\uc778 \uac00\uc774\ub4dc",id:"\uacf5\uc2dd\uc801\uc778-\uac00\uc774\ub4dc",level:2},{value:"\uc9e7\uc544\uc9c0\ub294 \ucf54\ub4dc",id:"\uc9e7\uc544\uc9c0\ub294-\ucf54\ub4dc",level:2},{value:"defaultProps",id:"defaultprops",level:2},{value:"props.children",id:"propschildren",level:2},{value:"js\uc2a4\ub7ec\uc6cc\uc11c?",id:"js\uc2a4\ub7ec\uc6cc\uc11c",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"typescript")," \ub85c ",(0,p.kt)("inlineCode",{parentName:"p"},"React")," Function Component Type\uc744 \uc9c0\uc815\ud558\ub2e4 \ubcf4\uba74 \ub9cc\ub098\uac8c \ub418\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uc774 \uce5c\uad6c\ub294 \uc65c \uc548 \uc4f0\uc77c\uae4c?"),(0,p.kt)("h2",{id:"props"},"props"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"\uc9c1\uc811 type")," \ub97c \uc815\uc758\ud558\ub294 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc6d0\ub798\uc5d0\ub294 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uac00 ",(0,p.kt)("inlineCode",{parentName:"p"},"defaultProps")," \ud639\uc740 ",(0,p.kt)("inlineCode",{parentName:"p"},"props.children")," \uc774\uc288 \ub54c\ubb38\uc5d0 \uc9c1\uc811 type\ub97c \uc815\uc758\ud558\ub294 \ubc29\ubc95\uc774 \uc88b\ub2e4\uace0 \uc0dd\uac01\ud588\uc9c0\ub9cc \uc0dd\uac01\uc744 \ud574\ubcf4\ub2c8 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \ub97c \uc774\uc6a9\ud574\uc11c \ucda9\ubd84\ud55c \uc6b0\ud68c \ubc29\ubc95\uc744 \ucc3e\uc544\ub0c8\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"\uacf5\uc2dd\uc801\uc778-\uac00\uc774\ub4dc"},"\uacf5\uc2dd\uc801\uc778 \uac00\uc774\ub4dc"),(0,p.kt)("p",null,"js\uc73c\ub85c \uac1c\ubc1c\ub41c react\ub97c ts\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc704\ud574 \uac1c\ubc1c\uc790\uac00 \uc5f0\uad6c\ub97c \ud1b5\ud574 \ud0c4\uc0dd\ud55c type\uc774 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uc774\ub77c\uace0 \uc0dd\uac01\ub429\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ud6c4 \ubc1c\uc0dd\ud558\ub294 \uc774\uc288\ub3c4 \uc5b8\uc820\uac04 \uacf5\uc2dd\uc801\uc73c\ub85c \uc218\uc815\ub420 \ud655\ub960\uc774 \ub192\uace0 \uc548\uc804\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\ubc18\ub300\ub85c \ub9d0\ud558\uba74 \uc5b4\ub5bb\uac8c \ubbf8\ub798\uc5d0 \uc5b4\ub5a4 \ubc29\uc2dd\uc73c\ub85c \ubc14\ub014\uc9c0 \ubcf4\uc7a5\ud560 \uc218 \uc5c6\ub294 \uc704\ud5d8\uc774 \uc788\uc2b5\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"\uc9e7\uc544\uc9c0\ub294-\ucf54\ub4dc"},"\uc9e7\uc544\uc9c0\ub294 \ucf54\ub4dc"),(0,p.kt)("p",null,"type\ub97c \uc815\uc758\ud558\uace0 \uc0ac\uc6a9\ud558\uba74 \uc544\ub9c8 \uc544\ub798\uc640 \uac19\uc740 \ucf54\ub4dc\uac00 \ub098\uc624\uac8c \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyProps {\n  name: string;\n  mark: string;\n  optional?: string;\n  onClick: (name: string) => void;\n}\n\nfunction Greetings({ name, mark, optional, onClick }: MyProps): JSX.Element {\n  // ...\n}\n")),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"MyProps")," \uc73c\ub85c props type\ub97c \uc815\uc758\ud558\uace0 \ud568\uc218\uc758 return type\uae4c\uc9c0 ",(0,p.kt)("inlineCode",{parentName:"p"},"JSX.Element")," \uc73c\ub85c \uc815\uc758\ud558\uc600\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ubc88\uc5d4 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uc73c\ub85c \uc791\uc131\ud574\ubcf4\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyProps {\n  name: string;\n  mark: string;\n  optional?: string;\n  onClick: (name: string) => void;\n}\n\nconst Greetings: React.FC<MyProps> = ({ name, mark, optional, onClick }) => {\n  // ...\n};\n")),(0,p.kt)("p",null,"\uc0ac\uc2e4 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uc774\ub098 \ud06c\uac8c \ucc28\uc774\ub294 \uc5c6\uc9c0\ub9cc ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \ub294 props\uc640 return\uae4c\uc9c0 \ud55c\ubc88\uc5d0 \uac80\uc0ac\ub97c \ud574\uc8fc\uae30 \ub54c\ubb38\uc5d0 \uc9e7\uc740 \ucf54\ub4dc\ub97c \uc0dd\uc0b0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Lint\uc744 \ube61\uc138\uac8c \uc7a1\uc544\uc11c \ubaa8\ub4e0 \ud568\uc218\uc758 return\uae4c\uc9c0 \uba85\uc2dc\ub97c \ud574\uc57c\ud558\ub294 rule\uc774 \uc788\ub2e4\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC"),"\uc740 \uc88b\uc740 \uc120\ud0dd\uc77c\uc9c0\ub3c4 \ubaa8\ub985\ub2c8\ub2e4.")),(0,p.kt)("h2",{id:"defaultprops"},"defaultProps"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \ub97c \uc0ac\uc6a9\ud558\uba74 ",(0,p.kt)("inlineCode",{parentName:"p"},".defaultProps")," \uc744 \uc791\uc131\ud574\ub3c4 \uccb4\ud06c\ub418\uc9c0 \uc54a\ub294 \ubc84\uadf8\uac00 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("p",null,"ES6 \ubb38\ubc95\uc778 \uae30\ubcf8\uac12 \ub9e4\uac1c\ubcc0\uc218\ub97c \uc774\uc6a9\ud558\uc5ec \ud574\uacb0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},'const Greetings: React.FC<MyProps> = ({\n  name,\n  mark,\n  optional = "Hi",\n  onClick,\n}) => {\n  // ...\n};\n')),(0,p.kt)("p",null,"props\uc774\ub984\uc774 \ubcc0\uacbd\ub418\uba74 \ud30c\ub77c\ubbf8\ud130\uc758 props\uc774\ub984\uacfc defaultProps\uc774\ub984\uc744 2\uac00\uc9c0 \ubaa8\ub450 \ubcc0\uacbd\ud574\uc57c \ud558\ub294\ub370 \ud55c\ubc88\uc5d0 \ud568\uc218 \ud30c\ub77c\ubbf8\ud130\uc5d0\uc11c \ubcc0\uacbd\ud558\ub294\uac8c \ub354 \ud3b8\ud574\ubcf4\uc785\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uc774\ubbf8 \uc9c4\ud589\ub41c react.js\uc5d0\uc11c defaultProps\ub97c \uc0ac\uc6a9\ud588\ub2e4\uba74 react.ts\uc73c\ub85c \ub9c8\uc774\uadf8\ub808\uc774\uc158\uc744 \uc704\ud574\uc11c\ub294 \ub2e4\uc2dc \ud30c\ub77c\ubbf8\ud130\uc5d0 \uae30\ubcf8\uac12\uc744 \uba85\uc2dc\ud574\uc57c\ub418\uae30 \ub54c\ubb38\uc5d0 \uc624\ud788\ub824 \ubd88\ud3b8\ud55c \ubc29\ubc95\uc774 \ub420 \uc218 \uc788\uc744\uaebc \uac19\uc2b5\ub2c8\ub2e4."),(0,p.kt)("h2",{id:"propschildren"},"props.children"),(0,p.kt)("p",null,"children \uac12\uc774 \uc635\uc154\ub110 \ud615\ud0dc\ub77c \uc0ac\uc6a9\uc720\ubb34\ub97c \ubaa8\ub974\uaca0\ub2e4\uba74 \uc0ac\uc6a9\ub418\ub294 component\uc758 type\uc5d0 \uba85\uc2dc\uc801\uc73c\ub85c \uc120\uc5b8\ud574\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"interface MyProps {\n  children: React.ReactNode;\n}\n")),(0,p.kt)("h2",{id:"js\uc2a4\ub7ec\uc6cc\uc11c"},"js\uc2a4\ub7ec\uc6cc\uc11c?"),(0,p.kt)("p",null,"\uc77c\ubd80\uc758 ",(0,p.kt)("a",{parentName:"p",href:"https://fettblog.eu/typescript-react-why-i-dont-use-react-fc/"},"TypeScript + React: Why I don't use React.FC")," \uc911\uc5d0\uc11c props\ub97c \uc77c\uc77c\uc774 \uc9c0\uc815\ud574\uc8fc\ub294\uac83\uc774 \uac04\ub2e8\ud558\uace0 JavaScript\uc5d0 \ud6e8\uc52c \ub354 \uac00\uae5d\ub2e4\uace0 \ub9d0\ud569\ub2c8\ub2e4."),(0,p.kt)("p",null,"\uba85\uc2dc\uac00 \uc9c1\uad00\uc801\uc774\uace0 \uac04\ub2e8\ud558\uba70 \ucd94\ud6c4, ",(0,p.kt)("inlineCode",{parentName:"p"},"React.FC")," \uac00 \ubcc0\uacbd\ub41c\ub2e4\uace0 \ud574\ub3c4 props\ub97c \ubc1b\uc544\uc624\ub294 type\ub97c \uba85\uc2dc\ud55c \uac83\uc740 ts\uc758 \uae30\ub2a5\uc774\uae30 \ub54c\ubb38\uc5d0 \ud558\uc704\ud638\ud658\uc131\ub3c4 \ud06c\uac8c \uac71\uc815\ub418\uc9c0\ub294 \uc54a\uc744\uac81\ub2c8\ub2e4."),(0,p.kt)("p",null,"\ud558\uc9c0\ub9cc js\uc5d0 \uac00\uae5d\ub3c4\ub85d ts\uc5d0\uc11c \ucf54\ub529\ud558\ub294 \uc774\uc720\ub294 \ubaa8\ub974\uaca0\uc2b5\ub2c8\ub2e4. \uac15\ub825\ud55c \ud0c0\uc785\uc758 \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud558\uae30 \uc704\ud574 ts\ub97c \uc0ac\uc6a9\ud574\uc57c\ud558\ub294\ub370 class \uae30\ubc18\uc758 React\uc758 \uc720\ubb3c\uc778 defaultProps\ub97c \uc0ac\uc6a9\ud574\uc11c type\uc744 \uba85\uc2dc\ud55c\ub2e4\ub294\uac70 \ubd80\ud130\uac00 ts\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \uc774\uc720\ub294 \uc0ac\ub77c\uc9c0\uace0 \uc788\ub294\uac70 \uac19\uc2b5\ub2c8\ub2e4."))}d.isMDXComponent=!0}}]);