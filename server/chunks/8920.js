"use strict";
exports.id = 8920;
exports.ids = [8920];
exports.modules = {

/***/ 8920:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ artificalSon)
});

// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__(5893);
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: ./src/analyse/artifical/artificalSon/index.module.scss
var index_module = __webpack_require__(7443);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/analyse/analyse_artifical/artifical.ts
 // 获取数据接口

function getAll(params) {
  return http/* httpProvider.request */.A.request({
    url: 'Artificals/getAll',
    method: 'GET',
    params
  });
}
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/artifical/artificalSon/index.tsx


// 弹里面对应的内容  对应 考试成绩页面







const Popout = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 8713).then(__webpack_require__.bind(__webpack_require__, 8713)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8713)],
    modules: ["../src/analyse/artifical/artificalSon/index.tsx -> " + '../artificalSon/popout']
  }
});
const Pagination = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4528, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4528)],
    modules: ["../src/analyse/artifical/artificalSon/index.tsx -> " + 'antd/lib/pagination']
  }
});
const Spin = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 261, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(261)],
    modules: ["../src/analyse/artifical/artificalSon/index.tsx -> " + 'antd/lib/spin']
  }
});



const Examine = props => {
  const {
    identification
  } = props;
  const navs = [{
    id: '1',
    title: '今天'
  }, {
    id: '2',
    title: '昨天'
  }, {
    id: '3',
    title: '近七天'
  }];
  const {
    0: flag,
    1: setFlag
  } = (0,external_react_.useState)(false); // 控制显示隐藏

  const {
    0: data,
    1: setDate
  } = (0,external_react_.useState)(); // 渲染数据

  const {
    0: dataCount,
    1: setDataCount
  } = (0,external_react_.useState)(0); // 分页总条数

  const {
    0: negation,
    1: setNegation
  } = (0,external_react_.useState)(false); // 导出
  // 筛选条件  联动查询

  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1); // 页码

  const {
    0: pageSize,
    1: setPageSize
  } = (0,external_react_.useState)(undefined); // 页数

  const {
    0: condition,
    1: setCondition
  } = (0,external_react_.useState)('考试状态'); // 考试状态

  const {
    0: passState,
    1: setPassState
  } = (0,external_react_.useState)('是否及格'); // 是否及格

  const {
    0: today,
    1: setToday
  } = (0,external_react_.useState)(undefined); // 日期筛选

  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)(undefined); // 自定义日期

  const {
    0: keyword,
    1: setKeyword
  } = (0,external_react_.useState)(undefined); // 关键字查询
  // const voluntarily = useRef(null);

  const {
    0: heavy,
    1: selieavy
  } = (0,external_react_.useState)();

  const contentsts = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: "https://www.baidu.com/",
      target: "_blank",
      rel: "noreferrer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PaperClipOutlined, {}), " \xA0\u5BFC\u51FA\u8BC4\u5377\u94FE\u63A5"]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: "https://www.baidu.com/",
      target: "_blank",
      rel: "noreferrer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PaperClipOutlined, {}), " \xA0\u5BFC\u51FA\u8BC4\u5377\u94FE\u63A5(\u533F\u540D)"]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: "https://www.baidu.com/",
      target: "_blank",
      rel: "noreferrer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MailOutlined, {}), " \xA0\u53D1\u9001\u8BC4\u5377\u9080\u8BF7\u901A\u77E5"]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      href: "https://www.baidu.com/",
      target: "_blank",
      rel: "noreferrer",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MailOutlined, {}), " \xA0\u53D1\u9001\u8BC4\u5377\u9080\u8BF7\u901A\u77E5(\u533F\u540D)"]
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {})]
  });

  const getDate = async params => {
    const res = await getAll(params);
    console.log(getAll);
    setDate(res[0]);
    setDataCount(res[1]);
  }; // 处理时间


  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 分页的点击事件


  const paging = async (e, a) => {
    setPage(e);
    setPageSize(a);
    getDate({
      page: e,
      pageSize: a,
      condition,
      passState,
      today,
      time,
      keyword,
      identification
    });
  };

  (0,external_react_.useEffect)(() => {
    getDate({
      identification,
      page,
      pageSize
    });
  }, [identification, page, pageSize]); // 导出

  const matrix = () => {
    setNegation(!negation);
  };

  const {
    0: boxes
  } = (0,external_react_.useState)([]);
  const Iptsearch = (0,external_react_.useRef)(null);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).ss,
        children: [/*#__PURE__*/jsx_runtime_.jsx(form_form.SelectCommon, {
          defalutValue: '考试状态',
          onChange: event => {
            setCondition(event);
            getDate({
              condition: event,
              page,
              pageSize,
              passState,
              today,
              time,
              identification
            });
          },
          data: ['全部', '考试中', '已提交', '已发布', '已评卷']
        }), /*#__PURE__*/jsx_runtime_.jsx(form_form.SelectCommon, {
          defalutValue: '是否及格',
          onChange: event => {
            setPassState(event);
            getDate({
              condition,
              passState: event,
              page,
              pageSize,
              today,
              time,
              identification
            });
          },
          data: ['全部', '及格', '不及格']
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).zy,
          children: [navs.map(item => {
            return /*#__PURE__*/jsx_runtime_.jsx("span", {
              onClick: () => {
                setToday(item.id);
                getDate({
                  condition,
                  passState,
                  today: item.id,
                  page,
                  pageSize,
                  time,
                  keyword,
                  identification
                });
              },
              className: today === item.id ? (index_module_default()).lan : (index_module_default()).write,
              children: item.title
            }, item.id);
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
            onClick: () => {
              setFlag(!flag);
            },
            type: 'greyLight',
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (index_module_default()).zd,
              children: "\u81EA\u5B9A\u4E49"
            }), /*#__PURE__*/jsx_runtime_.jsx(icons_.InsertRowAboveOutlined, {})]
          })]
        }), flag === true ? /*#__PURE__*/jsx_runtime_.jsx(form_form.DateCommon, {
          onChange: e => {
            setTime(e);
          }
        }) : null, /*#__PURE__*/jsx_runtime_.jsx((input_default()), {
          ref: Iptsearch,
          onChange: e => {
            setKeyword(e.target.value);
          },
          className: (index_module_default()).ipt,
          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u8BE2"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).Linkage,
          children: /*#__PURE__*/jsx_runtime_.jsx(form_form.ButtonCommon, {
            onClick: () => {
              getDate({
                keyword,
                time,
                page,
                pageSize,
                today,
                condition,
                passState,
                identification
              });
            },
            type: 'none',
            children: "\u67E5\u8BE2"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).shc,
          children: /*#__PURE__*/jsx_runtime_.jsx(form_form.ButtonCommon // 重置
          , {
            onClick: () => {
              Iptsearch.current.state.value = '';
              setCondition('考试状态');
              setPassState('是否及格');
              setFlag(false);
              setToday(undefined);
              selieavy(true);
              getDate({
                identification
              });
              setTimeout(() => {
                selieavy(false);
              }, 1000);
            },
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ReloadOutlined, {})
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).ri,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
            onClick: () => {
              setNegation(!negation);
            },
            type: 'none',
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CloudDownloadOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u5BFC\u51FA"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            className: (index_module_default()).dsbutton,
            type: "primary",
            children: "\u53D6\u6D88\u516C\u5E03\u6210\u7EE9"
          }), /*#__PURE__*/jsx_runtime_.jsx((popover_default()), {
            placement: "bottomRight",
            overlayStyle: {
              maxWidth: 224,
              minHeight: 100
            },
            content: contentsts,
            trigger: "click",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
              className: (index_module_default()).dssbutton,
              children: ["\u9080\u8BF7\u8BC4\u5377", /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
            })
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).jl,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
          className: (index_module_default()).tb,
          children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u59D3\u540D"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u624B\u673A\u53F7"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u7528\u65F6"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u5F00\u59CB\u65F6\u95F4/\u4EA4\u5377\u65F6\u95F4"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u5BA2\u89C2\u9898\u5F97\u5206"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u4E3B\u89C2\u9898\u5F97\u5206"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u6210\u7EE9"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u662F\u5426\u53CA\u683C"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u6392\u540D"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u8BC4\u8BED"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u72B6\u6001"
              }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                children: "\u64CD\u4F5C"
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: data && data.map((item, index) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  className: (index_module_default()).context,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: item.names
                  }), " ", /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: item.account
                  }), " ", /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: item.useTime
                  }), " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                    children: [renderTime(item.startTime), /*#__PURE__*/jsx_runtime_.jsx("br", {}), renderTime(item.endTime)]
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: item.score
                  }), " ", /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: item.passing
                  }), " ", /*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: (index_module_default()).modification,
                    children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: Number(item.achievement) >= Number(item.passing) ? (index_module_default()).bon : (index_module_default()).flush,
                      children: item.achievement
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: (index_module_default()).lg,
                    children: Number(item.achievement) >= Number(item.passing) ? /*#__PURE__*/jsx_runtime_.jsx(icons_.CheckOutlined, {
                      className: (index_module_default()).dui
                    }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
                      className: (index_module_default()).hs,
                      children: "!"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: index + 1
                  }), " ", /*#__PURE__*/jsx_runtime_.jsx("td", {
                    className: (index_module_default()).pyds,
                    children: /*#__PURE__*/jsx_runtime_.jsx((popover_default()), {
                      placement: "top",
                      content: item.correct,
                      trigger: "click",
                      children: item.correct
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                    children: [item.state === '1' ? '考试中' : '', item.state === '2' ? '已提交' : '', item.state === '3' ? '已发布' : '', item.state === '4' ? '已评卷' : '']
                  }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      children: "\u53BB\u8BC4\u5377"
                    })
                  })]
                }, item.id);
              })
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).paging,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(Pagination, {
              showQuickJumper: true,
              showSizeChanger: true,
              total: dataCount,
              pageSizeOptions: ['5', '10', '20', '30'] // 配置每页显示多少条数据
              ,
              onChange: paging,
              current: page,
              defaultPageSize: 5,
              defaultCurrent: 1,
              showTotal: total => `共 ${total} 条记录`
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (index_module_default()).orientation,
            children: page
          })]
        })]
      })]
    }), heavy === true ? /*#__PURE__*/jsx_runtime_.jsx(Spin, {
      className: (index_module_default()).load
    }) : null, negation === true ? /*#__PURE__*/jsx_runtime_.jsx(Popout, {
      boxes: boxes,
      id: '2',
      list: data,
      matrix: matrix
    }) : null]
  });
}; // @ts-ignore


/* harmony default export */ const artificalSon = (Examine);

/***/ })

};
;