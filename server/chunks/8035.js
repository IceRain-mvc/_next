exports.id = 8035;
exports.ids = [8035];
exports.modules = {

/***/ 8035:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(4804);
/* harmony import */ var _Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5842);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9067);
/* harmony import */ var _api_exam_createCrews__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);





/* eslint-disable consistent-return */





const Alerts = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/Createcrew/Dialog/index.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(() => __webpack_require__.e(/* import() */ 5061).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/Createcrew/Dialog/index.tsx -> " + '@component/TreeType/TreeType']
  }
});
const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/components/Createcrew/Dialog/index.tsx -> " + '@/components/commonTable/commonTable']
  }
}); // 新增组件

const AddStudents = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(7363), __webpack_require__.e(9307)]).then(__webpack_require__.bind(__webpack_require__, 9307)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9307)],
    modules: ["../src/components/Createcrew/Dialog/index.tsx -> " + '@/components/studentManage/addStudents/index']
  }
}); // 导入

const ImportExcel = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_7__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(7363), __webpack_require__.e(5529)]).then(__webpack_require__.bind(__webpack_require__, 5529)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5529)],
    modules: ["../src/components/Createcrew/Dialog/index.tsx -> " + '@component/studentManage/importExcel']
  }
});






const Dialog = props => {
  const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const {
    visible,
    conner,
    newIndex,
    userListArr,
    setExaminees,
    examinees,
    setExamineeAlert,
    setExistPartId,
    existPartId
  } = props; // columns配置案例

  const {
    0: columns
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{
    title: '账号',
    dataIndex: 'studentNumber'
  }, {
    title: '姓名',
    dataIndex: 'studentName'
  }, {
    title: '所在部门',
    dataIndex: 'treePerson',
    render: (text, record) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
        children: record.treePerson && record.treePerson.title || ''
      });
    }
  }, {
    title: '手机号码',
    dataIndex: 'studentPhone'
  }, {
    title: '邮箱',
    dataIndex: 'eMail'
  }, {
    title: '创建时间',
    render: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
      children: new Date(text.createTime).toLocaleString('chinese', {
        hour12: false
      }).replace(/\//g, '-')
    })
  }, {
    title: '状态',
    dataIndex: 'state',
    render: (text, record) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
        children: record.studentState === 'active' ? '激活' : '禁用'
      });
    }
  }]); // 显示隐藏消息框

  const {
    0: displayUnderLine,
    1: setDisplayUnderLine
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 树形组件标题

  const {
    0: tree,
    1: setTree
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 显隐树形组件

  const {
    0: showTree,
    1: setShowTree
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 树的高亮

  const {
    0: currentId,
    1: setCurrentId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // setAreaText

  const {
    0: AreaText,
    1: setAreaText
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 加载动画

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 查询信息集合

  const {
    0: treeType,
    1: setTreeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // input搜索框

  const {
    0: keyValue,
    1: setKeyValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 考生激活状态

  const {
    0: liveState,
    1: setLiveState
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: startTime,
    1: setStartTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined); // 开始时间

  const {
    0: endTime,
    1: setEndTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined); // 结束时间
  // 获取考生数据

  const {
    0: studentsData,
    1: setStudentsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 数据选中条数

  const {
    0: selectCount,
    1: setSelectCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // 考生

  const {
    0: selStudentRow,
    1: setSelStudentRow
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // row
  // 数组

  const {
    0: partRow,
    1: setPartRow
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 树形组件

  const currentNode = (loc, id, idList) => {
    setTree(loc);
    setCurrentId(id);
    setTreeType(idList);
  }; // 开始时间


  function onStartChange(value, dateString) {
    console.log(value);
    setStartTime(dateString);
  } // 结束时间


  function onEndChange(value, dateString) {
    setEndTime(dateString);
  } // 考生激活状态


  function userLiveState(e) {
    setLiveState(e.target.value);
  } // 查询学生信息


  async function searchExaminee() {
    setLoading(true);
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_10__/* .getExamineeMessage */ .a4)({
      treeType: treeType.join(),
      keyValue: keyValue,
      liveState: liveState,
      startTime: startTime,
      endTime: endTime
    });
    setStudentsData(res);
    setLoading(false);
  } // 重置


  function reset() {
    setTree('');
    setCurrentId(0);
    setTreeType([]);
    setKeyValue('');
    setLiveState('');
    setStartTime(undefined);
    setEndTime(undefined); // 查询考生信息
  } // 考生选中事件


  const selectStudent = (target, row) => {
    setSelectCount(target.length);
    setSelStudentRow(row);
  }; // 将选中的考生添加到指定考生中


  function infoThisExaminee() {
    const idList = examinees.map(item => {
      if (item.id) {
        return item.id;
      }

      if (item.departId) {
        return item.departId;
      }
    });
    selStudentRow.forEach(item => {
      if (!idList.includes(item.id)) {
        examinees.unshift(item);
      }
    });
    setExaminees([...examinees]);
  }

  const currentNodeMessage = () => {
    console.log();
  }; // 批量录入考生


  const {
    0: batchs,
    1: setBatchs
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');

  const onChange = ({
    target: {
      value
    }
  }) => {
    setBatchs(value);
  }; // 取消


  const close = () => {
    conner();
  }; // 加载导入弹框


  const {
    0: importXlsxFlag,
    1: setImportXlsxFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: showOther,
    1: setShowOther
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    searchExaminee(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selNodeList = (idList, rowList) => {
    setPartRow([...rowList]);
  }; // 单条数据


  const {
    0: dataRecord,
    1: setDataRecord
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}); // 新增考生

  const {
    0: addFlag,
    1: setAddFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 录入失败考生数组

  const {
    1: setEntryFail
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 新增考生弹框

  const addList = flag => {
    setAddFlag(flag);
    flag || searchExaminee();
  }; // 增


  const addData = () => {
    setDataRecord({
      userListArr
    });
  }; // 关闭导入组件


  const downImportXlsx = async () => {
    setImportXlsxFlag(false);
    await searchExaminee();
  };

  const myChange = () => {
    console.log();
  };

  const openNotification = () => {
    antd_lib_notification__WEBPACK_IMPORTED_MODULE_3___default().open({
      message: '请先选择部门',
      className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().custom),
      icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.WarningOutlined, {}),
      style: {
        width: 350,
        height: 60,
        lineHeight: 60
      }
    });
  }; // 批量导入考生


  const selectExaminee = async () => {
    if (!displayUnderLine) {
      setDisplayUnderLine(true);
    }

    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_10__/* .selectExamineeExist */ .v4)({
      stuStr: batchs
    });
    const resList = [];
    const successList = [];
    res.forEach(item => {
      if (item.code === -1) {
        resList.push(item.msg);
      }

      if (item.code === 1) {
        successList.push(item.msg);
      }
    });
    const success = res.reduce((prev, next) => {
      if (next.code === 1) {
        prev += 1;
      }

      return prev;
    }, 0); // 判断选中考生中是否已存在当前考生

    successList.forEach(item => {
      const flag = selStudentRow.some(el => {
        return el.id === item.id;
      });

      if (!flag) {
        selStudentRow.unshift(item);
      }
    });
    setSelStudentRow([...selStudentRow]);
    setEntryFail([...resList]);
    setAreaText(`成功录入 ${success} 个考生账号\n\n如下 ${resList.length} 个考生账号录入失败，因系统不存在这些账号，请检查：\n${resList.join('\n')}`);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().box),
    onClick: () => {
      if (showTree) {
        setShowTree(false);
      }
    },
    children: [newIndex === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      title: '选择考生',
      setExamAlertFlag: setExamineeAlert,
      store: true,
      selectCount: selectCount,
      infoQuestion: infoThisExaminee,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Next),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().questionFather),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().searchContent),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().searchTitle),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().quesClassify),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().childTitle),
                  children: "\u6240\u5C5E\u9636\u6BB5"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tree),
                  onClick: () => {
                    setShowTree(!showTree);
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                    className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().treeTitle),
                    children: tree
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CaretDownOutlined, {}),
                    children: "\u9009\u62E9"
                  }), showTree && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
                    className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().showTree),
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(TreeType, {
                      type: 'department',
                      getCurrentAndAncestorsTitles: currentNode,
                      currentId: currentId
                    })
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().quesClassify),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().childTitle),
                  children: "\u5173\u952E\u5B57\u641C\u7D22"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("input", {
                  type: "text",
                  value: keyValue,
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().inpValue),
                  onChange: e => {
                    setKeyValue(e.target.value);
                  }
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().searchGroup),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().childTitle)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SearchOutlined, {}),
                  onClick: searchExaminee,
                  children: "\u67E5\u8BE2"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.SyncOutlined, {}),
                  onClick: reset,
                  children: "\u91CD\u7F6E"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().down),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                    icon: showOther ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DoubleRightOutlined, {
                      rotate: 270
                    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DoubleRightOutlined, {
                      rotate: 90
                    }),
                    onClick: () => {
                      setShowOther(!showOther);
                    },
                    children: "\u66F4\u591A\u67E5\u8BE2\u5B57\u6BB5"
                  })
                })]
              })]
            }), showOther && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().searchOther),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().quesClassify),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().childTitle),
                  children: "\u8003\u751F\u72B6\u6001"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("select", {
                  id: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().level),
                  value: liveState,
                  onChange: userLiveState,
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("option", {
                    value: ""
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("option", {
                    value: "active",
                    children: "\u6FC0\u6D3B"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("option", {
                    value: "locked",
                    children: "\u7981\u7528"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().quesClassify),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().childTitle),
                  children: "\u521B\u5EFA\u65F6\u95F4"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().date),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default()), {
                    showTime: true,
                    onChange: onStartChange
                  }), " -\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default()), {
                    showTime: true,
                    onChange: onEndChange
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().questionsTable),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().examineeManager),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("span", {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().infoManager),
                onClick: () => {
                  Router.push('/resource/students');
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.TeamOutlined, {})
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("span", {
                  className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().userIcon),
                  children: "\u8FDB\u5165\u8003\u751F\u7BA1\u7406"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btns),
                onClick: () => {
                  addData();
                  addList(true); // setAddFlag(true);

                  setDataRecord(null);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserAddOutlined, {}), "\u65B0\u589E"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btns),
                onClick: () => {
                  setImportXlsxFlag(true);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UpCircleOutlined, {}), "\u5BFC\u5165"]
              })]
            }), !loading && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(CommonTable, {
              data: studentsData,
              columns: columns,
              isCheckout: true,
              dataCount: studentsData.length,
              loading: false,
              rowKeyId: 'id',
              onChangeTable: myChange,
              pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
              ,
              onSelectChange: selectStudent
            })]
          })]
        })
      })
    }) : newIndex === 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Alerts, {
      alertStatus: visible,
      enableDrag: true,
      alertTitle: '指定阶段',
      changeAlertFlag: close,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
        className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Ment),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().showAuto),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().newName),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(TreeType, {
              type: 'department',
              getCurrentAndAncestorsTitles: currentNodeMessage,
              openCheckbox: true,
              checkoutDepartment: true,
              selectNodeList: selNodeList,
              selCheckIds: existPartId
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().foolest),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().where),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btn),
                onClick: () => {
                  if (partRow.length === 0) {
                    openNotification();
                  } else {
                    const departId = partRow.map(item => {
                      return {
                        departId: item.id,
                        title: item.title
                      };
                    });
                    const part = [];
                    examinees.forEach(item => {
                      if (item.departId) {
                        part.push(item.departId);
                      }
                    });
                    const result = departId.filter(el => {
                      return !part.includes(el.departId);
                    });
                    const resultId = result.map(item => {
                      return item.departId;
                    });
                    setExistPartId([...part, ...resultId]);
                    setExaminees([...examinees, ...result]);
                    setPartRow([]);
                    conner();
                  }
                },
                children: "\u9009\u62E9\u5E76\u8FD4\u56DE"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
                className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btn),
                onClick: () => {
                  conner();
                },
                children: "\u5173\u95ED"
              })]
            })
          })]
        })
      })
    }) : newIndex === 2 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(Alerts, {
      alertStatus: visible,
      enableDrag: true,
      alertTitle: '批量录入考生',
      changeAlertFlag: close,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().Batch),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().newName),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tits),
            children: "1\u3001\u5F55\u5165\u7684\u8D26\u53F7\u5FC5\u987B\u662F\u8003\u751F\u7BA1\u7406\u4E2D\u5DF2\u7ECF\u5B58\u5728\u7684\u8D26\u53F7"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("p", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().tits),
            children: "2\u3001\u5F55\u5165\u683C\u5F0F\uFF1A\u4E00\u884C\u4E00\u4E2A\u8D26\u53F7"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().valul),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_6___default()), {
              value: batchs,
              onChange: onChange,
              placeholder: "\u5F55\u5165\u683C\u5F0F\u793A\u4F8B:\n\u8003\u8BD5\u8D26\u53F71\n\u8003\u8BD5\u8D26\u53F72\n\u8003\u8BD5\u8D26\u53F73",
              rows: displayUnderLine ? 8 : 16
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().hideMsgDiv),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().showAlertDiv),
              onClick: () => {
                setDisplayUnderLine(!displayUnderLine);
              },
              children: [!displayUnderLine ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UpOutlined, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.DownOutlined, {}), !displayUnderLine ? '显示消息框' : '隐藏消息框']
            }), displayUnderLine ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx((antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_6___default()), {
                name: "txtMsg",
                id: "txtMsg",
                autoSize: {
                  minRows: 5,
                  maxRows: 7
                },
                readOnly: true,
                style: {
                  cursor: 'auto',
                  color: '#2B71C8'
                } // 成功录入 1 个考生账号
                // 成功录入 0 个考生账号  如下 0 个考生账号录入失败，因系统不存在这些账号，请检查：
                ,
                value: AreaText
              })
            }) : null]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
          className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().foolest),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
            className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().where),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btn),
              onClick: () => {
                // 调用录入的接口
                // 先判断表内字段 是否有
                // `成功录入 ${0} 个考生账号${(
                // <br />
                // )}如下 ${0} 个考生账号录入失败，因系统不存在这些账号，请检查：${(
                //   <br />
                // )}`
                if (!batchs) {
                  antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('请填写录入信息');
                } else {
                  selectExaminee();
                } // 验证的文字

              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.UserAddOutlined, {}), "\u6279\u91CF\u5F55\u5165"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              className: (_Dialog_module_scss__WEBPACK_IMPORTED_MODULE_12___default().btn),
              onClick: () => {
                // 导入考生
                infoThisExaminee();
                setSelStudentRow([]);
                conner();
                setDisplayUnderLine(false);
                setAreaText('');
                setBatchs('');
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.CloseSquareOutlined, {}), "\u5173\u95ED"]
            })]
          })
        })]
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx("div", {
      children: importXlsxFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(ImportExcel, {
        downImportXlsx: downImportXlsx
      })
    }), addFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx(AddStudents, {
      addList: addList,
      dataRecord: dataRecord,
      addData: addData
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dialog);

/***/ }),

