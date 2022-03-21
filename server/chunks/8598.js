"use strict";
exports.id = 8598;
exports.ids = [8598];
exports.modules = {

/***/ 8598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fy": () => (/* binding */ getStats),
/* harmony export */   "W0": () => (/* binding */ getAbsent),
/* harmony export */   "av": () => (/* binding */ getStatsDerive),
/* harmony export */   "M0": () => (/* binding */ getExportAbsent),
/* harmony export */   "aC": () => (/* binding */ getStatistics)
/* harmony export */ });
/* unused harmony exports getExportComment, statsAddStudy, getComment */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取 stats的接口 学习统计

function getStats(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course-stats/getStats',
    method: 'GET',
    params
  });
} // 获取Absent的接口   缺席统计

function getAbsent(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course-stats/getAbsent',
    method: 'GET',
    params
  });
} // 导出全部数据的接口 -学习统计页

function getStatsDerive(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course-stats/getStatsAll',
    method: 'GET',
    params
  });
} // 导出全部数据的接口 -学习统计页

function getExportComment(params) {
  return httpProvider.request({
    url: 'course-stats/getExportComment',
    method: 'GET',
    params
  });
} // 导出缺席统计的接口 -缺席统计页

function getExportAbsent(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course-stats/getExportAbsent',
    method: 'GET',
    params
  });
} // getStatistics  参加人数及通过率

function getStatistics(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course-stats/getStatistics',
    method: 'GET',
    params
  });
} // 课程添加学员接口

function statsAddStudy(data) {
  return httpProvider.request({
    url: 'course-stats/statsAddStudy',
    method: 'POST',
    data
  });
} // 测试  获取评论管理的-----

function getComment(params) {
  return httpProvider.request({
    url: 'course-stats/getComment',
    method: 'GET',
    params
  });
}

/***/ })

};
;