exports.id = 7847;
exports.ids = [7847];
exports.modules = {

/***/ 5303:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);

const arr = [{
  key: '0',
  name: '试题库',
  path: '/resource/testBank',
  icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.DatabaseOutlined
}, {
  key: '1',
  name: '考生管理',
  path: '/resource/students',
  icon: _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__.TeamOutlined
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (arr);

/***/ }),

/***/ 7847:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3984);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var _studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(3523);
/* harmony import */ var _studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7363);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_form_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1518);
/* harmony import */ var _component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4703);
/* harmony import */ var _utils_timeCycle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5512);
/* harmony import */ var _component_Nav_resourceLeftNavData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5303);
/* harmony import */ var _component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2836);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/TreeType/TreeType']
  }
});
const AddStudents = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719), __webpack_require__.e(1127)]).then(__webpack_require__.bind(__webpack_require__, 9307)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9307)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/addStudents']
  }
});
const ImportExcel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 8795).then(__webpack_require__.bind(__webpack_require__, 5529)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5529)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/importExcel']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/alertCommon/alertCommon']
  }
});
const ChangeAlert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719), __webpack_require__.e(9213), __webpack_require__.e(8548)]).then(__webpack_require__.bind(__webpack_require__, 8548)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8548)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/batch/changeAlert']
  }
});
const DelAlert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 998).then(__webpack_require__.bind(__webpack_require__, 998)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(998)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/batch/delAlert']
  }
});
const DelOneAlert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 9663).then(__webpack_require__.bind(__webpack_require__, 9663)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9663)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/batch/delOneAlert']
  }
});
const AnalyseContent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 2873).then(__webpack_require__.bind(__webpack_require__, 2873)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2873)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/Nav/analyseContent']
  }
});
const UnselectedAlert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 9213).then(__webpack_require__.bind(__webpack_require__, 9213)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9213)],
    modules: ["../src/components/studentManage/studentsContent.tsx -> " + '@component/studentManage/batch/unselectedAlert']
  }
});






const excelObj = {
  labelName: ['date', 'input', 'input', 'select'],
  title: ['创建时间:', '手机号码:', '邮箱:', '性别:'],
  keyData: ['time', 'mobile', 'email', 'sex'],
  selectData: ['不限', '男', '女']
};

