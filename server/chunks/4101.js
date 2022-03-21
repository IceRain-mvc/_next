"use strict";
exports.id = 4101;
exports.ids = [4101,5764,6594];
exports.modules = {

/***/ 5764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "yE": () => (/* binding */ getOperationData),
/* harmony export */   "TH": () => (/* binding */ addOperationData),
/* harmony export */   "Kn": () => (/* binding */ getAddress)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 获取全部数据

function getOperationData(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getAll',
    method: 'GET',
    params
  });
} // 添加数据

function addOperationData(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/addOpreationLog',
    method: 'POST',
    data
  });
} // 获取ip地址

function getAddress() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'operationLog/getIP',
    method: 'GET'
  });
}

/***/ }),

/***/ 4101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(803);
/* harmony import */ var _component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _ant_design_icons_lib_icons_LineChartOutlined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8339);
/* harmony import */ var _ant_design_icons_lib_icons_LineChartOutlined__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_LineChartOutlined__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3221);
/* harmony import */ var _ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ant_design_icons_lib_icons_SwitcherOutlined__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6401);
/* harmony import */ var _ant_design_icons_lib_icons_SwitcherOutlined__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_SwitcherOutlined__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3911);
/* harmony import */ var _ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2746);
/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3447);
/* harmony import */ var _ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4162);
/* harmony import */ var _ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4824);
/* harmony import */ var _ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons_lib_icons_FileWordOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6654);
/* harmony import */ var _ant_design_icons_lib_icons_FileWordOutlined__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_FileWordOutlined__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9509);
/* harmony import */ var _ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _ant_design_icons_lib_icons_ProfileOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5930);
/* harmony import */ var _ant_design_icons_lib_icons_ProfileOutlined__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ProfileOutlined__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _ant_design_icons_lib_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8086);
/* harmony import */ var _ant_design_icons_lib_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(729);
/* harmony import */ var _ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4948);
/* harmony import */ var _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(789);
/* harmony import */ var _ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _ant_design_icons_lib_icons_QuestionCircleOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5497);
/* harmony import */ var _ant_design_icons_lib_icons_QuestionCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_QuestionCircleOutlined__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7996);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(3984);
/* harmony import */ var antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(1533);
/* harmony import */ var _ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(5764);
/* harmony import */ var _analyse_popup__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(3426);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__);
































// 获取用户名和IP地址;
const getlocalcache = () => {
  const user = localStorage.getItem('user') || '';
  const IP = localStorage.getItem('userIp') || '';
  const obj = {
    user,
    IP
  };
  return obj;
}; // 添加工作日志


const addOperationLogData = async params => {
  const res = await (0,_api_operationLog_operationLog__WEBPACK_IMPORTED_MODULE_25__/* .addOperationData */ .TH)(params);
  return res;
};

