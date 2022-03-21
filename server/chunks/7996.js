"use strict";
exports.id = 7996;
exports.ids = [7996];
exports.modules = {

/***/ 7996:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Yi": () => (/* binding */ getSomeExamListCount),
/* harmony export */   "Dm": () => (/* binding */ getExamList),
/* harmony export */   "Ih": () => (/* binding */ setExamStar),
/* harmony export */   "K8": () => (/* binding */ setNoExamStar),
/* harmony export */   "TE": () => (/* binding */ deleteExamInRecycleBin),
/* harmony export */   "GF": () => (/* binding */ moveExamInRecycleBin),
/* harmony export */   "cy": () => (/* binding */ removeOutRecycleBin),
/* harmony export */   "lG": () => (/* binding */ copyExamData),
/* harmony export */   "Vh": () => (/* binding */ examTree),
/* harmony export */   "Eg": () => (/* binding */ deleteExamInRecycleBinAll),
/* harmony export */   "K6": () => (/* binding */ getSomeExerciseListCount),
/* harmony export */   "G$": () => (/* binding */ getExerciseList),
/* harmony export */   "fS": () => (/* binding */ setExerciseStar),
/* harmony export */   "fL": () => (/* binding */ setNoExerciseStar),
/* harmony export */   "KW": () => (/* binding */ deleteExerciseInRecycleBin),
/* harmony export */   "zs": () => (/* binding */ moveExerciseInRecycleBin),
/* harmony export */   "i_": () => (/* binding */ removeOutRecycleBinExercise),
/* harmony export */   "ID": () => (/* binding */ copyExerciseData),
/* harmony export */   "A6": () => (/* binding */ exerciseTree),
/* harmony export */   "dQ": () => (/* binding */ deleteExerciseInRecycleBinAll),
/* harmony export */   "Gy": () => (/* binding */ setCode)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取各侧边栏导航数据的总条数

function getSomeExamListCount() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/get-exam-state-count',
    method: 'GET'
  });
} // 获取考试数据

function getExamList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam',
    method: 'GET',
    params
  });
} // 获取星标数据
// export function getExamStarList(params): Promise<examObj> {
//   return httpProvider.request({
//     url: '/exam/starExamList',
//     method: 'GET',
//     params,
//   });
// }
// 设置星标状态

function setExamStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/setStarExam',
    method: 'PUT',
    data
  });
} // 取消星标状态

function setNoExamStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/cancelStarExam',
    method: 'PUT',
    data
  });
} // 删除考试

function deleteExamInRecycleBin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/deleteExamInRecycleBin/' + data,
    method: 'DELETE'
  });
} // 移动回收站

function moveExamInRecycleBin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/removeToRecycleBin/' + data,
    method: 'PUT'
  });
} // 恢复考试

function removeOutRecycleBin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/removeOutRecycleBin/' + data,
    method: 'PUT'
  });
} // 复制的接口

function copyExamData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/copy',
    method: 'POST',
    data
  });
} // 修改树的接口

function examTree(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/change-current-type',
    method: 'PUT',
    data
  });
} // 清空回收站

function deleteExamInRecycleBinAll() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/deleteExamInRecycleBinAll',
    method: 'DELETE'
  });
} // 练习的···············································
// 获取各侧边栏导航数据的总条数

function getSomeExerciseListCount() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/get-exam-state-count',
    method: 'GET'
  });
} // 获取考试数据

function getExerciseList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise',
    method: 'GET',
    params
  });
} // 获取星标数据
// export function getExerciseStarList(params): Promise<exerciseObj> {
//   return httpProvider.request({
//     url: 'exercise/starExerciseList',
//     method: 'GET',
//     params,
//   });
// }
// 设置星标状态

function setExerciseStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/setStarExercise',
    method: 'PUT',
    data
  });
} // 取消星标状态

function setNoExerciseStar(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/cancelStarExercise',
    method: 'PUT',
    data
  });
} // 删除考试

function deleteExerciseInRecycleBin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/deleteExerciseInRecycleBin/' + data,
    method: 'DELETE'
  });
} // 移动回收站

function moveExerciseInRecycleBin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/removeToRecycleBin/' + data,
    method: 'PUT'
  });
} // 恢复考试

function removeOutRecycleBinExercise(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/removeOutRecycleBin/' + data,
    method: 'PUT'
  });
} // 复制的接口

function copyExerciseData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/copy',
    method: 'POST',
    data
  });
} // 修改树的接口

function exerciseTree(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/change-current-type',
    method: 'PUT',
    data
  });
} // 清空回收站

function deleteExerciseInRecycleBinAll() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise/deleteExerciseInRecycleBinAll',
    method: 'DELETE'
  });
} // 添加二维码

function setCode(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exam/qrcode',
    method: 'PUT',
    data
  });
}

/***/ })

};
;