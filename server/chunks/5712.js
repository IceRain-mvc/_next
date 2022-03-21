exports.id = 5712;
exports.ids = [5712];
exports.modules = {

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ uploads)
});

// EXTERNAL MODULE: external "antd/lib/dropdown"
var dropdown_ = __webpack_require__(1788);
var dropdown_default = /*#__PURE__*/__webpack_require__.n(dropdown_);
// EXTERNAL MODULE: external "antd/lib/popconfirm"
var popconfirm_ = __webpack_require__(3984);
var popconfirm_default = /*#__PURE__*/__webpack_require__.n(popconfirm_);
// EXTERNAL MODULE: external "antd/lib/button"
var button_ = __webpack_require__(3800);
var button_default = /*#__PURE__*/__webpack_require__.n(button_);
// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: external "antd/lib/menu"
var menu_ = __webpack_require__(274);
var menu_default = /*#__PURE__*/__webpack_require__.n(menu_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
// EXTERNAL MODULE: ./src/components/uploads/appUploads/appUploads.module.css
var appUploads_module = __webpack_require__(6277);
var appUploads_module_default = /*#__PURE__*/__webpack_require__.n(appUploads_module);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/course/section.tsx
 // 添加子章节数据

function createCourseSection(data) {
  return http/* httpProvider.request */.A.request({
    url: '/uploadFile/saveData',
    method: 'POST',
    data
  });
} // 删除子章节数据

function deChapter(data) {
  return http/* httpProvider.request */.A.request({
    url: '/uploadFile/deChapterData',
    method: 'DELETE',
    params: data
  });
} // 编辑子章节数据

function editorCourseSection(data) {
  return http/* httpProvider.request */.A.request({
    url: '/uploadFile/editorCourseSection',
    method: 'PUT',
    data
  });
} // 获取当前课程所有子章节

function getCourseSections(data) {
  return httpProvider.request({
    url: '/uploadFile/getCourseSections',
    method: 'GET',
    params: data
  });
}
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/uploads/appUploads/index.tsx










const AlertCommon = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/components/uploads/appUploads/index.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const UploadImg = (0,dynamic["default"])(() => __webpack_require__.e(/* import() */ 1566).then(__webpack_require__.bind(__webpack_require__, 1566)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1566)],
    modules: ["../src/components/uploads/appUploads/index.tsx -> " + '@/components/uploads/uploadImg/uploadImg']
  }
});
const UploadDocument = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(3286), __webpack_require__.e(2978), __webpack_require__.e(4304)]).then(__webpack_require__.bind(__webpack_require__, 4304)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4304)],
    modules: ["../src/components/uploads/appUploads/index.tsx -> " + '@/components/uploads/uploadDocument/uploadDocument']
  }
});
const UploadVideo = (0,dynamic["default"])(() => Promise.all(/* import() */[__webpack_require__.e(3286), __webpack_require__.e(2978), __webpack_require__.e(4075)]).then(__webpack_require__.bind(__webpack_require__, 9382)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(9382)],
    modules: ["../src/components/uploads/appUploads/index.tsx -> " + '@/components/uploads/uploadVideo/uploadVideo']
  }
}); // eslint-disable-next-line import/no-named-as-default-member

const CancelToken = (external_axios_default()).CancelToken;
const source = CancelToken.source();

