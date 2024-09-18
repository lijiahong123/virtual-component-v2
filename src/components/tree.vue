<template>
    <div>
        <h2>el-tree-v2 示例 <span>共{{ treeNodeCount }} 个节点</span></h2>

        <div class="item-box">
            <el-tree-v2 default-expand-all node-key="id" :props="props" show-checkbox :data="dataList"></el-tree-v2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dataList: [],
            treeNodeCount: 0,
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
                        name: `tree-${level}-${i}`,
                        children: [],
                    };

                    if (level > 0) {
                        treeNode.children = generateTree(level - 1);
                    }

                    list.push(treeNode);
                }
                return list;
            }

            return {
                list: generateTree(),
                count: uid
            }
        },
        handleDragStart(node, ev) {
            console.log('drag start', node);
        },
        handleDragEnter(draggingNode, dropNode, ev) {
            console.log('tree drag enter: ', dropNode.label);
        },
        handleDragLeave(draggingNode, dropNode, ev) {
            console.log('tree drag leave: ', dropNode.label);
        },
        handleDragOver(draggingNode, dropNode, ev) {
            console.log('tree drag over: ', dropNode.label);
        },
        handleDragEnd(draggingNode, dropNode, dropType, ev) {
            console.log('tree drag end: ', dropNode && dropNode.label, dropType);
        },
        handleDrop(draggingNode, dropNode, dropType, ev) {
            console.log('tree drop: ', dropNode.label, dropType);
        },
        allowDrop(draggingNode, dropNode, type) {
            return true
        },
        allowDrag(draggingNode) {
            return true
        }
    },

    created() {
        const { list, count } = this.getData()
        this.dataList = list;
        this.treeNodeCount = count || 0
    }

}
</script>

<style scoped>
h2 span {
    font-weight: normal;
    font-size: 14px;
}
</style>