(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9007],{13401:function(n,e,t){"use strict";var r=t(1413),o=t(97685),a=t(4942),i=t(91),c=t(67294),s=t(94184),l=t.n(s),u=t(63017),d=t(58784),f=t(59068),m=t(15104),p=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];(0,f.U)("#1890ff");var h=c.forwardRef((function(n,e){var t,s=n.className,f=n.icon,h=n.spin,g=n.rotate,v=n.tabIndex,y=n.onClick,x=n.twoToneColor,C=(0,i.Z)(n,p),_=c.useContext(u.Z).prefixCls,w=void 0===_?"anticon":_,k=l()(w,(t={},(0,a.Z)(t,"".concat(w,"-").concat(f.name),!!f.name),(0,a.Z)(t,"".concat(w,"-spin"),!!h||"loading"===f.name),t),s),b=v;void 0===b&&y&&(b=-1);var T=g?{msTransform:"rotate(".concat(g,"deg)"),transform:"rotate(".concat(g,"deg)")}:void 0,Z=(0,m.H9)(x),j=(0,o.Z)(Z,2),N=j[0],B=j[1];return c.createElement("span",(0,r.Z)((0,r.Z)({role:"img","aria-label":f.name},C),{},{ref:e,tabIndex:b,onClick:y,className:k}),c.createElement(d.Z,{icon:f,primaryColor:N,secondaryColor:B,style:T}))}));h.displayName="AntdIcon",h.getTwoToneColor=f.m,h.setTwoToneColor=f.U,e.Z=h},63017:function(n,e,t){"use strict";var r=(0,t(67294).createContext)({});e.Z=r},58784:function(n,e,t){"use strict";var r=t(91),o=t(1413),a=t(15104),i=["icon","className","onClick","style","primaryColor","secondaryColor"],c={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};var s=function(n){var e=n.icon,t=n.className,s=n.onClick,l=n.style,u=n.primaryColor,d=n.secondaryColor,f=(0,r.Z)(n,i),m=c;if(u&&(m={primaryColor:u,secondaryColor:d||(0,a.pw)(u)}),(0,a.C3)(),(0,a.Kp)((0,a.r)(e),"icon should be icon definiton, but got ".concat(e)),!(0,a.r)(e))return null;var p=e;return p&&"function"===typeof p.icon&&(p=(0,o.Z)((0,o.Z)({},p),{},{icon:p.icon(m.primaryColor,m.secondaryColor)})),(0,a.R_)(p.icon,"svg-".concat(p.name),(0,o.Z)({className:t,onClick:s,style:l,"data-icon":p.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))};s.displayName="IconReact",s.getTwoToneColors=function(){return(0,o.Z)({},c)},s.setTwoToneColors=function(n){var e=n.primaryColor,t=n.secondaryColor;c.primaryColor=e,c.secondaryColor=t||(0,a.pw)(e),c.calculated=!!t},e.Z=s},59068:function(n,e,t){"use strict";t.d(e,{U:function(){return i},m:function(){return c}});var r=t(97685),o=t(58784),a=t(15104);function i(n){var e=(0,a.H9)(n),t=(0,r.Z)(e,2),i=t[0],c=t[1];return o.Z.setTwoToneColors({primaryColor:i,secondaryColor:c})}function c(){var n=o.Z.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}},8751:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var r=t(1413),o=t(67294),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"},i=t(13401),c=function(n,e){return o.createElement(i.Z,(0,r.Z)((0,r.Z)({},n),{},{ref:e,icon:a}))};c.displayName="CheckCircleOutlined";var s=o.forwardRef(c)},15104:function(n,e,t){"use strict";t.d(e,{R_:function(){return y},pw:function(){return x},r:function(){return g},H9:function(){return C},vD:function(){return _},C3:function(){return k},Kp:function(){return h}});var r=t(1413),o=t(71002),a=t(92138),i=t(67294),c=t(80334),s=t(98924),l="rc-util-key";function u(n){return n.attachTo?n.attachTo:document.querySelector("head")||document.body}function d(n){var e,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!(0,s.Z)())return null;var r,o=document.createElement("style");(null===(e=t.csp)||void 0===e?void 0:e.nonce)&&(o.nonce=null===(r=t.csp)||void 0===r?void 0:r.nonce);o.innerHTML=n;var a=u(t),i=a.firstChild;return t.prepend&&a.prepend?a.prepend(o):t.prepend&&i?a.insertBefore(o,i):a.appendChild(o),o}var f=new Map;function m(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=u(t);if(!f.has(r)){var o=d("",t),a=o.parentNode;f.set(r,a),a.removeChild(o)}var i=Array.from(f.get(r).children).find((function(n){return"STYLE"===n.tagName&&n[l]===e}));if(i){var c,s,m;if((null===(c=t.csp)||void 0===c?void 0:c.nonce)&&i.nonce!==(null===(s=t.csp)||void 0===s?void 0:s.nonce))i.nonce=null===(m=t.csp)||void 0===m?void 0:m.nonce;return i.innerHTML!==n&&(i.innerHTML=n),i}var p=d(n,t);return p[l]=e,p}var p=t(63017);function h(n,e){(0,c.ZP)(n,"[@ant-design/icons] ".concat(e))}function g(n){return"object"===(0,o.Z)(n)&&"string"===typeof n.name&&"string"===typeof n.theme&&("object"===(0,o.Z)(n.icon)||"function"===typeof n.icon)}function v(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(n).reduce((function(e,t){var r=n[t];switch(t){case"class":e.className=r,delete e.class;break;default:e[t]=r}return e}),{})}function y(n,e,t){return t?i.createElement(n.tag,(0,r.Z)((0,r.Z)({key:e},v(n.attrs)),t),(n.children||[]).map((function(t,r){return y(t,"".concat(e,"-").concat(n.tag,"-").concat(r))}))):i.createElement(n.tag,(0,r.Z)({key:e},v(n.attrs)),(n.children||[]).map((function(t,r){return y(t,"".concat(e,"-").concat(n.tag,"-").concat(r))})))}function x(n){return(0,a.generate)(n)[0]}function C(n){return n?Array.isArray(n)?n:[n]:[]}var _={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},w="\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",k=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=(0,i.useContext)(p.Z),t=e.csp;(0,i.useEffect)((function(){m(n,"@ant-design-icons",{prepend:!0,csp:t})}),[])}},91822:function(n,e,t){"use strict";t.r(e);var r=t(11187),o=t(30266),a=t(809),i=t.n(a),c=t(67294),s=t(93609),l=t.n(s),u=t(35032),d=t.n(u),f=t(69279),m=t(11163),p=t(8751),h=t(85893);e.default=function(){var n=(0,c.useState)(""),e=n[0],t=n[1],a=(0,c.useState)(!1),s=a[0],u=a[1],g=(0,c.useState)(!1),v=g[0],y=g[1],x=(0,c.useState)(!1),C=x[0],_=x[1],w=(0,c.useState)("\u8003\u8bd5\u4e91"),k=w[0],b=w[1],T=(0,c.useState)("https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Tue Jan 18 2022 22:18:40 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)237"),Z=T[0],j=T[1],N=function(){var n=(0,o.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,f.$M)();case 2:(e=n.sent).length>0&&(j(e[0].AppLogo),b(e[0].AppName));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();(0,c.useEffect)((function(){N()}),[]);var B=function(){var n=(0,o.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(/^[a-z]|[0-9]\w{5,17}@\w{2,7}\.(com|cn|gmail)$/i.test(e)){n.next=6;break}_(!1),r.default.error("\u5bf9\u4e0d\u8d77\uff0c\u90ae\u7bb1\u53f7\u4e0d\u6b63\u786e\uff0c\u8bf7\u91cd\u65b0\u8f93\u5165"),n.next=12;break;case 6:return _(!0),n.next=9,(0,f.Gy)({email:e});case 9:t=n.sent,localStorage.setItem("email",e),t&&setTimeout((function(){_(!1),u(!0)}),2e3);case 12:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,h.jsx)("div",{children:(0,h.jsxs)("div",{className:l().loginBox,children:[(0,h.jsxs)("div",{className:d().topHeader,children:[(0,h.jsx)("img",{src:Z}),(0,h.jsx)("span",{children:k})]}),s?(0,h.jsxs)("div",{className:d().backLoginBox,children:[(0,h.jsx)("p",{children:(0,h.jsx)(p.Z,{})}),(0,h.jsx)("p",{children:"\u7cfb\u7edf\u5df2\u53d1\u9001\u5bc6\u7801\u91cd\u7f6e\u90ae\u4ef6\u81f3:"}),(0,h.jsx)("p",{children:e}),(0,h.jsx)("p",{children:"\u8bf7\u767b\u5f55\u90ae\u7bb1\u91cd\u7f6e\u5bc6\u7801"}),(0,h.jsx)("div",{className:l().modalBodyGo,children:(0,h.jsx)("button",{onClick:function(){m.default.push("/")},children:"\u8fd4\u56de\u767b\u9646\u9875\u9762"})}),(0,h.jsx)("p",{onClick:function(){y(!0)},children:"\u672a\u6536\u5230\u5bc6\u7801\u90ae\u7bb1?"}),v&&(0,h.jsxs)("div",{children:[(0,h.jsx)("p",{children:"\u5982\u679c\u672a\u627e\u5230\u6fc0\u6d3b\u90ae\u4ef6\uff0c\u53ef\u80fd\u5b58\u5728\u5982\u4e0b\u60c5\u51b5:"}),(0,h.jsx)("p",{children:"1\u3001\u8bf7\u68c0\u67e5\u6fc0\u6d3b\u90ae\u4ef6\u662f\u5426\u5728\u5783\u573e\u7bb1"}),(0,h.jsx)("p",{children:"2\u3001\u5982\u679c\u4f7f\u7528\u4f01\u4e1a\u90ae\u7bb1\uff0c\u8bf7\u68c0\u67e5\u662f\u5426\u6709\u963b\u6b62\u5916\u90e8\u90ae\u4ef6"}),(0,h.jsx)("p",{children:"3\u3001\u5efa\u8bae\u4f7f\u7528\u5e38\u7528\u90ae\u7bb1\u6ce8\u518c(\u5982QQ\u3001163\u3001 \u65b0\u6d6a\u7b49\u90ae\u7bb1)"})]})]}):(0,h.jsxs)("div",{className:d().sendEmailBox,children:[(0,h.jsx)("div",{className:l().modalHeader,children:(0,h.jsx)("h1",{children:"\u627e\u56de\u5bc6\u7801"})}),(0,h.jsxs)("div",{className:l().modalBody,children:[(0,h.jsxs)("div",{className:l().modalBodyEmail,children:["\u90ae\u7bb1",(0,h.jsx)("div",{children:(0,h.jsx)("input",{type:"text",placeholder:"\u8bf7\u8f93\u5165\u6ce8\u518c\u90ae\u7bb1",onBlur:function(n){t(n.target.value)}})})]}),C?(0,h.jsx)("p",{children:"\u6b63\u5728\u53d1\u9001\u5bc6\u7801\u627e\u56de\u90ae\u4ef6\uff0c\u8bf7\u7a0d\u5019.."}):(0,h.jsx)("div",{className:l().modalBodyGo,children:(0,h.jsx)("button",{onClick:B,children:"\u627e\u56de\u5bc6\u7801"})})]}),(0,h.jsx)("div",{className:l().modalFooter,children:(0,h.jsx)("div",{children:"Copyright \xa9 2021\u8003\u8bd5\u4e91"})})]})]})})}},69279:function(n,e,t){"use strict";t.d(e,{J9:function(){return o},Q0:function(){return a},a2:function(){return i},xt:function(){return c},WZ:function(){return s},Gy:function(){return l},N$:function(){return u},f:function(){return d},$M:function(){return f}});var r=t(42828);function o(n){return r.A.request({url:"auth/login",method:"POST",data:n})}function a(n){return r.A.request({url:"auth/getDataByName",method:"GET",params:n})}function i(n){return r.A.request({url:"auth/resetpwd",method:"PUT",params:n})}function c(){return r.A.request({url:"auth/getAllUser",method:"GET"})}function s(){return r.A.request({url:"students/getAllStudentsNum",method:"GET"})}function l(n){return r.A.request({url:"send-email/sendFindBackPwd",method:"POST",params:n})}function u(n){return r.A.request({url:"examineeSideInformation/createAppMessage",method:"POST",data:n})}function d(n){return r.A.request({url:"examineeSideInformation/updataAppMessage",method:"PUT",params:n})}function f(){return r.A.request({url:"examineeSideInformation/getAppMessage",method:"GET"})}},42828:function(n,e,t){"use strict";t.d(e,{A:function(){return s}});var r=t(11187),o=t(9669),a=t.n(o),i=t(11163),c=["login","register"],s=a().create({baseURL:"http://110.40.139.133:4001/api/v1",timeout:1e5});s.interceptors.request.use((function(n){var e=window.localStorage.getItem("token");return e&&(n.headers.Authorization="Bearer ".concat(e)),n}),(function(){throw new Error("\u53d1\u8d77\u8bf7\u6c42\u51fa\u9519")})),s.interceptors.response.use((function(n){if(n.status&&200===n.status&&"error"===n.data.status)return r.default.error({message:n.data.msg}),null;var e=n.data;return e.success?e.data:(r.default.error(e.msg),null)}),(function(n){if(n&&n.response&&n.response.status){switch(n.response.status){case 504:case 404:r.default.error("\u670d\u52a1\u5668\u5f02\u5e38");break;case 403:r.default.warn("\u8bbf\u5ba2\u65e0\u6743\u8fdb\u884c\u8be5\u64cd\u4f5c");break;case 401:r.default.info("\u8bf7\u91cd\u65b0\u767b\u5f55"),function(){var n=i.default.pathname,e=i.default.asPath;c.some((function(e){return n.includes(e)}))||(c.some((function(n){return e.includes(n)}))?i.default.push("/login"):i.default.push("/login?redirect=".concat(e)))}();break;case 422:r.default.info("\u4e0a\u4f20\u6210\u529f");break;case 500:r.default.info("\u670d\u52a1\u5668\u5185\u90e8\u51fa\u9519");break;default:r.default.error(n.response&&n.response.data&&n.response.data.msg||"\u672a\u77e5\u9519\u8bef!")}}return Promise.reject(n)}))},9133:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login/forgetPwd",function(){return t(91822)}])},93609:function(n){n.exports={loginBox:"login_loginBox__8FRlr",loginSmall:"login_loginSmall__aTOaT",topHeader:"login_topHeader__IqSr_",topContent:"login_topContent__RWHCK",modalHeader:"login_modalHeader__9lPkW",modalBody:"login_modalBody__2V4zp",modalBodyEmail:"login_modalBodyEmail__XuxJV",modalBodyPwd:"login_modalBodyPwd__tigo_",modalBodyGo:"login_modalBodyGo__TqoYq",modalBodyRegister:"login_modalBodyRegister__q6r5_",modalFooter:"login_modalFooter__4dXJf"}},35032:function(n){n.exports={topHeader:"forgetPwd_topHeader__bxZrB",sendEmailBox:"forgetPwd_sendEmailBox__4jH5O",backLoginBox:"forgetPwd_backLoginBox__DiLhk"}},30266:function(n,e,t){"use strict";function r(n,e,t,r,o,a,i){try{var c=n[a](i),s=c.value}catch(l){return void t(l)}c.done?e(s):Promise.resolve(s).then(r,o)}function o(n){return function(){var e=this,t=arguments;return new Promise((function(o,a){var i=n.apply(e,t);function c(n){r(i,o,a,c,s,"next",n)}function s(n){r(i,o,a,c,s,"throw",n)}c(void 0)}))}}t.d(e,{Z:function(){return o}})}},function(n){n.O(0,[1400,9774,2888,179],(function(){return e=9133,n(n.s=e);var e}));var e=n.O();_N_E=e}]);