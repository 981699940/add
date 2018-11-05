<template>
    <div class="hello" v-html="v">
        
    </div>

</template>
<script>
export default {
    data() {
        return {
           content:'发动最后一次的宣传,看看是否连接可以点击了 ,如果不行,找我,如果行,就不要找我了!http://www.5usport.com 我的http://app.55usport.com'
           ,v:''
        };
    },
    mounted() {
        this.link()
    },
    methods:{
        link(){
            let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-)+)/g;
            // console.log(reg.exec(this.content))
            // if(reg.exec(this.content)){

            // }
            let v = this.content.replace(reg, "<a href='$1$2'>$1$2</a>").replace(/\n/g, "<br />");
            console.log(v)
            this.v =v
        }
    }
};
</script>
<style scoped lang="scss">

</style>

