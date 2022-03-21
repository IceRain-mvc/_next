exports.id = 8886;
exports.ids = [8886];
exports.modules = {

/***/ 8886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ addExam)
});

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/testBank/addExam/addExam.module.css
var addExam_module = __webpack_require__(9713);
var addExam_module_default = /*#__PURE__*/__webpack_require__.n(addExam_module);
// EXTERNAL MODULE: external "antd/lib/row"
var row_ = __webpack_require__(7050);
var row_default = /*#__PURE__*/__webpack_require__.n(row_);
// EXTERNAL MODULE: external "antd/lib/col"
var col_ = __webpack_require__(8518);
var col_default = /*#__PURE__*/__webpack_require__.n(col_);
// EXTERNAL MODULE: external "antd/lib/checkbox"
var checkbox_ = __webpack_require__(1489);
var checkbox_default = /*#__PURE__*/__webpack_require__.n(checkbox_);
// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__(7374);
var space_default = /*#__PURE__*/__webpack_require__.n(space_);
// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__(7386);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);
// EXTERNAL MODULE: ./src/components/testBank/addExam/BianCompiler.module.css
var BianCompiler_module = __webpack_require__(8268);
var BianCompiler_module_default = /*#__PURE__*/__webpack_require__.n(BianCompiler_module);
// EXTERNAL MODULE: ./src/components/markdown/redactMark.tsx
var redactMark = __webpack_require__(1748);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/testBank/addExam/textInput.module.css
var textInput_module = __webpack_require__(1378);
var textInput_module_default = /*#__PURE__*/__webpack_require__.n(textInput_module);
;// CONCATENATED MODULE: ./src/context/addEaxm.ts

const AddexamContent = /*#__PURE__*/external_react_default().createContext({
  setQuestion: () => ({}),
  mark: '',
  testQuestion: {},
  radioTest: [],
  setRadioOption: () => ({}),
  checkTest: [],
  setCheckOption: () => ({}),
  fillInTest: [],
  setFillInOption: () => ({}),
  setFillInTest: () => ({}),
  dictionary: [],
  insertBottomLine: () => ({}),
  setBatchEditingFlag: () => ({}),
  batchEditingFlag: false,
  setTestQuestion: () => ({}),
  setRadioTest: () => ({}),
  setCheckTest: () => ({}),
  editOrAdd: 0
});
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/testBank/addExam/textInput.tsx




 // interface TextInputProps {
//   oneTypes: boolean;
// }




const TextInput = props => {
  const inp = (0,external_react_.useRef)();
  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)(false);
  const {
    setQuestion
  } = (0,external_react_.useContext)(AddexamContent);
  const {
    0: inputValue,
    1: setInputValue
  } = (0,external_react_.useState)('');
  const {
    0: markDownDefault,
    1: setmarkDownDefault
  } = (0,external_react_.useState)(''); // 传值

  const setQuestionAnswer = e => {
    setQuestion(e.target.value, props.mark);
  }; // 改变文本框形态并赋值内容


  const changeVal = () => {
    setmarkDownDefault(inputValue);
    setType(!type);
  }; // markdown文本框保存的内容


  const getContent = a => {
    setQuestion(a, props.mark);
  };

  (0,external_react_.useEffect)(() => {
    setInputValue(props.default);
  }, [props]);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: type ? (textInput_module_default()).addExamMark : '',
    children: type ? /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
      getContent: getContent,
      tacitly: markDownDefault
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (textInput_module_default()).myInputDiv,
      style: {
        background: 'white',
        // height: 38,
        overflow: 'hidden',
        border: '1px solid rgb(219, 217, 217)',
        // marginTop: 9,
        // marginLeft: 9,
        width: '100%'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        ref: inp,
        className: (textInput_module_default()).myInput // style={{ border: 'none', width: 1037, height: 60 }}
        ,
        type: "text",
        name: "",
        id: "",
        onBlur: e => {
          setQuestionAnswer(e);
          setInputValue(e.target.value);
        },
        value: inputValue || '',
        onChange: e => {
          setInputValue(e.target.value);
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(icons_.PictureOutlined, {
        onClick: () => {
          changeVal();
        }
      })]
    })
  });
};

/* harmony default export */ const textInput = (TextInput);
;// CONCATENATED MODULE: ./src/components/testBank/addExam/BianCompiler.tsx





 // import { SelectCommon } from '@/components/form/form';
// import TreeType from '@component/TreeType/TreeType';








const BatchEditing = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 6863).then(__webpack_require__.bind(__webpack_require__, 6863)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6863)],
    modules: ["../src/components/testBank/addExam/BianCompiler.tsx -> " + './BatchEditing']
  }
});

