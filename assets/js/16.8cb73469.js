(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{512:function(t,e,r){"use strict";r.r(e);var v=r(6),a=Object(v.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"慧享前端监控平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#慧享前端监控平台"}},[t._v("#")]),t._v(" 慧享前端监控平台")]),t._v(" "),r("h1",{attrs:{id:"一、项目简介及技术栈"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、项目简介及技术栈"}},[t._v("#")]),t._v(" 一、项目简介及技术栈")]),t._v(" "),r("p",[t._v("本项目是以 React 全家桶 (包含 hooks) 以及 immutable 数据流为基础打造的一款高质量的App。")]),t._v(" "),r("p",[t._v("介绍一下这个项目的技术栈:")]),t._v(" "),r("p",[t._v("前端部分:")]),t._v(" "),r("ul",[r("li",[r("p",[r("code",[t._v("react")]),t._v(" v17.0.1 全家桶 (react，react-router) : 用于构建用户界面的 MVVM 框架")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("redux")]),t._v(": 著名 JavaScript 状态管理容器")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("redux-thunk")]),t._v(": 处理异步逻辑的 redux 中间件")])]),t._v(" "),r("li",[r("p",[r("code",[t._v("immutable")]),t._v(": Facebook 历时三年开发出的进行持久性数据结构处理的库")])])]),t._v(" "),r("h1",{attrs:{id:"二、项目规范"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、项目规范"}},[t._v("#")]),t._v(" 二、项目规范")]),t._v(" "),r("ol",[r("li",[r("p",[t._v("class 组件不再用，全面拥抱 hooks ，统一用函数组件。")])]),t._v(" "),r("li",[r("p",[t._v("组件内部状态用 hooks 处理，凡是业务数据全部放在 redux 中管理。")])]),t._v(" "),r("li",[r("p",[t._v("ajax 请求以及后续数据处理的具体代码全部放在 actionCreator 中，由 redux-thunk 进行处理，尽可能精简组件代码。")])]),t._v(" "),r("li",[r("p",[t._v("每一个容器组件都有自己独立的 reducer，然后再全局的 store 下通过 redux 的 combineReducer 方法合并。")])]),t._v(" "),r("li",[r("p",[t._v("JS 变量名 (包括函数名) 采用小驼峰的方式，组件名或者 styled-components 导出的样式容器名都采用大驼峰，常量名所有字母大写。")])]),t._v(" "),r("li",[r("p",[t._v("普通 CSS 类名全部用英语小写，单词间用下划线连接，CSS 动画钩子类名中单词用 - 连接。")])]),t._v(" "),r("li",[r("p",[t._v("凡是 props 中有数据的，全部在组件最前面提前解构赋值，并且，获得的属性名和方法名要分开声明，从父组件获得的 props 和通过 react-redux 中映射获得的 props 也要分开声明。")])]),t._v(" "),r("li",[r("p",[t._v("useEffect 统一写在最前面，并且紧跟着 props 解构赋值代码后面。")])]),t._v(" "),r("li",[r("p",[t._v("凡是负责返回 JSX 的函数，统一聚集在函数最后面，中间不要穿插事件处理函数和其他逻辑。")])]),t._v(" "),r("li",[r("p",[t._v("mapDispatchToProps 返回的函数中，函数名格式为 xxxDispatch，以免和现有 action 名冲突。")])]),t._v(" "),r("li",[r("p",[t._v("每个组件都应用 memo 包裹，使得 React 在更新组件之前进行 props 的比对，若 props 不变则不对组件更新，减少不必要的重渲染。")])])])])}),[],!1,null,null,null);e.default=a.exports}}]);