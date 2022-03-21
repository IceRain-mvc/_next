"use strict";
exports.id = 9399;
exports.ids = [9399];
exports.modules = {

/***/ 9399:
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
  (0,_components_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter(item => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    return item;
  }), {
    authName: '考试名称',
    startTime: '开始时间',
    endTime: '结束时间',
    participation: '试卷类型',
    participants: '总分',
    qualified: '及格分数',
    handed: '交卷数',
    not: '未评卷数',
    already: '已评卷数'
  }, '人工评卷');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportExcels);

/***/ })

};
;