exports.id = 9811;
exports.ids = [9811];
exports.modules = {

/***/ 9811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9392);
/* harmony import */ var _components_Nav_header_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8272);
/* harmony import */ var _components_Nav_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_components_Nav_header_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5167);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9201);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);










const Home = () => {
  const footerDiv = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const {
    0: userName,
    1: setuserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const content = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const content2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);

  function change(e) {
    if (e.target.innerHTML === '系统公告') {
      const div1 = content.current;
      div1.style.display = 'block';
      const div2 = content2.current;
      div2.style.display = 'none';
    } else if (e.target.innerHTML === '快速入门') {
      const div1 = content.current;
      div1.style.display = 'none';
      const div2 = content2.current;
      div2.style.display = 'block';
    }
  }

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setuserName(localStorage.getItem('user'));
    const chartDoms = footerDiv.current; // eslint-disable-next-line import/namespace

    const myChart = echarts__WEBPACK_IMPORTED_MODULE_4__.init(chartDoms);
    let option; // eslint-disable-next-line prefer-const

    option = {
      xAxis: {
        type: 'category',
        data: ['12-30', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }]
    };
    option && myChart.setOption(option); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_1__["default"], {
      args: 1,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().bigBox),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().containeBigbox),
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headContaine),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headLeft),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                children: ["\u60A8\u597D\uFF0C", userName]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().headRight),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.QuestionCircleOutlined, {
                style: {
                  paddingRight: '8px',
                  fontSize: '12px',
                  color: 'rgb(61 92 171)'
                }
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                children: "\u5E2E\u52A9\u6587\u6863"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modlues),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modulesLeft),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/exam/createCrew',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_components_Nav_header_module_scss__WEBPACK_IMPORTED_MODULE_7___default().oneImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u521B\u5EFA\u8003\u8BD5"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u5FEB\u901F\u521B\u5EFA\u5E76\u53D1\u5E03\u5728\u7EBF\u8003\u8BD5"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301\u4E09\u79CD\u8BD5\u9898\u7EC4\u5377\u6A21\u5F0F"
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/exercise',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().twoImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u521B\u5EFA\u7EC3\u4E60"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301\u6A21\u62DF\u7EC3\u4E60\u548C\u7AE0\u8282\u7EC3\u4E60"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u901A\u8FC7\u7EC3\u4E60\u505A\u9898\u5DE9\u56FA\u77E5\u8BC6"
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/course/create',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().threeImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u521B\u5EFA\u8BFE\u7A0B"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u521B\u5EFA\u5E76\u53D1\u5728\u7EBF\u5B66\u4E60\u8BFE\u7A0B"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301\u89C6\u97F3\u9891\u3001\u6587\u6863\u3001\u56FE\u6587\u7B49"
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/analyse/examination',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().fourImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u8003\u8BD5\u6210\u7EE9"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u4E00\u952E\u6279\u91CF\u5BFC\u51FA\u8003\u8BD5\u6210\u7EE9"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301Word/Excel/Txt\u6A21\u677F"
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/resource/students',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().fiveImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u8003\u751F\u7BA1\u7406"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u8003\u751F\u53CA\u7EC4\u7EC7\u4FE1\u606F\u7EDF\u4E00\u7BA1\u7406"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301Excel\u6279\u91CF\u5BFC\u5165\u8003\u751F"
                        })]
                      })]
                    })]
                  })
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                href: '/resource/testBank',
                children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().divs),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().linkA),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                      style: {
                        width: '30%',
                        height: '100%',
                        float: 'left'
                      },
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().sixImg)
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().LinkCon),
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                        style: {
                          margin: '0'
                        },
                        children: "\u8BD5\u9898\u5E93"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                        style: {
                          fontSize: '12px',
                          color: ' rgb(144 144 164)',
                          display: 'inline-block'
                        },
                        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            // width: '180px',
                            margin: '0' // overflow: 'hidden',
                            // textOverflow: 'ellipsis',
                            // whiteSpace: 'nowrap',

                          },
                          children: "\u65E0\u9650\u5C42\u7EA7\u8BD5\u9898\u5206\u7C7B\u7BA1\u7406"
                        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                          style: {
                            margin: '0'
                          },
                          children: "\u652F\u6301\u591A\u79CD\u9898\u578B\u521B\u5EFA"
                        })]
                      })]
                    })]
                  })
                })
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().modulesRight),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().ptitle),
                children: "\u8003\u751F\u5B66\u5458\u767B\u5F55\u5165\u53E3"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().kszxEwm),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().QRcode),
                  children: "\u6211\u662F\u4E8C\u7EF4\u7801"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().kszxEwmRight),
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("span", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().kszxEwmRightBox),
                    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.CopyOutlined, {}), "\u590D\u5236\u767B\u5F55\u94FE\u63A5", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {})]
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().kszxEwmRightBox),
                    children: "\u8003\u751F\u4E2D\u5FC3\u8BBE\u7F6E"
                  })]
                })]
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().middleDiv),
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().middleConLeft),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conDivs),
                children: "\u5B9E\u65F6\u5728\u7EBF\u4EBA\u6570"
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conDivs),
                children: "\u8003\u751F\u8D26\u53F7"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conDivs),
                children: ["\u6628\u65E5\u53C2\u52A0\u91CF", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                  style: {
                    paddingTop: '50px'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    style: {
                      fontSize: '20px'
                    },
                    children: "0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    children: " / \u4EBA\u6B21"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conDivs),
                children: ["\u8FD1\u4E00\u5468\u53C2\u52A0\u91CF", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                  style: {
                    paddingTop: '50px'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    style: {
                      fontSize: '20px'
                    },
                    children: "0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    children: " / \u4EBA\u6B21"
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conDivs),
                children: ["\u8FD1\u4E00\u6708\u53C2\u52A0\u91CF", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("p", {
                  style: {
                    paddingTop: '50px'
                  },
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    style: {
                      fontSize: '20px'
                    },
                    children: "0"
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                    children: " / \u4EBA\u6B21"
                  })]
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().middleConRight),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  height: '40px'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conRightTitle),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conRightLi),
                    onMouseOver: e => {
                      change(e);
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      children: "\u7CFB\u7EDF\u516C\u544A"
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().conRightLi),
                    onMouseOver: e => {
                      change(e);
                    },
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      children: "\u5FEB\u901F\u5165\u95E8"
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  display: 'block'
                },
                ref: content,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().xtCon),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u8003\u8BD5\u4E912022\u5E741\u6708\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {},
                        children: "12-29"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u8003\u8BD5\u4E9111\u6708\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {},
                        children: "11-25"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u8003\u8BD5\u4E9110\u6708\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {},
                        children: "10-25"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u56FD\u5E86\u8282\u653E\u5047\u901A\u77E5"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {},
                        children: "09-30"
                      })]
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u8003\u8BD5\u4E9111\u6708\u7CFB\u7EDF\u66F4\u65B0\u901A\u77E5"
                      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        style: {},
                        children: "09-18"
                      })]
                    })
                  })]
                })
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
                style: {
                  display: 'none'
                },
                ref: content2,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("ul", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().xtCon),
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u5982\u4F55\u5FEB\u901F\u521B\u5EFA\u5728\u7EBF\u8003\u8BD5\uFF1F"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u5982\u4F55\u5FEB\u901F\u521B\u5EFA\u5728\u7EBF\u7EC3\u4E60\u6216\u4F5C\u4E1A\uFF1F"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u5982\u4F55\u5FEB\u901F\u521B\u5EFA\u5728\u7EBF\u57F9\u8BAD\u7EC4\u5B66\u4E60\uFF1F"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u5982\u4F55\u5FEB\u901F\u5BFC\u5165\u8BD5\u9898\uFF1F"
                      })
                    })
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("li", {
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("a", {
                      href: "",
                      style: {
                        color: 'rgb(144 144 164)'
                      },
                      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                        children: "\u5982\u4F55\u5FEB\u901F\u5BFC\u5165\u8003\u751F\u4FE1\u606F\uFF1F"
                      })
                    })
                  })]
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDiv),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("p", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialP),
              children: "\u4F7F\u7528\u6559\u7A0B "
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialBox),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivs),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivsTit),
                  children: "\u4E09\u4E2A\u6B65\u9AA4\u5FEB\u901F\u521B\u5EFA\u8003\u8BD5"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("b", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().goRight),
                  style: {
                    color: ' rgb(144 144 164)'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().xiangqing),
                  children: ["1.\u586B\u5199\u8003\u8BD5\u4FE1\u606F\u3001\u8BBE\u7F6E\u8003\u751F\u53C2\u52A0\u65B9\u5F0F\u7B49", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "2.\u9009\u62E9\u8BD5\u5377\u7C7B\u578B\uFF0C\u51FA\u9898\u7EC4\u5377", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "3.\u8003\u573A\u73AF\u5883\u8BBE\u7F6E\uFF0C\u9632\u4F5C\u5F0A\u8BBE\u7F6E\uFF0C\u5FAE\u4FE1\u8BBE\u7F6E\u7B49"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivs),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivsTit),
                  children: "\u5982\u4F55\u5FEB\u901F\u6279\u91CF\u5F55\u5165\u8BD5\u9898"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("b", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().goRight),
                  style: {
                    color: ' rgb(144 144 164)'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().xiangqing),
                  children: ["1.\u652F\u6301Excel\u3001Word\u3001Txt\u6A21\u677F\u5BFC\u5165", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "2.\u652F\u6301\u591A\u79CD\u8BD5\u9898\u7C7B\u578B\uFF0C\u5305\u62EC\u57FA\u7840\u9898\u578B\u548C\u590D\u6742\u9898\u578B", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "3.\u65B9\u4FBF\u3001\u5FEB\u6377\u3001\u7B80\u6D01\u3001\u4E00\u952E\u6279\u91CF\u5BFC\u5165\u8BD5\u9898"]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivs),
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().tutorialDivsTit),
                  children: "\u521B\u5EFA\u4E00\u5957\u7AE0\u8282\u7EC3\u4E60\u9898\u5E93"
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("b", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().goRight),
                  style: {
                    color: ' rgb(144 144 164)'
                  },
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, {})
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                  className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().xiangqing),
                  children: ["1.\u81EA\u5B9A\u4E49\u77E5\u8BC6\u7AE0\u8282\uFF0C\u7C7B\u4F3C\u9A7E\u8003\u5B9D\u5178\u505A\u9898", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "2.\u901A\u8FC7\u7EC3\u4E60\u5B66\u4E60\u77E5\u8BC6\uFF0C\u8FB9\u505A\u8FB9\u67E5\u770B\u7B54\u6848\u89E3\u6790", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("br", {}), "3.\u81EA\u52A8\u8BB0\u5F55\u9519\u9898\uFF0C\u652F\u6301\u9519\u9898\u91CD\u505A\u548C\u80CC\u9898\u6A21\u5F0F"]
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("span", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().chevronBox),
              children: "\u66F4\u591A"
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footerDiv),
            ref: footerDiv,
            children: "111"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_6___default().footer)
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ 5167:
/***/ ((module) => {

// Exports
module.exports = {
	"bigBox": "home_bigBox__FbG27",
	"containeBigbox": "home_containeBigbox__rpWAR",
	"headContaine": "home_headContaine__Tnm84",
	"headLeft": "home_headLeft__20_ru",
	"headRight": "home_headRight__xS8Pb",
	"modlues": "home_modlues__ucd93",
	"modulesLeft": "home_modulesLeft__zy_aE",
	"divs": "home_divs__La4o0",
	"linkA": "home_linkA__tiFBk",
	"oneImg": "home_oneImg__Ktx37",
	"twoImg": "home_twoImg__wKa8t",
	"threeImg": "home_threeImg__eiJP3",
	"fourImg": "home_fourImg__hSerJ",
	"fiveImg": "home_fiveImg__jkUR5",
	"sixImg": "home_sixImg__in1T5",
	"LinkCon": "home_LinkCon__hcc_K",
	"modulesRight": "home_modulesRight__a11bT",
	"ptitle": "home_ptitle__qPlpL",
	"kszxEwm": "home_kszxEwm__dFw4_",
	"QRcode": "home_QRcode__GL2F8",
	"kszxEwmRight": "home_kszxEwmRight__wsJJ2",
	"kszxEwmRightBox": "home_kszxEwmRightBox__P2j1G",
	"middleDiv": "home_middleDiv__x95uS",
	"middleConLeft": "home_middleConLeft__G_RH9",
	"conDivs": "home_conDivs__5Inr6",
	"middleConRight": "home_middleConRight__92Fh3",
	"conRightTitle": "home_conRightTitle__lN6qQ",
	"conRightLi": "home_conRightLi__sx1Wj",
	"xtCon": "home_xtCon__lig8B",
	"tutorialDiv": "home_tutorialDiv__x5qoO",
	"tutorialP": "home_tutorialP__rLAr2",
	"tutorialBox": "home_tutorialBox__jaVov",
	"tutorialDivs": "home_tutorialDivs__H5jBZ",
	"tutorialDivsTit": "home_tutorialDivsTit__Whs24",
	"goRight": "home_goRight__oHkKq",
	"xiangqing": "home_xiangqing__Yq0yK",
	"chevronBox": "home_chevronBox__Ky0gd",
	"footerDiv": "home_footerDiv__8fvbI",
	"footer": "home_footer__pmOls"
};


/***/ })

};
;