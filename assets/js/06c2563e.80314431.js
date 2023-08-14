(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7109],{74954:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var i=a(37691),A=a(21136),n=a(86355),s=a(48134),d=a(76687);const p="imgContainer_g3cu",m="spacer_xInT";function r(e){const{colorMode:t}=(0,A.I)(),a=(0,d.useRef)(null),[r,l]=(0,d.useState)(),o="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,d.useEffect)((()=>{const e=a.current.children[0],t=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type){const e=(0,s.Z)(t.target.children[0],{margin:20,background:o});l(e)}}));t.observe(e,{attributes:!0,childList:!0})}),[a]),(0,d.useEffect)((()=>{null==r||r.update({background:o})}),[o]),d.createElement("div",{ref:a,className:(0,n.Z)(p,!e.disableSpacer&&m),style:{width:e.width,height:e.height}},d.createElement(i.Z,e))}},3434:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>d,default:()=>o,frontMatter:()=>s,metadata:()=>p,toc:()=>r});var i=a(99853),A=(a(76687),a(29547)),n=a(74954);const s={title:"Domain Name \uc124\uc815",sidebar_position:3,toc_max_heading_level:6,tags:["Azure","VM","DNS","DNS \uc601\uc5ed"]},d=void 0,p={unversionedId:"build-server-with-vm-and-manage-with-docker/domain-name-setting/index",id:"build-server-with-vm-and-manage-with-docker/domain-name-setting/index",title:"Domain Name \uc124\uc815",description:"\uc0dd\uc131\ub41c VM\uc740 RDP \uc811\uc18d \uc2dc IP \uc8fc\uc18c\ub85c \uc811\uc18d\ud574\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub3c4\uba54\uc778 \ub124\uc784\uc744 \ud560\ub2f9\ubc1b\uc544 \ub3c4\uba54\uc778 \ub124\uc784\uc73c\ub85c \uc811\uc18d\ud560 \uc218 \uc788\ub3c4\ub85d \ubc14\uafd4\ubd05\uc2dc\ub2e4.",source:"@site/series/build-server-with-vm-and-manage-with-docker/domain-name-setting/index.mdx",sourceDirName:"build-server-with-vm-and-manage-with-docker/domain-name-setting",slug:"/build-server-with-vm-and-manage-with-docker/domain-name-setting/",permalink:"/series/build-server-with-vm-and-manage-with-docker/domain-name-setting/",draft:!1,tags:[{label:"Azure",permalink:"/series/tags/azure"},{label:"VM",permalink:"/series/tags/vm"},{label:"DNS",permalink:"/series/tags/dns"},{label:"DNS \uc601\uc5ed",permalink:"/series/tags/dns-\uc601\uc5ed"}],version:"current",lastUpdatedAt:1692003472,formattedLastUpdatedAt:"2023. 8. 14.",sidebarPosition:3,frontMatter:{title:"Domain Name \uc124\uc815",sidebar_position:3,toc_max_heading_level:6,tags:["Azure","VM","DNS","DNS \uc601\uc5ed"]},sidebar:"tutorialSidebar",previous:{title:"Azure VM \ub9cc\ub4e4\uae30",permalink:"/series/build-server-with-vm-and-manage-with-docker/create-azure-vm/"},next:{title:"Windows \ud658\uacbd\uc124\uc815",permalink:"/series/build-server-with-vm-and-manage-with-docker/windows-preferences/"}},m={},r=[{value:"VM IP\uc5d0 \ub3c4\uba54\uc778 \ud560\ub2f9",id:"vm-ip\uc5d0-\ub3c4\uba54\uc778-\ud560\ub2f9",level:2},{value:"Azure DNS \uc601\uc5ed\uc73c\ub85c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778 \ubcc0\uacbd\uc774 \uac00\ub2a5\ud55c\uac00?",id:"azure-dns-\uc601\uc5ed\uc73c\ub85c-\ucd5c\uc0c1\uc704-\ub3c4\uba54\uc778-\ubcc0\uacbd\uc774-\uac00\ub2a5\ud55c\uac00",level:2},{value:"\ubb34\uc2a8 \uc18c\ub9ac\uc778\uc9c0 \ubaa8\ub974\uaca0\uc5b4\uc694... DNS \uc601\uc5ed\uc744 \uc0ac\uc6a9\ud574\uc11c \uc9c1\uc811 \ud655\uc778\ud574 \ubcf4\uc790",id:"\ubb34\uc2a8-\uc18c\ub9ac\uc778\uc9c0-\ubaa8\ub974\uaca0\uc5b4\uc694-dns-\uc601\uc5ed\uc744-\uc0ac\uc6a9\ud574\uc11c-\uc9c1\uc811-\ud655\uc778\ud574-\ubcf4\uc790",level:2},{value:"\ub9ac\uc18c\uc2a4 \uadf8\ub8f9 \uc0dd\uc131",id:"\ub9ac\uc18c\uc2a4-\uadf8\ub8f9-\uc0dd\uc131",level:3},{value:"\ub9ac\uc18c\uc2a4 \uc0dd\uc131",id:"\ub9ac\uc18c\uc2a4-\uc0dd\uc131",level:3},{value:"\ub3c4\uba54\uc778 \ub124\uc784 \uc0dd\uc131",id:"\ub3c4\uba54\uc778-\ub124\uc784-\uc0dd\uc131",level:3},{value:"\ub3c4\uba54\uc778 \ud655\uc778",id:"\ub3c4\uba54\uc778-\ud655\uc778",level:3},{value:"\uacb0\ub860\uc801\uc73c\ub85c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc744 \ubc14\uafb8\uace0 \uc2f6\uc73c\uba74?",id:"\uacb0\ub860\uc801\uc73c\ub85c-\ucd5c\uc0c1\uc704-\ub3c4\uba54\uc778\uc744-\ubc14\uafb8\uace0-\uc2f6\uc73c\uba74",level:2},{value:"\uc774\uc678",id:"\uc774\uc678",level:2},{value:"\ud504\ub77c\uc774\ube57 DNS",id:"\ud504\ub77c\uc774\ube57-dns",level:3}],l={toc:r};function o(e){let{components:t,...s}=e;return(0,A.kt)("wrapper",(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,"\uc0dd\uc131\ub41c VM\uc740 RDP \uc811\uc18d \uc2dc IP \uc8fc\uc18c\ub85c \uc811\uc18d\ud574\uc57c \ud558\ub294 \ubd88\ud3b8\ud568\uc774 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ub3c4\uba54\uc778 \ub124\uc784\uc744 \ud560\ub2f9\ubc1b\uc544 \ub3c4\uba54\uc778 \ub124\uc784\uc73c\ub85c \uc811\uc18d\ud560 \uc218 \uc788\ub3c4\ub85d \ubc14\uafd4\ubd05\uc2dc\ub2e4."),(0,A.kt)("h2",{id:"vm-ip\uc5d0-\ub3c4\uba54\uc778-\ud560\ub2f9"},"VM IP\uc5d0 \ub3c4\uba54\uc778 \ud560\ub2f9"),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"\uacf5\uc6a9 IP \uc8fc\uc18c")," \ub97c \ud074\ub9ad\ud569\ub2c8\ub2e4."),(0,A.kt)(n.Z,{img:a(65241),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"IP \ud560\ub2f9\uc744 \uc815\uc801\uc73c\ub85c \ubcc0\uacbd",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},"\ub3d9\uc801\uc778 \uacbd\uc6b0 IP\uac12\uc774 \uc218\uc2dc\ub85c \ubcc0\ud558\uae30 \ub54c\ubb38\uc5d0 Server\uc73c\ub85c\uc368\uc758 \uc5ed\ud560\uc774 \uc5b4\ub835\uc2b5\ub2c8\ub2e4."))),(0,A.kt)("li",{parentName:"ul"},"DNS \uc774\ub984 \ub808\uc774\ube14\uc5d0 \uc6d0\ud558\ub294 \ub3c4\uba54\uc778 \ub124\uc784\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.",(0,A.kt)("ul",{parentName:"li"},(0,A.kt)("li",{parentName:"ul"},(0,A.kt)("inlineCode",{parentName:"li"},"{DN}.koreacentral.cloudapp.azure.com"))))),(0,A.kt)(n.Z,{img:a(73581),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("p",null,"\uc774\uc81c \ub3c4\uba54\uc778 \ub124\uc784\uc73c\ub85c \uc811\uc18d\ud560 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,A.kt)(n.Z,{img:a(92023),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("h2",{id:"azure-dns-\uc601\uc5ed\uc73c\ub85c-\ucd5c\uc0c1\uc704-\ub3c4\uba54\uc778-\ubcc0\uacbd\uc774-\uac00\ub2a5\ud55c\uac00"},"Azure DNS \uc601\uc5ed\uc73c\ub85c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778 \ubcc0\uacbd\uc774 \uac00\ub2a5\ud55c\uac00?"),(0,A.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,A.kt)("div",{parentName:"div",className:"admonition-heading"},(0,A.kt)("h5",{parentName:"div"},(0,A.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,A.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,A.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,A.kt)("div",{parentName:"div",className:"admonition-content"},(0,A.kt)("p",{parentName:"div"},(0,A.kt)("a",{parentName:"p",href:"https://ko.wikipedia.org/wiki/%EC%B5%9C%EC%83%81%EC%9C%84_%EB%8F%84%EB%A9%94%EC%9D%B8"},"\ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778 \uc774\ub780?")))),(0,A.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,A.kt)("div",{parentName:"div",className:"admonition-heading"},(0,A.kt)("h5",{parentName:"div"},(0,A.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,A.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,A.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,A.kt)("div",{parentName:"div",className:"admonition-content"},(0,A.kt)("p",{parentName:"div"},"DNS\ub294 \ub3c4\uba54\uc778 \u2192 IP\uc73c\ub85c \ubc18\ud658\ud574 \uc8fc\ub294 \ud574\uc8fc\ub294 Server\ub77c\uace0 \uc0dd\uac01\ud558\uc2dc\uba74 \ub429\ub2c8\ub2e4."))),(0,A.kt)("p",null,"Azure VM\uc73c\ub85c Web Server\uc744 \uc5f4\uac8c\ub418\ub294 \uacbd\uc6b0 \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc774 ",(0,A.kt)("inlineCode",{parentName:"p"},".koreacentral.cloudapp.azure.com")," \uc774\ubbc0\ub85c \ub108\ubb34 \uae38\uc73c\uba70 \uc0ac\uc6a9\uc131\uc5d0 \uc88b\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."),(0,A.kt)("p",null,"Azure\uc5d0 ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc774\ub77c\ub294 \uc11c\ube44\uc2a4\uac00 \uc788\uc5b4\uc11c \uc774\uac83\uc744 \uc798 \uac74\ub4dc\ub9ac\uba74 \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc9c0 \uc54a\uc744\uae4c? \ub77c\ub294 \uc0dd\uac01\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,A.kt)("p",null,"\uc6b0\uc120, \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc744 \ubcc0\uacbd\ud558\uae30 \uc704\ud574\uc11c\ub294 \ub3c4\uba54\uc778 \uad00\ub9ac \uc5c5\uccb4\uc5d0 \ub3c4\uba54\uc778\uc744 \uc784\ub300 \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,A.kt)("p",null,"Azure\uc5d0\uc11c ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc744 \ubcf4\uba74 DNS\ub97c \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uac83\ub3c4 \uac19\uace0 \ub808\ucf54\ub4dc \uc9d1\ud569\uc744 \ud1b5\ud574 \ub3c4\uba54\uc778\uc744 \ub098\ub20c \uc218 \uc788\ub294\uac70 \uac19\uc544\uc11c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc774 \ubcc0\uacbd\uc774 \uac00\ub2a5\ud55c \uac83\uc73c\ub85c \uc624\ud574\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\ub3cc\uc774\ucf1c \uc0dd\uac01\ud574 \ubcf4\uba74 \ub124\ud2b8\uc6cc\ud06c \ubc0f DNS\ub97c \ubab0\ub77c\uc11c \uc774\ub7f0 \ud5db\uc18c\ub9ac\uac00 \ub098\uc654\uc2b5\ub2c8\ub2e4. \uadfc\ub370 \uc800\uc640 \uac19\uc740 \uc0dd\uac01\uc744 \ud588\ub358 \ubd84\uc774 \ub610 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8...")),(0,A.kt)("p",null,"IP \ub9ac\uc878\ube59 \uacfc\uc815\uc744 ",(0,A.kt)("strong",{parentName:"p"},"\ub9e4\uc6b0 \uac04\ub7b5\ud654")," \ud558\uba74 \uc544\ub798\uc758 \uacfc\uc815\uc73c\ub85c \uc9c4\ud589\ub418\ub294\ub370"),(0,A.kt)("ol",null,(0,A.kt)("li",{parentName:"ol"},"Domain \uc785\ub825"),(0,A.kt)("li",{parentName:"ol"},"DNS\uc5d0 \uc9c8\uc758 \ud6c4 \ud574\ub2f9 Domain\uc5d0 \ub9de\ub294 \ub808\ucf54\ub4dc \ubc18\ud658"),(0,A.kt)("li",{parentName:"ol"},"\ub808\ucf54\ub4dc\uc5d0\uc11c IP \ub9ac\uc878\ube59 \ub420 \ub54c\uae4c\uc9c0 \ubc18\ubcf5 \uc9c8\uc758")),(0,A.kt)("p",null,"\uc704 \uc9c8\uc758 \uacfc\uc815\uc5d0\uc11c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc744 \uac70\uccd0\uc57c \ub418\ub294\ub370 Azure ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc740 \ub3c4\uba54\uc778\uc744 \ud310\ub9e4\ud558\uace0 \uad6c\ub9e4\ud558\ub294 \uc11c\ube44\uc2a4\uac00 \uc544\ub2cc ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS")," \ub77c\ub294 \uc911\uac04 \uc601\uc5ed \uc11c\ubc84\ub97c \ube4c\ub824\uc8fc\ub294 \uac83\uc785\ub2c8\ub2e4. \uadf8\ub798\uc11c \ub9ac\uc18c\uc2a4 \uc774\ub984\ub3c4 ",(0,A.kt)("inlineCode",{parentName:"p"},"\ub3c4\uba54\uc778")," \uc774\ub7f0 \uc6cc\ub529\uc774 \uc544\ub2c8\ub77c ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc774\ub77c\uace0 \ud558\ub294 \uac83 \uc785\ub2c8\ub2e4."),(0,A.kt)("p",null,"\ub54c\ubb38\uc5d0 \uc57c\uc2ec \ucc28\uac8c Azure\uc758 ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \ub9cc\uc73c\ub85c\ub294 \ub3c4\uba54\uc778\uc744 \uc9e7\uace0 \uc774\uc058\uac8c \ubc14\uafc0 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."),(0,A.kt)("h2",{id:"\ubb34\uc2a8-\uc18c\ub9ac\uc778\uc9c0-\ubaa8\ub974\uaca0\uc5b4\uc694-dns-\uc601\uc5ed\uc744-\uc0ac\uc6a9\ud574\uc11c-\uc9c1\uc811-\ud655\uc778\ud574-\ubcf4\uc790"},"\ubb34\uc2a8 \uc18c\ub9ac\uc778\uc9c0 \ubaa8\ub974\uaca0\uc5b4\uc694... DNS \uc601\uc5ed\uc744 \uc0ac\uc6a9\ud574\uc11c \uc9c1\uc811 \ud655\uc778\ud574 \ubcf4\uc790"),(0,A.kt)("h3",{id:"\ub9ac\uc18c\uc2a4-\uadf8\ub8f9-\uc0dd\uc131"},"\ub9ac\uc18c\uc2a4 \uadf8\ub8f9 \uc0dd\uc131"),(0,A.kt)("p",null,"DNS \ub9ac\uc18c\uc2a4\ub97c \ub9cc\ub4e4\uae30\uc704\ud574 \uba3c\uc800 \ub9ac\uc18c\uc2a4 \uadf8\ub8f9\uc744 \uc0dd\uc131\ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(87106),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("h3",{id:"\ub9ac\uc18c\uc2a4-\uc0dd\uc131"},"\ub9ac\uc18c\uc2a4 \uc0dd\uc131"),(0,A.kt)("p",null,"DNS \uc601\uc5ed\uc744 \ud074\ub9ad"),(0,A.kt)(n.Z,{img:a(49905),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("p",null,"\ud14c\uc2a4\ud2b8\ub97c \uc704\ud574 \uc704\uc5d0\uc11c \uc0dd\uc131\ud55c \ub9ac\uc18c\uc2a4 \uadf8\ub8f9 ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS-Test")," \uc744 \uc120\ud0dd\ud558\uace0 \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc774 \ub420 \uc778\uc2a4\ud134\uc2a4 \uc815\ubcf4\ub97c \uc785\ub825\ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(49276),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"\uc704 \uc0ac\uc9c4\ucc98\ub7fc \uc785\ub825\ud558\uba74 ",(0,A.kt)("inlineCode",{parentName:"p"},"{\ub3c4\uba54\uc778 \ub124\uc784}.kyungeun.com")," \uc774 \ub41c\ub2e4.")),(0,A.kt)("p",null,"\uc0dd\uc131\ub41c DNS \uc601\uc5ed\uc744 \ud074\ub9ad\ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(54382),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("h3",{id:"\ub3c4\uba54\uc778-\ub124\uc784-\uc0dd\uc131"},"\ub3c4\uba54\uc778 \ub124\uc784 \uc0dd\uc131"),(0,A.kt)("p",null,"\ub3c4\uba54\uc778 \ub124\uc784\uc744 \ub9cc\ub4e4\uae30 \uc704\ud574 \ub808\ucf54\ub4dc \uc9d1\ud569\uc744 \ud074\ub9ad\ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(37101),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("p",null,"\ub3c4\uba54\uc778 \ub124\uc784\uacfc \ud574\ub2f9 \ub124\uc784\uc640 \ubc14\uc778\ub529 \ub418\ub294 IP\uc8fc\uc18c\ub97c \uc785\ub825\ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(66052),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,A.kt)("div",{parentName:"div",className:"admonition-heading"},(0,A.kt)("h5",{parentName:"div"},(0,A.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,A.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,A.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,A.kt)("div",{parentName:"div",className:"admonition-content"},(0,A.kt)("p",{parentName:"div"},"IP\uc8fc\uc18c\ub294 \uc2e4\uc874\ud558\ub294 \uc8fc\uc18c\ub9cc \uac00\ub2a5\ud569\ub2c8\ub2e4."))),(0,A.kt)("p",null,"\uc0dd\uc131\ub41c \ub808\ucf54\ub4dc\ub97c \uc0b4\ud3b4\ubcf4\uba74 ",(0,A.kt)("inlineCode",{parentName:"p"},"test.kyungeun.com")," \uc694\uccad \uc2dc DNS\ub97c \ud1b5\ud574 ",(0,A.kt)("inlineCode",{parentName:"p"},"52.231.50.84")," \uac00 \ubc18\ud658\ub418\uc5b4\uc57c \ud55c\ub2e4."),(0,A.kt)(n.Z,{img:a(36472),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("h3",{id:"\ub3c4\uba54\uc778-\ud655\uc778"},"\ub3c4\uba54\uc778 \ud655\uc778"),(0,A.kt)("p",null,"cmd\ub97c \ud1b5\ud574 \ud655\uc778\ud574\ubcf4\ub85d \ud558\uc790"),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"nslookup test.kyungeun.com")," \uc73c\ub85c \uc694\uccad \uc2dc \uad8c\ud55c\uc774 \uc5c6\ub294 \uc751\ub2f5\uc774\ub77c\uace0 \ub098\uc628\ub2e4. \uc774\uc720\ub294 \ud604\uc7ac \uc0ac\uc6a9\ud558\uace0 \uc788\ub294 \uc778\ud130\ub137\uc758 DNS\uac00 Azure DNS\uac00 \uc544\ub2c8\uae30 \ub54c\ubb38\uc774\ub2e4."),(0,A.kt)(n.Z,{img:a(39848),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("p",null,"\uc0dd\uc131\ud55c DNS\uc640 \ubc14\uc778\ub529\uc744 \ud574\uc57c\uc9c0 \ub3c4\uba54\uc778\uacfc \ub9e4\ud551\ub41c IP\uc744 \uc5bb\uc744 \uc218 \uc788\ub2e4."),(0,A.kt)(n.Z,{img:a(84015),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("p",null,(0,A.kt)("inlineCode",{parentName:"p"},"nslookup test.kyungeun.com ns1-06.azure-dns.com.")),(0,A.kt)("p",null,"\uc815\uc0c1\uc801\uc73c\ub85c \ubc18\ud658\ub418\ub294\uac78 \ud655\uc778\ud560 \uc218 \uc788\ub2e4. \uc774 \ub54c\ubb38\uc5d0 \ub3c8\uc744 \uc9c0\ubd88\ud574\uc11c \ub3c4\uba54\uc778 \uad00\ub9ac \uc5c5\uccb4\uc5d0 \ud558\uc704 \ub3c4\uba54\uc778\uc744 \ub4f1\ub85d\ud574\uc57c \uc0ac\uc6a9\uc774 \uac00\ub2a5\ud55c \uac83\uc774\ub2e4."),(0,A.kt)(n.Z,{img:a(94729),mdxType:"ReactIdealImageWithMediumZoom"}),(0,A.kt)("h2",{id:"\uacb0\ub860\uc801\uc73c\ub85c-\ucd5c\uc0c1\uc704-\ub3c4\uba54\uc778\uc744-\ubc14\uafb8\uace0-\uc2f6\uc73c\uba74"},"\uacb0\ub860\uc801\uc73c\ub85c \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc744 \ubc14\uafb8\uace0 \uc2f6\uc73c\uba74?"),(0,A.kt)("p",null,"\ub3c4\uba54\uc778 \uad00\ub9ac \uc5c5\uccb4\uc5d0 \ub3c4\uba54\uc778\uc744 \uc784\ub300 \ubc1b\uc544\uc57c \ud569\ub2c8\ub2e4."),(0,A.kt)("p",null,"Azure ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc740 \ucd5c\uc0c1\uc704 \ub3c4\uba54\uc778\uc5d0\uc11c \ub9ac\uc878\ube59\ub418\uc5b4 \ud558\uc704 \ub3c4\uba54\uc778\uc73c\ub85c\uc368 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4\uace0 \uc0dd\uac01\ud560 \uc218 \uc788\uc73c\uba70 Azure\uc758 \uc5ec\ub7ec Service\uc640 \ud3ed \ub113\uac8c \ud1b5\ud569\uc774 \uac00\ub2a5\ud558\ubbc0\ub85c \uadf8\ub7f0 \uacbd\uc6b0 \uc0ac\uc6a9\ud558\uba74 \uc88b\uc740 \uc11c\ube44\uc2a4 \uc77c \uac83 \uc785\ub2c8\ub2e4."),(0,A.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,A.kt)("div",{parentName:"div",className:"admonition-heading"},(0,A.kt)("h5",{parentName:"div"},(0,A.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,A.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,A.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,A.kt)("div",{parentName:"div",className:"admonition-content"},(0,A.kt)("p",{parentName:"div"},"Azure ",(0,A.kt)("inlineCode",{parentName:"p"},"DNS \uc601\uc5ed")," \uc744 \uc0ac\uc6a9\ud558\uba74 Azure ",(0,A.kt)("inlineCode",{parentName:"p"},"VM")," IP\ub97c \ub3c4\uba54\uc778\uc73c\ub85c \uc190\uc27d\uac8c \ub9e4\ud551\uc774 \uac00\ub2a5\ud558\ub3c4\ub85d \uc190\uc27d\uac8c ",(0,A.kt)("inlineCode",{parentName:"p"},"UI")," \uc73c\ub85c \uc81c\uacf5\ud569\ub2c8\ub2e4."))),(0,A.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,A.kt)("div",{parentName:"div",className:"admonition-heading"},(0,A.kt)("h5",{parentName:"div"},(0,A.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,A.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,A.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,A.kt)("div",{parentName:"div",className:"admonition-content"},(0,A.kt)("p",{parentName:"div"},(0,A.kt)("a",{parentName:"p",href:"https://www.c-sharpcorner.com/article/adding-domain-name-to-azure-vm-using-dns-zone"},"\ub3c8\uc744 \uc9c0\ubd88\ud558\uace0 Domain \ub4f1\ub85d\ud558\ub294 \ubc29\ubc95")))),(0,A.kt)("h2",{id:"\uc774\uc678"},"\uc774\uc678"),(0,A.kt)("h3",{id:"\ud504\ub77c\uc774\ube57-dns"},"\ud504\ub77c\uc774\ube57 DNS"),(0,A.kt)("p",null,"VM\uc758 \uac00\uc0c1\ub124\ud2b8\uc6cc\ud06c\ub294 VM\uc548\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 IP\ub97c \uc758\ubbf8\ud569\ub2c8\ub2e4."),(0,A.kt)("p",null,"\ud504\ub77c\uc774\ube57 DNS\ub294 \uac00\uc0c1\ub124\ud2b8\uc6cc\ud06c \uc989, VM\ub0b4\ubd80\uc548\uc5d0\uc11c \uc0ac\uc6a9\ub418\ub294 DNS\ub97c \uc801\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,A.kt)(n.Z,{img:a(31970),mdxType:"ReactIdealImageWithMediumZoom"}))}o.isMDXComponent=!0},65241:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/1.73fc902.1919.png 1919w",images:[{path:a.p+"assets/ideal-img/1.73fc902.1919.png",width:1919,height:894}],src:a.p+"assets/ideal-img/1.73fc902.1919.png",toString:function(){return a.p+"assets/ideal-img/1.73fc902.1919.png"},placeholder:void 0,width:1919,height:894},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbElEQVQImU3NWQrDMAwE0NzAttYU41BwneX+B5wi9acfAqF5g7brfjDnhPkLogYRARHBzXNvreVsvXd81ok+3jBzlFJAHHAHs6DW+oPjOLDWgqrCzBIGUHM04j84Bs7rBovmywiIOUtRjlvALxChMlM909Y+AAAAAElFTkSuQmCC"}},36472:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/10.5e4ff61.1679.png 1679w",images:[{path:a.p+"assets/ideal-img/10.5e4ff61.1679.png",width:1679,height:845}],src:a.p+"assets/ideal-img/10.5e4ff61.1679.png",toString:function(){return a.p+"assets/ideal-img/10.5e4ff61.1679.png"},placeholder:void 0,width:1679,height:845},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAR0lEQVQImW3NSwqAQAwD0B6h/6GgeP9TRqrgwukiq76kdJwX1ipkJtwdqgoR2UJVL+pExAOZeYcN+mhm31rDf2h6My5O7QnfGHI8UmFW5g4AAAAASUVORK5CYII="}},39848:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/11.43596b9.1235.png 1235w",images:[{path:a.p+"assets/ideal-img/11.43596b9.1235.png",width:1235,height:714}],src:a.p+"assets/ideal-img/11.43596b9.1235.png",toString:function(){return a.p+"assets/ideal-img/11.43596b9.1235.png"},placeholder:void 0,width:1235,height:714},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAt0lEQVQImW3Iy2rCQACF4Xmq6sp6oXUmmQRFwUQbU0Hn4g1jbK20QqHrrvrAvyR0U+ji4z8c8XL65vr+w27zxdp94swVt/rLLj8QYc+g7hd0m1O6jZTOXUL7H2Kqt8z0mkRaJn3DRFYsibKkgat3RdjIY7Sjqos8Pvb1rv/frrRD+P6C/UPGReWUKsf0Ml7lnLPKuQQZpXrmFMwRrfCNcXBgGBa0ZMGjLEijI6PwwCwu0PGZp0HJDROPfHN6E1qbAAAAAElFTkSuQmCC"}},84015:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/12.75f559f.1676.png 1676w",images:[{path:a.p+"assets/ideal-img/12.75f559f.1676.png",width:1676,height:861}],src:a.p+"assets/ideal-img/12.75f559f.1676.png",toString:function(){return a.p+"assets/ideal-img/12.75f559f.1676.png"},placeholder:void 0,width:1676,height:861},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdUlEQVQImV2OWwpCMQxEu4O+MskFm6BSBMH9b2+kVS7ix5BMcoYkPZ4vjnGhQCkAW2sspfAAKN++1srkHlQ1etzpcaMqCFVe3WnAhlY42WFsrVNE2PunAuCck2ZGkb7nabjv1K/WIiLON/bpZf7BpZzzCS3wDelpPg8hiRkCAAAAAElFTkSuQmCC"}},94729:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/13.7f00957.1235.png 1235w",images:[{path:a.p+"assets/ideal-img/13.7f00957.1235.png",width:1235,height:714}],src:a.p+"assets/ideal-img/13.7f00957.1235.png",toString:function(){return a.p+"assets/ideal-img/13.7f00957.1235.png"},placeholder:void 0,width:1235,height:714},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAvUlEQVQImVXGW0sCQQBA4flV2pOZUjuzNwqjvdi6iTkXl8JtM5OMiJ598Q8fcQnBh49zxGq1Y/u156X6o3K/rYX5wc6/T8zzFqH6M+TllOHFmEE3Y9DNuepk9DvpGZGHFXmwIJWaxNM8eJpEalJlyHxLIk1LmMhhQsuxNnK42LV/pP87Dy3CeVNerws2qqRRJXpY8CEnrFXJxi9o1BPv/gTRCz6595fcBTU9WXMja7LojVGwZBzXhPGax9uGAx6PfH5uoASJAAAAAElFTkSuQmCC"}},31970:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/14.fb7afa6.1007.png 1007w",images:[{path:a.p+"assets/ideal-img/14.fb7afa6.1007.png",width:1007,height:683}],src:a.p+"assets/ideal-img/14.fb7afa6.1007.png",toString:function(){return a.p+"assets/ideal-img/14.fb7afa6.1007.png"},placeholder:void 0,width:1007,height:683},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsklEQVQYlV2O24qEMBAF8wEa71lRQryN4xoTRvT/f62GZBhY9qGgofvUaTE/LYd7Mc4P+r6nrmuMMXjnOKzld9sioh9nlPphnGa01uR5jpSSJEkiaZqSSonQZqCqSpzzrOtK0zRUVRXNgTAXRYEINWFprWXfd7z3kfM8ua6LaZrIsgyhtYl1u7V0XRfTwfKlLMuP0foXw2C47xulVPwvBP8jHs+NZVlw7qBt21gTDH8Jh2/6GlwGGVt6gwAAAABJRU5ErkJggg=="}},73581:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/2.d8871c2.1917.png 1917w",images:[{path:a.p+"assets/ideal-img/2.d8871c2.1917.png",width:1917,height:880}],src:a.p+"assets/ideal-img/2.d8871c2.1917.png",toString:function(){return a.p+"assets/ideal-img/2.d8871c2.1917.png"},placeholder:void 0,width:1917,height:880},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAWUlEQVQImWXGQQ6DMAwAwTwAJNtxHCdRC///5FblQlUOo90y14uVwTuNGUq6kHX/s1GO8+RYixkNN6VVe+jNKWMOsieZg4iOmWNqqNrVL6+Noqrc5OdvIsIHvm4xQpdL49wAAAAASUVORK5CYII="}},92023:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/3.d2f4219.475.png 475w",images:[{path:a.p+"assets/ideal-img/3.d2f4219.475.png",width:475,height:287}],src:a.p+"assets/ideal-img/3.d2f4219.475.png",toString:function(){return a.p+"assets/ideal-img/3.d2f4219.475.png"},placeholder:void 0,width:475,height:287},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA10lEQVQImQXBsU6DQACA4Xstk6pxcTI+nMbWSZ/AxLGDS2OauLS1gZAryB0FWgLHlVJIgS6/3yfunyQPbzGP71uunkNGL4qbieZ6rLmdaO5eNaOxQkxnEfNljBMYStvQNB3DMNB1A3Xb0/cXVkmDONaWJDPMNwZ3V+MkR9bbCjc9UhxOnNuapS4R0v8jSlI+FwkfP5rpes+XZ5hJw95UtKeKhTKIIAxxPYlWitDfECsfk6WURU5eGC7nhpW2iCjeoZQmywtKW2GtJTMHfr0AqWICX/LtRPwDHmXRkxQbOEEAAAAASUVORK5CYII="}},87106:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/4.d0f5efe.1679.png 1679w",images:[{path:a.p+"assets/ideal-img/4.d0f5efe.1679.png",width:1679,height:846}],src:a.p+"assets/ideal-img/4.d0f5efe.1679.png",toString:function(){return a.p+"assets/ideal-img/4.d0f5efe.1679.png"},placeholder:void 0,width:1679,height:846},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAaklEQVQImW2OUQqEMAxEcwG3SZPaXVqDiH54/wOOtNBdWfx4TGCSR2jbD5RSITFCk/VkZohIZ8zk7vBSsdcF6/uDWe1b3pNUDRYV2RKUBbEV8jMOKLwmMAcEDn2hXT9B2U9oyv23f8vdeAFYiDzi/Z0TeAAAAABJRU5ErkJggg=="}},49905:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/5.ea6bd04.1680.png 1680w",images:[{path:a.p+"assets/ideal-img/5.ea6bd04.1680.png",width:1680,height:840}],src:a.p+"assets/ideal-img/5.ea6bd04.1680.png",toString:function(){return a.p+"assets/ideal-img/5.ea6bd04.1680.png"},placeholder:void 0,width:1680,height:840},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAfElEQVQImU3NWwrDMAxE0ezIqa2nE0rrQPa/o1tsSunHIBBnpK3Wiogwni8iOxpJHom5oZ6UsjPGYJvQPIg8V8HdUdWVyGTff/CB+oH1N9Iq53mQmQvO+QcraoH2QW1Kz05GrOsRQSmF67q+r00QVUQdkbaiZms34X3ffACmJFICmZ1WpQAAAABJRU5ErkJggg=="}},49276:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/6.6fdace6.1677.png 1677w",images:[{path:a.p+"assets/ideal-img/6.6fdace6.1677.png",width:1677,height:842}],src:a.p+"assets/ideal-img/6.6fdace6.1677.png",toString:function(){return a.p+"assets/ideal-img/6.6fdace6.1677.png"},placeholder:void 0,width:1677,height:842},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbUlEQVQImWWOUQrCQAwF9wLiJrtJ1VbbFCp6/wOObHER6seQ9+AxJG3PF7dxpFbD3BFVcs6IyE7PKSKIJVjnmWWaGMx+w+9tPVVzruaEOXdRLgdjJ+XzCRWhaEP33IZH0vB4U6ojpf1X/kzd+AGZ7D1oT40qUAAAAABJRU5ErkJggg=="}},54382:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/7.71fc882.1679.png 1679w",images:[{path:a.p+"assets/ideal-img/7.71fc882.1679.png",width:1679,height:825}],src:a.p+"assets/ideal-img/7.71fc882.1679.png",toString:function(){return a.p+"assets/ideal-img/7.71fc882.1679.png"},placeholder:void 0,width:1679,height:825},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAdklEQVQImW2OWQ7DIBBDOQEBBphhqRoUUEnvfz9X8Nt8PFmy5EV97i9aa0j1jcgJ3nsQeTgiOOdgrYUxBkpSxj0nxphIKSPGiBDCDixl5u2pyIJ+dVznCRFBzhmllD9UfdU9TUTQWuM4jkcUJ8HofTetL+vTEz94zT9ePdJzrwAAAABJRU5ErkJggg=="}},37101:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/8.1bd7530.1680.png 1680w",images:[{path:a.p+"assets/ideal-img/8.1bd7530.1680.png",width:1680,height:836}],src:a.p+"assets/ideal-img/8.1bd7530.1680.png",toString:function(){return a.p+"assets/ideal-img/8.1bd7530.1680.png"},placeholder:void 0,width:1680,height:836},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcUlEQVQImVWNXQrDMAyDc4P82Em22ekohD0Uev/jadhbCn34sJElOXyOE/u24dkfIK4opSClhNbateecEUQUvXfo2PHStxuMMQZq/QWNYCZbiNlhZjfMOb2AiJygql69XhgWFJGbHtYx/cVFjPEy2fwC5tw96+7losMAAAAASUVORK5CYII="}},66052:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/9.47de375.1680.png 1680w",images:[{path:a.p+"assets/ideal-img/9.47de375.1680.png",width:1680,height:858}],src:a.p+"assets/ideal-img/9.47de375.1680.png",toString:function(){return a.p+"assets/ideal-img/9.47de375.1680.png"},placeholder:void 0,width:1680,height:858},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAhElEQVQImTWMQQ7CMAwE84EmcXGS1nVAVSUOSPz/eYMS4DBaybvj8Hy9cXe0VFQL67oiOaNFebhz7kYTIRyHU2vj6Cfmd2qtkyHbtmOt0UoltNbmF1XlpjpzDK/ropvR3dnNCMMUEXLOMwdDHPeUIjFGUkqEf5l/4y9CXBZ066xaEcl8AC5NPpFGjBdaAAAAAElFTkSuQmCC"}}}]);