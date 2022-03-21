(() => {
var exports = {};
exports.id = 5302;
exports.ids = [5302,2194];
exports.modules = {

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9392);
/* harmony import */ var _examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9073);
/* harmony import */ var _examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_by6k1kw1g7w.js'
});

const ExamineeCloud = () => {
  const {
    0: tag,
    1: setTag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(['考生中心', '考试云小程序']);
  const {
    0: myitem,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      args: 7,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().examineeCenterBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().examineeCenterTab),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
            children: tag.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: index === myitem ? (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().examineeCenterTLight) : '',
                onClick: () => {
                  setItem(index);
                  next_router__WEBPACK_IMPORTED_MODULE_3___default().push(index === 0 ? '/examinee/examineeCenter' : '/examinee/examineeCloud');
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IconFont, {
                    type: "icon-fenxiang1"
                  }), item]
                }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {})]
              }, index);
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().divMiniAppPanel),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().divMiniAppPanelTitle),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.BellOutlined, {}), "\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              children: "\u5FAE\u4FE1\u626B\u63CF\u4E0B\u65B9\u5C0F\u7A0B\u5E8F\uFF0C\u6216\u5728\u5FAE\u4FE1\u641C\u7D22\u8F93\u5165:\xA0\xA0\u201C\u8003\u8BD5\u4E91\u201D \xA0\u6216\xA0 \u201C\u8003\u8BD5\u4E91\u5E73\u53F0\u201D \u6253\u5F00\u8003\u8BD5\u4E91\u5C0F\u7A0B\u5E8F"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("ul", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
              className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().profileLi),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
                children: "\u8003\u8BD5\u4E91\u5B98\u65B9\u5C0F\u7A0B\u5E8F\uFF1A"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("img", {
                src: "https://cdn.jsdelivr.net/gh/YunHannn/cdn/img/ksy-mini-app.png"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().xtID),
                children: ["\u7CFB\u7EDFID\uFF1A", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("b", {
                  className: (_examineeCloud_module_css__WEBPACK_IMPORTED_MODULE_5___default().lCompanyID),
                  children: "368109"
                })]
              })]
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamineeCloud);

/***/ }),

/***/ 9073:
/***/ ((module) => {

// Exports
module.exports = {
	"examineeCenterBox": "examineeCloud_examineeCenterBox__niwBo",
	"examineeCenterTab": "examineeCloud_examineeCenterTab__QFTtu",
	"examineeCenterTLight": "examineeCloud_examineeCenterTLight__qGvr7",
	"divMiniAppPanel": "examineeCloud_divMiniAppPanel__7kV7Q",
	"divMiniAppPanelTitle": "examineeCloud_divMiniAppPanelTitle__vmBX_",
	"profileLi": "examineeCloud_profileLi__R5mJ2",
	"xtID": "examineeCloud_xtID__fBDmZ",
	"lCompanyID": "examineeCloud_lCompanyID__HFqf0"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 2278:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 1030:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,3286,2625,9279,6166,9392], () => (__webpack_exec__(6913)));
module.exports = __webpack_exports__;

})();