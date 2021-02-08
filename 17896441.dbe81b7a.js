(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{79:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(23),c=a(80),o=a(21),i=a(84),s=a(83);var m=function(e){const{metadata:t}=e;return null},d=a(82);var u=function(){const{siteConfig:{title:e}}=Object(o.default)(),{pluginId:t}=Object(d.useActivePlugin)({failfast:!0}),{savePreferredVersionName:a}=Object(c.useDocsPreferredVersion)(t),n=Object(d.useActiveVersion)(t),{latestDocSuggestion:r,latestVersionSuggestion:i}=Object(d.useDocVersionSuggestions)(t);if(!i)return l.a.createElement(l.a.Fragment,null);const m=null!=r?r:(u=i).docs.find((e=>e.id===u.mainDocId));var u;return l.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===n.name?l.a.createElement("div",null,"This is unreleased documentation for ",e," ",l.a.createElement("strong",null,n.label)," version."):l.a.createElement("div",null,"This is documentation for ",e," ",l.a.createElement("strong",null,n.label),", which is no longer actively maintained."),l.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",l.a.createElement("strong",null,l.a.createElement(s.a,{to:m.path,onClick:()=>a(i.name)},"latest version"))," ","(",i.label,")."))},E=a(81);var g=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const o=document.getElementsByClassName(e);for(;a<o.length&&!c;){const e=o[a],{href:i}=e,s=decodeURIComponent(i.substring(i.indexOf("#")+1));n.id===s&&(l&&l.classList.remove(t),e.classList.add(t),r(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},f=a(64),v=a.n(f);const b="table-of-contents__link";function p({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:b,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(p,{isChild:!0,toc:e.children}))))):null}var h=function({toc:e}){return g(b,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(E.a)(v.a.tableOfContents,"thin-scrollbar")},l.a.createElement(p,{toc:e}))},N=a(3),O=a(65),w=a.n(O);var j=({className:e,...t})=>l.a.createElement("svg",Object(N.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(E.a)(w.a.iconEdit,e)},t),l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),y=a(66),C=a.n(y);t.default=function(e){const{siteConfig:t}=Object(o.default)(),{url:a}=t,{content:n}=e,{metadata:s,frontMatter:{image:g,keywords:f,hide_title:v,hide_table_of_contents:b}}=n,{description:p,title:N,permalink:O,editUrl:w,lastUpdatedAt:y,lastUpdatedBy:_}=s,{pluginId:k}=Object(d.useActivePlugin)({failfast:!0}),L=Object(d.useVersions)(k),I=Object(d.useActiveVersion)(k),A=L.length>1,S=Object(c.useTitleFormatter)(N),V=Object(i.a)(g,{absolute:!0});return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("title",null,S),l.a.createElement("meta",{property:"og:title",content:S}),p&&l.a.createElement("meta",{name:"description",content:p}),p&&l.a.createElement("meta",{property:"og:description",content:p}),f&&f.length&&l.a.createElement("meta",{name:"keywords",content:f.join(",")}),g&&l.a.createElement("meta",{property:"og:image",content:V}),g&&l.a.createElement("meta",{name:"twitter:image",content:V}),g&&l.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${N}`}),O&&l.a.createElement("meta",{property:"og:url",content:a+O}),O&&l.a.createElement("link",{rel:"canonical",href:a+O})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:Object(E.a)("col",{[C.a.docItemCol]:!b})},l.a.createElement(u,null),l.a.createElement("div",{className:C.a.docItemContainer},l.a.createElement("article",null,A&&l.a.createElement("div",null,l.a.createElement("span",{className:"badge badge--secondary"},"Version: ",I.label)),!v&&l.a.createElement("header",null,l.a.createElement("h1",{className:C.a.docTitle},N)),l.a.createElement("div",{className:"markdown"},l.a.createElement(n,null))),(w||y||_)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},w&&l.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(j,null),"Edit this page")),(y||_)&&l.a.createElement("div",{className:"col text--right"},l.a.createElement("em",null,l.a.createElement("small",null,"Last updated"," ",y&&l.a.createElement(l.a.Fragment,null,"on"," ",l.a.createElement("time",{dateTime:new Date(1e3*y).toISOString(),className:C.a.docLastUpdatedAt},new Date(1e3*y).toLocaleDateString()),_&&" "),_&&l.a.createElement(l.a.Fragment,null,"by ",l.a.createElement("strong",null,_)),!1))))),l.a.createElement("div",{className:"margin-vert--lg"},l.a.createElement(m,{metadata:s})))),!b&&n.toc&&l.a.createElement("div",{className:"col col--3"},l.a.createElement(h,{toc:n.toc}))))}}}]);