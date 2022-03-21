exports.id = 2905;
exports.ids = [2905];
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

/***/ 4299:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8001);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5842);
/* harmony import */ var antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_sendEmail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7215);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);





const RedactMark = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_2__["default"])(() => __webpack_require__.e(/* import() */ 1748).then(__webpack_require__.bind(__webpack_require__, 1748)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1748)],
    modules: ["../src/components/SendCourse/index.tsx -> " + '@/components/markdown/redactMark']
  }
});





const QRCode = __webpack_require__(3860);

const SendCourse = props => {
  const {
    isEmailer,
    isAll,
    sendErrorEmail,
    courseName
  } = props;
  const {
    0: lastValue,
    1: setlastValue
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const {
    0: chapterName,
    1: setChapterName
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(`【学习通知】- 参加课程 “${courseName}”`);
  const {
    0: tacitly,
    1: setTacitly
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(`你好，\n    邀请你参加课程 “${courseName}”，您可以复制下面的链接或者扫描二维码参加课程学习\n\n复制链学习课程：https://i.kaoshiyun.com.cn/v5/lesson/9b44d1\n\n或者扫描二维码学习课程：\n\n![${courseName}](https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/exam_project/5d33770ee3332e75.png)`);
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(''); // 获取父盒子

  const ele = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);

  const getContent = mdData => {
    setlastValue(mdData);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    isEmailer(text); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (!isAll) {
      // 判断元素是否出现了滚动条
      if (ele.current.scrollHeight > ele.current.clientHeight) {
        // 设置滚动条到最底部
        ele.current.scrollTop = ele.current.scrollHeight;
      }
    }
  }, [isAll]); // 邮件发送

  const sendEmail = async studentsList => {
    if (lastValue === '') {
      const textBefore = tacitly.split('![')[0];
      await (0,_api_sendEmail__WEBPACK_IMPORTED_MODULE_5__/* .send */ .l)({
        studentsList,
        textBefore,
        textAfter: ''
      }).then(res => {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(res);
      });
    } else {
      const textBefore = lastValue.split('![')[0];
      const textAfter = lastValue.split(')')[1];
      await (0,_api_sendEmail__WEBPACK_IMPORTED_MODULE_5__/* .send */ .l)({
        studentsList,
        textBefore,
        textAfter
      }).then(res => {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_1___default().success(res);
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().articleContent),
    ref: ele,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapter),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("span", {
          children: "*"
        }), " \u6587\u7AE0\u540D\u79F0"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_0___default()), {
          value: chapterName,
          placeholder: "\u8BF7\u8F93\u5165\u90AE\u4EF6\u6807\u9898...",
          onChange: e => {
            setChapterName(e.target.value);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterSend),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().sendContent),
        children: "\u90AE\u4EF6\u5185\u5BB9"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterTime),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(RedactMark, {
          previewMode: true,
          getContent: getContent,
          tacitly: tacitly
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterSend1),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().sendContent),
        children: "\u6536\u4EF6\u4EBA\u90AE\u7BB1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterTime),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("p", {
          style: {
            color: 'rgb(147, 145, 145)'
          },
          children: "\u591A\u4E2A\u90AE\u7BB1\u4EE5\u5206\u53F7(;)\u9694\u5F00,\u5982\uFF1Aa@qq.com;b@qq.com"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4___default()), {
          value: text,
          onChange: e => {
            setText(e.target.value);
          },
          placeholder: "",
          autoSize: {
            minRows: 10,
            maxRows: 10
          }
        })]
      })]
    }), isAll === false ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterSend1),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().sendContent),
        children: "\u4EE5\u4E0B\u90AE\u7BB1\u53D1\u9001\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().chapterTime),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_input_TextArea__WEBPACK_IMPORTED_MODULE_4___default()), {
          style: {
            color: 'red'
          },
          value: sendErrorEmail,
          autoSize: {
            minRows: 10,
            maxRows: 10
          }
        })
      })]
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SendCourse);

/***/ }),

/***/ 2905:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ releaseCourse)
});

