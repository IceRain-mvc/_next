"use strict";
exports.id = 4703;
exports.ids = [4703];
exports.modules = {

/***/ 4703:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


(react__WEBPACK_IMPORTED_MODULE_0___default().useLayoutEffect) = react__WEBPACK_IMPORTED_MODULE_0__.useEffect;


const Table = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 4285, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4285)],
    modules: ["../src/components/commonTable/commonTable.tsx -> " + 'antd/lib/table']
  }
});

const CommonTable = props => {
  const {
    data,
    // 数据
    dataCount,
    // 数据的总条数
    isCheckout,
    // 是否使用多选
    columns,
    // 标题内容
    loading,
    // 加载动画
    onSelectChange,
    // 多选框的回调
    pageSizeOptions,
    // 配置每页显示多少条数据
    pageSize,
    // 默认显示多少条数据
    rowKeyId,
    // 配置每行的key值 设置唯一id
    onChangeTable,
    // 排序,分页table的回调
    current = 1
  } = props;
  const rowSelection = isCheckout ? {
    onChange: onSelectChange
  } : undefined;
  const {
    0: pageSizeState,
    1: setPageSizeState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (pageSizeOptions) {
      setPageSizeState({
        pageSizeOptions: pageSizeOptions
      });
    }
  }, [pageSizeOptions]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Table, {
    rowSelection: rowSelection,
    loading: loading,
    size: 'middle',
    bordered: true,
    pagination: _objectSpread(_objectSpread({}, pageSizeState), {}, {
      position: ['bottomLeft'],
      total: dataCount,
      showSizeChanger: true,
      showQuickJumper: true,
      showTitle: false,
      showTotal: total => `共 ${total} 条记录`,
      defaultPageSize: pageSize,
      current
    }),
    columns: columns,
    dataSource: data,
    rowKey: rowKeyId,
    onChange: onChangeTable
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonTable);

/***/ })

};
;