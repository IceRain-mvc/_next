(() => {
var exports = {};
exports.id = 4893;
exports.ids = [4893,5367,2194];
exports.modules = {

/***/ 1204:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ learningStatistics)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/Nav/leftNavData.ts
var leftNavData = __webpack_require__(9383);
// EXTERNAL MODULE: ./src/analyse/LearningContent/LearningContent.module.scss
var LearningContent_module = __webpack_require__(2418);
var LearningContent_module_default = /*#__PURE__*/__webpack_require__.n(LearningContent_module);
// EXTERNAL MODULE: external "antd/lib/layout"
var layout_ = __webpack_require__(5417);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "antd/lib/modal/Modal"
var Modal_ = __webpack_require__(8301);
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal_);
// EXTERNAL MODULE: ./src/utils/timeCycle.ts
var timeCycle = __webpack_require__(5512);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/analyse/analyse_learning/analyse_learning.ts

function getAll(params) {
  return http/* httpProvider.request */.A.request({
    url: 'analyse/learning/getAll',
    method: 'GET',
    params
  });
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/LearningContent/LearningContent.tsx









 // 获取方法



const AnalyseContent = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2873).then(__webpack_require__.bind(__webpack_require__, 2873)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2873)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '@/components/Nav/analyseContent']
  }
}); // 左侧导航

const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '@/components/TreeType/TreeType']
  }
}); // 引入无线延伸列表

const FormCommon = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 4723)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4723)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '@/components/form/part/headerTable']
  }
}); // 引入下拉菜单

const ButtonCommon = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(418), __webpack_require__.e(3672)]).then(__webpack_require__.bind(__webpack_require__, 418)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(418)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '@component/form/part/button']
  }
}); // 引入导出按钮

const CommonTable = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '@/components/commonTable/commonTable']
  }
}); // 引入公共表单

const LearningPopup = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(4447), __webpack_require__.e(5192)]).then(__webpack_require__.bind(__webpack_require__, 5192)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5192)],
    modules: ["../src/analyse/LearningContent/LearningContent.tsx -> " + '../learningPopup/learningPopup']
  }
}); // 弹框

