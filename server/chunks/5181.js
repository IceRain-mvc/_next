exports.id = 5181;
exports.ids = [5181];
exports.modules = {

/***/ 5181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ detection)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/testBank/importTemplate/detection/detection.module.scss
var detection_module = __webpack_require__(8016);
var detection_module_default = /*#__PURE__*/__webpack_require__.n(detection_module);
// EXTERNAL MODULE: ./src/components/testBank/importTemplate/importExcel/importExcel.ts
var importExcel = __webpack_require__(3779);
;// CONCATENATED MODULE: ./src/components/testBank/importTemplate/detection/verifyFormat.ts
// 判断 题目格式
const verifyFormat = (data, setTestList) => {
  const formatData = JSON.parse(JSON.stringify(data));
  const msg = [];
  formatData.forEach((item, index) => {
    item.errorMsg = []; // 错误信息
    // 检测 题型  试题内容 试题答案

    if (item.examContent === '') {
      item.errorMsg.push('【试题内容】不能为空');
      msg.push(`第${index + 1}题：【试题内容】不能为空`);
    } else if (item.okanswer === '') {
      item.errorMsg.push('试题未设置答案');
      msg.push(`第${index + 1}题：试题未设置答案`);
    } else if (item.questionTypes === '') {
      item.errorMsg.push('【】不存在此题型，请参照标准模板题型说明');
      msg.push(`第${index + 1}题：【】不存在此题型，请参照标准模板题型说明`);
    } // 填空题格式检测


    if (item.questionTypes === '填空题') {
      const gapNum = item.okanswer.split('|').length; // 答案的填空数量

      const bracketArr = item.examContent.match(/\(\)/g);
      const underlineArr = item.examContent.match(/___/g);
      let len = 0; // 试题内容 填空数

      if (bracketArr && underlineArr) {
        len = bracketArr.length + underlineArr.length;
      } else if (bracketArr && !underlineArr) {
        len = bracketArr.length;
      } else if (!bracketArr && underlineArr) {
        len = underlineArr.length;
      } else if (!bracketArr && !underlineArr) {
        item.errorMsg.push(`【试题内容】中没有插入任何填空符，请参考标准模板填空题说明。 试题：${item.examContent}`);
        msg.push(`第${index + 1}题：【试题内容】中没有插入任何填空符，请参考标准模板填空题说明。 试题：${item.examContent}`);
      }

      if (gapNum !== len) {
        item.errorMsg.push(`填空符与填空答案的数量不匹配，请参考标准模板说明。 试题：${item.examContent}`);
        msg.push(`第${index + 1}题：填空符与填空答案的数量不匹配，请参考标准模板说明。 试题：${item.examContent}`);
      }
    }

    if (item.questionTypes === '判断题') {
      if (item.okanswer !== '对' && item.okanswer !== '错' && item.okanswer !== '正确' && item.okanswer !== '错误') {
        item.errorMsg.push(`标准答案设置不正确，请参考标准模板判断题答案设置。 试题：${item.examContent}`);
        msg.push(`第${index + 1}题：标准答案设置不正确，请参考标准模板判断题答案设置。 试题：${item.examContent}`);
      }
    }
  });
  const newData = formatData.filter(item => {
    return item.errorMsg.length <= 0;
  });
  const res = []; // 去除格式错误

  data.forEach(val => {
    const flag = newData.some(item => {
      return item.examContent === val.examContent;
    });

    if (val.questionTypes === '判断题') {
      val.okanswer = val.okanswer === '正确' ? '对' : val.okanswer === '错误' ? '错' : val.okanswer;
    }

    flag && res.push(val);
  });
  setTestList(res);
  return {
    formatData,
    msg
  };
};

/* harmony default export */ const detection_verifyFormat = (verifyFormat);
// EXTERNAL MODULE: ./src/api/testBank/testBank.ts
var testBank = __webpack_require__(4707);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/testBank/importTemplate/detection/detection.tsx


(external_react_default()).useLayoutEffect = (external_react_default()).useEffect;
const TreeType = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/testBank/importTemplate/detection/detection.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const AlertCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/testBank/importTemplate/detection/detection.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const PopoverCommon = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6780)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6780)],
    modules: ["../src/components/testBank/importTemplate/detection/detection.tsx -> " + '@/components/form/part/popover']
  }
});









