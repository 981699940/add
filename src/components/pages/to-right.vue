<template>
    <div class="index">
        <div class="choose-city">
            <span class="selected-city">{{city}}{{allChecked}}</span>
            <div class="option-city">
                <div class="option-wrapper">
                    <template v-for="item in list">
                        <span class="city" @click="changeCity(item.name)" :key="item.id">{{item.name}}</span>

                    </template>
                </div>

            </div>
        </div>
        <div class="choosse-city " :class="{active:flag}">
            <div class="selected-city" @click.stop="flag = !flag">
                <label for="aaa">{{citys}}</label>
                <input type="checkbox" id="aaa" :checked="isTitleChecked()" @change.stop="changeAllInput($event)" />
            </div>
            <div class="option-city">
                <div class="option-wrapper">
                    <div class="test" v-for="item in list1" :key="item.id">
                        <label class="city" :for="item.id">{{item.name}}</label>
                        <input type="checkbox" :id="item.id" :value="item.id" v-model="kongsz"  @change="changeInput(item,$event)">
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
            flag: false,
            allChecked: false,
            // isTitleChecked: false,
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
             list1: [
                { name: "杭州市", id: 1 },
                { name: "宁波市", id: 2 },
                { name: "温州市", id: 3 },
                { name: "绍兴市", id: 4 },
            ],
            citys:"全选",
            kongsz:[]
        };
    },
    methods: {
        changeCity(city){
            this.city = city
        },
        changeInput(item,event){
            // console.log(item,event)
            console.log(this.kongsz,"子标题点击")

        },
        isTitleChecked(){
            console.log("父标题checked被调用")
            return (this.kongsz.length==this.list1.length);

        },
        changeAllInput(event){
            if(event.target.checked === true){
                this.list1.forEach(item=>this.kongsz.indexOf(item.id)== -1 && this.kongsz.push(item.id))
            }
            else{
                this.kongsz = []
            }
            console.log(this.kongsz,"父标题选择all")

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
            background-image: url("../../assets/img/icon-select-down.png");
            width: 11px;
            height: 6px;
            position: absolute;
            background-size: 100% 100%;
            right: 23px;
        }
        .selected-city {
            color: #3cb8f1;
            font-size: 18px;
        }
        .option-city {
            display: none;
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
                }
            }
        }
        &:hover::before {
            display: none;
        }
        &:hover {
            border-left: 1px solid #4d93f1;
            border-right: 1px solid #4d93f1;
            border-top: 1px solid #4d93f1;
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
        }
        &:hover::after {
            background-image: url("../../assets/img/icon-select-up.png");
        }
    }
    .choosse-city {
        margin-left: 800px;
        position: relative;
        &.active {
            .option-city {
                display: block;
                .option-wrapper {
                    .city:hover {
                        color: #00ebff;
                    }
                }
            }
        }
        .option-city {
            display: none;
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
                .test {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding-right: 20px;
                    .city {
                        font-size: 16px;
                        color: #ffffff;
                        height: 42px;
                        line-height: 42px;
                        padding-left: 14px;
                        flex: 1;
                    }
                }
            }
        }
    }
}
</style>
