"use strict";
exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9448);
/* harmony import */ var _textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9042);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const HeaderTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.HeaderTable), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/form/form']
  }
});

const TextAnalyseContent2 = () => {
  const columns = [{
    title: '试题内容',
    dataIndex: 'examContent'
  }, {
    title: '题型',
    dataIndex: 'questionTypes'
  }, {
    title: '试题分类',
    dataIndex: 'examTypes'
  }, {
    title: '试题难度',
    dataIndex: 'difficultyLevel'
  }, {
    title: '试题答案',
    dataIndex: 'okanswer'
  }, {
    title: '答题次数',
    dataIndex: 'answerNumber'
  }, {
    title: '答错次数',
    dataIndex: 'errorNumber'
  }, {
    title: '答错概率',
    dataIndex: 'errorProbability'
  }, {
    title: '答对次数',
    dataIndex: 'rightNumber'
  }, {
    title: '答对概率',
    dataIndex: 'rightProbability'
  }, {
    title: '得分概率',
    dataIndex: 'scoreProbability'
  }];
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // 数据库的数据

  const {
    0: length,
    1: setlength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'); // 数据长度

  const {
    0: current,
    1: setcurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // 当前页码

  const {
    0: pageSize,
    1: setpageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10); // 当前表格显示多少条

  const {
    0: loading,
    1: setLoding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // 加载动画

  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 搜索防抖
  // 表单时间

  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // 表单难度

  const {
    0: textDifficulty,
    1: setTextDifficulty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 搜索框内容

  const {
    0: searchContent,
    1: setSearchContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 点击所有题型

  const {
    0: typeContent,
    1: setTypeContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 试题分类根据树状结构显示内容

  const {
    0: treeValue,
    1: setTreeValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const {
    0: treeValueLast,
    1: setTreeValueLast
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 调用数据库方法

  const runFunc = async (func, object) => {
    setLoding(true);
    await func(object).then(res => {
      console.log(res);

      if (res) {
        setLoding(false);
        setData(res[0]);
        setlength(res[1]);
      }
    }).catch(() => {
      console.log();
    });
  }; // 树状组件函数


  const currentNode = (location, id) => {
    setTreeValueLast(location.slice(location.lastIndexOf('/') + 1)); // 渲染到页面上

    setTreeValue(id);

    if (id === 4) {
      runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
        time,
        textDifficulty,
        textType: typeContent,
        textSearch: searchContent
      });
    } else {
      runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
        textclassify: id,
        time,
        textDifficulty,
        textType: typeContent,
        textSearch: searchContent
      });
    }

    setcurrent(1);
  }; // 树状弹框分类的内容


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // 树状弹框组件按钮内容


  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UnorderedListOutlined, {}), treeValueLast === '' ? '试题分类' : treeValueLast, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CaretDownOutlined, {})]
  }); // 分页pagination、排序sorter  改变时触发 然后请求


  const onChangeTable = pagination => {
    setcurrent(pagination.current);
    setpageSize(pagination.pageSize);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
      page: current,
      pageSize
    });
  }, [current, pageSize, setlength]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ccontent),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(HeaderTable, {
        PoContent: content,
        PoTitle: title,
        selectKeyData: ['questionTypes', 'difficultyLevel'],
        selectData: [['所有题型', '单选题', '多选题', '判断题', '填空题', '问答题'], ['难易度', '不限难度', '容易', '中等', '困难']],
        onClick: () => {
          // 刷新请求的方法数据
          setTreeValue(null);
          setTreeValueLast('试题分类');
          setTime('');
          setTextDifficulty('');
          setSearchContent('');
          setTypeContent('');
          runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
            page: current,
            pageSize
          });
        },
        onFinish: async values => {
          // 搜索功能
          console.log('finish内容', values);
          const {
            date,
            search
          } = values;
          clearTimeout(timer); // 防抖

          setTime(date);
          setSearchContent(search);
          timer = setTimeout(() => {
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              time,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          }, 500);
        },
        onChange: (value, index) => {
          // 下拉框的onchange事件
          console.log(value, index);

          if (index === 0) {
            // 题型
            setTypeContent(value);
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              textDifficulty,
              time,
              textType: value,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          } else if (index === 1) {
            // 难度
            setTextDifficulty(value === '难易度' ? '全部' : value === '不限难度' ? '全部' : value);
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              textType: typeContent,
              time,
              textDifficulty: value === '难易度' ? '全部' : value === '不限难度' ? '全部' : value,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          }
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().table),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CommonTable, {
        data: data // 数据
        ,
        dataCount: Number(length) // 数据的总条数
        ,
        columns: columns // 标题+内容
        ,
        isCheckout: true // 是否使用多选
        ,
        loading: loading // 加载动画
        ,
        pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
        // defaultPageSize={5} // 默认显示多少条数据
        ,
        rowKeyId: 'id' // 配置每行的key值 设置唯一id
        ,
        onChangeTable: onChangeTable // 排序,分页,table的回调
        ,
        current: current,
        onSelectChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows);
        } // 多选框的回调

      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAnalyseContent2);

/***/ })

};
;