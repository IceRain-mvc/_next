exports.id = 2625;
exports.ids = [2625];
exports.modules = {

/***/ 2625:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1715);
/* harmony import */ var _alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const Questions = props => {
  const questionsBox = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const questionsCon = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const questionsHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: flagState,
    1: setFlagState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 弹框左侧距离屏幕的距离

  const {
    0: diffX,
    1: setDiffX
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 弹框上侧距离屏幕的距离

  const {
    0: diffY,
    1: setDiffY
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);

  const initXY = () => {
    const x = (document.documentElement.clientWidth - questionsCon.current.offsetWidth) / 2;
    const y = (document.documentElement.clientHeight - questionsCon.current.offsetHeight) / 2;
    return [x, y];
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setFlagState(props.alertStatus);

    if (props.enableDrag) {
      setTimeout(() => {
        if (props.alertStatus && questionsCon.current) {
          const [x, y] = initXY();
          setDiffX(x);
          setDiffY(y);
          questionsCon.current.style.left = x + 'px';
          questionsCon.current.style.top = y + 'px';
        }
      });
    } else {
      const intervalLoop = setInterval(() => {
        if (props.alertStatus && questionsCon.current) {
          const [x, y] = initXY();
          questionsCon.current.style.left = x + 'px';
          questionsCon.current.style.top = y + 'px';
          questionsCon.current.style.transition = 'all 10ms linear';
        }
      }, 200);
      setTimeout(() => clearInterval(intervalLoop), 6000);
    }
  }, [props]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const closeAlert = e => {
    if (props.changeAlertFlag) {
      props.changeAlertFlag(!flagState);
    } else {
      e.nativeEvent.stopImmediatePropagation();
      setFlagState(false);
    }
  }; // 屏幕宽度


  let screenW = 0; // 弹框距离屏幕宽度最大距离（不超出屏幕）

  let valueX = 0;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (questionsCon.current) {
      questionsCon.current.style.left = diffX + 'px';
      questionsCon.current.style.top = diffY + 'px';
    }
  }, [diffX, diffY]); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const dragonet = ev => {
    if (props.enableDrag) {
      // 以弹窗盒子左上角为（0, 0）
      const disX = ev.nativeEvent.offsetX;
      const disY = ev.nativeEvent.offsetY;

      document.onmousemove = e => {
        // 以屏幕左上角为（0, 0）
        setDiffX(e.clientX - disX);
        setDiffY(e.clientY - disY);
      };
    }
  };

  const dragUp = () => {
    if (props.enableDrag) {
      screenW = document.documentElement.clientWidth;
      valueX = screenW - questionsCon.current.offsetWidth; // 如果左侧超出屏幕，弹窗到屏幕距离为0

      if (diffX < 0) {
        setDiffX(0);
      } // 如果右侧超出屏幕，弹窗到屏幕距离为0


      if (diffX >= valueX) {
        setDiffX(valueX);
      } // 如果上面超出屏幕，弹窗到屏幕距离为0


      if (diffY < 0) {
        setDiffY(0);
      }

      questionsCon.current.style.left = diffX + 'px';
      questionsCon.current.style.top = diffY + 'px';
      document.onmousemove = null;
    }
  };

  const {
    children
  } = props;
  return flagState ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
    ref: questionsBox,
    className: (_alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsBox),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: (_alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsContenet),
      ref: questionsCon,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: (_alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsHeader),
        onMouseDown: e => {
          dragonet(e);
        },
        onMouseUp: () => {
          dragUp();
        },
        ref: questionsHead,
        style: props.enableDrag ? {
          cursor: 'move',
          userSelect: 'none'
        } : {},
        children: [props.alertTitle, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CloseOutlined, {
          onMouseDown: e => {
            e.stopPropagation();
          },
          onClick: e => {
            closeAlert(e);
          }
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        className: (_alertCommon_module_scss__WEBPACK_IMPORTED_MODULE_3___default().qustionsHeaderLine)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {
        children: children
      })]
    })
  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("div", {});
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);

/***/ }),

/***/ 1715:
/***/ ((module) => {

// Exports
module.exports = {
	"qustionsBox": "alertCommon_qustionsBox__WbmbA",
	"qustionsContenet": "alertCommon_qustionsContenet__3w9Au",
	"qustionsHeader": "alertCommon_qustionsHeader__jqah9",
	"qustionsHeaderLine": "alertCommon_qustionsHeaderLine__mQ7Cf"
};


/***/ })

};
;