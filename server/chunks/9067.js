exports.id = 9067;
exports.ids = [9067];
exports.modules = {

/***/ 9067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8875);
/* harmony import */ var _ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const ExamAlert = props => {
  const {
    title,
    setExamAlertFlag,
    children,
    store,
    setShowTree,
    showTree,
    selectCount,
    infoQuestion,
    getQuestionList,
    getQue,
    getStrategy,
    selectedReloadPage,
    getQuestion,
    type,
    save,
    saveDes,
    strategyList
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().examParent),
    onClick: () => {
      if (showTree) {
        setShowTree(false);
      }
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().examBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().head),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().title),
          children: title
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().close),
          onClick: () => {
            setExamAlertFlag(false);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
        children: children
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().foot),
        children: type === 'description' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SaveOutlined, {}),
            onClick: async () => {
              await saveDes();
              save && (await save());
            },
            children: "\u4FDD\u5B58"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseCircleOutlined, {}),
            onClick: async () => {
              saveDes && (await saveDes());
              save && (await save());
              setExamAlertFlag(false);
            },
            children: "\u4FDD\u5B58\u5E76\u5173\u95ED"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseSquareOutlined, {}),
            onClick: () => {
              setExamAlertFlag(false);
            },
            children: "\u5173\u95ED"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          children: [store && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
            className: (_ExamAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().check),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckSquareOutlined, {}),
              type: 'primary',
              onClick: async () => {
                // 判断试卷大题id存在还是抽题策略id存在，谁存在执行谁
                infoQuestion && (await infoQuestion());
                getQuestionList && (await getQuestionList());
                selectedReloadPage && (await selectedReloadPage());
                getStrategy && (await getStrategy());
                getQue && (await getQue());
                strategyList && strategyList();
                getQuestion && (await getQuestion());
              },
              children: ["\u9009\u62E9", selectCount !== 0 && `（${selectCount}）`]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckSquareOutlined, {}),
              type: 'primary',
              onClick: async () => {
                // 判断试卷大题id存在还是抽题策略id存在，谁存在执行谁
                infoQuestion && (await infoQuestion());
                await setExamAlertFlag(false);
                getStrategy && (await getStrategy());
                getQue && (await getQue());
                strategyList && strategyList();
                getQuestion && (await getQuestion());
              },
              children: ["\u9009\u62E9\u5E76\u5173\u95ED", selectCount !== 0 && `（${selectCount}）`]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
            type: "primary",
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {}),
            onClick: () => {
              setExamAlertFlag(false);
            },
            children: "\u5173\u95ED"
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamAlert);

/***/ }),

/***/ 8875:
/***/ ((module) => {

// Exports
module.exports = {
	"examParent": "ExamAlert_examParent__7yHJr",
	"examBox": "ExamAlert_examBox__zpqAq",
	"head": "ExamAlert_head__TvYLq",
	"title": "ExamAlert_title__oN39J",
	"close": "ExamAlert_close__k6G__",
	"content": "ExamAlert_content__1_qLu",
	"foot": "ExamAlert_foot__cQfkG",
	"description": "ExamAlert_description__RhEAp",
	"check": "ExamAlert_check__sPK1x"
};


/***/ })

};
;