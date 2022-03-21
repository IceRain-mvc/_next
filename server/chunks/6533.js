exports.id = 6533;
exports.ids = [6533];
exports.modules = {

/***/ 8355:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tI": () => (/* binding */ getQuestions),
/* harmony export */   "KW": () => (/* binding */ addChapterPratice),
/* harmony export */   "XR": () => (/* binding */ addEachPratice),
/* harmony export */   "pc": () => (/* binding */ deleteThisChapter),
/* harmony export */   "fo": () => (/* binding */ getEachChapter),
/* harmony export */   "ek": () => (/* binding */ amendChapter),
/* harmony export */   "q": () => (/* binding */ deleteEachChapter),
/* harmony export */   "ZP": () => (/* binding */ UpdateEachChapter),
/* harmony export */   "i$": () => (/* binding */ getStrategyQuestionLists),
/* harmony export */   "ws": () => (/* binding */ delChapterQuestion),
/* harmony export */   "bK": () => (/* binding */ infoChapterStrategy),
/* harmony export */   "qQ": () => (/* binding */ bathDels),
/* harmony export */   "X2": () => (/* binding */ saveQuestionChaStrategy),
/* harmony export */   "R4": () => (/* binding */ moveToTop)
/* harmony export */ });
/* unused harmony exports getAllEachChapter, getQuestion, saveQuestionChaBig, getStrategyQuestionList, getQuest */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function getQuestions(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/paper-exam/chapter/' + id,
    method: 'GET'
  });
} // 获取所有的章节练习

function getAllEachChapter() {
  return httpProvider.request({
    url: '/exercise-big-chapter/getAll',
    method: 'GET'
  });
} // 练习 - 添加章节练习 章节练习

function addChapterPratice(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-big-chapter/addCgapter',
    method: 'POST',
    data
  });
} // 添加每一小章节

function addEachPratice(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter',
    method: 'POST',
    data
  });
} // 删除大题

function deleteThisChapter(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-big-chapter/' + id,
    method: 'DELETE'
  });
} // 获取大题策略下面的

function getEachChapter(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-big-chapter/' + id,
    method: 'GET'
  });
} // 获取总的题目数量

function getQuestion(params) {
  return httpProvider.request({
    url: 'exercise-big-chapter/allSum',
    method: 'GET',
    params
  });
} // 保存大题标题

function amendChapter(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-big-chapter/save-title',
    method: 'PUT',
    data
  });
} // 删除子章节

function deleteEachChapter(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/' + id,
    method: 'DELETE'
  });
} // 修改小章节名称

function UpdateEachChapter(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/change',
    method: 'PUT',
    data
  });
} // 通过章节id获取试题

function getStrategyQuestionLists(id) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/' + id,
    method: 'GET'
  });
} // 删除章节练习试题列表试题

function delChapterQuestion(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/del-smoke-ques',
    method: 'PUT',
    data
  });
} // 模板导入试题到章节练习

function infoChapterStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/info',
    method: 'PUT',
    data
  });
} // 批量删除章节练习试题列表试题

function bathDels(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'exercise-each-chapte/bath-del',
    method: 'PUT',
    data
  });
} // 保存试题到到大题中

function saveQuestionChaBig(data) {
  return httpProvider.request({
    url: '/exercise-big-chapter/save-ques',
    method: 'PUT',
    data
  });
} // 将试题存入每章的章节练习

function saveQuestionChaStrategy(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-each-chapter/save-ques',
    method: 'PUT',
    data
  });
} // 通过策略id获取试题

function getStrategyQuestionList(id) {
  return httpProvider.request({
    url: '/exercise-each-chapter/' + id,
    method: 'GET'
  });
} // 大题上下移动

function moveToTop(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: '/exercise-big-chapter/move-to-top',
    method: 'PUT',
    data
  });
} // 获取题的数量

function getQuest(params) {
  return httpProvider.request({
    url: '/exercise-big-chapter/allquestion',
    method: 'GET',
    params
  });
}

/***/ }),

/***/ 6533:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ addTitle)
});

// EXTERNAL MODULE: external "antd/lib/spin"
var spin_ = __webpack_require__(261);
var spin_default = /*#__PURE__*/__webpack_require__.n(spin_);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/components/exam/fixedPaper/add.module.scss
var add_module = __webpack_require__(2312);
var add_module_default = /*#__PURE__*/__webpack_require__.n(add_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "antd/lib/config-provider"
var config_provider_ = __webpack_require__(2616);
var config_provider_default = /*#__PURE__*/__webpack_require__.n(config_provider_);
// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__(1788);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);
// EXTERNAL MODULE: external "antd/lib/tooltip"
var tooltip_ = __webpack_require__(9348);
var tooltip_default = /*#__PURE__*/__webpack_require__.n(tooltip_);
// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__(7374);
var space_default = /*#__PURE__*/__webpack_require__.n(space_);
// EXTERNAL MODULE: external "antd/lib/input-number"
var input_number_ = __webpack_require__(4503);
var input_number_default = /*#__PURE__*/__webpack_require__.n(input_number_);
// EXTERNAL MODULE: external "antd/lib/popover"
var popover_ = __webpack_require__(5893);
var popover_default = /*#__PURE__*/__webpack_require__.n(popover_);
// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(274);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);
// EXTERNAL MODULE: external "antd/lib/input"
var input_ = __webpack_require__(675);
var input_default = /*#__PURE__*/__webpack_require__.n(input_);
// EXTERNAL MODULE: ./src/components/exam/fixedPaper/question.module.scss
var question_module = __webpack_require__(7545);
var question_module_default = /*#__PURE__*/__webpack_require__.n(question_module);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/exam/ExamAlert/index.tsx
var ExamAlert = __webpack_require__(9067);
// EXTERNAL MODULE: ./src/api/exam/paper/index.ts
var paper = __webpack_require__(4455);
// EXTERNAL MODULE: ./src/components/exam/getQuestionList/index.tsx
var getQuestionList = __webpack_require__(5242);
// EXTERNAL MODULE: ./src/components/TreeType/alertWarning/alertWarning.tsx
var alertWarning = __webpack_require__(9719);
// EXTERNAL MODULE: ./src/components/testBank/addExam/addExam.tsx + 5 modules
var addExam = __webpack_require__(8886);
// EXTERNAL MODULE: ./src/components/testBank/batchAdd/batchAdd.tsx
var batchAdd = __webpack_require__(5900);
// EXTERNAL MODULE: ./src/components/testBank/importTemplate/importTemplate.tsx
var importTemplate = __webpack_require__(1239);
// EXTERNAL MODULE: external "antd/lib/table"
var table_ = __webpack_require__(4285);
var table_default = /*#__PURE__*/__webpack_require__.n(table_);
// EXTERNAL MODULE: external "react-dnd"
var external_react_dnd_ = __webpack_require__(7964);
// EXTERNAL MODULE: external "react-dnd-html5-backend"
var external_react_dnd_html5_backend_ = __webpack_require__(359);
// EXTERNAL MODULE: external "immutability-helper"
var external_immutability_helper_ = __webpack_require__(6333);
var external_immutability_helper_default = /*#__PURE__*/__webpack_require__.n(external_immutability_helper_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/exam/portable/index.tsx

const _excluded = ["index", "moveRow", "className", "style"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }




 // import { testBank } from '../../../../types/code';


const type = 'DraggableBodyRow';

const DraggableBodyRow = _ref => {
  let {
    index,
    moveRow,
    className,
    style
  } = _ref,
      restProps = _objectWithoutProperties(_ref, _excluded);

  const ref = (0,external_react_.useRef)();
  const [{
    isOver,
    dropClassName
  }, drop] = (0,external_react_dnd_.useDrop)({
    accept: type,
    collect: monitor => {
      // @ts-ignore
      const {
        index: dragIndex
      } = monitor.getItem() || {};

      if (dragIndex === index) {
        return {};
      }

      return {
        isOver: monitor.isOver(),
        dropClassName: dragIndex < index ? ' drop-over-downward' : ' drop-over-upward'
      };
    },
    drop: item => {
      // @ts-ignore
      moveRow(item.index, index);
    }
  });
  const [, drag] = (0,external_react_dnd_.useDrag)({
    type,
    item: {
      index
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });
  drop(drag(ref));
  return /*#__PURE__*/jsx_runtime_.jsx("tr", _objectSpread({
    ref: ref,
    className: `${className}${isOver ? dropClassName : ''}`,
    style: _objectSpread({
      cursor: 'move'
    }, style)
  }, restProps));
};

const DragSortingTable = props => {
  const {
    columns,
    data,
    setData
  } = props;
  const components = {
    body: {
      row: DraggableBodyRow
    }
  };
  const moveRow = (0,external_react_.useCallback)((dragIndex, hoverIndex) => {
    const dragRow = data[dragIndex];
    setData(external_immutability_helper_default()(data, {
      $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]]
    }));
  }, [data, setData]);
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_dnd_.DndProvider, {
    backend: external_react_dnd_html5_backend_.HTML5Backend,
    children: /*#__PURE__*/jsx_runtime_.jsx((table_default()), {
      columns: columns,
      rowKey: 'id',
      dataSource: data,
      bordered: true,
      pagination: false,
      components: components,
      onRow: (record, index) => ({
        index,
        moveRow,
        onClick: () => {
          console.log();
        }
      })
    })
  });
};

/* harmony default export */ const portable = (DragSortingTable);
;// CONCATENATED MODULE: ./src/components/exam/fixedPaper/question.tsx
























const ResourceQuestions = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 965).then(__webpack_require__.bind(__webpack_require__, 965)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(965)],
    modules: ["../src/components/exam/fixedPaper/question.tsx -> " + '@/components/testBank/resourceQustions/resourceQustions']
  }
});
const Editor = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2698).then(__webpack_require__.bind(__webpack_require__, 2698)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2698)],
    modules: ["../src/components/exam/fixedPaper/question.tsx -> " + './dynaRender']
  }
});

