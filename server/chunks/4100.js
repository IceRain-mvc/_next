exports.id = 4100;
exports.ids = [4100];
exports.modules = {

/***/ 4100:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var _database_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5227);
/* harmony import */ var _database_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_database_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["../src/analyse/examination/examinee/database.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const Switch = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 2024, 23)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2024)],
    modules: ["../src/analyse/examination/examinee/database.tsx -> " + 'antd/lib/switch']
  }
});





const onChange = checked => {
  console.log(checked);
};

const Grade = data => {
  const result = [];
  const arr = [];
  let total = 0;
  data && data.map(item => {
    return result.push(item.grade.split('.'));
  });
  result.map(item => {
    arr.push(item.slice(0, 1));
  });
  total = arr.reduce((prev, item) => {
    return prev + Number(item);
  }, 0);
  return total;
};

const practical = data => {
  let total = 0;
  total = data.reduce((prev, item) => {
    return prev + Number(item.score);
  }, 0);
  return total;
};

const Database = props => {
  const {
    Transfer
  } = props; // 关闭弹窗事件

  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const elevation = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const roll = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  const slide = index => {
    const h = elevation.current.offsetHeight;
    return elevation.current.scrollTo({
      top: index * h,
      behavior: 'smooth'
    });
  };

  const changeAlertFlag = () => {
    Transfer();
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    console.log(num);
  });
  const data = [{
    id: '1',
    title: '驾驶人在下列哪种情况下不能驾驶机动车?',
    // 题目
    state: '1',
    // 代表单选题
    judge: '1',
    content: [{
      title: 'A',
      option: '饮酒后'
    }, {
      title: 'B',
      option: '喝咖啡后'
    }, {
      title: 'C',
      option: '喝牛奶后'
    }, {
      title: 'D',
      option: '喝茶后'
    }],
    // 选项内容
    standard: 'A',
    chooseAnswer: 'A',
    grade: '5.0',
    score: '5'
  }, {
    id: '2',
    title: '1+1=?',
    // 题目
    state: '1',
    // 代表单选题
    judge: '1',
    content: [{
      title: 'A',
      option: '4'
    }, {
      title: 'B',
      option: '3'
    }, {
      title: 'C',
      option: '2'
    }, {
      title: 'D',
      option: '1'
    }],
    // 选项内容
    chooseAnswer: 'C',
    standard: 'C',
    grade: '5.0',
    score: '5'
  }, {
    id: '3',
    title: '根基列出的算式填写计算结果:',
    // 题目
    judge: '1',
    fillOne: '9-1=',
    fillTwo: '4+2=',
    state: '2',
    // 代表填空题
    chooseAnswer: ['8', '6'],
    cont: ['81', '6'],
    grade: '5.0',
    score: '5'
  }, {
    id: '4',
    title: 'CSS Border-简写属性________:',
    // 题目
    state: '3',
    // 代表问答题
    judge: '2',
    chooseAnswer: 'border-width|border-style|border-color',
    cont: 'border:1px sold #ccc',
    grade: '10.0',
    score: '0'
  }, {
    id: '5',
    title: 'CSS box-shadow 属性应用阴影于元素。',
    // 题目
    state: '3',
    // 代表问答题
    judge: '2',
    chooseAnswer: 'div {box-shadow: 10px 10px 5px grey}',
    cont: 'box-shadow: 10px 10px 5px grey',
    grade: '10.0',
    score: '0'
  }, {
    id: '6',
    title: 'doctype（文档类型）的作用是什么？',
    // 题目
    state: '3',
    // 代表问答题
    judge: '2',
    chooseAnswer: '告诉浏览器用何种渲染模式来渲染页面。在浏览器中有三种渲染模式: 怪癖模式（quirks mode）,' + '准标模式（almost standards mode）和标准模式（standards mode）。',
    cont: '限制类型',
    grade: '10.0',
    score: '0'
  }, {
    id: '7',
    title: '简述生产力对教育的作用?',
    // 题目
    state: '3',
    // 代表问答题
    judge: '2',
    chooseAnswer: '决定教育规模和速度、结构变化及内容和手段',
    cont: '抵达哈达迪',
    grade: '10.0',
    score: '0'
  }, {
    id: '8',
    title: '请描述一下 GET 和 POST 的区别?',
    // 题目
    state: '2',
    // 代表填空
    judge: '2',
    chooseAnswer: ['GET是获取资源 , POST是新建资源', 'GET 请求可被缓存 , POST不能', 'GET 请求保留在浏览器历史记录中 , POST不能', 'GET 请求有长度限制 , POST没有'],
    cont: 'get用于获取数据,pos用于新增',
    grade: '5.0',
    score: '0'
  }, {
    id: '9',
    title: '以下属于中国古代四大发明的选项有哪些？',
    // 多选题
    judge: '1',
    state: '4',
    // 代表多选题
    content: [{
      title: 'A',
      option: '火药',
      flag: 1
    }, {
      title: 'B',
      option: '造纸术',
      flag: 1
    }, {
      title: 'C',
      option: '指南针',
      flag: 1
    }, {
      title: 'D',
      option: '瓷器'
    }, {
      title: 'E',
      option: '印刷术',
      flag: 1
    }],
    chooseAnswer: ['A', 'B', 'C', 'E'],
    cont: ['A', 'B', 'C', 'E'],
    grade: '15.0',
    score: '15'
  }];
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
    className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().qxx),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(AlertCommon, {
      alertStatus: true,
      enableDrag: true,
      alertTitle: '考生答卷',
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
        ref: elevation,
        className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bj),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mock),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Left),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().tops),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                children: "\u7B54\u9898\u5361"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().floating),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                children: "\u7B2C1\u5927\u9898"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                children: ["(\u5171", data.length, "\u9898,", Grade(data), "\u5206)"]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().altitude),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().content),
                children: data.map((item, index) => {
                  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    onClick: () => {
                      slide(index);
                    },
                    className: item.judge === '1' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lk) : item.judge === '2' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lc) : item.judge === '3' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mc) : null,
                    children: item.id
                  }, item.id);
                })
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().navs),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().one)
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "\u6B63\u786E"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().one),
                  style: {
                    backgroundColor: ' #f1bfbf',
                    border: '1px solid #e52323'
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "\u9519\u8BEF"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().one),
                  style: {
                    backgroundColor: ' #FFFFFF',
                    border: '1px solid #019319'
                  }
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "\u90E8\u5206\u6B63\u786E"
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banner),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().father),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().banTop),
                children: "\u8BD5\u5377\u7B54\u9898\u7EDF\u8BA1"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("table", {
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("thead", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                      children: "\u5927\u9898\u540D\u79F0"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: "\u603B\u5206"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: "\u5F97\u5206"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("th", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: "\u5F97\u5206\u7387"
                    })]
                  })
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("tbody", {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("tr", {
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      children: "\u7B2C1\u5927\u9898"
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: Grade(data)
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: practical(data)
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("td", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().kc),
                      children: (practical(data) / Grade(data) * 100).toFixed(1)
                    })]
                  })
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().floating),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                children: "\u7B2C1\u5927\u9898"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                children: ["(\u5171", data.length, "\u9898,", Grade(data), "\u5206)"]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().xxx)
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
              children: data.map(curr => {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().contentTop),
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lan),
                      children: [curr.id, "."]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("b", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bbn),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                        ref: roll,
                        children: curr.title
                      }), curr.state === '2' && curr.fillOne && curr.fillTwo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bona),
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: curr.fillOne && curr.fillOne
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().xh),
                            children: curr.cont[0]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: curr.chooseAnswer[0] === curr.cont[0] ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dui) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hd),
                            children: curr.chooseAnswer[0] === curr.cont[0] ? '√' : '×'
                          })]
                        }), "\xA0 , \xA0", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: curr.fillTwo && curr.fillTwo
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().xh),
                            children: curr.cont[1]
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: curr.chooseAnswer[1] === curr.cont[1] ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dui) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hd),
                            children: curr.chooseAnswer[1] === curr.cont[1] ? '√' : '×'
                          })]
                        })]
                      }), curr.state === '2' && curr.fillOne === undefined && curr.fillTwo === undefined && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().xhc),
                          children: curr.cont
                        })
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ak),
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        children: [curr.state === '1' ? '单选题' : null, curr.state === '2' ? '填空题' : null, curr.state === '3' ? '问答题' : null, curr.state === '4' ? '多选题' : null]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                        children: [curr.grade, "\u5206"]
                      })]
                    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.AppleOutlined // className={ && curr.id === num ? styles.hcc : styles.bao}
                    , {})]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    children: curr.state === '1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      children: [curr.content && curr.content.map((item, index) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fcv),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: item.title === curr.standard ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().yq) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().eo),
                            children: item.title
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: item.option
                          })]
                        }, index);
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: curr.standard === curr.chooseAnswer ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ww) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mm),
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: "\u5F97\u5206\uFF1A"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                            children: curr.score
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: "\u5206"
                          })]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              children: "\u6807\u51C6\u7B54\u6848\uFF1A"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lv),
                              children: curr.standard
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              children: "\u6211\u7684\u7B54\u6848\uFF1A"
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              className: curr.standard === curr.chooseAnswer ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lv) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                              children: curr.chooseAnswer
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              className: curr.standard === curr.chooseAnswer ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dui) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hd),
                              children: curr.standard === curr.chooseAnswer ? '√' : '×'
                            })]
                          })]
                        })]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    children: curr.state === '2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: curr.judge === '1' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ww) : curr.judge === '2' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mm) : '',
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          children: "\u5F97\u5206\uFF1A"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                          children: curr.score
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          children: "\u5206"
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                          children: "\u6807\u51C6\u7B54\u6848\uFF1A"
                        }), Array.isArray(curr.chooseAnswer) && curr.chooseAnswer.map((item, index) => {
                          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fdd),
                            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                              children: ["\u586B\u7A7A\u9898", index + 1, "\uFF1A"]
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                              children: item
                            })]
                          }, index);
                        })]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    children: curr.state === '3' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                        className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
                        children: curr.cont
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: curr.judge === '1' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ww) : curr.judge === '2' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mm) : '',
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: "\u5F97\u5206\uFF1A"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                            children: curr.score
                          }), "\u5206"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: "\u6807\u51C6\u7B54\u6848\uFF1A"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: curr.chooseAnswer
                          })]
                        })]
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                    children: curr.state === '4' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      children: [Array.isArray(curr.content) && curr.content.map((item, index) => {
                        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().fcv),
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: item.flag === 1 ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().lvc) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mv),
                            children: item.title
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: item.option
                          })]
                        }, index);
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: curr.judge === '1' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ww) : curr.judge === '2' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().mm) : '',
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            children: "\u5F97\u5206\uFF1A"
                          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                            children: curr.score
                          }), "\u5206"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              children: "\u6807\u51C6\u7B54\u6848\uFF1A"
                            }), Array.isArray(curr.chooseAnswer) && curr.chooseAnswer.map((item, index) => {
                              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().jjc),
                                children: item
                              }, index);
                            })]
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              children: "\u6211\u7684\u7B54\u6848\uFF1A"
                            }), Array.isArray(curr.cont) && curr.cont.map((item, index) => {
                              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().jjc),
                                children: item
                              }, index);
                            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                              className: curr.judge === '1' ? (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().dui) : (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().hd),
                              children: curr.judge === '1' ? '√' : '×'
                            })]
                          })]
                        })]
                      })]
                    })
                  })]
                }, curr.id);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().Right),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rightTop),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sx),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ztv),
                  children: "\u59D3\u540D"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  children: "\u83F2\u83F2"
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sx),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ztv),
                  children: "\u6210\u7EE9"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ruh),
                  children: [practical(data), ".0"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sx),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ztv),
                  children: "\u72B6\u6001"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().zy),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__.CheckOutlined, {
                    className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bg)
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                    children: "\u901A\u8FC7"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sm),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
                  className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bmv),
                  children: "\u53EA\u770B\u9519\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Switch, {
                  defaultChecked: false,
                  onChange: onChange
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sq),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("img", {
                src: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ff26f5ed0d000c3413c9a4250f2c22bcb86a9494e2b2a-Gw0bYT_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1643804497&t=391b990a91a2aea708757ad84a31aad2'
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("div", {
                className: (_database_module_scss__WEBPACK_IMPORTED_MODULE_4___default().xe),
                children: "\u6210\u7EE9\u7801"
              })]
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Database);

