"use strict";
exports.id = 6305;
exports.ids = [6305];
exports.modules = {

/***/ 6305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出excel
// 考试成绩页面 ----------


const Restudied = async data => {
  (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter(item => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    return item;
  }), {
    authName: '姓名',
    startTime: '开始时间',
    endTime: '结束时间',
    Participation: '考试方式',
    types: '参加人次',
    participants: '及格人次',
    exercises: '及格率',
    Average: '正确率',
    Scoring: '得分率',
    Correct: '平均分',
    errors: '最高分',
    Lowest: '最低分'
  }, '考生信息');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restudied);

/***/ })

};
;