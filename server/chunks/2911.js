exports.id = 2911;
exports.ids = [2911];
exports.modules = {

/***/ 2911:
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
/* harmony import */ var _ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3108);
/* harmony import */ var _ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_exam_paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4455);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const ExamPaperOptions = props => {
  const {
    close,
    examId,
    exerciseId,
    setShowMessage,
    isPublish,
    exercisePattern
  } = props;
  const {
    0: typeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    type: 0,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ProfileOutlined, {}),
    className: 'everyType0',
    title: '固定试卷',
    description: '选择特定试题\n生成一份试卷（试题可乱序）',
    buttonMsg: '去创建固定试卷'
  }, {
    type: 1,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.RetweetOutlined, {}),
    className: 'everyType1',
    title: '抽题试卷',
    description: '给定试题范围和抽题数量\n抽题生成试卷',
    buttonMsg: '去创建抽题试卷'
  }, {
    type: 2,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.ForkOutlined, {}),
    className: 'everyType2',
    title: '随机试卷',
    description: '指定试题分类、题型及数量\n随机生成试卷',
    buttonMsg: '去创建随机试卷'
  }]);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().paperTypeOptions),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().paperCheck),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
        className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().paperTypeTitle),
        children: ["\u8BF7\u9009\u62E9\u8BD5\u5377\u7C7B\u578B", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
          className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().close),
          onClick: () => {
            close(false);
            setShowMessage(true);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloseOutlined, {})
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().paperType),
        children: typeList.map(item => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: item.type === 0 ? (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType) + ' ' + (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType0) : item.type === 1 ? (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType) + ' ' + (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType1) : (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType) + ' ' + (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().everyType2),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().icon),
              children: item.icon
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
              children: item.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
              className: (_ExamPaperOptions_module_scss__WEBPACK_IMPORTED_MODULE_6___default().des),
              children: [item.description.split('\n')[0], /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), item.description.split('\n')[1]]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              onClick: async () => {
                if (examId) {
                  // 创建试卷 考试
                  const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_3__/* .createPaper */ .p6)({
                    examId,
                    paperType: item.type,
                    paperTitle: item.title
                  });
                  close(false);
                  setShowMessage(true);
                  await router.push({
                    pathname: '/design/Design',
                    query: {
                      examId,
                      paperId: res.paperId,
                      type: item.type,
                      isPublish
                    }
                  });
                } else if (exerciseId) {
                  // 创建试卷 练习
                  const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_3__/* .createPapercise */ .JI)({
                    exerciseId,
                    paperType: item.type,
                    paperTitle: item.title
                  });
                  close(false);
                  setShowMessage(true);
                  await router.push({
                    pathname: '/SimulationTest',
                    query: {
                      exerciseId,
                      paperId: res.paperId,
                      type: item.type,
                      isPublish,
                      exercisePattern
                    }
                  });
                }
              },
              children: item.buttonMsg
            })]
          }, item.type);
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamPaperOptions);

/***/ }),

/***/ 3108:
/***/ ((module) => {

// Exports
module.exports = {
	"paperTypeOptions": "ExamPaperOptions_paperTypeOptions__gWG3Q",
	"paperCheck": "ExamPaperOptions_paperCheck__XXqQk",
	"paperTypeTitle": "ExamPaperOptions_paperTypeTitle__w_A_V",
	"close": "ExamPaperOptions_close__JSyK8",
	"paperType": "ExamPaperOptions_paperType__JxYcH",
	"everyType": "ExamPaperOptions_everyType__R5wCT",
	"icon": "ExamPaperOptions_icon__WfHbZ",
	"des": "ExamPaperOptions_des__qU_fi",
	"everyType0": "ExamPaperOptions_everyType0__XfAKN",
	"everyType1": "ExamPaperOptions_everyType1__TAPGl",
	"everyType2": "ExamPaperOptions_everyType2__w_nKv"
};


/***/ })

};
;