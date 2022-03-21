exports.id = 9719;
exports.ids = [9719];
exports.modules = {

/***/ 9719:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4844);
/* harmony import */ var _AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const AlertWarning = props => {
  const {
    warning,
    setShowWarnAlert,
    isDelete,
    executeFun,
    isExam,
    cancelEvent
  } = props;
  const {
    0: locX,
    1: setLocX
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: locY,
    1: setLocY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: boxX,
    1: setBoxX
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: boxY,
    1: setBoxY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const box = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const onMouseDown = e => {
    setFlag(true);
    setBoxX(e.clientX - box.current.getBoundingClientRect().left);
    setBoxY(e.clientY - box.current.getBoundingClientRect().top);
  };

  const onMouseMove = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(e => {
    if (flag) {
      const x = e.clientX - boxX;
      const y = e.clientY - boxY;
      setLocX(x);
      setLocY(y);
    }
  }, [boxX, boxY, flag]);
  const onMouseUp = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(() => {
    setFlag(false);

    if (locX < 0) {
      setLocX(0);
    }

    if (locX > window.innerWidth - box.current.offsetWidth) {
      setLocX(window.innerWidth - box.current.offsetWidth);
    }

    if (locY < 0) {
      setLocY(0);
    }

    if (locY > window.innerHeight - box.current.offsetHeight - 155) {
      setLocY(window.innerHeight - box.current.offsetHeight - 155);
    }
  }, [locX, locY]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [onMouseMove]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_shadow),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_window),
      style: {
        left: locX !== null ? locX + 'px' : 'calc(calc(100vw - 340px) / 2)',
        top: locY !== null ? locY + 'px' : 'calc(calc(100vh - 200px) / 2)'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_title),
        ref: box,
        onMouseDown: onMouseDown,
        onMouseUp: onMouseUp,
        children: ["\u63D0\u793A", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          id: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_close_icon),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CloseOutlined, {
            onClick: () => {
              setShowWarnAlert(false);
              cancelEvent && cancelEvent(true);
            }
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_content),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_remind),
            children: isDelete ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.QuestionCircleOutlined, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.WarningOutlined, {})
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
            className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_warn),
            children: warning
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_foot),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_btn),
          onClick: () => {
            setShowWarnAlert(false);
            executeFun && executeFun();
          },
          children: isExam ? '去设计试卷' : '确定'
        }), (isDelete || isExam) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("button", {
          className: (_AlertWarning_module_css__WEBPACK_IMPORTED_MODULE_3___default().warning_execute),
          onClick: () => {
            setShowWarnAlert(false);
            cancelEvent && cancelEvent(true);
          },
          children: isExam ? '继续编辑考试' : '取消'
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AlertWarning);

/***/ }),

/***/ 4844:
/***/ ((module) => {

// Exports
module.exports = {
	"warning_shadow": "AlertWarning_warning_shadow__YT0E0",
	"warning_window": "AlertWarning_warning_window__PqAiF",
	"warning_title": "AlertWarning_warning_title__Je8KR",
	"warning_close_icon": "AlertWarning_warning_close_icon__H9Zlk",
	"warning_content": "AlertWarning_warning_content__2sKUU",
	"warning_warn": "AlertWarning_warning_warn__DXYI7",
	"warning_remind": "AlertWarning_warning_remind__5_AO_",
	"warning_foot": "AlertWarning_warning_foot__XX8y1",
	"warning_execute": "AlertWarning_warning_execute__hZ0np"
};


/***/ })

};
;