const AppUploads = props => {
  const {
    uploadStr,
    alertShow,
    isChapterName,
    chapterId,
    updateData,
    chapterItem,
    functionType,
    courseId,
    Stop
  } = props;
  const {
    0: chapterData,
    1: setChapterData
  } = (0,external_react_.useState)(); // 是否暂停音频

  const {
    0: isAudioStop,
    1: setIsAudioStop
  } = (0,external_react_.useState)(false); // 是否清楚弹框内容

  const {
    0: clearContents,
    1: setClearContents
  } = (0,external_react_.useState)(false); // Icon

  const MyIcon = (0,icons_.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992472_sdsyff7e51m.js' // 在 iconfont.cn 上生成

  }); // 添加选项

  const {
    0: uploadData
  } = (0,external_react_.useState)([// 添加图文
  {
    id: 0,
    uploadStr: 'graphic',
    uploadComponent: UploadImg
  }, // 添加视频
  {
    id: 1,
    uploadStr: 'video',
    uploadComponent: UploadVideo,
    isAudioStop: true
  }, // 添加文档
  {
    id: 2,
    uploadStr: 'document',
    uploadComponent: UploadDocument
  }]); // 给子组件传递的函数，用于接收子组件的数据

  const obtainData = obj => {
    obj.courseId = courseId; // 课程id

    obj.chapterId = chapterId; // 父章节id

    obj.serialNumber = 1; // 章节序列号

    obj.serialType = uploadStr; // 章节类型

    setChapterData(obj);
  }; // 保存信息


  const saveInformation = async str => {
    switch (str) {
      // 保存
      case 'save':
        if (!functionType) {
          // 判断章节名称是否存在
          if (chapterData.serialName) {
            message_default().loading({
              content: '正在保存...',
              key: 'updatable'
            });

            if (chapterData.fileAddressMp4 !== '') {
              // 暂停音频
              setIsAudioStop(true);
            } // 请求添加接口


            await createCourseSection(chapterData);
            setTimeout(async () => {
              message_default().success({
                content: '保存成功',
                key: 'updatable',
                duration: 2
              }); // 更新父组件子章节数据


              updateData(); // 关闭暂停视频

              setIsAudioStop(false);
              setClearContents(false);
            }, 1000);
          } else {
            message_default().warning('请填写课程名称');
          }
        } else {
          // 编辑功能
          message_default().loading({
            content: '正在保存...',
            key: 'updatable'
          });

          if (chapterData.fileAddressMp4 !== '') {
            // 暂停音频
            setIsAudioStop(true);
          } // 请求编辑接口


          await editorCourseSection(chapterData);
          setTimeout(async () => {
            message_default().success({
              content: '保存成功',
              key: 'updatable',
              duration: 2
            }); // 更新父组件子章节数据


            updateData(); // 关闭暂停视频

            setIsAudioStop(false);
            setClearContents(false);
          }, 1000);
        }

        break;
      // 保存关闭

      case 'saveShut':
        // 添加功能
        if (!functionType) {
          // 判断章节名称是否存在
          if (chapterData.serialName) {
            message_default().loading({
              content: '正在保存...',
              key: 'updatable'
            });

            if (chapterData.fileAddressMp4 !== '') {
              // 暂停音频
              setIsAudioStop(true);
            } // 请求添加接口


            await createCourseSection(chapterData);
            setTimeout(async () => {
              message_default().success({
                content: '已保存',
                key: 'updatable',
                duration: 2
              }); // 更新父组件子章节数据


              updateData(); // 关闭弹窗

              isChapterName(false); // 关闭暂停视频

              setIsAudioStop(false);
              setClearContents(false);
            }, 1000);
          } else {
            message_default().warning('请填写课程名称');
          }
        } else {
          if (chapterData.serialName) {
            // 编辑功能
            message_default().loading({
              content: '正在保存...',
              key: 'updatable'
            });

            if (chapterData.fileAddressMp4 !== '') {
              // 暂停音频
              setIsAudioStop(true);
            } // 请求编辑接口


            await editorCourseSection(chapterData);
            setTimeout(async () => {
              message_default().success({
                content: '已保存',
                key: 'updatable',
                duration: 2
              }); // 更新父组件子章节数据


              updateData(); // 关闭弹窗

              isChapterName(false); // 关闭暂停视频

              setIsAudioStop(false);
              setClearContents(false);
            }, 1000);
          } else {
            message_default().warning('请填写课程名称');
          }
        }

        break;
      // 保存新增不关闭

      case 'saveNew':
        // 判断章节名称是否存在
        if (chapterData.serialName) {
          message_default().loading({
            content: '正在保存...',
            key: 'updatable'
          });

          if (chapterData.fileAddressMp4 !== '') {
            // 暂停音频
            setIsAudioStop(true);
          } // 请求添加接口


          await createCourseSection(chapterData);
          setTimeout(async () => {
            message_default().success({
              content: ' 添加成功',
              key: 'updatable',
              duration: 2
            }); // 清空弹框内容


            setClearContents(!clearContents); // 更新父组件子章节数据

            updateData(); // 关闭暂停视频

            setClearContents(false);
          }, 1000);
        } else {
          message_default().warning('请填写课程名称');
        }

        break;

      case 'Shut':
        if (chapterData.fileAddressMp4 !== '') {
          // 暂停音频
          setIsAudioStop(true);
        }

        setTimeout(async () => {
          // 关闭弹窗
          isChapterName(false); // 关闭暂停视频

          setIsAudioStop(false);
          setClearContents(false);
        }, 100);
        break;

      default:
        break;
    }
  };

  (0,external_react_.useEffect)(() => {
    if (Stop === true) {
      saveInformation('Shut');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [Stop]);

  const isChapter = res => {
    // 暂停音频
    setIsAudioStop(true);
    setTimeout(async () => {
      // 关闭弹窗
      isChapterName(res); // 关闭暂停视频

      setIsAudioStop(false);
      setClearContents(false);
    }, 100);
  }; // 组件卸载时


  (0,external_react_.useEffect)(() => {
    return () => {
      source.cancel('取消请求');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: '新增&编辑章节',
      changeAlertFlag: isChapter,
      children: [uploadData.map(item => item.uploadStr === uploadStr ? item.isAudioStop === true ? /*#__PURE__*/jsx_runtime_.jsx(item.uploadComponent, {
        obtainData: obtainData,
        chapterItem: chapterItem,
        AudioStop: isAudioStop,
        clearContents: clearContents
      }, item.id) : /*#__PURE__*/jsx_runtime_.jsx(item.uploadComponent, {
        obtainData: obtainData,
        chapterItem: chapterItem,
        clearContents: clearContents
      }, item.id) : ''), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (appUploads_module_default()).UploadsBottom,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
          onClick: () => {
            saveInformation('save');
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
            style: {
              fontSize: '20px'
            },
            type: "icon-jihuarenwu"
          }), "\u4FDD\u5B58"]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
          onClick: () => {
            saveInformation('saveShut');
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
            style: {
              fontSize: '30px'
            },
            type: "icon-daibanrenwu_quxiao"
          }), "\u4FDD\u5B58\u5E76\u5173\u95ED"]
        }), !functionType ? /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
          onClick: () => {
            saveInformation('saveNew');
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
            style: {
              fontSize: '20px'
            },
            type: "icon-xinzeng"
          }), "\u4FDD\u5B58\u5E76\u65B0\u589E"]
        }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
          onClick: () => {
            saveInformation('Shut');
          },
          children: [/*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
            style: {
              fontSize: '20px'
            },
            type: "icon-cuowuguanbiquxiao-xianxingfangkuang"
          }), "\u5173\u95ED"]
        })]
      })]
    })
  });
};

/* harmony default export */ const appUploads = (AppUploads);
// EXTERNAL MODULE: ./src/components/uploads/index.module.css
var index_module = __webpack_require__(2954);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/api/course/design_course.ts

function AllMessage(item) {
  return http/* httpProvider.request */.A.request({
    url: '/course-design/design_chapter',
    method: 'GET',
    params: item
  });
}
function AddMessage(item) {
  return http/* httpProvider.request */.A.request({
    url: '/course-design/add_chapter',
    method: 'POST',
    data: item
  });
}
function DeleteMessage(item) {
  return http/* httpProvider.request */.A.request({
    url: '/course-design/delete_chapter',
    method: 'DELETE',
    params: item
  });
}
function RecomposeMessage(item) {
  return http/* httpProvider.request */.A.request({
    url: '/course-design/recompose_chapter',
    method: 'PUT',
    params: item
  });
}
function chapterChildren(data) {
  return http/* httpProvider.request */.A.request({
    url: '/uploadFile/chapterChildren',
    method: 'GET',
    params: data
  });
}
function editChapter(item) {
  return http/* httpProvider.request */.A.request({
    url: '/course-design/editChapterName',
    method: 'PUT',
    params: item
  });
}
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/uploads/index.tsx
















const Uploads = props => {
  const router = (0,router_.useRouter)();
  const Router = router.query; // 用来记录点击的是哪一个选项

  const {
    0: uploadStr,
    1: setUploadStr
  } = (0,external_react_.useState)('');
  const {
    0: alertShow,
    1: setalertShow
  } = (0,external_react_.useState)(false);
  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)([]);
  const {
    0: childData,
    1: setChildData
  } = (0,external_react_.useState)([]);
  const box = (0,external_react_.useRef)(null);
  const {
    0: isShow,
    1: setIsShow
  } = (0,external_react_.useState)(false);
  const {
    0: inputName,
    1: setInputName
  } = (0,external_react_.useState)(''); // 判断点击的是添加功能还是编辑功能

  const {
    0: functionType,
    1: setFunctionType
  } = (0,external_react_.useState)(false); // 点击子章节编辑获取当前数据

  const {
    0: chapterItem,
    1: setChapterItem
  } = (0,external_react_.useState)();
  const {
    0: isAudioStop,
    1: setIsAudioStop
  } = (0,external_react_.useState)(false);
  console.log(Router); // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const content = (item, i) => {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (index_module_default()).editInput,
        children: /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          value: inputName,
          onChange: e => {
            setInputName(e.target.value);
          }
        })
      })
    });
  };

  const newObj = {
    courseId: Router.courseId !== undefined ? Router.courseId : props.courseId
  }; // eslint-disable-next-line import/no-named-as-default-member

  const CancelToken = (external_axios_default()).CancelToken;
  const source = CancelToken.source();
  (0,external_react_.useEffect)(() => {
    if (props.courseId && props.courseId.length > 0) {
      const getAll = async () => {
        const res = await AllMessage({
          courseId: props.courseId
        });

        if (res) {
          setData(res);
        }

        const res1 = await chapterChildren(newObj);

        if (res1) {
          setChildData(res1);
        }
      };

      getAll();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [props.courseId]);
  const {
    getChapterData
  } = props;

  const addMessage = async () => {
    const obj = {
      chapterName: `第${data.length + 1}章`,
      courseId: Router.courseId !== undefined ? Router.courseId : props.courseId,
      ids: data[data.length - 1] ? data[data.length - 1].ids + 1 : 1
    };
    const res = await AddMessage(obj);

    if (res) {
      setData(res);
    }
  };

  const deleteMessage = async (ids, uids) => {
    const obj = {
      id: ids,
      courseId: Router.courseId !== undefined ? Router.courseId : props.courseId
    }; // 删除该章节的所有子章节

    await deChapter({
      chapterId: uids
    }); // eslint-disable-next-line @typescript-eslint/no-unused-vars

    const res = await DeleteMessage(obj);
    const res1 = await AllMessage(newObj);

    if (res1) {
      setData(res1);
    }

    if (box.current.scrollHeight <= window.innerHeight) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      setIsShow(false);
    }
  };

  const shiftUp = async (types, index) => {
    const obj = {
      nowId: 0,
      toId: 0
    };
    const nowData = types === 0 ? data[index - 1] : data[index + 1];

    if (nowData) {
      obj.nowId = data[index].chapterId;
      obj.toId = nowData.chapterId;
      await RecomposeMessage(obj);
      const res1 = await AllMessage(newObj); // const res = await chapterChildren();

      if (res1) {
        setData(res1); // setChildData(res);
      }
    }
  };

  const menus = i => {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)((menu_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          onClick: () => {
            shiftUp(0, i);
          },
          children: "\u4E0A\u79FB"
        })
      }, "1"), /*#__PURE__*/jsx_runtime_.jsx((menu_default()).Item, {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "#",
          onClick: () => {
            shiftUp(1, i);
          },
          children: "\u4E0B\u79FB"
        })
      }, "2")]
    });
  }; // 点击调用弹框


  const {
    0: idss,
    1: setIdss
  } = (0,external_react_.useState)('');

  const alertdialog = (str, ids) => {
    // 把功能类型改为添加(false)
    setFunctionType(false); // 只要不是点击的编辑按钮,就不给传数据

    setChapterItem(undefined); // 把当前章节的id传给弹框

    setIdss(ids); // 获取当前惦记的那个按钮

    setUploadStr(str); // 打开弹框开关

    setalertShow(true);
  }; // 关闭弹窗事件


  const changeAlertFlag = res => {
    setIsAudioStop(true);
    setalertShow(res);
  }; // Icon


  const MyIcon = (0,icons_.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992472_6nj24f81zbp.js' // 在 iconfont.cn 上生成

  }); // 确认删除子章节

  const confirm = async id => {
    // 删除当前点击的子章节
    const res = await deChapter({
      id
    }); // 重新获取子章节数据

    const res1 = await chapterChildren(newObj);
    setChildData(res1);

    message_default().success('删除成功');
  }; // 取消删除子章节
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  const cancel = e => {
    message_default().error('取消删除');
  }; // 添加一条子章节时执行


  const updateData = async () => {
    // 重新获取子章节数据
    const res1 = await chapterChildren(newObj);
    setChildData(res1);
  };

  (0,external_react_.useEffect)(() => {
    if (childData.length > 0) {
      getChapterData(true);
    } else {
      getChapterData(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [childData]); // 组件卸载时

  (0,external_react_.useEffect)(() => {
    return () => {
      source.cancel('取消请求');
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 编辑子章节

  const redactchapter = (item, ids) => {
    // 把功能类型改为编辑(true)
    setFunctionType(true); // 把当前数据拿到传给弹框

    setChapterItem(item); // 把当前章节的id传给弹框

    setIdss(ids); // 获取当前惦记的那个按钮

    setUploadStr(item.serialType); // 打开弹框开关

    setalertShow(true);
  };

  const confirms = async item => {
    // message.info('Clicked on Yes.');
    const obj = {
      courseId: item.courseId,
      chapterId: item.chapterId,
      chapterName: inputName
    };
    const res = await editChapter(obj);

    if (res) {
      setData(res);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      children: data ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        ref: box,
        className: (index_module_default()).box,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).addBox,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: (index_module_default()).addBtn,
              onClick: () => {
                addMessage();
              },
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: (index_module_default()).iconfont,
                  children: "\uE6E2"
                }), ' ']
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "\u521B\u5EFA\u8BFE\u7A0B\u7AE0\u8282"
              })]
            })
          })
        }), data.map((item, i) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            style: {
              minHeight: '130px',
              marginBottom: '10px'
            },
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (index_module_default()).editEvents,
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: (index_module_default()).editArea,
                children: /*#__PURE__*/jsx_runtime_.jsx((popconfirm_default()), {
                  placement: "bottomLeft",
                  title: content(item, i),
                  onConfirm: () => {
                    confirms(item);
                  },
                  okText: '修改',
                  cancelText: "",
                  style: {
                    border: '0px'
                  },
                  icon: "",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)((button_default()), {
                    onClick: () => {
                      setInputName(item.chapterName);
                    },
                    children: [item.chapterName, /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: (index_module_default()).iconfont,
                      children: "\uE616"
                    })]
                  })
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: (index_module_default()).editEventsRight,
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                    onClick: () => {
                      deleteMessage(item.chapterId, item.uids);
                    },
                    style: {
                      padding: '1px 5px'
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                        className: (index_module_default()).iconfont,
                        children: "\uE615"
                      })
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      children: "\u5220\u9664\u7AE0\u8282\u53CA\u5B50\u7AE0\u8282"
                    })]
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx((dropdown_default()), {
                  overlay: menus(i),
                  placement: "bottomRight",
                  trigger: ['click'],
                  children: /*#__PURE__*/jsx_runtime_.jsx("button", {
                    className: (index_module_default()).btns,
                    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: (index_module_default()).iconfont,
                      children: "\uE674"
                    })
                  })
                }, "1")]
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
              className: (index_module_default()).title_table,
              cellSpacing: "0",
              cellPadding: "0",
              style: {
                fontSize: '12px'
              },
              children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                  style: {
                    cursor: 'move'
                  },
                  children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
                    style: {
                      textAlign: 'center',
                      width: '2%'
                    },
                    children: "\u5E8F\u53F7"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    style: {
                      width: '20%'
                    },
                    children: "\u7AE0\u8282\u540D\u79F0"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    style: {
                      width: '8%'
                    },
                    children: "\u5185\u5BB9"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    style: {
                      width: '3%',
                      textAlign: 'center'
                    },
                    children: "\u7C7B\u578B"
                  }), /*#__PURE__*/jsx_runtime_.jsx("th", {
                    style: {
                      width: '2%',
                      textAlign: 'center'
                    },
                    children: "\u64CD\u4F5C"
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
                children: childData ? childData.map((doc, index) => {
                  return doc.chapterId === item.uids ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
                    style: {
                      cursor: 'pointer'
                    },
                    children: [/*#__PURE__*/jsx_runtime_.jsx("td", {
                      style: {
                        textAlign: 'center'
                      },
                      children: index + 1
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      style: {
                        color: '#2972ab'
                      },
                      onClick: () => {
                        redactchapter(doc, item.uids);
                      },
                      children: doc.serialName
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      style: {},
                      title: doc.fileName ? doc.fileName : doc.serialContent,
                      children: doc.fileName ? doc.fileName : doc.serialContent ? doc.serialContent.length > 20 ? doc.serialContent.slice(0, 20) + '...' : doc.serialContent : ''
                    }), /*#__PURE__*/jsx_runtime_.jsx("td", {
                      style: {
                        textAlign: 'center'
                      },
                      children: doc.serialType === 'graphic' ? '图文' : doc.serialType === 'video' ? '视频' : doc.serialType === 'document' ? '文档' : ''
                    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("td", {
                      style: {
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-around'
                      },
                      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                        onClick: () => {
                          redactchapter(doc, item.uids);
                        },
                        children: /*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
                          style: {
                            fontSize: '20px'
                          },
                          type: "icon-bianji"
                        })
                      }), /*#__PURE__*/jsx_runtime_.jsx((popconfirm_default()), {
                        title: "\u786E\u5B9A\u8981\u5220\u9664\u6B64\u4EFB\u52A1\u5417?",
                        onConfirm: () => {
                          confirm(doc.id);
                        },
                        onCancel: cancel,
                        okText: "\u786E\u5B9A",
                        cancelText: "\u53D6\u6D88",
                        style: {
                          height: '0',
                          width: '0'
                        },
                        children: /*#__PURE__*/jsx_runtime_.jsx(MyIcon, {
                          style: {
                            fontSize: '20px'
                          },
                          type: "icon-shanchu"
                        })
                      })]
                    })]
                  }, index) : null;
                }) : null
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: (index_module_default()).footerEvents,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                onClick: () => {
                  alertdialog('graphic', item.uids);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: (index_module_default()).iconfont,
                    children: "\uE789"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: "\u6DFB\u52A0\u56FE\u6587"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                onClick: () => {
                  alertdialog('video', item.uids);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: (index_module_default()).iconfont,
                    children: "\uE6CC"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: "\u6DFB\u52A0\u89C6\u9891"
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
                onClick: () => {
                  alertdialog('document', item.uids);
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: (index_module_default()).iconfont,
                    children: "\uE61B"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  children: "\u6DFB\u52A0\u6587\u6863"
                })]
              })]
            })]
          }, item.chapterId);
        }), isShow === true ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (index_module_default()).addBox,
          style: {
            zIndex: '999'
          },
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("button", {
              className: (index_module_default()).addBtn,
              onClick: () => {
                addMessage();
              },
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
                  className: (index_module_default()).iconfont,
                  children: "\uE6E2"
                }), ' ']
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                children: "\u521B\u5EFA\u8BFE\u7A0B\u7AE0\u8282"
              })]
            })
          })
        }) : null]
      }) : null
    }), /*#__PURE__*/jsx_runtime_.jsx(appUploads, {
      uploadStr: uploadStr,
      alertShow: alertShow,
      isChapterName: changeAlertFlag,
      chapterId: idss,
      updateData: updateData,
      chapterItem: chapterItem,
      functionType: functionType,
      courseId: props.courseId,
      Stop: isAudioStop
    })]
  });
};

