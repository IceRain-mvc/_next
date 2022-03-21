exports.id = 1525;
exports.ids = [1525];
exports.modules = {

/***/ 1525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ testBankContent)
});

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/testBank/testBankContent.module.scss
var testBankContent_module = __webpack_require__(5245);
var testBankContent_module_default = /*#__PURE__*/__webpack_require__.n(testBankContent_module);
// EXTERNAL MODULE: ./src/components/studentManage/exportExcel.ts
var exportExcel = __webpack_require__(1112);
// EXTERNAL MODULE: ./src/api/testBank/testBank.ts
var testBank = __webpack_require__(4707);
// EXTERNAL MODULE: ./src/components/testBank/exportFile/exportExcelFile.module.scss
var exportExcelFile_module = __webpack_require__(6803);
var exportExcelFile_module_default = /*#__PURE__*/__webpack_require__.n(exportExcelFile_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/testBank/exportFile/exportExcelFile.tsx








const Export = props => {
  const IconFont = (0,icons_.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2981278_w3q7g6v6x8.js'
  });
  const {
    ModeFlagFun
  } = props;
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: exportData,
    1: setExportData
  } = (0,external_react_.useState)([]); // 默认事件

  (0,external_react_.useEffect)(() => {
    if (!localStorage.getItem('testBankMode') || localStorage.getItem('testBankMode') === '0') {
      // 列表模式
      setExportData(props.exportData);
    } else {
      // 预览模式
      setExportData(props.preview_exportData);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // 获取导出的数据

  const getToExport = async params => {
    const res = await (0,testBank/* getExportTest */.ww)({
      testIdList: params
    });
    setData(res);
  }; // 导出的方法


  const exportFn = async data => {
    (0,exportExcel["default"])(data, {
      questionTypes: '题型',
      examContent: '试题内容',
      options: '试题选项',
      okanswer: '答案',
      gradeNum: '分数',
      examTypes: '分类',
      difficultyLevel: '难度',
      okanalysis: '解析'
    }, '考试云导出试题');
  };

  (0,external_react_.useEffect)(() => {
    if (exportData.length > 0) {
      getToExport(exportData);
    }
  }, [exportData]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (exportExcelFile_module_default()).exportalert,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (exportExcelFile_module_default()).content,
      children: exportData.length <= 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (exportExcelFile_module_default()).noSelect,
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconFont, {
          type: "icon-chahao"
        }), "\u8BF7\u9009\u62E9\u8981\u5BFC\u51FA\u7684\u8BD5\u9898"]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (exportExcelFile_module_default()).select,
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconFont, {
          type: "icon-bangzhu"
        }), "\u662F\u5426\u5BFC\u51FA ", exportData.length, " \u6761\u8BD5\u9898"]
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (exportExcelFile_module_default()).btnbox,
      children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: async () => {
          if (data.length > 0) {
            await exportFn(data);
            setTimeout(async () => {
              ModeFlagFun(false);
            });
          } else {
            ModeFlagFun(false);
          }
        },
        children: "\u786E\u5B9A"
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          ModeFlagFun(false);
        },
        children: "\u53D6\u6D88"
      })]
    })]
  });
};

/* harmony default export */ const exportExcelFile = (Export);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
;// CONCATENATED MODULE: ./src/components/testBank/testBankContent.tsx




const Questions = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 965).then(__webpack_require__.bind(__webpack_require__, 965)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(965)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './resourceQustions/resourceQustions']
  }
});
const ImportTemplate = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 1239).then(__webpack_require__.bind(__webpack_require__, 1239)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1239)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './importTemplate/importTemplate']
  }
});
const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const AddExam = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719), __webpack_require__.e(1748), __webpack_require__.e(8886), __webpack_require__.e(5764)]).then(__webpack_require__.bind(__webpack_require__, 8886)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8886)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './addExam/addExam']
  }
});
const BatchAdd = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5900), __webpack_require__.e(6594)]).then(__webpack_require__.bind(__webpack_require__, 5900)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5900)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './batchAdd/batchAdd']
  }
});
const BatchUpdate = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 1238).then(__webpack_require__.bind(__webpack_require__, 1238)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1238)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './batchUpdate/batchUpdate']
  }
});
const BatchDelete = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4383).then(__webpack_require__.bind(__webpack_require__, 4383)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4383)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './batchDelete/batchDelete']
  }
});
const DeleteTest = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2872).then(__webpack_require__.bind(__webpack_require__, 2872)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2872)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './deleteTest/deleteTest']
  }
});
const AlertCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const FormFunction = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 3714).then(__webpack_require__.bind(__webpack_require__, 3714)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3714)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './formFunction/formFunction']
  }
});
const PreviewMode = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 9696).then(__webpack_require__.bind(__webpack_require__, 9696)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9696)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './mode/previewMode']
  }
});
const ListMode = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(4703), __webpack_require__.e(4762)]).then(__webpack_require__.bind(__webpack_require__, 4762)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4762)],
    modules: ["../src/components/testBank/testBankContent.tsx -> " + './mode/listMode']
  }
});







