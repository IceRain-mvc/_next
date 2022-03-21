exports.id = 1238;
exports.ids = [1238,5764,6594];
exports.modules = {

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yE": () => (/* binding */ getOperationData),
/* harmony export */   "TH": () => (/* binding */ addOperationData),
/* harmony export */   "Kn": () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取全部数据

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // 添加数据

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // 获取ip地址

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

/***/ }),

/***/ 1238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7889);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1887);
/* harmony import */ var _batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var _api_testBank_testBank__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4707);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5764);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);






const SelectCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3013)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3013)],
    modules: ["../src/components/testBank/batchUpdate/batchUpdate.tsx -> " + '@/components/form/part/select']
  }
});
const PopoverCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6780)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6780)],
    modules: ["../src/components/testBank/batchUpdate/batchUpdate.tsx -> " + '@/components/form/part/popover']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/testBank/batchUpdate/batchUpdate.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/testBank/batchUpdate/batchUpdate.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});





const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_ol17pn9f589.js'
});

const BatchUpdate = props => {
  const {
    ModeFlagFun
  } = props; // 状态
  // 选中试题的数据

  const {
    0: selectedData,
    1: setSelectedData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // 试题分类禁止开关

  const {
    0: testSortFlag,
    1: setTestSortFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 试题分数禁止开关

  const {
    0: testGradeFlag,
    1: setTestGradeFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 试题难易度禁止开关

  const {
    0: testlevelFlag,
    1: setTestlevelFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 试题分数是否符合规范

  const {
    0: errorFlag,
    1: setErrorFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 弹窗开关

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 试题分类根据树状结构显示内容

  const {
    0: treeValue,
    1: setTreeValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('试题分类'); // 修改内容组合

  const {
    0: testObj,
    1: setTestObj
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    difficultyLevel: '不限难度',
    gradeNum: 0.0,
    examTypes: '4',
    treePerson: '4'
  }); // 默认事件

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!localStorage.getItem('testBankMode') || localStorage.getItem('testBankMode') === '0') {
      // 列表模式
      setSelectedData(props.selectedData);
    } else {
      // 预览模式
      setSelectedData(props.preview_changeData);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // 获取用户名和IP地址;

  const getlocalcache = () => {
    const user = localStorage.getItem('user') || '';
    const IP = localStorage.getItem('userIp') || '';
    const obj = {
      user,
      IP
    };
    return obj;
  }; // 批量修改


  const {
    0: upDataName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('批量修改试题'); // 关闭弹窗事件

  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 树状组件函数


  const currentNode = (location, id) => {
    setTreeValue(location);
    testObj.examTypes = String(id);
    testObj.treePerson = String(id);
    setTestObj(testObj);
  }; // 弹框组件内容


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: true
  }); // 添加数据


  const addOperationLogData = async params => {
    const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_7__/* .addOperationData */ .TH)(params);
    return res;
  }; // 批量修改


  const update = async () => {
    if (testSortFlag && testGradeFlag && testlevelFlag) {
      // 无法修改弹窗
      setalertShow(true);
    } else {
      // 修改逻辑可以进行
      await ModeFlagFun(false);
      const idData = [];
      const errData = [];
      selectedData.map(item => {
        if (item.paperBigQuestions.length <= 0) {
          idData.push(item.id);
        } else {
          errData.push(item);
        }
      }); // 有和考题联动的数据

      if (errData.length > 0) {
        errData.map(item => {
          antd_lib_notification__WEBPACK_IMPORTED_MODULE_2___default().error({
            message: '修改失败',
            description: `试题: ${item.examContent}因在考题中被创建,故无法被修改`
          });
        });
      } // 有可以修改数据


      if (idData.length > 0) {
        const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_5__/* .BatchUpdateFun */ .fP)({
          selectedIdData: idData,
          testObj
        });
        await props.pageTestBank({
          pageSize: props.defultNumber,
          page: props.page
        });

        if (res) {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(`修改成功,共${idData.length}条记录被修改`);

          const result = `共${idData.length}条记录被修改成功`;
          addOperationLogData({
            operationName: getlocalcache().user,
            IPAddress: getlocalcache().IP,
            operationType: upDataName,
            detail: result
          });
        } else {
          antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().error('对不起修改失败');
        }
      } else {
        // 没有可以修改数据
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().error('对不起,没有能修改的数据');
      }
    }
  }; // 弹框组件按钮内容


  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputBox),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
      type: "text",
      readOnly: true,
      value: treeValue
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
        children: "\u9009\u62E9"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CaretDownOutlined, {})]
    })]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [selectedData.length !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().batchUpdateBox),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        children: "\u8BF7\u5728\u5DE6\u4FA7\u52FE\u9009\u8981\u4FEE\u6539\u7684\u5B57\u6BB5"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contentBox),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().partBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "checkbox",
            onClick: () => {
              setTestSortFlag(!testSortFlag);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: "\u8BD5\u9898\u5206\u7C7B"
          }), testSortFlag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputBox),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
                className: testSortFlag && (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().disabled),
                disabled: testSortFlag,
                type: "text",
                value: treeValue === '' ? '试题分类' : treeValue
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  children: "\u9009\u62E9"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.CaretDownOutlined, {})]
              })]
            })
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(PopoverCommon, {
            type: "FullBox",
            placement: "bottomLeft",
            title: title,
            isButton: false,
            children: content
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().partBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "checkbox",
            onClick: () => {
              setTestGradeFlag(!testGradeFlag);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: "\u8BD5\u9898\u5206\u6570"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: `${(_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().inputBox)} ${(_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().gradeInputBox)}`,
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
              className: testGradeFlag ? (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().disabled) : '',
              type: "text",
              disabled: testGradeFlag,
              defaultValue: '0.00',
              onBlur: e => {
                const flag = /^([0-9]|[0-9]\.)\d*/.test(e.target.value);
                setErrorFlag(flag);

                if (flag) {
                  testObj.gradeNum = +e.target.value;
                  setTestObj(testObj);
                }
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
              children: "\u5206"
            })]
          })]
        }), !errorFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().partBox),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_0___default()), {
            style: {
              width: '70%',
              textAlign: 'center',
              float: 'right'
            },
            message: "\u8BF7\u8F93\u5165\u6570\u5B57",
            type: "error"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().partBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("input", {
            type: "checkbox",
            onClick: () => {
              setTestlevelFlag(!testlevelFlag);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: "\u8BD5\u9898\u96BE\u6613\u5EA6"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SelectCommon, {
            disabled: testlevelFlag,
            style: {
              width: '70%'
            },
            data: ['不限难度', '容易', '中等', '困难'],
            defalutValue: "\u4E0D\u9650\u96BE\u5EA6",
            onChange: value => {
              testObj.difficultyLevel = value;
              setTestObj(testObj);
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().alertButton),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          onClick: update,
          children: "\u6279\u91CF\u4FEE\u6539"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          onClick: () => {
            ModeFlagFun(false);

            antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().warning('已取消修改');
          },
          children: "\u53D6\u6D88"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().nullBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
          type: "icon-chahao"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u8BF7\u5148\u52FE\u9009\u8981\u4FEE\u6539\u7684\u8BD5\u9898"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().alertButton),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
          onClick: () => {
            ModeFlagFun(false);
          },
          children: "\u786E\u8BA4"
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().nullBox),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
            type: "icon-chahao"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: "\u8BF7\u5148\u52FE\u9009\u8981\u4FEE\u6539\u7684\u5B57\u6BB5"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_batchUpdate_module_scss__WEBPACK_IMPORTED_MODULE_9___default().alertButton),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
            onClick: async () => {
              changeAlertFlag(false);
            },
            children: "\u786E\u8BA4"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchUpdate);

/***/ }),

/***/ 1887:
/***/ ((module) => {

// Exports
module.exports = {
	"batchUpdateBox": "batchUpdate_batchUpdateBox__G76Ki",
	"contentBox": "batchUpdate_contentBox__r03CK",
	"partBox": "batchUpdate_partBox__iH2QH",
	"inputBox": "batchUpdate_inputBox__Nq2ap",
	"disabled": "batchUpdate_disabled__O32RA",
	"alertButton": "batchUpdate_alertButton__3GOWZ",
	"nullBox": "batchUpdate_nullBox__IGSY3"
};


/***/ })

};
;