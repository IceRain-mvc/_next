exports.id = 6516;
exports.ids = [6516];
exports.modules = {

/***/ 6516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1489);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7386);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(290);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2820);
/* harmony import */ var _courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _api_exam_createCrews__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1417);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);














const CorseSetUp = props => {
  const {
    saveSetting,
    courseId,
    courseName
  } = props; // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    Search
  } = (antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default());
  const {
    0: corseTime,
    1: setCorseTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('60');
  const {
    0: creditVal,
    1: setCreditVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('2000.0'); // 课程完成条件

  const {
    0: conditionsVsl,
    1: setConditionsVsl
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1); // 课程创建考试

  const {
    0: isetUpExanName,
    1: setIsetUpExanName
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // 学时设置

  const {
    0: setUpVsl,
    1: setSetUpVsl
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0); // 学习终端

  const {
    0: terminalVsl,
    1: setTerminalVsl
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1); // 允许学员进行课程答疑

  const {
    0: AnsweringQestions2CheckedValuesApp,
    1: setAnsweringQestions2CheckedValuesApp
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 允许学员进行课程评论回复

  const {
    0: AnsweringQestions2CheckedValuesPear,
    1: setAnsweringQestions2CheckedValuesPear
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 只允许在微信中参加课程学习（保护课件，请勾选）

  const {
    0: terminalApp,
    1: setTerminalApp
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 不允许分享课程内容（保护课件，请勾选）

  const {
    0: terminalPear,
    1: setTerminalPear
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 是否需要人工审核

  const {
    0: answeringQestions2,
    1: setAnsweringQestions2
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 课程完成条件

  const conditionsChange = e => {
    setConditionsVsl(e.target.value);
  }; // 学时设置


  const setUpChange = e => {
    setSetUpVsl(e.target.value);
  }; // 学习终端


  const terminalChange = e => {
    setTerminalVsl(e.target.value);
  }; // 只允许在微信中参加课程学习（保护课件，请勾选）


  const terminal2ChangeApp = e => {
    setTerminalApp(e.target.checked);
  }; // 不允许分享课程内容（保护课件，请勾选）


  const terminal2ChangePear = e => {
    setTerminalPear(e.target.checked);
  }; // 讨论答疑


  const answeringQestionsChangeApp = e => {
    setAnsweringQestions2CheckedValuesApp(e.target.checked);
  }; // 评论回复


  const answeringQestionsChangePear = e => {
    setAnsweringQestions2CheckedValuesPear(e.target.checked);
  }; // 是否需要人工审核


  const answeringQestions2Change = e => {
    setAnsweringQestions2(e.target.checked);
  }; // 考试Id


  const {
    0: ExamID,
    1: setExamID
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // 创建考试/编辑考试

  const {
    0: courseTitle,
    1: setCourseTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('创建考试');
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
  const Router = router.query; // 编辑考试
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const onSearch = value => {};

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    console.log(courseId);

    (async function () {
      if (courseId) {
        const res = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .getCourseItem */ .UX)({
          courseId
        });
        console.log(res); // 设置学员最少学习时长

        setCorseTime(`${res.coursePeriod}`); // 课程学分

        setCreditVal(res.courseCreditHour); // 课程完成条件

        setConditionsVsl(res.courseCompleteCondition); // 课程创建考试
        // setIsetUpExanName(res.courseExam);

        console.log(res.examId);

        if (res.examId !== '') {
          const res1 = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_9__/* .getThisExamMessage */ .nG)(res.examId);
          console.log(res1);
          setIsetUpExanName(res1.examTitle); // 将按钮改为编辑考试

          setCourseTitle('编辑考试');
        } else {
          setIsetUpExanName(''); // 将按钮改为创建考试

          setCourseTitle('创建考试');
        } // 学时设置


        setSetUpVsl(res.courseSetUp); // 学习终端

        setTerminalVsl(res.courseLearningTerminal); // 课程是否允许答疑

        if (res.courseAnswer === 0) {
          setAnsweringQestions2CheckedValuesApp(true);
        } // 课程评论回复


        if (res.courseComment === 0) {
          setAnsweringQestions2CheckedValuesPear(true);
        } // 学习终端(课件保护)


        if (res.courseWechat === 0) {
          setTerminalApp(false);
          setTerminalPear(false);
        } else if (res.courseWechat === 1) {
          setTerminalApp(true);
          setTerminalPear(false);
        } else if (res.courseWechat === 2) {
          setTerminalApp(false);
          setTerminalPear(true);
        } else if (res.courseWechat === 3) {
          setTerminalApp(true);
          setTerminalPear(true);
        } // 是否需要人工审核（0:是，1:不是）


        if (res.courseAudit === 0) {
          setAnsweringQestions2(true);
        }
      }
    })();
  }, [courseId]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (async function () {
      const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_9__/* .getSave */ .VK)({
        examTitle: courseName
      });
      const obj = {
        // 设置学员最少学习时长
        coursePeriod: Number(corseTime),
        // 课程是否允许答疑
        courseAnswer: AnsweringQestions2CheckedValuesApp === true ? 0 : 1,
        // 课程是否允许评论
        courseComment: AnsweringQestions2CheckedValuesPear === true ? 0 : 1,
        // 课程完成条件
        courseCompleteCondition: conditionsVsl,
        // 课程创建考试
        courseExam: isetUpExanName,
        // 学时设置
        courseSetUp: setUpVsl,
        // 学习终端
        courseLearningTerminal: terminalVsl,
        // 学习终端(课件保护)
        courseWechat: terminalApp === false && terminalPear === false ? 0 : terminalApp === true && terminalPear === true ? 3 : terminalApp === true ? 1 : terminalPear === true ? 2 : 0,
        // 是否需要人工审核（0:是，1:不是）
        courseAudit: answeringQestions2 === true ? 0 : 1,
        // 课程学分
        courseCreditHour: creditVal,
        // 考试id
        examId: res.exam.examId
      };
      console.log(obj);
      saveSetting(obj);
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [answeringQestions2, AnsweringQestions2CheckedValuesApp, AnsweringQestions2CheckedValuesPear, conditionsVsl, corseTime, creditVal, setUpVsl, terminalPear, terminalVsl]); // 选择课程完成条件为通过课程考试时进行判断

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (conditionsVsl === 2 && isetUpExanName === '') {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().warning('提示：请创建课程考试');
    }
  }, [conditionsVsl, isetUpExanName]); // 创建考试

  const createExam = async () => {
    // 创建考试
    const res = await (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_9__/* .getSave */ .VK)({
      examTitle: courseName
    }); // 保存考试id

    setExamID(res.exam.examId);
    const obj = {
      // 设置学员最少学习时长
      coursePeriod: Number(corseTime),
      // 课程是否允许答疑
      courseAnswer: AnsweringQestions2CheckedValuesApp === true ? 0 : 1,
      // 课程是否允许评论
      courseComment: AnsweringQestions2CheckedValuesPear === true ? 0 : 1,
      // 课程完成条件
      courseCompleteCondition: conditionsVsl,
      // 课程创建考试
      courseExam: isetUpExanName,
      // 学时设置
      courseSetUp: setUpVsl,
      // 学习终端
      courseLearningTerminal: terminalVsl,
      // 学习终端(课件保护)
      courseWechat: terminalApp === false && terminalPear === false ? 0 : terminalApp === true && terminalPear === true ? 3 : terminalApp === true ? 1 : terminalPear === true ? 2 : 0,
      // 是否需要人工审核（0:是，1:不是）
      courseAudit: answeringQestions2 === true ? 0 : 1,
      // 课程学分
      courseCreditHour: creditVal,
      // 考试id
      examId: res.exam.examId
    }; // 保存课程设置

    (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .compileCourse */ .X0)({
      courseId,
      data: obj
    });
    router.push({
      pathname: '/exam/createCrew',
      query: {
        examId: res.exam.examId
      }
    });
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().corseSetUp),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: "\u8BFE\u7A0B\u5B8C\u6210\u6761\u4EF6"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          onChange: conditionsChange,
          value: conditionsVsl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
            direction: "vertical",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 0,
              children: "\u65E0\u5B8C\u6210\u6761\u4EF6\uFF1A\u5B66\u5458\u81EA\u7531\u5B66\u4E60(\u4E0D\u9650\u5B66\u5458\u5B66\u4E60\u65F6\u95F4)"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 1,
              children: "\u8FBE\u5230\u8BFE\u7A0B\u5B66\u65F6\uFF1A\u5B66\u5458\u8FBE\u5230\u5B66\u4E60\u65F6\u957F"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 2,
              children: "\u901A\u8FC7\u8BFE\u7A0B\u8003\u8BD5\uFF1A\u5B66\u5458\u8FBE\u5230\u5B66\u4E60\u65F6\u957F,\u5E76\u901A\u8FC7\u8BFE\u7A0B\u8003\u8BD5"
            })]
          })
        })
      })]
    }), conditionsVsl === 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title)
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default().Group), {
          compact: true,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default()), {
            style: {
              width: 'calc(100% - 320px)'
            } // disabled={true}
            ,
            readOnly: true,
            value: isetUpExanName,
            placeholder: "\u8BF7\u521B\u5EFA\u8BFE\u7A0B\u8003\u8BD5..."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
            type: "primary",
            onClick: createExam,
            children: courseTitle
          })]
        })
      })]
    }) : null, conditionsVsl === 1 || conditionsVsl === 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: "\u5B66\u65F6\u8BBE\u7F6E"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          onChange: setUpChange,
          value: setUpVsl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
            direction: "vertical",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 0,
              children: ["\u8FBE\u5230\u8BFE\u7A0B\u603B\u5B66\u65F6\uFF1A\u5B66\u5458\u5B66\u4E60\u65F6\u957F\u987B\u8D85\u8FC7", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default()), {
                style: {
                  width: '50px'
                },
                value: corseTime,
                onChange: e => {
                  setCorseTime(e.target.value);
                }
              }), "\u5206\u949F"]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 1,
              children: "\u8FBE\u5230\u6BCF\u5F20\u5B66\u65F6\uFF1A\u5B66\u5458\u987B\u5B8C\u6210\u6240\u6709\u7AE0\u8282\u5E76\u8FBE\u5230\u6BCF\u7AE0\u8BBE\u5B9A\u5B66\u65F6"
            })]
          })
        })
      })]
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: "\u5B66\u4E60\u7EC8\u7AEF"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default().Group), {
          onChange: terminalChange,
          value: terminalVsl,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
            direction: "vertical",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 0,
              children: "\u4E0D\u9650\u5236(\u6240\u6709\u7EC8\u7AEF\u53EF\u5B66\u4E60)"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 1,
              children: "\u4EC5\u9650\u7535\u8111\u7AEF\u5B66\u4E60"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_radio__WEBPACK_IMPORTED_MODULE_3___default()), {
              value: 2,
              children: "\u4EC5\u9650\u624B\u673A\u7AEF\u5B66\u4E60(\u8BFE\u4EF6\u4FDD\u62A4)"
            }), terminalVsl === 2 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
              style: {
                display: 'flex',
                flexDirection: 'column'
              },
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
                onChange: terminal2ChangeApp,
                checked: terminalApp,
                style: {
                  paddingLeft: '15px'
                },
                children: "\u542F\u7528\u8BFE\u7A0B\u7B54\u7591(\u5B66\u5458\u5411\u8001\u5E08\u63D0\u95EE)"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
                onChange: terminal2ChangePear,
                checked: terminalPear,
                style: {
                  paddingLeft: '15px',
                  marginLeft: '0px'
                },
                children: "\u542F\u7528\u8BFE\u7A0B\u7B54\u7591(\u5B66\u5458\u5411\u8001\u5E08\u63D0\u95EE)"
              })]
            }) : null]
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: "\u8BA8\u8BBA\u7B54\u7591"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        style: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
          onChange: answeringQestionsChangeApp,
          checked: AnsweringQestions2CheckedValuesApp,
          children: "\u542F\u7528\u8BFE\u7A0B\u7B54\u7591(\u5B66\u5458\u5411\u8001\u5E08\u63D0\u95EE)"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
          onChange: answeringQestionsChangePear,
          checked: AnsweringQestions2CheckedValuesPear,
          style: {
            marginLeft: '0px'
          },
          children: "\u5141\u8BB8\u5B66\u5458\u8FDB\u884C\u8BFE\u7A0B\u8BC4\u8BBA\u56DE\u590D"
        }), AnsweringQestions2CheckedValuesPear === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_0___default()), {
          style: {
            paddingLeft: '15px'
          },
          onChange: answeringQestions2Change,
          checked: answeringQestions2,
          children: "\u8BFE\u7A0B\u8BC4\u8BBA\u53CA\u56DE\u590D\u9700\u8981\u540E\u53F0\u4EBA\u5DE5\u5BA1\u6838\u540E\u663E\u793A"
        }) : null]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
      className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
        children: "\u8BFE\u7A0B\u5B66\u5206"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx("div", {
        className: (_courseSetUp_module_css__WEBPACK_IMPORTED_MODULE_11___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default()), {
          placeholder: "\u5B8C\u6210\u8BFE\u7A0B\u540E\u53EF\u83B7\u5F97\u5B66\u5206",
          value: creditVal,
          onChange: e => {
            setCreditVal(e.target.value);
          },
          style: {
            width: '40%'
          }
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CorseSetUp);

/***/ }),

/***/ 2820:
/***/ ((module) => {

// Exports
module.exports = {
	"corseSetUp": "courseSetUp_corseSetUp__uwEDv",
	"chapter": "courseSetUp_chapter__FftsT",
	"title": "courseSetUp_title__AkJ6r",
	"chapterName": "courseSetUp_chapterName__ssNHM",
	"ant-checkbox-group": "courseSetUp_ant-checkbox-group__337IV"
};


/***/ })

};
;