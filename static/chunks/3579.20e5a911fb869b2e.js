(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3579,1154],{23197:function(e,t,n){"use strict";n.r(t);var a=n(16373),r=n(12386),s=(n(67294),n(89392)),i=n(60607),c=n.n(i),o=n(87412),u=n(62704),l=n(11163),d=n(91321),f=n(85893),m=(0,d.Z)({scriptUrl:"//at.alicdn.com/t/font_2981278_8e5mlve6tua.js"}),g=[{title:"\u8d26\u53f7\u4fe1\u606f",icont:(0,f.jsx)(m,{type:"icon-zuanshi"}),src:"/management/accountInformation"},{title:"\u5b50\u7ba1\u7406\u5458",icont:(0,f.jsx)(m,{type:"icon-wrench-fill"}),src:"/management/childAdministrator"},{title:"\u5206\u7c7b",icont:(0,f.jsx)(m,{type:"icon-fl-renminbi"}),src:"/management/classify"},{title:"\u64cd\u4f5c\u65e5\u5fd7",icont:(0,f.jsx)(m,{type:"icon-xiongmaojiaoyin"}),src:"/management/operationLog"}];t.default=function(e){return(0,f.jsx)("div",{className:c().managementNav,children:(0,f.jsx)(a.Z,{children:(0,f.jsx)(s.default,{args:7,children:(0,f.jsxs)(a.Z,{children:[(0,f.jsxs)(o.default,{width:160,className:"site-layout-background",children:[(0,f.jsx)("h1",{className:c().clearfix,children:"\u7ba1\u7406\u8bbe\u7f6e"}),(0,f.jsx)(r.default,{mode:"inline",defaultSelectedKeys:[e.args],style:{height:"100%",background:"#eff2f5",borderRight:"solid 1px #d4d5d5"},children:g.map((function(e,t){return(0,f.jsx)(r.default.Item,{icon:e.icont,onClick:function(){e.src&&l.default.push(e.src)},children:e.title},t)}))})]}),(0,f.jsx)(a.Z,{children:(0,f.jsx)(u.Content,{className:"site-layout-background",style:{padding:15,margin:0,minHeight:280,overflow:"auto",background:"#f7f9fb"},children:(0,f.jsx)("div",{className:c().content,children:e.children})})})]})})})})}},42828:function(e,t,n){"use strict";n.d(t,{A:function(){return o}});var a=n(11187),r=n(9669),s=n.n(r),i=n(11163),c=["login","register"],o=s().create({baseURL:"http://110.40.139.133:4001/api/v1",timeout:1e5});o.interceptors.request.use((function(e){var t=window.localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(){throw new Error("\u53d1\u8d77\u8bf7\u6c42\u51fa\u9519")})),o.interceptors.response.use((function(e){if(e.status&&200===e.status&&"error"===e.data.status)return a.default.error({message:e.data.msg}),null;var t=e.data;return t.success?t.data:(a.default.error(t.msg),null)}),(function(e){if(e&&e.response&&e.response.status){switch(e.response.status){case 504:case 404:a.default.error("\u670d\u52a1\u5668\u5f02\u5e38");break;case 403:a.default.warn("\u8bbf\u5ba2\u65e0\u6743\u8fdb\u884c\u8be5\u64cd\u4f5c");break;case 401:a.default.info("\u8bf7\u91cd\u65b0\u767b\u5f55"),function(){var e=i.default.pathname,t=i.default.asPath;c.some((function(t){return e.includes(t)}))||(c.some((function(e){return t.includes(e)}))?i.default.push("/login"):i.default.push("/login?redirect=".concat(t)))}();break;case 422:a.default.info("\u4e0a\u4f20\u6210\u529f");break;case 500:a.default.info("\u670d\u52a1\u5668\u5185\u90e8\u51fa\u9519");break;default:a.default.error(e.response&&e.response.data&&e.response.data.msg||"\u672a\u77e5\u9519\u8bef!")}}return Promise.reject(e)}))},60607:function(e){e.exports={managementNav:"management_managementNav__nU_2S",clearfix:"management_clearfix__kEAQU",content:"management_content__uuuJg"}}}]);