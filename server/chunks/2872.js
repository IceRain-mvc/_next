exports.id = 2872;
exports.ids = [2872,5764,6594];
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

/***/ 2872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deleteTest_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6284);
/* harmony import */ var _deleteTest_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_deleteTest_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4707);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5764);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.createFromIconfontCN)({
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
  const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_4__/* .addOperationData */ .TH)(params);
  return res;
};

const DeleteTest = props => {
  const {
    ModeFlagFun,
    nowId,
    clearFun
  } = props;
  const {
    0: delNames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('删除试题');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_deleteTest_module_scss__WEBPACK_IMPORTED_MODULE_6___default().DeleteBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(IconFont, {
        type: "icon-bangzhu"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
        children: "\u786E\u5B9A\u5220\u9664\u5417\uFF1F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: (_deleteTest_module_scss__WEBPACK_IMPORTED_MODULE_6___default().alertButton),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
        onClick: async () => {
          await ModeFlagFun(false);
          await clearFun();
          const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .DeleteOne */ .xX)(nowId);
          await props.pageTestBank({
            pageSize: props.defultNumber,
            page: props.page
          });

          if (res) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().success(`删除成功,共1条记录被删除`);

            const result = `共删除1道试题`;
            addOperationLogData({
              operationName: getlocalcache().user,
              IPAddress: getlocalcache().IP,
              operationType: delNames,
              detail: result
            });
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('对不起删除失败');
          }
        },
        children: "\u786E\u8BA4"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
        onClick: () => {
          ModeFlagFun(false);

          antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().warning('已取消删除');
        },
        children: "\u53D6\u6D88"
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeleteTest);

/***/ }),

/***/ 6284:
/***/ ((module) => {

// Exports
module.exports = {
	"DeleteBox": "deleteTest_DeleteBox__XXNWL",
	"alertButton": "deleteTest_alertButton__YOF_2"
};


/***/ })

};
;