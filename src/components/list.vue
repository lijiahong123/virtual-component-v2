<template>
  <div>
    <h2>el-list-v2 示例</h2>
    <div class="item-box">
      <el-list-v2 :list="dataList" key-field="id" label-field="name"></el-list-v2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: []
    }
  },
  methods: {
    generateOptions() {
      let list = []
      for (let i = 0; i < 10000; i++) {
        list.push({ id: i, name: '列表_' + i })
      }
      this.dataList = list
    }
  },
  created() {
    this.generateOptions()
  }
}
</script>

<style scoped>
.item-box {
  padding: 0 5px;
}
</style>