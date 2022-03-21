exports.id = 5061;
exports.ids = [5061];
exports.modules = {

/***/ 5061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ TreeType_TreeType)
});

// EXTERNAL MODULE: ./src/components/TreeType/TreeType.module.scss
var TreeType_module = __webpack_require__(7533);
var TreeType_module_default = /*#__PURE__*/__webpack_require__.n(TreeType_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/TreeType/TreeList.module.scss
var TreeList_module = __webpack_require__(7945);
var TreeList_module_default = /*#__PURE__*/__webpack_require__.n(TreeList_module);
;// CONCATENATED MODULE: ./src/utils/dataProcessing.ts
// 树形数组拍平为一维数组
function toOneDimensional(data) {
  const far_arr = [];

  function toSingleArray(data) {
    data.forEach(item => {
      far_arr.push(item);

      if (item.children.length > 0) {
        toSingleArray(item.children);
      }
    });
  }

  toSingleArray(data);
  return far_arr;
} // 判断checked属性是否有一个为true

function isAllNodesHaveATrue(data) {
  return data.some(item => {
    return item.checked === true;
  });
} // 将点击的当前项is_sel的属性值改为true，其余改为false
// is_click  是否点击
// is_sel  是否选中

function otherIsSelToFalse(data) {
  data.forEach(item => {
    item.is_sel = item.is_click;

    if (item.children.length > 0) {
      otherIsSelToFalse(item.children);
    }
  });
} // 将当前的数组所对应的节点设置为选中

function checkToTrue(data, ids) {
  const list = toOneDimensional(data);
  list.forEach(item => {
    if (ids.includes(item.id)) {
      item.checked = true;
    }
  });
} // 将所有的是否点击的属性值改为false

function clickToFalse(data) {
  data.forEach(item => {
    item.is_click = false;

    if (item.children.length > 0) {
      clickToFalse(item.children);
    }
  });
} // 打开，将当前项与所有子项展开

function openChildNodes(data) {
  data.forEach(item => {
    item.is_open = true;

    if (item.children.length > 0) {
      openChildNodes(item.children);
    }
  });
} // 关闭，将当前项和所有子项关闭

function closeChildNodes(data) {
  data.forEach(item => {
    item.is_open = false;

    if (item.children.length > 0) {
      closeChildNodes(item.children);
    }
  });
} // 将复选框的值全部变为true

function checkChangeTrue(data) {
  data.forEach(item => {
    item.checked = true;

    if (item.children.length > 0) {
      checkChangeTrue(item.children);
    }
  });
} // 将复选框的值全部变为false

function checkChangeFalse(data) {
  data.forEach(item => {
    item.checked = false;

    if (item.children.length > 0) {
      checkChangeFalse(item.children);
    }
  });
} // 拿到当前节点的所有父级节点的id和名字

function getCurrentIdAndName(arr, current) {
  let str = current.title;

  while (current && current.parent_id) {
    // 找到父节点
    // eslint-disable-next-line no-loop-func
    current = arr.find(curr => {
      return curr.id === current.parent_id;
    });

    if (current) {
      str = current.title + '/' + str;
    }
  }

  return str;
} // 拿到当前节点及所有子节点id

function getCurrentNodeIdAndChildrenId(current) {
  const array = toOneDimensional([current]);
  return array.map(item => {
    return item.id;
  });
} // 将后台数据转成前端需要的格式

function toTreeList(data) {
  const parent_id = null;

  function getManyProperty(data, parent_id) {
    data.forEach(item => {
      // Omit
      // Record
      item.is_sel = false;
      item.is_click = false;
      item.is_open = true;
      item.checked = false;
      item.is_editor = false;
      item.parent_id = parent_id;

      if (item.children.length > 0) {
        getManyProperty(item.children, item.id);
      }
    });
  }

  getManyProperty(data, parent_id);
  return data;
} // 获取所有子节点的id,顺序排序，先子后父

function getAllNodesIdAndParentId(node) {
  // 如果点击的是根节点，警告，根节点不允许删除
  if (!node.parent_id) {
    return {
      code: 0,
      msg: '根节点不允许删除'
    };
  }

  let arr = [{
    id: node.id,
    parentId: node.parent_id
  }];

  function childList(list) {
    list.forEach(item => {
      arr.unshift({
        id: item.id,
        parentId: item.parent_id
      });

      if (item) {
        childList(item.children);
      }
    });
  }

  childList(node.children);
  arr = arr.sort((a, b) => {
    return b.id - a.id;
  });
  return {
    code: 1,
    msg: arr
  };
}
// EXTERNAL MODULE: ./src/utils/http.ts + 1 modules
var http = __webpack_require__(2828);
;// CONCATENATED MODULE: ./src/api/common/tree.ts

// 获取数据接口
function getAll(params) {
  return http/* httpProvider.request */.A.request({
    url: '/tree-person',
    method: 'GET',
    params
  });
} // 添加子节点接口

function addChildrenNode(data) {
  return http/* httpProvider.request */.A.request({
    url: '/tree-person',
    method: 'POST',
    data
  });
} // 删除节点接口,分组删除接口

function deleteNodes(data) {
  return http/* httpProvider.request */.A.request({
    url: '/tree-person',
    method: 'DELETE',
    data
  });
} // 编辑节点接口

function updateNodeTitle(data) {
  return http/* httpProvider.request */.A.request({
    url: '/tree-person',
    method: 'PUT',
    data
  });
} // 分组添加子节点接口

function addGroupChildNode(data) {
  return httpProvider.request({
    url: '/tree-person/groupAdd',
    method: 'POST',
    data
  });
}
function getText() {
  return httpProvider.request({
    url: '/text-set/getAll'
  });
} // 通过id获取节点

function getThisNode(id) {
  return http/* httpProvider.request */.A.request({
    url: '/tree-person/current/' + id,
    method: 'GET'
  });
}
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/components/TreeType/treeList.tsx








const TreeList = props => {
  const {
    list,
    selectNode,
    setSelectNode,
    nodeSpreadState,
    changeFarList,
    toFalseList,
    clickFalse,
    getCurrentAndAncestorsTitles,
    getOneDimensional,
    startCheckbox,
    setWarnWindowContent,
    checkoutDepartment,
    currentId,
    currentLight,
    setCurrentLight,
    selectNodeList,
    setSelList,
    openSelectChildren,
    setSelRow
  } = props;
  let {
    selList,
    selRow
  } = props;
  const input = (0,external_react_.useRef)(null); // 页面渲染数据

  const {
    0: data,
    1: setData
  } = (0,external_react_.useState)(list); // 传递给子组件，用于刷新数据

  const changeList = () => {
    setData([...list]);
  }; // 每一个节点的鼠标移入事件


  const onMouseEnter = item => {
    toFalseList(); // 将所有is_sel属性改为false

    item.is_sel = true;
    setData([...data]);
  }; // 每一个节点鼠标移除事件


  const onMouseLeave = item => {
    toFalseList();
    item.is_sel = false;
    setData([...data]);
  }; // 控制目录展开关闭事件


  const closeAndOpen = item => {
    item.is_open = !item.is_open;
    item.is_open ? openChildNodes(item.children) : closeChildNodes(item.children);
    setData([...data]);
  }; // 复选框选中事件


  const selEvent = (e, item) => {
    // 点击判断是否有一个为true，有一个为true则设置值为true
    // 如果都没，设置值为false
    if (openSelectChildren) {
      const idArr = getCurrentNodeIdAndChildrenId(item);

      if (e.currentTarget.checked) {
        selList = [...selList, ...idArr].reduce((prev, next) => {
          if (!prev.includes(next)) {
            prev.push(next);
          }

          return prev;
        }, []);
      } else {
        // 找到id，移除
        selList = selList.filter(curr => {
          return !idArr.includes(curr);
        });
      }
    } else {
      // 获取点击节点全名称
      const arr = getOneDimensional();
      const res = getCurrentIdAndName(arr, item);

      if (e.currentTarget.checked) {
        selList.push(item.id);
        selRow.push({
          id: item.id,
          title: res
        });
      } else {
        // 找到id，移除
        selList = selList.filter(curr => {
          return curr !== item.id;
        });
        selRow = selRow.filter(curr => {
          return curr.id === item.id;
        });
      }
    }

    setSelList([...selList]);
    setSelRow([...selRow]);
    selectNodeList(selList, selRow);
  }; // 复选框模式值改变事件


  const checkboxEvent = (e, item) => {
    e.stopPropagation();
    item.checked = !item.checked;
    openSelectChildren && (item.checked ? checkChangeTrue(item.children) : checkChangeFalse(item.children));
    selEvent(e, item);
    const res = getOneDimensional();
    isAllNodesHaveATrue(res);
    changeFarList();
  }; // 节点选中相关操作事件


  const selectThisNode = item => {
    setCurrentLight(false); // 获取当前目录，并传递到getNowItem

    const arr = getOneDimensional(); // 当到所有扁平化后的数据
    // 判断是否有item.title为空

    const fileTitleIsNull = arr.some(el => {
      return el.title === '';
    });

    if (fileTitleIsNull) {
      setWarnWindowContent(checkoutDepartment ? '组织名称不能为空！' : '目录名称不能为空！');
    } else {
      const res = getCurrentIdAndName(arr, item);
      const idArr = getCurrentNodeIdAndChildrenId(item);
      getCurrentAndAncestorsTitles(res, item.id, idArr);
      setSelectNode(item.id); // 将所有is_click变成false

      clickFalse();
      item.is_click = true;
      toFalseList();
      setData([...data]);
    }
  }; // 编辑框值改变事件


  const changeValue = (e, item) => {
    e.stopPropagation();
    item.title = e.target.value;
    setData([...data]);
  }; // 编辑框失去焦点事件


  const onBlurEvent = async item => {
    if (item.title === '') {
      // 如果当前目录的title为空，让它始终处于编辑模式
      item.is_editor = true;
      setWarnWindowContent(checkoutDepartment ? '组织名称不能为空！' : '目录名称不能为空！');
    } else {
      // 关闭编辑模式，保存修改的数据(前台映射数据)
      item.is_editor = false;
      setData([...data]); // 失去焦点后，保存当前修改后的标题(接口  修改数据库)

      const editorNode = {
        id: item.id,
        title: item.title
      };
      await updateNodeTitle(editorNode);
    }
  }; // 添加节点事件


  const addNode = async item => {
    if (item.title === '') {
      setWarnWindowContent(checkoutDepartment ? '组织名称不能为空！' : '目录名称不能为空！');
    } else {
      // 子节点数量
      const childCount = item.children.length + 1; // 添加子节点，调用接口，将子节点添加到数据库

      const res = await addChildrenNode({
        parentId: item.id,
        title: checkoutDepartment ? '新增组织' + childCount : '新增子目录' + childCount
      }); // 获取最后一个节点id+1，parent_id为当前id，title为'新增子目录' + childCount
      // const allList = getAllNodesIdAndParentId(item).msg;
      // 构建前台映射目录节点

      const childNode = {
        id: res.data.id,
        title: res.data.title,
        parent_id: item.id,
        is_sel: false,
        is_click: false,
        is_open: true,
        checked: !!item.checked,
        // 选中状态跟随父节点
        is_editor: false,
        children: []
      }; // 如果当前目录处于关闭态，展开

      item.is_open = true;
      openChildNodes(item.children); // 添加新节点到前台数据

      item.children.push(childNode);
      setData([...data]);
    }
  }; // 修改节点值事件


  const updateValue = item => {
    if (item.title === '') {
      setWarnWindowContent(checkoutDepartment ? '组织名称不能为空！' : '目录名称不能为空！');
    } else {
      // 开启编辑模式
      item.is_editor = !item.is_editor; // 关闭操作栏

      item.is_sel = false;
      item.is_click = false;
      setData([...data]);
    }
  }; // 删除节点值事件


  const deleteNode = async (index, item) => {
    // 关闭分组删除操作栏
    // 使父级数据重新渲染
    changeFarList();
    setData([...list]); // 获取所有节点的id和parent_id

    const idList = getAllNodesIdAndParentId(item).msg;

    if (typeof idList === 'string') {
      // 弹出警告
      setWarnWindowContent('根节点分类不允许删除！');
    } else {
      // 删除节点及子节点
      deleteNodes(idList).then(() => {
        // 前台删除
        if (item.parent_id) {
          list.splice(index, 1);
        }
      }).catch(() => {
        console.log();
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (TreeList_module_default()).node_container,
    children: list.map((item, index) => {
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: list.length > 1 && index !== list.length - 1 ? (TreeList_module_default()).parent_box : (TreeList_module_default()).parent_style,
        children: [item.is_open && item.parent_id && index !== list.length - 1 && /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: (TreeList_module_default()).fill_blank_dotted_lines
        }), nodeSpreadState && /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          className: (TreeList_module_default()).each_node,
          onMouseEnter: e => {
            e.stopPropagation();
            onMouseEnter(item);
          },
          onMouseLeave: e => {
            e.stopPropagation();
            onMouseLeave(item);
          },
          children: [list.length === 1 && item.parent_id && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TreeList_module_default()).left_dotted
          }), item.children.length > 0 && /*#__PURE__*/jsx_runtime_.jsx("b", {
            className: (TreeList_module_default()).node_open_or_close,
            onClick: e => {
              e.stopPropagation();
              closeAndOpen(item);
            },
            children: item.is_open ? /*#__PURE__*/jsx_runtime_.jsx(icons_.MinusSquareOutlined, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusSquareOutlined, {})
          }), (item.parent_id || item.children.length > 0) && /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: (TreeList_module_default()).node_lever_line
          }), startCheckbox && checkoutDepartment ? /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: (TreeList_module_default()).allCheck,
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              className: (TreeList_module_default()).checkPart,
              type: "checkbox",
              checked: item.checked,
              onChange: e => {
                checkboxEvent(e, item);
              }
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (TreeList_module_default()).allCheckPart,
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {})
            })]
          }) : startCheckbox ? /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: (TreeList_module_default()).checkbox_mode,
            type: "checkbox",
            checked: item.checked,
            onChange: e => {
              checkboxEvent(e, item);
            }
          }) : // 文件夹展开或合并图标
          checkoutDepartment ? /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TreeList_module_default()).department,
            children: /*#__PURE__*/jsx_runtime_.jsx(icons_.UserOutlined, {})
          }) : /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (TreeList_module_default()).file_open_close_icon,
            children: item.children.length > 0 ? !item.is_open ? /*#__PURE__*/jsx_runtime_.jsx(icons_.FolderOutlined, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_.FolderOpenOutlined, {}) : /*#__PURE__*/jsx_runtime_.jsx(icons_.FileOutlined, {})
          }), !item.is_editor && /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: selectNode === item.id || (currentLight ? currentId === item.id : false) ? startCheckbox && checkoutDepartment ? (TreeList_module_default()).checkActive : (TreeList_module_default()).active : startCheckbox && checkoutDepartment ? (TreeList_module_default()).checkTitle : (TreeList_module_default()).title,
            onClick: e => {
              e.stopPropagation();
              selectThisNode(item);
            },
            children: item.title
          }), item.is_editor ? /*#__PURE__*/jsx_runtime_.jsx("input", {
            className: startCheckbox && checkoutDepartment ? (TreeList_module_default()).user_edit_box + ' ' + (TreeList_module_default()).checkEditPart : (TreeList_module_default()).user_edit_box,
            ref: input,
            type: "text",
            value: item.title,
            autoFocus: true,
            onClick: e => {
              e.stopPropagation();
            },
            onChange: e => {
              changeValue(e, item);
            },
            onBlur: async e => {
              e.stopPropagation();
              await onBlurEvent(item);
              document.removeEventListener('keydown', async e => {
                if (e.keyCode === 13) {
                  // 保存
                  await onBlurEvent(item);
                }
              });
            },
            onFocus: () => {
              document.addEventListener('keydown', async e => {
                if (e.keyCode === 13) {
                  // 保存
                  await onBlurEvent(item);
                }
              });
            }
          }) : null, /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
            className: item.is_click || item.is_sel ? startCheckbox && checkoutDepartment ? (TreeList_module_default()).actionShowPart : (TreeList_module_default()).action_show : startCheckbox && checkoutDepartment ? (TreeList_module_default()).actionHiddenPart : (TreeList_module_default()).action_hidden,
            children: [/*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (TreeList_module_default()).add_child_node,
              onClick: async e => {
                e.stopPropagation();
                await addNode(item);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.PlusOutlined, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (TreeList_module_default()).editor_node_title,
              onClick: e => {
                e.stopPropagation();
                updateValue(item);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.EditOutlined, {})
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (TreeList_module_default()).delete_node,
              onClick: async e => {
                e.stopPropagation();
                await deleteNode(index, item);
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(icons_.DeleteOutlined, {})
            })]
          })]
        }), item.children.length > 0 && nodeSpreadState ? /*#__PURE__*/jsx_runtime_.jsx(TreeList, {
          list: item.children,
          selectNode: selectNode,
          setSelectNode: setSelectNode,
          nodeSpreadState: item.is_open,
          changeFarList: changeList,
          toFalseList: toFalseList,
          clickFalse: clickFalse,
          getCurrentAndAncestorsTitles: getCurrentAndAncestorsTitles,
          getOneDimensional: getOneDimensional,
          startCheckbox: startCheckbox,
          setWarnWindowContent: setWarnWindowContent,
          checkoutDepartment: checkoutDepartment,
          currentId: currentId,
          currentLight: currentLight,
          setCurrentLight: setCurrentLight,
          selectNodeList: selectNodeList,
          setSelList: setSelList,
          selList: selList,
          openSelectChildren: openSelectChildren,
          selRow: selRow,
          setSelRow: setSelRow
        }) : null]
      }, item.id);
    })
  });
};

