(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5036,8649],{97937:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var r=n(1413),o=n(67294),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"}}]},name:"close",theme:"outlined"},u=n(13401),i=function(e,t){return o.createElement(u.Z,(0,r.Z)((0,r.Z)({},e),{},{ref:t,icon:s}))};i.displayName="CloseOutlined";var c=o.forwardRef(i)},92625:function(e,t,n){"use strict";n.r(t);var r=n(49711),o=n(67294),s=n(517),u=n.n(s),i=n(97937),c=n(85893);t.default=function(e){var t=(0,o.useRef)(null),n=(0,o.useRef)(null),s=(0,o.useRef)(null),a=(0,o.useState)(!1),l=a[0],f=a[1],m=(0,o.useState)(0),d=m[0],v=m[1],h=(0,o.useState)(0),p=h[0],x=h[1],_=function(){return[(document.documentElement.clientWidth-n.current.offsetWidth)/2,(document.documentElement.clientHeight-n.current.offsetHeight)/2]};(0,o.useEffect)((function(){if(f(e.alertStatus),e.enableDrag)setTimeout((function(){if(e.alertStatus&&n.current){var t=_(),o=(0,r.Z)(t,2),s=o[0],u=o[1];v(s),x(u),n.current.style.left=s+"px",n.current.style.top=u+"px"}}));else{var t=setInterval((function(){if(e.alertStatus&&n.current){var t=_(),o=(0,r.Z)(t,2),s=o[0],u=o[1];n.current.style.left=s+"px",n.current.style.top=u+"px",n.current.style.transition="all 10ms linear"}}),200);setTimeout((function(){return clearInterval(t)}),6e3)}}),[e]);var g=0,q=0;(0,o.useEffect)((function(){n.current&&(n.current.style.left=d+"px",n.current.style.top=p+"px")}),[d,p]);var C=e.children;return l?(0,c.jsx)("div",{ref:t,className:u().qustionsBox,children:(0,c.jsxs)("div",{className:u().qustionsContenet,ref:n,children:[(0,c.jsxs)("div",{className:u().qustionsHeader,onMouseDown:function(t){!function(t){if(e.enableDrag){var n=t.nativeEvent.offsetX,r=t.nativeEvent.offsetY;document.onmousemove=function(e){v(e.clientX-n),x(e.clientY-r)}}}(t)},onMouseUp:function(){e.enableDrag&&(g=document.documentElement.clientWidth,q=g-n.current.offsetWidth,d<0&&v(0),d>=q&&v(q),p<0&&x(0),n.current.style.left=d+"px",n.current.style.top=p+"px",document.onmousemove=null)},ref:s,style:e.enableDrag?{cursor:"move",userSelect:"none"}:{},children:[e.alertTitle,(0,c.jsx)(i.Z,{onMouseDown:function(e){e.stopPropagation()},onClick:function(t){!function(t){e.changeAlertFlag?e.changeAlertFlag(!l):(t.nativeEvent.stopImmediatePropagation(),f(!1))}(t)}})]}),(0,c.jsx)("div",{className:u().qustionsHeaderLine}),(0,c.jsx)("div",{children:C})]})}):(0,c.jsx)("div",{})}},517:function(e){e.exports={qustionsBox:"alertCommon_qustionsBox__WbmbA",qustionsContenet:"alertCommon_qustionsContenet__3w9Au",qustionsHeader:"alertCommon_qustionsHeader__jqah9",qustionsHeaderLine:"alertCommon_qustionsHeaderLine__mQ7Cf"}}}]);