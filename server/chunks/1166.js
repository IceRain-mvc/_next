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
 *  author?????????
 *  division???????????????????????????
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
  // context ????????????-??????-id
  const {
    0: statsPara
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)((0,_hooks_useUser__WEBPACK_IMPORTED_MODULE_10__/* .useStats */ .V)().user); // ??????????????????

  const {
    0: stats,
    1: setStats
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]); // ????????????????????????

  const {
    0: statsLength,
    1: setStatsLength
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0); // ???????????????

  const {
    0: pages,
    1: setPages
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(1); // ??????n???

  const {
    0: pagesl,
    1: setPagesl
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(5); // ????????????

  const {
    0: typeList
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(['??????', '?????????', '?????????', '???????????????', '?????????', '?????????']);
  const {
    0: typeTitle,
    1: setTypeTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('????????????'); //  ??????????????????

  const {
    0: timestart,
    1: setTimestart
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); //  ??????????????????

  const {
    0: timeend,
    1: setTimeend
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // ????????????????????????

  const {
    0: flagTime,
    1: setFlagTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // ????????????

  const {
    0: departmentFlag,
    1: setDepartmentFlag
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false);
  const {
    0: department,
    1: setDepartment
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)('????????????'); // ????????????id

  const {
    0: departmentId,
    1: setDepartmentId
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(-1); // ??????

  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(''); // ????????????

  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // ??????????????????

  const {
    0: onday,
    1: setOnday
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null); // ????????????

  const {
    0: statsDay
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(['??????', '??????', '?????????']); // ???????????????

  const {
    0: courseFree,
    1: setCourseFree
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]); // ?????????????????????id

  const {
    0: particularsData,
    1: setParticularsData
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    stats_name: '',
    courseId: 0
  }); // ??????????????????

  const {
    0: alertShow,
    1: setalertShow
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false); // Table   ??????????????????

  const {
    0: columns,
    1: setColums
  } = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([{
    title: '??????',
    dataIndex: 'id',
    key: 'id'
  }, {
    title: '??????',
    dataIndex: 'stats_name',
    key: 'stats_name'
  }, {
    title: '????????????',
    dataIndex: 'treeId',
    key: 'treeId'
  }, {
    title: '??????/????????????',
    dataIndex: 'stats_updateAt',
    key: 'stats_updateAt'
  }, {
    title: '????????????',
    //
    dataIndex: 'learnTime',
    key: 'learnTime'
  }, {
    title: '????????????',
    //
    dataIndex: 'learnNumber',
    key: 'learnNumber'
  }, {
    title: '????????????',
    //
    dataIndex: 'stats_grade',
    key: 'stats_grade'
  }, {
    title: '??????????????????',
    //
    dataIndex: 'stats_passexam',
    key: 'stats_passexam',
    render: () => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CloseOutlined, {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studyiconunfinished)
    })
  }, {
    title: '????????????',
    //
    dataIndex: 'theCredits',
    key: 'theCredits'
  }, {
    title: '????????????',
    //
    dataIndex: 'learnProgress',
    key: 'learnProgress'
  }, {
    title: '??????',
    //
    dataIndex: 'learnState',
    key: 'learnState'
  }, {
    title: '????????????',
    //
    dataIndex: 'learnFacility',
    key: 'learnFacility'
  }, {
    title: '??????',
    key: 'stats_name',
    dataIndex: 'stats_name',
    render: (tags, infor) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("a", {
      onClick: () => {
        console.log('????????????', infor);
        setParticularsData({
          stats_name: infor.stats_name,
          courseId: infor.courseId
        });
        setalertShow(true); // alertdialog()
      },
      children: '????????????'
    })
  }]); // ??????????????????--????????????

  const stateFun = item => {
    item.learnState === 1 && (item.learnState = '?????????');
    item.learnState === 2 && (item.learnState = '?????????');
    item.learnState === 3 && (item.learnState = '???????????????');
    item.learnState === 4 && (item.learnState = '?????????');
    item.learnState === 5 && (item.learnState = '?????????');
    item.learnFacility === 0 && (item.learnFacility = '??????');
    item.learnFacility === 1 && (item.learnFacility = '??????');
  };

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    (async function () {
      const head = await (0,_api_course_createMessage__WEBPACK_IMPORTED_MODULE_14__/* .getCourseItem */ .UX)({
        courseId: statsPara.token
      });
      setCourseFree(head.courseFree); // ???????????????

      const columnsed = [...columns];

      if (head.courseFree.length > 0 && statsPara.fieldCommand !== 2) {
        head.courseFree.forEach(item => {
          columnsed.splice(2, 0, {
            title: item.courseFieldName,
            // ?????????
            dataIndex: 'courseFieldMust',
            // ????????????
            key: 'courseFieldMust'
          });
        });
      }

      if (statsPara.completeCondition !== 2) {
        columnsed.splice(-5, 1); // ?????? '????????????', //

        columnsed.splice(-5, 1); // ?????? '??????????????????', //
      }

      if (statsPara.fieldCommand !== 2) {
        columnsed.splice(-8, 1); // ????????????

        columnsed.splice(0, 1); // ????????????
      }

      setColums(columnsed);
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [statsPara.completeCondition]); // ??????????????????

  const getStatsData = async (page, pageSize, field, order) => {
    setLoading(true);
    const res = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getStats */ .fy)({
      page,
      pageSize,
      field,
      order,
      courseId: statsPara.token,
      // ???????????? ??????id
      typeTitle,
      // ????????????
      timestart,
      //  ??????????????????
      timeend,
      //  ??????????????????
      department,
      // ????????????
      search // ??????

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
        //   }???${tempTime.seconds()}???`;
        item.stats_updateAt = `${moment__WEBPACK_IMPORTED_MODULE_13___default()(item.studentsCourse_createTime).format('YYYY-MM-DD HH:mm:ss')} ~ ${moment__WEBPACK_IMPORTED_MODULE_13___default()(item.studentsCourse_updateAt).format('MM-DD HH:mm:ss')}`;
        stateFun(item); // ??????????????????--????????????
        // console.log(item);

        item.stats_name = item.students.studentName; // ??????
      });
      setStats(res[0]);
      setStatsLength(res[1]);
      setLoading(false);
    }
  }; // ???????????????????????????


  const getAbsentData = async (page, pageSize, field, order) => {
    setLoading(true);
    const res = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getAbsent */ .W0)({
      page,
      pageSize,
      field,
      order,
      courseId: statsPara.token,
      department: departmentId,
      // ????????????
      search // ??????

    }); // console.log(res);

    if (res[0]) {
      setLoading(false);
      setStats(res[0]);
      setStatsLength(res[1]);
    }
  }; // ????????????


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
    } // ????????????// ???????????? //??????????????????//??????????????????// ????????????????????????
    // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [search, department, timestart, timeend, typeTitle, departmentId]); // ????????????

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
  }); // ????????????// ??????????????????


  const currentNode = (location, id) => {
    // console.log(location);
    // console.log(id);
    // console.log(idList);
    setDepartment(location);
    setDepartmentId(id);
  }; // ??????????????????????????????


  const timestamp = (state, end) => {
    setTimestart(moment__WEBPACK_IMPORTED_MODULE_13___default()().startOf('day').subtract(state, 'day').format('YYYY-MM-DD HH:mm:ss'));
    setTimeend(moment__WEBPACK_IMPORTED_MODULE_13___default()().endOf('day').subtract(end, 'day').format('YYYY-MM-DD HH:mm:ss'));
  }; // ?????????


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

    setOnday(index); // day ?????????
  };

  const onPanelChangeState = (value, mode) => {
    setTimestart(moment__WEBPACK_IMPORTED_MODULE_13___default()(mode).format('YYYY-MM-DD HH:mm:ss'));
  };

  const onPanelChangeEnd = (value, mode) => {
    setTimeend(moment__WEBPACK_IMPORTED_MODULE_13___default()(mode).format('YYYY-MM-DD HH:mm:ss'));
  }; // ????????????


  const handleReload = () => {
    // console.log('????????????');
    setTypeTitle('????????????');
    setTimestart(''); //  ??????????????????

    setTimeend(''); //  ??????????????????

    setDepartment('????????????');
    setOnday(null); // ??????????????????

    setFlagTime(false); // ?????????????????????

    setSearch(''); // ????????????

    setDepartmentId(-1); // ??????id
  }; //
  // ????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars


  function funCallback(callback) {// console.log(callback);
  } // =======???table======================================================
  // const menus = (
  //   <Menu>
  //     <Menu.Item>Action 1231231231</Menu.Item>
  //     <Menu.Item>Action 2</Menu.Item>
  //   </Menu>
  // );


  const expandedRowRender = () => {
    const columns = [{
      title: '????????????',
      dataIndex: 'response',
      key: 'response'
    }, {
      title: '?????????',
      dataIndex: 'replier',
      key: 'replier'
    }, {
      title: '????????????',
      dataIndex: 'recoverytime',
      key: 'recoverytime'
    }, {
      title: '????????????',
      dataIndex: 'Like',
      key: 'Like'
    }, {
      title: '????????????',
      dataIndex: 'informer',
      key: 'informer'
    }, {
      title: '??????IP',
      dataIndex: 'replierip',
      key: 'replierip'
    }, {
      title: '??????',
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
        response: '????????????' + i,
        replier: '?????????',
        recoverytime: '????????????',
        Like: '????????????',
        informer: '????????????',
        replierip: '??????IP'
      });
    }

    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_table__WEBPACK_IMPORTED_MODULE_4___default()), {
      columns: columns,
      dataSource: data,
      pagination: false,
      size: "small",
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().statsexpandedrow),
      bordered: true // ?????????????????????????????????

    });
  }; // ????????????
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
  // ????????????


  const onSort = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
  }; // Comment ???????????? ??????  ??????


  const columnsComment = [{
    title: '????????????',
    dataIndex: 'content',
    sorter: {
      // compare: (a: { content: number }, b: { content: number }) => a.content - b.content,
      multiple: 1
    }
  }, {
    title: '?????????',
    dataIndex: 'critic',
    sorter: {
      // compare: (a: { critic: number }, b: { critic: number }) => a.critic - b.critic,
      multiple: 2
    }
  }, {
    title: '????????????',
    dataIndex: 'praise',
    sorter: {
      // compare: (a: { praise: number }, b: { praise: number }) => a.praise - b.praise,
      multiple: 3
    }
  }, {
    title: '????????????',
    dataIndex: 'reply',
    sorter: {
      // compare: (a: { reply: number }, b: { reply: number }) => a.reply - b.reply,
      multiple: 4
    }
  }, {
    title: '????????????',
    dataIndex: 'report',
    sorter: {
      // compare: (a: { report: number }, b: { report: number }) => a.report - b.report,
      multiple: 5
    }
  }, {
    title: '?????????IP',
    dataIndex: 'criticIp',
    sorter: {
      // compare: (a: { criticIp: number }, b: { criticIp: number }) => a.criticIp - b.criticIp,
      multiple: 6
    }
  }, {
    title: '????????????',
    dataIndex: 'commentTime',
    sorter: {
      // compare: (a: { commentTime: number }, b: { commentTime: number }) =>
      //   a.commentTime - b.commentTime,
      multiple: 7
    }
  }, {
    title: '??????',
    dataIndex: 'starts',
    sorter: {
      // compare: (a: { starts: number }, b: { starts: number }) => a.starts - b.starts,
      multiple: 8
    }
  }, {
    title: '????????????',
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
    look: ['??????'],
    tags: ['??????', '??????']
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
    look: ['??????'],
    tags: ['??????']
  }]; // ?????????????????? // ??????????????????
  // eslint-disable-next-line @typescript-eslint/no-unused-vars

  const onSelectChange = (selectedRowKeys, selectedRows) => {// console.log(selectedRowKeys);
    // console.log(selectedRows);
  }; // ----????????????-Absent---------------------------


  const columnsAbsent = [{
    title: '??????',
    dataIndex: 'studentNumber',
    key: 'studentNumber'
  }, {
    title: '??????',
    dataIndex: 'studentName',
    key: 'studentName'
  }, {
    title: '????????????',
    dataIndex: 'stats_department',
    key: 'stats_department'
  }, {
    title: '????????????',
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
  }]; // ----------=========----?????????????????????---========================---------------

  for (let index = 5; index < 10; index++) {
    // data.push({
    //   id: index,
    //   account: `${index}`, // ??????
    //   name: 'John Brown', // ??????
    //   department: '', // ????????????
    //   time: '', // ????????????
    //   studyL: '', // ????????????
    //   studyNum: '', // ????????????
    //   credit: '', // ????????????
    //   schedule: '', // ????????????
    //   type: '', // ??????
    //   equipment: '', // ????????????
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
      look: ['??????'],
      tags: ['??????']
    });
    dataAbsent.push({
      id: `${index}`,
      name: 'Joe Black',
      user: '333',
      department: '33',
      phone: '213321123',
      tags: ['cool', 'teacher']
    });
  } // ????????????


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
            id: '??????',
            // ??????
            stats_name: '??????',
            // ??????
            treeId: '????????????',
            // ????????????
            studentsCourse_createTime: '????????????',
            // ????????????
            studentsCourse_updateAt: '????????????',
            // ????????????
            learnTime: '????????????',
            // ????????????
            stats_grade: '????????????',
            // ????????????
            stats_passexam: '??????????????????',
            // ??????????????????
            learnNumber: '????????????',
            // ????????????
            theCredits: '????????????',
            // ????????????
            learnProgress: '????????????',
            // ????????????
            learnState: '??????',
            // ??????
            learnFacility: '????????????' // ????????????

          }; // console.log(res[0]);
          // eslint-disable-next-line no-case-declarations

          const arr = JSON.parse(JSON.stringify(res));
          arr.forEach(item => {
            item.stats_name = item.students.studentName;
            stateFun(item); // ??????????????????--????????????

            if (courseFree.length > 0 && statsPara.fieldCommand !== 2) {
              courseFree.forEach((it, i) => {
                obj['courseFieldName' + i] = it.courseFieldName;
                item['courseFieldName' + i] = it.courseFieldMust; // ???????????????????????????????????????
              });
            }
          });

          if (statsPara.completeCondition === 2) {
            (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(arr, obj, '????????????');
          } else {
            if (statsPara.fieldCommand !== 2) {
              delete obj.id; // ????????????

              delete obj.treeId; // ????????????
            }

            delete obj.stats_grade;
            delete obj.stats_passexam;
            delete obj.learnNumber;
            (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(arr, obj, '????????????');
          }

          break;

        case '1':
          // eslint-disable-next-line no-case-declarations
          // const dataComment = await getExportComment({ courseId: statsPara.token });
          //   exportExcel(
          //     dataComment,
          //     {
          //       content: '????????????', // ????????????
          //       critic: '?????????', // ?????????
          //       praise: '????????????', // ????????????
          //       reply: '????????????', // ????????????
          //       report: '????????????', // ????????????
          //       criticIp: '?????????IP', // ?????????IP
          //       commentTime: '????????????', // ????????????
          //       starts: '??????', // ??????
          //     },
          //     '????????????' // ??????
          //   );
          break;

        case '3':
          // eslint-disable-next-line no-case-declarations
          const exportAbsent = await (0,_api_course_studyStats__WEBPACK_IMPORTED_MODULE_12__/* .getExportAbsent */ .M0)({
            courseId: statsPara.token
          });
          (0,_component_studentManage_exportExcel__WEBPACK_IMPORTED_MODULE_11__["default"])(exportAbsent, {
            studentNumber: '??????',
            studentName: '??????',
            stats_department: '????????????',
            studentPhone: '????????????'
          }, '????????????' // ??????
          );
          break;
      }
    }
  }; // ??????????????????


  function onChangeTable(page) {
    // console.log(page);
    // pageSize ??????
    // ???????????????
    setPages(page.current); // ??????n???

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
  } // ????????????


  const onSearch = async value => {
    setSearch(value);
  };

  const onPaginationChange = (page, pageSize) => {
    // console.log(page, pageSize);
    // ???????????????
    setPages(page); // ??????n???

    setPagesl(pageSize);
  }; // // ??????????????????????????????
  // const alertdialog = () => {
  //   setalertShow(true);
  // };
  // ??????????????????????????????


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
            children: [typeTitle === '0' && '??????', typeTitle === '1' && '?????????', typeTitle === '2' && '?????????', typeTitle === '3' && '???????????????', typeTitle === '4' && '?????????', typeTitle === '5' && '?????????', typeTitle === '????????????' && '????????????', /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__.CaretDownOutlined, {})]
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
            placeholder: '?????????????????????',
            onChange: onPanelChangeState,
            getPopupContainer: () => document.getElementById('DatePicker')
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx((antd_lib_date_picker__WEBPACK_IMPORTED_MODULE_0___default()), {
            size: 'large',
            className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatsdate),
            showTime: true,
            suffixIcon: '',
            allowClear: false,
            placeholder: '?????????????????????',
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
                checkoutDepartment: true // ??????????????????

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
          title: '??????????????????',
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
        expandIconColumnIndex: -1 // antd???????????????
        ,
        pagination: false // ???????????????
        ,
        bordered: true // ?????????????????????????????????
        ,
        expandable: {
          expandedRowKeys: sonRow,
          expandedRowRender
        },
        rowSelection: {
          onChange: onSelectChange
        } // ?????????????????? // ??????????????????
        ,
        loading: false // ??????
        ,
        onChange: onSort
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
        className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatspages),
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(CommonPagination, {
          dataCount: 12 // ???????????? ?????????????????????
          ,
          onChange: onPaginationChange // ???????????????????????????
          ,
          pageSizeOptions: ['5', '10', '20', '100'] // ??????????????????????????????
          ,
          defaultPageSize: 5 // ?????????????????????
          ,
          current: pages
        })
      })]
    }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx("div", {
      className: (_studyStats_StudyStats_module_scss__WEBPACK_IMPORTED_MODULE_17___default().studystatstable),
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(CommonTable, {
        data: statsPara.nowIndex === '1' ? dataComment : stats // ??????
        ,
        dataCount: statsLength // ??????????????????
        ,
        columns: statsPara.nowIndex === '0' ? columns : statsPara.nowIndex === '3' ? columnsAbsent : null // ??????+??????
        ,
        isCheckout: statsPara.nowIndex === '1' // ??????????????????
        ,
        onSelectChange: onSelectChange // ??????????????????
        ,
        rowKeyId: 'id' // ???????????????key??? ????????????id
        ,
        onChangeTable: onChangeTable // ??????,??????,table?????????
        ,
        loading: loading,
        pageSizeOptions: ['5', '10', '20', '50', '100'],
        pageSize: 5,
        current: pages
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx(AlertCommon, {
      alertStatus: alertShow,
      enableDrag: true,
      alertTitle: `??????????????????  (${particularsData.stats_name})`,
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