/* harmony default export */ const treeList = (TreeList);
// EXTERNAL MODULE: ./src/components/TreeType/alertWarning/alertWarning.tsx
var alertWarning = __webpack_require__(9719);
;// CONCATENATED MODULE: ./src/components/TreeType/TreeType.tsx










const TreeType = props => {
  const {
    type,
    getCurrentAndAncestorsTitles,
    openCheckbox,
    checkoutDepartment,
    currentId,
    selectNodeList,
    openSelectChildren,
    getAllTitle,
    selCheckIds
  } = props;
  const {
    0: startCheckbox,
    1: setStartCheckbox
  } = (0,external_react_.useState)(false);
  const {
    0: startDepartment,
    1: setStartDepartment
  } = (0,external_react_.useState)(false);
  const {
    0: currentLight,
    1: setCurrentLight
  } = (0,external_react_.useState)(true); // 控制传递过来的节点高亮显示

  const {
    0: selectNode,
    1: setSelectNode
  } = (0,external_react_.useState)(0); // 设置选中

  const {
    0: myList,
    1: setMyList
  } = (0,external_react_.useState)([]); // 设置数据
  // const [, setShowGroup] = useState(false); // 设置是否开启分组处理

  const {
    0: showWarnAlert,
    1: setShowWarnAlert
  } = (0,external_react_.useState)(false);
  const {
    0: warn,
    1: setWarn
  } = (0,external_react_.useState)('');
  const {
    0: selList,
    1: setSelList
  } = (0,external_react_.useState)([]);
  const {
    0: selRow,
    1: setSelRow
  } = (0,external_react_.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,external_react_.useState)(false);

  const getTitle = id => {
    return getThisNode(id).then(res => {
      if (res.msg) {
        return res.fullTitles;
      }

      return '当前id已删除';
    });
  }; // 获取数据


  const getAllList = (0,external_react_.useCallback)(async () => {
    const res = await getAll({
      type
    }); // 通过name判断，发送过去请求名字为name并且parentId为空的，如果存在就返回树，不存在就创建
    // 将数据转换

    const result = toTreeList(res); // 将这些节点的状态设置为选中
    // @ts-ignore

    selCheckIds && checkToTrue(result, selCheckIds);
    await setMyList(result);
    await setLoading(false);
    getAllTitle && getAllTitle(getTitle);
  }, [getAllTitle, selCheckIds, type]);
  (0,external_react_.useEffect)(() => {
    setLoading(true);
    getAllList().then();

    if (openCheckbox) {
      setStartCheckbox(openCheckbox);
    }

    if (checkoutDepartment) {
      setStartDepartment(checkoutDepartment);
    }
  }, [checkoutDepartment, getAllList, openCheckbox]); // 重新设置修改后的数组的方法，用于子级调用改变父级

  const changeList = () => {
    setMyList([...myList]);
  }; // 将所有的is_sel改为false，划过后将操作栏隐藏


  const toFalse = () => {
    otherIsSelToFalse(myList);
  }; // 将所有的is_click改为false，用于页面只显示一个操作


  const clickToFalseList = () => {
    clickToFalse(myList);
  }; // 获取所有扁平化数据的方法


  const getOneDimensional = () => {
    return toOneDimensional(myList);
  }; // 调用警告弹窗


  const setWarnWindowContent = warnTitle => {
    setWarn(warnTitle);
    setShowWarnAlert(true);
  }; // 获取选中数组
  // const getCheckArray = () => {
  //   const res = getOneDimensional();
  //   return res.filter((el: TreeNode) => {
  //     return el.checked === true;
  //   });
  // };
  // 批量删除方法
  // const groupDelete = async (e) => {
  //   e.stopPropagation();
  //   const newArr: TreeNode[] = getCheckArray();
  //
  //   const sendArr: IdAndParentId[] = newArr.map((el: TreeNode) => {
  //     return { id: el.id, parentId: el.parent_id };
  //   });
  //
  //   sendArr.sort((a: IdAndParentId, b: IdAndParentId) => {
  //     return b.id - a.id;
  //   });
  //   if (!sendArr[sendArr.length - 1].parentId) {
  //     setWarnWindowContent('根节点分类不允许删除！');
  //     // setShowGroup(false);
  //   } else {
  //     // 调用删除接口
  //     await deleteNodes(sendArr);
  //     await getAllList();
  //     // setShowGroup(false);
  //   }
  // };
  // 批量添加的方法
  // const groupAdd = async (e) => {
  //   e.stopPropagation();
  //   const newArr: TreeNode[] = getCheckArray();
  //
  //   const sendArr: ChildAdd[] = newArr.map((el: TreeNode) => {
  //     return { title: '新增子目录' + (el.children.length + 1), parentId: el.id };
  //   });
  //
  //   sendArr.sort((a: ChildAdd, b: ChildAdd) => {
  //     return b.parentId - a.parentId;
  //   });
  //   // 调用分组添加接口
  //   await addGroupChildNode(sendArr);
  //   await getAllList();
  //   setShowGroup(false);
  // };


  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: (TreeType_module_default()).container,
    onClick: e => {
      e.stopPropagation();
    },
    children: loading ? /*#__PURE__*/jsx_runtime_.jsx("span", {
      children: /*#__PURE__*/jsx_runtime_.jsx(icons_.LoadingOutlined, {})
    }) : /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (TreeType_module_default()).test,
      children: [/*#__PURE__*/jsx_runtime_.jsx(treeList, {
        list: myList,
        selectNode: selectNode,
        setSelectNode: setSelectNode,
        nodeSpreadState: true // 节点是否展开
        ,
        changeFarList: changeList,
        toFalseList: toFalse,
        clickFalse: clickToFalseList,
        getCurrentAndAncestorsTitles: getCurrentAndAncestorsTitles,
        getOneDimensional: getOneDimensional,
        startCheckbox: startCheckbox // setShowGroup={setShowGroup}
        ,
        setWarnWindowContent: setWarnWindowContent,
        checkoutDepartment: startDepartment,
        currentId: currentId,
        currentLight: currentLight,
        setCurrentLight: setCurrentLight,
        selectNodeList: selectNodeList,
        setSelList: setSelList,
        selList: selList,
        openSelectChildren: openSelectChildren,
        selRow: selRow,
        setSelRow: setSelRow
      }), showWarnAlert ? /*#__PURE__*/jsx_runtime_.jsx(alertWarning["default"], {
        warning: warn,
        setShowWarnAlert: setShowWarnAlert
      }) : null]
    })
  });
};

