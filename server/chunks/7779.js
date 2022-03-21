exports.id = 7779;
exports.ids = [7779];
exports.modules = {

/***/ 7779:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ textSetes)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: ./src/components/exam/textSet/textset.module.css
var textset_module = __webpack_require__(1653);
var textset_module_default = /*#__PURE__*/__webpack_require__.n(textset_module);
// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(261);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/examSet/index.tsx

function getAllChapter() {
  return httpProvider.request({
    url: '/question-configs/getAllList',
    method: 'GET'
  });
} // 考试设置所有

function getExercise(params) {
  return http/* httpProvider.request */.A.request({
    url: 'exercise/getExamConfigSettings/' + params,
    method: 'GET'
  });
} // 考试设置所有

function getExamSetAll(params) {
  return http/* httpProvider.request */.A.request({
    url: 'exam/getExamConfigSettings/' + params,
    method: 'GET'
  });
}
function getPaperPattern() {
  // 试卷模式
  return http/* httpProvider.request */.A.request({
    url: 'paper-mode/getAll',
    method: 'GET'
  });
}
function getTrySetting() {
  // 试题设置
  return http/* httpProvider.request */.A.request({
    url: 'question-config/getAllList',
    method: 'GET'
  });
}
function getTestSet() {
  return http/* httpProvider.request */.A.request({
    // 考试设置
    url: 'exam-config-require/getAll',
    method: 'GET'
  });
}
function getAnswer() {
  // 答题设备
  return http/* httpProvider.request */.A.request({
    url: 'answer-equipment/getAll',
    method: 'GET'
  });
}
function getantiCheating() {
  return http/* httpProvider.request */.A.request({
    url: 'anti-cheating-config/getAllList',
    method: 'GET'
  });
}
function getallOptions() {
  // 成绩设置
  return http/* httpProvider.request */.A.request({
    url: 'grade-config/getAllOptions',
    method: 'GET'
  });
} // export function addexamConfig(data) {
//   console.log(data);
//   return httpProvider.request({
//     url: 'exam/save-exam-config-require',
//     method: 'POST',
//     data,
//   });
// }
// 可考次数渲染 获取全部

function getExamTimeAll() {
  return http/* httpProvider.request */.A.request({
    url: 'exam-time/getAll',
    method: 'GET'
  });
} // 可考次数 提示框内确定 saveAnswerTimeConfig

function saveTimeConfig(data) {
  return http/* httpProvider.request */.A.request({
    url: 'exam/save-exam-time-config',
    method: 'POST',
    data
  });
}
function saveTimeConfigs(data) {
  return http/* httpProvider.request */.A.request({
    url: 'exercise/save-exam-time-config',
    method: 'POST',
    data
  });
} // 答题时间 提示框获取

function getTextTime() {
  return http/* httpProvider.request */.A.request({
    url: 'answer-time/getAll',
    method: 'GET'
  });
} // 及格分数  ==》 自定义评语设置

function markspeakAll() {
  return httpProvider.request({
    url: 'exam-config/getAll',
    method: 'GET'
  });
} // 答题时间 增加

function saveAnswerTime(data) {
  return http/* httpProvider.request */.A.request({
    url: 'exam/save-answer-time-require',
    method: 'POST',
    data
  });
}
function saveAnswerTimes(data) {
  return http/* httpProvider.request */.A.request({
    url: 'exercise/save-answer-time-require',
    method: 'POST',
    data
  });
} // 考试保存事务

function saveTextSets(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exam/save-exam-config',
    method: 'PUT',
    data
  });
} // 练习保存设置

function saveChapter(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exercise/save-exam-config',
    method: 'PUT',
    data
  });
} // 防作弊设置 设置

function savetapscreeTimes(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exam-config/tap-screen-times',
    method: 'PUT',
    data
  });
} // 得分设置

function saveoptionsScore(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exam/options-get-score',
    method: 'PUT',
    data
  });
}
function saveoptionsScores(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exercise/options-get-score',
    method: 'PUT',
    data
  });
} // 可考次数

function answerTimeCost(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exam/test-times-require',
    method: 'PUT',
    data
  });
}
function answerTimeCosts(data) {
  return http/* httpProvider.request */.A.request({
    url: '/exercise/test-times-require',
    method: 'PUT',
    data
  });
}
// EXTERNAL MODULE: external "antd/lib/popconfirm"
var popconfirm_ = __webpack_require__(3984);
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/exam/textSet/textSetes.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable no-unused-expressions */






const AlertCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/exam/textSet/textSetes.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});





const TextDate = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 9822).then(__webpack_require__.bind(__webpack_require__, 9822)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9822)],
    modules: ["../src/components/exam/textSet/textSetes.tsx -> " + './textDate']
  }
});
const TextCheckBox = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 9516).then(__webpack_require__.bind(__webpack_require__, 9516)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9516)],
    modules: ["../src/components/exam/textSet/textSetes.tsx -> " + './textCheckBox']
  }
});
const TextRadio = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 9720).then(__webpack_require__.bind(__webpack_require__, 9720)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9720)],
    modules: ["../src/components/exam/textSet/textSetes.tsx -> " + './textReadio']
  }
});
const TextInput = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 9954).then(__webpack_require__.bind(__webpack_require__, 9954)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9954)],
    modules: ["../src/components/exam/textSet/textSetes.tsx -> " + './textInput']
  }
});

