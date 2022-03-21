exports.id = 964;
exports.ids = [964];
exports.modules = {

/***/ 4075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_2": () => (/* binding */ getChildAdminAll),
/* harmony export */   "$t": () => (/* binding */ addChildAdmin),
/* harmony export */   "cj": () => (/* binding */ deleteChildAdmin),
/* harmony export */   "mO": () => (/* binding */ getChildAdminOne),
/* harmony export */   "jA": () => (/* binding */ editChildAdmin)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function getChildAdminAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/getChildAdminAll',
    method: 'GET',
    params
  });
}
function addChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/addChildAdmin',
    method: 'POST',
    data
  });
}
function deleteChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/deleteChildAdmin',
    method: 'DELETE',
    data
  });
}
function getChildAdminOne(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/getChildAdminOne',
    method: 'GET',
    params
  });
}
function editChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/editChildAdmin',
    method: 'PUT',
    data
  });
}

/***/ }),

/***/ 964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6418);
/* harmony import */ var antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2278);
/* harmony import */ var antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_divider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6622);
/* harmony import */ var _content_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_content_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5811);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_management_childAdmin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4075);
/* harmony import */ var _utils_timeCycle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5512);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);







const AddAdminContent = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 3094).then(__webpack_require__.bind(__webpack_require__, 3094)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3094)],
    modules: ["../src/components/management/childAdministratorContent/index.tsx -> " + './addAdmin/addAdmin']
  }
});
const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/components/management/childAdministratorContent/index.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const ManagementForm = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(2327)]).then(__webpack_require__.bind(__webpack_require__, 2327)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2327)],
    modules: ["../src/components/management/childAdministratorContent/index.tsx -> " + '@/components/form/part/managementForm']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/management/childAdministratorContent/index.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});






