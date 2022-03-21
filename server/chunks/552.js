"use strict";
exports.id = 552;
exports.ids = [552,5764,6594];
exports.modules = {

/***/ 4455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W3": () => (/* binding */ getPaperQuestions),
/* harmony export */   "HX": () => (/* binding */ addBigQuestion),
/* harmony export */   "u8": () => (/* binding */ deleteThisQuestion),
/* harmony export */   "HC": () => (/* binding */ addRandomSelectionStrategy),
/* harmony export */   "yU": () => (/* binding */ deleteThisStrategy),
/* harmony export */   "iv": () => (/* binding */ getQuestionTypes),
/* harmony export */   "eb": () => (/* binding */ getQuestionList),
/* harmony export */   "kh": () => (/* binding */ updateStrategy),
/* harmony export */   "R4": () => (/* binding */ moveToTop),
/* harmony export */   "tI": () => (/* binding */ getQuestions),
/* harmony export */   "Mm": () => (/* binding */ updScore),
/* harmony export */   "KX": () => (/* binding */ updScores),
/* harmony export */   "LI": () => (/* binding */ getQues),
/* harmony export */   "in": () => (/* binding */ saveBigQuestionTitle),
/* harmony export */   "zl": () => (/* binding */ saveDescription),
/* harmony export */   "jZ": () => (/* binding */ getQuestionsInStore),
/* harmony export */   "g9": () => (/* binding */ saveQuestionInfoBig),
/* harmony export */   "Km": () => (/* binding */ deleteQuestion),
/* harmony export */   "p6": () => (/* binding */ createPaper),
/* harmony export */   "JI": () => (/* binding */ createPapercise),
/* harmony export */   "Up": () => (/* binding */ addOneStrategy),
/* harmony export */   "xr": () => (/* binding */ getSmokeStrategy),
/* harmony export */   "Kz": () => (/* binding */ deleteStrategy),
/* harmony export */   "fn": () => (/* binding */ getStrategyQuestionList),
/* harmony export */   "Mr": () => (/* binding */ saveQuestionInfoStrategy),
/* harmony export */   "F4": () => (/* binding */ updateSmokeStrategy),
/* harmony export */   "yD": () => (/* binding */ getTest),
/* harmony export */   "sR": () => (/* binding */ generatorSmokePaper),
/* harmony export */   "BG": () => (/* binding */ saveStrategy),
/* harmony export */   "me": () => (/* binding */ getSmallQuestionCount),
/* harmony export */   "fV": () => (/* binding */ setIsPublish),
/* harmony export */   "bi": () => (/* binding */ delSmokeQuestion),
/* harmony export */   "NY": () => (/* binding */ changeQuesSort),
/* harmony export */   "Di": () => (/* binding */ infoPageQuestion),
/* harmony export */   "_v": () => (/* binding */ deleteStoreTest),
/* harmony export */   "wN": () => (/* binding */ infoSmokeStrategy),
/* harmony export */   "QV": () => (/* binding */ bathDel),
/* harmony export */   "g$": () => (/* binding */ deleteStoreTestGroup)
/* harmony export */ });
/* unused harmony export deleteQuestionStragety */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // @ts-ignore

// 获取试卷信息
function getPaperQuestions(param) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/' + param,
    method: 'GET'
  });
} // 添加大题

function addBigQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question',
    method: 'POST',
    data
  });
} // 删除当前大题

function deleteThisQuestion(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/' + id,
    method: 'DELETE'
  });
} // 添加抽题策略

function addRandomSelectionStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/add-strategy/' + id,
    method: 'POST'
  });
} // 删除当前策略

function deleteThisStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/question-selection-strategy/' + id,
    method: 'DELETE'
  });
}
function deleteQuestionStragety(data) {
  return httpProvider.request({
    url: '/paper-big-question/delete-strategy',
    method: 'DELETE',
    data
  });
} // export function getStrategyList(id) {
//   return httpProvider.request({
//     url: '/question-selection-strategy/' + id,
//     method: 'GET',
//   });
// }
// 查询试题表，获取各个题型不同难度的数量

