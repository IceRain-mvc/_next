"use strict";
exports.id = 2327;
exports.ids = [2327];
exports.modules = {

/***/ 2327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6190);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3672);
/* harmony import */ var _part_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_part_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1518);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const ManagementForm = props => {
  const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default().useForm();

  const {
    0: value,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();

  const onFinish = values => {
    setValue(value);
    props.onFinish && props.onFinish(values);
  };

  const onReset = () => {
    props.onFinish && props.onFinish(value);
    form.resetFields();
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: (_part_module_css__WEBPACK_IMPORTED_MODULE_6___default().managementForm),
    style: {
      position: 'relative'
    },
    id: "myselets",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default()), {
      form: form,
      className: (_part_module_css__WEBPACK_IMPORTED_MODULE_6___default().formBox),
      name: "control-hooks",
      onFinish: onFinish,
      children: [props.labelName && props.labelName.map((item, index) => {
        switch (item) {
          case 'search':
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default().Item), {
              label: props.title ? props.title[index] : null,
              name: props.keyData ? props.keyData[index] : '',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_3__.SearchCommon, {})
            }, index);

          case 'date':
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default().Item), {
              label: props.title ? props.title[index] : null,
              name: props.keyData ? props.keyData[index] : '',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_3__.DateCommon, {})
            }, index);

          default:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default().Item), {
              label: props.title ? props.title[index] : null,
              name: props.keyData ? props.keyData[index] : '',
              children: "\u8BF7\u4F20\u503C"
            }, index);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_form__WEBPACK_IMPORTED_MODULE_1___default().Item), {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          htmlType: "submit",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SearchOutlined, {}), "\u67E5\u8BE2"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          htmlType: "button",
          onClick: onReset,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.ReloadOutlined, {}), "\u91CD\u7F6E"]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagementForm);

/***/ })

};
;