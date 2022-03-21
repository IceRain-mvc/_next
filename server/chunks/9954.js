"use strict";
exports.id = 9954;
exports.ids = [9954];
exports.modules = {

/***/ 9954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4503);
/* harmony import */ var antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1653);
/* harmony import */ var _textset_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_textset_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3984);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);








const TextBlock = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(() => __webpack_require__.e(/* import() */ 6140).then(__webpack_require__.bind(__webpack_require__, 6140)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6140)],
    modules: ["../src/components/exam/textSet/textInput.tsx -> " + './myTiblock']
  }
});
const MarkAlert = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_6__["default"])(() => __webpack_require__.e(/* import() */ 9388).then(__webpack_require__.bind(__webpack_require__, 9388)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9388)],
    modules: ["../src/components/exam/textSet/textInput.tsx -> " + './markalet']
  }
});





const BubbleBounced = (fun, durecon, content, myChange, myArray, NumberChan, inputDefatvalue, bijiao) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    id: "texttime",
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_4___default()), {
      getPopupContainer: () => document.getElementById('texttime'),
      onConfirm: () => {
        fun();
      },
      placement: durecon,
      title: () => {
        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().myhint),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default().Group), {
            style: {
              width: '100%'
            },
            defaultValue: content,
            onChange: myChange,
            children: myArray.length !== 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
              children: myArray.map(item => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
                    value: item.answerTimeId,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                      children: [item.answerTimeRequire.slice(0, item.answerTimeRequire.indexOf('i')), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default()), {
                        min: 0,
                        defaultValue: inputDefatvalue,
                        style: {
                          width: '55px',
                          margin: '5px'
                        },
                        onChange: NumberChan
                      }), item.answerTimeRequire.slice(item.answerTimeRequire.indexOf('t') + 1)]
                    })
                  })
                }, item.answerTimeId);
              })
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_5___default()), {
              value: 1,
              children: ["\u6BCF\u5929\u9650\u7B54", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default()), {
                min: 0,
                max: bijiao,
                defaultValue: inputDefatvalue,
                onChange: NumberChan,
                style: {
                  width: '60px',
                  margin: '0 5px'
                }
              }), "\u6B21\uFF08\u8BF7\u6839\u636E\"\u53EF\u8003\u6B21\u6570\"\u5408\u7406\u8BBE\u7F6E\uFF09"]
            })
          })
        });
      },
      okText: "\u4FDD\u5B58\u8BBE\u7F6E",
      cancelText: "",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
        className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().addSet),
        children: "\u66F4\u591A\u8BBE\u7F6E"
      })
    })
  });
};

const TextInput = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().text_row),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("label", {
      className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().text_leftRow),
      htmlFor: props.labelCon,
      children: [props.labelCon, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TextBlock, {
        textItem: props.miTiblockCon,
        type: props.miTiblockLabel,
        fang: props.miTiblockdirection
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().text_row_right),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        children: [props.inputType === '自定义评语' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_2___default()), {
          style: {
            width: props.inputWidth,
            margin: props.inputMargin
          },
          onBlur: props.inputNumOnblur,
          defaultValue: props.defaultValue,
          onChange: props.inputNumChange
        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input_number__WEBPACK_IMPORTED_MODULE_1___default()), {
          min: 1,
          style: {
            width: props.inputWidth,
            margin: props.inputMargin
          },
          onBlur: props.inputNumOnblur,
          defaultValue: props.defaultValue,
          onChange: props.inputNumChange
        }), props.hintflag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
          style: {
            color: '#eb615f'
          },
          children: props.hintContent
        }) : '', props.inputType === '自定义评语' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_3___default()), {
          width: 800,
          title: "\u81EA\u5B9A\u4E49\u8BC4\u8BED\u8BBE\u7F6E",
          visible: props.vidible,
          onCancel: props.quhideModal,
          footer: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().bottomniu),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().myokniu),
              onClick: props.hideModal,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CalendarOutlined, {}), "\u4FDD\u5B58"]
            }, "confirm"), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
              className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().noniu),
              onClick: props.quhideModal,
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CloseOutlined, {}), "\u5173\u95ED"]
            }, "cancel")]
          }, 2)],
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(MarkAlert, {
            markText: props.menuObject[0],
            markNojig: props.menuObject[1],
            paddhref: props.menuObject[2],
            nopass: props.menuObject[3],
            marjTextChange: props.marjTextChange,
            paddhrefChange: props.paddhrefChange,
            markNojigChange: props.markNojigChange,
            nopassChange: props.nopassChange,
            hrefInput: props.hrefInput,
            noHrefDom: props.noHrefDom
          })
        }) : BubbleBounced(props.onConfirmBubb, props.onCinfirmDirecon, props.bubbdefaultValue, props.bubbChange, props.bubbApplyCon, props.NumberChan, props.inputDefatvalue, props.bijiao), props.inputType === '自定义评语' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
          onClick: props.aEvent,
          children: props.aLabelCon
        }) : '']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        className: (_textset_module_css__WEBPACK_IMPORTED_MODULE_9___default().myallSum),
        children: [props.spanexplain, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
          ref: props.spanRef,
          children: [props.spanLabelCon, " "]
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextInput);

/***/ })

};
;