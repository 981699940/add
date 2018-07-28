<template>
    <div class="intro">
        <span @click.stop="tabPage()">这是一段介绍文字,点击加载更多</span>
        <el-dropdown trigger="click">
            <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="showSelect(1)">黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>

        <el-dropdown @command="handleCommand"
                     trigger="click">
            <span class="el-dropdown-link">
                下拉菜单
                <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>

        </el-dropdown>
        <div class="firstDiv"
             style="width: 100px;height: 100px;background-color: red;">
            <div class="secondDiv"
                 style=" width: 100%;height: 80px; background-color: #ff0;padding-left:20px;">
                <div style="width:100%;background-color:#fff;height:100%;">div2</div>
            </div>
        </div>
        <el-table :data="showList">
            <el-table-column label="状态"
                             prop="status"
                             :filters="[{text: '1', value: 1}, {text: '2', value: 2}, {text: '3', value: 3}]"
                             :filter-method="filterHandler">
                <template slot-scope="scope">
                    <div class="mechine-status">
                        {{ scope.row.status+10}}
                    </div>

                </template>
            </el-table-column>
            <el-table-column prop="number"
                             :render-header="renderHeader"
                             label="序列号">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dataList: [
                { status: 1, number: "2aa" },
                { status: 2, number: "3aa" },
                { status: 3, number: "4aa" }
            ],
            aa: 0,
            showList: []
        };
    },
    mounted() {
        this.showList = this.dataList;
    },
    methods: {
        tabPage() {
            this.$router.push(`/index`);
        },
        filterHandler(value, row) {
            console.log(value, row.number);
            return row.status === value;
        },
        filterHandlere(value, row) {
            console.log(value, row.number);
            return row.status === value;
        },
        renderHeader(h, { column, $index }) {
            return (
                <el-dropdown
                    trigger="click"
                    style="height:27px;line-height:27px;"
                >
                    <span class="el-dropdown-link">
                        下拉菜单<i class="el-icon-arrow-down el-icon--right" />
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <div
                                style="height:100%;width:100%;padding:0 20px"
                                onClick={() => this.showSelect(1)}
                            >
                                全部
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div
                                style="height:100%;width:100%;padding:0 20px"
                                onClick={() => this.showSelect(2)}
                            >
                                正常
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div
                                style="height:100%;width:100%;padding:0 20px"
                                onClick={() => this.showSelect(3)}
                            >
                                故障
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <div
                                style="height:100%;width:100%;padding:0 20px"
                                onClick={() => this.showSelect(4)}
                            >
                                维修
                            </div>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            );
        },
        showSelect(index) {
            console.log(index, "select被点击");
            this.showList = this.dataList;
            if (index != 1) {
                this.showList = [];
                this.dataList.map(item => {
                    item.number == index && this.showList.push(item);
                });
            }
        },
        handleCommand(command) {
            console.log(command, "command被点击");
        }
    }
};
</script>
<style lang="scss">
.intro {
    cursor: pointer;
    .el-dropdown-menu__item {
        padding: 0px !important;
    }
}
</style>