"use strict";
exports.id = 2615;
exports.ids = [2615];
exports.modules = {

/***/ 2615:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tS": () => (/* binding */ getCourseList),
/* harmony export */   "MK": () => (/* binding */ changeStar),
/* harmony export */   "GY": () => (/* binding */ increaseStar),
/* harmony export */   "u3": () => (/* binding */ deleteRecycle),
/* harmony export */   "fg": () => (/* binding */ recoverCourse),
/* harmony export */   "eA": () => (/* binding */ deleteColumn),
/* harmony export */   "xs": () => (/* binding */ changeCourseType),
/* harmony export */   "b7": () => (/* binding */ getCountList),
/* harmony export */   "BP": () => (/* binding */ autoDelete)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取所有数据

function getCourseList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course',
    method: 'GET',
    params
  });
} // 取消星标

function changeStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/cancelStar',
    method: 'PUT',
    data
  });
} // 设置星标

function increaseStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/addStar',
    method: 'PUT',
    data
  });
} // 删除至回收站

function deleteRecycle(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/deleteRecycle',
    method: 'PUT',
    data
  });
} // 恢复课程

function recoverCourse(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/recoverCourse',
    method: 'PUT',
    data
  });
} // 从回收站删除

function deleteColumn(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/deleteColumn',
    method: 'DELETE',
    data
  });
} // 更改课程分类

function changeCourseType(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/changeCourseType',
    method: 'PUT',
    data
  });
} // 获取每个模块条数

function getCountList() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/countList',
    method: 'GET'
  });
} // 自动删除回收站数据

function autoDelete() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'course/autoDelete',
    method: 'DELETE'
  });
}

/***/ })

};
;