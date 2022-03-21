"use strict";
(() => {
var exports = {};
exports.id = 1121;
exports.ids = [1121,2194];
exports.modules = {

/***/ 488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_Nav_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9392);
/* harmony import */ var _component_Steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2150);
/* harmony import */ var _component_exam_code_Coder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5133);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


 // import ReleaseExam from '@component/exam/releaseExam/ReleaseExam';




async function getServerSideProps(ctx) {
  const {
    isPublish,
    paperId,
    type,
    exerciseId,
    exercisePattern
  } = ctx.query;
  return {
    props: {
      isPublish,
      paperId,
      type,
      exerciseId,
      exercisePattern
    }
  };
}

const Code = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    isPublish,
    paperId,
    exerciseId,
    type,
    exercisePattern
  } = props;
  const {
    0: num
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(2);
  const order = [{
    title: '考试信息',
    skip: true,
    buttonMsg: {
      next: '保存&去设计试卷'
    }
  }, {
    title: '设计试卷',
    skip: true,
    buttonMsg: {
      pre: '返回上一步',
      customButton: [{
        title: '阅读',
        buttonCallback: function () {
          console.log('阅读');
        }
      }, {
        title: '查看',
        type: 'text',
        buttonCallback: function () {
          console.log('查看');
        }
      }],
      next: '保存&去设计试卷'
    }
  }, {
    title: '发布考试',
    skip: true,
    buttonMsg: {
      pre: '返回上一步',
      finish: '返回练习列表'
    }
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_component_Nav_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      args: 3,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_component_Steps__WEBPACK_IMPORTED_MODULE_2__["default"], {
        preCallback: async () => {
          await router.push({
            pathname: '/SimulationTest',
            query: {
              exerciseId,
              paperId,
              type,
              isPublish,
              exercisePattern
            }
          });
        },
        callBack: async indexStep => {
          if (indexStep === 1) {
            await router.push({
              pathname: '/SimulationTest',
              query: {
                exerciseId,
                paperId,
                type,
                isPublish,
                exercisePattern
              }
            });
          } else if (indexStep === 0) {
            await router.push({
              pathname: '/exercise/createExrtcise',
              query: {
                exerciseId
              }
            });
          }
        },
        nextCallback: undefined,
        step: order,
        minHeight: 550,
        finishCallback: async () => {
          await router.push({
            pathname: '/exercise'
          });
        },
        start: num,
        children: num === 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_component_exam_code_Coder__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
          exerciseId: exerciseId,
          url: 'https://i.kaoshiyun.com.cn/v5/exam/' + exerciseId
        }) : null
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Code);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 2278:
/***/ ((module) => {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 5893:
/***/ ((module) => {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 1030:
/***/ ((module) => {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("antd/lib/table");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 5345:
/***/ ((module) => {

module.exports = require("for-editor");

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

/***/ 8880:
/***/ ((module) => {

module.exports = require("rc-textarea");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,3286,2625,9279,6166,9392,1417,7363,7996,2150,1346,5133], () => (__webpack_exec__(488)));
module.exports = __webpack_exports__;

})();