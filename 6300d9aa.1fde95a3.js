(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),a=n(7),o=(n(0),n(83)),i={id:"site-content",title:"Site content"},c={unversionedId:"site-content",id:"site-content",isDocsHomePage:!1,title:"Site content",description:"You manage the content on your site by authoring Markdown files and editing the sidebars.js file.",source:"@site/docs/content_site_content.md",slug:"/site-content",permalink:"r-docusaurus-theme/site-content",version:"current",sidebar:"sidebar",previous:{title:"Theme configuration",permalink:"r-docusaurus-theme/r-docusaurus-theme-configuration"},next:{title:"Markdown style guide",permalink:"r-docusaurus-theme/style-guide"}},l=[{value:"Creating content",id:"creating-content",children:[]},{value:"Linking to content in the sidebar",id:"linking-to-content-in-the-sidebar",children:[]}],b={toc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You manage the content on your site by authoring Markdown files and editing the ",Object(o.b)("inlineCode",{parentName:"p"},"sidebars.js")," file."),Object(o.b)("h2",{id:"creating-content"},"Creating content"),Object(o.b)("p",null,"You add content by developing Markdown files."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to your site directory."),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"docs/")," directory, create a Markdown (MD) file.",Object(o.b)("br",{parentName:"li"}),Object(o.b)("strong",{parentName:"li"},"Example:")," ",Object(o.b)("inlineCode",{parentName:"li"},"Installing my solution")),Object(o.b)("li",{parentName:"ol"},"Open the MD file and create a front matter.",Object(o.b)("br",{parentName:"li"}),"For more information about front matters, see ",Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/docs-introduction"},"Docusaurus - Docs introduction"),".",Object(o.b)("br",{parentName:"li"}),Object(o.b)("strong",{parentName:"li"},"Example:"),"  ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"---\nid: installing-my-solution\ntitle: Installing my solution\n---\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"Below the header, add your MD content.",Object(o.b)("br",{parentName:"li"}),"For more information about authoring in Markdown, see the ",Object(o.b)("a",{parentName:"li",href:"r-docusaurus-theme/style-guide"},"Markdown Style Guide")," and ",Object(o.b)("a",{parentName:"li",href:"r-docusaurus-theme/mdx"},"MDX"),"."),Object(o.b)("li",{parentName:"ol"},"Save the MD file.")),Object(o.b)("h2",{id:"linking-to-content-in-the-sidebar"},"Linking to content in the sidebar"),Object(o.b)("p",null,"You add links to the pane on the left by referring to the Markdown (MD) files IDs."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Navigate to your site directory."),Object(o.b)("li",{parentName:"ol"},"In the ",Object(o.b)("inlineCode",{parentName:"li"},"docs")," directory, open the MD file that you want to link in the sidebar."),Object(o.b)("li",{parentName:"ol"},"From the MD file front matter, copy the ",Object(o.b)("inlineCode",{parentName:"li"},"id")," value.",Object(o.b)("br",{parentName:"li"}),Object(o.b)("strong",{parentName:"li"},"Example:"),"  ")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"---\nid: installing-my-solution\ntitle: Installing my solution\n---\n")),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"In the root directory of your site, open the ",Object(o.b)("inlineCode",{parentName:"li"},"sidebars.js")," file."),Object(o.b)("li",{parentName:"ol"},"In a relevant place, paste the ",Object(o.b)("inlineCode",{parentName:"li"},"id")," value.",Object(o.b)("br",{parentName:"li"}),"For more information, see ",Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/sidebar#linking-to-a-doc-page"},"Docusaurus - Linking to a doc page"),"."),Object(o.b)("li",{parentName:"ol"},"Save the ",Object(o.b)("inlineCode",{parentName:"li"},"sidebars.js")," file.")))}u.isMDXComponent=!0},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),u=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,m=s["".concat(i,".").concat(d)]||s[d]||p[d]||o;return n?a.a.createElement(m,c(c({ref:t},b),{},{components:n})):a.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var b=2;b<o;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);