const Question = props => {
  const {
    num,
    id,
    getQuestion,
    paperId,
    sortId,
    description,
    currentId,
    setCurrentId,
    setVisibleFlag,
    visibleFlag,
    scoreFlag,
    setScoreFlag,
    descriptionMD,
    getPaperMessage,
    quesSort,
    existQuestion
  } = props; // 大题详情弹框

  const {
    0: detailFlag,
    1: updDetailFlag
  } = (0,external_react_.useState)(false); // 大题详情

  const {
    0: details,
    1: setDetails
  } = (0,external_react_.useState)('');
  const {
    0: mdDetails,
    1: setMdDetails
  } = (0,external_react_.useState)(''); // 小题列表

  const {
    0: test,
    1: setTest
  } = (0,external_react_.useState)([]); // 批量修改分数

  const {
    0: scores,
    1: setScores
  } = (0,external_react_.useState)(null); // 修该大题标题

  const {
    0: questionTit,
    1: setQuestionTit
  } = (0,external_react_.useState)(''); // // 修该大题标题弹框
  // const [visibleFlag, setVisibleFlag] = useState(false);
  // 显示导入试题库组件

  const {
    0: showQuestionList,
    1: setShowQuestionList
  } = (0,external_react_.useState)(false); // 当前大题分数

  const {
    0: bigQuesScore,
    1: setBigQuesScore
  } = (0,external_react_.useState)(0); // 大题描述信息

  const {
    0: des,
    1: setDes
  } = (0,external_react_.useState)(description);
  const {
    0: desMd,
    1: setDesMD
  } = (0,external_react_.useState)(descriptionMD); // 删除弹框

  const {
    0: deleteWarn,
    1: setDeleteWarn
  } = (0,external_react_.useState)(false); // 试题弹窗

  const {
    0: questionAlert,
    1: setQuestionAlert
  } = (0,external_react_.useState)(false); // 控制弹窗

  const {
    0: questionNum,
    1: setQuestionNum
  } = (0,external_react_.useState)(0); // 删除小题提示

  const {
    0: smallQuestion,
    1: setSmallQuestion
  } = (0,external_react_.useState)(false); // 当前小题

  const {
    0: smallId,
    1: setSmallId
  } = (0,external_react_.useState)(0); // 单个小题

  const {
    0: smallTest,
    1: setSmallTest
  } = (0,external_react_.useState)(null); // 修改小题弹框

  const {
    0: smallTestFlag,
    1: setTestFlag
  } = (0,external_react_.useState)(false); // Spin

  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false); // 获取大题内所有小题

  const getQue = (0,external_react_.useCallback)(() => {
    (0,paper/* getQues */.LI)(id).then(res => {
      setTest([...res.testBanks]);
      setBigQuesScore(res.allScore);
    });
  }, [id]); // 生命周期函数

  (0,external_react_.useEffect)(() => {
    getQue();
    setQuestionTit(num);
    setDetails(description);
    setMdDetails(descriptionMD);
  }, [getQue, num, description, descriptionMD]); // 批量修改分数

  const pop = {
    width: 320
  };

  const contents = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((input_default()), {
      onChange: e => {
        setScores(e.target.value);
      },
      onClick: e => {
        e.stopPropagation();
      }
    }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
      type: "primary",
      onClick: async () => {
        if (scores === null) {
          setScoreFlag(false);
        } else {
          await (0,paper/* updScores */.KX)({
            quesId: id,
            score: scores
          });
          await getQue();
          await getQuestion();
          setScoreFlag(false);
        }
      },
      style: {
        margin: '20px 100px'
      },
      children: "\u786E\u8BA4\u4FEE\u6539"
    })]
  }); // 删除小题


  const deleteSmallQuestion = async () => {
    await (0,paper/* deleteQuestion */.Km)({
      id,
      testId: smallId
    });
    await getQue();
    await getQuestion();
  }; // 表格去处空白


  const customizeRenderEmpty = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  }; // 大题信息描述


  const changeValue = value => {
    setDes(value);
  };

  const mdChangeValue = value => {
    setDesMD(value);
  }; // 保存大题描述


  const saveDes = async () => {
    await setDetails(des);
    await setMdDetails(desMd);
  }; // 保存大题描述


  const save = async () => {
    await (0,paper/* saveDescription */.zl)({
      id,
      description: des,
      descriptionMD: desMd
    });
  }; // 删除大题;


  const delQuestion = async () => {
    setLoading(true);
    const res = await (0,paper/* deleteThisQuestion */.u8)(id);

    if (res) {
      setLoading(false);
    }

    getQuestion();
  }; // 修改题号


  const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((input_default()), {
      placeholder: questionTit,
      onChange: e => {
        setQuestionTit(e.target.value);
      },
      onClick: e => {
        e.stopPropagation();
      }
    }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
      type: "primary",
      onClick: async () => {
        await (0,paper/* saveBigQuestionTitle */["in"])({
          id,
          title: questionTit
        });
        await getQue();
        await setVisibleFlag(false);
      },
      style: {
        margin: '20px 100px'
      },
      children: "\u786E\u8BA4\u4FEE\u6539"
    })]
  }); // 下拉框


  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((menu_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        await (0,paper/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 0
        });
        await getQuestion();
      },
      children: "\u4E0A\u79FB"
    }, 1), /*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        await (0,paper/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 1
        });
        await getQuestion();
      },
      children: "\u4E0B\u79FB"
    }, 2)]
  }); // 表格


  const columns = [{
    title: '序号',
    dataIndex: 'myanswer'
  }, {
    title: '试题类型',
    dataIndex: 'questionTypes'
  }, {
    title: '试题内容',
    dataIndex: 'examContent'
  }, {
    title: '标准答案',
    dataIndex: 'okanswer'
  }, {
    title: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
      children: ["\u5206\u6570", /*#__PURE__*/jsx_runtime_.jsx((popover_default()), {
        placement: "top",
        content: contents,
        trigger: "click",
        overlayStyle: pop,
        visible: currentId === id && scoreFlag,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
          onClick: e => {
            e.stopPropagation();

            if (scoreFlag && currentId !== id) {
              setScoreFlag(true);
            } else {
              const flag = !scoreFlag;
              setScoreFlag(flag);
            }

            setCurrentId(id);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {}), "\u6279\u91CF\u4FEE\u6539\u5206\u6570"]
        })
      })]
    }),
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
      size: "middle",
      children: /*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
        value: record.gradeNum,
        maxLength: 15,
        size: 'small',
        min: 0,
        style: {
          width: 70
        },
        onChange: value => {
          record.gradeNum = value;
          setTest([...test]);
        },
        onBlur: async e => {
          await (0,paper/* updScore */.Mm)({
            testId: record.id,
            score: e.target.value,
            quesId: id
          });
          await getQue();
          await getQuestion();
        }
      })
    }),
    dataIndex: 'score'
  }, {
    title: '操作',
    render: (text, record) => /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
      size: "middle",
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.FormOutlined, {
        onClick: async () => {
          setSmallId(record.id);
          const res = await (0,paper/* getTest */.yD)(record.id);
          setSmallTest(res);
          setTestFlag(true);
        }
      }), /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {
        className: (question_module_default()).deleteQuestion,
        onClick: async () => {
          setSmallId(record.id);
          setSmallQuestion(true);
        }
      })]
    })
  }];

  const backData = async value => {
    let idList = [];

    if (Array.isArray(value)) {
      idList = value.map(item => {
        return item.id;
      });
    } else {
      idList = await [value.id];
    } // 发送请求，与大题设置关联


    await (0,paper/* infoPageQuestion */.Di)({
      id,
      info: idList
    });
  };

  const saveAndAddFun = () => {
    setQuestionAlert(false);
    setTimeout(() => {
      setQuestionAlert(true);
    });
  };

  const saveAddFun = () => {
    setTestFlag(false);
    setTimeout(() => {
      setTestFlag(true);
    });
  }; // 修改试卷分数方法


  const changePaperScore = async value => {
    await (0,paper/* updScore */.Mm)({
      testId: smallId,
      score: value.gradeNum,
      quesId: id
    });
    await getQue();
    await getQuestion();
  };

  const updatePaperData = async () => {
    await getQue();
    await getQuestion();
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((spin_default()), {
      spinning: loading,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (question_module_default()).question,
        onMouseLeave: () => {
          // 按顺序设置id集合
          const ids = test.map(el => {
            return el.id;
          });
          const sortI = quesSort.findIndex(el => {
            return el.id === id;
          });

          if (sortI !== -1) {
            quesSort[sortI] = {
              id,
              idList: ids
            };
          } else {
            quesSort.push({
              id,
              idList: ids
            });
          }

          getPaperMessage(quesSort);
        },
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (question_module_default()).top,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (question_module_default()).left,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((popover_default()), {
              content: content,
              defaultVisible: false,
              trigger: 'click',
              visible: currentId === id && visibleFlag,
              arrowPointAtCenter: true,
              overlayStyle: pop,
              placement: "bottomLeft",
              children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                onClick: e => {
                  e.stopPropagation();

                  if (visibleFlag && currentId !== id) {
                    setVisibleFlag(true);
                  } else {
                    const flag = !visibleFlag;
                    setVisibleFlag(flag);
                  }

                  setCurrentId(id);
                },
                children: questionTit
              }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {
                  onClick: e => {
                    e.stopPropagation();

                    if (visibleFlag && currentId !== id) {
                      setVisibleFlag(true);
                    } else {
                      const flag = !visibleFlag;
                      setVisibleFlag(flag);
                    }

                    setCurrentId(id);
                  }
                })
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx((tooltip_default()), {
              placement: "bottom",
              title: '点击编辑描述大题信息',
              children: /*#__PURE__*/jsx_runtime_.jsx("span", {
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.FileTextOutlined, {
                  onClick: () => {
                    updDetailFlag(true);
                  }
                })
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              children: ["(", /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: test.length
              }), "\u9053\u8BD5\u9898\uFF0C\u5171", /*#__PURE__*/jsx_runtime_.jsx("i", {
                children: bigQuesScore
              }), "\u5206)"]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (question_module_default()).right,
            children: [/*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              className: (question_module_default()).testBank,
              onClick: () => {
                setShowQuestionList(true);
              },
              children: "\u4ECE\u8BD5\u9898\u5E93\u9009\u62E9"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              onClick: () => {
                setQuestionNum(0);
                setQuestionAlert(true);
              },
              children: "\u65B0\u589E\u8BD5\u9898"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              onClick: () => {
                setQuestionNum(1);
                setQuestionAlert(true);
              },
              children: "\u6279\u91CF\u65B0\u589E"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              onClick: () => {
                setQuestionNum(2);
                setQuestionAlert(true);
              },
              children: "\u6A21\u677F\u5BFC\u5165"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              className: (question_module_default())["delete"],
              onClick: () => {
                setDeleteWarn(true);
              },
              children: "\u5220\u9664\u5927\u9898"
            }), /*#__PURE__*/jsx_runtime_.jsx((dropdown_default()), {
              overlay: menu,
              trigger: ['click'],
              children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
                className: (question_module_default()).select,
                children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {})
              })
            })]
          })]
        }), details && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (question_module_default()).details,
          children: ["\u3010", /*#__PURE__*/jsx_runtime_.jsx("a", {
            onClick: () => {
              updDetailFlag(true);
            },
            children: "\u7F16\u8F91\u5927\u9898\u63CF\u8FF0"
          }), "\u3011", details]
        }), /*#__PURE__*/jsx_runtime_.jsx((config_provider_default()), {
          renderEmpty: customizeRenderEmpty,
          children: /*#__PURE__*/jsx_runtime_.jsx(portable, {
            columns: columns,
            data: test,
            setData: setTest
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(ResourceQuestions, {
        dialogOpt: '新增试题',
        alertStatus: questionAlert,
        changeAlertFlag: setQuestionAlert,
        children: questionNum === 0 ? /*#__PURE__*/jsx_runtime_.jsx(addExam["default"], {
          Judge: {},
          changeAlertFlag: setQuestionAlert,
          pageTestBank: updatePaperData,
          DataChange: updatePaperData,
          ReturnAddExamData: backData,
          saveAndAddFun: saveAndAddFun,
          defultNumber: 1,
          page: 5
        }) : questionNum === 1 ? /*#__PURE__*/jsx_runtime_.jsx(batchAdd["default"], {
          changeAlertFlag: setQuestionAlert,
          pageTestBank: getQue,
          defultNumber: 1,
          page: 5,
          getData: backData
        }) : /*#__PURE__*/jsx_runtime_.jsx(importTemplate["default"], {
          changeAlertFlag: setQuestionAlert,
          pageTestBank: getQue,
          defultNumber: 1,
          page: 5,
          backData: backData
        })
      }), detailFlag && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExamAlert/* default */.Z, {
        title: '大题描述',
        setExamAlertFlag: updDetailFlag,
        type: 'description',
        save: save,
        saveDes: saveDes,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (question_module_default()).fileTitle,
          children: /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: "\u5927\u9898\u63CF\u8FF0(\u53EF\u7528\u4E8E\u4FDD\u5B58\u9605\u8BFB\u7406\u89E3\u9898\u3001\u8BBA\u8FF0\u9898\u3001\u7EC4\u5408\u9898\u7B49\u5404\u79CD\u590D\u6742\u9898\u578B\u7684\u9898\u5E72\u5185\u5BB9)"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(Editor, {
          data: mdDetails,
          changeValue: changeValue,
          mdChangeValue: mdChangeValue
        })]
      }), showQuestionList && /*#__PURE__*/jsx_runtime_.jsx(getQuestionList/* default */.Z, {
        existingQuestions: existQuestion,
        nowBigExistQues: test.map(el => el.id),
        setExamAlertFlag: setShowQuestionList,
        bigQuestionId: id,
        getQue: getQue,
        getQuestion: getQuestion
      }), deleteWarn && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确认删除试卷大题吗？',
        setShowWarnAlert: setDeleteWarn,
        isDelete: true,
        executeFun: delQuestion
      }), smallQuestion && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确认删除该小题吗？',
        setShowWarnAlert: setSmallQuestion,
        isDelete: true,
        executeFun: deleteSmallQuestion
      }), /*#__PURE__*/jsx_runtime_.jsx(ResourceQuestions, {
        dialogOpt: '修改试题',
        alertStatus: smallTestFlag,
        changeAlertFlag: setTestFlag,
        children: smallTestFlag && /*#__PURE__*/jsx_runtime_.jsx(addExam["default"], {
          Judge: smallTest,
          changeAlertFlag: setTestFlag,
          pageTestBank: getQue,
          DataChange: getQue,
          ReturnAddExamData: changePaperScore,
          saveAndAddFun: saveAddFun,
          defultNumber: 1,
          page: 5
        })
      })]
    })
  });
};

/* harmony default export */ const question = (Question);
// EXTERNAL MODULE: ./src/components/exam/fixedPaper/smoke.module.scss
var smoke_module = __webpack_require__(4625);
var smoke_module_default = /*#__PURE__*/__webpack_require__.n(smoke_module);
// EXTERNAL MODULE: ./src/components/exam/smokeManager/index.tsx
var smokeManager = __webpack_require__(2741);
;// CONCATENATED MODULE: ./src/components/exam/fixedPaper/strategy.tsx










const StrategyRow = props => {
  const {
    item,
    getPaperBigQuestions,
    setShowAlert,
    setStrategyId,
    getQuestion,
    setDelStrategyAlert,
    setSId
  } = props;
  const {
    0: noDifficulty,
    1: setNoDifficulty
  } = (0,external_react_.useState)(0);
  const {
    0: easy,
    1: setEasy
  } = (0,external_react_.useState)(0);
  const {
    0: medium,
    1: setMedium
  } = (0,external_react_.useState)(0);
  const {
    0: difficult,
    1: setDifficult
  } = (0,external_react_.useState)(0);
  const {
    0: everyScore,
    1: setEveryScore
  } = (0,external_react_.useState)(0);
  const {
    0: count,
    1: setCount
  } = (0,external_react_.useState)(0);
  (0,external_react_.useEffect)(() => {
    setNoDifficulty(item.noDifficulty);
    setEasy(item.easy);
    setMedium(item.medium);
    setDifficult(item.difficult);
    setEveryScore(item.everyScore);
    setCount(item.count);
  }, [item.count, item.difficult, item.easy, item.everyScore, item.medium, item.noDifficulty]); // 不限难度题数量值改变事件

  async function noDifficultyOnChange(value) {
    if (value !== null) {
      setNoDifficulty(value);
      setCount(value + easy + medium + difficult);
    }
  } // 容易题数量改变事件


  async function easyOnChange(value) {
    if (value !== null) {
      setEasy(value);
      setCount(noDifficulty + value + medium + difficult);
    }
  } // 简单题数量改变事件


  async function mediumOnChange(value) {
    if (value !== null) {
      setMedium(value);
      setCount(noDifficulty + easy + value + difficult);
    }
  } // 困难题数量改变事件


  async function difficultOnChange(value) {
    if (value !== null) {
      setDifficult(value);
      setCount(noDifficulty + easy + medium + value);
    }
  } // 每题分数值改变事件


  async function everyScoreOnChange(value) {
    if (value !== null) {
      setEveryScore(value);
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
      children: item.sortIndex
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: item.allCount ? /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
        style: {
          background: '#415d74',
          color: 'white'
        },
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DatabaseOutlined, {}),
        onClick: () => {
          setShowAlert(true);
          setStrategyId(item.id);
        },
        children: ["\u62BD\u9898\u7BA1\u7406\uFF08", item.allCount, "\uFF09"]
      }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
        style: {
          background: 'red',
          color: 'white'
        },
        icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DatabaseOutlined, {}),
        onClick: () => {
          setShowAlert(true);
          setStrategyId(item.id);
        },
        children: ["\u62BD\u9898\u7BA1\u7406\uFF08", item.allCount, "\uFF09"]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: item.allNoDifficulty,
          defaultValue: item.noDifficulty,
          onChange: noDifficultyOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            await (0,paper/* updateSmokeStrategy */.F4)({
              id: item.id,
              noDifficulty,
              easy,
              medium,
              difficult,
              everyScore,
              count
            });
            await getPaperBigQuestions();
            await getQuestion();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (smoke_module_default()).count,
          children: item.allNoDifficulty
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: item.allEasy,
          defaultValue: item.easy,
          onChange: easyOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            await (0,paper/* updateSmokeStrategy */.F4)({
              id: item.id,
              noDifficulty,
              easy,
              medium,
              difficult,
              everyScore,
              count
            });
            await getPaperBigQuestions();
            await getQuestion();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (smoke_module_default()).count,
          children: item.allEasy
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: item.allMedium,
          defaultValue: item.medium,
          onChange: mediumOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            await (0,paper/* updateSmokeStrategy */.F4)({
              id: item.id,
              noDifficulty,
              easy,
              medium,
              difficult,
              everyScore,
              count
            });
            await getPaperBigQuestions();
            await getQuestion();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (smoke_module_default()).count,
          children: item.allMedium
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: item.allDifficult,
          defaultValue: item.difficult,
          onChange: difficultOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            await (0,paper/* updateSmokeStrategy */.F4)({
              id: item.id,
              noDifficulty,
              easy,
              medium,
              difficult,
              everyScore,
              count
            });
            await getPaperBigQuestions();
            await getQuestion();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (smoke_module_default()).count,
          children: item.allDifficult
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: count
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
        size: "small",
        children: /*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          defaultValue: item.everyScore,
          onChange: everyScoreOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            await (0,paper/* updateSmokeStrategy */.F4)({
              id: item.id,
              noDifficulty,
              easy,
              medium,
              difficult,
              everyScore,
              count
            });
            await getPaperBigQuestions();
            await getQuestion();
          }
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
        size: "middle",
        className: (smoke_module_default()).deleteEveryQues,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: async () => {
            // 删除策略
            setSId(item.id);
            setDelStrategyAlert(true);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {})
        })
      })
    })]
  });
};

/* harmony default export */ const strategy = (StrategyRow);
;// CONCATENATED MODULE: ./src/components/exam/fixedPaper/smokeQuestion.tsx














 // @ts-ignore





const smokeQuestion_Editor = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2698).then(__webpack_require__.bind(__webpack_require__, 2698)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2698)],
    modules: ["../src/components/exam/fixedPaper/smokeQuestion.tsx -> " + './dynaRender']
  }
});

