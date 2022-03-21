exports.id = 7712;
exports.ids = [7712];
exports.modules = {

/***/ 7712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6543);
/* harmony import */ var _dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







/*
    封装一个公共的select选择框供考试成绩页面  练习统计页面  使用   标题公共  刷新标题回复默认
    二级菜单内容高亮消失
    需要传递的参数:title   二级菜单的内容     一个方法需要在二级标题的内容的click上触发
*/
const Choice = props => {
  const {
    text,
    navs,
    setText,
    id
  } = props;

  const Login = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("ul", {
    className: id && id === '1' ? (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navs) : (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cz),
    children: navs && navs.map((item, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("li", {
        onClick: () => {
          setText(item);
        },
        children: item
      }, index);
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().box),
    id: 'parent',
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
      overlay: Login && Login,
      trigger: ['click'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: id && id === '1' ? (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wb) : (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().yell),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: text && text
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.CaretDownOutlined, {
          className: id && id === '1' ? (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ccc) : (_dropdown_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ye)
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Choice);

/***/ }),

/***/ 6543:
/***/ ((module) => {

// Exports
module.exports = {
	"wb": "dropdown_wb__k2REk",
	"yell": "dropdown_yell___KNj7",
	"ye": "dropdown_ye__ejVeN",
	"ccc": "dropdown_ccc__jEEV0",
	"hui": "dropdown_hui__CaDdu",
	"cz": "dropdown_cz__Clgqy",
	"navs": "dropdown_navs__OWJKW",
	"pop": "dropdown_pop__bw1aX"
};


/***/ })

};
;