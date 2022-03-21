exports.id = 6780;
exports.ids = [6780,3672];
exports.modules = {

/***/ 6780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3672);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_part_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const PopoverCommon = props => {
  const {
    placement = 'bottomLeft',
    type = 'FullBox',
    isButton = true
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: type === 'FullBox' ? (_part_module_css__WEBPACK_IMPORTED_MODULE_4___default().FullBox) : (_part_module_css__WEBPACK_IMPORTED_MODULE_4___default().borderBox),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_0___default()), {
      content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_part_module_css__WEBPACK_IMPORTED_MODULE_4___default().popContent),
        children: props.children
      }),
      trigger: "click",
      placement: placement,
      overlayClassName: placement === 'bottom' ? undefined : (_part_module_css__WEBPACK_IMPORTED_MODULE_4___default().pop),
      children: isButton ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
        style: _objectSpread({
          height: '42px'
        }, props.style),
        children: props.title
      }) : props.title
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PopoverCommon);

/***/ }),

/***/ 3672:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "part_button__XXKac",
	"greyLight": "part_greyLight__zOig7",
	"blueLight": "part_blueLight__W6AoI",
	"blue": "part_blue__NdmV6",
	"redLight": "part_redLight__yEVMJ",
	"grey": "part_grey__RFJdY",
	"none": "part_none__ZVb4p",
	"borderBox": "part_borderBox__ertY_",
	"FullBox": "part_FullBox__Fpj3m",
	"PopoverBox": "part_PopoverBox__hS8Ql",
	"pop": "part_pop__llFSu",
	"popContent": "part_popContent__U0hTw",
	"searchBox": "part_searchBox__Vzac_",
	"search": "part_search__lWfvY",
	"selectBox": "part_selectBox__CRjK6",
	"select": "part_select__RQ2y5",
	"selectDropdown": "part_selectDropdown__99ivR",
	"input": "part_input__IybXY",
	"dateBox": "part_dateBox__ZsgVz",
	"formBox": "part_formBox__q1cy1",
	"moreBox": "part_moreBox__0XMHx",
	"clear": "part_clear__bq4GN",
	"headerTable": "part_headerTable__5uBds",
	"form": "part_form__m5qt_",
	"icon": "part_icon__lfB2r",
	"managementForm": "part_managementForm__t0F6z"
};


/***/ })

};
;