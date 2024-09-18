<template>
  <div>
    <h2>AutoGrid示例</h2>
    <div class="container">
      <AutoGrid>
        <el-input v-model="value1" placeholder="输入框"></el-input>
        <el-input-number v-model="value2" :min="1" :max="10"></el-input-number>
        <el-select v-model="value3" placeholder="下拉框">
          <el-option v-for="item in []" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
        <el-cascader placeholder="级联选择器" :options="[]" v-model="value4">
        </el-cascader>
        <el-time-select v-model="value5" :picker-options="{
          start: '08:30', step: '00:15', end: '18:30'
        }" placeholder="时间选择器">
        </el-time-select>
        <el-date-picker v-model="value6" type="date" placeholder="日期选择器"></el-date-picker>
        <el-date-picker v-model="value7" type="datetime" placeholder="日期时间选择"></el-date-picker>
        <el-date-picker v-model="value8" type="datetimerange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </AutoGrid>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualComponentV2AutoGrid',

  data() {
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

  mounted() {

  },

  methods: {

  },
};
</script>

<style scoped>
.container {
  width: 100%;
}
</style>