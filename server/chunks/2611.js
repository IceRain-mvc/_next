exports.id = 2611;
exports.ids = [2611];
exports.modules = {

/***/ 2611:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2616);
/* harmony import */ var antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2187);
/* harmony import */ var _courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_course__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2615);
/* harmony import */ var _components_form_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1518);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);






const SearchCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2329)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2329)],
    modules: ["course/courseList/courseSearch/index.tsx -> " + '@/components/form/part/search']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["course/courseList/courseSearch/index.tsx -> " + '@/components/TreeType/TreeType']
  }
});

 // 获取所有课程




const CourseSearch = props => {
  const {
    isRecycle,
    courseDataState,
    isStar,
    page,
    pageSize,
    seCourseDataList,
    setCountModule,
    getCount,
    setIsLoading
  } = props;
  const {
    0: valueFlag,
    1: setValueFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 开始日期

  const {
    0: startTimeVal,
    1: setStartTimeVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 结束日期

  const {
    0: endTimeVal,
    1: setEndTimeVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 排序下标

  const {
    0: sortActiveIndex,
    1: setSortActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(-1); // 搜索所有内容

  const searchAll = async params => {
    setIsLoading(true);
    const res = await (0,_api_course__WEBPACK_IMPORTED_MODULE_5__/* .getCourseList */ .tS)(params);
    seCourseDataList(res[0]);
    setCountModule(res[1]);
    getCount();
    setIsLoading(false);
  }; // 按日期筛选
  // 开始时间


  const changeStart = async (date, dateString) => {
    setStartTimeVal(dateString);
    await searchAll({
      page,
      pageSize,
      startTime: dateString,
      endTimd: endTimeVal,
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState
    });
  }; // 结束时间


  const changeEnd = async (date, dateString) => {
    setEndTimeVal(dateString);
    await searchAll({
      page,
      pageSize,
      startTime: startTimeVal,
      endTime: dateString,
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState
    });
  }; // 树状图


  const {
    0: treeType,
    1: setTreeType
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('课程分类');

  const currentOption = async location => {
    setTreeType(location);
    await searchAll({
      page,
      pageSize,
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState,
      searchTree: location
    });
  }; // 排序


  const {
    0: sortList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    key: 0,
    name: '按创建时间(升序)',
    orderSort: 'ASC',
    orderStyle: 'createAt'
  }, {
    key: 1,
    name: '按创建时间(降序)',
    orderSort: 'DESC',
    orderStyle: 'createAt'
  }, {
    key: 2,
    name: '按课程名称(升序)',
    orderSort: 'ASC',
    orderStyle: 'courseName'
  }, {
    key: 3,
    name: '按课程名称(降序)',
    orderSort: 'DESC',
    orderStyle: 'courseName'
  }, {
    key: 4,
    name: '按课程时间(升序)',
    orderSort: 'ASC',
    orderStyle: 'coursePeriod'
  }, {
    key: 5,
    name: '按课程时间(降序)',
    orderSort: 'DESC',
    orderStyle: 'coursePeriod'
  }]); // 关键字搜索

  const valueSearch = async value => {
    await searchAll({
      page,
      pageSize,
      searchValue: value,
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState
    });
  }; // 刷新搜索内容


  const renovate = async () => {
    await searchAll({
      page,
      pageSize,
      order: 'DESC',
      field: 'createAt',
      searchTree: '',
      valueSearch: '',
      isCourseRecycle: isRecycle,
      isCourseStar: isStar,
      courseState: courseDataState
    });
    setValueFlag(true);
    setValueFlag(false);
    setTreeType('课程分类');
    setStartTimeVal('');
    setEndTimeVal('');
    setSortActiveIndex(-1);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchCourse),
    id: "search",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_6__.PopoverCommon, {
      style: startTimeVal || endTimeVal ? {
        width: '80px',
        color: '#ffffff',
        backgroundColor: '#3a8c83',
        padding: '0 5px'
      } : {
        width: '80px',
        padding: '0 5px'
      },
      title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
        children: ["\u521B\u5EFA\u65F6\u95F4", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownFilled, {})]
      }),
      placement: "bottom",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        style: {
          padding: '10px 6px 20px'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
          children: "\u5F00\u59CB\u65F6\u95F4\uFF1A"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default()), {
          onChange: changeStart,
          showTime: true
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          style: {
            padding: '10px'
          }
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
          children: "\u7ED3\u675F\u65F6\u95F4\uFF1A"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_1___default()), {
          onChange: changeEnd,
          showTime: true
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().searchGroup),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_6__.PopoverCommon, {
        style: treeType === '课程分类' ? {
          width: '80px',
          textAlign: 'center',
          padding: '0 5px',
          marginRight: '8px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        } : {
          width: '80px',
          textAlign: 'center',
          padding: '0 5px',
          marginRight: '8px',
          color: '#ffffff',
          backgroundColor: '#3a8c83',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        },
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: [treeType.slice(treeType.lastIndexOf('/') + 1), " ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownFilled, {})]
        }),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(TreeType, {
          type: 'course',
          getCurrentAndAncestorsTitles: currentOption // 目录接收函数
          ,
          openCheckbox: false // 是否开启复选框模式

        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(SearchCommon, {
        placeholder: '请输入名称查询',
        onCliCk: valueSearch,
        clearFlag: valueFlag
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().refresh),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UndoOutlined, {
          rotate: 90,
          style: {
            fontWeight: 'bold'
          },
          onClick: renovate
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_config_provider__WEBPACK_IMPORTED_MODULE_0___default()), {
      autoInsertSpaceInButton: false,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_components_form_form__WEBPACK_IMPORTED_MODULE_6__.PopoverCommon, {
        style: sortActiveIndex > -1 ? {
          padding: '0 16px',
          color: '#ffffff',
          backgroundColor: '#3a8c83'
        } : {
          padding: '0 16px'
        },
        title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("span", {
          children: ["\u6392\u5E8F", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.CaretDownFilled, {})]
        }),
        placement: "bottomRight",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          children: sortList.map(item => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
              className: sortActiveIndex === item.key ? (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sortList) + ' ' + (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sortListActive) : (_courseSearch_module_scss__WEBPACK_IMPORTED_MODULE_8___default().sortList),
              onClick: async () => {
                // 排序的点击事件
                setSortActiveIndex(item.key);
                await searchAll({
                  page,
                  pageSize,
                  order: item.orderSort,
                  field: item.orderStyle,
                  isCourseRecycle: isRecycle,
                  isCourseStar: isStar,
                  courseState: courseDataState
                });
              },
              children: item.name
            }, item.key);
          })
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CourseSearch);

/***/ }),

/***/ 2187:
/***/ ((module) => {

// Exports
module.exports = {
	"searchCourse": "courseSearch_searchCourse__mY0Dr",
	"searchGroup": "courseSearch_searchGroup__N61CN",
	"refresh": "courseSearch_refresh__WWhrm",
	"sortList": "courseSearch_sortList__a9BnT",
	"sortListActive": "courseSearch_sortListActive___1gNl"
};


/***/ })

};
;