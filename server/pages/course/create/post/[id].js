(() => {
var exports = {};
exports.id = 3745;
exports.ids = [3745,2387,2194];
exports.modules = {

/***/ 9603:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _id_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8098);
/* harmony import */ var _id_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_id_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(290);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const Header = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9400), __webpack_require__.e(5278), __webpack_require__.e(1664), __webpack_require__.e(3286), __webpack_require__.e(2625), __webpack_require__.e(9279), __webpack_require__.e(6166), __webpack_require__.e(9392)]).then(__webpack_require__.bind(__webpack_require__, 9392)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9392)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/Nav/header']
  }
});
const Steps = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 2150).then(__webpack_require__.bind(__webpack_require__, 2150)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2150)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/Steps/index']
  }
});
const Message = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719), __webpack_require__.e(5236)]).then(__webpack_require__.bind(__webpack_require__, 5236)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5236)],
    modules: ["course/create/post/[id].tsx -> " + '../message/message']
  }
});
const Uploads = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 5712).then(__webpack_require__.bind(__webpack_require__, 5712)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5712)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/uploads']
  }
});
const ReleaseCourse = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(2625), __webpack_require__.e(2905)]).then(__webpack_require__.bind(__webpack_require__, 2905)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2905)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/releaseCourse']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const CorseSetUp = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(1417), __webpack_require__.e(6516)]).then(__webpack_require__.bind(__webpack_require__, 6516)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6516)],
    modules: ["course/create/post/[id].tsx -> " + '@/components/corseSetUp']
  }
});

