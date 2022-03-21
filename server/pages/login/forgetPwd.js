(() => {
var exports = {};
exports.id = 9007;
exports.ids = [9007,2194];
exports.modules = {

/***/ 1822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3896);
/* harmony import */ var _login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_login_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7298);
/* harmony import */ var _forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_management_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9279);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const ForgetPwd = () => {
  // 邮箱内容
  const {
    0: email,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 返回登陆页面

  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 帮助开关

  const {
    0: helpFlag,
    1: setHelpFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 邮箱内容是否正确

  const {
    0: isError,
    1: setIsError
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // app名称内容

  const {
    0: appName,
    1: setAppName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('考试云'); // app图片

  const {
    0: appImg,
    1: setAppImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Tue Jan 18 2022 22:18:40 GMT+0800 (中国标准时间)237'); // 得到app数据

  const getAppMessageFun = async () => {
    const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .GetAppMessage */ .$M)();

    if (res.length > 0) {
      setAppImg(res[0].AppLogo);
      setAppName(res[0].AppName);
    }
  }; // 设置默认函数


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // 获取app数据
    getAppMessageFun(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 找回事件

  const FindBack = async () => {
    const flag = /^[a-z]|[0-9]\w{5,17}@\w{2,7}\.(com|cn|gmail)$/i.test(email);

    if (!flag) {
      setIsError(false);

      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('对不起，邮箱号不正确，请重新输入');
    } else {
      setIsError(true);
      const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .SendEmail */ .Gy)({
        email: email
      });
      localStorage.setItem('email', email);

      if (res) {
        setTimeout(() => {
          setIsError(false);
          setFlag(true);
        }, 2000);
      }
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().loginBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().topHeader),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
          src: appImg
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          children: appName
        })]
      }), !flag ?
      /*#__PURE__*/
      // 发送邮箱
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().sendEmailBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalHeader),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
            children: "\u627E\u56DE\u5BC6\u7801"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBody),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyEmail),
            children: ["\u90AE\u7BB1", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                type: "text",
                placeholder: "\u8BF7\u8F93\u5165\u6CE8\u518C\u90AE\u7BB1",
                onBlur: e => {
                  setEmail(e.target.value);
                }
              })
            })]
          }), isError ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "\u6B63\u5728\u53D1\u9001\u5BC6\u7801\u627E\u56DE\u90AE\u4EF6\uFF0C\u8BF7\u7A0D\u5019.."
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyGo),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              onClick: FindBack,
              children: "\u627E\u56DE\u5BC6\u7801"
            })
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalFooter),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            children: "Copyright \xA9 2021\u8003\u8BD5\u4E91"
          })
        })]
      }) :
      /*#__PURE__*/
      // 返回登陆页面
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_forgetPwd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().backLoginBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CheckCircleOutlined, {})
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u7CFB\u7EDF\u5DF2\u53D1\u9001\u5BC6\u7801\u91CD\u7F6E\u90AE\u4EF6\u81F3:"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: email
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u8BF7\u767B\u5F55\u90AE\u7BB1\u91CD\u7F6E\u5BC6\u7801"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyGo),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
            onClick: () => {
              next_router__WEBPACK_IMPORTED_MODULE_3___default().push('/');
            },
            children: "\u8FD4\u56DE\u767B\u9646\u9875\u9762"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          onClick: () => {
            setHelpFlag(true);
          },
          children: "\u672A\u6536\u5230\u5BC6\u7801\u90AE\u7BB1?"
        }), helpFlag && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "\u5982\u679C\u672A\u627E\u5230\u6FC0\u6D3B\u90AE\u4EF6\uFF0C\u53EF\u80FD\u5B58\u5728\u5982\u4E0B\u60C5\u51B5:"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "1\u3001\u8BF7\u68C0\u67E5\u6FC0\u6D3B\u90AE\u4EF6\u662F\u5426\u5728\u5783\u573E\u7BB1"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "2\u3001\u5982\u679C\u4F7F\u7528\u4F01\u4E1A\u90AE\u7BB1\uFF0C\u8BF7\u68C0\u67E5\u662F\u5426\u6709\u963B\u6B62\u5916\u90E8\u90AE\u4EF6"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "3\u3001\u5EFA\u8BAE\u4F7F\u7528\u5E38\u7528\u90AE\u7BB1\u6CE8\u518C(\u5982QQ\u3001163\u3001 \u65B0\u6D6A\u7B49\u90AE\u7BB1)"
          })]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgetPwd);

/***/ }),

/***/ 3896:
/***/ ((module) => {

// Exports
module.exports = {
	"loginBox": "login_loginBox__8FRlr",
	"loginSmall": "login_loginSmall__aTOaT",
	"topHeader": "login_topHeader__IqSr_",
	"topContent": "login_topContent__RWHCK",
	"modalHeader": "login_modalHeader__9lPkW",
	"modalBody": "login_modalBody__2V4zp",
	"modalBodyEmail": "login_modalBodyEmail__XuxJV",
	"modalBodyPwd": "login_modalBodyPwd__tigo_",
	"modalBodyGo": "login_modalBodyGo__TqoYq",
	"modalBodyRegister": "login_modalBodyRegister__q6r5_",
	"modalFooter": "login_modalFooter__4dXJf"
};


/***/ }),

/***/ 7298:
/***/ ((module) => {

// Exports
module.exports = {
	"topHeader": "forgetPwd_topHeader__bxZrB",
	"sendEmailBox": "forgetPwd_sendEmailBox__4jH5O",
	"backLoginBox": "forgetPwd_backLoginBox__DiLhk"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

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
var __webpack_exports__ = __webpack_require__.X(0, [2828,9279], () => (__webpack_exec__(1822)));
module.exports = __webpack_exports__;

})();