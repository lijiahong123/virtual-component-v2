<template>
    <div>
        tree
        <div class="item-box">
            <el-tree-v2 node-key="id" :props="props" show-checkbox :data="dataList"></el-tree-v2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            uid: 0,
            props: {
                children: 'children',
                label: 'name'
            }
        }
    },
    methods: {
        getData() {
            let uid = 0
            function generateTree(level = 3) {
                const list = [];
                for (let i = 0; i < 15; i++) {
                    let id = uid++
                    const treeNode = {
                        id,
                        name: `tree-${i}`,
                        children: [],
                    };

                    if (level > 0) {
                        treeNode.children = generateTree( level - 1);
                    }

                    list.push(treeNode);
                }
                return list;
            }

            return generateTree()
        }
    },

    created() {
        this.dataList = this.getData()
    }

}
</script>

<style></style>