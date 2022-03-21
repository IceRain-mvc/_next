(() => {
var exports = {};
exports.id = 6979;
exports.ids = [6979,2194];
exports.modules = {

/***/ 4415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Steps__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2150);
/* harmony import */ var _component_exam_fixedPaper_addTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6533);
/* harmony import */ var _component_Nav_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9392);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_exam_textSet_textSetes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7779);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var _Design_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2427);
/* harmony import */ var _Design_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Design_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_exam_paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4455);
/* harmony import */ var _components_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9719);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














const PreviewText = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => __webpack_require__.e(/* import() */ 3552).then(__webpack_require__.bind(__webpack_require__, 3552)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3552)],
    modules: ["design/Design.tsx -> " + '@/components/exam/previewText/index']
  }
});
async function getServerSideProps(ctx) {
  const {
    isPublish,
    paperId,
    type,
    examId
  } = ctx.query;
  return {
    props: {
      isPublish,
      paperId,
      type,
      examId
    }
  };
}

const Design = props => {
  const {
    isPublish,
    paperId,
    type,
    examId
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();
  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
  const {
    0: alertShow,
    1: setAlertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: alertFlag,
    1: setAlertFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: quesSort,
    1: getPaperMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: warmPrompt,
    1: setWarmPrompt
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const {
    0: parentConflict,
    1: setParentConflict
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // 关闭弹窗事件

  const changeAlertFlag = res => {
    setAlertShow(res);
  };

  const {
    0: source,
    1: setSource
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // 获取试卷信息方法

  const changePaperMessage = async () => {
    // 保存试卷
    const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .changeQuesSort */ .NY)({
      data: quesSort
    });
    return {
      msg: res.msg,
      code: res.code
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {// 通过试卷id获取考试是否已设置信息
  }, [router.query.examId, router.query.paperId, router.query.type, source]);
  const {
    0: step
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    title: '考试信息',
    skip: false,
    buttonMsg: {
      next: '保存&去设计试卷'
    }
  }, {
    title: '设计试卷',
    skip: false,
    buttonMsg: {
      next: '完成设计&去发布考试',
      customButton: [{
        title: '考试设置',
        type: 'danger',
        buttonCallback: function () {
          setAlertShow(true);
        }
      }, {
        title: '预览试卷',
        buttonCallback: function () {
          console.log('查看');
        }
      }],
      pre: '返回上一步'
    }
  }, {
    title: '发布考试',
    skip: false,
    buttonMsg: {
      pre: '返回上一步',
      finish: '返回考试列表'
    }
  }]);
  const {
    0: step1
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([{
    title: '考试信息',
    skip: false,
    buttonMsg: {
      next: '保存&去设计试卷'
    }
  }, {
    title: '设计试卷',
    skip: false,
    buttonMsg: {
      next: '完成设计&去发布考试',
      customButton: [{
        title: '预览试卷',
        buttonCallback: async function () {
          const result = await changePaperMessage();

          if (result.code === 1) {// 打开预览界面
          }
        }
      }],
      pre: '返回上一步'
    }
  }, {
    title: '发布考试',
    skip: false,
    buttonMsg: {
      pre: '返回上一步',
      finish: '返回考试列表'
    }
  }]);

  const closeAlert = () => {
    setAlertShow(false);
  };

  const myChange = res => {
    setSource(res);
  };

  const {
    0: preview,
    1: setPreview
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const textPaper = res => {
    setPreview(res);
  };

  const changePreview = res => {
    setPreview(res);
  }; // 修改考试是否已发布方法


  const updatePublish = async () => {
    await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .setIsPublish */ .fV)(examId).then(res => {
      setLoading(true);

      if (res) {
        setLoading(false);
        router.push({
          pathname: '/code/Code',
          query: {
            examId,
            paperId: Number(paperId),
            type: Number(type),
            isPublish: Number(isPublish)
          }
        });
      }
    });
  }; // 生成试卷


  const nextPublishEvent = async () => {
    // 下一步
    (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .getSmallQuestionCount */ .me)(Number(paperId)).then(async res => {
      if (res.questionCount === 0) {
        setAlertFlag(true);
      } else {
        let result;

        if (Number(type) === 0) {
          result = await changePaperMessage();
        } else {
          // 保存试卷，跳转路由
          switch (Number(type)) {
            case 1:
              // 生成抽题试卷
              result = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .generatorSmokePaper */ .sR)(Number(paperId));
              break;

            case 2:
              // 随机生成试卷，并检查重复题，提示
              result = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .saveStrategy */ .BG)(Number(paperId));
              break;

            case 3:
              // 章节练习
              break;

            default:
              break;
          }
        }

        if (result.code === 1) {
          if (Number(isPublish) === 0) {
            setAlertShow(true);
          } else {
            router.push({
              pathname: '/code/Code',
              query: {
                examId,
                paperId: Number(paperId),
                type: Number(type),
                isPublish
              }
            });
          }
        } else {
          setParentConflict(true);
        }
      }
    });
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
    className: (_Design_module_scss__WEBPACK_IMPORTED_MODULE_12___default().example),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
      wrapperClassName: (_Design_module_scss__WEBPACK_IMPORTED_MODULE_12___default().loading),
      spinning: loading,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_component_Nav_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
        args: 2,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_component_Steps__WEBPACK_IMPORTED_MODULE_3__["default"], {
          callBack: async indexStep => {
            if (indexStep === 0) {
              const result = await changePaperMessage();

              if (result.code === 1) {
                await router.push({
                  pathname: '/exam/createCrew',
                  query: {
                    examId
                  }
                });
              }
            }
          },
          preCallback: async () => {
            setNum(num - 1);
            const result = await changePaperMessage();

            if (result.code === 1) {
              if (num === 1) {
                await router.push({
                  pathname: '/exam/createCrew',
                  query: {
                    examId
                  }
                });
              }
            }
          },
          nextCallback: async () => {
            if (Number(type) === 2) {
              // 获取考试信息
              const strategys = [];
              const compare = [];
              const strategy = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_9__/* .getPaperQuestions */ .W3)(paperId);
              const ques = strategy[0].paperBigQuestions;

              for (let i = 0; i < ques.length; i++) {
                const lists = ques[i].questionSelectionStrategys;

                for (let j = 0; j < lists.length; j++) {
                  strategys.push(lists[j]);
                  const flag = compare.some(el => {
                    return el.questionClassify === lists[j].questionClassify && el.questionType === lists[j].questionType;
                  });

                  if (!flag) {
                    compare.push(lists[j]);
                  }
                }
              }

              if (strategys.length > compare.length) {
                setWarmPrompt(true);
              } else {
                await nextPublishEvent();
              }
            } else {
              await nextPublishEvent();
            }
          },
          step: Number(isPublish) === 1 ? step : step1,
          minHeight: 630,
          finishCallback: undefined,
          start: num,
          children: [num === 0 ? '0' : null, num === 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_component_exam_fixedPaper_addTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
            type: Number(type),
            examId: examId,
            paperId: Number(paperId),
            myChange: myChange,
            setLoading: setLoading,
            loading: loading,
            getPaperMessage: getPaperMessage,
            quesSort: quesSort
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_exam_textSet_textSetes__WEBPACK_IMPORTED_MODULE_7__["default"], {
          examid: examId,
          closeAlert: closeAlert,
          sourt: source,
          textPaper: textPaper,
          isPublish: Number(isPublish),
          updatePublish: updatePublish,
          Chapter: false // 是否为章节练习为true 否则false 只需判断是否为章节练习
          ,
          alertShow: alertShow // 开关
          ,
          changeAlertFlag: changeAlertFlag
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(PreviewText, {
          preview: preview,
          changePreview: changePreview,
          parderId: Number(paperId) // 开关
          ,
          judgement: ''
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
        title: "\u63D0\u793A",
        visible: alertFlag,
        onOk: () => {
          setAlertFlag(false);
        },
        onCancel: () => {
          setAlertFlag(false);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
          children: "\u8BD5\u5377\u6CA1\u6709\u8BD5\u9898\uFF0C\u8BF7\u8BBE\u8BA1\u8BD5\u5377\uFF01"
        })
      }), warmPrompt && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__["default"], {
        warning: '同一张试卷不能选择相同的策略！',
        setShowWarnAlert: setWarmPrompt
      }), parentConflict && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_components_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__["default"], {
        warning: '存在重复试题，请注意题型父子节点分类！',
        setShowWarnAlert: setParentConflict
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Design);

/***/ }),

/***/ 2427:
/***/ ((module) => {

// Exports
module.exports = {

};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 1489:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 8518:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/col");

/***/ }),

/***/ 2616:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/config-provider");

/***/ }),

/***/ 2071:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 2278:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 6190:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input");

/***/ }),

/***/ 4503:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input-number");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 6418:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/modal");

/***/ }),

/***/ 3984:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ 5893:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

/***/ }),

/***/ 7386:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/radio");

/***/ }),

/***/ 7050:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/row");

/***/ }),

/***/ 3526:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/spin");

/***/ }),

/***/ 4285:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ 1886:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tag");

/***/ }),

/***/ 9348:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 5345:
/***/ ((module) => {

"use strict";
module.exports = require("for-editor");

/***/ }),

/***/ 6333:
/***/ ((module) => {

"use strict";
module.exports = require("immutability-helper");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 6896:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 7964:
/***/ ((module) => {

"use strict";
module.exports = require("react-dnd");

/***/ }),

/***/ 359:
/***/ ((module) => {

"use strict";
module.exports = require("react-dnd-html5-backend");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6302:
/***/ ((module) => {

"use strict";
module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,6780,418,1518,3286,2625,9279,1112,6166,9392,5061,9719,4703,2150,1748,8886,7779,5900,1239,552,9067,4707,6533], () => (__webpack_exec__(4415)));
module.exports = __webpack_exports__;

})();