const MyTextSetes = props => {
  // 分数mySum 开始为计算出来的及格分数
  const {
    0: allStateObj,
    1: setStateObj
  } = (0,external_react_.useState)({
    examDa: [],
    mypassInpu: 0,
    time: 60,
    // 答题时间
    count: 1,
    // 答题次数
    dataTime: new Date(),
    // 开始考试时间
    stime: 0,
    dataendTime: new Date(),
    // 结束考试时间
    endtims: 0,
    // 判断的结束毫秒
    examTime: [],
    // 考试时间 框里面的 调接口
    examTimeValu: [],
    // 考试时间
    value: 1,
    // 试卷模式 和 选中状态
    result: 1
  });
  const {
    0: spin,
    1: setspin
  } = (0,external_react_.useState)(false);
  const {
    0: remark,
    1: setremark
  } = (0,external_react_.useState)('恭喜您，成功通过本次考试!');
  const {
    0: regret,
    1: setregret
  } = (0,external_react_.useState)('很遗憾，您没有通过本次考试！');
  const {
    0: okHref,
    1: setokHref
  } = (0,external_react_.useState)('如需跳转，请输入可访问链接');
  const {
    0: noHref,
    1: setnoHref
  } = (0,external_react_.useState)('如需跳转，请输入可访问链接');
  const {
    0: vidible,
    1: setVidible
  } = (0,external_react_.useState)(false);
  const totalPoints = (0,external_react_.useRef)(null);
  const hrefInput = (0,external_react_.useRef)(null);
  const noHrefDom = (0,external_react_.useRef)(null); // 考试时间 框里面的 调接口

  const {
    0: examTime,
    1: setexamTime
  } = (0,external_react_.useState)([]);
  const {
    0: timeCounts,
    1: settimeCounts
  } = (0,external_react_.useState)(0); // 答题时间

  const {
    0: textTimes,
    1: settextTimes
  } = (0,external_react_.useState)([]);
  const {
    0: examValTimData,
    1: setTextVlData
  } = (0,external_react_.useState)([]);
  const {
    0: layTime,
    1: setlayTime
  } = (0,external_react_.useState)(0); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const {
    0: textCounts,
    1: settextCounts
  } = (0,external_react_.useState)(0); // 可考次数

  const {
    0: textValData,
    1: settextValData
  } = (0,external_react_.useState)([]); // 试卷模式

  const {
    0: limitValue,
    1: setlimitVal
  } = (0,external_react_.useState)(0);
  const {
    0: errValue,
    1: seterrValue
  } = (0,external_react_.useState)(0); // 时间限制

  const {
    0: myFlagtotal,
    1: setmyFlagtotal
  } = (0,external_react_.useState)(false);
  const {
    0: astrict,
    1: setastrict
  } = (0,external_react_.useState)(false);
  const {
    0: valueData,
    1: setValueData
  } = (0,external_react_.useState)([]);
  const {
    0: valueFlag,
    1: setVlFla
  } = (0,external_react_.useState)(false);
  const {
    0: textpaper,
    1: settextpaper
  } = (0,external_react_.useState)([]);
  const {
    0: emigrated,
    1: setEmigrated
  } = (0,external_react_.useState)([]); // 成绩设置 和 选中状态

  const {
    0: resultData,
    1: setResultData
  } = (0,external_react_.useState)([]); // const [result, setResult] = useState(1);

  const {
    0: resuFlag,
    1: setresuFlag
  } = (0,external_react_.useState)(false);
  const {
    0: resultvalData,
    1: setResuldat
  } = (0,external_react_.useState)([]); // 考试设置

  const {
    0: textData,
    1: setTextData
  } = (0,external_react_.useState)([]);
  const {
    0: textValueData,
    1: setValData
  } = (0,external_react_.useState)([]); // 答题设备

  const {
    0: faciliData,
    1: setFaciData
  } = (0,external_react_.useState)([]);
  const {
    0: facilvalData,
    1: setvaluefaciVal
  } = (0,external_react_.useState)([]);
  const {
    0: facility,
    1: setfacility
  } = (0,external_react_.useState)(1);
  const {
    0: faciFlag,
    1: setFacilty
  } = (0,external_react_.useState)(false); // 防作弊设置

  const {
    0: criData,
    1: setCriData
  } = (0,external_react_.useState)([]);
  const {
    0: oneFlag,
    1: setOneFlag
  } = (0,external_react_.useState)(false);
  const {
    0: faciValu,
    1: setFaciVal
  } = (0,external_react_.useState)([]);
  const {
    0: twoFlag,
    1: setTwoFlag
  } = (0,external_react_.useState)(false);
  const {
    0: qieVal,
    1: setQieVal
  } = (0,external_react_.useState)(0);
  const {
    0: chaoHistory,
    1: setChaoHistor
  } = (0,external_react_.useState)(0);
  const {
    0: aheadMin,
    1: setaheadMin
  } = (0,external_react_.useState)(0);
  const {
    0: someStud,
    1: setSomeStud
  } = (0,external_react_.useState)(0);
  const {
    0: phonestu,
    1: setPhostu
  } = (0,external_react_.useState)(0);
  const {
    0: capmin,
    1: setCopmin
  } = (0,external_react_.useState)(0);
  const {
    0: tapTimeVal,
    1: setTapVal
  } = (0,external_react_.useState)(5); // 试题设置

  const {
    0: scoreValue,
    1: setscore
  } = (0,external_react_.useState)(1);
  const {
    0: TryData,
    1: setTryData
  } = (0,external_react_.useState)([]);
  const {
    0: examvaludara,
    1: setexvadata
  } = (0,external_react_.useState)([]);
  const {
    0: scoreval,
    1: setscoreval
  } = (0,external_react_.useState)(25); // 积分

  const {
    0: integral,
    1: setIntergral
  } = (0,external_react_.useState)(1);

  const changes = res => {
    if (res) {
      res.examConfig.passingMessage !== '恭喜您，成功通过本次考试！' ? setremark(res.examConfig.passingMessage) : setremark('恭喜您，成功通过本次考试!');
      res.examConfig.noPassingMessage !== '恭喜您，成功通过本次考试！' ? setregret(res.examConfig.noPassingMessage) : setregret('很遗憾，您没有通过本次考试！');
      res.examConfig.passingHref ? setokHref(res.examConfig.passingHref) : setokHref('如需跳转，请输入可访问链接');
      res.examConfig.noPassingHref ? setnoHref(res.examConfig.noPassingHref) : setnoHref('如需跳转，请输入可访问链接'); // 及格分数

      res.examConfig.passingGrade ? allStateObj.mypassInpu = res.examConfig.passingGrade : allStateObj.mypassInpu = 0; // 考试时间

      res.examConfig.startDateTime ? allStateObj.dataTime = res.examConfig.startDateTime : allStateObj.dataTime = new Date();
      res.examConfig.lateEntryTime !== null ? setlayTime(res.examConfig.lateEntryTime) : setlayTime(0);
      res.examTimes ? allStateObj.examTimeValu = res.examTimes : allStateObj.examTimeValu = [];
      res.examConfig.endDateTime ? allStateObj.dataendTime = res.examConfig.endDateTime : allStateObj.dataendTime = new Date(); // 答题时间

      res.examConfig.answerTime ? allStateObj.time = res.examConfig.answerTime : allStateObj.time = 60;
      res.answerTimes ? setTextVlData(res.answerTimes) : setTextVlData([]); // 可考次数

      res.examConfig.answerTimes ? allStateObj.count = res.examConfig.answerTimes : allStateObj.count = 1;
      res.examConfig.allowSubmitTime !== null ? settextCounts(res.examConfig.allowSubmitTime) : settextCounts(0);
      res.testTimes ? settextValData(res.testTimes) : settextValData([]); // 答题设备单选

      res.answerEquipment !== null ? setfacility(res.answerEquipment.id) : setfacility(1);
      res.answerEquipmentRequires !== null ? setvaluefaciVal(res.answerEquipmentRequires) : setvaluefaciVal([]); // 试卷模式

      res.paperMode !== null ? allStateObj.value = res.paperMode.id : allStateObj.value = 1;
      res.paperMode.id === 3 ? setVlFla(true) : setVlFla(false);
      res.paperModeRequires !== null ? setValueData(res.paperModeRequires) : setValueData([]);
      res.examConfig.limitAnswerSeconds !== 0 ? setlimitVal(res.examConfig.limitAnswerSeconds) : setlimitVal(0);
      res.examConfig.errorAnswers !== null ? seterrValue(res.examConfig.errorAnswers) : seterrValue(0); // 成绩设置

      res.gradeConfig !== null ? allStateObj.result = res.gradeConfig.id : allStateObj.result = 1;
      res.gradeConfigRequires !== null ? setResuldat(res.gradeConfigRequires) : setResuldat([]);
      res.examConfig.limitAnswerTimes !== 0 ? settimeCounts(res.examConfig.limitAnswerTimes) : settimeCounts(0); // 考试设置

      res.examConfigRequires !== null ? setValData(res.examConfigRequires) : setValData([]); // 防作弊设置

      res.antiCheatingConfigs !== null ? setFaciVal(res.antiCheatingConfigs) : setFaciVal([]);
      const oneFlag = res.antiCheatingConfigs.some(item => {
        return item === 1;
      });
      setOneFlag(oneFlag);
      const twoFlag = res.antiCheatingConfigs.some(item => {
        return item === 2;
      });
      setTwoFlag(twoFlag); // 试题设置

      res.questionConfigs !== null ? setexvadata(res.questionConfigs) : setexvadata([]);
      res.examConfig.regressionGetResultAccount !== 25 ? setscoreval(res.examConfig.regressionGetResultAccount) : setscoreval(25);
      res.examConfig.timingCapturedTime !== 5 ? setTapVal(res.examConfig.timingCapturedTime) : setTapVal(5); // 防作弊只允许考生切换考试页面

      res.examConfig.tapTimes !== 0 ? setQieVal(res.examConfig.tapTimes) : setQieVal(0);
      res.examConfig.noOperationTime !== 0 ? setChaoHistor(res.examConfig.noOperationTime) : setChaoHistor(0);
      res.examConfig.beforeFaceCertification !== 0 ? setaheadMin(res.examConfig.beforeFaceCertification) : setaheadMin(0);
      res.examConfig.faceTimes !== 0 ? setSomeStud(res.examConfig.faceTimes) : setSomeStud(0);
      res.examConfig.headPhone !== '' ? setPhostu(res.examConfig.headPhone) : setPhostu(0);
      res.examConfig.tapOutTime !== 0 ? setCopmin(res.examConfig.tapOutTime) : setCopmin(0);
      res.examConfig.integral !== 1 ? setIntergral(res.examConfig.integral) : setIntergral(1);
      setStateObj(allStateObj);
      getAnswer().then(rebs => {
        // 答题设备
        const data = rebs.sort((a, b) => {
          return a.id - b.id;
        });
        const flages = data.find(item => {
          return item.answerEquipmentRequires.length !== 0;
        });

        if (flages) {
          if (flages.id === res.answerEquipment.id) {
            setFacilty(true);
          }
        }

        setFaciData(data);
      });
      getallOptions().then(reas => {
        // 成绩设置
        const data = reas.sort((a, b) => {
          return a.id - b.id;
        });
        const resuFlag = resultData.find(item => {
          return item.gradeConfigRequires.length !== 0;
        });
        resuFlag ? res.gradeConfig.id === resuFlag.id ? setresuFlag(true) : setresuFlag(false) : '';
        setResultData(data);
      });
    }
  };

  const calbal = (0,external_react_.useCallback)(() => {
    props.exercise ? getExercise(props.examid).then(exiseres => {
      const obj = exiseres;
      Object.keys(obj).forEach(item => {
        // eslint-disable-next-line no-bitwise
        if (~item.indexOf('exercise')) {
          const str = item.split('exercise')[1];
          obj['exam' + str] = obj[item];
          delete obj[item];
        }
      });
      allStateObj.examDa = [obj];
      changes(obj);
    }) : getExamSetAll(props.examid).then(res => {
      allStateObj.examDa = [res];
      changes(res);
    });
    getPaperPattern().then(res => {
      // 5、试卷模式
      const data = res.sort((a, b) => {
        return a.id - b.id;
      });
      settextpaper(data);
      const textzhuData = data.find(item => {
        return item.id === 3;
      });
      setEmigrated(textzhuData.paperModeRequires);
    });
    getTrySetting().then(res => {
      // 11、试题设置
      setTryData(res);
    });
    getTestSet().then(res => {
      // 7/考试设置
      setTextData(res);
    });
    getantiCheating().then(res => {
      // 防作弊设备
      const data = res.sort((a, b) => {
        return a.id - b.id;
      });
      setCriData(data);
    });
    getExamTimeAll().then(res => {
      // 获取考试时间框内的内容
      setexamTime(res);
    });
    getTextTime().then(res => {
      settextTimes(res);
    });
    setStateObj(allStateObj); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.examid, props.alertShow]);
  (0,external_react_.useEffect)(() => {
    setspin(true);
    props.alertShow ? calbal() : '';
    setTimeout(() => {
      setspin(false);
    }, 2000);
  }, [calbal, props.alertShow, props.examid]);

  const mymarjTextChange = e => {
    setremark(e.target.value);
  };

  const markNojigChange = e => {
    setregret(e.target.value);
  };

  const hrefChange = (e, sum) => {
    const res = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;
    const flag = res.test(e.target.value);
    const hrefInputDom = hrefInput.current;
    const noHrefInpuDom = noHrefDom.current;

    if (sum === 'one') {
      if (flag) {
        hrefInputDom.style.border = '';
      } else {
        hrefInputDom.style.border = '1px solid red';
      }

      setokHref(e.target.value);
    } else if (sum === 'two') {
      if (flag) {
        noHrefInpuDom.style.border = '';
      } else {
        noHrefInpuDom.style.border = '1px solid red';
      }

      setnoHref(e.target.value);
    }
  };

  const showModal = () => {
    setVidible(true);
  };

  const quhideModal = () => {
    setVidible(false);
  };

  const hideModal = () => {
    const res = /^(?:(http|https|ftp):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

    if (res.test(okHref) && res.test(noHref) || okHref === '如需跳转，请输入可访问链接' && res.test(noHref) || res.test(okHref) && noHref === '如需跳转，请输入可访问链接' || okHref === '如需跳转，请输入可访问链接' && noHref === '如需跳转，请输入可访问链接') {
      setVidible(false);
    } else {
      setVidible(true);
    }
  }; // 分数设置


  const grade = e => {
    const myInput = totalPoints.current.innerHTML;
    allStateObj.mypassInpu = parseInt(e.target.value);

    if (parseInt(e.target.value) > myInput || isNaN(parseInt(e.target.value))) {
      setmyFlagtotal(true);
    } else {
      setmyFlagtotal(false);
    }

    setStateObj(allStateObj);
  };

  const mypass = () => {
    const myInput = totalPoints.current.innerHTML;
    console.log(typeof allStateObj.mypassInpu); // eslint-disable-next-line use-isnan

    if (allStateObj.mypassInpu > myInput || isNaN(allStateObj.mypassInpu)) {
      setmyFlagtotal(true);
    } else {
      setmyFlagtotal(false);
    }
  };

  const date = date => {
    return new Date(date).getTime();
  };

  const onOkStar = value => {
    const stars = date(value._d);
    allStateObj.dataTime = value._d;
    allStateObj.stime = stars; // 开始考试时间毫秒

    setStateObj(allStateObj);
  };

  const onChanges = e => {
    const arr = _objectSpread({}, allStateObj);

    arr.value = e.target.value; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    mypluappper(e.target.value);
    setStateObj(arr);
  }; // 点击出现下面选项 公用


  const mypluappper = res => {
    if (res === 3) {
      setVlFla(true);
    } else {
      setVlFla(false);
    }
  };

  const onOkEnd = async value => {
    allStateObj.endtims = date(value._d);
    allStateObj.dataendTime = value._d;
    setStateObj(allStateObj);
  }; // 失去焦点事件


  const myBlur = () => {
    if (allStateObj.endtims <= allStateObj.stime && allStateObj.endtims !== 0 && allStateObj.stime !== 0) {
      setastrict(true);
      document.querySelectorAll('.ant-picker').forEach(item => {
        item.style.border = '1px solid red';
      });
    } else {
      setastrict(false);
      document.querySelectorAll('.ant-picker').forEach(item => {
        item.style.border = '';
      });
    }
  };

  const myBlerChange = value => {
    setlayTime(value);
  }; // 2、考试时间  迟到设置


  const mycheckbox = valueData => {
    allStateObj.examTimeValu = valueData;
    setStateObj(allStateObj);
  }; // 弹框确认按钮
  // eslint-disable-next-line consistent-return


  const examTimeOk = (str, id) => {
    if (str === 'setTime') {
      if (allStateObj.examTimeValu.length !== 0) {
        if (props.exercise) {
          saveTimeConfigs({
            exerciseId: id,
            examTimeIdList: allStateObj.examTimeValu
          });
        } else {
          saveTimeConfig({
            examId: id,
            examTimeIdList: allStateObj.examTimeValu
          });
        }
      }
    } else if (str === 'setexamTime') {
      if (timeCounts > 0 && timeCounts !== null && examValTimData.length !== 0) {
        if (props.exercise) {
          saveAnswerTimes({
            exerciseId: id,
            answerTimeIdList: examValTimData
          });
        } else {
          saveAnswerTime({
            examId: id,
            answerTimeIdList: examValTimData
          });
        }
      } else if (examValTimData.length === 0) {
        return '';
      } else {
        message_default().error('输入的数值不正确');
      }
    } else if (str === 'textCount') {
      if (textCounts > 0 && textValData.length !== 0) {
        if (props.exercise) {
          answerTimeCosts({
            exerciseId: id,
            testTimesList: textValData
          });
        } else {
          answerTimeCost({
            examId: id,
            testTimesList: textValData
          });
        }
      } else if (textValData.length === 0) {
        return '';
      } else {
        message_default().error('输入的数值不正确');
      }
    }
  }; // 3、答题时间  输入最少时间


  const mycheckTime = valueData => {
    setTextVlData(valueData);
  }; // 4、答题时间按 和 答题次数


  const myCount = (e, value) => {
    if (value === 'time') {
      allStateObj.time = e;
      setStateObj(allStateObj);
    } else if (value === 'count') {
      // 可考次数 大框
      allStateObj.count = e;
      setStateObj(allStateObj);
    } else if (value === 'timecount') {
      settimeCounts(e);
    } else if (value === 'textCount') {
      settextCounts(e);
    }
  };

  const astrictCont = e => {
    settextValData(e);
  }; // 5、试卷模式(单选) 和 限制时间答题次数 和 闯关次数


  const topic = valueData => {
    setValueData(valueData);
  };

  const showTime = value => {
    setlimitVal(value);
  };

  const answer = value => {
    seterrValue(value);
  }; // 6、成绩设置(单选) 不显示成绩的多选  选择日期（多选） 选择完毕失去焦点事件


  const changeResult = e => {
    // setResult(e.target.value);
    allStateObj.result = parseInt(e.target.value);
    const resuFlag = resultData.find(item => {
      return item.gradeConfigRequires.length !== 0;
    });

    if (parseInt(e.target.value) === resuFlag ? resuFlag.id : '') {
      setresuFlag(true);
    } else {
      setresuFlag(false);
    }

    setStateObj(_objectSpread({}, allStateObj));
  };

  const NoshowGrades = dataVal => {
    setResuldat(dataVal);
  };

  const {
    0: pubsult,
    1: setPubsult
  } = (0,external_react_.useState)(new Date());

  const releasekStar = value => {
    setPubsult(value._i);
  }; // 7、 考试设置


  const paperBefore = vaueData => {
    setValData(vaueData);
  }; // 8、答题设备(单选)


  const changefacility = e => {
    setfacility(parseInt(e.target.value));
    const flages = faciliData.find(item => {
      return item.answerEquipmentRequires.length !== 0;
    });

    if (parseInt(e.target.value) === parseInt(flages.id)) {
      setFacilty(true);
    } else {
      setFacilty(false);
    }
  };

  const facilityMany = answervalueData => {
    setvaluefaciVal(answervalueData);
  }; // 9、防作弊设置 （多选）


  const cribberChange = value => {
    setFaciVal(value);
    const flag = value.some(item => {
      return item === 1;
    });
    const flages = value.some(item => {
      return item === 2;
    });

    if (flag) {
      setOneFlag(true);
    } else {
      setOneFlag(false);
    }

    if (flages) {
      setTwoFlag(true);
    } else {
      setTwoFlag(false);
    }
  };

  const qieCount = (value, sum, type) => {
    // eslint-disable-next-line no-unused-expressions
    type === 'qieCount' ? setQieVal(value) : type === 'history' ? setChaoHistor(value) : type === 'setaheadMin' ? setaheadMin(value) : '';
  };

  const astrictfaces = value => {
    setSomeStud(value);
  }; // eslint-disable-next-line consistent-return


  const workpeoptitles = e => {
    const value = e.target.value;
    const phoneCodeVerification = /^[1]([3-9])[0-9]{9}$/;
    const flag = phoneCodeVerification.test(value);

    if (!flag) {
      message_default().warning('您的手机号码不正确，请重新填写！');
    } else {
      setPhostu(value);
    }
  };

  const Capturing = value => {
    // 抓拍
    setCopmin(value);
  };

  const tapTimechange = value => {
    setTapVal(value);
  }; // 10、试题设置
  // 输入框 多少秒


  const examination = valudata => {
    setexvadata(valudata);
  };

  const confirm = () => {
    savetapscreeTimes({
      id: allStateObj.examDa[0].examConfig.id,
      times: tapTimeVal
    });
  };

  const ScoreSet = e => {
    setscore(parseInt(e.target.value));
  };

  const scoreInput = value => {
    setscoreval(value);
  };

  const scoreBlue = e => {
    if (scoreval > 100) {
      message_default().info('请重新输入百分之');
      setscoreval(25);
    } else {
      setscoreval(parseInt(e.target.value));
    }
  };

  const regressOk = () => {
    if (props.exercise) {
      saveoptionsScores({
        exerciseId: props.examid,
        id: scoreValue,
        percentage: scoreval
      });
    } else {
      saveoptionsScore({
        examId: props.examid,
        id: scoreValue,
        percentage: scoreval
      });
    }
  };

  const myIntegral = e => {
    setIntergral(e.target.value);
  }; // 保存


  const mySaves = () => {
    if (!myFlagtotal && !astrict) {
      if (props.exercise) {
        saveChapter({
          exerciseId: props.examid,
          id: allStateObj.examDa[0].examConfig.id,
          gap: {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            passingGrade: props.sourt ? getFloatStr(props.sourt * 0.6) : allStateObj.mypassInpu,
            startDateTime: allStateObj.dataTime,
            endDateTime: allStateObj.dataendTime,
            answerTime: allStateObj.time,
            answerTimes: allStateObj.count,
            limitAnswerSeconds: limitValue,
            errorAnswers: errValue,
            publishResultTime: pubsult,
            beforeFaceCertification: aheadMin,
            faceTimes: someStud,
            headPhone: phonestu,
            tapOutTime: capmin,
            tapTimes: qieVal,
            noOperationTime: chaoHistory,
            limitAnswerTimes: timeCounts,
            allowSubmitTime: textCounts,
            lateEntryTime: layTime,
            regressionGetResultAccount: scoreval,
            passingMessage: remark,
            noPassingMessage: regret,
            passingHref: okHref,
            noPassingHref: noHref,
            fullMarks: props.sourt,
            integral
          },
          select: {
            paperMode: {
              id: allStateObj.value
            },
            paperModeRequires: valueData,
            gradeConfig: {
              id: allStateObj.result
            },
            gradeConfigRequires: resultvalData,
            exerciseConfigRequires: textValueData,
            answerEquipment: {
              id: facility
            },
            answerEquipmentRequires: facilvalData,
            antiCheatingConfigs: faciValu,
            questionConfigs: examvaludara
          }
        }).then(() => {
          props.closeAlert();
          calbal();
        });
      } else {
        saveTextSets({
          examId: props.examid,
          id: allStateObj.examDa[0].examConfig.id,
          gap: {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            passingGrade: props.sourt ? getFloatStr(props.sourt * 0.6) : allStateObj.mypassInpu,
            startDateTime: allStateObj.dataTime,
            endDateTime: allStateObj.dataendTime,
            answerTime: allStateObj.time,
            answerTimes: allStateObj.count,
            limitAnswerSeconds: limitValue,
            errorAnswers: errValue,
            publishResultTime: pubsult,
            beforeFaceCertification: aheadMin,
            faceTimes: someStud,
            headPhone: phonestu,
            tapOutTime: capmin,
            tapTimes: qieVal,
            noOperationTime: chaoHistory,
            limitAnswerTimes: timeCounts,
            allowSubmitTime: textCounts,
            lateEntryTime: layTime,
            regressionGetResultAccount: scoreval,
            passingMessage: remark,
            noPassingMessage: regret,
            passingHref: okHref,
            noPassingHref: noHref,
            fullMarks: props.sourt,
            integral
          },
          select: {
            paperMode: {
              id: allStateObj.value
            },
            paperModeRequires: valueData,
            gradeConfig: {
              id: allStateObj.result
            },
            gradeConfigRequires: resultvalData,
            examConfigRequires: textValueData,
            answerEquipment: {
              id: facility
            },
            answerEquipmentRequires: facilvalData,
            antiCheatingConfigs: faciValu,
            questionConfigs: examvaludara
          }
        }).then(() => {
          props.closeAlert();
          calbal();
        });
      }
    } else {
      message_default().warning('请修改');
    }
  };

  const getFloatStr = num => {
    num = num.toFixed();
    num += ''; // eslint-disable-next-line no-useless-escape

    num = num.replace(/[^0-9|\.]/g, ''); // eslint-disable-next-line no-constant-condition

    if (true) {
      // 清除字符串开头的0
      num = num.replace(/^0+/, '');
    }

    if (!/\./.test(num)) {
      num += '.00';
    }

    if (/^\./.test(num)) {
      num = '0' + num;
    }

    num += '00'; // 在字符串末尾补零

    num = num.match(/\d+\.\d{2}/)[0];
    return num;
  };

  return /*#__PURE__*/jsx_runtime_.jsx(AlertCommon, {
    alertStatus: props.alertShow,
    enableDrag: true,
    alertTitle: '考试设置',
    changeAlertFlag: props.changeAlertFlag,
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (textset_module_default()).myTextset_box,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (textset_module_default()).mubignei_box,
        children: [spin ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (textset_module_default()).example,
          children: /*#__PURE__*/jsx_runtime_.jsx((spin_default()), {})
        }) : allStateObj.examDa.map(bigitem => {
          return /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (textset_module_default()).myText_inter,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (textset_module_default()).mtText_left,
              children: [props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextInput, {
                labelCon: "\u53CA\u683C\u5206\u6570",
                inputWidth: "250px",
                inputMargin: "0",
                inputNumOnblur: mypass,
                defaultValue: props.sourt ? getFloatStr(props.sourt * 0.6) : getFloatStr(bigitem.examConfig.passingGrade),
                inputNumChange: grade,
                aLabelCon: "\u81EA\u5B9A\u4E49\u8BC4\u8BED",
                aEvent: showModal,
                spanexplain: "\u603B\u5206:",
                spanLabelCon: props.sourt ? getFloatStr(props.sourt) : getFloatStr(bigitem.examConfig.fullMarks),
                hintflag: myFlagtotal,
                hintContent: "\u8BF7\u8BBE\u7F6E\u5408\u7406\u7684\u53CA\u683C\u5206\u6570",
                spanRef: totalPoints,
                miTiblockCon: "\u8003\u751F\u901A\u8FC7\u8003\u8BD5\u7684\u5206\u6570\u7EBF",
                miTiblockLabel: "icon",
                miTiblockdirection: "right",
                inputType: "\u81EA\u5B9A\u4E49\u8BC4\u8BED",
                hideModal: hideModal,
                vidible: vidible,
                menuObject: [bigitem.examConfig.passingMessage, regret, okHref, noHref],
                marjTextChange: mymarjTextChange,
                paddhrefChange: e => {
                  hrefChange(e, 'one');
                },
                markNojigChange: markNojigChange,
                nopassChange: e => {
                  hrefChange(e, 'two');
                },
                hrefInput: hrefInput,
                noHrefDom: noHrefDom,
                quhideModal: quhideModal
              }), /*#__PURE__*/jsx_runtime_.jsx(TextDate, {
                astrict: astrict,
                beginDateTime: bigitem.examConfig.startDateTime,
                onOkStar: onOkStar,
                myBlur: myBlur,
                examTimeOk: () => {
                  examTimeOk('setTime', bigitem.examId);
                },
                hintFlag: true,
                defatallcheck: bigitem.examTimes,
                mycheckbox: mycheckbox,
                examTimeing: examTime,
                inputNumberValue: layTime,
                endDateTime: bigitem.examConfig.endDateTime,
                onOkEnd: onOkEnd,
                myBlurEnd: myBlur,
                numberChange: e => {
                  myBlerChange(e);
                }
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextInput, {
                labelCon: "\u7B54\u9898\u65F6\u95F4",
                inputWidth: "250px",
                inputMargin: "0",
                defaultValue: bigitem.examConfig.answerTime // .
                ,
                inputNumChange: e => {
                  myCount(e, 'time');
                },
                aLabelCon: "\u66F4\u591A\u8BBE\u7F6E",
                spanexplain: "\u5206\u949F",
                hintflag: false,
                hintContent: "",
                spanRef: null,
                miTiblockCon: "\u5141\u8BB8\u8003\u751F\u7B54\u9898\u7684\u65F6\u95F4\uFF0C\u8D85\u8FC7\u65F6\u95F4\u81EA\u52A8\u63D0\u4EA4\u7B54\u5377\uFF08\u7CFB\u7EDF\u4F1A\u63D0\u524D5\u5206\u949F\u5F39\u51FA\u6D88\u606F\u63D0\u9192)",
                miTiblockLabel: "icon",
                miTiblockdirection: "right",
                inputType: "\u66F4\u591A\u8BBE\u7F6E",
                vidible: false,
                onConfirmBubb: () => {
                  examTimeOk('setexamTime', bigitem.examId);
                },
                onCinfirmDirecon: "bottom",
                bubbdefaultValue: bigitem.answerTimes,
                bubbChange: mycheckTime,
                bubbApplyCon: textTimes,
                showTime: function () {
                  throw new Error('Function not implemented.');
                },
                NumberChan: e => {
                  myCount(e, 'timecount');
                },
                inputDefatvalue: timeCounts
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextInput, {
                labelCon: "\u53EF\u8003\u6B21\u6570",
                inputWidth: "250px",
                inputMargin: "0",
                defaultValue: bigitem.examConfig.answerTimes // .
                ,
                inputNumChange: e => myCount(e, 'count'),
                aLabelCon: "\u66F4\u591A\u8BBE\u7F6E",
                spanexplain: "\u6B21/\u8003\u751F",
                hintflag: false,
                hintContent: "",
                spanRef: null,
                miTiblockCon: "\u5141\u8BB8\u6BCF\u4E2A\u8003\u751F\u53C2\u52A0\u6B21\u6570",
                miTiblockLabel: "icon",
                miTiblockdirection: "right",
                inputType: "\u66F4\u591A\u8BBE\u7F6E",
                vidible: false,
                onConfirmBubb: () => {
                  examTimeOk('textCount', bigitem.examId);
                },
                onCinfirmDirecon: "bottom",
                bubbdefaultValue: textValData,
                bubbChange: astrictCont,
                NumberChan: e => {
                  myCount(e, 'textCount');
                },
                inputDefatvalue: textCounts,
                bubbApplyCon: [],
                bijiao: allStateObj.count
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextRadio, {
                labelCon: "\u8BD5\u5377\u6A21\u5F0F",
                radioChange: e => {
                  onChanges(e);
                },
                redioValue: allStateObj.value,
                mapContent: textpaper,
                redioSwitch: valueFlag,
                radioSwitchTwo: false,
                checkBoxType: "textmodel",
                checkBoxdefatValue: bigitem.paperModeRequires,
                checkBoxChange: topic,
                checkBoxConArr: emigrated,
                checkBoxInputOneDefault: bigitem.examConfig.limitAnswerSeconds,
                checkBoxInputTwoDefault: bigitem.examConfig.errorAnswers,
                checkBoxInputOnchange: e => {
                  showTime(e);
                },
                checkBoxInputTwochange: e => {
                  answer(e);
                },
                prewent: props.textPaper
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextRadio, {
                labelCon: "\u6210\u7EE9\u8BBE\u7F6E",
                radioChange: changeResult,
                redioValue: allStateObj.result,
                mapContent: resultData,
                redioSwitch: false,
                radioSwitchTwo: resuFlag,
                checkBoxType: "gradeconfig",
                checkBoxdefatValue: bigitem.gradeConfigRequires,
                checkBoxChange: NoshowGrades,
                checkBoxConArr: emigrated,
                checkBoxInputOneDefault: bigitem.examConfig.limitAnswerSeconds,
                checkBoxInputTwoDefault: bigitem.examConfig.errorAnswers,
                checkBoxInputOnchange: e => {
                  showTime(e);
                },
                checkBoxInputTwochange: e => {
                  answer(e);
                },
                datePrototype: bigitem.examConfig.publishResultTime,
                dateOk: releasekStar
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextCheckBox, {
                labelCon: "\u8003\u8BD5\u8BBE\u7F6E",
                checkBoxDefaultValue: bigitem.examConfigRequires,
                checkChange: paperBefore,
                checkArray: textData,
                chechckType: "examConig",
                oneFlag: false,
                twoFlag: false
              }), /*#__PURE__*/jsx_runtime_.jsx(TextRadio, {
                labelCon: "\u7B54\u9898\u8BBE\u5907",
                radioChange: changefacility,
                redioValue: facility,
                mapContent: faciliData,
                redioSwitch: false,
                radioSwitchTwo: faciFlag,
                checkBoxType: "requireTiele",
                checkBoxdefatValue: bigitem.answerEquipmentRequires,
                checkBoxChange: facilityMany
              }), props.Chapter ? '' : /*#__PURE__*/jsx_runtime_.jsx(TextCheckBox, {
                labelCon: "\u9632\u4F5C\u5F0A\u8BBE\u7F6E",
                checkBoxDefaultValue: bigitem.antiCheatingConfigs,
                checkChange: cribberChange,
                checkArray: criData,
                chechckType: "antiCheat",
                inputOneNumchange: e => {
                  qieCount(e, '', 'qieCount');
                },
                inputTwoNumchange: e => {
                  qieCount(e, '', 'history');
                },
                inputNumberDefalut: bigitem.examConfig.timingCapturedTime,
                inputNumberNei: e => {
                  tapTimechange(e);
                },
                confirmInput: confirm,
                oneFlag: oneFlag,
                twoFlag: twoFlag,
                everyDefaultValue: [bigitem.examConfig.beforeFaceCertification, bigitem.examConfig.faceTimes, bigitem.examConfig.headPhone, bigitem.examConfig.noOperationTime, bigitem.examConfig.tapTimes],
                oneChange: e => {
                  qieCount(e, '', 'setaheadMin');
                },
                twoChange: astrictfaces,
                threeChange: workpeoptitles,
                twoFlagDefault: bigitem.examConfig.tapOutTime,
                tworFlagChange: Capturing
              }), /*#__PURE__*/jsx_runtime_.jsx(TextCheckBox, {
                labelCon: "\u8BD5\u9898\u8BBE\u7F6E",
                checkBoxDefaultValue: bigitem.questionConfigs,
                checkChange: examination,
                checkArray: TryData,
                chechckType: "questConfig",
                oneFlag: false,
                twoFlag: false,
                requireConfigValue: [bigitem.getScoreConfig.getScoreId, bigitem.examConfig.regressionGetResultAccount],
                requireRadioChange: ScoreSet,
                requireInputbaifen: scoreInput,
                requirescoreBlue: scoreBlue,
                regressOk: regressOk
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (textset_module_default()).text_row,
                children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                  className: (textset_module_default()).text_leftRow,
                  htmlFor: "\u8003\u8BD5\u79EF\u5206",
                  children: "\u8003\u8BD5\u79EF\u5206"
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: (textset_module_default()).text_row_right,
                  children: [/*#__PURE__*/jsx_runtime_.jsx((input_default()), {
                    className: (textset_module_default()).right_input,
                    defaultValue: bigitem.examConfig.integral,
                    onChange: myIntegral
                  }), /*#__PURE__*/jsx_runtime_.jsx((popconfirm_default()), {
                    title: () => {
                      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                        className: (textset_module_default()).mybloak,
                        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: " 1\u3001\u6309\u6210\u7EE9\u5360\u603B\u5206\u7684\u6BD4\u4F8B\u83B7\u5F97\u79EF\u5206\u3002\u4F8B\u5982"
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "\u8003\u8BD5\u79EF\u5206\u662F10\uFF0C\u8BD5\u5377\u603B\u5206100\uFF0C \u5982\u679C\u6210\u7EE9"
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "\u662F85\u5206\uFF0C\u8003\u751F\u5C06\u83B7\u5F978.5\u4E2A\u79EF\u5206\u3002"
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: " 2\u3001\u9488\u5BF9\u4E8E\u53C2\u52A0\u591A\u6B21\u8003\u8BD5\u7684\u60C5\u51B5,\u53EA\u53D6"
                        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                          children: "\u9996\u6B21\u6210\u7EE9\u7684\u79EF\u5206"
                        })]
                      });
                    },
                    onConfirm: confirm,
                    onVisibleChange: () => console.log('visible change'),
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: (textset_module_default()).titles,
                      children: "\u79EF\u5206\u8BF4\u660E"
                    })
                  })]
                })]
              })]
            })
          }, bigitem.examId);
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (textset_module_default()).myFloor,
          children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
            onClick: async () => {
              if (props.isPublish === 0) {
                props.updatePublish && (await props.updatePublish());
                await mySaves();
              } else {
                await mySaves();
              }
            },
            children: props.isPublish === 0 ? '发布考试' : '保存设置'
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            onClick: props.closeAlert,
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CloseOutlined, {}), "\u53D6\u6D88"]
          })]
        })]
      })
    })
  });
};

