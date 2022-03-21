"use strict";
exports.id = 7004;
exports.ids = [7004];
exports.modules = {

/***/ 7004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const CommonContent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(2625), __webpack_require__.e(290), __webpack_require__.e(1417), __webpack_require__.e(2615), __webpack_require__.e(6516), __webpack_require__.e(2905), __webpack_require__.e(7110)]).then(__webpack_require__.bind(__webpack_require__, 7110)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7110)],
    modules: ["course/courseList/ongoingCourse/index.tsx -> " + '../commonContent']
  }
}); // 获取进行中课程

const OngoingCourse = props => {
  const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.createFromIconfontCN)({
    scriptUrl: ['//at.alicdn.com/t/font_2429434_dzbsomf1gqq.js']
  });
  const {
    getCount
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CommonContent, {
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(IconFont, {
        type: "icon-shalou-fan"
      }),
      courseTitle: '进行中',
      getCount: getCount,
      isRecycle: 1,
      courseDataState: 1
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OngoingCourse);

/***/ })

};
;