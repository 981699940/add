<template>
    <div class="left">
        <span>{{time}}</span>
        <span class="button-start">开始</span>
    </div>
</template>
<script>
export default {
    data() {
      return {
          time:60,
      };
    },
    methods:{

    }
};
</script>
<style lang="scss">
.left{
    span{
        &.button-start{
            border: 1px solid red;
            padding: 2px 8px;
            color: red;
            cursor: pointer;
            margin-left: 10px;
            border-radius: 8px;
        }
    }
}

</style>