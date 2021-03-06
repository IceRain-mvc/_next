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
  //  ?????????????????????????????????
  const {
    obtainData,
    chapterItem,
    clearContents
  } = props; // ??????????????????

  const uploadInp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // ??????????????????

  const uploadDocument = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // ??????????????????????????????

  const {
    0: inpDis,
    1: setInpDis
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // ????????????????????????????????????

  const {
    0: displ,
    1: setDispl
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // ??????????????????icon??????

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
  })); // ???????????????X???

  const {
    0: cancel,
    1: setCancel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // ????????????

  const {
    0: chapterName,
    1: setChapterName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.serialName : ''); // ????????????

  const {
    0: chapterTime,
    1: setChapterTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? String(chapterItem.serialTime) : '60'); // ?????????????????????

  const {
    0: fileName,
    1: setFileName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileName : ''); // ?????????????????????

  const {
    0: fileAddress,
    1: setFileAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileAddressMd ? chapterItem.fileAddressMd : '' : ''); // ??? iconfont.cn ?????????

  const MyIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992472_6nj24f81zbp.js'
  }); // ???????????????

  const submit = () => {
    // ???????????????????????????
    uploadInp.current.click();
  }; // ??????????????????????????????????????????


  const uploadFile = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    } // ??????????????????????????????md?????????


    if (!file.name.includes('md')) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('?????????MD????????????');

      return;
    } // ????????????????????????10MB


    if (file.size > 10485760) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('?????????????????????????????????????????????10M');

      return;
    } // ??????????????????


    setDispl('block'); // ????????????????????????

    setInpDis(true);
    const res = await (0,_upload__WEBPACK_IMPORTED_MODULE_5__/* .uploadToGithub */ .R)(file.name, file); // ??????????????????

    setDispl('none'); // // ?????????????????????
    // setInpDis(false);
    // ???????????????????????????PDF??????

    setUploadIcon('icon-md'); // ????????????????????????PDF??????

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: file.name
    }));
    setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MyIcon, {
        type: "icon-chenggong"
      }), "\u4E0A\u4F20\u6210\u529F"]
    })); // ???????????????X???

    setCancel(true); // ???????????????????????????

    setFileName(file.name); // ??????????????????

    setFileAddress(res[1].uploadUrl);

    if (res[0]) {
      // message.warning('????????????');
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('????????????');
    }
  }; // ??????X???????????????????????????


  const cancelFile = e => {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('?????????'); // ??????????????????
    // ???????????????????????????????????????IE??????????????????W3C????????????


    if (e || e.stopPropagation) {
      e.stopPropagation();
    } else {
      // ??????IE??????????????????????????????
      window.event.cancelBubble = true;
    }

    setUploadIcon('icon-jia'); // ????????????????????????PDF??????

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "\u8BF7\u9009\u62E9MD\u683C\u5F0F\u6587\u6863"
    }));
    setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
      children: "(\u5176\u5B83\u7C7B\u578B\u6587\u6863\u8BF7\u5148\u8F6CMD)"
    })); // ???X?????????

    setCancel(false); // ????????????????????????????????????????????????
    // ??????????????????????????????????????????

    setFileName('');
    setFileAddress(''); // ?????????????????????

    setInpDis(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const obj = _objectSpread({}, chapterItem); // ????????????


    obj.serialName = chapterName; // ????????????

    if (/^\d+$/.test(chapterTime)) {
      obj.serialTime = Number(chapterTime);
    } else {
      obj.serialTime = 0;
    } // ?????????????????????


    obj.fileName = fileName; // ?????????????????????

    obj.fileAddressMd = fileAddress;
    obtainData(obj); // eslint-disable-next-line @typescript-eslint/no-empty-function

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterName, chapterTime, fileName, fileAddress]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (chapterItem && chapterItem.fileName && chapterItem.fileAddressMd) {
      // ????????????????????????
      setInpDis(true); // ???????????????????????????PDF??????

      setUploadIcon('icon-md'); // ????????????????????????PDF??????

      setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: chapterItem.fileName
      }));
      setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("p", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(MyIcon, {
          type: "icon-chenggong"
        }), "\u4E0A\u4F20\u6210\u529F"]
      })); // ???????????????X???

      setCancel(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (clearContents) {
      // ??????????????????
      setChapterName(''); // ???????????????????????????

      setChapterTime('60'); // ???md????????????????????????

      setUploadIcon('icon-jia'); // ????????????????????????PDF??????

      setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "\u8BF7\u9009\u62E9MD\u683C\u5F0F\u6587\u6863"
      }));
      setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
        children: "(\u5176\u5B83\u7C7B\u578B\u6587\u6863\u8BF7\u5148\u8F6CMD)"
      })); // ???X?????????

      setCancel(false); // ????????????????????????????????????????????????
      // ??????????????????????????????????????????

      setFileName('');
      setFileAddress(''); // ?????????????????????

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