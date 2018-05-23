<template>
  <div class="hello">
    <div>
      <router-link to="/pages/goods">goods</router-link>
      <router-link to="/pages/seller">seller</router-link>
      <router-link to="/pages/ratings">ratings</router-link>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
export default {
  data(){
      return{
          msg:"hello tic"
      }
  }
}
</script>
<style>
.router-link-active{
  background-color: red;
}
</style>

