<template>
    <div class="theme-container">
        <div class="theme-top">
        </div>
            <div class="theme" ref="theme">
                <div class="theme-item"
                    v-for="(item,index) in themeList"
                    :key="index"
                    >
                   {{item}}
                </div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
          themeList:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
          myTitle: '标题'
        };
    },
    // metaInfo: {
    //     title: this.myTitle,
    //     titleTemplate: '%s - by vue-meta',
    //     htmlAttrs: {
    //     lang: 'zh'
    //     },
    //     script: [{innerHTML: 'console.log("hello hello!")', type: 'text/javascript'}],
    //     __dangerouslyDisableSanitizers: ['script'],
    //     meta:[
    //         {
    //             name: 'keyWords',
    //             content: 'My Example App'
    //         },
    //         {
    //             property: "og:description",
    //             content: 'My Example App'
    //         },
    //     ]
    // },
    head: {
         meta:[
            {
                name: 'keyWords',
                content: 'My Example App'
            },
            {
                property: "og:description",
                content: 'My Example App'
            },
        ]
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    methods:{
        handleScroll(e) {
            // alert(1)
            var t = document.documentElement.scrollTop || document.body.scrollTop;  //离上方的距离
            var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight; //可见宽度
            if (t >= document.documentElement.scrollHeight - h) {
                alert('触发了')
            }
        }
    }
};
</script>
<style scoped lang='scss'>
.theme-container {
    height: 100%;
    // over-flow: auto;  
    // -webkit-overflow-scrolling: touch; 
    // overflow: hidden;
    position: relative;
    .theme-top {
        background: #fff;
        padding: 0 20px 0 30px;
        height: 54px;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        position: fixed;
        overflow: hidden;
    }
    .theme-wrapper {
        // position: fixed;
        // top: 100px;
        position: relative;
        top: 54px;
        right: 0;
        bottom: 0;
        left: 0;
        overflow-y: scroll;
    }
    .theme {
        position: relative;
        top: 54px;
        font-size: 0;
        .theme-item{
            height: 90px;
        }
        
    }
}
</style>