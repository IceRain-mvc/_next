(() => {
var exports = {};
exports.id = 1088;
exports.ids = [1088,2194];
exports.modules = {

/***/ 1831:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ studentAnalyse)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/Nav/leftNavData.ts
var leftNavData = __webpack_require__(9383);
// EXTERNAL MODULE: ./src/analyse/Studentcontent/Studentcontent.module.scss
var Studentcontent_module = __webpack_require__(9618);
var Studentcontent_module_default = /*#__PURE__*/__webpack_require__.n(Studentcontent_module);
// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(5417);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/api/analyse/analyse_student/analyse_student.ts
var analyse_student = __webpack_require__(1633);
// EXTERNAL MODULE: external "antd/lib/modal/Modal"
var Modal_ = __webpack_require__(8301);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/Studentcontent/Studentcontent.tsx







 // 获取方法





const AnalyseContent = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2873).then(__webpack_require__.bind(__webpack_require__, 2873)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2873)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '@/components/Nav/analyseContent']
  }
}); // 左侧导航

const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '@/components/TreeType/TreeType']
  }
}); // 引入无线延伸列表

const FormCommon = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 4723)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4723)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '@/components/form/part/headerTable']
  }
}); // 引入下拉菜单

const ButtonCommon = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(418), __webpack_require__.e(3672)]).then(__webpack_require__.bind(__webpack_require__, 418)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(418)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '@component/form/part/button']
  }
}); // 引入导出按钮

const CommonTable = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '@/components/commonTable/commonTable']
  }
}); // 引入公共表单

const Studentpopup = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 3821).then(__webpack_require__.bind(__webpack_require__, 3821)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3821)],
    modules: ["../src/analyse/Studentcontent/Studentcontent.tsx -> " + '../Studentpopup/Studentpopup']
  }
}); // 导出Excel

