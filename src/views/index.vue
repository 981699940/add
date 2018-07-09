<template>
    <div class="hello">
        <div class="cartoon">
            <router-link v-for="item in routerLink" class="tssss"
                         :to="item.to"
                         :key="item.to"
                         tag="span">{{item.to}}</router-link>
            <span class="high-light">普通路由跳转</span>
        </div>
        <router-link v-for="book in bookList"
                     :to="{name:'Test',params:{id:book.id}}"
                     :key="book.id">
            <span class="book-name">{{book.name}}</span>
        </router-link> <span class="high-light">动态路由跳转</span>(区别前者:有具体页面  区别后者?xxx=aa)
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    data() {
        return {
            routerLink: [
                { to: "goods" },
                { to: "seller" },
                { to: "ratings" },
                { to: "left" },
                { to: "center" },
                { to: "right" }
            ],
            bookList: [
                { id: 1, name: "cun" },
                { id: 2, name: "don" },
                { id: 3, name: "ken" }
            ]
        };
    }
};
</script>
<style>
* {
    font-size: 16px;
}
.high-light{
    background-color: chocolate;
}
.hello {
    margin-top: 20px;
}
.cartoon {
    margin-left: 20px;
}
span.tssss {
    margin-right: 10px;
    cursor: pointer;
}
.book-name{
    padding-left: 5px;
}
.router-link-active {
    background-color: green;
    color: white;
}
</style>

