(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5196,631,6256,139],{81112:function(t,e,r){"use strict";r.r(e);var n=r(92809),o=r(40037),c=r(7869),u=r.n(c);function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){(0,n.Z)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f=function(t){for(var e="",r=0;t>0;)r=t%26+1,e=String.fromCharCode(r+64)+e,t=(t-r)/26;return e},s=function(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n!==t.length;++n)r[n]=255&t.charCodeAt(n);return e};e.default=function(t,e,r){t=(0,o.Z)(t);var n=e;t.unshift({});var c=[],i=[];for(var l in n)c.push(l),i.push({wpx:100}),t[0][l]=n[l];n=[],t.map((function(t,e){return c.map((function(r,n){return{rowsvalue:t[r],position:(n>25?f(n):String.fromCharCode(65+n))+(e+1),fontsize:{fontstyle:{long:20,big:!0}}}}))})).reduce((function(t,e){return t.concat(e)})).forEach((function(t){t.rowsvalue=null===t.rowsvalue?" ":t.rowsvalue,n[t.position]={v:t.rowsvalue}}));var p=Object.keys(n),b={SheetNames:[],Sheets:{}},y="sheet1";b.SheetNames.push(y),b.Sheets.sheet1=a(a({},n),{},{"!ref":p[0]+":"+p[p.length-1],"!cols":i});var h=new Blob([s(u().write(b,{bookType:"xlsx",bookSST:!1,type:"binary"}))],{type:""}),v=(new Date).getTime(),m=URL.createObjectURL(h),w=document.createElement("a");w.href=m,w.download="".concat(r,"_").concat(v,".xlsx"),w.click(),setTimeout((function(){URL.revokeObjectURL(h)}),100)}},18685:function(){},20067:function(){},55382:function(){},72095:function(){},72061:function(){},91298:function(){},56586:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}r.d(e,{Z:function(){return n}})},40037:function(t,e,r){"use strict";r.d(e,{Z:function(){return c}});var n=r(56586);var o=r(16988);function c(t){return function(t){if(Array.isArray(t))return(0,n.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,o.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},16988:function(t,e,r){"use strict";r.d(e,{Z:function(){return o}});var n=r(56586);function o(t,e){if(t){if("string"===typeof t)return(0,n.Z)(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(t,e):void 0}}}}]);