"use strict";
exports.id = 1417;
exports.ids = [1417];
exports.modules = {

/***/ 1417:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dm": () => (/* binding */ getExamList),
/* harmony export */   "VK": () => (/* binding */ getSave),
/* harmony export */   "a4": () => (/* binding */ getExamineeMessage),
/* harmony export */   "nG": () => (/* binding */ getThisExamMessage),
/* harmony export */   "zZ": () => (/* binding */ updateThisExam),
/* harmony export */   "kM": () => (/* binding */ getExerList),
/* harmony export */   "v4": () => (/* binding */ selectExamineeExist),
/* harmony export */   "bP": () => (/* binding */ getExercise),
/* harmony export */   "VF": () => (/* binding */ updateExercise),
/* harmony export */   "np": () => (/* binding */ getThisExerciseMessage)
/* harmony export */ });
/* unused harmony export Compile */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

// 考生参加方式数据
function getExamList() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/participation-way/getExamList',
    method: 'GET'
  });
} // 考试 点击保存

function getSave(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam',
    method: 'POST',
    data
  });
} // 编辑考试接口

function Compile() {
  return httpProvider.request({
    url: '/exam/count',
    method: 'GET'
  });
} // 获取所有考生的接口

function getExamineeMessage(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/students/get-message',
    method: 'GET',
    params
  });
} // 获取当前考试信息

function getThisExamMessage(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/this-exam/' + id,
    method: 'GET'
  });
} // 更新当前考试信息

function updateThisExam(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/update-exam',
    method: 'PUT',
    data
  });
} // 练习 考生参加方式

function getExerList() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-way/getExamList',
    method: 'GET'
  });
} // 查询考生信息是否存在

function selectExamineeExist(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/students/student-exist',
    method: 'GET',
    params
  });
} // ----------------------练习模块------------------------
// 练习 保存练习

function getExercise(data) {
  // console.log(data);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise',
    method: 'POST',
    data
  });
} // 更新当前练习信息

function updateExercise(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise/update-exercise',
    method: 'PUT',
    data
  });
} // 获取当前--练习--的信息

function getThisExerciseMessage(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise/this-exercise/' + id,
    method: 'GET'
  });
}

/***/ })

};
;