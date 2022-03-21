"use strict";
exports.id = 3334;
exports.ids = [3334];
exports.modules = {

/***/ 3334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _scores_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3724);
/* harmony import */ var _scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_scores_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_form_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1518);
/* harmony import */ var _api_analyse_analyse_examination_analyseBounced__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2709);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7452);
/* harmony import */ var _examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);


 // antd icons图标


const Pagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4528, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4528)],
    modules: ["../src/analyse/examination/scores/index.tsx -> " + 'antd/lib/pagination']
  }
});
 // 引入公共组件

const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/examination/scores/index.tsx -> " + '@component/TreeType/TreeType']
  }
}); // 无限级菜单

 // 获取数据

 // input框





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
const Dropdown = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 7712).then(__webpack_require__.bind(__webpack_require__, 7712)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7712)],
    modules: ["../src/analyse/examination/scores/index.tsx -> " + '../component/communal_select/dropdown']
  }
}); // 公共选择框
// 导出组件引入

const Popout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => __webpack_require__.e(/* import() */ 1162).then(__webpack_require__.bind(__webpack_require__, 1162)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1162)],
    modules: ["../src/analyse/examination/scores/index.tsx -> " + '../component/export/popout']
  }
});
const Spin = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 261, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(261)],
    modules: ["../src/analyse/examination/scores/index.tsx -> " + 'antd/lib/spin']
  }
});

