(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5061],{55061:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return H}});var r=n(40037),i=n(30266),c=n(809),s=n.n(c),o=n(85929),a=n.n(o),l=n(67294),u=n(9953),d=n.n(u);function _(e){var t=[];return function e(n){n.forEach((function(n){t.push(n),n.children.length>0&&e(n.children)}))}(e),t}function h(e){e.forEach((function(e){e.is_sel=e.is_click,e.children.length>0&&h(e.children)}))}function p(e,t){_(e).forEach((function(e){t.includes(e.id)&&(e.checked=!0)}))}function f(e){e.forEach((function(e){e.is_click=!1,e.children.length>0&&f(e.children)}))}function k(e){e.forEach((function(e){e.is_open=!0,e.children.length>0&&k(e.children)}))}function x(e){e.forEach((function(e){e.is_open=!1,e.children.length>0&&x(e.children)}))}function g(e){e.forEach((function(e){e.checked=!0,e.children.length>0&&g(e.children)}))}function m(e){e.forEach((function(e){e.checked=!1,e.children.length>0&&m(e.children)}))}function v(e,t){for(var n=t.title;t&&t.parent_id;)(t=e.find((function(e){return e.id===t.parent_id})))&&(n=t.title+"/"+n);return n}function T(e){return _([e]).map((function(e){return e.id}))}function L(e){if(!e.parent_id)return{code:0,msg:"\u6839\u8282\u70b9\u4e0d\u5141\u8bb8\u5220\u9664"};var t=[{id:e.id,parentId:e.parent_id}];return function e(n){n.forEach((function(n){t.unshift({id:n.id,parentId:n.parent_id}),n&&e(n.children)}))}(e.children),{code:1,msg:t=t.sort((function(e,t){return t.id-e.id}))}}var C=n(42828);function w(e){return C.A.request({url:"/tree-person",method:"POST",data:e})}function S(e){return C.A.request({url:"/tree-person",method:"DELETE",data:e})}function j(e){return C.A.request({url:"/tree-person",method:"PUT",data:e})}var Z=n(28638),N=n(13982),b=n(87547),P=n(32319),E=n(95591),y=n(26911),A=n(47399),F=n(86548),R=n(48689),D=n(85893),I=function e(t){var n=t.list,c=t.selectNode,o=t.setSelectNode,a=t.nodeSpreadState,u=t.changeFarList,_=t.toFalseList,h=t.clickFalse,p=t.getCurrentAndAncestorsTitles,f=t.getOneDimensional,C=t.startCheckbox,I=t.setWarnWindowContent,q=t.checkoutDepartment,W=t.currentId,H=t.currentLight,M=t.setCurrentLight,O=t.selectNodeList,J=t.setSelList,Q=t.openSelectChildren,K=t.setSelRow,B=t.selList,G=t.selRow,U=(0,l.useRef)(null),z=(0,l.useState)(n),V=z[0],X=z[1],Y=function(){X((0,r.Z)(n))},$=function(e){e.is_open=!e.is_open,e.is_open?k(e.children):x(e.children),X((0,r.Z)(V))},ee=function(e,t){e.stopPropagation(),t.checked=!t.checked,Q&&(t.checked?g(t.children):m(t.children)),function(e,t){if(Q){var n=T(t);B=e.currentTarget.checked?[].concat((0,r.Z)(B),(0,r.Z)(n)).reduce((function(e,t){return e.includes(t)||e.push(t),e}),[]):B.filter((function(e){return!n.includes(e)}))}else{var i=v(f(),t);e.currentTarget.checked?(B.push(t.id),G.push({id:t.id,title:i})):(B=B.filter((function(e){return e!==t.id})),G=G.filter((function(e){return e.id===t.id})))}J((0,r.Z)(B)),K((0,r.Z)(G)),O(B,G)}(e,t),function(e){e.some((function(e){return!0===e.checked}))}(f()),u()},te=function(){var e=(0,i.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.title){e.next=5;break}t.is_editor=!0,I(q?"\u7ec4\u7ec7\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01":"\u76ee\u5f55\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"),e.next=10;break;case 5:return t.is_editor=!1,X((0,r.Z)(V)),n={id:t.id,title:t.title},e.next=10,j(n);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=(0,i.Z)(s().mark((function e(t){var n,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.title){e.next=4;break}I(q?"\u7ec4\u7ec7\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01":"\u76ee\u5f55\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"),e.next=13;break;case 4:return n=t.children.length+1,e.next=7,w({parentId:t.id,title:q?"\u65b0\u589e\u7ec4\u7ec7"+n:"\u65b0\u589e\u5b50\u76ee\u5f55"+n});case 7:i=e.sent,c={id:i.data.id,title:i.data.title,parent_id:t.id,is_sel:!1,is_click:!1,is_open:!0,checked:!!t.checked,is_editor:!1,children:[]},t.is_open=!0,k(t.children),t.children.push(c),X((0,r.Z)(V));case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),re=function(){var e=(0,i.Z)(s().mark((function e(t,i){var c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(),X((0,r.Z)(n)),"string"===typeof(c=L(i).msg)?I("\u6839\u8282\u70b9\u5206\u7c7b\u4e0d\u5141\u8bb8\u5220\u9664\uff01"):S(c).then((function(){i.parent_id&&n.splice(t,1)})).catch((function(){console.log()}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return(0,D.jsx)("div",{className:d().node_container,children:n.map((function(t,l){return(0,D.jsxs)("div",{className:n.length>1&&l!==n.length-1?d().parent_box:d().parent_style,children:[t.is_open&&t.parent_id&&l!==n.length-1&&(0,D.jsx)("span",{className:d().fill_blank_dotted_lines}),a&&(0,D.jsxs)("p",{className:d().each_node,onMouseEnter:function(e){e.stopPropagation(),function(e){_(),e.is_sel=!0,X((0,r.Z)(V))}(t)},onMouseLeave:function(e){e.stopPropagation(),function(e){_(),e.is_sel=!1,X((0,r.Z)(V))}(t)},children:[1===n.length&&t.parent_id&&(0,D.jsx)("span",{className:d().left_dotted}),t.children.length>0&&(0,D.jsx)("b",{className:d().node_open_or_close,onClick:function(e){e.stopPropagation(),$(t)},children:t.is_open?(0,D.jsx)(Z.Z,{}):(0,D.jsx)(N.Z,{})}),(t.parent_id||t.children.length>0)&&(0,D.jsx)("i",{className:d().node_lever_line}),C&&q?(0,D.jsxs)("span",{className:d().allCheck,children:[(0,D.jsx)("input",{className:d().checkPart,type:"checkbox",checked:t.checked,onChange:function(e){ee(e,t)}}),(0,D.jsx)("span",{className:d().allCheckPart,children:(0,D.jsx)(b.Z,{})})]}):C?(0,D.jsx)("input",{className:d().checkbox_mode,type:"checkbox",checked:t.checked,onChange:function(e){ee(e,t)}}):q?(0,D.jsx)("span",{className:d().department,children:(0,D.jsx)(b.Z,{})}):(0,D.jsx)("span",{className:d().file_open_close_icon,children:t.children.length>0?t.is_open?(0,D.jsx)(E.Z,{}):(0,D.jsx)(P.Z,{}):(0,D.jsx)(y.Z,{})}),!t.is_editor&&(0,D.jsx)("span",{className:c===t.id||H&&W===t.id?C&&q?d().checkActive:d().active:C&&q?d().checkTitle:d().title,onClick:function(e){e.stopPropagation(),function(e){M(!1);var t=f();if(t.some((function(e){return""===e.title})))I(q?"\u7ec4\u7ec7\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01":"\u76ee\u5f55\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01");else{var n=v(t,e),i=T(e);p(n,e.id,i),o(e.id),h(),e.is_click=!0,_(),X((0,r.Z)(V))}}(t)},children:t.title}),t.is_editor?(0,D.jsx)("input",{className:C&&q?d().user_edit_box+" "+d().checkEditPart:d().user_edit_box,ref:U,type:"text",value:t.title,autoFocus:!0,onClick:function(e){e.stopPropagation()},onChange:function(e){!function(e,t){e.stopPropagation(),t.title=e.target.value,X((0,r.Z)(V))}(e,t)},onBlur:function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,te(t);case 3:document.removeEventListener("keydown",function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.keyCode){e.next=3;break}return e.next=3,te(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),onFocus:function(){document.addEventListener("keydown",function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(13!==n.keyCode){e.next=3;break}return e.next=3,te(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}):null,(0,D.jsxs)("span",{className:t.is_click||t.is_sel?C&&q?d().actionShowPart:d().action_show:C&&q?d().actionHiddenPart:d().action_hidden,children:[(0,D.jsx)("span",{className:d().add_child_node,onClick:function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,ne(t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,D.jsx)(A.Z,{})}),(0,D.jsx)("span",{className:d().editor_node_title,onClick:function(e){e.stopPropagation(),function(e){""===e.title?I(q?"\u7ec4\u7ec7\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01":"\u76ee\u5f55\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a\uff01"):(e.is_editor=!e.is_editor,e.is_sel=!1,e.is_click=!1,X((0,r.Z)(V)))}(t)},children:(0,D.jsx)(F.Z,{})}),(0,D.jsx)("span",{className:d().delete_node,onClick:function(){var e=(0,i.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.stopPropagation(),e.next=3,re(l,t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:(0,D.jsx)(R.Z,{})})]})]}),t.children.length>0&&a?(0,D.jsx)(e,{list:t.children,selectNode:c,setSelectNode:o,nodeSpreadState:t.is_open,changeFarList:Y,toFalseList:_,clickFalse:h,getCurrentAndAncestorsTitles:p,getOneDimensional:f,startCheckbox:C,setWarnWindowContent:I,checkoutDepartment:q,currentId:W,currentLight:H,setCurrentLight:M,selectNodeList:O,setSelList:J,selList:B,openSelectChildren:Q,selRow:G,setSelRow:K}):null]},t.id)}))})},q=n(69719),W=n(50888),H=function(e){var t=e.type,n=e.getCurrentAndAncestorsTitles,c=e.openCheckbox,o=e.checkoutDepartment,u=e.currentId,d=e.selectNodeList,k=e.openSelectChildren,x=e.getAllTitle,g=e.selCheckIds,m=(0,l.useState)(!1),v=m[0],T=m[1],L=(0,l.useState)(!1),w=L[0],S=L[1],j=(0,l.useState)(!0),Z=j[0],N=j[1],b=(0,l.useState)(0),P=b[0],E=b[1],y=(0,l.useState)([]),A=y[0],F=y[1],R=(0,l.useState)(!1),H=R[0],M=R[1],O=(0,l.useState)(""),J=O[0],Q=O[1],K=(0,l.useState)([]),B=K[0],G=K[1],U=(0,l.useState)([]),z=U[0],V=U[1],X=(0,l.useState)(!1),Y=X[0],$=X[1],ee=function(e){return function(e){return C.A.request({url:"/tree-person/current/"+e,method:"GET"})}(e).then((function(e){return e.msg?e.fullTitles:"\u5f53\u524did\u5df2\u5220\u9664"}))},te=(0,l.useCallback)((0,i.Z)(s().mark((function e(){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c={type:t},C.A.request({url:"/tree-person",method:"GET",params:c});case 2:return n=e.sent,function e(t,n){t.forEach((function(t){t.is_sel=!1,t.is_click=!1,t.is_open=!0,t.checked=!1,t.is_editor=!1,t.parent_id=n,t.children.length>0&&e(t.children,t.id)}))}(i=n,null),r=i,g&&p(r,g),e.next=7,F(r);case 7:return e.next=9,$(!1);case 9:x&&x(ee);case 10:case"end":return e.stop()}var i,c}),e)}))),[x,g,t]);(0,l.useEffect)((function(){$(!0),te().then(),c&&T(c),o&&S(o)}),[o,te,c]);return(0,D.jsx)("div",{className:a().container,onClick:function(e){e.stopPropagation()},children:Y?(0,D.jsx)("span",{children:(0,D.jsx)(W.Z,{})}):(0,D.jsxs)("div",{className:a().test,children:[(0,D.jsx)(I,{list:A,selectNode:P,setSelectNode:E,nodeSpreadState:!0,changeFarList:function(){F((0,r.Z)(A))},toFalseList:function(){h(A)},clickFalse:function(){f(A)},getCurrentAndAncestorsTitles:n,getOneDimensional:function(){return _(A)},startCheckbox:v,setWarnWindowContent:function(e){Q(e),M(!0)},checkoutDepartment:w,currentId:u,currentLight:Z,setCurrentLight:N,selectNodeList:d,setSelList:G,selList:B,openSelectChildren:k,selRow:z,setSelRow:V}),H?(0,D.jsx)(q.default,{warning:J,setShowWarnAlert:M}):null]})})}},9953:function(e){e.exports={node_container:"TreeList_node_container__n7a8L",parent_box:"TreeList_parent_box____dh9",fill_blank_dotted_lines:"TreeList_fill_blank_dotted_lines__TS7E4",each_node:"TreeList_each_node__KeAMi",left_dotted:"TreeList_left_dotted__cxWRT",node_open_or_close:"TreeList_node_open_or_close__jzzds",node_lever_line:"TreeList_node_lever_line__qxHJJ",allCheck:"TreeList_allCheck__co6EI",allCheckPart:"TreeList_allCheckPart__QcHRA",checkbox_mode:"TreeList_checkbox_mode__uqe1_",department:"TreeList_department__aa1vT",file_open_close_icon:"TreeList_file_open_close_icon__I4bLa",title:"TreeList_title__8KDRP",active:"TreeList_active__ZMDyS",checkTitle:"TreeList_checkTitle__3OuQT",checkActive:"TreeList_checkActive__Ssb0u",user_edit_box:"TreeList_user_edit_box__bKul8",checkEditPart:"TreeList_checkEditPart__RWOMQ",action_hidden:"TreeList_action_hidden__JGHUN",add_child_node:"TreeList_add_child_node__EBQqK",editor_node_title:"TreeList_editor_node_title__lm1hl",delete_node:"TreeList_delete_node__s2SiJ",action_show:"TreeList_action_show__v6R_v",actionShowPart:"TreeList_actionShowPart__6MJV8",actionHiddenPart:"TreeList_actionHiddenPart___arjd",parent_style:"TreeList_parent_style__UhqTt"}},85929:function(e){e.exports={container:"TreeType_container__Df_AN",test:"TreeType_test__FtPLQ",group_del:"TreeType_group_del__dgTB2",group_add:"TreeType_group_add__1gr3H"}}}]);