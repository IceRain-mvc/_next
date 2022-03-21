exports.id = 965;
exports.ids = [965];
exports.modules = {

/***/ 965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8069);
/* harmony import */ var _resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Questions = props => {
  const questionsBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const questionsCon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const questionsHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: flagState,
    1: setflagState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setflagState(props.alertStatus);
  }, [props]);

  const closeAlert = e => {
    setflagState(false);
  };

  const dragonet = ev => {
    const disX = ev.nativeEvent.offsetX;
    const disY = ev.nativeEvent.offsetY;

    document.onmousemove = e => {
      const diffX = e.clientX - disX + 'px';
      const diffY = e.clientY - disY + 'px';
      questionsCon.current.style.left = diffX;
      questionsCon.current.style.top = diffY;
    };
  };

  const dragUp = () => {
    document.onmousemove = null;
  };

  const {
    children
  } = props;
  return flagState ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    ref: questionsBox,
    className: (_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsBox),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsContenet),
      ref: questionsCon,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsHeader),
        onMouseDown: e => {
          dragonet(e);
        },
        onMouseUp: () => {
          dragUp();
        },
        ref: questionsHead,
        children: [props.dialogOpt, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CloseOutlined, {
          onMouseDown: e => {
            e.stopPropagation();
          },
          onClick: e => {
            props.xFlag && props.xFlag.length > 0 && props.closeCallBack();
            document.onmousemove = null;
            closeAlert(e);
            props.changeAlertFlag(!flagState);
          }
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsHeaderLine)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_resourceQustions_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsHeaderMain),
        children: children
      })]
    })
  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);

/***/ }),

/***/ 8069:
/***/ ((module) => {

// Exports
module.exports = {
	"qustionsBox": "resourceQustions_qustionsBox__8KwPW",
	"qustionsContenet": "resourceQustions_qustionsContenet___8q1G",
	"qustionsHeader": "resourceQustions_qustionsHeader__bvxwQ",
	"qustionsHeaderLine": "resourceQustions_qustionsHeaderLine__0t3RH",
	"qustionsHeaderMain": "resourceQustions_qustionsHeaderMain__eDmkZ"
};


/***/ })

};
;