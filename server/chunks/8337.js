"use strict";
exports.id = 8337;
exports.ids = [8337];
exports.modules = {

/***/ 8337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3984);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1653);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_textset_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7386);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4503);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const Atooltip = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_1___default()), {
    getPopupContainer: () => document.getElementById('redacts'),
    placement: "top",
    title: () => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
        children: props.type === 'questConfig' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default().Group), {
          defaultValue: props.defaultValue,
          onChange: props.radioChange,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default()), {
            direction: "vertical",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default()), {
              value: 1,
              children: "\u6309\u6B63\u786E\u9009\u9879\u4E2A\u6570\u5360\u6BD4\u5F97\u5206"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_radio__WEBPACK_IMPORTED_MODULE_2___default()), {
              value: 2,
              children: ["\u6F0F\u9009\u53EA\u5F97\u8BD5\u9898\u5206\u6570\u7684", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default()), {
                min: 0,
                defaultValue: props.inputNumbervalue,
                onChange: props.inputNumberchange,
                onBlur: props.inputNumberBlur,
                style: {
                  width: '60px'
                }
              }), "%"]
            })]
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "\u5207\u51FA\u754C\u9762\u8D85\u8FC7"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_4___default()), {
            min: 0,
            defaultValue: props.defaultValue,
            style: {
              width: '60px',
              margin: '0 5px'
            },
            onChange: props.inputNumberchange
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "\u79D2\u7B97\u4E00\u6B21\u5207\u5C4F"
          })]
        })
      });
    },
    onConfirm: props.somonConfirm,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_6___default().mySpana),
      children: props.someItem.slice(props.someItem.indexOf('a') + 1, props.someItem.indexOf('a', props.someItem.indexOf('a') + 1))
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Atooltip);

/***/ })

};
;