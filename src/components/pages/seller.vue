<template>
    <div>
        <div>{{this.$route.path}}</div>
        <div class="btn-audio"
             @click.stop="play"></div>
        <audio id="audio"
               ref='player'
               @timeupdate="myFunction">

            <source :src="url">
        </audio>
        <span>{{parseInt(lestTime) }}</span>
        <span>{{dTime }}</span>
        <span>{{tiem}}</span>
        <!-- <span>{{setTimeout(this.lestTime,100) }}</span> -->
        <div class="test-bus"
             @click="takeBus($event)">
            bus-begin
        </div>
    </div>
</template>
<script>
import Bus from "../bus.js";
export default {
    data() {
        return {
            url:
                "https://static.innotick.com/smartwork/file/568e134a1f26099108c4f4fd0cfb1c48f41fb12adf8f0a8771ca2166e2729739.mp3",
            isPlaying: true,
            lestTime: 0,
            dTime: 0,
            tiem: 0
        };
    },
    mounted() {},
    methods: {
        play() {
            // this.lestTime = audio.duration;
            // this.ddd = audio.currentTime;
            // if (audio.paused) {
            //     audio.play();
            // } else {
            //     audio.pause();
            // }
            let audi = this.$refs.player;
            //等同于 document.querySelector("#audio")
            //document.getElementsByClassName(name)[0] 因为class不唯一 返回的是数组 这里name是变量
            //当ref和v-for一起使用时,获取到的引用是一个数组
            //this.$refs 是打印所有绑定了ref的标签  (如我input audio 都绑定了 打印该值是个object 不同标签是不同成员  但相同标签会归纳在一起成为成员数组)
            this.lestTime = audi.duration;
            this.ddd = audi.currentTime;
            if (audi.paused) {
                audi.play();
            } else {
                audi.pause();
            }
        },
        myFunction() {
            var audio = document.querySelector("#audio");
            this.tiem = audio.currentTime;
        },
        takeBus(event) {
            console.log(event.target, "aaa");
            Bus.$emit("getTarget", event.target);
            Bus.$emit("say-hello", "world");
        }
    }
};
</script>
<style>
.btn-audio {
    width: 110px;
    height: 32px;
    background: url(../../assets/img/img-voice.png) no-repeat;
    background-size: 100% 100%;
}
.test-bus {
    cursor: pointer;
}
</style>

