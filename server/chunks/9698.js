"use strict";
exports.id = 9698;
exports.ids = [9698];
exports.modules = {

/***/ 9698:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_analyse_alalyse_statistical__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(801);
/* harmony import */ var _examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3724);
/* harmony import */ var _examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_form_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1518);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4528);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7452);
/* harmony import */ var _examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


 // 渲染数据

 // 全局样式

 // antd icons 图标

 // 引入公共组件

 // antd组件


const Spin = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 261, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(261)],
    modules: ["../src/analyse/statistical/playscores/details.tsx -> " + 'antd/lib/spin']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/statistical/playscores/details.tsx -> " + '@component/TreeType/TreeType']
  }
}); // 无限极菜单

const Dropdown = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 7712).then(__webpack_require__.bind(__webpack_require__, 7712)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7712)],
    modules: ["../src/analyse/statistical/playscores/details.tsx -> " + '../../examination/component/communal_select/dropdown']
  }
});




const navs = ['考试多次参加时,按最好成绩统计', '考试多次参加时,按平均成绩统计', '考试多次参加时,按最低成绩统计'];
const list = [{
  id: '1',
  title: '今天'
}, {
  id: '2',
  title: '昨天'
}, {
  id: '3',
  title: '近七天'
}];

const currentOption = (type, id) => {
  console.log(type);
  console.log(id);
}; // 无限极菜单事件


const Popout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 1162).then(__webpack_require__.bind(__webpack_require__, 1162)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1162)],
    modules: ["../src/analyse/statistical/playscores/details.tsx -> " + '../../examination/component/export/popout']
  }
}); // 导出组件引入

