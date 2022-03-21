"use strict";
exports.id = 6166;
exports.ids = [6166];
exports.modules = {

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ uploadToGithub)
/* harmony export */ });
/* harmony import */ var _utils_sha256__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3286);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);



function getFileBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function (e) {
      if (e.target) {
        const res = (e.target.result + '').split(',')[1]; // 转换已经完成

        resolve(res);
      } else {
        reject(new Error('error'));
      }
    };
  });
}

const uploadToGithub = async (filename, file) => {
  // const date: Date = new Date();
  const splitArr = filename.split('.');
  const suffix = '.' + splitArr[splitArr.length - 1];
  let fileBase64;
  let filenameSha256;

  if (typeof file !== 'string') {
    fileBase64 = await getFileBase64(file);
  } else {
    fileBase64 = file;
  }

  filenameSha256 = (0,_utils_sha256__WEBPACK_IMPORTED_MODULE_1__/* .sha256_digest */ .Z)(fileBase64);
  filenameSha256 += suffix;
  const cdnPath = 'exam_project';
  const URL = `https://api.github.com/repos/IceRain-mvc/cdn/contents/${cdnPath}/${filenameSha256}`; // request 请求实例

  const uploadBaseUrl = `https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/${cdnPath}/`; // 失效token
  // const token = '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';

  const token = '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';
  return axios__WEBPACK_IMPORTED_MODULE_0___default().request({
    url: URL,
    method: 'put',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + token
    },
    data: {
      message: 'upload',
      committer: {
        name: 'IceRain-mvc',
        email: '1459574275@qq.com'
      },
      content: fileBase64
    }
  }).then(data => {
    return [null, {
      uploadUrl: uploadBaseUrl + data.data.content.name
    }];
  }).catch(err => {
    switch (err.response.status) {
      case 422:
        return [err, {
          uploadUrl: uploadBaseUrl + filenameSha256
        }];

      case 404:
      case 401:
      default:
        return [err, {
          uploadUrl: null
        }];
    }
  });
};

/***/ })

};
;