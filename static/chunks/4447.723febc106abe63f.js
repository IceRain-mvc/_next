(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4447],{94447:function(t,e,n){"use strict";n.r(e);var r=n(40037),s=n(67294),a=n(5152),o=n(76461),u=n.n(o),c=n(65918),i=n(85893),l=(0,a.default)((function(){return Promise.all([n.e(1400),n.e(7334),n.e(7221)]).then(n.bind(n,77221))}),{loadableGenerated:{webpack:function(){return[77221]},modules:["course/stats/index.tsx -> ./studyStats"]}}),d=(0,a.default)((function(){return n.e(7492).then(n.bind(n,97492))}),{loadableGenerated:{webpack:function(){return[97492]},modules:["course/stats/index.tsx -> ./comment"]}}),f=(0,a.default)((function(){return Promise.all([n.e(5400),n.e(9303),n.e(8982)]).then(n.bind(n,65220))}),{loadableGenerated:{webpack:function(){return[65220]},modules:["course/stats/index.tsx -> ./answer"]}}),b=(0,a.default)((function(){return n.e(2345).then(n.bind(n,53467))}),{loadableGenerated:{webpack:function(){return[53467]},modules:["course/stats/index.tsx -> ./absent"]}});e.default=function(t){var e=t.value,n=e.courseId,a=e.stats,o=e.courseComment,m=e.courseAnswer,p=e.coursePeriod,x=e.courseCompleteCondition,h=e.courseAudit,v=e.courseStyle,_=(0,s.useState)(a),w=_[0],y=_[1],C=(0,s.useState)(["\u5b66\u4e60\u7edf\u8ba1","\u8bc4\u8bba\u7ba1\u7406","\u7b54\u7591\u7ba1\u7406"]),k=C[0],j=C[1];(0,s.useEffect)((function(){2===v&&j([].concat((0,r.Z)(k),["\u7f3a\u5e2d\u7edf\u8ba1"]))}),[]);var S=(0,s.useState)(!1),A=S[0],E=S[1];return(0,s.useEffect)((function(){A&&setTimeout((function(){return E(!1)}))}),[A]),(0,i.jsx)(c.q.Provider,{value:{user:{name:"stats",nowIndex:"".concat(w),comment:o,answer:m,token:"".concat(n),role:"admin",period:p,fieldCommand:v,completeCondition:x,courseAudit:h},setUser:function(){return{}},collapsed:!1,toggleCollapse:function(){return{}}},children:(0,i.jsxs)("div",{className:u().statstabs,children:[(0,i.jsx)("div",{className:u().statstabpane,children:k&&k.map((function(t,e){return(0,i.jsx)("p",{onClick:function(){y(e)},className:w===e?u().statstabpanecolor:void 0,children:t},e)}))}),0===w?(0,i.jsx)(l,{}):null,1===w?(0,i.jsx)(d,{}):null,2===w?(0,i.jsx)(f,{}):null,3===w?(0,i.jsx)(b,{}):null]})})}},65918:function(t,e,n){"use strict";n.d(e,{q:function(){return r}});var r=n(67294).createContext({user:{},setUser:function(){return{}},collapsed:!1,toggleCollapse:function(){return{}}})},76461:function(t){t.exports={statstabs:"stats_statstabs__6Ry72",statstabpane:"stats_statstabpane__4WF29",statstabpanecolor:"stats_statstabpanecolor__YmoLI"}},40037:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(56586);var s=n(16988);function a(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,s.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);