"use strict";
exports.id = 9042;
exports.ids = [9042];
exports.modules = {

/***/ 9042:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Oi": () => (/* binding */ getAlldate),
/* harmony export */   "vy": () => (/* binding */ getAbsentee),
/* harmony export */   "HE": () => (/* binding */ getAllAbsentee),
/* harmony export */   "y5": () => (/* binding */ getTestQuestions)
/* harmony export */ });
/* unused harmony export fuzzySearch */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 缺席
// ------------------------------------缺席考试的数据-------------
// 获取所有

function getAlldate(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/absentStat/getAll',
    method: 'GET',
    params
  });
} // 搜索

function fuzzySearch(params) {
  return httpProvider.request({
    url: '/absentStat/fuzzySearch',
    method: 'GET',
    params
  });
} // ------------------------------------------------缺席人员-------------
// 查找对应考试的缺席人员  getAbsentee

function getAbsentee(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/absentStat/getAbsentee',
    method: 'GET',
    params
  });
} // 获取所有

function getAllAbsentee() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/absentee/getAllAbsentee',
    method: 'GET'
  });
} // --------------------------------------------------试题分析-------------
//  获取数据

function getTestQuestions(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/test-analysis/getTestQuestions',
    method: 'GET',
    params
  });
}

/***/ })

};
;