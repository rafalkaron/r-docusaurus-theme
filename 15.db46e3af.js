(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{110:function(e,t,a){"use strict";var l=a(3),r=a(0),o=a.n(r),n=a(82),c=a(87),s=a(81),m=a(86);a(55);function i({to:e,href:t,label:a,prependBaseUrlToHref:r,...n}){const s=Object(m.a)(e),i=Object(m.a)(t,{forcePrependBaseUrl:!0});return o.a.createElement(c.a,Object(l.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:r?i:t}:{to:s},n),a)}t.a=function(){const{footer:e}=Object(s.useThemeConfig)(),{copyright:t,links:a=[],logo:l={}}=e||{};return e?o.a.createElement("footer",{className:Object(n.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},a&&a.length>0&&o.a.createElement("div",{className:"row footer__links"},a.map(((e,t)=>o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(i,e))))):null)))),(l||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}}}]);