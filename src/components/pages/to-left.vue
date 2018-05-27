<template>
    <div class="left">
        <span>{{time}}</span>
        <div class="button-start" @click.stop="runTime()" >开始</div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      time: 60,
      flag: ""
    };
  },
  methods: {
    runTime() {
      let countdown = () => {
        if (this.time !== -1) {
            this.flag = setTimeout(() => {
            this.time--;
            countdown();
          }, 1000);
        } else {
          this.time = 60;
          clearTimeout(this.flag);
        }
      };
      countdown();
    }
  }
};
</script>
<style lang="scss">
.left {
  div {
    &.button-start {
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