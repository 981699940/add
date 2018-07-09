<template>
    <div>
        <div class="test"
             @click="fffff('case1')">
        </div>
        <div class="hmi">
            <input type="text"
                   v-model="nowShow">
            <button @click="show=!show">show sth</button>
            <transition name="fade"
                        @enter="enter($event)">
                <div v-if="show"
                     class="fade-content"></div>
            </transition>
            <transition enter-active-class="bounceInLeft"
                        leave-active-class="bounceOutRight">
                <div v-if="show"
                     class="fade-content animated"></div>
            </transition>
            <transition-group @enter="enter($event)"
                              enter-active-class="zoomInLeft"
                              leave-active-class="zoomOutRight">
                <template v-if="nowShow">
                    <div v-for="(val,index) in lists"
                         class="fade-content animated"
                         :key="index">{{val}}</div>
                    <!-- <div v-if="show" class="fade-content animated" :key="2"></div> -->
                </template>
            </transition-group>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "ToolHmi",
    components: {},
    data() {
        return {
            hub: {
                case1: { parent: "a", child: "aa" },
                case2: { parent: "b", child: "bb" },
                case3: { parent: "c", child: "cc" }
            },
            a: {
                aa: "eeeeee"
            },
            b: {
                bb: "eeeeee"
            },
            c: {
                cc: "eeeeee"
            },
            show: false,
            nowShow: "",
            list: ["apple", "banana"]
        };
    },
    computed: {
        lists() {
            var arr = [];
            this.list.forEach(
                item => item.indexOf(this.nowShow) != -1 && arr.push(item)
            );
            if (arr.length != 0) {
                console.log(arr, "aaaaa");
            }
            return arr;
        }
    },

    mounted() {},
    methods: {
        fffff(type) {
            this[this.hub[type].parent][this.hub[type].child] = "aaa";
            console.log(this.a.aa);
        },
        enter(el) {
            el.style.background = "yellow";
            console.log(el,"el")
        }
    }
};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.hmi {
    width: 100%;
    height: 100%;
    // overflow: auto;
    // padding: 44px 0;
    input{
        border: none;
        background: white;
    }
    button{
        border: 1px solid yellow;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: 1s all ease;
    }
    .fade-enter-active {
        width: 150px;
        height: 150px;
        opacity: 1;
    }
    .fade-leave-active {
        width: 50px;
        height: 50px;
        opacity: 0;
    }
    .fade-enter {
        width: 50px;
        height: 50px;
        opacity: 0;
    }
    .fade-content {
        height: 150px;
        width: 150px;
        background: black;
        display: inline-block;
    }
    button {
        margin-top: 200px;
    }
}
.test {
    width: 100px;
    height: 50px;
    overflow: auto;
    cursor: pointer;
    background: yellow;
}
</style>
