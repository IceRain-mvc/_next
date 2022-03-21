exports.id = 1874;
exports.ids = [1874];
exports.modules = {

/***/ 1874:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _examAsider_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(745);
/* harmony import */ var _examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4948);
/* harmony import */ var _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2746);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4162);
/* harmony import */ var _ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_HourglassFilled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3104);
/* harmony import */ var _ant_design_icons_lib_icons_HourglassFilled__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_HourglassFilled__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7923);
/* harmony import */ var _ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8909);
/* harmony import */ var _ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);













const ExamAsider = props => {
  // pageTitle：哪个页面，createRouter：创建--的路由地址，censusRouter：--统计的路由地址
  // going：进行中的数据条数, notStart：未开始的数据条数, ended：已结束的数据条数
  const {
    pageTitle,
    createRouter,
    censusRouter,
    going,
    notStart,
    ended,
    exercise,
    setPopupPracticePaperOptionsFlag
  } = props;
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  const {
    0: examListIndex,
    1: setExamListIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().asiderAndContent),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().examAsiderMain),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().headBtnDiv),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
            className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().oneBtn),
            onClick: () => {
              // 跳转到添加考试/课程页
              exercise ? setPopupPracticePaperOptionsFlag(true) : Router.push(createRouter);
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().addIcon)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u521B\u5EFA", pageTitle]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
            className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().twoBtn),
            onClick: () => {
              // 跳转到添加考试/课程页
              Router.push(censusRouter);
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: [pageTitle, "\u7EDF\u8BA1"]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("ul", {
          className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btmAsiderUl),
          children: [{
            key: 0,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}),
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u6240\u6709", pageTitle, " (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().red),
                children: !isNaN(going) && !isNaN(notStart) && !isNaN(ended) ? going + notStart + ended : 0
              }), ")"]
            })
          }, {
            key: 1,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_4___default()), {}),
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u661F\u6807", pageTitle]
            })
          }, {
            key: '1.1',
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().liDiv),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().lineLi)
              })
            })
          }, {
            key: 2,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_HourglassFilled__WEBPACK_IMPORTED_MODULE_5___default()), {}),
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u8FDB\u884C\u4E2D (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().red),
                children: going
              }), ")"]
            })
          }, {
            key: 3,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_ClockCircleOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u672A\u5F00\u59CB (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().red),
                children: notStart
              }), ")"]
            })
          }, {
            key: 4,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_HourglassFilled__WEBPACK_IMPORTED_MODULE_5___default()), {}),
            content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: ["\u5DF2\u7ED3\u675F (", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().red),
                children: ended
              }), ")"]
            })
          }, {
            key: '4.1',
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().liDiv),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().lineLi)
              })
            })
          }, {
            key: 5,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_DeleteOutlined__WEBPACK_IMPORTED_MODULE_7___default()), {}),
            content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().btnSpan),
              children: "\u56DE\u6536\u7AD9"
            })
          }].map(item => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
              className: `${item.icon && examListIndex === item.key ? (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().liActive) + ' ' + (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().cur) : item.icon ? (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().cur) : ''}`,
              onClick: () => {
                item.icon && setExamListIndex(Number(item.key));
              },
              children: [item.icon ? item.icon : null, item.content ? item.content : null]
            }, item.key);
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("main", {
        id: "selectMain",
        className: (_examAsider_module_css__WEBPACK_IMPORTED_MODULE_9___default().listMain),
        children: props.children[examListIndex]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamAsider);

/***/ }),

/***/ 745:
/***/ ((module) => {

// Exports
module.exports = {
	"listMain": "examAsider_listMain__8c6gq",
	"asiderAndContent": "examAsider_asiderAndContent__s2YDx",
	"examAsiderMain": "examAsider_examAsiderMain__kskZk",
	"headBtnDiv": "examAsider_headBtnDiv__oLqd6",
	"oneBtn": "examAsider_oneBtn__dyREF",
	"twoBtn": "examAsider_twoBtn__OPoo6",
	"btmAsiderUl": "examAsider_btmAsiderUl__CQbVd",
	"lineLi": "examAsider_lineLi__v1K0L",
	"anticon": "examAsider_anticon__7ZpR4",
	"liActive": "examAsider_liActive__7hd5B",
	"btnSpan": "examAsider_btnSpan__VcYhj",
	"red": "examAsider_red__3FnBY",
	"cur": "examAsider_cur__p0U9w",
	"liDiv": "examAsider_liDiv__dVHIG",
	"addIcon": "examAsider_addIcon__WzSCW"
};


/***/ })

};
;