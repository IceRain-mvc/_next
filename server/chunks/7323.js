"use strict";
exports.id = 7323;
exports.ids = [7323];
exports.modules = {

/***/ 7323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出excel
//   考试成绩--------成绩统计


const Play = async data => {
  // 导出excel数据
  (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter((item, index) => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    item.whether = item.achievement > item.passing ? '及格' : '不及格';
    item.stacking = index + 1;
    return item;
  }), {
    account: '账号',
    names: '姓名',
    department: '部门',
    ranking: '参加次数',
    useTime: '用时',
    score: '总分',
    passing: '及格分',
    achievement: '成绩',
    correct: '正确率',
    scoring: '得分率',
    whether: '是否及格',
    state: '状态',
    stacking: '排名'
  }, '考生信息');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Play);

/***/ })

};
;