"use strict";
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XM": () => (/* binding */ getLearnWay),
/* harmony export */   "P6": () => (/* binding */ createCourse),
/* harmony export */   "S_": () => (/* binding */ createCourseLearnFree),
/* harmony export */   "JN": () => (/* binding */ createCourseLearnChoose),
/* harmony export */   "X0": () => (/* binding */ compileCourse),
/* harmony export */   "vt": () => (/* binding */ updataFree),
/* harmony export */   "De": () => (/* binding */ updataChoose),
/* harmony export */   "GB": () => (/* binding */ getBatchStudent),
/* harmony export */   "UX": () => (/* binding */ getCourseItem),
/* harmony export */   "JD": () => (/* binding */ getStudentItem)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function getLearnWay() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'courseLearnWay/getAll',
    method: 'GET'
  });
} // 创建课程

function createCourse(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course',
    method: 'POST',
    data
  });
}
function createCourseLearnFree(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course-learn-free',
    method: 'POST',
    data
  });
}
function createCourseLearnChoose(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course-learn-choose',
    method: 'POST',
    data
  });
} // 编辑课程主表

function compileCourse(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course/compileCourse',
    method: 'PUT',
    data
  });
} // 编辑附表free

function updataFree(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course-learn-free',
    method: 'PUT',
    data
  });
} // 编辑附表choose

function updataChoose(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course-learn-choose',
    method: 'PUT',
    data
  });
}
function getBatchStudent(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course/getBatchStudent',
    method: 'GET',
    params
  });
}
function getCourseItem(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course/getCourseItem',
    method: 'GET',
    params
  });
}
function getStudentItem(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/course/getStudentItem',
    method: 'GET',
    params
  });
}

/***/ })

};
;