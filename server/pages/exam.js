"use strict";
(() => {
var exports = {};
exports.id = 5263;
exports.ids = [5263,2194];
exports.modules = {

/***/ 2160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exam_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8498);
/* harmony import */ var _exam_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_exam_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7996);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["exam/index.tsx -> " + '@/components/Nav/header']
  }
});
const ExamAsider = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 1874).then(__webpack_require__.bind(__webpack_require__, 1874)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1874)],
    modules: ["exam/index.tsx -> " + '@/components/examAsider/examAsider']
  }
});
const ExamListCon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 8364).then(__webpack_require__.bind(__webpack_require__, 8364)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8364)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/examListCon']
  }
});
const StartMarkTest = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2773).then(__webpack_require__.bind(__webpack_require__, 2773)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2773)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/startMarkTest']
  }
});
const Examing = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 7481).then(__webpack_require__.bind(__webpack_require__, 7481)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7481)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/examing']
  }
});
const NotExaming = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2711).then(__webpack_require__.bind(__webpack_require__, 2711)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2711)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/notExaming']
  }
});
const ExamEnded = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 4845).then(__webpack_require__.bind(__webpack_require__, 4845)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4845)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/examEnded']
  }
});
const RecycleBin = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2847).then(__webpack_require__.bind(__webpack_require__, 2847)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2847)],
    modules: ["exam/index.tsx -> " + '@/components/exam/examList/recycleBin']
  }
});

const Exam = () => {
  // 侧边栏状态的条数
  const {
    0: examNotStartCount,
    1: setExamNotStartCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 未开始

  const {
    0: examGoingCount,
    1: setExamGoingCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 进行中

  const {
    0: examEndedCount,
    1: setExamEndedCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 已结束
  // 控制复制组件显隐

  const {
    0: closeCopy,
    1: setCloseCopy
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 控制编辑按钮显隐

  const {
    0: editBtn,
    1: setEditBtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 统计下拉显隐

  const {
    0: statistical,
    1: setStatistical
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 控制树形组件显隐

  const {
    0: treeShow,
    1: setTreeShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: copyId,
    1: setCopyId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 获取所有侧边栏导航数据的条数

  const getExamDataCount = async () => {
    const res = await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_1__/* .getSomeExamListCount */ .Yi)();
    setExamNotStartCount(res.willRun);
    setExamGoingCount(res.running);
    setExamEndedCount(res.runed);
  }; // 生命周期


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getExamDataCount().then(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: (_exam_module_scss__WEBPACK_IMPORTED_MODULE_4___default().examMain),
    onClick: e => {
      e.stopPropagation();
      setCloseCopy(false);
      setEditBtn(false);
      setStatistical(false);
      setTreeShow(false);
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Header, {
      args: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(ExamAsider, {
        pageTitle: "\u8003\u8BD5",
        createRouter: "/exam/createCrew",
        censusRouter: "/exam/",
        going: examGoingCount,
        ended: examEndedCount,
        notStart: examNotStartCount,
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ExamListCon, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(StartMarkTest, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Examing, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(NotExaming, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(ExamEnded, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RecycleBin, {
          getExamDataCount: getExamDataCount,
          setCloseCopy: setCloseCopy,
          closeCopy: closeCopy,
          setCopyId: setCopyId,
          copyId: copyId,
          setEditBtn: setEditBtn,
          editBtn: editBtn,
          setStatistical: setStatistical,
          statistical: statistical,
          setTreeShow: setTreeShow,
          treeShow: treeShow
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Exam);

/***/ }),

/***/ 7066:
/***/ ((module) => {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ 8086:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/ApartmentOutlined");

/***/ }),

/***/ 2746:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/AppstoreOutlined");

/***/ }),

/***/ 4948:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/BarChartOutlined");

/***/ }),

/***/ 1533:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/CheckOutlined");

/***/ }),

/***/ 7923:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/ClockCircleOutlined");

/***/ }),

/***/ 2295:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/CopyOutlined");

/***/ }),

/***/ 8909:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/DeleteOutlined");

/***/ }),

/***/ 3911:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/EditOutlined");

/***/ }),

