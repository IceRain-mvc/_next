"use strict";
exports.id = 6863;
exports.ids = [6863];
exports.modules = {

/***/ 6863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);




const BatchEditing = props => {
  const textArea = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    style: {
      width: '600px',
      height: '296px',
      position: 'absolute',
      left: '30%',
      top: '100%',
      borderRadius: '5px',
      backgroundColor: 'white',
      border: '1px solid  rgb(204 204 204)',
      padding: '5px 15px 15px',
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.1), 0 0 256px rgba(255, 255, 255, .3)',
      zIndex: '5'
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("p", {
      children: "\u6BCF\u884C\u5185\u5BB9\u5BF9\u5E94\u4E00\u4E2A\u9009\u9879"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      style: {
        width: '90%',
        height: '70%',
        margin: '0 auto'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("textarea", {
        ref: textArea,
        name: "",
        id: "",
        style: {
          width: '100%',
          height: '100%'
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
      style: {
        width: '70px',
        margin: '0 auto',
        textAlign: 'center'
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("button", {
        style: {
          lineHeight: '20px',
          backgroundColor: 'white'
        },
        onClick: () => {
          props.setBatchEditingFlag(false);
          const arr = textArea.current.value.split('\n');
          const newArr = [];
          arr.forEach(item => {
            if (item !== '') {
              newArr.push(item);
            }
          });
          props.getBatchEditData(newArr);
        },
        children: "\u786E\u5B9A"
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchEditing);

/***/ })

};
;