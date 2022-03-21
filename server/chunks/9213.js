exports.id = 9213;
exports.ids = [9213];
exports.modules = {

/***/ 9213:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(555);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);





const UnselectedAlert = props => {
  const {
    unselected,
    changeWin,
    changeWinState
  } = props;

  const yes = () => {
    unselected(false) || changeWin(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().content),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("span", {
        className: changeWinState === 2 ? (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().untips) : (_index_module_scss__WEBPACK_IMPORTED_MODULE_2___default().bacthChangeWin),
        children: props.icon
      }), props.unselectedTitle]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        onClick: yes,
        children: "\u786E\u5B9A"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnselectedAlert);

/***/ }),

/***/ 555:
/***/ ((module) => {

// Exports
module.exports = {
	"tips": "batch_tips__Da4t5",
	"double": "batch_double__1av25",
	"delicon": "batch_delicon__ZrVej",
	"delicons": "batch_delicons__jdPc2",
	"batchChange": "batch_batchChange__s1gtV",
	"batchChange_content": "batch_batchChange_content__votyx",
	"changeBtn": "batch_changeBtn__OxuEp",
	"del": "batch_del__hUK7Y",
	"btn": "batch_btn__HHZo3",
	"TreeType": "batch_TreeType__dPgqY",
	"TreeType_test__A_b8T": "batch_TreeType_test__A_b8T__VGzqW",
	"studentStage": "batch_studentStage__o9aF_",
	"content": "batch_content__AFRkU",
	"delIcon": "batch_delIcon__KxH4a",
	"untips": "batch_untips__nGUck",
	"bacthChangeWin": "batch_bacthChangeWin__y4F12"
};


/***/ })

};
;