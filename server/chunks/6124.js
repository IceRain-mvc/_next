exports.id = 6124;
exports.ids = [6124];
exports.modules = {

/***/ 6124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _particulars_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7212);
/* harmony import */ var _particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
/**
 *  author：祝成
 *  division：学习详情
 */






const Particulars = props => {
  // 测试数据
  const data = [];

  for (let index = 0; index < 3; index++) {
    data.push({
      zhang: `第${index + 1}章`,
      infor: [{
        zhangjieming: `js上-第${index + 1}节`,
        state: 1,
        createCt: '2022-01-03 8:05:55',
        upCt: '2022-01-03 17:05:55',
        time: '17'
      }, {
        zhangjieming: `js上-第${index + 2}节`,
        state: 0,
        createCt: '2022-01-03 8:05:55',
        upCt: '2022-01-03 17:05:55',
        time: '17'
      }]
    });
  }

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log(props); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().particularsbox),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
      className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().statebox),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().state),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.CheckCircleOutlined, {
          className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().finish),
            children: "\u5DF2\u5B8C\u6210 ( 100% )"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("p", {
            className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().duration),
            children: "\u5171\u5B66\u4E60 17 \u5206\u949F\uFF0C\u8003\u8BD5\u6210\u7EE9\uFF080.00\uFF09\u5206"
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().content),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().header),
        children: props.value.courseId
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contentbox),
        children: data && data.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
            className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
              className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().chapter),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.ItalicOutlined, {
                className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().icon)
              }), item.zhang]
            }), item && item.infor.map((it, i) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().containerbox),
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().left),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                    children: it.zhangjieming
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contenttext),
                    children: ["\u9996\u6B21\u5B66\u4E60\u65F6\u95F4:", it.createCt]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().contenttext),
                    children: ["\u6700\u8FD1\u5B66\u4E60\u65F6\u95F4:", it.upCt]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                  className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().right),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().studytype),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().texttype),
                      children: it.state === 0 ? '未学习' : '已完成'
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
                      children: it.state === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.HistoryOutlined, {
                        className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().finished)
                      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.CheckCircleOutlined, {
                        className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().unfinished)
                      })
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
                    className: (_particulars_module_scss__WEBPACK_IMPORTED_MODULE_3___default().studytime),
                    children: ["\u5DF2\u5B66", it.time, "\u5206\u949F"]
                  })]
                })]
              }, i);
            })]
          }, index);
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Particulars);

/***/ }),

/***/ 7212:
/***/ ((module) => {

// Exports
module.exports = {
	"particularsbox": "particulars_particularsbox__xg3ar",
	"statebox": "particulars_statebox__wSisy",
	"state": "particulars_state__eaRl5",
	"icon": "particulars_icon__pSY5R",
	"right": "particulars_right__6rTxH",
	"finish": "particulars_finish__FXWvT",
	"duration": "particulars_duration__SPaio",
	"content": "particulars_content__Rs3vl",
	"header": "particulars_header__kyhnD",
	"contentbox": "particulars_contentbox__i2Ixi",
	"container": "particulars_container__3a3TF",
	"chapter": "particulars_chapter__RA_y2",
	"containerbox": "particulars_containerbox__HsLvi",
	"left": "particulars_left__0CTkB",
	"contenttext": "particulars_contenttext__pz73C",
	"studytype": "particulars_studytype__XTkYC",
	"texttype": "particulars_texttype__qYCz_",
	"finished": "particulars_finished__l4Auc",
	"unfinished": "particulars_unfinished__Ah6jd",
	"studytime": "particulars_studytime__Akjqx"
};


/***/ })

};
;