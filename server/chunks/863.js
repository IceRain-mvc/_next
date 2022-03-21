exports.id = 863;
exports.ids = [863];
exports.modules = {

/***/ 863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(144);
/* harmony import */ var _alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_analyse_getGrade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7097);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
 // 按需加载组件


const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/analyse/integralAlter/integralAlter.tsx -> " + '@/components/alertCommon/alertCommon']
  }
}); // 引入样式

 // 请求后台数据






const IntegralAlter = props => {
  // 存储后台数据
  const {
    0: integralData,
    1: setIntegralData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // 请求后台数据

  const getAuth = async params => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const res = await (0,_api_analyse_getGrade__WEBPACK_IMPORTED_MODULE_2__/* .getInregralAll */ .Nj)(params);

    if (res.msg === '查询成功') {
      setIntegralData(res.data[0][0]);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getAuth({
      id: props.integralItemId
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AlertCommon, {
      alertStatus: props.alertShow,
      enableDrag: true,
      alertTitle: `积分明细-${integralData.al_student_name}`,
      changeAlertFlag: props.changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().alterIntegralCount),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
          className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countHeader),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("table", {
            className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countHeaderTab),
            width: "100%",
            cellPadding: "0",
            cellSpacing: "0",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: "\u59D3\u540D\uFF1A"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    children: integralData.al_student_name
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: "\u8D26\u53F7\uFF1A"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    children: integralData.al_student_account
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: "\u6240\u5C5E\u90E8\u95E8\uFF1A"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    children: integralData.al_student_department
                  })
                })]
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabBox),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabItem),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              style: {
                background: '#fff',
                border: 'none',
                textIndent: '6px'
              },
              children: "\u8003\u751F\u5206\u6790"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTab),
              width: "100%",
              cellPadding: "0",
              cellSpacing: "0",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("thead", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    colSpan: 3,
                    children: "\u79EF\u5206\u6765\u6E90"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    rowSpan: 2,
                    className: ((_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabTh), (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabItem)),
                    children: "\u603B\u79EF\u5206"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    rowSpan: 2,
                    className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabTh),
                    children: "\u6392\u540D"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabTr),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u57F9\u8BAD"
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "8000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "9000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "10000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabItem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              style: {
                background: '#fff',
                border: 'none',
                textIndent: '6px'
              },
              children: ["\u8003\u8BD5\u79EF\u5206\u660E\u7EC6(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: "0"
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTab),
              width: "100%",
              cellPadding: "0",
              cellSpacing: "0",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u603B\u5206/\u53CA\u683C\u5206\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5\u79EF\u5206"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6210\u7EE9"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u79EF\u5206\u6392\u540D"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6240\u5F97\u79EF\u5206"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "8000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "9000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "10000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabItem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              style: {
                background: '#fff',
                border: 'none',
                textIndent: '6px'
              },
              children: ["\u7EC3\u4E60\u79EF\u5206\u660E\u7EC6(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: "0"
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTab),
              width: "100%",
              cellPadding: "0",
              cellSpacing: "0",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u7C7B\u578B"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u79EF\u5206"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6B63\u786E\u7387"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6240\u5F97\u79EF\u5206"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "8000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "9000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "10000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTabItem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              style: {
                background: '#fff',
                border: 'none',
                textIndent: '6px'
              },
              children: ["\u8BFE\u7A0B\u79EF\u5206\u660E\u7EC6(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: "0"
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_alterIntegral_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countTab),
              width: "100%",
              cellPadding: "0",
              cellSpacing: "0",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8BFE\u7A0B\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8FDB\u5EA6"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u72B6\u6001"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6240\u5F97\u79EF\u5206"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "8000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "9000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "10000"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "12000"
                  })]
                })
              })]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IntegralAlter);

/***/ }),

/***/ 144:
/***/ ((module) => {

// Exports
module.exports = {
	"alterIntegralBox": "alterIntegral_alterIntegralBox__UAVyH",
	"alterIntegralHead": "alterIntegral_alterIntegralHead__05Uqw",
	"alterIntegralCount": "alterIntegral_alterIntegralCount__hz0WO",
	"countHeaderTab": "alterIntegral_countHeaderTab__8YI8C",
	"countTabItem": "alterIntegral_countTabItem__nl22B",
	"countTab": "alterIntegral_countTab__6dy0j",
	"countTabTr": "alterIntegral_countTabTr__jjVMM"
};


/***/ })

};
;