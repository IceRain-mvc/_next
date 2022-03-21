exports.id = 1566;
exports.ids = [1566];
exports.modules = {

/***/ 1566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2937);
/* harmony import */ var _uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // eslint-disable-next-line @typescript-eslint/no-unused-vars



const RedactMark = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 1748).then(__webpack_require__.bind(__webpack_require__, 1748)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1748)],
    modules: ["../src/components/uploads/uploadImg/uploadImg.tsx -> " + '@/components/markdown/redactMark']
  }
});

const UploadImg = props => {
  const {
    obtainData,
    chapterItem,
    clearContents
  } = props; // 章节内容默认数据
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: tacitly,
    1: setTacitly
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(chapterItem ? chapterItem.serialContent : ''); // 章节名称

  const {
    0: chapterName,
    1: setChapterName
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(chapterItem ? chapterItem.serialName : ''); // 章节学时

  const {
    0: chapterTime,
    1: setChapterTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(chapterItem ? String(chapterItem.serialTime) : '60'); // 章节内容

  const {
    0: chapterContent,
    1: setChapterContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]); // 获取章节内容

  const getContent = mdData => {
    setChapterContent(mdData);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setData([...data]);

    const obj = _objectSpread({}, chapterItem); // 章节名称


    obj.serialName = chapterName; // 章节学时
    // 判断章节学时是否位纯数字

    if (/^\d+$/.test(chapterTime)) {
      obj.serialTime = Number(chapterTime);
    } else {
      obj.serialTime = 0;
    } // 章节内容


    obj.serialContent = chapterContent;
    obtainData(obj); // eslint-disable-next-line @typescript-eslint/no-empty-function

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterName, chapterTime, chapterContent]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (clearContents) {
      // 清除章节名称
      setChapterName(''); // 章节学时改为默认值

      setChapterTime('60');
    }
  }, [clearContents]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().articleContent),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().chapter),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
          children: "*"
        }), " \u6587\u7AE0\u540D\u79F0"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default()), {
          placeholder: "\u8BF7\u8F93\u5165\u7AE0\u8282\u540D\u79F0...",
          value: chapterName,
          onChange: e => {
            setChapterName(e.target.value);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        children: "\u7AE0\u8282\u5B66\u65F6"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().chapterTime),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default()), {
          defaultValue: 60,
          value: chapterTime,
          onChange: e => {
            setChapterTime(e.target.value);
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().unit),
        children: "\u5206\u949F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().article),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().Center),
        children: "\u7AE0\u8282\u5185\u5BB9"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        className: (_uploadImg_module_css__WEBPACK_IMPORTED_MODULE_4___default().markdown),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(RedactMark, {
          getContent: getContent,
          tacitly: tacitly,
          clearContent: clearContents
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImg);

/***/ }),

/***/ 2937:
/***/ ((module) => {

// Exports
module.exports = {
	"articleContent": "uploadImg_articleContent__Irppg",
	"chapter": "uploadImg_chapter__ap9aR",
	"chapterName": "uploadImg_chapterName__Cw5AV",
	"chapterTime": "uploadImg_chapterTime__gS0iD",
	"article": "uploadImg_article__CU_HD",
	"Center": "uploadImg_Center__ELkXU",
	"markdown": "uploadImg_markdown__fwoLJ"
};


/***/ })

};
;