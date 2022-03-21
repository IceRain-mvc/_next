"use strict";
exports.id = 4899;
exports.ids = [4899];
exports.modules = {

/***/ 4899:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出excel
 // 练习统计页面

const Restudied = async data => {
  // 导出excel数据
  (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(data.filter(item => {
    item.studentSex = item.studentSex === '0' ? '女' : item.studentSex === '1' ? '男' : item.studentSex;
    item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
    return item;
  }), {
    practiceStatistical: '练习名称',
    startTime: '开始时间',
    endTime: '结束时间',
    participateWay: '参加方式',
    PracticeType: '练习类型',
    participantsNumber: '参加人数',
    practiceNumber: '练习次数',
    AveragePracticeDuration: '平均练习时长',
    scoringAverage: '得分率',
    accuracy: '正确率',
    rateWrongTopic: '最低分',
    Time: '创建时间'
  }, '考生信息');
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restudied);

/***/ })

};
;