const SmokeQuestion = props => {
  const {
    num,
    id,
    getQuestion,
    description,
    sortId,
    paperId,
    bigQuestionCount,
    bigQuestionScore,
    currentId,
    setCurrentId,
    setVisibleFlag,
    visibleFlag,
    descriptionMD,
    setExistStrategy,
    existStrategy
  } = props;
  const {
    0: showInfoList,
    1: setShowInfoList
  } = (0,external_react_.useState)(false);
  const {
    0: title,
    1: setTitle
  } = (0,external_react_.useState)('');
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]); // 大题描述信息弹框

  const {
    0: detaFlagm,
    1: updDetaFlag
  } = (0,external_react_.useState)(false); // 大题描述信息

  const {
    0: details,
    1: setDetails
  } = (0,external_react_.useState)('');
  const {
    0: mdDetails,
    1: setMdDetails
  } = (0,external_react_.useState)('');
  const {
    0: des,
    1: setDes
  } = (0,external_react_.useState)(description);
  const {
    0: desMd,
    1: setDesMD
  } = (0,external_react_.useState)(descriptionMD);
  const {
    0: delAlert,
    1: setDelAlert
  } = (0,external_react_.useState)(false); // Spin

  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);
  const {
    0: waiting,
    1: setWaiting
  } = (0,external_react_.useState)(false); // 删除策略弹窗

  const {
    0: delStrategyAlert,
    1: setDelStrategyAlert
  } = (0,external_react_.useState)(false); // 删除策略id

  const {
    0: sId,
    1: setSId
  } = (0,external_react_.useState)(0); // 获取大题策略

  const getStrategy = (0,external_react_.useCallback)(async () => {
    (0,paper/* getSmokeStrategy */.xr)(id).then(async res => {
      setData([...res.strategyList]); // 通过策略获取试题
      // 需要清空一下

      const middleData = [];

      for (let i = 0; i < res.strategyList.length; i++) {
        await (0,paper/* getStrategyQuestionList */.fn)(res.strategyList[i].id).then(r => {
          r.data.forEach(item => {
            if (!middleData.includes(item.id)) {
              middleData.push(item.id);
            }
          });
        });
      }

      setExistStrategy([...middleData]);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]); // 策略id

  const {
    0: strategyId,
    1: setStrategyId
  } = (0,external_react_.useState)(0); // // 修改题号
  // const [visibleFlag, setVisibleFlag] = useState(false);

  (0,external_react_.useEffect)(() => {
    // 通过大题id获取策略信息
    getStrategy();
    setTitle(num);
    setDetails(description);
    setMdDetails(descriptionMD);
  }, [getStrategy, num, description, descriptionMD]); // 大题信息描述

  const saveDes = async () => {
    await setDetails(des);
    await setMdDetails(desMd);
  };

  const changeValue = value => {
    setDes(value);
  };

  const mdChangeValue = value => {
    setDesMD(value);
  }; // 保存大题描述


  const save = async () => {
    const res = await (0,paper/* saveDescription */.zl)({
      id,
      description: des,
      descriptionMD: desMd
    });
    console.log(res);
  }; // 添加抽屉策略


  const addQuestion = () => {
    setWaiting(true); // 添加一条抽题策略

    setTimeout(async () => {
      const res = await (0,paper/* addOneStrategy */.Up)({
        id
      });
      await getStrategy();

      if (res) {
        setWaiting(false);
      }
    }, 300);
  }; // 删除大题


  const delQuestion = async () => {
    setLoading(true);
    const res = await (0,paper/* deleteThisQuestion */.u8)(id);

    if (res) {
      setLoading(false);
    }

    getQuestion();
  }; // 删除策略


  const delThisStrategy = async () => {
    setLoading(true);
    await (0,paper/* deleteStrategy */.Kz)(sId);
    await getStrategy();
    await getQuestion();
    setLoading(false);
  }; // 修改题号


  const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((input_default()), {
      placeholder: num,
      onChange: e => {
        setTitle(e.target.value);
      },
      onClick: e => {
        e.stopPropagation();
      }
    }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
      type: "primary",
      onClick: async () => {
        await (0,paper/* saveBigQuestionTitle */["in"])({
          id,
          title
        });
        await getStrategy();
        setVisibleFlag(false);
      },
      style: {
        margin: '20px 100px'
      },
      children: "\u786E\u8BA4\u4FEE\u6539"
    })]
  });

  const pop = {
    width: 320
  }; // 表格样式

  const customizeRenderEmpty = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  }; // 下拉框


  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((menu_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        setLoading(true);
        (0,paper/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 0
        }).then(res => {
          if (res) {
            setLoading(false);
            getQuestion();
          }
        });
      },
      children: "\u4E0A\u79FB"
    }, 1), /*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: () => {
        setLoading(true);
        (0,paper/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 1
        }).then(res => {
          if (res) {
            setLoading(false);
            getQuestion();
          }
        });
      },
      children: "\u4E0B\u79FB"
    }, 2)]
  });

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (smoke_module_default()).question,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((spin_default()), {
      spinning: loading,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (smoke_module_default()).top,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (smoke_module_default()).left,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((popover_default()), {
            content: content,
            defaultVisible: false,
            trigger: 'click',
            visible: visibleFlag && currentId === id,
            arrowPointAtCenter: true,
            overlayStyle: pop,
            placement: "bottomLeft",
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              onClick: e => {
                e.stopPropagation();

                if (visibleFlag && currentId !== id) {
                  setVisibleFlag(true);
                } else {
                  const flag = !visibleFlag;
                  setVisibleFlag(flag);
                }

                setCurrentId(id);
              },
              children: title
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {
                onClick: e => {
                  e.stopPropagation();

                  if (visibleFlag && currentId !== id) {
                    setVisibleFlag(true);
                  } else {
                    const flag = !visibleFlag;
                    setVisibleFlag(flag);
                  }

                  setCurrentId(id);
                }
              })
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((tooltip_default()), {
            placement: "bottom",
            title: '点击编辑描述大题信息',
            children: /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.FileTextOutlined, {
                onClick: () => {
                  updDetaFlag(true);
                }
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            children: ["(", /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: bigQuestionCount
            }), "\u9053\u8BD5\u9898\uFF0C\u5171", /*#__PURE__*/jsx_runtime_.jsx("i", {
              children: bigQuestionScore
            }), "\u5206)"]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (smoke_module_default()).right,
          children: [/*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            onClick: () => {
              setDelAlert(true);
            },
            children: "\u5220\u9664\u5927\u9898"
          }), /*#__PURE__*/jsx_runtime_.jsx((dropdown_default()), {
            overlay: menu,
            trigger: ['click'],
            children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              className: (smoke_module_default()).select,
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {})
            })
          })]
        })]
      }), details && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (smoke_module_default()).details,
        children: ["\u3010", /*#__PURE__*/jsx_runtime_.jsx("a", {
          onClick: () => {
            updDetaFlag(true);
          },
          children: "\u7F16\u8F91\u7B54\u9898\u63CF\u8FF0"
        }), "\u3011", details]
      }), /*#__PURE__*/jsx_runtime_.jsx((config_provider_default()), {
        renderEmpty: customizeRenderEmpty,
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (smoke_module_default()).randomTable,
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
            className: (smoke_module_default()).table,
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("thead", {
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  rowSpan: 2,
                  children: "\u5E8F\u53F7"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  rowSpan: 2,
                  width: 40 + 'px',
                  children: "\u62BD\u9898\u5BB9\u5668"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  colSpan: 4,
                  width: 720 + 'px',
                  children: "\u62BD\u9898\u6570\u91CF\u8BBE\u7F6E"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  rowSpan: 2,
                  width: 80 + 'px',
                  children: "\u62BD\u9898\u6570"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  rowSpan: 2,
                  width: 180 + 'px',
                  children: "\u6BCF\u9898\u5206\u6570"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  rowSpan: 2,
                  width: 50 + 'px',
                  children: "\u64CD\u4F5C"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                  width: 180 + 'px',
                  children: "\u4E0D\u9650\u96BE\u5EA6"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  width: 180 + 'px',
                  children: "\u5BB9\u6613"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  width: 180 + 'px',
                  children: "\u7B80\u5355"
                }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                  width: 180 + 'px',
                  children: "\u56F0\u96BE"
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
              children: data.map(el => {
                return /*#__PURE__*/jsx_runtime_.jsx(strategy, {
                  item: el,
                  getQuestion: getQuestion,
                  getPaperBigQuestions: getStrategy,
                  setShowAlert: setShowInfoList,
                  setStrategyId: setStrategyId,
                  setDelStrategyAlert: setDelStrategyAlert,
                  setSId: setSId
                }, el.id);
              })
            })]
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (smoke_module_default()).foot,
        children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
          icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
          onClick: addQuestion,
          loading: waiting,
          children: "\u6DFB\u52A0\u62BD\u9898\u7B56\u7565"
        })
      }), detaFlagm ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExamAlert/* default */.Z, {
        title: '大题描述',
        setExamAlertFlag: updDetaFlag,
        save: save,
        saveDes: saveDes,
        type: 'description',
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (smoke_module_default()).fileTitle,
          children: /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: "\u5927\u9898\u63CF\u8FF0(\u53EF\u7528\u4E8E\u4FDD\u5B58\u9605\u8BFB\u7406\u89E3\u9898\u3001\u8BBA\u8FF0\u9898\u3001\u7EC4\u5408\u9898\u7B49\u5404\u79CD\u590D\u6742\u9898\u578B\u7684\u9898\u5E72\u5185\u5BB9)"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(smokeQuestion_Editor, {
          data: mdDetails,
          changeValue: changeValue,
          mdChangeValue: mdChangeValue
        })]
      }) : null, showInfoList ? /*#__PURE__*/jsx_runtime_.jsx(smokeManager["default"], {
        setExamAlert: setShowInfoList,
        existStrategy: existStrategy,
        strategyId: strategyId,
        getStrategy: getStrategy,
        getQuestion: getQuestion,
        condition: true
      }) : null, delAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确定删除该大题吗？',
        setShowWarnAlert: setDelAlert,
        isDelete: true,
        executeFun: delQuestion
      }), delStrategyAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确定删除该试题吗？',
        setShowWarnAlert: setDelStrategyAlert,
        isDelete: true,
        executeFun: delThisStrategy
      })]
    })
  });
};

/* harmony default export */ const smokeQuestion = (SmokeQuestion);
// EXTERNAL MODULE: ./src/components/exam/randomStrategy/RandomStrategy.module.scss
var RandomStrategy_module = __webpack_require__(4603);
var RandomStrategy_module_default = /*#__PURE__*/__webpack_require__.n(RandomStrategy_module);
// EXTERNAL MODULE: external "antd/lib/radio"
var radio_ = __webpack_require__(7386);
var radio_default = /*#__PURE__*/__webpack_require__.n(radio_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: ./src/components/exam/RandomTest/RandomTest.module.scss
var RandomTest_module = __webpack_require__(2819);
var RandomTest_module_default = /*#__PURE__*/__webpack_require__.n(RandomTest_module);
// EXTERNAL MODULE: ./src/components/commonTable/commonTable.tsx
var commonTable = __webpack_require__(4703);
// EXTERNAL MODULE: ./src/utils/exportQuestion.ts
var exportQuestion = __webpack_require__(5692);
;// CONCATENATED MODULE: ./src/components/exam/RandomTest/index.tsx


















const RandomTest_ResourceQuestions = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 965).then(__webpack_require__.bind(__webpack_require__, 965)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(965)],
    modules: ["../src/components/exam/RandomTest/index.tsx -> " + '@/components/testBank/resourceQustions/resourceQustions']
  }
});

