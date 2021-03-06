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

// ??????????????????
function getPaperQuestions(param) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/' + param,
    method: 'GET'
  });
} // ????????????

function addBigQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question',
    method: 'POST',
    data
  });
} // ??????????????????

function deleteThisQuestion(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/' + id,
    method: 'DELETE'
  });
} // ??????????????????

function addRandomSelectionStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/add-strategy/' + id,
    method: 'POST'
  });
} // ??????????????????

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
// ?????????????????????????????????????????????????????????

function getQuestionTypes(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/type',
    method: 'GET',
    params
  });
} // ???????????????????????????

function getQuestionList(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/list',
    method: 'GET',
    params
  });
} // ????????????

function updateStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/question-selection-strategy/update',
    method: 'PUT',
    data
  });
} // ??????????????????

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
} // ??????????????????

function saveBigQuestionTitle(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-title',
    method: 'PUT',
    data
  });
} // ??????????????????

function saveDescription(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-description',
    method: 'PUT',
    data
  });
} // ????????????????????????

function getQuestionsInStore(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/search-in-store',
    method: 'GET',
    params
  });
} // ???????????????????????????

function saveQuestionInfoBig(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/save-ques',
    method: 'PUT',
    data
  });
} // ????????????????????????

function deleteQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/delete-small-question',
    method: 'PUT',
    data
  });
} // ????????????

function createPaper(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam',
    method: 'POST',
    data
  });
} // ????????????

function createPapercise(data) {
  console.log(data);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/paper-exercise',
    method: 'POST',
    data
  });
} // ????????????????????????????????????

function addOneStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy',
    method: 'POST',
    data
  });
} // ??????????????????

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
} // ????????????id????????????

function getStrategyQuestionList(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/' + id,
    method: 'GET'
  });
} // ???????????????????????????

function saveQuestionInfoStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/save-ques',
    method: 'PUT',
    data
  });
} // ????????????????????????

function updateSmokeStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/update',
    method: 'PUT',
    data
  });
} // ????????????????????????
// export function getPublish(examId): Promise<data> {
//   return httpProvider.request({
//     url: '/exam/getQuestion/' + examId,
//     method: 'GET',
//   });
// }
// ??????????????????

function getTest(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/testBank/getOne/' + id,
    method: 'GET'
  });
} // ??????????????????

function generatorSmokePaper(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/generator-strategy/' + id,
    method: 'PUT'
  });
} // ??????????????????

function saveStrategy(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/ques/' + id,
    method: 'PUT'
  });
} // ??????????????????

function getSmallQuestionCount(paperId) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/questionCount/' + paperId,
    method: 'GET'
  });
} // ????????????????????????

function setIsPublish(examId) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exam/setIsPublish/' + examId,
    method: 'PUT'
  });
} // ????????????????????????????????????

function delSmokeQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/del-smoke-ques',
    method: 'PUT',
    data
  });
} // ??????????????????????????????

function changeQuesSort(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/change-ques-sort',
    method: 'PUT',
    data
  });
} // ???????????????????????????????????????

function infoPageQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-big-question/info',
    method: 'PUT',
    data
  });
} // ????????????????????????

function deleteStoreTest(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'testBank/delSingleTest/' + id,
    method: 'DELETE'
  });
} // ??????????????????????????????

function infoSmokeStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/info',
    method: 'PUT',
    data
  });
} // ??????????????????????????????

function bathDel(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/smoke-strategy/bath-del',
    method: 'PUT',
    data
  });
} // ????????????????????????

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
 // ??????????????????

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // ????????????

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // ??????ip??????

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

/***/ })

};
;