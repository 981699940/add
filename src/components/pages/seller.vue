<template>
  <!-- <div>{{this.$route.path}}
    
  </div> -->
  <div>
    <div class="btn-audio" @click="play">
      <audio id="audio" controls>
        <source :src="url">
      </audio>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://static.innotick.com/smartwork/file/568e134a1f26099108c4f4fd0cfb1c48f41fb12adf8f0a8771ca2166e2729739.mp3",
        isPlaying: true,
    };
  },
  methods: {
    play() {
      var audio = document.querySelector("#audio");
      if (!this.isPlaying) {
        audio.play();
      }
    },
    stop() {
      var audio = document.querySelector("#audio");
      if (this.isPlaying) {
        audio.pause();
        audio.currenTime = 0;
      }
    }
  }
};
</script>
<style>
.btn-audio{
        margin: 90px auto;
        width: 186px;
        height: 186px;
        /* background:url(images/voice_stop.png) no-repeat center bottom;
        background-size:cover; */
        background: #000
    }
</style>
