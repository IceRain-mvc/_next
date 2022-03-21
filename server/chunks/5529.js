exports.id = 5529;
exports.ids = [5529,8795];
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







// / 判断多余的表单
const sheetArr = ['账号', '密码', '姓名', '所属阶段', '所属部门', 'eMail', '邮箱', '手机号码', '证件号码', '性别', '状态', '备注']; // 转换数据

const transfromData = dataList => {
  const data = [];
  dataList.forEach(async item => {
    data.push({
      studentName: item['姓名'] || null,
      password: item['密码'] || null,
      studentNumber: item['账号'] || null,
      treePersonId: item['所属阶段'] || item['所属部门'] || null,
      studentPhone: item['手机号码'] || null,
      eMail: item['邮箱'] || null,
      studentId: item['证件号码'] || null,
      studentState: item['状态'] === '禁用' ? 'locked' : 'active',
      remark: item['备注'] || null,
      studentSex: item['性别'] && item['性别'] === '男' ? 1 : 0
    });
  });
  return data;
};

const ImportExcel = props => {
  // 判断关闭是否添加数据
  const {
    layoutImportFlag,
    setLayoutImportFlag,
    importXlsxFlag,
    downImportXlsx
  } = props; // 判断是否联网

  const {
    0: network,
    1: setNetwork
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 批量添加的数据

  const {
    0: dataList,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // 需要覆盖的数据

  const {
    0: coverList,
    1: setList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // textarea

  const {
    0: textVal,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const boxT = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null); // 关闭添加数据节流
  // const [] = useState(true)
  // 导入弹框开始

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
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(`${info.file.name}加载成功`);
      } else if (info.file.status === 'error') {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().error(`${info.file.name}加载失败`);
      }
    }

  }; // 读取excel数据

  const onImportExcel = async file => {
    setList([]);
    setData([]);
    setLayoutImportFlag(false); //   // 按需引入

    const XLSX = (await Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6302, 23))).default;
    let resData = [{}]; // 存储获取到的数据
    // 通过FileReader对象读取文件

    const fileReader = new FileReader();
    fileReader.readAsBinaryString(file); // 二进制

    fileReader.onload = async event => {
      try {
        var _event$target;

        const result = (_event$target = event.target) === null || _event$target === void 0 ? void 0 : _event$target.result; // 以二进制流方式读取得到整份excel表格对象

        const workbook = XLSX.read(result, {
          type: 'binary'
        }); // 遍历每张工作表进行读取（这里默认只读取第一张表）

        for (const sheet in workbook.Sheets) {
          // eslint-disable-next-line no-prototype-builtins
          if (workbook.Sheets.hasOwnProperty(sheet)) {
            // 利用 sheet_to_json 方法将 excel 转成 json 数据
            resData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet]);
            break; // 如果只取第一张表，就取消注释这行
          }
        } // 操作数据


        let content = '';
        const head = resData[0];
        const dList = [];
        const cList = [];
        let flag = true;

        if (!head['账号']) {
          content += '缺少【账号】列名，请不要修改模板名（账号可以是手机、工号、身份证等）\n';
          flag = false;
        }

        if (!head['姓名']) {
          content += '缺少【姓名】列名，请不要修改模板名\n\n';
          flag = false;
        } // 判断是否有多余模块


        const importSheetArr = Object.keys(head);
        importSheetArr.forEach(item => {
          if (!sheetArr.includes(item)) {
            content += `无法识别的列名: ${item},请不要修改模版列名\n`;
            flag = false;
          }
        }); // // flag是否为成功或者失败

        if (flag) {
          const dataList = transfromData(resData);
          await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .findManyNumber */ .Rh)(dataList).then(res => {
            // 成功
            let contentSuccess = '';
            res === null || res === void 0 ? void 0 : res.list.forEach(item => {
              // 添加需要替换的数据
              cList.push(dataList[item]);
              contentSuccess += `第${item + 2}行 : 系统中已经存在账号${resData[item]['账号']}\n`;
            });
            res === null || res === void 0 ? void 0 : res.data.forEach(item => {
              dList.push(dataList[item]);
            });

            if (cList.length === 0) {
              content = `导入成功${dataList.length}个新账号\n\n`;
            } else {
              flag = false;
              content = `导入成功${dataList.length - cList.length}个新账号\n\n以下${cList.length}个账号在系统中已经存在,您可以点击底部按钮,执行更新操作\n\n${contentSuccess}`;
            }
          }).catch(err => {
            console.log(err);
            (0,_component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_7__.openNotificationWithIcon)('error', '导入模块失败', '');
          });
        }

        await setLayoutImportFlag(flag);
        setData(dList);
        setList(cList);
        setText(content);
      } catch (e) {
        // 文件类型不正确
        console.log('文件类型不正确');
        console.log(resData);
        setText('导入模块失败');
        (0,_component_studentManage_utils_notification__WEBPACK_IMPORTED_MODULE_7__.openNotificationWithIcon)('error', '文件类型不正确', '');
      }
    };

    return false;
  }; // 导入弹框结束


  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // 组件销毁前执行添加
    // 判断用户是否联网
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
    // 添加数据
    if (!importXlsxFlag) {
      layoutImportFlag && (async () => {
        dataList.length > 0 && (await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .addManyListData */ .Um)(dataList));
        coverList.length > 0 && (await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_6__/* .changeDateNumber */ .Ah)(coverList));
      })();
    }

    return () => {
      console.log('组件卸载');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [importXlsxFlag]);

  const cover = async () => {
    setText('正在执行导入数据, 请稍候...'); // 覆盖操作

    setText(`已覆盖更新${coverList.length}个账号`);
  };

  if (!network) {
    /* 未联网覆盖*/
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

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "openNotificationWithIcon": () => (/* binding */ openNotificationWithIcon)
/* harmony export */ });
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3528);
/* harmony import */ var antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_notification__WEBPACK_IMPORTED_MODULE_0__);

// Success成功  Info信息  Warning警告  Error错误
const openNotificationWithIcon = (type, content, desc) => {
  return (antd_lib_notification__WEBPACK_IMPORTED_MODULE_0___default())[type]({
    message: content,
    description: desc
  });
};

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