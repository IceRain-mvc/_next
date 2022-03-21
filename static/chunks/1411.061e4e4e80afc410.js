"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1411],{86391:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(67294),s=n(14148),a=n.n(s),i=n(51024),u=n(42828);var c=n(85893),o=i.default.TextArea,l=function(e){var t=(0,r.useState)([]),n=t[0],s=t[1];return(0,r.useEffect)((function(){var t;e.preview&&-1!==e.parderId&&(t=e.parderId,u.A.request({url:"/paper-exam/paper/"+t,method:"GET"})).then((function(e){s(e.paperBigQuestions)}))}),[e.parderId,e.preview]),(0,c.jsx)("div",{className:a().Center,children:(0,c.jsx)("div",{className:a().cenInset,children:0!==n.length?n.map((function(e){return 0!==e.testBanks.length?(0,c.jsx)("article",{className:a().radioText,children:(0,c.jsxs)("div",{className:a().radioTextNei,children:[(0,c.jsx)("div",{className:a().radioTextNOne,children:(0,c.jsxs)("p",{children:[e.title,(0,c.jsx)("span",{children:"(\u51712\u9898,55\u5206)"})]})}),(0,c.jsxs)("div",{className:a().radioQuestion,children:[(0,c.jsx)("p",{children:e.sortId}),(0,c.jsxs)("p",{children:[e.testBanks[0].content,(0,c.jsx)("span",{children:e.title})]})]}),(0,c.jsx)("div",{children:"\u5355\u9009\u9898"===e.title?(0,c.jsx)("ul",{className:a().TextXuan,children:e.testBanks.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:1===e.testId?"A":2===e.testId?"B":3===e.testId?"C":"D"}),(0,c.jsx)("span",{children:e.difficulty})]},e.testId)}))}):"\u95ee\u7b54\u9898"===e.title?(0,c.jsx)(o,{rows:4}):""})]})},e.sortId):(0,c.jsx)("article",{className:a().radioText,children:(0,c.jsxs)("div",{className:a().radioTextNei,children:[(0,c.jsx)("div",{className:a().radioTextNOne,children:(0,c.jsxs)("p",{children:[e.title,(0,c.jsx)("span",{children:"(\u51712\u9898,55\u5206)"})]})}),(0,c.jsxs)("div",{className:a().radioQuestion,children:[(0,c.jsx)("p",{children:e.sortId}),(0,c.jsxs)("p",{children:[0!==e.testBanks.length?e.testBanks[0].content:"",(0,c.jsx)("span",{children:e.title})]})]}),(0,c.jsx)("div",{children:"\u5355\u9009\u9898"===e.title?(0,c.jsx)("ul",{className:a().TextXuan,children:0!==e.testBanks.length?e.testBanks.map((function(e){return(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:1===e.testId?"A":2===e.testId?"B":3===e.testId?"C":"D"}),(0,c.jsx)("span",{children:e.difficulty})]},e.testId)})):""}):"\u95ee\u7b54\u9898"===e.title?(0,c.jsx)(o,{rows:4}):""})]})},e.sortId)})):""})})}},42828:function(e,t,n){n.d(t,{A:function(){return c}});var r=n(11187),s=n(9669),a=n.n(s),i=n(11163),u=["login","register"],c=a().create({baseURL:"http://110.40.139.133:4001/api/v1",timeout:1e5});c.interceptors.request.use((function(e){var t=window.localStorage.getItem("token");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(function(){throw new Error("\u53d1\u8d77\u8bf7\u6c42\u51fa\u9519")})),c.interceptors.response.use((function(e){if(e.status&&200===e.status&&"error"===e.data.status)return r.default.error({message:e.data.msg}),null;var t=e.data;return t.success?t.data:(r.default.error(t.msg),null)}),(function(e){if(e&&e.response&&e.response.status){switch(e.response.status){case 504:case 404:r.default.error("\u670d\u52a1\u5668\u5f02\u5e38");break;case 403:r.default.warn("\u8bbf\u5ba2\u65e0\u6743\u8fdb\u884c\u8be5\u64cd\u4f5c");break;case 401:r.default.info("\u8bf7\u91cd\u65b0\u767b\u5f55"),function(){var e=i.default.pathname,t=i.default.asPath;u.some((function(t){return e.includes(t)}))||(u.some((function(e){return t.includes(e)}))?i.default.push("/login"):i.default.push("/login?redirect=".concat(t)))}();break;case 422:r.default.info("\u4e0a\u4f20\u6210\u529f");break;case 500:r.default.info("\u670d\u52a1\u5668\u5185\u90e8\u51fa\u9519");break;default:r.default.error(e.response&&e.response.data&&e.response.data.msg||"\u672a\u77e5\u9519\u8bef!")}}return Promise.reject(e)}))},48555:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r=n(87462),s=n(67294),a=n(50344),i=(n(80334),n(1413)),u=n(42550),c=n(34203),o=n(91033),l=new Map;var d=new o.Z((function(e){e.forEach((function(e){var t,n=e.target;null===(t=l.get(n))||void 0===t||t.forEach((function(e){return e(n)}))}))}));var f=n(15671),h=n(43144),v=n(32531),p=n(73568),x=function(e){(0,v.Z)(n,e);var t=(0,p.Z)(n);function n(){return(0,f.Z)(this,n),t.apply(this,arguments)}return(0,h.Z)(n,[{key:"render",value:function(){return this.props.children}}]),n}(s.Component),m=s.createContext(null);function j(e){var t=e.children,n=e.disabled,r=s.useRef(null),a=s.useRef(null),o=s.useContext(m),f=s.useRef({width:0,height:0,offsetWidth:0,offsetHeight:0}),h=s.isValidElement(t)&&(0,u.Yr)(t),v=h?t.ref:null,p=s.useMemo((function(){return(0,u.sQ)(v,r)}),[v,r]),j=s.useRef(e);j.current=e;var g=s.useCallback((function(e){var t=j.current,n=t.onResize,r=t.data,s=e.getBoundingClientRect(),a=s.width,u=s.height,c=e.offsetWidth,l=e.offsetHeight,d=Math.floor(a),h=Math.floor(u);if(f.current.width!==d||f.current.height!==h||f.current.offsetWidth!==c||f.current.offsetHeight!==l){var v={width:d,height:h,offsetWidth:c,offsetHeight:l};f.current=v;var p=c===Math.round(a)?a:c,x=l===Math.round(u)?u:l,m=(0,i.Z)((0,i.Z)({},v),{},{offsetWidth:p,offsetHeight:x});null===o||void 0===o||o(m,e,r),n&&Promise.resolve().then((function(){n(m,e)}))}}),[]);return s.useEffect((function(){var e,t,s=(0,c.Z)(r.current)||(0,c.Z)(a.current);return s&&!n&&(e=s,t=g,l.has(e)||(l.set(e,new Set),d.observe(e)),l.get(e).add(t)),function(){return function(e,t){l.has(e)&&(l.get(e).delete(t),l.get(e).size||(d.unobserve(e),l.delete(e)))}(s,g)}}),[r.current,n]),s.createElement(x,{ref:a},h?s.cloneElement(t,{ref:p}):t)}function g(e){var t=e.children;return(0,a.Z)(t).map((function(t,n){var a=(null===t||void 0===t?void 0:t.key)||"".concat("rc-observer-key","-").concat(n);return s.createElement(j,(0,r.Z)({},e,{key:a}),t)}))}g.Collection=function(e){var t=e.children,n=e.onBatchResize,r=s.useRef(0),a=s.useRef([]),i=s.useContext(m),u=s.useCallback((function(e,t,s){r.current+=1;var u=r.current;a.current.push({size:e,element:t,data:s}),Promise.resolve().then((function(){u===r.current&&(null===n||void 0===n||n(a.current),a.current=[])})),null===i||void 0===i||i(e,t,s)}),[n,i]);return s.createElement(m.Provider,{value:u},t)};var k=g},98423:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(1413);function s(e,t){var n=(0,r.Z)({},e);return Array.isArray(t)&&t.forEach((function(e){delete n[e]})),n}},60869:function(e,t,n){var r=n(20862),s=n(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t||{},r=n.defaultValue,s=n.value,u=n.onChange,c=n.postState,o=i.useState((function(){return void 0!==s?s:void 0!==r?"function"===typeof r?r():r:"function"===typeof e?e():e})),l=(0,a.default)(o,2),d=l[0],f=l[1],h=void 0!==s?s:d;c&&(h=c(h));var v=i.useRef(!0);return i.useEffect((function(){v.current?v.current=!1:void 0===s&&f(s)}),[s]),[h,function(e){f(e),h!==e&&u&&u(e,h)}]};var a=s(n(63038)),i=r(n(67294))}}]);