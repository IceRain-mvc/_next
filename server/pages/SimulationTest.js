(() => {
var exports = {};
exports.id = 2402;
exports.ids = [2402,2194];
exports.modules = {

/***/ 5965:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_SimulationTest),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(261);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);
// EXTERNAL MODULE: external "antd/lib/modal"
var modal_ = __webpack_require__(6418);
var modal_default = /*#__PURE__*/__webpack_require__.n(modal_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Nav/header.tsx + 14 modules
var header = __webpack_require__(9392);
// EXTERNAL MODULE: ./src/components/Steps/index.tsx
var Steps = __webpack_require__(2150);
// EXTERNAL MODULE: ./src/components/exam/fixedPaper/addTitle.tsx + 11 modules
var addTitle = __webpack_require__(6533);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/api/exam/paper/index.ts
var paper = __webpack_require__(4455);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/exam/exercise/index.ts
 // 修改练习发布状态

function setExerciseIsPublish(exerciseId) {
  return http/* httpProvider.request */.A.request({
    url: '/exercise/setIsPublish/' + exerciseId,
    method: 'PUT'
  });
}
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/exam/textSet/textSetes.tsx + 1 modules
var textSetes = __webpack_require__(7779);
// EXTERNAL MODULE: ./pages/design/Design.module.scss
var Design_module = __webpack_require__(2427);
var Design_module_default = /*#__PURE__*/__webpack_require__.n(Design_module);
// EXTERNAL MODULE: ./src/components/TreeType/alertWarning/alertWarning.tsx
var alertWarning = __webpack_require__(9719);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/SimulationTest/index.tsx




 // @ts-ignore











async function getServerSideProps(ctx) {
  const {
    paperId,
    type,
    exerciseId,
    isPublish,
    exercisePattern
  } = ctx.query;
  return {
    props: {
      paperId,
      type,
      exerciseId,
      isPublish,
      exercisePattern
    }
  };
}
const PreviewText = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 3552).then(__webpack_require__.bind(__webpack_require__, 3552)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3552)],
    modules: ["SimulationTest/index.tsx -> " + '@/components/exam/previewText/index']
  }
});

