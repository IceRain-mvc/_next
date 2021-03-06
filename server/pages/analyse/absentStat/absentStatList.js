(() => {
var exports = {};
exports.id = 2006;
exports.ids = [2006,2194,8291];
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
}); // ????????????

const AbsentStatList = props => {
  const {
    data = [],
    title
  } = props;
  const columns = [{
    title: '??????',
    dataIndex: 'absentee_nameID'
  }, {
    title: '??????',
    dataIndex: 'absentee_name'
  }, {
    title: '????????????',
    dataIndex: 'absentee_department'
  }, {
    title: '????????????',
    dataIndex: 'absentee_phoneNumber'
  }]; // ??????pagination?????????sorter  ??????????????? ????????????

  const onChangeTable = () => {// pagination: { current: any; pageSize: any },
    // sorter: { order: string; field: any }
    // ?????????
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
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // ??????excel;

  const exportExcelFn = async data => {
    // ????????????
    const exportExcel = await (await __webpack_require__.e(/* import() */ 1112).then(__webpack_require__.bind(__webpack_require__, 1112))).default; // ??????excel??????

    exportExcel(data, {
      absentee_nameID: '??????',
      //
      absentee_name: '??????',
      //
      absentee_department: '????????????',
      //
      absentee_phoneNumber: '????????????' //

    }, `${title}(????????????)`);
  };

  const search = name => {
    const date = [...data];
    const res = date.find(item => item.absentee_name.indexOf(name) !== -1);

    if (res === undefined) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().error('?????????');
    } else {
      setData2([res]);
      setFlag(false);
    }
  }; // ?????????????????????


  const {
    0: isque,
    1: setIsque
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('??????????????????');

  const menu = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
    onClick: key => {
      if (key.key === 'true') {
        setIsque('???');
      } else if (key.key === 'false') {
        setIsque('???');
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
            // ??????
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
            // ??????
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
        data: flag ? data : data2 // ??????
        ,
        dataCount: flag ? data.length || 0 : data2.length || 0 // ??????????????????
        ,
        columns: columns // ??????+??????
        ,
        isCheckout: true // ??????????????????
        ,
        loading: false // ????????????
        // onSelectChange={(selectedRowKeys, selectedRows) => {}} // ??????????????????
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        ,
        onSelectChange: () => {} // ??????????????????
        ,
        pageSizeOptions: ['5', '10', '20', '100'] // ?????????????????????????????????
        // defaultPageSize={5} // ???????????????????????????
        ,
        rowKeyId: 'absentee_id' // ???????????????key??? ????????????id
        ,
        onChangeTable: onChangeTable // ??????,??????,table?????????

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


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 2071:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 1788:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 6190:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 5893:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

/***/ }),

/***/ 3526:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/select");

/***/ }),

/***/ 7374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 4285:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6302:
/***/ ((module) => {

"use strict";
module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152], () => (__webpack_exec__(8291)));
module.exports = __webpack_exports__;

})();