/***/ 456:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/ExclamationCircleOutlined");

/***/ }),

/***/ 789:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/FileOutlined");

/***/ }),

/***/ 6654:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/FileWordOutlined");

/***/ }),

/***/ 3104:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/HourglassFilled");

/***/ }),

/***/ 8339:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/LineChartOutlined");

/***/ }),

/***/ 4824:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/MailOutlined");

/***/ }),

/***/ 729:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/PieChartOutlined");

/***/ }),

/***/ 5930:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/ProfileOutlined");

/***/ }),

/***/ 3447:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/QrcodeOutlined");

/***/ }),

/***/ 5497:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/QuestionCircleOutlined");

/***/ }),

/***/ 9509:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/RestOutlined");

/***/ }),

/***/ 3221:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/SettingOutlined");

/***/ }),

/***/ 4162:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/StarFilled");

/***/ }),

/***/ 1513:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/StarOutlined");

/***/ }),

/***/ 6401:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/SwitcherOutlined");

/***/ }),

/***/ 3149:
/***/ ((module) => {

module.exports = require("@ant-design/icons/lib/icons/UndoOutlined");

/***/ }),

/***/ 3800:
/***/ ((module) => {

module.exports = require("antd/lib/button");

/***/ }),

/***/ 1489:
/***/ ((module) => {

module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 8518:
/***/ ((module) => {

module.exports = require("antd/lib/col");

/***/ }),

/***/ 2071:
/***/ ((module) => {

module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 2278:
/***/ ((module) => {

module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 2102:
/***/ ((module) => {

module.exports = require("antd/lib/dropdown/dropdown");

/***/ }),

/***/ 4663:
/***/ ((module) => {

module.exports = require("antd/lib/empty");

/***/ }),

/***/ 6190:
/***/ ((module) => {

module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

module.exports = require("antd/lib/input");

/***/ }),

/***/ 4503:
/***/ ((module) => {

module.exports = require("antd/lib/input-number");

/***/ }),

/***/ 274:
/***/ ((module) => {

module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

module.exports = require("antd/lib/message");

/***/ }),

/***/ 6418:
/***/ ((module) => {

module.exports = require("antd/lib/modal");

/***/ }),

/***/ 3528:
/***/ ((module) => {

module.exports = require("antd/lib/notification");

/***/ }),

/***/ 4528:
/***/ ((module) => {

module.exports = require("antd/lib/pagination");

/***/ }),

/***/ 3984:
/***/ ((module) => {

module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ 5893:
/***/ ((module) => {

module.exports = require("antd/lib/popover");

/***/ }),

/***/ 7386:
/***/ ((module) => {

module.exports = require("antd/lib/radio");

/***/ }),

/***/ 3526:
/***/ ((module) => {

module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

module.exports = require("antd/lib/spin");

/***/ }),

/***/ 2024:
/***/ ((module) => {

module.exports = require("antd/lib/switch");

/***/ }),

/***/ 4285:
/***/ ((module) => {

module.exports = require("antd/lib/table");

/***/ }),

/***/ 9348:
/***/ ((module) => {

module.exports = require("antd/lib/tooltip");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 5345:
/***/ ((module) => {

module.exports = require("for-editor");

/***/ }),

/***/ 2245:
/***/ ((module) => {

module.exports = require("moment");

/***/ }),

/***/ 6896:
/***/ ((module) => {

module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 5458:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/dynamic");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 8880:
/***/ ((module) => {

module.exports = require("rc-textarea");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6302:
/***/ ((module) => {

module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,2828,7996,8498], () => (__webpack_exec__(2160)));
module.exports = __webpack_exports__;

})();