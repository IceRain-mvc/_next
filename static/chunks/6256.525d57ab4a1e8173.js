(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6256,139],{81112:function(e,t,r){"use strict";r.r(t);var n=r(92809),o=r(40037),c=r(7869),u=r.n(c);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){for(var t="",r=0;e>0;)r=e%26+1,t=String.fromCharCode(r+64)+t,e=(e-r)/26;return t},s=function(e){for(var t=new ArrayBuffer(e.length),r=new Uint8Array(t),n=0;n!==e.length;++n)r[n]=255&e.charCodeAt(n);return t};t.default=function(e,t,r){e=(0,o.Z)(e);var n=t;e.unshift({});var c=[],i=[];for(var l in n)c.push(l),i.push({wpx:100}),e[0][l]=n[l];n=[],e.map((function(e,t){return c.map((function(r,n){return{rowsvalue:e[r],position:(n>25?f(n):String.fromCharCode(65+n))+(t+1),fontsize:{fontstyle:{long:20,big:!0}}}}))})).reduce((function(e,t){return e.concat(t)})).forEach((function(e){e.rowsvalue=null===e.rowsvalue?" ":e.rowsvalue,n[e.position]={v:e.rowsvalue}}));var p=Object.keys(n),h={SheetNames:[],Sheets:{}},b="sheet1";h.SheetNames.push(b),h.Sheets.sheet1=a(a({},n),{},{"!ref":p[0]+":"+p[p.length-1],"!cols":i});var v=new Blob([s(u().write(h,{bookType:"xlsx",bookSST:!1,type:"binary"}))],{type:""}),w=(new Date).getTime(),O=URL.createObjectURL(v),y=document.createElement("a");y.href=O,y.download="".concat(r,"_").concat(w,".xlsx"),y.click(),setTimeout((function(){URL.revokeObjectURL(v)}),100)}},18685:function(){},20067:function(){},55382:function(){},72095:function(){},72061:function(){},91298:function(){}}]);