const BianCompiler = props => {
  const {
    setQuestion,
    testQuestion,
    radioTest,
    setRadioOption,
    checkTest,
    setCheckOption,
    fillInTest,
    setFillInOption,
    setFillInTest,
    insertBottomLine,
    setBatchEditingFlag,
    batchEditingFlag,
    dictionary,
    setTestQuestion,
    setRadioTest,
    setCheckTest,
    editOrAdd
  } = (0,external_react_.useContext)(AddexamContent); // 单选框
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: redioValue,
    1: setRedioValue
  } = (0,external_react_.useState)(0); // 单选框

  const onChange = e => {
    setRedioValue(e.target.value);
    setQuestion(e.target.value, 'okanswer');
  }; // 多选框;


  const onCheckChange = checkedValues => {
    setQuestion(checkedValues, 'okanswer');
  }; // 处理填空题答案


  const fillInAnswer = (answerStr, index) => {
    const arr = fillInTest;
    let str = '';
    arr.forEach((item, i) => {
      if (i === index) {
        item.okanswer = answerStr;
      }

      if (i === arr.length - 1) {
        str += `${item.okanswer}`;
      } else {
        str += `${item.okanswer}|`;
      }
    });
    setFillInTest(arr);
    setQuestion(str, 'okanswer');
  }; // 获取填空题答案


  const getFillInAnswer = answerStr => {
    const arr = answerStr.split('|');
    const fillInArr = fillInTest.concat();
    arr.forEach((item, index) => {
      fillInArr[index] = {
        key: index,
        okanswer: item
      };
    });
    setFillInTest(fillInArr);
  };

  const RadioAddOption = n => {
    setRadioOption(n);
  };

  const CheckAddOption = n => {
    setCheckOption(n);
  }; // 获取批量修改选项弹窗中的数据


  const getBatchEditData = res => {
    const testTemp = JSON.parse(JSON.stringify(testQuestion)); // 单选多选题选项

    const radioTestTemp = [];

    if (res.length > 0) {
      for (const key in testTemp) {
        // 如果dictionary包含testTemp中的键名，说明键是abcd
        if (dictionary.includes(key)) {
          delete testTemp[key];
        }
      }
    }

    res.forEach((item, index) => {
      testTemp[dictionary[index]] = item;
      radioTestTemp.push({
        value: index + 1,
        okanswer: '',
        text: dictionary[index],
        fn: val => {
          setQuestion(val, `${dictionary[index]}`);
        }
      });
    });
    setRadioTest(radioTestTemp);
    setCheckTest(radioTestTemp);
    setTestQuestion(testTemp);
  }; // eslint-disable-next-line @typescript-eslint/no-empty-function


  (0,external_react_.useEffect)(() => {}, [testQuestion]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (BianCompiler_module_default()).CompilerCenter,
      children: props.textValue === '单选题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (BianCompiler_module_default()).CompilerCenterAnswer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BianCompiler_module_default()).CompilerCenterAnswerTop,
          style: {
            position: 'relative'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u52FE\u9009\u8BBE\u7F6E\u7B54\u6848"
          }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u9009\u9879\u5185\u5BB9"
          }), /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {}), editOrAdd <= 0 && /*#__PURE__*/jsx_runtime_.jsx("strong", {
            onClick: () => {
              setBatchEditingFlag(true);
            },
            style: {
              cursor: 'pointer'
            },
            children: "\u6279\u91CF\u7F16\u8F91\u9009\u9879"
          }), batchEditingFlag && /*#__PURE__*/jsx_runtime_.jsx(BatchEditing, {
            setBatchEditingFlag: setBatchEditingFlag,
            getBatchEditData: getBatchEditData
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (BianCompiler_module_default()).radioGlobal,
          children: /*#__PURE__*/jsx_runtime_.jsx((radio_default()).Group, {
            style: {
              marginTop: 10,
              display: 'flex'
            },
            onChange: onChange,
            value: testQuestion.okanswer ? testQuestion.okanswer : 10,
            children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
              direction: "vertical",
              children: radioTest.map((item, index) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (BianCompiler_module_default()).myRadios,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
                    style: {
                      marginBottom: 20
                    },
                    checked: true,
                    value: item.value,
                    children: item.text
                  }), /*#__PURE__*/jsx_runtime_.jsx(textInput, {
                    mark: item.text,
                    default: testQuestion[item.text] || ''
                  })]
                }, index);
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'white',
              marginLeft: 30
            },
            onClick: () => {
              RadioAddOption(0);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), "\u6DFB\u52A0\u9009\u9879"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'rgb(255, 0, 0)',
              color: 'white'
            },
            onClick: () => {
              RadioAddOption(1);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MinusOutlined, {}), "\u5220\u51CF\u9009\u9879"]
          })]
        })]
      }) : props.textValue === '多选题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (BianCompiler_module_default()).CompilerCenterAnswer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BianCompiler_module_default()).CompilerCenterAnswerTop,
          style: {
            position: 'relative'
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u52FE\u9009\u8BBE\u7F6E\u7B54\u6848"
          }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u9009\u9879\u5185\u5BB9"
          }), /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {}), editOrAdd <= 0 && /*#__PURE__*/jsx_runtime_.jsx("strong", {
            onClick: () => {
              setBatchEditingFlag(true);
            },
            style: {
              cursor: 'pointer'
            },
            children: "\u6279\u91CF\u7F16\u8F91\u9009\u9879"
          }), batchEditingFlag && /*#__PURE__*/jsx_runtime_.jsx(BatchEditing, {
            setBatchEditingFlag: setBatchEditingFlag,
            getBatchEditData: getBatchEditData
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (BianCompiler_module_default()).checkouts,
          children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()).Group, {
            style: {
              marginTop: 10
            },
            onChange: onCheckChange,
            defaultValue: testQuestion.okanswer && testQuestion.okanswer instanceof Array ? testQuestion.okanswer : [],
            children: checkTest.map((item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((row_default()), {
                  style: {
                    marginBottom: 15
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                    span: 8,
                    children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                      value: item.text,
                      children: item.text
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(textInput, {
                  mark: item.text,
                  default: testQuestion[item.text]
                })]
              }, index);
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'white',
              marginLeft: 30
            },
            onClick: () => {
              CheckAddOption(0);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), "\u6DFB\u52A0\u9009\u9879"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'rgb(255, 0, 0)',
              color: 'white'
            },
            onClick: () => {
              CheckAddOption(1);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MinusOutlined, {}), "\u5220\u51CF\u9009\u9879"]
          })]
        })]
      }) : props.textValue === '判断题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        style: {
          marginTop: 30,
          marginBottom: 30
        },
        children: ["\u9009\u9879", /*#__PURE__*/(0,jsx_runtime_.jsxs)((radio_default()).Group, {
          style: {
            marginLeft: 92
          },
          onChange: onChange,
          value: testQuestion.okanswer ? testQuestion.okanswer : null,
          children: [/*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
            value: 1,
            children: "A.\u6B63\u786E"
          }), /*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
            value: 2,
            children: "B.\u9519\u8BEF"
          })]
        })]
      }) : props.textValue === '填空题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            marginLeft: 106,
            marginTop: 10,
            marginBottom: 40,
            fontSize: 13
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (BianCompiler_module_default()).insert,
            onClick: () => {
              insertBottomLine();
            },
            children: "\u63D2\u5165\u586B\u7A7A\u7B26"
          }), ' ', "\u5728\u586B\u7A7A\u4F4D\u7F6E\u63D2\u5165\u586B\u7A7A\u7B26"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BianCompiler_module_default()).supply,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u7B54\u6848"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: fillInTest.map((item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (BianCompiler_module_default()).supplyAnswer,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  children: ["\u586B\u7A7A", index + 1, "\u7B54\u6848"]
                }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                  defaultValue: item.okanswer,
                  type: "text",
                  onBlur: e => {
                    fillInAnswer(e.target.value, index);
                    getFillInAnswer(testQuestion.okanswer);
                  }
                }), index !== 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => {
                    setFillInOption(1, index);
                  },
                  children: "x"
                })]
              }, item.key);
            })
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BianCompiler_module_default()).supplyAnswerChecked,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => {
              setFillInOption(0, 10);
            },
            children: "\u589E\u52A0\u586B\u7A7A\u7B54\u6848"
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx((checkbox_default()).Group, {
              style: {
                width: '100%'
              },
              onChange: e => {
                setQuestion(e, 'NoDistinction');
              },
              children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((row_default()), {
                children: [/*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                  style: {
                    border: '1px solid rgb(242, 244, 248)',
                    height: 25,
                    marginRight: 10,
                    marginLeft: 10,
                    textAlign: 'center'
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                    value: "1",
                    children: "\u5224\u5206\u65F6\u4E0D\u533A\u5206\u7B54\u6848\u5148\u540E\u987A\u5E8F"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                  style: {
                    border: '1px solid rgb(242, 244, 248)',
                    height: 25,
                    textAlign: 'center'
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                    value: "2",
                    children: "\u53EA\u8981\u5339\u914D\u7B54\u6848\u7684\u90E8\u5206\u5173\u952E\u5B57\u5C31\u53EF\u5F97\u5206"
                  })
                })]
              })
            }), ","]
          })]
        })]
      }) : props.textValue === '问答题' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (BianCompiler_module_default()).myanswer,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u7B54\u6848"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx(textInput, {
              mark: 'okanswer',
              default: testQuestion.okanswer
            })
          })]
        })
      }) : ''
    })]
  });
};

/* harmony default export */ const addExam_BianCompiler = (BianCompiler);
// EXTERNAL MODULE: ./src/api/testBank/testBank.ts
var testBank = __webpack_require__(4707);
// EXTERNAL MODULE: ./src/components/form/form.tsx + 5 modules
var form_form = __webpack_require__(1518);
// EXTERNAL MODULE: ./src/components/TreeType/TreeType.tsx + 3 modules
var TreeType = __webpack_require__(5061);
// EXTERNAL MODULE: ./src/components/testBank/addExam/plainText.module.css
var plainText_module = __webpack_require__(6023);
var plainText_module_default = /*#__PURE__*/__webpack_require__.n(plainText_module);
;// CONCATENATED MODULE: ./src/components/testBank/addExam/plainText.tsx





 // import { SelectCommon } from '@/components/form/form';
// import TreeType from '@component/TreeType/TreeType';

 // import TextInput from './textInput';







const PlainText = props => {
  const {
    setQuestion,
    testQuestion,
    radioTest,
    setRadioOption,
    checkTest,
    setCheckOption,
    fillInTest,
    setFillInOption,
    setFillInTest
  } = (0,external_react_.useContext)(AddexamContent); // 单选框
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: redioValue,
    1: setRedioValue
  } = (0,external_react_.useState)(0); // 填空题处理答案

  const fillInAnswer = (answerStr, index) => {
    const arr = fillInTest;
    let str = '';
    arr.forEach((item, i) => {
      if (i === index) {
        item.okanswer = answerStr;
      }

      if (i === arr.length - 1) {
        str += `${item.okanswer}`;
      } else {
        str += `${item.okanswer}|`;
      }
    });
    setFillInTest(arr);
    setQuestion(str, 'okanswer');
  }; // 单选框


  const onChange = e => {
    setRedioValue(e.target.value);
    setQuestion(e.target.value, 'okanswer');
  }; // 多选框;


  const onCheckChange = checkedValues => {
    setQuestion(checkedValues, 'okanswer');
  }; // Markdown图标


  const getEssayTestContent = val => {
    setQuestion(val, 'okanswer');
  }; // 获取填空数据


  const getFillInAnswer = answerStr => {
    const arr = answerStr.split('|');
    const fillInArr = fillInTest.concat();
    arr.forEach((item, index) => {
      fillInArr[index] = {
        key: index,
        okanswer: item
      };
    });
    setFillInTest(fillInArr);
  };

  const RadioAddOption = n => {
    setRadioOption(n);
  };

  const CheckAddOption = n => {
    setCheckOption(n);
  }; // eslint-disable-next-line @typescript-eslint/no-empty-function


  (0,external_react_.useEffect)(() => {}, [testQuestion]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (plainText_module_default()).CompilerCenter,
      children: props.textValue === '单选题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (plainText_module_default()).CompilerCenterAnswer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (plainText_module_default()).CompilerCenterAnswerTop,
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u52FE\u9009\u8BBE\u7F6E\u7B54\u6848"
          }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u9009\u9879\u5185\u5BB9"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (plainText_module_default()).radioGlobal,
          children: /*#__PURE__*/jsx_runtime_.jsx((radio_default()).Group, {
            style: {
              marginTop: 10,
              display: 'flex'
            },
            onChange: onChange,
            value: testQuestion.okanswer ? testQuestion.okanswer : 0,
            children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
              direction: "vertical",
              children: radioTest.map((item, index) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
                    style: {
                      marginBottom: 20
                    },
                    checked: testQuestion.okanswer === item.value,
                    value: item.value,
                    children: item.text
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    style: {
                      width: '91.8%',
                      height: 193
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
                      getContent: item.fn,
                      tacitly: testQuestion[item.text] || ''
                    })
                  })]
                }, index);
              })
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'white',
              marginLeft: 30
            },
            onClick: () => {
              RadioAddOption(0);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), "\u6DFB\u52A0\u9009\u9879"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'rgb(255, 0, 0)',
              color: 'white'
            },
            onClick: () => {
              RadioAddOption(1);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MinusOutlined, {}), "\u5220\u51CF\u9009\u9879"]
          })]
        })]
      }) : props.textValue === '多选题' ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (plainText_module_default()).CompilerCenterAnswer,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (plainText_module_default()).CompilerCenterAnswerTop,
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u52FE\u9009\u8BBE\u7F6E\u7B54\u6848"
          }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u9009\u9879\u5185\u5BB9"
          }), /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "\u6279\u91CF\u7F16\u8F91\u9009\u9879"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (plainText_module_default()).checkouts,
          children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()).Group, {
            style: {
              marginTop: 10
            },
            onChange: onCheckChange,
            defaultValue: testQuestion.okanswer && testQuestion.okanswer instanceof Array ? testQuestion.okanswer : [],
            children: checkTest.map((item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx((row_default()), {
                  style: {
                    marginBottom: 15
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                    span: 8,
                    children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                      value: item.text,
                      children: item.text
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    width: '91.8%',
                    height: 193
                  },
                  children: /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
                    getContent: item.fn,
                    tacitly: testQuestion[item.text] || ''
                  })
                })]
              }, index);
            })
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'white',
              marginLeft: 30
            },
            onClick: () => {
              CheckAddOption(0);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}), "\u6DFB\u52A0\u9009\u9879"]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            style: {
              background: 'rgb(255, 0, 0)',
              color: 'white'
            },
            onClick: () => {
              CheckAddOption(1);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MinusOutlined, {}), "\u5220\u51CF\u9009\u9879"]
          })]
        })]
      }) : props.textValue === '判断题' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            marginTop: 30,
            marginBottom: 30
          },
          children: ["\u9009\u9879", /*#__PURE__*/(0,jsx_runtime_.jsxs)((radio_default()).Group, {
            style: {
              marginLeft: 92
            },
            onChange: onChange,
            value: testQuestion.okanswer ? testQuestion.okanswer : null,
            children: [/*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
              value: 1,
              children: "A.\u6B63\u786E"
            }), /*#__PURE__*/jsx_runtime_.jsx((radio_default()), {
              value: 2,
              children: "B.\u9519\u8BEF"
            })]
          })]
        })
      }) : props.textValue === '填空题' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              marginLeft: 106,
              marginTop: 10,
              marginBottom: 40,
              fontSize: 13
            },
            children: ["\u5728\u586B\u7A7A\u4F4D\u7F6E\u63D2\u5165\u586B\u7A7A\u7B26", /*#__PURE__*/jsx_runtime_.jsx("span", {
              style: {
                color: 'red'
              },
              children: "(\u7528\u4E09\u4E2A\u8FDE\u7EED\u7684\u4E0B\u5212\u7EBF\u8868\u793A),\u5982___"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (plainText_module_default()).supply,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "\u7B54\u6848"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: fillInTest.map((item, index) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (plainText_module_default()).supplyAnswer,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    children: ["\u586B\u7A7A", index + 1, "\u7B54\u6848"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                    defaultValue: item.okanswer,
                    type: "text",
                    onChange: e => {
                      fillInAnswer(e.target.value, index);
                      getFillInAnswer(testQuestion.okanswer);
                    }
                  }), index !== 0 && /*#__PURE__*/jsx_runtime_.jsx("span", {
                    onClick: () => {
                      setFillInOption(1, index);
                    },
                    children: "x"
                  })]
                }, item.key);
              })
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (plainText_module_default()).supplyAnswerChecked,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              onClick: () => {
                setFillInOption(0, 10);
              },
              children: "\u589E\u52A0\u586B\u7A7A\u7B54\u6848"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx((checkbox_default()).Group, {
                style: {
                  width: '100%'
                },
                onChange: e => {
                  setQuestion(e, 'NoDistinction');
                },
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((row_default()), {
                  children: [/*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                    style: {
                      border: '1px solid rgb(242, 244, 248)',
                      height: 25,
                      marginRight: 10,
                      marginLeft: 10,
                      textAlign: 'center'
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                      value: "1",
                      children: "\u5224\u5206\u65F6\u4E0D\u533A\u5206\u7B54\u6848\u5148\u540E\u987A\u5E8F"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx((col_default()), {
                    style: {
                      border: '1px solid rgb(242, 244, 248)',
                      height: 25,
                      textAlign: 'center'
                    },
                    children: /*#__PURE__*/jsx_runtime_.jsx((checkbox_default()), {
                      value: "2",
                      children: "\u53EA\u8981\u5339\u914D\u7B54\u6848\u7684\u90E8\u5206\u5173\u952E\u5B57\u5C31\u53EF\u5F97\u5206"
                    })
                  })]
                })
              }), ","]
            })]
          })]
        })
      }) : props.textValue === '问答题' ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              marginTop: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '94.7%'
            },
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                marginRight: 78
              },
              children: ["\u7B54\u6848", /*#__PURE__*/jsx_runtime_.jsx("span", {})]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              style: {
                width: '91.8%',
                height: 193
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
                getContent: getEssayTestContent,
                tacitly: typeof testQuestion.okanswer === 'string' && testQuestion.okanswer
              })
            })]
          })
        })
      }) : ''
    })]
  });
};

