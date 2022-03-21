"use strict";
exports.id = 1166;
exports.ids = [1166];
exports.modules = {

/***/ 1166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2071);
/* harmony import */ var antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1788);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3800);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1886);
/* harmony import */ var antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4285);
/* harmony import */ var antd_lib_table__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_table__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(274);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(675);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9280);
/* harmony import */ var _studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5152);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7066);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _hooks_useUser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1215);
/* harmony import */ var _component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1112);
/* harmony import */ var _api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8598);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2245);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _api_course_createMessage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(290);
/* harmony import */ var _particulars__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6124);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);








/**
 *  author：祝成
 *  division：学习统计公共模块
 */




const TreeType = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => Promise.all(/* import() */[__webpack_require__.e(5061), __webpack_require__.e(9719)]).then(__webpack_require__.bind(__webpack_require__, 5061)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(5061)],
    modules: ["course/stats/statsModule/index.tsx -> " + '@/components/TreeType/TreeType']
  }
});


const CommonTable = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => __webpack_require__.e(/* import() */ 4703).then(__webpack_require__.bind(__webpack_require__, 4703)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(4703)],
    modules: ["course/stats/statsModule/index.tsx -> " + '@/components/commonTable/commonTable']
  }
});


const CommonPagination = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => __webpack_require__.e(/* import() */ 7373).then(__webpack_require__.bind(__webpack_require__, 7373)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(7373)],
    modules: ["course/stats/statsModule/index.tsx -> " + '@/components/commonTable/commonPagination']
  }
});





const AlertCommon = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_8__["default"])(() => __webpack_require__.e(/* import() */ 2625).then(__webpack_require__.bind(__webpack_require__, 2625)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(2625)],
    modules: ["course/stats/statsModule/index.tsx -> " + '@/components/alertCommon/alertCommon']
  }
});
const {
  Search
} = (antd_lib_input__WEBPACK_IMPORTED_MODULE_6___default());