const StudentsContent = props => {
  const {
    0: findFlag,
    1: setFindFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 新增考生

  const {
    0: addFlag,
    1: setAddFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 获取数据

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 数据总数

  const {
    0: dataCount,
    1: setDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // 加载动画

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 存储搜索框值

  const {
    0: saveKeywordSearch,
    1: setSaveKeywordSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 存储状态

  const {
    0: saveState,
    1: setSaveState
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 单条数据

  const {
    0: dataRecord,
    1: setDataRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}); // 获取修改后的密码

  const {
    0: password,
    1: setpassWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(); // 存储表单参数

  const {
    0: saveFormItem,
    1: setSaveFormItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}); // 加载导入弹框

  const {
    0: importXlsxFlag,
    1: setImportXlsxFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 导入弹框是否需要加载

  const {
    0: layoutImportFlag,
    1: setLayoutImportFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 选中的数据

  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(String);
  const {
    0: changeData,
    1: setChangeData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 导出excel 调用弹窗

  const {
    0: exportExcelAlertShow,
    1: setExportExcelAlertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 导出excel 选中的数据

  const {
    0: exportData,
    1: setexportData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 导出excel 所有数据

  const {
    0: exportStudentList,
    1: setExportStudentList
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 查询阶段值

  const {
    0: stageName,
    1: setStageName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
  const {
    0: stageId,
    1: setStageId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined); // 批量修改状态

  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: cancelIsModalVisible,
    1: setCancelIsModalVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 批量删除状态

  const {
    0: batchDel,
    1: setBatchDel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: cancleBatchDel,
    1: setCancleBatchDel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 一条数据的id

  const {
    0: batchDelOne,
    1: setBatchDelOne
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: cancleBatchDelOne,
    1: setCancleBatchDelOne
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: delOneListId,
    1: setDelOneListId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(); // 未选中弹窗

  const {
    0: unChoose,
    1: setunChoose
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: unChooseTitle,
    1: setunChooseTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(String);
  const {
    0: changeWinState,
    1: setChangeWinState
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
  const {
    0: changeSuccess,
    1: setchangeSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 分页

  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined); // 清空关键字数据

  const {
    0: clearSearchCommon,
    1: setClearSearchCommon
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 关键字搜索防抖

  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); // 获取数据

  const getStudentsList = async params => {
    setLoading(true);

    if (JSON.stringify(params) === '{}') {
      setCurrent(1);
    }

    setTimeout(async () => {
      const res = await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .getAllData */ .jl)(params);

      if (res.data) {
        setData(res.data[0]);
        setDataCount(res.data[1]);
        setLoading(false);
      }
    }, 500);
  }; // 默认 不传参数


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getStudentsList({});
  }, []); // 新增考生弹框

  const addList = (flag, obj) => {
    setAddFlag(flag);
    obj && getStudentsList(_objectSpread({
      studentStageId: stageId,
      state: saveState,
      keywordSearch: saveKeywordSearch
    }, saveFormItem));
  }; // 增


  const addData = () => {
    setDataRecord({});
  }; // 修改密码


  const confirm = async id => {
    (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .changeDate */ .Mv)({
      id,
      password
    });
    setpassWord('');
    const {
      openNotificationWithIcon
    } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2836));
    openNotificationWithIcon('success', '修改成功', '');
    getStudentsList({});
  }; // 多选 回调


  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setId(selectedRowKeys);
    setChangeData(selectedRows);
    setexportData(selectedRows);
    props.getStudentData && props.getStudentData(selectedRows);
  }; // 批量删除


  const delList = flag => {
    setBatchDel(flag);
    flag || getStudentsList({});
  };

  const delCancelList = flag => {
    setCancleBatchDel(flag);
  }; // 删除一条


  const delOneList = flag => {
    setBatchDelOne(flag);
    let pageCur = current;

    if (data.length === 1) {
      pageCur -= 1;
      setCurrent(pageCur);
    }

    flag || getStudentsList({
      page: pageCur
    });
  };

  const delOneCancelList = flag => {
    setCancleBatchDelOne(flag);
  };

  const remove = async id => {
    delOneList(true);
    delOneCancelList(true);
    setDelOneListId(id);
  }; // 点击账号弹出修改弹窗


  const changeStudents = record => {
    setAddFlag(true);
    setDataRecord(record);
  }; // 未选择弹窗


  const unselected = flag => {
    setunChoose(flag);
  };

  const changeWin = flag => {
    setchangeSuccess(flag);
  }; // 批量修改弹窗
  // 弹窗


  const changeFnBatch = flag => {
    setIsModalVisible(flag);
    flag || getStudentsList({});
  };

  const changeFnBatchCancel = flag => {
    setCancelIsModalVisible(flag); // flag || getStudentsList({});
  };

  const delModal = e => {
    if (changeData.length === 0) {
      setBatchDel(false);
      setChangeWinState(2);
      changeWin(true);
      setunChooseTitle('请先勾选要删除的考生');
      unselected(true);
    } else {
      delList(true);
      delCancelList(true);
      unselected(false);
    }
  }; // 配置表格


  const columns = [{
    title: '姓名',
    width: '10%',
    dataIndex: 'studentName',
    sorter: true
  }, {
    title: '账号',
    dataIndex: 'studentNumber',
    sorter: true,
    ellipsis: true,
    render: (text, record) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
      onClick: () => {
        changeStudents(record);
      },
      style: {
        cursor: 'pointer'
      },
      children: record.studentNumber
    })
  }, {
    title: '所属阶段',
    sorter: true,
    ellipsis: true,
    render: (text, record) => record.title
  }, {
    title: '手机号码',
    width: '10%',
    dataIndex: 'studentPhone',
    sorter: true,
    ellipsis: true
  }, // {
  //   title: '邮箱',
  //   width: '15%',
  //   dataIndex: 'eMail',
  //   sorter: true,
  //   ellipsis: true,
  // },
  {
    title: '性别',
    width: '5%',
    dataIndex: 'studentSex',
    sorter: true,
    ellipsis: true,
    render: text => text === 0 ? '女' : text === 1 ? '男' : ''
  }, {
    title: '状态',
    width: '8%',
    dataIndex: 'studentState',
    sorter: true,
    ellipsis: true,
    render: text => text === 'active' ? '激活' : text === 'locked' ? '禁用' : ''
  }, {
    title: '创建时间',
    width: '15%',
    dataIndex: 'createTime',
    sorter: true,
    ellipsis: true,
    render: text => (0,_utils_timeCycle__WEBPACK_IMPORTED_MODULE_13__/* .timeFormat */ .i)(text)
  }, {
    title: '操作',
    width: '10%',
    align: 'center',
    key: 'action',
    render: (text, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_1___default()), {
      size: "middle",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.FormOutlined, {
        onClick: () => {
          setAddFlag(true);
          setDataRecord(record);
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_2___default()), {
        placement: "left",
        overlayClassName: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().popoverClass),
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("p", {
            children: ["\u59D3\u540D:", record.studentName]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_3___default().Password), {
            placeholder: "\u8BF7\u8F93\u5165\u65B0\u5BC6\u7801",
            value: password,
            onChange: e => {
              setpassWord(e.target.value);
            },
            className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().input_password)
          })]
        }),
        onConfirm: () => {
          confirm(record.id);
        },
        icon: "",
        okText: "\u786E\u5B9A\u4FEE\u6539",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.KeyOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DeleteOutlined, {
        onClick: () => {
          remove(record.id);
        }
      })]
    })
  }]; // 分页pagination、排序sorter  改变时触发 然后请求

  const onChangeTable = async (pagination, filters, sorter) => {
    const order = sorter.order ? sorter.order === 'ascend' ? 'ASC' : 'DESC' : sorter.order;
    setCurrent(pagination.current);
    await getStudentsList(_objectSpread({
      page: pagination.current,
      pageSize: pagination.pageSize,
      field: sorter.field,
      order,
      studentStageId: stageId,
      state: saveState,
      keywordSearch: saveKeywordSearch
    }, saveFormItem));
  }; // 关键字搜索事件


  const onKeywordSearch = value => {
    setSaveKeywordSearch(value);
    setClearSearchCommon(false);
    setCurrent(1);
    getStudentsList(_objectSpread(_objectSpread({
      keywordSearch: value,
      state: saveState
    }, saveFormItem), {}, {
      studentStageId: stageId
    }));
  }; // 状态切换的回调事件


  const onStudentState = value => {
    const state = value === '激活' ? 'active' : value === '禁用' ? 'locked' : '';
    setSaveState(state);
    setCurrent(1);
    getStudentsList(_objectSpread(_objectSpread({
      state,
      keywordSearch: saveKeywordSearch
    }, saveFormItem), {}, {
      studentStageId: stageId
    }));
  }; // 搜索按钮


  const onFinish = values => {
    console.log(values);
    setCurrent(1);

    if (values) {
      const {
        time,
        mobile,
        email,
        sex
      } = values;
      const sexNum = sex === '男' ? 1 : sex === '女' ? 0 : undefined;
      setSaveFormItem({
        time,
        mobile,
        email,
        sexNum
      });
      getStudentsList({
        keywordSearch: saveKeywordSearch,
        state: saveState,
        time,
        mobile,
        email,
        sexNum,
        studentStageId: stageId
      });
    } else {
      getStudentsList({
        keywordSearch: saveKeywordSearch,
        state: saveState,
        studentStageId: stageId
      });
    }
  }; // 创建接收函数 部门展开


  const currentNode = (location, id) => {
    const name = location.split('/');
    setStageName(name[name.length - 1]);
    setStageId(id);
    setCurrent(1);
    getStudentsList(_objectSpread({
      studentStageId: id,
      state: saveState,
      keywordSearch: saveKeywordSearch
    }, saveFormItem));
  }; // 关闭导入组件


  const downImportXlsx = async () => {
    await setImportXlsxFlag(false);

    if (layoutImportFlag) {
      setTimeout(() => {
        getStudentsList({});
        (0,_component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_11__.openNotificationWithIcon)('success', '添加成功', '');
        setLayoutImportFlag(false);
      }, 500);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const getStudentAllData = async () => {
      const res = await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .getAllData */ .jl)({
        pageSize: dataCount
      });
      console.log(res);
      setExportStudentList(res.data[0]);
    };

    if (exportExcelAlertShow) {
      getStudentAllData();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [exportExcelAlertShow]); // 导出excel

  const exportExcels = async data => {
    // 导出excel数据
    const exportExcel = (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default;
    exportExcel(data.filter(item => {
      item.studentSex = item.studentSex === 0 ? '女' : item.studentSex === 1 ? '男' : item.studentSex;
      item.studentState = item.studentState === 'active' ? '激活' : item.studentState === 'locked' ? '禁用' : item.studentState;
      return item;
    }), {
      studentName: '姓名',
      title: '所属阶段',
      studentNumber: '账号',
      studentSex: '性别',
      studentId: '证件号码',
      studentPhone: '手机号码',
      eMail: '邮箱',
      studentState: '状态',
      remark: '备注'
    }, '考生信息');
  }; // console.log(changeData.length);


  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().contentBox),
    style: {
      height: props.getStudentData && '100%'
    },
    children: [!props.getStudentData && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AnalyseContent, {
      menu: _component_Nav_resourceLeftNavData__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,
      start: 1,
      title: '资源'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [!props.getStudentData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().header),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.TeamOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
          children: "\u8003\u751F\u7BA1\u7406"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().rightContent),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().rightContentTitle),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().nav),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navLeft),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.PopoverCommon, {
                type: "FullBox",
                placement: "bottomLeft",
                title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UnorderedListOutlined, {}), stageName || '所属阶段', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CaretDownOutlined, {})]
                }),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(TreeType, {
                  type: 'department',
                  getCurrentAndAncestorsTitles: currentNode
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.SearchCommon, {
                onChange: value => {
                  clearTimeout(timer);
                  timer = setTimeout(() => {
                    setCurrent(1);
                    setClearSearchCommon(false);
                    getStudentsList(_objectSpread(_objectSpread({
                      keywordSearch: value,
                      state: saveState
                    }, saveFormItem), {}, {
                      studentStageId: stageId
                    }));
                  }, 500);
                },
                onCliCk: onKeywordSearch,
                onBlur: value => {
                  setSaveKeywordSearch(value);
                },
                clearFlag: clearSearchCommon
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.SelectCommon, {
                onChange: onStudentState,
                data: ['状态', '激活', '禁用'],
                style: {
                  margin: '0 0 0 5px',
                  width: '10%'
                },
                value: saveState === 'active' ? '激活' : saveState === 'locked' ? '禁用' : '状态'
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                onClick: () => {
                  setFindFlag(!findFlag);
                },
                type: 'none',
                style: {
                  margin: '0 5px'
                },
                children: ["\u66F4\u591A\u67E5\u8BE2", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CaretDownOutlined, {})]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                type: 'none',
                onClick: () => {
                  setStageName(undefined);
                  setStageId(undefined);
                  setClearSearchCommon(true);
                  setCurrent(1);
                  setSaveState('');
                  setSaveKeywordSearch('');
                  setFindFlag(false);
                  setSaveFormItem({});
                  getStudentsList({
                    keywordSearch: '',
                    state: ''
                  });
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.ReloadOutlined, {})
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().navRight),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                type: 'blueLight',
                style: {
                  margin: '0 5px 0 0'
                },
                onClick: () => {
                  addData();
                  addList(true, false);
                  setDataRecord(null);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.PlusOutlined, {
                  className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().bigSize)
                }), "\u65B0\u589E\u8003\u751F"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                type: 'blueLight',
                style: {
                  margin: '0 5px 0 0'
                },
                onClick: () => {
                  setImportXlsxFlag(true);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UploadOutlined, {
                  className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().bigSize)
                }), "\u6279\u91CF\u5BFC\u5165"]
              }), !props.getStudentData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                  type: 'none',
                  onClick: () => {
                    if (changeData.length === 0) {
                      changeFnBatchCancel(false);
                      setChangeWinState(2);
                      changeWin(true);
                      setunChooseTitle('请先勾选要修改的考生');
                      unselected(true);
                    } else {
                      unselected(false);
                      changeFnBatchCancel(true);
                      changeFnBatch(true);
                    }
                  },
                  style: {
                    margin: '0 5px 0 0'
                  },
                  children: "\u6279\u91CF\u4FEE\u6539"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                  type: 'none',
                  onClick: () => {
                    delModal(id);
                  },
                  style: {
                    margin: '0 5px 0 0'
                  },
                  children: "\u6279\u91CF\u5220\u9664"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.ButtonCommon, {
                  type: 'none',
                  style: {
                    margin: '0 5px 0 0'
                  },
                  onClick: () => {
                    if (exportData.length === 0) {
                      setExportExcelAlertShow(true);
                    } else {
                      exportExcels(exportData);
                    }
                  },
                  children: "\u5BFC\u51FAExcel"
                })]
              })]
            })]
          }), findFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_8__.FormCommon, {
            labelName: excelObj.labelName,
            title: excelObj.title,
            keyData: excelObj.keyData,
            selectData: excelObj.selectData,
            onFinish: onFinish
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_9__["default"], {
            data: data // 数据
            ,
            dataCount: dataCount // 数据的总条数
            ,
            columns: columns // 标题+内容
            ,
            isCheckout: true // 是否使用多选
            ,
            onSelectChange: onSelectChange // 多选框的回调
            ,
            rowKeyId: 'id' // 配置每行的key值 设置唯一id
            ,
            onChangeTable: onChangeTable // 排序,分页,table的回调
            ,
            loading: loading,
            current: current
          })]
        })
      })]
    }), batchDelOne && cancleBatchDelOne && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: cancleBatchDelOne,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        delOneCancelList(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().batch_del),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(DelOneAlert, {
          batchDelOne: batchDelOne,
          delOneList: delOneList,
          delOneCancelList: delOneCancelList,
          delOneListId: delOneListId
        })
      })
    }), cancelIsModalVisible && isModalVisible && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: cancelIsModalVisible,
      enableDrag: true,
      alertTitle: '批量修改考生信息',
      changeAlertFlag: flag => {
        changeFnBatchCancel(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().batch_change),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ChangeAlert, {
          isModalVisible: isModalVisible,
          id: id,
          changeData: changeData,
          changeFnBatch: changeFnBatch,
          changeFnBatchCancel: changeFnBatchCancel
        })
      })
    }), cancleBatchDel && batchDel && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: cancleBatchDel,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        delCancelList(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().batch_del),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(DelAlert, {
          batchDel: batchDel,
          cancleBatchDel: cancleBatchDel,
          id: id,
          delList: delList,
          changeData: changeData,
          delCancelList: delCancelList,
          delOneListId: delOneListId
        })
      })
    }), unChoose && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: unChoose,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        unselected(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(UnselectedAlert, {
        changeWin: changeWin,
        unselected: unselected,
        changeWinState: changeWinState,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CloseOutlined, {}),
        unselectedTitle: unChooseTitle
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: exportExcelAlertShow,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        setExportExcelAlertShow(flag);
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().exportExcelAlert),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().content),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
            className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().question),
            children: "?"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
            className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().text),
            children: ["\u67E5\u8BE2\u7ED3\u679C\u6709", dataCount, "\u6761\u8BB0\u5F55\uFF0C\u786E\u8BA4\u5BFC\u51FA\u5417?"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().btn_list),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => {
              exportExcels(exportStudentList);
              setExportExcelAlertShow(false);
            },
            children: "\u786E \u5B9A"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
            children: " "
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("button", {
            onClick: () => {
              setExportExcelAlertShow(false);
            },
            children: "\u53D6 \u6D88"
          })]
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: addFlag,
      enableDrag: true,
      alertTitle: dataRecord ? '编辑考生' : '新增考生',
      changeAlertFlag: flag => {
        addList(flag, false);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_studentsContent_module_scss__WEBPACK_IMPORTED_MODULE_14___default().alert_add),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AddStudents, {
          addList: addList,
          dataRecord: dataRecord,
          addData: addData
        })
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: importXlsxFlag,
      enableDrag: true,
      alertTitle: '考生导入',
      changeAlertFlag: downImportXlsx,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(ImportExcel, {
        setLayoutImportFlag: setLayoutImportFlag,
        layoutImportFlag: layoutImportFlag,
        importXlsxFlag: importXlsxFlag,
        downImportXlsx: downImportXlsx
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StudentsContent);

/***/ }),

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNotificationWithIcon": () => (/* binding */ openNotificationWithIcon)
/* harmony export */ });
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);

