exports.id = 5133;
exports.ids = [5133];
exports.modules = {

/***/ 5133:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _code_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7439);
/* harmony import */ var _code_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_code_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3860);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_common_upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6166);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7996);
/* harmony import */ var _component_exam_code_Email__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1346);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* eslint-disable react-hooks/exhaustive-deps */










const Coder = props => {
  const {
    examId,
    exerciseId,
    url
  } = props;
  const {
    0: coder,
    1: setCoder
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: btn,
    1: setBtn
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: alertFlag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // ?????????????????????

  const codeImg = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async () => {
    const qrImg = document.getElementsByTagName('canvas')[0];
    const image = new Image();
    const alink = document.createElement('img');
    image.src = qrImg.toDataURL('image/png');
    alink.src = image.src;
    const base64 = (image.src + '').split(',')[1];
    (0,_api_common_upload__WEBPACK_IMPORTED_MODULE_2__/* .uploadToGithub */ .R)('code.png', base64).then(res => {
      setCoder(res[1].uploadUrl);
    }).catch(err => {
      console.error(err);
    });
  }, []); // ????????????

  const copy = () => {
    document.querySelector('input').select();
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    setBtn(true);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    codeImg();
  }, [codeImg]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().body),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().header),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
        children: examId ? ' ?????????????????????????????????????????????' : ' ?????????????????????????????????????????????'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("ul", {
        className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().list),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().left),
          children: examId ? '1????????????????????????????????????????????????' : '1????????????????????????????????????????????????'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((qrcode_react__WEBPACK_IMPORTED_MODULE_1___default()), {
            id: "qrCode",
            value: url,
            size: 200 // ??????????????????
            ,
            fgColor: "#000000" // ??????????????????
            ,
            style: {
              margin: 'auto'
            },
            imageSettings: {
              // ??????????????????logo??????
              src: '',
              height: 100,
              width: 100,
              excavate: false // ???????????????????????????????????????

            }
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().left),
          children: examId ? '2????????????????????????????????????????????????????????????' : '2????????????????????????????????????????????????????????????'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("input", {
            className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["in"]),
            defaultValue: url,
            readOnly: true
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().copy),
            children: btn ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              onClick: copy,
              className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().active),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CheckOutlined, {}), "\u4EE5\u590D\u5236\u6210\u529F"]
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
              onClick: copy,
              className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().btn),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.DiffOutlined, {}), examId ? ' ??????????????????' : ' ??????????????????']
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("li", {
          className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().left),
          children: [' ', examId ? ' 3????????????????????????????????????????????????' : ' 3????????????????????????????????????????????????']
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("li", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            className: (_code_module_scss__WEBPACK_IMPORTED_MODULE_7___default().send),
            onClick: () => {
              (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_4__/* .setCode */ .Gy)({
                examId,
                coder
              }).then(res => {
                if (res) {
                  setFlag(true);
                }
              });
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.MailOutlined, {}), examId ? ' ??????????????????' : ' ??????????????????']
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_component_exam_code_Email__WEBPACK_IMPORTED_MODULE_5__["default"], {
        alertFlag: alertFlag,
        setFlag: setFlag,
        examId: examId,
        url: url,
        coder: coder,
        exerciseId: exerciseId
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coder);

/***/ }),

/***/ 7439:
/***/ ((module) => {

// Exports
module.exports = {
	"body": "code_body__MHQth",
	"header": "code_header__QHAnn",
	"list": "code_list__Ib2cl",
	"left": "code_left__m8mjQ",
	"in": "code_in__qEQRr",
	"copy": "code_copy__dwFbA",
	"btn": "code_btn__FtQBf",
	"active": "code_active__xX9MT",
	"send": "code_send__76K9A"
};


/***/ })

};
;