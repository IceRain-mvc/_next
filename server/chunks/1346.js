exports.id = 1346;
exports.ids = [1346];
exports.modules = {

/***/ 7215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ send)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function send(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'send-email/sendCode',
    method: 'post',
    data
  });
}

/***/ }),

/***/ 1346:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4285);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7374);
/* harmony import */ var antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_space__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5893);
/* harmony import */ var antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_popover__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _email_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8561);
/* harmony import */ var _email_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_email_module_scss__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _api_exam_createCrews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1417);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var rc_textarea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8880);
/* harmony import */ var rc_textarea__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(rc_textarea__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_studentManage_students__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7363);
/* harmony import */ var _api_sendEmail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(7215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__);















const Editor = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => __webpack_require__.e(/* import() */ 1853).then(__webpack_require__.bind(__webpack_require__, 6153)), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(6153)],
    modules: ["../src/components/exam/code/Email.tsx -> " + './dynaRender']
  }
});

const Email = props => {
  const {
    alertFlag,
    setFlag,
    examId,
    url,
    coder,
    exerciseId
  } = props; // 参考方式

  const {
    0: examWay,
    1: setExamWay
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null); // 考试口令

  const {
    0: password,
    1: setPassWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // 考试名称

  const {
    0: title,
    1: setExamTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // 指定考生列表

  const {
    0: student,
    1: setStudent
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]); // 二维码链接

  const {
    0: examCoder,
    1: setCoder
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // markdown默认内容

  const {
    0: markValue,
    1: setValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(); // onchange事件改变后的内容

  const {
    0: lastValue,
    1: setLastValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // 考生id

  const {
    0: studentId,
    1: setId
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // 接收邮件考生

  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(''); // 考生eMail

  const {
    0: stuEmail,
    1: setEmail
  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  const getExamList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_7__/* .getThisExamMessage */ .nG)(examId).then(res => {
      setExamWay(res.participationWay.partId);
      setPassWord(res.examPassword);
      setExamTitle(res.examTitle);
      setStudent(res.students);
      setCoder(res.qrCode);

      if (examWay === 2 || examWay === 3) {
        setValue('您好， \n 邀请您参加考试 ”' + title + '“，您可以通过如下两种方式参加：\n本次考试口令：' + password + '\n 1、打开链接参加考试：\n' + url + '\n' + ' 2.扫描二维码参加考试：\n' + '![](' + coder + ')');
      } else if (examWay === 1 || examWay === 4) {
        setValue('您好， \n 邀请您参加考试 ”' + title + '“，您可以通过如下两种方式参加：\n' + '\n 1、打开链接参加考试：\n' + url + '\n' + ' 2.扫描二维码参加考试：\n' + '![](' + coder + ')');
      }
    });
  }, [coder, examId, url, examWay, password, title]);
  const getExerciseList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    (0,_api_exam_createCrews__WEBPACK_IMPORTED_MODULE_7__/* .getThisExerciseMessage */ .np)(exerciseId).then(result => {
      setExamWay(result.exerciseWay.partId);
      setPassWord(result.exercisePassword);
      setExamTitle(result.exerciseTitle);
      setStudent(result.students);
      setCoder(result.qrCode);

      if (examWay === 2 || examWay === 3) {
        setValue('您好， \n 邀请您参加练习 ”' + title + '“，您可以通过如下两种方式参加：\n本次练习口令：' + password + '\n 1、打开链接参加练习：\n' + url + '\n' + ' 2.扫描二维码参加练习：\n' + '![](' + coder + ')');
      } else if (examWay === 1 || examWay === 4) {
        setValue('您好， \n 邀请您参加练习 ”' + title + '“，您可以通过如下两种方式参加：\n' + '\n 1、打开链接参加练习：\n' + url + '\n' + ' 2.扫描二维码参加练习：\n' + '![](' + coder + ')');
      }
    });
  }, [coder, exerciseId, url, examWay, password, title]); // 获取考试信息

  const getList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(() => {
    if (exerciseId) {
      console.log(1);
      getExerciseList();
    } else if (examId) {
      console.log(2);
      getExamList();
    }
  }, [examId, exerciseId, getExamList, getExerciseList]); // markdown的change的事件

  const changeValue = value => {
    setLastValue(value);
  }; // popover


  const content = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default()), {
      lang: 'small',
      onChange: e => {
        setEmail(e.target.value);
      }
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
      size: 'small',
      style: {
        margin: '20px 100px'
      },
      onClick: async () => {
        if (stuEmail) {
          await (0,_api_studentManage_students__WEBPACK_IMPORTED_MODULE_10__/* .changeDate */ .Mv)({
            id: studentId,
            eMail: stuEmail,
            treePersonId: 5
          });
          await getExamList();
        }
      },
      children: "\u4FDD\u5B58"
    })]
  });

  const pop = {
    width: 280
  }; // 表格

  const columns = [{
    title: '邮箱',
    key: 'eMail',
    render: (ext, record) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)((antd_lib_space__WEBPACK_IMPORTED_MODULE_2___default()), {
      size: "middle",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
        children: record.eMail === null ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("span", {
          style: {
            color: 'red'
          },
          children: "\u6CA1\u6709\u90AE\u7BB1\u4FE1\u606F\uFF0C\u8BF7\u586B\u5199"
        }) : record.eMail
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_popover__WEBPACK_IMPORTED_MODULE_3___default()), {
        placement: "right",
        defaultVisible: false,
        content: content,
        trigger: "click",
        overlayStyle: pop,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("a", {
          onClick: () => {
            setId(record.id);
          },
          children: "\u4FEE\u6539"
        })
      })]
    })
  }, {
    title: '姓名',
    dataIndex: 'studentName',
    key: 'studentName'
  }, {
    title: '账号',
    dataIndex: 'studentNumber',
    key: 'studentNumber'
  }, {
    title: '所属组织',
    dataIndex: '振涛',
    key: ''
  }]; // 邮件发送

  const sendEmail = async studentsList => {
    console.log(studentsList);

    if (lastValue === '') {
      const textBefore = markValue.split('![')[0];
      await (0,_api_sendEmail__WEBPACK_IMPORTED_MODULE_11__/* .send */ .l)({
        studentsList,
        textBefore,
        examCoder,
        textAfter: ''
      }).then(res => {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(res);
      });
    } else {
      const textBefore = lastValue.split('![')[0];
      const textAfter = lastValue.split(')')[1];
      await (0,_api_sendEmail__WEBPACK_IMPORTED_MODULE_11__/* .send */ .l)({
        studentsList,
        textBefore,
        examCoder,
        textAfter
      }).then(res => {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(res);
      });
    }
  }; // 点击发送邮件


  const senEmail = async () => {
    if (examWay === 4) {
      const studentsList = [];
      student.forEach(item => {
        studentsList.push(item.eMail);
      });
      await sendEmail(studentsList);
    } else {
      await sendEmail(user);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    getList();
  }, [getList]);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
    className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().sendEmail),
    style: {
      display: alertFlag ? 'block' : 'none'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().email_title),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
        className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().tit),
        children: examId ? '发送考试通知' : '发送练习通知'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("ul", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().left),
          children: "\u90AE\u4EF6\u6807\u9898"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().right),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
            className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().email_head),
            children: [examId ? '【考试通知】- 请参加考试' : '【练习通知】- 请参加练习', " \u201D", title, "\u201C"]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().left),
          children: "\u90AE\u4EF6\u5185\u5BB9"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().right),
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("div", {
            className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().code),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx(Editor, {
              style: {
                height: 300
              },
              data: markValue,
              changeValue: changeValue
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().left),
          children: examWay === 4 ? '收件人列表' : '收件人邮箱'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("li", {
          className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().right),
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx("p", {
            style: {
              color: '#737373'
            },
            children: examWay === 4 ? '' : '多个邮箱以逗号","隔开，如：a@qq.com,b@sina.com'
          }), examWay === 4 ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_table__WEBPACK_IMPORTED_MODULE_0___default()), {
            columns: columns,
            dataSource: student,
            rowKey: 'id',
            pagination: false,
            bordered: true
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((rc_textarea__WEBPACK_IMPORTED_MODULE_9___default()), {
            style: {
              padding: '0 4px'
            },
            cols: 163,
            rows: 6,
            onChange: e => {
              setUser(e.target.value);
            }
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
        className: (_email_module_scss__WEBPACK_IMPORTED_MODULE_13___default().Email_foot),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
          type: "primary",
          style: {
            margin: '10px'
          },
          onClick: senEmail,
          children: "\u53D1\u9001"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_4___default()), {
          type: "primary",
          style: {
            margin: '10px'
          },
          onClick: () => {
            setFlag(false);
          },
          children: "\u5173\u95ED"
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);

/***/ }),

/***/ 8561:
/***/ ((module) => {

// Exports
module.exports = {
	"sendEmail": "email_sendEmail__mBMFv",
	"email_title": "email_email_title__njoUR",
	"tit": "email_tit__zV5fK",
	"left": "email_left__SQCSe",
	"right": "email_right__ZPhXO",
	"email_head": "email_email_head__OUnGu",
	"Email_foot": "email_Email_foot__mxcfO"
};


/***/ })

};
;