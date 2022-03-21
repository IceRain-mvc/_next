"use strict";
exports.id = 1876;
exports.ids = [1876];
exports.modules = {

/***/ 1876:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(803);
/* harmony import */ var _component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5458);
/* harmony import */ var next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);






const MyIcon = next_dist_shared_lib_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => __webpack_require__.e(/* import() */ 7622).then(__webpack_require__.bind(__webpack_require__, 7622)));

const RecycleBinColumn = props => {
  const {
    item,
    setAlertWhoText,
    setAlertWhoFlag,
    setDelId,
    setIsModalVisible,
    exercise
  } = props;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("ul", {
      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().orderRight),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
        className: exercise ? (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().firP) : (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().firP) + ' ' + (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().firPBorder),
        onClick: () => {
          // 弹窗的显示与隐藏
          setAlertWhoText('删除后不可恢复，确认永久删除吗？');
          setAlertWhoFlag(1);
          setDelId(exercise ? item.exerciseId : item.examId);
          setIsModalVisible(true);
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().x),
          children: "\xD7"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          children: "\u4ECE\u56DE\u6536\u7AD9\u5220\u9664"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_3___default().lastP),
        onClick: async () => {
          setAlertWhoText('确认恢复考试吗？');
          setAlertWhoFlag(2);
          setDelId(exercise ? item.exerciseId : item.examId);
          setIsModalVisible(true);
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(MyIcon, {
          type: "icon-antdContentfanhui",
          style: {
            marginRight: '2px'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx("span", {
          children: "\u6062\u590D\u8003\u8BD5"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecycleBinColumn);

/***/ })

};
;