const Scores = props => {
  const {
    0: derive,
    1: setDerive
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // 导出开关

  const matrix = () => {
    // 关闭弹框
    setDerive(!derive);
  };

  const {
    identification
  } = props;
  const {
    0: classify,
    1: Reclassify
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('所属部门');
  const {
    0: stageId,
    1: SetstateId
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('统计方式'); // 统计方式的文本

  const {
    0: today,
    1: setToday
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined); // 今天 昨天  近七天

  const {
    0: custom,
    1: setCustom
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false); // 自定义时间

  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined); // 关键字

  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined); // 自定义时间

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(); // 渲染数据

  const {
    0: dataCount,
    1: setDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0); // 共多少条数据

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1); // 页码

  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined); // 页数

  const boxes = [];
  const {
    0: rotary,
    1: setRotary
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);
  const Research = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);

  const getDate = async params => {
    setRotary(true); // 渲染数据

    await (0,_api_analyse_analyse_examination_analyseBounced__WEBPACK_IMPORTED_MODULE_4__/* .getAll */ .g)(params).then(res => {
      setRotary(true);

      if (res) {
        setData(res.list[0]);
        setDataCount(res.list[1]);

        if (res.list[0]) {
          setRotary(false);
        }

        if (res.code === '3') {
          if (res.list[0].length > 0) {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default().success('查询成功', 0.7);
          } else {
            antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default().warning('没有数据', 0.7);
          }
        }
      }
    }).catch(() => {
      console.log();
    });
  }; // 点击页码 页数事件


  const paging = async (e, a) => {
    setPage(e);
    setPageSize(a);
    getDate({
      page: e,
      pageSize: a,
      today,
      keyword,
      time,
      identification
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
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
  }; // 选中节点接收函数


  const selList = idList => {
    console.log(idList);
  };

  const currentNode = (location, id) => {
    Reclassify(location.split('/')[location.split('/').length - 1]);
    SetstateId(id);
  };

  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TreeType, {
    type: 'department',
    getCurrentAndAncestorsTitles: currentNode,
    openCheckbox: true,
    checkoutDepartment: true,
    currentId: 1,
    selectNodeList: selList,
    openSelectChildren: true
  });

  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
      children: classify
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CaretDownOutlined, {})]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("ul", {
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().information),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u5E94\u53C2\u52A0\u4EBA\u6570"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "1"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UserOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().one)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u5DF2\u53C2\u52A0\u4EBA\u6570"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UserAddOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().two)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "16.7%"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u7F3A\u8003\u4EBA\u6570"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UserDeleteOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().three)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "83.3%"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u53C2\u52A0\u4EBA\u6B21"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "100%"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SolutionOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().four)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u53CA\u683C\u4EBA\u6570"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "0"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().nine)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "0%"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u4E0D\u53CA\u683C\u4EBA\u6570"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "1"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().two),
              children: "X"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              children: "100%"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u6B63\u786E\u7387"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "86.00"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().one)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u5F97\u5206\u7387"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "86.00"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SketchOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().four)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u6700\u9AD8\u5206"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "86.00"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ArrowUpOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().one)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u5E73\u5747\u5206"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "86.00"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.SwapOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().two)
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            children: "\u6700\u4F4E\u5206"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("b", {
            children: "86.00"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ArrowDownOutlined, {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().three)
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().ss),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().sure),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Dropdown, {
          text: text,
          navs: navs,
          setText: setVal,
          id: '2'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bxx),
        children: [list.map(item => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
            className: today && today === item.id ? (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().lan) : (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().write),
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
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().fd),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_3__.ButtonCommon, {
            onClick: () => {
              setCustom(!custom);
            },
            type: 'greyLight',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().zd),
              children: "\u81EA\u5B9A\u4E49"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.InsertRowAboveOutlined, {})]
          })
        })]
      }), custom === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_3__.DateCommon, {
        onChange: e => {
          setTime(e);
        }
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().establish),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_3__.PopoverCommon, {
          type: 'FullBox',
          title: title && title,
          placement: "bottomLeft",
          children: content
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default()), {
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
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ipt),
        ref: Research,
        onChange: e => {
          setKeyword(e.target.value);
        },
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u8BE2"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().cha),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_3__.ButtonCommon, {
          onClick: () => {
            if (Research.current.state.value || time || today || text !== '统计方式') {
              getDate({
                time,
                keyword,
                page,
                pageSize,
                today,
                identification
              });
            } else {
              antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default().error('请至少输入一个参数', 0.5);
            }
          },
          type: 'none',
          children: "\u67E5\u8BE2"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().shai),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_component_form_form__WEBPACK_IMPORTED_MODULE_3__.ButtonCommon, {
          onClick: () => {
            // 重置
            Reclassify('所属部门');
            Research.current.state.value = '';
            setText('统计方式');
            setToday(undefined);
            setCustom(false);
            getDate({
              identification
            });
            setKeyword(undefined);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.ReloadOutlined, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        onClick: () => {
          setDerive(!derive);
        },
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().ri),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.DownloadOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().spc),
          children: "\u5BFC\u51FA"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().jl),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("table", {
          className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().tb),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("thead", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u8D26\u53F7"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u59D3\u540D"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u6240\u5C5E\u90E8\u95E8"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u53C2\u52A0\u6B21\u6570"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u7528\u65F6"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u603B\u5206/\u53CA\u683C\u5206"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u6210\u7EE9"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u6B63\u786E\u7387"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u5F97\u5206\u7387"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u662F\u5426\u53CA\u683C"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u72B6\u6001"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("th", {
                children: "\u6392\u540D"
              })]
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("tbody", {
            children: data && data.map((item, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("tr", {
                className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().context),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.account
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.names
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.department
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.ranking
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.useTime
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
                    children: [item.score, "/"]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().flush),
                    children: item.passing
                  })]
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  className: Number(item.achievement) >= Number(item.passing) ? (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().bon) : (_examinee_examinee_module_scss__WEBPACK_IMPORTED_MODULE_9___default().flush),
                  children: item.achievement
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.correct
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: item.scoring
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().lg),
                  children: item.achievement >= '70' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CheckOutlined, {
                    className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().dui)
                  }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
                    className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().hs),
                    children: "!"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("td", {
                  children: [item.state === '1' ? '人脸认证中' : '', item.state === '2' ? '人脸认证失败' : '', item.state === '3' ? '考试中' : '', item.state === '4' ? '已提交' : '', item.state === '5' ? '已发布' : '', item.state === '6' ? '已评卷' : '']
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("td", {
                  children: index + 1
                })]
              }, item.id);
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().paging),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().forget),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().text),
            children: ["\u5171\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
              className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().orange),
              children: dataCount && dataCount
            }), "\u6761\u8BB0\u5F55\xA0\xA0,\xA0\xA0\xA0\xA0"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Pagination, {
            showQuickJumper: true,
            showSizeChanger: true,
            total: dataCount && dataCount,
            pageSizeOptions: ['5', '10', '20', '30'] // 配置每页显示多少条数据
            ,
            onChange: paging,
            current: page && page,
            defaultPageSize: 5,
            defaultCurrent: 1
          })]
        })
      })]
    }), derive === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Popout, {
      id: '3',
      boxes: boxes,
      list: data,
      matrix: matrix
    }), rotary === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(Spin, {
      className: (_scores_module_scss__WEBPACK_IMPORTED_MODULE_8___default().mark)
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scores);

/***/ }),

/***/ 2709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ getAll),
/* harmony export */   "Y": () => (/* binding */ getUpdate)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取数据接口

function getAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyseBounced/getAll',
    method: 'GET',
    params
  });
} // 修改数据

function getUpdate(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyseBounced/getUpdate',
    method: 'PUT',
    data
  });
}

/***/ })

};
;