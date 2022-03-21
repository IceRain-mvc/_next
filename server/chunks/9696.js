exports.id = 9696;
exports.ids = [9696];
exports.modules = {

/***/ 9696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4663);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var _previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5790);
/* harmony import */ var _previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);






const CommonPagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 7373).then(__webpack_require__.bind(__webpack_require__, 7373)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7373)],
    modules: ["../src/components/testBank/mode/previewMode.tsx -> " + '@/components/commonTable/commonPagination']
  }
});





const PreviewMode = props => {
  const {
    selectedIdData = [],
    selectData = [],
    loading,
    setloading
  } = props;
  const {
    0: testArr,
    1: setTestArr
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 分页回调

  const onPaginationChange = async (page, pageSize) => {
    setloading(true);
    props.pageFun(page);
    props.defultNumberFun(pageSize);
    await props.pageTestBank({
      page,
      pageSize
    });
    setloading(false);
  }; // 多选框点击事件


  const checkBoxClick = (e, item) => {
    // 被选中时
    if (e.target.checked) {
      // 修改选中的数据
      selectedIdData.push(item.id);
      props.selectedIdDataChange(selectedIdData);
      selectData.push(item);
      props.selectDataChange(selectData); // 判断试题是否在考试中被创建

      if (item.paperBigQuestions.length > 0) {
        testArr.push(item);
        setTestArr(testArr);
        props.setTest(testArr);
      }
    } else {
      // 没被选中时
      const index = selectedIdData.findIndex(ite => {
        return ite === item.id;
      }); // 判断试题是否在考试中被创建

      if (item.paperBigQuestions.length > 0) {
        const testIndex = testArr.findIndex(ite => {
          return ite === item.id;
        });
        testArr.splice(testIndex, 1);
        setTestArr(testArr);
        props.setTest(testArr);
      } // 修改选中的数据


      selectedIdData.splice(index, 1);
      props.selectedIdDataChange(selectedIdData);
      selectData.splice(index, 1);
      props.selectDataChange(selectData);
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().previewBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().list),
      children: [loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("li", {
        className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().loadBox),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_3___default()), {
          size: "large"
        })
      }) : null, !loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default().Group), {
        style: {
          width: '100%'
        },
        children: [props.data.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_2___default()), {
              value: item.id,
              checked: false,
              onChange: e => {
                checkBoxClick(e, item);
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
              children: [item.questionTypes !== '填空题' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                children: [item.examContent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                  children: [item.questionTypes, " ", item.gradeNum, "\u5206"]
                })]
              }), (() => {
                const result = item.examContent.replace(/(\(\))|(___)/g, () => {
                  return '<input type="text"></input>';
                });

                switch (item.questionTypes) {
                  case '单选题':
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().radio),
                      children: item.testOptions.map((items, i) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                            children: items.options
                          }), items.optionsContent]
                        }, i);
                      })
                    });

                  case '多选题':
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().checkbox),
                      children: item.testOptions.map((items, i) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                            children: items.options
                          }), items.optionsContent]
                        }, i);
                      })
                    });

                  case '填空题':
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fill),
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                        className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().title),
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("s", {
                          dangerouslySetInnerHTML: {
                            __html: result
                          }
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                          children: [item.questionTypes, " ", item.gradeNum, "\u5206"]
                        })]
                      })
                    });

                  case '问答题':
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().question),
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("textarea", {})
                    });

                  case '判断题':
                    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
                      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().judge),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          children: "A"
                        }), "\u5BF9"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                          children: "B"
                        }), "\u9519"]
                      })]
                    });

                  default:
                    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {});
                }
              })(), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: "\u7B54\u6848: "
                }), item.okanswer]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: "\u96BE\u5EA6: "
                }), item.difficultyLevel]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                  children: "\u5206\u7C7B: "
                }), item.examTypes]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().functionBox),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                style: {
                  padding: '0 15px'
                },
                onClick: () => {
                  props.judge(item);
                  props.alertContent('questionAdd');
                  props.alertFlag(true);
                  props.alertTitle('编辑试题');
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.FormOutlined, {})
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                onClick: () => {
                  // setloading(true);
                  if (item.paperBigQuestions.length > 0) {
                    // 试题已连接到试卷
                    antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().warn('此试题已在试卷中使用，请在试卷中删除此题后再进行操作！');

                    setloading(false);
                  } else {
                    // 试题未连接到试卷
                    props.alertContent('delete');
                    props.modeFlag(true);
                    props.alertTitle('提示');
                    props.nowId(item.id);
                  }
                },
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__.ClearOutlined, {})
              })]
            })]
          }, index);
        }), props.data.length <= 0 && !loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_empty__WEBPACK_IMPORTED_MODULE_0___default()), {
          image: (antd_lib_empty__WEBPACK_IMPORTED_MODULE_0___default().PRESENTED_IMAGE_SIMPLE)
        }) : null]
      }) : null]
    }), !loading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_previewMode_module_scss__WEBPACK_IMPORTED_MODULE_8___default().paging),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CommonPagination, {
        dataCount: props.dataCount // 数据总数 请求后台需判断
        ,
        onChange: onPaginationChange // 分页改变的回调函数
        ,
        pageSizeOptions: ['10', '20', '50', '100'] // 自定义显示的每页条数
        ,
        defaultPageSize: props.defultNumber // 默认的每页条数
        ,
        current: props.page
      })
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewMode);

/***/ }),

/***/ 5790:
/***/ ((module) => {

// Exports
module.exports = {
	"previewBox": "previewMode_previewBox__nN6rQ",
	"list": "previewMode_list__cPS82",
	"content": "previewMode_content__pUjqi",
	"title": "previewMode_title__bRjnR",
	"radio": "previewMode_radio__l38ig",
	"checkbox": "previewMode_checkbox__9S7Vo",
	"judge": "previewMode_judge__I5KTO",
	"fill": "previewMode_fill__QhAbJ",
	"functionBox": "previewMode_functionBox__diSf5",
	"loadBox": "previewMode_loadBox__WjD4K",
	"paging": "previewMode_paging__ZqUgZ"
};


/***/ })

};
;