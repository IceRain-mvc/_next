exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_studentManage_students__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7363);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(555);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);










const DelAlert = props => {
  const {
    0: deldDouble,
    1: setDeldDouble
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // const [changeDelLength, setchangeDelLength] = useState(0);

  const {
    batchDel,
    changeData,
    id,
    delList,
    delCancelList
  } = props; // 第二个弹窗

  const delOk = async () => {
    delList(false);
    setDeldDouble(true);
    const res = await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_3__/* .batchDeles */ .es)({
      id
    }); // setchangeDelLength(changeData.length);

    antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(`删除成功共${changeData.length}条记录被删除`);

    changeData.length = 0;
  };

  const delCancel = () => {
    delCancelList(false);
  }; // 第一个弹窗


  const doubleOk = async () => {
    // 点击确认删除选中
    delList(true);
    delCancelList(true);
    setDeldDouble(true);
  };

  const doubleCancel = () => {
    delCancelList(false);
    setDeldDouble(false);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "jsx-1695674805",
    children: [!deldDouble ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().del) || ""),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().delicon) || ""),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionOutlined, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().tips) || ""),
        children: ["\u6B64\u64CD\u4F5C\u5C06\u5220\u9664\u9009\u4E2D\u8D26\u53F7\u53CA\u8D26\u53F7\u5173\u8054", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("br", {
          className: "jsx-1695674805"
        }), "\u7684\u4E1A\u52A1\u6570\u636E(\u5982\u6210\u7EE9\u3001\u7B54\u5377\u3001\u9519\u9898\u7B49\u8BB0\u5F55)"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: () => {
            doubleOk();
          },
          children: "\u786E\u8BA4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: () => {
            doubleCancel();
          },
          children: "\u53D6\u6D88"
        })]
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().del) || ""),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().delicons) || ""),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().double) || ""),
        children: "\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u5220\u9664\u9009\u4E2D\u8D26\u53F7\u5417?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "jsx-1695674805" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: () => {
            delOk();
          },
          children: "\u786E\u8BA4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
          type: "primary",
          onClick: () => {
            delCancel();
          },
          children: "\u53D6\u6D88"
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "1695674805",
      children: [".batch_del__hUK7Y .ant-modal-content{width:70%;}"]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DelAlert);

/***/ }),

/***/ 555:
/***/ ((module) => {

// Exports
module.exports = {
	"tips": "batch_tips__Da4t5",
	"double": "batch_double__1av25",
	"delicon": "batch_delicon__ZrVej",
	"delicons": "batch_delicons__jdPc2",
	"batchChange": "batch_batchChange__s1gtV",
	"batchChange_content": "batch_batchChange_content__votyx",
	"changeBtn": "batch_changeBtn__OxuEp",
	"del": "batch_del__hUK7Y",
	"btn": "batch_btn__HHZo3",
	"TreeType": "batch_TreeType__dPgqY",
	"TreeType_test__A_b8T": "batch_TreeType_test__A_b8T__VGzqW",
	"studentStage": "batch_studentStage__o9aF_",
	"content": "batch_content__AFRkU",
	"delIcon": "batch_delIcon__KxH4a",
	"untips": "batch_untips__nGUck",
	"bacthChangeWin": "batch_bacthChangeWin__y4F12"
};


/***/ })

};
;