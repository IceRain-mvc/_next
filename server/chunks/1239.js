exports.id = 1239;
exports.ids = [1239];
exports.modules = {

/***/ 3779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6302);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);



const onImportExcel = async file => {
  return new Promise(resolve => {
    const {
      files
    } = file.target;
    const fileReader = new FileReader();
    let data = [];
    const newArr = [];

    fileReader.onload = async event => {
      try {
        const {
          result
        } = event.target;
        const workbook = xlsx__WEBPACK_IMPORTED_MODULE_1__.read(result, {
          type: 'binary'
        });

        for (const sheet in workbook.Sheets) {
          if (Object.prototype.hasOwnProperty.call(workbook.Sheets, sheet)) {
            data = data.concat(xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.sheet_to_json(workbook.Sheets[sheet]));
          }
        }

        data.forEach(item => {
          const obj = {
            questionTypes: '',
            // 题型
            examContent: '',
            // 试题内容
            okanswer: '',
            // 正确答案
            myanswer: '',
            // 自己得答案
            examTypes: '',
            // 试题分类
            difficultyLevel: '不限难度',
            // 难度
            gradeNum: 0,
            // 分数
            okanalysis: '',
            // 解析
            isAnswerSort: '0',
            // 判分时不区分答案先后顺序 默认为'0'
            isKeyword: '0',
            // 匹配答案的部分关键字就可得分  默认为'0'
            testOptions: [],
            // 选项
            testQuestions: [] // 对应问答题

          };

          for (const key in item) {
            if (Object.prototype.hasOwnProperty.call(item, key)) {
              switch (key.trim()) {
                case '答案':
                  obj.okanswer = typeof item[key] === 'string' ? item[key].trim() : item[key].toString();
                  break;

                case '分数':
                  obj.gradeNum = item[key];
                  break;

                case '题型':
                  obj.questionTypes = item[key].trim();
                  break;

                case '分类':
                  obj.examTypes = item[key].trim();
                  break;

                case '试题内容':
                  obj.examContent = item[key].trim();
                  break;

                case '难度':
                  obj.difficultyLevel = item[key].trim() === '' ? '不限难度' : item[key].trim();
                  break;

                case '解析':
                  obj.okanalysis = item[key].trim();
                  break;

                case '选项A':
                  obj.testOptions.push({
                    options: 'A',
                    optionsContent: typeof item[key] === 'string' ? item[key].trim() : item[key].toString()
                  });
                  break;

                case '选项B':
                  obj.testOptions.push({
                    options: 'B',
                    optionsContent: typeof item[key] === 'string' ? item[key].trim() : item[key].toString()
                  });
                  break;

                case '选项C':
                  obj.testOptions.push({
                    options: 'C',
                    optionsContent: typeof item[key] === 'string' ? item[key].trim() : item[key].toString()
                  });
                  break;

                case '选项D':
                  obj.testOptions.push({
                    options: 'D',
                    optionsContent: typeof item[key] === 'string' ? item[key].trim() : item[key].toString()
                  });
                  break;

                case '选项E':
                  obj.testOptions.push({
                    options: 'E',
                    optionsContent: typeof item[key] === 'string' ? item[key].trim() : item[key].toString()
                  });
                  break;

                default:
                  if (key.trim() === '试题选项') {
                    const res = item[key].replace(/([A-Z]\.|[A-Z]、)(\s){0,}/g, '').replace(/(\s|[\r\n]){1,}/g, ',').split(',');
                    res.forEach((it, num) => {
                      if (it.trim() && it.trim() !== '') {
                        obj.testOptions.push({
                          options: String.fromCharCode(65 + num),
                          optionsContent: it.trim()
                        });
                      }
                    });
                  }

              }
            }
          }

          newArr.push(obj);
        });
        resolve(newArr);
      } catch (e) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('文件类型不正确！');
      }
    };

    fileReader.readAsBinaryString(files[0]);
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (onImportExcel);

/***/ }),