const RandomTest = props => {
  const {
    setExamAlert,
    type,
    classify,
    getPaperBigQuestions,
    setResetStrategy
  } = props;
  const {
    0: quesCount,
    1: setQuesCount
  } = (0,external_react_.useState)(0);
  const {
    0: questionList,
    1: setQuestionList
  } = (0,external_react_.useState)([]);
  const {
    0: delAlert,
    1: setDelAlert
  } = (0,external_react_.useState)(false);
  const {
    0: selectQues,
    1: setSelectQues
  } = (0,external_react_.useState)([]); // 导出试题提示弹窗

  const {
    0: exportAlert,
    1: setExportAlert
  } = (0,external_react_.useState)(false);
  const {
    0: currentId,
    1: setCurrentId
  } = (0,external_react_.useState)(0);
  const {
    0: delGroupAlert,
    1: setDelGroupAlert
  } = (0,external_react_.useState)(false);
  const {
    0: nowIndex,
    1: setNowIndex
  } = (0,external_react_.useState)(1);
  const {
    0: columns
  } = (0,external_react_.useState)([{
    title: '试题内容',
    dataIndex: 'examContent',
    key: 'examContent'
  }, {
    title: '题型',
    dataIndex: 'questionTypes',
    key: 'questionTypes'
  }, {
    title: '试题分类',
    dataIndex: 'examTypes',
    key: 'examTypes'
  }, {
    title: '试题难度',
    dataIndex: 'difficultyLevel',
    key: 'difficultyLevel'
  }, {
    title: '标准答案',
    dataIndex: 'okanswer',
    key: 'okanswer'
  }, {
    title: '分数',
    dataIndex: 'gradeNum',
    key: 'score'
  }, {
    title: '创建时间',
    dataIndex: 'createAt',
    key: 'createAt',
    render: (text, record) => {
      return /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
        size: "small",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: new Date(record.createAt).toLocaleString()
        })
      });
    }
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
      size: "small",
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {
        className: (RandomTest_module_default()).delIcon,
        onClick: () => {
          setCurrentId(record.id);
          setDelAlert(true);
        }
      })
    })
  }]); // 试题弹窗

  const {
    0: questionAlert,
    1: setQuestionAlert
  } = (0,external_react_.useState)(false); // 控制弹窗

  const {
    0: questionNum,
    1: setQuestionNum
  } = (0,external_react_.useState)(0);
  const strategyList = (0,external_react_.useCallback)(async () => {
    const res = await (0,paper/* getQuestionList */.eb)({
      type,
      classify
    });
    setQuestionList(res);
    setQuesCount(res.length);
  }, [classify, type]);
  (0,external_react_.useEffect)(() => {
    strategyList().then();
  }, [strategyList]);

  const mySelect = (target, row) => {
    setSelectQues([...row]);
  };

  const myChange = pagination => {
    setNowIndex(pagination.current);
  }; // 删除试题


  const delThisTest = async () => {
    const res = await (0,paper/* deleteStoreTest */._v)(currentId);

    if (res && res.code === 1) {
      await strategyList();
      await getPaperBigQuestions();
    }

    if (res && res.code === -1) {
      message_default().error(res.msg);
    }
  }; // 批量删除试题


  const delThoseTest = async () => {
    const selId = selectQues.map(item => {
      return item.id;
    });
    const res = await (0,paper/* deleteStoreTestGroup */.g$)({
      ids: selId
    });

    if (res && res.code === 1) {
      await strategyList();
      await getPaperBigQuestions();
    }

    if (res && res.code === -1) {
      await strategyList();

      message_default().error(res.msg);
    }
  };

  const saveAndAddFun = () => {
    setQuestionAlert(false);
    setTimeout(() => {
      setQuestionAlert(true);
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ExamAlert/* default */.Z, {
      title: '随机抽题管理',
      setExamAlertFlag: setExamAlert,
      setResetStrategy: setResetStrategy,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (RandomTest_module_default()).examHead,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: (RandomTest_module_default()).quesCount,
          children: ["\u5171 ", /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (RandomTest_module_default()).count,
            children: quesCount
          }), " \u9053\u8BD5\u9898"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: (RandomTest_module_default()).examBtns,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((radio_default()).Group, {
            value: 'large',
            children: [/*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
              onClick: () => {
                setQuestionNum(0);
                setQuestionAlert(true);
              },
              children: "\u65B0\u589E\u8BD5\u9898"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusCircleOutlined, {}),
              onClick: () => {
                setQuestionNum(1);
                setQuestionAlert(true);
              },
              children: "\u6279\u91CF\u65B0\u589E"
            }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
              icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.UploadOutlined, {}),
              onClick: () => {
                setQuestionNum(2);
                setQuestionAlert(true);
              },
              children: "\u6A21\u677F\u5BFC\u5165"
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            id: (RandomTest_module_default()).downBtn,
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownloadOutlined, {}),
            onClick: () => {
              (0,exportQuestion/* default */.Z)(selectQues, setExportAlert);
            },
            children: "\u5BFC\u51FA"
          }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            type: "primary",
            danger: true,
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {}),
            onClick: () => {
              if (selectQues.length === 0) {
                message_default().error('请选择删除的试题').then();
              } else {
                setDelGroupAlert(true);
              }
            },
            children: "\u6279\u91CF\u5220\u9664"
          })]
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (RandomTest_module_default()).examTable,
        children: /*#__PURE__*/jsx_runtime_.jsx(commonTable["default"], {
          data: questionList // 数据
          ,
          dataCount: questionList.length // 数据的总条数
          ,
          columns: columns // 标题+内容
          ,
          isCheckout: true // 是否使用多选
          ,
          loading: false // 加载动画
          ,
          onSelectChange: mySelect // 多选框的回调
          ,
          pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
          ,
          pageSize: 10,
          rowKeyId: 'id' // 配置每行的key值 设置唯一id
          ,
          onChangeTable: myChange // 排序,分页,table的回调
          ,
          current: nowIndex
        })
      }), delAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确定删除该试题吗？',
        setShowWarnAlert: setDelAlert,
        isDelete: true,
        executeFun: delThisTest
      }), delGroupAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: '确定删除这些试题吗？',
        setShowWarnAlert: setDelGroupAlert,
        isDelete: true,
        executeFun: delThoseTest
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(RandomTest_ResourceQuestions, {
      dialogOpt: '新增试题',
      alertStatus: questionAlert,
      changeAlertFlag: setQuestionAlert,
      children: questionNum === 0 ? /*#__PURE__*/jsx_runtime_.jsx(addExam["default"], {
        Judge: {},
        changeAlertFlag: setQuestionAlert,
        pageTestBank: strategyList,
        DataChange: strategyList,
        saveAndAddFun: saveAndAddFun,
        defaultNumber: 1,
        page: 5
      }) : questionNum === 1 ? /*#__PURE__*/jsx_runtime_.jsx(batchAdd["default"], {
        changeAlertFlag: setQuestionAlert,
        pageTestBank: strategyList,
        defultNumber: 1,
        page: 5
      }) : /*#__PURE__*/jsx_runtime_.jsx(importTemplate["default"], {
        changeAlertFlag: setQuestionAlert,
        pageTestBank: strategyList,
        defultNumber: 1,
        page: 5
      })
    }), exportAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
      warning: '请选择导出试题!',
      setShowWarnAlert: setExportAlert
    })]
  });
};

/* harmony default export */ const exam_RandomTest = (RandomTest);
// EXTERNAL MODULE: ./src/components/exam/randomPaperQuestion/RandomPaperQuestion.module.scss
var RandomPaperQuestion_module = __webpack_require__(86);
var RandomPaperQuestion_module_default = /*#__PURE__*/__webpack_require__.n(RandomPaperQuestion_module);
// EXTERNAL MODULE: external "antd/lib/select"
var select_ = __webpack_require__(3526);
var select_default = /*#__PURE__*/__webpack_require__.n(select_);
// EXTERNAL MODULE: ./src/components/TreeType/TreeType.tsx + 3 modules
var TreeType = __webpack_require__(5061);
;// CONCATENATED MODULE: ./src/components/exam/randomRow/index.tsx










const {
  Option
} = (select_default());

const RandomRow = props => {
  const {
    getPaperBigQuestions,
    item,
    setShowAlert,
    getQuestionType,
    setShowWarnAlert,
    getRandomStrategyId,
    strategyTree,
    setStrategyTree,
    setStrategyIds,
    strategyIds,
    setLoading,
    setResetStrategy,
    resetStrategy
  } = props;
  const {
    0: classify,
    1: setClassify
  } = (0,external_react_.useState)([]); // 试题分类

  const {
    0: noDifficulty,
    1: setNoDifficulty
  } = (0,external_react_.useState)(0);
  const {
    0: easy,
    1: setEasy
  } = (0,external_react_.useState)(0);
  const {
    0: medium,
    1: setMedium
  } = (0,external_react_.useState)(0);
  const {
    0: difficult,
    1: setDifficult
  } = (0,external_react_.useState)(0);
  const {
    0: allQuestionCount,
    1: setAllQuestionCount
  } = (0,external_react_.useState)(item.questionAllMarks);
  const {
    0: treeTitle,
    1: setTreeTitle
  } = (0,external_react_.useState)('试题分类');

  const changeErrorValue = async () => {
    setAllQuestionCount(item.noDifficulty + item.easy + item.medium + item.difficult);
    item.questionAllMarks = item.noDifficulty + item.easy + item.medium + item.difficult; // 发送请求，修改策略

    await (0,paper/* updateStrategy */.kh)(item);
    await getPaperBigQuestions();
  };

  async function handleChange(value) {
    const res = await (0,paper/* getQuestionTypes */.iv)({
      type: value,
      classify
    });
    setNoDifficulty(res.noDifficulty);
    setEasy(res.easy);
    setMedium(res.medium);
    setDifficult(res.difficulty);
    item.questionClassify = value; // 发送请求，修改策略

    await (0,paper/* updateStrategy */.kh)(item); // 判断选矿中值的大小

    if (item.noDifficulty > res.noDifficulty) {
      item.noDifficulty = res.noDifficulty;
      await changeErrorValue();
    }

    if (item.easy > res.easy) {
      item.easy = res.easy;
      console.log(item);
      await changeErrorValue();
    }

    if (item.medium > res.medium) {
      item.medium = res.medium;
      await changeErrorValue();
    }

    if (item.difficult > res.difficulty) {
      item.difficult = res.difficulty;
      await changeErrorValue();
    }
  } // 获取数据


  const getCountList = (0,external_react_.useCallback)(async () => {
    const res = await (0,paper/* getQuestionTypes */.iv)({
      type: item.questionClassify,
      classify
    });
    setNoDifficulty(res.noDifficulty);
    setEasy(res.easy);
    setMedium(res.medium);
    setDifficult(res.difficulty);
  }, [classify, item.questionClassify]);
  (0,external_react_.useEffect)(() => {
    // 请求试题表，拿到不同类型的题的数量，不同的题有不同的难度
    getCountList().then();

    if (resetStrategy) {
      getCountList().then();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [getCountList, resetStrategy]); // 不限难度题数量值改变事件

  async function noDifficultyOnChange(value) {
    if (value !== null) {
      item.noDifficulty = value;
      setAllQuestionCount(value + item.easy + item.medium + item.difficult);
    }
  } // 容易题数量改变事件


  async function easyOnChange(value) {
    if (value !== null) {
      item.easy = value;
      setAllQuestionCount(item.noDifficulty + value + item.medium + item.difficult);
    }
  } // 简单题数量改变事件


  async function mediumOnChange(value) {
    if (value !== null) {
      item.medium = value;
      setAllQuestionCount(item.noDifficulty + item.easy + value + item.difficult);
    }
  } // 困难题数量改变事件


  async function difficultOnChange(value) {
    if (value !== null) {
      item.difficult = value;
      setAllQuestionCount(item.noDifficulty + item.easy + item.medium + value);
    }
  } // 每题分数值改变事件


  async function everyScoreOnChange(value) {
    if (value !== null) {
      item.everyScore = value;
    }
  } // 树形分类


  async function currentNode(title, id, idList) {
    setTreeTitle(title.split('/')[title.split('/').length - 1]);
    item.questionType = id;
    setClassify(idList);
    const res = await (0,paper/* getQuestionTypes */.iv)({
      type: item.questionClassify,
      classify: idList
    });
    setNoDifficulty(res.noDifficulty);
    setEasy(res.easy);
    setMedium(res.medium);
    setDifficult(res.difficulty); // 发送请求，修改策略

    await (0,paper/* updateStrategy */.kh)(item); // 判断选矿中值的大小

    if (item.noDifficulty > res.noDifficulty) {
      item.noDifficulty = res.noDifficulty;
      await changeErrorValue();
    }

    if (item.easy > res.easy) {
      item.easy = res.easy;
      await changeErrorValue();
    }

    if (item.medium > res.medium) {
      item.medium = res.medium;
      await changeErrorValue();
    }

    if (item.difficult > res.difficulty) {
      item.difficult = res.difficulty;
      await changeErrorValue();
    }
  }

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
      children: item.sortIndex
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((select_default()), {
        defaultValue: item.questionClassify,
        onChange: handleChange,
        children: [/*#__PURE__*/jsx_runtime_.jsx(Option, {
          value: '单选题',
          children: "\u5355\u9009\u9898"
        }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
          value: '多选题',
          children: "\u591A\u9009\u9898"
        }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
          value: '判断题',
          children: "\u5224\u65AD\u9898"
        }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
          value: '填空题',
          children: "\u586B\u7A7A\u9898"
        }), /*#__PURE__*/jsx_runtime_.jsx(Option, {
          value: '问答题',
          children: "\u95EE\u7B54\u9898"
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: (RandomPaperQuestion_module_default()).quesTreeType,
        onClick: () => {
          if (strategyTree && item.id !== strategyIds) {
            setStrategyTree(true);
          } else {
            setStrategyTree(!strategyTree);
          }

          setStrategyIds(item.id);
        },
        children: [treeTitle, /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
          className: (RandomPaperQuestion_module_default()).quesTreeBtn,
          onClick: e => {
            e.stopPropagation();
            getQuestionType(item.questionClassify, classify);
            setShowAlert(true);
            setResetStrategy(false);
            setStrategyTree(false);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (RandomPaperQuestion_module_default()).quesLookIcon,
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.UnorderedListOutlined, {})
          }), "\u67E5\u770B\u8BD5\u9898"]
        }), item.id === strategyIds && strategyTree ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (RandomPaperQuestion_module_default()).tree,
          children: /*#__PURE__*/jsx_runtime_.jsx(TreeType["default"], {
            type: 'question',
            getCurrentAndAncestorsTitles: currentNode
          })
        }) : null]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: noDifficulty,
          value: item.noDifficulty,
          onChange: noDifficultyOnChange,
          onBlur: async () => {
            item.questionAllMarks = allQuestionCount; // 发送请求，修改策略

            setLoading(true);
            await (0,paper/* updateStrategy */.kh)(item);
            setLoading(false);
            await getPaperBigQuestions();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).count,
          children: noDifficulty
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: easy,
          value: item.easy,
          onChange: easyOnChange,
          onBlur: async () => {
            item.questionAllMarks = allQuestionCount; // 发送请求，修改策略

            setLoading(true);
            await (0,paper/* updateStrategy */.kh)(item);
            setLoading(false);
            await getPaperBigQuestions();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).count,
          children: easy
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: medium,
          value: item.medium,
          onChange: mediumOnChange,
          onBlur: async () => {
            item.questionAllMarks = allQuestionCount; // 发送请求，修改策略

            setLoading(true);
            await (0,paper/* updateStrategy */.kh)(item);
            setLoading(false);
            await getPaperBigQuestions();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).count,
          children: medium
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((space_default()), {
        size: "small",
        children: [/*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          max: difficult,
          value: item.difficult,
          onChange: difficultOnChange,
          onBlur: async () => {
            item.questionAllMarks = allQuestionCount; // 发送请求，修改策略

            setLoading(true);
            await (0,paper/* updateStrategy */.kh)(item);
            setLoading(false);
            await getPaperBigQuestions();
          }
        }), "/", /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).count,
          children: difficult
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: allQuestionCount
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
        size: "small",
        children: /*#__PURE__*/jsx_runtime_.jsx((input_number_default()), {
          min: 0,
          defaultValue: item.everyScore,
          onChange: everyScoreOnChange,
          onBlur: async () => {
            // 发送请求，修改策略
            setLoading(true);
            await (0,paper/* updateStrategy */.kh)(item);
            setLoading(false);
            await getPaperBigQuestions();
          }
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
      children: /*#__PURE__*/jsx_runtime_.jsx((space_default()), {
        size: "middle",
        className: (RandomPaperQuestion_module_default()).deleteEveryQues,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          onClick: async () => {
            setShowWarnAlert(true);
            getRandomStrategyId(item.id);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {})
        })
      })
    })]
  });
};

/* harmony default export */ const randomRow = (RandomRow);
;// CONCATENATED MODULE: ./src/components/exam/BigQuestion/index.tsx















const BigQuestion_Editor = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2698).then(__webpack_require__.bind(__webpack_require__, 2698)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2698)],
    modules: ["../src/components/exam/BigQuestion/index.tsx -> " + '@/components/exam/fixedPaper/dynaRender']
  }
});

