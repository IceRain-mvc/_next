"use strict";
exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 9473:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m": () => (/* binding */ timerTotimer),
/* harmony export */   "I": () => (/* binding */ exportExcelFn)
/* harmony export */ });
// eslint-disable-next-line consistent-return
const timerTotimer = timer => {
  if (timer !== undefined) {
    const date = new Date(timer);
    const n = timer.slice(0, timer.indexOf('T'));
    const m = date.toTimeString().split(' ')[0];
    return n + ' ' + m;
  }
};
const exportExcelFn = async (data, itemText, title) => {
  // 导出方法
  const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default; // 导出excel数据

  exportExcel(data, itemText, title);
};

/***/ }),

/***/ 7097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tn": () => (/* binding */ getGradeFindAll),
/* harmony export */   "rz": () => (/* binding */ geteFindExamData),
/* harmony export */   "Nj": () => (/* binding */ getInregralAll),
/* harmony export */   "hv": () => (/* binding */ clearIntegral)
/* harmony export */ });
/* unused harmony export findExamTest */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 创建数据
// export function createData(data) {
//   return httpProvider.request({
//     url: '/analyse-grade/create',
//     method: 'POST',
//     data,
//   });
// }
// 获取成绩统计所需数据 查找符合条件的
// 自行创建数据  请求
// export function getGradeFindAll(params): Promise<[GradeAll]> {
//   return httpProvider.request({
//     url: '/analyse-grade/findData',
//     method: 'GET',
//     params,
//   });
// }
// 通过service对service请求数据

function getGradeFindAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/analyse-grade/findData',
    method: 'GET',
    params
  });
} // 查找试卷 对应的数据

function findExamTest(params) {
  return httpProvider.request({
    url: '/analyse-grade/findExam',
    method: 'GET',
    params
  });
} // 查找试卷 对应的数据

function geteFindExamData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/analyse-answer/getExamData',
    method: 'GET',
    params
  });
} // 查找积分 对应的数据

function getInregralAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/analyse-integral/getInregralAll',
    method: 'GET',
    params
  });
} // 清空积分

function clearIntegral(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/analyse-integral/clearIntegral',
    method: 'PUT',
    params
  });
}

/***/ })

};
;