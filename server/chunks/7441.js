exports.id = 7441;
exports.ids = [7441];
exports.modules = {

/***/ 4075:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_2": () => (/* binding */ getChildAdminAll),
/* harmony export */   "$t": () => (/* binding */ addChildAdmin),
/* harmony export */   "cj": () => (/* binding */ deleteChildAdmin),
/* harmony export */   "mO": () => (/* binding */ getChildAdminOne),
/* harmony export */   "jA": () => (/* binding */ editChildAdmin)
/* harmony export */ });
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);

function getChildAdminAll(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/getChildAdminAll',
    method: 'GET',
    params
  });
}
function addChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/addChildAdmin',
    method: 'POST',
    data
  });
}
function deleteChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/deleteChildAdmin',
    method: 'DELETE',
    data
  });
}
function getChildAdminOne(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/getChildAdminOne',
    method: 'GET',
    params
  });
}
function editChildAdmin(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'user/editChildAdmin',
    method: 'PUT',
    data
  });
}

/***/ }),

/***/ 7441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accountInformation_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(146);
/* harmony import */ var _accountInformation_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_accountInformation_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_management_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9279);
/* harmony import */ var _api_management_childAdmin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4075);
/* harmony import */ var _api_common_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6166);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









const AccountInformationContent = () => {
  // 手机号改变开关
  const {
    0: phoneFlag,
    1: setPhoneFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // app名称开关

  const {
    0: appNameFlag,
    1: setAppNameFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true); // 手机号内容

  const {
    0: phone,
    1: setPhone
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // app名称内容

  const {
    0: appName,
    1: setAppName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('考试云'); // app图片

  const {
    0: appImg,
    1: setAppImg
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Wed Dec 29 2021 14:49:31 GMT+0800 (中国标准时间)689'); // 用户数据

  const {
    0: user,
    1: setUser
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(); // 用户总数量

  const {
    0: userNumber,
    1: setUserNumber
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); // 上传文件

  const inputFile = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null); // app信息种类

  const {
    0: appMessageType,
    1: setAppMessageType
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''); // 处理时间

  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 获取用户数据


  const getDataByName = async () => {
    const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .GetDataByName */ .Q0)({
      name: localStorage.getItem('user')
    });
    res.createAt = renderTime(res.createAt);
    setUser(res);
  }; // 获取所有考生数据


  const getAllStudentsData = async () => {
    const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .GetAllStudentsData */ .WZ)();
    setUserNumber(res);
  }; // 获取考生端app数据


  const getAppMessage = async () => {
    const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .GetAppMessage */ .$M)();

    if (res.length === 0) {
      // 添加信息
      setAppMessageType('');
    } else {
      // 修改信息
      setAppMessageType(res[0].id);
      setAppImg(res[0].AppLogo);
      setAppName(res[0].AppName);
    }
  }; // 默认调用


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getDataByName();
    getAllStudentsData();
    getAppMessage(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 手机号保存

  const phoneNumberSave = async () => {
    const res = await (0,_api_management_childAdmin__WEBPACK_IMPORTED_MODULE_3__/* .editChildAdmin */ .jA)({
      phoneNum: phone,
      id: user.id
    });

    if (res.code === '01') {
      setPhoneFlag(true);
      getDataByName();

      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().info('修改成功');
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('对不起,修改失败');
    }
  }; // 图片上传


  const uploading = async () => {
    const fileMessage = inputFile.current.files[0];

    if (fileMessage.type === 'image/jpeg' || fileMessage.type === 'image/png' || fileMessage.type === 'image/gif' || fileMessage.type === 'image/bmp') {
      if (+(fileMessage.size / 1024).toFixed(0) > 100) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().warn('Logo图片不能超过100KB');
      } else {
        const imgUrl = await (0,_api_common_upload__WEBPACK_IMPORTED_MODULE_4__/* .uploadToGithub */ .R)(fileMessage.name, fileMessage);
        console.log('图片路径', imgUrl); // if (appMessageType === '') {
        //   // 添加
        //   const res = await CreateAppMessage({
        //     AppName: appName,
        //     AppLogo: imgUrl,
        //   });
        //   res && setAppMessageType(res.id);
        //   res && setAppImg(res.AppLogo);
        //   res && message.info('上传成功');
        // } else {
        //   // 修改
        //   const res = await UpdataAppMessage({
        //     data: {
        //       AppName: appName,
        //       AppLogo: imgUrl,
        //     },
        //     id: appMessageType,
        //   });
        //   if (res.affected > 0) {
        //     setAppImg(imgUrl);
        //     message.info('上传成功');
        //   } else {
        //     message.error('对不起,上传失败,请重新上传');
        //   }
        // }
      }
    } else {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('图片格式仅支持ipg、png、 gif、 bmp格式，且区分大小写。');
    }
  }; // appName保存


  const appNameSave = async () => {
    setAppNameFlag(true);

    if (appMessageType === '') {
      // 添加
      const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .CreateAppMessage */ .N$)({
        AppName: appName,
        AppLogo: appImg
      });
      res && setAppMessageType(res.id);
      res && antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().info('修改成功');
    } else {
      // 修改
      const res = await (0,_api_management_login__WEBPACK_IMPORTED_MODULE_2__/* .UpdataAppMessage */ .f)({
        data: {
          AppName: appName,
          AppLogo: appImg
        },
        id: appMessageType
      });

      if (res.affected > 0) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().info('修改成功');
      } else {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('对不起,修改失败');
      }
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: (_accountInformation_module_scss__WEBPACK_IMPORTED_MODULE_6___default().accountInformationBox),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
        children: "\u8D26\u53F7\u6388\u6743"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u8003\u751F\u8D26\u53F7 :"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: userNumber
          }), "\u4E2A"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u8D26\u6237\u4F59\u989D :"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: "0.00"
          }), "\u5143", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            href: "/management/payment",
            children: "\u5728\u7EBF\u5145\u503C"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
        children: "Logo\u4E0A\u4F20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u8003\u751F\u7AEFLogo\u56FE\u7247 :"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("img", {
            src: appImg || 'https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Wed Dec 29 2021 14:49:31 GMT+0800 (中国标准时间)689'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
              className: (_accountInformation_module_scss__WEBPACK_IMPORTED_MODULE_6___default().file),
              type: "file",
              ref: inputFile,
              onChange: uploading
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("button", {
              children: "\u4E0A\u4F20Logo\u56FE\u7247"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              children: "\u5EFA\u8BAE\u5C3A\u5BF848*48\uFF0C\u5927\u5C0F\u4E0D\u8D85\u8FC7100KB"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u8003\u751F\u7AEF\u5E94\u7528\u540D\u79F0 :"
        }), appNameFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
            children: appName || '考试云'
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            onClick: () => {
              setAppNameFlag(false);
            },
            children: "\u4FEE\u6539"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            defaultValue: appName || '考试云',
            type: "text",
            onBlur: e => {
              setAppName(e.target.value);
            }
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            onClick: appNameSave,
            children: "\u4FDD\u5B58"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("h3", {
        children: "\u8D26\u53F7\u4FE1\u606F"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u6CE8\u518C\u90AE\u7BB1 :"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: user && user.email
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u624B\u673A\u53F7\u7801 :"
        }), phoneFlag ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [phone || user && user.phoneNum, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            onClick: () => {
              setPhoneFlag(false);
            },
            children: "\u4FEE\u6539"
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("input", {
            onBlur: e => {
              setPhone(e.target.value);
            },
            defaultValue: phone || user.phoneNum,
            type: "text"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
            onClick: () => {
              if (/1[356789]\d{9}/.test(phone)) {
                phoneNumberSave();
              } else {
                antd_lib_message__WEBPACK_IMPORTED_MODULE_0___default().error('请输入正确的手机号');
              }
            },
            children: "\u4FDD\u5B58"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: "\u6CE8\u518C\u65F6\u95F4 :"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
          children: user && user.createAt
        })]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountInformationContent);

/***/ }),

/***/ 146:
/***/ ((module) => {

// Exports
module.exports = {
	"accountInformationBox": "accountInformation_accountInformationBox__68mbY",
	"file": "accountInformation_file__6EYbU"
};


/***/ })

};
;