const BigQuestion = props => {
  const {
    item,
    getPaperBigQuestions,
    setShowAlert,
    getQuestionType,
    paperId,
    setShowWarnAlert,
    getRandomStrategyId,
    setShowBigWarnAlert,
    getRandomBigId,
    strategyTree,
    setStrategyTree,
    setShowPopover,
    showPopover,
    setCurrentId,
    currentId,
    setStrategyIds,
    strategyIds,
    setLoading,
    setResetStrategy,
    resetStrategy
  } = props;
  const {
    0: bigTitle,
    1: setBigTitle
  } = (0,external_react_.useState)(item.title);
  const {
    0: changeTitle,
    1: setChangeTitle
  } = (0,external_react_.useState)(item.title); // 大题详情弹框

  const {
    0: detaFlagm,
    1: updDetaFlag
  } = (0,external_react_.useState)(false); // 大题描述信息

  const {
    0: des,
    1: setDes
  } = (0,external_react_.useState)(item.description);
  const {
    0: mdDetails,
    1: setMdDetails
  } = (0,external_react_.useState)(item.descriptionMD);
  const {
    0: strategyLoading,
    1: setStrategyLoading
  } = (0,external_react_.useState)(false); // 大题信息描述

  const changeValue = value => {
    setDes(value);
  };

  const mdChangeValue = value => {
    setMdDetails(value);
  }; // 保存大题描述


  const save = async () => {
    await (0,paper/* saveDescription */.zl)({
      id: item.id,
      description: des,
      descriptionMD: mdDetails
    });
  };

  const content = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    onClick: e => {
      e.stopPropagation();
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomPaperQuestion_module_default()).changeTitleInput,
      children: /*#__PURE__*/jsx_runtime_.jsx((input_default()), {
        placeholder: "\u8BF7\u8F93\u5165\u5927\u9898\u540D\u79F0",
        value: changeTitle,
        onChange: e => {
          setChangeTitle(e.target.value);
        }
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomPaperQuestion_module_default()).changeTitleBtn,
      children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
        onClick: async () => {
          setBigTitle(changeTitle);
          await (0,paper/* saveBigQuestionTitle */["in"])({
            id: item.id,
            title: changeTitle
          });
          setShowPopover(false);
        },
        children: "\u786E\u8BA4\u4FEE\u6539"
      })
    })]
  }); // 下拉框


  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((menu_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        // 向上移动
        setLoading(true);
        await (0,paper/* moveToTop */.R4)({
          paperId: paperId,
          sortId: item.sortId,
          type: 0
        });
        await getPaperBigQuestions();
        setLoading(false);
      },
      children: "\u4E0A\u79FB"
    }, 1), /*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        setLoading(true); // 向下移动

        await (0,paper/* moveToTop */.R4)({
          paperId: paperId,
          sortId: item.sortId,
          type: 1
        });
        await getPaperBigQuestions();
        setLoading(false);
      },
      children: "\u4E0B\u79FB"
    }, 2)]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (RandomPaperQuestion_module_default()).randomContent,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (RandomPaperQuestion_module_default()).contTitle,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((popover_default()), {
        placement: "bottomLeft",
        content: content,
        visible: currentId === item.id && showPopover,
        trigger: "click",
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).bigQues,
          onClick: e => {
            e.stopPropagation();

            if (showPopover && currentId !== item.id) {
              setShowPopover(true);
            } else {
              setShowPopover(!showPopover);
            }

            setCurrentId(item.id);
          },
          children: bigTitle
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).bigEditor,
          onClick: e => {
            e.stopPropagation();

            if (showPopover && currentId !== item.id) {
              setShowPopover(true);
            } else {
              setShowPopover(!showPopover);
            }

            setCurrentId(item.id);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.HighlightOutlined, {})
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx((tooltip_default()), {
        placement: "bottom",
        title: '点击编辑描述大题信息',
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).bigEditorDes,
          onClick: () => {
            updDetaFlag(true);
          },
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.FileTextOutlined, {})
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: (RandomPaperQuestion_module_default()).bigQuestionAndScore,
        children: ["\uFF08", /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: (RandomPaperQuestion_module_default()).bigQuesCount,
          children: item.count
        }), "\u9053\u8BD5\u9898\uFF0C", /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: (RandomPaperQuestion_module_default()).bigScore,
          children: item.allScore
        }), "\u5206\uFF09"]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: (RandomPaperQuestion_module_default()).deleteBigQues,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
          onClick: async () => {
            getRandomBigId(item.id);
            setShowBigWarnAlert(true);
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (RandomPaperQuestion_module_default()).iconDelete,
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {})
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: "\u5220\u9664\u5927\u9898"
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx((dropdown_default()), {
          overlay: menu,
          trigger: ['click'],
          children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {})
          })
        })]
      })]
    }), des && /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (RandomPaperQuestion_module_default()).details,
      children: ["\u3010", /*#__PURE__*/jsx_runtime_.jsx("a", {
        onClick: () => {
          updDetaFlag(true);
        },
        children: "\u7F16\u8F91\u5927\u9898\u63CF\u8FF0"
      }), "\u3011", des]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomPaperQuestion_module_default()).randomTable,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
        className: (RandomPaperQuestion_module_default()).table,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("thead", {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 40 + 'px',
              children: "\u5E8F\u53F7"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 150 + 'px',
              children: "\u8BD5\u9898\u7C7B\u578B"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 700 + 'px',
              children: "\u8BD5\u9898\u5206\u7C7B"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              colSpan: 4,
              width: 720 + 'px',
              children: "\u62BD\u9898\u6570\u91CF\u8BBE\u7F6E"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 80 + 'px',
              children: "\u8BD5\u9898\u603B\u6570"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 180 + 'px',
              children: "\u6BCF\u9898\u5206\u6570"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              rowSpan: 2,
              width: 50 + 'px',
              children: "\u64CD\u4F5C"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
              width: 180 + 'px',
              children: "\u4E0D\u9650\u96BE\u5EA6"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              width: 180 + 'px',
              children: "\u5BB9\u6613"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              width: 180 + 'px',
              children: "\u4E2D\u7B49"
            }), /*#__PURE__*/jsx_runtime_.jsx("td", {
              width: 180 + 'px',
              children: "\u56F0\u96BE"
            })]
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
          children: item.questionSelectionStrategys.map(el => {
            return /*#__PURE__*/jsx_runtime_.jsx(randomRow, {
              getPaperBigQuestions: getPaperBigQuestions,
              item: el,
              setShowAlert: setShowAlert,
              getQuestionType: getQuestionType,
              setShowWarnAlert: setShowWarnAlert,
              getRandomStrategyId: getRandomStrategyId,
              strategyTree: strategyTree,
              setStrategyTree: setStrategyTree,
              setStrategyIds: setStrategyIds,
              strategyIds: strategyIds,
              setLoading: setLoading,
              setResetStrategy: setResetStrategy,
              resetStrategy: resetStrategy
            }, el.id);
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomPaperQuestion_module_default()).addRandomQuestion,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
        className: (RandomPaperQuestion_module_default()).addBtn,
        loading: strategyLoading,
        onClick: async () => {
          setStrategyLoading(true); // 添加试题策略

          await (0,paper/* addRandomSelectionStrategy */.HC)(item.id);
          await getPaperBigQuestions();
          setStrategyLoading(false);
        },
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomPaperQuestion_module_default()).addIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {})
        }), "\u6DFB\u52A0\u968F\u673A\u7B56\u7565"]
      })
    }), detaFlagm && /*#__PURE__*/(0,jsx_runtime_.jsxs)(ExamAlert/* default */.Z, {
      title: '大题描述',
      setExamAlertFlag: updDetaFlag,
      type: 'description',
      save: save,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (RandomPaperQuestion_module_default()).fileTitle,
        children: /*#__PURE__*/jsx_runtime_.jsx("b", {
          children: "\u5927\u9898\u63CF\u8FF0(\u53EF\u7528\u4E8E\u4FDD\u5B58\u9605\u8BFB\u7406\u89E3\u9898\u3001\u8BBA\u8FF0\u9898\u3001\u7EC4\u5408\u9898\u7B49\u5404\u79CD\u590D\u6742\u9898\u578B\u7684\u9898\u5E72\u5185\u5BB9)"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(BigQuestion_Editor, {
        data: mdDetails,
        changeValue: changeValue,
        mdChangeValue: mdChangeValue
      })]
    })]
  });
};

/* harmony default export */ const exam_BigQuestion = (BigQuestion);
;// CONCATENATED MODULE: ./src/components/exam/randomPaperQuestion/index.tsx








const RandomPaperQuestion = props => {
  const {
    data,
    getPaperBigQuestions,
    paperId,
    setShowPopover,
    showPopover,
    strategyTree,
    setStrategyTree,
    setLoading
  } = props;
  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)('单选题');
  const {
    0: classify,
    1: setClassify
  } = (0,external_react_.useState)([]);
  const {
    0: showAlert,
    1: setShowAlert
  } = (0,external_react_.useState)(false); // 删除策略

  const {
    0: showWarnAlert,
    1: setShowWarnAlert
  } = (0,external_react_.useState)(false); // 删除大题

  const {
    0: showBigWarnAlert,
    1: setShowBigWarnAlert
  } = (0,external_react_.useState)(false); // 策略id

  const {
    0: delStrategyId,
    1: setDelStrategyId
  } = (0,external_react_.useState)(0); // 大题id

  const {
    0: bigId,
    1: setBigId
  } = (0,external_react_.useState)(0); // 试卷总题数

  const {
    0: allQuesCount,
    1: setAllQuesCount
  } = (0,external_react_.useState)(0);
  const {
    0: currentId,
    1: setCurrentId
  } = (0,external_react_.useState)(0);
  const {
    0: strategyIds,
    1: setStrategyIds
  } = (0,external_react_.useState)(0);
  const {
    0: resetStrategy,
    1: setResetStrategy
  } = (0,external_react_.useState)(false);

  const getQuestionType = (type, classify) => {
    setType(type);
    setClassify(classify);
  }; // 获取要删除的策略id


  const getRandomStrategyId = value => {
    setDelStrategyId(value);
  }; // 删除策略方法


  const deleteRandoStrategy = async () => {
    setLoading(true);
    await (0,paper/* deleteThisStrategy */.yU)(delStrategyId);
    await getPaperBigQuestions();
    setLoading(false);
  }; // 获取要删除的大题id


  const getRandomBigId = value => {
    setBigId(value);
  }; // 删除大题方法


  const deleteBig = async () => {
    setLoading(true);
    await (0,paper/* deleteThisQuestion */.u8)(bigId);
    await getPaperBigQuestions();
    setLoading(false);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [data.map(item => {
      return /*#__PURE__*/jsx_runtime_.jsx(exam_BigQuestion, {
        item: item,
        getPaperBigQuestions: getPaperBigQuestions,
        setShowAlert: setShowAlert,
        getQuestionType: getQuestionType,
        paperId: paperId,
        setShowWarnAlert: setShowWarnAlert,
        getRandomStrategyId: getRandomStrategyId,
        setShowBigWarnAlert: setShowBigWarnAlert,
        getRandomBigId: getRandomBigId,
        strategyTree: strategyTree,
        setStrategyTree: setStrategyTree,
        setShowPopover: setShowPopover,
        showPopover: showPopover,
        setCurrentId: setCurrentId,
        currentId: currentId,
        setStrategyIds: setStrategyIds,
        strategyIds: strategyIds,
        setLoading: setLoading,
        setResetStrategy: setResetStrategy,
        resetStrategy: resetStrategy,
        setAllNoDiffQuesCount: setAllQuesCount,
        allNoDiffQuesCount: allQuesCount
      }, item.id);
    }), showAlert && /*#__PURE__*/jsx_runtime_.jsx(exam_RandomTest, {
      setExamAlert: setShowAlert,
      type: type,
      classify: classify,
      getPaperBigQuestions: getPaperBigQuestions,
      setResetStrategy: setResetStrategy
    }), showWarnAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
      warning: '确定删除吗？',
      setShowWarnAlert: setShowWarnAlert,
      isDelete: true,
      executeFun: deleteRandoStrategy
    }), showBigWarnAlert && /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
      warning: '确定删除吗？',
      setShowWarnAlert: setShowBigWarnAlert,
      isDelete: true,
      executeFun: deleteBig
    })]
  });
};

/* harmony default export */ const randomPaperQuestion = (RandomPaperQuestion);
;// CONCATENATED MODULE: ./src/components/exam/randomStrategy/index.tsx









const RandomStrategy = props => {
  const {
    paperId,
    setLoading,
    loading
  } = props;
  const paperBox = (0,external_react_.useRef)(null);
  const {
    0: fullMarks,
    1: setFullMarks
  } = (0,external_react_.useState)(0);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: questionCount,
    1: setQuestionCount
  } = (0,external_react_.useState)(0);
  const {
    0: showPopover,
    1: setShowPopover
  } = (0,external_react_.useState)(false); // 控制策略里树形组件显隐

  const {
    0: strategyTree,
    1: setStrategyTree
  } = (0,external_react_.useState)(true);
  const {
    0: createLoading,
    1: setCreateLoading
  } = (0,external_react_.useState)(false); // const [paperId, setPaperId] = useState(0);
  // 需要查询实体表里个阶段题的数量

  const getPaperBigQuestions = (0,external_react_.useCallback)(async () => {
    const res = await (0,paper/* getPaperQuestions */.W3)(paperId);
    setQuestionCount(res[0].questionCount);
    setFullMarks(res[0].fullMarks);
    setData([...res[0].paperBigQuestions.sort((a, b) => {
      return a.sortId - b.sortId;
    })]);
  }, [paperId]);

  const addPaperBigQuestion = async () => {
    setCreateLoading(true); // 创建大题

    await (0,paper/* addBigQuestion */.HX)({
      paperId,
      quesTitle: '第' + (data.length + 1) + '大题'
    });
    await getPaperBigQuestions();
    setCreateLoading(false);

    if (paperBox.current.scrollHeight > paperBox.current.clientHeight) {
      // 向上卷起
      paperBox.current.scrollTo({
        top: paperBox.current.scrollHeight - paperBox.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  (0,external_react_.useEffect)(() => {
    getPaperBigQuestions();
  }, [getPaperBigQuestions]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (RandomStrategy_module_default()).random,
    onClick: () => {
      if (showPopover) {
        setShowPopover(false);
      }

      if (strategyTree) {
        setStrategyTree(false);
      }
    },
    ref: paperBox,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (RandomStrategy_module_default()).randomTitle,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
        type: "primary",
        className: (RandomStrategy_module_default()).randomButton,
        loading: createLoading,
        onClick: addPaperBigQuestion,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomStrategy_module_default()).randomIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ForkOutlined, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomStrategy_module_default()).randomBtn,
          children: "\u521B\u5EFA\u8BD5\u5377\u5927\u9898"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        className: (RandomStrategy_module_default()).QuestionAndScore,
        children: ["\u8BD5\u5377\u5171", /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: (RandomStrategy_module_default()).quesCount,
          children: questionCount
        }), "\u9053\u8BD5\u9898\uFF0C", /*#__PURE__*/jsx_runtime_.jsx("i", {
          className: (RandomStrategy_module_default()).score,
          children: fullMarks
        }), "\u5206"]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomStrategy_module_default()).randomContent,
      children: data.length > 0 && /*#__PURE__*/jsx_runtime_.jsx(randomPaperQuestion, {
        data: data,
        getPaperBigQuestions: getPaperBigQuestions,
        paperId: paperId,
        setShowPopover: setShowPopover,
        showPopover: showPopover,
        setStrategyTree: setStrategyTree,
        strategyTree: strategyTree,
        setLoading: setLoading,
        loading: loading
      })
    }), paperBox.current && paperBox.current.scrollHeight > paperBox.current.clientHeight && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (RandomStrategy_module_default()).randomTitle,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
        type: "primary",
        className: (RandomStrategy_module_default()).randomButton,
        loading: createLoading,
        onClick: addPaperBigQuestion,
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomStrategy_module_default()).randomIcon,
          children: /*#__PURE__*/jsx_runtime_.jsx(icons_.ForkOutlined, {})
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (RandomStrategy_module_default()).randomBtn,
          children: "\u521B\u5EFA\u8BD5\u5377\u5927\u9898"
        })]
      })
    })]
  });
};

/* harmony default export */ const randomStrategy = (RandomStrategy);
// EXTERNAL MODULE: ./src/components/exercise/chapterPractice/ChapterPratice.module.scss
var ChapterPratice_module = __webpack_require__(1883);
var ChapterPratice_module_default = /*#__PURE__*/__webpack_require__.n(ChapterPratice_module);
// EXTERNAL MODULE: ./src/api/chapter/index.ts
var chapter = __webpack_require__(8355);
;// CONCATENATED MODULE: ./src/components/exercise/chapterPractice/eachChapter.tsx










