"use strict";
exports.id = 2828;
exports.ids = [2828];
exports.modules = {

/***/ 2828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ httpProvider)
});

// EXTERNAL MODULE: external "antd/lib/message"
var message_ = __webpack_require__(7369);
var message_default = /*#__PURE__*/__webpack_require__.n(message_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
var router_default = /*#__PURE__*/__webpack_require__.n(router_);
;// CONCATENATED MODULE: ./src/utils/login.ts

const whitePaths = ['login', 'register'];
const toLogin = () => {
  const {
    pathname,
    asPath
  } = (router_default());

  if (whitePaths.some(path => pathname.includes(path))) {
    return;
  }

  if (whitePaths.some(path => asPath.includes(path))) {
    router_default().push(`/login`);
  } else {
    router_default().push(`/login?redirect=${asPath}`);
  }
};
;// CONCATENATED MODULE: ./src/utils/http.ts



const apiV1 = 'http://110.40.139.133'; // const apiV1 = 'http://192.168.5.104';

const httpProvider = external_axios_default().create({
  baseURL:  true ? apiV1 + ':4001/api/v1' : 0,
  timeout: 100000
});
httpProvider.interceptors.request.use(config => {
  if (false) {}

  return config;
}, () => {
  throw new Error('发起请求出错');
});
httpProvider.interceptors.response.use(data => {
  if (data.status && data.status === 200 && data.data.status === 'error') {
     false && 0;
    return null;
  }

  const res = data.data;

  if (!res.success) {
    message_default().error(res.msg);

    return null;
  }

  return res.data;
}, err => {
  if (err && err.response && err.response.status) {
    const status = err.response.status;
    const isClient = false;

    switch (status) {
      case 504:
      case 404:
        isClient && message_default().error('服务器异常');
        break;

      case 403:
        isClient && message_default().warn('访客无权进行该操作');
        break;

      case 401:
        isClient && message_default().info('请重新登录');
        toLogin();
        break;

      case 422:
        isClient && message_default().info('上传成功');
        break;

      case 500:
        isClient && message_default().info('服务器内部出错');
        break;

      default:
        isClient && message_default().error(err.response && err.response.data && err.response.data.msg || '未知错误!');
    }
  }

  return Promise.reject(err);
});

/***/ })

};
;