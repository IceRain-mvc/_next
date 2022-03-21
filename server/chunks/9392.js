exports.id = 9392;
exports.ids = [9392];
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

/***/ 9392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ header)
});

// EXTERNAL MODULE: external "antd/lib/divider"
var divider_ = __webpack_require__(2278);
var divider_default = /*#__PURE__*/__webpack_require__.n(divider_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/Nav/header.module.scss
var header_module = __webpack_require__(8272);
var header_module_default = /*#__PURE__*/__webpack_require__.n(header_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/alertCommon/alertCommon.tsx
var alertCommon = __webpack_require__(2625);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/personalUser/information.module.css
var information_module = __webpack_require__(9901);
var information_module_default = /*#__PURE__*/__webpack_require__.n(information_module);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: ./src/api/management/login.ts
var login = __webpack_require__(9279);
// EXTERNAL MODULE: ./src/components/personalUser/changePassword.module.scss
var changePassword_module = __webpack_require__(232);
var changePassword_module_default = /*#__PURE__*/__webpack_require__.n(changePassword_module);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
// EXTERNAL MODULE: ./src/api/management/childAdmin.ts
var childAdmin = __webpack_require__(4075);
// EXTERNAL MODULE: ./src/api/common/upload.ts
var upload = __webpack_require__(6166);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/personalUser/changePassword.tsx












const ChangePassword = props => {
  // 内容种类
  const {
    0: contentType,
    1: setContentType
  } = (0,external_react_.useState)(props.args || 0); // 弹框开关

  const {
    0: alertShow,
    1: setAlertShow
  } = (0,external_react_.useState)(false); // 弹框开关

  const {
    0: alertValue,
    1: setAlertValue
  } = (0,external_react_.useState)(''); // 是否返回登录页

  const {
    0: backLogin,
    1: setBackLogin
  } = (0,external_react_.useState)(false); // 原密码

  const {
    0: pwd,
    1: setPwd
  } = (0,external_react_.useState)(''); // 新密码

  const {
    0: newPwd,
    1: setNewPwd
  } = (0,external_react_.useState)(''); // 确认密码

  const {
    0: submitPwd,
    1: setSubmitPwd
  } = (0,external_react_.useState)(''); // 电话号码

  const {
    0: phone,
    1: setPhone
  } = (0,external_react_.useState)(''); // 邮箱

  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)(''); // 用户数据

  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)();
  const file = (0,external_react_.useRef)(null); // 获取用户数据

  const getDataByName = async () => {
    const res = await (0,login/* GetDataByName */.Q0)({
      name: localStorage.getItem('user')
    });
    setUser(res);
    setPhone(res.phoneNum);
    setEmail(res.email);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setAlertShow(res);
  }; // 默认调用


  (0,external_react_.useEffect)(() => {
    getDataByName(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeFile = async () => {
    const files = file.current.files['0'];
    const imgUrl = await (0,upload/* uploadToGithub */.R)(files.name, files);
    console.log('图片路径', imgUrl);
  }; // 密码保存事件


  const save = async () => {
    setBackLogin(false);

    if (!pwd) {
      message_default().error('请输入原密码');
    } else if (!newPwd) {
      message_default().error('请输入新密码');
    } else if (!submitPwd) {
      message_default().error('请输入重复新密码');
    } else if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/.test(newPwd)) {
      message_default().error('密码格式错误,必须以字母开头并且为8-16位数字、字母混合');
    } else if (!(newPwd === submitPwd)) {
      message_default().error('两次输入的密码不一致，请重新输入');
    } else {
      setAlertShow(true);
      const res = await (0,login/* Resetpwd */.a2)({
        email: user.email,
        originalPassword: pwd,
        encryptPwd: user.password,
        password: newPwd
      });

      if (typeof res === 'string') {
        setAlertValue('原密码错误，请重新输入');
      } else if (res.affected && res.affected > 0) {
        setBackLogin(true);
        setAlertValue('密码修改成功，请重新登陆');
      } else {
        setAlertValue('密码修改失败');
      }
    }
  }; // 信息修改


  const update = async () => {
    if (email && phone) {
      if (/1[356789]\d{9}/.test(phone)) {
        if (/^\w{6,17}@\w{2,7}\.(com|cn|gmail)$/i.test(email)) {
          const res = await (0,childAdmin/* editChildAdmin */.jA)({
            email: email,
            phoneNum: phone,
            id: user.id
          });

          if (res.code && res.code === '01') {
            message_default().info('修改成功');
          }

          getDataByName();
        } else {
          message_default().error('请输入正确的邮箱号');
        }
      } else {
        message_default().error('请输入正确的手机号');
      }
    } else {
      message_default().error('邮箱或手机号不存在');
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: (changePassword_module_default()).ChangePasswordBox,
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (changePassword_module_default()).top,
      children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
        className: contentType === 1 ? (changePassword_module_default()).active : '',
        onClick: () => {
          setContentType(1);
        },
        children: "\u57FA\u672C\u8D44\u6599"
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: contentType === 0 ? (changePassword_module_default()).active : '',
        onClick: () => {
          setContentType(0);
        },
        children: "\u4FEE\u6539\u5BC6\u7801"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (changePassword_module_default()).picture,
      style: contentType === 2 ? {
        display: 'block'
      } : {
        display: 'none'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        ref: file,
        type: "file",
        name: "",
        id: "input",
        onChange: () => {
          changeFile();
        }
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        children: "\u88C1\u526A\u5E76\u4FDD\u5B58"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          src: ""
        })
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: contentType === 0 ? {
        display: 'block'
      } : {
        display: 'none'
      },
      className: (changePassword_module_default()).content,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u539F\u5BC6\u7801"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          onBlur: e => {
            setPwd(e.target.value);
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "*"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u65B0\u5BC6\u7801"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          defaultValue: '',
          onBlur: e => {
            setNewPwd(e.target.value);
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "*"
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u786E\u8BA4\u65B0\u5BC6\u7801"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "password",
          defaultValue: '',
          onBlur: e => {
            setSubmitPwd(e.target.value);
          }
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "*"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          save();
        },
        children: "\u4FDD\u5B58"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: contentType === 1 ? {
        display: 'block'
      } : {
        display: 'none'
      },
      className: (changePassword_module_default()).infoContent,
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u8D26\u53F7"
        }), /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (changePassword_module_default()).name,
          children: user && user.name
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u7535\u8BDD\u53F7\u7801"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          defaultValue: phone,
          onBlur: e => {
            setPhone(e.target.value);
          }
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
          children: "\u7535\u5B50\u90AE\u7BB1"
        }), /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          defaultValue: email,
          onBlur: e => {
            setEmail(e.target.value);
          }
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        onClick: () => {
          update();
        },
        children: "\u4FDD\u5B58\u4FEE\u6539"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(alertCommon["default"], {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '提示',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (changePassword_module_default()).alertContent,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.CheckSquareFilled, {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: alertValue
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("button", {
          onClick: () => {
            changeAlertFlag(false);
            backLogin && router_default().push('/');
          },
          children: "\u786E\u5B9A"
        })]
      })
    })]
  });
};

