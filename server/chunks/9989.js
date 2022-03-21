exports.id = 9989;
exports.ids = [9989];
exports.modules = {

/***/ 9989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5539);
/* harmony import */ var _PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const PracticePaperOptions = props => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    setPopupPracticePaperOptionsFlag
  } = props;
  const {
    0: practiceTypeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    type: 0,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProfileOutlined, {}),
    className: 'everyType0',
    title: '章节练习',
    description: '组建一套练习题库，可自定义练习章节\n并向章节添加试题，考生可按章节练习',
    buttonMsg: '去创建章节练习'
  }, {
    type: 1,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RetweetOutlined, {}),
    className: 'everyType1',
    title: '模拟练习',
    description: '创建一张模拟试卷，可手工或随机组卷\n考生每作答一道试题可查看答案和解析',
    buttonMsg: '去创建模拟练习'
  }]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().paperTypeOptions),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().paperCheck),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().paperTypeTitle),
        children: ["\u8BF7\u9009\u62E9\u8BD5\u5377\u7C7B\u578B", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().close),
          onClick: () => {
            setPopupPracticePaperOptionsFlag(false);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().paperType),
        children: practiceTypeList.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: item.type === 0 ? (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType) + ' ' + (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType0) : item.type === 1 ? (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType) + ' ' + (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType1) : (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType) + ' ' + (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().everyType2),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
              children: item.icon
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("h3", {
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
              className: (_PracticePaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_5___default().des),
              children: [item.description.split('\n')[0], /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {}), item.description.split('\n')[1]]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              onClick: () => {
                Router.push({
                  pathname: '/exercise/createExercise',
                  query: {
                    exercisePattern: index,
                    createdExerciseId: undefined
                  }
                });
              },
              children: item.buttonMsg
            })]
          }, item.type);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PracticePaperOptions);

/***/ }),

/***/ 5539:
/***/ ((module) => {

// Exports
module.exports = {
	"paperTypeOptions": "PracticePaperOptions_paperTypeOptions__9F6I8",
	"paperCheck": "PracticePaperOptions_paperCheck__0GGHA",
	"paperTypeTitle": "PracticePaperOptions_paperTypeTitle__0tK_h",
	"close": "PracticePaperOptions_close__ubSis",
	"paperType": "PracticePaperOptions_paperType__vpKBc",
	"everyType": "PracticePaperOptions_everyType__b6YNf",
	"icon": "PracticePaperOptions_icon__Rkqvj",
	"des": "PracticePaperOptions_des__1lDIW",
	"everyType0": "PracticePaperOptions_everyType0__gvXWX",
	"everyType1": "PracticePaperOptions_everyType1__GPreT",
	"everyType2": "PracticePaperOptions_everyType2__ggFzk"
};


/***/ })

};
;