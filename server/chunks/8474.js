exports.id = 8474;
exports.ids = [8474];
exports.modules = {

/***/ 8474:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9348);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3526);
/* harmony import */ var antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(780);
/* harmony import */ var _Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










const Alert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(() => __webpack_require__.e(/* import() */ 5883).then(__webpack_require__.bind(__webpack_require__, 5883)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5883)],
    modules: ["../src/components/Createcrew/Tabres/index.tsx -> " + '../Alert/index']
  }
});

const Tabres = props => {
  const {
    setFields,
    fields
  } = props;
  const {
    Option
  } = (antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default());
  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);
  const {
    0: values,
    1: setValues
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: username,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 自定义icon

  const MyIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992328_za2xmv4lkw9.js' // 在 iconfont.cn 上生成

  });

  const list = index => {
    setIsModalVisible(true);
    setNum(index);

    if (fields[index].optionsValue) {
      // @ts-ignore
      setValues([...fields[index].optionsValue]);
    }
  }; // 关闭弹框


  const modalCancel = () => {
    setIsModalVisible(false);
  }; // 弹窗确定


  const modalOk = arr => {
    console.log(fields);
    const arrList = [...fields]; // console.log(arrList);

    arrList[num].optionsValue = arr;
    fields[num].optionsValue = arr.split('-');
    setFields(arrList);
    setIsModalVisible(false);
  };

  const triggerNode = triggerNode => {
    return triggerNode.parentNode || document.body;
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().box),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Alert, {
        visible: isModalVisible,
        cancel: modalCancel,
        dataOk: modalOk,
        valueGroup: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
      style: {
        width: '100%',
        border: '1px solid #e6e9ee'
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("thead", {
        style: {
          width: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
          className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabelItems),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("th", {
            children: ["\u5B57\u6BB5\u540D\u79F0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
              overlayClassName: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltipMain),
              color: "white",
              placement: "right",
              title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                style: {
                  color: 'black',
                  padding: '6px 10px 0px'
                },
                children: "\u8003\u751F\u53C2\u52A0\u8003\u8BD5\u6216\u7EC3\u4E60\u65F6\uFF0C\u586B\u5199\u4FE1\u606F\u65F6\u770B\u5230\u7684\u540D\u79F0"
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().examTypeIcon),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionCircleOutlined, {
                  style: {
                    fontSize: 10,
                    marginLeft: 3
                  }
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("th", {
            children: ["\u683C\u5F0F\u8981\u6C42", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
              overlayClassName: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltipMain),
              color: "white",
              placement: "right",
              title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                style: {
                  color: 'black',
                  padding: '6px 10px 0px'
                },
                children: "\u9A8C\u8BC1\u8003\u751F\u586B\u5199\u7684\u4FE1\u606F\u662F\u5426\u7B26\u5408\u683C\u5F0F\uFF0C\u5982\u586B\u5199\u683C\u5F0F\u662F:\u624B\u673A\u53F7\u7801\uFF0C\u8003\u751F\u5FC5\u987B\u586B\u5199\u2014\u4E2A\u5408\u6CD5\u7684\u624B\u673A\u53F7\u7801\u624D\u53EF\u4EE5\u8FDB\u5165\u8003\u8BD5\u6216\u7EC3\u4E60\u3002"
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().examTypeIcon),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionCircleOutlined, {
                  style: {
                    fontSize: 10,
                    marginLeft: 3
                  }
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("th", {
            children: ["\u662F\u5426\u5FC5\u586B", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_2___default()), {
              overlayClassName: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tooltipMain),
              color: "white",
              placement: "right",
              title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                style: {
                  color: 'black',
                  padding: '6px 10px 0px'
                },
                children: "\u52FE\u9009\u540E\uFF0C\u8003\u751F\u5FC5\u987B\u586B\u5199\u8FD9\u4E2A\u9879\u7684\u4FE1\u606F\u624D\u53EF\u4EE5\u8FDB\u5165\u8003\u8BD5\u6216\u7EC3\u4E60"
              }),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().examTypeIcon),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionCircleOutlined, {
                  style: {
                    fontSize: 10,
                    marginLeft: 3
                  }
                })
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
            children: "\u64CD\u4F5C"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("tbody", {
        style: {
          width: '100%'
        },
        children: fields.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
            className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tabelItem),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
                placeholder: '请输入显示名称，如姓名、手机号等',
                disabled: index === 0,
                value: item.titleName,
                onChange: e => {
                  const arr = JSON.parse(JSON.stringify(fields));
                  arr[index].titleName = e.target.value;
                  setFields(arr);
                  setUserName(e.target.value);
                }
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_select__WEBPACK_IMPORTED_MODULE_3___default()), {
                disabled: index === 0,
                getPopupContainer: triggerNode,
                value: item.formatRequire,
                style: {
                  width: 120
                },
                onChange: val => {
                  const arr = JSON.parse(JSON.stringify(fields));
                  const findArr = arr[index].format.filter(items => {
                    return items.value === val;
                  });
                  arr[index].formatRequire = findArr[0].name;
                  setFields([...arr]);
                },
                children: item.format.map((items, indexs) => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Option, {
                    value: items.value,
                    children: items.name
                  }, indexs);
                })
              }), item.formatRequire === '选择框' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().optionValSpan),
                onClick: () => {
                  list(index);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.PlusCircleOutlined, {}), "\u9009\u9879\u503C"]
              }) : '']
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
                checked: item.mandatory === 1,
                disabled: index === 0,
                onChange: e => {
                  const arr = JSON.parse(JSON.stringify(fields));
                  arr[index].mandatory = e.target.checked === true ? 1 : 0;
                  setFields(arr);
                }
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
              children: index === 0 ? '' : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MyIcon, {
                onClick: () => {
                  fields.splice(index, 1);
                  const arr = [...fields];
                  setFields(arr);
                },
                type: "icon-lajitong1"
              })
            })]
          }, index);
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().btn),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cont),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bnv),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.PlusOutlined, {
            style: {
              float: 'left',
              fontSize: '11px',
              marginTop: '7px',
              marginLeft: '4px'
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().bnvSpan),
            onClick: () => {
              const arr = JSON.parse(JSON.stringify(fields));
              const obj = {
                titleName: username,
                format: [{
                  value: 'text',
                  name: '文本'
                }, {
                  value: 'select',
                  name: '选择框'
                }, {
                  value: 'date',
                  name: '日期'
                }, {
                  value: 'phone',
                  name: '手机号码'
                }, {
                  value: 'emain',
                  name: '邮箱'
                }, {
                  value: 'identity',
                  name: '身份证'
                }, {
                  value: 'integer',
                  name: '整数'
                }, {
                  value: 'decimals',
                  name: '小数'
                }],
                formatRequire: '文本',
                mandatory: 0 // 0是false 1是true

              };
              arr.push(obj);
              setFields(arr);
            },
            children: "\u6DFB\u52A0\u5B57\u6BB5"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_Tabres_module_scss__WEBPACK_IMPORTED_MODULE_8___default().yexdsh),
          children: "\u9884\u89C8"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabres);

/***/ }),

/***/ 780:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "Tabres_box__7MnX1",
	"tabelItems": "Tabres_tabelItems__UV_eY",
	"tabelItem": "Tabres_tabelItem__Fo2XF",
	"btn": "Tabres_btn__Nzfzd",
	"cont": "Tabres_cont__vwRSZ",
	"bnv": "Tabres_bnv__fuMp3",
	"bnvSpan": "Tabres_bnvSpan__yopRH",
	"yexdsh": "Tabres_yexdsh__TDaUR",
	"mes_general": "Tabres_mes_general__fgjvu",
	"mes_text": "Tabres_mes_text__1lEye",
	"mes_radio": "Tabres_mes_radio__MEAcy",
	"ant-space-item": "Tabres_ant-space-item__Pd7uY",
	"ant-radio": "Tabres_ant-radio__aRz5X",
	"tooltipMain": "Tabres_tooltipMain__rvkcE",
	"optionValSpan": "Tabres_optionValSpan__YM_XR"
};


/***/ })

};
;