<template>
    <div class="hmi" @click="fffff('case1')">
        
    </div>
</template>

<script>

    export default {
        name: 'ToolHmi',
        components: {
        },
        data() {
            return {
                hub:{
                    case1:{parent:'a',child:'aa'},
                    case2:{parent:'b',child:'bb'},
                    case3:{parent:'c',child:'cc'},
                },
                a:{
                    aa:'eeeeee'
                },
                b:{
                    bb:'eeeeee'
                },
                c:{
                    cc:'eeeeee'
                }
               
            }
        },

        mounted() {

        },
        methods: {
            fffff(type){
                this[this.hub[type].parent][this.hub[type].child] = 'aaa'
                console.log(this.a.aa) 
            }
     
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .hmi {
        width: 100px;
        height: 100px;
        overflow: auto;
        padding: 44px 0;
        cursor: pointer;
        background: yellow;
        
    }
</style>
