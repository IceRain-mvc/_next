"use strict";
exports.id = 2978;
exports.ids = [2978];
exports.modules = {

/***/ 2978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ uploadToGithub)
/* harmony export */ });
/* unused harmony export isLogin */
/* harmony import */ var _utils_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2828);
/* harmony import */ var _utils_sha256__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3286);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);




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
    filenameSha256 = (0,_utils_sha256__WEBPACK_IMPORTED_MODULE_2__/* .sha256_digest */ .Z)(fileBase64);
  } else {
    fileBase64 = file;
  }

  filenameSha256 += suffix;
  const cdnPath = 'img';
  const URL = `https://api.github.com/repos/zmf-6/cdn/contents/${cdnPath}/${filenameSha256}`; // request 请求实例

  const uploadBaseUrl = `https://cdn.jsdelivr.net/gh/zmf-6/cdn/${cdnPath}/`;
  const token = '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';
  return axios__WEBPACK_IMPORTED_MODULE_1___default().request({
    url: URL,
    method: 'put',
    headers: {
      Accept: 'application/vnd.github.v3+json',
      Authorization: 'token ' + token
    },
    data: {
      message: 'test1',
      committer: {
        name: 'zmf-6',
        email: '3073799663@qq.com'
      },
      content: fileBase64
    }
  }).then(data => {
    return [null, {
      uploadUrl: uploadBaseUrl + data.data.content.name
    }];
  }).catch(err => {
    return [err, {
      uploadUrl: uploadBaseUrl + filenameSha256
    }];
  });
}; // 测试请求接口

function isLogin(data) {
  return httpProvider.request({
    url: '/auth/login',
    method: 'POST',
    data
  });
} // import { httpProvider } from '@/utils/http';
// import { sha256_digest } from '@/utils/sha256';
// import axios from 'axios';
// function getFileBase64(file: File) {
//   return new Promise((resolve, reject) => {
//     const reader: FileReader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = function (e) {
//       if (e.target) {
//         const res = (e.target.result + '').split(',')[1];
//         // 转换已经完成
//         resolve(res);
//       } else {
//         reject(new Error('error'));
//       }
//     };
//   });
// }
// export const uploadToGithub = async (
//   filename: string,
//   file: File | string
// ): Promise<{ uploadUrl: string }[] | [null, { uploadUrl: string }]> => {
//   // const date: Date = new Date();
//   const splitArr = filename.split('.');
//   const suffix = '.' + splitArr[splitArr.length - 1];
//   let fileBase64;
//   let filenameSha256: string;
//   if (typeof file !== 'string') {
//     fileBase64 = await getFileBase64(file);
//     filenameSha256 = sha256_digest(fileBase64);
//   } else {
//     fileBase64 = file;
//   }
//   filenameSha256 += suffix;
//   const cdnPath = 'exam_project';
//   const URL = `https://api.github.com/repos/IceRain-mvc/cdn/contents/${cdnPath}/${filenameSha256}`;
//   // request 请求实例
//   const uploadBaseUrl = `https://cdn.jsdelivr.net/gh/IceRain-mvc/cdn/${cdnPath}/`;
//   const token = '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';
//   return axios
//     .request({
//       url: URL,
//       method: 'put',
//       headers: {
//         Accept: 'application/vnd.github.v3+json',
//         Authorization: 'token ' + token,
//       },
//       data: {
//         message: 'upload',
//         committer: {
//           name: 'IceRain-mvc',
//           email: '1459574275@qq.com',
//         },
//         content: fileBase64,
//       },
//     })
//     .then((data) => {
//       return [
//         null,
//         {
//           uploadUrl: uploadBaseUrl + data.data.content.name,
//         },
//       ];
//     })
//     .catch((err) => {
//       return [err, { uploadUrl: uploadBaseUrl + filenameSha256 }];
//     });
// };
// //测试请求接口
// export function isLogin(data) {
//   return httpProvider.request({
//     url: "http://localhost:4001/api/v1/auth/login",
//     method: "POST",
//     data
//   })
// }

/***/ })

};
;