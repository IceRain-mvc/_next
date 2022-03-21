exports.id = 3714;
exports.ids = [3714];
exports.modules = {

/***/ 3714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(966);
/* harmony import */ var _formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1518);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




const ExportSelect = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 9993).then(__webpack_require__.bind(__webpack_require__, 9993)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9993)],
    modules: ["../src/components/testBank/formFunction/formFunction.tsx -> " + '../exportSelect/exportSelect']
  }
});




const FormFunction = props => {
  const {
    alertContentFun,
    alertFlagFun,
    alertTitleFun,
    ModeFlagFun
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5___default().navRight),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'blueLight',
      style: {
        margin: '0 5px 0 0'
      },
      onClick: () => {
        alertContentFun('batchImport');
        alertFlagFun(true);
        alertTitleFun('模板导入');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UploadOutlined, {
        className: (_formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bigSize)
      }), "\u6A21\u677F\u5BFC\u5165"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'blueLight',
      style: {
        margin: '0 5px 0 0'
      },
      onClick: () => {
        alertContentFun('questionAdd');
        alertFlagFun(true);
        alertTitleFun('新增试题');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, {
        className: (_formFunction_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bigSize)
      }), "\u65B0\u589E\u8BD5\u9898"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'blueLight',
      style: {
        margin: '0 5px 0 0'
      },
      onClick: () => {
        alertContentFun('batchAdd');
        alertFlagFun(true);
        alertTitleFun('批量新增');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PlusSquareFilled, {}), "\u6279\u91CF\u65B0\u589E"]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'none',
      style: {
        margin: '0 5px 0 0'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ExportSelect, {
        alertContentFun: alertContentFun,
        ModeFlagFun: ModeFlagFun,
        alertTitleFun: alertTitleFun
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'none',
      style: {
        margin: '0 5px 0 0'
      },
      onClick: () => {
        alertContentFun('batchUpdate');
        ModeFlagFun(true);
        alertTitleFun('批量修改');
      },
      children: "\u6279\u91CF\u4FEE\u6539"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_2__.ButtonCommon, {
      type: 'none',
      style: {
        margin: '0 5px 0 0'
      },
      onClick: () => {
        alertContentFun('batchDelete');
        ModeFlagFun(true);
        alertTitleFun('提示');
      },
      children: "\u6279\u91CF\u5220\u9664"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormFunction);

/***/ }),

/***/ 966:
/***/ ((module) => {

// Exports
module.exports = {
	"navRight": "formFunction_navRight__G66y9",
	"bigSize": "formFunction_bigSize__XUwcj"
};


/***/ })

};
;