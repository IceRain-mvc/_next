(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8725,8649,3015],{92625:function(t,e,n){"use strict";n.r(e);var r=n(49711),o=n(67294),u=n(517),i=n.n(u),s=n(97937),a=n(85893);e.default=function(t){var e=(0,o.useRef)(null),n=(0,o.useRef)(null),u=(0,o.useRef)(null),l=(0,o.useState)(!1),c=l[0],f=l[1],m=(0,o.useState)(0),d=m[0],v=m[1],p=(0,o.useState)(0),y=p[0],h=p[1],x=function(){return[(document.documentElement.clientWidth-n.current.offsetWidth)/2,(document.documentElement.clientHeight-n.current.offsetHeight)/2]};(0,o.useEffect)((function(){if(f(t.alertStatus),t.enableDrag)setTimeout((function(){if(t.alertStatus&&n.current){var e=x(),o=(0,r.Z)(e,2),u=o[0],i=o[1];v(u),h(i),n.current.style.left=u+"px",n.current.style.top=i+"px"}}));else{var e=setInterval((function(){if(t.alertStatus&&n.current){var e=x(),o=(0,r.Z)(e,2),u=o[0],i=o[1];n.current.style.left=u+"px",n.current.style.top=i+"px",n.current.style.transition="all 10ms linear"}}),200);setTimeout((function(){return clearInterval(e)}),6e3)}}),[t]);var g=0,b=0;(0,o.useEffect)((function(){n.current&&(n.current.style.left=d+"px",n.current.style.top=y+"px")}),[d,y]);var _=t.children;return c?(0,a.jsx)("div",{ref:e,className:i().qustionsBox,children:(0,a.jsxs)("div",{className:i().qustionsContenet,ref:n,children:[(0,a.jsxs)("div",{className:i().qustionsHeader,onMouseDown:function(e){!function(e){if(t.enableDrag){var n=e.nativeEvent.offsetX,r=e.nativeEvent.offsetY;document.onmousemove=function(t){v(t.clientX-n),h(t.clientY-r)}}}(e)},onMouseUp:function(){t.enableDrag&&(g=document.documentElement.clientWidth,b=g-n.current.offsetWidth,d<0&&v(0),d>=b&&v(b),y<0&&h(0),n.current.style.left=d+"px",n.current.style.top=y+"px",document.onmousemove=null)},ref:u,style:t.enableDrag?{cursor:"move",userSelect:"none"}:{},children:[t.alertTitle,(0,a.jsx)(s.Z,{onMouseDown:function(t){t.stopPropagation()},onClick:function(e){!function(e){t.changeAlertFlag?t.changeAlertFlag(!c):(e.nativeEvent.stopImmediatePropagation(),f(!1))}(e)}})]}),(0,a.jsx)("div",{className:i().qustionsHeaderLine}),(0,a.jsx)("div",{children:_})]})}):(0,a.jsx)("div",{})}},517:function(t){t.exports={qustionsBox:"alertCommon_qustionsBox__WbmbA",qustionsContenet:"alertCommon_qustionsContenet__3w9Au",qustionsHeader:"alertCommon_qustionsHeader__jqah9",qustionsHeaderLine:"alertCommon_qustionsHeaderLine__mQ7Cf"}},56586:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,{Z:function(){return r}})},49711:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(16988);function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,u=[],i=!0,s=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(u.push(r.value),!e||u.length!==e);i=!0);}catch(a){s=!0,o=a}finally{try{i||null==n.return||n.return()}finally{if(s)throw o}}return u}}(t,e)||(0,r.Z)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},16988:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(56586);function o(t,e){if(t){if("string"===typeof t)return(0,r.Z)(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,r.Z)(t,e):void 0}}}}]);