const AlertCommon = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/exercise/chapterPractice/eachChapter.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const MyPopover = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2142).then(__webpack_require__.bind(__webpack_require__, 2142)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2142)],
    modules: ["../src/components/exercise/chapterPractice/eachChapter.tsx -> " + '@/components/exercise/chapterPractice/popover']
  }
});
const SmokeManager = (0,dynamic["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2741)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2741)],
    modules: ["../src/components/exercise/chapterPractice/eachChapter.tsx -> " + '@component/exam/smokeManager']
  }
});




const EachChaper = props => {
  const {
    id,
    title,
    deleteEacgChaoter,
    smollVisible,
    setsmollVisible,
    show,
    setShow,
    getAllChapter,
    sortId,
    paperId,
    setSpinFlag
  } = props; // 大题的 标题

  const {
    0: Eachtitle,
    1: setEachtitle
  } = (0,external_react_.useState)('');
  const {
    0: smollKey,
    1: setSmollKet
  } = (0,external_react_.useState)(-1); // 每一个子章节

  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]); // 章节选题目开关

  const {
    0: ChapterQues,
    1: setChapterQues
  } = (0,external_react_.useState)(false);
  const {
    0: eachChapterId,
    1: seteachChapterId
  } = (0,external_react_.useState)(0);
  const allEachChapter = (0,external_react_.useCallback)(() => {
    (0,chapter/* getEachChapter */.fo)(id).then(async res => {
      await setData(res.strategyList);
    });
  }, [id]); // 标题弹框

  const {
    0: visible,
    1: setVisible
  } = (0,external_react_.useState)(false); // 标题设置标题的input框

  const titleInput = (0,external_react_.useRef)(null); // 小标题设置的input框

  const myArander = (0,external_react_.useRef)(null);
  (0,external_react_.useEffect)(() => {
    allEachChapter(); // eslint-disable-next-line no-unused-expressions

    !ChapterQues ? allEachChapter() : '';
    setEachtitle(title);
  }, [allEachChapter, ChapterQues, title]); // 删除按钮弹框操控

  const {
    0: hint,
    1: sethint
  } = (0,external_react_.useState)(false); // 子章节的key值

  const {
    0: deleKey,
    1: setdeleKey
  } = (0,external_react_.useState)(0); // 弹框判断条件

  const {
    0: alterType,
    1: setAlterType
  } = (0,external_react_.useState)(''); // 删除按钮

  const hintchang = (key, type) => {
    sethint(true);
    setdeleKey(key);
    setAlterType(type);
  }; // 添加子章节


  const addSomeChapter = async () => {
    setSpinFlag(true);
    setTimeout(async () => {
      await (0,chapter/* addEachPratice */.XR)({
        id,
        name: '单击修改章节名称',
        sum: 0
      });
      await allEachChapter();
      setSpinFlag(false);
    }, 1000);
  }; // 修改子章节名称的弹框


  const smollVisiblechange = (visible, key) => {
    if (visible) {
      setSmollKet(key);
    } else {
      setSmollKet(-1);
    }

    setShow(id);
    setsmollVisible(visible);
  }; // 修改子章节名称


  const smallName = async id => {
    const SmollTitle = myArander.current.state.value;
    (0,chapter/* UpdateEachChapter */.ZP)({
      eachchapterId: id,
      name: SmollTitle
    }).then(() => {
      allEachChapter();
    });
    setsmollVisible(false);
  };

  const columns = [{
    title: '序号',
    dataIndex: 'key',
    key: 'key'
  }, {
    title: '章节名称',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ChapterPratice_module_default()).chapter_someBlock,
      children: /*#__PURE__*/jsx_runtime_.jsx(MyPopover, {
        titleInput: myArander,
        title: record.name,
        amendName: () => {
          smallName(record.id);
        },
        visible: show === id && smollVisible && smollKey === record.key,
        onVisibleChanges: e => {
          smollVisiblechange(e, record.key);
        },
        Eachtitle: record.name,
        flage: false
      })
    }, record.key)
  }, {
    title: '练习试题管理',
    dataIndex: 'address',
    render: (text, record) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
      onClick: () => {
        setChapterQues(true);
        seteachChapterId(record.id);
      },
      style: {
        background: record.sum === 0 ? 'red' : '#415d74'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.AppstoreOutlined, {}), "\u5411\u7AE0\u8282\u6DFB\u52A0\u8BD5\u9898 ", record.sum ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        children: ["(", record.sum, ")"]
      }) : '']
    }),
    key: 'address'
  }, {
    title: '试题数量',
    dataIndex: 'sum',
    key: 'sum'
  }, {
    title: '操作',
    dataIndex: 'operation',
    render: (text, record) => /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {
      onClick: () => {
        hintchang(record.id, 'son');
      }
    }),
    key: 'operation'
  }]; // 上移下移

  const menu = /*#__PURE__*/(0,jsx_runtime_.jsxs)((menu_default()), {
    children: [/*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        await (0,chapter/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 0
        }).then(res => {
          // eslint-disable-next-line no-unused-expressions
          res.msg === '已经是最顶了' ? message_default().info(res.msg) : '';
        });
        await getAllChapter();
      },
      children: "\u4E0A\u79FB"
    }, "1"), /*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
      onClick: async () => {
        await (0,chapter/* moveToTop */.R4)({
          paperId,
          sortId,
          type: 1
        }).then(res => {
          // eslint-disable-next-line no-unused-expressions
          res.msg === '到底了' ? message_default().info(res.msg) : '';
        });
        await getAllChapter();
      },
      children: "\u4E0B\u79FB"
    }, "2")]
  }); // 弹框确定删除事件


  const confirm = () => {
    if (alterType === 'son') {
      (0,chapter/* deleteEachChapter */.q)(deleKey).then(() => {
        allEachChapter();
      });
    } else if (alterType === 'father') {
      deleteEacgChaoter(deleKey); // 删除父章节
    }

    sethint(false);
  }; // 下拉菜单 上移下移


  const changeAlertFlag = () => {
    sethint(false);
  }; // 点击标题的修改


  const amendName = async () => {
    const ChapTitle = titleInput.current.state.value;
    setVisible(false);
    await (0,chapter/* amendChapter */.ek)({
      id,
      title: ChapTitle
    });
    setEachtitle(ChapTitle);
  };

  const onVisibleChanges = visi => {
    setVisible(visi);
  }; // 表格去处空白


  const customizeRenderEmpty = () => {
    return /*#__PURE__*/jsx_runtime_.jsx("span", {});
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx((config_provider_default()), {
        renderEmpty: customizeRenderEmpty,
        children: /*#__PURE__*/jsx_runtime_.jsx((table_default()), {
          columns: columns,
          dataSource: data,
          bordered: true,
          size: "small",
          title: () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (ChapterPratice_module_default()).chapter_someBlock,
            children: [/*#__PURE__*/jsx_runtime_.jsx(MyPopover, {
              titleInput: titleInput,
              title: title,
              amendName: amendName,
              visible: visible,
              onVisibleChanges: onVisibleChanges,
              Eachtitle: Eachtitle,
              flage: true
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (ChapterPratice_module_default()).deldeChater,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                className: (ChapterPratice_module_default()).btn,
                onClick: () => {
                  hintchang(props.id, 'father');
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {}), "\u5220\u9664\u7AE0\u8282\u53CA\u5B50\u7AE0\u8282"]
              }), /*#__PURE__*/jsx_runtime_.jsx((dropdown_default()), {
                overlay: menu,
                trigger: ['click'],
                children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                  className: "ant-dropdown-link",
                  onClick: e => e.preventDefault(),
                  children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DownOutlined, {})
                })
              })]
            })]
          }),
          footer: () => /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
            className: (ChapterPratice_module_default()).chapter_btn,
            onClick: () => {
              addSomeChapter();
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {})
            }), "\u6DFB\u52A0\u5B50\u7AE0\u8282"]
          })
        })
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(AlertCommon, {
      alertStatus: hint,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ChapterPratice_module_default()).alertCommon_content,
        children: "\u786E\u8BA4\u5220\u9664\u5417?"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (ChapterPratice_module_default()).alertCommon_footer,
        children: [/*#__PURE__*/jsx_runtime_.jsx((button_default()), {
          onClick: () => {
            confirm();
          },
          children: "\u786E\u5B9A"
        }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
          onClick: changeAlertFlag,
          children: "\u53D6\u6D88"
        })]
      })]
    }), ChapterQues, ChapterQues ? /*#__PURE__*/jsx_runtime_.jsx(SmokeManager, {
      setExamAlert: setChapterQues,
      strategyId: eachChapterId,
      getStrategy: allEachChapter,
      getQuestion: getAllChapter,
      condition: false
    }) : '']
  });
};

/* harmony default export */ const eachChapter = (EachChaper);
;// CONCATENATED MODULE: ./src/components/exercise/chapterPractice/index.tsx
/* eslint-disable @typescript-eslint/no-use-before-define */









const ChapterPractice = props => {
  const {
    paperId
  } = props;
  const {
    0: sectionList,
    1: setsSectionList
  } = (0,external_react_.useState)([]); // 加载开关

  const {
    0: spinFlag,
    1: setSpinFlag
  } = (0,external_react_.useState)(false); // 小弹框的开关

  const {
    0: smollVisible,
    1: setsmollVisible
  } = (0,external_react_.useState)(false); // 小弹框的

  const {
    0: show,
    1: setShow
  } = (0,external_react_.useState)(0);
  const getAllChapter = (0,external_react_.useCallback)(() => {
    // 通过试卷id获取试卷信息
    return (0,chapter/* getQuestions */.tI)(paperId).then(ress => {
      setsSectionList([...ress.exerBigChapters].sort((a, b) => a.sortId - b.sortId));
    });
  }, [paperId]);
  (0,external_react_.useEffect)(() => {
    getAllChapter();
  }, [getAllChapter]); // 添加章节

  const addEachChapter = () => {
    (0,chapter/* addChapterPratice */.KW)({
      paperId
    }).then(() => {
      getAllChapter();
    });
  };

  const deleteEacgChaoter = async chapterId => {
    await (0,chapter/* deleteThisChapter */.pc)(chapterId);
    await getAllChapter();
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (ChapterPratice_module_default()).chapter_box,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ChapterPratice_module_default()).tabel_content,
      children: [/*#__PURE__*/jsx_runtime_.jsx("header", {
        className: (ChapterPratice_module_default()).chapter_header,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
          className: (ChapterPratice_module_default()).btn,
          onClick: () => {
            addEachChapter();
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {})
          }), "\u521B\u5EFA\u7EC3\u4E60\u7AE0\u8282"]
        })
      }), sectionList.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(eachChapter, {
            id: item.id,
            title: item.title,
            deleteEacgChaoter: deleteEacgChaoter,
            smollVisible: smollVisible,
            setsmollVisible: setsmollVisible,
            show: show,
            setShow: setShow,
            getAllChapter: getAllChapter,
            sortId: item.sortId,
            paperId: paperId,
            setSpinFlag: setSpinFlag
          })
        }, index);
      })]
    }), spinFlag ? /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (ChapterPratice_module_default()).example,
      children: /*#__PURE__*/jsx_runtime_.jsx((spin_default()), {})
    }) : '']
  });
};

/* harmony default export */ const chapterPractice = (ChapterPractice);
;// CONCATENATED MODULE: ./src/components/exam/fixedPaper/addTitle.tsx



(external_react_default()).useLayoutEffect = (external_react_default()).useEffect;


// @ts-ignore
 // @ts-ignore








const AddTitle = props => {
  const {
    type,
    examId,
    paperId,
    myChange,
    setLoading,
    loading,
    getPaperMessage,
    quesSort,
    exerciseId
  } = props;
  const paperBox = (0,external_react_.useRef)(null);
  const fatherBox = (0,external_react_.useRef)(null);
  const {
    0: questions,
    1: setQuestion
  } = (0,external_react_.useState)([]);
  const {
    0: score,
    1: setScore
  } = (0,external_react_.useState)(0);
  const {
    0: count,
    1: setCount
  } = (0,external_react_.useState)(0);
  const {
    0: currentId,
    1: setCurrentId
  } = (0,external_react_.useState)(0); // 修该大题标题弹框

  const {
    0: visibleFlag,
    1: setVisibleFlag
  } = (0,external_react_.useState)(false); // 添加大题loading效果

  const {
    0: addLoading,
    1: setAddLoading
  } = (0,external_react_.useState)(false); // 批量修改分数弹框

  const {
    0: scoreFlag,
    1: setScoreFlag
  } = (0,external_react_.useState)(false); // 试卷中已有试题

  const {
    0: existQuestion,
    1: setExistQuestion
  } = (0,external_react_.useState)([]);
  const {
    0: existStrategy,
    1: setExistStrategy
  } = (0,external_react_.useState)([]); // 查询固定试卷信息

  const getQuestion = (0,external_react_.useCallback)(() => {
    if (paperId) {
      (0,paper/* getQuestions */.tI)(paperId).then(res => {
        myChange(res.fullMarks);
        setScore(res.fullMarks);
        setCount(res.questionCount);
        setQuestion([...res.paperBigQuestions].sort((a, b) => a.sortId - b.sortId)); // 通过试卷id获取所有的小题

        if (res.paperType === 0) {
          for (let i = 0; i < res.paperBigQuestions.length; i++) {
            (0,paper/* getQues */.LI)(res.paperBigQuestions[i].id).then(r => {
              setExistQuestion([...existQuestion, ...r.testBanks.map(item => item.id)]);
            });
          }
        }
      });
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [myChange, paperId]); // 生命周期钩子

  (0,external_react_.useEffect)(() => {
    (type === 0 || type === 1) && getQuestion();
  }, [getQuestion, type]); // 添加试卷大题

  const addQuestion = async () => {
    setAddLoading(true);
    const result = await (0,paper/* addBigQuestion */.HX)({
      paperId: paperId,
      quesTitle: undefined
    });
    const res = await (0,paper/* getQuestions */.tI)(paperId);
    setQuestion([...res.paperBigQuestions]);

    if (result) {
      setAddLoading(false);
    }

    if (paperBox.current.scrollHeight > fatherBox.current.clientHeight) {
      // 向上卷起
      paperBox.current.scrollTo({
        top: paperBox.current.scrollHeight - fatherBox.current.clientHeight,
        behavior: 'smooth'
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    onClick: () => {
      setVisibleFlag(false);
      setScoreFlag(false);
    },
    className: (add_module_default()).father,
    ref: fatherBox,
    children: type === 3 ? /*#__PURE__*/jsx_runtime_.jsx(chapterPractice, {
      exerciseId: exerciseId,
      paperId: paperId,
      setLoading: setLoading,
      loading: loading
    }) : type === 2 ? /*#__PURE__*/jsx_runtime_.jsx(randomStrategy, {
      examId: examId,
      paperId: paperId,
      setLoading: setLoading,
      loading: loading
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (add_module_default()).box,
      ref: paperBox,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (add_module_default()).top,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (add_module_default()).left,
          children: [type === 0 ? /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
            type: "primary",
            onClick: addQuestion,
            style: {
              background: '#2B71C8'
            },
            loading: addLoading,
            children: "\u6DFB\u52A0\u8BD5\u5377\u5927\u9898"
          }) : null, type === 1 ? /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.RetweetOutlined, {}),
            type: "primary",
            onClick: addQuestion,
            style: {
              background: '#2B71C8'
            },
            children: "\u521B\u5EFA\u8BD5\u5377\u5927\u9898"
          }) : null]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (add_module_default()).right,
          children: ["\u5171", /*#__PURE__*/jsx_runtime_.jsx("i", {
            children: count
          }), "\u9053\u8BD5\u9898\uFF0C\u5171", /*#__PURE__*/jsx_runtime_.jsx("i", {
            children: score
          }), "\u5206"]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((spin_default()), {
        spinning: addLoading,
        children: [type === 0 && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (add_module_default()).bottom,
          children: questions && questions.map(ques => {
            return /*#__PURE__*/jsx_runtime_.jsx(question, {
              id: ques.id,
              description: ques.description,
              num: ques.title,
              getQuestion: getQuestion,
              paperId: paperId,
              sortId: ques.sortId,
              currentId: currentId,
              setCurrentId: setCurrentId,
              visibleFlag: visibleFlag,
              setVisibleFlag: setVisibleFlag,
              scoreFlag: scoreFlag,
              setScoreFlag: setScoreFlag,
              descriptionMD: ques.descriptionMD,
              getPaperMessage: getPaperMessage,
              quesSort: quesSort,
              existQuestion: existQuestion
            }, ques.id);
          })
        }), type === 1 && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (add_module_default()).bottom,
          children: questions && questions.map(ques => {
            return /*#__PURE__*/jsx_runtime_.jsx(smokeQuestion, {
              description: ques.description,
              num: ques.title,
              id: ques.id,
              paperId: paperId,
              getQuestion: getQuestion,
              sortId: ques.sortId,
              bigQuestionCount: ques.count,
              bigQuestionScore: ques.allScore,
              currentId: currentId,
              setCurrentId: setCurrentId,
              visibleFlag: visibleFlag,
              setVisibleFlag: setVisibleFlag,
              descriptionMD: ques.descriptionMD,
              setExistStrategy: setExistStrategy,
              existStrategy: existStrategy
            }, ques.id);
          })
        })]
      }), (paperBox.current && paperBox.current.scrollHeight) > (fatherBox.current && fatherBox.current.clientHeight) && /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (add_module_default()).foot,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (add_module_default()).left,
          children: [type === 0 ? /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {}),
            type: "primary",
            onClick: addQuestion,
            style: {
              background: '#2B71C8'
            },
            children: "\u6DFB\u52A0\u8BD5\u5377\u5927\u9898"
          }) : null, type === 1 ? /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.RetweetOutlined, {}),
            type: "primary",
            onClick: addQuestion,
            style: {
              background: '#2B71C8'
            },
            children: "\u521B\u5EFA\u8BD5\u5377\u5927\u9898"
          }) : null]
        })
      })]
    })
  });
};