/* harmony default export */ const changePassword = (ChangePassword);
;// CONCATENATED MODULE: ./src/components/personalUser/information.tsx










const Information = () => {
  const {
    0: tag
  } = (0,external_react_.useState)(['我的']); // 种类

  const {
    0: type,
    1: setType
  } = (0,external_react_.useState)(0); // 弹框开关

  const {
    0: alertShow,
    1: setalertShow
  } = (0,external_react_.useState)(false); // 上传头像

  const {
    0: picture,
    1: setPicture
  } = (0,external_react_.useState)('');
  const {
    0: args,
    1: setArgs
  } = (0,external_react_.useState)(); // 用户数据

  const {
    0: user,
    1: setUser
  } = (0,external_react_.useState)(); // 最近登陆用户

  const {
    0: userList,
    1: setUserList
  } = (0,external_react_.useState)(); // 处理时间

  function renderTime(date) {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '');
  } // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 获取用户数据


  const getDataByName = async () => {
    const res = await (0,login/* GetDataByName */.Q0)({
      name: localStorage.getItem('user')
    });
    res.loginTime = renderTime(res.loginTime);
    setUser(res);
  }; // 获取最近登陆用户数据


  const getUserLoginTime = async () => {
    let res = await (0,login/* GetAllUser */.xt)(); // @ts-ignore

    res.sort((a, b) => {
      return b.loginTime < a.loginTime ? -1 : 1;
    }); // @ts-ignore

    if (res.length > 3) {
      // @ts-ignore
      res = res.slice(0, 3);
    } else {
      // @ts-ignore
      res = res.slice(0, res.length);
    } // @ts-ignore


    setUserList(res);
  }; // 默认调用


  (0,external_react_.useEffect)(() => {
    getDataByName();
    getUserLoginTime();
    console.log('修改资料弹窗开启'); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      width: 1124,
      height: 580
    },
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 1000,
        margin: '0 auto',
        marginTop: 10,
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (information_module_default()).informationLeft,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (information_module_default()).informationLTop,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: (information_module_default()).informationLTOne,
            onClick: () => {
              setalertShow(true);
              setPicture('上传头像');
              setArgs(2);
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MehFilled, {
              className: (information_module_default()).informationImg,
              style: {
                color: 'rgb(94, 94, 94)',
                fontSize: 40,
                cursor: 'pointer'
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: user && user.name
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: user && user.phoneNum
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: ["\u6700\u8FD1\u767B\u5F55: ", /*#__PURE__*/jsx_runtime_.jsx("span", {
              children: user && user.loginTime
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: (information_module_default()).informationLTwo,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
            children: "\u6700\u8FD1\u767B\u5F55\u6210\u5458"
          }), userList && userList.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (information_module_default()).informationNear,
              children: [/*#__PURE__*/jsx_runtime_.jsx(icons_.MehFilled, {
                style: {
                  color: 'rgb(94, 94, 94)',
                  fontSize: 40,
                  cursor: 'pointer'
                }
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: item.name
                }), /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: item.phoneNum
                })]
              })]
            }, index);
          })]
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (information_module_default()).informationRight,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (information_module_default()).informationRList,
          children: tag.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                onClick: () => {
                  setType(+index);
                },
                className: type === index ? (information_module_default()).active : '',
                children: item
              }, index), /*#__PURE__*/jsx_runtime_.jsx((divider_default()), {
                style: {
                  borderLeft: 'solid 1px #ccc',
                  margin: '0'
                },
                type: "vertical"
              })]
            }, index);
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (information_module_default()).informationContent,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\u8D26\u53F7 :"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: user && user.name
                }), /*#__PURE__*/jsx_runtime_.jsx("button", {
                  onClick: () => {
                    setalertShow(true);
                    setPicture('修改密码');
                    setArgs(1);
                  },
                  children: "\u4FEE\u6539\u6211\u7684\u8D44\u6599"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\u59D3\u540D :"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: user && user.name
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\u624B\u673A :"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: user && user.phoneNum
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: "\u90AE\u7BB1 :"
                }), /*#__PURE__*/jsx_runtime_.jsx("span", {
                  children: user && user.email
                })]
              })]
            })
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx(alertCommon["default"], {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: picture,
      changeAlertFlag: () => {
        changeAlertFlag(false);
        getDataByName();
      },
      children: /*#__PURE__*/jsx_runtime_.jsx(changePassword, {
        args: args
      })
    })]
  });
};

