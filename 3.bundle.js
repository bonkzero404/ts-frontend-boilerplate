(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{365:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(60),a=n(29),c=n(0),o=n.n(c),i=n(21),u=(n(9),n(7)),l=n(28),f=n(30);o.a.Component;o.a.Component;var s=function(e,t){return"function"==typeof e?e(t):e},m=function(e,t){return"string"==typeof e?Object(i.c)(e,null,null,t):e},v=function(e){return e},p=o.a.forwardRef;void 0===p&&(p=v);var b=p((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,c=Object(l.a)(e,["innerRef","navigate","onClick"]),i=c.target,f=Object(u.a)({},c,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||i&&"_self"!==i||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)||(e.preventDefault(),r())}});return f.ref=v!==p&&t||n,o.a.createElement("a",f)}));var h=p((function(e,t){var n=e.component,a=void 0===n?b:n,c=e.replace,i=e.to,h=e.innerRef,d=Object(l.a)(e,["component","replace","to","innerRef"]);return o.a.createElement(r.d.Consumer,null,(function(e){e||Object(f.a)(!1);var n=e.history,r=m(s(i,e.location),e.location),l=r?n.createHref(r):"",b=Object(u.a)({},d,{href:l,navigate:function(){var t=s(i,e.location);(c?n.replace:n.push)(t)}});return v!==p?b.ref=t||h:b.innerRef=h,o.a.createElement(a,b)}))})),d=function(e){return e},y=o.a.forwardRef;void 0===y&&(y=d);y((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,c=e.activeClassName,i=void 0===c?"active":c,v=e.activeStyle,p=e.className,b=e.exact,j=e.isActive,O=e.location,C=e.sensitive,E=e.strict,w=e.style,N=e.to,R=e.innerRef,g=Object(l.a)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return o.a.createElement(r.d.Consumer,null,(function(e){e||Object(f.a)(!1);var n=O||e.location,c=m(s(N,n),n),l=c.pathname,k=l&&l.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),x=k?Object(r.e)(n.pathname,{path:k,exact:b,sensitive:C,strict:E}):null,D=!!(j?j(x,n):x),K=D?function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}(p,i):p,A=D?Object(u.a)({},w,{},v):w,H=Object(u.a)({"aria-current":D&&a||null,className:K,style:A,to:c},g);return d!==y?H.ref=t||R:H.innerRef=R,o.a.createElement(h,H)}))}))},366:function(e,t,n){t.hot=function(e){return e}},369:function(e,t,n){"use strict";var r=n(154)(e.i,{hmr:!1,locals:!0});e.hot.dispose(r)},371:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(34),c=n(57),o=n(365),i=n(366),u=n(106);function l(){return{type:u.b}}function f(){return{type:u.a}}var s=n(369);t.default=Object(i.hot)(Object(c.c)((function(e){return{pathname:e.router.location.pathname,counter:e.counter.count}}),(function(e){return Object(a.b)({counterIncrement:l,counterDecrement:f},e)}))((function(e){return r.createElement("div",{className:s.container},r.createElement("div",{className:s.box},r.createElement("h1",{className:s.countText},e.counter),r.createElement("button",{type:"button",className:s.btnCount,onClick:e.counterIncrement},"+"),r.createElement("button",{type:"button",className:s.btnCount,onClick:e.counterDecrement},"-"),r.createElement("p",null,"Go to ",r.createElement(o.a,{to:"/"},"Home")," for now"),r.createElement("p",null,"You are here : ",e.pathname)))})))}}]);