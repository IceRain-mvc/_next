"use strict";
exports.id = 1853;
exports.ids = [1853];
exports.modules = {

/***/ 6153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5345);
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(for_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





const DynaRender = props => {
  const {
    data,
    changeValue
  } = props;
  const {
    0: codeView,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(data);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    setCode(data);
  }, [data]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: codeView ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((for_editor__WEBPACK_IMPORTED_MODULE_0___default()), {
      value: codeView,
      style: {
        height: 300
      },
      onChange: val => {
        changeValue(val);
        setCode(val);
      },
      toolbar: {
        h1: true,
        // h1
        h2: true,
        // h2
        h3: true,
        // h3
        h4: true,
        // h4
        img: true,
        // 图片
        link: true,
        // 链接
        code: true,
        // 代码块
        expand: true,
        // 全屏
        undo: true,
        // 撤销
        redo: true,
        // 重做
        preview: true
      }
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LoadingOutlined, {})
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynaRender);

/***/ })

};
;