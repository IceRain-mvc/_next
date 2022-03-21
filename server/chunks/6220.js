"use strict";
exports.id = 6220;
exports.ids = [6220];
exports.modules = {

/***/ 6220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出excel
 // const exportExcel = (await import('@/components/studentManage/exportExcel')).default;

const exportExcels = async data => {
  // 导出excel数据
  (0,_components_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter((item, index) => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    item.questionld = index + 1;
    item.whether = item.whether >= '60' ? '及格' : '不及格';
    return item;
  }), {
    id: '账户',
    names: '姓名',
    department: '所属部门',
    startTime: '开始时间',
    endTime: '结束时间',
    useTime: '用时',
    score: '客观得分',
    passing: '主动得分',
    achievement: '成绩',
    whether: '是否合格',
    questionld: '排名',
    cut: '切屏次数',
    correct: '评语'
  }, '人工评卷');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportExcels);

/***/ })

};
;