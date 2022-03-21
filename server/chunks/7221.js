"use strict";
exports.id = 7221;
exports.ids = [7221];
exports.modules = {

/***/ 7221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9280);
/* harmony import */ var _StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_course_studyStats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8598);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1215);
/* harmony import */ var _api_course_createMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/**
 *  author：祝成
 *  division：学习统计
 */




const StatsModule = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(6124), __webpack_require__.e(1166)]).then(__webpack_require__.bind(__webpack_require__, 1166)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1166)],
    modules: ["course/stats/studyStats/index.tsx -> " + '../statsModule']
  }
});







const StudyStats = () => {
  // context 获取课程-名称-id
  const {
    0: statsParams
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_4__/* .useStats */ .V)().user); // 人数数据-通过率

  const {
    0: statsData,
    1: setStatsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    stats_should: 0,
    stats_already: 0,
    stats_complete: 0
  }); // 应参加人数

  const {
    0: shouldAttend,
    1: setShouldAttend
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 获取数据  参加人数

  const getStatisticsFun = async () => {
    const head = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_5__/* .getCourseItem */ .UX)({
      courseId: statsParams.token
    }); // console.log(head);

    setShouldAttend(head.courseChoose.length);
    const result = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_3__/* .getStatistics */ .aC)({
      courseId: statsParams.token,
      period: statsParams.period
    }); //

    setStatsData(result[0]);
  }; // 调用获取参数


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getStatisticsFun(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 人数统计

  const {
    0: peopleCounting,
    1: setPeopleCounting
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const arr = [{
      title: '已参加人数',
      num: statsData.stats_already,
      icon: 'icon'
    }, {
      title: '完成课程人数',
      num: statsData.stats_complete,
      icon: 'icon'
    }, {
      title: '未完成课程人数',
      num: shouldAttend - statsData.stats_complete,
      icon: 'icon'
    }, {
      title: '课程通过率',
      num: (statsData.stats_complete / (statsData.stats_already ? statsData.stats_already : 1) * 100).toFixed(2) + '%',
      icon: 'icon'
    }];

    if (statsParams.fieldCommand === 2) {
      arr.splice(0, 0, {
        title: '应参加人数',
        num: shouldAttend,
        icon: 'icon'
      });
      arr.splice(2, 0, {
        title: '缺考人数',
        num: shouldAttend - statsData.stats_already,
        icon: 'icon'
      });
    }

    if (statsParams.completeCondition === 2) {
      arr.splice(statsParams.fieldCommand === 2 ? 3 : 1, 0, {
        title: '未通过考试人数',
        num: statsData.stats_should - statsData.stats_already,
        icon: 'icon'
      });
      arr.splice(statsParams.fieldCommand === 2 ? 3 : 1, 0, {
        title: '通过考试人数',
        num: statsData.stats_should - statsData.stats_already,
        icon: 'icon'
      });
    }

    setPeopleCounting(arr); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statsData]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studystatsbox),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studywstatsview),
      children: peopleCounting && peopleCounting.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studystatsheader),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studystatstitle),
            children: item.title
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studystatsnum),
            children: item.num
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
            className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studystatsicon),
            children: [index === 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.TeamOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconattend)
            }), index === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserAddOutlined, {
                className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyicon)
              }), ' ' + (statsData.stats_already / (statsData.stats_should ? statsData.stats_should : 1) * 100).toFixed(2) + '%']
            }), index === 2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UserDeleteOutlined, {
                className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconlack)
              }), ' ' + ((statsData.stats_should - statsData.stats_already) / (statsData.stats_should ? statsData.stats_should : 1) * 100).toFixed(2) + '%']
            }), index === 3 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconperform)
            }), index === 4 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconunfinished)
            }), index === 5 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckCircleOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconperform)
            }), index === 6 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconunfinished)
            }), index === 7 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckOutlined, {
              className: (_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_7___default().studyiconpassing)
            })]
          })]
        }, index);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(StatsModule, {
      value: undefined
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudyStats);

/***/ })

};
;