<template>
    <div>
        <!-- <div>{{this.$route.path}}</div> -->
        <div class="flex">
            <div class="test-flex" v-for="(item,index) in list" :key="item.id">
                <span :class="{active: currentId == item.id}" @click.stop="tabToPage(item,index,$event)">{{item.name}}</span>
            </div>
        </div>
        <div class="container">

            <position></position>
        </div>
    </div>
</template>
<script>
import Position from "./position";
export default {
    components: {
        Position
    },
    data() {
        return {
            list: [
                { name: "time", id: 1 },
                { name: "calc", id: 2 },
                { name: "select", id: 3 },
                { name: "file", id: 4 },
                { name: "$nextTick", id: 5 },
                { name: "vuechat", id: 6 },
                { name: "right7", id: 7 }
            ],
            currentId: 0
        };
    },
    watch: {
        $route: function(val) {
            this.currentId = val.query.position | 0;
        }
    },
    mounted() {
        this.currentId = this.$route.query.position | 0;
    },
    methods: {
        tabToPage(item, index, event) {
            // switch (item.id) {
            //     case 1:

            //         break;
            //     case 2:
            //         break;
            //     case 3:
            //         break;
            // }
            console.log(event.currentTarget.innerHTML, "$event事件源"),
            // console.log(index, "index");

            this.currentId = item.id;
            // this.$router.push(`/index/goods?id=${item.id}`);
            // this.testInclude()
            this.$router.push(`/index/goods?position=${item.id}`);
        }
        // testInclude(){
        //     console.log (this.list.includes(this.list.id==2))

        // }
    }
};
</script>
<style lang="scss" scoped>
.flex {
    display: flex;
    // flex-direction: column;

    .test-flex {
        // display: flex;
        display: inline-block;
        padding-right: 20px;
        margin-top: 10px;
        span {
            border: 1px solid blue;
            padding: 2px 8px;
            color: blue;
            cursor: pointer;
            margin-bottom: 4px;
            border-radius: 8px;
            &.active {
                background: yellow;
                color: black;
            }
        }
    }
}
.container {
    margin-top: 10px;
}
</style>