/* harmony default export */ const uploads = (Uploads);

/***/ }),

/***/ 6277:
/***/ ((module) => {

// Exports
module.exports = {
	"UploadsBottom": "appUploads_UploadsBottom__0YWq_"
};


/***/ }),

/***/ 2954:
/***/ ((module) => {

// Exports
module.exports = {
	"UploadsBottom": "uploads_UploadsBottom__E3O82",
	"drapDown": "uploads_drapDown__GLd2h",
	"box": "uploads_box__Fz_t_",
	"addBox": "uploads_addBox__vXyOL",
	"addBtn": "uploads_addBtn__Cwcow",
	"editName": "uploads_editName__HFHO8",
	"editEvents": "uploads_editEvents__k48xn",
	"editEventsRight": "uploads_editEventsRight__qZzA0",
	"editEventsNowTo": "uploads_editEventsNowTo___q9ga",
	"editEventsNowToI": "uploads_editEventsNowToI__w9ETO",
	"nowTo": "uploads_nowTo__WMvuK",
	"btns": "uploads_btns__ESW81",
	"editSub": "uploads_editSub__ROQ6v",
	"title_table": "uploads_title_table__l84wl",
	"footerEvents": "uploads_footerEvents__3hvv3",
	"iconfont": "uploads_iconfont__lA8wk",
	"editArea": "uploads_editArea__pjpVf",
	"editInput": "uploads_editInput__YGx5y",
	"uploadImg": "uploads_uploadImg__pfQVP"
};


/***/ })

};
;