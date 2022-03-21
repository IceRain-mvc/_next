exports.id = 8291;
exports.ids = [8291];
exports.modules = {

/***/ 8291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3429);
/* harmony import */ var _absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const ButtonCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.ButtonCommon), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["analyse/absentStat/absentStatList.tsx -> " + '@/components/form/form']
  }
});
const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["analyse/absentStat/absentStatList.tsx -> " + '@/components/commonTable/commonTable']
  }
}); // 弹框参数

const AbsentStatList = props => {
  const {
    data = [],
    title
  } = props;
  const columns = [{
    title: '账号',
    dataIndex: 'absentee_nameID'
  }, {
    title: '姓名',
    dataIndex: 'absentee_name'
  }, {
    title: '所属部门',
    dataIndex: 'absentee_department'
  }, {
    title: '手机号码',
    dataIndex: 'absentee_phoneNumber'
  }]; // 分页pagination、排序sorter  改变时触发 然后请求

  const onChangeTable = () => {// pagination: { current: any; pageSize: any },
    // sorter: { order: string; field: any }
    // 存起来
  };

  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const {
    0: data2,
    1: setData2
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: iptValue,
    1: setIptValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 导出excel;

  const exportExcelFn = async data => {
    // 导出方法
    const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default; // 导出excel数据

    exportExcel(data, {
      absentee_nameID: '账号',
      //
      absentee_name: '姓名',
      //
      absentee_department: '所属部门',
      //
      absentee_phoneNumber: '手机号码' //

    }, `${title}(缺考人员)`);
  };

  const search = name => {
    const date = [...data];
    const res = date.find(item => item.absentee_name.indexOf(name) !== -1);

    if (res === undefined) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().error('未找到');
    } else {
      setData2([res]);
      setFlag(false);
    }
  }; // 点击内部每一个


  const {
    0: isque,
    1: setIsque
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('未交卷算缺考');

  const menu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
    onClick: key => {
      if (key.key === 'true') {
        setIsque('是');
      } else if (key.key === 'false') {
        setIsque('否');
      }
    },
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
      children: "\u662F"
    }, "true"), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
      children: "\u5426"
    }, "false")]
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().search),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().left),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_0___default()), {
          overlay: menu,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            className: "ant-dropdown-link",
            onClick: e => e.preventDefault(),
            children: [isque, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DownOutlined, {})]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
          placeholder: "\u8BF7\u8F93\u5165\u540D\u79F0\u67E5\u8BE2",
          className: (_absentStatList_module_scss__WEBPACK_IMPORTED_MODULE_7___default().input),
          type: "text",
          value: iptValue,
          onChange: e => setIptValue(e.target.value),
          onKeyUp: e => {
            if (e.key === 'Enter') {
              if (iptValue === '') {
                setIptValue('');
                setFlag(true);
              } else {
                search(iptValue);
              }
            }
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(ButtonCommon, {
          onClick: () => {
            // 搜索
            if (iptValue === '') {
              setIptValue('');
              setFlag(true);
            } else {
              search(iptValue);
            }
          },
          type: 'blueLight',
          children: "\u2003\u67E5\u8BE2\u2003"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ButtonCommon, {
          type: 'greyLight',
          onClick: () => {
            // 刷新
            setIptValue('');
            setFlag(true);
          },
          children: ["\u2003", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.RedoOutlined, {}), "\u2003"]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: "rigth",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(ButtonCommon, {
          type: 'greyLight',
          onClick: () => {
            exportExcelFn(flag ? data : data2);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DownloadOutlined, {}), "\u5BFC\u51FA"]
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: "table",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(CommonTable, {
        data: flag ? data : data2 // 数据
        ,
        dataCount: flag ? data.length || 0 : data2.length || 0 // 数据的总条数
        ,
        columns: columns // 标题+内容
        ,
        isCheckout: true // 是否使用多选
        ,
        loading: false // 加载动画
        // onSelectChange={(selectedRowKeys, selectedRows) => {}} // 多选框的回调
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ,
        onSelectChange: () => {} // 多选框的回调
        ,
        pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
        // defaultPageSize={5} // 默认显示多少条数据
        ,
        rowKeyId: 'absentee_id' // 配置每行的key值 设置唯一id
        ,
        onChangeTable: onChangeTable // 排序,分页,table的回调

      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AbsentStatList);

/***/ }),

/***/ 3429:
/***/ ((module) => {

// Exports
module.exports = {
	"search": "absentStatList_search__IxhUg",
	"left": "absentStatList_left__DBdNL",
	"input": "absentStatList_input__6qnpv"
};


/***/ })

};
;