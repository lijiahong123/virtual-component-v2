# virtual-component-v2

依赖于`Element-ui`的 Vue2 虚拟组件, 包含 `el-tree-v2`, `el-select-v2`, `el-list-v2`三个虚拟组件, 其中 `el-tree-v2`, `el-select-v2` 完全支持`element-ui` tree 组件与 select 组件的所有属性

[在线预览](https://lijiahong123.github.io/virtual-component-v2/)


## Install

```bash
npm install element-ui -S
npm install virtual-component-v2 -S
```

## Use

```js
// main.js

import Vue from "vue";
// 引入ElementUI
import ElementUI from "element-ui";
// 引入虚拟组件
import virtualComponentV2 from "virtual-component-v2";
// 虚拟组件自己的样式
import "virtual-component-v2/dist/virtualComponentV2.css";
// 引入Element的样式
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.use(virtualComponentV2);
```

## 组件使用文档 Docs

- [虚拟列表(el-list-v2)](./docs/Vlist.md).
- [虚拟下拉框(el-select-v2)](./docs/Vselect.md).
- [虚拟树(el-tree-v2)](./docs/Vtree.md).
- [JSON 预览(json-view-v2)](./docs/JsonView.md).
- [自动响应式布局(auto-grid)](./docs/AutoGrid.md).
