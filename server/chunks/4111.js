exports.id = 4111;
exports.ids = [4111];
exports.modules = {

/***/ 4111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8697);
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3200);
/* harmony import */ var _examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_analyse_alalyse_statistical__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(801);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_form_part_headerTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4723);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_form_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1518);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




const MyTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["../src/analyse/statistical/demand.tsx -> " + '@component/commonTable/commonTable']
  }
}); // ??????????????????

const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["../src/analyse/statistical/demand.tsx -> " + '@component/TreeType/TreeType']
  }
}); // ???????????????

 // ????????????








const Bullet = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(9042), __webpack_require__.e(3426)]).then(__webpack_require__.bind(__webpack_require__, 3426)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(3426)],
    modules: ["../src/analyse/statistical/demand.tsx -> " + '../popup']
  }
}); // ????????????

const Popout = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 1162).then(__webpack_require__.bind(__webpack_require__, 1162)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1162)],
    modules: ["../src/analyse/statistical/demand.tsx -> " + '../examination/component/export/popout']
  }
}); // ????????????

const Demand = () => {
  const {
    0: flag,
    1: setFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // ????????????????????????

  const {
    0: id,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // ????????????????????????

  const {
    0: keyword,
    1: setKeyword
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // ???????????????

  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({}); // ???????????????

  const {
    0: page,
    1: setPage
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1); // ??????

  const {
    0: pageSize,
    1: setPageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(5); // ??????

  const {
    0: dataCount,
    1: setDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // ?????????

  const {
    0: list,
    1: setList
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(); // ????????????

  const {
    0: identification,
    1: setIdentification
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // ????????????????????????

  const {
    0: conceal,
    1: setConceal
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // ??????

  const {
    0: boxes,
    1: setBoxes
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // ??????????????????

  const {
    0: classify,
    1: Declassify
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('????????????');
  const {
    0: stageId,
    1: setStageId
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined);
  const {
    0: lauding,
    1: Secluding
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null);

  const getDate = async params => {
    Secluding(true); // ????????????

    await (0,_api_analyse_alalyse_statistical__WEBPACK_IMPORTED_MODULE_3__/* .getAll */ .go)(params).then(res => {
      if (res) {
        setList(res.data[0]);
        setDataCount(res.data[1]);

        if (res.data) {
          Secluding(false);
        }
      }
    }).catch(() => {
      console.log();
    });
  };

  const columns = [{
    id: '1',
    title: '????????????',
    dataIndex: 'practiceStatistical'
  }, {
    id: '2',
    title: '????????????/????????????',
    render: e => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
        children: [e.startTime, "~", e.endTime]
      });
    }
  }, {
    id: '3',
    title: '????????????',
    dataIndex: 'participateWay'
  }, {
    id: '4',
    title: '????????????',
    dataIndex: 'PracticeType'
  }, {
    id: '5',
    title: '????????????',
    dataIndex: 'participantsNumber'
  }, {
    id: '6',
    title: '????????????',
    dataIndex: 'practiceNumber'
  }, {
    id: '7',
    title: '??????????????????',
    dataIndex: 'AveragePracticeDuration'
  }, {
    id: '8',
    title: '?????????',
    dataIndex: 'scoringAverage'
  }, {
    id: '9',
    title: '?????????',
    dataIndex: 'accuracy'
  }, {
    id: '10',
    title: '?????????',
    dataIndex: 'rateWrongTopic'
  }, {
    id: '11',
    title: '??????',
    render: e => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
        className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().lc),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("a", {
          onClick: () => {
            setFlag(!flag);
            setId('1');
            setIdentification(e.id);
          },
          href: '#',
          children: "\u7EC3\u4E60\u7EDF\u8BA1"
        })
      });
    }
  }]; // ????????????????????????

  const Transfer = () => {
    setFlag(!flag);
  };

  const onChangeTable = e => {
    // ?????? ?????? ????????????
    setPage(e.current);
    setPageSize(e.pageSize);
    getDate({
      page: e.current,
      pageSize: e.pageSize
    });
  };

  const matrix = () => {
    // ??????????????????
    setConceal(!conceal);
  };

  const onSelectChange = e => {
    // ???????????????
    setBoxes(e);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getDate({});
  }, []); // ????????????

  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.UnorderedListOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
      children: classify
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CaretDownOutlined, {})]
  }); // ??????????????????


  const currentNode = (location, id) => {
    Declassify(location.split('/')[location.split('/').length - 1]);
    setStageId(id);
    clearTimeout(timer);
    timer = setTimeout(() => {
      getDate({
        keyword,
        time,
        page,
        pageSize,
        classify: id
      });
    }, 500);
  };

  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(TreeType, {
    type: 'practice',
    getCurrentAndAncestorsTitles: currentNode
  });

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().header),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.LineChartOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
          children: "\u7EC3\u4E60\u7EDF\u8BA1"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_0__.Content, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
          className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().tops),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
            className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().aaa),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_component_form_part_headerTable__WEBPACK_IMPORTED_MODULE_5__["default"] // ???????????????
            , {
              PoContent: content,
              PoTitle: title,
              onClick: () => {
                getDate({});
                Declassify('????????????');
              },
              onFinish: async values => {
                const {
                  search,
                  date
                } = values;
                setKeyword(search);
                setTime(values.date);

                if (search || date) {
                  await getDate({
                    time: values.date,
                    keyword: search,
                    page,
                    pageSize,
                    stageId
                  });
                } else {
                  antd_lib_message__WEBPACK_IMPORTED_MODULE_6___default().error('??????????????????');
                }
              }
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
              className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().dao),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_component_form_form__WEBPACK_IMPORTED_MODULE_7__.ButtonCommon, {
                onClick: () => {
                  setConceal(!conceal);
                },
                type: 'none',
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CloudDownloadOutlined, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("span", {
                  className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().cha),
                  children: "\u5BFC\u51FA"
                })]
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
            className: (_examination_examination_module_scss__WEBPACK_IMPORTED_MODULE_9___default().context),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(MyTable, {
              data: list && list // ??????
              ,
              dataCount: dataCount // ??????????????????
              ,
              columns: columns // ??????+??????
              ,
              isCheckout: true // ??????????????????
              ,
              loading: lauding // ????????????
              ,
              onSelectChange: onSelectChange // ??????????????????
              ,
              pageSizeOptions: ['5', '10', '20', '100'] // ?????????????????????????????????
              ,
              onChangeTable: onChangeTable // ??????,??????,table?????????
              ,
              rowKeyId: 'id',
              current: page,
              pageSize: pageSize
            })
          })]
        })
      })]
    }), flag && flag === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Bullet, {
      Transfer: Transfer,
      id: id,
      distinction: '5',
      identification: identification
    }) : null, conceal && conceal === true && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(Popout, {
      id: '4',
      boxes: boxes,
      list: list,
      matrix: matrix
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Demand);

/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "go": () => (/* binding */ getAll),
/* harmony export */   "el": () => (/* binding */ getPracticeData),
/* harmony export */   "YX": () => (/* binding */ getUpdate)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // ??????????????????

function getAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-statistical/getAll',
    method: 'GET',
    params
  });
} // ????????????  ????????????

function getPracticeData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-bounced-practice/getAll',
    method: 'GET',
    params
  });
} // ????????????  ????????????

function getUpdate(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'analyse-bounced-practice/getUpdate',
    method: 'PUT',
    data
  });
}

/***/ }),

/***/ 3200:
/***/ ((module) => {

// Exports
module.exports = {
	"tops": "examination_tops__87Mmh",
	"header": "examination_header___L5MG",
	"www": "examination_www__DOGPL",
	"mailbox": "examination_mailbox__0uxw_",
	"context": "examination_context__vu2Of",
	"lc": "examination_lc__3lpeL",
	"aaa": "examination_aaa__YMqwc",
	"dao": "examination_dao__SViq1",
	"cha": "examination_cha__SAgWs",
	"mark": "examination_mark__wFPZg"
};


/***/ })

};
;