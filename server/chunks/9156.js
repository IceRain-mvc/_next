exports.id = 9156;
exports.ids = [9156];
exports.modules = {

/***/ 9156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NavIndex_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9812);
/* harmony import */ var _NavIndex_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_NavIndex_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1417);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5764);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9719);
/* harmony import */ var _api_exam_paper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4455);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const Steps = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 2150).then(__webpack_require__.bind(__webpack_require__, 2150)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2150)],
    modules: ["../src/components/Createcrew/NavIndex/index.tsx -> " + '@/components/Steps']
  }
});
const Createcrews = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 1109).then(__webpack_require__.bind(__webpack_require__, 1109)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1109)],
    modules: ["../src/components/Createcrew/NavIndex/index.tsx -> " + '@/components/Createcrew/Createcrews']
  }
});
const Add = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(1112), __webpack_require__.e(5061), __webpack_require__.e(4703), __webpack_require__.e(1748), __webpack_require__.e(8886), __webpack_require__.e(5900), __webpack_require__.e(1239), __webpack_require__.e(9067), __webpack_require__.e(4707), __webpack_require__.e(6533)]).then(__webpack_require__.bind(__webpack_require__, 6533)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6533)],
    modules: ["../src/components/Createcrew/NavIndex/index.tsx -> " + '@/components/exam/fixedPaper/addTitle']
  }
});
const ExamPaperOptions = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 2911).then(__webpack_require__.bind(__webpack_require__, 2911)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2911)],
    modules: ["../src/components/Createcrew/NavIndex/index.tsx -> " + '@/components/exam/examPaperOptions']
  }
});

