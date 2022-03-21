"use strict";
(() => {
var exports = {};
exports.id = 931;
exports.ids = [931,2194];
exports.modules = {

/***/ 3288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const TextSet = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(7779)]).then(__webpack_require__.bind(__webpack_require__, 7779)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7779)],
    modules: ["cetan/ce.tsx -> " + '@/components/exam/textSet/textSetes']
  }
});
const PreviewText = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 3552).then(__webpack_require__.bind(__webpack_require__, 3552)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3552)],
    modules: ["cetan/ce.tsx -> " + '@/components/exam/previewText/index']
  }
});

const Ce = () => {
  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: preview,
    1: setPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const mychu = () => {
    setalertShow(true);
  };

  const closeAlert = () => {
    setalertShow(false);
  };

  const textPaper = res => {
    setPreview(res);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  };

  const changePreview = res => {
    setPreview(res);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
      onClick: mychu,
      children: "\u6309\u94AE"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(TextSet, {
      exercise: true,
      textPaper: textPaper,
      closeAlert: closeAlert,
      examid: '5f2f5647-15ee-4725-9dd5-4918bd5fe56b',
      sourt: 2,
      Chapter: true,
      alertShow: alertShow,
      changeAlertFlag: changeAlertFlag
    }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(PreviewText, {
      preview: preview,
      changePreview: changePreview,
      parderId: 49,
      judgement: ''
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ce);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 1489:
/***/ ((module) => {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 8518:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 4503:
/***/ ((module) => {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 6418:
/***/ ((module) => {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ 3984:
/***/ ((module) => {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ 7386:
/***/ ((module) => {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ 7374:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ 9348:
/***/ ((module) => {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("moment/locale/zh-cn");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152], () => (__webpack_exec__(3288)));
module.exports = __webpack_exports__;

})();