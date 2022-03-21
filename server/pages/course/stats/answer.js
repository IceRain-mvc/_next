(() => {
var exports = {};
exports.id = 8641;
exports.ids = [8641,2194,5918,5220];
exports.modules = {

/***/ 5220:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1215);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9280);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _answer_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9340);
/* harmony import */ var _answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_answer_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


/**
 *  para：祝成
 *  division：答疑管理
 */








function Answer() {
  // context 获取课程-名称-id
  const {
    0: statsPara
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)((0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_1__/* .useStats */ .V)().user); // 回复高亮

  const {
    0: nowIndex,
    1: setNowIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0); // 高亮
  // 搜索
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const onSearch = value => {// console.log(value);
  }; // 侧导航高亮


  const {
    0: navHighlight,
    1: setNavHighlight
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0); // 回复

  const {
    1: setreply
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {// console.log(statsPara.answer, typeof statsPara.answer);
  }, [statsPara.answer]); // 模拟数据

  const data = [{
    id: 1,
    answer_id: 1,
    answer_name: 'zxc',
    answer_title: 'zxc的疑问内容1',
    answer_uptime: '2021-12-21 16:51:28',
    answer_type: 1
  }, {
    id: 2,
    answer_id: 1,
    answer_name: 'zxc',
    answer_title: 'zxc的疑问内容2',
    answer_uptime: '2021-12-21 16:51:28',
    answer_type: 1
  }, {
    id: 3,
    answer_id: 9,
    answer_name: '振涛',
    answer_title: '振涛解疑内容1',
    answer_uptime: '2021-12-21 16:51:28',
    answer_type: 1
  }, {
    id: 4,
    answer_id: 9,
    answer_name: '振涛',
    answer_title: '振涛解疑内容2-王尼玛和陈尼玛都是年轻有为的骚年，有一天他们相遇了然后发现都对对方一见钟情后，所以就愉快的生活在了一起。。。。。',
    answer_uptime: '2021-12-21 16:51:28',
    answer_type: 1
  }, {
    id: 5,
    answer_id: 1,
    answer_name: 'zxc',
    answer_title: 'zxc的疑问内容2王尼玛和陈尼玛都是年轻有为的骚年，有一天他们相遇了然后发现都对对方一见钟情后，所以就愉快的生活在了一起。。。。。',
    answer_uptime: '2021-12-21 16:51:28',
    answer_type: 0
  }]; // 侧导航

  const onNav = index => {
    // console.log(index);
    setNavHighlight(index);
  }; // 回复按钮


  const onReply = () => {// console.log('触发回复', reply);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: statsPara.answer ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answertitle),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: "\u60A8\u672A\u5F00\u542F\u8BFE\u7A0B\u7B54\u7591"
        })
      })
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().studystatstable),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answerbox),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answerleft),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answertable),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              className: nowIndex === 0 ? (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answercolor) : null,
              onClick: () => {
                setNowIndex(0);
              },
              children: ["\u5F85\u56DE\u590D", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                children: ["\uFF08", 0, "\uFF09"]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: nowIndex === 1 ? (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answercolor) : null,
              onClick: () => {
                setNowIndex(1);
              },
              children: "\u5168\u90E8"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answersearch),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.SearchOutlined, {})
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
              type: "text",
              onChange: e => {
                onSearch(e.target.value);
              },
              className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answerinput),
              placeholder: '搜索'
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answersearchdata),
            children: data && data.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dl", {
                className: navHighlight === index ? (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dlH) : (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dl),
                onClick: () => {
                  onNav(index);
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dt", {
                  className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dt),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_img),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      src: "",
                      alt: ""
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_num),
                    children: "3"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dd", {
                  className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dd),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_message),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                      children: item.answer_name
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                      children: item.answer_uptime
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_title),
                    children: item.answer_title
                  })]
                })]
              }, index);
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_5___default().answerright),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().message),
            children: data.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dl", {
                className: item.answer_id === 9 ? (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_right) : (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_left),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("dt", {
                  className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dt),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_img),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                      src: "",
                      alt: ""
                    })
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("dd", {
                  className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_dd),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_message),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                      children: item.answer_name
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
                      children: item.answer_uptime
                    })]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
                    className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_title),
                    children: item.answer_title
                  })]
                })]
              }, index);
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_textarea),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_textBox),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("textarea", {
                name: "",
                id: "",
                className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_textTitle),
                cols: 30,
                rows: 4,
                placeholder: "\u8BF4\u70B9\u4EC0\u4E48......",
                onChange: e => setreply(e.target.value)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
                onClick: () => {
                  onReply();
                },
                className: (_answer_module_scss__WEBPACK_IMPORTED_MODULE_6___default().answer_replyButton),
                children: "\u56DE\u590D"
              })]
            })
          })]
        })]
      })
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Answer);

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

/***/ 9340:
/***/ ((module) => {

// Exports
module.exports = {
	"answer_dl": "answer_answer_dl__AEYkG",
	"answer_dlH": "answer_answer_dlH__pKPiH",
	"answer_dt": "answer_answer_dt__iN5Dk",
	"answer_img": "answer_answer_img__97ghF",
	"answer_num": "answer_answer_num__lgXHr",
	"answer_dd": "answer_answer_dd__lKWBS",
	"answer_message": "answer_answer_message__V5m4z",
	"answer_title": "answer_answer_title__OESXe",
	"message": "answer_message__lZ2TQ",
	"answer_left": "answer_answer_left__Pz8Pr",
	"answer_right": "answer_answer_right__BBEmU",
	"answer_textarea": "answer_answer_textarea__x_tO7",
	"answer_textBox": "answer_answer_textBox__2n5Gg",
	"answer_textTitle": "answer_answer_textTitle__o56e_",
	"answer_replyButton": "answer_answer_replyButton__3pM5a"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2311], () => (__webpack_exec__(5220)));
module.exports = __webpack_exports__;

})();