/* harmony default export */ const plainText = (PlainText);
// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(9348);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);
// EXTERNAL MODULE: external "antd/lib/tag"
var tag_ = __webpack_require__(1886);
var tag_default = /*#__PURE__*/__webpack_require__.n(tag_);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: ./src/components/testBank/addExam/testQuestions.module.scss
var testQuestions_module = __webpack_require__(8633);
var testQuestions_module_default = /*#__PURE__*/__webpack_require__.n(testQuestions_module);
;// CONCATENATED MODULE: ./src/components/testBank/addExam/testQuestions.tsx









const TestQuestionsOptions = props => {
  const saveInputRef = (0,external_react_.useRef)();
  const tagsRef = (0,external_react_.useRef)(null);
  const {
    0: tags,
    1: setTags
  } = (0,external_react_.useState)([]);
  const {
    0: inputVisible
  } = (0,external_react_.useState)(true);
  const {
    0: inputValue,
    1: setInputValue
  } = (0,external_react_.useState)('');
  const {
    0: editInputIndex,
    1: setEditInputIndex
  } = (0,external_react_.useState)(-1);
  const {
    0: editInputValue,
    1: setEditInputValue
  } = (0,external_react_.useState)('');
  const {
    0: sorcer,
    1: setSorcer
  } = (0,external_react_.useState)('');

  const handleClose = removedTag => {
    const tag = tags.filter(tag => tag !== removedTag);
    setTags(tag);
    !props.defaultvalue.id ? props.getQuestions(tag, props.index, sorcer) : props.getQuestionsByid(tag, props.defaultvalue.id, sorcer);
  };

  const handleInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    } // setInputVisible(false);


    setInputValue(''); // 传值

    !props.defaultvalue.id ? props.getQuestions([...tags, inputValue], props.index, sorcer) : props.getQuestionsByid([...tags, inputValue], props.defaultvalue.id, sorcer);
  };

  const handleEditInputChange = e => {
    setEditInputValue(e.target.value);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const saveEditInputRef = () => {// editInput = input;
  };

  (0,external_react_.useEffect)(() => {
    props.defaultvalue.score && setTags(props.defaultvalue.score.split('|')); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(typeof tagsRef);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    style: {
      width: '86%',
      position: 'relative'
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (testQuestions_module_default()).EveryTags,
        ref: tagsRef,
        children: tags.map((tag, index) => {
          if (editInputIndex === index) {
            return /*#__PURE__*/jsx_runtime_.jsx((input_default()), {
              ref: saveEditInputRef,
              size: "small",
              className: "tag-input",
              value: editInputValue,
              onChange: handleEditInputChange,
              onBlur: handleEditInputConfirm,
              onPressEnter: handleEditInputConfirm
            }, tag);
          }

          const isLongTag = tag.length > 10;

          const tagElem = /*#__PURE__*/jsx_runtime_.jsx((tag_default()), {
            className: "edit-tag",
            closable: index >= 0,
            onClose: () => handleClose(tag),
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              onDoubleClick: e => {
                if (index !== 0) {
                  setEditInputIndex(index);
                  setEditInputValue(tag);
                  e.preventDefault();
                }
              },
              children: isLongTag ? `${tag.slice(0, 20)}...` : tag
            })
          }, tag);

          return isLongTag ? /*#__PURE__*/jsx_runtime_.jsx((tooltip_default()), {
            title: tag,
            children: tagElem
          }, tag) : tagElem;
        })
      }), inputVisible && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (testQuestions_module_default()).textInput,
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_default()), {
          style: tagsRef.current && {
            paddingLeft: `${tagsRef.current.offsetWidth}px`
          },
          ref: saveInputRef,
          type: "text",
          size: "small",
          className: (testQuestions_module_default()).tagInput,
          value: inputValue,
          onChange: handleInputChange,
          onBlur: () => {
            !props.defaultvalue.id ? props.getQuestions([...tags, inputValue], props.index, sorcer) : props.getQuestionsByid([...tags, inputValue], props.defaultvalue.id, sorcer);
            handleInputConfirm();
          },
          onPressEnter: handleInputConfirm
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          className: (testQuestions_module_default()).numberInput,
          type: "text",
          defaultValue: props.defaultvalue.scoreRatio || 0,
          onChange: e => {
            setSorcer(e.target.value);
            !props.defaultvalue.id ? props.getQuestions([...tags, inputValue], props.index, e.target.value) : props.getQuestionsByid([...tags, inputValue], props.defaultvalue.id, e.target.value);
          }
        }), "%"]
      })]
    })
  });
};

