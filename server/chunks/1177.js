exports.id = 1177;
exports.ids = [1177];
exports.modules = {

/***/ 1177:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5345);
/* harmony import */ var for_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(for_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_common_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6166);
/* harmony import */ var _dynaRender_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7531);
/* harmony import */ var _dynaRender_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dynaRender_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const Publish = props => {
  // state = {
  //   editorValue: '',
  //   loading: false,
  // };
  const {
    0: editorValue,
    1: setEditorValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('');
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.tacitly) {
      setEditorValue(props.tacitly);
    }
  }, [props.tacitly]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    if (props.clearContent === true) {
      setEditorValue('');
    }
  }, [props.clearContent]);

  const handleChange = value => {
    // 在此处调用回调函数，返回md数据，在函数中接入后台接口，存入数据库
    setEditorValue(value);
    props.getContent(value);
  }; // const onSave = (value) => {
  //   // 在此处调用回调函数，返回md数据，在函数中接入后台接口，存入数据库
  //   this.props.getContent(value);
  // };


  const addRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)();

  const addImg = async $file => {
    setLoading(true); // const params = addRef.current.p();
    // console.log(params);

    console.log();
    const res = await (0,_api_common_upload__WEBPACK_IMPORTED_MODULE_3__/* .uploadToGithub */ .R)($file.name, $file);

    if (res[0]) {
      //   console.log('图片上传重复');
      //   this.$vm.$img2Url($file.name, res[1].uploadUrl);
      //   this.setState({ loading: false });
      addRef.current.$img2Url($file.name, res[1].uploadUrl);
      setLoading(false);
      console.log(res[1].uploadUrl);
    } else {
      // this.$vm.$img2Url($file.name, res[1].uploadUrl);
      addRef.current.$img2Url($file.name, res[1].uploadUrl);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: (_dynaRender_module_scss__WEBPACK_IMPORTED_MODULE_5___default().dynaRenderBox),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
      spinning: loading,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx((for_editor__WEBPACK_IMPORTED_MODULE_1___default()), {
        ref: addRef,
        addImg: $file => addImg($file),
        value: editorValue,
        onChange: value => handleChange(value),
        style: {
          width: '100%',
          height: '100%'
        } // onSave={this.onSave}
        ,
        toolbar: {
          h1: true,
          // h1
          h2: true,
          // h2
          h3: true,
          // h3
          h4: true,
          // h4
          img: true,
          // 图片
          link: true,
          // 链接
          code: true,
          // 代码块
          preview: props.previewMode,
          // 预览模式
          expand: true,
          // 全屏
          undo: true,
          // 撤销
          redo: true // 重做
          // save: true, // 保存

        }
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Publish);

/***/ }),

/***/ 7531:
/***/ ((module) => {

// Exports
module.exports = {
	"dynaRenderBox": "dynaRender_dynaRenderBox__H2Fl_"
};


/***/ })

};
;