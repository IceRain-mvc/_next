exports.id = 3821;
exports.ids = [3821];
exports.modules = {

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8082);
/* harmony import */ var _Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _api_analyse_analyse_student_analyse_student__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1633);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);



const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/analyse/Studentpopup/Studentpopup.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});




const Studentpopup = props => {
  const {
    oneData,
    alertShow,
    alertTitle,
    changeAlertFlag
  } = props;
  const {
    id
  } = oneData;
  console.log(oneData);
  const {
    0: examData,
    1: setexamData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 考生的考试数据

  const {
    0: courseData,
    1: setCourseData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 考生的课程数据

  const getData = async params => {
    await (0,_api_analyse_analyse_student_analyse_student__WEBPACK_IMPORTED_MODULE_2__/* .getStudentCourse */ .ns)(params).then(res => {
      if (res) {
        setCourseData(res);
      }
    }).catch(() => {
      console.log();
    });
    await (0,_api_analyse_analyse_student_analyse_student__WEBPACK_IMPORTED_MODULE_2__/* .getStudentExam */ .ys)(params).then(res => {
      console.log(res);

      if (res) {
        setexamData(res);
      }
    }).catch(() => {
      console.log();
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    getData({
      studentsId: id
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AlertCommon, {
    alertStatus: alertShow,
    enableDrag: true,
    alertTitle: alertTitle,
    changeAlertFlag: () => {
      changeAlertFlag();
    },
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
      className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().studentpopupbox),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("table", {
          className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().countheadertab),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: "\u59D3\u540D:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: oneData.studentName && oneData.studentName
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: "\u8D26\u53F7:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: oneData.studentNumber && oneData.studentNumber
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: "\u6240\u5C5E\u9636\u6BB5:"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: oneData.title && oneData.title
                })
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabBox),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabitem),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("h4", {
              children: "\u8003\u751F\u5206\u6790"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttab),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("thead", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    colSpan: 3,
                    children: "\u8003\u8BD5"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    colSpan: 3,
                    className: ((_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabTh), (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabitem)),
                    children: "\u7EC3\u4E60"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    colSpan: 3,
                    className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabTh),
                    children: "\u57F9\u8BAD"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    rowSpan: 3,
                    className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabTh),
                    children: "\u6240\u5F97\u79EF\u5206"
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabtr),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u53C2\u52A0\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u901A\u8FC7\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u901A\u8FC7\u7387"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u53C2\u52A0\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u65F6\u957F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6B63\u786E\u7387"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u53C2\u52A0\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u5B8C\u6210\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u5B8C\u6210\u7387"
                  })]
                })]
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.studunetexam && oneData.studunetexam || 0
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.throughNumber && oneData.throughNumber || 0
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.passRate && oneData.passRate || '0.0%'
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "0\u5206\u949F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "0.00%"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.participantsNumber && oneData.participantsNumber || 0
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.courseThroughNumber && oneData.courseThroughNumber || 0
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: oneData.coursePassRate && oneData.coursePassRate || '0.0%'
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                    children: "0"
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabitem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              children: ["\u8003\u8BD5(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: "0"
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttab),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u603B\u5206/\u53CA\u683C\u5206\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u53C2\u52A0\u6B21\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u53CA\u683C\u6B21\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6700\u597D\u6210\u7EE9"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6240\u5F97\u79EF\u5206"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u901A\u8FC7\u8003\u8BD5"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5\u6392\u540D"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u51FB\u8D25\u4EBA\u6570"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u51FB\u8D25\u7387"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: examData.map((item, i) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.examName
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.grade
                    })]
                  }, i);
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabitem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              children: ["\u7EC3\u4E60(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: "0"
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttab),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u7C7B\u578B"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u7EC3\u4E60\u65F6\u957F"
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
            className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttabitem),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              children: ["\u8BFE\u7A0B(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                style: {
                  color: 'red'
                },
                children: courseData.length === 0 ? 0 : courseData.length
              }), ")"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
              className: (_Studentpopup_module_scss__WEBPACK_IMPORTED_MODULE_4___default().counttab),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8BFE\u7A0B\u540D\u79F0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u5B66\u4E60\u65F6\u957F"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8003\u8BD5\u6210\u7EE9"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u6240\u5F97\u79EF\u5206"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u8FDB\u5EA6"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                    children: "\u72B6\u6001"
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                children: courseData.map((item, i) => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.course_courseName
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.learnTime && item.learnTime !== '0' ? item.learnTime : '0'
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.learnTime
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: "0"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: `${item.learnProgress && item.learnProgress !== '0' ? item.learnProgress : '0'}%`
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: item.learnProgress && item.learnState === 1 ? '学习中' : item.learnState === 2 ? '待考试' : item.learnState === 3 ? '未通过考试' : item.learnState === 4 ? '已完成' : item.learnState === 5 ? '未完成' : '暂无状态'
                    })]
                  }, i);
                })
              })]
            })]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Studentpopup);

/***/ }),

/***/ 8082:
/***/ ((module) => {

// Exports
module.exports = {
	"studentpopupbox": "Studentpopup_studentpopupbox__PHjxq",
	"content": "Studentpopup_content__akWhJ",
	"countheadertab": "Studentpopup_countheadertab__7p0C6",
	"counttabitem": "Studentpopup_counttabitem__gAs7n",
	"counttab": "Studentpopup_counttab__ZbHPL",
	"counttabtr": "Studentpopup_counttabtr__vY_dD"
};


/***/ })

};
;