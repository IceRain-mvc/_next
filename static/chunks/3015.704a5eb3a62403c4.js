(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3015,8649],{92625:function(e,t,n){"use strict";n.r(t);var r=n(49711),o=n(67294),u=n(517),s=n.n(u),i=n(97937),l=n(85893);t.default=function(e){var t=(0,o.useRef)(null),n=(0,o.useRef)(null),u=(0,o.useRef)(null),a=(0,o.useState)(!1),c=a[0],f=a[1],m=(0,o.useState)(0),d=m[0],v=m[1],p=(0,o.useState)(0),h=p[0],y=p[1],x=function(){return[(document.documentElement.clientWidth-n.current.offsetWidth)/2,(document.documentElement.clientHeight-n.current.offsetHeight)/2]};(0,o.useEffect)((function(){if(f(e.alertStatus),e.enableDrag)setTimeout((function(){if(e.alertStatus&&n.current){var t=x(),o=(0,r.Z)(t,2),u=o[0],s=o[1];v(u),y(s),n.current.style.left=u+"px",n.current.style.top=s+"px"}}));else{var t=setInterval((function(){if(e.alertStatus&&n.current){var t=x(),o=(0,r.Z)(t,2),u=o[0],s=o[1];n.current.style.left=u+"px",n.current.style.top=s+"px",n.current.style.transition="all 10ms linear"}}),200);setTimeout((function(){return clearInterval(t)}),6e3)}}),[e]);var _=0,b=0;(0,o.useEffect)((function(){n.current&&(n.current.style.left=d+"px",n.current.style.top=h+"px")}),[d,h]);var g=e.children;return c?(0,l.jsx)("div",{ref:t,className:s().qustionsBox,children:(0,l.jsxs)("div",{className:s().qustionsContenet,ref:n,children:[(0,l.jsxs)("div",{className:s().qustionsHeader,onMouseDown:function(t){!function(t){if(e.enableDrag){var n=t.nativeEvent.offsetX,r=t.nativeEvent.offsetY;document.onmousemove=function(e){v(e.clientX-n),y(e.clientY-r)}}}(t)},onMouseUp:function(){e.enableDrag&&(_=document.documentElement.clientWidth,b=_-n.current.offsetWidth,d<0&&v(0),d>=b&&v(b),h<0&&y(0),n.current.style.left=d+"px",n.current.style.top=h+"px",document.onmousemove=null)},ref:u,style:e.enableDrag?{cursor:"move",userSelect:"none"}:{},children:[e.alertTitle,(0,l.jsx)(i.Z,{onMouseDown:function(e){e.stopPropagation()},onClick:function(t){!function(t){e.changeAlertFlag?e.changeAlertFlag(!c):(t.nativeEvent.stopImmediatePropagation(),f(!1))}(t)}})]}),(0,l.jsx)("div",{className:s().qustionsHeaderLine}),(0,l.jsx)("div",{children:g})]})}):(0,l.jsx)("div",{})}},517:function(e){e.exports={qustionsBox:"alertCommon_qustionsBox__WbmbA",qustionsContenet:"alertCommon_qustionsContenet__3w9Au",qustionsHeader:"alertCommon_qustionsHeader__jqah9",qustionsHeaderLine:"alertCommon_qustionsHeaderLine__mQ7Cf"}},49711:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(16988);function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,u=[],s=!0,i=!1;try{for(n=n.call(e);!(s=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);s=!0);}catch(l){i=!0,o=l}finally{try{s||null==n.return||n.return()}finally{if(i)throw o}}return u}}(e,t)||(0,r.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);