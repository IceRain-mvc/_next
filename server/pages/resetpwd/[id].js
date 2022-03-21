(() => {
var exports = {};
exports.id = 5679;
exports.ids = [5679,2194];
exports.modules = {

/***/ 6578:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7889);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4855);
/* harmony import */ var _resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_management_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9279);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_dhy1tbbtq1d.js'
});

const ResetpwdCreate = props => {
  // 邮箱内容
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 按钮种类

  const {
    0: buttonType,
    1: setButtonType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0); // 密码内容

  const {
    0: passwordValue,
    1: setPasswordValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 确认密码内容

  const {
    0: affirmValue,
    1: setAffirmValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 提醒内容

  const {
    0: warnFlag,
    1: setWarnFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 提醒内容

  const {
    0: warnValue,
    1: setWarnValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (localStorage.getItem('email')) {
      setEmail(localStorage.getItem('email'));
    }
  }, []);

  const resetpwd = async () => {
    setWarnFlag(true);
    setButtonType(0);

    if (!passwordValue) {
      setWarnValue('请输入新密码');
    } else if (passwordValue.length < 8) {
      setWarnValue('密码至少8个字符');
    } else if (!affirmValue) {
      setWarnValue('请输入确认密码');
    } else if (affirmValue !== passwordValue) {
      setWarnValue('两次输入的密码不一致');
    } else {
      const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_4__/* .Resetpwd */ .a2)({
        email,
        password: passwordValue
      });

      if (res.affected > 0) {
        setWarnValue('修改成功，请妥善保管您的密码');
        setButtonType(1);
      } else {
        setWarnValue('请检查您的邮箱号是否正确');
      }
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    children: props.id === '4be326' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().ResetpwdBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().modalHeader),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
          children: "\u8003\u8BD5\u4E91-\u5BC6\u7801\u91CD\u7F6E"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_1___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconFont, {
          type: "icon-renwu1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "text",
          value: email,
          onChange: e => {
            setEmail(e.target.value);
          },
          placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u53F7"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconFont, {
          type: "icon-dasuozi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "password",
          placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
          onBlur: e => {
            setPasswordValue(e.target.value);
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconFont, {
          type: "icon-dasuozi"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          type: "password",
          placeholder: "\u8BF7\u518D\u6B21\u786E\u8BA4\u65B0\u5BC6\u7801",
          onBlur: e => {
            setAffirmValue(e.target.value);
          }
        })]
      }), warnFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default()), {
        style: {
          padding: '10px',
          textAlign: 'left',
          marginBottom: '10px'
        },
        description: warnValue,
        type: "warning",
        showIcon: true
      }), buttonType === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
        onClick: resetpwd,
        children: "\u63D0\u4EA4"
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
        onClick: () => {
          next_router__WEBPACK_IMPORTED_MODULE_5___default().push('/');
        },
        children: "\u53BB\u767B\u5F55"
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_resetpwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loseEfficacyBox),
      children: ["\u5BC6\u7801\u91CD\u7F6E\u9875\u9762\u5DF2\u7ECF\u5931\u6548\u3002 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("a", {
        href: "/",
        children: "\u8FD4\u56DE\u767B\u5F55\u9875\u9762"
      })]
    })
  });
};

const getServerSideProps = ctx => {
  const {
    id
  } = ctx.query;
  return {
    props: {
      id
    }
  };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetpwdCreate);

/***/ }),

/***/ 4855:
/***/ ((module) => {

// Exports
module.exports = {
	"loseEfficacyBox": "resetpwd_loseEfficacyBox__z7Nbe",
	"ResetpwdBox": "resetpwd_ResetpwdBox__RielU"
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

/***/ 2278:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/divider");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [2828,9279], () => (__webpack_exec__(6578)));
module.exports = __webpack_exports__;

})();