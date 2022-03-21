(() => {
var exports = {};
exports.id = 4961;
exports.ids = [4961,2194];
exports.modules = {

/***/ 9566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9392);
/* harmony import */ var _components_management_paymentContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5477);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_management_paymentContent__WEBPACK_IMPORTED_MODULE_2__]);
_components_management_paymentContent__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Payment = () => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      args: 7,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_components_management_paymentContent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Payment);
});

/***/ }),

/***/ 4731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ GetPayMent)
/* harmony export */ });
/* unused harmony export GetOrderId */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function GetPayMent(data) {
  // console.log('payment-3', data);
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'payments/createPayment',
    method: 'POST',
    data
  });
}
function GetOrderId() {
  return httpProvider.request({
    url: 'payments/getOrderIds',
    method: 'GET'
  });
}

/***/ }),

/***/ 5477:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6377);
/* harmony import */ var _paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_management_payment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4731);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5611);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_4__]);
nanoid__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];









const PaymentContent = () => {
  const {
    0: inputNum,
    1: setInputNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
  const {
    0: checkeds,
    1: setchecked
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // const [orderId, setorderID] = useState('0');

  function inputChange(e) {
    const changeNum = e.target.value;
    setInputNum(changeNum);
  }

  const payMent = async () => {
    if (checkeds === false) {
      setchecked(true);

      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('请阅读并同意充值须知');
    } else {
      const orderId = (0,nanoid__WEBPACK_IMPORTED_MODULE_4__.nanoid)();
      console.log(orderId);
      const res = await (0,_api_management_payment__WEBPACK_IMPORTED_MODULE_3__/* .GetPayMent */ .N)({
        inputNum,
        orderId
      }).then(payres => {
        console.log(payres);
        window.location.href = payres.result;
      });
    }
  };

  const inputCheckboxs = e => {
    setchecked(e.target.checked);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().appendBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divMainPanel),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divMainBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h4", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divMainPanelLeft),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "\u8BF7\u8F93\u5165\u5145\u503C\u91D1\u989D"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divMainPanelRight),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputGroup),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              // /^(-?\d+)(\.\d+)?$/
              // onKeyUp="if(isNaN(value))execCommand('undo')"
              // onafterpaste="if(isNaN(value))execCommand('undo')"
              type: "text",
              placeholder: "\u8BF7\u8F93\u5165\u5145\u503C\u91D1\u989D",
              onBlur: e => {
                inputChange(e);
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().inputMoney),
              children: "(\u5143)"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().balance),
            children: ["\u5F53\u524D\u4F59\u989D\uFF1A", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              children: "0.00"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkboxs),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              type: "checkbox",
              defaultChecked: checkeds,
              onChange: e => {
                inputCheckboxs(e);
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              style: {
                color: 'rgb(0, 148, 255)',
                padding: '20px 10px'
              },
              children: "\u6211\u5DF2\u9605\u8BFB\u5E76\u540C\u610F\u4E00\u4E0B\u5145\u503C\u987B\u77E5\uFF1A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              children: "\u4E00\u3001\u5145\u503C\u91D1\u989D\u4EC5\u7528\u4E8E\u4EBA\u8138\u5B9E\u540D\u8BA4\u8BC1\u3001\u6444\u50CF\u5934\u76D1\u8003\u7684\u8D39\u7528\u62B5\u6263\u3002"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              children: "\u4E8C\u3001\u6240\u6709\u7248\u672C(\u5305\u62EC\u514D\u8D39\u7248\u672C)\u90FD\u53EF\u4EE5\u5145\u503C,\u90FD\u5728\u5176\u5404\u81EA\u7248\u672C\u6388\u6743\u5185\u4F7F\u7528\u3002"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              children: "\u4E09\u3001\u8D39\u7528\u62B5\u6263\u8BF4\u660E\uFF1A"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkboxP),
              children: [' ', "1\u3001\u4EBA\u8138\u5B9E\u540D\u8BA4\u8BC1(\u4E0E\u516C\u5B89\u5E93\u8FDB\u884C\u4EBA\u8138\u5B9E\u540D\u8BA4\u8BC1)\uFF1A\u6BCF\u9A8C\u8BC1\u4E00\u6B21\u4EBA\u8138\u6263\u9664 5\u5143\u3002"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().checkboxP),
              children: [' ', "2\u3001\u6444\u50CF\u5934\u62CD\u7167\u76D1\u8003(\u8003\u8BD5\u8FC7\u7A0B\u4E2D\u5B9A\u65F6\u6293\u62CD)\uFF1A\u6BCF\u53C2\u52A0\u4E00\u6B21\u7B54\u9898\u6263\u9664 1\u5143\u3002"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              children: "\u56DB\u3001\u5145\u503C\u6210\u529F\u540E\uFF0C\u8D26\u6237\u4F59\u989D\u6C38\u4E45\u6709\u6548\u3002"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().payWay),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().payWayLeft),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
            children: ["\u9009\u62E9\u652F\u4ED8\u65B9\u5F0F", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.QuestionCircleOutlined, {})]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().payWayRight),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zfbDiv),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
                type: "checkbox"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.AlipayCircleFilled, {
                className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zfb)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().zfbFont),
                children: "\u652F\u4ED8\u5B9D"
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().invoiceBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().invoiceLeft),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "\u53D1\u7968\u4FE1\u606F"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().invoiceRight),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            type: "checkbox"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            style: {
              paddingLeft: '10px'
            },
            children: "\u9700\u8981\u53D1\u7968"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
            children: "\u6E29\u99A8\u63D0\u793A\uFF1A\u5F53\u5355\u7B14\u91D1\u989D\u5C0F\u4E8E200\u5143\u65F6\uFF0C\u6211\u4EEC\u65E0\u6CD5\u63D0\u4F9B\u53D1\u7968,\u4E0B\u6B21\u8D2D\u4E70\u65F6,\u53EF\u4EE5\u63D0\u9192\u6211\u4EEC\u5C06\u672C\u6B21\u91D1\u989D\u7D2F\u52A0\u4E00\u8D77\u5F00\u53D1\u7968\uFF0C\u7ED9\u4F60\u5E26\u6765\u4E0D\u4FBF\uFF0C\u656C\u8BF7\u8C05\u89E3\uFF01"
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footerBox),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().AllMoney),
        children: ["\u5408\u8BA1\uFF1A", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
          children: ["\uFFE5 ", inputNum === null ? 0 : inputNum]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
          className: (_paymentContent_module_scss__WEBPACK_IMPORTED_MODULE_6___default().SubmitBtn),
          onClick: () => {
            payMent();
          },
          children: "\uFFE5\u4F7F\u7528\u652F\u4ED8\u5B9D\u652F\u4ED8"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PaymentContent);
});

