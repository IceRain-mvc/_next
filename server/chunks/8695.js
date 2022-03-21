"use strict";
exports.id = 8695;
exports.ids = [8695];
exports.modules = {

/***/ 8695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(436);
/* harmony import */ var _absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9042);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


 // import { getAlldate, fuzzySearch, getAbsentee } from '@/api/analyse/analyse_absentStat/absentStat';





const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '@component/TreeType/TreeType']
  }
});
const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '@component/commonTable/commonTable']
  }
});
const Bullet = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 3426).then(__webpack_require__.bind(__webpack_require__, 3426)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3426)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '../../../src/analyse/popup/index']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '@component/alertCommon/alertCommon']
  }
});
const ButtonCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.ButtonCommon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '@/components/form/form']
  }
});
const HeaderTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.HeaderTable), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["analyse/absentStat/absentStatContent3.tsx -> " + '@/components/form/form']
  }
});
(react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect) = (react__WEBPACK_IMPORTED_MODULE_0___default().useEffect); // 时间格式的修改
// eslint-disable-next-line consistent-return

const timerTotimer = timer => {
  if (timer !== undefined) {
    const date = new Date(timer);
    const n = timer.slice(0, timer.indexOf('T'));
    const m = date.toTimeString().split(' ')[0];
    return n + ' ' + m;
  }
}; // 导出excel;


const exportExcelFn = async data => {
  // 导出方法
  const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default; // 导出excel数据

  exportExcel(data.filter(item => {
    item.absentStat_createAt = `${Math.floor(Number(item.absentStat_alreadyNumber) / Number(item.absentStat_joinNumber) * 100 * 100) / 100}%`;
    item.absentStat_updateAt = `${Math.floor(Number(item.absentStat_noJoinNumber) / Number(item.absentStat_joinNumber) * 100 * 100) / 100}%`;
    return item;
  }), {
    absentStat_name: '名称',
    //
    absentStat_type: '类型',
    //
    absentStat_startTime: '开始/结束时间',
    absentStat_joinNumber: '应参加人数',
    //
    absentStat_alreadyNumber: '已经参加的人数',
    //
    absentStat_createAt: '参考比例',
    absentStat_noJoinNumber: '缺考人数',
    absentStat_updateAt: '缺考比例'
  }, '缺席统计');
};

