"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7412,8229],{25413:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"bars",theme:"outlined"}},6594:function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"}},54067:function(e,t,r){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(a=r(45799))&&a.__esModule?a:{default:a};t.default=n,e.exports=n},68229:function(e,t,r){var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(a=r(7500))&&a.__esModule?a:{default:a};t.default=n,e.exports=n},45799:function(e,t,r){var a=r(20862),n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(81109)),o=a(r(67294)),u=n(r(25413)),i=n(r(92074)),c=function(e,t){return o.createElement(i.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:u.default}))};c.displayName="BarsOutlined";var d=o.forwardRef(c);t.default=d},7500:function(e,t,r){var a=r(20862),n=r(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(81109)),o=a(r(67294)),u=n(r(6594)),i=n(r(92074)),c=function(e,t){return o.createElement(i.default,(0,l.default)((0,l.default)({},e),{},{ref:t,icon:u.default}))};c.displayName="LeftOutlined";var d=o.forwardRef(c);t.default=d},63406:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){return!isNaN(parseFloat(e))&&isFinite(e)};t.default=r},87412:function(e,t,r){var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SiderContext=void 0;var l=a(r(59713)),o=a(r(67154)),u=a(r(63038)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=g(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(67294)),c=a(r(94184)),d=a(r(18475)),f=a(r(54067)),s=a(r(67638)),p=a(r(68229)),v=r(62704),m=r(31929),y=a(r(63406));function g(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(g=function(e){return e?r:t})(e)}var h=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},x={xs:"479.98px",sm:"575.98px",md:"767.98px",lg:"991.98px",xl:"1199.98px",xxl:"1599.98px"},b=i.createContext({});t.SiderContext=b;var O=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),C=i.forwardRef((function(e,t){var r=e.prefixCls,a=e.className,n=e.trigger,g=e.children,C=e.defaultCollapsed,w=void 0!==C&&C,N=e.theme,_=void 0===N?"dark":N,j=e.style,P=void 0===j?{}:j,E=e.collapsible,M=void 0!==E&&E,S=e.reverseArrow,k=void 0!==S&&S,z=e.width,W=void 0===z?200:z,L=e.collapsedWidth,H=void 0===L?80:L,F=e.zeroWidthTriggerStyle,B=e.breakpoint,D=e.onCollapse,R=e.onBreakpoint,T=h(e,["prefixCls","className","trigger","children","defaultCollapsed","theme","style","collapsible","reverseArrow","width","collapsedWidth","zeroWidthTriggerStyle","breakpoint","onCollapse","onBreakpoint"]),A=(0,i.useContext)(v.LayoutContext).siderHook,I=(0,i.useState)("collapsed"in T?T.collapsed:w),V=(0,u.default)(I,2),q=V[0],G=V[1],J=(0,i.useState)(!1),K=(0,u.default)(J,2),Q=K[0],U=K[1];(0,i.useEffect)((function(){"collapsed"in T&&G(T.collapsed)}),[T.collapsed]);var X=function(e,t){"collapsed"in T||G(e),null===D||void 0===D||D(e,t)},Y=(0,i.useRef)();Y.current=function(e){U(e.matches),null===R||void 0===R||R(e.matches),q!==e.matches&&X(e.matches,"responsive")},(0,i.useEffect)((function(){function e(e){return Y.current(e)}var t;if("undefined"!==typeof window){var r=window.matchMedia;if(r&&B&&B in x){t=r("(max-width: ".concat(x[B],")"));try{t.addEventListener("change",e)}catch(a){t.addListener(e)}e(t)}}return function(){try{null===t||void 0===t||t.removeEventListener("change",e)}catch(a){null===t||void 0===t||t.removeListener(e)}}}),[]),(0,i.useEffect)((function(){var e=O("ant-sider-");return A.addSider(e),function(){return A.removeSider(e)}}),[]);var Z=function(){X(!q,"clickTrigger")},$=(0,i.useContext)(m.ConfigContext).getPrefixCls,ee=i.useMemo((function(){return{siderCollapsed:q}}),[q]);return i.createElement(b.Provider,{value:ee},function(){var e,u=$("layout-sider",r),v=(0,d.default)(T,["collapsed"]),m=q?H:W,h=(0,y.default)(m)?"".concat(m,"px"):String(m),x=0===parseFloat(String(H||0))?i.createElement("span",{onClick:Z,className:(0,c.default)("".concat(u,"-zero-width-trigger"),"".concat(u,"-zero-width-trigger-").concat(k?"right":"left")),style:F},n||i.createElement(f.default,null)):null,b={expanded:k?i.createElement(s.default,null):i.createElement(p.default,null),collapsed:k?i.createElement(p.default,null):i.createElement(s.default,null)}[q?"collapsed":"expanded"],O=null!==n?x||i.createElement("div",{className:"".concat(u,"-trigger"),onClick:Z,style:{width:h}},n||b):null,C=(0,o.default)((0,o.default)({},P),{flex:"0 0 ".concat(h),maxWidth:h,minWidth:h,width:h}),w=(0,c.default)(u,"".concat(u,"-").concat(_),(e={},(0,l.default)(e,"".concat(u,"-collapsed"),!!q),(0,l.default)(e,"".concat(u,"-has-trigger"),M&&null!==n&&!x),(0,l.default)(e,"".concat(u,"-below"),!!Q),(0,l.default)(e,"".concat(u,"-zero-width"),0===parseFloat(h)),e),a);return i.createElement("aside",(0,o.default)({className:w},v,{style:C,ref:t}),i.createElement("div",{className:"".concat(u,"-children")},g),M||Q&&x?O:null)}())}));C.displayName="Sider";var w=C;t.default=w},62704:function(e,t,r){var a=r(95318),n=r(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.LayoutContext=t.Header=t.Footer=t.Content=void 0;var l=a(r(319)),o=a(r(59713)),u=a(r(63038)),i=a(r(67154)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!==typeof e)return{default:e};var r=s(t);if(r&&r.has(e))return r.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,r&&r.set(e,a);return a}(r(67294)),d=a(r(94184)),f=r(31929);function s(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(s=function(e){return e?r:t})(e)}var p=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r},v=c.createContext({siderHook:{addSider:function(){return null},removeSider:function(){return null}}});function m(e){var t=e.suffixCls,r=e.tagName,a=e.displayName;return function(e){var n=function(a){var n=c.useContext(f.ConfigContext).getPrefixCls,l=a.prefixCls,o=n(t,l);return c.createElement(e,(0,i.default)({prefixCls:o,tagName:r},a))};return n.displayName=a,n}}t.LayoutContext=v;var y=function(e){var t=e.prefixCls,r=e.className,a=e.children,n=e.tagName,l=p(e,["prefixCls","className","children","tagName"]),o=(0,d.default)(t,r);return c.createElement(n,(0,i.default)({className:o},l),a)},g=m({suffixCls:"layout",tagName:"section",displayName:"Layout"})((function(e){var t,r=c.useContext(f.ConfigContext).direction,a=c.useState([]),n=(0,u.default)(a,2),s=n[0],m=n[1],y=e.prefixCls,g=e.className,h=e.children,x=e.hasSider,b=e.tagName,O=p(e,["prefixCls","className","children","hasSider","tagName"]),C=(0,d.default)(y,(t={},(0,o.default)(t,"".concat(y,"-has-sider"),"boolean"===typeof x?x:s.length>0),(0,o.default)(t,"".concat(y,"-rtl"),"rtl"===r),t),g),w=c.useMemo((function(){return{siderHook:{addSider:function(e){m((function(t){return[].concat((0,l.default)(t),[e])}))},removeSider:function(e){m((function(t){return t.filter((function(t){return t!==e}))}))}}}}),[]);return c.createElement(v.Provider,{value:w},c.createElement(b,(0,i.default)({className:C},O),h))})),h=m({suffixCls:"layout-header",tagName:"header",displayName:"Header"})(y);t.Header=h;var x=m({suffixCls:"layout-footer",tagName:"footer",displayName:"Footer"})(y);t.Footer=x;var b=m({suffixCls:"layout-content",tagName:"main",displayName:"Content"})(y);t.Content=b;var O=g;t.default=O}}]);