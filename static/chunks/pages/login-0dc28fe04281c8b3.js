(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3459],{21516:function(e,t,n){"use strict";n.r(t);var r=n(11187),o=n(30266),a=n(809),u=n.n(a),s=n(67294),i=n(93609),l=n.n(i),c=n(69279),d=n(55764),f=n(11163),m=n(85893);t.default=function(){var e=(0,s.useState)(""),t=e[0],n=e[1],a=(0,s.useState)(""),i=a[0],p=a[1],g=(0,s.useState)(0),h=g[0],_=g[1],v=(0,s.useState)("\u8003\u8bd5\u4e91"),x=v[0],y=v[1],w=(0,s.useState)("https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Tue Jan 18 2022 22:18:40 GMT+0800 (\u4e2d\u56fd\u6807\u51c6\u65f6\u95f4)237"),S=w[0],j=w[1],k=(0,s.useState)(),B=k[0],A=k[1],N=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,d.Kn)();case 2:t=e.sent,console.log("\u8fd9\u662f\u83b7\u53d6ip\u5730\u5740",t),console.log(JSON.stringify(t).slice(1,-1)),t&&A(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=(0,o.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t||!i){e.next=11;break}return _(1),setTimeout((function(){_(0)}),5e3),e.next=5,(0,c.J9)({name:t,password:i});case 5:"string"===typeof(n=e.sent)&&r.default.error("\u5bf9\u4e0d\u8d77\uff0c\u60a8\u7684".concat(n,"\uff0c\u8bf7\u91cd\u65b0\u767b\u5f55")),n.token&&(B&&localStorage.setItem("userIp",JSON.stringify(B).slice(1,-1)),localStorage.setItem("token",n.token),localStorage.setItem("user",t),f.default.push("/home")),_(0),e.next=12;break;case 11:r.default.error("\u8d26\u53f7\u548c\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a");case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=(0,o.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.$M)();case 2:(t=e.sent).length>0&&(j(t[0].AppLogo),y(t[0].AppName));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,s.useEffect)((function(){N(),localStorage.getItem("user")&&n(localStorage.getItem("user")),P()}),[]),(0,m.jsx)("div",{children:(0,m.jsx)("div",{className:l().loginBox,children:(0,m.jsxs)("div",{className:l().loginSmall,children:[(0,m.jsxs)("div",{className:l().topHeader,children:[(0,m.jsx)("img",{src:S}),(0,m.jsx)("span",{children:x})]}),(0,m.jsxs)("div",{className:l().topContent,children:[(0,m.jsx)("div",{className:l().modalHeader,children:(0,m.jsx)("h1",{children:"\u767b\u5f55"})}),(0,m.jsxs)("div",{className:l().modalBody,children:[(0,m.jsxs)("div",{className:l().modalBodyEmail,children:["\u8d26\u53f7",(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"text",defaultValue:t,onBlur:function(e){n(e.target.value)}})})]}),(0,m.jsxs)("div",{className:l().modalBodyPwd,children:["\u5bc6\u7801",(0,m.jsx)("div",{children:(0,m.jsx)("input",{type:"password",defaultValue:i,onBlur:function(e){p(e.target.value)}})})]}),(0,m.jsx)("div",{className:l().modalBodyGo,children:0===h?(0,m.jsx)("button",{onClick:T,children:"\u767b\u5f55"}):(0,m.jsx)("button",{disabled:!0,children:"\u767b\u5f55\u4e2d\u2026\u2026"})}),(0,m.jsx)("div",{className:l().modalBodyRegister,children:(0,m.jsx)("span",{onClick:function(){f.default.push("/login/forgetPwd")},children:"\u5fd8\u8bb0\u5bc6\u7801"})})]}),(0,m.jsx)("div",{className:l().modalFooter,children:(0,m.jsx)("div",{children:"Copyright \xa9 2021\u8003\u8bd5\u4e91"})})]})]})})})}},69279:function(e,t,n){"use strict";n.d(t,{J9:function(){return o},Q0:function(){return a},a2:function(){return u},xt:function(){return s},WZ:function(){return i},Gy:function(){return l},N$:function(){return c},f:function(){return d},$M:function(){return f}});var r=n(42828);function o(e){return r.A.request({url:"auth/login",method:"POST",data:e})}function a(e){return r.A.request({url:"auth/getDataByName",method:"GET",params:e})}function u(e){return r.A.request({url:"auth/resetpwd",method:"PUT",params:e})}function s(){return r.A.request({url:"auth/getAllUser",method:"GET"})}function i(){return r.A.request({url:"students/getAllStudentsNum",method:"GET"})}function l(e){return r.A.request({url:"send-email/sendFindBackPwd",method:"POST",params:e})}function c(e){return r.A.request({url:"examineeSideInformation/createAppMessage",method:"POST",data:e})}function d(e){return r.A.request({url:"examineeSideInformation/updataAppMessage",method:"PUT",params:e})}function f(){return r.A.request({url:"examineeSideInformation/getAppMessage",method:"GET"})}},55764:function(e,t,n){"use strict";n.d(t,{yE:function(){return o},TH:function(){return a},Kn:function(){return u}});var r=n(42828);function o(e){return r.A.request({url:"operationLog/getAll",method:"GET",params:e})}function a(e){return r.A.request({url:"operationLog/addOpreationLog",method:"POST",data:e})}function u(){return r.A.request({url:"operationLog/getIP",method:"GET"})}},42828:function(e,t,n){"use strict";n.d(t,{A:function(){return i}});var r=n(11187),o=n(9669),a=n.n(o),u=n(11163),s=["login","register"],i=a().create({baseURL:"http://110.40.139.133:4001/api/v1",timeout:1e5});i.interceptors.request.use((function(e){var t=window.localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(){throw new Error("\u53d1\u8d77\u8bf7\u6c42\u51fa\u9519")})),i.interceptors.response.use((function(e){if(e.status&&200===e.status&&"error"===e.data.status)return r.default.error({message:e.data.msg}),null;var t=e.data;return t.success?t.data:(r.default.error(t.msg),null)}),(function(e){if(e&&e.response&&e.response.status){switch(e.response.status){case 504:case 404:r.default.error("\u670d\u52a1\u5668\u5f02\u5e38");break;case 403:r.default.warn("\u8bbf\u5ba2\u65e0\u6743\u8fdb\u884c\u8be5\u64cd\u4f5c");break;case 401:r.default.info("\u8bf7\u91cd\u65b0\u767b\u5f55"),function(){var e=u.default.pathname,t=u.default.asPath;s.some((function(t){return e.includes(t)}))||(s.some((function(e){return t.includes(e)}))?u.default.push("/login"):u.default.push("/login?redirect=".concat(t)))}();break;case 422:r.default.info("\u4e0a\u4f20\u6210\u529f");break;case 500:r.default.info("\u670d\u52a1\u5668\u5185\u90e8\u51fa\u9519");break;default:r.default.error(e.response&&e.response.data&&e.response.data.msg||"\u672a\u77e5\u9519\u8bef!")}}return Promise.reject(e)}))},97106:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return n(21516)}])},93609:function(e){e.exports={loginBox:"login_loginBox__8FRlr",loginSmall:"login_loginSmall__aTOaT",topHeader:"login_topHeader__IqSr_",topContent:"login_topContent__RWHCK",modalHeader:"login_modalHeader__9lPkW",modalBody:"login_modalBody__2V4zp",modalBodyEmail:"login_modalBodyEmail__XuxJV",modalBodyPwd:"login_modalBodyPwd__tigo_",modalBodyGo:"login_modalBodyGo__TqoYq",modalBodyRegister:"login_modalBodyRegister__q6r5_",modalFooter:"login_modalFooter__4dXJf"}},30266:function(e,t,n){"use strict";function r(e,t,n,r,o,a,u){try{var s=e[a](u),i=s.value}catch(l){return void n(l)}s.done?t(i):Promise.resolve(i).then(r,o)}function o(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var u=e.apply(t,n);function s(e){r(u,o,a,s,i,"next",e)}function i(e){r(u,o,a,s,i,"throw",e)}s(void 0)}))}}n.d(t,{Z:function(){return o}})}},function(e){e.O(0,[1400,9774,2888,179],(function(){return t=97106,e(e.s=t);var t}));var t=e.O();_N_E=t}]);