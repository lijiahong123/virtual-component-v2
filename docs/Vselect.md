# 虚拟下拉框 `v-select-v2`

用于长下拉列表渲染, 例如接口一次返回了很多下拉选项列表数据的场景

**注意**

- `el-select-v2`与`el-select`拥有完全一致的属性与api
- `el-select-v2`内置了`el-option`, 因此不用在默认插槽位置去写`<el-option>`, 具体请看下列用法示例
- `el-select-v2`不需要给定`height`属性, 也不需要像`el-list-v2`和`el-tree-v2`一样给外层盒子确切高度

## 基础用法

```html
 <el-select-v2 v-model="value"  :options="options" placeholder="请选择" keyField="id" labelField="name"></el-select-v2>

<script>
    export default {
        data() {
            return {
                value:null,
                options: [
                    {id: '选项1',name: '黄金糕'}, 
                    {id: '选项2',name: '双皮奶'}, 
                    {id: '选项3',name: '蚵仔煎'}, 
                    {id: '选项4',name: '龙须面'}, 
                    {id: '选项5',name: '北京烤鸭'}
                ]
            }
        }
    }
</script>
```

## 自定义Item选项的示例

展示了下拉选项中左侧展示name, 右侧展示ID的

```html
 <el-select-v2 v-model="value" :options="options" placeholder="请选择" keyField="id">
    <template slot-scoped="{item}">
        <div class="select-item">
            <span>{{item.name}}</span>
            <span>{{item.id}}</span>
        </div>
    </template>
 </el-select-v2>

<script>
    export default {
        data() {
            return {
                value:null,
                options: [
                    {id: '选项1',name: '黄金糕'}, 
                    {id: '选项2',name: '双皮奶'}, 
                    {id: '选项3',name: '蚵仔煎'}, 
                    {id: '选项4',name: '龙须面'}, 
                    {id: '选项5',name: '北京烤鸭'}
                ]
            }
        }
    }
</script>
<style>
    .select-item {
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
</style>
```

## Attributes

支持所有 `el-select` 组件的 Attributes

**`el-select-v2`新增属性**

|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|options|数据源|Array|--|`[]`|
|keyField|key对应的字段|String|--|`value`|
|labelField| lakey对应的字段|String|--|`label`|
|minItemSize|每一项的最小高度, 单位为px|Number|--|34|
|buffer|虚拟列表预渲染的item数量|Number|--|10|

## Scoped Slot

插槽与`el-select`一致

**新增的作用域插槽**
|name|说明|
|--|--|
|--|用于自定义渲染每一项数据,参数为 slot-scoped="{item}"|

## 其他

其他API请查看`element-ui`中`el-select`组件, [传送门](https://element.eleme.io/#/zh-CN/component/select#select-attributes)
