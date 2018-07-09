<template>
    <div class="ratings">{{this.$route.path}} 
        <div class="outside">
            <div class="inside"  id="test" @mousewheel.stop="handleScroll">
                <template v-for="(item,index) in list">
                    <ul :key="index">
                        <!-- :class="classA ? 'class-a' : 'class-b' " -->
                        <li :class="{'line': (item.message==='hello')}">{{item.message==="hello"}}</li>
                        <!-- <li :class="['line-last-'+item.message]" >{{item.message}}</li> -->
                    </ul>
                </template>
            </div>
        </div>
        <span></span>
    </div>
</template>
<script>
import Bus from '../bus.js'
export default {
    created(){
        Bus.$on('getTarget',target=>{
            console.log(target,"target")
        }),
        Bus.$on('say-hello',arg=>{
            console.log('hello'+arg)
        })
    },
    data() {
        return {
            list: [
                { message: "hello", type: true },
                { message: "hell", type: true },
                { message: "hel", type: false },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true },
                { message: "he", type: true }
            ]
        };
    },
    computed: {
       
    },
    methods:{
         handleScroll(){
             //test 是控件的id  在控件绑定mousewheel方法用于监听滑轮
            var oh = test.offsetHeight // 自身元素高度(不包含隐藏的)
            var sh = test.scrollHeight//包含隐藏内容的高度>=clientHeight (多出一个scrollTop)
            var c = test.clientHeight//可视高度
            var st = test.scrollTop//滑块里顶端的距离
            if(st >= sh - c ){
                console.log("要执行方法了")
                this.list = this.list.concat(this.list)

            }
        }
    }
};
</script>
<style lang="scss">
.ratings {
    .outside {
        height: 300px;
        width: 200px;
        overflow: hidden;

        .inside {
            overflow-y: auto;
            height: 100%;

        }
        &::-webkit-scrollbar {
            /*滚动条整体样式*/
            width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
            height: 1px;

        }
        &::-webkit-scrollbar-thumb {
            /*滚动条里面小方块*/
            border-radius: 10px;
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            background: #535353;
        }
        &::-webkit-scrollbar-track {
            /*滚动条里面轨道*/
            box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            background: #ededed;
        }
    }
}
.line-last-hello {
    color: blue;
}
.line {
    color: blue;
}
</style>
