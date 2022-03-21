(() => {
var exports = {};
exports.id = 4339;
exports.ids = [4339,2194];
exports.modules = {

/***/ 1827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9392);
/* harmony import */ var _createCrew_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7894);
/* harmony import */ var _createCrew_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_createCrew_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Createcrew_NavIndex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9156);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





async function getServerSideProps(ctx) {
  const {
    exercisePattern = null,
    createdExerciseId = null
  } = ctx.query;
  return {
    props: {
      exercisePattern,
      createdExerciseId
    }
  };
}

const CreateCrew = props => {
  const {
    exercisePattern,
    createdExerciseId
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: (_createCrew_module_scss__WEBPACK_IMPORTED_MODULE_4___default().createCrew),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      args: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_component_Createcrew_NavIndex__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        exercisePattern: Number(exercisePattern),
        createdExerciseId: createdExerciseId
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CreateCrew);

/***/ }),

/***/ 7894:
/***/ ((module) => {

// Exports
module.exports = {
	"createCrew": "createCrew_createCrew__8GYfO"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

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

/***/ 2616:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/config-provider");

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

/***/ 4503:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input-number");

/***/ }),

/***/ 5842:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 6418:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/modal");

/***/ }),

/***/ 3528:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/notification");

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

/***/ 9538:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/upload");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 5345:
/***/ ((module) => {

"use strict";
module.exports = require("for-editor");

/***/ }),

/***/ 6333:
/***/ ((module) => {

"use strict";
module.exports = require("immutability-helper");

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

/***/ 7964:
/***/ ((module) => {

"use strict";
module.exports = require("react-dnd");

/***/ }),

/***/ 359:
/***/ ((module) => {

"use strict";
module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,3286,2625,9279,6166,9392,9719,1417,552,9156], () => (__webpack_exec__(1827)));
module.exports = __webpack_exports__;

})();