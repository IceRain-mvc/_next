exports.id = 3197;
exports.ids = [3197];
exports.modules = {

/***/ 3197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5417);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Nav_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9392);
/* harmony import */ var _management_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2027);
/* harmony import */ var _management_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_management_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var antd_lib_layout_Sider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8008);
/* harmony import */ var antd_lib_layout_Sider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_Sider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8697);
/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);











const IconFont = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.createFromIconfontCN)({
  scriptUrl: '//at.alicdn.com/t/font_2981278_8e5mlve6tua.js'
});
const navArr = [{
  title: '账号信息',
  icont: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
    type: "icon-zuanshi"
  }),
  src: '/management/accountInformation'
}, {
  title: '子管理员',
  icont: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
    type: "icon-wrench-fill"
  }),
  src: '/management/childAdministrator'
}, {
  title: '分类',
  icont: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
    type: "icon-fl-renminbi"
  }),
  src: '/management/classify'
}, {
  title: '操作日志',
  icont: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(IconFont, {
    type: "icon-xiongmaojiaoyin"
  }),
  src: '/management/operationLog'
}];

const ManagementNav = props => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
    className: (_management_module_scss__WEBPACK_IMPORTED_MODULE_9___default().managementNav),
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(_components_Nav_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        args: 7,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)((antd_lib_layout_Sider__WEBPACK_IMPORTED_MODULE_4___default()), {
            width: 160,
            className: "site-layout-background",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("h1", {
              className: (_management_module_scss__WEBPACK_IMPORTED_MODULE_9___default().clearfix),
              children: "\u7BA1\u7406\u8BBE\u7F6E"
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default()), {
              mode: "inline",
              defaultSelectedKeys: [props.args],
              style: {
                height: '100%',
                background: '#eff2f5',
                borderRight: 'solid 1px #d4d5d5'
              },
              children: navArr.map((item, index) => {
                return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_1___default().Item), {
                  icon: item.icont,
                  onClick: () => {
                    item.src && next_router__WEBPACK_IMPORTED_MODULE_6___default().push(item.src);
                  },
                  children: item.title
                }, index);
              })
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx((antd_lib_layout__WEBPACK_IMPORTED_MODULE_0___default()), {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_5__.Content, {
              className: "site-layout-background",
              style: {
                padding: 15,
                margin: 0,
                minHeight: 280,
                overflow: 'auto',
                background: '#f7f9fb'
              },
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx("div", {
                className: (_management_module_scss__WEBPACK_IMPORTED_MODULE_9___default().content),
                children: props.children
              })
            })
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ManagementNav);

/***/ }),

/***/ 2027:
/***/ ((module) => {

// Exports
module.exports = {
	"managementNav": "management_managementNav__nU_2S",
	"clearfix": "management_clearfix__kEAQU",
	"content": "management_content__uuuJg"
};


/***/ })

};
;