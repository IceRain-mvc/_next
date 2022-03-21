"use strict";
exports.id = 5266;
exports.ids = [5266];
exports.modules = {

/***/ 5266:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出excel
 // 练习统计----------考试成绩

const Play = async data => {
  // 导出excel数据
  (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter((item, index) => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    item.whether = item.achievement > item.passing ? '及格' : '不及格';
    item.stacking = index + 1;
    return item;
  }), {
    names: '姓名',
    startTime: '开始时间',
    endTime: '结束时间',
    when: '用时',
    score: '总分',
    passing: '及格分',
    achievement: '成绩',
    correct: '正确率',
    scoring: '得分率',
    whether: '是否及格',
    examination: '考试方式',
    state: '状态',
    stacking: '排名',
    Time: '创建时间'
  }, '考生信息');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Play);

/***/ })

};
;