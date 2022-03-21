exports.id = 4075;
exports.ids = [4075];
exports.modules = {

/***/ 9382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5152);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4485);
/* harmony import */ var _uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2978);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








const RedactMark = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_3__["default"])(() => __webpack_require__.e(/* import() */ 1748).then(__webpack_require__.bind(__webpack_require__, 1748)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(1748)],
    modules: ["../src/components/uploads/uploadVideo/uploadVideo.tsx -> " + '@/components/markdown/redactMark']
  }
});

const UploadVideo = props => {
  //  接收获取弹框内容的事件
  const {
    obtainData,
    chapterItem,
    AudioStop,
    clearContents
  } = props; // markdown默认md数据
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const {
    0: tacitly,
    1: setTacitly
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.serialContent : ''); // 上传文件节点

  const uploadInp = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 上传状态节点

  const uploadDocument = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 控制上传状态隐藏显示

  const {
    0: inpDis,
    1: setInpDis
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 控制上传按钮可不可以点击

  const {
    0: displ,
    1: setDispl
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // 控制音频播放器显示隐藏

  const {
    0: displPlayer,
    1: setDisplPlayer
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // 控制视频播放器隐藏显示

  const {
    0: displVideo,
    1: setDisplVideo
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // 控制右上角X号

  const {
    0: cancel,
    1: setCancel
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 上传成功后的icon图标以及样式

  const {
    0: uploadIcon,
    1: setUploadIcon
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('icon-jia');
  const {
    0: jasonP,
    1: setJasonP
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
    children: "\u8BF7\u9009\u62E9\u89C6\u9891\u6587\u4EF6"
  }));
  const {
    0: attention,
    1: setAttention
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
    children: "(\u652F\u6301mp4\u3001mp3\u3001oga\u89C6\u9891\u683C\u5F0F)"
  })); // 章节名称

  const {
    0: chapterName,
    1: setChapterName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.serialName : ''); // 章节学时

  const {
    0: chapterTime,
    1: setChapterTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? String(chapterItem.serialTime) : '60'); // 章节内容

  const {
    0: chapterContent,
    1: setChapterContent
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''); // 上传的文件类型

  const {
    0: fileType,
    1: setFileType
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileAddressMp4.slice(chapterItem.fileAddressMp4.lastIndexOf('.')) : ''); // 上传的文件名称

  const {
    0: fileName,
    1: setFileName
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileName : ''); // 上传文件的地址

  const {
    0: fileAddress,
    1: setFileAddress
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(chapterItem ? chapterItem.fileAddressMp4 : ''); // 自定义进度条外框

  const outer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 自定义进度条内核

  const inner = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  const audio = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null); // 当前歌曲时长

  const {
    0: allTime,
    1: setAllTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('00:00'); // 当前时间

  const {
    0: current,
    1: setCurrent
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('00:00'); // 判断当前音频是否加载完毕

  const {
    0: isLoadingOk,
    1: setIsLoadingOk
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 控制音频播放条显示隐藏

  const {
    0: audioArticle,
    1: setAudioArticle
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none'); // 接收markdown的md数据

  const getContent = mdData => {
    setChapterContent(mdData);
  }; // 判断是否点击了播放条


  const {
    0: isClickTiao,
    1: setIsClickTiao
  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false); // 在 iconfont.cn 上生成

  const MyIcon = (0,_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.createFromIconfontCN)({
    scriptUrl: '//at.alicdn.com/t/font_2992472_6nj24f81zbp.js'
  }); // 点击伪装器

  const submit = () => {
    // 调用上传文件的事件
    uploadInp.current.click();
  }; // 点击上传文件弹出先择文件弹框


  const uploadFile = async e => {
    const file = e.target.files[0];

    if (!file) {
      return;
    } // 判断文件是否大于10MB


    if (file.size > 10485760) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('课程体验试用，单个文件不能超过10M');

      return;
    } // 判断上传的文件是不是pdf格式的


    if (!file.type.includes('mp4') && !file.type.includes('mp3') && !file.type.includes('x-m4a') && !file.type.includes('mpeg') && !file.type.includes('oga')) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().warning('请上传mp4、mp3、oga、mpeg、m4a格式文件');

      return;
    } // 打开上传状态


    setDispl('block'); // 上传按钮不可点击

    setInpDis(true);
    const res = await (0,_upload__WEBPACK_IMPORTED_MODULE_6__/* .uploadToGithub */ .R)(file.name, file); // 关闭上传状态

    setDispl('none');

    if (isLoadingOk === false) {
      // 把添加图标改为加载图标
      setUploadIcon('');
    }

    setIsLoadingOk(true); // 修改底部文字为该文件名字

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
      children: file.name
    }));
    setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MyIcon, {
        type: "icon-chenggong"
      }), "\u4E0A\u4F20\u6210\u529F"]
    })); // 显示右上角X号

    setCancel(true); // 获取上传的文件名称

    setFileName(file.name); // 获取上传地址

    setFileAddress(res[1].uploadUrl); // 保存文件类型

    setFileType(file.type);

    if (!file.type.includes('mp4')) {
      // 打开音频播放器
      setDisplPlayer('block');
    } else {
      // 打开视频播放器
      setDisplVideo('block');
    }

    if (!file.type.includes('mp4')) {
      antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('上传成功,正在加载音频'); // eslint-disable-next-line @typescript-eslint/no-loss-of-precision


      const innerWidth = outer.current.getBoundingClientRect().left - 208; // 鼠标到可视区左侧的距离-父元素到可视区左侧的距离

      inner.current.style.width = innerWidth + 'px';
    }
  }; // 点击X号取消选中当前文件


  const cancelFile = e => {
    setIsClickTiao(false);
    inner.current.style.width = 0 + '%';

    antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('已取消'); // 如果传入了对象，那么就是非IE浏览器，才用W3C标准方法


    if (e || e.stopPropagation) {
      e.stopPropagation();
    } else {
      // 才用IE的停止事件的方法
      window.event.cancelBubble = true;
    }

    setUploadIcon('icon-jia'); // 修改底部文字为该PDF名字

    setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
      children: "\u8BF7\u9009\u62E9\u89C6\u9891\u6587\u4EF6"
    }));
    setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
      children: "(\u652F\u6301mp4\u3001mp3\u3001oga\u89C6\u9891\u683C\u5F0F)"
    })); // 将X号删除

    setCancel(false); // 把样式清楚之后需要把缓存也清除了
    // 把文件名字和文件地址都清除了

    setFileName('');
    setFileAddress(''); // 上传按钮可点击

    setInpDis(false); // 关闭音频和视频播放器

    setDisplPlayer('none');
    setDisplVideo('none'); // 清除文件类型

    setFileType(''); // 将音频播放条隐藏

    setAudioArticle('none'); // 关闭加载状态

    setIsLoadingOk(false);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    const obj = _objectSpread({}, chapterItem); // 章节名称


    obj.serialName = chapterName; // 章节学时
    // 判断章节学时是否位纯数字

    if (/^\d+$/.test(chapterTime)) {
      obj.serialTime = Number(chapterTime);
    } else {
      obj.serialTime = 0;
    } // 上传文件的名称


    obj.fileName = fileName; // 上传的文件地址

    obj.fileAddressMp4 = fileAddress; // 章节内容

    obj.serialContent = chapterContent;
    obtainData(obj); // eslint-disable-next-line @typescript-eslint/no-empty-function

    return () => {}; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapterName, chapterTime, chapterContent, fileName, fileAddress]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (chapterItem && chapterItem.fileName && chapterItem.fileAddressMp4) {
      // 上传按钮不可点击
      setInpDis(true); // 显示右上角X号

      setCancel(true);
      const arr = chapterItem.fileName.split('.');

      if (arr[arr.length - 1] === 'mp4') {
        setDisplVideo('block');
      } else {
        // 打开音频和视频播放器
        setDisplPlayer('block'); // 修改底部文字为该文件名字

        setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
          children: chapterItem.fileName
        })); // 把添加图标改为文件播放图标

        setUploadIcon('icon-shipin');
        setAttention( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("p", {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MyIcon, {
            type: "icon-chenggong"
          }), "\u4E0A\u4F20\u6210\u529F"]
        })); // 将音频播放条显示

        setAudioArticle('block');
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, []); // 在音频可以播放时就显示总时长

  const canplay = () => {
    audio.current.oncanplay = () => {
      const allTime = (Math.floor(audio.current.duration / 60) + '').padStart(2, '0') + ':' + (Math.floor(audio.current.duration % 60) + '').padStart(2, '0');
      setAllTime(allTime);
    };
  }; // const audioWaiting = () => {
  //   audio.current.onwaiting = () => {
  //     alert('加载中');
  //   };
  // };
  // 在音频播放时当前时间也跟着变化


  const timeUpdate = () => {
    audio.current.ontimeupdate = () => {
      const currentTime = (Math.floor(audio.current.currentTime / 60) + '').padStart(2, '0') + ':' + (Math.floor(audio.current.currentTime % 60) + '').padStart(2, '0');
      setCurrent(currentTime);
      inner.current.style.width = // eslint-disable-next-line @typescript-eslint/no-loss-of-precision
      audio.current.currentTime / audio.current.duration * 100 + '%'; // 判断如果播放完毕把图标改为播放图标

      if (audio.current.currentTime / audio.current.duration * 101 === 101) {
        // 把暂停图标改为文件播放图标
        setUploadIcon('icon-shipin');
      }
    };
  }; // 播放开始


  const audioPlay = () => {
    audio.current.play(); // 把播放图标改为文件暂停图标

    setUploadIcon('icon-bg-suspend');
  }; // 播放暂停


  const audioStop = () => {
    audio.current.pause(); // 把暂停图标改为文件播放图标

    setUploadIcon('icon-shipin');
  }; // 设置播放进度
  // eslint-disable-next-line @typescript-eslint/no-explicit-any


  const audioX = e => {
    // 如果传入了对象，那么就是非IE浏览器，才用W3C标准方法
    if (e || e.stopPropagation) {
      e.stopPropagation();
    } else {
      // 才用IE的停止事件冒泡的方法
      window.event.cancelBubble = true;
    }

    const outerWidth = outer.current.offsetWidth; // 父元素宽

    const innerWidth = e.clientX - outer.current.getBoundingClientRect().left; // 鼠标到可视区左侧的距离-父元素到可视区左侧的距离

    if (innerWidth > outerWidth || innerWidth < 0) {
      return;
    }

    inner.current.style.width = innerWidth + 'px';
    audio.current.currentTime = innerWidth / outerWidth * audio.current.duration;
    setIsClickTiao(true);
  }; // 音频的加载状态


  const handleAudio = () => {
    const audios = audio.current; // timeupdate,播放位置改变时触发
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    audios.addEventListener('timeupdate', () => {}); // canplay,表示音频可以播放了，准备就绪

    audios.addEventListener('canplay', () => {
      if (isClickTiao === false) {
        antd_lib_message__WEBPACK_IMPORTED_MODULE_2___default().success('音频已加载完毕'); // 把播放图标改为文件播放图标


        setUploadIcon('icon-shipin'); // 显示播放条

        setAudioArticle('block'); // 关闭加载状态

        setIsLoadingOk(false);
      } else {
        // 把播放图标改为文件暂停图标
        setUploadIcon('icon-bg-suspend');
      }
    }); // progress，音频在加载或缓冲
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    audios.addEventListener('progress', () => {}); // waiting,需要缓冲下一帧而停止播放时触发
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    audios.addEventListener('waiting', () => {}); // playing,音频或视频已开始播放时触发
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    audios.addEventListener('playing', () => {}); // pause,音频或视频文件暂停时触发
    // eslint-disable-next-line @typescript-eslint/no-empty-function

    audios.addEventListener('pause', () => {});
  }; // 加载页面时默认事件


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (fileType !== '' && !fileType.includes('mp4')) {
      if (isLoadingOk === false) {
        // 把添加图标改为加载图标
        setUploadIcon(''); // 开启加载状态

        setIsLoadingOk(true); // 将音频播放条隐藏

        setAudioArticle('none');
      } // eslint-disable-next-line @typescript-eslint/no-loss-of-precision


      setAllTime('00:00');
      timeUpdate();
      canplay();
      handleAudio();
    } else if (fileType !== '' && fileType.includes('mp4')) {
      setDisplPlayer('none');
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [fileType]); // 点击播放图片事件

  const filePlay = () => {
    // 判断显示文件之后点击播放图标之后播放文件
    if (uploadIcon === 'icon-shipin') {
      // 播放文件
      audioPlay();
    } else if (uploadIcon === 'icon-bg-suspend') {
      // 暂停播放
      audioStop();
    }
  }; // 监听是否点击了关闭弹窗或保存


  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    // 判断如果关闭弹框或保存数据时-暂停播放音频
    if (AudioStop === true && fileAddress !== '') {
      // 暂停播放
      // audioStop();
      setFileAddress('');
    }
  }, [AudioStop, fileAddress]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (clearContents) {
      // 清除章节名称
      setChapterName(''); // 章节学时改为默认值

      setChapterTime('60');
      setIsClickTiao(false);
      inner.current.style.width = 0 + '%';
      setUploadIcon('icon-jia'); // 修改底部文字为该PDF名字

      setJasonP( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
        children: "\u8BF7\u9009\u62E9\u89C6\u9891\u6587\u4EF6"
      }));
      setAttention( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
        children: "(\u652F\u6301mp4\u3001mp3\u3001oga\u89C6\u9891\u683C\u5F0F)"
      })); // 将X号删除

      setCancel(false); // 把样式清楚之后需要把缓存也清除了
      // 把文件名字和文件地址都清除了

      setFileName('');
      setFileAddress(''); // 上传按钮可点击

      setInpDis(false); // 关闭音频和视频播放器

      setDisplPlayer('none');
      setDisplVideo('none'); // 清除文件类型

      setFileType(''); // 将音频播放条隐藏

      setAudioArticle('none'); // 关闭加载状态

      setIsLoadingOk(false);
    }
  }, [clearContents]);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    return () => {
      setIsClickTiao(false);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().articleContent),
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().chapter),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("span", {
          children: "*"
        }), " \u6587\u7AE0\u540D\u79F0"]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().chapterName),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
          placeholder: "\u8BF7\u8F93\u5165\u7AE0\u8282\u540D\u79F0...",
          value: chapterName,
          onChange: e => {
            setChapterName(e.target.value);
          }
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().chapter),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        children: "\u7AE0\u8282\u5B66\u65F6"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().chapterTime),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_input__WEBPACK_IMPORTED_MODULE_1___default()), {
          defaultValue: 60,
          value: chapterTime,
          onChange: e => {
            setChapterTime(e.target.value);
          }
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().unit),
        children: "\u5206\u949F"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().article),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().Center),
        children: "\u6587\u4EF6\u4E0A\u4F20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().markdownDocument),
        onClick: submit,
        children: [cancel ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().cancel),
          onClick: cancelFile,
          children: "x"
        }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().addFile),
          children: [isLoadingOk === true ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__.LoadingOutlined, {
            style: {
              fontSize: '50px'
            }
          }) : null, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(MyIcon, {
            style: {
              fontSize: '45px'
            },
            type: uploadIcon,
            onClick: filePlay
          })]
        }), jasonP, attention, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().mask),
          ref: uploadDocument,
          style: {
            display: `${displ}`
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
            className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().addFile),
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx((antd_lib_spin__WEBPACK_IMPORTED_MODULE_0___default()), {
              size: "large"
            })
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
            className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().uploadP),
            children: "\u6B63\u5728\u4E0A\u4F20..."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
          className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().player),
          style: {
            display: `${displPlayer}`
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
            className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().outer),
            ref: outer,
            onMouseDown: e => audioX(e) // onMouseMove={(e) => audioX(e)}
            ,
            style: {
              display: `${audioArticle}`
            },
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
              className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().inner),
              ref: inner,
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
                className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().innerBtn)
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
              className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().fileLength),
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                children: current
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("p", {
                children: allTime
              })]
            })]
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("audio", {
            ref: audio,
            src: fileAddress,
            controls: true,
            style: {
              display: 'none'
            },
            children: "\u4F60\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301\u97F3\u9891\u64AD\u653E\u54E6\uFF01"
          })]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
          className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().videoPlayer),
          style: {
            display: `${displVideo}`
          },
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("video", {
            src: fileAddress,
            controls: true,
            children: "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301 video \u6807\u7B7E\u3002"
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().videoContent),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().Center),
        children: "\u89C6\u9891\u7B80\u4ECB"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("div", {
        className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().videoMarkdown),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx(RedactMark, {
          getContent: getContent,
          tacitly: tacitly,
          clearContent: clearContents
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx("input", {
      disabled: inpDis,
      type: "file",
      accept: "audio/*,video/*",
      className: (_uploadVideo_module_css__WEBPACK_IMPORTED_MODULE_8___default().submit),
      ref: uploadInp,
      onChange: uploadFile
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadVideo);

/***/ }),

/***/ 4485:
/***/ ((module) => {

// Exports
module.exports = {
	"articleContent": "uploadVideo_articleContent__94Yjv",
	"chapter": "uploadVideo_chapter__pJBs_",
	"chapterName": "uploadVideo_chapterName__wb5gT",
	"chapterTime": "uploadVideo_chapterTime__ISQDR",
	"article": "uploadVideo_article__iPFXG",
	"Center": "uploadVideo_Center__jGVo_",
	"markdownDocument": "uploadVideo_markdownDocument__28He7",
	"addFile": "uploadVideo_addFile__Z5qaD",
	"player": "uploadVideo_player__9cVo9",
	"outer": "uploadVideo_outer__A_1qK",
	"inner": "uploadVideo_inner__nq1oV",
	"innerBtn": "uploadVideo_innerBtn__2VYuT",
	"fileLength": "uploadVideo_fileLength__3sjq2",
	"videoPlayer": "uploadVideo_videoPlayer__1igbZ",
	"videoContent": "uploadVideo_videoContent__dfxx2",
	"videoMarkdown": "uploadVideo_videoMarkdown__ugHYU",
	"submit": "uploadVideo_submit__6ED_I",
	"mask": "uploadVideo_mask__cVaK4",
	"uploadP": "uploadVideo_uploadP__OrCms",
	"cancel": "uploadVideo_cancel__ME9Ki"
};


/***/ })

};
;