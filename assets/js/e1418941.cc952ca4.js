(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5780],{29547:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return l}});var n=a(76687);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var A=n.createContext({}),s=function(e){var t=n.useContext(A),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(A.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,A=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),g=s(a),l=i,m=g["".concat(A,".").concat(l)]||g[l]||d[l]||r;return a?n.createElement(m,o(o({ref:t},c),{},{components:a})):n.createElement(m,o({ref:t},c))}));function l(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=g;var p={};for(var A in t)hasOwnProperty.call(t,A)&&(p[A]=t[A]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},74954:function(e,t,a){"use strict";a.d(t,{Z:function(){return d}});var n=a(15418),i=a(37691),r=a(21136),o=a(86355),p=a(48134),A=a(76687),s="imgContainer_g3cu",c="spacer_xInT";function d(e){var t=(0,r.I)().colorMode,a=(0,A.useRef)(null),d=(0,A.useState)(),g=d[0],l=d[1],m="dark"===t?"rgba(50, 50, 50, 0.8)":"rgba(170, 170, 170, 0.8)";return(0,A.useEffect)((function(){var e=a.current.children[0],t=new MutationObserver((function(e){for(var t,a=(0,n.Z)(e);!(t=a()).done;){var i=t.value;if("attributes"===i.type){var r=(0,p.Z)(i.target.children[0],{margin:20,background:m});l(r)}}}));t.observe(e,{attributes:!0,childList:!0})}),[a]),(0,A.useEffect)((function(){null==g||g.update({background:m})}),[m]),A.createElement("div",{ref:a,className:(0,o.Z)(s,!e.disableSpacer&&c),style:{width:e.width,height:e.height}},A.createElement(i.Z,e))}},89266:function(e,t,a){"use strict";a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return A},metadata:function(){return c},toc:function(){return g}});var n=a(99853),i=a(5309),r=(a(76687),a(29547)),o=a(74954),p=["components"],A={sidebar_position:5,toc_max_heading_level:6,tags:["tomcat","encryption"]},s="Tomcat DB \uacc4\uc815 \uc815\ubcf4 \uc554\ud638\ud654",c={unversionedId:"from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/index",id:"from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/index",title:"Tomcat DB \uacc4\uc815 \uc815\ubcf4 \uc554\ud638\ud654",description:"\uc774\uc804 \ucc55\ud130\ub97c \uc9c0\ub098\uc624\uba74\uc11c JDBC \ub97c \uc774\uc6a9\ud574 DB\ub97c \uc5f0\uacb0\ud588\uc744 \uac83\uc785\ub2c8\ub2e4. \ubb38\uc81c\ub294 \uc5f0\uacb0 \uc815\ubcf4\uc778 context.xml \uac00 Github\uc640 \uac19\uc774 \uc6f9 \uc0c1\uc5d0 \uacf5\uc720\ub418\uba74 \ubcf4\uc548\uc801\uc73c\ub85c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ubbc0\ub85c DB \uacc4\uc815 \uc815\ubcf4\ub97c \uc554\ud638\ud654\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4.",source:"@site/series/from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/index.mdx",sourceDirName:"from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information",slug:"/from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/",permalink:"/series/from-jsp-project-setup-to-deployment/encrypt-tomcat-db-account-information/",draft:!1,tags:[{label:"tomcat",permalink:"/series/tags/tomcat"},{label:"encryption",permalink:"/series/tags/encryption"}],version:"current",lastUpdatedAt:1657040395,formattedLastUpdatedAt:"2022. 7. 5.",sidebarPosition:5,frontMatter:{sidebar_position:5,toc_max_heading_level:6,tags:["tomcat","encryption"]},sidebar:"tutorialSidebar",previous:{title:"DBCP\ub85c DB \uc790\uc6d0 \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud558\uae30",permalink:"/series/from-jsp-project-setup-to-deployment/managing-db-resources-efficiently-with-dbcp/"},next:{title:"war\uc73c\ub85c \ubc30\ud3ec\ud558\uae30",permalink:"/series/from-jsp-project-setup-to-deployment/deploy-as-war/"}},d={},g=[{value:"\uba54\ucee4\ub2c8\uc998",id:"\uba54\ucee4\ub2c8\uc998",level:2},{value:"\uc554\ud638\ud654 &amp; \ubcf5\ud638\ud654 \ucf54\ub4dc \uc0dd\uc131",id:"\uc554\ud638\ud654--\ubcf5\ud638\ud654-\ucf54\ub4dc-\uc0dd\uc131",level:2},{value:"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131",id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131",level:3},{value:"EncryptedDataSourceFactory",id:"encrypteddatasourcefactory",level:3},{value:"Encryptor",id:"encryptor",level:3},{value:"lib \ucd94\uac00",id:"lib-\ucd94\uac00",level:3},{value:"\uc554\ud638\ud654 \ud558\uae30",id:"\uc554\ud638\ud654-\ud558\uae30",level:2},{value:"\ubcf5\ud638\ud654 jar \ucd94\ucd9c",id:"\ubcf5\ud638\ud654-jar-\ucd94\ucd9c",level:2},{value:"jar\uc744 tomcat\uc5d0 \ucd94\uac00",id:"jar\uc744-tomcat\uc5d0-\ucd94\uac00",level:2},{value:"context.xml \uc120\uc5b8",id:"contextxml-\uc120\uc5b8",level:2},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:2}],l={toc:g};function m(e){var t=e.components,A=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},l,A,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tomcat-db-\uacc4\uc815-\uc815\ubcf4-\uc554\ud638\ud654"},"Tomcat DB \uacc4\uc815 \uc815\ubcf4 \uc554\ud638\ud654"),(0,r.kt)("p",null,"\uc774\uc804 \ucc55\ud130\ub97c \uc9c0\ub098\uc624\uba74\uc11c ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC")," \ub97c \uc774\uc6a9\ud574 DB\ub97c \uc5f0\uacb0\ud588\uc744 \uac83\uc785\ub2c8\ub2e4. \ubb38\uc81c\ub294 \uc5f0\uacb0 \uc815\ubcf4\uc778 ",(0,r.kt)("inlineCode",{parentName:"p"},"context.xml")," \uac00 Github\uc640 \uac19\uc774 \uc6f9 \uc0c1\uc5d0 \uacf5\uc720\ub418\uba74 \ubcf4\uc548\uc801\uc73c\ub85c \ubb38\uc81c\uac00 \ubc1c\uc0dd\ud558\ubbc0\ub85c DB \uacc4\uc815 \uc815\ubcf4\ub97c \uc554\ud638\ud654\ud558\ub294 \ubc29\ubc95\uc5d0 \ub300\ud574 \uc18c\uac1c\ud558\ub3c4\ub85d \ud558\uaca0\uc2b5\ub2c8\ub2e4."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("a",{parentName:"p",href:"https://oingdaddy.tistory.com/35"},"Tomcat username / password \uc554\ud638\ud654 (with DataSourceFactory)")," \uae00\uc744 \ucc38\uace0\ud558\uc600\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc2e4\uc2b5\uc774 \uc9c4\ud589\ub41c \ucf54\ub4dc\ub294 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/parkgang/helloworld-tomcat-jndi-encryption"},"parkgang/helloworld-tomcat-jndi-encryption")," \uc5d0\uc11c \ud655\uc778\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"\uba54\ucee4\ub2c8\uc998"},"\uba54\ucee4\ub2c8\uc998"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\uc554\ud638\ud654 \uacc4\uc815 \ucd94\ucd9c"),(0,r.kt)("li",{parentName:"ol"},"\ubcf5\ud638\ud654 \ucf54\ub4dc ",(0,r.kt)("inlineCode",{parentName:"li"},"jar")," \ucd94\ucd9c"),(0,r.kt)("li",{parentName:"ol"},"server\uc5d0 \ubcf5\ud638\ud654 ",(0,r.kt)("inlineCode",{parentName:"li"},"jar")," \uc801\uc6a9")),(0,r.kt)("h2",{id:"\uc554\ud638\ud654--\ubcf5\ud638\ud654-\ucf54\ub4dc-\uc0dd\uc131"},"\uc554\ud638\ud654 & \ubcf5\ud638\ud654 \ucf54\ub4dc \uc0dd\uc131"),(0,r.kt)("h3",{id:"\ud504\ub85c\uc81d\ud2b8-\uc0dd\uc131"},"\ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,r.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \ud504\ub85c\uc81d\ud2b8, \ubaa8\ub4c8, \ud328\ud0a4\uc9c0\ub97c \uc120\uc5b8\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(23983),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\ubc18\ub4dc\uc2dc package\ub97c \ud544\uc694\ub85c \ud558\uc9c0\ub294 \uc54a\uc9c0\ub9cc \ucd94\ud6c4, \ud30c\uc77c\uc744 \ubd88\ub7ec\uc62c\ub54c \ud3b8\ub9ac\ud569\ub2c8\ub2e4."))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EncryptedDataSourceFactory")," \uc640 ",(0,r.kt)("inlineCode",{parentName:"p"},"Encryptor")," \uc744 \ud30c\uc77c\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(99300),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h3",{id:"encrypteddatasourcefactory"},"EncryptedDataSourceFactory"),(0,r.kt)("p",null,"\uc544\ub798\uc758 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="EncryptedDataSourceFactory.java"',title:'"EncryptedDataSourceFactory.java"'},"package secured;\n\nimport java.io.UnsupportedEncodingException;\nimport java.security.InvalidKeyException;\nimport java.security.NoSuchAlgorithmException;\nimport java.sql.SQLException;\nimport java.util.Properties;\nimport javax.crypto.BadPaddingException;\nimport javax.crypto.IllegalBlockSizeException;\nimport javax.crypto.NoSuchPaddingException;\nimport javax.naming.Context;\nimport javax.sql.DataSource;\n\nimport org.apache.tomcat.jdbc.pool.DataSourceFactory;\nimport org.apache.tomcat.jdbc.pool.PoolConfiguration;\nimport org.apache.tomcat.jdbc.pool.XADataSource;\n\npublic class EncryptedDataSourceFactory extends DataSourceFactory {\n    private Encryptor encryptor = null;\n\n    public EncryptedDataSourceFactory() {\n        try {\n            encryptor = new Encryptor(); // If you've used your own secret key, pass it in...\n        } catch (InvalidKeyException | NoSuchAlgorithmException | NoSuchPaddingException | UnsupportedEncodingException e) {\n            System.out.println(\"Error instantiating decryption class.\" + e);\n            throw new RuntimeException(e);\n        }\n    }\n\n    @Override\n    public DataSource createDataSource(Properties properties, Context context, boolean XA) throws InvalidKeyException,\n            IllegalBlockSizeException, BadPaddingException, SQLException, NoSuchAlgorithmException,\n            NoSuchPaddingException {\n        // Here we decrypt our password.\n        PoolConfiguration poolProperties = EncryptedDataSourceFactory.parsePoolProperties(properties);\n        poolProperties.setUsername(encryptor.decrypt(poolProperties.getUsername()));\n        poolProperties.setPassword(encryptor.decrypt(poolProperties.getPassword()));\n        // The rest of the code is copied from Tomcat's DataSourceFactory.\n        if (poolProperties.getDataSourceJNDI() != null && poolProperties.getDataSource() == null) {\n            performJNDILookup(context, poolProperties);\n        }\n        org.apache.tomcat.jdbc.pool.DataSource dataSource = XA ? new XADataSource(poolProperties)\n                : new org.apache.tomcat.jdbc.pool.DataSource(poolProperties);\n        dataSource.createPool();\n        return dataSource;\n    }\n}\n")),(0,r.kt)("h3",{id:"encryptor"},"Encryptor"),(0,r.kt)("p",null,"\uc544\ub798\uc758 \ucf54\ub4dc\ub97c \uc791\uc131\ud569\ub2c8\ub2e4."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Encryptor.java"',title:'"Encryptor.java"'},'package secured;\n\nimport java.io.UnsupportedEncodingException;\nimport java.security.InvalidKeyException;\nimport java.security.Key;\nimport java.security.MessageDigest;\nimport java.security.NoSuchAlgorithmException;\nimport java.util.Arrays;\nimport javax.crypto.BadPaddingException;\nimport javax.crypto.Cipher;\nimport javax.crypto.IllegalBlockSizeException;\nimport javax.crypto.KeyGenerator;\nimport javax.crypto.NoSuchPaddingException;\nimport javax.crypto.spec.SecretKeySpec;\n\npublic class Encryptor {\n    private static final String ALGORITHM = "AES";\n    private static final String defaultSecretKey = "asdfo23jda3sds";\n    private Key secretKeySpec;\n\n    public Encryptor()\n            throws InvalidKeyException, NoSuchAlgorithmException, NoSuchPaddingException, UnsupportedEncodingException {\n        this(null);\n    }\n\n    public Encryptor(String secretKey)\n            throws NoSuchAlgorithmException, NoSuchPaddingException, InvalidKeyException, UnsupportedEncodingException {\n        this.secretKeySpec = generateKey(secretKey);\n    }\n\n    public String encrypt(String plainText) throws InvalidKeyException, NoSuchAlgorithmException,\n            NoSuchPaddingException, IllegalBlockSizeException, BadPaddingException, UnsupportedEncodingException {\n        Cipher cipher = Cipher.getInstance(ALGORITHM);\n        cipher.init(Cipher.ENCRYPT_MODE, secretKeySpec);\n        byte[] encrypted = cipher.doFinal(plainText.getBytes("UTF-8"));\n        return asHexString(encrypted);\n    }\n\n    public String decrypt(String encryptedString) throws InvalidKeyException, IllegalBlockSizeException,\n            BadPaddingException, NoSuchAlgorithmException, NoSuchPaddingException {\n        Cipher cipher = Cipher.getInstance(ALGORITHM);\n        cipher.init(Cipher.DECRYPT_MODE, secretKeySpec);\n        byte[] original = cipher.doFinal(toByteArray(encryptedString));\n        return new String(original);\n    }\n\n    private Key generateKey(String secretKey) throws UnsupportedEncodingException, NoSuchAlgorithmException {\n        if (secretKey == null) {\n            secretKey = defaultSecretKey;\n        }\n        byte[] key = (secretKey).getBytes("UTF-8");\n        MessageDigest sha = MessageDigest.getInstance("SHA-1");\n        key = sha.digest(key);\n        key = Arrays.copyOf(key, 16); // use only the first 128 bit\n        KeyGenerator kgen = KeyGenerator.getInstance("AES");\n        kgen.init(128); // 192 and 256 bits may not be available\n        return new SecretKeySpec(key, ALGORITHM);\n    }\n\n    private final String asHexString(byte buf[]) {\n        StringBuffer strbuf = new StringBuffer(buf.length * 2);\n        int i;\n        for (i = 0; i < buf.length; i++) {\n            if (((int) buf[i] & 0xff) < 0x10) {\n                strbuf.append("0");\n            }\n            strbuf.append(Long.toString((int) buf[i] & 0xff, 16));\n        }\n        return strbuf.toString();\n    }\n\n    private final byte[] toByteArray(String hexString) {\n        int arrLength = hexString.length() >> 1;\n        byte buf[] = new byte[arrLength];\n        for (int ii = 0; ii < arrLength; ii++) {\n            int index = ii << 1;\n            String l_digit = hexString.substring(index, index + 2);\n            buf[ii] = (byte) Integer.parseInt(l_digit, 16);\n        }\n        return buf;\n    }\n\n    public static void main(String[] args) throws Exception {\n        Encryptor aes = new Encryptor(defaultSecretKey);\n        String testid = "testid";\n        System.out.println("Id:" + aes.encrypt(testid));\n        String testpassword = "testpassword";\n        System.out.println("Pw:" + aes.encrypt(testpassword));\n    }\n}\n')),(0,r.kt)("h3",{id:"lib-\ucd94\uac00"},"lib \ucd94\uac00"),(0,r.kt)("p",null,"\uc544\ub9c8 \uc704\uc758 \ud30c\uc77c\uc744 \uc791\uc131\ud558\uba74 \ub9ce\uc740 \uc5d0\ub7ec\uac00 \ubc1c\uc0dd\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774\uc720\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"tomcat-jdbc")," \uc774 \uc5c6\uae30 \ub584\ubb38\uc785\ub2c8\ub2e4."),(0,r.kt)("p",null,"PC\uc5d0 \uc124\uce58\ub41c tomcat\uc758 \uc544\ub798 \uc0ac\uc9c4\uc758 \uacbd\ub85c\uc5d0\uc11c \ud574\ub2f9 \ud30c\uc77c\uc744 \ucd94\uac00\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(57075),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(27233),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(6917),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(35665),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(93343),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(90508),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("p",null,"\uc624\ub958\uac00 \uc5c6\uc5b4\uc9c4 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(75673),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h2",{id:"\uc554\ud638\ud654-\ud558\uae30"},"\uc554\ud638\ud654 \ud558\uae30"),(0,r.kt)("p",null,"\uc0ac\uc6a9\ud560 \uacc4\uc815 \uc554\ud638\ud654\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc544\ub798\uc758 \uac12\uc5d0 \ub530\ub77c\uc11c \uc554\ud638\ud654\ub41c \uacb0\uacfc\uac12\uc774 \uc0dd\uc131\ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc800 \uac12\uc744 \uc54c\uac8c\ub418\uba74 \uac19\uc740 \uc54c\uace0\ub9ac\uc998\uc744 \ud1b5\ud574\uc11c \ubcf5\ud638\ud654\uac00 \uac00\ub2a5\ud558\ubbc0\ub85c ",(0,r.kt)("strong",{parentName:"p"},"\uc808\ub54c, \uacf5\uc720\ub418\uba74 \uc548\ub429\ub2c8\ub2e4.")),(0,r.kt)(o.Z,{img:a(19593),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("p",null,"\ube68\uac04\uc0c9 \ub124\ubaa8\uac12\uc758 \uc554\ud638\ud654\ub41c \uacb0\uacfc \uac12\uc785\ub2c8\ub2e4. \ucd9c\ub825\ub41c \uac12\uc744 ",(0,r.kt)("inlineCode",{parentName:"p"},"context.xml")," \uc5d0 \ub123\uc5b4\uc8fc\uba74 \ub429\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(71624),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h2",{id:"\ubcf5\ud638\ud654-jar-\ucd94\ucd9c"},"\ubcf5\ud638\ud654 jar \ucd94\ucd9c"),(0,r.kt)(o.Z,{img:a(24024),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(49780),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(36184),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)(o.Z,{img:a(36955),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("p",null,"\ube4c\ub4dc\ub41c \uacb0\uacfc\ubb3c\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(54634),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("h2",{id:"jar\uc744-tomcat\uc5d0-\ucd94\uac00"},"jar\uc744 tomcat\uc5d0 \ucd94\uac00"),(0,r.kt)("p",null,"\ubcf5\ud638\ud654 \ud30c\uc77c\uc744 tomcat\uc5d0 \ucd94\uac00\ud558\uc5ec \ubcf5\ud638\ud654\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \ud569\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(39913),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\uc704 \uc0ac\uc9c4\uc744 \ubcf4\uba74 \uc720\ucd94\ud560 \uc218 \uc788\uc9c0\ub9cc \ubcf5\ud638\ud654\uac00 \ud544\uc694\ub85c \ud558\ub294 server pc\uc758 tomcat\uc5d0\ub3c4 \ub123\uc5b4\uc57c\ud569\ub2c8\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","\ud574\ub2f9 \ud30c\uc77c\uc740 git\uc73c\ub85c \uad00\ub9ac\ud558\uc9c0 \uc54a\uace0 \uc11c\ubc84\uc5d0 \uc9c1\uc811 \ub123\ub3c4\ub85d \ud569\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"contextxml-\uc120\uc5b8"},"context.xml \uc120\uc5b8"),(0,r.kt)("p",null,"\uc544\ub798\uc640 \uac19\uc774 \uc554\ud638\ud654\ub41c \uacc4\uc815 \uc815\ubcf4\uc640 \ubcf5\ud638\ud654\uac00 \uac00\ub2a5\ud558\ub3c4\ub85d \uc544\ub798\ucc98\ub7fc \uba85\uc2dc\ud574\uc90d\ub2c8\ub2e4."),(0,r.kt)(o.Z,{img:a(81807),mdxType:"ReactIdealImageWithMediumZoom"}),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"factory\ub294 \ubcf5\ud638\ud654 \ub418\ub294 class \ud30c\uc77c\uc758 \uacbd\ub85c\uc785\ub2c8\ub2e4."))),(0,r.kt)("h2",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,r.kt)("p",null,"\uc774\uc81c \uc548\uc804\ud558\uac8c DB \uc811\uc18d \uc815\ubcf4\ub97c Github\uc640 \uac19\uc774 \ud611\uc5c5\ud558\ub294 \uc7a5\uc18c\uc5d0 \uc62c\ub9b4 \uc218 \uc788\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7ec\ud55c \ubc29\ubc95\uc744 \ubaa8\ub97c \ub54c\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"context.xml")," \uc5d0 ",(0,r.kt)("inlineCode",{parentName:"p"},"attribute")," \ub9cc \uc815\uc758\ud574\ub193\uace0 \ud544\uc694\uc5d0 \ub530\ub77c Local Machine\uc5d0\uc11c Value\ub97c \ub123\uace0 Public \ud558\uac8c \uacf5\uac1c\ub41c \uc7a5\uc18c\uc5d0 Push \ud558\uc9c0 \uc54a\ub294 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc5c8\ub294\ub370 \uc77c\ub2e8 \uadc0\ucc2e\uace0 \ub354 \uc88b\uc740 \ubc29\ubc95\uc740 \uc5c6\ub098? \ub77c\uace0 \uc0dd\uac01\ud574\uac8c \ub429\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc774\ub7f4 \ub54c \ud574\ub2f9 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud574\uc11c \uc190\uc27d\uac8c DB \uc811\uc18d \uc815\ubcf4\ub97c \uad00\ub9ac\ud560 \uc218 \uc788\uc744 \uac83 \uc785\ub2c8\ub2e4."))}m.isMDXComponent=!0},23983:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/1.9e09ee0.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/1.9e09ee0.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/1.9e09ee0.3808.png",toString:function(){return a.p+"assets/ideal-img/1.9e09ee0.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVQImTXMsUoDQRDG8X2a+WZmc9m9XOCSvWyUqGAjWPocFnmTFIJcpc8QUkSs0hwp9VnU41jZgxTD/OZfjLl7eNrF28dv53znvD/PZtU4zvmz92Xny/KrquYvZn1z/xnWm0RECUSJgESE0QCNXUROJqzioV6GxMx/AIaimA5qJ0N2bsycRPXDhHi1r0OTAPwA6EWkZ+Y+G8AvgPzxaOL15rRsYmKRHMZ98eVWazuzaOLzvF68i9pXUduqta2qbbNzU7Vvk2K6/QcqY1OTAZoDgQAAAABJRU5ErkJggg=="}},19593:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/10.1581ed9.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/10.1581ed9.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/10.1581ed9.3808.png",toString:function(){return a.p+"assets/ideal-img/10.1581ed9.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA0ElEQVQImTXMO07DQBSF4VmP7525M/E8PC9bBgWxHgp2QoEUuYI1RClAVGksSlgLxLIuMojik07x64hxf/vQX998ltrPoYvv/6zzm9n58BFifBT1av9Wh5Fzihxi4qZp/kDDAPC7FdFZxNKfUuk5+vbinVtJ4ioRV0BcEfGyxVKpV5FKf4x14J2hL2fdYrRZiGgh0gsAfm+PiPgiyjCecx3YWss5V/Y+cGstE+ktYEBkKdUsulzuXJeetdkdrAuTNu2EUk2AOAHKA0r1RNrc/wD2K1dUMGIT/AAAAABJRU5ErkJggg=="}},71624:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/11.3da3aa3.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/11.3da3aa3.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/11.3da3aa3.3808.png",toString:function(){return a.p+"assets/ideal-img/11.3da3aa3.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVQImU3LPU7DQBCG4T3Pzsx67Ox4vbGTEMSPkCLgLBS5SYpIUapwBpQCRJXGcglngVjWIG8aikdv833m5uFxs7xbfVdx2oZQdTHWXahi56UctRLCV6ji1izunz/nt086KXIV8UrOqbX2AiAViU4m1s0x1o0WRX4O4gdmHqy1A4wAzmmI+GGaxfJtdnWtXuSnFN8zc0/kenLJLxFpxvxups3sJCLqnFNAHN//UGrGeWsmUr64LHsFxB0g7gFpf2myQ6ID58X6D9SaVnE9d5O0AAAAAElFTkSuQmCC"}},24024:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/12.c9fc88f.2072.png 2072w",images:[{path:a.p+"assets/ideal-img/12.c9fc88f.2072.png",width:2072,height:1710}],src:a.p+"assets/ideal-img/12.c9fc88f.2072.png",toString:function(){return a.p+"assets/ideal-img/12.c9fc88f.2072.png"},placeholder:void 0,width:2072,height:1710},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAsElEQVQYlXWOuW7DQAwF96sseUnuJVsrX1BsJG5cpUib/+8m0DqHXaQYkCCHD3TbeiTv3ijzBzbdSPVC2L4goaAh/eKGyyfD/M7r9cpmOqGbMzaekTggISExt+rKOFPqibo/EFLGqyJm96SYW22ipB2aRryFNmjLJeU7qfWLqHmP5fowXMQ/4UnUPCIh3n/6B2fDkVCmdmmpPKE/xIzrJNF5Y9V7VusHek8vSi9Gp4UvsOeMEv5glb4AAAAASUVORK5CYII="}},49780:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/13.ef4dad1.1234.png 1234w",images:[{path:a.p+"assets/ideal-img/13.ef4dad1.1234.png",width:1234,height:866}],src:a.p+"assets/ideal-img/13.ef4dad1.1234.png",toString:function(){return a.p+"assets/ideal-img/13.ef4dad1.1234.png"},placeholder:void 0,width:1234,height:866},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA8UlEQVQYlTXNPU/CQACA4cvRVouJm7OhiKa2B5jYBEvv+6OlQI1xdhD85Yxi3JhoOdMahid5txeIKLlaL80H5uKLUrGpXt+2LYzZJsN0m2H2mSSzGxCGUSSUskwZq4vSSlNYrrSlQv3j0o6nTxoEdyOk8sWhWK5PKl8cqVB1R6quCZdNhCYG3A6CmEl9KFeVLVdVrYuy4VI3TOp6TliTYnKK0FiDYDhCTOpju2xXTCpLuOyc92gyzcEgGD68ZGQ3m+PfZJbuz1JC90oWP8a8fz+HjwRACL1ez7mHECLXdeOW4zix53mxf9mP+/51eAGh/wfOvlnQaR8mvgAAAABJRU5ErkJggg=="}},36184:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/14.00d7201.1556.png 1556w",images:[{path:a.p+"assets/ideal-img/14.00d7201.1556.png",width:1556,height:498}],src:a.p+"assets/ideal-img/14.00d7201.1556.png",toString:function(){return a.p+"assets/ideal-img/14.00d7201.1556.png"},placeholder:void 0,width:1556,height:498},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAADCAYAAACqPZ51AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAbklEQVQImQXB0Q6CIBiAUV4n58opjEqR+IUmZi2sLrrs/R/i6xx1K18u+YOf3wyp0E9PBnng5Y4PC50Z0SaglnVlzpkggsTIKAljLSG/SNsPHTbak6A6F3FL4SwZ7Sb2h4a62mHdlbbPVFqomyN/xsw0liT3QUcAAAAASUVORK5CYII="}},36955:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/15.e84e081.606.png 606w",images:[{path:a.p+"assets/ideal-img/15.e84e081.606.png",width:606,height:302}],src:a.p+"assets/ideal-img/15.e84e081.606.png",toString:function(){return a.p+"assets/ideal-img/15.e84e081.606.png"},placeholder:void 0,width:606,height:302},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAFCAYAAAB8ZH1oAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtUlEQVQImR3D2WrCQBiA0XmXiJmZP7bqmIxKsyAqLrgk4NaCYgveKX2U3qgP0Af9Cj1wVD8fMa8+KLdH1tsj0/UBF3tMGBBJiNg6YjWqObkx/Hwy+bqzuDwYnO6kyyujxTuzzYXh6kw3n6HaLkYkoh5qtLHUgoCi/GZ1/cXvfkj2D1rjG8q5Dq8vDcRaokjQOiQvCsqq4i1LSfOMxCcoYwzWWkTkv9YG3+uTFQPanYTY92i2HH/1+FedRdjyNwAAAABJRU5ErkJggg=="}},54634:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/16.fb7c172.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/16.fb7c172.3808.png",width:3808,height:2256}],src:a.p+"assets/ideal-img/16.fb7c172.3808.png",toString:function(){return a.p+"assets/ideal-img/16.fb7c172.3808.png"},placeholder:void 0,width:3808,height:2256},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA00lEQVQImU2OO47CMBQAfRHA8S927PBxTIAIlmIXiILEXbbYo2yxIh2HQBQgKhpICWfhI/RWCQ3FaKYcNJtMf2PXuySD0dF1XOFst+hGcRFHcdGJxsfIJmfXtn8oyxZ727IQSAOCcOAVArjHAdcoDJMPmKfZAWXpfNPUTfBq+M4we75DG+SuuATJ1Q6l09la+xpInVwZZg+K6ePNN4YZUEy36OtzcghVCMzjIKgAQUTlcqHq18YJJf3Bd2haq0CZpVY614HJTWByKWTJUgq58rn/8w/cM1IkBxGziAAAAABJRU5ErkJggg=="}},39913:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/17.4657cc5.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/17.4657cc5.3808.png",width:3808,height:2256}],src:a.p+"assets/ideal-img/17.4657cc5.3808.png",toString:function(){return a.p+"assets/ideal-img/17.4657cc5.3808.png"},placeholder:void 0,width:3808,height:2256},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3klEQVQImT3MO07DQBSF4VkJdmauZ8bXnvH4ET+CFCEUOca7SZGlUKC4yyIQBYgqTXAJa4FE0Y3iguJrfh0d9rTunpuy+XE2Ozrjxmpej1XZjGVRj2VWHAuXfxdp/sLatv90JiUME+J3nCxaslFCUWgoRkfL+wfqu/7A+q5/s3FyG56Exy/gwySYwSXLlycMU9KgPljXrl9vD9bmv+CJM/gwET6cq3z+p4Qk7ol3tnpcHQwaUqBJcvkv4AFNXSiCGXyxRb3YRBjvA1A71NGACgfUOGipBwlyp6Xe60Bvr3PbU0KBsfFaAAAAAElFTkSuQmCC"}},81807:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/18.f8e772f.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/18.f8e772f.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/18.f8e772f.3808.png",toString:function(){return a.p+"assets/ideal-img/18.f8e772f.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVQImVXMP04CQRSA8bkO783OFjL/3ji7zsBOMAEPY+FNLEyIlZ6BUGisaDZb4lkEsnkEjQXFL1/3iftF91zK/Dvl3MdAQyQanKdBGzsY53pt7N56ehHNrHzFXHhqiYO54XaquJbIgMiIyADAqq53Is+77awU1tYdpcRRIowIMMKfI8CEpaw+xephuVktF0zkf2SlTpW6cqiUuhw/RJO7XUgdU5M4tolv28TxLv/2H8W2F8bRo/Ph3fqw1s6/antlbXx4sz48nQHPcVovcSpU3AAAAABJRU5ErkJggg=="}},99300:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/2.1a37ef5.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/2.1a37ef5.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/2.1a37ef5.3808.png",toString:function(){return a.p+"assets/ideal-img/2.1a37ef5.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAtklEQVQImWXNMQrCMBTG8Vwn771Ya2vTNklttVjP4+BNHARx0jOIg+LkUjrqWbQikVQHweHHx4M/PFZWs2VeVjelTZ0q3cSJauI4aYaRdOpIyquMkxVTeXk246n1g6FFRAsOQLfdDWBJiAtLlDnoUWEHQdhyzl+I2AEAt60Lkejkwr0ejV1455w/AeDX4xsemc7yS1ZMbBB+XhPRHyF6NUtNNk9NtvP8wRqRNkji15pEb+v1/cUbfo9WGZ3M+bAAAAAASUVORK5CYII="}},57075:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/3.f7ad883.1584.png 1584w",images:[{path:a.p+"assets/ideal-img/3.f7ad883.1584.png",width:1584,height:1084}],src:a.p+"assets/ideal-img/3.f7ad883.1584.png",toString:function(){return a.p+"assets/ideal-img/3.f7ad883.1584.png"},placeholder:void 0,width:1584,height:1084},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9ElEQVQYlR3IzU6DQBSG4bkAGOxldGPiSmuN4acz5zAz0BJAhFolobpxq8boBWCi96rsKlqPgcWTN9/HfF8e5hdX78qkbSBMKyB+G+GyXQjdxkXzEa7KI+bq8jbbvlDavFJSP1O0eSK9fiRVPYyGHWX1PUNU10VRkVLLHWLUI5oeYKCH7gA0Bb5oGEi4ydKMEMJfKXAPAv9GEvcgwx8pgE5n8y3TytRVuaYkySiOVhSZJRkdU4hmBKDobH5+x2QgLvM0/1bKfIHEDmTYSYGd7y06zw0+PTfoT45nG2ZZts05n04OJlNu85HjOKPh59yZWpZl/wOkVGiof1FKnwAAAABJRU5ErkJggg=="}},27233:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/4.b69849c.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/4.b69849c.3808.png",width:3808,height:2256}],src:a.p+"assets/ideal-img/4.b69849c.3808.png",toString:function(){return a.p+"assets/ideal-img/4.b69849c.3808.png"},placeholder:void 0,width:3808,height:2256},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA3UlEQVQImT3MPU7DMBiAYZ+EtP79YseOk6bOjwQDVGnwbRg4CgNqth4CMYCYupSMcBZoVX2oHRie7dVL7tfDUxvab+/Kvbd+qpfNVId2ClUzhXK5r4rqqyoWz6Tv44e3Beo0R3pF0WmHzuRoUos2tXjd3WAc4o7EIb66LD+HB5bQE5/xCzEXp9L5QwYGtTLvZOjXL+eDc4sfnrAjn/ELlrBjqO9+lXTIEvpGVrerndUWFQeUVP4TVKBJc5QMkM/5J+ma7sHobCu42mgwo1Z61KBHkDAqLjYgYQsCHv8AcyZTSSl83QIAAAAASUVORK5CYII="}},6917:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/5.ba627d1.1364.png 1364w",images:[{path:a.p+"assets/ideal-img/5.ba627d1.1364.png",width:1364,height:1568}],src:a.p+"assets/ideal-img/5.ba627d1.1364.png",toString:function(){return a.p+"assets/ideal-img/5.ba627d1.1364.png"},placeholder:void 0,width:1364,height:1568},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAALCAYAAABGbhwYAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVQYlVWPS2vkMBCE/XfCQgiTx/gl62FZsmxZsTOPTDKQPSwse8j/v37BntMeCrqri66qzE4HpJ+p+k8KfyV3V/buig1HemeRSqFsR6ZcIC7vpMs/VPxN0X1Qdh/Y5Q/x8k0z/aU0r2Sy7TDWMaVIHzxVXSGlwI2RdPrCDGcKYckqISmFJIyJ1gVqaRCqxQ0jp/czU0rkRUlWS03VKEKc8MO4zSvX+p75cMQPkbKWZOthRUwzaX7D+oA0FteHjdPWUVTV/8JheqV1PY1u0Z1jOZy2va7FTbhapeWA9f2Wt24U2g+8nS+EmHh+2ZOtZCkUY5rpx4hQmkYZGutQxqCVJi/q20ehDMvxxBATQurNep8X3P+6Y/fwwONud2u9woVxK6Jth2o7XvKc56dHmtVBKn4AR67F/MAaVCcAAAAASUVORK5CYII="}},35665:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/6.3b1a31c.732.png 732w",images:[{path:a.p+"assets/ideal-img/6.3b1a31c.732.png",width:732,height:416}],src:a.p+"assets/ideal-img/6.3b1a31c.732.png",toString:function(){return a.p+"assets/ideal-img/6.3b1a31c.732.png"},placeholder:void 0,width:732,height:416},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAp0lEQVQImV3KSwrCMAAA0dzKT9M0TRoxak3b9LcRFDyJoOBGvfGIogtdPGYzwsUdYTzgygHtI9IF0kWFWja47YAre4qyR0ybE5vjDb9/UOzuyOHKrLsway9M4plpPL8r5tpjw4gPA9Y35MuaJF8x/yNkpliHmq5tqeuK3FqSNEUq9UOY1YZtN1I1LVXsWJeBzBQkSiOznORDSG1ITYF6VRsyY9/9jl9P3MBvxFyHdTQAAAAASUVORK5CYII="}},93343:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/7.011b44a.2066.png 2066w",images:[{path:a.p+"assets/ideal-img/7.011b44a.2066.png",width:2066,height:1698}],src:a.p+"assets/ideal-img/7.011b44a.2066.png",toString:function(){return a.p+"assets/ideal-img/7.011b44a.2066.png"},placeholder:void 0,width:2066,height:1698},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAlElEQVQYlWWOyw7CIBBF+S47T0pr0CZuujHGb/D/V9cALdZ0cQITztxLmG4r4v2JuLxB4jAfoT6C1TskhjCvH2h+QVPGII5BrKHbXR0XVoQpP8CWQKKgsr0LG21WBI4L2K8gLQ9NlK2+nFUsiTIuIJvr1lHc6SJ3sSUea3/V1kT2/8TTX1kQJGaQpVNSgS3W+sFnfAHWEYvhMyMaqgAAAABJRU5ErkJggg=="}},90508:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/8.1f9ac40.2570.png 2570w",images:[{path:a.p+"assets/ideal-img/8.1f9ac40.2570.png",width:2570,height:1910}],src:a.p+"assets/ideal-img/8.1f9ac40.2570.png",toString:function(){return a.p+"assets/ideal-img/8.1f9ac40.2570.png"},placeholder:void 0,width:2570,height:1910},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAHCAYAAAAxrNxjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVQYlTXOzUrDQBQF4HkGIyKIM5PMvUmn+cWNMdXUpEQs1ra68X1calcKurEL3Ym7ir6IuAh9EC1tciUFFx/nbA4c1k2zdhjsfbW1N0eFJaJTem5QOrYuQeEcFH6jhRE7H148nBR9iryQXG+fnKAgL8pIhwWB5VKgfVISntno8uq+lxVk7loL23KqBkisxI6sjpJ0Mbm5pSTuTNlgMLzLj3ukBCxBYt1A066VgDpwo+XhQUoOtJ7YeDR+zLs5KQ4/aNqrfyBx5bX8X18HZCvnhZ2d9q+TuNOsmi8EEte57iZQW0dku/GEGYaxKYT5yrn85FzMOBfvDSHkTErzg0v1tmFsbf8BL5BfDo/kNksAAAAASUVORK5CYII="}},75673:function(e,t,a){e.exports={src:{srcSet:a.p+"assets/ideal-img/9.5419259.3808.png 3808w",images:[{path:a.p+"assets/ideal-img/9.5419259.3808.png",width:3808,height:2258}],src:a.p+"assets/ideal-img/9.5419259.3808.png",toString:function(){return a.p+"assets/ideal-img/9.5419259.3808.png"},placeholder:void 0,width:3808,height:2258},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA1UlEQVQImS2NO07EMBRFvR38eU5iP38SOyYBjVgPBTuhQBpNNbMGRAGimiZKCWuBiaKHAhRHtzm6hw27u8d+3H1ejzdTLsMcQpx9iDOimy26CZ3/8CE+sX68fU9lII9IzgUCDcSFIPEP55yUUmcWU35pc09NVV2MaVZd6VVrvQLAKqW6bDIAvLE2l+eYerJov7quW5yPi0VcAGARQnz/PcIrS2U4d7lQYwyh82SMpbpuSEpFUsrfPGg9sdCmexfak1Sw51wcrjg/bCuk2thLpY5VXT/8ABfsVzvI+PrDAAAAAElFTkSuQmCC"}}}]);