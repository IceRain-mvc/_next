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
  // ??????
  // ????????????
  const {
    0: buttonBoxType,
    1: setButtonBoxType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // ???????????????????????????

  const {
    0: contentBoxType,
    1: setContentBoxType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // ?????????????????????

  const {
    0: alertType,
    1: setAlertType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // ?????????????????????

  const {
    0: testSort,
    1: setTestSort
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // ???????????????id

  const {
    0: treeId,
    1: setTreeId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(4); // ???????????????

  const {
    0: testBatchAddData,
    1: setTestBatchAddData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // ?????????????????????

  const {
    0: testErrorData,
    1: setTestErrorData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]); // ???????????????

  const {
    0: testRepetitionData,
    1: setTestRepetitionData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // ????????????

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // ??????????????????

  const {
    0: disabledFlag,
    1: setDisabledFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: addQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('??????????????????'); // ref

  const textarea = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const correctBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const warnBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const errorBox = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // ??????
  // ??????????????????

  const alertdialog = () => {
    setalertShow(true);
  }; // ??????????????????


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // ??????????????????


  const currentNode = (location, id) => {
    setTestSort(location);
    setTreeId(id);
    setButtonBoxType(0);
  }; // ????????????


  const addOperationLogData = async params => {
    const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_5__/* .addOperationData */ .TH)(params);
    return res;
  }; // ??????????????????IP??????;


  const getlocalcache = () => {
    const user = localStorage.getItem('user') || '';
    const IP = localStorage.getItem('userIp') || '';
    const obj = {
      user,
      IP
    };
    return obj;
  }; // ????????????????????????


  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.AlignLeftOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
      style: {
        padding: '0 3px'
      },
      children: testSort !== '' ? testSort.slice(testSort.lastIndexOf('/') + 1, testSort.length) : '?????????????????????????????????'
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownOutlined, {})]
  }); // ??????????????????=


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // ???????????????????????????


  const searchRepetitionData = async arr => {
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .SearchRepetitionData */ .QM)(arr); // @ts-ignore

    setTestRepetitionData(res);
    return res;
  }; // ??????????????????


  const deleteRepetition = async arr => {
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .DeleteRepetition */ .J7)(arr);
    return res;
  }; // ???????????????????????????


  const handleValue = async value => {
    const textBank = [];
    let options = [];
    let gapFilling = [];
    let textBankObj = {};
    let testOptionObj = {};
    let gapFillingObj = {}; // ?????????????????????

    const newStr = value.replace(/(\n)/g, '","');
    const arr = JSON.parse(`["${newStr}",""]`);
    const newArr = [];
    arr.forEach((item, index) => {
      item !== '' && newArr.push(item);
      item === '' && arr[index - 1] !== '' && index !== 0 && newArr.push(item);
    }); // ?????????????????????

    newArr.forEach(item => {
      textBankObj.difficultyLevel = '????????????';
      textBankObj.examTypes = String(treeId) || '4';
      textBankObj.treePerson = String(treeId) || '4'; // ??????

      if (item.includes('??????')) {
        // ??????????????????????????????
        if (item.includes('|') || item.includes('&')) {
          textBankObj.questionTypes = '?????????'; // ???????????????

          const arr = item.slice(3).split('|');
          arr.forEach(ite => {
            gapFillingObj.gapFillingAnswer = ite;
            gapFilling.push(_objectSpread({}, gapFillingObj));
          }); // ?????????????????????

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
            textBankObj.errorMsg = `????????????????????????????????????????????????????????????????????????????????????: ${textBankObj.examContent}`;
          }
        } else if ( // ?????????
        item.includes('A') && item.length > 4 || item.includes('B') && item.length > 4 || item.includes('C') && item.length > 4 || item.includes('D') && item.length > 4 || item.includes('E') && item.length > 4 || item.includes('F') && item.length > 4 || item.includes('G') && item.length > 4 || item.includes('H') && item.length > 4 || item.includes('I') && item.length > 4 || item.includes('J') && item.length > 4 || item.includes('K') && item.length > 4 || item.includes('L') && item.length > 4) {
          textBankObj.questionTypes = '?????????';
        } else if ( // ?????????
        item.includes('A') || item.includes('B') || item.includes('C') || item.includes('D') || item.includes('E') || item.includes('F') || item.includes('G') || item.includes('H') || item.includes('I') || item.includes('J') || item.includes('K') || item.includes('L')) {
          textBankObj.questionTypes = '?????????';
        } else if (item.includes('???') || item.includes('???')) {
          textBankObj.questionTypes = '?????????';
        }

        textBankObj.okanswer = item.slice(3); // ??????????????????

        if (item.slice(3) === '') {
          textBankObj.isError = true;
          textBankObj.errorMsg = `????????????????????????: ${textBankObj.examContent}`;
        }
      } else if (item.includes('??????')) {
        // ????????????
        textBankObj.gradeNum = +item.slice(3); // ??????????????????

        if (textBankObj.gradeNum === 0) {
          textBankObj.isError = true;
          textBankObj.errorMsg = `????????????????????????: ${textBankObj.examContent}`;
        }
      } else if ( // ???????????????????????????
      item.includes('A') || item.includes('B') || item.includes('C') || item.includes('D') || item.includes('E') || item.includes('F') || item.includes('G') || item.includes('H') || item.includes('I') || item.includes('J') || item.includes('K') || item.includes('L')) {
        // ????????????????????????
        if (item.includes('   ')) {
          const newStr = item.replace(/( {3})/g, '","');
          const arr = JSON.parse(`["${newStr}"]`);
          arr.forEach(ite => {
            if (ite !== '') {
              const index = item.indexOf('???') !== -1 ? '???' : item.indexOf('.') !== -1 ? '.' : ' ';
              testOptionObj.options = ite.slice(0, ite.indexOf(index));
              testOptionObj.optionsContent = ite.slice(ite.indexOf(index) + 1);
              options.push(_objectSpread({}, testOptionObj));
            }
          }); // ??????????????????

          options.forEach(ite => {
            if (ite.options.length > 1) {
              // ??????????????????
              textBankObj.isError = true;
              textBankObj.errorMsg = `???????????????????????????????????????????????????????????????: A.??????A A?????????A A ??????A,??????: ${textBankObj.examContent}`;
            } else if (ite.optionsContent === '') {
              // ???????????????
              textBankObj.isError = true;
              textBankObj.errorMsg = `?????????????????????????????????????????????????????????????????????: ${textBankObj.examContent}`;
            }
          });
        } else {
          // ?????????????????????;
          const str = item.includes('???') ? '???' : item.includes('.') ? '.' : ' ';
          const arr = item.split(str);
          arr.forEach((ite, index) => {
            index === 0 ? testOptionObj.options = ite : testOptionObj.optionsContent = ite;
          });
          options.push(_objectSpread({}, testOptionObj)); // ??????????????????

          options.forEach(ite => {
            if (ite.options.length > 1) {
              // ??????????????????
              textBankObj.isError = true;
              textBankObj.errorMsg = `???????????????????????????????????????????????????????????????: A.??????A A?????????A A ??????A,??????: ${textBankObj.examContent}`;
            } else if (ite.optionsContent === '') {
              // ???????????????
              textBankObj.isError = true;
              textBankObj.errorMsg = `?????????????????????????????????????????????????????????????????????: ${textBankObj.examContent}`;
            }
          });
        }

        textBankObj.questionTypes = '?????????';
      } else if (item === '') {
        // ????????????????????????
        textBankObj.testOptions = options;
        textBankObj.testGapFilling = gapFilling;
        textBank.push(textBankObj);
        textBankObj = {};
        testOptionObj = {};
        gapFillingObj = {};
        options = [];
        gapFilling = [];
      } else {
        // ????????????
        if (item.includes('___') || item.includes('()')) {
          textBankObj.questionTypes = '?????????';
        } else {
          textBankObj.questionTypes = '?????????';
        } // ????????????


        textBankObj.examContent = item;
      }
    }); // ??????????????????

    textBank.forEach(item => {
      // ???????????????
      if (item.questionTypes === '?????????' && item.testGapFilling.length === 0) {
        // ???????????????
        const arr = item.okanswer.split('|');
        item.testGapFilling = arr; // ?????????????????????

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
          item.errorMsg = `????????????????????????????????????????????????????????????????????????????????????: ${item.examContent}`;
        }
      } // ????????????????????????


      const newStr = Object.keys(item).find(ite => {
        return ite === 'gradeNum';
      });

      if (newStr === undefined) {
        item.gradeNum = 0;
      }
    });
    return textBank;
  }; // ??????????????????


  const CheckStyle = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 5000);
    setContentBoxType(2);
    const textBank = await handleValue(textarea.current.value); // ???????????????????????????

    const newArr = []; // ????????????????????????????????????

    const contentData = [];
    textBank.forEach(item => {
      if (!item.isError) {
        contentData.push(item.examContent);
      }
    }); // ?????????????????????

    const errorArr = textBank.filter(item => {
      return item.isError === true;
    });
    const result = await searchRepetitionData({
      data: contentData
    });
    let errorFlag = true;
    let repetitionFlag = true; // ???????????????

    const warnNum = result.length !== 0 && result.length || 0; // ?????????????????????

    const errorNum = errorArr.length; // ??????????????????

    const correctValue = errorNum !== 0 && warnNum !== 0 ? `<p>???????????????????????????<span>${textBank.length}</span>?????????</p><p style='color:red'>???<span>${errorNum}</span>??????????????????</p><p style='color:#f57c00'>???<span>${warnNum}</span>???????????????????????????</p>` : errorNum !== 0 ? `<p>???????????????????????????<span>${textBank.length}</span>?????????</p><p style='color:red'>???<span>${errorNum}</span>??????????????????</p>` : warnNum !== 0 ? `<p>???????????????????????????<span>${textBank.length}</span>?????????</p><p style='color:#f57c00'>???<span>${warnNum}</span>???????????????????????????</p>` : `<p>???????????????????????????<span>${textBank.length}</span>?????????</p>`;
    let errorValue = errorNum !== 0 ? `<p>-----------------?????????<span>${errorNum}</span>??????????????????,??????????????????-----------------</p>` : null;
    let warnValue = warnNum !== 0 ? `<p>--------?????????<span>${warnNum}</span>???????????????????????????,??????????????????????????????--------</p>` : null; // ???????????????
    // ?????????

    result.forEach(item => {
      errorFlag = false;
      setDisabledFlag(false);
      setButtonBoxType(2);
      correctBox.current.innerHTML = correctValue;
      warnValue += `???${item.index}???: ????????????????????????????????????????????????: ${item.examContent}<br>`;
      warnBox.current.innerHTML = warnValue;
      errorBox.current.innerHTML = errorValue;
    }); // ???????????????

    textBank.forEach((item, index) => {
      if (item.isError === true) {
        setDisabledFlag(false);
        repetitionFlag = false;
        correctBox.current.innerHTML = correctValue;
        errorValue += `???${index + 1}???: ${item.errorMsg}<br>`;
        errorBox.current.innerHTML = errorValue;
        warnBox.current.innerHTML = warnValue;
      } else {
        newArr.push(item);
      }
    }); // ?????????????????????????????????

    if (errorFlag) {
      setButtonBoxType(1); // ???????????????

      if (errorFlag && repetitionFlag) {
        setDisabledFlag(false);
        correctBox.current.innerHTML = correctValue;
        errorBox.current.innerHTML = '';
        warnBox.current.innerHTML = '';
      }
    }

    setTestBatchAddData(newArr);
    setTestErrorData(errorArr);
  }; // ??????


  const Import = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000);
    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(testBatchAddData);
    props.getData && props.getData(res);
    correctBox.current.innerHTML = res ? `<p>????????????: ${testBatchAddData.length}??????</p><p>????????????: ${testErrorData.length}??????</p>` : `<p>????????????: 0??????</p><p>????????????: ${testBatchAddData.length + testErrorData.length}??????</p>`;
    errorBox.current.innerHTML = '';
    warnBox.current.innerHTML = '';
    res && setButtonBoxType(3);
    res && setDisabledFlag(false); // ????????????

    const lastRes = res ? `??????txt?????????????????????????????? ????????????:${testBatchAddData.length}?????? ????????????:${testErrorData.length}??????` : `??????txt?????????????????????????????? ????????????:0?????? ????????????:${testBatchAddData.length + testErrorData.length}??????`;
    addOperationLogData({
      operationName: getlocalcache().user,
      IPAddress: getlocalcache().IP,
      operationType: addQuestion,
      detail: lastRes
    });
  }; // ??????????????????????????????


  const ImportCover = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000);
    const res = await deleteRepetition(testRepetitionData); // ?????????????????????

    if (res.code === 200) {
      // ????????????????????????
      const deWeightData = [];
      testBatchAddData.forEach(item => {
        const flag = testRepetitionData.some(ite => {
          return ite.examContent === item.examContent;
        });
        !flag && deWeightData.push(item);
      });
      const newTestBatchAddData = [...deWeightData];
      const coverDataIndex = []; // ???????????????????????????

      if (res.correctData.length > 0) {
        res.correctData.map(item => {
          const newObj = testBatchAddData.find(ite => {
            return ite.examContent === item.examContent;
          });
          newTestBatchAddData.push(newObj);
        });
      } // ??????


      const result = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(newTestBatchAddData);
      props.getData && props.getData(result); // ?????????????????????

      correctBox.current.innerHTML = res.code === 200 ? `<p>????????????: ${newTestBatchAddData.length}??????</p><p>????????????: ${res.errorData.length + testErrorData.length}??????</p>` : `<p>????????????: 0??????</p><p>????????????: ${testBatchAddData.length + testErrorData.length}??????</p>`;

      if (res.errorData.length > 0) {
        errorBox.current.innerHTML = `<p style='color:red'>-------------??????????????????????????????,???????????????????????????,???-------------</p>`; // ???????????????????????????

        res.errorData.map(item => {
          const newIndex = testBatchAddData.findIndex(ite => {
            return ite.examContent === item.examContent;
          });
          coverDataIndex.push(newIndex);
        });
        let str = '';
        coverDataIndex.map(item => {
          str += `<p style="color:red">------------------------<span>??????${+item + 1}</span>???????????????------------------------</p>`;
        });
        errorBox.current.innerHTML += str;
      }

      warnBox.current.innerHTML = ''; // ???????????????

      result && setButtonBoxType(3);
      result && setDisabledFlag(false); // ????????????;

      const lastRes = result ? `??????txt?????????????????????????????? ????????????:${newTestBatchAddData.length}?????? ????????????:${res.errorData.length + testErrorData.length}??????` : `??????txt?????????????????????????????? ????????????:0?????? ????????????:${testBatchAddData.length + testErrorData.length}??????`;
      addOperationLogData({
        operationName: getlocalcache().user,
        IPAddress: getlocalcache().IP,
        operationType: addQuestion,
        detail: lastRes
      });
    }
  }; // ??????????????????


  const ImportNew = async () => {
    setDisabledFlag(true);
    setTimeout(() => {
      setDisabledFlag(false);
    }, 10000); // ??????????????????

    const deWeightData = [];
    testBatchAddData.forEach(item => {
      const flag = testRepetitionData.some(ite => {
        return ite.examContent === item.examContent;
      });
      !flag && deWeightData.push(item);
    }); // ??????

    const res = await (0,_api_testBank_testBank__WEBPACK_IMPORTED_MODULE_3__/* .BatchAddData */ .b)(deWeightData);
    props.getData && props.getData(res);
    correctBox.current.innerHTML = res ? `<p>????????????: ${deWeightData.length}??????</p><p>????????????: ${testRepetitionData.length + testErrorData.length}??????</p>` : `<p>????????????: 0??????</p><p>????????????: ${testBatchAddData.length + testErrorData.length}??????</p>`;
    errorBox.current.innerHTML = '';
    warnBox.current.innerHTML = '';
    res && setButtonBoxType(3);
    res && setDisabledFlag(false);
    const lastRes = res ? `??????txt?????????????????????????????? ????????????:${deWeightData.length}?????? ????????????:${testRepetitionData.length + testErrorData.length}??????` : `??????txt?????????????????????????????? ????????????:0?????? ????????????:${testBatchAddData.length + testErrorData.length}??????`;
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
          defaultValue: '???????????????????????????????????????????????????????\nA????????????\nB????????????\nC???????????????\nD???????????????\n??????:B\n??????:20\n\n?????????????????????????????????????????????????????????\nA. ??????      B. ?????????      C. ?????????      D. ?????????      E. ??????\n??????:ABCD\n??????:20\n\n???????????????????????????????????????: 9-1=()???4+2=()\n??????:8|6&???\n??????:20\n\n????????????????????????????????????????????????????????????\n??????:???\n??????:20\n\n??????????????????????????????????\n??????:????????????????????????????????????????????????????????????\n??????:20\n\n'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          className: (_batchAdd_module_scss__WEBPACK_IMPORTED_MODULE_7___default().rightButton),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '????????????\nA.\nB.\nC.\nD.\n??????:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u5355\u9009\u6846"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '????????????\nA.\nB.\nC.\nD.\n??????:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u591A\u9009\u6846"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '????????????\n??????:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u5224\u65AD\u9898"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '\n??????1___??????2___\n??????:\n\n';
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}), "\u586B\u7A7A\u9898"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
            onClick: () => {
              setButtonBoxType(0);
              textarea.current.value = textarea.current.value + '????????????\n??????:\n\n';
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
      alertTitle: '??????',
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