(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{124:function(e,t,n){"use strict";const a=(e,{target:t=document.body}={})=>{const n=document.createElement("textarea"),a=document.activeElement;n.value=e,n.setAttribute("readonly",""),n.style.contain="strict",n.style.position="absolute",n.style.left="-9999px",n.style.fontSize="12pt";const r=document.getSelection();let o=!1;r.rangeCount>0&&(o=r.getRangeAt(0)),t.append(n),n.select(),n.selectionStart=0,n.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch(c){}return n.remove(),o&&(r.removeAllRanges(),r.addRange(o)),a&&a.focus(),l};e.exports=a,e.exports.default=a},125:function(e,t){function n(e){let t,n=[];for(let a of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(a))n.push(parseInt(a,10));else if(t=a.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,a,r,o]=t;if(a&&o){a=parseInt(a),o=parseInt(o);const e=a<o?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(o+=e);for(let t=a;t!==o;t+=e)n.push(t)}}return n}t.default=n,e.exports=n},126:function(e,t,n){"use strict";var a={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},r=n(102),o=n(81);t.a=()=>{const{prism:e}=Object(o.useThemeConfig)(),{isDarkTheme:t}=Object(r.a)(),n=e.theme||a,l=e.darkTheme||n;return t?l:n}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(22),r={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},o=n(0),l={Prism:a.a,theme:r};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},p=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},m=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=i({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=i({},n,{backgroundColor:null}),r};function d(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var b=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?m(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=i({},d(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?i({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),c(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),c(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=i({},d(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?i({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],i=[c];l>-1;){for(;(o=a[l]++)<r[l];){var m=void 0,d=t[l],b=n[l][o];if("string"==typeof b?(d=l>0?d:["plain"],m=b):(d=p(d,b.type),b.alias&&(d=p(d,b.alias)),m=b.content),"string"==typeof m){var y=m.split(s),f=y.length;c.push({types:d,content:y[0]});for(var h=1;h<f;h++)u(c),i.push(c=[]),c.push({types:d,content:y[h]})}else l++,t.push(d),n.push(m),a.push(0),r.push(m.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return u(c),i}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);t.a=b},80:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(83),l=n(21),c=n(24),i=n(111),s=n(3),u=n(82),p=n(81),m=n(103),d=n(107),b=n(108),y=n(106),f=n(87),h=n(88),g=n(112);var v=e=>r.a.createElement("svg",Object(s.a)({width:"20",height:"20",role:"img"},e),r.a.createElement("g",{fill:"#7a7a7a"},r.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),r.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),O=n(109),j=n(66),k=n.n(j);const E=(e,t)=>"link"===e.type?Object(p.isSamePath)(e.href,t):"category"===e.type&&e.items.some((e=>E(e,t)));function C({item:e,onItemClick:t,collapsible:n,activePath:o,...l}){const{items:c,label:i}=e,p=E(e,o),m=function(e){const t=Object(a.useRef)(e);return Object(a.useEffect)((()=>{t.current=e}),[e]),t.current}(p),[d,b]=Object(a.useState)((()=>!!n&&(!p&&e.collapsed))),y=Object(a.useRef)(null),[f,h]=Object(a.useState)(void 0),g=(e=!0)=>{var t;h(e?`${null===(t=y.current)||void 0===t?void 0:t.scrollHeight}px`:void 0)};Object(a.useEffect)((()=>{p&&!m&&d&&b(!1)}),[p,m,d]);const v=Object(a.useCallback)((e=>{e.preventDefault(),f||g(),setTimeout((()=>b((e=>!e))),100)}),[f]);return 0===c.length?null:r.a.createElement("li",{className:Object(u.a)("menu__list-item",{"menu__list-item--collapsed":d}),key:i},r.a.createElement("a",Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&p,[k.a.menuLinkText]:!n}),onClick:n?v:void 0,href:n?"#!":void 0},l),i),r.a.createElement("ul",{className:"menu__list",ref:y,style:{height:f},onTransitionEnd:()=>{d||g(!1)}},c.map((e=>r.a.createElement(P,{tabIndex:d?"-1":"0",key:e.label,item:e,onItemClick:t,collapsible:n,activePath:o})))))}function N({item:e,onItemClick:t,activePath:n,collapsible:a,...o}){const{href:l,label:c}=e,i=E(e,n);return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(f.a,Object(s.a)({className:Object(u.a)("menu__link",{"menu__link--active":i}),to:l},Object(h.a)(l)?{isNavLink:!0,exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"},o),c))}function P(e){switch(e.item.type){case"category":return r.a.createElement(C,e);case"link":default:return r.a.createElement(N,e)}}var S=function({path:e,sidebar:t,sidebarCollapsible:n=!0,onCollapse:o,isHidden:l}){const[c,i]=Object(a.useState)(!1),{navbar:{hideOnScroll:s},hideableSidebar:f}=Object(p.useThemeConfig)(),{isAnnouncementBarClosed:h}=Object(m.a)(),{scrollY:j}=Object(y.a)();Object(d.a)(c);const E=Object(b.a)();return Object(a.useEffect)((()=>{E===b.b.desktop&&i(!1)}),[E]),r.a.createElement("div",{className:Object(u.a)(k.a.sidebar,{[k.a.sidebarWithHideableNavbar]:s,[k.a.sidebarHidden]:l})},s&&r.a.createElement(g.a,{tabIndex:-1,className:k.a.sidebarLogo}),r.a.createElement("div",{className:Object(u.a)("menu","menu--responsive","thin-scrollbar",k.a.menu,{"menu--show":c,[k.a.menuWithAnnouncementBar]:!h&&0===j})},r.a.createElement("button",{"aria-label":c?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{i(!c)}},c?r.a.createElement("span",{className:Object(u.a)(k.a.sidebarMenuIcon,k.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(O.a,{className:k.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},t.map((t=>r.a.createElement(P,{key:t.label,item:t,onItemClick:e=>{e.target.blur(),i(!1)},collapsible:n,activePath:e}))))),f&&r.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(u.a)("button button--secondary button--outline",k.a.collapseSidebarButton),onClick:o},r.a.createElement(v,{className:k.a.collapseSidebarButtonIcon})))},T=n(123),w=(n(68),n(69)),x=n.n(w);var _=e=>function({id:t,...n}){const{navbar:{hideOnScroll:a}}=Object(p.useThemeConfig)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(u.a)("anchor",{[x.a.enhancedAnchor]:!a}),id:t}),n.children,r.a.createElement("a",{className:"hash-link",href:`#${t}`,title:"Direct link to heading"},"#")):r.a.createElement(e,n)},D=n(70),I=n.n(D);var L={code:e=>{const{children:t}=e;return"string"==typeof t?t.includes("\n")?r.a.createElement(T.a,e):r.a.createElement("code",e):t},a:e=>r.a.createElement(f.a,e),pre:e=>r.a.createElement("div",Object(s.a)({className:I.a.mdxCodeBlock},e)),h1:_("h1"),h2:_("h2"),h3:_("h3"),h4:_("h4"),h5:_("h5"),h6:_("h6")},M=n(113),A=n(85),R=n(71),H=n.n(R);function B({currentDocRoute:e,versionMetadata:t,children:n}){var c,s;const{siteConfig:m,isClient:d}=Object(l.default)(),{pluginId:b,permalinkToSidebar:y,docsSidebars:f,version:h}=t,g=y[e.path],O=f[g],[j,k]=Object(a.useState)(!1),[E,C]=Object(a.useState)(!1),N=Object(a.useCallback)((()=>{E&&C(!1),k(!j)}),[E]);return r.a.createElement(i.a,{key:d,searchMetadatas:{version:h,tag:Object(p.docVersionSearchTag)(b,h)}},r.a.createElement("div",{className:H.a.docPage},O&&r.a.createElement("div",{className:Object(u.a)(H.a.docSidebarContainer,{[H.a.docSidebarContainerHidden]:j}),onTransitionEnd:e=>{e.currentTarget.classList.contains(H.a.docSidebarContainer)&&j&&C(!0)},role:"complementary"},r.a.createElement(S,{key:g,sidebar:O,path:e.path,sidebarCollapsible:null===(c=null===(s=m.themeConfig)||void 0===s?void 0:s.sidebarCollapsible)||void 0===c||c,onCollapse:N,isHidden:E}),E&&r.a.createElement("div",{className:H.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:N,onClick:N},r.a.createElement(v,null))),r.a.createElement("main",{className:H.a.docMainContainer},r.a.createElement("div",{className:Object(u.a)("container padding-vert--lg",H.a.docItemWrapper,{[H.a.docItemWrapperEnhanced]:j})},r.a.createElement(o.a,{components:L},n)))))}t.default=function(e){const{route:{routes:t},versionMetadata:n,location:a}=e,o=t.find((e=>Object(A.matchPath)(a.pathname,e)));return o?r.a.createElement(B,{currentDocRoute:o,versionMetadata:n},Object(c.a)(t)):r.a.createElement(M.default,e)}},83:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?r.a.createElement(b,c(c({ref:t},s),{},{components:n})):r.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);