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
                <div class="absolute"></div>
                <el-select v-model="value" placeholder="Select" @change="change" multiple>

                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">

                        <!-- <span style="float:right">{{item.label}}</span> -->
                        <span class="txt-span">{{item.label}}</span>

                        <span style="float:left;font-size:24px;">☐</span>
                    </el-option>
                </el-select>
                <br>
                <div class="item-list">
                    <template v-for="item in addList">
                        <span>{{item.label}}</span> <br>
                    </template>
                </div>

            </div>
            <div class="test-dialog" @click="showDialog" style="width:200px;height:50px;background:black;"></div>
            <el-dialog title="hello kitty" :visible.sync="dialogVisible" custom-class="auth-dialog" :show-close="false">
                <!-- 需要优化部分 -->
                <!-- <el-checkbox-group v-model="checkList">
                    <el-checkbox v-for="item in options" :key="item.label" :label="item.value" @change="changeCheckBox">{{item.label}}</el-checkbox>
                </el-checkbox-group> -->
                <el-checkbox-group v-model="checkAddList">
                    <el-checkbox v-for="item in options" :key="item.label" :label="item" @change="changeCheckBox">{{item.label}}</el-checkbox>
                </el-checkbox-group>

                <!-- <el-button @click="dialogClose">取消</el-button>
                <el-button @click="saveAndClose">确认</el-button> -->
                <el-button @click="dialogClose(1)">取消</el-button>
                <el-button @click="dialogClose(2)">确认</el-button>



            </el-dialog>
            <div class="item-list">
                <template v-for="item in checkAddList">
                    <span>{{item.label}}</span> <br>
                </template>
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
        <template v-if="currentPage ==6">

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
                    value: 0,
                    label: "黄金糕",
                    tof:true
                },
                {
                    value: 1,
                    label: "双皮奶",
                    tof:true
                },
                {
                    value: 2,
                    label: "蚵仔煎",
                    tof:true
                },
                {
                    value: 3,
                    label: "龙须面",
                    tof:false
                },
                {
                    value: 4,
                    label: "北京烤鸭",
                    tof:true
                }
            ],
            value: [0, 1, 2, 3, 4],

            msg: "Hello Vue.",
            msg1: "",
            msg2: "",
            msg3: "",
            addList: [],
            dialogVisible: false,
            checkList: [0, 1, 2, 3, 4],
            checkAddList: [],
            forClose: []
        };
    },
    watch: {
        $route: function(val) {
            this.currentPage = val.query.position || 0;
        }
    },
    mounted() {
        this.currentPage = this.$route.query.position || 0;
        this.addList = this.options;
        this.checkAddList = this.options;
        this.forEvery();

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
            // this.$nextTick(() => {
            //     if (this.value.length == 5) {
            //         this.addList = this.options;
            //     }
            // });

            console.log(this.value, "value");
            this.addList = this.value.map(item => this.options[item]);
            this.addList.sort((a, b) => a.value - b.value);
            // var aa = [
            //     { time: 22, val: 22 },
            //     { time: 11, val: 11 },
            //     { time: 33, val: 33 },
            //     { time: 44, val: 44 }
            // ];
            // aa.sort(function(a, b) {
            //     return a.time > b.time;
            // });//sort函数 如果a-b小于 0 a会排在b的前面
            // console.log(aa);
        },

        //需要优化部分 之前的label是item.value 还要进行转换成数组对象  现在label用item
        // showDialog() {
        //     this.dialogVisible = true;
        //     this.forClose = this.checkList;
        //     console.log(this.forClose,"forclose")
        // },
        // changeCheckBox() {
        //     console.log(this.checkList, "aaaa");
        //     this.checkAddList = this.checkList.map(item => this.options[item]);
        //     this.checkAddList.sort((a, b) => a.value - b.value);
        // },
        // dialogClose() {
        //     this.checkList = this.forClose;
        //     console.log(this.forClose,"forclose close");
        //     this.checkAddList = this.checkList.map(item => this.options[item]);
        //     this.checkAddList.sort((a, b) => a.value - b.value);
        //     this.dialogVisible = false;
        // },
        // saveAndClose() {
        //     this.dialogVisible = false;
        // },

        showDialog() {
            this.dialogVisible = true;
            this.forClose = this.checkAddList;
            console.log(this.forClose, "forclose");
        },
        changeCheckBox() {
            this.checkAddList.sort((a, b) => a.value - b.value);
            console.log(this.checkAddList, "aaaa");
        },
        dialogClose(index) {
            if(index==1){this.checkAddList = this.forClose;}
            this.dialogVisible = false;
        },
        //测试every的用法 
        forEvery(){
            this.forevery=this.options.every(item=>item.tof);
            console.log(this.forevery,"forevery")

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
        //currentpage 6
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
    position: relative;
    z-index: 10;
    .absolute {
        position: absolute;
        height: 30px;
        width: 194px;
        border: 1px solid black;
        border-radius: 25px;
        background: #fff;
    }
    .el-select {
        opacity: 0;
        .el-select__tags {
            span {
                display: none;
            }
        }
        .el-input {
            height: 30px;
            .el-input__inner {
                height: 30px !important;
            }
        }
    }
    .item-list {
        margin-left: 300px;
    }
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
.auth-dialog {
    width: 700px;
    .el-dialog__body {
        padding: 20px 40px 10px 40px;
        .el-checkbox-group {
            overflow: hidden;
            .el-checkbox {
                width: 50%;
                margin: 0;
                float: left;
                line-height: 40px;
                text-overflow: ellipsis;
                overflow: hidden;
            }
        }
    }
}
.el-dialog {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background: #353945;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    margin-bottom: 50px;
}

.el-dialog--tiny {
    width: 30%;
}

.el-dialog--small {
    width: 50%;
}

.el-dialog--large {
    width: 90%;
}

.el-dialog--full {
    width: 100%;
    top: 0;
    margin-bottom: 0;
    height: 100%;
    overflow: auto;
}

.el-dialog__wrapper {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    overflow: auto;
    margin: 0;
}

.el-dialog__header {
    padding: 20px;
    background: #2b2f3b;
}

.el-dialog__headerbtn {
    float: right;
    background: transparent;
    border: none;
    outline: none;
    padding: 0;
    cursor: pointer;
}

.el-dialog__headerbtn .el-dialog__close {
    color: rgb(217, 202, 191);
}

.el-dialog__headerbtn:focus .el-dialog__close,
.el-dialog__headerbtn:hover .el-dialog__close {
    color: #e26829;
}

.el-dialog__title {
    line-height: 1;
    font-size: 16px;
    font-weight: 700;
    color: #ffffff;
}

.el-dialog__body {
    padding: 30px 20px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
}

.el-dialog__footer {
    padding: 10px 20px 15px;
    text-align: right;
    box-sizing: border-box;
}

.dialog-fade-enter-active {
    animation: dialog-fade-in 0.3s;
}

.dialog-fade-leave-active {
    animation: dialog-fade-out 0.3s;
}
</style>


  