/***/ }),

/***/ 5227:
/***/ ((module) => {

// Exports
module.exports = {
	"qxx": "database_qxx__9_4EK",
	"bj": "database_bj__SmOIC",
	"ruh": "database_ruh__b1R0j",
	"floating": "database_floating__UteAc",
	"Left": "database_Left__zsUPn",
	"tops": "database_tops__ypwQY",
	"altitude": "database_altitude__q8o16",
	"content": "database_content__j69oB",
	"lk": "database_lk__HlMLS",
	"lc": "database_lc__TWc_y",
	"mc": "database_mc__HnSYq",
	"navs": "database_navs__wB5gc",
	"one": "database_one__5mjGG",
	"banner": "database_banner__WMazn",
	"father": "database_father__vLJZ9",
	"kc": "database_kc__gebIB",
	"banTop": "database_banTop__QzUzj",
	"xxx": "database_xxx__sUigx",
	"contentTop": "database_contentTop__avV_r",
	"lan": "database_lan__cVGCt",
	"ak": "database_ak__seRd4",
	"bao": "database_bao__qY6Uk",
	"hcc": "database_hcc__Tiskm",
	"fcv": "database_fcv__NREYJ",
	"yq": "database_yq__o5OdP",
	"eo": "database_eo__ogith",
	"ww": "database_ww__BWzAs",
	"mm": "database_mm__GkNB1",
	"lv": "database_lv__s286t",
	"bbn": "database_bbn__5J6Qd",
	"bona": "database_bona__OItpH",
	"xh": "database_xh__kwnzC",
	"xhc": "database_xhc__CZM_x",
	"dui": "database_dui__FLe1X",
	"hd": "database_hd__hiMgH",
	"xy": "database_xy__kieOy",
	"fdd": "database_fdd__cWFEB",
	"text": "database_text__8sWXI",
	"jjc": "database_jjc__AiDfL",
	"mv": "database_mv__KOWi2",
	"lvc": "database_lvc__mvp86",
	"Right": "database_Right__vc2eM",
	"rightTop": "database_rightTop__UfaJQ",
	"sx": "database_sx__2FxHm",
	"sm": "database_sm__8QpCd",
	"bmv": "database_bmv__Gp3NR",
	"ztv": "database_ztv__2o57b",
	"bg": "database_bg__wx6oN",
	"sq": "database_sq__f0BBa",
	"xe": "database_xe__9aE9q"
};


/***/ })

};
;