/* harmony default export */ const addTitle = (AddTitle);

/***/ }),

/***/ 5242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3080);
/* harmony import */ var _component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9067);
/* harmony import */ var _component_TreeType_TreeType__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5061);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_exam_paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4455);
/* harmony import */ var _api_chapter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8355);
/* harmony import */ var _component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4703);
/* harmony import */ var _component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(9719);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);
















const GetQuestionList = props => {
  const {
    bigQuestionId,
    strategyId,
    existingQuestions = [],
    setExamAlertFlag,
    getQue,
    getStrategy,
    getQuestion,
    strategyList,
    condition,
    nowBigExistQues
  } = props;
  const {
    0: tree,
    1: setTree
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: showTree,
    1: setShowTree
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: showOther,
    1: setShowOther
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 发送请求需要用到字段

  const {
    0: treeIdList,
    1: setTreeIdList
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]); // 分类id集合

  const {
    0: questionType,
    1: setQuestionType
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 题目类型

  const {
    0: questionLevel,
    1: setQuestionLevel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 难以程度

  const {
    0: keyValue,
    1: setKeyValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: startTime,
    1: setStartTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: endTime,
    1: setEndTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const {
    0: questionData,
    1: setQuestionData
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: selectCount,
    1: setSelectCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const {
    0: selQuestion,
    1: setSelQuestion
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
  const {
    0: delAlert,
    1: setDelAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
  const {
    0: currentTest,
    1: setCurrentTest
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0); // 控制表格页码

  const {
    0: nowIndex,
    1: setNowIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
  const {
    0: columns
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([{
    title: '试题内容',
    dataIndex: 'examContent'
  }, {
    title: '题型',
    dataIndex: 'questionTypes'
  }, {
    title: '试题分类',
    dataIndex: 'examTypes'
  }, // 配置子标题
  {
    title: '试题难度',
    dataIndex: 'difficultyLevel'
  }, {
    title: '标准答案',
    dataIndex: 'okanswer'
  }, {
    title: '分数',
    dataIndex: 'gradeNum'
  }, {
    title: '创建时间',
    dataIndex: 'createAt',
    key: 'createAt',
    render: (text, record) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default()), {
        size: "small",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
          children: new Date(record.createAt).toLocaleString()
        })
      });
    }
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_3___default()), {
      size: "middle",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DeleteOutlined, {
        className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().delIcon),
        onClick: () => {
          setCurrentTest(record.id);
          setDelAlert(true);
        }
      })
    })
  }]); // 树形组件接收参数方法

  const currentNode = (title, id, idList) => {
    setTree(title);
    setTreeIdList(idList);
  };

  function onStartChange(value, dateString) {
    setStartTime(dateString);
  }

  function onEndChange(value, dateString) {
    setEndTime(dateString);
  }

  const getQuestionList = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(async () => {
    // 发送请求
    const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .getQuestionsInStore */ .jZ)({
      treeIdList: treeIdList.join(','),
      questionType,
      questionLevel,
      keyValue,
      startTime,
      endTime,
      existingQuestions: existingQuestions.join(',')
    });
    setQuestionData([...res]);
  }, [endTime, existingQuestions, keyValue, questionLevel, questionType, startTime, treeIdList]); // 点击选择后刷新页面方法

  const selectedReloadPage = async () => {
    // 发送请求
    const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .getQuestionsInStore */ .jZ)({
      treeIdList: treeIdList.join(','),
      questionType,
      questionLevel,
      keyValue,
      startTime,
      endTime,
      existingQuestions: [...selQuestion, ...existingQuestions].join(',')
    });
    setQuestionData([...res]);
  }; // 题目选中事件


  const selectQuestion = target => {
    setSelectCount(target.length);
    setSelQuestion([...target]);
  }; // 发送请求，导入试题到大题中


  const infoQuestion = async () => {
    if (bigQuestionId) {
      await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .saveQuestionInfoBig */ .g9)({
        id: bigQuestionId,
        select: [...selQuestion, ...nowBigExistQues]
      });
    }

    if (strategyId) {
      // 发送请求，导入试题到抽题策略
      condition ? await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .saveQuestionInfoStrategy */ .Mr)({
        id: strategyId,
        select: [...selQuestion, ...nowBigExistQues]
      }) : await (0,_api_chapter__WEBPACK_IMPORTED_MODULE_9__/* .saveQuestionChaStrategy */ .X2)({
        id: strategyId,
        select: [...selQuestion, ...existingQuestions]
      });
    }
  };

  const reset = async () => {
    setTreeIdList([]);
    setTree('');
    setQuestionType('');
    setQuestionLevel('');
    setKeyValue('');
    setStartTime(undefined);
    setEndTime(undefined); // 发送请求

    const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .getQuestionsInStore */ .jZ)({
      treeIdList: '',
      questionType: '',
      questionLevel: '',
      keyValue: '',
      startTime: undefined,
      endTime: undefined,
      existingQuestions: [...selQuestion, ...existingQuestions].join(',')
    });
    setQuestionData([...res]);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    getQuestionList().then();
  }, [getQuestionList]);

  const myChange = pagination => {
    setNowIndex(pagination.current);
  };

  const deleteTest = async () => {
    const res = await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_8__/* .deleteStoreTest */ ._v)(currentTest);

    if (res && res.code === 1) {
      await getQuestionList();
      getQuestion && getQuestion();
      getQue && getQue();
    }

    if (res && res.code === -1) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().error(res.msg);
    }
  };

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
      title: '从试题库中选择',
      setExamAlertFlag: setExamAlertFlag,
      store: true,
      setShowTree: setShowTree,
      showTree: showTree,
      selectCount: selectCount,
      infoQuestion: infoQuestion,
      getQuestionList: getQuestionList,
      getQue: getQue,
      getStrategy: getStrategy,
      selectedReloadPage: selectedReloadPage,
      getQuestion: getQuestion,
      strategyList: strategyList,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().questionFather),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
          className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().searchContent),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().searchTitle),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().quesClassify),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle),
                children: "\u8BD5\u9898\u5206\u7C7B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().tree),
                onClick: () => {
                  setShowTree(!showTree);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                  className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().treeTitle),
                  children: tree
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CaretDownOutlined, {}),
                  children: "\u9009\u62E9"
                }), showTree && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
                  className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().showTree),
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_TreeType_TreeType__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    type: 'question',
                    getCurrentAndAncestorsTitles: currentNode
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().quesClassify),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle),
                children: "\u8BD5\u9898\u7C7B\u578B"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("select", {
                id: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().type),
                value: questionType,
                onChange: e => {
                  setQuestionType(e.target.value);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u5355\u9009\u9898",
                  children: "\u5355\u9009\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u591A\u9009\u9898",
                  children: "\u591A\u9009\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u5224\u65AD\u9898",
                  children: "\u5224\u65AD\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u586B\u7A7A\u9898",
                  children: "\u586B\u7A7A\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u95EE\u7B54\u9898",
                  children: "\u95EE\u7B54\u9898"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().searchGroup),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle)
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SearchOutlined, {}),
                onClick: async () => {
                  await getQuestionList();
                },
                children: "\u67E5\u8BE2"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.SyncOutlined, {}),
                onClick: reset,
                children: "\u91CD\u7F6E"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().down),
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
                  icon: showOther ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.UpOutlined, {}) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.DownOutlined, {}),
                  onClick: () => {
                    setShowOther(!showOther);
                  },
                  children: "\u66F4\u591A\u67E5\u8BE2\u5B57\u6BB5"
                })
              })]
            })]
          }), showOther && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().searchOther),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().quesClassify),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle),
                children: "\u96BE\u6613\u5EA6"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("select", {
                id: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().level),
                value: questionLevel,
                onChange: e => {
                  setQuestionLevel(e.target.value);
                },
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u4E0D\u9650\u96BE\u5EA6",
                  children: "\u4E0D\u9650\u96BE\u5EA6"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u5BB9\u6613",
                  children: "\u5BB9\u6613"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u4E2D\u7B49",
                  children: "\u56F0\u96BE"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("option", {
                  value: "\u56F0\u96BE",
                  children: "\u56F0\u96BE"
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().quesClassify),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle),
                children: "\u5173\u952E\u5B57\u641C\u7D22"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("input", {
                type: "text",
                value: keyValue,
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().inpValue),
                onChange: e => {
                  setKeyValue(e.target.value);
                }
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
              className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().quesClassify),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().childTitle),
                children: "\u521B\u5EFA\u65F6\u95F4"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("span", {
                className: (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().date),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default()), {
                  showTime: true,
                  onChange: onStartChange
                }), " -\xA0", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default()), {
                  showTime: true,
                  onChange: onEndChange
                })]
              })]
            })]
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
          className: showOther ? (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().questionsTable) : (_component_exam_getQuestionList_GetQuestionList_module_scss__WEBPACK_IMPORTED_MODULE_13___default().questionsTable1),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_10__["default"], {
            data: questionData,
            columns: columns,
            isCheckout: true,
            dataCount: questionData.length,
            loading: false,
            rowKeyId: 'id',
            onChangeTable: myChange,
            pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
            ,
            pageSize: 10,
            onSelectChange: selectQuestion,
            current: nowIndex
          })
        })]
      }), delAlert && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(_component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_11__["default"], {
        warning: '确定删除该试题吗？',
        setShowWarnAlert: setDelAlert,
        isDelete: true,
        executeFun: deleteTest
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GetQuestionList);

/***/ }),

/***/ 2741:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7386);
/* harmony import */ var antd_lib_radio__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_radio__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8998);
/* harmony import */ var _component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4703);
/* harmony import */ var _api_exam_paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4455);
/* harmony import */ var _api_chapter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8355);
/* harmony import */ var _component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9067);
/* harmony import */ var _component_exam_getQuestionList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5242);
/* harmony import */ var _component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9719);
/* harmony import */ var _component_testBank_addExam_addExam__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8886);
/* harmony import */ var _component_testBank_batchAdd_batchAdd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5900);
/* harmony import */ var _component_testBank_importTemplate_importTemplate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1239);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5152);
/* harmony import */ var _utils_exportQuestion__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(5692);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



















const ResourceQuestions = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_14__["default"])(() => __webpack_require__.e(/* import() */ 965).then(__webpack_require__.bind(__webpack_require__, 965)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(965)],
    modules: ["../src/components/exam/smokeManager/index.tsx -> " + '@/components/testBank/resourceQustions/resourceQustions']
  }
});