const Studentcontent = () => {
  // 弹框点击出现隐藏
  const {
    0: alertShow,
    1: setalertShow
  } = (0,external_react_.useState)(false); // 调用弹窗事件

  const alertdialog = () => {
    setalertShow(!alertShow);
  }; // eslint-disable-next-line import/no-named-as-default-member


  const CancelToken = (external_axios_default()).CancelToken;
  const source = CancelToken.source();
  const {
    0: selecttitle,
    1: setSelectTitle
  } = (0,external_react_.useState)('所属阶段');
  const {
    0: alertTitle,
    1: setAlertTitle
  } = (0,external_react_.useState)('考生分析');
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]); // 返回的数据

  const {
    0: list,
    1: setList
  } = (0,external_react_.useState)([]); // 选中的数据

  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false); // 提示框

  const {
    0: loading,
    1: setLoding
  } = (0,external_react_.useState)(true); // 加载动画

  const {
    0: oneData,
    1: setOnedata
  } = (0,external_react_.useState)(); // 弹框的数据

  const {
    0: dataCount,
    1: setDataCount
  } = (0,external_react_.useState)(0); // 总数据条数

  const {
    0: stageId,
    1: setStageId
  } = (0,external_react_.useState)(undefined); // 阶段人员的id

  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)(undefined); // 默认页数

  const {
    0: searchVallue,
    1: setSearch
  } = (0,external_react_.useState)(''); // 记录搜索内容;

  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)(''); // 记录时间

  const {
    0: pageSize,
    1: setPagesize
  } = (0,external_react_.useState)(undefined); // 页面容量;

  let {
    0: timer
  } = (0,external_react_.useState)(null); // 搜索防抖

  const getData = async params => {
    setLoding(true);

    if (JSON.stringify(params) === '{}') {
      setCurrent(1);
    }

    await (0,analyse_student/* getStudent */.u6)(params).then(res => {
      console.log(res);

      if (res) {
        setData(res[0]);
        setDataCount(res[1]);
        setLoding(false);
      }
    }).catch(() => {
      console.log();
    });
  }; // 分页pagination、排序sorter  改变时触发 然后请求


  const onChangeTable = pagination => {
    setCurrent(pagination.current);
    setPagesize(pagination.pageSize);
    getData({
      page: pagination.current,
      pageSize: pagination.pageSize,
      studentStageId: stageId,
      time,
      keywordSearch: searchVallue
    });
  };

  (0,external_react_.useEffect)(() => {
    getData({});
    return () => {
      source.cancel('取消请求');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentNode = (location, id) => {
    setSelectTitle(location.split('/')[location.split('/').length - 1]);
    setStageId(id);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setCurrent(1);
      getData({
        page: 1,
        studentStageId: id
      });
    }, 500);
  };

  const content = /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
      type: 'department',
      getCurrentAndAncestorsTitles: currentNode // 目录接收函数

    })
  }); // 树状头部


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), selecttitle, /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 表格头部


  const columns = [{
    title: '姓名',
    dataIndex: 'studentName',
    ellipsis: true,
    width: '8%'
  }, {
    title: '账号',
    dataIndex: 'studentNumber',
    width: '8%',
    ellipsis: true
  }, {
    title: '所属阶段',
    dataIndex: 'department',
    render: (text, record) => record && record.title || '',
    ellipsis: true,
    width: '16%'
  }, // 配置子标题
  {
    title: '考试',
    dataIndex: 'examalayses',
    width: '8%',
    children: [{
      title: '参加数',
      dataIndex: 'studunetexam'
    }, {
      title: '通过数',
      dataIndex: 'throughNumber'
    }, {
      title: '通过率',
      dataIndex: 'passRate'
    }]
  }, {
    title: '练习',
    dataIndex: 'exercise',
    width: '8%',
    children: [{
      title: '参加数',
      dataIndex: 'attendNum'
    }, {
      title: '练习时长',
      dataIndex: 'practiceTime'
    }, {
      title: '正确率',
      dataIndex: 'accuracy'
    }]
  }, {
    title: '课程',
    dataIndex: 'cultivate',
    width: '8%',
    children: [{
      title: '参加数',
      dataIndex: 'participantsNumber'
    }, {
      title: '完成数',
      dataIndex: 'courseThroughNumber'
    }, {
      title: '完成率',
      dataIndex: 'coursePassRate'
    }]
  }, {
    title: '所得积分',
    dataIndex: 'integral',
    width: '7%',
    align: 'center'
  }, {
    title: '操作',
    key: 'action',
    width: '7%',
    align: 'center',
    render: record => {
      return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => {
            alertdialog();
            setAlertTitle(`考生分析-${record.studentName}`);
            setOnedata(record);
          },
          children: "\u8003\u751F\u5206\u6790"
        })
      });
    }
  }]; // 导出数据

  const selectChange = (key, arr) => {
    setList(arr);
  };

  const exportExcelFn = async data => {
    const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default; // 导出excel数据

    exportExcel(data, {
      studentName: '姓名',
      studentNumber: '账号',
      title: '所属阶段',
      studunetexam: '考试参加数',
      throughNumber: '考试通过数',
      passRate: '考试通过率',
      participantsNumber: '课程参加数',
      courseThroughNumber: '课程完成数',
      coursePassRate: '课程完成率'
    }, '考生分析');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (Studentcontent_module_default()).studentcontentbox,
    children: [/*#__PURE__*/jsx_runtime_.jsx(AnalyseContent, {
      menu: leftNavData/* default */.Z,
      start: 1,
      title: '分析'
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((layout_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Studentcontent_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.BarChartOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u8003\u751F\u5206\u6790"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (Studentcontent_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (Studentcontent_module_default()).selectbox,
          children: [/*#__PURE__*/jsx_runtime_.jsx(FormCommon // 关键字查找
          , {
            PoContent: content,
            PoTitle: title,
            onClick: () => {
              setCurrent(1);
              setTime(undefined);
              setSearch(undefined);
              getData({
                pageSize
              });
            },
            onFinish: values => {
              console.log(values);
              const {
                search,
                date
              } = values;
              setSearch(search);
              setTime(date);
              clearTimeout(timer);
              timer = setTimeout(() => {
                getData({
                  time: values.date,
                  keywordSearch: search,
                  pageSize,
                  page: current
                });
              }, 500);
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonCommon, {
            type: 'none',
            onClick: async () => {
              if (list.length !== 0) {
                setVisible(true);
              } else {
                setLoding(true);
                const res = await (0,analyse_student/* getStudent */.u6)({
                  pageSize: dataCount
                });
                setList(res[0]);
                setTimeout(() => {
                  setVisible(true);
                  setLoding(false);
                });
              }
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.DownloadOutlined, {}), "\u5BFC\u51FA"]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx(CommonTable, {
          data: data,
          columns: columns,
          isCheckout: true,
          dataCount: dataCount,
          loading: loading,
          rowKeyId: 'id',
          onSelectChange: selectChange,
          onChangeTable: onChangeTable,
          current: current,
          pageSize: pageSize
        })]
      })]
    }), alertShow ? /*#__PURE__*/jsx_runtime_.jsx(Studentpopup, {
      oneData: oneData,
      alertShow: alertShow,
      alertTitle: alertTitle,
      changeAlertFlag: () => {
        alertdialog();
      }
    }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
      title: "\u63D0\u793A",
      visible: visible,
      onOk: () => {
        setVisible(false);
        exportExcelFn(list);
      },
      onCancel: () => {
        setVisible(false);
      },
      okText: "\u786E\u8BA4",
      cancelText: "\u53D6\u6D88",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.QuestionCircleOutlined, {
        style: {
          color: '#f1a81a',
          fontSize: '20px'
        }
      }), "\u67E5\u8BE2\u7ED3\u679C\u6709", list.length, "\u6761,\u786E\u8BA4\u8981\u5BFC\u51FA\u561B\uFF1F"]
    })]
  });
};