const Create = props => {
  const {
    id
  } = props;
  const {
    0: state1,
    1: setState1
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: state2,
    1: setState2
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: state3,
    1: setState3
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 控制课程设置弹框显示隐藏

  const {
    0: alertShow,
    1: setAlertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const {
    0: courseId,
    1: setCourseId
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 获取设计成课程页面有没有章节

  const {
    0: type,
    1: setType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: courseMsgFlag,
    1: setCourseMsgFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 是否显示发送邮件按钮
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: qrcodeType,
    1: setQrcodeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true); // 课程设置弹框的按钮文字

  const {
    0: buttonText,
    1: setButtonText
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('保存设置'); // 课程设置弹框的是否loading效果

  const {
    0: loadings,
    1: setLoadings
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 课程设置数据

  const {
    0: isaveSetting,
    1: setIsaveSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(); // 是否显示提示没有子章节弹框

  const {
    0: isSections,
    1: setIsSections
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: courseMsg,
    1: setCourseMsg
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    courseObj: {
      courseName: '',
      courseStyle: 0
    },
    courseFree: [] || 0
  });
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
  const Router = router.query;
  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(id === 'courseMessage' ? 0 : id === 'courseUploads' ? 1 : id === 'courseReleaseCourse' ? 2 : 0);
  const steps = [{
    title: '课程信息',
    buttonMsg: {
      next: '保存&去设计课程'
    },
    skip: state1
  }, {
    title: '设计课程',
    buttonMsg: {
      pre: '上一步',
      customButton: [{
        title: '课程设置',
        type: 'danger',
        buttonCallback: () => {
          // if (type !== true) {
          //   message.warning('课程没有任何课件内容，请设计课程!');
          // } else {
          setAlertShow(true); // }
        }
      }],
      next: '完成设计&去发布课程'
    },
    skip: state2
  }, {
    title: '发布课程',
    buttonMsg: {
      pre: '上一步',
      finish: '返回课程列表'
    },
    skip: state3
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    (async function () {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const {
        courseId
      } = Router;

      if (courseId) {
        setCourseId(courseId);
      }
    })();
  }, [Router]); // 判断课程信息名称是否为空格

  function isNull(str) {
    if (str === '') {
      return true;
    }

    const regu = '^[ ]+$';
    const re = new RegExp(regu);
    return re.test(str);
  } // 课程信息数据改变执行的事件


  const getCourseMsg = obj => {
    // 判断课程信息页课程名称有没有值
    if (!isNull(obj.courseObj.courseName)) {
      // 有值打开课程信息跳转开关
      setState1(true);
    } else {
      // 否则关闭
      setState1(false);
    } // 保存课程信息的数据


    setCourseMsg(obj);
  }; // 获取设计课程里有没有创建章节


  const getChapterData = type => {
    // 判断当前课程有章节的话打开开关
    if (type === true) {
      setState2(true);
      setState3(true);
      setIsSections(false);
    } else {
      setState2(false);
      setState3(false);
      setIsSections(true);
    } // 保存设计课程里的章节数据


    setType(type);
  }; // 编辑课程信息


  const compileBody = async obj => {
    // 改变课程主表
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const res = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .compileCourse */ .X0)({
      courseId: Router.courseId || courseId,
      data: obj
    }); // return false;
    // 根据id获取课程信息

    const resItem = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .getCourseItem */ .UX)({
      courseId: Router.courseId || courseId
    }); // 判断学习方式是否是0|1,free会否为数组

    if (resItem) {
      if (Array.isArray(courseMsg.courseFree)) {
        const stillArr = []; // 仍旧在的数组

        const createArr = []; // 新建的数组

        const delArr = []; // 删除的数组
        // 判断courseFree字段中是否有新建的字段

        courseMsg.courseFree.forEach(item => {
          const {
            id
          } = item;

          if (id) {
            stillArr.push(item);
          } else {
            createArr.push(_objectSpread({
              courses: resItem.courseId
            }, item));
          }
        }); // 把数据库与仍旧在的数组做对比，不在则删除

        resItem.courseFree.forEach(item => {
          const find = stillArr.find(item1 => {
            return item1.id === item.id;
          });

          if (!find) {
            delArr.push(item);
          }
        });
        await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .updataFree */ .vt)({
          stillArr,
          createArr,
          delArr
        });
      } else {
        // 学习方式为2
        const stillArr = []; // 仍旧在的数组

        const createArr = []; // 新建的数组

        const delArr = []; // 删除的数组
        // 判断仍旧在的学员id，是否有新建的

        courseMsg.courseFree.studentFrom.forEach(item => {
          const {
            id
          } = item;
          const find = resItem.courseChoose.find(item1 => {
            return id === item1.courseStudent;
          });

          if (find) {
            stillArr.push(find);
          } else {
            createArr.push({
              courses: resItem.courseId,
              courseStudent: item.id,
              courseDepartment: ''
            });
          }
        }); // 判断仍旧在的部门，是否有新建的

        courseMsg.courseFree.department.forEach(item => {
          const find = resItem.courseChoose.find(item1 => {
            return item === item1.courseDepartment;
          });

          if (find) {
            stillArr.push(find);
          } else {
            createArr.push({
              courses: resItem.courseId,
              courseStudent: '',
              courseDepartment: item
            });
          }
        }); // 判读有哪些需要删除

        resItem.courseChoose.forEach(item => {
          if (item.courseStudent) {
            const find = stillArr.find(item1 => {
              return item1.courseStudent === item.courseStudent;
            });

            if (!find) {
              delArr.push(item);
            }
          } else {
            const find = stillArr.find(item1 => {
              return item1.courseDepartment === item.courseDepartment;
            });

            if (!find) {
              delArr.push(item);
            }
          }
        });
        await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .updataChoose */ .De)({
          stillArr,
          createArr,
          delArr
        });
      } // setState1(true);


      setState1(falg => {
        // nextCallback();
        return true;
      });
      setNum(1);
      setTimeout(() => {
        router.push({
          pathname: '/course/create/post/courseUploads',
          query: {
            courseId,
            courseName: Router.courseName || courseMsg.courseObj.courseName
          }
        });
      });
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('已暂无该数据，请返回课程页面刷新后重试!'); // router.push({
      //   pathname: '/course/create/post/courseMessage',
      //   query: {
      //     courseId,
      //   },
      // });


      setNum(0);
      router.back(); // setInterceptRouter(false);
    }
  }; // 创建课程信息


  const createBody = async obj => {
    const res = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .createCourse */ .P6)(_objectSpread(_objectSpread({}, obj), {}, {
      courseCompleteCondition: 1,
      courseSetUp: 0,
      courseLearningTerminal: 3,
      courseAudit: 1,
      courseCreditHour: '0.0',
      // delete_at: new Date(),
      courseWechat: 0,
      courseExam: '',
      courseAnswer: 1,
      courseComment: 1
    }));
    setCourseId(res.courseId + '');
    const {
      courseFree
    } = courseMsg;

    if (Array.isArray(courseFree)) {
      if (courseFree.length > 0) {
        const newArr = [];
        courseFree.forEach(item => {
          if (item.courseFieldName) {
            newArr.push(_objectSpread({
              courses: res.courseId
            }, item));
          }
        });
        await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .createCourseLearnFree */ .S_)(newArr);
      }
    } else {
      const arrList = [];
      courseFree.studentFrom.forEach(item => {
        arrList.push({
          courses: res.courseId,
          courseStudent: item.id,
          courseDepartment: ''
        });
      });
      courseFree.department.forEach(item => {
        arrList.push({
          courses: res.courseId,
          courseDepartment: item,
          courseStudent: ''
        });
      });
      await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .createCourseLearnChoose */ .JN)({
        data: arrList
      });
    }

    router.push({
      pathname: '/course/create/post/courseUploads',
      query: {
        courseId: res.courseId,
        courseName: Router.courseName || courseMsg.courseObj.courseName
      }
    });
  }; // 点击关闭课程设置弹框


  const changeAlertClose = res => {
    setAlertShow(res);
  }; // 创建的下一步


  const nextCallback = () => {
    const {
      courseObj
    } = courseMsg;

    if (courseId) {
      // 第一步
      if (num === 0 && !isNull(courseObj.courseName)) {
        compileBody(courseMsg.courseObj); // if (res) {
        // setTimeout(() => {
        //   router.push({
        //     pathname: '/course/create/post/courseUploads',
        //     query: {
        //       courseId,
        //     },
        //   });
        // });
        // }
      } else if (num === 0 && isNull(courseObj.courseName)) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('请输入课程名称，课程名称不能为空!');
      } else if (num === 1 && type === true) {
        router.push({
          pathname: '/course/create/post/courseReleaseCourse',
          query: {
            courseId,
            courseName: Router.courseName || courseMsg.courseObj.courseName
          }
        });
      } else {
        changeAlertClose(true);
      }
    } else {
      // 创建课程   第一步走，第二步编辑
      if (num === 0 && !isNull(courseObj.courseName)) {
        createBody(courseMsg);
      } else if (num === 0 && isNull(courseObj.courseName)) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('请输入课程名称，课程名称不能为空!');
      }
    }
  }; // 接设置的数据


  const saveSetting = setUpData => {
    setIsaveSetting(setUpData);
  }; // 点击课程设置弹框的保存设置
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const enterLoading = async index => {
    setLoadings(true);
    setButtonText('正在保存'); // 保存修改
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const res = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_6__/* .compileCourse */ .X0)({
      courseId,
      data: isaveSetting
    });
    setTimeout(() => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('保存成功', 1);

      setButtonText('保存设置');
      setLoadings(false);
      setAlertShow(false);
    }, 2000);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_9___default().createBox),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Header, {
      args: 4,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_9___default().stepsTop),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(Steps, {
            start: num // 课程信息——设计课程——发布课程事件
            ,
            callBack: indexStep => {
              setNum(indexStep);

              if (indexStep === 0 && id !== 'courseMessage') {
                if (courseId) {
                  router.push({
                    pathname: '/course/create/post/courseMessage',
                    query: {
                      courseId,
                      courseName: Router.courseName || courseMsg.courseObj.courseName
                    }
                  });
                } else {
                  router.push('/course/create/post/courseMessage');
                }
              } else if (indexStep === 1 && id !== 'courseUploads') {
                router.push({
                  pathname: '/course/create/post/courseUploads',
                  query: {
                    courseId,
                    courseName: Router.courseName || courseMsg.courseObj.courseName
                  }
                });
              } else if (indexStep === 2 && id !== 'courseReleaseCourse') {
                router.push({
                  pathname: '/course/create/post/courseReleaseCourse',
                  query: {
                    courseId,
                    courseName: Router.courseName || courseMsg.courseObj.courseName
                  }
                });
              }
            } // 控制页面结构的数据
            ,
            step: steps // 点击最后发布按钮的事件
            ,
            finishCallback: () => {
              router.push('/course');
            } // 点击下一步执行的事件
            ,
            nextCallback: nextCallback,
            children: [id === 'courseMessage' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Message, {
              courseId: courseId,
              courseMsgFlag: courseMsgFlag,
              getCourseMsg: getCourseMsg
            }) : null, id === 'courseUploads' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Uploads, {
              courseId: courseId,
              getChapterData: getChapterData
            }) : null, id === 'courseReleaseCourse' ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ReleaseCourse, {
              qrcodeType: qrcodeType
            }) : null]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(AlertCommon, {
            alertStatus: alertShow,
            enableDrag: true,
            alertTitle: isSections === true ? '提示' : '选择学员',
            changeAlertFlag: changeAlertClose,
            children: [isSections === true ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_9___default().emptyPrompt),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_9___default().CancelIcon),
                children: "\u3128"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                children: "\u8BFE\u7A0B\u6CA1\u6709\u4EFB\u4F55\u8BFE\u4EF6\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u8BA1\u8BFE\u7A0B!"
              })]
            }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(CorseSetUp, {
              courseId: courseId,
              saveSetting: saveSetting
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
              className: (_id_module_scss__WEBPACK_IMPORTED_MODULE_9___default().UploadsBottom),
              children: [isSections === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                type: "primary",
                loading: loadings,
                onClick: () => {
                  changeAlertClose(false);
                },
                children: "\u786E\u5B9A"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_0___default()), {
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SettingFilled, {}),
                  type: "primary",
                  loading: loadings,
                  onClick: enterLoading,
                  children: buttonText
                })
              }), isSections === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                onClick: () => {
                  changeAlertClose(false);
                },
                children: "\u53D6\u6D88"
              }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CloseOutlined, {}),
                onClick: () => {
                  changeAlertClose(false);
                },
                children: "\u53D6\u6D88"
              })]
            })]
          })
        })]
      })
    })
  });
}; // eslint-disable-next-line @typescript-eslint/no-explicit-any