/* harmony default export */ const information = (Information);
;// CONCATENATED MODULE: ./src/components/Nav/headerNav.ts
// 跳转导航
const skipNav = [{
  id: '101',
  title: '业务',
  data: [[{
    src: '/exam/createCrew',
    name: '创建考试'
  }, {
    src: '/exercise',
    name: '创建练习'
  }, {
    src: '/course/create/post/courseMessage',
    name: '创建课程'
  }]]
}, {
  id: '102',
  title: '资源',
  data: [[{
    src: '/resource/testBank',
    name: '试题库'
  }, {
    src: '/resource/students',
    name: '考生管理'
  }]]
}, {
  id: '103',
  title: '分析',
  data: [[{
    src: '/analyse/examination',
    name: '考试成绩'
  }, {
    src: '/analyse/studentAnalyse',
    name: '考生分析'
  }, {
    src: '/analyse/grade',
    name: '答题统计'
  }, {
    src: '/analyse/absentStat',
    name: '缺席统计'
  }, {
    src: '/analyse/artifical',
    name: '人工评卷'
  }, {
    src: '/analyse/statistical',
    name: '练习统计'
  }], [{
    src: '/analyse/learningStatistics',
    name: '培训学习统计'
  }, {
    src: '/analyse/integral',
    name: '积分统计'
  }, {
    src: '/analyse/textAnalyse',
    name: '试题分析'
  }, {
    src: '/analyse/testStatistics',
    name: '试题类型统计'
  }]]
}, {
  id: '104',
  title: '设置',
  data: [[{
    src: '/examinee/examineeCenter',
    name: '考生中心'
  }, {
    src: '/examinee/examineeCloud',
    name: '微信小程序'
  }, {
    src: '/management/accountInformation',
    name: 'Logo上传'
  }, {
    src: '/management/childAdministrator',
    name: '子管理员'
  }, {
    src: '/login',
    name: '帮助文档'
  }]]
}];

