"use strict";
exports.id = 1748;
exports.ids = [1748];
exports.modules = {

/***/ 1748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RedactMark)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Editor = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(3286), __webpack_require__.e(6166), __webpack_require__.e(1177)]).then(__webpack_require__.bind(__webpack_require__, 1177)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1177)],
    modules: ["../src/components/markdown/redactMark.tsx -> " + './dynaRender']
  }
});
class RedactMark extends react__WEBPACK_IMPORTED_MODULE_0__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "getContent", val => {
      this.props.getContent(val);
    });
  }

  render() {
    return (
      /*#__PURE__*/
      // markdown编辑器
      react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Editor, {
        previewMode: this.props.previewMode,
        tacitly: this.props.tacitly,
        getContent: this.getContent,
        clearContent: this.props.clearContent
      })
    );
  }

}

/***/ })

};
;