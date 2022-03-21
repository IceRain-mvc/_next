"use strict";
exports.id = 9756;
exports.ids = [9756];
exports.modules = {

/***/ 9756:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


 // import { CaretDownOutlined } from '@ant-design/icons';
// 按需加载组件




const CaretDownOutlined = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 7066, 23)).then(mod => mod.CaretDownOutlined), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7066)],
    modules: ["../src/analyse/gradeAlter/commonAlter.tsx -> " + '@ant-design/icons']
  }
});

const GradeAlter = props => {
  const {
    title,
    data,
    getValue
  } = props; // 点击事件

  const onClick = ({
    key
  }) => {
    getValue(data[key], key);
  }; // 点击内部每一个


  const menu = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
    onClick: onClick,
    children: data.map((item, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
        children: item
      }, index);
    })
  });

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_2___default()), {
    overlay: menu,
    trigger: ['click'],
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      style: {
        background: '#e9ecf0',
        display: 'inline-block',
        padding: ' 10px',
        border: '1px solid rgb(209 210 211)'
      },
      children: [title, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CaretDownOutlined, {})]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradeAlter);

/***/ })

};
;