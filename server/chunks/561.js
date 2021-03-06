"use strict";
exports.id = 561;
exports.ids = [561];
exports.modules = {

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9448);
/* harmony import */ var _textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9042);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);







const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/commonTable/commonTable']
  }
});
const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/TreeType/TreeType']
  }
});
const HeaderTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(6780), __webpack_require__.e(418), __webpack_require__.e(1518)]).then(__webpack_require__.bind(__webpack_require__, 1518)).then(mod => mod.HeaderTable), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1518)],
    modules: ["analyse/textAnalyse/textAnalyseContent2.tsx -> " + '@/components/form/form']
  }
});

const TextAnalyseContent2 = () => {
  const columns = [{
    title: '????????????',
    dataIndex: 'examContent'
  }, {
    title: '??????',
    dataIndex: 'questionTypes'
  }, {
    title: '????????????',
    dataIndex: 'examTypes'
  }, {
    title: '????????????',
    dataIndex: 'difficultyLevel'
  }, {
    title: '????????????',
    dataIndex: 'okanswer'
  }, {
    title: '????????????',
    dataIndex: 'answerNumber'
  }, {
    title: '????????????',
    dataIndex: 'errorNumber'
  }, {
    title: '????????????',
    dataIndex: 'errorProbability'
  }, {
    title: '????????????',
    dataIndex: 'rightNumber'
  }, {
    title: '????????????',
    dataIndex: 'rightProbability'
  }, {
    title: '????????????',
    dataIndex: 'scoreProbability'
  }];
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // ??????????????????

  const {
    0: length,
    1: setlength
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('0'); // ????????????

  const {
    0: current,
    1: setcurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // ????????????

  const {
    0: pageSize,
    1: setpageSize
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(10); // ???????????????????????????

  const {
    0: loading,
    1: setLoding
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true); // ????????????

  let {
    0: timer
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null); // ????????????
  // ????????????

  const {
    0: time,
    1: setTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(); // ????????????

  const {
    0: textDifficulty,
    1: setTextDifficulty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // ???????????????

  const {
    0: searchContent,
    1: setSearchContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // ??????????????????

  const {
    0: typeContent,
    1: setTypeContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // ??????????????????????????????????????????

  const {
    0: treeValue,
    1: setTreeValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
  const {
    0: treeValueLast,
    1: setTreeValueLast
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''); // ?????????????????????

  const runFunc = async (func, object) => {
    setLoding(true);
    await func(object).then(res => {
      console.log(res);

      if (res) {
        setLoding(false);
        setData(res[0]);
        setlength(res[1]);
      }
    }).catch(() => {
      console.log();
    });
  }; // ??????????????????


  const currentNode = (location, id) => {
    setTreeValueLast(location.slice(location.lastIndexOf('/') + 1)); // ??????????????????

    setTreeValue(id);

    if (id === 4) {
      runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
        time,
        textDifficulty,
        textType: typeContent,
        textSearch: searchContent
      });
    } else {
      runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
        textclassify: id,
        time,
        textDifficulty,
        textType: typeContent,
        textSearch: searchContent
      });
    }

    setcurrent(1);
  }; // ???????????????????????????


  const content = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(TreeType, {
    type: 'question',
    getCurrentAndAncestorsTitles: currentNode,
    checkoutDepartment: false
  }); // ??????????????????????????????


  const title = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.UnorderedListOutlined, {}), treeValueLast === '' ? '????????????' : treeValueLast, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__.CaretDownOutlined, {})]
  }); // ??????pagination?????????sorter  ??????????????? ????????????


  const onChangeTable = pagination => {
    setcurrent(pagination.current);
    setpageSize(pagination.pageSize);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
      page: current,
      pageSize
    });
  }, [current, pageSize, setlength]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().ccontent),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().search),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(HeaderTable, {
        PoContent: content,
        PoTitle: title,
        selectKeyData: ['questionTypes', 'difficultyLevel'],
        selectData: [['????????????', '?????????', '?????????', '?????????', '?????????', '?????????'], ['?????????', '????????????', '??????', '??????', '??????']],
        onClick: () => {
          // ???????????????????????????
          setTreeValue(null);
          setTreeValueLast('????????????');
          setTime('');
          setTextDifficulty('');
          setSearchContent('');
          setTypeContent('');
          runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
            page: current,
            pageSize
          });
        },
        onFinish: async values => {
          // ????????????
          console.log('finish??????', values);
          const {
            date,
            search
          } = values;
          clearTimeout(timer); // ??????

          setTime(date);
          setSearchContent(search);
          timer = setTimeout(() => {
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              time,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          }, 500);
        },
        onChange: (value, index) => {
          // ????????????onchange??????
          console.log(value, index);

          if (index === 0) {
            // ??????
            setTypeContent(value);
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              textDifficulty,
              time,
              textType: value,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          } else if (index === 1) {
            // ??????
            setTextDifficulty(value === '?????????' ? '??????' : value === '????????????' ? '??????' : value);
            runFunc(_api_analyse_analyse_absentStat_absentStat__WEBPACK_IMPORTED_MODULE_2__/* .getTestQuestions */ .y5, {
              textType: typeContent,
              time,
              textDifficulty: value === '?????????' ? '??????' : value === '????????????' ? '??????' : value,
              textSearch: searchContent,
              page: current,
              pageSize,
              textclassify: treeValue
            });
          }
        }
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx("div", {
      className: (_textAnalyse_module_scss__WEBPACK_IMPORTED_MODULE_5___default().table),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx(CommonTable, {
        data: data // ??????
        ,
        dataCount: Number(length) // ??????????????????
        ,
        columns: columns // ??????+??????
        ,
        isCheckout: true // ??????????????????
        ,
        loading: loading // ????????????
        ,
        pageSizeOptions: ['5', '10', '20', '100'] // ?????????????????????????????????
        // defaultPageSize={5} // ???????????????????????????
        ,
        rowKeyId: 'id' // ???????????????key??? ????????????id
        ,
        onChangeTable: onChangeTable // ??????,??????,table?????????
        ,
        current: current,
        onSelectChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows);
        } // ??????????????????

      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TextAnalyseContent2);

/***/ })

};
;