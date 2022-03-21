"use strict";
exports.id = 418;
exports.ids = [418];
exports.modules = {

/***/ 418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3672);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_part_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const ButtonCommon = props => {
  const {
    type = 'grey'
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
    style: props.style,
    className: (() => {
      switch (type) {
        case 'greyLight':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().greyLight)}`;

        case 'blueLight':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().blueLight)}`;

        case 'redLight':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().redLight)}`;

        case 'grey':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().grey)}`;

        case 'blue':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().blue)}`;

        case 'none':
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().none)}`;

        default:
          return `${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().button)} ${(_part_module_css__WEBPACK_IMPORTED_MODULE_2___default().greyLight)}`;
      }
    })(),
    onClick: e => {
      props.onClick && props.onClick(e);
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
      children: props.children
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ButtonCommon);

/***/ })

};
;