/* harmony default export */ const testQuestions = (TestQuestionsOptions);
// EXTERNAL MODULE: ./src/api/operationLog/operationLog.ts
var operationLog = __webpack_require__(5764);
;// CONCATENATED MODULE: ./src/components/testBank/addExam/addExam.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

















const AlertCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/testBank/addExam/addExam.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});

const AddExam = props => {
  const addBox = (0,external_react_.useRef)();
  const {
    0: textValue,
    1: setTextValue
  } = (0,external_react_.useState)('单选题'); // 关闭按钮点击时判断数据是否存在

  const {
    0: closeData,
    1: setCloseData
  } = (0,external_react_.useState)({});
  const {
    0: disableSelect,
    1: setdisableSelect
  } = (0,external_react_.useState)(false);
  const {
    0: value,
    1: setValue
  } = (0,external_react_.useState)(''); // 批量修改选项的弹窗

  const {
    0: batchEditingFlag,
    1: setBatchEditingFlag
  } = (0,external_react_.useState)(false); // 保存弹窗

  const {
    0: modeFlag,
    1: setModeFlag
  } = (0,external_react_.useState)(false); // 选项字典

  const {
    0: dictionary
  } = (0,external_react_.useState)(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L']); // 是否展示树状图

  const {
    0: foldTree,
    1: setFoldTree
  } = (0,external_react_.useState)(false); // 树状图选中之后输入到文本框
  // const [treeInput, setTreeInput] = useState<string>('试题分类');
  // 切换编辑模式

  const {
    0: textType,
    1: setTextType
  } = (0,external_react_.useState)(true); // 试题内容
  // const [setsubject] = useState<string>('');
  // 保存试题分类id

  const {
    0: treeid,
    1: setTreeId
  } = (0,external_react_.useState)(4);
  const {
    0: fixdata
  } = (0,external_react_.useState)('修改试题'); // 新增试题temp

  const {
    0: testQuestion,
    1: setTestQuestion
  } = (0,external_react_.useState)({
    questionTypes: textValue,
    examContent: '',
    gradeNum: '0',
    difficultyLevel: '不限难度',
    okanalysis: '',
    testOptions: [],
    testQuestions: [],
    examTypes: '试题分类',
    treePerson: '4',
    okanswer: null
  }); // const title = <div>{treeInput}</div>;
  // 获取用户名和IP地址;

  const getlocalcache = () => {
    const user = localStorage.getItem('user') || '';
    const IP = localStorage.getItem('userIp') || '';
    const obj = {
      user,
      IP
    };
    console.log(obj);
    console.log(obj.IP);
    console.log(obj.user);
    return obj;
  }; // useEffect(() => {
  //   getlocalcache();
  // }, []);
  // 新增试题


  const setQuestion = (val, mark) => {
    const obj = {};
    obj[mark] = val;
    setTestQuestion(Object.assign(testQuestion, obj));
  }; // 添加数据


  const addOperationLogData = async params => {
    const res = await (0,operationLog/* addOperationData */.TH)(params);
    return res;
  }; // 树形图


  const currentNode = (location, id) => {
    setTreeId(id);
    setQuestion(location, 'examTypes'); // setTreeInput(location);
  }; // 树状图内容


  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType["default"], {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // 显示树形图


  const unfoldTree = () => {
    setFoldTree(!foldTree);
  }; // 获取题目的方法


  const getSubContent = a => {
    const obj = {};
    obj.examContent = a;
    setTestQuestion(Object.assign(testQuestion, obj));
  }; // 保存分数


  const getScores = val => {
    const obj = {};
    obj.gradeNum = val;
    setTestQuestion(Object.assign(testQuestion, obj));
  }; // 保存解析


  const getAnalysisContent = val => {
    const obj = {};
    obj.okanalysis = val;
    setTestQuestion(Object.assign(testQuestion, obj));
  }; // 问答题答案数量渲染模板


  const {
    0: questions,
    1: setQuestions
  } = (0,external_react_.useState)([]); // 获取问答题答案

  const getQuestions = (val, n, sor) => {
    val = val.join('|');
    const obj = {
      score: val,
      scoreRatio: sor
    };
    const testQuestionTemp = testQuestion;

    if (!testQuestionTemp.testQuestions[n]) {
      testQuestionTemp.testQuestions.push(obj);
      setTestQuestion(testQuestionTemp);
    } else {
      testQuestionTemp.testQuestions[n] = obj;
      setTestQuestion(testQuestionTemp);
    }
  };

  const getQuestionsByid = (val, ids, sor) => {
    val = val.join('|');
    const testQuestionTemp = JSON.parse(JSON.stringify(testQuestion));
    testQuestionTemp.testQuestions.forEach(item => {
      if (item.id === ids) {
        item.score = val;
        item.scoreRatio = sor;
      }
    });
    setTestQuestion(testQuestionTemp);
  }; // 设置问答题答案数量


  const setQuestionsOption = (n, i) => {
    if (n === 0) {
      const quetionsArr = questions.concat();
      const obj = {
        key: quetionsArr.length + 1,
        score: null,
        scoreRatio: '0'
      };
      quetionsArr.push(obj);
      setQuestions(quetionsArr);
    } else {
      const quetionsArr = questions.concat();
      quetionsArr.splice(i, 1);
      const testTemp = JSON.parse(JSON.stringify(testQuestion));
      testTemp.testQuestions.splice(i, 1);
      setTestQuestion(testTemp);
      setQuestions(quetionsArr);
    }
  }; // 单选题选项数量


  const {
    0: radioTest,
    1: setRadioTest
  } = (0,external_react_.useState)([{
    value: 1,
    okanswer: '',
    text: 'A',
    fn: val => {
      setQuestion(val, 'A');
    }
  }, {
    value: 2,
    okanswer: '',
    text: 'B',
    fn: val => {
      setQuestion(val, 'B');
    }
  }, {
    value: 3,
    okanswer: '',
    text: 'C',
    fn: val => {
      setQuestion(val, 'C');
    }
  }, {
    value: 4,
    okanswer: '',
    text: 'D',
    fn: val => {
      setQuestion(val, 'D');
    }
  }]); // 多选题选项数量

  const {
    0: checkTest,
    1: setCheckTest
  } = (0,external_react_.useState)([{
    value: 1,
    okanswer: '',
    text: 'A',
    fn: val => {
      setQuestion(val, 'A');
    }
  }, {
    value: 2,
    okanswer: '',
    text: 'B',
    fn: val => {
      setQuestion(val, 'B');
    }
  }, {
    value: 3,
    okanswer: '',
    text: 'C',
    fn: val => {
      setQuestion(val, 'C');
    }
  }, {
    value: 4,
    okanswer: '',
    text: 'D',
    fn: val => {
      setQuestion(val, 'D');
    }
  }]); // 填空题选项数量

  const {
    0: fillInTest,
    1: setFillInTest
  } = (0,external_react_.useState)([{
    key: 0,
    okanswer: ''
  }]); // 设置单选题选项的数量

  const setRadioOption = n => {
    switch (Object.keys(props.Judge).length) {
      case 0:
        if (n === 0 && radioTest.length < dictionary.length) {
          const arr = radioTest.concat();
          arr.push({
            value: arr.length + 1,
            okanswer: '',
            text: dictionary[arr.length],
            fn: val => {
              setQuestion(val, dictionary[arr.length - 1]);
            }
          });
          setRadioTest(arr);
        }

        if (n === 1) {
          if (testQuestion.okanswer >= radioTest.length) {
            testQuestion.okanswer = null;
          }

          const arr = radioTest.concat();
          const delopt = arr.pop();
          const obj = testQuestion;
          delete obj[delopt.text];
          setTestQuestion(obj);
          setRadioTest(arr);
        }

        break;

      case Object.keys(props.Judge).length:
        if (n === 0 && radioTest.length < dictionary.length) {
          const arr = radioTest.concat();
          arr.push({
            value: arr.length + 1,
            okanswer: '',
            text: dictionary[arr.length],
            fn: val => {
              setQuestion(val, dictionary[arr.length - 1]);
            }
          });
          setRadioTest(arr);
        }

        if (n === 1) {
          if (testQuestion.okanswer >= radioTest.length) {
            testQuestion.okanswer = null;
          }

          const arr = radioTest.concat();
          const testOptionsArr = testQuestion.testOptions.concat();
          const delopt = arr.pop();
          testOptionsArr.forEach((item, index) => {
            if (item.options === delopt.text) {
              testOptionsArr.splice(index, 1);
            }
          });
          const obj = testQuestion;
          obj.testOptions = testOptionsArr;
          delete obj[delopt.text];
          setTestQuestion(obj);
          setRadioTest(arr);
        }

        break;

      default:
    }
  }; // 设置多选题选项数量


  const setCheckOption = n => {
    switch (Object.keys(props.Judge).length) {
      // 没有值-新增试题
      case 0:
        // 增加选项
        if (n === 0 && checkTest.length < dictionary.length) {
          const arr = checkTest.concat();
          arr.push({
            value: arr.length + 1,
            okanswer: '',
            text: dictionary[arr.length],
            fn: val => {
              setQuestion(val, dictionary[arr.length - 1]);
            }
          });
          setCheckTest(arr);
        } // 删除一项


        if (n === 1) {
          const arr = checkTest.concat();
          const delopt = arr.pop(); // 当答案有值时

          if (testQuestion.okanswer && testQuestion.okanswer instanceof Array) {
            const testAnswerArr = testQuestion.okanswer.concat();
            testAnswerArr.forEach((item, index) => {
              if (item === delopt.text) {
                testAnswerArr.splice(index, 1);
              }
            });
            const obj = testQuestion;
            obj.okanswer = testAnswerArr;
            delete obj[delopt.text];
            setTestQuestion(obj);
            setCheckTest(arr);
          } // 当上来就删答案没值时
          else {
            setCheckTest(arr);
          }
        }

        break;
      // 有值-编辑试题

      case Object.keys(props.Judge).length:
        // 增加选项
        if (n === 0 && checkTest.length < dictionary.length) {
          const arr = checkTest.concat();
          arr.push({
            value: arr.length + 1,
            okanswer: '',
            text: dictionary[arr.length],
            fn: val => {
              setQuestion(val, dictionary[arr.length - 1]);
            }
          });
          setCheckTest(arr);
        } // 删除一项


        if (n === 1) {
          const arr = checkTest.concat();
          const delopt = arr.pop(); // 当答案有值时

          if (testQuestion.okanswer && testQuestion.okanswer instanceof Array) {
            const testAnswerArr = testQuestion.okanswer.concat();
            const testOptionsArr = testQuestion.testOptions.concat();
            testAnswerArr.forEach((item, index) => {
              if (item === delopt.text) {
                testAnswerArr.splice(index, 1);
              }
            });
            testOptionsArr.forEach((item, index) => {
              if (item.options === delopt.text) {
                testOptionsArr.splice(index, 1);
              }
            });
            const obj = testQuestion;
            obj.okanswer = testAnswerArr;
            obj.testOptions = testOptionsArr;
            delete obj[delopt.text];
            setTestQuestion(obj);
            setCheckTest(arr);
          }
        }

        break;

      default:
    } // 添加一项

  }; // 设置填空题选项数量


  const setFillInOption = (n, i) => {
    if (n === 0 && fillInTest.length < 12) {
      const arr = fillInTest.concat();
      arr.push({
        key: arr.length + 1,
        okanswer: ''
      });
      setFillInTest(arr);
    }

    if (n === 1) {
      const arr = fillInTest.concat();
      arr.splice(i, 1);
      setFillInTest(arr);
      const testTemp = JSON.parse(JSON.stringify(testQuestion));

      if (testTemp.okanswer) {
        testTemp.okanswer = testTemp.okanswer.split('|');
        testTemp.okanswer.splice(i, 1);
        testTemp.okanswer = testTemp.okanswer.join('|');
        setTestQuestion(testTemp);
      }
    }
  }; // 判断题型方法-去除试题模板中不常存在的键名


  const judgeTestType = () => {
    const obj = testQuestion;
    obj.okanswer = null;
    delete obj.NoDistinction;

    for (const key in obj) {
      if (dictionary.includes(key)) {
        delete obj[key];
      }
    }

    setTestQuestion(obj);
  };

  const saveToServer = async x => {
    const testTemp = JSON.parse(JSON.stringify(testQuestion));
    const testOptionsTemp = testTemp.testOptions;
    testTemp.examTypes = treeid.toString();
    testTemp.treePerson = treeid.toString();

    if (testQuestion.questionTypes === '单选题' || testQuestion.questionTypes === '多选题') {
      // 新增试题新增试题选项
      if (testQuestion.testOptions.length === 0) {
        for (const key in testTemp) {
          if (dictionary.includes(key)) {
            testOptionsTemp.push({
              options: key,
              optionsContent: testTemp[key]
            });
            delete testTemp[key];
          }
        }
      } else {
        // 编辑试题更改原数组
        // 向原数组里添加
        const addOption = k => {
          const res = testOptionsTemp.findIndex(item => {
            return item.options === k;
          });
          return res;
        };

        for (const key in testTemp) {
          if (dictionary.includes(key) && addOption(key) !== -1) {
            testOptionsTemp.forEach(temp => {
              if (temp.options === key) {
                temp.optionsContent = testTemp[key];
              }
            });
            delete testTemp[key];
          } else if (dictionary.includes(key) && addOption(key) === -1) {
            testOptionsTemp.push({
              options: key,
              optionsContent: testTemp[key]
            });
            delete testTemp[key];
          }
        }
      } // okanswer转换为正确格式


      if (typeof testTemp.okanswer === 'number') {
        testTemp.okanswer = dictionary[testTemp.okanswer - 1];
      } else if (testTemp.okanswer instanceof Array) {
        testTemp.okanswer = testTemp.okanswer.join('');
      }
    }

    if (testQuestion.questionTypes === '判断题') {
      const testOkanswer = testTemp.okanswer;

      if (testOkanswer === 2) {
        testTemp.okanswer = '错';
      } else {
        testTemp.okanswer = '对';
      }
    }

    if (testQuestion.questionTypes === '填空题') {
      if (testTemp.NoDistinction && testTemp.NoDistinction.includes('1')) {
        testTemp.isAnswerSort = '1';
      }

      if (testTemp.NoDistinction && testTemp.NoDistinction.includes('2')) {
        testTemp.isKeyword = '1';
      }

      delete testTemp.NoDistinction;
    }

    if (testQuestion.questionTypes === '问答题') {
      testTemp.testQuestions.forEach(item => {
        if (item.score[item.score.length - 1] === '|') {
          item.score = item.score.slice(0, item.score.length - 1);
        }
      });
    } // console.log(
    //   testTemp,
    //   '最终需要的数据',
    //   Object.keys(props.Judge).length !== 0 ? '编辑接口' : '新增单个'
    // );


    if (Object.keys(props.Judge).length === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await saveClassify[x](testTemp);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      await editClassify[x](testTemp);
    }
  }; // 保存时所执行的函数


  const onlySave = async data => {
    const tempArr = [];
    tempArr.push(data.examContent); // 题目组成的数组

    const tempArrs = [];
    tempArrs.push(data); // 整条试题信息组成的数组

    if (!data.id) {
      const res = await (0,testBank/* BatchAddData */.b)(tempArrs); // 返回数据
      //       //

      props.ReturnAddExamData && (await props.ReturnAddExamData(res[0]));
      setCloseData(res[0]); // eslint-disable-next-line @typescript-eslint/no-use-before-define

      changeDataFormat(res[0]);
      const newtestTemp = testQuestion;
      newtestTemp.id = res[0].id;
      newtestTemp.paperBigQuestions = res[0].paperBigQuestions;
      newtestTemp.testOptions = res[0].testOptions;
      newtestTemp.testQuestions = res[0].testQuestions;
      setQuestions(res[0].testQuestions);
      setTestQuestion(newtestTemp);
      setModeFlag(true);
      const addResult = `新增试题【${data.examContent.slice(0, 3)}】`;
      addOperationLogData({
        operationName: getlocalcache().user,
        IPAddress: getlocalcache().IP,
        operationType: '新增试题',
        detail: addResult
      });
    } else {
      // 调用删除接口》》》再调添加
      if (data.paperBigQuestions && data.paperBigQuestions.length > 0) {
        message_default().warning(`该试题已在考试中被创建，因此无法操作请在考试中删除再进行操作`);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        await onlySaveEdit(data);
      }
    }
  };

  const onlySaveEdit = async data => {
    delete data.paperBigQuestions;
    const res = await (0,testBank/* UpdateOne */.CI)(data);
    setCloseData(res);
    props.ReturnAddExamData && props.ReturnAddExamData(res);
    const results = `修改试题【${data.examContent.slice(0, 3)}】`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: fixdata,
      detail: results
    });
    setModeFlag(true);

    if (res) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      changeDataFormat(res);
      const newtestTemp = testQuestion;
      newtestTemp.testOptions = res.testOptions;
      newtestTemp.testQuestions = res.testQuestions;
      setQuestions(res.testQuestions);
      setTestQuestion(newtestTemp);
    }
  }; // 保存并关闭时所执行的函数


  const saveAndClose = async data => {
    await onlySave(data);
    props.DataChange();
    props.changeAlertFlag(false);
  }; // 保存并新增时所执行的函数


  const saveAndAdd = async data => {
    await onlySave(data);
    await props.DataChange();
    props.saveAndAddFun();
  };

  const editAndClose = async data => {
    delete data.paperBigQuestions;
    const res = await (0,testBank/* UpdateOne */.CI)(data);
    props.ReturnAddExamData && props.ReturnAddExamData(res); // 返回数据
    //       //

    const results = `修改试题【${data.examContent.slice(0, 3)}】`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: fixdata,
      detail: results
    });
    props.DataChange();
    props.changeAlertFlag(false);
  };

  const editAndAdd = async data => {
    delete data.paperBigQuestions;
    const res = await (0,testBank/* UpdateOne */.CI)(data);
    props.ReturnAddExamData && (await props.ReturnAddExamData(res)); // 返回数据
    //       //

    const results = `修改试题【${data.examContent.slice(0, 3)}】`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: fixdata,
      detail: results
    });
    const addResult = `新增试题【${data.examContent.slice(0, 3)}】`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: '新增试题',
      detail: addResult
    });
    props.DataChange();
    props.saveAndAddFun();
  };

  const onlyClose = async () => {
    Object.keys(closeData).length !== 0 && props.DataChange();
    props.changeAlertFlag(false);
  }; // 保存分类


  const {
    0: saveClassify
  } = (0,external_react_.useState)({
    1: onlySave,
    2: saveAndClose,
    3: saveAndAdd
  });
  const {
    0: editClassify
  } = (0,external_react_.useState)({
    1: onlySaveEdit,
    2: editAndClose,
    3: editAndAdd
  }); // 保存时判断结果

  const judgeResult = x => {
    if (!/^([0-9]|[0-9]\.)\d*$/.test(testQuestion.gradeNum)) {
      message_default().warning(`请输入正确的分值`);

      return;
    }

    if (testQuestion.examContent === '') {
      message_default().warning(`题目为空 请填写`);

      return;
    }

    switch (testQuestion.questionTypes) {
      case '单选题':
        if (!testQuestion.okanswer) {
          message_default().warning(`选项为空 请填写`);

          return;
        } // eslint-disable-next-line no-case-declarations


        const testRadioOptionNum = [];

        for (const key in testQuestion) {
          if (dictionary.includes(key)) {
            testRadioOptionNum.push(key);

            if (testQuestion[key] === '') {
              message_default().warning('有选项未填写 值为空');

              return;
            }
          }
        }

        if (testRadioOptionNum.length !== radioTest.length) {
          message_default().warning('有选项未填写');

          return;
        }

        break;

      case '多选题':
        if (!testQuestion.okanswer) {
          message_default().warning(`答案为空 请填写2`);

          return;
        }

        if (testQuestion.okanswer && testQuestion.okanswer instanceof Array && testQuestion.okanswer.length === 0) {
          message_default().warning(`答案为空 请填写`);

          return;
        } // eslint-disable-next-line no-case-declarations


        const testCheckOptionNum = [];

        for (const key in testQuestion) {
          if (dictionary.includes(key)) {
            testCheckOptionNum.push(key);

            if (testQuestion[key] === '') {
              message_default().warning('有选项未填写 值为空');

              return;
            }
          }
        }

        if (testCheckOptionNum.length !== checkTest.length) {
          message_default().warning('有选项未填写 值为空');

          return;
        }

        testQuestion.okanswer && testQuestion.okanswer instanceof Array && testQuestion.okanswer.forEach(answerOpts => {
          const res = testCheckOptionNum.findIndex(item => {
            return answerOpts === item;
          });

          if (res === -1) {
            message_default().warning('有选项未填写（多选题）');
          }
        });
        break;

      case '填空题':
        if (testQuestion.okanswer && testQuestion.okanswer === '') {
          message_default().warning(`答案为空 请填写3`);

          return;
        }

        if (testQuestion.okanswer && typeof testQuestion.okanswer === 'string' && fillInTest.length !== testQuestion.okanswer.split('|').length) {
          message_default().warning('填空题有空');

          return;
        }

        break;

      case '判断题':
        if (!testQuestion.okanswer) {
          message_default().warning(`答案为空 请填写`);

          return;
        }

        break;

      case '问答题':
        if (!testQuestion.okanswer || testQuestion.okanswer === '') {
          message_default().warning(`答案为空 请填写`);

          return;
        }

        for (let i = 0; i < testQuestion.testQuestions.length; i++) {
          if (testQuestion.testQuestions[i].score === '') {
            message_default().warning(`得分点为空 请填写或删除`);

            return;
          }
        }

        break;

      default:
    }

    saveToServer(x);
  }; // 根据编辑试题的答案数量渲染正确的数量-填空题


  const judgeFillInOptions = an => {
    if (!an) {
      return;
    }

    const arr = an.split('|');
    const fillInArr = fillInTest.concat();
    arr.forEach((item, index) => {
      fillInArr[index] = {
        key: index,
        okanswer: item
      };
    });
    setFillInTest(fillInArr);
  }; // 根据编辑试题答案的数量渲染正确的数量-单选题


  const judgeRadioOptions = (an, okAnswer) => {
    const radioTemp = [];
    an.length > 0 && an.sort((a, b) => {
      return a.options.charCodeAt() - b.options.charCodeAt();
    }).forEach((item, index) => {
      if (dictionary.includes(item.options)) {
        const obj = {};
        obj[item.options] = item.optionsContent;
        setTestQuestion(Object.assign(testQuestion, obj));
        radioTemp.push({
          value: index + 1,
          okanswer: item.optionsContent,
          text: item.options,
          fn: val => {
            setQuestion(val, item.options);
          }
        });
      }
    });
    dictionary.forEach((item, index) => {
      const obj = {};

      if (item === okAnswer) {
        obj.okanswer = index + 1;
      }

      setTestQuestion(Object.assign(testQuestion, obj));
    });
    setRadioTest(radioTemp);
  }; // 根据编辑试题的答案数量渲染正确的数量-多选题


  const judgeCheckOptions = (an, okAnswer) => {
    const checkTemp = [];
    an.length > 0 && an.sort((a, b) => {
      return a.options.charCodeAt() - b.options.charCodeAt();
    }).forEach((item, index) => {
      if (dictionary.includes(item.options)) {
        const obj = {};
        obj[item.options] = item.optionsContent;
        setTestQuestion(Object.assign(testQuestion, obj));
        checkTemp.push({
          value: index + 1,
          okanswer: item.optionsContent,
          text: item.options,
          fn: val => {
            setQuestion(val, item.options);
          }
        });
      }
    });
    setCheckTest(checkTemp);
    const testTemp = {};
    testTemp.okanswer = [...okAnswer];
    setTestQuestion(Object.assign(testQuestion, testTemp));
  }; // 根据编辑试题的答案判断-判断题


  const judgeJudgeOptions = an => {
    const obj = {};

    if (an === 'B') {
      obj.okanswer = 2;
      setTestQuestion(Object.assign(testQuestion, obj));
    } else {
      obj.okanswer = 1;
      setTestQuestion(Object.assign(testQuestion, obj));
    }
  }; // 根据编辑试题的答案判断-问答题


  const judgeQuestionOptions = testQuesArr => {
    const newArr = questions.concat();
    testQuesArr.forEach(item => {
      newArr.push(_objectSpread(_objectSpread({}, item), {}, {
        key: newArr.length + 1
      }));
    });
    setQuestions(newArr);
  }; // 转换分数格式


  const ConversionGradeFormat = () => {
    const gradeNumTemp = testQuestion;
    gradeNumTemp.gradeNum = gradeNumTemp.gradeNum.toString();
    setTestQuestion(gradeNumTemp);
  };

  const changeDataFormat = temp => {
    // 获取数据后根据题型渲染页面；变更答案的数量
    switch (props.Judge.questionTypes) {
      case '填空题':
        judgeFillInOptions(temp.okanswer);
        ConversionGradeFormat();
        break;

      case '单选题':
        judgeRadioOptions(temp.testOptions, temp.okanswer);
        break;

      case '多选题':
        judgeCheckOptions(temp.testOptions, temp.okanswer);
        break;

      case '判断题':
        judgeJudgeOptions(temp.okanswer);
        break;

      case '问答题':
        judgeQuestionOptions(temp.testQuestions);
        break;

      default:
    }
  }; // 插入填空符


  const insertBottomLine = () => {
    const testQuestionTemp = JSON.parse(JSON.stringify(testQuestion));
    testQuestionTemp.examContent = testQuestionTemp.examContent + '___';
    setTestQuestion(testQuestionTemp);
  };

  (0,external_react_.useEffect)(() => {
    if (Object.keys(props.Judge).length !== 0) {
      setTestQuestion(Object.assign(testQuestion, props.Judge));
      setTextValue(props.Judge.questionTypes);
      setTreeId(props.Judge.treePerson.id);
      changeDataFormat(testQuestion);
      setdisableSelect(true);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx(AddexamContent.Provider, {
    value: {
      setQuestion,
      mark: '',
      testQuestion,
      radioTest,
      setRadioOption,
      checkTest,
      setCheckOption,
      fillInTest,
      setFillInOption,
      setFillInTest,
      dictionary,
      insertBottomLine,
      setBatchEditingFlag,
      batchEditingFlag,
      setTestQuestion,
      setRadioTest,
      setCheckTest,
      editOrAdd: Object.keys(props.Judge).length
    },
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (addExam_module_default()).addExamBig,
      ref: addBox,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (addExam_module_default()).addExamBox,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (addExam_module_default()).addExamTopCenter,
              onClick: () => {
                // setsubject(testQuestion.examContent);
                setTextType(!textType);
              },
              children: textType ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (addExam_module_default()).addExamTop1,
                children: "\u70B9\u51FB\u5207\u6362\u81F3\u7F16\u8BD1\u5668\u6A21\u5F0F"
              }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (addExam_module_default()).addExamTop2,
                children: "\u70B9\u51FB\u5207\u6362\u81F3\u7EAF\u6587\u672C\u6A21\u5F0F"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (addExam_module_default()).CompilerTop,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u8BD5\u9898\u7C7B\u578B"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (addExam_module_default()).CompilerTopLeft,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  position: 'relative'
                },
                id: "myselets",
                children: /*#__PURE__*/jsx_runtime_.jsx(form_form.SelectPosition, {
                  disabled: disableSelect,
                  defalutValue: props.Judge.questionTypes || textValue,
                  value: value,
                  style: {
                    width: '100%'
                  },
                  data: ['单选题', '多选题', '判断题', '填空题', '问答题'],
                  onChange: value => {
                    // 题型方法
                    judgeTestType();
                    setQuestion(value, 'questionTypes');
                    setValue(value);
                    setTextValue(value);
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (addExam_module_default()).CompilerTopRight,
                onClick: () => {
                  unfoldTree();
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "\u8BD5\u9898\u5206\u7C7B"
                  })
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(form_form.PopoverPosition, {
                    type: "FullBox",
                    placement: "bottomLeft",
                    title: testQuestion.examTypes,
                    children: content
                  }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                    children: "\u9009\u62E9"
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (addExam_module_default()).addExamMore,
            children: /*#__PURE__*/jsx_runtime_.jsx("p", {
              style: {
                marginTop: 10,
                marginLeft: 140
              },
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: "\u66F4\u591A\u81EA\u5B9A\u4E49\u7C7B\u578B"
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (addExam_module_default()).addExamquestioncontent,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: ["\u8BD5\u9898\u5185\u5BB9", /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "*"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: textType ? /*#__PURE__*/jsx_runtime_.jsx(textInput, {
                mark: 'examContent',
                default: testQuestion.examContent
              }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: 193
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
                  getContent: getSubContent,
                  tacitly: testQuestion.examContent
                })
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (addExam_module_default()).addExamTwoType,
            children: textType ? /*#__PURE__*/jsx_runtime_.jsx(addExam_BianCompiler, {
              textValue: textValue
            }) : /*#__PURE__*/jsx_runtime_.jsx(plainText, {
              textValue: textValue
            })
          }), testQuestion.questionTypes === '问答题' && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              style: {
                marginTop: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '94.7%'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  width: '8.2%',
                  marginRight: 15
                },
                children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                  style: {
                    width: '100%'
                  },
                  children: "\u5F97\u5206\u70B9\u8BBE\u7F6E"
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  width: '91.8%',
                  height: 80,
                  border: '1px solid rgb(242, 244, 248)'
                },
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  style: {
                    height: 40,
                    display: 'flex',
                    alignItems: 'center',
                    background: 'rgb(239, 242, 245)',
                    width: '100%'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
                    style: {
                      width: '84%',
                      textAlign: 'center'
                    },
                    children: "\u5F97\u5206\u5173\u952E\u8BCD"
                  }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                    style: {
                      width: '12%'
                    },
                    children: "\u5F97\u5206\u6BD4\u4F8B"
                  }), /*#__PURE__*/jsx_runtime_.jsx("strong", {
                    children: "\u5220\u9664"
                  })]
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    color: 'red',
                    display: 'flex',
                    paddingLeft: 5,
                    alignItems: 'center',
                    height: 40,
                    lineHeight: 40
                  },
                  children: "\u5982\u679C\u9700\u8981\u81EA\u52A8\u5224\u5206\uFF0C\u8BF7\u8BBE\u7F6E\u5F97\u5206\u9879"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (addExam_module_default()).supplyAnswerAdd,
              onClick: () => {
                setQuestionsOption(0, 10);
              },
              children: "\u589E\u52A0\u5F97\u5206\u9879"
            }), questions.map((item, index) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                style: {
                  display: 'flex',
                  paddingRight: '10px'
                },
                className: (addExam_module_default()).tags,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  style: {
                    width: '7.7%'
                  }
                }), /*#__PURE__*/jsx_runtime_.jsx(testQuestions, {
                  getQuestions: getQuestions,
                  getQuestionsByid: getQuestionsByid,
                  index: index,
                  defaultvalue: item
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  onClick: () => {
                    setQuestionsOption(1, index);
                  },
                  style: {
                    fontWeight: '900',
                    lineHeight: '55px',
                    cursor: 'pointer',
                    transform: 'scale(1.3)'
                  },
                  children: "x"
                })]
              }, item.id ? item.id : item.key);
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {})]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (addExam_module_default()).addExamScore,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u5206\u6570"
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (addExam_module_default()).addExamScoreRight,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "text",
                  defaultValue: props.Judge.gradeNum ? props.Judge.gradeNum : testQuestion.gradeNum,
                  onChange: e => {
                    getScores(e.target.value);
                  }
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: "\u96BE\u5EA6"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
                  name: "",
                  id: "" // defaultValue={testQuestion.difficultyLevel}
                  ,
                  onChange: e => {
                    setQuestion(e.target.value, 'difficultyLevel');
                    const temp = testQuestion;
                    temp.difficultyLevel = e.target.value;
                    setTestQuestion(temp);
                  },
                  defaultValue: props.Judge.difficultyLevel && props.Judge.difficultyLevel,
                  children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: "\u4E0D\u9650\u96BE\u5EA6",
                    children: "\u4E0D\u9650\u96BE\u5EA6"
                  }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: "\u5BB9\u6613",
                    children: "\u5BB9\u6613"
                  }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: "\u4E2D\u7B49",
                    children: "\u4E2D\u7B49"
                  }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                    value: "\u56F0\u96BE",
                    children: "\u56F0\u96BE"
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (addExam_module_default()).addExamAnalysis,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: "\u89E3\u6790"
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              children: textType ? /*#__PURE__*/jsx_runtime_.jsx(textInput, {
                mark: 'okanalysis',
                default: testQuestion.okanalysis
              }) : /*#__PURE__*/jsx_runtime_.jsx("div", {
                style: {
                  height: 193
                },
                children: /*#__PURE__*/jsx_runtime_.jsx(redactMark["default"], {
                  getContent: getAnalysisContent,
                  tacitly: testQuestion.okanalysis
                })
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (addExam_module_default()).addExamLast,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            judgeResult(1);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FileDoneOutlined, {}), "\u4FDD\u5B58"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            judgeResult(2);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FileExcelOutlined, {}), "\u4FDD\u5B58\u5E76\u5173\u95ED"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            judgeResult(3);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FileAddOutlined, {}), "\u4FDD\u5B58\u5E76\u65B0\u589E"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          onClick: () => {
            onlyClose();
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FileExcelOutlined, {}), "\u5173\u95ED"]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(AlertCommon, {
        alertStatus: modeFlag,
        changeAlertFlag: setModeFlag,
        enableDrag: true,
        alertTitle: '保存',
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (addExam_module_default()).saveAlertContent,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleFilled, {
              style: {
                color: '#52c41a'
              }
            }), Object.keys(props.Judge).length !== 0 ? '更改成功' : '新增成功！']
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (addExam_module_default()).saveAlertBottom,
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (addExam_module_default()).saveAlertLine
            }), /*#__PURE__*/jsx_runtime_.jsx("button", {
              className: (addExam_module_default()).saveAlertBtn,
              onClick: () => {
                setModeFlag(false);
              },
              children: "\u786E\u5B9A"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const addExam = (AddExam);

/***/ }),