const Detection = props => {
  const {
    testData,
    changeAlertFlag,
    pageTestBank,
    backData
  } = props;
  const {
    0: testList,
    1: setTestList
  } = (0,external_react_.useState)([]); // 全部数据

  const {
    0: correctData,
    1: setCorrectData
  } = (0,external_react_.useState)([]); // 检测格式的数据

  const {
    0: errorMsg,
    1: setErrorMsg
  } = (0,external_react_.useState)([]); // 错误信息

  const {
    0: exist,
    1: setExist
  } = (0,external_react_.useState)([]); // []重复题目 和行数

  const {
    0: existIndex,
    1: setExistIndex
  } = (0,external_react_.useState)([]); // 存在重复数据的下标

  const {
    0: rootType,
    1: setRootType
  } = (0,external_react_.useState)(''); // 树形组件 父级分类的值

  const {
    0: treeId,
    1: setTreeId
  } = (0,external_react_.useState)(null); // 树形组件 父级分类的id

  const {
    0: succeedNum,
    1: setSucceedNum
  } = (0,external_react_.useState)(0); // 成功数量

  const {
    0: failedNum,
    1: setFailedNum
  } = (0,external_react_.useState)(0); // 失败数量（重复、错误）

  const {
    0: error,
    1: setError
  } = (0,external_react_.useState)([]); // 试卷中存在 不能覆盖写入的试题
  // 显示状态

  const {
    0: loading,
    1: setLoding
  } = (0,external_react_.useState)(true); // 加载提示  true 开启  false关闭

  const {
    0: over,
    1: setOver
  } = (0,external_react_.useState)(0); // 导入数据是否完成  loading为false  0检测结果  1导入到数据库时 2导入结果

  const {
    0: btnFlag,
    1: setBtnFlag
  } = (0,external_react_.useState)(0); // button  0加载中(隐藏按钮)  1无重复试题(1个按钮)  2试题重复(分三种情况)  3到入完成(关闭)

  const {
    0: closeMsg,
    1: setCloseMsg
  } = (0,external_react_.useState)(true); // 隐藏消息框
  // 弹框

  const {
    0: hintAlert,
    1: setHintAlert
  } = (0,external_react_.useState)(false); // 开启关闭状态

  const {
    0: alertType,
    1: setAlertType
  } = (0,external_react_.useState)(''); // 弹框展示内容
  // 判断格式错误|试题重复

  const getTestToBank = async data => {
    setTestList(testList); // const requestData = data;

    const result = await detection_verifyFormat(data, setTestList); // 判断格式是否正确 检测格式

    setCorrectData(result.formatData);
    setErrorMsg(result.msg);
    const req = JSON.stringify(data);
    const res = await (0,testBank/* ImportExcelGetTestBank */.u3)({
      data: req
    }); // 后台判断是否重复

    setExist(res.arr); // 重复的 题目

    setExistIndex(res.indexArr); // 重复数据的下标

    setLoding(false); // 关闭加载提示

    if (res.arr.length === 0) {
      setBtnFlag(1);
    } else {
      setBtnFlag(2);
    }
  }; // 树形组件接收函数


  const currentNode = (location, id) => {
    setRootType(location.slice(location.lastIndexOf('/') + 1));
    setTreeId(id);
  };

  const title = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.AlignLeftOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
      style: {
        padding: '0 3px'
      },
      children: rootType !== '' ? rootType : '为导入试题指定父级分类'
    }), /*#__PURE__*/jsx_runtime_.jsx(icons_.CaretDownOutlined, {})]
  }); // 树形组件


  const content = /*#__PURE__*/jsx_runtime_.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false,
    openCheckbox: false
  });

  const Import = async () => {
    setOver(1); // 导入数据库时 加载动画

    setBtnFlag(0); // 关闭按钮

    if (testList.length > 0) {
      const res = await (0,testBank/* ImportExcelAdd */.y0)({
        addTopic: testList,
        rootType,
        treeId
      });
      setSucceedNum(res.num); // 导入成功数量

      setFailedNum(correctData.length - res.num); // 导入失败数量
      // 回参

      backData && backData(res.backArr);
      setOver(2);
    }

    setBtnFlag(3);
  }; // 导入数据


  const ImportCover = async () => {
    setOver(1); // 导入数据库时 加载动画

    setBtnFlag(0); // 关闭按钮

    const {
      correctData,
      errorData
    } = await (0,testBank/* DeleteRepetition */.J7)(exist);
    const addTopic = [];
    testList.forEach(async item => {
      const flag = exist.some(ite => {
        return ite.examContent === item.examContent;
      });
      !flag && addTopic.push(item); // 过滤掉 重复的 只导入新的
    });
    setError(errorData);
    const res = await (0,testBank/* ImportExcelAdd */.y0)({
      addTopic: [...addTopic, ...correctData],
      rootType,
      treeId
    });
    setSucceedNum(res.num); // 导入成功数量

    setFailedNum(testList.length - res.num); // 导入失败数量
    // 回参

    backData && backData(res.backArr);
    setOver(2);
    setBtnFlag(3);
  };

  const ImportNew = async () => {
    setOver(1);
    setBtnFlag(0);
    const addTopic = [];
    testList.forEach(async item => {
      const flag = exist.some(ite => {
        return ite.examContent === item.examContent;
      });
      !flag && addTopic.push(item); // 过滤掉 重复的 只导入新的
    });

    if (addTopic.length >= 0) {
      const res = await (0,testBank/* ImportExcelAdd */.y0)({
        addTopic,
        rootType,
        treeId
      });
      setSucceedNum(res.num); // 导入成功数量

      setFailedNum(correctData.length - res.num); // 导入失败数量
      // 回参

      backData && backData(res.backArr);
      setOver(2);
    }

    setBtnFlag(3);
  };

  (0,external_react_.useEffect)(() => {
    getTestToBank(testData); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (detection_module_default()).detectionBox,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (detection_module_default()).UploadArea,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (detection_module_default()).left,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (detection_module_default()).title,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (detection_module_default()).type,
            children: /*#__PURE__*/jsx_runtime_.jsx(PopoverCommon, {
              type: "FullBox",
              placement: "bottomLeft",
              style: {
                height: '31px',
                background: '#3a8c83',
                color: 'white',
                padding: '0 5px'
              },
              title: title,
              children: content
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (detection_module_default()).fileBtn,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: (detection_module_default()).icon,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.UploadOutlined, {
                className: (detection_module_default()).upload
              }), "\u91CD\u65B0\u4E0A\u4F20\u6587\u4EF6"]
            }), /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "file",
              className: (detection_module_default()).file,
              onChange: e => {
                (0,importExcel/* default */.Z)(e).then(res => {
                  setLoding(true);
                  setOver(0);
                  setBtnFlag(0);
                  getTestToBank(res);
                });
              }
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
          className: (detection_module_default()).content,
          children: loading ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
            className: (detection_module_default()).loading,
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: "\u6B63\u5728\u4E0A\u4F20\u8BD5\u9898\u6570\u636E\uFF0C\u8BF7\u7A0D\u5019..."
            })]
          }) : correctData.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                children: item.examContent
              }), item.testOptions.length > 0 ? item.testOptions.map((it, ind) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [it.options, ".", it.optionsContent]
                }, ind);
              }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u7B54\u6848:", item.okanswer]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u9898\u578B:", item.questionTypes]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u5206\u6570:", item.gradeNum, " "]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u5206\u7C7B:", item.examTypes]
              }), item.errorMsg.length > 0 ? item.errorMsg.map((it, ind) => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (detection_module_default()).error,
                  children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CloseSquareOutlined, {
                      className: (detection_module_default()).iconError
                    }), "\u9519\u8BEF\u4FE1\u606F"]
                  }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: it
                  })]
                }, ind);
              }) : null, existIndex.includes(index) ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (detection_module_default()).hint,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.WarningOutlined, {
                    className: (detection_module_default()).warn
                  }), "\u63D0\u793A\u4FE1\u606F"]
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "\u8BD5\u9898\u91CD\u590D\uFF0C\u8BD5\u9898\u5E93\u4E2D\u5DF2\u5B58\u5728\u6B64\u8BD5\u9898"
                })]
              }) : null]
            }, index);
          })
        })]
      }), closeMsg ? /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (detection_module_default()).right,
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (detection_module_default()).title,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (detection_module_default()).close,
              onClick: () => {
                setCloseMsg(false);
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CloseOutlined, {
                className: (detection_module_default()).iconClose
              }), "\u9690\u85CF\u6D88\u606F\u6846"]
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (detection_module_default()).content,
            children: [loading ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (detection_module_default()).loading,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u6B63\u5728\u68C0\u6D4B\u8BD5\u9898\u683C\u5F0F\uFF0C\u8BF7\u7A0D\u5019..."
              })]
            }) : null, !loading && over === 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (detection_module_default()).result,
                children: ["\u68C0\u67E5\u5B8C\u6BD5\uFF0C\u5171\u68C0\u6D4B\u5230", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (detection_module_default()).resultNum,
                  children: ["\xA0", correctData.length, "\xA0"]
                }), "\u9053\u8BD5\u9898"]
              }), errorMsg.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: (detection_module_default()).errorNum,
                children: ["\u6709", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (detection_module_default()).num,
                  children: ["\xA0", errorMsg.length, "\xA0"]
                }), "\u4E2A\u683C\u5F0F\u9519\u8BEF"]
              }) : null, exist.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                className: (detection_module_default()).existNum,
                children: ["\u6709", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                  className: (detection_module_default()).num,
                  children: ["\xA0", exist.length, "\xA0"]
                }), "\u9053\u8BD5\u9898\u5728\u8BD5\u9898\u5E93\u4E2D\u5DF2\u91CD\u590D"]
              }) : null, errorMsg.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (detection_module_default()).formatError,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["----------------\u4EE5\u4E0B", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: (detection_module_default()).num,
                    children: ["\xA0", errorMsg.length, "\xA0"]
                  }), "\u4E2A\u683C\u5F0F\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u5E76\u4FEE\u6B63----------------"]
                }), errorMsg.map((item, index) => {
                  return /*#__PURE__*/jsx_runtime_.jsx("p", {
                    children: item
                  }, index);
                })]
              }) : null, exist.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (detection_module_default()).wran,
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                  children: ["----------------\u4EE5\u4E0B", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                    className: (detection_module_default()).num,
                    children: ["\xA0", exist.length, "\xA0"]
                  }), "\u9053\u8BD5\u9898\u5728\u8BD5\u9898\u5E93\u4E2D\u5DF2\u91CD\u590D\uFF0C\u8BF7\u786E\u8BA4\u662F\u5426\u8981\u8986\u76D6\u5BFC\u5165----------------"]
                }), exist.map((item, index) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["\u7B2C", item.index, "\u884C\uFF1A\u8BD5\u9898\u91CD\u590D\uFF0C\u8BD5\u9898\u5E93\u4E2D\u5DF2\u5B58\u5728\u6B64\u8BD5\u9898\uFF1A", testList.length > 0 ? item.examContent : null]
                  }, index);
                })]
              }) : null]
            }) : null, !loading && over === 1 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (detection_module_default()).loading,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u6B63\u5728\u5BFC\u5165\u8BD5\u9898\u6570\u636E\uFF0C\u8BF7\u7A0D\u5019..."
              })]
            }) : null, !loading && over === 2 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (detection_module_default()).importResult,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u5BFC\u5165\u6210\u529F\uFF1A", succeedNum, " \u9053\u8BD5\u9898"]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                children: ["\u5BFC\u5165\u5931\u8D25\uFF1A", failedNum, " \u9053\u8BD5\u9898"]
              }), error.length > 0 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (detection_module_default()).errorBox,
                children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                  children: "--------------\u8BD5\u9898\u5728\u8003\u9898\u4E2D\u88AB\u52A0\u5165\u540E,\u8BD5\u9898\u65E0\u6CD5\u518D\u8FDB\u884C\u64CD\u4F5C,\u6545--------------"
                }), error.map((item, index) => {
                  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
                    children: ["-------------------------", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                      children: ["\xA0\u8BD5\u9898", index + 1, "\xA0"]
                    }), "\u65E0\u6CD5\u88AB\u8986\u76D6------------------------"]
                  }, index);
                })]
              }) : null]
            }) : null]
          })]
        })
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (detection_module_default()).submitBox,
      children: [btnFlag === 1 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (detection_module_default()).blue,
          onClick: () => {
            Import();
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleOutlined, {
            className: (detection_module_default()).iconUp
          }), "\u5BFC\u5165\u8BD5\u9898"]
        })
      }) : null, btnFlag === 2 ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (detection_module_default()).blue,
          onClick: () => {
            setAlertType('importAll');
            setHintAlert(true);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleOutlined, {
            className: (detection_module_default()).iconUp
          }), "\u5168\u90E8\u91CD\u65B0\u5BFC\u5165"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (detection_module_default()).orange,
          onClick: () => {
            setAlertType('importCover');
            setHintAlert(true);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleOutlined, {
            className: (detection_module_default()).iconUp
          }), "\u5168\u90E8\u5BFC\u5165\uFF0C\u5E76\u8986\u76D6\u91CD\u590D\u8BD5\u9898"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (detection_module_default()).importNew,
          onClick: () => {
            setAlertType('importNew');
            setHintAlert(true);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckCircleOutlined, {
            className: (detection_module_default()).iconUp
          }), "\u53EA\u5BFC\u5165\u65B0\u8BD5\u9898"]
        })]
      }) : null, btnFlag === 3 ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            changeAlertFlag(false);
            pageTestBank({
              pageSize: props.defultNumber,
              page: props.page
            });
          },
          children: "\u5173\u95ED"
        })
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AlertCommon, {
      alertStatus: hintAlert,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: setHintAlert,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (detection_module_default()).alertContent,
        children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.QuestionCircleFilled, {
          style: {
            marginRight: '5px',
            fontSize: '25px',
            color: '#f1a81a',
            verticalAlign: 'middle'
          }
        }), (() => {
          switch (alertType) {
            case 'importAll':
              return /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u5168\u90E8\u91CD\u65B0\u5BFC\u5165,\u4E0D\u8986\u76D6\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            case 'importCover':
              return /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u5168\u90E8\u5BFC\u5165,\u5E76\u8986\u76D6\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            case 'importNew':
              return /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: "\u53EA\u5BFC\u5165\u65B0\u8BD5\u9898,\u5FFD\u7565\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            default:
              return /*#__PURE__*/jsx_runtime_.jsx("span", {});
          }
        })()]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (detection_module_default()).alertButton,
        children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            alertType === 'importAll' && Import();
            alertType === 'importCover' && ImportCover();
            alertType === 'importNew' && ImportNew();
            setHintAlert(false);
          },
          children: "\u786E\u8BA4"
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            setHintAlert(false);
          },
          children: "\u53D6\u6D88"
        })]
      })]
    })]
  });
};