const LearningContent = () => {
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
  } = (0,external_react_.useState)('课程分类');
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
    0: dataCount,
    1: setDataCount
  } = (0,external_react_.useState)(0); // 总数据条数

  const {
    0: startTime,
    1: setStartTime
  } = (0,external_react_.useState)(undefined); // 创建时间

  const {
    0: endTime,
    1: setendTime
  } = (0,external_react_.useState)(undefined); // 截止时间

  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)(undefined); // 当前的关键字

  const {
    0: stageId,
    1: setStageId
  } = (0,external_react_.useState)(undefined); // 阶段人员的id

  const {
    0: current,
    1: setCurrent
  } = (0,external_react_.useState)(undefined); // 默认页数

  const {
    0: values,
    1: setValues
  } = (0,external_react_.useState)(undefined); // 弹框内容

  const {
    0: pageSize,
    1: setPagesize
  } = (0,external_react_.useState)(undefined); // 页面容量;

  let {
    0: timer
  } = (0,external_react_.useState)(null); // 搜索防抖

  (external_react_default()).useLayoutEffect = (external_react_default()).useEffect;

  const getDate = async params => {
    setLoding(true);
    await getAll(params).then(res => {
      if (res[0]) {
        setData(res[0]);
        setDataCount(res[1]);
        setLoding(false);
      }

      console.log(res);
    }).catch(() => {
      console.log();
    });
  };

  const onChangeTable = pagination => {
    setCurrent(pagination.current);
    setPagesize(pagination.pageSize);
    getDate({
      page: pagination.current,
      pageSize: pagination.pageSize,
      searchValue: search,
      startTime,
      endTime,
      searchTree: stageId
    });
  };

  (0,external_react_.useEffect)(() => {
    getDate({});
    return () => {
      source.cancel('取消请求');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentNode = location => {
    setSelectTitle(location.split('/')[location.split('/').length - 1]);
    setStageId(location);
    clearTimeout(timer);
    timer = setTimeout(() => {
      setCurrent(1);
      getDate({
        page: 1,
        searchTree: location
      });
    }, 500);
  };

  const content = /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
      type: 'course',
      getCurrentAndAncestorsTitles: currentNode // 目录接收函数

    })
  }); // 树状头部


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), selecttitle, /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 表格头部


  const columns = [{
    title: '课程名称',
    dataIndex: 'courseName',
    ellipsis: true,
    width: '3%'
  }, {
    title: '开始时间/结束时间',
    dataIndex: 'courseStart',
    width: '7%',
    ellipsis: true,
    render: (record, obj) => {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: `${record && (0,timeCycle/* timeFormat */.i)(Number(record)) || ''}~${record && (0,timeCycle/* timeFormat */.i)(Number(obj.courseEnd)) || ''}`
      });
    }
  }, {
    title: '参加方式',
    dataIndex: 'courseStyle',
    width: '3%',
    render: record => {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: record && record === 0 ? '免登录学习' : record === 1 ? '免登陆+口令学习' : '安排学习' || 0
      });
    }
  }, {
    title: '完成条件',
    dataIndex: 'courseCompleteCondition',
    ellipsis: true,
    width: '3%',
    render: record => {
      return /*#__PURE__*/jsx_runtime_.jsx("span", {
        children: record && record === 0 ? '无完成条件' : record === 1 ? '达到课程学时' : '通过课程考试' || 0
      });
    }
  }, {
    title: '参加人数',
    align: 'center',
    width: '3%',
    dataIndex: 'participants'
  }, {
    title: '完成课程人数',
    align: 'center',
    width: '3%',
    dataIndex: 'finishNum'
  }, {
    title: '未完成人数',
    align: 'center',
    width: '3%',
    dataIndex: 'unfinishNum'
  }, {
    title: '课程通过率',
    align: 'center',
    width: '3%',
    dataIndex: 'passRate'
  }, {
    title: '操作',
    align: 'center',
    width: '3%',
    key: 'action',
    render: (recond, obj) => {
      return /*#__PURE__*/jsx_runtime_.jsx("a", {
        onClick: () => {
          setValues(obj);
          alertdialog();
        },
        href: '#',
        children: "\u5B66\u5458\u8FDB\u5EA6"
      });
    }
  }]; // 导出数据

  const selectChange = (key, arr) => {
    setList(arr);
  };

  const exportExcelFn = async datas => {
    const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default;
    const data = JSON.parse(JSON.stringify(datas)); // 导出excel数据

    exportExcel(data.filter(item => {
      item.courseStart = `${(0,timeCycle/* timeFormat */.i)(Number(item.courseStart))}~${(0,timeCycle/* timeFormat */.i)(Number(item.courseEnd))}`;
      item.courseStyle = item.courseStyle === 0 ? '免登录学习' : item.courseStyle === 1 ? '免登陆+口令学习' : '安排学习';
      item.courseCompleteCondition = item.courseCompleteCondition === 0 ? '无完成条件' : item.courseCompleteCondition === 1 ? '达到课程学时' : '通过课程考试';
      return item;
    }), {
      courseName: '课程名称',
      courseStart: '开始时间-结束时间',
      courseStyle: '参加方式',
      courseCompleteCondition: '完成条件',
      participants: '参加人数',
      finishNum: '完成课程人数',
      unfinishNum: '未完成课程人数',
      passRate: '课程通过率'
    }, '培训学习计划');
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (LearningContent_module_default()).learningcontentbox,
    children: [/*#__PURE__*/jsx_runtime_.jsx(AnalyseContent, {
      menu: leftNavData/* default */.Z,
      start: 6,
      title: '分析'
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((layout_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LearningContent_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.DesktopOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u57F9\u8BAD\u5B66\u4E60\u8BA1\u5212"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (LearningContent_module_default()).content,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (LearningContent_module_default()).selectbox,
          children: [/*#__PURE__*/jsx_runtime_.jsx(FormCommon, {
            PoContent: content,
            PoTitle: title,
            onFinish: values => {
              // 搜索值
              const {
                search
              } = values;
              setSearch(search && search);
              setStartTime(values.date && values.date.startTime);
              setendTime(values.date && values.date.endTime);
              clearTimeout(timer);
              timer = setTimeout(() => {
                getDate({
                  startTime: values.date && values.date.startTime,
                  endTime: values.date && values.date.endTime,
                  searchValue: search,
                  page: current,
                  pageSize
                });
              }, 500);
            },
            onClick: () => {
              setSearch(undefined);
              setStartTime(undefined);
              setendTime(undefined);
              setCurrent(1);
              getDate({
                pageSize
              });
            }
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(ButtonCommon, {
            type: 'none',
            onClick: async () => {
              if (list.length !== 0) {
                setVisible(true);
              } else {
                setLoding(true);
                const res = await getAll({
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
          rowKeyId: 'courseId',
          onChangeTable: onChangeTable,
          onSelectChange: selectChange,
          current: current,
          pageSize: pageSize
        })]
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((Modal_default()), {
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
    }), alertShow ? /*#__PURE__*/jsx_runtime_.jsx(LearningPopup, {
      obj: values,
      Transfer: () => {
        alertdialog();
      }
    }) : null]
  });
};

/* harmony default export */ const LearningContent_LearningContent = (LearningContent);
;// CONCATENATED MODULE: ./pages/analyse/learningStatistics/index.tsx


const Header = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["analyse/learningStatistics/index.tsx -> " + '@/components/Nav/header']
  }
}); // 头部导航

 // 内容部分



const LearningStatistics = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/jsx_runtime_.jsx(Header, {
      args: 6,
      children: /*#__PURE__*/jsx_runtime_.jsx(LearningContent_LearningContent, {})
    })
  });
};

/* harmony default export */ const learningStatistics = (LearningStatistics);

/***/ }),

/***/ 5512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ timeFormat)
/* harmony export */ });
const timeFormat = dateStr => {
  const date = new Date(dateStr);
  const years = date.getFullYear();
  const mon = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${years}-${mon <= 9 ? '0' + mon : mon}-${day <= 9 ? '0' + day : day} ${hour <= 9 ? '0' + hour : hour}:${min <= 9 ? '0' + min : min}:${sec <= 9 ? '0' + sec : sec}`;
};

/***/ }),

/***/ 2418:
/***/ ((module) => {

// Exports
module.exports = {
	"learningcontentbox": "LearningContent_learningcontentbox___JYZx",
	"header": "LearningContent_header__yYC1F",
	"content": "LearningContent_content__N4Lmx",
	"selectbox": "LearningContent_selectbox__0CyHn"
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

/***/ 4528:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/pagination");

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

/***/ 1886:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/tag");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

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
var __webpack_exports__ = __webpack_require__.X(0, [5152,2828,9383], () => (__webpack_exec__(1204)));
module.exports = __webpack_exports__;

})();