/* harmony default export */ const textSetes = (MyTextSetes);

/***/ }),

/***/ 1653:
/***/ ((module) => {

// Exports
module.exports = {
	"myTextset_box": "textset_myTextset_box__1r64N",
	"myText_inter": "textset_myText_inter__Osian",
	"text_row": "textset_text_row__gtuX4",
	"text_leftRow": "textset_text_leftRow__6wi_F",
	"right_input": "textset_right_input__rCuj3",
	"text_row_right": "textset_text_row_right__TnbZb",
	"ant-input-number": "textset_ant-input-number__hZaTi",
	"ant-checkbox-wrapper": "textset_ant-checkbox-wrapper__ZrV7i",
	"bottomniu": "textset_bottomniu__CtFfQ",
	"myallSum": "textset_myallSum__gI9G0",
	"text_row_right_noflex": "textset_text_row_right_noflex__UJgxN",
	"style_radioDiv": "textset_style_radioDiv__AY5w0",
	"ant-popover": "textset_ant-popover__gUQ3y",
	"addSet": "textset_addSet__Usomx",
	"mySpana": "textset_mySpana__lxXOM",
	"mubignei_box": "textset_mubignei_box___iHcY",
	"myFloor": "textset_myFloor__l45QT",
	"titles": "textset_titles__9f7SD",
	"mycheckout": "textset_mycheckout___Z_0Q",
	"mybloak": "textset_mybloak___RYjv",
	"example": "textset_example__npkuW"
};


/***/ })

};
;