const SmokeManager = props => {
  const {
    setExamAlert,
    strategyId,
    getStrategy,
    getQuestion,
    condition,
    existStrategy
  } = props;
  const {
    0: questionList,
    1: setQuestionList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const {
    0: showQuestionList,
    1: setShowQuestionList
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const {
    0: delAlert,
    1: setDelAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 试题弹窗

  const {
    0: questionAlert,
    1: setQuestionAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 控制弹窗

  const {
    0: questionNum,
    1: setQuestionNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const {
    0: quesId,
    1: setQuesId
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: selectQues,
    1: setSelectQues
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]); // 导出试题提示弹窗

  const {
    0: exportAlert,
    1: setExportAlert
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 批量删除弹框

  const {
    0: bathFlag,
    1: setBathFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false); // 控制试题列表分页

  const {
    0: nowIndex,
    1: setNowIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(1);
  const {
    0: columns
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([{
    title: '试题内容',
    dataIndex: 'examContent',
    key: 'examContent'
  }, {
    title: '题型',
    dataIndex: 'questionTypes',
    key: 'questionTypes'
  }, {
    title: '试题分类',
    dataIndex: 'examTypes',
    key: 'examTypes'
  }, {
    title: '试题难度',
    dataIndex: 'difficultyLevel',
    key: 'difficultyLevel'
  }, {
    title: '标准答案',
    dataIndex: 'okanswer',
    key: 'okanswer'
  }, {
    title: '分数',
    dataIndex: 'gradeNum',
    key: 'gradeNum'
  }, {
    title: '创建时间',
    dataIndex: 'createAt',
    key: 'createAt',
    render: (text, record) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
        size: "small",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
          children: new Date(record.createAt).toLocaleString()
        })
      });
    }
  }, {
    title: '操作',
    key: 'action',
    render: (text, record) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
      size: "small",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DeleteOutlined, {
        className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().delIcon),
        onClick: () => {
          setQuesId(record.id);
          setDelAlert(true);
        }
      })
    })
  }]);
  const strategyList = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(async () => {
    const res = condition ? await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_6__/* .getStrategyQuestionList */ .fn)(strategyId) : await (0,_api_chapter__WEBPACK_IMPORTED_MODULE_7__/* .getStrategyQuestionLists */ .i$)(strategyId);
    setQuestionList([...res.data]);
  }, [condition, strategyId]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    strategyList().then();
  }, [strategyId, strategyList]);

  const mySelect = (target, row) => {
    setSelectQues([...row]);
  };

  const myChange = pagination => {
    setNowIndex(pagination.current);
  };

  const delQuestion = async () => {
    const res = condition ? await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_6__/* .delSmokeQuestion */ .bi)({
      sId: strategyId,
      id: quesId
    }) : await (0,_api_chapter__WEBPACK_IMPORTED_MODULE_7__/* .delChapterQuestion */ .ws)({
      sId: strategyId,
      id: quesId
    });

    if (res.data) {
      await strategyList();
      await getStrategy();
    }
  }; // 批量删除


  const bathDelete = async () => {
    const res = condition ? await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_6__/* .bathDel */ .QV)({
      selectQues,
      strategyId
    }) : await (0,_api_chapter__WEBPACK_IMPORTED_MODULE_7__/* .bathDels */ .qQ)({
      selectQues,
      strategyId
    });

    if (res.code === 1) {
      await strategyList();
      await getStrategy(); // 清空多选，但是是公共组件，这里控制不了

      setSelectQues([]);
    }
  };

  const saveAndAddFun = () => {
    setQuestionAlert(false);
    setTimeout(() => {
      setQuestionAlert(true);
    });
  };

  const backData = async value => {
    let idList;

    if (Array.isArray(value)) {
      idList = value.map(item => {
        return item.id;
      });
    } else {
      idList = [value.id];
    } // 发送请求，与抽题设置关联


    console.log(condition);
    condition ? await (0,_api_exam_paper__WEBPACK_IMPORTED_MODULE_6__/* .infoSmokeStrategy */ .wN)({
      id: strategyId,
      info: idList
    }) : await (0,_api_chapter__WEBPACK_IMPORTED_MODULE_7__/* .infoChapterStrategy */ .bK)({
      id: strategyId,
      info: idList
    });
  }; // 刷新页面方法


  const resetPage = async () => {
    await strategyList();
    await getQuestion();
    await getStrategy();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_component_exam_ExamAlert__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      title: '抽题管理试题列表',
      setExamAlertFlag: setExamAlert,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().examHead),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
          className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().quesCount),
          children: ["\u5171 ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
            className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().count),
            children: questionList.length
          }), " \u9053\u8BD5\u9898"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
          className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().examBtns),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
            className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().openList),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              type: "primary",
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.SearchOutlined, {}),
              onClick: () => {
                setShowQuestionList(true);
              },
              children: "\u4ECE\u8BD5\u9898\u5E93\u4E2D\u9009\u62E9"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_radio__WEBPACK_IMPORTED_MODULE_0___default().Group), {
            value: 'large',
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusOutlined, {}),
              onClick: () => {
                setQuestionNum(0);
                setQuestionAlert(true);
              },
              children: "\u65B0\u589E\u8BD5\u9898"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.PlusCircleOutlined, {}),
              onClick: () => {
                setQuestionNum(1);
                setQuestionAlert(true);
              },
              children: "\u6279\u91CF\u65B0\u589E"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
              icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.UploadOutlined, {}),
              onClick: () => {
                setQuestionNum(2);
                setQuestionAlert(true);
              },
              children: "\u6A21\u677F\u5BFC\u5165"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
            id: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().downBtn),
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DownloadOutlined, {}),
            onClick: () => {
              (0,_utils_exportQuestion__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z)(selectQues, setExportAlert);
            },
            children: "\u5BFC\u51FA"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default()), {
            type: "primary",
            danger: true,
            icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__.DeleteOutlined, {}),
            onClick: () => {
              setBathFlag(true);
            },
            children: "\u6279\u91CF\u5220\u9664"
          })]
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: (_component_exam_smokeManager_SmokeManager_module_scss__WEBPACK_IMPORTED_MODULE_17___default().examTable),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_commonTable_commonTable__WEBPACK_IMPORTED_MODULE_5__["default"], {
          data: questionList // 数据
          ,
          dataCount: questionList.length // 数据的总条数
          ,
          columns: columns // 标题+内容
          ,
          isCheckout: true // 是否使用多选
          ,
          loading: false // 加载动画
          ,
          onSelectChange: mySelect // 多选框的回调
          ,
          pageSizeOptions: ['5', '10', '20', '100'] // 配置每页显示多少条数据
          ,
          pageSize: 10,
          rowKeyId: 'id' // 配置每行的key值 设置唯一id
          ,
          onChangeTable: myChange // 排序,分页,table的回调
          ,
          current: nowIndex
        })
      })]
    }), showQuestionList && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_exam_getQuestionList__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      nowBigExistQues: questionList.map(item => item.id),
      existingQuestions: existStrategy,
      setExamAlertFlag: setShowQuestionList,
      strategyId: strategyId,
      getStrategy: getStrategy,
      getQuestion: getQuestion,
      strategyList: strategyList,
      condition: condition
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(ResourceQuestions, {
      dialogOpt: '新增试题',
      alertStatus: questionAlert,
      changeAlertFlag: setQuestionAlert,
      children: questionNum === 0 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_testBank_addExam_addExam__WEBPACK_IMPORTED_MODULE_11__["default"], {
        Judge: {},
        changeAlertFlag: setQuestionAlert,
        pageTestBank: resetPage,
        DataChange: resetPage,
        ReturnAddExamData: backData,
        saveAndAddFun: saveAndAddFun,
        defultNumber: 1,
        page: 5
      }) : questionNum === 1 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_testBank_batchAdd_batchAdd__WEBPACK_IMPORTED_MODULE_12__["default"], {
        changeAlertFlag: setQuestionAlert,
        pageTestBank: resetPage,
        defultNumber: 1,
        page: 5,
        getData: backData
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_testBank_importTemplate_importTemplate__WEBPACK_IMPORTED_MODULE_13__["default"], {
        changeAlertFlag: setQuestionAlert,
        pageTestBank: resetPage,
        defultNumber: 1,
        page: 5,
        backData: backData
      })
    }), delAlert && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__["default"], {
      warning: '确定删除该试题吗？',
      setShowWarnAlert: setDelAlert,
      isDelete: true,
      executeFun: delQuestion
    }), bathFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__["default"], {
      warning: '确定删除这些试题吗？',
      setShowWarnAlert: setBathFlag,
      isDelete: true,
      executeFun: bathDelete
    }), exportAlert && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_component_TreeType_alertWarning_alertWarning__WEBPACK_IMPORTED_MODULE_10__["default"], {
      warning: '请选择导出试题!',
      setShowWarnAlert: setExportAlert
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SmokeManager);

/***/ }),

/***/ 5692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1112);
// 导出试题


const exportQuestion = (selectQues, setExportAlert) => {
  // 判断选中试题
  if (selectQues.length === 0) {
    // 提示请选择导出试题
    setExportAlert(true);
  } else {
    (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_0__["default"])(selectQues, {
      questionTypes: '题型',
      examContent: '试题内容',
      options: '试题选项',
      okanswer: '答案',
      gradeNum: '分数',
      examTypes: '分类',
      difficultyLevel: '难度',
      okanalysis: '解析'
    }, '考试云导出试题');
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exportQuestion);

/***/ }),

/***/ 2819:
/***/ ((module) => {

// Exports
module.exports = {
	"examHead": "RandomTest_examHead__3n3kb",
	"count": "RandomTest_count__xiIqp",
	"downBtn": "RandomTest_downBtn__6l_H4",
	"examTable": "RandomTest_examTable__Plq4F"
};


/***/ }),

/***/ 2312:
/***/ ((module) => {

// Exports
module.exports = {
	"father": "add_father__lhZeE",
	"box": "add_box__30IfJ",
	"top": "add_top__tQmQb",
	"left": "add_left__excI9",
	"right": "add_right__GXCKd",
	"bottom": "add_bottom__B14wG",
	"foot": "add_foot__FsCkr"
};


/***/ }),

/***/ 7545:
/***/ ((module) => {

// Exports
module.exports = {
	"question": "question_question__l8Lpy",
	"top": "question_top__N6tfI",
	"left": "question_left__ZB2Q6",
	"right": "question_right__VsntC",
	"testBank": "question_testBank__MdoDK",
	"select": "question_select__KpjpS",
	"delete": "question_delete__RS8qr",
	"details": "question_details__362Ic",
	"deleteQuestion": "question_deleteQuestion__ftXPF"
};


/***/ }),

/***/ 4625:
/***/ ((module) => {

// Exports
module.exports = {
	"question": "smoke_question__bM_Bg",
	"top": "smoke_top__su7LW",
	"left": "smoke_left__fKug0",
	"right": "smoke_right__xj1lP",
	"select": "smoke_select__7eq48",
	"details": "smoke_details__dvjZ_",
	"randomTable": "smoke_randomTable__s2Ema",
	"table": "smoke_table__ZyTcx",
	"count": "smoke_count__ORsZ_",
	"deleteEveryQues": "smoke_deleteEveryQues__Bxvk2",
	"foot": "smoke_foot__pG2Q_"
};


/***/ }),

/***/ 3080:
/***/ ((module) => {

// Exports
module.exports = {
	"questionFather": "GetQuestionList_questionFather__ZrSIA",
	"searchContent": "GetQuestionList_searchContent___xhUE",
	"searchTitle": "GetQuestionList_searchTitle__mh_Se",
	"quesClassify": "GetQuestionList_quesClassify__CXibr",
	"childTitle": "GetQuestionList_childTitle__8wvCU",
	"tree": "GetQuestionList_tree__X4MZE",
	"treeTitle": "GetQuestionList_treeTitle__Y__SB",
	"showTree": "GetQuestionList_showTree__ytiQs",
	"type": "GetQuestionList_type__fWrfS",
	"searchGroup": "GetQuestionList_searchGroup__Hxen_",
	"down": "GetQuestionList_down__mg51x",
	"searchOther": "GetQuestionList_searchOther__Z0cQM",
	"level": "GetQuestionList_level__TKJxE",
	"inpValue": "GetQuestionList_inpValue__nE_yh",
	"date": "GetQuestionList_date__U9fW9",
	"delIcon": "GetQuestionList_delIcon__sRpri"
};


/***/ }),

/***/ 86:
/***/ ((module) => {

// Exports
module.exports = {
	"randomContent": "RandomPaperQuestion_randomContent__bP2hj",
	"contTitle": "RandomPaperQuestion_contTitle__BmpQA",
	"bigQues": "RandomPaperQuestion_bigQues__pQU3h",
	"bigEditor": "RandomPaperQuestion_bigEditor__8E4S7",
	"bigEditorDes": "RandomPaperQuestion_bigEditorDes__5wimE",
	"bigQuestionAndScore": "RandomPaperQuestion_bigQuestionAndScore__yEdNc",
	"bigQuesCount": "RandomPaperQuestion_bigQuesCount__teeMR",
	"bigScore": "RandomPaperQuestion_bigScore__i9vSp",
	"deleteBigQues": "RandomPaperQuestion_deleteBigQues__EVNk8",
	"iconDelete": "RandomPaperQuestion_iconDelete__AbogN",
	"downMove": "RandomPaperQuestion_downMove__5y0m7",
	"move": "RandomPaperQuestion_move____avt",
	"activeMove": "RandomPaperQuestion_activeMove___mb5S",
	"details": "RandomPaperQuestion_details__bkrUG",
	"randomTable": "RandomPaperQuestion_randomTable__SalS_",
	"table": "RandomPaperQuestion_table__MhxEG",
	"count": "RandomPaperQuestion_count__DqOlN",
	"quesTreeType": "RandomPaperQuestion_quesTreeType__ZT6au",
	"tree": "RandomPaperQuestion_tree__I9xS9",
	"quesTreeBtn": "RandomPaperQuestion_quesTreeBtn__BZeQX",
	"quesLookIcon": "RandomPaperQuestion_quesLookIcon__eIoeI",
	"addRandomQuestion": "RandomPaperQuestion_addRandomQuestion__Debor",
	"addBtn": "RandomPaperQuestion_addBtn__8e0a0",
	"addIcon": "RandomPaperQuestion_addIcon__AgBqk",
	"changeTitleInput": "RandomPaperQuestion_changeTitleInput__5POaz",
	"changeTitleBtn": "RandomPaperQuestion_changeTitleBtn__zlGra",
	"ant-table-pagination": "RandomPaperQuestion_ant-table-pagination__S67BP",
	"ant-pagination": "RandomPaperQuestion_ant-pagination__iPA58"
};


/***/ }),

/***/ 4603:
/***/ ((module) => {

// Exports
module.exports = {
	"random": "RandomStrategy_random__SUXDx",
	"randomTitle": "RandomStrategy_randomTitle__9Qpjt",
	"randomButton": "RandomStrategy_randomButton___3m_C",
	"randomIcon": "RandomStrategy_randomIcon__0HO4p",
	"randomBtn": "RandomStrategy_randomBtn__9ojXr",
	"QuestionAndScore": "RandomStrategy_QuestionAndScore__qzaGC",
	"quesCount": "RandomStrategy_quesCount__k0pOC",
	"score": "RandomStrategy_score__4QhMw",
	"changeTitleInput": "RandomStrategy_changeTitleInput__ZIHIK",
	"changeTitleBtn": "RandomStrategy_changeTitleBtn__CD1Mt",
	"ant-table-pagination": "RandomStrategy_ant-table-pagination__MQm5_",
	"ant-pagination": "RandomStrategy_ant-pagination__k1hN2"
};


/***/ }),

/***/ 8998:
/***/ ((module) => {

// Exports
module.exports = {
	"examHead": "SmokeManager_examHead__8k_lH",
	"quesCount": "SmokeManager_quesCount__D3vGE",
	"count": "SmokeManager_count__6N_sy",
	"openList": "SmokeManager_openList__tI4lx",
	"downBtn": "SmokeManager_downBtn__lsHuG",
	"examTable": "SmokeManager_examTable__um6kW"
};


/***/ }),

/***/ 1883:
/***/ ((module) => {

// Exports
module.exports = {
	"chapter_box": "ChapterPratice_chapter_box__8I4h9",
	"example": "ChapterPratice_example__d0X4e",
	"tabel_content": "ChapterPratice_tabel_content__SPfmL",
	"chapter_header": "ChapterPratice_chapter_header__bRx4T",
	"btn": "ChapterPratice_btn__Eo3Og",
	"alertCommon_content": "ChapterPratice_alertCommon_content__VcvHA",
	"alertCommon_footer": "ChapterPratice_alertCommon_footer__5f94U",
	"ant-popover-content": "ChapterPratice_ant-popover-content__RSvWo"
};


/***/ })

};
;