/***/ 4804:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Dialog_box__Y2g_F",
	"foolest": "Dialog_foolest__OoGtZ",
	"where": "Dialog_where__LY9Ki",
	"importCloseBtn": "Dialog_importCloseBtn__jj8fr",
	"btn": "Dialog_btn__ZKezP",
	"questionFather": "Dialog_questionFather__PB2l2",
	"searchContent": "Dialog_searchContent__cSlT_",
	"searchTitle": "Dialog_searchTitle__keVTE",
	"quesClassify": "Dialog_quesClassify__PXUAO",
	"childTitle": "Dialog_childTitle__N1SjA",
	"tree": "Dialog_tree__NwphG",
	"treeTitle": "Dialog_treeTitle__Jyjyj",
	"showTree": "Dialog_showTree__Mq5BM",
	"type": "Dialog_type__DCtXC",
	"inpValue": "Dialog_inpValue__bdCDv",
	"searchGroup": "Dialog_searchGroup___anlu",
	"down": "Dialog_down__xDwDx",
	"searchOther": "Dialog_searchOther__y3pmH",
	"level": "Dialog_level__3HIYS",
	"date": "Dialog_date__dmBMY",
	"questionsTable": "Dialog_questionsTable__tZUPG",
	"examineeManager": "Dialog_examineeManager__TGDbK",
	"infoManager": "Dialog_infoManager__G5nY4",
	"userIcon": "Dialog_userIcon__IMg5a",
	"Ment": "Dialog_Ment__N59Lr",
	"showAuto": "Dialog_showAuto__5HixA",
	"Batch": "Dialog_Batch__ORI50",
	"newName": "Dialog_newName__frFrm",
	"tits": "Dialog_tits__OkENV",
	"valul": "Dialog_valul__45Uy7",
	"addstuBox": "Dialog_addstuBox__IVc32",
	"addsturow": "Dialog_addsturow__p5uje",
	"addstuRig": "Dialog_addstuRig__0ZVY5",
	"examType": "Dialog_examType__fWlCf",
	"examTypeIcon": "Dialog_examTypeIcon___XP4z",
	"examNotice": "Dialog_examNotice__LHw6N",
	"examNoticeIcon": "Dialog_examNoticeIcon__sNMtr",
	"examTypeSelect": "Dialog_examTypeSelect__NzHA_",
	"examTypeBtn": "Dialog_examTypeBtn__WzQPV",
	"treeShow": "Dialog_treeShow__7dbus",
	"moreAndSearchDiv": "Dialog_moreAndSearchDiv___q2Nc",
	"moreOfOne": "Dialog_moreOfOne__TGu54",
	"hideMsgDiv": "Dialog_hideMsgDiv__PAQ1G",
	"showAlertDiv": "Dialog_showAlertDiv__T4hOR",
	"alertCommonMainDiv": "Dialog_alertCommonMainDiv__d1qKW",
	"templateLi": "Dialog_templateLi__D_lbQ",
	"uploadImportLi": "Dialog_uploadImportLi__ko_9U",
	"custom": "Dialog_custom__TYmpm"
};


/***/ })

};
;