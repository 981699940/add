<template>
    <div class="tree-wrapper">
        <el-tree :data="data2"
                 show-checkbox
                 node-key="id">

        </el-tree>
    </div>
</template>
<script>
export default {
    data() {
        return {
            data2: [
                {
                    id: 1,
                    label: "功能权限",
                    children: [
                        {
                            id: 4,
                            label: "添加设备",
                            children: [
                                {
                                    id: 9,
                                    label: "三级 1-1-1"
                                },
                                {
                                    id: 10,
                                    label: "三级 1-1-2"
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    label: "一级 2",
                    children: [
                        {
                            id: 5,
                            label: "二级 2-1"
                        },
                        {
                            id: 6,
                            label: "二级 2-2"
                        }
                    ]
                },
                {
                    id: 3,
                    label: "一级 3",
                    children: [
                        {
                            id: 7,
                            label: "二级 3-1"
                        },
                        {
                            id: 8,
                            label: "二级 3-2"
                        }
                    ]
                }
            ]
        };
    }
};
</script>
<style scoped lang="scss">
.tree-wrapper {
}
</style>