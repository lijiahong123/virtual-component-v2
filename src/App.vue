<template>
  <div id="app">
    <div class="block-1">
      <!-- list -->
      <list />
      <!-- select -->
      <select-v2 />
      <!-- tree -->
      <treeV2 />
    </div>
    <div class="block-2">
      <jsonViews />
    </div>

  </div>
</template>

<script>
import list from '@/components/list.vue'
import selectV2 from '@/components/select.vue'
import treeV2 from '@/components/tree.vue'
import jsonViews from '@/components/json-view.vue';
export default {
  components: { list, selectV2, treeV2, jsonViews },
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
.item-box {
  width: 300px;
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
