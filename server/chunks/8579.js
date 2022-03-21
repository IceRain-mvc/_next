exports.id = 8579;
exports.ids = [8579];
exports.modules = {

/***/ 8579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ demand)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/analyse/examination/examination.module.scss
var examination_module = __webpack_require__(3200);
var examination_module_default = /*#__PURE__*/__webpack_require__.n(examination_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/analyse/analyse_examination/index.ts
 // 获取数据接口

function getAll(params) {
  return httpProvider.request({
    url: 'analyseExamine/getAll',
    method: 'GET',
    params
  });
} // 获取数据接口

function getFindData(params) {
  return http/* httpProvider.request */.A.request({
    url: 'analyseExamine/findData',
    method: 'GET',
    params
  });
} // 调取多个service

function getExamMulti(params) {
  return http/* httpProvider.request */.A.request({
    url: 'analyseExamine/getExamMulti',
    method: 'GET',
    params
  });
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "antd/lib/layout/layout"
var layout_ = __webpack_require__(8697);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: ./src/components/form/part/headerTable.tsx
var headerTable = __webpack_require__(4723);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/examination/demand.tsx



 // 获取数据









const MyTable = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/examination/demand.tsx -> " + '@component/commonTable/commonTable']
  }
}); // 表格组件

const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/examination/demand.tsx -> " + '@component/TreeType/TreeType']
  }
}); // 无限极菜单组件

const Bullet = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9042), __webpack_require__.e(3426)]).then(__webpack_require__.bind(__webpack_require__, 3426)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3426)],
    modules: ["../src/analyse/examination/demand.tsx -> " + '../popup']
  }
}); // 弹框

const Popout = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 1162).then(__webpack_require__.bind(__webpack_require__, 1162)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1162)],
    modules: ["../src/analyse/examination/demand.tsx -> " + './component/export/popout']
  }
}); // 导出组件

