# AutoGrid

> AutoGrid 组件仅仅处理 UI 响应式布局，不涉及业务逻辑状态操作

**被 AutoGrid 组件包裹的每一个元素（最近一级子元素）可实现自动响应式布局，避免出现小分辨率屏幕下样式错乱的问题**

## 使用方法

将要布局的元素直接用`<AutoGrid></AutoGrid>`包裹即可

```html
<template>
  <AutoGrid>
    <!-- el-input -->
    <el-input v-model="value1" placeholder="输入框"></el-input>

    <!-- el-input-number -->
    <el-input-number v-model="value2" :min="1" :max="10"></el-input-number>

    <!-- el-select -->
    <el-select v-model="value3" placeholder="下拉框">
      <el-option
        v-for="item in []"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>

    <!-- el-cascader -->
    <el-cascader
      placeholder="级联选择器"
      :options="[]"
      v-model="value4"
    ></el-cascader>

    <!-- el-time-select -->
    <el-time-select
      v-model="value5"
      :picker-options="{
          start: '08:30', step: '00:15', end: '18:30'
        }"
      placeholder="时间选择器"
    >
    </el-time-select>

    <!-- el-date-picker -->
    <el-date-picker
      v-model="value6"
      type="date"
      placeholder="日期选择器"
    ></el-date-picker>
    <!-- el-date-picker -->
    <el-date-picker
      v-model="value7"
      type="datetime"
      placeholder="日期时间选择"
    ></el-date-picker>
    <!-- el-date-picker -->
    <el-date-picker
      v-model="value8"
      type="datetimerange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
  </AutoGrid>
</template>
<script>
  export default {
    daya() {
      return {
        value1: null,
        value2: null,
        value3: null,
        value4: null,
        value5: null,
        value6: null,
        value7: null,
        value8: null,
      };
    },
  };
</script>
```

## AutoGrid 属性

| 属性   | 类型   | 描述                 | 是否必传 | 默认值 |
| ------ | ------ | -------------------- | -------- | ------ |
| xs     | Number | <768px 响应式栅格数  | 否       | 24     |
| sm     | Number | ≥768px 响应式栅格数  | 否       | 12     |
| md     | Number | ≥992px 响应式栅格数  | 否       | 8      |
| lg     | Number | ≥1200px 响应式栅格数 | 否       | 6      |
| xl     | Number | ≥1920px 响应式栅格数 | 否       | 4      |
| gutter | Number | 栅格间隔             | 否       | 20     |
