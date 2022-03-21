exports.id = 5883;
exports.ids = [5883];
exports.modules = {

/***/ 5883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Alert_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2540);
/* harmony import */ var _Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const Alert = props => {
  const {
    visible,
    cancel,
    dataOk,
    valueGroup
  } = props;
  const {
    0: fields,
    1: setFields
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setFields(valueGroup);
  }, [valueGroup]); // 确定

  const handleOk = () => {
    const arr = [];
    fields.forEach(item => arr.push(item));
    console.log(arr);
    dataOk(arr.join('-'));
    setFields([]);
  }; // 取消


  const handleCancel = () => {
    cancel();
    setFields([]);
  }; // 自定义icon


  const MyIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992328_za2xmv4lkw9.js' // 在 iconfont.cn 上生成

  });
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_0___default()), {
    title: "\u8BBE\u7F6E\u4E0B\u62C9\u9009\u9879\u503C",
    visible: visible,
    onOk: handleOk,
    onCancel: handleCancel,
    centered: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().box),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("table", {
        style: {
          width: '100%',
          border: '1px solid #e6e9ee'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
          style: {
            width: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
            className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tabelItem),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "\u5E8F\u53F7"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "\u9009\u9879\u503C"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("th", {
              children: "\u64CD\u4F5C"
            })]
          })
        }), fields && fields.map((item, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("tr", {
              className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tabelItem),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
                children: index + 1
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
                  value: item,
                  onChange: e => {
                    const arr = JSON.parse(JSON.stringify(fields));
                    arr[index] = e.target.value;
                    setFields(arr);
                  }
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(MyIcon, {
                  onClick: () => {
                    fields.splice(index, 1);
                    const arr = [...fields];
                    setFields(arr);
                  },
                  type: "icon-lajitong1"
                })
              })]
            }, index)
          }, index);
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().btn),
        onClick: () => {
          const arr = JSON.parse(JSON.stringify(fields));
          const obj = '';
          arr.push(obj);
          setFields(arr);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().cont),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: (_Alert_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bnv),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.PlusOutlined, {
              style: {
                float: 'left',
                fontSize: '11px',
                marginTop: '8px',
                marginLeft: '4px'
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
              children: "\u6DFB\u52A0\u4E00\u4E2A\u9009\u9879\u503C"
            })]
          })
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alert);

/***/ }),

/***/ 2540:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Alert_box__PR2zW",
	"tabelItem": "Alert_tabelItem__OgRIJ",
	"btn": "Alert_btn__hJF8k",
	"cont": "Alert_cont__T5g2O",
	"bnv": "Alert_bnv__gSZur",
	"mes_general": "Alert_mes_general__6efB4",
	"mes_text": "Alert_mes_text__rvlub",
	"mes_radio": "Alert_mes_radio__3HGv2",
	"ant-space-item": "Alert_ant-space-item__Hj6vC",
	"ant-radio": "Alert_ant-radio__QctGx"
};


/***/ })

};
;