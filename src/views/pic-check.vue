<template>
    <!-- enlargeimg 只能pc端 而且不好用 -->
    <!-- vue-picture-preview 根本不好用 -->
    <div class="pic-check"
         id="pic-check">
        测试图片
        <div class="change"
             id="change">
            <!-- <vue-preview :slides="slide1" @close="handleClose" w='40px'></vue-preview> -->
            <!-- <img v-for="item in slide1"
                 :src="item.src"
                 :key="item.src">
            <img v-for="item in slide1"
                 :src="item.src"
                 :key="item.msrc">
            <img v-for="item in slide1"
                 :src="item.src"
                 :key="item.alt"> -->
            <!-- <img v-for="item in slide1" :src="item.src" :key="item.alt">
            <img v-for="item in slide1" :src="item.src" :key="item.alt">
            <img v-for="item in slide1" :src="item.src" :key="item.alt">
            <img v-for="item in slide1" :src="item.src" :key="item.alt">
            <img v-for="item in slide1" :src="item.src" :key="item.alt">
            <img v-for="item in slide1" :src="item.src" :key="item.alt"> -->
            <br>
            <br>
            <br>
            <div class="test"
                 id="test">测试打印指定区域的内容</div>
        </div>
        <input type="text" style="margin-left:140px;border:1px solid #000;" v-model="inputContent">
        <div class="test-print"
             @click="PrintElem('test-app')">test-print</div>
        <div class="text"
             style="position:fixed;bottom:0;right:0"
             @click="toTop()">hh</div>
        <div class="app" id="test-app">
            <table cellpadding="0"
                   cellspacing="0"
                   align="center">
                <caption>
                    <strong>机器设备用户注册申请表</strong>
                </caption>
                <tr>
                    <td rowspan="9"
                        class="title">使用单位</td>
                    <td colspan="2">设备所在单位</td>
                    <td colspan="6">{{inputContent}}</td>
                </tr>
                <tr>
                    <td colspan="2">设备种类</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">设备厂家</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">设备编号</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">设备IP地址</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">设备MAC地址</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">设备所在地</td>
                    <td colspan="6"></td>
                </tr>
                <tr>
                    <td colspan="2">联系人</td>
                    <td colspan="2"></td>
                    <td colspan="2">联系电话</td>
                    <td colspan="2"></td>
                </tr>
                <tr>
                    <td colspan="2"
                        class="ht-80">审核</td>
                    <td colspan=6>
                        <div class="ht-80 wrapper">
                            <div class="bottom">
                                <span>签名:</span>
                                <span class="write"></span>
                                <span>日期:</span>
                                <span class="write"></span>
                            </div>

                        </div>
                    </td>
                </tr>

                <tr>
                    <td class="title">市级审核</td>
                    <td colspan="8">
                        <div class="ht-117 wrapper">
                            <div class="bottom">
                                <span>签名:</span>
                                <span class="write"></span>
                                <span>日期:</span>
                                <span class="write"></span>
                            </div>

                        </div>
                    </td>
                </tr>
                <tr>
                    <td rowspan="4"
                        class="bd-bt title">省厅审核</td>
                    <td colspan="1"
                        class="ht-80 half">初步审核</td>
                    <td colspan="7">
                        <div class="ht-80 wrapper">
                            <div class="bottom">
                                <span>签名:</span>
                                <span class="write"></span>
                                <span>日期:</span>
                                <span class="write"></span>
                            </div>

                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="1"
                        class="ht-80">领导审批</td>
                    <td colspan="7">
                        <div class="ht-80 wrapper">
                            <div class="bottom">
                                <span>签名:</span>
                                <span class="write"></span>
                                <span>日期:</span>
                                <span class="write"></span>
                            </div>

                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="1">操作人</td>
                    <td colspan="1"></td>
                    <td colspan="1">授权时间</td>
                    <td colspan="4"></td>
                </tr>
                <tr>

                    <td colspan="1">授权码</td>
                    <td colspan="7"></td>
                </tr>
            </table>

        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            files: [
                {
                    path:
                        "http://img4q.duitang.com/uploads/item/201311/01/20131101141757_tunaj.png"
                },
                {
                    path:
                        "http://img5.duitang.com/uploads/item/201503/22/20150322122457_EQ3NP.thumb.700_0.jpeg"
                },
                {
                    path:
                        "http://tupian.enterdesk.com/uploadfile/2013/1219/20131219053302481.jpg"
                }
            ],
            imgs: [
                "http://covteam.u.qiniudn.com/ka2.jpg",
                "http://covteam.u.qiniudn.com/poster.png"
            ],
            slide1: [
                {
                    src:
                        "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
                    msrc:
                        "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
                    alt: "picture1",
                    title: "Image Caption 1",
                    w: 1200,
                    h: 0
                },
                {
                    src:
                        "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
                    msrc:
                        "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
                    alt: "picture2",
                    title: "Image Caption 2",
                    w: 1200,
                    h: 0
                }
            ],
            inputContent:''
        };
    },
    methods: {
        handleClose() {
            console.log("close event");
        },
        toTop() {
            // document.body.scrollTop = 0
            // document.documentElement.scrollTop = 0

            let timer = setInterval(function() {
                var scrollTop =
                    document.documentElement.scrollTop ||
                    document.body.scrollTop;
                // console.log(document.documentElement.scrollTop,document.body.scrollTop)
                var ispeed = Math.floor(-scrollTop / 6);
                // console.log(ispeed)
                if (scrollTop == 0) {
                    clearInterval(timer);
                }

                // document.body.scrollTop
                document.documentElement.scrollTop = scrollTop + ispeed;
            }, 30);
        },
        PrintElem(elem) {
            let file = `
                .app {
                    display: block;
                    padding: 5px 20px 20px 20px;
                    min-width: 940px;
                    font-size: 18px;
                    background-color: #fff;
                    font-family: PingFang SC, PingFangSC-Semibold, Helvetica Neue, Helvetica,
                        Nimbus Sans L, Arial, Liberation Sans, Hiragino Sans GB,
                        Source Han Sans CN, Source Han Sans SC, Microsoft YaHei, SimHei,
                        sans-serif;
                }

                * {
                    box-sizing: border-box;
                }

                .border {
                    border-top: 1px solid #000;
                    border-bottom: 1px solid #000;
                }

                table {
                    border: none;
                    table-layout: fixed;
                    word-break: break-all;
                }

                /* width: 110px; */
                th {
                    text-align: center;
                    padding: 5px;
                    height: 40px;
                    border-top: 1px solid #000;
                    border-left: 1px solid #000;
                }

                tr td:last-child {
                    border-right: 1px solid #000;
                }

                tr:last-child th {
                    border-bottom: 1px solid #000;
                }

                tr:last-child td {
                    border-bottom: 1px solid #000;
                }

                .bd-bt {
                    border-bottom: 1px solid #000;
                }

                td.half {
                    width: 80px;
                }

                td {
                    width: 100px;
                    text-align: center;
                    border-top: 1px solid #000;
                    border-left: 1px solid #000;
                }

                .title {
                    /* text-orientation:vertical-lr; */
                    word-wrap: break-word;
                    width: 30px;
                    text-align: center;
                    font-size: 21px;
                }

                .wd-110 {
                    width: 110px;
                }

                .wd-55 {
                    width: 55px;
                }

                .ht-80 {
                    height: 80px;
                }
                .ht-117 {
                    height: 117px;
                }

                div.wrapper {
                    width: 100%;
                    /* height: 100%; */
                    position: relative;
                }

                .fx {
                    display: flex;
                    justify-content: flex-end;
                    align-items: flex-end;
                }

                span {
                    color: #000;
                }

                div.bottom {
                    position: absolute;
                    bottom: 10px;
                    right: 0;
                }
                span {
                    vertical-align: middle;
                }
                span.write {
                    display: inline-block;
                    width: 80px;
                    height: 22px;
                    font-size: 12px;
                }`
            var mywindow = window.open("", "PRINT", "height=400,width=600");
            mywindow.document.write(
                "<html><head><title>" + document.title + "</title>"
            );
            // mywindow.document.write(
            //     "<link href='/src/assets/style/test.css' style='text/css'  rel='stylesheet'>" 
            // );
            mywindow.document.write(
                `<style type="text/css">
                    ${file}
                </style>` 
            );
            mywindow.document.write("</head><body >");
            mywindow.document.write(document.getElementById(elem).innerHTML);
            console.log(document.getElementById(elem));
            mywindow.document.write("</body></html>");

            // var link =document.createElement('link');
            // link.type = 'text/css'
            // link.rel = 'stylesheet';
            // link.lang = 'scss'
            // link.href = '/src/assets/style/test.scss'
            // var head = document.getElementsByTagName('head')[0];
            // head.appendChild(link);
            
            mywindow.document.close(); // necessary for IE >= 10
            mywindow.focus(); // necessary for IE >= 10*/

            mywindow.print();
            mywindow.close();

            return true;
        }
    },
    components: {}
};
</script>
<style scoped lang='scss'>
.change {
    width: 50px;
    height: 50px;
    background-color: #000;
}
.app {
    display: none;
}
@media print {
    .app {
        display: block;
        padding: 5px 20px 20px 20px;
        min-width: 940px;
        font-size: 18px;
        background-color: #fff;
        font-family: PingFang SC, PingFangSC-Semibold, Helvetica Neue, Helvetica,
            Nimbus Sans L, Arial, Liberation Sans, Hiragino Sans GB,
            Source Han Sans CN, Source Han Sans SC, Microsoft YaHei, SimHei,
            sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    .border {
        border-top: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    table {
        border: none;
        table-layout: fixed;
        word-break: break-all;
    }

    /* width: 110px; */
    th {
        text-align: center;
        padding: 5px;
        height: 40px;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
    }

    tr td:last-child {
        border-right: 1px solid #000;
    }

    tr:last-child th {
        border-bottom: 1px solid #000;
    }

    tr:last-child td {
        border-bottom: 1px solid #000;
    }

    .bd-bt {
        border-bottom: 1px solid #000;
    }

    td.half {
        width: 80px;
    }

    td {
        width: 100px;
        text-align: center;
        border-top: 1px solid #000;
        border-left: 1px solid #000;
    }

    .title {
        /* text-orientation:vertical-lr; */
        word-wrap: break-word;
        width: 30px;
        text-align: center;
        font-size: 21px;
    }

    .wd-110 {
        width: 110px;
    }

    .wd-55 {
        width: 55px;
    }

    .ht-80 {
        height: 80px;
    }
    .ht-117 {
        height: 117px;
    }

    div.wrapper {
        width: 100%;
        /* height: 100%; */
        position: relative;
    }

    .fx {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
    }

    span {
        color: #000;
    }

    div.bottom {
        position: absolute;
        bottom: 10px;
        right: 0;
    }
    span {
        vertical-align: middle;
    }
    span.write {
        display: inline-block;
        width: 80px;
        height: 22px;
        font-size: 12px;
    }
}
</style>