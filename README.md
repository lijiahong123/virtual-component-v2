# virtual-component-v2

依赖于`Element-ui`的Vue2虚拟组件, 包含 `el-tree-v2`, `el-select-v2`, `el-list-v2`三个虚拟组件, 其中 `el-tree-v2`, `el-select-v2` 完全支持`element-ui` tree组件与 select组件的所有属性

## Install

```bash
npm install element-ui -S
npm install virtual-component-v2 -S
```

### Use

```js
import Vue from "vue";


// 引入虚拟组件
import virtualComponentV2 from "virtual-component-v2";
import "virtual-component-v2/dist/virtualComponentV2.css";
// 引入Element的样式
import "element-ui/lib/theme-chalk/index.css";

Vue.use(virtualComponentV2);
```

## 组件使用文档

- [虚拟列表(el-list-v2)](./docs/Vlist.md).
- [虚拟下拉框(el-select-v2)](./docs/Vselect.md).
- [虚拟树(el-tree-v2)](./docs/Vtree.md).