// EXTERNAL MODULE: external "antd/lib/skeleton"
var skeleton_ = __webpack_require__(1030);
var skeleton_default = /*#__PURE__*/__webpack_require__.n(skeleton_);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/home.tsx





const HomeSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    style: {
      padding: '0 40px'
    },
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 80px)',
        height: '50px',
        margin: '20px 0'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(75vw - 57px)',
        height: '275px',
        marginBottom: '20px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(25vw - 57px)',
        height: '275px',
        marginBottom: '20px',
        marginLeft: '30px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(75vw - 57px)',
        height: '185px',
        marginBottom: '20px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(25vw - 57px)',
        height: '185px',
        marginBottom: '20px',
        marginLeft: '30px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 80px)',
        height: '185px',
        marginBottom: '20px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 80px)',
        height: '185px',
        marginBottom: '20px'
      },
      active: true,
      size: 'large',
      block: false
    })]
  });
};

/* harmony default export */ const home = (HomeSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/analyse.tsx





const AnalyseSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: '200px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '60px',
          marginBottom: '10px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 'calc(100vw - 230px)',
        height: 'calc(100vh - 49px)',
        marginLeft: '20px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: '64px',
          marginBottom: '20px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: '42px',
          marginBottom: '20px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: 'calc(100vh - 210px)'
        },
        active: true,
        size: 'large',
        block: false
      })]
    })]
  });
};

/* harmony default export */ const analyse = (AnalyseSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/exam.tsx





const ExamSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: '240px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '160px',
          height: '40px',
          marginBottom: '5px',
          marginTop: '40px',
          marginLeft: '40px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '160px',
          height: '40px',
          marginBottom: '40px',
          marginLeft: '40px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginBottom: '10px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginBottom: '30px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginTop: '30px',
          marginBottom: '10px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginBottom: '10px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginBottom: '30px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '240px',
          height: '30px',
          marginTop: '30px'
        },
        active: true,
        size: 'large',
        block: false
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 'calc(100vw - 260px)',
        height: 'calc(100vh - 49px)',
        padding: '20px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 260px)',
          height: '42px',
          margin: '20px 0'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 260px)',
          height: 'calc(100vh - 140px)'
        },
        active: true,
        size: 'large',
        block: false
      })]
    })]
  });
};

/* harmony default export */ const exam = (ExamSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/management.tsx





const ManagementSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '160px',
        height: 'calc(100vh - 60px)',
        marginTop: '5px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 'calc(100vw - 165px)',
        float: 'right'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 200px)',
          height: '46px',
          margin: '15px 15px 0 15px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 200px)',
          height: 'calc(100vh - 131px)',
          margin: '5px 15px 0 15px'
        },
        active: true,
        size: 'large',
        block: false
      })]
    })]
  });
};

/* harmony default export */ const management = (ManagementSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/resource.tsx





const ResourceSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: '200px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '60px',
          marginBottom: '10px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: '200px',
          height: '40px',
          marginBottom: '5px'
        },
        active: true,
        size: 'large',
        block: false
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 'calc(100vw - 230px)',
        height: 'calc(100vh - 49px)',
        marginLeft: '20px',
        float: 'left'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: '64px',
          marginBottom: '20px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: '42px',
          marginBottom: '20px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 230px)',
          height: 'calc(100vh - 210px)'
        },
        active: true,
        size: 'large',
        block: false
      })]
    })]
  });
};

/* harmony default export */ const resource = (ResourceSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/accountInformation.tsx





const AccountInformationSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '160px',
        height: 'calc(100vh - 60px)',
        marginTop: '5px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      style: {
        width: 'calc(100vw - 165px)',
        float: 'right'
      },
      children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 200px)',
          height: '163px',
          margin: '15px 15px 10px 15px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 200px)',
          height: '247px',
          margin: '0px 15px 10px 15px'
        },
        active: true,
        size: 'large',
        block: false
      }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
        style: {
          width: 'calc(100vw - 200px)',
          height: '189px',
          margin: '0px 15px 10px 15px'
        },
        active: true,
        size: 'large',
        block: false
      })]
    })]
  });
};

