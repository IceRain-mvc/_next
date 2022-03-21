(() => {
var exports = {};
exports.id = 5647;
exports.ids = [5647,2194,196];
exports.modules = {

/***/ 9721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CenterAlertCont)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function CenterAlertCont() {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      style: {
        width: '100%',
        height: 110,
        // borderBottom: '1px solid rgb(218, 222, 229)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CheckSquareFilled, {
        style: {
          fontSize: 30,
          color: 'rgb(9, 187, 7)',
          marginRight: 10
        }
      }), "\u5DF2\u7ECF\u6210\u529F\u590D\u5236\u5230\u7C98\u8D34\u677F"]
    })
  });
}

/***/ }),

/***/ 5302:
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
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9392);
/* harmony import */ var _examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1039);
/* harmony import */ var _examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_alertCommon_alertCommon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2625);
/* harmony import */ var _centerAlertCont__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9721);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_devjfr411fb.js'
});

const ExamineeCenter = () => {
  const {
    0: tag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(['考生中心', '考试云小程序']);
  const {
    0: myitem,
    1: setItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const copy = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // 调用弹窗事件

  const alertdialog = () => {
    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 一键复制


  const onCopy = () => {
    console.log(copy.current); // // 选中节点
    // 创建Range对象（某个区域内连续的内容）

    const range = document.createRange(); // 清除页面中已有的selection

    window.getSelection().removeAllRanges(); // 选中需要复制的节点

    range.selectNode(copy.current); // 执行选中元素

    window.getSelection().addRange(range); // 执行 copy 操作

    const copyStatus = document.execCommand('Copy'); // 对成功与否定进行提示

    if (copyStatus) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().success('复制成功！');
    } // 移除选中的元素


    window.getSelection().removeAllRanges();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
      args: 7,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterTab),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            children: tag.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
                className: index === myitem ? (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterTLight) : '',
                onClick: () => {
                  setItem(index);
                  next_router__WEBPACK_IMPORTED_MODULE_7___default().push(index === 0 ? '/examinee/examineeCenter' : '/examinee/examineeCloud');
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
                    type: "icon-fenxiang1"
                  }), item]
                }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {})]
              }, index);
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterList),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterLTop),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
                  type: "icon-lingdang"
                }), "\u5982\u679C\u60A8\u6709\u7ED9\u8003\u751F\u521B\u5EFA\u8D26\u53F7\u548C\u5BC6\u7801\uFF0C\u53EF\u4EE5\u5C06\u4E0B\u65B9\u8003\u751F\u4E2D\u5FC3\u5730\u5740\u6216\u4E8C\u7EF4\u7801\u53D1\u7ED9\u8003\u751F\uFF0C\u8003\u751F\u767B\u5F55\u540E\u53EF\u770B\u5230\u5B89\u6392\u7ED9\u81EA\u5DF1\u7684\u8003\u8BD5\u3001\u5B66\u4E60\u3001\u8BFE\u7A0B\u7B49"]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
              className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterFCopy),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                children: "\u8003\u751F\u4E2D\u5FC3\u767B\u5F55\u5730\u5740\uFF1A"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                  id: "a",
                  ref: copy,
                  className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterCopy),
                  href: "http://110.40.139.133:3003",
                  target: "_blank",
                  rel: "noreferrer",
                  children: "http://110.40.139.133:3003"
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                onClick: () => {
                  setFlag(true);
                  alertdialog();
                },
                children: "\u590D\u5236"
              }), ' ', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                href: "http://110.40.139.133:3003",
                target: "_blank",
                rel: "noreferrer",
                children: "\u6253\u5F00"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterLCont),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              children: "\u8003\u751F\u4E2D\u5FC3\u767B\u5F55\u4E8C\u7EF4\u7801\uFF1A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_6___default()), {
                id: "qrCode",
                value: `http://110.40.139.133:3003`,
                size: 200 // 二维码的大小
                ,
                fgColor: "#000000" // 二维码的颜色
                ,
                style: {
                  margin: 'auto'
                },
                imageSettings: {
                  // 二维码中间的logo图片
                  src: '',
                  height: 50,
                  width: 50,
                  excavate: false // 中间图片所在的位置是否镂空

                }
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterLLast),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: "\u7B2C\u4E09\u65B9\u96C6\u6210\uFF08\u516C\u4F17\u53F7\u3001\u9489\u9489\u7B49\uFF09\uFF1A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
                href: "http://110.40.139.133:3003",
                className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterCopy),
                target: "_blank",
                rel: "noreferrer",
                children: "http://110.40.139.133:3003"
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              onClick: () => {
                setFlag(true);
                alertdialog();
              },
              children: "\u590D\u5236"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
              href: "http://110.40.139.133:3003",
              target: "_blank",
              rel: "noreferrer",
              children: "\u6253\u5F00"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: "\u67E5\u770B\u6548\u679C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              children: "\u53EF\u4EE5\u5C06\u6B64\u94FE\u63A5\u6DFB\u52A0\u5230\u516C\u4F17\u53F7\u83DC\u5355"
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterAlert),
          children: flag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_alertCommon_alertCommon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            alertStatus: alertShow,
            enableDrag: true,
            alertTitle: '提示',
            changeAlertFlag: changeAlertFlag,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterAlertCont),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_centerAlertCont__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: (_examineeCenter_module_css__WEBPACK_IMPORTED_MODULE_9___default().examineeCenterAlertBtn),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
                  onClick: () => {
                    setFlag(false);
                    onCopy();
                  },
                  children: "\u786E\u5B9A"
                })
              })]
            })
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {})
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamineeCenter);

/***/ }),

/***/ 1039:
/***/ ((module) => {

// Exports
module.exports = {
	"examineeCenterBox": "examineeCenter_examineeCenterBox__H7Dxm",
	"examineeCenterTab": "examineeCenter_examineeCenterTab__RRXTA",
	"examineeCenterTLight": "examineeCenter_examineeCenterTLight__juKAp",
	"examineeCenterList": "examineeCenter_examineeCenterList__qbHa9",
	"examineeCenterLTop": "examineeCenter_examineeCenterLTop__oTHTG",
	"examineeCenterLCont": "examineeCenter_examineeCenterLCont__UkhXe",
	"examineeCenterLLast": "examineeCenter_examineeCenterLLast__7B4H2",
	"examineeCenterAlert": "examineeCenter_examineeCenterAlert__jTpnt",
	"examineeCenterAlertCont": "examineeCenter_examineeCenterAlertCont__v83np",
	"examineeCenterAlertBtn": "examineeCenter_examineeCenterAlertBtn__iAAb3"
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

/***/ 3860:
/***/ ((module) => {

"use strict";
module.exports = require("qrcode.react");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,3286,2625,9279,6166,9392], () => (__webpack_exec__(5302)));
module.exports = __webpack_exports__;

})();