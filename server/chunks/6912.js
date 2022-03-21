"use strict";
exports.id = 6912;
exports.ids = [6912];
exports.modules = {

/***/ 6912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ artifical)
});

// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/analyse/artifical/index.module.scss
var index_module = __webpack_require__(8186);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/analyse/analyse_artifical/index.ts
 // 获取数据接口

function getAll(params) {
  return http/* httpProvider.request */.A.request({
    url: 'manual/getAll',
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
// EXTERNAL MODULE: ./src/analyse/examination/examinee/examinee.module.scss
var examinee_module = __webpack_require__(7452);
var examinee_module_default = /*#__PURE__*/__webpack_require__.n(examinee_module);
// EXTERNAL MODULE: ./src/components/form/part/headerTable.tsx
var headerTable = __webpack_require__(4723);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/analyse/artifical/artifical.tsx



const MyTable = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/artifical/artifical.tsx -> " + '@component/commonTable/commonTable']
  }
}); // 表格组件

const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/artifical/artifical.tsx -> " + '@component/TreeType/TreeType']
  }
}); // 无限极菜单组件

const Spin = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 261, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(261)],
    modules: ["../src/analyse/artifical/artifical.tsx -> " + 'antd/lib/spin']
  }
});
 // 获取数据





 // antd组件





const Bullet = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9042), __webpack_require__.e(3426)]).then(__webpack_require__.bind(__webpack_require__, 3426)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3426)],
    modules: ["../src/analyse/artifical/artifical.tsx -> " + '@/analyse/popup']
  }
}); // 弹框

const Popout = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(8713), __webpack_require__.e(7443)]).then(__webpack_require__.bind(__webpack_require__, 8713)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(8713)],
    modules: ["../src/analyse/artifical/artifical.tsx -> " + './artificalSon/popout']
  }
}); // 导出组件

const Demand = () => {
  let {
    0: timer
  } = (0,external_react_.useState)(null); // 搜索防抖

  const {
    0: classify,
    1: Setclassify
  } = (0,external_react_.useState)('考试分类');
  const {
    0: stageId,
    1: setStageId
  } = (0,external_react_.useState)(undefined);
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
  const {
    0: rotary,
    1: Secretary
  } = (0,external_react_.useState)(false); // 获取数据

  const getDate = async params => {
    // 获取数据
    Secluding(true);
    await getAll(params).then(res => {
      console.log(res);

      if (res) {
        setList(res.data[0]);
        setTotal(res.data[1]);

        if (res.data) {
          Secluding(false);
        }
      }
    }).catch(() => {
      console.log();
    }); // const res: ListArtifical = await getAll(params);
    // setList(res.data[0]);
    // setTotal(res.data[1]);
    // if (res.data) {
    //   Secluding(false);
    // }
    // return res;
  };

  const onSelectChange = e => {
    // 复选框事件
    setBoxes(e);
  }; // 处理时间


  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 树状头部


  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: classify
    }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 创建接收函数


  const currentNode = (location, id) => {
    Setclassify(location.split('/')[location.split('/').length - 1]);
    setStageId(id);
    clearTimeout(timer);
    timer = setTimeout(() => {
      getDate({
        keyword,
        time,
        page,
        pageSize,
        classify: id
      });
    }, 500);
  };

  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
    type: 'exam',
    getCurrentAndAncestorsTitles: currentNode,
    openSelectChildren: true
  }); // 标题


  const columns = [{
    id: '1',
    title: '考试名称',
    dataIndex: 'authName'
  }, {
    id: '2',
    title: '开始时间/结束时间',

    render(e) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [renderTime(e.startTime), "\uFF5E", renderTime(e.endTime)]
      });
    }

  }, {
    id: '3',
    title: '试卷类型',

    render(e) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [e.participation === '1' ? '固定试卷' : '', e.participation === '3' ? '抽题试卷' : '', e.participation === '2' ? '随机试卷' : '']
      });
    }

  }, {
    id: '4',
    title: '总分/及格分数',

    render(e) {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [e.participants, "/", e.qualified]
      });
    }

  }, {
    id: '5',
    title: '交卷数',
    dataIndex: 'handed'
  }, {
    id: '6',
    title: '未评卷数',
    dataIndex: 'not'
  }, {
    id: '7',
    title: '已评卷数',
    dataIndex: 'already'
  }, {
    id: '8',
    title: '操作',
    render: e => {
      return /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (index_module_default()).lc,
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => {
            setFlag(!flag);
            setId('3');
            setIdentification(e.id);
          },
          href: '#',
          children: "\u5224\u5377"
        })
      });
    }
  }]; // 传递到弹框的参数

  const Transfer = () => {
    setFlag(!flag);
  }; // 页码 页数点击事件


  const onChangeTable = e => {
    setPage(e.current);
    setPageSize(e.pageSize);
    getDate({
      keyword,
      time,
      page: e.current,
      pageSize: e.pageSize,
      stageId
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
        className: (index_module_default()).header,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.BarChartOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u4EBA\u5DE5\u8BC4\u5377"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(layout_.Content, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (index_module_default()).tops,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (examinee_module_default()).aaa,
            children: [/*#__PURE__*/jsx_runtime_.jsx(headerTable["default"] // 关键字查找
            , {
              PoContent: content,
              PoTitle: title,
              onClick: () => {
                getDate({});
              },
              onFinish: async values => {
                const {
                  search,
                  date
                } = values;
                setKeyword(search);
                setTime(values.data);

                if (search || date) {
                  await getDate({
                    time: values.date,
                    keyword: search,
                    page,
                    pageSize,
                    stageId
                  }); // Secretary(true);
                  // if (res.data) {
                  //   setTimeout(() => {
                  //     Secretary(false);
                  //   }, 200);
                  // }
                } else {
                  message_default().error('没有查询信息');
                }

                if (search) {
                  console.log('change事件触发了');
                }
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (index_module_default()).dao,
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(form_form.ButtonCommon, {
                onClick: () => {
                  setNegation(!negation);
                },
                type: 'none',
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.DownloadOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  className: (index_module_default()).cha,
                  children: "\u5BFC\u51FA"
                })]
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (index_module_default()).context,
            children: /*#__PURE__*/jsx_runtime_.jsx(MyTable, {
              data: list && list // 数据
              ,
              dataCount: total // 数据的总条数
              ,
              columns: columns // 标题+内容
              ,
              isCheckout: true // 是否使用多选
              ,
              loading: lauding // 加载动画
              ,
              onSelectChange: onSelectChange // 多选框的回调
              ,
              pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
              ,
              onChangeTable: onChangeTable // 排序,分页,table的回调
              ,
              rowKeyId: 'id',
              current: page,
              pageSize: pageSize
            })
          })]
        })
      })]
    }), flag === true ? /*#__PURE__*/jsx_runtime_.jsx(Bullet, {
      Transfer: Transfer,
      id: id,
      distinction: '1',
      identification: identification
    }) : null, negation === true && /*#__PURE__*/jsx_runtime_.jsx(Popout, {
      id: '1',
      boxes: boxes,
      list: list,
      matrix: matrix
    }), rotary === true && /*#__PURE__*/jsx_runtime_.jsx(Spin, {
      className: (examinee_module_default()).mark
    })]
  });
};

/* harmony default export */ const artifical = (Demand);

/***/ })

};
;