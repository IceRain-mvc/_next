exports.id = 5641;
exports.ids = [5641,5764,6594];
exports.modules = {

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yE": () => (/* binding */ getOperationData),
/* harmony export */   "TH": () => (/* binding */ addOperationData),
/* harmony export */   "Kn": () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取全部数据

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // 添加数据

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // 获取ip地址

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

/***/ }),

/***/ 5641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6622);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_content_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5764);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);



const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/components/management/operationLogContent/index.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const ManagementForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(2327)]).then(__webpack_require__.bind(__webpack_require__, 2327)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2327)],
    modules: ["../src/components/management/operationLogContent/index.tsx -> " + '@/components/form/part/managementForm']
  }
});

 // <script src="http://pv.sohu.com/cityjson?ie=utf-8"></script>;




const OperationLogContent = () => {
  const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2981278_8e5mlve6tua.js'
  }); // 数据总数

  const {
    0: dataCount,
    1: setDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0); // 查询的开关

  const {
    0: findFlag,
    1: setFindFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 获取全部数据

  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // 分页默认条数

  const {
    0: defultNumber,
    1: setDefultNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10); // 分页页码

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // loading动画

  const {
    0: loading,
    1: setloading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // 时间

  const {
    0: timeDate,
    1: setTimeDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined); // 搜索框

  const {
    0: searchs,
    1: setSearchs
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined); // 处理时间

  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 获取数据+分页+搜索


  const getOperationLogData = async params => {
    setloading(true);
    const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_2__/* .getOperationData */ .yE)(params); // console.log(res);

    const lastRes = res[0].map(item => {
      item.createAt = renderTime(item.createAt);
      return item;
    });

    if (lastRes) {
      setData(res[0]);
      setDataCount(res[1]);
      setloading(false);
    }
  };

  const getCont = values => {
    if (values) {
      const {
        search,
        date
      } = values;
      console.log(search, date);
      setSearchs(search);
      setTimeDate(date);
      getOperationLogData({
        search,
        date
      });
    } else {
      getOperationLogData({});
    }

    setPage(1);
    setFindFlag(false);
  }; // 默认逻辑


  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // geAddressIP();
    // 获取全部数据
    getOperationLogData({}); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 表格数据

  const columns = [{
    title: '操作人姓名',
    dataIndex: 'operationName',
    width: '15%',
    ellipsis: true,
    sorter: true
  }, {
    title: '操作时间',
    dataIndex: 'createAt',
    ellipsis: true,
    width: '15%',
    sorter: true
  }, {
    title: 'IP地址',
    dataIndex: 'IPAddress',
    width: '15%',
    ellipsis: true,
    sorter: true
  }, {
    title: '操作类型',
    dataIndex: 'operationType',
    width: '15%',
    ellipsis: true,
    sorter: true
  }, {
    title: '详细内容',
    dataIndex: 'detail',
    width: '40%',
    ellipsis: true,
    sorter: true,
    // eslint-disable-next-line consistent-return
    render: text => {
      // console.log(text);
      if (text) {
        let snArray = []; // 如果返回的是逗号分割需要转化一下 snArray = text.replace(/\,/g,'\n')

        snArray = text.split(' '); // console.log(snArray);

        const br = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("br", {});

        let result = null;

        if (snArray.length < 2) {
          return text;
        }

        for (let i = 0; i < snArray.length; i++) {
          if (i === 0) {
            result = snArray[i];
          } else {
            result = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
              children: [result, br, snArray[i]]
            });
          }
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: result
        });
      }
    }
  }]; // 表格分页改变事件

  const onChangeTable = (pagination, filters, sorter) => {
    console.log(sorter);
    console.log(pagination);
    setloading(true);
    const order = !sorter.order || sorter.order === 'ascend' ? 'ASC' : 'DESC'; //

    getOperationLogData({
      page: pagination.current,
      pageSize: pagination.pageSize,
      field: sorter.field,
      order,
      search: searchs,
      date: timeDate
    }); // 默认页码

    setDefultNumber(pagination.pageSize); // 页数

    setPage(pagination.current);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().operationLogContentBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().topBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IconFont, {
          type: "icon-xiongmaojiaoyin"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("span", {
          children: "\u64CD\u4F5C\u65E5\u5FD7"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("button", {
        onClick: () => {
          setFindFlag(!findFlag);
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(IconFont, {
          type: "icon-arrow-down"
        }), "\u67E5\u8BE2"]
      })]
    }), findFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(ManagementForm, {
      labelName: ['search', 'date'],
      title: ['关键字检索', '创建时间'],
      keyData: ['search', 'date'],
      onFinish: value => {
        // console.log(value);
        getCont(value);
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_5___default().table),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CommonTable, {
        data: data,
        columns: columns,
        current: page // 页码
        ,
        pageSize: defultNumber // 默认每页显示多少
        ,
        dataCount: dataCount // 总条数
        ,
        loading: loading,
        rowKeyId: 'id',
        isCheckout: false,
        onChangeTable: onChangeTable
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OperationLogContent);

/***/ }),

/***/ 6622:
/***/ ((module) => {

// Exports
module.exports = {
	"operationLogContentBox": "content_operationLogContentBox__LnixC",
	"topBox": "content_topBox__QW2HX",
	"table": "content_table__uOLcb",
	"classifyPop": "content_classifyPop__m_T7R",
	"classifyLoding": "content_classifyLoding__T4Axu"
};


/***/ })

};
;