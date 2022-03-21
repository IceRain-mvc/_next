"use strict";
exports.id = 4707;
exports.ids = [4707];
exports.modules = {

/***/ 4707:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u3": () => (/* binding */ ImportExcelGetTestBank),
/* harmony export */   "ww": () => (/* binding */ getExportTest),
/* harmony export */   "y0": () => (/* binding */ ImportExcelAdd),
/* harmony export */   "I0": () => (/* binding */ BatchDeleteFun),
/* harmony export */   "xX": () => (/* binding */ DeleteOne),
/* harmony export */   "QM": () => (/* binding */ SearchRepetitionData),
/* harmony export */   "b": () => (/* binding */ BatchAddData),
/* harmony export */   "J7": () => (/* binding */ DeleteRepetition),
/* harmony export */   "fP": () => (/* binding */ BatchUpdateFun),
/* harmony export */   "CI": () => (/* binding */ UpdateOne),
/* harmony export */   "YU": () => (/* binding */ getTestBankPage)
/* harmony export */ });
/* unused harmony export AddTestQuestion */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 导入 excel 判断 是否重复

function ImportExcelGetTestBank(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/ImportExcelGetTestBank',
    method: 'GET',
    params
  });
} // 导出excel

function getExportTest(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/getExportTest',
    method: 'GET',
    params
  });
} // 添加excel导入的数据

function ImportExcelAdd(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/ImportExcelAdd',
    method: 'POST',
    data
  });
} // 批量删除

function BatchDeleteFun(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/batchDelete',
    method: 'DELETE',
    data
  });
} // 删除一个

function DeleteOne(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: `testBank/${id}`,
    method: 'DELETE'
  });
} // 检查是否有重复数据

function SearchRepetitionData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/searchRepetitionData',
    method: 'GET',
    params
  });
} // 单个新增

function AddTestQuestion(data) {
  return httpProvider.request({
    url: 'testBank/addTest',
    method: 'POST',
    data
  });
} // 批量新增

function BatchAddData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/batchAdd',
    method: 'POST',
    data
  });
} // 删除重复数据

function DeleteRepetition(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/deleteRepetition',
    method: 'POST',
    data
  });
} // 批量更新

function BatchUpdateFun(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/batchUpdate',
    method: 'PUT',
    params
  });
} // 单个更新

function UpdateOne(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/upDateOne',
    method: 'PUT',
    data
  });
} // 分页

function getTestBankPage(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/getPage',
    method: 'GET',
    params
  });
}

/***/ })

};
;