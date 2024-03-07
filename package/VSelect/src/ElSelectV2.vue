<template>
  <el-select ref="select" v-model="localValue" class="el-select-v2"
    :popper-class="`el-select-v2__popper ${popperClass || ''}`" :filter-method="filterMethod || localFilterMethod"
    v-bind="$attrs" v-on="$listeners" @focus="handleSelectFocus">
    <RecycleScroller v-if="localOptions.length" ref="scroller" v-slot="{ item }" class="scroller" :items="localOptions"
      :min-item-size="minItemSize" :key-field="keyField" :buffer="buffer" @visible="handleScrollerVisible">
      <el-option :title="item[labelField]" :key="item[keyField]" :disabled="item.disabled" :value="item[keyField]"
        :label="item[labelField]">
        <slot name="default" :item="item" />
      </el-option>
    </RecycleScroller>
    <template v-if="$slots.prefix" slot="prefix">
      <slot name="prefix" />
    </template>
    <template v-if="$slots.empty" slot="empty">
      <slot name="empty" />
    </template>
  </el-select>
</template>

<script>
import { Select, Option } from 'element-ui'
import { RecycleScroller } from "vue-virtual-scroller";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
import isEqual from "lodash/isEqual";

export default {
  name: "ElSelectV2",
  components: {
    RecycleScroller,
    elSelect: Select,
    elOption: Option
  },
  props: {
    value: {
      type: [Array, String, Number, Boolean, Object],
      default: undefined,
    },
    options: {
      type: Array,
      default: () => [],
    },
    keyField: {
      type: String,
      default: "value",
    },
    labelField: {
      type: String,
      default: "label",
    },
    popperClass: String,
    filterMethod: Function,
    minItemSize: {
      type: Number,
      default: 34,
    },
    buffer: {
      type: Number,
      default: 20,
    },
  },
  data() {
    return {
      localValue: "",
      localOptions: [],
    };
  },
  watch: {
    value: {
      handler() {
        if (!isEqual(this.value, this.localValue)) {
          this.localValue = this.value;
          this.updateSelectedLabel();
        }
      },
      deep: true,
      immediate: true,
    },
    options: {
      handler() {
        this.localOptions = this.options;
        if (this.$el) {
          const inputs = this.$el.querySelectorAll("input");
          if ([].indexOf.call(inputs, document.activeElement) === -1) {
            this.updateSelectedLabel();
          }
        }
      },
      deep: true,
      immediate: true,
    },
  },
  mounted() {
    this.updateSelectedLabel();
  },
  methods: {
    updateSelectedLabel() {
      if (!this.$refs.select) {
        return;
      }
      const { setSelected, cachedOptions } = this.$refs.select;
      const values =
        "multiple" in this.$attrs ? this.localValue : [this.localValue];
      const selectedOptions = this.options
        .filter((option) => values?.includes(option[this.keyField]))
        .map((option) => ({
          value: option[this.keyField],
          currentLabel: option[this.labelField],
        }));
      selectedOptions.forEach((option) => {
        const cachedOption = cachedOptions.find(
          (cachedOption) => cachedOption.value === option.value
        );
        if (cachedOption) {
          cachedOptions.splice(cachedOptions.indexOf(cachedOption), 1, option);
        } else {
          cachedOptions.push(option);
        }
      });
      setSelected();
    },
    handleScrollerVisible() {
      const firstValue =
        "multiple" in this.$attrs ? this.localValue?.[0] : this.localValue;
      const index = this.localOptions.findIndex(
        (option) => option[this.keyField] === firstValue
      );
      this.$refs.scroller.scrollToItem(index);
    },
    localFilterMethod(query) {
      this.localOptions = this.options.filter((option) =>
        option[this.labelField].toLowerCase().includes(query.toLowerCase())
      );
    },
    handleSelectFocus() {
      this.$nextTick(() => {
        if (document.activeElement.value) {
          const fiulterMethod = this.filterMethod || this.localFilterMethod;
          fiulterMethod(document.activeElement.value);
        } else {
          this.localOptions = this.options;
        }
      });
    },
    focus() {
      this.$refs.select.focus();
    },
    blur() {
      this.$refs.select.blur();
    },
  },
};
</script>

<style lang="scss">
.el-select-v2__popper {
  .scroller {
    max-height: 238px;

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background-color: rgba(144, 147, 153, 0.3);

      &:hover {
        background-color: rgba(144, 147, 153, 0.5);
      }
    }
  }

  .el-scrollbar__bar {
    display: none;
  }
}
</style>