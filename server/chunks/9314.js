exports.id = 9314;
exports.ids = [9314];
exports.modules = {

/***/ 9314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2500);
/* harmony import */ var _examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7996);
/* harmony import */ var _components_exam_examList_addAttributes_addExamStateAttribute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4633);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_UndoOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3149);
/* harmony import */ var _ant_design_icons_lib_icons_UndoOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_UndoOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5152);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2102);
/* harmony import */ var antd_lib_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);












const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/components/exam/examList/examSearch/index.tsx -> " + '@component/TreeType/TreeType']
  }
});
const PopoverCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => __webpack_require__.e(/* import() */ 6780).then(__webpack_require__.bind(__webpack_require__, 6780)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6780)],
    modules: ["../src/components/exam/examList/examSearch/index.tsx -> " + '@component/form/part/popover']
  }
});
const ButtonCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(418), __webpack_require__.e(3672)]).then(__webpack_require__.bind(__webpack_require__, 418)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(418)],
    modules: ["../src/components/exam/examList/examSearch/index.tsx -> " + '@component/form/part/button']
  }
});
const SearchCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_4__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 2329)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2329)],
    modules: ["../src/components/exam/examList/examSearch/index.tsx -> " + '@/components/form/part/search']
  }
});

const ExamSearch = props => {
  const {
    icon,
    examPage,
    setSortIndex,
    setSearchVal,
    isDelete,
    dateState,
    star,
    pageSize,
    page,
    examListDataCount,
    setExamListData,
    setExamListDataCount,
    sendStartTime,
    sendEndTime,
    sendTreeList,
    setExamListPage,
    setIsLoading,
    exercise,
    exerciseListDataCount,
    setExerciseListData,
    setExerciseListDataCount
  } = props; // ????????????????????????

  const {
    0: sortMenu
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    key: 0,
    content: '???????????????(??????)'
  }, {
    key: 1,
    content: '???????????????(??????)'
  }, {
    key: 2,
    content: `???${exercise ? '??????' : '??????'}??????(??????)`
  }, {
    key: 3,
    content: `???${exercise ? '??????' : '??????'}??????(??????)`
  }, {
    key: 4,
    content: `???${exercise ? '??????' : '??????'}??????(??????)`
  }, {
    key: 5,
    content: `???${exercise ? '??????' : '??????'}??????(??????)`
  }]); // ???????????????  ?????????????????? === ???????????????

  const {
    0: sortActiveIndex,
    1: setSortActiveIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(-1); // ?????? + ?????? => ??????

  const {
    0: startTime,
    1: setStartTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: endTime,
    1: setEndTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // ???????????????

  const {
    0: iptVal,
    1: setIptVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: treeList,
    1: setTreeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // ??????treeList

  const {
    0: clearFlag,
    1: setClearFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // ??????
  // ??????????????????????????????

  const getsearchDataList = async params => {
    const {
      star,
      isDelete,
      dateState,
      treeList,
      startTime,
      endTime,
      sort = 0,
      page,
      search
    } = params;
    setIsLoading(true);
    const res = await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_1__/* .getExamList */ .Dm)({
      star,
      // 0???????????????1????????????
      isDelete,
      // ?????????????????????0,1
      dateState,
      // 0???????????????1???????????????2:????????????3?????????
      sort,
      // ???????????????????????????
      count: pageSize,
      // ??????????????????
      page,
      // ?????????
      startTime,
      // ????????????
      endTime,
      // ????????????
      search,
      // ????????????
      treeList // ??????idList

    });
    (0,_components_exam_examList_addAttributes_addExamStateAttribute__WEBPACK_IMPORTED_MODULE_9__/* .addExamStateAttribute */ .X)(res[0]);
    setExamListData([...res[0]]);
    setExamListDataCount(res[1]);
    setIsLoading(false);
  }; // ??????????????????????????????---??????


  const getExercisesearchDataList = async params => {
    const {
      star,
      isDelete,
      dateState,
      treeList,
      startTime,
      endTime,
      sort = 0,
      page,
      search
    } = params;
    setIsLoading(true);
    const res = await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_1__/* .getExerciseList */ .G$)({
      star,
      // 0???????????????1????????????
      isDelete,
      // ?????????????????????0,1
      dateState,
      // 0???????????????1???????????????2:????????????3?????????
      sort,
      // ???????????????????????????
      count: pageSize,
      // ??????????????????
      page,
      // ?????????
      startTime,
      // ????????????
      endTime,
      // ????????????
      search,
      // ????????????
      treeList // ??????idList

    });
    (0,_components_exam_examList_addAttributes_addExamStateAttribute__WEBPACK_IMPORTED_MODULE_9__/* .addExerciseStateAttribute */ .t)(res[0]);
    setExerciseListData([...res[0]]);
    setExerciseListDataCount(res[1]);
    setIsLoading(false);
  }; // ?????? ????????????


  const {
    0: treeVal,
    1: setTreeVal
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(exercise ? ' ????????????' : ' ????????????');

  const currentOption = async (location, id, idList) => {
    setTreeVal(location.slice(location.lastIndexOf('/') + 1));
    setTreeList([...idList]);
    await sendTreeList([...idList]);
    !exercise && getsearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      treeList: idList,
      startTime,
      endTime,
      page: 1
    });
    exercise && getExercisesearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      treeList: idList,
      startTime,
      endTime,
      page: 1
    });
    setExamListPage(1);
  };

  const onChangeStart = async (date, dateString) => {
    // ????????????
    await sendStartTime(dateString);
    setStartTime(dateString);
    !exercise && getsearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      startTime: dateString,
      endTime,
      treeList,
      page: 1
    });
    exercise && getExercisesearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      startTime: dateString,
      endTime,
      treeList,
      page: 1
    });
    setExamListPage(1);
  };

  const onChangeEnd = async (date, dateString) => {
    // ????????????
    await sendEndTime(dateString);
    setEndTime(dateString);
    !exercise && getsearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      endTime: dateString,
      startTime,
      treeList,
      page: 1
    });
    exercise && getExercisesearchDataList({
      isDelete,
      dateState,
      star,
      sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
      search: iptVal,
      endTime: dateString,
      startTime,
      treeList,
      page: 1
    });
    setExamListPage(1);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().examSearchMain),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().examSearchLeft),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
        className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().searchIconPadding),
        children: icon
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("span", {
        children: [examPage, "(", exercise ? exerciseListDataCount : examListDataCount, ")"]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().examSearchRight),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().createTimeDiv),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(PopoverCommon, {
          style: startTime || endTime ? {
            width: '104px',
            color: '#ffffff',
            backgroundColor: '#3a8c83'
          } : {
            width: '104px'
          },
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().after),
            children: "\u521B\u5EFA\u65F6\u95F4"
          }),
          placement: "bottom",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().setTimeDiv),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
              children: "\u5F00\u59CB\u65F6\u95F4\uFF1A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default()), {
              onChange: onChangeStart,
              showTime: true
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().timeBrDiv)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
              children: "\u7ED3\u675F\u65F6\u95F4\uFF1A"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_2___default()), {
              onChange: onChangeEnd,
              showTime: true
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().examTypeDiv),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(PopoverCommon, {
          style: treeVal === ' ????????????' || treeVal === ' ????????????' ? {
            width: '104px',
            padding: '0 10px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis'
          } : {
            width: '104px',
            padding: '0 10px',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
            color: '#ffffff',
            backgroundColor: '#3a8c83'
          },
          title: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
            className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().after),
            children: treeVal
          }),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TreeType, {
            type: exercise ? 'practice' : 'exam',
            getCurrentAndAncestorsTitles: currentOption // ??????????????????
            ,
            openCheckbox: false // ???????????????????????????

          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(SearchCommon, {
          clearFlag: clearFlag,
          onChange: async value => {
            await setSearchVal(value);
            await setIptVal(value); // ???????????????
          },
          onCliCk: () => {
            // ?????????????????????
            !exercise && getsearchDataList({
              isDelete,
              dateState,
              star,
              search: iptVal,
              sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
              treeList,
              startTime,
              endTime,
              page: 1
            });
            exercise && getExercisesearchDataList({
              isDelete,
              dateState,
              star,
              search: iptVal,
              sort: sortActiveIndex !== -1 ? sortActiveIndex : 0,
              treeList,
              startTime,
              endTime,
              page: 1
            });
            setExamListPage(1);
          },
          width: 250,
          placeholder: '?????????????????????'
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(ButtonCommon, {
          style: {
            cursor: 'pointer',
            padding: '0 14px'
          },
          type: 'grey',
          onClick: async () => {
            // ???????????????
            setClearFlag(true);
            setStartTime('');
            setEndTime('');
            setTreeVal(exercise ? ' ????????????' : ' ????????????');
            setIptVal('');
            setSearchVal('');
            setSortIndex(0);
            setSortActiveIndex(-1);
            setTreeList([]);
            !exercise && (await getsearchDataList({
              isDelete,
              dateState,
              star,
              sort: 0,
              search: '',
              treeList: [],
              startTime: '',
              endTime: '',
              page: 1
            }));
            exercise && (await getExercisesearchDataList({
              isDelete,
              dateState,
              star,
              sort: 0,
              search: '',
              treeList: [],
              startTime: '',
              endTime: '',
              page: 1
            }));
            setExamListPage(1);
            setClearFlag(false);
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((_ant_design_icons_lib_icons_UndoOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {
            rotate: 90,
            style: {
              fontWeight: 'bold'
            }
          })
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sortDiv),
        id: "sortDiv",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_7___default()), {
          direction: "vertical",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_7___default()), {
            wrap: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_6___default()), {
              getPopupContainer: () => document.getElementById('sortDiv'),
              overlay: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default()), {
                className: (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().menuCensus),
                children: sortMenu.map(item => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default().Item), {
                    style: sortActiveIndex === item.key && {
                      background: '#e9ebed'
                    },
                    onClick: async () => {
                      // ?????????????????????
                      setSortActiveIndex(item.key);
                      await setSortIndex(item.key);
                      !exercise && getsearchDataList({
                        isDelete,
                        dateState,
                        star,
                        sort: item.key,
                        treeList,
                        startTime,
                        endTime,
                        page: page
                      });
                      exercise && getExercisesearchDataList({
                        isDelete,
                        dateState,
                        star,
                        sort: item.key,
                        treeList,
                        startTime,
                        endTime,
                        page: page
                      });
                    },
                    children: item.content
                  }, item.key);
                })
              }),
              trigger: ['click'],
              placement: "bottomRight",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("p", {
                className: sortActiveIndex !== -1 ? (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().after) + ' ' + (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().sortContentPActive) : (_examSearch_module_scss__WEBPACK_IMPORTED_MODULE_10___default().after),
                onClick: e => e.preventDefault(),
                children: "\u6392\u5E8F"
              })
            })
          })
        })
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamSearch);

/***/ }),

/***/ 2500:
/***/ ((module) => {

// Exports
module.exports = {
	"examSearchMain": "examSearch_examSearchMain__f6DEi",
	"sortContentPActive": "examSearch_sortContentPActive__MH6rZ",
	"menuCensus": "examSearch_menuCensus__nF7TW",
	"examSearchLeft": "examSearch_examSearchLeft__HS_wU",
	"examSearchRight": "examSearch_examSearchRight__sdLX6",
	"examTypeDiv": "examSearch_examTypeDiv__ujjsC",
	"after": "examSearch_after__7dXiv",
	"sortDiv": "examSearch_sortDiv__KTa8c",
	"part_input__IybXY": "examSearch_part_input__IybXY__gj7m8",
	"searchSvg": "examSearch_searchSvg__7goYc",
	"timeBrDiv": "examSearch_timeBrDiv__WKcY6",
	"setTimeDiv": "examSearch_setTimeDiv__jwZ_q",
	"searchIconPadding": "examSearch_searchIconPadding__nutwf"
};


/***/ })

};
;