const Details = props => {
  const boxes = []; // 导出复选框选择

  const {
    0: derive,
    1: setDerive
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 隐藏导出按钮

  const matrix = () => {
    // 关闭弹框
    setDerive(!derive);
  };

  const {
    identification
  } = props;
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('统计方式'); // 统计方式的文本

  const {
    0: today,
    1: setToday
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // 今天 昨天  近七天

  const {
    0: custom,
    1: setCustom
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 自定义

  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // 关键字

  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // 自定义时间

  const {
    0: data,
    1: setDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // 渲染数据

  const {
    0: dataCount,
    1: setDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 共多少条数据

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1); // 页码

  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(undefined); // 页数

  const {
    0: heavy,
    1: setHeavy
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 隐藏懒加载

  const {
    0: rotary,
    1: setRotary
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
  const Research = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // 关键字绑定

  const getDate = async params => {
    // 渲染数据
    await (0,_api_analyse_alalyse_statistical__WEBPACK_IMPORTED_MODULE_2__/* .getPracticeData */ .el)(params).then(res => {
      setRotary(true);

      if (res) {
        setDate(res.data[0]);
        setDataCount(res.data[1]);

        if (res.data[0]) {
          setRotary(false);
        }

        if (res.code === '3') {
          if (res.data[0].length > 0) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default().success('查询成功', 0.7);
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default().warning('没有数据', 0.7);
          }
        }
      }
    });
  };

  const paging = async (e, a) => {
    // 分页 点击事件
    setPage(e);
    setPageSize(a);
    await getDate({
      page: e,
      pageSize: a,
      today,
      keyword,
      time,
      identification
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getDate({
      identification
    });
  }, [identification]);

  const setVal = e => {
    setText(e);
    getDate({
      keyword,
      time,
      page,
      pageSize,
      today,
      condition: e,
      identification
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("ul", {
      className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().information),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u53C2\u52A0\u4EBA\u6B21"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SolutionOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().four)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u53CA\u683C\u6B21\u6570"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().nine)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            children: "0%"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u4E0D\u53CA\u683C\u4EBA\u6570"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().two),
            children: "X"
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u6B63\u786E\u7387"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "100%"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().one)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u5F97\u5206\u7387"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "0"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SketchOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().four)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u6700\u9AD8\u5206"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "1"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowUpOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().one)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u5E73\u5747\u5206"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "86.00"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.SwapOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().five)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("li", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u6700\u4F4E\u5206"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("b", {
          children: "86.00"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ArrowDownOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().three)
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().ss),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sure),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Dropdown, {
          text: text,
          navs: navs,
          setText: setVal,
          id: '2'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bxx),
        children: [list && list.map(item => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: today === item.id ? (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().lan) : (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().write),
            onClick: () => {
              setToday(item.id);
              getDate({
                today: item.id,
                time,
                keyword,
                page,
                pageSize,
                identification
              });
            },
            children: item.title
          }, item.id);
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().zdy),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.ButtonCommon, {
            onClick: () => {
              setCustom(!custom);
            },
            type: 'greyLight',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().zd),
              children: "\u81EA\u5B9A\u4E49"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.InsertRowAboveOutlined, {})]
          })
        })]
      }), custom === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.DateCommon, {
        onChange: e => {
          setTime(e);
        }
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.PopoverCommon, {
        type: 'FullBox',
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().fjc),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sp),
            children: "\u6240\u5C5E\u90E8\u95E8"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CaretDownOutlined, {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().kc)
          })]
        }),
        placement: "bottomLeft",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TreeType, {
          type: "department" // 根节点名字
          ,
          getCurrentAndAncestorsTitles: currentOption // 目录接收函数

        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default()), {
        onPressEnter: val => {
          setKeyword(val.target.value);
          getDate({
            keyword: val.target.value,
            time,
            page,
            pageSize,
            today,
            identification
          });
        },
        ref: Research,
        onChange: e => {
          setKeyword(e.target.value);
        },
        className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().ipt),
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u8BE2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cha),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.ButtonCommon, {
          onClick: () => {
            if (Research.current.state.value || time || today) {
              getDate({
                time,
                keyword,
                page,
                pageSize,
                today,
                identification
              });
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_7___default().error('请至少输入一个参数', 0.5);
            }
          },
          type: 'none',
          children: "\u67E5\u8BE2"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().shai),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.ButtonCommon, {
          onClick: () => {
            setHeavy(true);
            setTimeout(() => {
              setHeavy(false);
            }, 800);
            Research.current.state.value = '';
            setText('统计方式');
            setToday(undefined);
            setKeyword(undefined);
            setCustom(false);
            getDate({});
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.ReloadOutlined, {})
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        onClick: () => {
          setDerive(true);
        },
        className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().ri),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_4__.ButtonCommon, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DownloadOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().spc),
            children: "\u5BFC\u51FA"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().diminish)
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().jl),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("table", {
          className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tb),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u59D3\u540D"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u53C2\u52A0\u6B21\u6570"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u7528\u65F6"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u603B\u5206/\u53CA\u683C\u5206"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u6210\u7EE9"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u6B63\u786E\u7387"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u5F97\u5206\u7387"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u662F\u5426\u53CA\u683C"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u72B6\u6001"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("th", {
                children: "\u6392\u540D"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("tbody", {
            children: data && data.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("tr", {
                className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().context),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: item.names
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: item.participateNumber
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: item.when
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
                    children: [item.score, "/"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().flush),
                    children: item.passing
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  className: Number(item.achievement) >= Number(item.passing) ? (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().bon) : (_examination_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_10___default().flush),
                  children: item.achievement
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: item.correct
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: item.scoring
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().lg),
                  children: item.achievement >= '70' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, {
                    className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dui)
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                    className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().hs),
                    children: "!"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("td", {
                  children: [item.state === '1' ? '人脸认证中' : '', item.state === '2' ? '人脸认证失败' : '', item.state === '3' ? '考试中' : '', item.state === '4' ? '已提交' : '', item.state === '5' ? '已发布' : '', item.state === '6' ? '已评卷' : '']
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("td", {
                  children: index + 1
                })]
              }, item.id);
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().paging),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().forget),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().text),
            children: ["\u5171\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
              className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().orange),
              children: dataCount
            }), "\u6761\u8BB0\u5F55\xA0\xA0,\xA0\xA0\xA0\xA0"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_pagination__WEBPACK_IMPORTED_MODULE_5___default()), {
            showQuickJumper: true,
            showSizeChanger: true,
            total: dataCount,
            pageSizeOptions: ['5', '10', '20', '30'] // 配置每页显示多少条数据
            ,
            onChange: paging,
            current: page,
            defaultPageSize: 5,
            defaultCurrent: 1
          })]
        })
      })]
    }), heavy === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Spin, {
      className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().load)
    }), derive === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Popout, {
      id: '6',
      matrix: matrix,
      boxes: boxes,
      list: data
    }), rotary === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Spin, {
      className: (_examination_scores_scores_module_scss__WEBPACK_IMPORTED_MODULE_9___default().mark)
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "go": () => (/* binding */ getAll),
/* harmony export */   "el": () => (/* binding */ getPracticeData),
/* harmony export */   "YX": () => (/* binding */ getUpdate)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取数据接口

function getAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-statistical/getAll',
    method: 'GET',
    params
  });
} // 练习统计  弹框数据

function getPracticeData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-bounced-practice/getAll',
    method: 'GET',
    params
  });
} // 练习统计  弹框数据

function getUpdate(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-bounced-practice/getUpdate',
    method: 'PUT',
    data
  });
}

/***/ })

};
;