// Success成功  Info信息  Warning警告  Error错误
const openNotificationWithIcon = (type, content, desc) => {
  return (antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default())[type]({
    message: content,
    description: desc
  });
};

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

/***/ 3523:
/***/ ((module) => {

// Exports
module.exports = {
	"contentBox": "studentsContent_contentBox__jiiIo",
	"header": "studentsContent_header__OyfQc",
	"rightContent": "studentsContent_rightContent__yf_YH",
	"rightContentTitle": "studentsContent_rightContentTitle__ReBno",
	"nav": "studentsContent_nav__HoroJ",
	"navLeft": "studentsContent_navLeft__ywqsd",
	"navRight": "studentsContent_navRight__mPLyi",
	"bigSize": "studentsContent_bigSize__Z0hiB",
	"exportExcelAlert": "studentsContent_exportExcelAlert__7LCBK",
	"alertContent": "studentsContent_alertContent__TqnjA",
	"alertBtn": "studentsContent_alertBtn__K02yj",
	"popoverClass": "studentsContent_popoverClass__0had1",
	"input_password": "studentsContent_input_password__amDyh",
	"content": "studentsContent_content__o_QDE",
	"question": "studentsContent_question__VFGpX",
	"text": "studentsContent_text__dxjEQ",
	"btn_list": "studentsContent_btn_list__dGtCt",
	"alert_add": "studentsContent_alert_add__1ryQx",
	"batch_del": "studentsContent_batch_del__FNMtf",
	"batch_change": "studentsContent_batch_change__XOudR"
};


/***/ })

};
;