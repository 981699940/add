<template>
  <!-- <div>{{this.$route.path}}
    
  </div> -->
  <div>
    <div class="btn-audio" @click="play"></div>
      <audio id="audio">
        <source :src="url">
      </audio>
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
        if(audio.paused){
          audio.play();
        }else{
          audio.pause();
        }
    },
    
  }
};
</script>
<style>
.btn-audio{
        margin: 90px auto;
        width: 150px;
        height: 32px;
        background:url(../../assets/img-voice.png) no-repeat ;
        background-size:100% 100%;
    }
</style>

