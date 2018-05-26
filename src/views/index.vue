<template>
  <div class="hello">
    <div>
      <router-link to="goods">goods</router-link>
      <router-link to="seller">seller</router-link>
      <router-link to="ratings">ratings</router-link>
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