// EXTERNAL MODULE: external "antd/lib/space"
var space_ = __webpack_require__(7374);
var space_default = /*#__PURE__*/__webpack_require__.n(space_);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/releaseCourse/index.module.css
var index_module = __webpack_require__(4959);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/alertCommon/alertCommon.tsx
var alertCommon = __webpack_require__(2625);
// EXTERNAL MODULE: ./src/components/SendCourse/index.tsx
var SendCourse = __webpack_require__(4299);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/utils/sendeEmailURL.ts
const EmailURL = 'https://i.kaoshiyun.com.cn/v5/login/9003c003f00410039003f0042';
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/releaseCourse/index.tsx






const QRCode = __webpack_require__(3860);









const ReleaseCourse = props => {
  const {
    0: btn,
    1: setbtn
  } = (0,external_react_.useState)(false);
  const {
    0: alertShow,
    1: setalertShow
  } = (0,external_react_.useState)(false);
  const {
    0: loadings,
    1: setLoadings
  } = (0,external_react_.useState)(false);
  const {
    0: buttonText,
    1: setButtonText
  } = (0,external_react_.useState)('发送');
  const {
    0: emailVal,
    1: setEmailVal
  } = (0,external_react_.useState)(''); // 判断邮箱是全部发送了还是部分发送了

  const {
    0: mailIsAll,
    1: setMailIsAll
  } = (0,external_react_.useState)(true); // 获取发送失败的邮箱地址

  const {
    0: sendErrorEmail,
    1: setSendErrorEmail
  } = (0,external_react_.useState)('');
  const router = (0,router_.useRouter)();
  const Router = router.query; // 一键复制功能

  const copy = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const copyDom = document.querySelector('input');
    copyDom.select();
    const success = document.execCommand('copy');
    window.getSelection().removeAllRanges();

    if (success) {
      setbtn(true);
    }
  }; // 调用弹窗事件


  const alertdialog = () => {
    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const enterLoading = index => {
    // eslint-disable-next-line no-useless-escape
    const r = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    const arr = emailVal.split(';');
    const errorArr = [];
    const CorrectArrAll = []; // 清除空字符串

    arr.forEach((item, index) => {
      if (item === '') {
        arr.splice(index, 1);
      }
    }); // 去掉重复邮箱

    const CorrectArr = Array.from(new Set(arr)); // console.log(CorrectArr);
    // 筛选是否都是正确的邮箱地址
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const isAll = CorrectArr.every((item, index) => {
      return r.test(item);
    }); // 把正确的邮箱地址和不正确的邮箱地址分开

    CorrectArr.forEach((item, index) => {
      if (!r.test(item)) {
        // 错误的邮箱
        errorArr.push(item);
      } else {
        // 正确的邮箱
        CorrectArrAll.push(item);
      }
    }); // console.log(CorrectArrAll);
    // console.log(errorArr);
    // 发送邮件的时候判断有没有输入邮箱地址

    if (emailVal.length !== 0) {
      // 判断邮箱地址是否是正确格式z
      if (isAll) {
        setLoadings(true);
        setButtonText('正在发送');
        setTimeout(() => {
          // 在这里我要获取邮箱账号进行验证,
          // 再发送到服务器,发送邮箱
          message_default().success('全部发送成功');

          setButtonText('发送');
          setLoadings(false); // 关闭显示未发送成功的邮箱地址

          setMailIsAll(isAll);
        }, 2000);
      } else {
        setLoadings(true);
        setButtonText('正在发送');
        setTimeout(() => {
          // 在这里我要获取邮箱账号进行验证,
          // 再发送到服务器,发送邮箱
          message_default().success('部分发送成功');

          setButtonText('发送');
          setLoadings(false); // 显示未发送成功的邮箱地址

          setMailIsAll(isAll); // 保存发送失败的邮箱地址

          setSendErrorEmail(errorArr.join('\n'));
        }, 2000);
      }
    } else {
      message_default().warning('请填写要发送的邮箱地址');
    }
  }; // 传给发送邮件组件的方法,用来接收邮箱


  const isEmailer = EmailVal => {
    // 缓存邮箱
    setEmailVal(EmailVal);
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (index_module_default()).release,
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (index_module_default()).release_title,
      children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
        children: "\u4EE5\u4E0B\u4EFB\u610F\u4E00\u79CD\u65B9\u5F0F\u901A\u77E5\u5B66\u5458\u5B66\u4E60\u8BFE\u7A0B"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (index_module_default()).release_content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "1\u3001\u5C06\u4E8C\u7EF4\u7801\u53D1\u7ED9\u5B66\u5458\uFF0C\u626B\u63CF\u5B66\u4E60\u8BFE\u7A0B"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx(QRCode, {
            value: EmailURL,
            size: 200
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "2\u3001\u590D\u5236\u8BFE\u7A0B\u94FE\u63A5\u53D1\u7ED9\u8003\u751F\uFF0C\u6253\u5F00\u94FE\u63A5\u53C2\u52A0\u8BFE\u7A0B"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          style: {
            height: '36px',
            display: 'flex'
          },
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              // eslint-disable-next-line @typescript-eslint/no-empty-function
              onChange: () => {},
              style: {
                width: '270px',
                height: '36px',
                opacity: 0,
                position: 'absolute',
                zIndex: '-999'
              },
              type: "text",
              value: EmailURL
            }), /*#__PURE__*/jsx_runtime_.jsx("a", {
              target: "_blank",
              href: "/course/create#",
              rel: "noreferrer",
              children: EmailURL
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: (index_module_default()).copy,
            children: btn ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              onClick: copy,
              style: {
                color: 'rgb(26, 140, 254)'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckOutlined, {}), "\u5DF2\u590D\u5236\u6210\u529F"]
            }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
              onClick: copy,
              className: (index_module_default()).btn,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CopyOutlined, {}), ' ' + ' 复制课程链接']
            })
          })]
        })]
      }), props.qrcodeType && props.qrcodeType === true ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          children: "3\u3001\u53D1\u9001\u90AE\u4EF6\uFF0C\u901A\u77E5\u5B66\u5458\u53C2\u52A0\u8BFE\u7A0B\u5B66\u4E60"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          onClick: alertdialog,
          children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            icon: /*#__PURE__*/jsx_runtime_.jsx(icons_.MailOutlined, {}),
            children: "\u53D1\u9001\u8BFE\u7A0B\u901A\u77E5"
          })
        })]
      }) : null]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(alertCommon["default"], {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '发送课程通知',
      changeAlertFlag: changeAlertFlag,
      children: [/*#__PURE__*/jsx_runtime_.jsx(SendCourse/* default */.Z, {
        isEmailer: isEmailer,
        isAll: mailIsAll,
        sendErrorEmail: sendErrorEmail,
        courseName: Router.courseName
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).UploadsBottom,
        children: [/*#__PURE__*/jsx_runtime_.jsx((space_default()), {
          children: /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
            type: "primary",
            loading: loadings,
            onClick: enterLoading,
            children: buttonText
          })
        }), /*#__PURE__*/jsx_runtime_.jsx((button_default()), {
          onClick: () => {
            changeAlertFlag(false);
          },
          children: "\u5173\u95ED"
        })]
      })]
    })]
  });
};

/* harmony default export */ const releaseCourse = (ReleaseCourse);

/***/ }),

/***/ 8001:
/***/ ((module) => {

// Exports
module.exports = {
	"articleContent": "SendCourse_articleContent__dRKHN",
	"chapter": "SendCourse_chapter__AUdZQ",
	"chapterName": "SendCourse_chapterName__UNBat",
	"chapterSend": "SendCourse_chapterSend__6s8Rm",
	"sendContent": "SendCourse_sendContent__c_3hq",
	"chapterTime": "SendCourse_chapterTime__roc4L",
	"chapterSend1": "SendCourse_chapterSend1__SAju8"
};


/***/ }),

/***/ 4959:
/***/ ((module) => {

// Exports
module.exports = {
	"release": "releaseCourse_release__ScbqE",
	"release_title": "releaseCourse_release_title__PePCQ",
	"release_content": "releaseCourse_release_content__Svb2p",
	"copy": "releaseCourse_copy__PW3fy",
	"UploadsBottom": "releaseCourse_UploadsBottom__WWh8q",
	"btn": "releaseCourse_btn__CXdzq"
};


/***/ })

};
;