(self.webpackChunkblog=self.webpackChunkblog||[]).push([[122],{74954:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var a=i(37691),r=i(21136),n=i(86355),s=i(48134),o=i(76687);const d="imgContainer_g3cu",p="spacer_xInT";function l(e){const{colorMode:t}=(0,r.I)(),i=(0,o.useRef)(null),[l,c]=(0,o.useState)(),A="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,o.useEffect)((()=>{const e=i.current.children[0],t=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type){const e=(0,s.Z)(t.target.children[0],{margin:20,background:A});c(e)}}));t.observe(e,{attributes:!0,childList:!0})}),[i]),(0,o.useEffect)((()=>{null==l||l.update({background:A})}),[A]),o.createElement("div",{ref:i,className:(0,n.Z)(d,!e.disableSpacer&&p),style:{width:e.width,height:e.height}},o.createElement(a.Z,e))}},99197:(e,t,i)=>{"use strict";i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>A,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var a=i(99853),r=(i(76687),i(29547)),n=i(74954);const s={title:"Docker\ub85c Application \ubc30\ud3ec\ud558\uae30",sidebar_position:9,toc_max_heading_level:6,tags:["Docker"]},o=void 0,d={unversionedId:"build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker/index",id:"build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker/index",title:"Docker\ub85c Application \ubc30\ud3ec\ud558\uae30",description:"\uc774\uc804 \ucc55\ud130\ub97c \uc9c0\ub098\uc624\uba74\uc11c VM\uc5d0 Application\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc740 \ubaa8\ub450 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc678\ubd80 \uc0ac\uc6a9\uc790\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc73c\uba70 Server\uc5d0 Docker \ud639\uc740 \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8\uc744 \uc774\uc6a9\ud558\uc5ec Application\ub97c \ubc30\ud3ec\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/series/build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker/index.mdx",sourceDirName:"build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker",slug:"/build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker/",permalink:"/series/build-server-with-vm-and-manage-with-docker/deploying-applications-with-docker/",draft:!1,tags:[{label:"Docker",permalink:"/series/tags/docker"}],version:"current",lastUpdatedAt:1704637124,formattedLastUpdatedAt:"2024. 1. 7.",sidebarPosition:9,frontMatter:{title:"Docker\ub85c Application \ubc30\ud3ec\ud558\uae30",sidebar_position:9,toc_max_heading_level:6,tags:["Docker"]},sidebar:"tutorialSidebar",previous:{title:"SSH \uc124\uc815",permalink:"/series/build-server-with-vm-and-manage-with-docker/ssh-settings/"},next:{title:"JSP Project \uc124\uc815\ubd80\ud130 \ubc30\ud3ec\uae4c\uc9c0",permalink:"/series/from-jsp-project-setup-to-deployment/"}},p={},l=[{value:"\uc2dc\ub9ac\uc988 \ub9c8\ubb34\ub9ac \ud83d\ude4c",id:"\uc2dc\ub9ac\uc988-\ub9c8\ubb34\ub9ac-",level:2}],c={toc:l};function A(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc774\uc804 \ucc55\ud130\ub97c \uc9c0\ub098\uc624\uba74\uc11c VM\uc5d0 Application\uc744 \ubc30\ud3ec\ud560 \uc218 \uc788\ub294 \uc791\uc5c5\uc740 \ubaa8\ub450 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\uc81c \uc678\ubd80 \uc0ac\uc6a9\uc790\uc758 \uc694\uccad\uc744 \ucc98\ub9ac\ud560 \uc218 \uc788\uc73c\uba70 Server\uc5d0 Docker \ud639\uc740 \ub2e4\ub978 \ud504\ub85c\uadf8\ub7a8\uc744 \uc774\uc6a9\ud558\uc5ec Application\ub97c \ubc30\ud3ec\ud558\uace0 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\ud544\uc790\ub294 \uc544\ub798\uc640 \uac19\uc774 ",(0,r.kt)("inlineCode",{parentName:"p"},"Tomcat")," \uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"Mysql")," \uc744 \uc62c\ub824\ub193\uace0 \uc0ac\uc6a9\ud588\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)(n.Z,{img:i(43438),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(n.Z,{img:i(87482),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h2",{id:"\uc2dc\ub9ac\uc988-\ub9c8\ubb34\ub9ac-"},"\uc2dc\ub9ac\uc988 \ub9c8\ubb34\ub9ac \ud83d\ude4c"),(0,r.kt)("p",null,"VM\uc73c\ub85c Server \ub9cc\ub4e4\uae30 \uc2dc\ub9ac\uc988\uac00 \ub05d\ub0ac\uc2b5\ub2c8\ub2e4!"),(0,r.kt)("p",null,"\ud544\uc790\ub294 \ud574\ub2f9 \uc2dc\ub9ac\uc988\ub97c \uae30\ud68d\ud558\uba74\uc11c \ubd80\uc871\ud588\ub358 Server\uc758 \uac1c\ub150\uacfc Network \uc9c0\uc2dd\uc5d0 \ub300\ud574 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Full-Stack")," \uc744 \uc704\ud574\uc11c\ub3c4 \uac1c\ubc1c\uacfc \uc6b4\uc601 \ud658\uacbd \uc870\uc131\uc744 \uc704\ud55c ",(0,r.kt)("inlineCode",{parentName:"p"},"DevOps")," \uad00\uc810\uc5d0\uc11c\ub3c4 \uac1c\ubc1c\ubd80\ud130 \ubc30\ud3ec \uc6b4\uc601\uae4c\uc9c0\ub294 \uc911\uc694\ud55c \ub0b4\uc6a9\ub4e4\uc785\ub2c8\ub2e4. \ud574\ub2f9 \uc2dc\ub9ac\uc988\uc5d0\uc11c \ub2e4\ub8e8\uc9c0 \ubabb\ud588\uc9c0\ub9cc ",(0,r.kt)("inlineCode",{parentName:"p"},"Front-End")," \uae4c\uc9c0 \ub2e4\ub8e8\uba74 \ud63c\uc790\uc11c \ub098\ub9cc\uc758 \uc11c\ube44\uc2a4\ub77c\ub3c4 UI \uc124\uacc4 \u2022 \uac1c\ubc1c \u2022 \uc6b4\uc601\uae4c\uc9c0 \uac00\ub2a5\ud560 \uc218 \uc788\ub294 \uac83\uc774\uc8e0"),(0,r.kt)("p",null,"\ub2e4\ub978 \ub3c5\uc790\ubd84\ub4e4\ub3c4 \ub3c4\uc6c0\uc774 \ub418\uc168\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4. \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4 :)"))}A.isMDXComponent=!0},43438:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/1.a7a608e.1680.png 1680w",images:[{path:i.p+"assets/ideal-img/1.a7a608e.1680.png",width:1680,height:173}],src:i.p+"assets/ideal-img/1.a7a608e.1680.png",toString:function(){return i.p+"assets/ideal-img/1.a7a608e.1680.png"},placeholder:void 0,width:1680,height:173},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAKklEQVQImWPIyWr8n5xQ8z8htvp/XFTZ/9hIEC6Fskv/x4SX/A8LzP0PAL0GFd5EFMO0AAAAAElFTkSuQmCC"}},87482:(e,t,i)=>{e.exports={src:{srcSet:i.p+"assets/ideal-img/2.8b8076b.1052.png 1052w",images:[{path:i.p+"assets/ideal-img/2.8b8076b.1052.png",width:1052,height:699}],src:i.p+"assets/ideal-img/2.8b8076b.1052.png",toString:function(){return i.p+"assets/ideal-img/2.8b8076b.1052.png"},placeholder:void 0,width:1052,height:699},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVQImY2MQQ6CQBAE9/9P0egm4kdE0C8QgzDM7GzYxFgGvHmRQ3X1odNhdxnZ1yOxNY6Ncr4bp5sRG6VqJ+JVONRC8DQgfcfLFUrmPTsslAxz/rpkQi/K4ykMYog6k/rq3x5SymxhHZr5X8ISWx4/rBnjd6qKiPoAAAAASUVORK5CYII="}}}]);