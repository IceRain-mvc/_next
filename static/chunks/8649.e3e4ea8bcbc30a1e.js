(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8649],{92625:function(e,t,n){"use strict";n.r(t);var s=n(49711),o=n(67294),r=n(517),u=n.n(r),i=n(97937),l=n(85893);t.default=function(e){var t=(0,o.useRef)(null),n=(0,o.useRef)(null),r=(0,o.useRef)(null),a=(0,o.useState)(!1),c=a[0],f=a[1],m=(0,o.useState)(0),d=m[0],v=m[1],p=(0,o.useState)(0),x=p[0],h=p[1],_=function(){return[(document.documentElement.clientWidth-n.current.offsetWidth)/2,(document.documentElement.clientHeight-n.current.offsetHeight)/2]};(0,o.useEffect)((function(){if(f(e.alertStatus),e.enableDrag)setTimeout((function(){if(e.alertStatus&&n.current){var t=_(),o=(0,s.Z)(t,2),r=o[0],u=o[1];v(r),h(u),n.current.style.left=r+"px",n.current.style.top=u+"px"}}));else{var t=setInterval((function(){if(e.alertStatus&&n.current){var t=_(),o=(0,s.Z)(t,2),r=o[0],u=o[1];n.current.style.left=r+"px",n.current.style.top=u+"px",n.current.style.transition="all 10ms linear"}}),200);setTimeout((function(){return clearInterval(t)}),6e3)}}),[e]);var q=0,g=0;(0,o.useEffect)((function(){n.current&&(n.current.style.left=d+"px",n.current.style.top=x+"px")}),[d,x]);var C=e.children;return c?(0,l.jsx)("div",{ref:t,className:u().qustionsBox,children:(0,l.jsxs)("div",{className:u().qustionsContenet,ref:n,children:[(0,l.jsxs)("div",{className:u().qustionsHeader,onMouseDown:function(t){!function(t){if(e.enableDrag){var n=t.nativeEvent.offsetX,s=t.nativeEvent.offsetY;document.onmousemove=function(e){v(e.clientX-n),h(e.clientY-s)}}}(t)},onMouseUp:function(){e.enableDrag&&(q=document.documentElement.clientWidth,g=q-n.current.offsetWidth,d<0&&v(0),d>=g&&v(g),x<0&&h(0),n.current.style.left=d+"px",n.current.style.top=x+"px",document.onmousemove=null)},ref:r,style:e.enableDrag?{cursor:"move",userSelect:"none"}:{},children:[e.alertTitle,(0,l.jsx)(i.Z,{onMouseDown:function(e){e.stopPropagation()},onClick:function(t){!function(t){e.changeAlertFlag?e.changeAlertFlag(!c):(t.nativeEvent.stopImmediatePropagation(),f(!1))}(t)}})]}),(0,l.jsx)("div",{className:u().qustionsHeaderLine}),(0,l.jsx)("div",{children:C})]})}):(0,l.jsx)("div",{})}},517:function(e){e.exports={qustionsBox:"alertCommon_qustionsBox__WbmbA",qustionsContenet:"alertCommon_qustionsContenet__3w9Au",qustionsHeader:"alertCommon_qustionsHeader__jqah9",qustionsHeaderLine:"alertCommon_qustionsHeaderLine__mQ7Cf"}}}]);