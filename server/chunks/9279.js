"use strict";
exports.id = 9279;
exports.ids = [9279];
exports.modules = {

/***/ 9279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J9": () => (/* binding */ LoginFun),
/* harmony export */   "Q0": () => (/* binding */ GetDataByName),
/* harmony export */   "a2": () => (/* binding */ Resetpwd),
/* harmony export */   "xt": () => (/* binding */ GetAllUser),
/* harmony export */   "WZ": () => (/* binding */ GetAllStudentsData),
/* harmony export */   "Gy": () => (/* binding */ SendEmail),
/* harmony export */   "N$": () => (/* binding */ CreateAppMessage),
/* harmony export */   "f": () => (/* binding */ UpdataAppMessage),
/* harmony export */   "$M": () => (/* binding */ GetAppMessage)
/* harmony export */ });
/* unused harmony export Upload */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
 // 登陆

function LoginFun(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'auth/login',
    method: 'POST',
    data
  });
} // 按用户名查找用户

function GetDataByName(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'auth/getDataByName',
    method: 'GET',
    params
  });
} // 重置密码

function Resetpwd(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'auth/resetpwd',
    method: 'PUT',
    params
  });
} // 得到所有用户数据

function GetAllUser() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'auth/getAllUser',
    method: 'GET'
  });
} // 得到所有考生

function GetAllStudentsData() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'students/getAllStudentsNum',
    method: 'GET'
  });
} // 发送邮箱信息

function SendEmail(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'send-email/sendFindBackPwd',
    method: 'POST',
    params
  });
} // 上传图片

function Upload(params) {
  return httpProvider.request({
    url: 'uploading/upload',
    method: 'POST',
    params
  });
} // 创建app数据

function CreateAppMessage(data) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'examineeSideInformation/createAppMessage',
    method: 'POST',
    data
  });
} // 修改app数据

function UpdataAppMessage(params) {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'examineeSideInformation/updataAppMessage',
    method: 'PUT',
    params
  });
} // 得到app数据

function GetAppMessage() {
  return _utils_http__WEBPACK_IMPORTED_MODULE_0__/* .httpProvider.request */ .A.request({
    url: 'examineeSideInformation/getAppMessage',
    method: 'GET'
  });
}

/***/ })

};
;