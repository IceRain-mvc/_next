"use strict";
exports.id = 6391;
exports.ids = [6391];
exports.modules = {

/***/ 6391:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ centerText)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/exam/previewText/index.module.css
var index_module = __webpack_require__(1256);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/examSet/alltest.tsx
 // 预览模式

function PreviewModeText(id) {
  return http/* httpProvider.request */.A.request({
    url: '/paper-exam/paper/' + id,
    method: 'GET'
  });
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/exam/previewText/centerText.tsx



const {
  TextArea
} = (input_default());




const Centext = props => {
  const {
    0: textAll,
    1: setAlltext
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    // console.log(props.parderId);
    if (props.preview) {
      if (props.parderId !== -1) {
        PreviewModeText(props.parderId).then(res => {
          setAlltext(res.paperBigQuestions);
        });
      }
    }
  }, [props.parderId, props.preview]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (index_module_default()).Center,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (index_module_default()).cenInset,
      children: textAll.length !== 0 ? textAll.map(item => {
        return item.testBanks.length !== 0 ? /*#__PURE__*/jsx_runtime_.jsx("article", {
          className: (index_module_default()).radioText,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).radioTextNei,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (index_module_default()).radioTextNOne,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [item.title, /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "(\u51712\u9898,55\u5206)"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (index_module_default()).radioQuestion,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.sortId
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [item.testBanks[0].content, /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: item.title
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: item.title === '单选题' ? /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: (index_module_default()).TextXuan,
                children: item.testBanks.map(items => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: items.testId === 1 ? 'A' : items.testId === 2 ? 'B' : items.testId === 3 ? 'C' : 'D'
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: items.difficulty
                    })]
                  }, items.testId);
                })
              }) : item.title === '问答题' ? /*#__PURE__*/jsx_runtime_.jsx(TextArea, {
                rows: 4
              }) : ''
            })]
          })
        }, item.sortId) : /*#__PURE__*/jsx_runtime_.jsx("article", {
          className: (index_module_default()).radioText,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).radioTextNei,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (index_module_default()).radioTextNOne,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [item.title, /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "(\u51712\u9898,55\u5206)"
                })]
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (index_module_default()).radioQuestion,
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.sortId
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: [item.testBanks.length !== 0 ? item.testBanks[0].content : '', /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: item.title
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: item.title === '单选题' ? /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: (index_module_default()).TextXuan,
                children: item.testBanks.length !== 0 ? item.testBanks.map(items => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: items.testId === 1 ? 'A' : items.testId === 2 ? 'B' : items.testId === 3 ? 'C' : 'D'
                    }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: items.difficulty
                    })]
                  }, items.testId);
                }) : ''
              }) : item.title === '问答题' ? /*#__PURE__*/jsx_runtime_.jsx(TextArea, {
                rows: 4
              }) : ''
            })]
          })
        }, item.sortId);
      }) : ''
    })
  });
};

/* harmony default export */ const centerText = (Centext);

/***/ })

};
;