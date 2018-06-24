<template>
    <div class="hmi">
        <input type="text" v-model="nowShow">
        <button @click="show=!show">哈哈哈</button>
        <transition name="fade" @enter="enter($event)">
            <div v-if="show" class="fade-content"></div>
        </transition>
        <transition enter-active-class="bounceInLeft" leave-active-class="bounceOutRight">
            <div v-if="show" class="fade-content animated"></div>
        </transition>
        <transition-group @enter="enter($event)" enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
            <template v-if="nowShow">
                <div v-for="(val,index) in lists" class="fade-content animated" :key="index">{{val}}</div>
            <!-- <div v-if="show" class="fade-content animated" :key="2"></div> -->
            </template>
        </transition-group>
    </div>
</template>

<script>

    export default {
        name: 'ToolHmi',
        components: {
        },
        data() {
            return {
                show:false,
                nowShow:"",
                list:["apple","banana"]
               
            }
        },
        computed:{
            lists(){
                var arr=[];
                this.list.forEach(item=>item.indexOf(this.nowShow)!=-1 &&arr.push(item))
                if (arr.length!=0) {
                    
                    console.log(arr,"aaaaa")
                }
                return arr;
            }
        },

        mounted() {

        },
        methods: {
            enter(el){
                el.style.background="yellow";
                // console.log(el,"el")
            }
     
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .hmi {
        width: 100%;
        height: 100%;
        // overflow: auto;
        // padding: 44px 0;
        .fade-enter-active,.fade-leave-active{
            transition: 1s all ease;

        }
        .fade-enter-active{
            width: 150px;
            height: 150px;
            opacity: 1;
        }
        .fade-leave-active{
            width: 50px;
            height: 50px;
            opacity: 0;
        }
        .fade-enter{
            width: 50px;
            height: 50px;
            opacity: 0;
        }
        .fade-content{
            height: 150px;
            width: 150px;
            background: black;
            display: inline-block;
        }
        button{
            margin-top: 200px;
        }
    }
</style>
