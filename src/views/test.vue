<template>
    <div class="index">
        <!-- <div class="balloon-container">
            <div class="mask"></div>
            <div class="balloon">
                <h1>浙江省自助机物联网检测平台</h1>
                <h2>2018-03-08 12:00</h2>
            </div>
        </div>
        <div class="index-body">
        </div> -->
        <div>{{date}}</div>
        <div class="choose-city" @click="showOption" :class="{active: flag}" @click.stop="flag = !flag">
            <span class="selected-city">{{city}}</span>
            <div class="option-city">
                <div class="option-wrapper">
                    <template v-for="item in list">
                        <span class="city" @click="changeCity(item.name)" :key="item.name">{{item.name}}</span>
                    </template>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
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
            showCity: false,
            flag: false,
            date:"",
        };
    },
    mounted(){
        // this.initDate(){
             let date = new Date();
             this.date = date.toDateString();
        // }
    },
    methods: {
        changeCity(city) {
            this.city = city;
        },
        showOption() {
            if (this.showCity) {
                this.showCity = false;
            } else {
                this.showCity = true;
            }
        }
    }
};
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    height: 100vh;
    background: #212975;
    overflow: hidden;
    .balloon-container {
        position: absolute;
        left: 50%;
        z-index: 2;
        margin-top: 30px;
        transform: translateX(-50%);
        padding: 0 40px;
        padding-bottom: 9px;
        background-color: #212975;
        .mask {
            width: 100%;
            height: 100%;
        }
        &::after {
            display: block;
            content: "";
            height: 0;
            line-height: 0;
            clear: both;
            overflow: hidden;
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            border-bottom: 1px solid #4d93f1;
            transform: scaleY(0.5);
        }
        .balloon {
            text-align: center;
            color: #fff;
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
        margin-top: 55px;
        height: 100vh;
        position: relative;
        background-color: rgb(23, 32, 99);
        &::after {
            display: block;
            content: "";
            height: 0;
            line-height: 0;
            clear: both;
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            border-top: 1px solid #4d93f1;
            transform: scaleY(0.5);
        }
    }
    .choose-city {
        width: 164px;
        height: 47px;
        font-size: 18px;
        display: flex;
        align-items: center;
        background: #1f3f82;
        padding: 10px 14px;
        position: relative;
        font-weight: 500;
        top: 100px;
        left: 100px;
        border: 1px solid transparent;
        cursor: pointer;
        &::before {
            content: "";
            display: block;
            position: absolute;
            bottom: 0;
            right: 0;
            background-color: #1c2573;
            width: 23px;
            height: 25px;
            transform: translateX(50%) translateY(50%) rotate(45deg);
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
                    transform: translateX(50%) translateY(50%) rotate(45deg);
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
</style>