/* harmony default export */ const Studentcontent_Studentcontent = (Studentcontent);
;// CONCATENATED MODULE: ./pages/analyse/studentAnalyse/index.tsx


const Header = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["analyse/studentAnalyse/index.tsx -> " + '@/components/Nav/header']
  }
}); // 头部导航

 // 考生页面



const StudentAnalyse = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Header, {
      args: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(Studentcontent_Studentcontent, {})
    })
  });
};

/* harmony default export */ const studentAnalyse = (StudentAnalyse);

/***/ }),

/***/ 1633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u6": () => (/* binding */ getStudent),
/* harmony export */   "ns": () => (/* binding */ getStudentCourse),
/* harmony export */   "ys": () => (/* binding */ getStudentExam)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

// 获取考生信息
function getStudent(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse/studentanalsye/getStudent',
    method: 'GET',
    params
  });
} // 获取单个考生课程的数据

function getStudentCourse(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse/studentanalsye/getStudentCourse',
    method: 'GET',
    params
  });
} // 获取单个考生的考试数据

function getStudentExam(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse/studentanalsye/getStudentExam',
    method: 'GET',
    params
  });
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (httpProvider)));

/***/ }),

/***/ 9618:
/***/ ((module) => {

// Exports
module.exports = {
	"studentcontentbox": "Studentcontent_studentcontentbox__8CD9h",
	"header": "Studentcontent_header__kToH7",
	"content": "Studentcontent_content__OIxTS",
	"selectbox": "Studentcontent_selectbox__907OZ"
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

/***/ 5417:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 5066:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu/SubMenu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 8301:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/modal/Modal");

/***/ }),

/***/ 5893:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

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

/***/ 4285:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,2828,9383], () => (__webpack_exec__(1831)));
module.exports = __webpack_exports__;

})();