/* harmony default export */ const detection = (Detection);

/***/ }),

/***/ 8016:
/***/ ((module) => {

// Exports
module.exports = {
	"detectionBox": "detection_detectionBox__a5bPk",
	"UploadArea": "detection_UploadArea__66hCx",
	"left": "detection_left__F9hc4",
	"title": "detection_title__k_bVt",
	"type": "detection_type__41BIu",
	"fileBtn": "detection_fileBtn__wzjDK",
	"icon": "detection_icon__iGN0r",
	"upload": "detection_upload__wXyhC",
	"file": "detection_file__g_Qls",
	"content": "detection_content__L5_wx",
	"loading": "detection_loading__W15R0",
	"hint": "detection_hint__OPMQ5",
	"warn": "detection_warn__tUX2A",
	"error": "detection_error__UMLCS",
	"iconError": "detection_iconError___mo1_",
	"right": "detection_right__sT8UT",
	"close": "detection_close__8uqh5",
	"iconClose": "detection_iconClose__NUBQu",
	"result": "detection_result__b2zVv",
	"resultNum": "detection_resultNum__owb_D",
	"formatError": "detection_formatError__lxfkA",
	"errorNum": "detection_errorNum__DnPd5",
	"num": "detection_num__NBkkR",
	"existNum": "detection_existNum__GxMR3",
	"wran": "detection_wran__mODvI",
	"importResult": "detection_importResult__YEqZw",
	"errorBox": "detection_errorBox__c5AXZ",
	"submitBox": "detection_submitBox__aoShH",
	"iconUp": "detection_iconUp__tWLl3",
	"blue": "detection_blue__g0wuP",
	"orange": "detection_orange__IR9JF",
	"importNew": "detection_importNew__2axiN",
	"alertContent": "detection_alertContent___Pd_c",
	"alertButton": "detection_alertButton__fj_v6"
};


/***/ })

};
;