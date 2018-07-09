<template>
    <div class="test-aa">
        <router-link v-for="book in bookList"
                     :to="{name:'Test',params:{id:book.id}}"
                     :key="book.id">
            <span>{{book.name}}</span>
        </router-link> <span class="high-light">动态路由跳转</span>       
        <div class="path">
            <p>路由名:{{$route.name}} 路由路径:{{$route.path}}</p>
            <p>路径id:{{$route.params.id}}</p>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            bookList: [
                { id: 1, name: "cun" },
                { id: 2, name: "don" },
                { id: 3, name: "ken" }
            ]
        };
    },
    watch:{
        '$route' (to,from){
            console.log(to);
            console.log(from);
        }
    },
};
</script>
<style>
</style>