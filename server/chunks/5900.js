exports.id = 5900;
exports.ids = [5900];
exports.modules = {

/***/ 5900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4575);
/* harmony import */ var _batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var _api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4707);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5764);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/testBank/batchAdd/batchAdd.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const PopoverCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 6780)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6780)],
    modules: ["../src/components/testBank/batchAdd/batchAdd.tsx -> " + '@/components/form/part/popover']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/testBank/batchAdd/batchAdd.tsx -> " + '@/components/TreeType/TreeType']
  }
});






const BatchAdd = props => {
  // 状态
  // 按钮类型
  const {
    0: buttonBoxType,
    1: setButtonBoxType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 弹框主要内容的形式

  const {
    0: contentBoxType,
    1: setContentBoxType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 提醒弹框的种类

  const {
    0: alertType,
    1: setAlertType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 树形组件的内容

  const {
    0: testSort,
    1: setTestSort
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 树形组件的id

  const {
    0: treeId,
    1: setTreeId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4); // 新增的试题

  const {
    0: testBatchAddData,
    1: setTestBatchAddData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 格式错误的试题

  const {
    0: testErrorData,
    1: setTestErrorData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // 重复的试题

  const {
    0: testRepetitionData,
    1: setTestRepetitionData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // 弹窗开关

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 是否禁用开关

  const {
    0: disabledFlag,
    1: setDisabledFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('批量导入试题'); // ref

  const textarea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const correctBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const warnBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const errorBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // 事件
  // 调用弹窗事件

  const alertdialog = () => {
    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 树状组件函数


  const currentNode = (location, id) => {
    setTestSort(location);
    setTreeId(id);
    setButtonBoxType(0);
  }; // 添加数据


  const addOperationLogData = async params => {
    const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_5__/* .addOperationData */ .TH)(params);
    return res;
  }; // 获取用户名和IP地址;


  const getlocalcache = () => {
    const user = localStorage.getItem('user') || '';
    const IP = localStorage.getItem('userIp') || '';
    const obj = {
      user,
      IP
    };
    return obj;
  }; // 弹框组件按钮内容


  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AlignLeftOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
      style: {
        padding: '0 3px'
      },
      children: testSort !== '' ? testSort.slice(testSort.lastIndexOf('/') + 1, testSort.length) : '为导入试题指定父级分类'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownOutlined, {})]
  }); // 弹框组件内容=


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // 判断是否有重复试题


  const searchRepetitionData = async arr => {
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .SearchRepetitionData */ .QM)(arr); // @ts-ignore

    setTestRepetitionData(res);
    return res;
  }; // 删除重复数据


  const deleteRepetition = async arr => {
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .DeleteRepetition */ .J7)(arr);
    return res;
  }; // 文本框处理数据事件


  const handleValue = async value => {
    const textBank = [];
    let options = [];
    let gapFilling = [];
    let textBankObj = {};
    let testOptionObj = {};
    let gapFillingObj = {}; // 处理文本字符串

    const newStr = value.replace(/(\n)/g, '","');
    const arr = JSON.parse(`["${newStr}",""]`);
    const newArr = [];
    arr.forEach((item, index) => {
      item !== '' && newArr.push(item);
      item === '' && arr[index - 1] !== '' && index !== 0 && newArr.push(item);
    }); // 创建试题库数据

    newArr.forEach(item => {
      textBankObj.difficultyLevel = '不限难度';
      textBankObj.examTypes = String(treeId) || '4';
      textBankObj.treePerson = String(treeId) || '4'; // 答案

      if (item.includes('答案')) {
        // 判断题型及填空题答案
        if (item.includes('|') || item.includes('&')) {
          textBankObj.questionTypes = '填空题'; // 填空题内容

          const arr = item.slice(3).split('|');
          arr.forEach(ite => {
            gapFillingObj.gapFillingAnswer = ite;
            gapFilling.push(_objectSpread({}, gapFillingObj));
          }); // 填空题格式错误

          const bracketArr = textBankObj.examContent.match(/\(\)/g);
          const underlineArr = textBankObj.examContent.match(/___/g);
          let sumAll = 0;

          if (underlineArr && bracketArr) {
            sumAll = underlineArr.length + bracketArr.length;
          } else if (underlineArr) {
            sumAll = underlineArr.length;
          } else if (bracketArr) {
            sumAll = bracketArr.length;
          }

          if (sumAll !== gapFilling.length) {
            textBankObj.isError = true;
            textBankObj.errorMsg = `填空符的个数和标准答案的个数不匹配，请参考标准横板。试题: ${textBankObj.examContent}`;
          }
        } else if ( // 多选题
        item.includes('A') && item.length > 4 || item.includes('B') && item.length > 4 || item.includes('C') && item.length > 4 || item.includes('D') && item.length > 4 || item.includes('E') && item.length > 4 || item.includes('F') && item.length > 4 || item.includes('G') && item.length > 4 || item.includes('H') && item.length > 4 || item.includes('I') && item.length > 4 || item.includes('J') && item.length > 4 || item.includes('K') && item.length > 4 || item.includes('L') && item.length > 4) {
          textBankObj.questionTypes = '多选题';
        } else if ( // 单选题
        item.includes('A') || item.includes('B') || item.includes('C') || item.includes('D') || item.includes('E') || item.includes('F') || item.includes('G') || item.includes('H') || item.includes('I') || item.includes('J') || item.includes('K') || item.includes('L')) {
          textBankObj.questionTypes = '单选题';
        } else if (item.includes('对') || item.includes('错')) {
          textBankObj.questionTypes = '判断题';
        }

        textBankObj.okanswer = item.slice(3); // 答案格式错误

        if (item.slice(3) === '') {
          textBankObj.isError = true;
          textBankObj.errorMsg = `未设置答案。试题: ${textBankObj.examContent}`;
        }
      } else if (item.includes('分数')) {
        // 判断分数
        textBankObj.gradeNum = +item.slice(3); // 分数格式错误

        if (textBankObj.gradeNum === 0) {
          textBankObj.isError = true;
          textBankObj.errorMsg = `未设置得分。试题: ${textBankObj.examContent}`;
        }
      } else if ( // 判断选项及选项内容
      item.includes('A') || item.includes('B') || item.includes('C') || item.includes('D') || item.includes('E') || item.includes('F') || item.includes('G') || item.includes('H') || item.includes('I') || item.includes('J') || item.includes('K') || item.includes('L')) {
        // 所有选项在同一行
        if (item.includes('   ')) {
          const newStr = item.replace(/( {3})/g, '","');
          const arr = JSON.parse(`["${newStr}"]`);
          arr.forEach(ite => {
            if (ite !== '') {
              const index = item.indexOf('、') !== -1 ? '、' : item.indexOf('.') !== -1 ? '.' : ' ';
              testOptionObj.options = ite.slice(0, ite.indexOf(index));
              testOptionObj.optionsContent = ite.slice(ite.indexOf(index) + 1);
              options.push(_objectSpread({}, testOptionObj));
            }
          }); // 选项格式错误

          options.forEach(ite => {
            if (ite.options.length > 1) {
              // 选项格式不对
              textBankObj.isError = true;
              textBankObj.errorMsg = `选项请以大写字母加点或顿号或空格开始。例如: A.选项A A、选项A A 选项A,试题: ${textBankObj.examContent}`;
            } else if (ite.optionsContent === '') {
              // 无选项内容
              textBankObj.isError = true;
              textBankObj.errorMsg = `【选项】不能为空，请检查选项格式是否正确。试题: ${textBankObj.examContent}`;
            }
          });
        } else {
          // 选项不在同一行;
          const str = item.includes('、') ? '、' : item.includes('.') ? '.' : ' ';
          const arr = item.split(str);
          arr.forEach((ite, index) => {
            index === 0 ? testOptionObj.options = ite : testOptionObj.optionsContent = ite;
          });
          options.push(_objectSpread({}, testOptionObj)); // 选项格式错误

          options.forEach(ite => {
            if (ite.options.length > 1) {
              // 选项格式不对
              textBankObj.isError = true;
              textBankObj.errorMsg = `选项请以大写字母加点或顿号或空格开始。例如: A.选项A A、选项A A 选项A,试题: ${textBankObj.examContent}`;
            } else if (ite.optionsContent === '') {
              // 无选项内容
              textBankObj.isError = true;
              textBankObj.errorMsg = `【选项】不能为空，请检查选项格式是否正确。试题: ${textBankObj.examContent}`;
            }
          });
        }

        textBankObj.questionTypes = '单选题';
      } else if (item === '') {
        // 添加到试题库数据
        textBankObj.testOptions = options;
        textBankObj.testGapFilling = gapFilling;
        textBank.push(textBankObj);
        textBankObj = {};
        testOptionObj = {};
        gapFillingObj = {};
        options = [];
        gapFilling = [];
      } else {
        // 题型种类
        if (item.includes('___') || item.includes('()')) {
          textBankObj.questionTypes = '填空题';
        } else {
          textBankObj.questionTypes = '问答题';
        } // 试题内容


        textBankObj.examContent = item;
      }
    }); // 简单处理数据

    textBank.forEach(item => {
      // 单个填空题
      if (item.questionTypes === '填空题' && item.testGapFilling.length === 0) {
        // 填空题内容
        const arr = item.okanswer.split('|');
        item.testGapFilling = arr; // 填空题格式错误

        const bracketArr = item.examContent.match(/\(\)/g);
        const underlineArr = item.examContent.match(/___/g);
        let sumAll = 0;

        if (underlineArr && bracketArr) {
          sumAll = underlineArr.length + bracketArr.length;
        } else if (underlineArr) {
          sumAll = underlineArr.length;
        } else if (bracketArr) {
          sumAll = bracketArr.length;
        }

        if (sumAll !== item.testGapFilling.length) {
          item.isError = true;
          item.errorMsg = `填空符的个数和标准答案的个数不匹配，请参考标准横板。试题: ${item.examContent}`;
        }
      } // 没有分数默认分数


      const newStr = Object.keys(item).find(ite => {
        return ite === 'gradeNum';
      });

      if (newStr === undefined) {
        item.gradeNum = 0;
      }
    });
    return textBank;
  }; // 检查样式按钮


  const CheckStyle = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 5000);
    setContentBoxType(2);
    const textBank = await handleValue(textarea.current.value); // 去掉格式错误的数据

    const newArr = []; // 判别格式不错误的重复试题

    const contentData = [];
    textBank.forEach(item => {
      if (!item.isError) {
        contentData.push(item.examContent);
      }
    }); // 格式错误的试题

    const errorArr = textBank.filter(item => {
      return item.isError === true;
    });
    const result = await searchRepetitionData({
      data: contentData
    });
    let errorFlag = true;
    let repetitionFlag = true; // 重复题数量

    const warnNum = result.length !== 0 && result.length || 0; // 格式错误题数量

    const errorNum = errorArr.length; // 文本初始内容

    const correctValue = errorNum !== 0 && warnNum !== 0 ? `<p>检查完毕，共检查到<span>${textBank.length}</span>道试题</p><p style='color:red'>有<span>${errorNum}</span>道题格式错误</p><p style='color:#f57c00'>有<span>${warnNum}</span>道题在数据库已重复</p>` : errorNum !== 0 ? `<p>检查完毕，共检查到<span>${textBank.length}</span>道试题</p><p style='color:red'>有<span>${errorNum}</span>道题格式错误</p>` : warnNum !== 0 ? `<p>检查完毕，共检查到<span>${textBank.length}</span>道试题</p><p style='color:#f57c00'>有<span>${warnNum}</span>道题在数据库已重复</p>` : `<p>检查完毕，共检查到<span>${textBank.length}</span>道试题</p>`;
    let errorValue = errorNum !== 0 ? `<p>-----------------以下有<span>${errorNum}</span>道题格式错误,请检查并修正-----------------</p>` : null;
    let warnValue = warnNum !== 0 ? `<p>--------以下有<span>${warnNum}</span>道题在数据库已重复,请确认是否要覆盖导入--------</p>` : null; // 数据的判别
    // 有重复

    result.forEach(item => {
      errorFlag = false;
      setDisabledFlag(false);
      setButtonBoxType(2);
      correctBox.current.innerHTML = correctValue;
      warnValue += `第${item.index}题: 试题重复，试题库中已经存在此试题: ${item.examContent}<br>`;
      warnBox.current.innerHTML = warnValue;
      errorBox.current.innerHTML = errorValue;
    }); // 格式有错误

    textBank.forEach((item, index) => {
      if (item.isError === true) {
        setDisabledFlag(false);
        repetitionFlag = false;
        correctBox.current.innerHTML = correctValue;
        errorValue += `第${index + 1}题: ${item.errorMsg}<br>`;
        errorBox.current.innerHTML = errorValue;
        warnBox.current.innerHTML = warnValue;
      } else {
        newArr.push(item);
      }
    }); // 数据无问题和无重复数据

    if (errorFlag) {
      setButtonBoxType(1); // 数据无问题

      if (errorFlag && repetitionFlag) {
        setDisabledFlag(false);
        correctBox.current.innerHTML = correctValue;
        errorBox.current.innerHTML = '';
        warnBox.current.innerHTML = '';
      }
    }

    setTestBatchAddData(newArr);
    setTestErrorData(errorArr);
  }; // 导入


  const Import = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000);
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(testBatchAddData);
    props.getData && props.getData(res);
    correctBox.current.innerHTML = res ? `<p>导入成功: ${testBatchAddData.length}道题</p><p>导入失败: ${testErrorData.length}道题</p>` : `<p>导入成功: 0道题</p><p>导入失败: ${testBatchAddData.length + testErrorData.length}道题</p>`;
    errorBox.current.innerHTML = '';
    warnBox.current.innerHTML = '';
    res && setButtonBoxType(3);
    res && setDisabledFlag(false); // 操作日志

    const lastRes = res ? `通过txt格式文件批量导入试题 导入成功:${testBatchAddData.length}道题 导入失败:${testErrorData.length}道题` : `通过txt格式文件批量导入试题 导入成功:0道题 导入失败:${testBatchAddData.length + testErrorData.length}道题`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: addQuestion,
      detail: lastRes
    });
  }; // 全部导入并覆盖新试题


  const ImportCover = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000);
    const res = await deleteRepetition(testRepetitionData); // 重组导入的数据

    if (res.code === 200) {
      // 拿出不重复的数据
      const deWeightData = [];
      testBatchAddData.forEach(item => {
        const flag = testRepetitionData.some(ite => {
          return ite.examContent === item.examContent;
        });
        !flag && deWeightData.push(item);
      });
      const newTestBatchAddData = [...deWeightData];
      const coverDataIndex = []; // 加入已被覆盖的数据

      if (res.correctData.length > 0) {
        res.correctData.map(item => {
          const newObj = testBatchAddData.find(ite => {
            return ite.examContent === item.examContent;
          });
          newTestBatchAddData.push(newObj);
        });
      } // 导入


      const result = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(newTestBatchAddData);
      props.getData && props.getData(result); // 提示框内容说明

      correctBox.current.innerHTML = res.code === 200 ? `<p>导入成功: ${newTestBatchAddData.length}道题</p><p>导入失败: ${res.errorData.length + testErrorData.length}道题</p>` : `<p>导入成功: 0道题</p><p>导入失败: ${testBatchAddData.length + testErrorData.length}道题</p>`;

      if (res.errorData.length > 0) {
        errorBox.current.innerHTML = `<p style='color:red'>-------------试题在考题中被加入后,试题无法再进行操作,故-------------</p>`; // 拿出未被导入的数据

        res.errorData.map(item => {
          const newIndex = testBatchAddData.findIndex(ite => {
            return ite.examContent === item.examContent;
          });
          coverDataIndex.push(newIndex);
        });
        let str = '';
        coverDataIndex.map(item => {
          str += `<p style="color:red">------------------------<span>试题${+item + 1}</span>无法被覆盖------------------------</p>`;
        });
        errorBox.current.innerHTML += str;
      }

      warnBox.current.innerHTML = ''; // 结束后操作

      result && setButtonBoxType(3);
      result && setDisabledFlag(false); // 操作日志;

      const lastRes = result ? `通过txt格式文件批量导入试题 导入成功:${newTestBatchAddData.length}道题 导入失败:${res.errorData.length + testErrorData.length}道题` : `通过txt格式文件批量导入试题 导入成功:0道题 导入失败:${testBatchAddData.length + testErrorData.length}道题`;
      addOperationLogData({
        operationName: getlocalcache().user,
        IPAddress: getlocalcache().IP,
        operationType: addQuestion,
        detail: lastRes
      });
    }
  }; // 只导入新试题


  const ImportNew = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000); // 不重复的数据

    const deWeightData = [];
    testBatchAddData.forEach(item => {
      const flag = testRepetitionData.some(ite => {
        return ite.examContent === item.examContent;
      });
      !flag && deWeightData.push(item);
    }); // 导入

    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(deWeightData);
    props.getData && props.getData(res);
    correctBox.current.innerHTML = res ? `<p>导入成功: ${deWeightData.length}道题</p><p>导入失败: ${testRepetitionData.length + testErrorData.length}道题</p>` : `<p>导入成功: 0道题</p><p>导入失败: ${testBatchAddData.length + testErrorData.length}道题</p>`;
    errorBox.current.innerHTML = '';
    warnBox.current.innerHTML = '';
    res && setButtonBoxType(3);
    res && setDisabledFlag(false);
    const lastRes = res ? `通过txt格式文件批量导入试题 导入成功:${deWeightData.length}道题 导入失败:${testRepetitionData.length + testErrorData.length}道题` : `通过txt格式文件批量导入试题 导入成功:0道题 导入失败:${testBatchAddData.length + testErrorData.length}道题`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: addQuestion,
      detail: lastRes
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().batchAddBox),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().buttonBox),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(PopoverCommon, {
        type: "FullBox",
        placement: "bottomLeft",
        style: {
          height: '30px',
          background: '#2b71c8',
          color: 'white',
          padding: '0 5px'
        },
        title: title,
        children: content
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().content),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: contentBoxType === 0 ? (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().textBox) : (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().textBoxSmall),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("textarea", {
          onChange: () => {
            setButtonBoxType(0);
          },
          ref: textarea,
          defaultValue: '驾驶人在下列哪种情况下不能驾驶机动车?\nA、喝茶后\nB、饮酒后\nC、喝牛奶后\nD、喝咖啡后\n答案:B\n分数:20\n\n以下属于中国古代四大发明的选项有哪些？\nA. 火药      B. 造纸术      C. 指南针      D. 印刷术      E. 瓷器\n答案:ABCD\n分数:20\n\n根据列出的算式填写计算结果: 9-1=()，4+2=()\n答案:8|6&六\n分数:20\n\n一个两位数加上一个两位数，结果是四位数。\n答案:错\n分数:20\n\n简述生产力对教育的作用?\n答案:决定教育规模和速度、结构变化及内容和手段\n分数:20\n\n'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightButton),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '题干内容\nA.\nB.\nC.\nD.\n答案:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u5355\u9009\u6846"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '题干内容\nA.\nB.\nC.\nD.\n答案:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u591A\u9009\u6846"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '题干内容\n答案:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u5224\u65AD\u9898"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '\n填空1___填空2___\n答案:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u586B\u7A7A\u9898"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '题干内容\n答案:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u95EE\u7B54\u9898"]
          })]
        })]
      }), contentBoxType !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightBox),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().checkBox),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            style: {
              marginBottom: '20px'
            },
            ref: correctBox
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            style: {
              marginBottom: '30px',
              color: 'red'
            },
            ref: errorBox
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
            style: {
              color: '#f57c00'
            },
            ref: warnBox
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
          className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().hiddenButton),
          onClick: () => {
            setContentBoxType(0);
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
            style: {
              paddingLeft: '5px'
            },
            children: "\u9690\u85CF\u6D88\u606F\u6846"
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().button),
      children: (() => {
        switch (buttonBoxType) {
          case 0:
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              disabled: disabledFlag,
              className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().check),
              onClick: () => {
                CheckStyle();
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CheckOutlined, {
                style: {
                  paddingRight: '5px'
                }
              }), "\u68C0\u67E5\u683C\u5F0F"]
            });

          case 1:
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
              className: disabledFlag ? (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : '',
              disabled: disabledFlag,
              onClick: () => {
                Import();
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {
                style: {
                  paddingRight: '5px'
                }
              }), "\u5BFC\u5165\u8BD5\u9898"]
            });

          case 2:
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: disabledFlag ? (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : '',
                disabled: disabledFlag,
                onClick: () => {
                  setAlertType('importAll');
                  alertdialog();
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {
                  style: {
                    paddingRight: '5px'
                  }
                }), "\u5168\u90E8\u5BFC\u5165"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: disabledFlag ? (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : '',
                disabled: disabledFlag,
                onClick: () => {
                  setAlertType('importCover');
                  alertdialog();
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {
                  style: {
                    paddingRight: '5px'
                  }
                }), "\u5168\u90E8\u5BFC\u5165\uFF0C\u5E76\u8986\u76D6\u91CD\u590D\u8BD5\u9898"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: disabledFlag ? (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().disabled) : '',
                disabled: disabledFlag,
                onClick: () => {
                  setAlertType('importNew');
                  alertdialog();
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {
                  style: {
                    paddingRight: '5px'
                  }
                }), "\u53EA\u5BFC\u5165\u65B0\u8BD5\u9898"]
              })]
            });

          case 3:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().closeButton),
                onClick: () => {
                  props.changeAlertFlag(false);
                  props.pageTestBank({
                    pageSize: props.defultNumber,
                    page: props.page
                  });
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CloseOutlined, {
                  style: {
                    paddingRight: '5px'
                  }
                }), "\u5173\u95ED"]
              })
            });

          default:
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {});
        }
      })()
    }), disabledFlag ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().loading),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
        size: "large"
      })
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alertContent),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.QuestionCircleFilled, {
          style: {
            marginRight: '5px',
            fontSize: '25px',
            color: '#f1a81a',
            verticalAlign: 'middle'
          }
        }), (() => {
          switch (alertType) {
            case 'importAll':
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: "\u5168\u90E8\u91CD\u65B0\u5BFC\u5165,\u4E0D\u8986\u76D6\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            case 'importCover':
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: "\u5168\u90E8\u5BFC\u5165,\u5E76\u8986\u76D6\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            case 'importNew':
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
                children: "\u53EA\u5BFC\u5165\u65B0\u8BD5\u9898,\u5FFD\u7565\u91CD\u590D\u8BD5\u9898\uFF0C\u786E\u8BA4\u6267\u884C\u5417"
              });

            default:
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {});
          }
        })()]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().alertButton),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => {
            alertType === 'importAll' && Import();
            alertType === 'importCover' && ImportCover();
            alertType === 'importNew' && ImportNew();
            changeAlertFlag(false);
          },
          children: "\u786E\u8BA4"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("button", {
          onClick: () => {
            changeAlertFlag(false);
          },
          children: "\u53D6\u6D88"
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BatchAdd);

/***/ }),

/***/ 4575:
/***/ ((module) => {

// Exports
module.exports = {
	"batchAddBox": "batchAdd_batchAddBox__WlUI_",
	"buttonBox": "batchAdd_buttonBox__MDqWB",
	"content": "batchAdd_content__0eBwK",
	"textBox": "batchAdd_textBox__KKT3K",
	"textBoxSmall": "batchAdd_textBoxSmall__S4tD7",
	"rightButton": "batchAdd_rightButton__W1xl6",
	"rightBox": "batchAdd_rightBox__oRIab",
	"checkBox": "batchAdd_checkBox__F01z9",
	"button": "batchAdd_button__voL5m",
	"disabled": "batchAdd_disabled___4gxA",
	"check": "batchAdd_check__DVavM",
	"closeButton": "batchAdd_closeButton__H33O1",
	"loading": "batchAdd_loading__zN39I",
	"alertContent": "batchAdd_alertContent__EP971",
	"alertButton": "batchAdd_alertButton__rZ1LT"
};


/***/ })

};
;