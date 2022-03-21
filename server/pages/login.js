(() => {
var exports = {};
exports.id = 3459;
exports.ids = [3459,5764,6594];
exports.modules = {

/***/ 1516:
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
/* harmony import */ var _api_management_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9279);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5764);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const Login = () => {
  // 邮箱内容
  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 密码内容

  const {
    0: password,
    1: setPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 按钮内容

  const {
    0: buttonType,
    1: setButtonType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // app名称内容

  const {
    0: appName,
    1: setAppName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('考试云'); // app图片

  const {
    0: appImg,
    1: setAppImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Tue Jan 18 2022 22:18:40 GMT+0800 (中国标准时间)237'); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const {
    0: address,
    1: setAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // 获取ip地址

  const geAddressIP = async () => {
    const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_3__/* .getAddress */ .Kn)();
    console.log('这是获取ip地址', res);
    console.log(JSON.stringify(res).slice(1, -1));

    if (res) {
      setAddress(res);
    }
  }; // 登录事件


  const login = async () => {
    if (user && password) {
      setButtonType(1);
      setTimeout(() => {
        setButtonType(0);
      }, 5000);
      const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .LoginFun */ .J9)({
        name: user,
        password: password
      });

      if (typeof res === 'string') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error(`对不起，您的${res}，请重新登录`);
      }

      if (res.token) {
        address && localStorage.setItem('userIp', JSON.stringify(address).slice(1, -1));
        localStorage.setItem('token', res.token);
        localStorage.setItem('user', user);
        next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/home');
      }

      setButtonType(0);
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('账号和密码不能为空');
    }
  }; // 得到app数据


  const getAppMessageFun = async () => {
    const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .GetAppMessage */ .$M)();

    if (res.length > 0) {
      setAppImg(res[0].AppLogo);
      setAppName(res[0].AppName);
    }
  }; // 设置默认函数


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // 获取ip信息
    geAddressIP();

    if (localStorage.getItem('user')) {
      setUser(localStorage.getItem('user'));
    } // 获取app数据


    getAppMessageFun(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().loginBox),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().loginSmall),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().topHeader),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
            src: appImg
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: appName
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().topContent),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalHeader),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h1", {
              children: "\u767B\u5F55"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBody),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyEmail),
              children: ["\u8D26\u53F7", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                  type: "text",
                  defaultValue: user,
                  onBlur: e => {
                    setUser(e.target.value);
                  }
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyPwd),
              children: ["\u5BC6\u7801", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                  type: "password",
                  defaultValue: password,
                  onBlur: e => {
                    setPassword(e.target.value);
                  }
                })
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyGo),
              children: buttonType === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                onClick: login,
                children: "\u767B\u5F55"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
                disabled: true,
                children: "\u767B\u5F55\u4E2D\u2026\u2026"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalBodyRegister),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                onClick: () => {
                  next_router__WEBPACK_IMPORTED_MODULE_4___default().push('/login/forgetPwd');
                },
                children: "\u5FD8\u8BB0\u5BC6\u7801"
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().modalFooter),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              children: "Copyright \xA9 2021\u8003\u8BD5\u4E91"
            })
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);

/***/ }),

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yE": () => (/* binding */ getOperationData),
/* harmony export */   "TH": () => (/* binding */ addOperationData),
/* harmony export */   "Kn": () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取全部数据

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // 添加数据

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // 获取ip地址

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2828,9279], () => (__webpack_exec__(1516)));
module.exports = __webpack_exports__;

})();