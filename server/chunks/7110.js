exports.id = 7110;
exports.ids = [7110];
exports.modules = {

/***/ 7110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7889);
/* harmony import */ var antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1336);
/* harmony import */ var _commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _api_course__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2615);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_SendCourse__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(4299);
/* harmony import */ var _components_releaseCourse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2905);
/* harmony import */ var _components_corseSetUp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6516);
/* harmony import */ var _api_course_createMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(290);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__);






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["course/courseList/commonContent/index.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const CommonPagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 7373).then(__webpack_require__.bind(__webpack_require__, 7373)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7373)],
    modules: ["course/courseList/commonContent/index.tsx -> " + '@/components/commonTable/commonPagination']
  }
});
const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["course/courseList/commonContent/index.tsx -> " + '@component/alertCommon/alertCommon']
  }
});
const Stats = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => __webpack_require__.e(/* import() */ 4447).then(__webpack_require__.bind(__webpack_require__, 4447)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4447)],
    modules: ["course/courseList/commonContent/index.tsx -> " + '../../stats']
  }
});
const CourseSearch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_5__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518), __webpack_require__.e(2611)]).then(__webpack_require__.bind(__webpack_require__, 2611)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2611)],
    modules: ["course/courseList/commonContent/index.tsx -> " + '../courseSearch']
  }
});




 // import { stringify } from 'querystring';

 // ??????????????????





