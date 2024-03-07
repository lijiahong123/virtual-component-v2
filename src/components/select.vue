<template>
    <div>
        select
        <div class="item-box">
            <el-select-v2 clearable filterable multiple collapse-tags v-model="value" :options="options"
                placeholder="请选择" keyField="id" label-field="name"></el-select-v2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            value: null,
            options: []
        }
    },
    methods: {
        generateOptions() {
            let list = []
            for (let i = 0; i < 10000; i++) {
                list.push({ id: i, name: '选项_' + i })
            }
            this.options = list
        }
    },
    created() {
        this.generateOptions()
    }
}
</script>

<style></style>