function getQuestionTypes(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/type',
    method: 'GET',
    params
  });
} // 查询试题表，获取数

function getQuestionList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/list',
    method: 'GET',
    params
  });
} // 修改策略

function updateStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/question-selection-strategy/update',
    method: 'PUT',
    data
  });
} // 控制大题移动

function moveToTop(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/move-to-top',
    method: 'PUT',
    data
  });
}
function getQuestions(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/paper/' + id,
    method: 'get'
  });
}
function updScore(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/change',
    method: 'put',
    data
  });
}
function updScores(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/change-group',
    method: 'put',
    data
  });
}
function getQues(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/test-question/' + id,
    method: 'get'
  });
} // 保存大题标题

function saveBigQuestionTitle(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-title',
    method: 'PUT',
    data
  });
} // 修改大题详情

function saveDescription(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-description',
    method: 'PUT',
    data
  });
} // 获取试题库中的题

function getQuestionsInStore(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/search-in-store',
    method: 'GET',
    params
  });
} // 保存试题到到大题中

function saveQuestionInfoBig(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-ques',
    method: 'PUT',
    data
  });
} // 删除大题中的试题

function deleteQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/delete-small-question',
    method: 'PUT',
    data
  });
} // 创建试卷

function createPaper(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam',
    method: 'POST',
    data
  });
} // 创建练习

function createPapercise(data) {
  console.log(data);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/paper-exercise',
    method: 'POST',
    data
  });
} // 抽题策略试卷添加抽题策略

function addOneStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy',
    method: 'POST',
    data
  });
} // 获取抽题策略

function getSmokeStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/smoke-strategy/' + id,
    method: 'GET'
  });
}
function deleteStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/' + id,
    method: 'DELETE'
  });
} // 通过策略id获取试题

function getStrategyQuestionList(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/' + id,
    method: 'GET'
  });
} // 将试题存入抽题策略

function saveQuestionInfoStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/save-ques',
    method: 'PUT',
    data
  });
} // 更新抽题试卷策略

function updateSmokeStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/update',
    method: 'PUT',
    data
  });
} // 查看考试发布状态
// export function getPublish(examId): Promise<data> {
//   return httpProvider.request({
//     url: '/exam/getQuestion/' + examId,
//     method: 'GET',
//   });
// }
// 查找单个试题

function getTest(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/getOne/' + id,
    method: 'GET'
  });
} // 生成抽题试卷

function generatorSmokePaper(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/generator-strategy/' + id,
    method: 'PUT'
  });
} // 生成随机试卷

function saveStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/ques/' + id,
    method: 'PUT'
  });
} // 查看小题数量

function getSmallQuestionCount(paperId) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/questionCount/' + paperId,
    method: 'GET'
  });
} // 修改考试发布状态

function setIsPublish(examId) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/setIsPublish/' + examId,
    method: 'PUT'
  });
} // 删除抽题管理试题列表试题

function delSmokeQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/del-smoke-ques',
    method: 'PUT',
    data
  });
} // 修改固定试卷试题顺序

function changeQuesSort(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/change-ques-sort',
    method: 'PUT',
    data
  });
} // 导入到页面中大题试题的方法

function infoPageQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/info',
    method: 'PUT',
    data
  });
} // 删除试题库中试题

function deleteStoreTest(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/delSingleTest/' + id,
    method: 'DELETE'
  });
} // 将试题导入到抽题策略

function infoSmokeStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/info',
    method: 'PUT',
    data
  });
} // 批量删除抽题策略试题

function bathDel(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/bath-del',
    method: 'PUT',
    data
  });
} // 删除试题库中试题

function deleteStoreTestGroup(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/del-group-test',
    method: 'DELETE',
    data
  });
}

/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yE": () => (/* binding */ getOperationData),
/* harmony export */   "TH": () => (/* binding */ addOperationData),
/* harmony export */   "Kn": () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取全部数据

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // 添加数据

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // 获取ip地址

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

/***/ })

};
;