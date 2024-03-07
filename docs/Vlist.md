# 虚拟列表 `v-list-v2`

用于长列表渲染, 例如接口一次返回了所有列表数据的场景


**注意:**
需要给`el-list-v2`组件的包裹容器一个确切的`height`属性, 否则虚拟滚动功能会失效, 示例见基础用法

## 基础用法

```html
<div style="height:300px;">
    <el-list-v2 :list="dataList" key-field="id" label-field="name" ></el-list-v2>
</div>

<script>
    export default {
        data() {
            return {
                dataList: [
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

## 自定义Item示例 

list每一项为复选框
```html
<div style="height:300px;">
    <el-checkbox-group v-model="checkList">
        <el-list-v2 :list="dataList" key-field="id" label-field="name" >
            <template slot-scoped="{item}">
                <el-checkbox :label="item.id">{{item.name}}</el-checkbox>
            </template>
        </el-list-v2>
    </el-checkbox-group>
</div>

<script>
    export default {
        data() {
            return {
                checkList:[],
                dataList: [
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

## Attributes
|参数|说明|类型|可选值|默认值|
|--|--|--|--|--|
|list|数据源|Array|--|`[]`|
|keyField|（必须）key对应的字段|String|--|`id`|
|labelField|label对应的字段|String|--|`name` 或者 `title`|
|itemSize|每一项高度, 单位为px|Number|--|`34`|
|buffer|虚拟列表预渲染的item数量|Number|--|`10`|


## Scoped Slot
|name|说明|
|--|--|
|--|用于自定义渲染每一项数据,具体为 `slot-scoped="{item}"`|