/***/ 8268:
/***/ ((module) => {

// Exports
module.exports = {
	"CompilerTop": "BianCompiler_CompilerTop__ptRq4",
	"CompilerCenter": "BianCompiler_CompilerCenter__T0dwO",
	"compiler_title": "BianCompiler_compiler_title__BQ_Pd",
	"myanswer": "BianCompiler_myanswer__z5037",
	"compiler_title_top": "BianCompiler_compiler_title_top__miVx4",
	"CompilerCenterAnswer": "BianCompiler_CompilerCenterAnswer__E6i1i",
	"CompilerCenterAnswerTop": "BianCompiler_CompilerCenterAnswerTop__UbDUg",
	"supply": "BianCompiler_supply__t2O8p",
	"supplyAnswer": "BianCompiler_supplyAnswer__1UbSO",
	"supplyAnswerChecked": "BianCompiler_supplyAnswerChecked___RYYw",
	"supplyAnswerAdd": "BianCompiler_supplyAnswerAdd__duLjT",
	"radioGlobal": "BianCompiler_radioGlobal__K8ZE1",
	"checkouts": "BianCompiler_checkouts__QOu_b",
	"insert": "BianCompiler_insert__4eMqI"
};


/***/ }),

/***/ 9713:
/***/ ((module) => {

// Exports
module.exports = {
	"addExamBig": "addExam_addExamBig__K_Y78",
	"addExamBox": "addExam_addExamBox__LBTop",
	"addExamTop1": "addExam_addExamTop1__Ge3mB",
	"addExamTop2": "addExam_addExamTop2__1y6ib",
	"addExamY": "addExam_addExamY__DtW3E",
	"CompilerTop": "addExam_CompilerTop__wywz4",
	"CompilerTopLeft": "addExam_CompilerTopLeft__9oZzd",
	"CompilerTopRight": "addExam_CompilerTopRight__AFPsO",
	"addExamMore": "addExam_addExamMore__6MD5l",
	"addExamquestioncontent": "addExam_addExamquestioncontent__YFue1",
	"addExamTopCenter": "addExam_addExamTopCenter__MCraK",
	"addExamScore": "addExam_addExamScore__cSlJo",
	"addExamScoreRight": "addExam_addExamScoreRight__x7Uk0",
	"addExamAnalysis": "addExam_addExamAnalysis__bGE_3",
	"addExamLast": "addExam_addExamLast____Smp",
	"supplyAnswerAdd": "addExam_supplyAnswerAdd__7GyYZ",
	"saveAlertContent": "addExam_saveAlertContent__2WWSg",
	"saveAlertBottom": "addExam_saveAlertBottom__9zBK9",
	"saveAlertLine": "addExam_saveAlertLine___CiMn",
	"saveAlertBtn": "addExam_saveAlertBtn__9tIwM",
	"tags": "addExam_tags__nLghp"
};


/***/ }),

