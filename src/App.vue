<template>
  <div id="app">
    <!-- list -->
    <list />

    <!-- select -->
    <select-v2 />

    <!-- tree -->
    <treeV2 />

  </div>
</template>

<script>
import list from '@/components/list.vue'
import selectV2 from '@/components/select.vue'
import treeV2 from '@/components/tree.vue'
export default {
  components: { list, selectV2 ,treeV2},
  name: 'App',
  data() {
    return {}
  }
}
</script>

<style lang="scss">
#app {
  display: flex;
  justify-content: space-around;
}

.item-box {
  width: 300px;
  height: 400px;
  border: 1px solid #000;
  border-radius: 4px;
}
</style>