/* harmony default export */ const TreeType_TreeType = (TreeType);

/***/ }),

/***/ 7945:
/***/ ((module) => {

// Exports
module.exports = {
	"node_container": "TreeList_node_container__n7a8L",
	"parent_box": "TreeList_parent_box____dh9",
	"fill_blank_dotted_lines": "TreeList_fill_blank_dotted_lines__TS7E4",
	"each_node": "TreeList_each_node__KeAMi",
	"left_dotted": "TreeList_left_dotted__cxWRT",
	"node_open_or_close": "TreeList_node_open_or_close__jzzds",
	"node_lever_line": "TreeList_node_lever_line__qxHJJ",
	"allCheck": "TreeList_allCheck__co6EI",
	"allCheckPart": "TreeList_allCheckPart__QcHRA",
	"checkbox_mode": "TreeList_checkbox_mode__uqe1_",
	"department": "TreeList_department__aa1vT",
	"file_open_close_icon": "TreeList_file_open_close_icon__I4bLa",
	"title": "TreeList_title__8KDRP",
	"active": "TreeList_active__ZMDyS",
	"checkTitle": "TreeList_checkTitle__3OuQT",
	"checkActive": "TreeList_checkActive__Ssb0u",
	"user_edit_box": "TreeList_user_edit_box__bKul8",
	"checkEditPart": "TreeList_checkEditPart__RWOMQ",
	"action_hidden": "TreeList_action_hidden__JGHUN",
	"add_child_node": "TreeList_add_child_node__EBQqK",
	"editor_node_title": "TreeList_editor_node_title__lm1hl",
	"delete_node": "TreeList_delete_node__s2SiJ",
	"action_show": "TreeList_action_show__v6R_v",
	"actionShowPart": "TreeList_actionShowPart__6MJV8",
	"actionHiddenPart": "TreeList_actionHiddenPart___arjd",
	"parent_style": "TreeList_parent_style__UhqTt"
};


/***/ }),

/***/ 7533:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "TreeType_container__Df_AN",
	"test": "TreeType_test__FtPLQ",
	"group_del": "TreeType_group_del__dgTB2",
	"group_add": "TreeType_group_add__1gr3H"
};


/***/ })

};
;