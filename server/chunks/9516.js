"use strict";
exports.id = 9516;
exports.ids = [9516];
exports.modules = {

/***/ 9516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1653);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_textset_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8518);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4503);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const Atooltip = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 8337).then(__webpack_require__.bind(__webpack_require__, 8337)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8337)],
    modules: ["../src/components/exam/textSet/textCheckBox.tsx -> " + './aTooltip']
  }
});

const hideAtitle = (str, hrefs) => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      children: str.slice(0, str.indexOf('a'))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
      href: hrefs,
      target: "_blank",
      rel: "noreferrer",
      children: str.slice(str.indexOf('a') + 1, str.indexOf('a', str.indexOf('a') + 1))
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
      children: str.slice(str.lastIndexOf('a') + 1)
    })]
  });
};

const TextCheckBox = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_row),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("label", {
      className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_leftRow),
      htmlFor: props.labelCon,
      children: props.labelCon
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
      className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_6___default().text_row_right_noflex),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default().Group), {
        defaultValue: props.checkBoxDefaultValue,
        style: {
          width: '100%'
        },
        onChange: props.checkChange,
        children: props.checkArray.map((item, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            children: props.chechckType === 'examConig' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
              span: item.id === 4 ? '26' : '20',
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default()), {
                onChange: props.noALabel,
                value: item.id,
                children: item.title.indexOf('a') === -1 ? item.title : hideAtitle(item.title, 'https://i.kaoshiyun.com.cn/v5/login/40037003a003c0034003b0036')
              })
            }) : props.chechckType === 'antiCheat' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
              span: 8,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default()), {
                value: item.antiCheatingId,
                children: item.antiCheatingTitle.indexOf('input') !== -1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  id: "redacts",
                  children: item.antiCheatingTitle.indexOf('a') !== -1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      children: item.antiCheatingTitle.slice(0, item.antiCheatingTitle.indexOf('a')).slice(0, item.antiCheatingTitle.slice(0, item.antiCheatingTitle.indexOf('a')).indexOf('i'))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.everyDefaultValue[4],
                      onChange: props.inputOneNumchange
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Atooltip, {
                      somonConfirm: props.confirmInput,
                      someItem: item.antiCheatingTitle,
                      type: "",
                      defaultValue: props.inputNumberDefalut,
                      inputNumbervalue: '',
                      inputNumberchange: props.inputNumberNei
                    }), item.antiCheatingTitle.slice(item.antiCheatingTitle.indexOf('a', item.antiCheatingTitle.indexOf('a') + 1) + 1)]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      children: item.antiCheatingTitle.slice(0, item.antiCheatingTitle.indexOf('i'))
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.everyDefaultValue[3],
                      onChange: props.inputTwoNumchange
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                      children: item.antiCheatingTitle.slice(item.antiCheatingTitle.indexOf('t') + 1)
                    })]
                  })
                }) : item.antiCheatingTitle
              }), item.antiCheatingId === 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  width: '100%',
                  marginLeft: '30px'
                },
                children: [props.oneFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    children: ["\u53EF\u63D0\u524D", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.everyDefaultValue[0],
                      style: {
                        width: '60px',
                        margin: '0 5px'
                      },
                      onChange: props.oneChange
                    }), "\u5206\u949F\u8FDB\u884C\u4EBA\u8138\u8EAB\u4EFD\u8BA4\u8BC1"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    children: ["\u6BCF\u4E2A\u8003\u751F\u9650", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.everyDefaultValue[1],
                      style: {
                        width: '60px',
                        margin: '2px 5px'
                      },
                      onChange: props.twoChange
                    }), "\u6B21\u4EBA\u8138\u8BA4\u8BC1\u673A\u4F1A"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    style: {
                      fontSize: '11px',
                      color: 'gray'
                    },
                    children: "\u8D85\u8FC7\u8BA4\u8BC1\u6B21\u6570\uFF0C\u7BA1\u7406\u5458\u53EF\u5728\u540E\u53F0\u4EBA\u5DE5\u5BA1\u6838"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    children: ["\u8BA4\u8BC1\u6B21\u6570\u7528\u5B8C\u65F6\uFF0C\u8003\u751F\u53EF\u901A\u8FC7", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.everyDefaultValue[2],
                      style: {
                        width: '120px',
                        margin: '2px 5px'
                      },
                      placeholder: "\u8BF7\u8F93\u5165\u624B\u673A\u6216\u7535\u8BDD",
                      onBlur: props.threeChange
                    }), "\u8054\u7CFB\u4EBA\u5DE5\u540E\u53F0\u5BA1\u6838"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                    style: {
                      fontSize: '11px',
                      color: 'orange'
                    },
                    children: "\u6E29\u99A8\u63D0\u793A\uFF1A\u6B64\u529F\u80FD\u4E0E\u516C\u5B89\u5E93\u8FDB\u884C\u4EBA\u8138\u5B9E\u540D\u8BA4\u8BC1\uFF0C\u8003\u751F\u6BCF\u9A8C\u8BC1\u4E00\u6B21\u4EBA\u8138\u8D39\u75285\u5143"
                  })]
                }) : '', ' ']
              }) : item.antiCheatingId === 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  width: '100%',
                  marginLeft: '30px'
                },
                children: props.twoFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    children: ["\u8003\u751F\u8FDB\u5165\u7B54\u9898\u754C\u9762\u540E\uFF0C\u6BCF\u9694", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_3___default()), {
                      min: 0,
                      defaultValue: props.twoFlagDefault,
                      style: {
                        width: '60px',
                        margin: '0 5px'
                      },
                      onChange: props.tworFlagChange
                    }), "\u5206\u949F\u5B9A\u65F6\u6293\u62CD\u56FE\u7247"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                    style: {
                      fontSize: '11px',
                      color: 'gray'
                    },
                    children: "\u7535\u8111\u7AEF\u81EA\u52A8\u6293\u62CD\uFF0C\u624B\u673A\u7AEF\u5F39\u51FA\u62CD\u7167\u63D0\u9192\uFF0C\u4E3A\u4E0D\u5F71\u54CD\u8003\u751F\u7B54\u9898\uFF0C\u8BF7\u5408\u7406\u8BBE\u7F6E\u65F6\u95F4"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                    style: {
                      fontSize: '11px',
                      color: 'orange'
                    },
                    children: "\u6E29\u99A8\u63D0\u793A\uFF1A\u6B64\u529F\u80FD\u5C06\u5728\u8003\u8BD5\u65F6\u89C6\u9891\u6293\u62CD\u76D1\u8003\uFF0C\u8003\u751F\u6BCF\u53C2\u52A0\u4E00\u6B21\u7B54\u9898\u8D39\u75281\u5143"
                  })]
                }) : ''
              }) : '']
            }, item.antiCheatingId) : props.chechckType === 'questConfig' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_col__WEBPACK_IMPORTED_MODULE_2___default()), {
              span: 18,
              children: item.questionConfigTitle.indexOf('a') === -1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default()), {
                value: item.id,
                children: item.questionConfigTitle
              }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_1___default()), {
                value: item.id,
                children: [item.questionConfigTitle.slice(0, item.questionConfigTitle.indexOf('a')), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  id: "redactes",
                  style: {
                    float: 'right'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(Atooltip, {
                    somonConfirm: props.regressOk,
                    someItem: item.questionConfigTitle,
                    type: 'questConfig',
                    defaultValue: props.requireConfigValue[0],
                    radioChange: props.requireRadioChange,
                    inputNumbervalue: props.requireConfigValue[1],
                    inputNumberchange: props.requireInputbaifen,
                    inputNumberBlur: props.requirescoreBlue
                  })
                })]
              })
            }, item.id) : ''
          }, index);
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextCheckBox);

/***/ })

};
;