/***/ }),

/***/ 6377:
/***/ ((module) => {

// Exports
module.exports = {
	"appendBox": "paymentContent_appendBox__i66DG",
	"divMainPanel": "paymentContent_divMainPanel__Zo64M",
	"divMainBox": "paymentContent_divMainBox__EqJD3",
	"divMainPanelLeft": "paymentContent_divMainPanelLeft__xoeM2",
	"divMainPanelRight": "paymentContent_divMainPanelRight__GOs1n",
	"inputGroup": "paymentContent_inputGroup__BaEaO",
	"inputMoney": "paymentContent_inputMoney__rJxF2",
	"balance": "paymentContent_balance__Ux5Yu",
	"checkboxs": "paymentContent_checkboxs__Hr9Rf",
	"checkboxP": "paymentContent_checkboxP__C8a_6",
	"payWay": "paymentContent_payWay__twtP7",
	"payWayLeft": "paymentContent_payWayLeft__fsi2h",
	"payWayRight": "paymentContent_payWayRight__V5QJi",
	"zfbDiv": "paymentContent_zfbDiv__XZijr",
	"zfb": "paymentContent_zfb__CMofi",
	"zfbFont": "paymentContent_zfbFont__BWT6V",
	"zfbEnglish": "paymentContent_zfbEnglish__HrXfd",
	"invoiceBox": "paymentContent_invoiceBox__CYCqg",
	"invoiceLeft": "paymentContent_invoiceLeft__g1CQy",
	"invoiceRight": "paymentContent_invoiceRight__lGZpu",
	"footerBox": "paymentContent_footerBox__Fjkt2",
	"AllMoney": "paymentContent_AllMoney__4QF0q",
	"SubmitBtn": "paymentContent_SubmitBtn__ShVhN"
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

/***/ }),

/***/ 5611:
/***/ ((module) => {

"use strict";
module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,3286,2625,9279,6166,9392], () => (__webpack_exec__(9566)));
module.exports = __webpack_exports__;

})();