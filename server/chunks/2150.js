exports.id = 2150;
exports.ids = [2150];
exports.modules = {

/***/ 2150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Steps_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7821);
/* harmony import */ var _Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);







const StepComponent = props => {
  const {
    callBack,
    finishCallback,
    start,
    nextCallback,
    preCallback
  } = props;
  const {
    0: menu
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.step);
  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(start || 0);
  const {
    skip
  } = props.step[num];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    callBack(num); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    callBack(start);
    setNum(start); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().box),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().top),
      children: menu.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
          className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
            [(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().borderleft)]: index === 0,
            [(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().borderright)]: index === menu.length - 1,
            [(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().active)]: index === num,
            [(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().finish)]: skip === true && index < num || index < num,
            [(_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().undone)]: skip !== true && index > num
          }),
          onClick: () => {
            const flag = props.step.every(item => {
              return item.skip === true;
            });

            if (skip && index - num === 1 || index < num || flag) {
              setNum(index);
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("b", {
            children: index + 1
          }), item.title, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("i", {
            className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().span)
          })]
        }, index);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().main),
        children: props.children
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_Steps_module_scss__WEBPACK_IMPORTED_MODULE_4___default().footer),
      children: [num > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
        type: "primary",
        onClick: () => {
          preCallback && preCallback();

          if (num > 0) {
            setNum(num - 1);
          }
        },
        children: menu[num].buttonMsg.pre !== undefined ? menu[num].buttonMsg.pre : '上一步'
      }) : null, menu[num].buttonMsg && menu[num].buttonMsg.customButton && menu[num].buttonMsg.customButton.map((item, i) => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: item.type ? item.type : 'default',
          onClick: () => {
            item.buttonCallback && item.buttonCallback();
          },
          children: item.title
        }, i);
      }), num < menu.length - 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
        type: "primary",
        onClick: () => {
          nextCallback();

          if (num < menu.length - 1 && skip) {
            setNum(num + 1);
          }
        },
        children: menu[num].buttonMsg.next !== undefined ? menu[num].buttonMsg.next : '下一步'
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
        type: "primary",
        onClick: () => {
          if (num === menu.length - 1 && skip) {
            finishCallback && finishCallback();
          }
        },
        children: menu[num].buttonMsg.finish !== undefined ? menu[num].buttonMsg.finish : '完成'
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StepComponent);

/***/ }),

/***/ 7821:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Steps_box__6ZhkE",
	"top": "Steps_top__P6DS4",
	"active": "Steps_active__3H6hO",
	"span": "Steps_span__Step8",
	"finish": "Steps_finish__x1B44",
	"borderleft": "Steps_borderleft__Y3S0z",
	"borderright": "Steps_borderright__8Uu0A",
	"undone": "Steps_undone__OY9JG",
	"content": "Steps_content__3dthf",
	"main": "Steps_main__k58pV",
	"footer": "Steps_footer__yawqF"
};


/***/ })

};
;