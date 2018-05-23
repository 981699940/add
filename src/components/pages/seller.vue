<template>
  <!-- <div>{{this.$route.path}}
    
  </div> -->
  <div>
    <div class="btn-audio" @click.stop="play"></div>
      <audio id="audio"  ref='player' @timeupdate="myFunction">
        <source :src="url">
      </audio>
      <span>{{parseInt(lestTime) }}</span>
      <!-- <span>{{ddd }}</span> -->
      <!-- <span>{{cTime }}</span>
      <span>{{dTime }}</span> -->
      <span>{{tiem}}</span>
      <!-- <span>{{setTimeout(this.lestTime,100) }}</span> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      url:
        "https://static.innotick.com/smartwork/file/568e134a1f26099108c4f4fd0cfb1c48f41fb12adf8f0a8771ca2166e2729739.mp3",
        isPlaying: true,
        lestTime:0,
        ddd:0,
        cTime:0,
        dTime:0,
        tiem:0
    };
  },
  mounted(){

    this.cTime = this.$refs.player.currentTime,

    this.dTime = this.$refs.player.duration

},
  methods: {
    play() {
      var audio = document.querySelector("#audio");
      this.lestTime = audio.duration
      this.ddd=audio.currentTime
        if(audio.paused){
          audio.play();
        }else{
          audio.pause();
        }
    },
    myFunction(){
      var audio = document.querySelector("#audio");
      console.log(audio.currentTime,"llllllll")
      this.tiem =audio.currentTime;
    }
    
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

