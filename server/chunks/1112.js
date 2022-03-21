"use strict";
exports.id = 1112;
exports.ids = [1112];
exports.modules = {

/***/ 1112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable guard-for-in */
 // 将指定的自然数转换为26进制表示。映射关系：[0-25] -> [A-Z]。

const getCharCol = numb => {
  let str26 = '';
  let start = 0;

  while (numb > 0) {
    start = numb % 26 + 1;
    str26 = String.fromCharCode(start + 64) + str26;
    numb = (numb - start) / 26;
  }

  return str26;
}; // 字符串转字符流


const stringturn = str => {
  const buf = new ArrayBuffer(str.length);
  const view = new Uint8Array(buf);

  for (let i = 0; i !== str.length; ++i) {
    // eslint-disable-next-line no-bitwise
    view[i] = str.charCodeAt(i) & 0xff;
  }

  return buf;
};

const ExportExcel = (data, obj, filename) => {
  // 根据data数据，获取excel的第一行(例如:姓名、年龄、性别)存至map
  data = [...data];
  let tmpdata = obj;
  data.unshift({});
  const keyMap = []; // 获取keys

  const colsList = [];

  for (const exportk in tmpdata) {
    keyMap.push(exportk);
    colsList.push({
      wpx: 100
    });
    data[0][exportk] = tmpdata[exportk];
  }

  tmpdata = [];
  data.map((item, index) => keyMap.map((keys, kindex) => ({
    rowsvalue: item[keys],
    position: (kindex > 25 ? getCharCol(kindex) : String.fromCharCode(65 + kindex)) + (index + 1),
    fontsize: {
      fontstyle: {
        long: 20,
        big: true
      }
    }
  }))).reduce((prev, next) => prev.concat(next)).forEach(rows => {
    rows.rowsvalue = rows.rowsvalue === null ? ' ' : rows.rowsvalue;
    tmpdata[rows.position] = {
      v: rows.rowsvalue
    };
  }); // 设置区域,比如表格从A1到D10

  const outputPos = Object.keys(tmpdata);
  const tmpWB = {
    SheetNames: [],
    // 保存的表标题
    Sheets: {}
  };
  const sheetName = 'sheet1';
  tmpWB.SheetNames.push(sheetName);
  tmpWB.Sheets[sheetName] = _objectSpread(_objectSpread({}, tmpdata), {}, {
    // 内容
    '!ref': outputPos[0] + ':' + outputPos[outputPos.length - 1],
    // 设置填充区域
    '!cols': colsList
  }); // 创建二进制对象写入转换好的字节流

  const tmpDown = new Blob([stringturn(xlsx__WEBPACK_IMPORTED_MODULE_0___default().write(tmpWB, {
    bookType: 'xlsx',
    bookSST: false,
    type: 'binary'
  } // 这里的数据是用来定义导出的格式类型
  ))], {
    type: ''
  });
  const timestamp = new Date().getTime();
  const href = URL.createObjectURL(tmpDown); // 创建对象超链接

  const aLink = document.createElement('a');
  aLink.href = href; // 绑定a标签

  aLink.download = `${filename}_${timestamp}.xlsx`;
  aLink.click(); // 模拟点击实现下载

  setTimeout(function () {
    // 延时释放
    // @ts-ignore
    URL.revokeObjectURL(tmpDown); // 用URL.revokeObjectURL()来释放这个object URL
  }, 100);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExportExcel);

/***/ })

};
;