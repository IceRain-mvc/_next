exports.id = 3552;
exports.ids = [3552];
exports.modules = {

/***/ 3552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1256);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/exam/previewText/index.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 5587).then(__webpack_require__.bind(__webpack_require__, 5587)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5587)],
    modules: ["../src/components/exam/previewText/index.tsx -> " + './header']
  }
});
const LeftNav = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 3193).then(__webpack_require__.bind(__webpack_require__, 3193)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3193)],
    modules: ["../src/components/exam/previewText/index.tsx -> " + './leftNav']
  }
});
const CenterText = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(6391)]).then(__webpack_require__.bind(__webpack_require__, 6391)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6391)],
    modules: ["../src/components/exam/previewText/index.tsx -> " + './centerText']
  }
});

const PreviewText = props => {
  const sucesns = () => {
    antd_lib_modal__WEBPACK_IMPORTED_MODULE_2___default().warning({
      title: '',
      content: '当前是预览模式',
      closeIcon: null
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AlertCommon, {
    alertStatus: props.preview,
    enableDrag: true,
    alertTitle: '预览试卷',
    changeAlertFlag: props.changePreview,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().manageBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Header, {
        title: "\u8BD5\u5377",
        name: "\u632F\u6D9B\u6559\u80B2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().manage_mains),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().manage_mains_nei),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(LeftNav, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(CenterText, {
            parderId: props.parderId,
            preview: props.preview
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("aside", {
            className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().manage_right),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().manage_rightMani),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().times),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "\u65F6\u95F4"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("br", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "00:00:00"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().answerProp),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("p", {
                  children: "\u7B54\u9898\u8FDB\u5EA6"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
                    htmlFor: "1",
                    children: "1"
                  }), "/", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("label", {
                    htmlFor: "2",
                    children: "2"
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                  className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().jidu),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {})
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("button", {
              onClick: () => {
                sucesns();
              },
              className: (_index_module_css__WEBPACK_IMPORTED_MODULE_4___default().textEnd),
              children: "\u4EA4\u5377"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewText);

/***/ }),

/***/ 1256:
/***/ ((module) => {

// Exports
module.exports = {
	"manageBox": "previewText_manageBox__SFTXJ",
	"headers": "previewText_headers__LBNdf",
	"headerRig": "previewText_headerRig__XMBHf",
	"manage_mains": "previewText_manage_mains__eYFlM",
	"manage_mains_nei": "previewText_manage_mains_nei__MuvIg",
	"manage_mainaside": "previewText_manage_mainaside__SpL2Z",
	"manage_mainsideLeft": "previewText_manage_mainsideLeft__A9fnt",
	"title_line": "previewText_title_line__Nbw0k",
	"divNavPanel_PC": "previewText_divNavPanel_PC__GG4I1",
	"topic_box_ksy_flex": "previewText_topic_box_ksy_flex__8FyFA",
	"manage_bottoMuL": "previewText_manage_bottoMuL__Xs8AH",
	"Center": "previewText_Center__l2FtW",
	"cenInset": "previewText_cenInset__JTzLF",
	"radioText": "previewText_radioText__qStIJ",
	"radioTextNei": "previewText_radioTextNei__SLTym",
	"radioTextNOne": "previewText_radioTextNOne__4qmar",
	"radioQuestion": "previewText_radioQuestion__mNdLD",
	"TextXuan": "previewText_TextXuan__fVhzM",
	"manage_right": "previewText_manage_right____y9L",
	"manage_rightMani": "previewText_manage_rightMani__eBs9Z",
	"times": "previewText_times__Xc_f5",
	"answerProp": "previewText_answerProp__NioB5",
	"jidu": "previewText_jidu__VZ1Kk",
	"textEnd": "previewText_textEnd__zSB11"
};


/***/ })

};
;