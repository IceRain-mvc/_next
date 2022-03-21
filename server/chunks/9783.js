exports.id = 9783;
exports.ids = [9783];
exports.modules = {

/***/ 9783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _popout_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5847);
/* harmony import */ var _popout_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_popout_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
 // 按需加载组件


const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/analyse/integralAlter/hintPopup.tsx -> " + '@/components/alertCommon/alertCommon']
  }
}); // 引入antd


 // 样式






/**
 * 弹窗
 *  确定导出excel
 *  取消
 */
const HintPopup = props => {
  const {
    alertShow,
    changeAlertFlag,
    alertdialog,
    title,
    succeedPopup = false
  } = props;
  const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_3038358_entfk81uxpl.js'
  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: false,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (_popout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().box),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            children: succeedPopup ?
            /*#__PURE__*/
            // 提交成功
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IconFont, {
              type: "icon-tijiaochenggong"
            }) :
            /*#__PURE__*/
            // 提示警告
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IconFont, {
              type: "icon-wenhao"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
            children: title
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: (_popout_module_scss__WEBPACK_IMPORTED_MODULE_5___default().hintButton),
          children: succeedPopup ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
            onClick: () => {
              changeAlertFlag();
            },
            children: "\u786E\u5B9A"
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              onClick: () => {
                // 点击关闭需要 执行方法
                alertdialog();
              },
              children: "\u786E\u5B9A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              onClick: () => {
                // 关闭弹窗
                changeAlertFlag();
              },
              children: "\u53D6\u6D88"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HintPopup);

/***/ }),

/***/ 5847:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "popout_box__j_vWx",
	"hintButton": "popout_hintButton__jVOQF"
};


/***/ })

};
;