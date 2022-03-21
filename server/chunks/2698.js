"use strict";
exports.id = 2698;
exports.ids = [2698];
exports.modules = {

/***/ 2698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5345);
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(for_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_common_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6166);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






const DynaRender = props => {
  const {
    data,
    changeValue,
    mdChangeValue
  } = props;
  const {
    0: codeView,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(data || '');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const addImg = async $file => {
    setLoading(true);
    const res = await (0,_api_common_upload__WEBPACK_IMPORTED_MODULE_3__/* .uploadToGithub */ .R)($file.name, $file);

    if (res[0]) {
      setLoading(false);
    } else {
      setLoading(false);
    }

    const imgName = res[1].uploadUrl.slice(res[1].uploadUrl.lastIndexOf('/') + 1);
    changeValue(codeView.replace(/!.*\)/g, '图片') + '图片');
    setCode(codeView + '![' + imgName + '](' + res[1].uploadUrl + ')\n');
    mdChangeValue(codeView + '![' + imgName + '](' + res[1].uploadUrl + ')');
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
      spinning: loading,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((for_editor__WEBPACK_IMPORTED_MODULE_1___default()), {
        value: codeView,
        style: {
          height: 600
        },
        addImg: $file => addImg($file),
        onChange: val => {
          changeValue(val.replace(/!.*\)/g, '图片'));
          setCode(val);
          mdChangeValue(val);
        }
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DynaRender);

/***/ })

};
;