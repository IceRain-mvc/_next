exports.id = 4383;
exports.ids = [4383,5764,6594];
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

/***/ 4383:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8995);
/* harmony import */ var _batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_testBank_testBank__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4707);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5764);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_w3q7g6v6x8.js'
}); // 获取用户名和IP地址;

const getlocalcache = () => {
  const user = localStorage.getItem('user') || '';
  const IP = localStorage.getItem('userIp') || '';
  const obj = {
    user,
    IP
  };
  return obj;
}; // 添加数据


const addOperationLogData = async params => {
  const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_5__/* .addOperationData */ .TH)(params);
  return res;
};

const BatchDelete = props => {
  // 选中试题的数据
  const {
    0: selectedIdData,
    1: setSelectedIdData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: delName,
    1: setDelName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('批量删除试题');
  const {
    ModeFlagFun,
    clearFun,
    loading,
    pageTestBank,
    Test
  } = props;
  const {
    0: idArr,
    1: setIdArr
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // 筛选出可以删除的id

  const getDeleteIdArr = (selectedIdData, Test) => {
    const arr = [];
    selectedIdData.forEach(item => {
      const flag = Test.some(it => {
        return item === it.id;
      });

      if (!flag) {
        arr.push(item);
      }
    });
    setIdArr(arr);
  }; // 默认事件


  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (!localStorage.getItem('testBankMode') || localStorage.getItem('testBankMode') === '0') {
      // 列表模式
      setSelectedIdData(props.selectedIdData);
    } else {
      // 预览模式
      setSelectedIdData(props.preview_selectedIdData);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    getDeleteIdArr(selectedIdData, Test);
  }, [selectedIdData, Test]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
    children: selectedIdData.length !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7___default().batchDeleteBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconFont, {
          type: "icon-bangzhu"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alertButton),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: async () => {
            await ModeFlagFun(false);
            await clearFun();
            await loading(true);
            const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_4__/* .BatchDeleteFun */ .I0)(idArr);
            await pageTestBank({
              pageSize: props.defultNumber,
              page: props.page
            });

            if (res) {
              setDelName('批量删除试题');
              const result = `删除成功,共${idArr.length}条记录被删除`; // 不能删除提示

              Test.forEach(item => {
                antd_lib_notification__WEBPACK_IMPORTED_MODULE_1___default().warning({
                  message: '提示',
                  description: `试卷中已存在试题：${item.examContent}，不能删除试题`
                });
              });
              await loading(false);

              antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().success(result);

              addOperationLogData({
                operationName: getlocalcache().user,
                IPAddress: getlocalcache().IP,
                operationType: delName,
                detail: result
              });
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('对不起删除失败');
            }
          },
          children: "\u786E\u8BA4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => {
            ModeFlagFun(false);

            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().warning('已取消删除');
          },
          children: "\u53D6\u6D88"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7___default().nullBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(IconFont, {
          type: "icon-chahao"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: "\u8BF7\u5148\u52FE\u9009\u8981\u5220\u9664\u7684\u8BD5\u9898"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_batchDelete_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alertButton),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => {
            ModeFlagFun(false);
          },
          children: "\u786E\u8BA4"
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchDelete);

/***/ }),

/***/ 8995:
/***/ ((module) => {

// Exports
module.exports = {
	"batchDeleteBox": "batchDelete_batchDeleteBox__4o8GG",
	"alertButton": "batchDelete_alertButton__nbeGS",
	"nullBox": "batchDelete_nullBox__CSamT"
};


/***/ })

};
;