async function getServerSideProps(ctx) {
  const {
    id
  } = ctx.query;
  return {
    props: {
      id
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Create);

/***/ }),

/***/ 8098:
/***/ ((module) => {

// Exports
module.exports = {
	"stepsTop": "id_stepsTop__9mPFc",
	"createBox": "id_createBox__xjnW_",
	"UploadsBottom": "id_UploadsBottom__t_f4l",
	"emptyPrompt": "id_emptyPrompt__Gb0Pm",
	"CancelIcon": "id_CancelIcon__dZWfI"
};


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 3800:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/button");

/***/ }),

/***/ 1489:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/checkbox");

/***/ }),

/***/ 2071:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/date-picker");

/***/ }),

/***/ 2278:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/divider");

/***/ }),

/***/ 1788:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ 6190:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/form");

/***/ }),

/***/ 675:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input");

/***/ }),

/***/ 5842:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/input/TextArea");

/***/ }),

/***/ 5417:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/layout");

/***/ }),

/***/ 274:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu");

/***/ }),

/***/ 5066:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/menu/SubMenu");

/***/ }),

/***/ 7369:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/message");

/***/ }),

/***/ 6418:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/modal");

/***/ }),

/***/ 3528:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/notification");

/***/ }),

/***/ 3984:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popconfirm");

/***/ }),

/***/ 5893:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/popover");

/***/ }),

/***/ 7386:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/radio");

/***/ }),

/***/ 3526:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/select");

/***/ }),

/***/ 1030:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/skeleton");

/***/ }),

/***/ 7374:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/space");

/***/ }),

/***/ 261:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/spin");

/***/ }),

/***/ 4285:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/table");

/***/ }),

/***/ 9538:
/***/ ((module) => {

"use strict";
module.exports = require("antd/lib/upload");

/***/ }),

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 5345:
/***/ ((module) => {

"use strict";
module.exports = require("for-editor");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 6896:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/zh-cn");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 3860:
/***/ ((module) => {

"use strict";
module.exports = require("qrcode.react");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9816:
/***/ ((module) => {

"use strict";
module.exports = require("styled-jsx/style");

/***/ }),

/***/ 6302:
/***/ ((module) => {

"use strict";
module.exports = require("xlsx");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5152,2828,290], () => (__webpack_exec__(9603)));
module.exports = __webpack_exports__;

})();