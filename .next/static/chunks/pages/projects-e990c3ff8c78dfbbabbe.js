(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{7375:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r.d(t,{Z:function(){return n}})},6071:function(e,t,r){"use strict";var n=r(3038),o=r(862);t.default=void 0;var a=o(r(7294)),l=r(1689),c=r(2441),i=r(5749),s={};function u(e,t,r,n){if(e&&(0,l.isLocalURL)(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,r=(0,c.useRouter)(),o=r&&r.asPath||"/",f=a.default.useMemo((function(){var t=(0,l.resolveHref)(o,e.href,!0),r=n(t,2),a=r[0],c=r[1];return{href:a,as:e.as?(0,l.resolveHref)(o,e.as):c||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,m=e.shallow,b=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var x=a.Children.only(v),y=x&&"object"===typeof x&&x.ref,j=(0,i.useIntersection)({rootMargin:"200px"}),w=n(j,2),k=w[0],N=w[1],E=a.default.useCallback((function(e){k(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,k]);(0,a.useEffect)((function(){var e=N&&t&&(0,l.isLocalURL)(d),n="undefined"!==typeof g?g:r&&r.locale,o=s[d+"%"+p+(n?"%"+n:"")];e&&!o&&u(r,d,p,{locale:n})}),[p,d,N,g,t,r]);var _={ref:E,onClick:function(e){x.props&&"function"===typeof x.props.onClick&&x.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,c,i){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(r))&&(e.preventDefault(),null==c&&(c=n.indexOf("#")<0),t[o?"replace":"push"](r,n,{shallow:a,locale:i,scroll:c}))}(e,r,d,p,h,m,b,g)},onMouseEnter:function(e){(0,l.isLocalURL)(d)&&(x.props&&"function"===typeof x.props.onMouseEnter&&x.props.onMouseEnter(e),u(r,d,p,{priority:!0}))}};if(e.passHref||"a"===x.type&&!("href"in x.props)){var L="undefined"!==typeof g?g:r&&r.locale,O=r&&r.isLocaleDomain&&(0,l.getDomainLocale)(p,L,r&&r.locales,r&&r.domainLocales);_.href=O||(0,l.addBasePath)((0,l.addLocale)(p,L,r&&r.defaultLocale))}return a.default.cloneElement(x,_)};t.default=f},5749:function(e,t,r){"use strict";var n=r(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!l,i=(0,o.useRef)(),s=(0,o.useState)(!1),u=n(s,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),r||f||e&&e.tagName&&(i.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=c.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return c.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,l=n.elements;return l.set(e,t),a.observe(e),function(){l.delete(e),a.unobserve(e),0===l.size&&(a.disconnect(),c.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return(0,o.useEffect)((function(){if(!l&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=r(7294),a=r(8391),l="undefined"!==typeof IntersectionObserver;var c=new Map},55:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var n=r(5893),o=(r(7294),r(6063)),a=r(1565);function l(){return(0,n.jsxs)("section",{className:"bg-white dark:bg-gray-800",children:[(0,n.jsx)("div",{className:"max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800",children:(0,n.jsx)("h1",{className:" text-5xl md:text-9xl font-bold py-20 text-center md:text-left",children:"Projects"})}),(0,n.jsx)("div",{className:"bg-[#F1F1F1] dark:bg-gray-900",children:(0,n.jsx)("div",{className:"max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40",children:a.Z.projects.map((function(e,t){return(0,n.jsx)(c,{title:e.title,link:e.link,imgUrl:e.imgUrl,number:"".concat(t+1)},e.title)}))})})]})}var c=function(e){var t=e.title,r=e.link,o=e.imgUrl,a=e.number;return(0,n.jsx)("a",{href:r,className:"w-full block shadow-2xl",children:(0,n.jsxs)("div",{className:"relative overflow-hidden",children:[(0,n.jsx)("div",{className:"h-72 object-cover",children:(0,n.jsx)("img",{src:o,alt:"portfolio",className:"transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"})}),(0,n.jsx)("h1",{className:"absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2",children:t}),(0,n.jsx)("h1",{className:"absolute bottom-10 left-10 text-gray-50 font-bold text-xl",children:1===a.length?"0"+a:a})]})})};function i(){return(0,n.jsx)(o.Z,{title:"Projects - Sujeet Gund",children:(0,n.jsx)(l,{})})}},8947:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return r(55)}])},1664:function(e,t,r){e.exports=r(6071)}},function(e){e.O(0,[63,774,888,179],(function(){return t=8947,e(e.s=t);var t}));var t=e.O();_N_E=t}]);