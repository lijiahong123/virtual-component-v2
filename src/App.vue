<template>
  <div>
    <AutoGrid :xl="6">
      <list />
      <select-v2 />
      <treeV2 />
    </AutoGrid>
    <AutoGrid :sm="24" :md="24" :lg="24" :xl="24">
      <AutoGridDemo />
    </AutoGrid>
    <AutoGrid :sm="24" :md="24" :lg="24" :xl="24">
      <jsonViews />
    </AutoGrid>

  </div>
</template>

<script>
import list from '@/components/list.vue'
import selectV2 from '@/components/select.vue'
import treeV2 from '@/components/tree.vue'
import jsonViews from '@/components/json-view.vue';
import AutoGridDemo from '@/components/auto-grid.vue';
export default {
  components: { list, selectV2, treeV2, jsonViews, AutoGridDemo },
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  flex-wrap: wrap;
}

.item-box {
  width: 240px;
  height: 400px;
  border: 1px solid #000;
  border-radius: 4px;
  margin-left: 10px;
  box-sizing: border-box;
  padding: 10px;
}

.block-1 {
  display: flex;
}
</style>
