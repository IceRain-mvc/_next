exports.id = 2395;
exports.ids = [2395];
exports.modules = {

/***/ 2395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testStatistics)
});

// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__(4285);
var table_default = /*#__PURE__*/__webpack_require__.n(table_);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd/lib/layout/layout"
var layout_ = __webpack_require__(8697);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/analyse/artifical/testStatistics/index.module.scss
var index_module = __webpack_require__(2324);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
// EXTERNAL MODULE: external "echarts/core"
var core_ = __webpack_require__(5165);
// EXTERNAL MODULE: external "echarts/components"
var components_ = __webpack_require__(3870);
// EXTERNAL MODULE: external "echarts/charts"
var charts_ = __webpack_require__(7487);
// EXTERNAL MODULE: external "echarts/features"
var features_ = __webpack_require__(2661);
// EXTERNAL MODULE: external "echarts/renderers"
var renderers_ = __webpack_require__(1139);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/artifical/testStatistics/statistics.tsx











const TestStatistics = () => {
  // 左侧图表
  (0,external_react_.useEffect)(() => {
    core_.use([components_.TooltipComponent, components_.LegendComponent, charts_.PieChart, renderers_.CanvasRenderer, features_.LabelLayout]);
    const chartDom = document.getElementById('zrech');
    const myChart = core_.init(chartDom);
    let option; // eslint-disable-next-line prefer-const

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 1048,
          name: '问答题'
        }, {
          value: 735,
          name: '单选题'
        }, {
          value: 580,
          name: '多选题'
        }, {
          value: 484,
          name: '判断题'
        }, {
          value: 300,
          name: '填空题'
        }]
      }]
    };
    option && myChart.setOption(option);
  }, []); // 右侧图表

  (0,external_react_.useEffect)(() => {
    const chartDom = document.getElementById('lrech');
    const myChart = core_.init(chartDom);
    let option; // eslint-disable-next-line prefer-const

    option = {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          // 圈内是否显示
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [{
          value: 1048,
          name: '不限难度'
        }, {
          value: 735,
          name: '困难'
        }, {
          value: 580,
          name: '中等'
        }, {
          value: 484,
          name: '容易'
        }]
      }]
    };
    option && myChart.setOption(option);
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).homediv,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).rz,
          id: 'zrech'
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).ly,
          id: 'lrech'
        })]
      })
    })
  });
};

/* harmony default export */ const statistics = (TestStatistics);
;// CONCATENATED MODULE: ./src/analyse/artifical/testStatistics/index.tsx












const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2828), __webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/artifical/testStatistics/index.tsx -> " + '@component/TreeType/TreeType']
  }
}); // 无限极菜单组件

const Statistics = () => {
  const {
    0: classify,
    1: Setclassify
  } = (0,external_react_.useState)('试题分类');
  const {
    0: stageId,
    1: setStageId
  } = (0,external_react_.useState)(undefined); // 创建接收函数

  const currentNode = (location, id) => {
    Setclassify(location.split('/')[location.split('/').length - 1]); // SetstageId(id);

    console.log(stageId);
  }; // 选中节点接收函数


  const selList = idList => {
    console.log(idList);
  };

  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
    type: 'department',
    getCurrentAndAncestorsTitles: currentNode // openCheckbox={false}
    // currentId={1}
    ,
    selectNodeList: selList,
    openSelectChildren: true
  }); // 树状头部


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (index_module_default()).dispan,
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      className: (index_module_default()).dispans,
      children: classify
    }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  });

  const columns = [{
    title: '试题类型',
    dataIndex: 'name',
    key: 'name'
  }, {
    title: '试题总数',
    dataIndex: 'address',
    key: 'address'
  }, {
    title: '难度不限',
    dataIndex: 'tags',
    key: 'tags'
  }, {
    title: '容易',
    dataIndex: 'age',
    key: 'age'
  }, {
    title: '中等',
    dataIndex: 'tags',
    key: 'tags'
  }, {
    title: '困难',
    dataIndex: 'age',
    key: 'age'
  }];
  const data = [{
    key: '1',
    name: '单选题',
    age: 32,
    address: 2,
    tags: 4
  }, {
    key: '2',
    name: '多选题',
    age: 42,
    address: 3,
    tags: 6
  }, {
    key: '3',
    name: '问答题',
    age: 32,
    address: 8,
    tags: 5
  }];
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((layout_default()), {
      className: (index_module_default()).anlyseBox,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FundProjectionScreenOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u8BD5\u9898\u7C7B\u578B\u7EDF\u8BA1"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_.Content, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).tops,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).search,
            children: [/*#__PURE__*/jsx_runtime_.jsx(form_form.PopoverCommon, {
              type: 'FullBox',
              title: title,
              placement: "bottomLeft",
              children: content
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              className: (index_module_default()).shua,
              onClick: () => {
                history.go(0);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ReloadOutlined, {})
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (index_module_default()).dao,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
              onClick: () => {// setNegation(!negation);
              },
              type: 'none',
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.DownloadOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                className: (index_module_default()).cha,
                children: "\u5BFC\u51FA"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx(statistics, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (index_module_default()).buttons,
            children: /*#__PURE__*/jsx_runtime_.jsx((table_default()), {
              columns: columns,
              dataSource: data,
              pagination: false,
              bordered: true
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const testStatistics = (Statistics);

/***/ }),

/***/ 2324:
/***/ ((module) => {

// Exports
module.exports = {
	"anlyseBox": "testStatistics_anlyseBox__Ppgw3",
	"tops": "testStatistics_tops__jXdKS",
	"header": "testStatistics_header__sK72g",
	"dao": "testStatistics_dao__apsPw",
	"shua": "testStatistics_shua__lIy4O",
	"homediv": "testStatistics_homediv__95S76",
	"rz": "testStatistics_rz___EW8H",
	"ly": "testStatistics_ly__kTu9Y",
	"buttons": "testStatistics_buttons__9si5o",
	"aaaaa": "testStatistics_aaaaa__xakCM",
	"dispan": "testStatistics_dispan__9Dfh7",
	"dispans": "testStatistics_dispans__DgxG5"
};


/***/ })

};
;