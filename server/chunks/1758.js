exports.id = 1758;
exports.ids = [1758];
exports.modules = {

/***/ 1758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8702);
/* harmony import */ var _pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_analyse_getGrade__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7097);
/* harmony import */ var _converttime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9473);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);

 // 按需加载组件


const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + '@/components/TreeType/TreeType']
  }
}); // const InputCommon = dynamic(() => import('@/components/form/form').then((mod) => mod.InputCommon));

const ButtonCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.ButtonCommon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + '@/components/form/form']
  }
});
const PopoverCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.PopoverCommon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + '@/components/form/form']
  }
});
const CommonAlter = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 9756).then(__webpack_require__.bind(__webpack_require__, 9756)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9756)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + './commonAlter']
  }
});
const MyTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const HintPopup = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 9783).then(__webpack_require__.bind(__webpack_require__, 9783)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9783)],
    modules: ["../src/analyse/gradeAlter/gradeAlter.tsx -> " + '../integralAlter/hintPopup']
  }
});
 // 引入样式

 // 引入请求后台方法






const GradeAlter = props => {
  // -------------------------------------------------------------------- 表格表头数据
  const columns = [{
    title: '试题内容',
    dataIndex: 'examContent',
    sorter: true // ellipsis: true,

  }, {
    title: '题型',
    dataIndex: 'questionTypes',
    sorter: true
  }, {
    title: '试题分类',
    dataIndex: 'testTreePersonTitle',
    // render: (test) => (
    //   <>
    //     <span>{test.treePerson.title}</span>
    //   </>
    // ),
    sorter: true
  }, // 配置子标题
  {
    title: '难度',
    dataIndex: 'difficultyLevel',
    sorter: true
  }, {
    title: '答案',
    dataIndex: 'okanswer',
    sorter: true
  }, {
    title: '答题次数',
    dataIndex: 'answerNumber',
    sorter: true
  }, {
    title: '答错次数',
    dataIndex: 'errorNumber',
    sorter: true
  }, {
    title: '错误率',
    dataIndex: 'errorProbability',
    sorter: true
  }, {
    title: '答对次数',
    dataIndex: 'rightNumber',
    sorter: true
  }, {
    title: '正确率',
    dataIndex: 'rightProbability',
    sorter: true
  }, {
    title: '得分率',
    dataIndex: 'scoringProbability',
    sorter: true
  }]; // -------------------------------------------------------------------- 表头数据

  const testData = ['所有题型', '单选', '多选', '判断', '填空', '问答'];
  const difficultyData = ['不限难度', '简单', '中等', '困难']; // -------------------------------------------------------------------- 修改title值

  const {
    0: testkey,
    1: setTestKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('试题类型');
  const {
    0: difficultykey,
    1: setDifficultyKey
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('难易度'); // 查询条件

  const {
    0: testVal,
    1: setTestVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('所有题型');
  const {
    0: difficultyFind,
    1: setDifficultyFind
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('不限难度');
  const {
    0: inputValue,
    1: setInputValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // ----------------------------------------- ---------------------------- 表格内容
  // 获取所有数据条数

  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // 获取所分页数

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // 存储后台返回数据

  const {
    0: gradeData,
    1: setGradeData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 加载动画

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 存放导出选中的数据
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const {
    0: checkdata,
    1: setCheckData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 控制提示弹窗

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 试题分类树形框

  const {
    0: classification,
    1: setClassification
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('试题分类'); // 搜索(节流)

  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null); // 多选框回调

  const onSelectChange = iddata => {
    const items = [];

    for (let i = 0; i < iddata.length; i++) {
      items.push(gradeData.find(item => item.id === iddata[i]));
    }

    setCheckData(items);
  }; // 请求后台数据


  const getAuth = async params => {
    setLoading(true);
    await (0,_api_analyse_getGrade__WEBPACK_IMPORTED_MODULE_4__/* .geteFindExamData */ .rz)(params) // eslint-disable-next-line @typescript-eslint/no-explicit-any
    .then(res => {
      setGradeData(res[0]);
      setLoading(false);
    }).catch(err => {
      console.log(err);
    });
  }; // 排序,分页,table的回调


  const onChangeTable = async (pagination, sorter) => {
    // console.log(pagination, sorter);
    setPage(pagination.current);
    await getAuth({
      page: pagination.current,
      pageSize: pagination.pageSize,
      order: sorter.order,
      field: sorter.field
    });
  }; // ----------------------------------------- ---------------------------- 获取点击值
  // 获取点击值  , key: any  难易程度


  const getTestValue = value => {
    // console.log(`难易程度···${value}`);
    setTestKey(value);
    setTestVal(value); // 查询试题类型

    if (difficultyFind === '不限难度') {
      setDifficultyFind(undefined);
    } else if (value === '所有题型') {
      setTestVal(undefined);
    }

    getAuth({
      // 由于service对service没有id
      id: props.gradeId,
      al_exam_question_type: value === '所有题型' ? undefined : value,
      al_exam_question_difficulty: difficultyFind,
      al_exam_count: inputValue
    });
  }; // , getkey: any 试题类型


  const getDifficultyValue = value => {
    // console.log(`试题类型····${value}`);
    setDifficultyKey(value);
    setDifficultyFind(value); // 查询难易度

    if (value === '不限难度') {
      setDifficultyFind(undefined);
    } else if (testVal === '所有题型') {
      setTestVal(undefined);
    }

    getAuth({
      // 由于service对service没有id
      id: props.gradeId,
      al_exam_question_type: testVal,
      al_exam_question_difficulty: value === '不限难度' ? undefined : value,
      al_exam_count: inputValue
    });
  }; //  --------------------------------------------------------------------  树形选框方法
  // , id: number, c


  const currentNode = location => {
    setClassification(location); // 树形框搜索
  };

  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeHeaderTreeType),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(TreeType, {
      type: 'exam',
      getCurrentAndAncestorsTitles: currentNode,
      checkoutDepartment: true
    })
  });

  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UnorderedListOutlined, {}), classification, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CaretDownOutlined, {})]
  }); // --------------------------------------------------------------------- 导出提示弹窗
  // 调用弹窗事件


  const alertdialog = () => {
    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = () => {
    setalertShow(false);
  };

  const obj = {
    examContent: '试题内容',
    questionTypes: '题型',
    testTreePersonTitle: '试题分类',
    difficultyLevel: '难度',
    okanswer: '答案',
    answerNumber: '答题次数',
    errorNumber: '答错次数',
    errorProbability: '错误率',
    rightNumber: '答对次数',
    rightProbability: '正确率',
    scoringProbability: '得分率'
  }; // 确定关闭弹窗时执行方法

  const carryAlertdialog = () => {
    // 关闭提示弹窗
    changeAlertFlag(); // 执行导出方法
    // 执行导出方法

    if (checkdata.length > 0) {
      (0,_converttime__WEBPACK_IMPORTED_MODULE_7__/* .exportExcelFn */ .I)(checkdata, obj, '答题统计');
    } else {
      (0,_converttime__WEBPACK_IMPORTED_MODULE_7__/* .exportExcelFn */ .I)(gradeData, obj, '答题统计');
    }
  }; // --------------------------------------------------- ------------------------ 默认 不传参数 请求所有数据


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getAuth({
      id: props.gradeId,
      examId: props.itemExamid
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeAlterBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeAlterHeaderBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(CommonAlter, {
        data: testData,
        title: testkey,
        getValue: getTestValue
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(CommonAlter, {
        data: difficultyData,
        title: difficultykey,
        getValue: getDifficultyValue
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeAlterSpan)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(PopoverCommon, {
        title: title,
        type: 'FullBox',
        children: content
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeAlterHeaderInput) // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // onKeyUp={(e: any) => {
        //   console.log('点击回车事件');
        //   // console.log(e.key);
        //   // if (e.key === 'Enter') {
        //   //   getAuth({
        //   //     // 由于service对service没有id
        //   //     // id: props.gradeId,
        //   //     al_exam_question_type: testVal === '所有题型' ? undefined : testVal,
        //   //     al_exam_question_difficulty:
        //   //       difficultyFind === '不限难度' ? undefined : difficultyFind,
        //   //     al_exam_count: e.target.value,
        //   //   });
        //   //   // setInputValue(e.target.value);
        //   // }
        // }}
        ,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default()), {
          style: {
            height: '42px',
            fontSize: '12px',
            width: '270px',
            marginLeft: '5px'
          },
          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u8BE2",
          value: inputValue,
          onChange: e => {
            setInputValue(e.target.value);
            const al_exam_count = e.target.value;
            clearTimeout(timer);
            timer = setTimeout(async () => {
              await getAuth({
                // 由于service对service没有id
                id: props.gradeId,
                al_exam_question_type: testVal === '所有题型' ? undefined : testVal,
                al_exam_question_difficulty: difficultyFind === '不限难度' ? undefined : difficultyFind,
                al_exam_count
              });
            }, 500);
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeButtonCommonButton),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ButtonCommon, {
          type: 'none' // 点击查询传参
          ,
          onClick: () => {
            // console.log('点击查询');
            if (difficultyFind === '不限难度') {
              setDifficultyFind(undefined);
            } else if (testVal === '所有题型') {
              setTestVal(undefined);
            }

            getAuth({
              // 由于service对service没有id
              id: props.gradeId,
              al_exam_question_type: testVal === '所有题型' ? undefined : testVal,
              al_exam_question_difficulty: difficultyFind === '不限难度' ? undefined : difficultyFind,
              al_exam_count: inputValue
            });
          },
          children: "\u67E5\u8BE2"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeUndoOutlinedSpan)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(ButtonCommon, {
        type: 'none',
        onClick: () => {
          // console.log('点击从新请求所有数据');
          setTestKey('实题类型');
          setDifficultyKey('难易度');
          setInputValue('');
          setDifficultyFind(undefined);
          setTestVal(undefined); // 由于service对service没有id

          getAuth({
            id: props.gradeId
          });
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UndoOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeDownloadOut),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ButtonCommon, {
          type: 'none',
          onClick: () => {
            alertdialog();
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownloadOutlined, {}), "\u5BFC\u51FA"]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeCountBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(MyTable, {
        data: gradeData // 数据
        ,
        dataCount: pageSize // 数据的总条数
        ,
        columns: columns // 标题+内容
        ,
        isCheckout: true // 是否使用多选
        ,
        loading: loading // 加载动画
        ,
        onSelectChange: onSelectChange // 多选框的回调
        ,
        current: page,
        pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
        ,
        rowKeyId: 'id' // 配置每行的key值 设置唯一id
        ,
        onChangeTable: onChangeTable // 排序,分页,table的回调

      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        className: (_pages_analyse_grade_grade_module_scss__WEBPACK_IMPORTED_MODULE_6___default().gradeCountSpan),
        children: page
      })]
    }), alertShow === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(HintPopup, {
      alertShow: alertShow,
      changeAlertFlag: changeAlertFlag,
      alertdialog: carryAlertdialog,
      title: checkdata !== undefined && checkdata.length > 0 ? `查询结果有${checkdata.length}条记录，确认导出吗?` : `查询结果有${gradeData.length}条记录，确认导出吗?`
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradeAlter);

/***/ }),

/***/ 8702:
/***/ ((module) => {

// Exports
module.exports = {
	"gradeBox": "grade_gradeBox__sN7CW",
	"contentBox": "grade_contentBox__rIAGb",
	"header": "grade_header__l9dpY",
	"gradeHeaderTreeType": "grade_gradeHeaderTreeType__wgYzC",
	"gradeAlterBox": "grade_gradeAlterBox__6kOfh",
	"hintText": "grade_hintText__FbiSb",
	"hintButton": "grade_hintButton__jinaF",
	"gradeAlterSpan": "grade_gradeAlterSpan__31S4J",
	"gradeUndoOutlinedSpan": "grade_gradeUndoOutlinedSpan__VMMVj",
	"gradeAlterHeaderBox": "grade_gradeAlterHeaderBox__p4iRA",
	"gradeDownloadOut": "grade_gradeDownloadOut__nD6LG",
	"gradeButtonCommonButton": "grade_gradeButtonCommonButton__i0bKY",
	"gradeTabBox": "grade_gradeTabBox__vwoUq",
	"gradeDownload": "grade_gradeDownload__RiN_c",
	"gradeCountBox": "grade_gradeCountBox__D3HCX",
	"gradeCountSpan": "grade_gradeCountSpan__o1CXT",
	"gradeAlterHeaderInput": "grade_gradeAlterHeaderInput__ewcy7"
};


/***/ })

};
;