/* harmony default export */ const accountInformation = (AccountInformationSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/examineeCenter.tsx





const ExamineeCenterScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 80px)',
        height: '50px',
        margin: '20px 40px 40px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '80vw',
        height: '407px',
        marginLeft: '40px'
      },
      active: true,
      size: 'large',
      block: false
    })]
  });
};

/* harmony default export */ const examineeCenter = (ExamineeCenterScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/examineeCloud.tsx





const ExamineeCloudScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 80px)',
        height: '50px',
        margin: '20px 40px 40px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '80vw',
        height: '300px',
        marginLeft: '40px'
      },
      active: true,
      size: 'large',
      block: false
    })]
  });
};

/* harmony default export */ const examineeCloud = (ExamineeCloudScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/create.tsx





const CreateSkeletonScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 40px)',
        height: '45px',
        margin: '15px 20px 10px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: 'calc(100vw - 40px)',
        height: 'calc(85vh - 60px)',
        margin: '0px 20px 5px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '100vw',
        height: '35px'
      },
      active: true,
      size: 'large',
      block: false
    })]
  });
};

/* harmony default export */ const create = (CreateSkeletonScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/payment.tsx





const PaymentScreen = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '80vw',
        height: 'calc(90vh - 120px)',
        margin: '20px 10vw 0px'
      },
      active: true,
      size: 'large',
      block: false
    }), /*#__PURE__*/jsx_runtime_.jsx((skeleton_default()).Button, {
      style: {
        width: '100vw',
        height: '120px'
      },
      active: true,
      size: 'large',
      block: false
    })]
  });
};

/* harmony default export */ const payment = (PaymentScreen);
;// CONCATENATED MODULE: ./src/components/skeletonScreen/index.tsx










;// CONCATENATED MODULE: ./src/components/Nav/header.tsx















const DropDownCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 4524).then(__webpack_require__.bind(__webpack_require__, 4524)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4524)],
    modules: ["../src/components/Nav/header.tsx -> " + '../form/part/dropdown']
  }
});
const IconFont = (0,icons_.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_by6k1kw1g7w.js'
}); // 左导航;

const labelCenter = [{
  icont: /*#__PURE__*/jsx_runtime_.jsx(icons_.HomeFilled, {
    style: {
      fontSize: '18px'
    }
  }),
  src: '/home',
  args: 1
}, {
  title: '考试',
  src: '/exam',
  args: 2
}, {
  title: '练习',
  src: '/exercise',
  args: 3
}, {
  title: '课程',
  src: '/course',
  args: 4
}, {
  title: '资源',
  src: '/resource/testBank',
  args: 5
}, {
  title: '分析',
  src: '/analyse/examination',
  args: 6
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(icons_.AppstoreFilled, {
    style: {
      fontSize: '19px'
    }
  }),
  src: '',
  args: null
}]; // 右导航

const labelRight = [{
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-renwu",
    style: {
      fontSize: '35px'
    }
  }),
  src: '',
  args: null
}, {
  title: '管理',
  src: '/management/accountInformation',
  args: 7
}]; // 考生导航

const examineeNav = [{
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-fenxiang1"
  }),
  title: '考生中心',
  src: '/examinee/examineeCenter'
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-fenxiang1"
  }),
  title: '微信小程序',
  src: '/examinee/examineeCloud'
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-yonghuziliaogerenxinxigerenziliao-xianxing",
    className: (header_module_default()).my
  }),
  title: '我的资料'
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-key"
  }),
  title: '修改密码'
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-bangzhu3"
  }),
  title: '帮助文档',
  src: '/login'
}, {
  icont: /*#__PURE__*/jsx_runtime_.jsx(IconFont, {
    type: "icon-tuichu1"
  }),
  title: '退出',
  src: '/login'
}];