const AccountInformationContent = () => {
  const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2981278_as0m7njk5bk.js'
  });
  const {
    0: childAdmin,
    1: setChildAdmin
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 子管理员数据

  const {
    0: count,
    1: setCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // 子管理员的总数量

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1); // 当前页码

  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(10); // 分页  每页条数

  const {
    0: findFlag,
    1: setFindFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 查询的开关

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // loading

  const {
    0: isModalVisible,
    1: setIsModalVisible
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 添加子管理的弹框

  const {
    0: title,
    1: setTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 弹框标题

  const {
    0: editId,
    1: setEditId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); // 编辑id

  const {
    0: delId,
    1: setDelId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null); // 删除id

  const {
    0: delName,
    1: setDelName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 删除Name

  const {
    0: hintAlert,
    1: setHintAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 删除提示
  // 获取数据

  const getChildAdminData = async params => {
    setLoading(true);
    const res = await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_6__/* .getChildAdminAll */ ._2)(params);
    res.data[0].forEach(item => {
      item.createAt = (0,_utils_timeCycle__WEBPACK_IMPORTED_MODULE_8__/* .timeFormat */ .i)(item.createAt);
    });
    setChildAdmin(res.data[0]);
    setCount(res.data[1]);
    setLoading(false);
  }; // 表格数据


  const columns = [{
    title: '邮箱',
    dataIndex: 'email',
    width: '18%',
    ellipsis: true
  }, {
    title: '用户',
    dataIndex: 'name',
    ellipsis: true,
    width: '15%'
  }, {
    title: '手机号',
    dataIndex: 'phoneNum',
    width: '15%',
    ellipsis: true
  }, {
    title: '创建时间',
    dataIndex: 'createAt',
    width: '17%',
    ellipsis: true
  }, {
    title: '状态',
    dataIndex: 'status',
    width: '15%',
    ellipsis: true,
    render: text => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      children: text === 'active' ? '激活' : '禁用'
    })
  }, {
    title: '操作',
    key: '',
    width: '15%',
    ellipsis: true,
    render: text => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        style: {
          padding: '0 15px',
          cursor: 'pointer'
        },
        onClick: () => {
          // 编辑
          setTitle('编辑');
          setEditId(text.id);
          setIsModalVisible(true);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.FormOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
        style: {
          cursor: 'pointer'
        },
        onClick: async () => {
          // 弹出删除提示框
          setDelName(text.name);
          setDelId(text.id);
          setHintAlert(true);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.ClearOutlined, {})
      })]
    })
  }]; // 表格分页改变事件

  const onChangeTable = async pagination => {
    setLoading(true);
    setPage(pagination.current);
    setPageSize(pagination.pageSize);
    await getChildAdminData({
      page: pagination.current,
      pageSize: pagination.pageSize
    });
    setLoading(false);
  }; // 关闭 添加或编辑弹框


  const handleCancel = () => {
    setIsModalVisible(false);
    setEditId(null);
  }; // 查询


  const onFinsh = values => {
    setPage(1);
    setPageSize(5);

    if (values) {
      getChildAdminData({
        date: values.date,
        search: values.search
      });
    } else {
      getChildAdminData({});
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getChildAdminData({});
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_9___default().operationLogContentBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_9___default().topBox),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(IconFont, {
          type: "icon-wrench-fill"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: "\u5B50\u7BA1\u7406\u5458"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          onClick: () => {
            setFindFlag(!findFlag);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(IconFont, {
            type: "icon-arrow-down"
          }), "\u67E5\u8BE2"]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_divider__WEBPACK_IMPORTED_MODULE_2___default()), {
          style: {
            borderLeft: 'solid 1px #888'
          },
          type: "vertical"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("button", {
          onClick: () => {
            setTitle('新增子管理');
            setIsModalVisible(true);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(IconFont, {
            type: "icon-tianjiarenyuan"
          }), "\u65B0\u589E\u5B50\u7BA1\u7406"]
        })]
      })]
    }), findFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(ManagementForm, {
      labelName: ['search', 'date'],
      title: ['关键字检索', '创建时间'],
      keyData: ['search', 'date'],
      onFinish: onFinsh
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
      className: (_content_module_scss__WEBPACK_IMPORTED_MODULE_9___default().table),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(CommonTable, {
        data: childAdmin,
        columns: columns,
        dataCount: count,
        loading: loading,
        rowKeyId: 'id',
        isCheckout: false,
        current: page,
        pageSize: pageSize,
        pageSizeOptions: ['10', '20', '50', '100'],
        onChangeTable: onChangeTable
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_modal__WEBPACK_IMPORTED_MODULE_1___default()), {
      title: title,
      visible: isModalVisible,
      onCancel: handleCancel,
      destroyOnClose: true,
      maskClosable: false,
      footer: null,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(AddAdminContent, {
        close: setIsModalVisible,
        getChildAdminData: getChildAdminData,
        editId: editId,
        setEditId: setEditId,
        page: page,
        pageSize: pageSize
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(AlertCommon, {
      alertStatus: hintAlert,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: setHintAlert,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().hintContent),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().con),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.QuestionCircleFilled, {
            style: {
              marginRight: '5px',
              fontSize: '25px',
              color: '#f1a81a',
              verticalAlign: 'middle'
            }
          }), "\u662F\u5426\u5220\u9664\u8BE5\u7BA1\u7406\u5458\uFF1F"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().btnBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().del),
            onClick: async () => {
              const user = localStorage.getItem('user');

              if (user && user === delName) {
                setHintAlert(false);

                antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('不能删除已登录的账号');
              } else {
                setHintAlert(false);
                await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_6__/* .deleteChildAdmin */ .cj)({
                  id: delId
                });
                getChildAdminData({});
              }
            },
            children: "\u5220\u9664"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("button", {
            className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_10___default().cancel),
            onClick: () => {
              setHintAlert(false);
            },
            children: "\u53D6\u6D88"
          })]
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInformationContent);

/***/ }),

/***/ 5512:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ timeFormat)
/* harmony export */ });
const timeFormat = dateStr => {
  const date = new Date(dateStr);
  const years = date.getFullYear();
  const mon = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  return `${years}-${mon <= 9 ? '0' + mon : mon}-${day <= 9 ? '0' + day : day} ${hour <= 9 ? '0' + hour : hour}:${min <= 9 ? '0' + min : min}:${sec <= 9 ? '0' + sec : sec}`;
};

/***/ }),

/***/ 5811:
/***/ ((module) => {

// Exports
module.exports = {
	"hintContent": "childAdministratorContent_hintContent__pBnyH",
	"con": "childAdministratorContent_con__1xXaI",
	"btnBox": "childAdministratorContent_btnBox__Wsxqj",
	"del": "childAdministratorContent_del__783pd",
	"cancel": "childAdministratorContent_cancel__c_ECO"
};


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