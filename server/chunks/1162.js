exports.id = 1162;
exports.ids = [1162];
exports.modules = {

/***/ 1162:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9036);
/* harmony import */ var _popout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_popout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
 // 公共导出的组件

const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/analyse/examination/component/export/popout.tsx -> " + '@component/alertCommon/alertCommon']
  }
});






const Popout = props => {
  // const [alertShow, settlersShow] = useState(true);
  const {
    matrix,
    list,
    boxes,
    id
  } = props; // 调用弹窗事件
  // const alertdialog = () => {};
  // 关闭弹窗事件

  const changeAlertFlag = () => {
    matrix();
  };

  const box = (list, boxes) => {
    const result = [];
    boxes && boxes.forEach(curr => {
      list && list.map(item => {
        if (Number(curr) === Number(item.id)) {
          result.push(item);
        }
      });
    });
    return result;
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(AlertCommon, {
      alertStatus: true,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_popout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().box),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            children: "?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("span", {
            children: ["\u67E5\u8BE2\u8BB0\u5F55\u5171\u6709", boxes && boxes.length === 0 ? list && list.length : boxes && boxes.length, "\u6761\u8BB0\u5F55\u786E\u8BA4\u5BFC\u51FA\u5417"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
            onClick: async () => {
              if (boxes.length === 0) {
                let arr;

                if (id === '1') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(6305)]).then(__webpack_require__.bind(__webpack_require__, 6305))).default(list);
                } else if (id === '2') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(8499)]).then(__webpack_require__.bind(__webpack_require__, 8499))).default(list);
                } else if (id === '3') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(7323)]).then(__webpack_require__.bind(__webpack_require__, 7323))).default(list);
                } else if (id === '4') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(4899)]).then(__webpack_require__.bind(__webpack_require__, 4899))).default(list);
                } else if (id === '5') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(5266)]).then(__webpack_require__.bind(__webpack_require__, 5266))).default(list);
                } else if (id === '6') {
                  arr = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(2876)]).then(__webpack_require__.bind(__webpack_require__, 2876))).default(list);
                }

                setTimeout(() => {
                  matrix();
                }, 100);
                return arr;
              }

              let res;

              if (id === '1') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(6305)]).then(__webpack_require__.bind(__webpack_require__, 6305))).default(box(list, boxes));
              } else if (id === '2') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(8499)]).then(__webpack_require__.bind(__webpack_require__, 8499))).default(box(list, boxes));
              } else if (id === '3') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(7323)]).then(__webpack_require__.bind(__webpack_require__, 7323))).default(box(list, boxes));
              } else if (id === '4') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(4899)]).then(__webpack_require__.bind(__webpack_require__, 4899))).default(box(list, boxes));
              } else if (id === '5') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(5266)]).then(__webpack_require__.bind(__webpack_require__, 5266))).default(box(list, boxes));
              } else if (id === '6') {
                res = (await Promise.all(/* import() */[__webpack_require__.e(1112), __webpack_require__.e(2876)]).then(__webpack_require__.bind(__webpack_require__, 2876))).default(list);
              }

              setTimeout(() => {
                matrix();
              }, 100);
              return res;
            },
            children: "\u786E\u5B9A"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
            onClick: () => {
              matrix();
            },
            children: "\u53D6\u6D88"
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popout);

/***/ }),

/***/ 9036:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "popout_box__vr2dA"
};


/***/ })

};
;