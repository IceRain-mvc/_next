"use strict";
exports.id = 4762;
exports.ids = [4762];
exports.modules = {

/***/ 4762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4703);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




const ListMode = props => {
  const {
    selectChange,
    changeTable
  } = props; // 分页pagination、排序sorter  改变时触发 然后请求

  const onChangeTable = async (pagination, filters, sorter) => {
    changeTable(pagination, sorter, filters);
  }; // 多选 回调


  const onSelectChange = (selectedRowKeys, selectedRows) => {
    selectChange(selectedRowKeys, selectedRows);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_components_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_1__["default"], {
    rowKeyId: 'id',
    data: props.datas,
    dataCount: props.dataCounts // 数据的总条数
    ,
    columns: props.columns,
    loading: props.loadings,
    isCheckout: true,
    pageSize: props.defultNumber,
    current: props.page,
    pageSizeOptions: ['10', '20', '50', '100'],
    onSelectChange: onSelectChange,
    onChangeTable: onChangeTable
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListMode);

/***/ })

};
;