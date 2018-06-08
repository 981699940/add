<template>
    <div class="position">
        <template v-if="currentPage ==1">
            <div class="time-set">
                <span>{{time}}</span>
                <span class="button-start" @click.stop="runTime">开始</span>
            </div>
        </template>
        <template v-if="currentPage ==2">
            <div class="test-flexs">
                <div class="calc"></div>
            </div>
        </template>
        <template v-if="currentPage ==3">
            <div class="test-select">
                <!-- <el-select v-model="value" placeholder="Select" @change="change" multiple> -->
                <el-select v-model="value" placeholder="Select" @change="change" multiple>

                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

                        <!-- <span style="float:right">{{item.label}}</span> -->
                        <span class="txt-span">{{item.label}}</span>

                        <span style="float:left;font-size:24px;">☐</span>
                    </el-option>
                </el-select>

            </div>
        </template>
        <template v-if="currentPage ==4">
            <div class="hell">
                <!-- <img src="../../assets/img/test.jpg" > -->
                <input type="file" id="files" multiple @change="getFile">

            </div>
        </template>
        <template v-if="currentPage ==5">
            <div ref="msgDiv">{{msg}}</div>
            <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
            <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
            <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
            <button @click="changeMsg">
                Change the Message
            </button>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            time: 60,
            options: [
                {
                    value: "选项1",
                    label: "黄金糕"
                },
                {
                    value: "选项2",
                    label: "双皮奶"
                },
                {
                    value: "选项3",
                    label: "蚵仔煎"
                },
                {
                    value: "选项4",
                    label: "龙须面"
                },
                {
                    value: "选项5",
                    label: "北京烤鸭"
                }
            ],
            value: "",

            msg: "Hello Vue.",
            msg1: "",
            msg2: "",
            msg3: ""
        };
    },
    watch: {
        $route: function(val) {
            this.currentPage = val.query.position || 0;
        }
    },
    mounted() {
        this.currentPage = this.$route.query.position || 0;
    },
    methods: {
        runTime() {
            console.log(this.time, "ttt");
            if (this.time != 60) return;
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
        },
        change() {
            console.log(this.value);
        },
        // currentPage4
        getFile(event) {
            console.log(event.target.files, "aaaaaaaa");
            var files = event.target.files;
            for (var i = 0; i < files.length; i++) {
                // 文件类型为 image 并且文件大小小于 200kb
                if (
                    files[i].type.indexOf("image/") !== -1 &&
                    files[i].size < 204800
                ) {
                    console.log(files[i].name);
                }
            }
        },
        // currentPage 5
        changeMsg() {
            this.msg = "Hello world.";
            this.msg1 = this.$refs.msgDiv.innerHTML;
            this.$nextTick(() => {
                this.msg2 = this.$refs.msgDiv.innerHTML;
            });
            this.msg3 = this.$refs.msgDiv.innerHTML;
            //在回调中获取更新后的 DOM
        }
    }
};
</script>
<style lang="scss">
.time-set {
    span {
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
.test-flexs {
    margin-top: 40px;
    width: 800px;
    height: 800px;
    background: black;
    .calc {
        width: calc(100% - 20px);
        margin-left: 10px;
        background: blue;
        height: 100%;
    }
}
.test-select {
}
.el-select-dropdown {
    .el-select-dropdown__item {
        padding: 0 36px;
        &.selected {
            background-color: #e26829;
            color: #e26829 !important;
        }
        .txt-span {
            margin-left: 16px;
        }
        &::after {
            position: absolute;
            left: 40px;
            font-family: element-icons;
            // content: "\E611";
            font-size: 12px;
            font-weight: 700;
            top: 2px;
            // display: block;
        }
    }
}
.hell {
    width: 500px;
    height: 500px;
    // background: #1c0050;
    background: grey;

    padding: 40px;
    // img{
    //     width: 100px;
    //     height: 100px;
    //     border-radius: 25px;
    // }
}
</style>


  