const CommonContent = props => {
  const {
    icon,
    courseTitle,
    getCount,
    isRecycle,
    courseDataState,
    isStar
  } = props;
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)(); // ???????????????

  const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.createFromIconfontCN)({
    scriptUrl: ['//at.alicdn.com/t/font_2429434_dzbsomf1gqq.js']
  }); // ??????????????????

  const {
    0: countModule,
    1: setCountModule
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0); // ????????????

  const {
    0: courseDataList,
    1: seCourseDataList
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]); // loading???????????????

  const {
    0: isLoading,
    1: setIsLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: posts,
    1: setPosts
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // ??????????????????

  const {
    0: nowPage,
    1: setNowPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1); // ????????????

  const {
    0: pageLength,
    1: setPageLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(5); // ????????????????????????

  const {
    0: sendId,
    1: setSendId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // ??????????????????

  const {
    0: clearStarTitle,
    1: setClearStarTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ??????????????????

  const {
    0: setupStar,
    1: setSetupStar
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ????????? ??????????????????

  const {
    0: alertRemind,
    1: setAlertRemind
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ??????????????????

  const {
    0: backTitle,
    1: setBackTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ??????????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: isSendEmail,
    1: setIsSendEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ?????????????????????????????????

  const {
    0: emailVal,
    1: setEmailVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // ???????????????loading

  const {
    0: loadings,
    1: setLoadings
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ???????????????????????????

  const {
    0: buttonText,
    1: setButtonText
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('??????'); // ??????????????????????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: qrcodeType,
    1: setQrcodeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ???????????????????????????????????????

  const {
    0: QcodeType,
    1: setQcodeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ????????????????????????????????????

  const {
    0: CurriculumAlertShow,
    1: setCurriculumAlertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ??????????????????

  const {
    0: isaveSetting,
    1: setIsaveSetting
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // ??????id

  const {
    0: courseId,
    1: setCourseId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // ???????????????????????????loading??????

  const {
    0: CourseLoadings,
    1: setCourseLoadings
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ???????????????????????????????????????

  const {
    0: itemCourseName,
    1: setItemCourseName
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // ???????????????????????????????????????????????????

  const {
    0: mailIsAll,
    1: setMailIsAll
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true); // ?????????????????????????????????

  const {
    0: sendErrorEmail,
    1: setSendErrorEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // ????????????

  const getCourseData = async (nowPage, pageLength) => {
    setIsLoading(true);
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .getCourseList */ .tS)({
      page: nowPage,
      pageSize: pageLength,
      order: 'DESC',
      field: 'createAt',
      startTime: '',
      endTime: '',
      searchValue: '',
      searchTree: '',
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState
    });
    setCountModule(res[1]);
    seCourseDataList(res[0]);
    setIsLoading(false);
    return res;
  }; // ??????


  const onPaginationChange = async (page, pageSize) => {
    setIsLoading(true);
    await setNowPage(page);
    await setPageLength(pageSize);
    getCourseData(page, pageSize);
  }; // ????????????-loading??????


  const fetchPosts = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async () => {
    try {
      setIsLoading(true); // loading??????

      const posts = await getCourseData(nowPage, pageLength);
      setPosts(posts[0]); // ??????????????????????????????
    } catch (error) {
      if (error.name === 'AbortError') {// console.log('Request aborted!');
      } else {// console.log(error);
      }
    } finally {
      setIsLoading(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // ??????????????????============---------??????

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
  const {
    0: EmailAlertShow,
    1: setEmailAlertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false); // ??????????????????

  const {
    0: value,
    1: setResult
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({
    stats: 0,
    courseAnswer: 0,
    courseComment: 0,
    courseEnd: '0',
    courseId: 0,
    courseName: '0',
    courseNotice: '0',
    coursePeriod: 0,
    courseRecycle: 0,
    courseStar: 0,
    courseStart: '0',
    courseStyle: 0,
    courseSynopsis: '0',
    courseTarget: '0',
    courseType: '0',
    createAt: '0',
    updateAt: '0'
  }); // ??????????????????============---------??????
  // ??????????????????

  const alertdialog = (item, index) => {
    setResult(_objectSpread(_objectSpread(_objectSpread({}, value), item), {}, {
      stats: index
    }));
    setalertShow(true);
  }; // ??????????????????


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // ??????????????????????????????


  const EmailChangeAlertFlag = res => {
    setEmailAlertShow(res);
  }; // ?????????


  const {
    0: treeType,
    1: setTreeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');

  const currentOption = async location => {
    setTreeType(location);
    await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .changeCourseType */ .xs)({
      courseId: sendId.courseId + '',
      title: location
    });
    onPaginationChange(nowPage, pageLength);
  };

  const treeCourse = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(TreeType, {
    type: 'course',
    getCurrentAndAncestorsTitles: currentOption // ??????????????????
    ,
    openCheckbox: false // ???????????????????????????

  }); // ????????????????????????


  const onAlertShow = () => {
    setAlertRemind(!alertRemind);
  };

  const onClose = () => {
    setAlertRemind(false);
  }; // ??????????????????????????????


  const {
    0: deleteTitle,
    1: setDeleteTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);

  const deleteShow = () => {
    setDeleteTitle(true);
  };

  const changeDeleteTitle = res => {
    setDeleteTitle(res);
  }; // ????????????


  const deleteConfirm = async () => {
    changeDeleteTitle(false);
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .deleteRecycle */ .u3)({
      courseId: sendId.courseId
    });

    if (res.message === 'success') {
      onPaginationChange(nowPage, pageLength);
      onAlertShow();
      getCourseData(nowPage, pageLength);
      getCount();
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  }; // ????????????????????????


  const onClearStarShow = () => {
    setClearStarTitle(!clearStarTitle);
  };

  const onClearStar = () => {
    setClearStarTitle(false);
  }; // ????????????????????????


  const onSetupStarShow = () => {
    setSetupStar(!setupStar);
  };

  const onSetupStar = () => {
    setSetupStar(false);
  }; // ????????????


  const editall = async e => {
    if (e === '????????????') {
      router.push({
        pathname: '/course/create/post/courseMessage',
        query: {
          courseId: sendId.courseId + '',
          courseName: itemCourseName
        }
      });
      return;
    }

    if (e === '????????????') {
      router.push({
        pathname: '/course/create/post/courseUploads',
        query: {
          courseId: sendId.courseId + '',
          courseName: itemCourseName
        }
      });
      return;
    }

    if (e === '?????????&??????') {
      setEmailAlertShow(true);
      setQcodeType(false);
      return;
    }

    if (e === '???????????????') {
      const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .increaseStar */ .GY)({
        courseId: sendId.courseId
      });

      if (res.message === 'success') {
        onPaginationChange(nowPage, pageLength);
        onSetupStarShow();
        getCourseData(nowPage, pageLength);
        getCount();
        setTimeout(() => {
          onSetupStar();
        }, 3000);
        return;
      }
    }

    if (e === '????????????') {
      const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .changeStar */ .MK)({
        courseId: sendId.courseId
      });

      if (res.message === 'success') {
        onPaginationChange(nowPage, pageLength);
        getCourseData(nowPage, pageLength);
        onClearStarShow();
        getCount();
        setTimeout(() => {
          onClearStar();
        }, 3000);
        return;
      }
    }

    if (e === '??????????????????') {
      setEmailAlertShow(true);
      setQcodeType(true);
      return;
    }

    if (e === '??????????????????') {
      alertdialog(sendId, 1);
      return;
    }

    if (e === '??????????????????') {
      alertdialog(sendId, 2);
      return;
    }

    if (e === '??????????????????') {
      alertdialog(sendId, 3);
      return;
    }

    if (e === '??????????????????') {
      deleteShow();
    }
  }; // ?????????????????????????????????,??????????????????


  const isEmailer = EmailVal => {
    // ????????????
    setEmailVal(EmailVal);
  }; // ??????????????? (?????????????????????????????????)


  const editCont = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    style: {
      width: '160px',
      height: '361px',
      backgroundColor: 'white',
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'center',
      alignItems: 'center',
      border: '1px solid #e1e4e6'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-bianji-copy"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u7F16\u8F91\u8BFE\u7A0B"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-kechengchakan"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u8BBE\u8BA1\u8BFE\u7A0B"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('?????????&??????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.QrcodeOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u4E8C\u7EF4\u7801&\u94FE\u63A5"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall(sendId && sendId.courseStar === 0 ? '????????????' : '???????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-shoucang"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: sendId && sendId.courseStar === 0 ? '????????????' : '???????????????'
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u53D1\u9001\u8BFE\u7A0B\u901A\u77E5"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-chat-full"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u67E5\u770B\u8BFE\u7A0B\u8BC4\u8BBA"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-pinglun"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u67E5\u770B\u8BFE\u7A0B\u7B54\u7591"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.RestOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u5220\u9664\u5230\u56DE\u6536\u7AD9"
      })]
    })]
  }); // ??????????????? (??????????????????????????????)


  const arrangeCont = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    style: {
      width: '160px',
      height: '361px',
      backgroundColor: 'white',
      display: 'flex',
      flexWrap: 'wrap',
      alignSelf: 'center',
      alignItems: 'center',
      border: '1px solid #e1e4e6'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-bianji-copy"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u7F16\u8F91\u8BFE\u7A0B"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-kechengchakan"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u8BBE\u8BA1\u8BFE\u7A0B"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('?????????&??????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.QrcodeOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u4E8C\u7EF4\u7801&\u94FE\u63A5"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall(sendId && sendId.courseStar === 0 ? '????????????' : '???????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-shoucang"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: sendId && sendId.courseStar === 0 ? '????????????' : '???????????????'
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.MailOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u53D1\u9001\u8BFE\u7A0B\u901A\u77E5"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-chat-full"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u67E5\u770B\u8BFE\u7A0B\u8BC4\u8BBA"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-pinglun"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u67E5\u770B\u8BFE\u7A0B\u7B54\u7591"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-gerenka"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u67E5\u770B\u7F3A\u5E2D\u4EBA\u5458"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().editContent),
      onClick: () => {
        editall('??????????????????');
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.RestOutlined, {})
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
        className: "menuSpan",
        children: "\u5220\u9664\u5230\u56DE\u6536\u7AD9"
      })]
    })]
  }); // ?????????????????????????????????


  const dateToMs = date => {
    const result = new Date(date).getTime();
    return result;
  }; // ???????????????????????????


  const transformTimestamp = (timestamp, flag) => {
    const date = new Date(timestamp);
    const Y = date.getFullYear() + '-';
    const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    const D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

    if (flag) {
      const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
      const m = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
      const dateString = Y + M + D + ' ' + h + ':' + m;
      return dateString;
    }

    const dateString = Y + M + D;
    return dateString;
  }; // ????????????


  const cancelStar = async id => {
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .changeStar */ .MK)({
      courseId: id
    });

    if (res.message === 'success') {
      onPaginationChange(nowPage, pageLength);
      getCourseData(nowPage, pageLength);
      onClearStarShow();
      getCount();
      setTimeout(() => {
        onClearStar();
      }, 3000);
    }
  }; // ????????????????????????


  const backShow = () => {
    setBackTitle(true);
  };

  const changeBackShow = res => {
    setBackTitle(res);
  };

  const closeBackShow = () => {
    changeBackShow(false);
  }; // ????????????


  const {
    0: recycleTitle,
    1: setRecycleTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);

  const recycleShow = () => {
    setRecycleTitle(true);
  };

  const changeRecycleTitle = res => {
    setRecycleTitle(res);
  };

  const backCourse = async () => {
    changeRecycleTitle(false);
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .recoverCourse */ .fg)({
      courseId: sendId.courseId
    });

    if (res.message === 'success') {
      onPaginationChange(nowPage, pageLength);
      getCourseData(nowPage, pageLength);
      getCount();
      changeRecycleTitle(false);
      changeBackShow(true);
      onPaginationChange(nowPage, pageLength);
      backShow();
    }
  }; // ??????????????????


  const {
    0: completelyDelete,
    1: setCompletelyDelete
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);

  const completeShow = () => {
    setCompletelyDelete(true);
  };

  const eraseTitle = res => {
    setCompletelyDelete(res);
  };

  const deleteCourse = async () => {
    eraseTitle(false); // ???????????????????????????

    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .deleteColumn */ .eA)({
      courseId: sendId.courseId
    });

    if (res.message === 'success') {
      onPaginationChange(nowPage, pageLength);
      getCourseData(nowPage, pageLength);
      getCount();
    }
  }; // ??????7???????????????


  const getAutoDelete = async () => {
    if (isRecycle === 0 && courseDataList) {
      const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_9__/* .autoDelete */ .BP)();

      if (res.message === 'success') {
        onPaginationChange(nowPage, pageLength);
        getCourseData(nowPage, pageLength);
        getCount();
      }
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    getAutoDelete();
    getCourseData(nowPage, pageLength);
    fetchPosts(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchPosts]); // ??????????????????????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const enterLoading = index => {
    // eslint-disable-next-line no-useless-escape
    const r = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const arr = emailVal.split(';');
    const errorArr = [];
    const CorrectArrAll = []; // ??????????????????

    arr.forEach((item, index) => {
      if (item === '') {
        arr.splice(index, 1);
      }
    }); // ??????????????????

    const CorrectArr = Array.from(new Set(arr)); // console.log(CorrectArr);
    // ???????????????????????????????????????
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const isAll = CorrectArr.every((item, index) => {
      return r.test(item);
    }); // ?????????????????????????????????????????????????????????

    CorrectArr.forEach((item, index) => {
      if (!r.test(item)) {
        // ???????????????
        errorArr.push(item);
      } else {
        // ???????????????
        CorrectArrAll.push(item);
      }
    }); // console.log(CorrectArrAll);
    // console.log(errorArr);
    // ??????????????????????????????????????????????????????

    if (emailVal.length !== 0) {
      // ???????????????????????????????????????z
      if (isAll) {
        setLoadings(true);
        setButtonText('????????????');
        setTimeout(() => {
          // ?????????????????????????????????????????????,
          // ?????????????????????,????????????
          antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().success('??????????????????');

          setButtonText('??????');
          setLoadings(false); // ??????????????????????????????????????????

          setMailIsAll(isAll);
        }, 2000);
      } else {
        setLoadings(true);
        setButtonText('????????????');
        setTimeout(() => {
          // ?????????????????????????????????????????????,
          // ?????????????????????,????????????
          antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().success('??????????????????');

          setButtonText('??????');
          setLoadings(false); // ????????????????????????????????????

          setMailIsAll(isAll); // ?????????????????????????????????

          setSendErrorEmail(errorArr.join('\n'));
        }, 2000);
      }
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().warning('?????????????????????????????????');
    }
  }; // ??????????????????????????????


  const Curriculum = res => {
    setCurriculumAlertShow(res);
  }; // ??????????????????


  const saveSetting = setUpData => {
    setIsaveSetting(setUpData);
  }; // ???????????????????????????????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const setcourseEnterLoading = async index => {
    setCourseLoadings(true);
    setButtonText('????????????'); // ????????????
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const res = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_14__/* .compileCourse */ .X0)({
      courseId,
      data: isaveSetting
    });
    setTimeout(() => {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_4___default().success('????????????', 1);

      setButtonText('????????????');
      setCourseLoadings(false);
      setCurriculumAlertShow(false);
      getCourseData(nowPage, pageLength);
    }, 2000);
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().content),
      id: "content",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().courseTitle),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().titleDes),
          children: [icon, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            children: [courseTitle, " (", countModule, ")"]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(CourseSearch, {
          isRecycle: isRecycle // ????????????????????????
          ,
          courseDataState: courseDataState // ?????????????????????
          ,
          isStar: isStar // ???????????????
          ,
          page: nowPage // ????????????
          ,
          pageSize: pageLength // ????????????
          ,
          seCourseDataList: seCourseDataList // ????????????
          ,
          setCountModule: setCountModule,
          getCount: getCount,
          setIsLoading: setIsLoading // ????????????

        })]
      }), courseDataList && courseDataList.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().resBox),
          children: courseDataList.map((item, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
              className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().resList),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().listCont),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
                  src: "https://e.kaoshiyun.com.cn/cloud/style/images/train-img01.jpg",
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                  className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().duration),
                  children: [item.coursePeriod, "\u5206\u949F"]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                  className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().desList),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().top),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("span", {
                        onClick: () => {
                          router.push({
                            pathname: '/course/create/post/courseMessage',
                            query: {
                              courseId: item.courseId + '',
                              content: '????????????'
                            }
                          });
                        },
                        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().courseName),
                        children: item.courseName
                      }), item.courseStar === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.StarOutlined, {
                        onClick: () => {
                          cancelStar(item.courseId);
                        },
                        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().starIcon)
                      }) : null]
                    }), isRecycle !== 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("ul", {
                      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default()["function"]),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().statistics),
                        onClick: () => {
                          alertdialog(item, 0);
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
                          type: "icon-areachart"
                        }), "\u5B66\u4E60\u7EDF\u8BA1(0)"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().setCourse),
                        onClick: () => {
                          setCurriculumAlertShow(true);
                          setCourseId(String(item.courseId));
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
                          type: "icon-shezhi1"
                        }), "\u8BBE\u7F6E"]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("li", {
                        id: "redact",
                        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().redact),
                        onClick: () => {
                          setSendId(item);
                        },
                        children: item.courseStyle !== 2 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                          direction: "vertical",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                            wrap: true,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                              overlay: editCont,
                              trigger: ['click'],
                              placement: "bottomLeft",
                              getPopupContainer: () => document.getElementById('redact'),
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                                className: "ant-dropdown-link",
                                style: {
                                  cursor: 'pointer',
                                  lineHeight: '25px'
                                },
                                onClick: e => {
                                  setItemCourseName(item.courseName);
                                  setCourseId(`${item.courseId}`);
                                  e.preventDefault();
                                },
                                children: ["\u7F16\u8F91", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CaretDownFilled, {})]
                              })
                            })
                          })
                        }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                          direction: "vertical",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                            wrap: true,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                              overlay: arrangeCont,
                              trigger: ['click'],
                              placement: "bottomLeft",
                              getPopupContainer: () => document.getElementById('redact'),
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                                className: "ant-dropdown-link",
                                style: {
                                  cursor: 'pointer',
                                  lineHeight: '25px'
                                },
                                onClick: e => {
                                  setItemCourseName(item.courseName);
                                  setCourseId(`${item.courseId}`);
                                  e.preventDefault();
                                },
                                children: ["\u7F16\u8F91", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CaretDownFilled, {})]
                              })
                            })
                          })
                        })
                      })]
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("ul", {
                      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().deleteFunction),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        style: {
                          cursor: 'pointer'
                        },
                        onClick: () => {
                          completeShow();
                          setSendId(item);
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
                          type: "icon-shanchu",
                          style: {
                            fontWeight: 'bold'
                          }
                        }), "\u4ECE\u56DE\u6536\u7AD9\u5220\u9664"]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        onClick: () => {
                          recycleShow();
                          setSendId(item);
                        },
                        style: {
                          cursor: 'pointer'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
                          type: "icon-chehui"
                        }), "\u6062\u590D\u8BFE\u7A0B"]
                      })]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().bottom),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("ul", {
                      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().typeDes),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        children: [isRecycle === 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
                          style: {
                            backgroundColor: Number(item.courseStart) < new Date().getTime() && Number(item.courseEnd) > new Date().getTime() ? '#FF9D01' : Number(item.courseStart) > new Date().getTime() ? '#4664AF' : '#666666'
                          },
                          children: Number(item.courseStart) < new Date().getTime() && Number(item.courseEnd) > new Date().getTime() ? '?????????' : Number(item.courseStart) > new Date().getTime() ? '?????????' : '?????????'
                        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                          style: {
                            width: '65px',
                            height: '100%',
                            backgroundColor: '#D93026',
                            color: 'white'
                          },
                          children: [new Date(new Date(item.deleteAt).getTime() - new Date().getTime()).getDate() - 1, "\u5929\u540E\u5220\u9664"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          children: [transformTimestamp(Number(item.courseStart), true), " ~", ' ', transformTimestamp(Number(item.courseEnd), true)]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("em", {
                          children: "/"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("li", {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                          children: [item.courseStyle === 0 ? '???????????????' : item.courseStyle === 1 ? '?????????+??????' : '????????????', "/ \u8FBE\u5230\u8BFE\u7A0B\u5B66\u65F6"]
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("em", {
                          children: "/"
                        })]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("li", {
                        onClick: () => {
                          setSendId(item);
                        },
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                          direction: "vertical",
                          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
                            wrap: true,
                            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default()), {
                              overlay: treeCourse,
                              trigger: ['click'],
                              placement: "bottomCenter",
                              getPopupContainer: () => document.getElementById('redact'),
                              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
                                className: "ant-dropdown-link",
                                style: {
                                  cursor: 'pointer'
                                },
                                onClick: e => e.preventDefault(),
                                children: [item.courseType ? item.courseType.slice(item.courseType.lastIndexOf('/') + 1) : treeType, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DownOutlined, {})]
                              })
                            })
                          })
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().create),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
                        children: ["\u521B\u5EFA\u4E8E", transformTimestamp(dateToMs(item.createAt), false)]
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.QrcodeOutlined, {
                        onClick: () => {
                          editall('?????????&??????');
                        }
                      })]
                    })]
                  })]
                })]
              })
            }, index);
          })
        }), countModule > 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().paginationBox),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(CommonPagination, {
            dataCount: countModule // ???????????? ?????????????????????
            ,
            onChange: onPaginationChange // ???????????????????????????
            ,
            pageSizeOptions: ['5', '10', '15', '20'] // ??????????????????????????????
            ,
            defaultPageSize: 5 // ?????????????????????
            ,
            current: nowPage
          })
        }) : null]
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(AlertCommon, {
        alertStatus: alertShow,
        enableDrag: false,
        alertTitle: `???????????? - ${value.courseName}`,
        changeAlertFlag: changeAlertFlag,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(Stats, {
          value: _objectSpread({}, value)
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(AlertCommon, {
        alertStatus: deleteTitle,
        enableDrag: true,
        alertTitle: '??????',
        changeAlertFlag: changeDeleteTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertRecycle),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertContext),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
              type: "icon-wenhao",
              style: {
                fontSize: '26px',
                marginRight: '5px'
              }
            }), "\u786E\u8BA4\u5220\u9664\u5230\u56DE\u6536\u7AD9\uFF1F"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertLine)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertButton),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                deleteConfirm();
              },
              children: "\u786E\u5B9A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                changeDeleteTitle(false);
              },
              children: "\u53D6\u6D88"
            })]
          })]
        })
      }), alertRemind ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default()), {
        message: "\u5DF2\u79FB\u9664\u5230\u56DE\u6536\u7AD9",
        type: "success",
        closable: true,
        banner: true,
        showIcon: true,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-duigou"
        }),
        style: {
          width: '330px',
          height: '55px',
          borderLeft: ' 5px solid #3C763D',
          position: 'fixed',
          top: '20px',
          right: '10px',
          zIndex: '999',
          fontSize: '14px',
          backgroundColor: '#DFF0D8'
        },
        onClose: onClose
      }) : null, clearStarTitle ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default()), {
        message: "\u5DF2\u53D6\u6D88\u661F\u6807",
        type: "success",
        closable: true,
        banner: true,
        showIcon: true,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-duigou"
        }),
        style: {
          width: '330px',
          height: '55px',
          borderLeft: ' 5px solid #3C763D',
          position: 'fixed',
          top: '20px',
          right: '10px',
          zIndex: '999',
          fontSize: '14px',
          backgroundColor: '#DFF0D8'
        },
        onClose: onClearStar
      }) : null, setupStar ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_alert__WEBPACK_IMPORTED_MODULE_1___default()), {
        message: "\u5DF2\u8BBE\u7F6E\u661F\u6807",
        type: "success",
        closable: true,
        banner: true,
        showIcon: true,
        icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
          type: "icon-duigou"
        }),
        style: {
          width: '330px',
          height: '55px',
          borderLeft: ' 5px solid #3C763D',
          position: 'fixed',
          top: '20px',
          right: '10px',
          zIndex: '999',
          fontSize: '14px',
          backgroundColor: '#DFF0D8'
        },
        onClose: onSetupStar
      }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(AlertCommon, {
        alertStatus: recycleTitle,
        enableDrag: true,
        alertTitle: '??????',
        changeAlertFlag: changeRecycleTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertRecycle),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertContext),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
              type: "icon-wenhao",
              style: {
                fontSize: '26px',
                marginRight: '5px'
              }
            }), "\u786E\u8BA4\u6062\u590D\u8BFE\u7A0B\u5417\uFF1F"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertLine)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertButton),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                // backShow();
                backCourse();
              },
              children: "\u786E\u5B9A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                changeRecycleTitle(false);
              },
              children: "\u53D6\u6D88"
            })]
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(AlertCommon, {
        alertStatus: backTitle,
        enableDrag: true,
        alertTitle: '??????',
        changeAlertFlag: changeBackShow,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertRecycle),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertContext),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
              type: "icon-duigou",
              style: {
                fontSize: '26px',
                marginRight: '5px'
              }
            }), "\u6062\u590D\u6210\u529F,\u8BFE\u7A0B\u5DF2\u6062\u590D\u5230\u3010", Number(sendId && sendId.courseStart) < new Date().getTime() && Number(sendId && sendId.courseEnd) > new Date().getTime() ? '?????????' : Number(sendId && sendId.courseStart) > new Date().getTime() ? '?????????' : '?????????', "\u3011\u5217\u8868"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertLine)
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertButton),
            style: {
              justifyContent: 'center'
            },
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                closeBackShow();
              },
              children: "\u786E\u5B9A"
            })
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(AlertCommon, {
        alertStatus: completelyDelete,
        enableDrag: true,
        alertTitle: '??????',
        changeAlertFlag: eraseTitle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertRecycle),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("p", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertContext),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(IconFont, {
              type: "icon-wenhao",
              style: {
                fontSize: '26px',
                marginRight: '5px'
              }
            }), "\u5220\u9664\u540E\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u8BA4\u5220\u9664\u8BFE\u7A0B\u5417\uFF1F"]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertLine)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().alertButton),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                deleteCourse();
              },
              children: "\u786E\u5B9A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
              onClick: () => {
                eraseTitle(false);
              },
              children: "\u53D6\u6D88"
            })]
          })]
        })
      }), isLoading ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().waiting),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_8___default()), {})
      }) : null, countModule === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().createBox),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().createTitle),
          children: "\u521B\u5EFA\u53EA\u9700\u4E09\u6B65"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("p", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().newProject),
          children: "\u6CA1\u6709\u8BFE\u7A0B\u8BB0\u5F55\uFF0C\u9A6C\u4E0A\u521B\u5EFA\u4E00\u4EFD\u8BFE\u7A0B\u5427\uFF01"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("img", {
          src: "https://e.kaoshiyun.com.cn/cloud/style/images/Not-created-img03.jpg",
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().createBtn),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
            onClick: () => {
              // ?????????????????????
              router.push('/course/create/post/courseMessage');
            },
            children: "\u521B\u5EFA\u8BFE\u7A0B"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("button", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("a", {
              href: "https://www.kaoshiyun.com.cn/help/542c0d.html",
              target: "_blank",
              rel: "noreferrer",
              children: "\u5982\u4F55\u521B\u5EFA\u8BFE\u7A0B ?"
            })
          })]
        })]
      }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(AlertCommon, {
        alertStatus: EmailAlertShow,
        enableDrag: true,
        alertTitle: '??????????????????',
        changeAlertFlag: EmailChangeAlertFlag,
        children: [!QcodeType ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
          className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().Uploads),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_releaseCourse__WEBPACK_IMPORTED_MODULE_12__["default"], {
            qrcodeType: qrcodeType
          })
        }) : null, QcodeType ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_SendCourse__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
            courseName: itemCourseName,
            isEmailer: isEmailer,
            sendErrorEmail: sendErrorEmail,
            isAll: mailIsAll
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().UploadsBottom),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
                type: "primary",
                loading: loadings,
                onClick: enterLoading,
                children: buttonText
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              onClick: () => {
                EmailChangeAlertFlag(false);
              },
              children: "\u5173\u95ED"
            })]
          })]
        }) : null]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(AlertCommon, {
          alertStatus: CurriculumAlertShow,
          enableDrag: true,
          alertTitle: '????????????',
          changeAlertFlag: Curriculum,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_components_corseSetUp__WEBPACK_IMPORTED_MODULE_13__["default"], {
            courseId: courseId,
            saveSetting: saveSetting,
            courseName: itemCourseName
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
            className: (_commonContent_module_scss__WEBPACK_IMPORTED_MODULE_16___default().UploadsBottom),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SettingFilled, {}),
                type: "primary",
                loading: CourseLoadings,
                onClick: setcourseEnterLoading,
                children: buttonText
              })
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_0___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CloseOutlined, {}),
              onClick: () => {
                Curriculum(false);
              },
              children: "\u53D6\u6D88"
            })]
          })]
        })
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommonContent);

