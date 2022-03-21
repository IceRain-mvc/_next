exports.id = 3094;
exports.ids = [3094];
exports.modules = {

/***/ 3094:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6190);
/* harmony import */ var antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _utils_regular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2877);
/* harmony import */ var _api_management_childAdmin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4075);
/* harmony import */ var _addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6521);
/* harmony import */ var _addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);







function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const {
  Option
} = (antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default());

const AddAdmin = props => {
  const {
    close,
    getChildAdminData,
    editId,
    setEditId,
    page,
    pageSize
  } = props;

  const [form] = antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().useForm();

  const {
    0: msg,
    1: setMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    email: '',
    name: '',
    password: '',
    phoneNum: '',
    status: 'active'
  }); // 添加的信息

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);

  const handleChange = value => {
    setMsg(_objectSpread(_objectSpread({}, msg), {}, {
      status: value
    }));
  };

  const onFinish = async () => {
    // console.log('Success:', values);
    let res = null;

    if (editId) {
      // 编辑
      delete msg.password;
      res = await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_7__/* .editChildAdmin */ .jA)(_objectSpread({
        id: editId
      }, msg));

      antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().success(res.msg);

      setEditId(null);
      getChildAdminData({
        page,
        pageSize
      });
      close(false); // 关闭
    } else {
      res = await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_7__/* .addChildAdmin */ .$t)(msg);

      if (res.code === '01') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().success('添加成功！');

        getChildAdminData({
          page,
          pageSize
        });
        close(false); // 关闭
      } else if (res.code === '03') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().error(res.msg);
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().error('此用户已存在！');
      }
    }
  };

  const onFinishFailed = () => {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_3___default().error('提交失败！存在格式错误或者存在未填项');
  };

  const findOne = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async editId => {
    if (editId) {
      // id存在 编辑
      const res = await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_7__/* .getChildAdminOne */ .mO)({
        id: editId
      });
      setMsg({
        email: res.email,
        name: res.name,
        password: res.password,
        phoneNum: res.phoneNum,
        status: res.status
      });
      form.resetFields();
      setLoading(false);
    } else {
      // 添加 自动关闭loading
      setLoading(false);
    }
  }, [form]);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    findOne(editId);
  }, [editId, findOne]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: (_addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fromBox),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
      spinning: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default()), {
        name: "basic",
        labelCol: {
          span: 6
        },
        form: form,
        wrapperCol: {
          span: 14
        },
        onFinish: onFinish,
        onFinishFailed: onFinishFailed,
        initialValues: {
          email: msg.email,
          name: msg.name,
          status: msg.status,
          phoneNum: msg.phoneNum
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          label: "\u90AE\u7BB1",
          name: "email",
          validateTrigger: "onBlur",
          rules: [{
            required: true,
            pattern: _utils_regular__WEBPACK_IMPORTED_MODULE_10__/* .eMal */ .EQ,
            message: '邮箱格式错误！'
          }],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
            placeholder: "\u8BF7\u8F93\u5165\u90AE\u7BB1\u53F7",
            onChange: e => {
              setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                email: e.target.value
              }));
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          label: "\u7528\u6237",
          name: "name",
          rules: [{
            required: true,
            pattern: new RegExp(/^[A-Za-z0-9_\u4e00-\u9fa5]{3,12}$/),
            message: '用户名应为3-12位字母、数字、汉字！'
          }],
          validateTrigger: "onBlur",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
            placeholder: "\u8BF7\u8F93\u5165\u7528\u6237\u540D",
            onChange: e => {
              setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                name: e.target.value
              }));
            }
          })
        }), !editId ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          label: "\u5BC6\u7801",
          name: "password",
          rules: [{
            required: true,
            pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
            message: '密码格式错误！8-16位数字、字母混合'
          }],
          validateTrigger: "onBlur",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default().Password), {
            placeholder: "\u8BF7\u8F93\u5165\u5BC6\u7801",
            onChange: e => {
              setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                password: e.target.value
              }));
            }
          })
        }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          name: "status",
          label: "\u72B6\u6001",
          hasFeedback: true,
          rules: [{
            required: true,
            message: '未选择状态！'
          }],
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_select__WEBPACK_IMPORTED_MODULE_5___default()), {
            onChange: handleChange,
            placeholder: "\u8BF7\u9009\u62E9\u72B6\u6001",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Option, {
              value: "active",
              children: "\u6FC0\u6D3B"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Option, {
              value: "locked",
              children: "\u7981\u7528"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          label: "\u624B\u673A\u53F7",
          name: "phoneNum",
          rules: [{
            required: false,
            pattern: _utils_regular__WEBPACK_IMPORTED_MODULE_10__/* .phone */ .m7,
            message: '请输入11位手机号！'
          }],
          validateTrigger: "onBlur",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
            placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7",
            value: msg.phoneNum,
            onChange: e => {
              setMsg(_objectSpread(_objectSpread({}, msg), {}, {
                phoneNum: e.target.value
              }));
            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_form__WEBPACK_IMPORTED_MODULE_4___default().Item), {
          wrapperCol: {
            span: 12,
            offset: 6
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().btnBox),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              className: (_addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().submit),
              type: "primary",
              htmlType: "submit",
              children: "\u786E\u5B9A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              className: (_addAdmin_module_scss__WEBPACK_IMPORTED_MODULE_9___default().close),
              onClick: () => {
                setEditId(null);
                close(false); // 关闭
              },
              children: "\u53D6\u6D88"
            })]
          })
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddAdmin);

/***/ }),

/***/ 2877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "m7": () => (/* binding */ phone),
/* harmony export */   "EQ": () => (/* binding */ eMal),
/* harmony export */   "aY": () => (/* binding */ idCard),
/* harmony export */   "OW": () => (/* binding */ blank)
/* harmony export */ });
const phone = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
const eMal = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
const idCard = /^[1-9]\d{5}(18|19|20|(3\d))\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
const blank = /\s/;

/***/ }),

/***/ 6521:
/***/ ((module) => {

// Exports
module.exports = {
	"fromBox": "addAdmin_fromBox__ohhuK",
	"btnBox": "addAdmin_btnBox__g_KIN",
	"submit": "addAdmin_submit__LoFwK",
	"close": "addAdmin_close__mG8z5"
};


/***/ })

};
;