const Header = props => {
  const router = (0,router_.useRouter)(); // 骨架屏开关

  const {
    0: isFlag,
    1: setIsFlag
  } = (0,external_react_.useState)(false); // 骨架屏种类

  const {
    0: skeletonScreenType,
    1: setSkeletonScreenType
  } = (0,external_react_.useState)(null); // app名称内容

  const {
    0: appName,
    1: setAppName
  } = (0,external_react_.useState)('考试云'); // app图片

  const {
    0: appImg,
    1: setAppImg
  } = (0,external_react_.useState)('https://i.kaoshiyun.com.cn/user/assets/images/logo2.png?t=Wed Dec 29 2021 14:49:31 GMT+0800 (中国标准时间)689'); // 弹窗开关

  const {
    0: alertShow,
    1: setalertShow
  } = (0,external_react_.useState)(false); // 弹窗标题

  const {
    0: headTitle,
    1: setHeadTitle
  } = (0,external_react_.useState)(''); // 调用弹窗事件

  const alertdialog = () => {
    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  }; // 得到app数据


  const getAppMessageFun = async () => {
    const res = await (0,login/* GetAppMessage */.$M)();

    if (res.length > 0) {
      setAppImg(res[0].AppLogo);
      setAppName(res[0].AppName);
    }
  }; // 默认事件


  (0,external_react_.useEffect)(() => {
    // 骨架屏
    router.events.on('routeChangeStart', url => {
      setIsFlag(true);

      if (url === '/home') {
        setSkeletonScreenType(home);
      } else if (url === '/exam' || url === '/exercise' || url === '/course') {
        setSkeletonScreenType(exam);
      } else if (url === '/management/accountInformation') {
        setSkeletonScreenType(accountInformation);
      } else if (url === '/examinee/examineeCenter') {
        setSkeletonScreenType(examineeCenter);
      } else if (url === '/examinee/examineeCloud') {
        setSkeletonScreenType(examineeCloud);
      } else if (url.includes('/exam/createCrew') || url.includes('/exercise/createExercise') || url.includes('/course/create') || url.includes('/design/Design') || url.includes('/code/Code') || url.includes('/SimulationTest')) {
        setSkeletonScreenType(create);
      } else if (url === '/management/payment') {
        console.log('支付页面');
        setSkeletonScreenType(payment);
      } else if (url.includes('resource')) {
        setSkeletonScreenType(resource);
      } else if (url.includes('analyse')) {
        setSkeletonScreenType(analyse);
      } else if (url.includes('management')) {
        setSkeletonScreenType(management);
      }
    });
    router.events.on('routeChangeComplete', () => {
      setIsFlag(false);
    });
    router.events.on('routeChangeError', () => {
      setIsFlag(false);
    }); // 获取app数据

    getAppMessageFun(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (header_module_default()).pageHeader,
      children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
        className: (header_module_default()).logo,
        src: appImg
      }), /*#__PURE__*/jsx_runtime_.jsx("span", {
        className: (header_module_default()).appName,
        children: appName
      }), labelCenter.map((item, index) => {
        return item.title ?
        /*#__PURE__*/
        // 有标题
        jsx_runtime_.jsx(next_link["default"], {
          href: item.src,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: props.args === item.args ? (header_module_default()).active : null,
            children: item.title
          })
        }, index) : item.src ?
        /*#__PURE__*/
        // 是icont并要跳路由
        jsx_runtime_.jsx(next_link["default"], {
          href: item.src,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            className: props.args === item.args ? (header_module_default()).active : null,
            children: item.icont
          })
        }, index) :
        /*#__PURE__*/
        // 是icont但不跳路由
        jsx_runtime_.jsx("a", {
          className: props.args === item.args ? (header_module_default()).active : null,
          children: /*#__PURE__*/jsx_runtime_.jsx(DropDownCommon, {
            placement: 'bottomLeft',
            title: item.icont,
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (header_module_default()).shortcut,
              children: [/*#__PURE__*/jsx_runtime_.jsx("h6", {
                children: "\u529F\u80FD\u5FEB\u6377\u65B9\u5F0F"
              }), /*#__PURE__*/jsx_runtime_.jsx((divider_default()), {}), skipNav.map(item => {
                return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
                    children: item.title
                  }), item.data.map((ite, index) => {
                    return /*#__PURE__*/jsx_runtime_.jsx("p", {
                      children: ite.map((it, i) => {
                        return /*#__PURE__*/jsx_runtime_.jsx(next_link["default"], {
                          href: it.src,
                          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                            children: it.name
                          })
                        }, i);
                      })
                    }, index);
                  })]
                }, item.id);
              })]
            })
          })
        }, index);
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: (header_module_default()).headerRight,
        children: labelRight.map((item, index) => {
          return item.title ?
          /*#__PURE__*/
          // 有标题
          jsx_runtime_.jsx(next_link["default"], {
            href: item.src,
            children: /*#__PURE__*/jsx_runtime_.jsx("li", {
              className: props.args === item.args ? (header_module_default()).active : null,
              children: item.title
            })
          }, index) :
          /*#__PURE__*/
          // 单独icon
          jsx_runtime_.jsx("li", {
            className: (header_module_default()).icon,
            children: /*#__PURE__*/jsx_runtime_.jsx(DropDownCommon, {
              placement: 'bottomRight',
              title: /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: item.icont
              }),
              children: /*#__PURE__*/jsx_runtime_.jsx("ul", {
                className: (header_module_default()).examineeBox,
                children: examineeNav.map((item, index) => {
                  return item.src ?
                  /*#__PURE__*/
                  // 路由跳转页面
                  jsx_runtime_.jsx(next_link["default"], {
                    href: item.src,
                    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                      onClick: () => {
                        if (item.src === '/') {
                          localStorage.removeItem('token');
                          localStorage.removeItem('userIp');
                        }
                      },
                      children: [item.icont, /*#__PURE__*/jsx_runtime_.jsx("span", {
                        children: item.title
                      })]
                    })
                  }, index) :
                  /*#__PURE__*/
                  // 功能键
                  (0,jsx_runtime_.jsxs)("li", {
                    onClick: () => {
                      alertdialog();
                      setHeadTitle(item.title);
                    },
                    children: [item.icont, /*#__PURE__*/jsx_runtime_.jsx("span", {
                      children: item.title
                    })]
                  }, index);
                })
              })
            })
          }, index);
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).routerContent,
      children: isFlag ? skeletonScreenType : props.children
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (header_module_default()).headerAlert,
      children: headTitle === '我的资料' ? /*#__PURE__*/jsx_runtime_.jsx(alertCommon["default"], {
        alertStatus: alertShow,
        enableDrag: true,
        alertTitle: '我的信息',
        changeAlertFlag: changeAlertFlag,
        children: /*#__PURE__*/jsx_runtime_.jsx(information, {})
      }) : headTitle === '修改密码' ? /*#__PURE__*/jsx_runtime_.jsx(alertCommon["default"], {
        alertStatus: alertShow,
        enableDrag: true,
        alertTitle: '修改密码',
        changeAlertFlag: () => {
          changeAlertFlag(false);
        },
        children: /*#__PURE__*/jsx_runtime_.jsx(changePassword, {
          args: 0
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("div", {})
    })]
  });
};

