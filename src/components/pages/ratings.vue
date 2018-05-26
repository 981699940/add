<template>
    <div>{{this.$route.path}}
        <template v-for="item in list">
            <ul>
                <!-- :class="classA ? 'class-a' : 'class-b' " -->
                <li :class="{'line': (item.message==='hello')}">{{item.message==="hello"}}</li>
                <!-- <li :class="['line-last-'+item.message]" >{{item.message}}</li> -->
            </ul>
        </template>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { message: "hello", type: true },
        { message: "hell", type: true },
        { message: "hel", type: false },
        { message: "he", type: true }
      ]
    };
  },
  computed: {
    test() {}
  }
};
</script>
<style>
.line-last-hello {
  color: blue;
}
.line {
  color: blue;
}
</style>
