(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8901],{74954:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var i=a(15418),n=a(37691),r=a(21136),o=a(86355),s=a(48134),p=a(76687),A="imgContainer_g3cu",l="spacer_xInT";function d(e){var t=(0,r.I)().colorMode,a=(0,p.useRef)(null),d=(0,p.useState)(),c=d[0],m=d[1],g="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,p.useEffect)((function(){var e=a.current.children[0],t=new MutationObserver((function(e){for(var t,a=(0,i.Z)(e);!(t=a()).done;){var n=t.value;if("attributes"===n.type){var r=(0,s.Z)(n.target.children[0],{margin:20,background:g});m(r)}}}));t.observe(e,{attributes:!0,childList:!0})}),[a]),(0,p.useEffect)((function(){null==c||c.update({background:g})}),[g]),p.createElement("div",{ref:a,className:(0,o.Z)(A,!e.disableSpacer&&l),style:{width:e.width,height:e.height}},p.createElement(n.Z,e))}},58218:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return A},default:function(){return g},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var i=a(99853),n=a(5309),r=(a(76687),a(29547)),o=a(74954),s=["components"],p={title:"war\uc73c\ub85c \ubc30\ud3ec\ud558\uae30",sidebar_position:6,toc_max_heading_level:6,tags:["tomcat","war"]},A=void 0,l={unversionedId:"from-jsp-project-setup-to-deployment/deploy-as-war/index",id:"from-jsp-project-setup-to-deployment/deploy-as-war/index",title:"war\uc73c\ub85c \ubc30\ud3ec\ud558\uae30",description:"\uc5f4\uc2ec\ud788 \ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4\uc5c8\ub294\ub370 \ubc30\ud3ec\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uace0 \uc2f6\uc744 \uac83 \uc774\ub2e4. Console Program\uacfc \uac19\uc740 \uacbd\uc6b0 Build\ud558\uace0 \ub9cc\ub4e4\uc5b4\uc9c4 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\ud558\uba74 \ub05d\uc778\ub370 JSP\uc640 \uac19\uc774 Web Application\uc740 \uc5b4\ub5bb\uac8c \ud574\uc57c\ub420\uae4c?",source:"@site/series/from-jsp-project-setup-to-deployment/deploy-as-war/index.mdx",sourceDirName:"from-jsp-project-setup-to-deployment/deploy-as-war",slug:"/from-jsp-project-setup-to-deployment/deploy-as-war/",permalink:"/series/from-jsp-project-setup-to-deployment/deploy-as-war/",draft:!1,tags:[{label:"tomcat",permalink:"/series/tags/tomcat"},{label:"war",permalink:"/series/tags/war"}],version:"current",lastUpdatedAt:1668313249,formattedLastUpdatedAt:"2022. 11. 13.",sidebarPosition:6,frontMatter:{title:"war\uc73c\ub85c \ubc30\ud3ec\ud558\uae30",sidebar_position:6,toc_max_heading_level:6,tags:["tomcat","war"]},sidebar:"tutorialSidebar",previous:{title:"Tomcat DB \uacc4\uc815 \uc815\ubcf4 \uc554\ud638\ud654",permalink:"/series/from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/"},next:{title:"aks, github, slack\uc73c\ub85c \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uad6c\ucd95\ud558\uae30",permalink:"/series/workflows-with-aks-github-slack/"}},d={},c=[{value:"Build Artifact",id:"build-artifact",level:2},{value:"Tomcat Deploy",id:"tomcat-deploy",level:2},{value:"\uc2dc\ub9ac\uc988 \ub9c8\ubb34\ub9ac \ud83d\ude4c",id:"\uc2dc\ub9ac\uc988-\ub9c8\ubb34\ub9ac-",level:2}],m={toc:c};function g(e){var t=e.components,p=(0,n.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\uc5f4\uc2ec\ud788 \ud504\ub85c\uadf8\ub7a8\uc744 \ub9cc\ub4e4\uc5c8\ub294\ub370 \ubc30\ud3ec\ud574\uc11c \uc0ac\uc6a9\ud560 \uc218 \uc788\uac8c \ub9cc\ub4e4\uace0 \uc2f6\uc744 \uac83 \uc774\ub2e4. Console Program\uacfc \uac19\uc740 \uacbd\uc6b0 Build\ud558\uace0 \ub9cc\ub4e4\uc5b4\uc9c4 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\ud558\uba74 \ub05d\uc778\ub370 JSP\uc640 \uac19\uc774 Web Application\uc740 \uc5b4\ub5bb\uac8c \ud574\uc57c\ub420\uae4c?"),(0,r.kt)("p",null,"\ubc29\ubc95\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},".war")," \ud615\ud0dc\ub85c \uc544\ud2f0\ud329\ud2b8\ub97c \uc0dd\uc131\ud574\uc11c \ubc30\ud3ec\ud558\ub294 \ubc29\ubc95\uc774\ub2e4. \uc0ac\uc9c4\ub300\ub85c \uc544\ud2f0\ud329\ud2b8\ub97c \uc0dd\uc131\ud574\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},".war")," \uc73c\ub85c Release\ub418\ub3c4\ub85d \ud55c\ub2e4."),(0,r.kt)("h2",{id:"build-artifact"},"Build Artifact"),(0,r.kt)(o.Z,{img:a(34981),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(82681),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(87550),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h2",{id:"tomcat-deploy"},"Tomcat Deploy"),(0,r.kt)("p",null,"\ucd94\ucd9c\ub41c ",(0,r.kt)("inlineCode",{parentName:"p"},".war")," \ub97c Tomcat\uc758 \uc0ac\uc9c4 \uacbd\ub85c\uc5d0 \ub193\uc73c\uba74 Tomcat\uc774 \uc2dc\uc791\ub418\uba74\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"war")," \uc744 \uc555\ucd95\uc774 \ud480\ub9ac\uba74\uc11c \uc54c\uc544\uc11c \uc2e4\ud589\ub429\ub2c8\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uacb0\uad6d Tomcat\uc774 \ub9cc\ub4e4\uc5b4\uc9c4 \ud504\ub85c\uadf8\ub7a8\uc744 \uc2e4\ud589\uc2dc\ucf1c\uc8fc\ub294 \uc8fc\uccb4\ub77c\uace0 \uc0dd\uac01\ud558\uba74 \ub429\ub2c8\ub2e4.")),(0,r.kt)(o.Z,{img:a(1106),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Tomcat\uc758 \uacbd\ub85c\ub97c \ubaa8\ub978\ub2e4\uba74 \uc2e4\ud589 \uc911\uc778 \uc11c\ube44\uc2a4\uc5d0\uc11c \uc544\ub798\uc640 \uac19\uc774 \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(21797),mdxType:"ReactIdealImageWithMediumZoom"}))),(0,r.kt)("h2",{id:"\uc2dc\ub9ac\uc988-\ub9c8\ubb34\ub9ac-"},"\uc2dc\ub9ac\uc988 \ub9c8\ubb34\ub9ac \ud83d\ude4c"),(0,r.kt)("p",null,"\ud544\uc790\uac00 \ucc98\uc74c\uc73c\ub85c \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4 \ub54c \uac00\uc7a5 \ud5f7\uac08\ub838\ub358 \ubd80\ubd84\uc740 \uc5ec\ub7ec \ub77c\uc774\ube0c\ub7ec\ub9ac\uac00 \ud1b5\ud569\ub418\uc5b4 \uc720\uae30\uc801\uc73c\ub85c \ub3d9\uc791\ud558\uba74\uc11c \uc5b4\ub5bb\uac8c \uc2e4\ud589\ub418\uace0 \ubc30\ud3ec\ub418\ub294\uac00 \uc774\uc5c8\ub2e4."),(0,r.kt)("p",null,"\uae30\uc874\uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"Console Program")," \uc740 \uc5ec\ub7ff \ub9cc\ub4e4\uc5b4 \ubd24\ub294\ub370 \uc774 \uce5c\uad6c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"build")," \uc2dc \uc0dd\uc131\ub418\ub294 \uc2e4\ud589\ud30c\uc77c\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"\ub354\ube14\ud074\ub9ad")," \ud558\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"Console")," \ud654\uba74\uacfc \ud568\uaed8 \uc2e4\ud589\ub418\ub294 \uc9c1\uad00\uc801\uc778 \uad6c\uc870\ub77c ",(0,r.kt)("em",{parentName:"p"},"build \ub41c \ud30c\uc77c\uc744 \uc2e4\ud589")," \ud558\ub294 \uacfc\uc815\uc774 \uc9c1\uad00\uc801 \uc774\uc5c8\ub2e4."),(0,r.kt)("p",null,"\uadf8\ub7f0\ub370 \uc6f9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc740 ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," \ub77c\ub294 \uacf3\uc5d0\uc11c \uacc4\uc18d \ud65c\uc131\ud654\ub418\uc5b4 \uc694\uccad\uc744 \ucc98\ub9ac\ud558\ub294 \ud504\ub85c\uadf8\ub7a8\uc778\ub370 \uc774\ub7f0 \uac83\uc744 \uc704\ud574\uc11c \uc5b4\ub5bb\uac8c \ubc30\ud3ec\ud574\uc57c \ud558\ub294\uc9c0 \ub9c9\ub9c9\ud588\ub2e4. \uc774\ud574\ud558\uace0 \ub3cc\uc774\ucf1c \uc0dd\uac01\ud574 \ubcf4\uba74 ",(0,r.kt)("inlineCode",{parentName:"p"},"Server")," \ub77c\ub294 \uac1c\ub150\uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"Tomcat")," \uacfc ",(0,r.kt)("inlineCode",{parentName:"p"},"JSP")," \uc758 \uc5f0\uad00\uad00\uacc4\uc5d0 \ub300\ud574\uc11c\ub3c4 \ubd80\uc871\ud588\ub358 \uac70 \uac19\ub2e4."),(0,r.kt)("p",null,"\uc5ed\uc2dc \uae00\ub85c \ubcf4\ub294 \uac83\ubcf4\ub2e4 \uac04\ub2e8\ud558\uac8c\ub77c\ub3c4 \uac1c\ubc1c\ubd80\ud130 \ubc30\ud3ec\uae4c\uc9c0 \ud574\ubcf4\ub294 \uac83\uc744 \ucd94\ucc9c\ud55c\ub2e4."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\uc5b4\ucc0c \ubcf4\uba74 \ucf54\ub529\ubcf4\ub2e4 ",(0,r.kt)("inlineCode",{parentName:"p"},"IDE")," \uc640 \uce5c\ud574\uc9c0\ub294 \uac83\uc774 \ub354 \uc5b4\ub824\uc6b8 \uc218 \uc788\ub2e4.")),(0,r.kt)("p",null,"\uadf8\ub3d9\uc548 \uc5ec\uae30\uae4c\uc9c0 \uc77d\uc5b4\uc8fc\uc154\uc11c \uac10\uc0ac\ud569\ub2c8\ub2e4 :)"))}g.isMDXComponent=!0},34981:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/1.6854d1e.1024.png 1024w",images:[{path:a.p+"assets/ideal-img/1.6854d1e.1024.png",width:1024,height:845}],src:a.p+"assets/ideal-img/1.6854d1e.1024.png",toString:function(){return a.p+"assets/ideal-img/1.6854d1e.1024.png"},placeholder:void 0,width:1024,height:845},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAqklEQVQYlXWMaw7CIBCEOZalwAJbXk1NrdXqFbz/AcaAxmjUH19m9jEjhnyALyt4uoKGAk4FLma4kEAcYUNuKsrpBsobepcQxhlxnEAcWsCHjJ48lPUQnBZoG9Fp05LKMjptoTnC+ABpXEMYP0HZ9FpUasu7rwji+hg/lr+8IN5DuWdjPfxBkBuhaYBUGr0236iHClUukGnFLsyQ+QhVVsi0tLnLZ/Rla/MdvviNZxI5w8MAAAAASUVORK5CYII="}},82681:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/2.2187964.1026.png 1026w",images:[{path:a.p+"assets/ideal-img/2.2187964.1026.png",width:1026,height:846}],src:a.p+"assets/ideal-img/2.2187964.1026.png",toString:function(){return a.p+"assets/ideal-img/2.2187964.1026.png"},placeholder:void 0,width:1026,height:846},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAwElEQVQYlU2MwW6DMBBE/VEJUQl47cV4DYQ0SpVeemwP/f8feBUWSD08zezOaFyanqitDLYQkqHZiLkQR0OGTBhLVWcfv9jzh/XzG3v/wtZXDQab0LFwFaULiov5QZ4flGVF0ozkO299oNeM10zrY8X1eiOkGa+J1gfaXurKUdj8hpN0pwu5rhzP/4XDO78Vo+0LSlvDnc3vuJBWfMxcfaCTSCeBrvpdd9xF75xl4uQzTShc4sRZSr1PcaHRG40Yf4RAjZJVCPZ8AAAAAElFTkSuQmCC"}},87550:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/3.6008ca7.288.png 288w",images:[{path:a.p+"assets/ideal-img/3.6008ca7.288.png",width:288,height:246}],src:a.p+"assets/ideal-img/3.6008ca7.288.png",toString:function(){return a.p+"assets/ideal-img/3.6008ca7.288.png"},placeholder:void 0,width:288,height:246},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA7klEQVQYlW2Q20oCURhG99vk/vdBJUeHBmc85WF03GoeoiKpi6AX6AnyQgh65BUWDBZdLP7/Yl18LGWtxTlX4r3/vsaYX6hmK2acB8JqS1htyIslWXeAiJTS6VeNqMVgPCWfBYaTKVl/SJJ2SlHkB9VMUordnllYE25uWW7vaXf6iK4gUsGIxhhBxb0F85cPwvOB8eOB0f5IfvfGpNgwX+8ZFTt8tYYy1mJdDedrWF9HiyHOCtavn+RPR4YP71TrTdRpi4gu0ZULGlHEYrUh7Q1I0i7Oe9TfDFprLhsRvesRcZJy1c5w7h/xPMt5xy8aYpaYJPsN/QAAAABJRU5ErkJggg=="}},1106:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/4.44d12f9.1920.png 1920w",images:[{path:a.p+"assets/ideal-img/4.44d12f9.1920.png",width:1920,height:1040}],src:a.p+"assets/ideal-img/4.44d12f9.1920.png",toString:function(){return a.p+"assets/ideal-img/4.44d12f9.1920.png"},placeholder:void 0,width:1920,height:1040},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfUlEQVQImW2OwQqDQAxE8/8f1ZPtQc+9SAt66aXS1t3VreLmlSxKERx4JJNJIHK6PjjfXhT1k6LuuNzfVK2nal2uZeMomx4JoWeeInEcmL4RNAH6x7wmxLsPqpBUMzm2fGM9ET+MmNSmaz1CfAi7haPeJCnZT/tw0+bnZeEHlWvpwqVG29QAAAAASUVORK5CYII="}},21797:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/5.7cc5542.414.png 414w",images:[{path:a.p+"assets/ideal-img/5.7cc5542.414.png",width:414,height:499}],src:a.p+"assets/ideal-img/5.7cc5542.414.png",toString:function(){return a.p+"assets/ideal-img/5.7cc5542.414.png"},placeholder:void 0,width:414,height:499},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAYAAABbayygAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQklEQVQYlW2OT2vbQBBH95M2t96aQj5T6CE19Uco5NRDDiE0aRrZ2JG1Vdb7R7srybtVpLxitRQCGXjMMAy/N+Ls4o6Pyw2nixWni4KzLys+fF7x7rzg5Lzg/cWWk09rRAwNrVNEp1G1JB86UhcZ+jADE7/2BvGkLUo9oXzH4mrL8lqyvK541B4TIja23D4qhPMB5xwhRrQxaGvRxs47rTXRN/wsFUJbh5QVUkqstYQQ8N7TNM3cuxgodntE7HpyTuScqet6PjimHbHO0QbPwzGx7Q/klEgpMQwDb9VWNQjbeKpqN2vLspyTjDF/sRZnNEWlEd0h0fdHfZ7/a9uWGON/+jaylgaRh+c3da/VHpHyb3iZmKaRcXyemcaR6d8ML2xqi9gpizKOau/49mPL5c2a+43kvljzsCm5+X7H16tb/gDeG76zJafOKwAAAABJRU5ErkJggg=="}}}]);