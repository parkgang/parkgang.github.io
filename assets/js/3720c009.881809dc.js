"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3751],{56951:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(76687),r=n(86355),l=n(31086),c=n(82524),u=n(98551),s=n(15592),o=n(67495),i=n(99550);function m(e){var t=e.tags,n=(0,l.M)();return a.createElement(c.FG,{className:(0,r.Z)(u.k.wrapper.docsPages,u.k.page.docsTagsListPage)},a.createElement(c.d,{title:n}),a.createElement(i.Z,{tag:"doc_tags_list"}),a.createElement(s.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("h1",null,n),a.createElement(o.Z,{tags:t}))))))}},97117:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(76687),r=n(86355),l=n(2221),c="tag_ImTa",u="tagRegular_fIfg",s="tagWithCount_Ukqj";function o(e){var t=e.permalink,n=e.label,o=e.count;return a.createElement(l.Z,{href:t,className:(0,r.Z)(c,o?s:u)},n,o&&a.createElement("span",null,o))}},67495:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(76687),r=n(31086),l=n(97117),c="tag_xPK1";function u(e){var t=e.letterEntry;return a.createElement("article",null,a.createElement("h2",null,t.letter),a.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return a.createElement("li",{key:e.permalink,className:c},a.createElement(l.Z,e))}))),a.createElement("hr",null))}function s(e){var t=e.tags,n=(0,r.P)(t);return a.createElement("section",{className:"margin-vert--lg"},n.map((function(e){return a.createElement(u,{key:e.letter,letterEntry:e})})))}},31086:function(e,t,n){n.d(t,{M:function(){return r},P:function(){return l}});var a=n(56153),r=function(){return(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"})};function l(e){var t={};return Object.values(e).forEach((function(e){var n=function(e){return e[0].toUpperCase()}(e.label);null!=t[n]||(t[n]=[]),t[n].push(e)})),Object.entries(t).sort((function(e,t){var n=e[0],a=t[0];return n.localeCompare(a)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}}}]);