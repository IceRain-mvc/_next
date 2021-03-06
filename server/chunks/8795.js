exports.id = 8795;
exports.ids = [8795];
exports.modules = {

/***/ 5529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9538);
/* harmony import */ var antd_lib_upload__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_upload__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9816);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5932);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7363);
/* harmony import */ var _component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2836);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


(react__WEBPACK_IMPORTED_MODULE_3___default().useLayoutEffect) = react__WEBPACK_IMPORTED_MODULE_3__.useEffect;







// / ?????????????????????
const sheetArr = ['??????', '??????', '??????', '????????????', '????????????', 'eMail', '??????', '????????????', '????????????', '??????', '??????', '??????']; // ????????????

const transfromData = dataList => {
  const data = [];
  dataList.forEach(async item => {
    data.push({
      studentName: item['??????'] || null,
      password: item['??????'] || null,
      studentNumber: item['??????'] || null,
      treePersonId: item['????????????'] || item['????????????'] || null,
      studentPhone: item['????????????'] || null,
      eMail: item['??????'] || null,
      studentId: item['????????????'] || null,
      studentState: item['??????'] === '??????' ? 'locked' : 'active',
      remark: item['??????'] || null,
      studentSex: item['??????'] && item['??????'] === '???' ? 1 : 0
    });
  });
  return data;
};

