"use strict";
(() => {
var exports = {};
exports.id = 166;
exports.ids = [166,4525,4636,5367,2194];
exports.modules = {

/***/ 2250:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_course__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2615);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["course/index.tsx -> " + '@/components/Nav/header']
  }
});
const ExamAsider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 1874).then(__webpack_require__.bind(__webpack_require__, 1874)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1874)],
    modules: ["course/index.tsx -> " + '@/components/examAsider/examAsider']
  }
});
const AllCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 8863).then(__webpack_require__.bind(__webpack_require__, 8863)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8863)],
    modules: ["course/index.tsx -> " + './courseList/allCourse']
  }
});
const StarCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 3355).then(__webpack_require__.bind(__webpack_require__, 3355)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3355)],
    modules: ["course/index.tsx -> " + './courseList/starCourse']
  }
});
const OngoingCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 7004).then(__webpack_require__.bind(__webpack_require__, 7004)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7004)],
    modules: ["course/index.tsx -> " + './courseList/ongoingCourse']
  }
});
const UninitiatedCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 7850).then(__webpack_require__.bind(__webpack_require__, 7850)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7850)],
    modules: ["course/index.tsx -> " + './courseList/uninitiatedCourse']
  }
});
const FinishedCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 3376).then(__webpack_require__.bind(__webpack_require__, 3376)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3376)],
    modules: ["course/index.tsx -> " + './courseList/finishedCourse']
  }
});
const RecycleCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 1551).then(__webpack_require__.bind(__webpack_require__, 1551)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1551)],
    modules: ["course/index.tsx -> " + './courseList/recycleCourse']
  }
});




const Train = () => {
  // 侧导航状态数值
  const {
    0: nowCount,
    1: setNowCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 未开始

  const {
    0: willCount,
    1: setWillCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 进行中

  const {
    0: finishCount,
    1: setFinishCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 已结束

  const getCount = async () => {
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_2__/* .getCountList */ .b7)();
    setNowCount(res.now);
    setWillCount(res.will);
    setFinishCount(res.finish);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCount();
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Header, {
      args: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ExamAsider, {
        pageTitle: "\u8BFE\u7A0B",
        createRouter: "/course/create/post/courseMessage",
        censusRouter: "/analyse",
        going: nowCount,
        ended: finishCount,
        notStart: willCount,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AllCourse, {
          getCount: getCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StarCourse, {
          getCount: getCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(OngoingCourse, {
          getCount: getCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(UninitiatedCourse, {
          getCount: getCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(FinishedCourse, {
          getCount: getCount
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RecycleCourse, {
          getCount: getCount
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Train);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 2746:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/AppstoreOutlined");

/***/ }),

/***/ 4948:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/BarChartOutlined");

/***/ }),

/***/ 7923:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/ClockCircleOutlined");

/***/ }),

/***/ 8909:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/DeleteOutlined");

/***/ }),

/***/ 3104:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/HourglassFilled");

/***/ }),

/***/ 4162:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/StarFilled");

/***/ }),

/***/ 7889:
/***/ ((module) => {

module.exports = require("antd/lib/alert");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 1489:
/***/ ((module) => {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 2616:
/***/ ((module) => {

module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 2278:
/***/ ((module) => {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 6190:
/***/ ((module) => {

module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 5842:
/***/ ((module) => {

module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 4528:
/***/ ((module) => {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ 5893:
/***/ ((module) => {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 7386:
/***/ ((module) => {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ 3526:
/***/ ((module) => {

module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("antd/lib/table");

/***/ }),

/***/ 1886:
/***/ ((module) => {

module.exports = require("antd/lib/tag");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5345:
/***/ ((module) => {

module.exports = require("for-editor");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 3860:
/***/ ((module) => {

module.exports = require("qrcode.react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,2828,2615], () => (__webpack_exec__(2250)));
module.exports = __webpack_exports__;

})();