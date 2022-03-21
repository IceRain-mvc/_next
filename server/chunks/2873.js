exports.id = 2873;
exports.ids = [2873];
exports.modules = {

/***/ 2873:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _analyse_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3885);
/* harmony import */ var _analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu_SubMenu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5066);
/* harmony import */ var antd_lib_menu_SubMenu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_SubMenu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









const {
  Sider
} = (antd_lib_layout__WEBPACK_IMPORTED_MODULE_1___default());

const AnalyseContent = props => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
  const {
    0: menus
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.menu);
  const {
    0: collapsed,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);

  const toggle = () => {
    setState(!collapsed);
  };

  const {
    0: num,
    1: setNum
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(`${props.start ? props.start : '0'}`);
  const {
    0: sub
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(`${props.start > 8 ? 8 : ''}`);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(Sider, {
    trigger: null,
    theme: "light",
    collapsible: true,
    collapsed: collapsed,
    className: (_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default().analyseLeft),
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("h1", {
      className: collapsed ? `${(_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default().clearfix)}` : '',
      children: props.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default()), {
      mode: "inline",
      defaultSelectedKeys: [`${num}`],
      className: (_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default().Menu),
      theme: "light",
      defaultOpenKeys: [`${sub}`],
      children: menus.map(item => {
        if (Array.isArray(item.subMenu)) {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu_SubMenu__WEBPACK_IMPORTED_MODULE_5___default()), {
            icon: item.icon.render(),
            title: item.name,
            children: item.subMenu.map(items => {
              return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default().Item), {
                icon: items.icon ? items.icon.render() : '',
                onClick: () => {
                  setNum(items.key);
                  items.path && router.push(items.path);
                },
                children: items.name
              }, items.key);
            })
          }, item.key);
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_0___default().Item), {
          icon: item.icon.render(),
          onClick: () => {
            setNum(item.key);
            item.path && router.push(item.path);
          },
          children: item.name
        }, item.key);
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx("div", {
      className: (_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default()["switch"]),
      onClick: () => {
        toggle();
      },
      children: collapsed ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.RightOutlined, {
        className: (_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default().icon)
      }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.LeftOutlined, {
        className: (_analyse_module_scss__WEBPACK_IMPORTED_MODULE_7___default().icon)
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnalyseContent);

/***/ }),

/***/ 3885:
/***/ ((module) => {

// Exports
module.exports = {
	"analyseLeft": "analyse_analyseLeft__K8tWg",
	"clearfix": "analyse_clearfix___5PCm",
	"Menu": "analyse_Menu__mFNVF",
	"switch": "analyse_switch__WTj_L",
	"icon": "analyse_icon__kVaet"
};


/***/ })

};
;