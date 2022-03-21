exports.id = 5400;
exports.ids = [5400];
exports.modules = {

/***/ 5400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ classifyContent)
});

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(261);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);
// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__(5893);
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/management/content.module.scss
var content_module = __webpack_require__(6622);
var content_module_default = /*#__PURE__*/__webpack_require__.n(content_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/management/classify.tsx

// 树形组件的接口
function getTreeNodeData(params) {
  return http/* httpProvider.request */.A.request({
    url: 'tree-person/managementClassify',
    method: 'GET',
    params
  });
}
// EXTERNAL MODULE: ./src/components/TreeType/TreeType.tsx + 3 modules
var TreeType = __webpack_require__(5061);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/management/classifyContent/index.tsx



const CommonTable = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/components/management/classifyContent/index.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const ManagementForm = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(2327)]).then(__webpack_require__.bind(__webpack_require__, 2327)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2327)],
    modules: ["../src/components/management/classifyContent/index.tsx -> " + '@/components/form/part/managementForm']
  }
});








const ClassifyContent = () => {
  const IconFont = (0,icons_.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2981278_jqfipdnadnp.js'
  }); // 保存查询值

  const {
    0: searchVal,
    1: setSearchVal
  } = (0,external_react_.useState)();
  const {
    0: findFlag,
    1: setFindFlag
  } = (0,external_react_.useState)(false); // 查询的开关

  const {
    0: pageLength,
    1: setPageLength
  } = (0,external_react_.useState)(1); // 向后台传入的当前分页状态

  const {
    0: currentPage,
    1: setCurrentPage
  } = (0,external_react_.useState)({
    page: 1,
    pageSize: 10
  });
  const {
    0: pageCurrent,
    1: setPageCurrent
  } = (0,external_react_.useState)(1);
  const {
    0: classifyData,
    1: setClassifyData
  } = (0,external_react_.useState)([]);
  const {
    0: dataIsExist,
    1: setDataIsExist
  } = (0,external_react_.useState)(false); // 是否展示树状图

  const {
    0: foldTree
  } = (0,external_react_.useState)(false); // tree  title

  const {
    0: treeTypeList
  } = (0,external_react_.useState)({
    考试分类: 'exam',
    练习分类: 'practice',
    课程分类: 'course',
    试题分类: 'question',
    所属阶段: 'department'
  });
  const {
    0: treeType,
    1: setTreeType
  } = (0,external_react_.useState)('考试分类'); // 树形图

  const currentNode = (location, id) => {
    console.log(location, id);
  }; // 编辑方法


  const editClassify = record => {
    console.log(record);
    setTreeType(treeTypeList[record.title]);
  }; // 树状图内容


  const treeContent = /*#__PURE__*/jsx_runtime_.jsx(TreeType["default"], {
    type: treeType // 根分类选择
    ,
    getCurrentAndAncestorsTitles: currentNode // 获取节点信息函数

  });

  const content = /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (content_module_default()).classifyPop,
    children: treeContent
  }); // 表格数据


  const columns = [{
    title: '分类内容',
    dataIndex: 'title',
    width: '30%',
    ellipsis: true
  }, {
    title: '操作',
    key: 'id',
    width: '70%',
    ellipsis: true,
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      onClick: () => {
        editClassify(record);
      },
      children: /*#__PURE__*/jsx_runtime_.jsx((popover_default()), {
        placement: "rightTop",
        content: content,
        trigger: "click",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          style: {
            padding: '0 15px',
            cursor: 'pointer'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {})
        })
      })
    })
  }]; // 搜索筛选

  const searchClassify = async val => {
    setDataIsExist(false);
    setSearchVal(val.search);
    const res = await getTreeNodeData({
      page: currentPage.page,
      pageSize: currentPage.pageSize,
      type: val.search
    });
    setDataIsExist(true);
    setClassifyData(res.data);
    setPageLength(res.len);
  }; // 表格分页改变事件


  const onChangeTable = async pagination => {
    setDataIsExist(false);
    setCurrentPage({
      page: pagination.current,
      pageSize: pagination.pageSize
    });
    const res = await getTreeNodeData({
      page: pagination.current,
      pageSize: pagination.pageSize,
      type: searchVal
    });
    setDataIsExist(true);
    setClassifyData(res.data);
    setPageCurrent(pagination.current);
  };

  const getData = async () => {
    setDataIsExist(false);
    const res = await getTreeNodeData({});
    setDataIsExist(true);
    setClassifyData(res.data);
    setPageLength(res.len);
  };

  const resetData = () => {
    getData();
  };

  (0,external_react_.useEffect)(() => {
    getData();
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (content_module_default()).operationLogContentBox,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (content_module_default()).topBox,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconFont, {
          type: "icon-fl-renminbi"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u5206\u7C7B"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
        onClick: () => {
          setFindFlag(!findFlag);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx(IconFont, {
          type: "icon-arrow-down"
        }), "\u67E5\u8BE2"]
      })]
    }), foldTree && /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: treeContent
    }), findFlag && /*#__PURE__*/jsx_runtime_.jsx(ManagementForm, {
      labelName: ['search'],
      title: ['关键字检索'],
      keyData: ['search'],
      onFinish: value => {
        value ? searchClassify(value) : resetData();
      }
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (content_module_default()).table,
      children: /*#__PURE__*/jsx_runtime_.jsx(CommonTable, {
        data: classifyData,
        columns: columns,
        dataCount: pageLength,
        loading: false,
        rowKeyId: 'id',
        isCheckout: false,
        onChangeTable: onChangeTable,
        current: pageCurrent
      })
    }), !dataIsExist && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (content_module_default()).classifyLoding,
      children: /*#__PURE__*/jsx_runtime_.jsx((spin_default()), {})
    })]
  });
};

/* harmony default export */ const classifyContent = (ClassifyContent);

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