const SimulationTest = props => {
  const {
    paperId,
    type,
    exerciseId,
    isPublish,
    exercisePattern
  } = props;
  const router = (0,router_.useRouter)();
  const {
    0: num,
    1: setNum
  } = (0,external_react_.useState)(1);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: quesSort,
    1: getPaperMessage
  } = (0,external_react_.useState)([]);
  const {
    0: alertFlag,
    1: setAlertFlag
  } = (0,external_react_.useState)(false);
  const {
    0: alertShow,
    1: setAlertShow
  } = (0,external_react_.useState)(false);
  const {
    0: source,
    1: setSource
  } = (0,external_react_.useState)(0);
  const {
    0: parentConflict,
    1: setParentConflict
  } = (0,external_react_.useState)(false);
  const {
    0: warmPrompt,
    1: setWarmPrompt
  } = (0,external_react_.useState)(false); // 关闭弹窗事件

  const changeAlertFlag = res => {
    setAlertShow(res);
  }; // 获取试卷信息方法


  const changePaperMessage = async () => {
    // 保存试卷
    const res = await (0,paper/* changeQuesSort */.NY)({
      data: quesSort
    });
    return {
      msg: res.msg,
      code: res.code
    };
  };

  const {
    0: step
  } = (0,external_react_.useState)([{
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
  } = (0,external_react_.useState)([{
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
  } = (0,external_react_.useState)(false);

  const textPaper = res => {
    setPreview(res);
  };

  const changePreview = res => {
    setPreview(res);
  }; // 修改练习是否已发布方法


  const updatePublish = async () => {
    await setExerciseIsPublish(exerciseId).then(res => {
      setLoading(true);

      if (res) {
        setLoading(false);
        router.push({
          pathname: '/code/TestCode',
          query: {
            exerciseId,
            paperId: Number(paperId),
            type: Number(type),
            isPublish: Number(isPublish),
            exercisePattern
          }
        });
      }
    });
  }; // 生成试卷


  const nextPublishEvent = async () => {
    // 下一步
    (0,paper/* getSmallQuestionCount */.me)(Number(paperId)).then(async res => {
      if (res.questionCount === 0 && Number(type) !== 3) {
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
              result = await (0,paper/* generatorSmokePaper */.sR)(Number(paperId));
              break;

            case 2:
              // 随机生成试卷，并检查重复题，提示
              result = await (0,paper/* saveStrategy */.BG)(Number(paperId));
              break;

            case 3:
              // 章节练习, 生成试卷
              result = {
                code: 1,
                msg: '创建成功'
              };
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
              pathname: '/code/TestCode',
              query: {
                exerciseId,
                paperId: Number(paperId),
                type: Number(type),
                isPublish,
                exercisePattern
              }
            });
          }
        } else {
          setParentConflict(true);
        }
      }
    });
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (Design_module_default()).example,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((spin_default()), {
      wrapperClassName: (Design_module_default()).loading,
      spinning: loading,
      children: [/*#__PURE__*/jsx_runtime_.jsx(header["default"], {
        args: 3
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Steps["default"], {
        callBack: async indexStep => {
          if (indexStep === 0) {
            const result = await changePaperMessage();

            if (result.code === 1) {
              await router.push({
                pathname: '/exercise/createExercise',
                query: {
                  createdExerciseId: exerciseId,
                  exercisePattern
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
                pathname: '/exercise/createExercise',
                query: {
                  createdExerciseId: exerciseId,
                  exercisePattern
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
            const strategy = await (0,paper/* getPaperQuestions */.W3)(paperId);
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
        children: [num === 0 ? '0' : null, num === 1 && /*#__PURE__*/jsx_runtime_.jsx(addTitle["default"], {
          loading: loading,
          setLoading: setLoading,
          exerciseId: exerciseId,
          paperId: paperId,
          isPublish: isPublish,
          type: Number(type),
          myChange: myChange,
          quesSort: quesSort,
          getPaperMessage: getPaperMessage
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(textSetes["default"], {
        examid: exerciseId,
        closeAlert: closeAlert,
        sourt: source,
        textPaper: textPaper,
        isPublish: Number(isPublish),
        exercise: true,
        updatePublish: updatePublish,
        Chapter: +exercisePattern === 0,
        alertShow: alertShow,
        changeAlertFlag: changeAlertFlag
      }), /*#__PURE__*/jsx_runtime_.jsx(PreviewText, {
        preview: preview,
        changePreview: changePreview,
        parderId: Number(paperId) // 开关
        ,
        judgement: ''
      }), /*#__PURE__*/jsx_runtime_.jsx((modal_default()), {
        title: "\u63D0\u793A",
        visible: alertFlag,
        onOk: () => {
          setAlertFlag(false);
        },
        onCancel: () => {
          setAlertFlag(false);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("p", {
          children: "\u8BD5\u5377\u6CA1\u6709\u8BD5\u9898\uFF0C\u8BF7\u8BBE\u8BA1\u8BD5\u5377\uFF01"
        })
      }), warmPrompt && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '同一张试卷不能选择相同的策略！',
        setShowWarnAlert: setWarmPrompt
      }), parentConflict && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '存在重复试题，请注意题型父子节点分类！',
        setShowWarnAlert: setParentConflict
      })]
    })
  });
};

/* harmony default export */ const pages_SimulationTest = (SimulationTest);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,9400,5278,1664,2828,6780,418,1518,3286,2625,9279,1112,6166,9392,5061,9719,4703,2150,1748,8886,7779,5900,1239,552,9067,4707,6533], () => (__webpack_exec__(5965)));
module.exports = __webpack_exports__;

})();