const NavIndex = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const {
    createdExamId,
    createdExerciseId,
    exercisePattern
  } = props;
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // 子组件传来的数据 对象 {}

  const {
    0: flat
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 子组件传数据

  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); //  试卷类型 弹窗 开关

  const {
    0: pageNum,
    1: setPageNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 0 1 2 底部三个块

  const {
    0: examId,
    1: setExamId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 创建考试后获取到的id

  const {
    0: exerciseId,
    1: setExerciseId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: treeFlag,
    1: setTreeFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 显隐树形组件

  const {
    0: createdExamPaperId,
    1: setCreatedExamPaperId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 试卷id

  const {
    0: createdExamType,
    1: setCreatedExamType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 试卷类型

  const {
    0: createdExamTitle,
    1: setCreatedExamTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 考试名称

  const {
    0: createdExamIns,
    1: setCreatedExamIns
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 考试描述

  const {
    0: createdExamineeMsg,
    1: setCreatedExamineeMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: createdOpenSign,
    1: setCreatedOpenSign
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: createdPartWay,
    1: setCreatedPartWay
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
  const {
    0: createdExamPassword,
    1: setCreatedExamPassword
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: createdTreeId,
    1: setCreatedTreeId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: createdTreeTitle,
    1: setCreatedTreeTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const {
    0: students,
    1: setStudents
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
  const {
    0: showExam,
    1: setShowExam
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: isPublish,
    1: setIsPublish
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const {
    0: judgeTitle,
    1: setJudgeTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 选择框布局文本

  const {
    0: formatList
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([{
    value: 'text',
    name: '文本'
  }, {
    value: 'select',
    name: '选择框'
  }, {
    value: 'date',
    name: '日期'
  }, {
    value: 'phone',
    name: '手机号码'
  }, {
    value: 'emain',
    name: '邮箱'
  }, {
    value: 'identity',
    name: '身份证'
  }, {
    value: 'integer',
    name: '整数'
  }, {
    value: 'decimals',
    name: '小数'
  }]); // 考试名称

  const {
    0: names,
    1: setNames
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 控制创建考试按钮是否可以点击

  const {
    0: btnFlag,
    1: setBtnFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // 控制按钮只可以点击一次

  const {
    0: showMessage,
    1: setShowMessage
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // 控制提示窗显隐

  const {
    0: warnAlert,
    1: setWarnAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false); // 考试已存在后设置的id

  const {
    0: updateId,
    1: setUpdateId
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 考试回显

  const getExamMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    // 考试接口
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .getThisExamMessage */ .nG)(createdExamId).catch(); // console.log(res);

    if (res.paperExam) {
      setCreatedExamPaperId(res.paperExam.id);
      setCreatedExamType(res.paperExam.paperType);
    }

    setIsPublish(res.isPublish);
    setCreatedExamTitle(res.examTitle);
    setNames(res.examTitle);
    setCreatedExamIns(res.examInstructions);

    if (res.examineeFillMessage) {
      res.examineeFillMessage.forEach(item => {
        item.format = formatList;

        if (item.optionsValue) {
          // @ts-ignore
          item.optionsValue = item.optionsValue.split('-');
        }
      });
    }

    setCreatedExamineeMsg(res.examineeFillMessage);
    setStudents(res.students);
    setCreatedOpenSign(res.openSignature);
    setCreatedPartWay(res.participationWay.partId);
    setCreatedExamPassword(res.examPassword);
    setCreatedTreeId(res.treePerson.id);
    setCreatedTreeTitle(res.treePerson.title);
    setShowExam(true);
  }, [createdExamId, formatList]); // 练习回显

  const getExerciseMessage = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(async () => {
    // 练习接口
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .getThisExerciseMessage */ .np)(createdExerciseId);

    if (res.paperExam) {
      setCreatedExamPaperId(res.paperExam.id);
      setCreatedExamType(res.paperExam.paperType);
    }

    setIsPublish(res.isPublish);
    setCreatedExamTitle(res.exerciseTitle);
    setNames(res.exerciseTitle);
    setCreatedExamIns(res.exerciseInstructions);

    if (res.exerciseineeFillMessages) {
      res.exerciseineeFillMessages.forEach(item => {
        item.format = formatList;

        if (item.optionsValue) {
          // @ts-ignore
          item.optionsValue = item.optionsValue.split('-');
        }
      });
    }

    setCreatedExamineeMsg(res.exerciseineeFillMessages);
    setStudents(res.students);
    setCreatedOpenSign(res.openSignature);
    setCreatedPartWay(res.exerciseWay.partId);
    setCreatedExamPassword(res.exercisePassword);
    setCreatedTreeId(res.treePerson.id);
    setCreatedTreeTitle(res.treePerson.title);
    setShowExam(true);
  }, [createdExerciseId, formatList]); // 声明周期，获取考试回显

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    createdExamId && getExamMessage();
  }, [createdExamId, getExamMessage, showExam, createdExamineeMsg]); // 练习回显

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    createdExerciseId && getExerciseMessage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 点击了阅读

  const read = () => {
    console.log('点击了阅读');
  }; // 点击了查看


  const examine = () => {
    console.log('点击了查看');
  }; // 子组件拿数据的方法


  const setArr = obj => {
    setData(_objectSpread({}, obj));
  };

  const steps = [{
    title: '考试信息',
    skip: flat,
    buttonMsg: {
      next: '保存&去设计试卷'
    }
  }, {
    title: '设计试卷',
    buttonMsg: {
      pre: '返回上一步',
      customButton: [{
        title: '阅读',
        buttonCallback: read
      }, {
        title: '查看',
        buttonCallback: examine
      }],
      next: '保存&去设计试卷'
    }
  }, {
    title: '发布考试',
    buttonMsg: {
      pre: '返回上一步',
      finsh: '保存'
    }
  }]; // 提示 红色 警告

  const error = err => {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error(err);
  }; // 提示  蓝色 成功


  const info = err => {
    antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().info(err);
  }; // 去设计试卷执行事件


  const designPaper = () => {
    if (createdExamPaperId) {
      // 直接跳转区设计试卷
      if (examId) {
        router.push({
          pathname: '/design/Design',
          query: {
            examId: examId || createdExamId,
            paperId: createdExamPaperId,
            type: createdExamType,
            isPublish: isPublish
          }
        });
      }

      if (exerciseId) {
        router.push({
          pathname: '/SimulationTest',
          query: {
            exerciseId: exerciseId || createdExerciseId,
            paperId: createdExamPaperId,
            type: createdExamType,
            isPublish: isPublish,
            exercisePattern: exercisePattern
          }
        });
      }

      setShowMessage(true);
    } else {
      setFlag(true);
    }
  }; // 名称非空校验


  const isNull = str => {
    if (str === '') {
      return true;
    }

    const regu = '^[ ]+$';
    const re = new RegExp(regu);
    return re.test(str);
  }; // 获取用户名和IP地址


  const getLocalCache = () => {
    const user = localStorage.getItem('user') || '';
    const IP = localStorage.getItem('userIp') || '';
    return {
      user,
      IP
    };
  }; // 添加数据


  const addOperationLogData = async params => {
    // eslint-disable-next-line no-return-await
    return await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_3__/* .addOperationData */ .TH)(params);
  }; // 考试模块点击保存执行事件


  const examEvent = async () => {
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .getSave */ .VK)(data);

    if (res.code === 1) {
      const addResult = `创建考试【${res.exam.examId.slice(0, 3)}】`;
      await addOperationLogData({
        operationName: getLocalCache().user,
        IPAddress: getLocalCache().IP,
        operationType: '创建考试',
        detail: addResult
      });
    }

    if ((createdExamId || updateId) && judgeTitle === names) {
      setShowMessage(false); // 执行保存操作

      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateThisExam */ .zZ)(_objectSpread({
        examId: createdExamId || updateId
      }, data));
    } else {
      if (btnFlag) {
        // 创建考试
        setShowMessage(false);
        setBtnFlag(false);

        if (res) {
          if (res.code === -1) {
            if (res.exam.paperExam) {
              setIsPublish(res.exam.isPublish);
              setUpdateId(res.exam.examId);
              setCreatedExamPaperId(res.exam.paperExam.id);
              setCreatedExamType(res.exam.paperExam.paperType);
              setJudgeTitle(res.exam.examTitle);
            }
          }

          setBtnFlag(true);
        }
      }
    } // 执行保存时判断试
    // 卷存在不存在，不存在，跳弹窗
    // 直接跳页面，


    if ((createdExamPaperId || updateId) && (judgeTitle === names || createdExamId)) {
      // 执行保存操作
      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateThisExam */ .zZ)(_objectSpread({
        examId: createdExamId || updateId
      }, data));
      await router.push({
        pathname: '/design/Design',
        query: {
          examId: examId || createdExamId,
          paperId: createdExamPaperId,
          type: createdExamType,
          isPublish: isPublish
        }
      });
    } else {
      if (btnFlag) {
        setExamId(createdExamId || res.exam.examId);

        if (res && res.code && res.code === -1) {
          if (!res.exam.paperExam) {
            setFlag(true);
          } else {
            setWarnAlert(true);
          }
        } else {
          info(createdExamId ? '修改成功' : '添加成功');
          setFlag(true);
        }
      }
    }
  };

  const exerciseEvent = async () => {
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .getExercise */ .bP)(data).catch();

    if ((createdExerciseId || updateId) && judgeTitle === names) {
      setShowMessage(false); // 执行保存操作

      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateExercise */ .VF)(_objectSpread({
        exerciseId: createdExerciseId || updateId
      }, data)).catch();
    } else {
      if (btnFlag) {
        // 创建考试
        setShowMessage(false);
        setBtnFlag(false);

        if (res) {
          if (res.code === -1) {
            if (res.exercise.paperExam) {
              setIsPublish(res.exercise.isPublish);
              setUpdateId(res.exercise.exerciseId);
              setCreatedExamPaperId(res.exercise.paperExam.id);
              setCreatedExamType(res.exercise.paperExam.paperType);
              setJudgeTitle(res.exercise.exerciseTitle);
            }
          }

          setBtnFlag(true);
        }
      }
    } // 执行保存时判断试
    // 卷存在不存在，不存在，跳弹窗
    // 直接跳页面，


    if ((createdExamPaperId || updateId) && (judgeTitle === names || createdExerciseId)) {
      // 执行保存操作
      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateExercise */ .VF)(_objectSpread({
        exerciseId: createdExerciseId || updateId
      }, data)).catch();
      await router.push({
        pathname: '/SimulationTest',
        query: {
          exerciseId: exerciseId || createdExerciseId,
          paperId: createdExamPaperId,
          type: createdExamType,
          isPublish: isPublish,
          exercisePattern: exercisePattern
        }
      });
    } else {
      if (btnFlag) {
        setExerciseId(createdExerciseId || res.exercise.exerciseId);

        if (res && res.code && res.code === -1) {
          if (!res.exercise.paperExam) {
            setFlag(true);
          } else {
            setWarnAlert(true);
          }
        } else {
          info(createdExamId ? '修改成功' : '添加成功');
          setFlag(true);
        }
      }
    }
  }; // 创建章节练习的方法


  const createPractice = async () => {
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .getExercise */ .bP)(data).catch();

    if ((createdExerciseId || updateId) && judgeTitle === names) {
      setShowMessage(false); // 执行保存操作

      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateExercise */ .VF)(_objectSpread({
        exerciseId: createdExerciseId || updateId
      }, data)).catch();
    } else {
      if (btnFlag) {
        // 创建考试
        setShowMessage(false);
        setBtnFlag(false);

        if (res) {
          if (res.code === -1) {
            if (res.exercise.paperExam) {
              setIsPublish(res.exercise.isPublish);
              setUpdateId(res.exercise.exerciseId);
              setCreatedExamPaperId(res.exercise.paperExam.id);
              setCreatedExamType(res.exercise.paperExam.paperType);
              setJudgeTitle(res.exercise.exerciseTitle);
            }
          }

          setBtnFlag(true);
        }
      }
    } // 执行保存时判断试
    // 卷存在不存在，不存在，跳弹窗
    // 直接跳页面，


    if ((createdExamPaperId || updateId) && (createdExerciseId || judgeTitle === names)) {
      // 执行保存操作
      await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_2__/* .updateExercise */ .VF)(_objectSpread({
        exerciseId: createdExerciseId || updateId
      }, data)).catch();
      await router.push({
        pathname: '/SimulationTest',
        query: {
          exerciseId: exerciseId || createdExerciseId,
          paperId: createdExamPaperId,
          type: createdExamType,
          isPublish: isPublish,
          exercisePattern: exercisePattern
        }
      });
    } else {
      if (btnFlag) {
        setExerciseId(createdExerciseId || res.exercise.exerciseId);

        if (res && res.code && res.code === -1) {
          setWarnAlert(true);
        } else {
          // 创建试卷 练习
          const paperRes = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_7__/* .createPapercise */ .JI)({
            exerciseId: res.exercise.exerciseId,
            paperType: 3,
            paperTitle: '章节练习'
          }).catch();
          setShowMessage(true);
          await router.push({
            pathname: '/SimulationTest',
            query: {
              exerciseId: res.exercise.exerciseId,
              paperId: paperRes.paperId,
              type: 3,
              isPublish,
              exercisePattern
            }
          });
        }
      }
    }
  };

  const nextCallbackEvent = async () => {
    // 控制只能点击一次
    if (showMessage) {
      if (isNull(data.examTitle || data.exerciseTitle)) {
        error('名称不能为空  请填写名称');
      } else {
        if (exercisePattern === 0 || exercisePattern) {
          if (exercisePattern) {
            await exerciseEvent();
          } else {
            await createPractice();
          }
        } else {
          await examEvent();
        }
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_NavIndex_module_scss__WEBPACK_IMPORTED_MODULE_9___default().box),
    onClick: () => {
      if (treeFlag) {
        setTreeFlag(false);
      }
    },
    children: [flag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ExamPaperOptions, {
      close: setFlag,
      examId: examId,
      exerciseId: exerciseId,
      exercisePattern: exercisePattern,
      isPublish: isPublish,
      setShowMessage: setShowMessage
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Steps, {
      start: pageNum,
      callBack: indexStep => {
        setPageNum(indexStep);
      },
      nextCallback: nextCallbackEvent,
      minHeight: 630,
      step: steps,
      finishCallback: () => {// 成功的回调
      },
      children: [pageNum === 0 && (showExam || !createdExamId && !createdExerciseId) && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Createcrews, {
        set: setArr,
        setTreeFlag: setTreeFlag,
        treeFlag: treeFlag,
        createdExamId: createdExamId || createdExerciseId,
        createdExamTitle: createdExamTitle,
        createdExamIns: createdExamIns,
        createdExamineeMsg: createdExamineeMsg,
        createdOpenSign: createdOpenSign,
        createdPartWay: createdPartWay,
        createdExamPassword: createdExamPassword,
        createdTreeId: createdTreeId,
        createdTreeTitle: createdTreeTitle,
        students: students,
        setNames: setNames,
        names: names,
        exercisePattern: exercisePattern
      }), pageNum === 1 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Add, {
        type: 0
      })]
    }), warnAlert && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_6__["default"], {
      warning: '该场考试已经被创建',
      setShowWarnAlert: setWarnAlert,
      isExam: true,
      executeFun: designPaper,
      cancelEvent: setShowMessage
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavIndex);

/***/ }),

/***/ 9812:
/***/ ((module) => {

// Exports
module.exports = {
	"box": "NavIndex_box__3wRfN",
	"Next": "NavIndex_Next__W40ug",
	"newName": "NavIndex_newName__s_5CI",
	"btn": "NavIndex_btn__uBpPy"
};


/***/ })

};
;