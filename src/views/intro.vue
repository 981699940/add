<template>
    <div class="intro" @click.stop="tabPage()">
        这是一段介绍文字,点击加载更多
    </div>
</template>
<script>
export default {
    data() {
      return {};
    },
    methods:{
        tabPage(){
            this.$router.push(`/index`)

        }
    }
};
</script>
<style>
.intro{
    cursor: pointer;
}

</style>