const StatsModule = () => {
  // context 获取课程-名称-id
  const {
    0: statsPara
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)((0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_10__/* .useStats */ .V)().user); // 获取到的数据

  const {
    0: stats,
    1: setStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]); // 获取到的数据长度

  const {
    0: statsLength,
    1: setStatsLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0); // 当前第几页

  const {
    0: pages,
    1: setPages
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1); // 没页n条

  const {
    0: pagesl,
    1: setPagesl
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(5); // 课程状态

  const {
    0: typeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(['全部', '学习中', '待考试', '未通过考试', '已完成', '未完成']);
  const {
    0: typeTitle,
    1: setTypeTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('课程状态'); //  筛选开始时间

  const {
    0: timestart,
    1: setTimestart
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); //  筛选结束时间

  const {
    0: timeend,
    1: setTimeend
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // 自定义的时间开关

  const {
    0: flagTime,
    1: setFlagTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 所属部门

  const {
    0: departmentFlag,
    1: setDepartmentFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: department,
    1: setDepartment
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('所属部门'); // 所属部门id

  const {
    0: departmentId,
    1: setDepartmentId
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(-1); // 搜索

  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // 加载动画

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // 近几天的高亮

  const {
    0: onday,
    1: setOnday
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null); // 创建时间

  const {
    0: statsDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(['今天', '昨天', '近七天']); // 免登录字段

  const {
    0: courseFree,
    1: setCourseFree
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]); // 学员姓名及课程id

  const {
    0: particularsData,
    1: setParticularsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    stats_name: '',
    courseId: 0
  }); // 调用学习明细

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // Table   学习统计标题

  const {
    0: columns,
    1: setColums
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([{
    title: '账号',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '姓名',
    dataIndex: 'stats_name',
    key: 'stats_name'
  }, {
    title: '所属部门',
    dataIndex: 'treeId',
    key: 'treeId'
  }, {
    title: '开始/结束时间',
    dataIndex: 'stats_updateAt',
    key: 'stats_updateAt'
  }, {
    title: '学习时长',
    //
    dataIndex: 'learnTime',
    key: 'learnTime'
  }, {
    title: '学习次数',
    //
    dataIndex: 'learnNumber',
    key: 'learnNumber'
  }, {
    title: '考试成绩',
    //
    dataIndex: 'stats_grade',
    key: 'stats_grade'
  }, {
    title: '是否通过考试',
    //
    dataIndex: 'stats_passexam',
    key: 'stats_passexam',
    render: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconunfinished)
    })
  }, {
    title: '所得学分',
    //
    dataIndex: 'theCredits',
    key: 'theCredits'
  }, {
    title: '学习进度',
    //
    dataIndex: 'learnProgress',
    key: 'learnProgress'
  }, {
    title: '状态',
    //
    dataIndex: 'learnState',
    key: 'learnState'
  }, {
    title: '学习设备',
    //
    dataIndex: 'learnFacility',
    key: 'learnFacility'
  }, {
    title: '操作',
    key: 'stats_name',
    dataIndex: 'stats_name',
    render: (tags, infor) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("a", {
      onClick: () => {
        console.log('学习明细', infor);
        setParticularsData({
          stats_name: infor.stats_name,
          courseId: infor.courseId
        });
        setalertShow(true); // alertdialog()
      },
      children: '学习明细'
    })
  }]); // 学习状态封装--学习设备

  const stateFun = item => {
    item.learnState === 1 && (item.learnState = '学习中');
    item.learnState === 2 && (item.learnState = '待考试');
    item.learnState === 3 && (item.learnState = '未通过考试');
    item.learnState === 4 && (item.learnState = '已完成');
    item.learnState === 5 && (item.learnState = '未完成');
    item.learnFacility === 0 && (item.learnFacility = '电脑');
    item.learnFacility === 1 && (item.learnFacility = '手机');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (async function () {
      const head = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_14__/* .getCourseItem */ .UX)({
        courseId: statsPara.token
      });
      setCourseFree(head.courseFree); // 免登录字段

      const columnsed = [...columns];

      if (head.courseFree.length > 0 && statsPara.fieldCommand !== 2) {
        head.courseFree.forEach(item => {
          columnsed.splice(2, 0, {
            title: item.courseFieldName,
            // 表头名
            dataIndex: 'courseFieldMust',
            // 暂时待定
            key: 'courseFieldMust'
          });
        });
      }

      if (statsPara.completeCondition !== 2) {
        columnsed.splice(-5, 1); // 去除 '考试成绩', //

        columnsed.splice(-5, 1); // 去除 '是否通过考试', //
      }

      if (statsPara.fieldCommand !== 2) {
        columnsed.splice(-8, 1); // 去除部门

        columnsed.splice(0, 1); // 去除账号
      }

      setColums(columnsed);
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [statsPara.completeCondition]); // 学习统计接口

  const getStatsData = async (page, pageSize, field, order) => {
    setLoading(true);
    const res = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getStats */ .fy)({
      page,
      pageSize,
      field,
      order,
      courseId: statsPara.token,
      // 课程分类 课程id
      typeTitle,
      // 课程状态
      timestart,
      //  筛选开始时间
      timeend,
      //  筛选结束时间
      department,
      // 所属部门
      search // 搜索

    });

    if (res[0]) {
      res[0].forEach(item => {
        // eslint-disable-next-line import/no-named-as-default-member
        // const tempTime = moment.duration(
        //   moment(item.updateAt).valueOf() - moment(item.createTime).valueOf()
        // );
        // item.stats_duration =
        //   item.createTime &&
        //   `${
        //     tempTime.days() * 3600 + tempTime.hours() * 60 + tempTime.minutes()
        //   }分${tempTime.seconds()}秒`;
        item.stats_updateAt = `${moment__WEBPACK_IMPORTED_MODULE_13___default()(item.studentsCourse_createTime).format('YYYY-MM-DD HH:mm:ss')} ~ ${moment__WEBPACK_IMPORTED_MODULE_13___default()(item.studentsCourse_updateAt).format('MM-DD HH:mm:ss')}`;
        stateFun(item); // 学习状态封装--学习设备
        // console.log(item);

        item.stats_name = item.students.studentName; // 姓名
      });
      setStats(res[0]);
      setStatsLength(res[1]);
      setLoading(false);
    }
  }; // 获取缺席统计的接口


  const getAbsentData = async (page, pageSize, field, order) => {
    setLoading(true);
    const res = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getAbsent */ .W0)({
      page,
      pageSize,
      field,
      order,
      courseId: statsPara.token,
      department: departmentId,
      // 所属部门
      search // 搜索

    }); // console.log(res);

    if (res[0]) {
      setLoading(false);
      setStats(res[0]);
      setStatsLength(res[1]);
    }
  }; // 进入请求


  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    // console.log(timestart, timeend);
    // console.log(statsPara);
    if (statsPara.token !== 'undefined') {
      // eslint-disable-next-line default-case
      switch (statsPara.nowIndex) {
        case '0':
          getStatsData(pages, pagesl, 'null', 'ASC');
          break;

        case '3':
          getAbsentData(pages, pagesl, 'null', 'ASC');
          break;
      }
    } // 搜索请求// 所属部门 //筛选开始时间//筛选结束时间// 课程状态改变请求
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [search, department, timestart, timeend, typeTitle, departmentId]); // 课程状态

  const onClick = ({
    key
  }) => {
    setTypeTitle(key);
  };

  const menu = /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default()), {
    onClick: onClick,
    children: typeList.map((item, index) => {
      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default().Item), {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsselect),
        children: item
      }, index);
    })
  }); // 所属部门// 创建接收函数


  const currentNode = (location, id) => {
    // console.log(location);
    // console.log(id);
    // console.log(idList);
    setDepartment(location);
    setDepartmentId(id);
  }; // 近几天时间戳封装方法


  const timestamp = (state, end) => {
    setTimestart(moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('day').subtract(state, 'day').format('YYYY-MM-DD HH:mm:ss'));
    setTimeend(moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('day').subtract(end, 'day').format('YYYY-MM-DD HH:mm:ss'));
  }; // 近几天


  const funDay = index => {
    // eslint-disable-next-line default-case
    switch (index) {
      case 0:
        timestamp(0, 0);
        break;

      case 1:
        timestamp(1, 1);
        break;

      case 2:
        timestamp(6, 0);
        break;

      case null:
        setTimestart('');
        setTimeend('');
        break;
    }

    setOnday(index); // day 的高亮
  };

  const onPanelChangeState = (value, mode) => {
    setTimestart(moment__WEBPACK_IMPORTED_MODULE_13___default()(mode).format('YYYY-MM-DD HH:mm:ss'));
  };

  const onPanelChangeEnd = (value, mode) => {
    setTimeend(moment__WEBPACK_IMPORTED_MODULE_13___default()(mode).format('YYYY-MM-DD HH:mm:ss'));
  }; // 重置筛选


  const handleReload = () => {
    // console.log('重置筛选');
    setTypeTitle('课程状态');
    setTimestart(''); //  重置开始时间

    setTimeend(''); //  重置结束时间

    setDepartment('所属部门');
    setOnday(null); // 近几天的高亮

    setFlagTime(false); // 自定义时间开关

    setSearch(''); // 搜索重置

    setDepartmentId(-1); // 部门id
  }; //
  // 操作按钮
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function funCallback(callback) {// console.log(callback);
  } // =======子table======================================================
  // const menus = (
  //   <Menu>
  //     <Menu.Item>Action 1231231231</Menu.Item>
  //     <Menu.Item>Action 2</Menu.Item>
  //   </Menu>
  // );


  const expandedRowRender = () => {
    const columns = [{
      title: '回复内容',
      dataIndex: 'response',
      key: 'response'
    }, {
      title: '回复人',
      dataIndex: 'replier',
      key: 'replier'
    }, {
      title: '回复时间',
      dataIndex: 'recoverytime',
      key: 'recoverytime'
    }, {
      title: '点赞次数',
      dataIndex: 'Like',
      key: 'Like'
    }, {
      title: '举报次数',
      dataIndex: 'informer',
      key: 'informer'
    }, {
      title: '回复IP',
      dataIndex: 'replierip',
      key: 'replierip'
    }, {
      title: '操作',
      key: 'state',
      render: callback => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("span", {
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {
          onClick: () => {
            funCallback(callback);
          },
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconunfinished)
        })
      })
    }];
    const data = [];

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        response: '回复内容' + i,
        replier: '回复人',
        recoverytime: '回复时间',
        Like: '点赞次数',
        informer: '举报次数',
        replierip: '回复IP'
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_table__WEBPACK_IMPORTED_MODULE_4___default()), {
      columns: columns,
      dataSource: data,
      pagination: false,
      size: "small",
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().statsexpandedrow),
      bordered: true // 是否展示外边框和列边框

    });
  }; // 测试使用
  // const columnsjj = [
  //   { title: 'Name', dataIndex: 'name', key: 'name' },
  //   { title: 'Platform', dataIndex: 'platform', key: 'platform' },
  //   { title: 'Version', dataIndex: 'version', key: 'version' },
  //   { title: 'Upgraded', dataIndex: 'upgradeNum', key: 'upgradeNum' },
  //   { title: 'Creator', dataIndex: 'creator', key: 'creator' },
  //   { title: 'Date', dataIndex: 'createdAt', key: 'createdAt' },
  //   { title: 'Action', key: 'operation', render: () => <>Publish</> },
  // ];
  // const datajj = [];
  // for (let i = 0; i < 3; ++i) {
  //   datajj.push({
  //     key: i,
  //     name: 'Screem',
  //     platform: 'iOS',
  //     version: '10.3.4.5654',
  //     upgradeNum: 500,
  //     creator: 'Jack',
  //     createdAt: '2014-12-24 23:12:00',
  //   });
  // }


  const {
    0: sonRow,
    1: setsonRow
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);

  const expandRowByKey = key => {
    const index = sonRow.findIndex(item => key === item);
    let keys = [...sonRow];

    if (index > -1) {
      keys = keys.filter(item => key !== item);
    } else {
      keys.push(key);
    }

    setsonRow(keys);
  }; // =============================================================
  // 排序回调


  const onSort = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
  }; // Comment 评论管理 排序  数据


  const columnsComment = [{
    title: '评论内容',
    dataIndex: 'content',
    sorter: {
      // compare: (a: { content: number }, b: { content: number }) => a.content - b.content,
      multiple: 1
    }
  }, {
    title: '评论人',
    dataIndex: 'critic',
    sorter: {
      // compare: (a: { critic: number }, b: { critic: number }) => a.critic - b.critic,
      multiple: 2
    }
  }, {
    title: '点赞次数',
    dataIndex: 'praise',
    sorter: {
      // compare: (a: { praise: number }, b: { praise: number }) => a.praise - b.praise,
      multiple: 3
    }
  }, {
    title: '回复次数',
    dataIndex: 'reply',
    sorter: {
      // compare: (a: { reply: number }, b: { reply: number }) => a.reply - b.reply,
      multiple: 4
    }
  }, {
    title: '举报次数',
    dataIndex: 'report',
    sorter: {
      // compare: (a: { report: number }, b: { report: number }) => a.report - b.report,
      multiple: 5
    }
  }, {
    title: '评论人IP',
    dataIndex: 'criticIp',
    sorter: {
      // compare: (a: { criticIp: number }, b: { criticIp: number }) => a.criticIp - b.criticIp,
      multiple: 6
    }
  }, {
    title: '评论时间',
    dataIndex: 'commentTime',
    sorter: {
      // compare: (a: { commentTime: number }, b: { commentTime: number }) =>
      //   a.commentTime - b.commentTime,
      multiple: 7
    }
  }, {
    title: '状态',
    dataIndex: 'starts',
    sorter: {
      // compare: (a: { starts: number }, b: { starts: number }) => a.starts - b.starts,
      multiple: 8
    }
  }, {
    title: '查看回复',
    dataIndex: 'look',
    render: (look, record) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.DownOutlined, {
        onClick: () => {
          expandRowByKey(record.key);
        },
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconunfinished)
      })
    })
  }, {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
      children: tags.map(tag => {
        let color = tag.length > 5 ? 'geekblue' : 'green';

        if (tag === 'loser') {
          color = 'volcano';
        }

        return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_tag__WEBPACK_IMPORTED_MODULE_3___default()), {
          color: color,
          children: tag.toUpperCase()
        }, tag);
      })
    })
  }];
  const dataComment = [{
    id: 1,
    key: 1,
    content: 98,
    critic: 60,
    praise: 70,
    reply: 12,
    report: 1,
    criticIp: 1,
    commentTime: 2,
    starts: 1,
    look: ['查看'],
    tags: ['删除', '查看']
  }, {
    id: 2,
    key: 2,
    content: 98,
    critic: 66,
    praise: 89,
    reply: 11,
    report: 2,
    criticIp: 2,
    commentTime: 2,
    starts: 1,
    look: ['查看'],
    tags: ['删除']
  }]; // 是否使用多选 // 多选框的回调
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const onSelectChange = (selectedRowKeys, selectedRows) => {// console.log(selectedRowKeys);
    // console.log(selectedRows);
  }; // ----缺席统计-Absent---------------------------


  const columnsAbsent = [{
    title: '账号',
    dataIndex: 'studentNumber',
    key: 'studentNumber'
  }, {
    title: '姓名',
    dataIndex: 'studentName',
    key: 'studentName'
  }, {
    title: '所属部门',
    dataIndex: 'stats_department',
    key: 'stats_department'
  }, {
    title: '手机号码',
    dataIndex: 'studentPhone',
    key: 'studentPhone'
  }];
  const dataAbsent = [{
    id: '1',
    name: 'John Brown',
    user: '111',
    department: '11',
    phone: '123123123',
    tags: ['nice', 'developer']
  }, {
    id: '2',
    name: 'Jim Green',
    user: '222',
    department: '22',
    phone: '321321321',
    tags: ['loser']
  }, {
    id: '3',
    name: 'Joe Black',
    user: '333',
    department: '33',
    phone: '213321123',
    tags: ['cool', 'teacher']
  }]; // ----------=========----测试高度用数据---========================---------------

  for (let index = 5; index < 10; index++) {
    // data.push({
    //   id: index,
    //   account: `${index}`, // 账号
    //   name: 'John Brown', // 姓名
    //   department: '', // 所属部门
    //   time: '', // 结束时间
    //   studyL: '', // 学习时长
    //   studyNum: '', // 学习次数
    //   credit: '', // 所得学分
    //   schedule: '', // 学习进度
    //   type: '', // 状态
    //   equipment: '', // 学习设备
    //   tags: ['delect'],
    // });
    dataComment.push({
      id: index,
      key: index,
      content: 98,
      critic: 66,
      praise: 89,
      reply: 11,
      report: 2,
      criticIp: 2,
      commentTime: 2,
      starts: 1,
      look: ['查看'],
      tags: ['删除']
    });
    dataAbsent.push({
      id: `${index}`,
      name: 'Joe Black',
      user: '333',
      department: '33',
      phone: '213321123',
      tags: ['cool', 'teacher']
    });
  } // 导出按钮


  const onExport = async () => {
    if (statsPara.token !== 'undefined') {
      // eslint-disable-next-line default-case
      switch (statsPara.nowIndex) {
        case '0':
          // eslint-disable-next-line no-case-declarations
          const res = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getStatsDerive */ .av)({
            courseId: statsPara.token
          }); // eslint-disable-next-line no-case-declarations

          const obj = {
            id: '账号',
            // 账号
            stats_name: '姓名',
            // 姓名
            treeId: '所属部门',
            // 所属部门
            studentsCourse_createTime: '开始时间',
            // 开始时间
            studentsCourse_updateAt: '结束时间',
            // 结束时间
            learnTime: '学习时长',
            // 学习时长
            stats_grade: '考试成绩',
            // 考试成绩
            stats_passexam: '是否通过考试',
            // 是否通过考试
            learnNumber: '学习次数',
            // 学习次数
            theCredits: '所得学分',
            // 所得学分
            learnProgress: '学习进度',
            // 学习进度
            learnState: '状态',
            // 状态
            learnFacility: '学习设备' // 学习设备

          }; // console.log(res[0]);
          // eslint-disable-next-line no-case-declarations

          const arr = JSON.parse(JSON.stringify(res));
          arr.forEach(item => {
            item.stats_name = item.students.studentName;
            stateFun(item); // 学习状态封装--学习设备

            if (courseFree.length > 0 && statsPara.fieldCommand !== 2) {
              courseFree.forEach((it, i) => {
                obj['courseFieldName' + i] = it.courseFieldName;
                item['courseFieldName' + i] = it.courseFieldMust; // 用户填写的东西，暂时是这个
              });
            }
          });

          if (statsPara.completeCondition === 2) {
            (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(arr, obj, '学习成绩');
          } else {
            if (statsPara.fieldCommand !== 2) {
              delete obj.id; // 去除账号

              delete obj.treeId; // 去除部门
            }

            delete obj.stats_grade;
            delete obj.stats_passexam;
            delete obj.learnNumber;
            (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(arr, obj, '学习统计');
          }

          break;

        case '1':
          // eslint-disable-next-line no-case-declarations
          // const dataComment = await getExportComment({ courseId: statsPara.token });
          //   exportExcel(
          //     dataComment,
          //     {
          //       content: '评论内容', // 评论内容
          //       critic: '评论人', // 评论人
          //       praise: '点赞次数', // 点赞次数
          //       reply: '回复次数', // 回复次数
          //       report: '举报次数', // 举报次数
          //       criticIp: '评论人IP', // 评论人IP
          //       commentTime: '评论时间', // 评论时间
          //       starts: '状态', // 状态
          //     },
          //     '评论管理' // 表名
          //   );
          break;

        case '3':
          // eslint-disable-next-line no-case-declarations
          const exportAbsent = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getExportAbsent */ .M0)({
            courseId: statsPara.token
          });
          (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(exportAbsent, {
            studentNumber: '账号',
            studentName: '姓名',
            stats_department: '所属部门',
            studentPhone: '手机号码'
          }, '缺考信息' // 表名
          );
          break;
      }
    }
  }; // 分页点击回调


  function onChangeTable(page) {
    // console.log(page);
    // pageSize 属性
    // 当前第几页
    setPages(page.current); // 没页n条

    setPagesl(page.pageSize);

    if (statsPara.token !== 'undefined') {
      // eslint-disable-next-line default-case
      switch (statsPara.nowIndex) {
        case '0':
          getStatsData(page.current, page.pageSize, 'null', 'ASC');
          break;

        case '3':
          getAbsentData(page.current, page.pageSize, 'null', 'ASC');
          break;
      }
    }
  } // 搜索回调


  const onSearch = async value => {
    setSearch(value);
  };

  const onPaginationChange = (page, pageSize) => {
    // console.log(page, pageSize);
    // 当前第几页
    setPages(page); // 每页n条

    setPagesl(pageSize);
  }; // // 调用学习明细弹窗事件
  // const alertdialog = () => {
  //   setalertShow(true);
  // };
  // 关闭学习明细弹窗事件


  const changeAlertFlag = res => {
    setalertShow(res);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsfun),
      children: [statsPara.nowIndex === '0' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        id: "statsType",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default()), {
          overlay: menu,
          trigger: ['click'],
          getPopupContainer: () => document.getElementById('statsType'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
            className: onday === -1 ? (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstypecolor) : (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstype),
            size: 'large' // className="ant-dropdown-link"
            ,
            onClick: e => {
              e.preventDefault();
              setOnday(-1);
            },
            children: [typeTitle === '0' && '全部', typeTitle === '1' && '学习中', typeTitle === '2' && '待考试', typeTitle === '3' && '未通过考试', typeTitle === '4' && '已完成', typeTitle === '5' && '未完成', typeTitle === '课程状态' && '课程状态', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CaretDownOutlined, {})]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsbut),
        children: [(statsPara.nowIndex === '0' || statsPara.nowIndex === '1') && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [statsDay.map((item, index) => {
            return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              size: 'large',
              onClick: () => {
                funDay(index);
                setFlagTime(false);
              },
              className: onday === index && (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsday),
              children: item
            }, index);
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
            size: 'large',
            onClick: () => {
              setFlagTime(true);
              funDay(null);
              setOnday(3);
            },
            className: onday === 3 ? (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstypecolor) : (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstype),
            children: ["\u81EA\u5B9A\u4E49", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CalendarOutlined, {})]
          })]
        }), flagTime && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
          id: "DatePicker",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default()), {
            size: 'large',
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsdate),
            showTime: true,
            suffixIcon: '',
            allowClear: false,
            placeholder: '请选择开始时间',
            onChange: onPanelChangeState,
            getPopupContainer: () => document.getElementById('DatePicker')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default()), {
            size: 'large',
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsdate),
            showTime: true,
            suffixIcon: '',
            allowClear: false,
            placeholder: '请选择结束时间',
            onChange: onPanelChangeEnd,
            getPopupContainer: () => document.getElementById('DatePicker')
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatssearch),
        children: [(statsPara.nowIndex === '0' || statsPara.nowIndex === '3') && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
          id: "Dropdownredact",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_1___default()), {
            overlay: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
              className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().shadow),
              children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(TreeType, {
                type: 'department',
                getCurrentAndAncestorsTitles: currentNode,
                checkoutDepartment: true // 切换部门模式

              })
            }),
            trigger: ['click'],
            getPopupContainer: () => document.getElementById('Dropdownredact'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
              size: 'large',
              className: onday === 4 ? (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstypecolor) : (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstype),
              onClick: () => {
                setDepartmentFlag(!departmentFlag);
                setOnday(4);
              },
              title: department,
              children: [department, /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CaretDownOutlined, {})]
            })
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(Search, {
          placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57\u67E5\u8BE2",
          allowClear: true,
          enterButton: "\u67E5\u8BE2",
          size: "large",
          onSearch: onSearch,
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().search)
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
          size: 'large',
          onClick: () => handleReload(),
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyhandlereload),
          title: '重置查询条件',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.UndoOutlined, {
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconrefresh)
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsexport),
        children: [statsPara.nowIndex === '1' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [statsPara.courseAudit === 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
            size: 'large',
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconderive),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CarryOutOutlined, {}), "\u6279\u91CF\u5BA1\u6838"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
            size: 'large',
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconderive),
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {}), "\u6279\u91CF\u5220\u9664"]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
          // size={'large'}
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconderive),
          onClick: () => {
            onExport();
          },
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.DownloadOutlined, {
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconderive)
          }), "\u5BFC\u51FA"]
        }), statsPara.nowIndex === '0' && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_button__WEBPACK_IMPORTED_MODULE_2___default()), {
          size: 'large',
          className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studygrade),
          children: "\u67E5\u770B\u8003\u8BD5\u6210\u7EE9"
        })]
      })]
    }), statsPara.nowIndex === '1' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstable),
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_table__WEBPACK_IMPORTED_MODULE_4___default()), {
        style: {
          textAlign: 'center'
        },
        dataSource: dataComment,
        columns: columnsComment,
        size: "small",
        expandIconColumnIndex: -1 // antd默认的展开
        ,
        pagination: false // 右下角页数
        ,
        bordered: true // 是否展示外边框和列边框
        ,
        expandable: {
          expandedRowKeys: sonRow,
          expandedRowRender
        },
        rowSelection: {
          onChange: onSelectChange
        } // 是否使用多选 // 多选框的回调
        ,
        loading: false // 加载
        ,
        onChange: onSort
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatspages),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(CommonPagination, {
          dataCount: 12 // 数据总数 请求后台需判断
          ,
          onChange: onPaginationChange // 分页改变的回调函数
          ,
          pageSizeOptions: ['5', '10', '20', '100'] // 自定义显示的每页条数
          ,
          defaultPageSize: 5 // 默认的每页条数
          ,
          current: pages
        })
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstable),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(CommonTable, {
        data: statsPara.nowIndex === '1' ? dataComment : stats // 数据
        ,
        dataCount: statsLength // 数据的总条数
        ,
        columns: statsPara.nowIndex === '0' ? columns : statsPara.nowIndex === '3' ? columnsAbsent : null // 标题+内容
        ,
        isCheckout: statsPara.nowIndex === '1' // 是否使用多选
        ,
        onSelectChange: onSelectChange // 多选框的回调
        ,
        rowKeyId: 'id' // 配置每行的key值 设置唯一id
        ,
        onChangeTable: onChangeTable // 排序,分页,table的回调
        ,
        loading: loading,
        pageSizeOptions: ['5', '10', '20', '50', '100'],
        pageSize: 5,
        current: pages
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: `学员学习明细  (${particularsData.stats_name})`,
      changeAlertFlag: changeAlertFlag,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_particulars__WEBPACK_IMPORTED_MODULE_15__["default"], {
        value: particularsData
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StatsModule);

/***/ })

};
;