const AbsentStatContent3 = () => {
  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // 控制弹框的flag

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // 数据

  const {
    0: length,
    1: setlength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'); // 数据长度

  const {
    0: alertDate,
    1: setalertDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 公共弹框的数据

  const {
    0: alertTitle,
    1: setalertTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // 当前考试的名称

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 导出弹框的flag

  const {
    0: selectDate,
    1: setselectDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // 导出选中的数据

  const {
    0: loading,
    1: setLoding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // 加载动画

  const {
    0: current,
    1: setcurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // 当前页码

  const {
    0: pageSize,
    1: setpageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10); // 当前表格显示多少条

  const {
    0: treeCont,
    1: setTreeCont
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('考试分类');
  const {
    0: treeList,
    1: setTreeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 树的treeList

  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // 搜索防抖
  // 调用数据库方法

  const runFunc = async (func, object) => {
    setLoding(true);
    console.log('222');
    await func(object).then(res => {
      if (res) {
        setLoding(false);
        setData(res[0]);
        setlength(res[1]);
      }

      console.log(res);
    }) // eslint-disable-next-line @typescript-eslint/no-empty-function
    .catch(() => {});
  }; // 创建接收函数


  const currentOption = async (location, id, idList) => {
    setTreeList([...idList]);
    setTreeCont(location.slice(location.lastIndexOf('/') + 1));
    runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getAlldate */ .Oi, {
      count: pageSize,
      treeList: idList
    }); // console.log([...idList]);
  }; // 选框分类的内容


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TreeType, {
      type: 'exam',
      getCurrentAndAncestorsTitles: currentOption // openCheckbox={true}
      ,
      checkoutDepartment: true
    })
  });

  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UnorderedListOutlined, {}), treeCont, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CaretDownOutlined, {})]
  }); // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 控制弹窗的flag方法


  const Transfer = () => {
    setFlag(!flag);
  };

  const columns = [{
    title: '名称',
    dataIndex: 'examTitle',
    width: '8%'
  }, {
    title: '类型',
    render: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
      children: "\u8003\u8BD5"
    }),
    width: '2%'
  }, {
    title: '开始时间/结束时间',
    width: '8%',
    render: (text, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [timerTotimer(record.examConfig.startDateTime), "\uFF5E", timerTotimer(record.examConfig.endDateTime)]
    })
  }, {
    title: '应参加人数',
    dataIndex: 'absentStat_joinNumber'
  }, {
    title: '已参加人数',
    dataIndex: 'absentStat_alreadyNumber'
  }, {
    title: '参考比例',
    render: (text, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [Math.floor(Number(record.absentStat_alreadyNumber) / Number(record.absentStat_joinNumber) * 100 * 100) / 100, "%"]
    })
  }, {
    title: '缺考人数',
    dataIndex: 'absentStat_noJoinNumber'
  }, {
    title: '缺考比例',
    render: (text, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
      children: [Math.floor(Number(record.absentStat_noJoinNumber) / Number(record.absentStat_joinNumber) * 100 * 100) / 100, "%"]
    })
  }, {
    title: '操作',
    render: (text, record) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("a", {
      onClick: async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const res = await (0,_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getAbsentee */ .vy)({
          id: record.absentStat_id
        });
        setalertTitle(record.absentStat_name);
        setalertDate(res);
        setFlag(!flag);
      },
      children: "\u7F3A\u5E2D\u4EBA\u5458"
    })
  }]; // 分页的事件调用方法

  const onChangeTable = pagination => {
    setcurrent(pagination.current);
    setpageSize(pagination.pageSize);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(() => {
    runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getAlldate */ .Oi, {
      page: current,
      count: pageSize
    });
  }, [setlength, current, pageSize]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ccontent),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(HeaderTable, {
        PoContent: content,
        PoTitle: title,
        onClick: () => {
          // 刷新请求的方法数据
          setTreeCont('考试分类');
          runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getAlldate */ .Oi, {
            page: current,
            count: pageSize
          });
        },
        onFinish: async values => {
          const {
            search,
            date
          } = values;
          clearTimeout(timer); // 防抖

          timer = setTimeout(() => {
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getAlldate */ .Oi, {
              count: pageSize,
              search,
              startTime: date && date.startTime,
              endTime: date && date.endTime,
              treeList
            });
          }, 500); // if (date) {
          //   clearTimeout(timer); // 防抖
          //   timer = setTimeout(() => {
          //     runFunc(getAlldate, {
          //       count: pageSize,
          //       search,
          //       startTime: date.startTime,
          //       endTime: date.endTime,
          //       treeList,
          //     });
          //   }, 500);
          // } else {
          //   clearTimeout(timer);
          //   timer = setTimeout(() => {
          //     runFunc(getAlldate, {
          //       search,
          //       count: pageSize,
          //       treeList,
          //     });
          //   }, 500);
          // }
        }
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: "right",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ButtonCommon, {
          type: 'none',
          onClick: () => {
            if (selectDate && selectDate.length > 0) {
              exportExcelFn(selectDate);
            } else {
              setalertShow(true);
            }
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.DownloadOutlined, {}), "\u5BFC\u51FA"]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().table),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CommonTable, {
        data: data === undefined ? [] : data // 数据
        ,
        dataCount: Number(length) // 数据的总条数
        ,
        columns: columns // 标题+内容
        ,
        isCheckout: true // 是否使用多选
        ,
        loading: loading // 加载动画
        ,
        onSelectChange: (selectedRowKeys, selectedRows) => {
          setselectDate(selectedRows);
        } // 多选框的回调
        ,
        pageSizeOptions: ['5', '10', '30', '100'] // 配置每页显示多少条数据
        ,
        rowKeyId: 'examId' // 配置每行的key值 设置唯一id
        ,
        onChangeTable: onChangeTable // 排序,分页,table的回调
        ,
        current: current
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
          className: (_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().alertCom_p),
          children: ["\u67E5\u8BE2\u7ED3\u679C\u6709", data && data.length, "\u6761\u8BB0\u5F55\uFF0C\u786E\u8BA4\u5BFC\u51FA\u5417\uFF1F"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_absentStat_module_scss__WEBPACK_IMPORTED_MODULE_5___default().alertCom_div),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ButtonCommon, {
            type: 'none',
            onClick: () => {
              exportExcelFn(data);
              setalertShow(false);
            },
            children: "\u786E\u5B9A"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ButtonCommon, {
            type: 'none',
            onClick: () => {
              setalertShow(false);
            },
            children: "\u53D6\u6D88"
          })]
        })]
      })
    }), flag === false ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Bullet, {
      Transfer: Transfer,
      id: '6',
      absenteeTitle: alertTitle,
      absenteeDate: alertDate
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbsentStatContent3);

/***/ })

};
;