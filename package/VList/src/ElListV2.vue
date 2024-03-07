<template>
  <RecycleScroller class="scroller-container" :items="list" :item-size="itemSize" :key-field="keyField"
    v-slot="{ item, active }" v-bind="$attrs" v-on="$listeners" :buffer="buffer">
    <div  v-if="active" class="item-container" :style="`height:${itemSize}px;line-height:${itemSize}px;`">
      <slot :item="item">{{ getLabel(item) }}</slot>
    </div>
  </RecycleScroller>
</template>

<script>
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
export default {
  name: "ElListV2",
  components: { RecycleScroller },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
    keyField: {
      type: String,
      default: "id",
    },
    labelField: {
      type: String,
    },
    itemSize: {
      type: Number,
      default: 34,
    },
    buffer: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    getLabel() {
      return function (item) {
        if (this.labelField) {
          return item[this.labelField];
        }
        return item.name || item.title || "";
      };
    },
  },
};
</script>

<style scoped>
.scroller-container {
  height: 100%;
}

.item-container {
  display: flex;
  align-items: center;
  font-size: 14px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #606266;
  box-sizing: border-box;
  cursor: pointer;
}

.item-container:hover {
  background-color: #f5f7fa;
}
</style>