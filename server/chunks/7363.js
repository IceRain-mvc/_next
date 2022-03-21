"use strict";
exports.id = 7363;
exports.ids = [7363];
exports.modules = {

/***/ 7363:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "oE": () => (/* binding */ addListData),
/* harmony export */   "Um": () => (/* binding */ addManyListData),
/* harmony export */   "jl": () => (/* binding */ getAllData),
/* harmony export */   "IV": () => (/* binding */ del),
/* harmony export */   "es": () => (/* binding */ batchDeles),
/* harmony export */   "Mv": () => (/* binding */ changeDate),
/* harmony export */   "Ah": () => (/* binding */ changeDateNumber),
/* harmony export */   "Cc": () => (/* binding */ getFindNumber),
/* harmony export */   "aQ": () => (/* binding */ batchChanges),
/* harmony export */   "Rh": () => (/* binding */ findManyNumber)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

// 新增数据
function addListData(_ref) {
  let data = Object.assign({}, _ref);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students',
    method: 'POST',
    data
  });
} // 新增多条数据

function addManyListData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/addImportData',
    method: 'POST',
    data
  });
} // 获取数据

function getAllData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students',
    method: 'GET',
    params
  });
} // 删除

function del(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students',
    method: 'DELETE',
    params: id
  });
} // 批量删除

function batchDeles(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students',
    method: 'DELETE',
    params: id
  });
} // 修改数据

function changeDate(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students',
    method: 'PUT',
    data
  });
} // 通过账号修改

function changeDateNumber(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/updateNumber',
    method: 'PUT',
    data
  });
} // 查找数据

function getFindNumber(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/findByStudentNumber',
    method: 'GET',
    params
  });
} // 批量修改

function batchChanges(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/batchChange',
    method: 'PUT',
    data
  });
} // 批量查找

function findManyNumber(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/findReturnImport',
    method: 'POST',
    data
  });
}

/***/ })

};
;