/***/ }),

/***/ 1336:
/***/ ((module) => {

// Exports
module.exports = {
	"content": "commonContent_content__VSEJk",
	"Uploads": "commonContent_Uploads__cGaPx",
	"UploadsBottom": "commonContent_UploadsBottom__La34y",
	"courseTitle": "commonContent_courseTitle__9_WwP",
	"titleDes": "commonContent_titleDes__UvEgZ",
	"resBox": "commonContent_resBox__yTyok",
	"resList": "commonContent_resList__TeLko",
	"listCont": "commonContent_listCont__XLJ0V",
	"duration": "commonContent_duration__lNWOg",
	"desList": "commonContent_desList__5ak_J",
	"top": "commonContent_top__ZSHFk",
	"courseName": "commonContent_courseName__01KwV",
	"function": "commonContent_function__RYMm7",
	"statistics": "commonContent_statistics__7p_8b",
	"setCourse": "commonContent_setCourse__q422b",
	"redact": "commonContent_redact__LPUz3",
	"deleteFunction": "commonContent_deleteFunction__4mw35",
	"editContent": "commonContent_editContent__gXYc_",
	"bottom": "commonContent_bottom__Z3y6l",
	"typeDes": "commonContent_typeDes__gfvkn",
	"create": "commonContent_create__1PZyr",
	"paginationBox": "commonContent_paginationBox__4CHbw",
	"waiting": "commonContent_waiting__l3G8m",
	"createBox": "commonContent_createBox__eMWXl",
	"createTitle": "commonContent_createTitle__rbH_T",
	"newProject": "commonContent_newProject__m8Fi9",
	"createBtn": "commonContent_createBtn__gde4M",
	"alertRecycle": "commonContent_alertRecycle__mH_pH",
	"alertContext": "commonContent_alertContext__PKL2n",
	"alertLine": "commonContent_alertLine__4AXYC",
	"alertButton": "commonContent_alertButton__I28OH"
};


/***/ })

};
;