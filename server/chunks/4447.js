exports.id = 4447;
exports.ids = [4447,5918];
exports.modules = {

/***/ 4447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _stats_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6193);
/* harmony import */ var _stats_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_stats_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_stats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5918);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
/**
 *  author：祝成
 *  division：学习统计头部
 */


const StudyStats = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(290), __webpack_require__.e(2311), __webpack_require__.e(8598), __webpack_require__.e(7221)]).then(__webpack_require__.bind(__webpack_require__, 7221)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7221)],
    modules: ["course/stats/index.tsx -> " + './studyStats']
  }
});
const CommentStats = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2311), __webpack_require__.e(7492)]).then(__webpack_require__.bind(__webpack_require__, 7492)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7492)],
    modules: ["course/stats/index.tsx -> " + './comment']
  }
});

const Answer = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2311), __webpack_require__.e(5220)]).then(__webpack_require__.bind(__webpack_require__, 5220)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5220)],
    modules: ["course/stats/index.tsx -> " + './answer']
  }
});
const Absent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 3467).then(__webpack_require__.bind(__webpack_require__, 3467)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3467)],
    modules: ["course/stats/index.tsx -> " + './absent']
  }
});




const Stats = props => {
  const {
    courseId,
    stats,
    courseComment,
    courseAnswer,
    coursePeriod,
    courseCompleteCondition,
    courseAudit,
    courseStyle
  } = props.value; // console.log(props, courseComment + '---111', coursePeriod);

  const {
    0: nowIndex,
    1: setNowIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(stats);
  const {
    0: arr,
    1: setArr
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['学习统计', '评论管理', '答疑管理']); // 判断缺席统计

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    courseStyle === 2 && setArr([...arr, '缺席统计']); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 刷新组件

  const {
    0: refresh,
    1: setRefresh
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    refresh && setTimeout(() => setRefresh(false));
  }, [refresh]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_context_stats__WEBPACK_IMPORTED_MODULE_2__/* .StatsContext.Provider */ .q.Provider, {
    value: {
      user: {
        name: 'stats',
        nowIndex: `${nowIndex}`,
        // '学习统计', '评论管理', '答疑管理', '缺席统计'
        comment: courseComment,
        // 评论
        answer: courseAnswer,
        // 答疑
        token: `${courseId}`,
        // 课程分类
        role: 'admin',
        period: coursePeriod,
        // 学时
        fieldCommand: courseStyle,
        // 课程口令
        completeCondition: courseCompleteCondition,
        // 课程完成条件
        courseAudit // 批量审核

      },
      setUser: () => ({}),
      collapsed: false,
      toggleCollapse: () => ({})
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_stats_module_css__WEBPACK_IMPORTED_MODULE_4___default().statstabs),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_stats_module_css__WEBPACK_IMPORTED_MODULE_4___default().statstabpane),
        children: arr && arr.map((item, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
            onClick: () => {
              setNowIndex(index); // handleReload();
            },
            className: nowIndex === index ? (_stats_module_css__WEBPACK_IMPORTED_MODULE_4___default().statstabpanecolor) : undefined,
            children: item
          }, index);
        })
      }), nowIndex === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StudyStats, {}) : null, nowIndex === 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CommentStats, {}) : null, nowIndex === 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Answer, {}) : null, nowIndex === 3 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Absent, {}) : null]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stats);

/***/ }),

/***/ 5918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ StatsContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const StatsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext({
  user: {},
  setUser: () => ({}),
  collapsed: false,
  toggleCollapse: () => ({})
});

/***/ }),

/***/ 6193:
/***/ ((module) => {

// Exports
module.exports = {
	"statstabs": "stats_statstabs__6Ry72",
	"statstabpane": "stats_statstabpane__4WF29",
	"statstabpanecolor": "stats_statstabpanecolor__YmoLI"
};


/***/ })

};
;