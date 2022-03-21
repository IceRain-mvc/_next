"use strict";
(() => {
var exports = {};
exports.id = 7142;
exports.ids = [7142,5367,2194,538,5918,7492];
exports.modules = {

/***/ 7492:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1215);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9280);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 *  author：祝成
 *  division：评论管理
 */



const StatsModule = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(1112), __webpack_require__.e(290), __webpack_require__.e(6124), __webpack_require__.e(8598), __webpack_require__.e(1166)]).then(__webpack_require__.bind(__webpack_require__, 1166)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1166)],
    modules: ["course/stats/comment/index.tsx -> " + '../statsModule']
  }
});



function CommentStats() {
  // context 获取课程-名称-id
  const {
    0: statsPara
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)((0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_0__/* .useStats */ .V)().user);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: statsPara.comment ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_4___default().commenttitle),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: "\u60A8\u672A\u5F00\u542F\u8BFE\u7A0B\u8BC4\u8BBA"
        })
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StatsModule, {
      value: undefined
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommentStats);

/***/ }),

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ StatsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StatsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  user: {},
  setUser: () => ({}),
  collapsed: false,
  toggleCollapse: () => ({})
});

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 1788:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 4528:
/***/ ((module) => {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("antd/lib/table");

/***/ }),

/***/ 1886:
/***/ ((module) => {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,2311], () => (__webpack_exec__(7492)));
module.exports = __webpack_exports__;

})();