/***/ 1239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5405);
/* harmony import */ var _imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _importExcel_importExcel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3779);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);




const Detection = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 5181).then(__webpack_require__.bind(__webpack_require__, 5181)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5181)],
    modules: ["../src/components/testBank/importTemplate/importTemplate.tsx -> " + './detection/detection']
  }
});





const ImportTemplate = props => {
  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: testData,
    1: setTestData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
    className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().box),
    children: type ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().top),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: "https://e.kaoshiyun.com.cn/Resource/Question/%E8%80%83%E8%AF%95%E4%BA%91%E8%AF%95%E9%A2%98%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF(Excel).zip",
            download: "\u8BD5\u9898\u5BFC\u5165\u6A21\u677F(Excel).zip",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FileExcelOutlined, {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().excel)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().downExcel),
              children: "\u4E0B\u8F7Dexcel\u6A21\u677F"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              onClick: e => {
                e.preventDefault();
                window.open('/');
              },
              children: "\u67E5\u770B\u5E2E\u52A9"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: "https://e.kaoshiyun.com.cn/Resource/Question/%E8%80%83%E8%AF%95%E4%BA%91%E8%AF%95%E9%A2%98%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF(Word).zip",
            download: "\u8BD5\u9898\u5BFC\u5165\u6A21\u677F(Word).zip",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FileTextOutlined, {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().word)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().downWord),
              children: "\u4E0B\u8F7Dword\u6A21\u677F"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              onClick: e => {
                e.preventDefault();
                window.open('/');
              },
              children: "\u67E5\u770B\u5E2E\u52A9"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("a", {
            href: "https://e.kaoshiyun.com.cn/Resource/Question/%E8%80%83%E8%AF%95%E4%BA%91%E8%AF%95%E9%A2%98%E5%AF%BC%E5%85%A5%E6%A8%A1%E6%9D%BF(\u8BB0\u4E8B\u672C).zip",
            download: "\u8BD5\u9898\u5BFC\u5165\u6A21\u677F(\u8BB0\u4E8B\u672C).zip",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.FileWordOutlined, {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().txt)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().downTxt),
              children: "\u4E0B\u8F7Dtxt\u6A21\u677F"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("p", {
              onClick: e => {
                e.preventDefault();
                window.open('/');
              },
              children: "\u67E5\u770B\u5E2E\u52A9"
            })]
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
        className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bottom),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().fileBox),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("p", {
            className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().icon),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UploadOutlined, {
              className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().bigSize)
            }), "\u4E0A\u4F20\u6587\u4EF6\u5BFC\u5165\u8BD5\u9898"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("input", {
            type: "file",
            className: (_imtemplate_module_scss__WEBPACK_IMPORTED_MODULE_5___default().file),
            onChange: e => {
              (0,_importExcel_importExcel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(e).then(res => {
                setTestData(res);
                setType(false);
              });
            }
          })]
        })
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(Detection, {
      testData: testData,
      changeAlertFlag: props.changeAlertFlag,
      pageTestBank: props.pageTestBank,
      defultNumber: props.defultNumber,
      page: props.page,
      backData: props.backData
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImportTemplate);

/***/ }),

/***/ 5405:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "imtemplate_box__x8Fby",
	"top": "imtemplate_top__zyUuq",
	"excel": "imtemplate_excel__1lDcz",
	"word": "imtemplate_word__gQTR3",
	"txt": "imtemplate_txt__4rRWF",
	"downExcel": "imtemplate_downExcel__oyaZh",
	"downWord": "imtemplate_downWord__cnten",
	"downTxt": "imtemplate_downTxt__Av4H7",
	"bottom": "imtemplate_bottom__hTHFy",
	"fileBox": "imtemplate_fileBox__CY30t",
	"icon": "imtemplate_icon__UET5J",
	"bigSize": "imtemplate_bigSize__Qsu0F",
	"file": "imtemplate_file__bHkRb"
};


/***/ })

};
;