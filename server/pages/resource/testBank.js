(() => {
var exports = {};
exports.id = 4678;
exports.ids = [4678,9960,2194];
exports.modules = {

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _testBank_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(905);
/* harmony import */ var _testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8697);
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Nav_resourceLeftNavData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5303);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


(react__WEBPACK_IMPORTED_MODULE_1___default().useLayoutEffect) = (react__WEBPACK_IMPORTED_MODULE_1___default().useEffect);


const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(2828), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["resource/testBank.tsx -> " + '@/components/Nav/header']
  }
});
const AnalyseContent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2873).then(__webpack_require__.bind(__webpack_require__, 2873)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2873)],
    modules: ["resource/testBank.tsx -> " + '@/components/Nav/analyseContent']
  }
});
const TestBankContent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(1112), __webpack_require__.e(4707), __webpack_require__.e(1525)]).then(__webpack_require__.bind(__webpack_require__, 1525)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1525)],
    modules: ["resource/testBank.tsx -> " + '@/components/testBank/testBankContent']
  }
});






const TestBank = () => {
  const {
    0: mode,
    1: setMode
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('列表模式');

  const renderMode = () => {
    const mode = localStorage.getItem('testBankMode') === '0' ? '列表模式' : '预览模式';

    if (mode && (mode === '列表模式' || mode === '预览模式')) {
      setMode(mode);
    } else {
      localStorage.setItem('testBankMode', '0');
      setMode('列表模式');
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    renderMode(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    className: (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().examBankBox),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(Header, {
      args: 5,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().contentBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(AnalyseContent, {
          menu: _component_Nav_resourceLeftNavData__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,
          start: 0,
          title: '资源'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            className: (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LineChartOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: "\u8BD5\u9898\u5E93"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().modeBox),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.QuestionCircleFilled, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
                  children: "\u5E2E\u52A9\u6587\u6863"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                  className: mode === '列表模式' ? (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : '',
                  onClick: () => {
                    localStorage.setItem('testBankMode', '0');
                    setMode('列表模式');
                  },
                  children: "\u5217\u8868\u6A21\u5F0F"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
                  className: mode === '预览模式' ? (_testBank_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active) : '',
                  onClick: () => {
                    localStorage.setItem('testBankMode', '1');
                    setMode('预览模式');
                  },
                  children: "\u9884\u89C8\u6A21\u5F0F"
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_4__.Content, {
              style: {
                padding: '0 25px 0 25px',
                background: 'white'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
                style: {
                  borderTop: '1px solid #e9ebed',
                  paddingTop: '20px'
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(TestBankContent, {
                  mode: mode
                })
              })
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TestBank);

/***/ }),

/***/ 5303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);

const arr = [{
  key: '0',
  name: '试题库',
  path: '/resource/testBank',
  icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.DatabaseOutlined
}, {
  key: '1',
  name: '考生管理',
  path: '/resource/students',
  icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.TeamOutlined
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arr);

/***/ }),

/***/ 905:
/***/ ((module) => {

// Exports
module.exports = {
	"examBankBox": "testBank_examBankBox__Pgbg3",
	"contentBox": "testBank_contentBox__npPDS",
	"content": "testBank_content__5pbDn",
	"header": "testBank_header__52Fsj",
	"modeBox": "testBank_modeBox__COKZu",
	"active": "testBank_active__HroPy"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 7889:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/alert");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 1489:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 8518:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/col");

/***/ }),

/***/ 2071:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/date-picker");

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

/***/ 4663:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/empty");

/***/ }),

/***/ 6190:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input");

/***/ }),

/***/ 5417:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout");

/***/ }),

/***/ 8697:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout/layout");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 5066:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu/SubMenu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 3528:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/notification");

/***/ }),

/***/ 4528:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/pagination");

/***/ }),

/***/ 5893:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

/***/ }),

/***/ 7386:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/radio");

/***/ }),

/***/ 7050:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/row");

/***/ }),

/***/ 3526:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/spin");

/***/ }),

/***/ 4285:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ 1886:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tag");

/***/ }),

/***/ 9348:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 5345:
/***/ ((module) => {

"use strict";
module.exports = require("for-editor");

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

/***/ }),

/***/ 6302:
/***/ ((module) => {

"use strict";
module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152], () => (__webpack_exec__(311)));
module.exports = __webpack_exports__;

})();