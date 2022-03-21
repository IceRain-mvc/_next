"use strict";
exports.id = 8548;
exports.ids = [8548];
exports.modules = {

/***/ 8548:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TreeType_TreeType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5061);
/* harmony import */ var _api_studentManage_students__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7363);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(555);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _unselectedAlert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9213);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_11__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/studentManage/batch/changeAlert.tsx -> " + '@component/alertCommon/alertCommon']
  }
});

const ChangeAlert = props => {
  const {
    isModalVisible,
    changeData,
    changeFnBatch,
    changeFnBatchCancel
  } = props; // 修改弹窗里面多选框是否禁用

  const {
    0: checkTree,
    1: setCheckTree
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: checkPass,
    1: setCheckPass
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: checkState,
    1: setCheckState
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const {
    0: checkSex,
    1: setCheckSex
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true); // treeType的value

  const {
    0: treeValue,
    1: setTreeValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // 密码

  const {
    0: changePass,
    1: setChangePass
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // 状态

  const {
    0: changeState,
    1: setChangeState
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null); // 性别

  const {
    0: changeSex,
    1: setChangeSex
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
  const {
    0: treeId,
    1: setTreeId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
  const {
    Option
  } = (antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default()); // 未选中弹窗

  const {
    0: unChoose,
    1: setunChoose
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // 修改成功弹窗

  const {
    0: changeWinState,
    1: setChangeWinState
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)();
  const {
    0: changeSuccess,
    1: setchangeSuccess
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // 创建接收函数

  const currentNode = (location, id) => {
    setTreeValue(location);
    setTreeId(id);
  };

  function handleChange(value) {
    setChangeState(value);
  }

  function handleChangeSex(value) {
    setChangeSex(value);
  } // 改三目运算


  function onChangeTree(e) {
    e.target.checked ? setCheckTree(false) : setCheckTree(true);
  }

  function onChangePass(e) {
    e.target.checked ? setCheckPass(false) : setCheckPass(true);
  }

  function onChangeState(e) {
    e.target.checked ? setCheckState(false) : setCheckState(true);
  }

  function onChangeSex(e) {
    e.target.checked ? setCheckSex(false) : setCheckSex(true);
  } // 多选框未选中


  const unselected = flag => {
    setunChoose(flag);
  }; // 多选框未选中


  const changeWin = flag => {
    setchangeSuccess(flag);
  }; // 修改弹窗确定按钮


  const handleOk = async values => {
    changeData.forEach(item => {
      item.password = changePass === undefined ? item.password : changePass;
      item.studentState = changeState === null ? item.studentState : changeState === '激活' ? 'active' : 'locked';
      item.studentSex = changeSex === undefined ? item.studentSex : changeSex === '男' ? 1 : 0;
      item.treePerson = {
        title: treeValue,
        id: treeId
      };
    }); // 传递树id

    if (checkTree && checkPass && checkState && checkSex) {
      changeFnBatch(true);
      unselected(true);
      setChangeWinState(2);
    } else {
      const res = await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_8__/* .batchChanges */ .aQ)(changeData);
      setChangeWinState(1);
      changeWin(true); // res && changeFnBatch(false);
    }
  }; // 取消


  const handleCancel = () => {
    changeFnBatchCancel(false);
  };

  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
    className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().TreeType),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_components_TreeType_TreeType__WEBPACK_IMPORTED_MODULE_7__["default"], {
      type: 'department',
      getCurrentAndAncestorsTitles: currentNode
    })
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    className: "jsx-3279235938",
    children: [isModalVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: "jsx-3279235938" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().batchChange) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-3279235938" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().batchChange_content) || ""),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: "jsx-3279235938" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().changeTips) || ""),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.InfoCircleOutlined, {
            style: {
              color: '#20287e'
            }
          }), "\u8BF7\u5728\u5DE6\u4FA7\u52FE\u9009\u8981\u4FEE\u6539\u7684\u5B57\u6BB5"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
          onChange: onChangeTree,
          children: "\u6240\u5C5E\u90E8\u95E8"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_1___default()), {
          placement: "bottom",
          trigger: !checkTree ? 'click' : '',
          content: content,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: "jsx-3279235938" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().studentStage) || ""),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
              disabled: checkTree,
              style: {
                marginLeft: '-76px'
              },
              className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().stageInput),
              value: treeValue
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("i", {
              className: "jsx-3279235938",
              children: ["\u9009\u62E9 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CaretDownOutlined, {})]
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {
          className: "jsx-3279235938"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
          onChange: onChangePass,
          children: "\u5BC6\u7801"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
          disabled: checkPass,
          style: {
            width: 556,
            marginLeft: '50px'
          },
          onChange: e => {
            setChangePass(e.target.value);
          },
          placeholder: ""
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {
          className: "jsx-3279235938"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
          onChange: onChangeState,
          children: "\u72B6\u6001"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          defaultValue: "",
          style: {
            width: 556,
            marginLeft: '50px'
          },
          disabled: checkState,
          onChange: handleChange,
          placeholder: '激活',
          value: changeState,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Option, {
            value: "\u6FC0\u6D3B",
            className: "jsx-3279235938",
            children: "\u6FC0\u6D3B"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Option, {
            value: "\u7981\u7528",
            className: "jsx-3279235938",
            children: "\u7981\u7528"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("br", {
          className: "jsx-3279235938"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_3___default()), {
          onChange: onChangeSex,
          children: "\u6027\u522B"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_select__WEBPACK_IMPORTED_MODULE_4___default()), {
          defaultValue: "",
          style: {
            width: 556,
            marginLeft: '50px'
          },
          disabled: checkSex,
          onChange: handleChangeSex,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Option, {
            value: "\u5973",
            className: "jsx-3279235938",
            children: "\u5973"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Option, {
            value: "\u7537",
            className: "jsx-3279235938",
            children: "\u7537"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: "jsx-3279235938" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_13___default().changeBtn) || ""),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: handleOk,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.EditOutlined, {}), " \u6279\u91CF\u4FEE\u6539"]
        }, "submit"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: handleCancel,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {}), " \u53D6\u6D88"]
        }, "none")]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default()), {
      id: "3279235938",
      children: [".ant-popover,.ant-popover-placement-bottom{left:29% !important;top:345px !important;}", ".ant-popover-placement-bottom{padding-top:0;}"]
    }), unChoose && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: unChoose,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        unselected(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_unselectedAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        changeWin: changeWin,
        unselected: unselected,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {}),
        changeWinState: changeWinState,
        unselectedTitle: '请先勾选要修改的字段'
      })
    }), changeSuccess && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(AlertCommon, {
      alertStatus: changeSuccess,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: flag => {
        unselected(flag);
      },
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_unselectedAlert__WEBPACK_IMPORTED_MODULE_10__["default"], {
        unselected: unselected,
        changeWin: changeWin,
        changeWinState: changeWinState,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CheckOutlined, {}),
        unselectedTitle: `共${changeData.length}条记录被修改成功`
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ChangeAlert);

/***/ })

};
;