const TestBankContent = props => {
  const {
    mode
  } = props; // 状态
  // 弹窗x关闭时进行判断的状态

  const {
    0: xFlag,
    1: setXFlag
  } = (0,external_react_.useState)([]); // 更多查询开关

  const {
    0: findFlag,
    1: setFindFlag
  } = (0,external_react_.useState)(false); // 模板导入等弹窗开关(唐泽)

  const {
    0: alertFlag,
    1: setAlertFlag
  } = (0,external_react_.useState)(false); // 弹框开关（张云如意）

  const {
    0: modeFlag,
    1: setModeFlag
  } = (0,external_react_.useState)(false); // 模板导入等弹窗标题

  const {
    0: alertTitle,
    1: setAlertTitle
  } = (0,external_react_.useState)(''); // 模板导入等弹窗种类

  const {
    0: alertContent,
    1: setAlertContent
  } = (0,external_react_.useState)('');
  const {
    0: judge,
    1: setjudge
  } = (0,external_react_.useState)({}); // 试题数据

  const {
    0: datas,
    1: setData
  } = (0,external_react_.useState)([]); // 数据总数

  const {
    0: dataCount,
    1: setDataCount
  } = (0,external_react_.useState)(0); // 表单时间

  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)(); // 表单难度

  const {
    0: textDifficulty,
    1: setTextDifficulty
  } = (0,external_react_.useState)(''); // 搜索框内容

  const {
    0: searchContent,
    1: setSearchContent
  } = (0,external_react_.useState)(''); // 点击所有题型

  const {
    0: typeContent,
    1: setTypeContent
  } = (0,external_react_.useState)(''); // 试题分类根据树状结构显示内容

  const {
    0: treeValue,
    1: setTreeValue
  } = (0,external_react_.useState)(undefined);
  const {
    0: treeValueLast,
    1: setTreeValueLast
  } = (0,external_react_.useState)(''); // 点击一条删除获取id

  const {
    0: nowId,
    1: setNowId
  } = (0,external_react_.useState)('0'); // 列表模式下选中的数据

  const {
    0: changeData,
    1: setChangeData
  } = (0,external_react_.useState)([]);
  const {
    0: selectedIdData,
    1: setSelectedIdData
  } = (0,external_react_.useState)([]); // 预览模式下选中的数据

  const {
    0: preview_changeData,
    1: preview_setChangeData
  } = (0,external_react_.useState)([]);
  const {
    0: preview_selectedIdData,
    1: preview_setSelectedIdData
  } = (0,external_react_.useState)([]); // loading动画

  const {
    0: loading,
    1: setloading
  } = (0,external_react_.useState)(true); // 分页默认条数

  const {
    0: defultNumber,
    1: setDefultNumber
  } = (0,external_react_.useState)(10); // 分页页码

  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1); // 下拉框内容

  const {
    0: selectValue,
    1: setSelectValue
  } = (0,external_react_.useState)(''); // 搜索框清除开关

  const {
    0: clearFlag,
    1: setClearFlag
  } = (0,external_react_.useState)(false); // 试卷中存在的试题

  const {
    0: test,
    1: setTest
  } = (0,external_react_.useState)([]); // 事件
  // 处理时间

  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 清空多选框数据


  const clear = () => {
    preview_setSelectedIdData([]);
    preview_setChangeData([]);
  }; // 分页时清空多选框数据  切换模式清空;


  (0,external_react_.useEffect)(() => {
    clear(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, mode]); // 分页

  const pageTestBank = async params => {
    setloading(true);
    await (0,testBank/* getTestBankPage */.YU)(params).then(res => {
      const newTestBankData = res.data[0].map(item => {
        item.createAt = renderTime(item.createAt);
        return item;
      });

      if (newTestBankData) {
        setData(newTestBankData);
        setDataCount(res.data[1]);
        setloading(false);
      }
    }).catch(() => {
      console.log();
    });
  }; // 点击开始时间，结束时间，难度时


  const onFinish = async values => {
    if (values) {
      const {
        time,
        level
      } = values;
      setTime(time);
      setTextDifficulty(level);
      pageTestBank({
        time: time,
        // 时间
        textDifficulty: level,
        // 难度
        textclassify: treeValue,
        // 树形
        textSearch: searchContent,
        // 搜索框内容
        textType: typeContent // 所有题型

      });
    } else {
      pageTestBank({
        textclassify: treeValue,
        // 树形
        textSearch: searchContent,
        // 搜索框内容
        textType: typeContent // 所有题型

      });
    }

    setPage(1);
  }; // 调用获取数据的方法


  const getAllData = () => {
    pageTestBank({
      pageSize: defultNumber,
      page
    });
  };

  const saveAndAddFun = () => {
    setAlertFlag(false);
    setTimeout(() => {
      setAlertFlag(true);
    });
    setjudge({});
  }; // 默认逻辑


  (0,external_react_.useEffect)(() => {
    // 分页
    pageTestBank({}); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 树状组件函数

  const currentNode = (location, id) => {
    const findindex = location.lastIndexOf('/');
    setTreeValueLast(location.slice(findindex + 1)); // 渲染到页面上

    setTreeValue(id);

    if (id === 4) {
      pageTestBank({
        textSearch: searchContent,
        // 搜索框内容
        textType: typeContent,
        // 所有题型
        textDifficulty: textDifficulty,
        time: time
      });
    } else {
      pageTestBank({
        textclassify: id,
        textSearch: searchContent,
        // 搜索框内容
        textType: typeContent,
        // 所有题型
        textDifficulty: textDifficulty,
        time: time
      });
    }

    setPage(1);
  }; // 搜索框搜索内容时


  const getSearchInput = values => {
    setSearchContent(values);
    pageTestBank({
      textclassify: treeValue,
      // 试题分类
      textType: typeContent,
      // 所有题型
      textDifficulty: textDifficulty,
      time: time,
      textSearch: values
    });
    setPage(1);
  }; // 点击所有题型


  const getTextType = values => {
    setSelectValue(values);
    setTypeContent(values);
    pageTestBank({
      textclassify: treeValue,
      // 试题分类
      textSearch: searchContent,
      // 搜索框内容
      textType: values,
      textDifficulty: textDifficulty,
      time: time
    });
    setPage(1);
  }; // 弹框组件内容


  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // 弹框组件按钮内容


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), treeValueLast === '' ? '试题分类' : treeValueLast, /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 改变新增试题等弹框开关


  const changeAlertFlag = flag => {
    setAlertFlag(flag);
    setXFlag([]);

    if (!flag) {
      setjudge({});
    }
  }; // 表格数据


  const columns = [{
    title: '题型',
    dataIndex: 'questionTypes',
    sorter: true,
    width: '7%',
    ellipsis: true
  }, {
    title: '试题内容',
    dataIndex: 'examContent',
    sorter: true,
    ellipsis: true,
    width: '30%'
  }, {
    title: '答案',
    dataIndex: 'okanswer',
    sorter: true,
    width: '10%',
    ellipsis: true
  }, {
    title: '试题分类',
    dataIndex: 'examTypes',
    sorter: true,
    width: '13%',
    ellipsis: true
  }, {
    title: '难度',
    dataIndex: 'difficultyLevel',
    sorter: true,
    width: '10%',
    ellipsis: true
  }, {
    title: '分数',
    dataIndex: 'gradeNum',
    width: '6%',
    sorter: true,
    ellipsis: true
  }, {
    title: '创建日期',
    dataIndex: 'createAt',
    width: '15%',
    sorter: true,
    ellipsis: true,
    defaultSortOrder: 'descend'
  }, {
    title: '操作',
    key: 'action',
    width: '10%',
    ellipsis: true,
    render: (text, record) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (testBankContent_module_default()).handle,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          padding: '0 15px',
          cursor: 'pointer'
        },
        onClick: () => {
          if (record.paperBigQuestions && record.paperBigQuestions.length > 0) {
            message_default().warning(`该试题已在考试中被创建，因此无法操作请在考试中删除再进行操作`);
          } else {
            setjudge(record);
            setAlertContent('questionAdd');
            setAlertFlag(true);
            setAlertTitle('编辑试题');
          }
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: () => {
          if (record.paperBigQuestions.length > 0) {
            // 试题已连接到试卷
            message_default().warn('此试题已在试卷中使用，请在试卷中删除此题后再进行操作！');
          } else {
            // 试题未连接到试卷
            setAlertContent('delete');
            setModeFlag(true);
            setAlertTitle('提示');
            setNowId(record.id);
          }
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ClearOutlined, {})
      })]
    })
  }]; // 多选 回调

  const selectChange = (selectedRowKeys, selectedRows) => {
    const fillToTest = [];
    selectedRows.forEach(item => {
      if (item.paperBigQuestions.length > 0) {
        fillToTest.push(item);
      }
    });
    setTest(fillToTest); // 列表模式

    setChangeData(selectedRows);
    setSelectedIdData(selectedRowKeys);
  }; // 分页pagination、排序sorter  改变时触发 然后请求


  const changeTable = async (pagination, sorter) => {
    setloading(true);
    const order = !sorter.order || sorter.order === 'ascend' ? 'ASC' : 'DESC';
    await pageTestBank({
      page: pagination.current,
      pageSize: pagination.pageSize,
      field: sorter.field,
      order,
      textclassify: treeValue,
      textSearch: searchContent,
      // 搜索框内容
      textType: typeContent,
      // 所有题型
      textDifficulty: textDifficulty,
      time: time
    }); // 默认页码

    setDefultNumber(pagination.pageSize); // 页数

    setPage(pagination.current);
    setloading(false);
  }; // 弹框返回数据


  const ReturnAddExamData = res => {
    if (res) {
      const arr = JSON.parse(JSON.stringify(xFlag));
      arr.push(res);
      setXFlag(arr);
    }
  }; // 弹框 模板导入 返回数据


  const importBackData = res => {
    setXFlag(res);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (testBankContent_module_default()).nav,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (testBankContent_module_default()).navLeft,
        style: {
          position: 'relative'
        },
        id: "myselets",
        children: [/*#__PURE__*/jsx_runtime_.jsx(form_form.PopoverPosition, {
          placement: "bottomLeft",
          title: title,
          style: treeValue ? {
            backgroundColor: 'rgb(58, 140, 131)',
            color: 'white'
          } : {
            backgroundColor: ''
          },
          children: content
        }), /*#__PURE__*/jsx_runtime_.jsx(form_form.SearchCommon, {
          clearFlag: clearFlag,
          onCliCk: getSearchInput,
          style: {
            width: '34%'
          }
        }), /*#__PURE__*/jsx_runtime_.jsx(form_form.SelectPosition, {
          onChange: getTextType,
          data: ['所有题型', '单选题', '多选题', '判断题', '填空题', '问答题'],
          style: {
            margin: '0 0 0 5px',
            width: '21%'
          },
          value: selectValue
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
          onClick: () => {
            setFindFlag(!findFlag);
          },
          type: 'none',
          style: {
            margin: '0 5px'
          },
          children: ["\u66F4\u591A\u67E5\u8BE2", /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
        }), /*#__PURE__*/jsx_runtime_.jsx(form_form.ButtonCommon, {
          type: 'none',
          onClick: async () => {
            // 按钮状态
            setSelectValue('所有题型');
            setClearFlag(!clearFlag);
            setTreeValueLast('试题分类');
            setFindFlag(false); // 状态值

            setPage(1);
            setDefultNumber(8);
            setTime('');
            setTextDifficulty('');
            setSearchContent('');
            setTypeContent('');
            setTreeValue(null);
            pageTestBank({});
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ReloadOutlined, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(FormFunction, {
        alertContentFun: setAlertContent,
        alertFlagFun: setAlertFlag,
        alertTitleFun: setAlertTitle,
        ModeFlagFun: setModeFlag
      })]
    }), findFlag && /*#__PURE__*/jsx_runtime_.jsx(form_form.FormCommon, {
      labelName: ['date', 'select'],
      title: ['创建时间', '难度'],
      keyData: ['time', 'level'],
      selectData: ['全部', '不限难度', '容易', '中等', '困难'],
      onFinish: onFinish
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (testBankContent_module_default()).table,
      children: props.mode === '列表模式' ?
      /*#__PURE__*/
      // 列表模式
      jsx_runtime_.jsx(ListMode, {
        defultNumber: defultNumber,
        page: page,
        datas: datas,
        dataCounts: dataCount,
        columns: columns,
        loadings: loading,
        selectChange: selectChange,
        changeTable: changeTable
      }) :
      /*#__PURE__*/
      // 预览模式
      jsx_runtime_.jsx(PreviewMode, {
        defultNumber: defultNumber,
        page: page,
        defultNumberFun: setDefultNumber,
        pageFun: setPage,
        pageTestBank: pageTestBank,
        dataCount: dataCount,
        data: datas,
        judge: setjudge,
        alertFlag: setAlertFlag,
        alertTitle: setAlertTitle,
        alertContent: setAlertContent,
        modeFlag: setModeFlag,
        nowId: setNowId,
        selectedIdDataChange: preview_setSelectedIdData,
        selectDataChange: preview_setChangeData,
        selectedIdData: preview_selectedIdData,
        selectData: preview_changeData,
        setTest: setTest,
        loading: loading,
        setloading: setloading
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Questions, {
      dialogOpt: alertTitle,
      alertStatus: alertFlag,
      changeAlertFlag: changeAlertFlag,
      closeCallBack: getAllData,
      xFlag: xFlag,
      children: (() => {
        switch (alertContent) {
          // 批量新增
          case 'batchAdd':
            return /*#__PURE__*/jsx_runtime_.jsx(BatchAdd, {
              pageTestBank: pageTestBank,
              defultNumber: defultNumber,
              page: page,
              changeAlertFlag: changeAlertFlag,
              getData: ReturnAddExamData
            });
          // 新增试题

          case 'questionAdd':
            return /*#__PURE__*/jsx_runtime_.jsx(AddExam, {
              Judge: judge,
              changeAlertFlag: changeAlertFlag,
              DataChange: pageTestBank,
              ReturnAddExamData: ReturnAddExamData,
              saveAndAddFun: saveAndAddFun
            });
          // 批量导入

          case 'batchImport':
            return /*#__PURE__*/jsx_runtime_.jsx(ImportTemplate, {
              changeAlertFlag: changeAlertFlag,
              pageTestBank: pageTestBank,
              defultNumber: defultNumber,
              page: page // 返回 添加到数据库的数据
              ,
              backData: importBackData
            });

          default:
            return /*#__PURE__*/jsx_runtime_.jsx("div", {});
        }
      })()
    }), /*#__PURE__*/jsx_runtime_.jsx(AlertCommon, {
      alertStatus: modeFlag,
      changeAlertFlag: setModeFlag,
      enableDrag: true,
      alertTitle: alertTitle,
      children: (() => {
        switch (alertContent) {
          // 导出export
          case 'exportExport':
            return /*#__PURE__*/jsx_runtime_.jsx(exportExcelFile, {
              ModeFlagFun: setModeFlag,
              exportData: selectedIdData,
              preview_exportData: preview_selectedIdData
            });
          // 批量删除

          case 'batchDelete':
            return /*#__PURE__*/jsx_runtime_.jsx(BatchDelete, {
              loading: setloading,
              ModeFlagFun: setModeFlag,
              selectedIdData: selectedIdData,
              preview_selectedIdData: preview_selectedIdData,
              clearFun: clear,
              defultNumber: defultNumber,
              page: page,
              pageTestBank: pageTestBank,
              dataCount: dataCount,
              PageFun: setPage,
              Test: test
            });
          // 批量修改

          case 'batchUpdate':
            return /*#__PURE__*/jsx_runtime_.jsx(BatchUpdate, {
              ModeFlagFun: setModeFlag,
              selectedData: changeData,
              preview_changeData: preview_changeData,
              defultNumber: defultNumber,
              page: page,
              pageTestBank: pageTestBank
            });
          // 删除单个数据

          case 'delete':
            return /*#__PURE__*/jsx_runtime_.jsx(DeleteTest, {
              ModeFlagFun: setModeFlag,
              nowId: nowId,
              clearFun: clear,
              defultNumber: defultNumber,
              page: page,
              pageTestBank: pageTestBank
            });

          default:
            return /*#__PURE__*/jsx_runtime_.jsx("div", {});
        }
      })()
    })]
  });
};

/* harmony default export */ const testBankContent = (TestBankContent);

/***/ }),

/***/ 6803:
/***/ ((module) => {

// Exports
module.exports = {
	"exportalert": "exportExcelFile_exportalert___XBqi",
	"content": "exportExcelFile_content__plZpH",
	"noSelect": "exportExcelFile_noSelect__yWPwR",
	"select": "exportExcelFile_select__S8_Nj",
	"btnbox": "exportExcelFile_btnbox__kT3pN"
};


/***/ }),

/***/ 5245:
/***/ ((module) => {

// Exports
module.exports = {
	"nav": "testBankContent_nav__4MRlu",
	"header": "testBankContent_header__ojouR",
	"navLeft": "testBankContent_navLeft__vBR0t",
	"table": "testBankContent_table__CjBco"
};


/***/ })

};
;