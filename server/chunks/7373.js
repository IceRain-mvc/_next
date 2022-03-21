"use strict";
exports.id = 7373;
exports.ids = [7373];
exports.modules = {

/***/ 7373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const CommonPagination = props => {
  const {
    dataCount,
    // 数据的总条数
    onChange,
    // 分页改变的回调
    pageSizeOptions,
    // 配置每页显示多少条数据
    defaultPageSize,
    // 默认显示多少条数据
    current = 1
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx((antd_lib_pagination__WEBPACK_IMPORTED_MODULE_0___default()), {
    current: current,
    showSizeChanger: true,
    showQuickJumper: true,
    total: dataCount,
    defaultPageSize: defaultPageSize,
    pageSizeOptions: pageSizeOptions,
    showTotal: total => `共 ${total} 条记录`,
    size: 'small',
    onChange: onChange,
    showTitle: false
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonPagination);

/***/ })

};
;