const ExamNameColumn = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_23__.useRouter)();
  const {
    item,
    getExamDataCount,
    setExamIds,
    setPaperExamId,
    openNotification,
    getExamListData,
    getExerciseListData,
    setalertShow,
    examListPage,
    pageSize,
    setAlertWhoText,
    setAlertWhoFlag,
    setDelId,
    setIsModalVisible,
    setScore,
    setExamQRCode,
    setQRCodeAlertShow,
    setCloseCopy,
    closeCopy,
    setCopyId,
    copyId,
    setEditBtn,
    editBtn,
    setStatistical,
    statistical,
    setTreeShow,
    setIsLoading,
    exercise,
    setSendEmailPopupShow,
    setExerciseType
  } = props;
  const scoreNum = 0; // 成绩：有几个有成绩的了:有几个答过题的

  const {
    0: copyIndex,
    1: setCopyIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: BulletFlag,
    1: setBulletFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false); // 弹窗

  const {
    0: BulletId,
    1: setBulletId
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('1'); // 弹窗

  const {
    0: copyCon
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([{
    key: 0,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_15___default()), {}),
    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().aaCon),
      children: "\u4EC5\u590D\u5236\u8003\u8BD5\u53CA\u8BBE\u7F6E\u4FE1\u606F\uFF0C\u4E0D\u590D\u5236\u8BD5\u5377"
    })
  }, {
    key: 1,
    icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_ProfileOutlined__WEBPACK_IMPORTED_MODULE_11___default()), {}),
    content: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().aaCon),
      children: "\u5168\u90E8\u590D\u5236"
    })
  }]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
    className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().ExamNameColumnMain),
    onClick: e => {
      e.stopPropagation();
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("ul", {
      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().orderRight),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().firP) + ' ' + (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().firPBorder),
        onClick: () => {
          setCopyId(''); // 调用成绩的弹窗

          item.exercisePattern !== 0 && setBulletId('1');
          item.exercisePattern !== 0 && setBulletFlag(true);
        },
        children: item.exercisePattern === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {
            style: {
              marginRight: '4px'
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
            children: "\u7EC3\u4E60\u7EDF\u8BA1"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_LineChartOutlined__WEBPACK_IMPORTED_MODULE_1___default()), {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("span", {
            children: ["\u6210\u7EE9(", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("b", {
              children: scoreNum
            }), ")"]
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().lastP),
        onClick: () => {
          setCopyId('');
          setExamIds(exercise ? item.exerciseId : item.examId); // 存一下当前的id  传递给设置的弹窗

          item.paperExam && setPaperExamId(item.paperExam.id || -1);
          setScore(exercise ? item.exerciseConfig.fullMarks : item.examConfig.fullMarks); // 此次成绩

          setExerciseType(item.exercisePattern); // 调用设置的弹窗

          setalertShow(true);
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_SettingOutlined__WEBPACK_IMPORTED_MODULE_2___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
          children: "\u8BBE\u7F6E"
        })]
      }), item.exercisePattern !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().lastP),
        onClick: () => {
          setStatistical(false);
          setEditBtn(false);
          setTreeShow(false);

          if (closeCopy && (exercise ? item.exerciseId : item.examId) !== copyId) {
            setCloseCopy(true);
          } else {
            setCloseCopy(!closeCopy);
          }

          setCopyId(exercise ? item.exerciseId : item.examId);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((antd_lib_popconfirm__WEBPACK_IMPORTED_MODULE_21___default()), {
          placement: "left",
          className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().copyPops),
          visible: copyId === (exercise ? item.exerciseId : item.examId) && closeCopy,
          getPopupContainer: () => document.getElementById('selectMain'),
          title: () => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.Fragment, {
              children: copyCon.map((item, index) => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)("div", {
                  className: copyIndex === index ? (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().copyDiv) + ' ' + (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().copyActive) : (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().copyDiv),
                  onClick: e => {
                    e.stopPropagation();
                    setCopyIndex(index);
                  },
                  children: [item.icon, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                    style: {
                      width: '232px'
                    },
                    children: item.content
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_CheckOutlined__WEBPACK_IMPORTED_MODULE_24___default()), {
                    className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().CheckOutlined)
                  })]
                }, item.key);
              })
            });
          },
          onConfirm: async () => {
            // copyIndex下标：0局部复制，1全部复制
            exercise ? await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .copyExerciseData */ .ID)({
              exerciseId: item.exerciseId,
              type: copyIndex
            }) : await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .copyExamData */ .lG)({
              examId: item.examId,
              type: copyIndex
            });
            exercise ? getExerciseListData(1, pageSize) : getExamListData(1, pageSize);
            getExamDataCount();
            addOperationLogData({
              operationName: getlocalcache().user,
              IPAddress: getlocalcache().IP,
              operationType: '复制考试',
              detail: `复制并创建考试：${props.title}(复制)`
            });
            antd_lib_message__WEBPACK_IMPORTED_MODULE_20___default().success('复制成功');
          },
          okText: "\u5F00\u59CB\u590D\u5236",
          cancelText: true,
          icon: null,
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_SwitcherOutlined__WEBPACK_IMPORTED_MODULE_3___default()), {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
            children: "\u590D\u5236"
          })]
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().slash),
        children: "\u4E28"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().lastP),
        onClick: () => {
          setStatistical(false);
          setCloseCopy(false);
          setTreeShow(false);

          if (editBtn && (exercise ? item.exerciseId : item.examId) !== copyId) {
            setEditBtn(true);
          } else {
            setEditBtn(!editBtn);
          }

          setCopyId(exercise ? item.exerciseId : item.examId);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_22___default()), {
          direction: "vertical",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_22___default()), {
            wrap: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_18___default()), {
              overlay: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default()), {
                className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuCensus),
                children: (item.isPublish && item.paperExam ? [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                  content: `编辑${exercise ? '练习' : '考试'}`
                }, {
                  key: 1,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                  content: '设计试卷'
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                  content: '二维码&链接'
                }, {
                  key: 3,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                  content: item.star === 1 ? '取消星标' : '设置为星标'
                }, {
                  key: 4,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                  content: `发送${exercise ? '练习' : '考试'}通知`
                }, {
                  key: 5,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_FileWordOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                  content: '导出试卷'
                }, {
                  key: 6,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                  content: '删除到回收站'
                }] : item.isPublish && !item.paperExam ? [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                  content: `编辑${exercise ? '练习' : '考试'}`
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_QrcodeOutlined__WEBPACK_IMPORTED_MODULE_6___default()), {}),
                  content: '二维码&链接'
                }, {
                  key: 3,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                  content: item.star === 1 ? '取消星标' : '设置为星标'
                }, {
                  key: 4,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_MailOutlined__WEBPACK_IMPORTED_MODULE_8___default()), {}),
                  content: `发送${exercise ? '练习' : '考试'}通知`
                }, {
                  key: 5,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_FileWordOutlined__WEBPACK_IMPORTED_MODULE_9___default()), {}),
                  content: '导出试卷'
                }, {
                  key: 6,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                  content: '删除到回收站'
                }] : !item.isPublish && item.paperExam ? [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                  content: `编辑${exercise ? '练习' : '考试'}`
                }, {
                  key: 1,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_5___default()), {}),
                  content: '设计试卷'
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                  content: item.star === 1 ? '取消星标' : '设置为星标'
                }, {
                  key: 3,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                  content: '删除到回收站'
                }] : !item.isPublish && !item.paperExam && [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_EditOutlined__WEBPACK_IMPORTED_MODULE_4___default()), {}),
                  content: `编辑${exercise ? '练习' : '考试'}`
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_StarFilled__WEBPACK_IMPORTED_MODULE_7___default()), {}),
                  content: item.star === 1 ? '取消星标' : '设置为星标'
                }, {
                  key: 3,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_RestOutlined__WEBPACK_IMPORTED_MODULE_10___default()), {}),
                  content: '删除到回收站'
                }]).map(ite => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default().Item), {
                    onClick: async () => {
                      // 点击了哪条
                      if (ite.content === '设置为星标') {
                        setIsLoading(false);
                        exercise ? await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .setExerciseStar */ .fS)({
                          exerciseId: item.exerciseId
                        }) : await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .setExamStar */ .Ih)({
                          examId: item.examId
                        });
                        openNotification('已设置为星标', false);
                        exercise ? getExerciseListData(examListPage, pageSize) : getExamListData(examListPage, pageSize);
                        setIsLoading(false);
                      } else if (ite.content === '取消星标') {
                        setIsLoading(false);
                        exercise ? await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .setNoExerciseStar */ .fL)({
                          exerciseId: item.exerciseId
                        }) : await (0,_api_exam_examLists_examLists__WEBPACK_IMPORTED_MODULE_17__/* .setNoExamStar */ .K8)({
                          examId: item.examId
                        });
                        openNotification('已取消星标', false);
                        exercise ? getExerciseListData(examListPage, pageSize) : getExamListData(examListPage, pageSize);
                        setIsLoading(false);
                      } else if (ite.content === '删除到回收站') {
                        setAlertWhoText('确认删除到回收站吗？');
                        setAlertWhoFlag(4);
                        setDelId(exercise ? item.exerciseId : item.examId);
                        setIsModalVisible(true);
                      } else if (ite.content === '编辑考试') {
                        await router.push({
                          pathname: '/exam/createCrew',
                          query: {
                            examId: item.examId
                          }
                        });
                      } else if (ite.content === '编辑练习') {
                        await router.push({
                          pathname: '/exercise/createExercise',
                          query: {
                            createdExerciseId: item.exerciseId
                          }
                        });
                      } else if (ite.content === '设计试卷') {
                        await router.push({
                          pathname: exercise ? '/SimulationTest' : '/design/Design',
                          query: exercise ? {
                            exerciseId: item.exerciseId,
                            paperId: item.paperExam.id,
                            type: item.paperExam.paperType,
                            isPublish: item.isPublish,
                            exercisePattern: item.exercisePattern
                          } : {
                            examId: item.examId,
                            paperId: item.paperExam.id,
                            type: item.paperExam.paperType,
                            isPublish: item.isPublish
                          }
                        });
                      } else if (ite.content === '二维码&链接') {
                        setExamQRCode(item.qrCode);
                        setExamIds(exercise ? item.exerciseId : item.examId);
                        setQRCodeAlertShow(true);
                      } else if (ite.content === '发送练习通知' || ite.content === '发送考试通知') {
                        setExamIds(exercise ? item.exerciseId : item.examId);
                        setExamQRCode(item.qrCode);
                        setSendEmailPopupShow(true); // 打开弹窗
                      } else if (ite.content === '导出试卷') {// router.push(item.href); // 要跳转的路径
                      }
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuSpan),
                      children: ite.icon
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuSpan),
                      children: ite.content
                    })]
                  }, ite.key);
                })
              }),
              visible: copyId === (exercise ? item.exerciseId : item.examId) && editBtn,
              trigger: ['click'],
              placement: "bottomLeft",
              getPopupContainer: () => document.getElementById('selectMain'),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().afters),
                children: "\u7F16\u8F91"
              })
            })
          })
        })
      }), item.exercisePattern !== 0 && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("li", {
        className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().lastP),
        onClick: () => {
          setCloseCopy(false);
          setEditBtn(false);
          setTreeShow(false);

          if (statistical && (exercise ? item.exerciseId : item.examId) !== copyId) {
            setStatistical(true);
          } else {
            setStatistical(!statistical);
          }

          setCopyId(exercise ? item.exerciseId : item.examId);
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_22___default()), {
          direction: "vertical",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_space__WEBPACK_IMPORTED_MODULE_22___default()), {
            wrap: true,
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_18___default()), {
              getPopupContainer: () => document.getElementById('selectMain'),
              overlay: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default()), {
                className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuCensus),
                children: (item.isPublish ? [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_ApartmentOutlined__WEBPACK_IMPORTED_MODULE_12___default()), {}),
                  content: '人工评卷'
                }, {
                  key: 1,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                  content: '成绩统计'
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                  content: '答题统计'
                }, {
                  key: 3,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_QuestionCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {}),
                  content: `查看${exercise ? '练习' : '考试'}反馈`
                }] : [{
                  key: 0,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_13___default()), {}),
                  content: '成绩统计'
                }, {
                  key: 1,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_14___default()), {}),
                  content: '答题统计'
                }, {
                  key: 2,
                  icon: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx((_ant_design_icons_lib_icons_QuestionCircleOutlined__WEBPACK_IMPORTED_MODULE_16___default()), {}),
                  content: `查看${exercise ? '练习' : '考试'}反馈`
                }]).map(ite => {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsxs)((antd_lib_menu__WEBPACK_IMPORTED_MODULE_19___default().Item), {
                    onClick: () => {
                      // 点击了哪条
                      if (ite.content === '人工评卷') {
                        setBulletId('3');
                        setBulletFlag(true);
                      } else if (ite.content === '成绩统计') {
                        setBulletId('4');
                        setBulletFlag(true);
                      } else if (ite.content === '答题统计') {
                        setBulletId('7');
                        setBulletFlag(true);
                      } else if (ite.content === '查看考试反馈') {
                        setBulletId('8');
                        setBulletFlag(true);
                      } else if (ite.content === '查看练习反馈') {
                        setBulletId('8');
                        setBulletFlag(true);
                      }
                    },
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuSpan),
                      children: ite.icon
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                      className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().menuSpan),
                      children: ite.content
                    })]
                  }, ite.key);
                })
              }),
              visible: copyId === (exercise ? item.exerciseId : item.examId) && statistical,
              trigger: ['click'],
              placement: "bottomRight",
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx("span", {
                className: (_component_exam_examList_publicExamCon_examListContent_module_scss__WEBPACK_IMPORTED_MODULE_28___default().afters),
                children: "\u7EDF\u8BA1"
              })
            })
          })
        })
      })]
    }), BulletFlag && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_27__.jsx(_analyse_popup__WEBPACK_IMPORTED_MODULE_26__["default"], {
      id: BulletId // 点击的是哪个选项
      // 打开关闭弹窗的事件
      ,
      Transfer: () => {
        setBulletFlag(!BulletFlag);
      },
      distinction: exercise ? '5' : '1',
      identification: '',
      gradeId: '',
      absenteeDate: '',
      absenteeTitle: exercise ? item.exerciseTitle : item.examTitle
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ExamNameColumn);

/***/ })

};
;