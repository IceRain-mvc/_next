exports.id = 4304;
exports.ids = [4304];
exports.modules = {

/***/ 4304:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6523);
/* harmony import */ var _uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2978);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const UploadDocument = props => {
  //  接收获取弹框内容的事件
  const {
    obtainData,
    chapterItem,
    clearContents
  } = props; // 上传文件节点

  const uploadInp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 上传状态节点

  const uploadDocument = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 控制上传状态隐藏显示

  const {
    0: inpDis,
    1: setInpDis
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 控制上传按钮可不可以点击

  const {
    0: displ,
    1: setDispl
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // 上传成功后的icon图标

  const {
    0: uploadIcon,
    1: setUploadIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('icon-jia');
  const {
    0: jasonP,
    1: setJasonP
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
    children: "\u8BF7\u9009\u62E9MD\u683C\u5F0F\u6587\u6863"
  }));
  const {
    0: attention,
    1: setAttention
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
    children: "(\u5176\u5B83\u7C7B\u578B\u6587\u6863\u8BF7\u5148\u8F6CMD)"
  })); // 控制右上角X号

  const {
    0: cancel,
    1: setCancel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 章节名称

  const {
    0: chapterName,
    1: setChapterName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.serialName : ''); // 章节学时

  const {
    0: chapterTime,
    1: setChapterTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? String(chapterItem.serialTime) : '60'); // 上传的文件名称

  const {
    0: fileName,
    1: setFileName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileName : ''); // 上传文件的地址

  const {
    0: fileAddress,
    1: setFileAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileAddressMd ? chapterItem.fileAddressMd : '' : ''); // 在 iconfont.cn 上生成

  const MyIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992472_6nj24f81zbp.js'
  }); // 点击伪装器

  const submit = () => {
    // 调用上传文件的事件
    uploadInp.current.click();
  }; // 点击上传文件弹出先择文件弹框


  const uploadFile = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    } // 判断上传的文件是不是md格式的


    if (!file.name.includes('md')) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('请上传MD格式文件');

      return;
    } // 判断文件是否大于10MB


    if (file.size > 10485760) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('课程体验试用，单个文件不能超过10M');

      return;
    } // 打开上传状态


    setDispl('block'); // 上传按钮不可点击

    setInpDis(true);
    const res = await (0,_upload__WEBPACK_IMPORTED_MODULE_5__/* .uploadToGithub */ .R)(file.name, file); // 关闭上传状态

    setDispl('none'); // // 上传按钮可点击
    // setInpDis(false);
    // 把添加图标改为文件PDF图标

    setUploadIcon('icon-md'); // 修改底部文字为该PDF名字

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: file.name
    }));
    setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MyIcon, {
        type: "icon-chenggong"
      }), "\u4E0A\u4F20\u6210\u529F"]
    })); // 显示右上角X号

    setCancel(true); // 获取上传的文件名称

    setFileName(file.name); // 获取上传地址

    setFileAddress(res[1].uploadUrl);

    if (res[0]) {
      // message.warning('上传成功');
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('上传成功');
    }
  }; // 点击X号取消选中当前文件


  const cancelFile = e => {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('已取消'); // 取消冒泡事件
    // 如果传入了对象，那么就是非IE浏览器，才用W3C标准方法


    if (e || e.stopPropagation) {
      e.stopPropagation();
    } else {
      // 才用IE的停止事件冒泡的方法
      window.event.cancelBubble = true;
    }

    setUploadIcon('icon-jia'); // 修改底部文字为该PDF名字

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "\u8BF7\u9009\u62E9MD\u683C\u5F0F\u6587\u6863"
    }));
    setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "(\u5176\u5B83\u7C7B\u578B\u6587\u6863\u8BF7\u5148\u8F6CMD)"
    })); // 将X号删除

    setCancel(false); // 把样式清楚之后需要把缓存也清除了
    // 把文件名字和文件地址都清除了

    setFileName('');
    setFileAddress(''); // 上传按钮可点击

    setInpDis(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const obj = _objectSpread({}, chapterItem); // 章节名称


    obj.serialName = chapterName; // 章节学时

    if (/^\d+$/.test(chapterTime)) {
      obj.serialTime = Number(chapterTime);
    } else {
      obj.serialTime = 0;
    } // 上传文件的名称


    obj.fileName = fileName; // 上传的文件地址

    obj.fileAddressMd = fileAddress;
    obtainData(obj); // eslint-disable-next-line @typescript-eslint/no-empty-function

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterName, chapterTime, fileName, fileAddress]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (chapterItem && chapterItem.fileName && chapterItem.fileAddressMd) {
      // 上传按钮不可点击
      setInpDis(true); // 把添加图标改为文件PDF图标

      setUploadIcon('icon-md'); // 修改底部文字为该PDF名字

      setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: chapterItem.fileName
      }));
      setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MyIcon, {
          type: "icon-chenggong"
        }), "\u4E0A\u4F20\u6210\u529F"]
      })); // 显示右上角X号

      setCancel(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (clearContents) {
      // 清除章节名称
      setChapterName(''); // 章节学时改为默认值

      setChapterTime('60'); // 把md文件图标改为加号

      setUploadIcon('icon-jia'); // 修改底部文字为该PDF名字

      setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "\u8BF7\u9009\u62E9MD\u683C\u5F0F\u6587\u6863"
      }));
      setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "(\u5176\u5B83\u7C7B\u578B\u6587\u6863\u8BF7\u5148\u8F6CMD)"
      })); // 将X号删除

      setCancel(false); // 把样式清楚之后需要把缓存也清除了
      // 把文件名字和文件地址都清除了

      setFileName('');
      setFileAddress(''); // 上传按钮可点击

      setInpDis(false);
    }
  }, [clearContents]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().articleContent),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapter),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: "*"
        }), " \u6587\u7AE0\u540D\u79F0"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
          placeholder: "\u8BF7\u8F93\u5165\u7AE0\u8282\u540D\u79F0...",
          value: chapterName,
          onChange: e => {
            setChapterName(e.target.value);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        children: "\u7AE0\u8282\u5B66\u65F6"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterTime),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
          defaultValue: 60,
          value: chapterTime,
          onChange: e => {
            setChapterTime(e.target.value);
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().unit),
        children: "\u5206\u949F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().article),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().Center),
        children: "\u4E0A\u4F20\u6587\u4EF6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().markdown),
        onClick: submit,
        children: [cancel ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().cancel),
          onClick: cancelFile,
          children: "x"
        }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
          className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().addFile),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MyIcon, {
            style: {
              fontSize: '45px'
            },
            type: uploadIcon
          })
        }), jasonP, attention, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().mask),
          ref: uploadDocument,
          style: {
            display: `${displ}`
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().addFile),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
              size: "large"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
            className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().uploadP),
            children: "\u6B63\u5728\u4E0A\u4F20..."
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
      disabled: inpDis,
      type: "file",
      accept: ".md",
      className: (_uploadDocument_module_css__WEBPACK_IMPORTED_MODULE_7___default().submit),
      ref: uploadInp,
      onChange: uploadFile
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadDocument);

/***/ }),

/***/ 6523:
/***/ ((module) => {

// Exports
module.exports = {
	"articleContent": "uploadDocument_articleContent__1kPSh",
	"chapter": "uploadDocument_chapter__zONCK",
	"chapterName": "uploadDocument_chapterName__RIBWJ",
	"chapterTime": "uploadDocument_chapterTime__gjepP",
	"article": "uploadDocument_article__nWSVT",
	"Center": "uploadDocument_Center__cbFLE",
	"markdown": "uploadDocument_markdown__1MSCV",
	"addFile": "uploadDocument_addFile__X1NjU",
	"submit": "uploadDocument_submit__pVwdC",
	"mask": "uploadDocument_mask__mWXrj",
	"uploadP": "uploadDocument_uploadP__KFnfC",
	"cancel": "uploadDocument_cancel__YMSDr"
};


/***/ })

};
;