const Demand = () => {
  let {
    0: timer
  } = (0,external_react_.useState)(null); // 搜索防抖

  const {
    0: classify,
    1: Declassify
  } = (0,external_react_.useState)('考试分类');
  const {
    0: idList,
    1: SetoidList
  } = (0,external_react_.useState)([]);
  const {
    0: flag,
    1: setFlag
  } = (0,external_react_.useState)(false); // 弹框点击出现隐藏

  const {
    0: id,
    1: setId
  } = (0,external_react_.useState)(''); // 传递到弹框的参数

  const {
    0: keyword,
    1: setKeyword
  } = (0,external_react_.useState)(''); // 关键词

  const {
    0: search,
    1: setSearch
  } = (0,external_react_.useState)('');
  const {
    0: time,
    1: setTime
  } = (0,external_react_.useState)(null); // 自定义时间

  const {
    0: page,
    1: setPage
  } = (0,external_react_.useState)(1); // 页码

  const {
    0: pageSize,
    1: setPageSize
  } = (0,external_react_.useState)(5); // 页数

  const {
    0: list,
    1: setList
  } = (0,external_react_.useState)(); // 数据接受

  const {
    0: identification,
    1: setIdentification
  } = (0,external_react_.useState)(''); // 判断点击弹框符合的数据

  const {
    0: total,
    1: setTotal
  } = (0,external_react_.useState)(0); // 数据总条数

  const {
    0: negation,
    1: setNegation
  } = (0,external_react_.useState)(false); // 关闭导出弹框

  const {
    0: boxes,
    1: setBoxes
  } = (0,external_react_.useState)([]); // 是否选择导出

  const {
    0: lauding,
    1: Secluding
  } = (0,external_react_.useState)(true);
  const arr = 0;

  const getMulti = async params => {
    return await getExamMulti(params);
  };

  const getDate = async params => {
    Secluding(true);
    await getFindData(params).then(item => {
      if (item) {
        setList(item.res[0]);
        setTotal(item.res[1]);
        Secluding(false);
        item.res[0].map(num => {
          item.list.data[0].map(curr => {
            getMulti({
              studentId: curr.id,
              examId: num.examId
            });
          });
        });
      }
    }).catch(() => {});
  };

  const onSelectChange = e => {
    // 复选框事件
    setBoxes(e);
  };

  const selList = idList => {
    console.log(idList);
  }; // 树状头部


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: classify && classify
    }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 创建接收函数


  const currentNode = (location, id, idList) => {
    SetoidList(idList);
    Declassify(location.split('/')[location.split('/').length - 1]);
    setPage(1);
    clearTimeout(timer);
    timer = setTimeout(() => {
      getDate({
        page,
        pageSize,
        time,
        search,
        idList: idList
      });
    }, 500);
  };

  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
    type: 'exam',
    getCurrentAndAncestorsTitles: currentNode,
    openSelectChildren: true,
    selectNodeList: selList
  });

  const timerTimer = timer => {
    if (timer) {
      const date = new Date(timer);
      const n = timer.slice(0, timer.indexOf('T'));
      const m = date.toTimeString().split(' ')[0];
      return n + ' ' + m;
    }

    return '';
  }; // 标题


  const columns = [{
    id: '1',
    title: '考试名称',
    dataIndex: 'examTitle'
  }, {
    id: '2',
    title: '开始时间/结束时间',
    width: '15%',
    render: (text, record) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: [timerTimer(record && record.examConfig.startDateTime), "\uFF5E", timerTimer(record && record.examConfig.endDateTime)]
    })
  }, {
    id: '3',
    title: '考试方式',
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: record && record.participationWay.partTitle
    })
  }, {
    id: '4',
    title: '参加人次',
    render: () => /*#__PURE__*/jsx_runtime_.jsx("span", {})
  }, {
    id: '5',
    title: '及格人次',
    dataIndex: 'participants'
  }, {
    id: '6',
    title: '及格率',
    dataIndex: 'exercises'
  }, {
    id: '7',
    title: '正确率',
    dataIndex: 'Average'
  }, {
    id: '8',
    title: '得分率',
    dataIndex: 'Scoring'
  }, {
    id: '9',
    title: '平均分',
    dataIndex: 'Correct'
  }, {
    id: '10',
    title: '最高分',
    dataIndex: 'errors'
  }, {
    id: '11',
    title: '最低分',
    dataIndex: 'Lowest'
  }, {
    id: '12',
    title: '分析',
    render: e => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (examination_module_default()).lc,
        children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => {
            setFlag(!flag);
            setId('1');
            setIdentification(e && e.id);
          },
          href: '#',
          children: "\u8003\u751F\u6210\u7EE9"
        }), /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => {
            setFlag(!flag);
            setId('4');
            setIdentification(e && e.id);
          },
          href: '#',
          children: "\u6210\u7EE9\u7EDF\u8BA1"
        })]
      });
    }
  }]; // // 标题
  // const columns = [
  //   {
  //     id: '1',
  //     title: '考试名称',
  //     dataIndex: 'authName',
  //   },
  //   {
  //     id: '2',
  //     title: '开始时间/结束时间',
  //     render: (e) => {
  //       return (
  //         <>
  //           {e && e.startTime}~{e && e.endTime}
  //         </>
  //       );
  //     },
  //   },
  //   {
  //     id: '3',
  //     title: '考试方式',
  //     dataIndex: 'Participation',
  //   },
  //   {
  //     id: '4',
  //     title: '参加人次',
  //     dataIndex: 'types',
  //   },
  //   {
  //     id: '5',
  //     title: '及格人次',
  //     dataIndex: 'participants',
  //   },
  //   {
  //     id: '6',
  //     title: '及格率',
  //     dataIndex: 'exercises',
  //   },
  //   {
  //     id: '7',
  //     title: '正确率',
  //     dataIndex: 'Average',
  //   },
  //   {
  //     id: '8',
  //     title: '得分率',
  //     dataIndex: 'Scoring',
  //   },
  //   {
  //     id: '9',
  //     title: '平均分',
  //     dataIndex: 'Correct',
  //   },
  //   {
  //     id: '10',
  //     title: '最高分',
  //     dataIndex: 'errors',
  //   },
  //   {
  //     id: '11',
  //     title: '最低分',
  //     dataIndex: 'Lowest',
  //   },
  //   {
  //     id: '12',
  //     title: '分析',
  //     render: (e) => {
  //       return (
  //         <div className={style.lc}>
  //           <a
  //             onClick={() => {
  //               setFlag(!flag);
  //               setId('1');
  //               setIdentification(e && e.id);
  //             }}
  //             href={'#'}
  //           >
  //             考生成绩
  //           </a>
  //           <a
  //             onClick={() => {
  //               setFlag(!flag);
  //               setId('4');
  //               setIdentification(e && e.id);
  //             }}
  //             href={'#'}
  //           >
  //             成绩统计
  //           </a>
  //         </div>
  //       );
  //     },
  //   },
  // ];
  // 传递到弹框的参数

  const Transfer = () => {
    setFlag(!flag);
  }; // 页码 页数点击事件


  const onChangeTable = e => {
    setPage(e.current);
    setPageSize(e.pageSize);
    getDate({
      page: e.current,
      pageSize: e.pageSize,
      idList
    });
  };

  (0,external_react_.useEffect)(() => {
    getDate({});
  }, []);

  const matrix = () => {
    setNegation(!negation);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((layout_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (examination_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.LineChartOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u8003\u8BD5\u6210\u7EE9"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_.Content, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (examination_module_default()).tops,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (examination_module_default()).aaa,
            children: [/*#__PURE__*/jsx_runtime_.jsx(headerTable["default"] // 关键字查找
            , {
              PoContent: content,
              PoTitle: title && title,
              onClick: () => {
                getDate({
                  page,
                  pageSize
                });
                Declassify('考试分类');
              },
              onFinish: async values => {
                const {
                  search,
                  date
                } = values;
                setKeyword(search);
                setSearch(search);
                setTime(values.data);

                if (search || date) {
                  getDate({
                    page,
                    pageSize,
                    time: values.date,
                    search,
                    idList
                  });
                } else {
                  message_default().error('没有查询信息');
                }

                if (search) {
                  console.log('change事件触发了');
                }
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (examination_module_default()).dao,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
                onClick: () => {
                  setNegation(!negation);
                },
                type: 'none',
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CloudDownloadOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (examination_module_default()).cha,
                  children: "\u5BFC\u51FA"
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (examination_module_default()).context,
            children: /*#__PURE__*/jsx_runtime_.jsx(MyTable, {
              data: list && list // 数据
              ,
              columns: columns && columns // 标题+内容
              ,
              isCheckout: true // 是否使用多选
              ,
              dataCount: total && total // 数据的总条数
              ,
              loading: lauding // 加载动画
              ,
              rowKeyId: 'id',
              onSelectChange: onSelectChange // 多选框的回调
              ,
              pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
              ,
              onChangeTable: onChangeTable // 排序,分页,table的回调
              ,
              current: page && page,
              pageSize: pageSize && pageSize
            })
          })]
        })
      })]
    }), flag && flag === true && /*#__PURE__*/jsx_runtime_.jsx(Bullet, {
      Transfer: Transfer && Transfer,
      id: id && id,
      distinction: '1',
      identification: identification && identification
    }), negation && negation === true && /*#__PURE__*/jsx_runtime_.jsx(Popout, {
      id: '1',
      boxes: boxes && boxes,
      list: list && list,
      matrix: matrix && matrix
    })]
  });
};

/* harmony default export */ const demand = (Demand);

/***/ }),

/***/ 3200:
/***/ ((module) => {

// Exports
module.exports = {
	"tops": "examination_tops__87Mmh",
	"header": "examination_header___L5MG",
	"www": "examination_www__DOGPL",
	"mailbox": "examination_mailbox__0uxw_",
	"context": "examination_context__vu2Of",
	"lc": "examination_lc__3lpeL",
	"aaa": "examination_aaa__YMqwc",
	"dao": "examination_dao__SViq1",
	"cha": "examination_cha__SAgWs",
	"mark": "examination_mark__wFPZg"
};


/***/ })

};
;