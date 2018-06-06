<template>
    <div class="hello">
        <div class="cartoon">
            <router-link to="goods">goods</router-link>
            <router-link to="seller">seller</router-link>
            <router-link to="ratings">ratings</router-link>
            <router-link to="left">left</router-link>
            <router-link to="center">center</router-link>
            <router-link to="right">right</router-link>
        </div>
        <router-view></router-view>
    </div>

</template>
<script>
export default {
    data() {
        return {};
    }
};
</script>
<style>
* {
    font-size: 16px;
}
.hello {
    margin-top: 20px;
}
.cartoon {
    margin-left: 20px;
}
.router-link-active {
    background-color: green;
    color: white;
}
</style>

