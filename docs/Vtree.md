# 虚拟树 `el-tree-v2`

用于多节点tree型数据渲染


[**在线预览**](https://lijiahong123.github.io/virtual-component-v2/)

> 支持`el-tree`组件的`100%`的属性与方法, `Attribute`与`slot` `methods`都与`el-tree`一致, 有一些属性不支持, 也有新加的属性与方法, 具体见 `Attribute` 与 `方法` 表

**特别提示**
**需要给tree本身盒子一个具体的height, 或者给其外层包裹容器一个具体height, 虚拟滚动才会生效**

## 基础用法

```html
<div style="height:300px;">
    <el-tree-v2 node-key="id" :props="props" show-checkbox :data="dataList"></el-tree-v2>
</div>

<script>
    export default {
        data() {
            return {
                dataList: [{
                    label: '一级 1',
                    id: '1',
                    children: [
                        {
                            label: '二级 1-1',
                            id: '1-1',
                            children: [
                                {
                                    id: '1-1-1',
                                    label: '三级 1-1-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: '一级 2',
                    id: '2',
                    children: [
                        {
                            label: '二级 2-1',
                            id: '2-1',
                            children: [
                                {
                                    id: '2-1-1',
                                    label: '三级 2-1-1'
                                }
                            ]
                        },
                        {
                            id: '2-2',
                            label: '二级 2-2',
                            children: [
                                {
                                    id: '2-2-1',
                                    label: '三级 2-2-1'
                                }
                            ]
                        }
                    ]
                },
                {
                    id: '3',
                    label: '一级 3',
                    children: [
                        {
                            id: '3-1',
                            label: '二级 3-1',
                            children: [
                                {
                                    id: '3-1-1',
                                    label: '三级 3-1-1'
                                }
                            ]
                        },
                        {
                            id: '3-2',
                            label: '二级 3-2',
                            children: [
                                {
                                    id: '3-2-2',
                                    label: '三级 3-2-1'
                                }
                            ]
                        }
                    ]
                }],
                defaultProps: {
                children: 'children',
                label: 'label'
                }
            }
        }
    }
</script>
```

## Attributes

**新增的属性**
|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|height|tree组件盒子的高度, 示例: `'50vh'`, 或者 `'500px'`|String|--|--|
|buffer|虚拟列表预渲染的item数量|Number|--|20|
|itemSize|每一项高度, 单位为px|Number|--|34|
|checkNotMatchNode|在有复选框的时候生效,当勾选筛选之后的节点时, 是否希望仅勾选筛选出来的节点|Boolean| `true`或`false`|`false`|
|node-key|（必传）每一个节点唯一的标识字段|String|--|--|

## 方法

`支持el-tree`所有方法, 通过`$refs`调用

**新增方法**
|方法名 |  说明  |  参数  |
|--|--|--|
|getVsibleNodesData|获取当前可见节点的数据,可见节点指的是tree包装节点Node中visible属性为true的节点, 与折叠与否无关, 该方法在搜索节点时候可用于获取搜索出来的所有节点|方法接受一个参数`isLeaf`, 值为`true`或`false`,默认为false, 若传入`true`, 则方法仅为返回当前可见的叶子节点的原数据|

## 其他

其他API请查看`element-ui`中`el-tree`组件, [传送门](https://element.eleme.io/#/zh-CN/component/tree#attributes)