/***/ 6023:
/***/ ((module) => {

// Exports
module.exports = {
	"CompilerTop": "plainText_CompilerTop__a7q9e",
	"CompilerCenter": "plainText_CompilerCenter__zZiA8",
	"compiler_title": "plainText_compiler_title__tT71Z",
	"myanswer": "plainText_myanswer__F9MJ3",
	"compiler_title_top": "plainText_compiler_title_top__c3iSp",
	"CompilerCenterAnswer": "plainText_CompilerCenterAnswer__KOg9a",
	"CompilerCenterAnswerTop": "plainText_CompilerCenterAnswerTop__ECaUv",
	"supply": "plainText_supply__a_D2U",
	"supplyAnswer": "plainText_supplyAnswer__HVkru",
	"supplyAnswerChecked": "plainText_supplyAnswerChecked__1H83c",
	"supplyAnswerAdd": "plainText_supplyAnswerAdd__6f30O",
	"radioGlobal": "plainText_radioGlobal__Ip950",
	"checkouts": "plainText_checkouts__sEOS_",
	"insert": "plainText_insert__Qe7Ky"
};


/***/ }),

/***/ 1378:
/***/ ((module) => {

// Exports
module.exports = {
	"myInput": "textInput_myInput__CNu5h",
	"myInputDiv": "textInput_myInputDiv__eTHau",
	"addExamMark": "textInput_addExamMark__AVObp"
};


/***/ }),

/***/ 8633:
/***/ ((module) => {

// Exports
module.exports = {
	"numberInput": "testQuestions_numberInput__8Frsk",
	"tagInput": "testQuestions_tagInput__ewN4a",
	"textInput": "testQuestions_textInput__1FMIy",
	"EveryTags": "testQuestions_EveryTags__3QPP9"
};


/***/ })

};
;