const ImportExcel = props => {
  // ??????????????????????????????
  const {
    layoutImportFlag,
    setLayoutImportFlag,
    importXlsxFlag,
    downImportXlsx
  } = props; // ??????????????????

  const {
    0: network,
    1: setNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // ?????????????????????

  const {
    0: dataList,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // ?????????????????????

  const {
    0: coverList,
    1: setList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // textarea

  const {
    0: textVal,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const boxT = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // ????????????????????????
  // const [] = useState(true)
  // ??????????????????

  const ImportParams = {
    name: '123456',
    headers: {
      authorization: 'authorization-text'
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {
        // @ts-ignore
        document.querySelector('.ant-upload-list').style.display = 'none';
      }

      if (info.file.status === 'done') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(`${info.file.name}????????????`);
      } else if (info.file.status === 'error') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().error(`${info.file.name}????????????`);
      }
    }

  }; // ??????excel??????

  const onImportExcel = async file => {
    setList([]);
    setData([]);
    setLayoutImportFlag(false); //   // ????????????

    const XLSX = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6302, 23))).default;
    let resData = [{}]; // ????????????????????????
    // ??????FileReader??????????????????

    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file); // ?????????

    fileReader.onload = async event => {
      try {
        var _event$target;

        const result = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result; // ???????????????????????????????????????excel????????????

        const workbook = XLSX.read(result, {
          type: 'binary'
        }); // ????????????????????????????????????????????????????????????????????????

        for (const sheet in workbook.Sheets) {
          // eslint-disable-next-line no-prototype-builtins
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // ?????? sheet_to_json ????????? excel ?????? json ??????
            resData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            break; // ????????????????????????????????????????????????
          }
        } // ????????????


        let content = '';
        const head = resData[0];
        const dList = [];
        const cList = [];
        let flag = true;

        if (!head['??????']) {
          content += '??????????????????????????????????????????????????????????????????????????????????????????????????????\n';
          flag = false;
        }

        if (!head['??????']) {
          content += '???????????????????????????????????????????????????\n\n';
          flag = false;
        } // ???????????????????????????


        const importSheetArr = Object.keys(head);
        importSheetArr.forEach(item => {
          if (!sheetArr.includes(item)) {
            content += `?????????????????????: ${item},???????????????????????????\n`;
            flag = false;
          }
        }); // // flag???????????????????????????

        if (flag) {
          const dataList = transfromData(resData);
          await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .findManyNumber */ .Rh)(dataList).then(res => {
            // ??????
            let contentSuccess = '';
            res === null || res === void 0 ? void 0 : res.list.forEach(item => {
              // ???????????????????????????
              cList.push(dataList[item]);
              contentSuccess += `???${item + 2}??? : ???????????????????????????${resData[item]['??????']}\n`;
            });
            res === null || res === void 0 ? void 0 : res.data.forEach(item => {
              dList.push(dataList[item]);
            });

            if (cList.length === 0) {
              content = `????????????${dataList.length}????????????\n\n`;
            } else {
              flag = false;
              content = `????????????${dataList.length - cList.length}????????????\n\n??????${cList.length}?????????????????????????????????,???????????????????????????,??????????????????\n\n${contentSuccess}`;
            }
          }).catch(err => {
            console.log(err);
            (0,_component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_7__.openNotificationWithIcon)('error', '??????????????????', '');
          });
        }

        await setLayoutImportFlag(flag);
        setData(dList);
        setList(cList);
        setText(content);
      } catch (e) {
        // ?????????????????????
        console.log('?????????????????????');
        console.log(resData);
        setText('??????????????????');
        (0,_component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_7__.openNotificationWithIcon)('error', '?????????????????????', '');
      }
    };

    return false;
  }; // ??????????????????


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // ???????????????????????????
    // ????????????????????????
    try {
      const img = new Image();
      img.src = `https://www.baidu.com/img/flexible/logo/pc/result.png`;

      img.onload = function () {
        setNetwork(true);
      };

      img.onerror = function () {
        setNetwork(false);
      };
    } catch {
      setNetwork(false);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // ????????????
    if (!importXlsxFlag) {
      layoutImportFlag && (async () => {
        dataList.length > 0 && (await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .addManyListData */ .Um)(dataList));
        coverList.length > 0 && (await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .changeDateNumber */ .Ah)(coverList));
      })();
    }

    return () => {
      console.log('????????????');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importXlsxFlag]);

  const cover = async () => {
    setText('????????????????????????, ?????????...'); // ????????????

    setText(`???????????????${coverList.length}?????????`);
  };

  if (!network) {
    /* ???????????????*/
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
      className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().network),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
        children: "\u672A\u68C0\u6D4B\u5230\u7F51\u7EDC\u94FE\u63A5"
      })
    });
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default()["import"]) || ""),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h4", {
      style: {
        marginBottom: '30px'
      },
      className: "jsx-4058791495",
      children: "\u7B2C\u4E00\u6B65\u3001\u4E0B\u8F7D\u5BFC\u5165\u6A21\u677F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().down) || ""),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
        // href="https://github.com/wqk0825/cdn/blob/master/excel/%E7%AE%80%E5%8D%95%E6%A8%A1%E7%89%88.xls?raw=true"
        href: "https://e.kaoshiyun.com.cn/Resource/User/UserImportTemplate.xls",
        download: "\u7B80\u5355\u6A21\u7248.xls",
        className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().download) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloudDownloadOutlined, {}), " \u7B80\u5355\u6A21\u7248 (\u70B9\u51FB\u4E0B\u8F7D)", ' ']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("a", {
        // href="https://github.com/wqk0825/cdn/blob/master/excel/%E5%AE%8C%E6%95%B4%E6%A8%A1%E7%89%88.xls?raw=true"
        href: "https://e.kaoshiyun.com.cn/Resource/User/UserImportTemplateAll.xls",
        download: "\u5B8C\u6574\u6A21\u7248.xls",
        className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().download) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloudDownloadOutlined, {}), " \u5B8C\u6574\u6A21\u7248 (\u70B9\u51FB\u4E0B\u8F7D)", ' ']
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h4", {
      style: {
        margin: '25px 0'
      },
      className: "jsx-4058791495",
      children: "\u7B2C\u4E8C\u6B65\u3001\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_upload__WEBPACK_IMPORTED_MODULE_0___default()), _objectSpread(_objectSpread({}, ImportParams), {}, {
      beforeUpload: onImportExcel,
      maxCount: 1,
      accept: ".xlsx,.xls",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
        className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().upload) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloudUploadOutlined, {}), "\u4E0A\u4F20\u5BFC\u5165\u6587\u4EF6"]
      })
    })), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("textarea", {
      ref: boxT,
      defaultValue: textVal,
      className: "jsx-4058791495" + " " + (classnames__WEBPACK_IMPORTED_MODULE_5___default()({
        [(_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().textarea)]: true,
        [(_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().textareaError)]: !(coverList.length > 0) && !layoutImportFlag,
        [(_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().textareaSuccess)]: coverList.length > 0 || layoutImportFlag
      }) || "")
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("footer", {
      className: "jsx-4058791495",
      children: [coverList.length > 0 && !layoutImportFlag && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("button", {
        onClick: async () => {
          await setLayoutImportFlag(true);
          await cover();
        },
        className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cover) || ""),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UpCircleOutlined, {}), " \u7EE7\u7EED\u5BFC\u5165,\u5E76\u66F4\u65B0\u5DF2\u5B58\u5728\u7684\u8D26\u53F7\u4FE1\u606F"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("button", {
        onClick: async () => {
          await setText('');
          await downImportXlsx();
        },
        style: {
          left: coverList.length > 0 && !layoutImportFlag ? '-25%' : 'calc(-50% + 51px)'
        },
        className: "jsx-4058791495" + " " + ((_index_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cancel) || ""),
        children: "\u5173\u95ED"
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default()), {
      id: "4058791495",
      children: []
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportExcel);

/***/ }),

/***/ 5932:
/***/ ((module) => {

// Exports
module.exports = {
	"import": "importExcel_import__thACr",
	"cover": "importExcel_cover__1ursZ",
	"cancel": "importExcel_cancel__oOvEq",
	"textarea": "importExcel_textarea__8TXJo",
	"textareaError": "importExcel_textareaError__N72ft",
	"textareaSuccess": "importExcel_textareaSuccess__TSrQx",
	"download": "importExcel_download__wkdGk",
	"upload": "importExcel_upload__Ft7C5",
	"network": "importExcel_network__f_f70",
	"modal": "importExcel_modal__eJ8_g",
	"ant-modal-content": "importExcel_ant-modal-content__lpriz"
};


/***/ })

};
;