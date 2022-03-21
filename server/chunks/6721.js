exports.id = 6721;
exports.ids = [6721];
exports.modules = {

/***/ 6721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons_lib_icons_CopyOutlined__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2295);
/* harmony import */ var _ant_design_icons_lib_icons_CopyOutlined__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CopyOutlined__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5458);
/* harmony import */ var next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8243);
/* harmony import */ var _QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const AlertCommon = next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false
});

const QRCodeAlert = props => {
  // 需要接收  二维码+考试链接
  const {
    qrCode,
    paperExam,
    alertStatus,
    enableDrag,
    alertTitle,
    changeAlertFlag
  } = props;
  const {
    0: copyContext,
    1: setCopyContext
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('复制考试链接'); // 一键复制功能

  const copy = copyA => {
    const range = document.createRange(); // 创造range

    window.getSelection().removeAllRanges(); // 清除页面中已有的selection

    range.selectNode(copyA.current); // 选中需要复制的节点

    window.getSelection().addRange(range); // 执行选中元素

    const copyStatus = document.execCommand('Copy'); // 执行copy操作
    // 对成功与否定进行提示

    if (copyStatus) {
      setCopyContext('√已复制成功');
    }

    window.getSelection().removeAllRanges(); // 清除页面中已有的selection
  };

  const copyA = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AlertCommon, {
      alertStatus: alertStatus,
      enableDrag: enableDrag,
      alertTitle: alertTitle,
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().QRCodeAlertMain),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().topTitle),
          children: "\u4EE5\u4E0B\u4EFB\u610F\u4E00\u79CD\u65B9\u5F0F\u901A\u77E5\u8003\u751F\u53C2\u52A0\u8003\u8BD5"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().btmContent),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              children: "1\u3001\u5C06\u4E8C\u7EF4\u7801\u53D1\u7ED9\u8003\u751F\uFF0C\u626B\u63CF\u53C2\u52A0\u8003\u8BD5"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
              src: qrCode
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              children: "2\u3001\u590D\u5236\u8003\u8BD5\u94FE\u63A5\u53D1\u7ED9\u8003\u751F\uFF0C\u6253\u5F00\u94FE\u63A5\u53C2\u52A0\u8003\u8BD5"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().iptJiaDiv),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                style: {
                  display: 'table-cell'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("a", {
                  ref: copyA,
                  href: paperExam,
                  title: "\u5728\u65B0\u7A97\u53E3\u6253\u5F00\u94FE\u63A5",
                  target: "_blank",
                  rel: "noreferrer",
                  children: paperExam
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a", {
                className: copyContext === '复制考试链接' ? (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().copyHrefA) : (_QRCodeAlert_module_scss__WEBPACK_IMPORTED_MODULE_4___default().activeA),
                onClick: () => {
                  copy(copyA);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((_ant_design_icons_lib_icons_CopyOutlined__WEBPACK_IMPORTED_MODULE_0___default()), {}), copyContext]
              })]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (QRCodeAlert);

/***/ }),

/***/ 8243:
/***/ ((module) => {

// Exports
module.exports = {
	"QRCodeAlertMain": "QRCodeAlert_QRCodeAlertMain__HjxiF",
	"topTitle": "QRCodeAlert_topTitle__tGR2i",
	"btmContent": "QRCodeAlert_btmContent__mVVqQ",
	"iptJiaDiv": "QRCodeAlert_iptJiaDiv__tP2em",
	"activeA": "QRCodeAlert_activeA__4WXZd",
	"copyHrefA": "QRCodeAlert_copyHrefA__0__39"
};


/***/ })

};
;