/* harmony default export */ const header = (Header);

/***/ }),

/***/ 9901:
/***/ ((module) => {

// Exports
module.exports = {
	"informationLeft": "information_informationLeft__TEamI",
	"informationLTop": "information_informationLTop__8cn1_",
	"informationLTOne": "information_informationLTOne__hR0yM",
	"informationImg": "information_informationImg__NdsHY",
	"informationLTwo": "information_informationLTwo__i9Rqn",
	"informationNear": "information_informationNear__3VSPG",
	"informationRight": "information_informationRight___gwW0",
	"informationRList": "information_informationRList__fF79c",
	"active": "information_active__f6ja5",
	"informationContent": "information_informationContent__81Si1"
};


/***/ }),

/***/ 8272:
/***/ ((module) => {

// Exports
module.exports = {
	"pageHeader": "header_pageHeader__9_eKu",
	"logo": "header_logo__TSNSU",
	"appName": "header_appName__ZNAAb",
	"active": "header_active___vc8_",
	"headerRight": "header_headerRight__bK7YR",
	"examineeBox": "header_examineeBox__oEulu",
	"shortcut": "header_shortcut__m3DZj",
	"routerContent": "header_routerContent__LgL5Q",
	"userNav": "header_userNav__Vac1X",
	"headerAlert": "header_headerAlert__U35Ug"
};


/***/ }),

/***/ 232:
/***/ ((module) => {

// Exports
module.exports = {
	"ChangePasswordBox": "changePassword_ChangePasswordBox__2x75y",
	"top": "changePassword_top__YMNIx",
	"active": "changePassword_active__Kc7PH",
	"picture": "changePassword_picture__ytdGw",
	"content": "changePassword_content__BUwxE",
	"infoContent": "changePassword_infoContent__38vpk",
	"name": "changePassword_name__qMW7V",
	"alertContent": "changePassword_alertContent__or8q0"
};


/***/ })

};
;