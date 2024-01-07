(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5093],{74954:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(37691),i=a(21136),o=a(86355),l=a(48134),s=a(76687);const m="imgContainer_g3cu",r="spacer_xInT";function d(e){const{colorMode:t}=(0,i.I)(),a=(0,s.useRef)(null),[d,p]=(0,s.useState)(),c="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,s.useEffect)((()=>{const e=a.current.children[0],t=new MutationObserver((e=>{for(const t of e)if("attributes"===t.type){const e=(0,l.Z)(t.target.children[0],{margin:20,background:c});p(e)}}));t.observe(e,{attributes:!0,childList:!0})}),[a]),(0,s.useEffect)((()=>{null==d||d.update({background:c})}),[c]),s.createElement("div",{ref:a,className:(0,o.Z)(m,!e.disableSpacer&&r),style:{width:e.width,height:e.height}},s.createElement(n.Z,e))}},35023:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>d});var n=a(99853),i=(a(76687),a(29547)),o=a(74954);const l={title:"DBCP\ub85c DB \uc790\uc6d0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30",sidebar_position:4,toc_max_heading_level:6,tags:["JSP","DBCP","JDBC","JNDI"]},s=void 0,m={unversionedId:"from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/index",id:"from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/index",title:"DBCP\ub85c DB \uc790\uc6d0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30",description:"DataBase Connection Pool\uc758 \uc57d\uc790\ub85c \uc0ac\uc6a9\ud55c connection \uac1d\uccb4, Statement \uac1d\uccb4\uc640 \uac19\uc740 \uc790\uc6d0\ub4e4\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc774\ub2e4.",source:"@site/series/from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/index.mdx",sourceDirName:"from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp",slug:"/from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/",permalink:"/series/from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/",draft:!1,tags:[{label:"JSP",permalink:"/series/tags/jsp"},{label:"DBCP",permalink:"/series/tags/dbcp"},{label:"JDBC",permalink:"/series/tags/jdbc"},{label:"JNDI",permalink:"/series/tags/jndi"}],version:"current",lastUpdatedAt:1704637124,formattedLastUpdatedAt:"2024. 1. 7.",sidebarPosition:4,frontMatter:{title:"DBCP\ub85c DB \uc790\uc6d0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30",sidebar_position:4,toc_max_heading_level:6,tags:["JSP","DBCP","JDBC","JNDI"]},sidebar:"tutorialSidebar",previous:{title:"JDBC\ub97c \uc0ac\uc6a9\ud574 DB \uc5f0\uacb0",permalink:"/series/from-jsp-project-setup-to-deployment/db-connection-using-jdbc/"},next:{title:"Tomcat DB \uacc4\uc815 \uc815\ubcf4 \uc554\ud638\ud654",permalink:"/series/from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/"}},r={},d=[{value:"\uc0ac\uc6a9\ub418\ub294 3\uac00\uc9c0\ub97c \uc815\ub9ac\ud574 \uc8fc\uc138\uc694 \ud83d\ude0f",id:"\uc0ac\uc6a9\ub418\ub294-3\uac00\uc9c0\ub97c-\uc815\ub9ac\ud574-\uc8fc\uc138\uc694-",level:2},{value:"JDBC(Java Database Connectivity)",id:"jdbcjava-database-connectivity",level:3},{value:"DBCP(DataBase Connection Pool)",id:"dbcpdatabase-connection-pool",level:3},{value:"JNDI(Java Naming and Directory Interface)",id:"jndijava-naming-and-directory-interface",level:3},{value:"\uc885\ud569\uc801\uc73c\ub85c",id:"\uc885\ud569\uc801\uc73c\ub85c",level:3},{value:"\uc124\uce58 \ubc0f \uc124\uc815",id:"\uc124\uce58-\ubc0f-\uc124\uc815",level:2},{value:"context.xml \uc0dd\uc131",id:"contextxml-\uc0dd\uc131",level:2},{value:"\ud30c\uc77c \uc2dc\uc2a4\ud15c\uc744 \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131",id:"\ud30c\uc77c-\uc2dc\uc2a4\ud15c\uc744-\uc774\uc6a9\ud558\uc5ec-\uc0dd\uc131",level:3},{value:"IDE\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131",id:"ide\ub97c-\uc774\uc6a9\ud558\uc5ec-\uc0dd\uc131",level:3},{value:"context.xml \uc791\uc131",id:"contextxml-\uc791\uc131",level:2},{value:"Test Code \uc791\uc131",id:"test-code-\uc791\uc131",level:2},{value:"\uc2e4\ud589",id:"\uc2e4\ud589",level:2},{value:"\uc557, \uadfc\ub370 <code>context.xml</code> \uac00 \uacf5\uac1c\uc801\uc73c\ub85c \ub178\ucd9c\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uc5b4\ub5bb\uac8c \ud558\uc8e0? \ud83d\ude28",id:"\uc557-\uadfc\ub370-contextxml-\uac00-\uacf5\uac1c\uc801\uc73c\ub85c-\ub178\ucd9c\ud574\uc57c-\ud558\ub294-\uacbd\uc6b0-\uc5b4\ub5bb\uac8c-\ud558\uc8e0-",level:2}],p={toc:d};function c(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DataBase Connection Pool\uc758 \uc57d\uc790\ub85c \uc0ac\uc6a9\ud55c connection \uac1d\uccb4, Statement \uac1d\uccb4\uc640 \uac19\uc740 \uc790\uc6d0\ub4e4\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \uc0ac\uc6a9\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc774\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Tomcat\uc5d0 \ubbf8\ub9ac DB\uc744 \uc5f0\uacb0\ud574\ub193\uace0, \ud544\uc694\ud560 \ub54c\ub9c8\ub2e4 \ube4c\ub824\uc11c \uc0ac\uc6a9\ud558\uace0 \ubc18\ud658\ud574\uc8fc\ub294 \uac83\uc774\ub2e4.")),(0,i.kt)("p",null,"DBCP\ub97c \uc0ac\uc6a9\ud560 \ub54c \uae30\ubcf8\uc801\uc73c\ub85c ",(0,i.kt)("inlineCode",{parentName:"p"},"JDBC")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"DBCP")," , ",(0,i.kt)("inlineCode",{parentName:"p"},"JNDI")," \uc744 \uc0ac\uc6a9\ud558\uac8c \ub41c\ub2e4."),(0,i.kt)("h2",{id:"\uc0ac\uc6a9\ub418\ub294-3\uac00\uc9c0\ub97c-\uc815\ub9ac\ud574-\uc8fc\uc138\uc694-"},"\uc0ac\uc6a9\ub418\ub294 3\uac00\uc9c0\ub97c \uc815\ub9ac\ud574 \uc8fc\uc138\uc694 \ud83d\ude0f"),(0,i.kt)("h3",{id:"jdbcjava-database-connectivity"},"JDBC(Java Database Connectivity)"),(0,i.kt)("p",null,"Java\uc640 DB\uac00 \ud1b5\uc2e0\ud560 \uc218 \uc788\uac8c \ud574\uc8fc\ub294 API"),(0,i.kt)("h3",{id:"dbcpdatabase-connection-pool"},"DBCP(DataBase Connection Pool)"),(0,i.kt)("p",null,"DB\uc640 \uc5f0\uacb0\ub41c \ucee4\ub125\uc158\uc744 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4\uc11c Pool\uc18d\uc5d0 \uc800\uc7a5\ud574 \ub450\uace0 \uc788\ub2e4\uac00 \ud544\uc694\ud560 \ub54c \ucee4\ub125\uc158\uc744 Pool\uc5d0\uc11c \uc4f0\uace0 \ub2e4\uc2dc \ud480\uc5d0 \ubc18\ud658\ud558\ub294 \uae30\ubc95"),(0,i.kt)("h3",{id:"jndijava-naming-and-directory-interface"},"JNDI(Java Naming and Directory Interface)"),(0,i.kt)("p",null,"\ub124\uc774\ubc0d \ud328\ud0a4\uc9c0\uc758 \ud074\ub798\uc2a4\ub97c \uac00\uc9c0\uace0 \uc774\ub984\uc73c\ub85c \uac1d\uccb4\ub97c \ud68d\ub4dd\ud558\ub294 \uac83 \uac01 \ub370\uc774\ud130\ubca0\uc774\uc2a4\uc5d0 \ub300\ud55c \uc11c\ube44\uc2a4\ub97c \ub514\ub809\ud1a0\ub9ac \ud615\ud0dc\ub85c \ub4f1\ub85d\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\uba85\uba85 \uc11c\ube44\uc2a4 \ubc0f \ub514\ub809\ud1a0\ub9ac \uc11c\ube44\uc2a4\uc5d0 \uc811\uadfc\ud558\uae30 \uc704\ud55c API")),(0,i.kt)("h3",{id:"\uc885\ud569\uc801\uc73c\ub85c"},"\uc885\ud569\uc801\uc73c\ub85c"),(0,i.kt)("p",null,"JDBC\uc73c\ub85c \uc5f0\uacb0\ub41c DB\ub97c DBCP\ub97c \uc774\uc6a9\ud574 Pool\uc18d\uc5d0 \uc800\uc7a5\ud574 \ub450\uace0 \uc788\ub2e4\uac00 \ud544\uc694\ud560 \ub54c JNDI\ub97c \uc774\uc6a9\ud574 \uc4f0\uace0 \ubc18\ud658\ud558\ub294 ",(0,i.kt)("strong",{parentName:"p"},"DB\ucee4\ub125\uc158 \ubc29\ubc95\ub860")," \uc774\ub2e4."),(0,i.kt)("h2",{id:"\uc124\uce58-\ubc0f-\uc124\uc815"},"\uc124\uce58 \ubc0f \uc124\uc815"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JDBC",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\uc774\uc804 \ud68c\ucc28\uc5d0\uc11c DBMS \ub4dc\ub77c\uc774\ubc84 \uc124\uce58 \uc644\ub8cc \ub418\uc5b4\uc788\uc5b4\uc57c\ud568"))),(0,i.kt)("li",{parentName:"ul"},"DBCP",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Tomcat 7.0 \uc774\uc0c1 \ubc84\uc804\uc5d0\uc11c\ub294 Tomcat lib\uc5d0 \ud3ec\ud568\ub418\uc5b4\uc788\uc74c",(0,i.kt)(o.Z,{img:a(88473),mdxType:"ReactIdealImageWithMediumZoom"})))),(0,i.kt)("li",{parentName:"ul"},"JNDI",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"javax.sql")," package \uc0ac\uc6a9")))),(0,i.kt)("h2",{id:"contextxml-\uc0dd\uc131"},"context.xml \uc0dd\uc131"),(0,i.kt)("p",null,"DB Connection\uc2dc \ucc38\uace0\uac00 \ub418\ub294 \ub370\uc774\ud130 \uc774\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"web\\META-INF\\context.xml")," \uc758 \uacbd\ub85c\uc5d0 \uc704\uce58\ud558\uac8c \ub41c\ub2e4."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\ud544\uc694\ud55c \ub514\ub809\ud1a0\ub9ac\uc640 ",(0,i.kt)("inlineCode",{parentName:"strong"},".xml")," \ud30c\uc77c\uc740 IDE\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uace0 \uc9c1\uc811 \uc0dd\uc131\ud574\ub3c4 \ubb38\uc81c\uac00 \uc5c6\ub2e4.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc0c1\uc704 \ud1b0\ucf13\uc5d0\uc11c\ub294 context.xml \ud30c\uc77c\uacfc \uc5f0\ub3d9\ud558\uae30 \uc704\ud574 web.xml\uc744 \uc218\uc815\ud558\uc9c0 \uc54a\uc544\ub3c4 \ub41c\ub2e4."))),(0,i.kt)("h3",{id:"\ud30c\uc77c-\uc2dc\uc2a4\ud15c\uc744-\uc774\uc6a9\ud558\uc5ec-\uc0dd\uc131"},"\ud30c\uc77c \uc2dc\uc2a4\ud15c\uc744 \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"META-INF \ub514\ub809\ud1a0\ub9ac \uc0dd\uc131",(0,i.kt)(o.Z,{img:a(53246),mdxType:"ReactIdealImageWithMediumZoom"})),(0,i.kt)("li",{parentName:"ol"},"context.xml \ud30c\uc77c \uc0dd\uc131",(0,i.kt)(o.Z,{img:a(58586),mdxType:"ReactIdealImageWithMediumZoom"})),(0,i.kt)("li",{parentName:"ol"},"context.xml \uae30\ubcf8 \uc2a4\ud0a4\ub9c8\uc744 \uc791\uc131\ud574 \uc900\ub2e4.",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="context.xml"',title:'"context.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<Context>\n</Context>\n')))),(0,i.kt)("h3",{id:"ide\ub97c-\uc774\uc6a9\ud558\uc5ec-\uc0dd\uc131"},"IDE\ub97c \uc774\uc6a9\ud558\uc5ec \uc0dd\uc131"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\ud504\ub85c\uc81d\ud2b8 \uad6c\uc870 \ud074\ub9ad",(0,i.kt)(o.Z,{img:a(13318),mdxType:"ReactIdealImageWithMediumZoom"})),(0,i.kt)("li",{parentName:"ol"},"\ubaa8\ub4c8\uc5d0\uc11c \ucd94\uac00\ud560\ub824\ub294 ",(0,i.kt)("inlineCode",{parentName:"li"},"\ubaa8\ub4c8")," \ud074\ub9ad \ud6c4 ",(0,i.kt)("inlineCode",{parentName:"li"},"\uc6f9")," \ud074\ub9ad \uc624\ub978\ucabd ",(0,i.kt)("inlineCode",{parentName:"li"},"\uc560\ud50c\ub9ac\ucf00\uc774\uc158 \ubc0f \uc11c\ubc84\ubcc4 \uc124\uba85\uc790 \ucd94\uac00")," \ud074\ub9ad",(0,i.kt)(o.Z,{img:a(53175),mdxType:"ReactIdealImageWithMediumZoom"})),(0,i.kt)("li",{parentName:"ol"},"\uc544\ub798\uc640 \uac19\uc774 \uc124\uc815 \ud6c4 \ud655\uc778 \ud074\ub9ad \uc124\uba85\uc790\uc5d0 ",(0,i.kt)("inlineCode",{parentName:"li"},"Tomcat Context Descriptor")," \uc73c\ub85c \uc801\ud600\uc788\uc74c",(0,i.kt)(o.Z,{img:a(53906),mdxType:"ReactIdealImageWithMediumZoom"})),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"web\\META-INF\\context.xml"),"\uc774 \uc0dd\uae34\uac83\uc744 \ubcfc \uc218 \uc788\ub2e4.",(0,i.kt)(o.Z,{img:a(32794),mdxType:"ReactIdealImageWithMediumZoom"}))),(0,i.kt)("h2",{id:"contextxml-\uc791\uc131"},"context.xml \uc791\uc131"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="context.xml"',title:'"context.xml"'},'<?xml version="1.0" encoding="UTF-8"?>\n<Context>\n    <Resource\n            name="Local-Mysql"                                         // connection pool\uc758 \uc774\ub984(\uc784\uc758\ub85c \ud574\ub3c4 \ub418\uc9c0\ub9cc \ubcf4\ud1b5 \'jdbc/db\uc758 \uc774\ub984\'\uc73c\ub85c \ub9ce\uc774 \ud574\uc900\ub2e4. \uc790\ubc14\uc5d0\uc11c connection pool\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc774 name \uac12\uc744 \ud1b5\ud574 \ud638\ucd9c\n            auth="Container"                                           // \uc778\uc99d\ud558\ub294 \ubd80\ubd84. \uc774 \ud1b0\ucea3 \ucee8\ud14c\uc774\ub108\ub97c connection pool\ub85c \uc0ac\uc6a9\ud558\uaca0\ub2e4\uace0 \uba85\uc2dc\ud574\uc8fc\ub294 \ubd80\ubd84.\n            type="javax.sql.DataSource"                                // connection\uc744 \ub9cc\ub4e4\uc5b4\uc8fc\ub294 \uac1d\uccb4. API.\n            username="Please enter your ID"                            // DB Id\n            password="Please enter your password"                      // DB Pw\n            driverClassName="com.mysql.cj.jdbc.Driver"                 // driver \ud328\ud0a4\uc9c0 \uc774\ub984\n            url="jdbc:mysql://localhost:3306/test?serverTimezone=UTC"  // DB \uacbd\ub85c\n            maxActive="20"                                             // connection pool\uc744 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \ub193\uc744 \uac2f\uc218. \ub9cc\uc57d 4\ub85c \uc124\uc815\ud574\ub193\uace0 \uc804\ubd80 \uc18c\ubaa8\ud55c \ub2e4\uc74c \uc694\uccad\uc774 \ub610 \ub4e4\uc5b4\uc640\ub3c4 \uc5d0\ub7ec\ub294 \ub098\uc9c0 \uc54a\uace0, \ucee8\ud14c\uc774\ub108\uac00 \uc54c\uc544\uc11c \ud558\ub098\ub97c \ub354 \ub9cc\ub4e4\uc5b4\uc900\ub2e4.\n            maxWait="-1"                                               // \ucee8\ud14c\uc774\ub108\uac00 \uc790\ub3d9\uc73c\ub85c connection pool\uc744 \uc0dd\uc131\ud560 \ub54c \uae30\ub2e4\ub9ac\ub294 \uc2dc\uac04. \uc774 \uc2dc\uac04\ub3d9\uc548 \uae30\ub2e4\ub824\ub3c4 resource\uac00 \ubd80\uc871\ud558\uc5ec \uc0c8\ub85c \uc0dd\uc131 \ubabb\ud560 \uc2dc\ub294 \uc5d0\ub7ec \ubc1c\uc0dd\n            maxIdle="10"                                               // \uc0ac\uc6a9\ub418\uc9c0 \uc54a\uace0 \ud480\uc5d0 \uc800\uc7a5\ub420 \uc218 \uc788\ub294 \ucd5c\ub300 \ucee4\ub125\uc158 \uac2f\uc218. \uc74c\uc218\uc77c \uacbd\uc6b0 \uc81c\ud55c\uc774 \uc5c6\uc74c\n    />\n</Context>\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc11c\ubc84 \ub3d9\uae30\ud654 \uc2dc\uac04\uc774 \uc9c0\uc815\ub418\uc9c0 \uc54a\uc73c\uba74 connection\uc5d0 \uc2e4\ud328\ud560 \uc218 \uc788\ub2e4."),(0,i.kt)(o.Z,{img:a(39427),mdxType:"ReactIdealImageWithMediumZoom"}))),(0,i.kt)("h2",{id:"test-code-\uc791\uc131"},"Test Code \uc791\uc131"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'<%@ page contentType="text/html;charset=UTF-8" language="java" %>\n<%@page import="java.sql.*" %>\n<%@page import="javax.sql.*" %>\n<%@page import="javax.naming.*" %>\n<html>\n<head>\n    <title>DataBase Connection Pool</title>\n</head>\n<body>\n<%\n    // \uc5f0\uacb0\uc744 \uc704\ud55c Connection \uac1d\uccb4\n    Connection con = null;\n    // \ud1b5\uc2e0\ud558\uae30 \uc704\ud55c PreparedStatement \uac1d\uccb4\n    PreparedStatement pstmt = null;\n    // select \uacb0\uacfc \uac12\uc744 \ub2f4\uae30 \uc704\ud55c ResultSet \uac1d\uccb4\n    ResultSet rs = null;\n\n    // \uc2e4\uc81c\ub85c DB\uc5d0 \uc811\uadfc\ud558\ub294 \ubd80\ubd84\n    try\n    {\n        // \uc5f0\uacb0\ud558\ub824\ub294 DB\uc774\ub984 (context.xml\uc5d0\uc11c \ud574\ub2f9 \uc774\ub984\uacfc \uc77c\uce58\ud558\ub294 DB \uac00\uc838\uc634)\n        // String dbName = "Server-Mysql";\n        String dbName = "Local-Mysql";\n\n        // Connection Pool\uc744 \ucc3e\ub294 \uacfc\uc815\n        Context init = new InitialContext();\n        // context.xml\uc5d0\uc11c \uc124\uc815\ud55c Resource Name \ubd80\ubd84\n        DataSource ds = (DataSource) init.lookup("java:comp/env/" + dbName);\n        // DataSource\ub85c \ubd80\ud130 Connection\uc744 \uac00\uc838\uc634\n        con = ds.getConnection();\n\n        out.print("DBCP Success");\n        System.out.println("DBCP Success");\n    }\n    catch (Exception ex)\n    {\n        out.print("DBCP Fail");\n        System.out.println("DBCP Fail");\n        System.out.println("Exception: " + ex.getMessage());\n    }\n    finally\n    {\n        // \uc790\uc6d0 \ud574\uc81c\ub294 \ub611\uac19\uc774 \ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4.\n        if (rs != null)\n            rs.close();\n        if (pstmt != null)\n            pstmt.close();\n        if (con != null)\n            con.close();\n    }\n%>\n</body>\n</html>\n')),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"DAO\ub294 Singleton \ud328\ud134\uc73c\ub85c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud55c\ub2e4."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\uc0ac\uc6a9 \ud6c4 \ubc18\ub4dc\uc2dc \ud574\ub2f9 connection\uc744 free \ud574\uc918\uc57c \ud55c\ub2e4."),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"DAO(Data Access Object)\uac00 \uc2e4\ud589\ub420 \ub54c 1\ud68c Connection Pool\uc744 \ucc3e\uace0"),(0,i.kt)("li",{parentName:"ol"},"DAO\uc758 \uba54\uc18c\ub4dc\uac00 \uc2e4\ud589\ub420 \ub584 \ub9c8\ub2e4 DataSource\ub85c \ubd80\ud130 connection\uc744 \uac00\uc838\uc624\uace0 \uba54\uc18c\ub4dc\uac00 \uc885\ub8cc\ub420 \ub54c connection\uc744 free \ud574\uc8fc\ub294 \ud328\ud134\uc73c\ub85c \uc0ac\uc6a9\ub418\uc5b4\uc57c \ud55c\ub2e4. (\ud2b9\uc218 \uc804\ub7b5\uc5d0 \ub530\ub77c \ubc14\ub014 \uc218 \uc788\uc74c)")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://rwd337.tistory.com/23"},"dbcp class \uc608\uc81c \ucf54\ub4dc"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://beaniejoy.tistory.com/24"},"\uc704\uc640 \ube44\uc2b7\ud55c \ucf54\ub4dc")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://jeong-pro.tistory.com/86"},"\uc2f1\uae00\ud1a4 \ubc29\ubc95"))))),(0,i.kt)("h2",{id:"\uc2e4\ud589"},"\uc2e4\ud589"),(0,i.kt)(o.Z,{img:a(60994),mdxType:"ReactIdealImageWithMediumZoom"}),(0,i.kt)("h2",{id:"\uc557-\uadfc\ub370-contextxml-\uac00-\uacf5\uac1c\uc801\uc73c\ub85c-\ub178\ucd9c\ud574\uc57c-\ud558\ub294-\uacbd\uc6b0-\uc5b4\ub5bb\uac8c-\ud558\uc8e0-"},"\uc557, \uadfc\ub370 ",(0,i.kt)("inlineCode",{parentName:"h2"},"context.xml")," \uac00 \uacf5\uac1c\uc801\uc73c\ub85c \ub178\ucd9c\ud574\uc57c \ud558\ub294 \uacbd\uc6b0 \uc5b4\ub5bb\uac8c \ud558\uc8e0? \ud83d\ude28"),(0,i.kt)("p",null,"\ud574\ub2f9 \ud30c\uc77c\uc744 \uadf8\ub798\ub3c4 github\uc5d0 \uacf5\uc720\ud558\uac8c\ub418\uba74 DB \uacc4\uc815\uc815\ubcf4\uac00 \ud3ec\ud568 \ub41c ",(0,i.kt)("inlineCode",{parentName:"p"},"context.xml")," \uc774 \uacf5\uac1c\uc801\uc73c\ub85c \ub178\ucd9c\ub429\ub2c8\ub2e4."),(0,i.kt)("p",null,"\uadf8\ub7fc \ud574\uacb0 \ubc29\ubc95\uc740 \ubb34\uc5c7\uc77c\uae4c\uc694? \ubc29\ubc95\uc740 \ub2e4\uc74c \ucc55\ud130\uc5d0 \uae30\ub85d\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4!"))}c.isMDXComponent=!0},88473:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/1.20ff443.1086.png 1086w",images:[{path:a.p+"assets/ideal-img/1.20ff443.1086.png",width:1086,height:454}],src:a.p+"assets/ideal-img/1.20ff443.1086.png",toString:function(){return a.p+"assets/ideal-img/1.20ff443.1086.png"},placeholder:void 0,width:1086,height:454},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAgUlEQVQImS2MSQ6CQBQF+/638AQQ9RBuRY07V2JEhvA/Qjf0UAbi4qUqtXhmd3pyuDRkRUdedGTnlv2t/0843pX82mMArHYs03dV5lEJbgTvgLS1lWaJiXfd8ihr1CVejVDWQtWPuCUQE1g3YyIgInyqClJkUGFQxU4TMYTtz3vPD0eOlwR24cGHAAAAAElFTkSuQmCC"}},53246:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/2.2e7de2e.1086.png 1086w",images:[{path:a.p+"assets/ideal-img/2.2e7de2e.1086.png",width:1086,height:454}],src:a.p+"assets/ideal-img/2.2e7de2e.1086.png",toString:function(){return a.p+"assets/ideal-img/2.2e7de2e.1086.png"},placeholder:void 0,width:1086,height:454},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAcElEQVQImUWKWwqDMBBFs/9d+FmKiNBF+Nf6gG6gf6LUGo2mmTklQenAmTOPa7LqRdn0XO4DeT1yfQwU7Zuimyi7idvzk2wA3DwyWxtHlsWyuRWRkPazjPOB3XtUFYmIEkQO/zFfiU9BIYWTT2I77j+REpjasIPwgwAAAABJRU5ErkJggg=="}},58586:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/3.f0c8039.1086.png 1086w",images:[{path:a.p+"assets/ideal-img/3.f0c8039.1086.png",width:1086,height:454}],src:a.p+"assets/ideal-img/3.f0c8039.1086.png",toString:function(){return a.p+"assets/ideal-img/3.f0c8039.1086.png"},placeholder:void 0,width:1086,height:454},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAb0lEQVQImV2KSwrCQBBE5/7HyEoIfvESbkTDgBdwF5MYQYZMuvtJTxDBgvpRFarTnUPTsjo/WF976kvHphnYxpFdfHK8vdjHkQAwpTdpmj0iMmOqgJX+RUhZyHk5qVmZzZYs+mNwUZUymh//6HD/ALEOmSeekhlXAAAAAElFTkSuQmCC"}},13318:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/4.7b7de21.312.png 312w",images:[{path:a.p+"assets/ideal-img/4.7b7de21.312.png",width:312,height:418}],src:a.p+"assets/ideal-img/4.7b7de21.312.png",toString:function(){return a.p+"assets/ideal-img/4.7b7de21.312.png"},placeholder:void 0,width:312,height:418},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAACXBIWXMAAAsTAAALEwEAmpwYAAABPklEQVQokVWQzWoUQRRG653cZbrr/7+rq3smsxMDKiTgWwhDEHThGx+pHiNxcVd16n73O2JOV/bn32yfv1OWhg0JFxI+ZtzfCbkgjPPkkilLPYCT1P/NpAyztndwbNnOj7S+EXPhJBXTAGfFwyxR1iFsiOSl07YLLlW0S0zaMxuPjYVQVpQNCO0zl5cfXF9+0r+8kj7d8B9v1Kcb29dX9udf+Ms3RMyV3M60/Urtj0ibOOnAbCOTDuhQsSEjYmmUtlJaY+n9aDjulNqgR9GlIUeZ2SWk9dTWWfqOT+VQcm/r0NbxYbKIoUBZz7qfWbfzoehhVgf4psf6iJiVIeRKXTvSuMPZeHw/ZoDKOOq63bfFfDh9D4+tI0VIrTA+sPSN4VS78A8aaaeRGCxikorYNtb9gnHhuHdEjaZvH4aBP3Cv7Xr1WQh8AAAAAElFTkSuQmCC"}},53175:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/5.cbfbc53.1026.png 1026w",images:[{path:a.p+"assets/ideal-img/5.cbfbc53.1026.png",width:1026,height:845}],src:a.p+"assets/ideal-img/5.cbfbc53.1026.png",toString:function(){return a.p+"assets/ideal-img/5.cbfbc53.1026.png"},placeholder:void 0,width:1026,height:845},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAzElEQVQYlU3NW26DMBCFYe8qLfZ4bGMwkNSpciGRqPrQ/e/hr4BU6sMnzRwdzZiuftOdFsb6hZQHcbyRhor2H8RSd/0RUz5/iMOVlHusV7QdyccncZxJ0+pBHC6YWM64kGlEsT7iNZLbvHFeacRjRTHSViT2OB+2otOIhITVff5jJFckrG/XYkBTpisjMfeEttt2H9u1eMbFgtWA1bRd3eh/CePThNeEcw4ngrw4cXv2Yt6nhcMwcygXDuXK23DDTjPNdMeeFqQuNOOdX8OVjq403CuHAAAAAElFTkSuQmCC"}},53906:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/6.ed0cdab.328.png 328w",images:[{path:a.p+"assets/ideal-img/6.ed0cdab.328.png",width:328,height:184}],src:a.p+"assets/ideal-img/6.ed0cdab.328.png",toString:function(){return a.p+"assets/ideal-img/6.ed0cdab.328.png"},placeholder:void 0,width:328,height:184},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAw0lEQVQImR3MsU7DMBgAYb8QagZa2rR2Etv547jEaapUDFUQCBAjiAHBjsTEMx9qhtO3ncrDSOgGbJtwbUJuB1zs0S6wqQRdViwPz6hKItIEvDQ4aTClpQ4RCRFja0qjuUmPqDompI2YyqFLy84Kkk5Id0TSiG9alsMrysceK4HcVHOXi5V21tR7CutZHV5QxhSYXY6+tF2jS4/r79Ey4L1lXxdsugm1OH2QjW9k4/vs4u6b66c/sumH1fmL7fTJ1cMv/zxCbqqFkeypAAAAAElFTkSuQmCC"}},32794:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/7.53e0f70.711.png 711w",images:[{path:a.p+"assets/ideal-img/7.53e0f70.711.png",width:711,height:209}],src:a.p+"assets/ideal-img/7.53e0f70.711.png",toString:function(){return a.p+"assets/ideal-img/7.53e0f70.711.png"},placeholder:void 0,width:711,height:209},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAZ0lEQVQImS3KWw6CMBRAwW4HbhVq2iIG+6C5JWjc/3KOMXG+x+jrgx4nqew07dSm7KrkWggxEOKCDx4Tk3L2N/6RmdbCtCScc9zmC9ZarAgiglmfhdYPUq5sqXLfMtfZMQwj4z/94hclDTHKs5Z5JgAAAABJRU5ErkJggg=="}},39427:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/8.18f5a4d.270.png 270w",images:[{path:a.p+"assets/ideal-img/8.18f5a4d.270.png",width:270,height:29}],src:a.p+"assets/ideal-img/8.18f5a4d.270.png",toString:function(){return a.p+"assets/ideal-img/8.18f5a4d.270.png"},placeholder:void 0,width:270,height:29},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAABCAYAAADn9T9+AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAALElEQVQImWOwcDL5b2xt8N/YxvC/mb3xfxDf1N7ov7mD8X9TOyMwtnA0/g8ARlgQf38JP8sAAAAASUVORK5CYII="}},60994:(e,t,a)=>{e.exports={src:{srcSet:a.p+"assets/ideal-img/9.b21609e.498.png 498w",images:[{path:a.p+"assets/ideal-img/9.b21609e.498.png",width:498,height:94}],src:a.p+"assets/ideal-img/9.b21609e.498.png",toString:function(){return a.p+"assets/ideal-img/9.b21609e.498.png"},placeholder:void 0,width:498,height:94},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAACCAYAAABhYU3QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAO0lEQVQImYXBOxKAIAxAQe5/RGNGPpLCKgxYpHocgd30/QsbjrkjrXHVyt1f1DpaCirCkzNpzUlEcLIBAQNMVzaRYqMAAAAASUVORK5CYII="}}}]);