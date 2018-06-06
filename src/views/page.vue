<template>
    <div class="index">
        <div class="index-header">
            <div class="header-content">
                <h1>{{mapInfo[currentIndex].name}}自助机物联网检测平台</h1>
                <h2>2018-03-08 12:00</h2>
            </div>
        </div>
        <div class="index-body">
            <div class="body-left">
                <div class="statistics">
                    <h2>数据统计</h2>
                    <div class="statistics-content">
                        <div class="content-top">
                            <div class="content-top-left">
                                <span>正常机器(台)</span>
                                <span class="number">{{mapInfo[currentIndex].statistics.nomalNum}}</span>
                            </div>
                            <div class="content-top-right">
                                <img src="../assets/img/icon-statistics-top.png">
                            </div>
                        </div>
                        <div class="content-center">
                            <div class="content-center-left">
                                <span>故障机器(台)</span>
                                <span class="number">{{mapInfo[currentIndex].statistics.failNum}}</span>
                            </div>
                            <div class="content-center-right">
                                <img src="../assets/img/icon-statistics-center.png">
                            </div>
                        </div>
                        <div class="content-bottom">
                            <div class="content-bottom-left">
                                <span>维修机器(台)</span>
                                <span class="number">{{mapInfo[currentIndex].statistics.repairNum}}</span>
                            </div>
                            <div class="content-bottom-right">
                                <img src="../assets/img/icon-statistics-bottom.png">
                            </div>

                        </div>

                    </div>
                </div>
                <div class="rank">
                    <h2>排名</h2>
                    <div class="rank-content">
                        <div class="rank-content-wrapper">

                            <h3>本月故障排名</h3>
                            <div class="content-company" v-for="item in rankList">
                                <img :src="item.pic">
                                <span class="no">{{item.rankNo}}</span>
                                <span class="company">{{item.company}}</span>

                            </div>

                        </div>
                        <div class="rank-content-wrapper">
                            <h3 class="content-bottom-h3">本月处理效率排名</h3>
                            <div class="content-company" v-for="item in rankList">
                                <img :src="item.pic">
                                <span class="no">{{item.rankNo}}</span>
                                <span class="company">{{item.company}}</span>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="body-center">
                <div class="body-center-top">
                    <div class="real-time">
                        <span>实时使用数量(台)</span>
                        <div class="real-time-num">
                            <span v-if="mapInfo[currentIndex].realTimeNum.toString().length>=4">{{parseInt(mapInfo[currentIndex].realTimeNum%10000/1000)}}</span>
                            <span v-if="mapInfo[currentIndex].realTimeNum.toString().length>=3">{{parseInt(mapInfo[currentIndex].realTimeNum%1000/100)}}</span>
                            <span v-if="mapInfo[currentIndex].realTimeNum.toString().length>=2">{{parseInt(mapInfo[currentIndex].realTimeNum%100/10)}}</span>
                            <span v-if="mapInfo[currentIndex].realTimeNum.toString().length>=1">{{parseInt(mapInfo[currentIndex].realTimeNum%10)}}</span>
                        </div>
                        <span class="use-rate">可用率</span>
                        <span class="use-rate-num">{{mapInfo[currentIndex].useRate}}</span>
                    </div>
                    <div class="choose-city" :class="{active: flag}" @click.stop="flag = !flag">
                        <span class="selected-city">{{city}}</span>
                        <div class="option-city">
                            <div class="option-wrapper">
                                <template v-for="item in list">
                                    <span class="city" @click="changeCity(item)">{{item.name}}</span>
                                </template>
                            </div>

                        </div>
                    </div>

                </div>
                <div class="body-center-center">
                    <img :src="mapInfo[currentIndex].map">
                </div>
                <div class="body-center-bottom">
                    <div class="center-bottom-left">
                        <div class="user">
                            <span>当天使用人数</span>
                            <span class="user-num">{{mapInfo[currentIndex].userNum}}</span>
                        </div>
                        <div class="boundary"></div>
                        <div class="average">
                            <span>平均使用时长</span>
                            <span class="average-time">{{mapInfo[currentIndex].averageTime}}</span>

                        </div>

                    </div>
                    <div class="center-bottom-right">
                        <div class="dot-nomal"></div>
                        <span>正常</span>
                        <div class="dot-fail"></div>
                        <span>故障</span>
                        <div class="dot-repair"></div>
                        <span>维修</span>
                    </div>

                </div>

            </div>
            <div class="body-right">
                <div class="response-rank">
                    <h2>平均处理时间排名</h2>
                    <div class="response-rank-content">
                        <div class="content-top">
                            <div class="content-top-title">
                                <span>响应时间</span>
                                <img src="../assets/img/icon-response.png">
                            </div>
                            <div class="wrapper">
                                <template v-for="item in mapInfo[currentIndex].responseRank">
                                    <div class="content-top-wrapper">
                                        <span>{{item.company}}</span>
                                        <div class="response-time">
                                            <div class="response-time-display"></div>
                                            <span>{{item.time}}</span>
                                        </div>
                                    </div>
                                </template>

                            </div>

                        </div>
                        <div class="content-bottom">
                            <div class="content-bottom-title">
                                <span>处理时间</span>
                                <img src="../assets/img/icon-operation.png">
                            </div>
                            <div class="wrapper">
                                <template v-for="item in mapInfo[currentIndex].responseRank">
                                    <div class="content-bottom-wrapper">
                                        <span>{{item.company}}</span>
                                        <div class="operation-time">
                                            <div class="operation-time-display"></div>
                                            <span>{{item.time}}</span>
                                        </div>
                                    </div>
                                </template>

                            </div>

                        </div>
                    </div>

                </div>
                <div class="real-time-log">
                    <h2>实时日志</h2>
                    <div class="real-time-log-content">
                        <div class="log" v-for="item in mapInfo[currentIndex].logList">
                            <div class="dot" :class="['dot-'+item.type]"></div>
                            <span class="type">{{item.type | logType}}</span>
                            <div class="block">
                                <span class="company">{{item.robot}}</span>
                                <span class="time">{{item.time}}</span>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {
            rankList: [
                {
                    rankNo: 1,
                    company: "河北航信仪器制造有限公司",
                    pic: require("../assets/img/icon-company1.png")
                },
                {
                    rankNo: 2,
                    company: "深圳华视电子读写设备有限公司",
                    pic: require("../assets/img/icon-company2.png")
                },
                {
                    rankNo: 3,
                    company: "深圳市雄帝科技股份有限公司",
                    pic: require("../assets/img/icon-company3.png")
                }
            ],
            city: "选择城市",
            list: [
                { name: "杭州市", id: 1 },
                { name: "宁波市", id: 2 },
                { name: "温州市", id: 3 },
                { name: "绍兴市", id: 4 },
                { name: "湖州市", id: 5 },
                { name: "嘉兴市", id: 6 },
                { name: "金华市", id: 7 },
                { name: "衢州市", id: 8 },
                { name: "舟山市", id: 9 },
                { name: "台州市", id: 10 },
                { name: "丽水市", id: 11 }
            ],
            flag: false,
            mapInfo: [
                {
                    id: 0,
                    realTimeNum: 780,
                    useRate: "92%",
                    userNum: 314,
                    averageTime: "10小时",
                    name: "浙江省",
                    map: require("../assets/img/icon-zhejiang.png"),
                    logList: [
                        //type : 1 正常     2.故障       3.维修
                        {
                            type: "2",
                            robot: "杭州市西湖区公安分局出入境1号签注机",
                            time: "12:10"
                        },
                        {
                            type: "2",
                            robot: "杭州市西湖区公安分局出入境1号电脑",
                            time: "12:12"
                        },
                        {
                            type: "3",
                            robot: "杭州市拱墅区公安分局出入境1号电脑",
                            time: "12:12"
                        },
                        {
                            type: "3",
                            robot: "温州市瓯海区公安分局出入境1号自助填表机",
                            time: "09:20"
                        },
                        {
                            type: "2",
                            robot: "杭州市上城区公安分局出入境1号自助填表机",
                            time: "06:20"
                        },
                        {
                            type: "1",
                            robot: "绍兴市越城区公安分局出入境2号签注机",
                            time: "01:20"
                        }
                    ],
                    responseRank: [
                        { company: "浙江杭州某某厂家", time: "10分钟" },
                        { company: "浙江宁波某某厂家", time: "20分钟" },
                        { company: "浙江杭州某某厂家", time: "23分钟" }
                    ],
                    statistics: {
                        nomalNum: 750,
                        failNum: 10,
                        repairNum: 20
                    }
                },
                {
                    id: 1,
                    realTimeNum: 120,
                    useRate: "96%",
                    userNum: 80,
                    averageTime: "9.2小时",
                    name: "杭州市",
                    map: require("../assets/img/icon-hangzhou.png"),
                    logList: [
                        //type : 1 正常     2.故障       3.维修
                        {
                            type: "2 ",
                            robot: "杭州市西湖区公安分局出入境1号签注机",
                            time: "12:10"
                        },
                        {
                            type: "2",
                            robot: "杭州市西湖区公安分局出入境1号电脑",
                            time: "12:12"
                        },
                        {
                            type: "3",
                            robot: "杭州市拱墅区公安分局出入境1号电脑",
                            time: "12:12"
                        },
                        {
                            type: "3",
                            robot: "杭州市淳安县公安分局出入境1号自助填表机",
                            time: "09:20"
                        },
                        {
                            type: "2",
                            robot: "杭州市上城区公安分局出入境1号自助填表机",
                            time: "06:20"
                        },
                        {
                            type: "1",
                            robot: "杭州市上城 区公安分局出入境2号签注机",
                            time: "01:20"
                        }
                    ],
                    responseRank: [
                        { company: "浙江杭州某某厂家", time: "10分钟" },
                        { company: "浙江杭州某某厂家", time: "20分钟" },
                        { company: "浙江杭州某某厂家", time: "23分钟" }
                    ],
                    statistics: {
                        nomalNum: 100,
                        failNum: 10,
                        repairNum: 10
                    }
                }
            ],
            currentIndex: 0
        };
    },
    filters: {
        logType(index) {
            if (index == 1) {
                return "正常";
            }
            if (index == 2) {
                return "故障";
            }
            if (index == 3) {
                return "维修";
            }
        }
    },
    methods: {
        changeCity(city) {
            this.city = city.name;
            this.currentIndex = 1;
        }
    }
};
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    min-width: 1920px;
    min-height: 1080px;
    height: 100vh;
    background: #1c2573;
    overflow: hidden;
    .index-header {
        height: 109px;
        background-image: url("../assets/img/icon-header.png");
        background-size: 100% 100%;
        .header-content {
            text-align: center;
            color: #fff;
            padding-top: 30px;
            width: 25%;
            margin: 0 auto;
            h1 {
                font-size: 30px;
                margin-bottom: 3px;
            }
            h2 {
                font-size: 18px;
                color: #3cb8f1;
            }
        }
    }
    .index-body {
        display: flex;
        padding-left: 40px;
        padding-right: 40px;
        min-width: 1800px;
        .body-left {
            flex: 5;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .statistics {
                position: relative;
                top: -17px;
                h2 {
                    font-size: 20px;
                    color: #3cb8f1;
                }
                .statistics-content {
                    margin-top: 18px;
                    position: relative;
                    background-color: rgba(31, 63, 130, 0.37);
                    border: 1px solid rgba(77, 147, 241, 0.48);
                    width: 507px;
                    height: 443px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        background-color: #1c2573;
                        border-left: 1px solid rgba(77, 147, 241, 0.48);
                        width: 42px;
                        height: 44px;
                        transform: translateX(50%) translateY(50%) rotate(45deg);
                    }
                    .content-top {
                        display: flex;
                        justify-content: space-between;
                        flex: 1;
                        border-bottom: 1px solid rgba(77, 147, 241, 0.48);
                        .content-top-left {
                            display: flex;
                            flex-direction: column;
                            span {
                                font-size: 14px;
                                color: #ffffff;
                                font-weight: 500;
                            }
                            .number {
                                margin-top: 4px;
                                font-size: 26px;
                                color: #00ebff;
                            }
                        }
                        .content-top-right {
                            img {
                                width: 355px;
                                height: 109px;
                            }
                        }
                    }
                    .content-center {
                        display: flex;
                        padding-top: 20px;

                        justify-content: space-between;
                        flex: 1;
                        border-bottom: 1px solid rgba(77, 147, 241, 0.48);
                        .content-center-left {
                            display: flex;
                            flex-direction: column;
                            span {
                                font-size: 14px;
                                color: #ffffff;
                                font-weight: 500;
                            }
                            .number {
                                margin-top: 4px;
                                font-size: 26px;
                                color: #00ebff;
                            }
                        }
                        .content-center-right {
                            img {
                                width: 355px;
                                height: 109px;
                            }
                        }
                    }
                    .content-bottom {
                        display: flex;
                        justify-content: space-between;
                        flex: 1;
                        padding-top: 20px;
                        .content-bottom-left {
                            display: flex;
                            flex-direction: column;
                            span {
                                font-size: 14px;
                                color: #ffffff;
                                font-weight: 500;
                            }
                            .number {
                                margin-top: 4px;
                                font-size: 26px;
                                color: #00ebff;
                            }
                        }
                        .content-bottom-right {
                            img {
                                width: 355px;
                                height: 109px;
                            }
                        }
                    }
                }
            }
            .rank {
                margin-top: 15px;
                h2 {
                    font-size: 20px;
                    color: #3cb8f1;
                }
                .rank-content {
                    margin-top: 18px;
                    position: relative;
                    background-color: rgba(31, 63, 130, 0.37);
                    border: 1px solid rgba(77, 147, 241, 0.48);
                    width: 507px;
                    height: 374px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #1c2573;
                        border-bottom: 1px solid rgba(77, 147, 241, 0.48);
                        width: 46px;
                        height: 44px;
                        transform: translateX(50%) translateY(-50%)
                            rotate(45deg);
                    }
                    .rank-content-wrapper {
                        display: flex;
                        flex-direction: column;
                        h3 {
                            font-size: 14px;
                            color: #ffffff;
                            margin-bottom: 20px;
                            &.content-bottom-h3 {
                                margin-top: 30px;
                            }
                        }
                        .content-company {
                            margin-bottom: 10px;
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background: #ffffff;
                            position: relative;

                            background-image: linear-gradient(
                                -90deg,
                                rgba(31, 63, 130, 0.8) 0%,
                                rgb(30, 48, 120) 85%,
                                rgb(30, 48, 120) 100%
                            );
                            .no {
                                position: absolute;
                                background: #4cde26;
                                padding: 0 5px;
                                border-radius: 50%;
                                font-size: 10px;
                                color: #ffffff;
                                font-size: 10px;
                                bottom: 0px;
                                left: 24px;
                            }
                            &:first-of-type {
                                .no {
                                    background: #26c7de;
                                }
                            }
                            &:last-of-type {
                                .no {
                                    background: #deac26;
                                }
                            }

                            img {
                                height: 30px;
                                width: 30px;
                                border-radius: 50%;
                            }

                            .company {
                                font-size: 16px;
                                color: #ffffff;
                                margin-right: 20px;
                            }
                        }
                    }
                }
            }
        }
        .body-center {
            flex: 8;
            display: flex;
            flex-direction: column;
            margin: 29px 40px 0px;
            justify-content: space-between;
            position: relative;
            .body-center-top {
                display: flex;
                justify-content: space-between;
                .real-time {
                    display: flex;
                    flex-direction: column;
                    span {
                        font-size: 18px;
                        color: #3cb8f1;
                        font-weight: 500;
                    }
                    .real-time-num {
                        margin-top: 20px;
                        span {
                            background: #1f3f82;
                            font-size: 50px;
                            color: #ffffff;
                            padding: 0 11px;
                            margin-right: 14px;
                        }
                    }
                    .use-rate {
                        margin-top: 30px;
                        font-size: 18px;
                        color: #3cb8f1;
                    }
                    .use-rate-num {
                        font-size: 36px;
                        margin-top: 4px;
                        color: #ffffff;
                    }
                }
                .choose-city {
                    width: 164px;
                    height: 47px;
                    font-size: 18px;
                    color: #3cb8f1;
                    display: flex;
                    align-items: center;
                    background: #1f3f82;
                    padding: 10px 14px;
                    position: relative;
                    font-weight: 500;
                    border: 1px solid transparent;
                    cursor: pointer;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        background-color: #1c2573;
                        width: 28px;
                        height: 33px;
                        transform: translateX(50%) translateY(50%) rotate(40deg);
                    }
                    &::after {
                        content: "";
                        background-image: url("../assets/img/icon-select-down.png");
                        width: 11px;
                        height: 6px;
                        position: absolute;
                        background-size: 100% 100%;
                        right: 23px;
                    }
                    .selected-city {
                        color: #3cb8f1;
                        font-size: 18px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        -o-user-select: none;
                        user-select: none;
                    }
                    .option-city {
                        display: none;
                        // display: block;
                        position: absolute;
                        bottom: 0px;
                        left: -1px;
                        background: #1f3f82;
                        width: 164px;
                        .option-wrapper {
                            display: flex;
                            flex-direction: column;
                            min-height: 42px;
                            position: absolute;
                            background: #1f3f82;
                            width: 164px;
                            .city {
                                font-size: 16px;
                                color: #ffffff;
                                height: 42px;
                                line-height: 42px;
                                padding-left: 14px;
                                -webkit-user-select: none;
                                -moz-user-select: none;
                                -ms-user-select: none;
                                -o-user-select: none;
                                user-select: none;
                            }
                        }
                    }

                    &.active {
                        border-left: 1px solid #4d93f1;
                        border-right: 1px solid #4d93f1;
                        border-top: 1px solid #4d93f1;
                        &::before {
                            display: none;
                        }
                        .option-city {
                            display: block;
                            z-index: 11;
                            .option-wrapper::before {
                                content: "";
                                display: block;
                                position: absolute;
                                bottom: 0;
                                right: 0;
                                background-color: #1c2573;
                                width: 24px;
                                height: 25px;
                                border-left: 1px solid #4d93f1;
                                transform: translateX(50%) translateY(50%)
                                    rotate(45deg);
                            }
                            .option-wrapper {
                                border-left: 1px solid #4d93f1;
                                border-right: 1px solid #4d93f1;
                                border-bottom: 1px solid #4d93f1;
                                .city:hover {
                                    color: #00ebff;
                                }
                            }
                        }
                        &::after {
                            background-image: url("../assets/img/icon-select-up.png");
                        }
                    }
                }
            }
            .body-center-center {
                position: absolute;
                top: 112px;
                z-index: 10;
                width: 100%;
                height: 700px;
                display: flex;
                align-items: center;
                justify-content: center;
                img {
                    width: 649px;
                    // height: 673px;
                }
            }
            .body-center-bottom {
                margin-top: 588px;
                // align-items: center;
                align-items: flex-end;
                justify-content: space-between;
                display: flex;
                .center-bottom-left {
                    display: flex;
                    align-items: center;
                    background-color: rgba(31, 63, 130, 0.37);
                    border: 1px solid rgba(77, 147, 241, 0.48);
                    width: 320px;
                    height: 90px;
                    position: relative;
                    padding: 10px 40px 9px 20px;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0;
                        right: 0;
                        background-color: #1c2573;
                        border-bottom: 1px solid rgba(77, 147, 241, 0.48);
                        width: 46px;
                        height: 44px;
                        transform: translateX(50%) translateY(-50%)
                            rotate(45deg);
                    }
                    .user {
                        display: flex;
                        flex-direction: column;
                        padding-right: 20px;

                        span {
                            font-size: 18px;
                            color: #3cb8f1;
                        }
                        .user-num {
                            font-size: 30px;
                            color: #ffffff;
                        }
                    }
                    .boundary {
                        height: 50px;
                        width: 1px;
                        background: rgba(60, 184, 241, 0.35);
                    }
                    .average {
                        display: flex;
                        flex-direction: column;
                        padding-left: 20px;
                        span {
                            font-size: 18px;
                            color: #3cb8f1;
                        }
                        .average-time {
                            font-size: 30px;
                            color: #ffffff;
                        }
                    }
                }
                .center-bottom-right {
                    display: flex;
                    align-items: center;
                    div {
                        width: 12px;
                        height: 12px;
                        border-radius: 50%;

                        &.dot-nomal {
                            background: #00ff20;
                        }
                        &.dot-fail {
                            background: #db1616;
                        }
                        &.dot-repair {
                            background: #ffaf0a;
                        }
                    }
                    span {
                        font-size: 14px;
                        color: #3cb8f1;
                        margin-left: 10px;
                        margin-right: 30px;
                        &:last-child {
                            margin-right: 0px;
                        }
                    }
                }
            }
        }
        .body-right {
            flex: 5;
            display: flex;
            flex-direction: column;
            .response-rank {
                position: relative;
                top: -17px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                h2 {
                    font-size: 20px;
                    color: #3cb8f1;
                    margin-bottom: 18px;
                }
                .response-rank-content {
                    position: relative;
                    background-color: rgba(31, 63, 130, 0.37);
                    border: 1px solid rgba(77, 147, 241, 0.48);
                    width: 498px;
                    padding: 20px;
                    display: flex;
                    flex-direction: column;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        background-color: #1c2573;
                        border-top: 1px solid rgba(77, 147, 241, 0.48);
                        width: 46px;
                        height: 44px;
                        transform: translateX(-50%) translateY(50%)
                            rotate(45deg);
                    }
                    .content-top {
                        display: flex;
                        flex: 1;
                        flex-direction: column;
                        border-bottom: 1px solid rgba(77, 147, 241, 0.48);
                        .content-top-title {
                            display: flex;
                            justify-content: space-between;
                            span {
                                font-size: 14px;
                                color: #ffffff;
                            }
                            img {
                                width: 26px;
                                height: 20px;
                            }
                        }
                        .content-top-wrapper {
                            display: flex;
                            flex-direction: column;
                            margin-top: 20px;
                            span {
                                font-size: 14px;
                                color: #3cb8f1;
                            }
                            .response-time {
                                display: flex;
                                align-items: center;
                                margin-top: 10px;

                                .response-time-display {
                                    width: 244px;
                                    height: 14px;
                                    background-image: linear-gradient(
                                        90deg,
                                        #6855e9 0%,
                                        rgba(103, 85, 232, 0.58) 100%
                                    );
                                }

                                span {
                                    font-size: 12px;
                                    color: #9688f8;
                                    margin-left: 20px;
                                }
                            }
                            &:nth-of-type(2) {
                                .response-time-display {
                                    width: 326px;
                                }
                            }
                            &:last-of-type {
                                margin-bottom: 30px;
                                .response-time-display {
                                    width: 360px;
                                }
                            }
                        }
                    }
                    .content-bottom {
                        margin-top: 20px;
                        flex: 1;
                        .content-bottom-title {
                            display: flex;
                            justify-content: space-between;
                            span {
                                font-size: 14px;
                                color: #ffffff;
                            }
                            img {
                                width: 23px;
                                height: 22px;
                            }
                        }
                        .content-bottom-wrapper {
                            display: flex;
                            flex-direction: column;
                            margin-top: 20px;
                            span {
                                font-size: 14px;
                                color: #3cb8f1;
                            }
                            .operation-time {
                                display: flex;
                                align-items: center;
                                margin-top: 10px;

                                .operation-time-display {
                                    width: 244px;
                                    height: 14px;
                                    background-image: linear-gradient(
                                        269deg,
                                        #73faff 0%,
                                        #00d0e2 100%
                                    );
                                }

                                span {
                                    font-size: 12px;
                                    color: #9688f8;
                                    margin-left: 20px;
                                }
                            }
                            &:nth-of-type(2) {
                                .operation-time-display {
                                    width: 326px;
                                }
                            }
                            &:last-of-type {
                                margin-bottom: 10px;
                                .operation-time-display {
                                    width: 360px;
                                }
                            }
                        }
                    }
                }
            }
            .real-time-log {
                margin-top: 16px;
                display: flex;
                align-items: flex-end;
                flex-direction: column;
                h2 {
                    font-size: 20px;
                    color: #3cb8f1;
                    margin-bottom: 18px;
                }
                .real-time-log-content {
                    position: relative;
                    background-color: rgba(31, 63, 130, 0.37);
                    border: 1px solid rgba(77, 147, 241, 0.48);
                    width: 498px;
                    height: 286px;
                    padding: 30px 20px 26px;
                    display: flex;
                    flex-direction: column;
                    display: table;
                    &::before {
                        content: "";
                        display: block;
                        position: absolute;
                        top: 0;
                        left: 0;
                        background-color: #1c2573;
                        border-right: 1px solid rgba(77, 147, 241, 0.48);
                        width: 43px;
                        height: 44px;
                        transform: translateX(-50%) translateY(-50%)
                            rotate(45deg);
                    }
                    .log {
                        display: flex;
                        margin-bottom: 10px;
                        align-items: center;

                        .dot {
                            flex: 0 0 12px;
                            width: 12px;
                            height: 12px;
                            border-radius: 50%;
                            margin-right: 10px;

                            &.dot-1 {
                                background: #00ff20;
                            }
                            &.dot-2 {
                                background: #db1616;
                            }
                            &.dot-3 {
                                background: #ffaf0a;
                            }
                        }
                        .type {
                            margin-right: 20px;
                            font-size: 14px;
                            color: #3cb8f1;
                            display: inline-block;
                            vertical-align: middle;
                        }
                        .block {
                            display: inline-flex;
                            flex: 1;
                            justify-content: space-between;
                            align-items: center;
                            background: #ffffff;
                            height: 30px;
                            background-image: linear-gradient(
                                90deg,
                                rgba(31, 63, 130, 0.8) 0%,
                                rgb(30, 48, 120) 85%,
                                rgb(30, 48, 120) 100%
                            );

                            .company {
                                font-size: 14px;
                                color: #ffffff;
                            }
                            .time {
                                font-size: 14px;
                                color: #3cb8f1;
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>
