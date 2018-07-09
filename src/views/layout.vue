<template>
    <div class="index">
        <div class="index-header">
            <div class="header-wrapper">
                <div class="header-top">
                    <div class="top-left">
                        <img src="../assets/img/icon-footer-logo.png">
                        <span>首页</span>
                        <span>咨询大咖</span>
                        <span>大咖之谈</span>
                        <span>领域巅峰</span>
                        <span>我要建站</span>
                        <span>成为业内人</span>
                    </div>
                    <div class="top-right">
                        <img src="../assets/img/icon-search.png">
                        <span @click="goLogin">登录</span>
                        <span @click="goRegister">注册</span>
                    </div>

                </div>
                <div class="header-center">
                    <span>业内人</span>
                    <span>和客户在一起</span>
                    <span class="intro">为你创造最好的销售工具。在小岛上给客户建个家，把产品装进口袋里。用实力让情怀落地，让销售变的容易</span>
                    <div class="center-button">
                        进入小程序
                    </div>
                </div>

            </div>
        </div>
        <div class="index-container">
            <div class="container-wrapper">
                <div class="container-top">
                    <div class="function">
                        <img src="../assets/img/icon-famous.png">
                        <div class="text">
                            <span class="text-top">海量大咖</span>
                            <span class="text-bottom">超过3000席不同领域的非凡大咖</span>
                        </div>
                    </div>
                    <div class="function">
                        <img src="../assets/img/icon-build.png">
                        <div class="text">
                            <span class="text-top">一键建站</span>
                            <span class="text-bottom">打造史上最好用的移动销售工具</span>
                        </div>
                    </div>
                    <div class="function">
                        <img src="../assets/img/icon-server.png">
                        <div class="text">
                            <span class="text-top">按需服务</span>
                            <span class="text-bottom">根据需求线上线下灵活服务</span>
                        </div>
                    </div>
                </div>
                <div class="container-center">
                    <div class="show-person" v-for="item in list" :key="item.name">
                        <img :src="item.pho">
                        <div class="cover">
                            <div class="display-text">
                                <span class="name">{{item.name}}</span>
                                <span class="title">{{item.title}}</span>
                                <span class="intro">{{item.intro}}</span>
                                <span class="num">{{item.num}}人咨询过</span>

                            </div>
                        </div>

                    </div>
                    <div class="show-more">
                        <img src="../assets/img/icon-dalao6.png">
                        <div class="cover">
                            <div class="display-text">
                                <span class="more">更多
                                    <span class="english">More</span>
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container-bottom">
                    <div class="bottom-left">
                        <span class="more">了解更多</span>
                        <span class="intro">为你创造最好的销售工具。在小岛上给客户建个家，把产品装进口袋里。用实力让情怀落地，让销售变的容易为你创造最好的销售工具。</span>
                        <span class="get-mina" @click="goIndex()">获取小程序</span>
                    </div>
                    <div class="bottom-right">
                        <img src="../assets/img/icon-get-mina.png">
                    </div>
                </div>

            </div>
        </div>
        <div class="index-bottom">
            <div class="bottom-contact">
                <span class="concat">联系我们</span>
                <span class="english">Lorem ipsum dolor sit amet dolor consectetur adipiscing elit. </span>
                <div class="email">
                    <input type="text" placeholder="E-mail">
                    <span>OK</span>
                </div>
            </div>
            <div class="bottom-footer">
                <div class="footer-top">
                    <div class="intro">
                        <img src="../assets/img/icon-footer-logo.png">
                        <span>业内人旨在打造高品质专业服务社群空间，给你不一样的知识服务体验。</span>
                    </div>
                    <div class="nav">
                        <span class="title">网站导航</span>
                        <span>首页</span>
                        <span>咨询大咖</span>
                        <span>大咖之谈</span>
                        <span>领域巅峰</span>
                        <span>我要建站</span>
                        <span>成为业内人</span>
                    </div>
                    <div class="about">
                        <span class="title">关于我们</span>
                        <span>品牌合作: bd@yeneiren.cn</span>
                        <span>广告投放: ad@yeneiren.cn</span>
                        <span>媒体垂询: media@yeneiren.cn</span>
                        <span>联系地址: 上海市宝山区沪太路6395号1_2层A区2043室</span>
                        <span>400-6366-951</span>
                    </div>
                    <div class="focus">
                        <span>关注我们</span>
                        <div class="focus-way">
                            <img src="../assets/img/icon-footer-wechat.png">
                            <img src="../assets/img/icon-footer-blog.png">
                            <img src="../assets/img/icon-footer-other.png">
                        </div>

                    </div>

                </div>
                <div class="footer-bottom">
                    <span class="text">© Copyright 2018 业内人. All Rights Reserved.</span>
                    <div class="button">
                        <span>关于我们</span>
                        <span>下载APP</span>
                        <span>帮助</span>

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
            list: [
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao1.png")
                },
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao2.png")
                },
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao1.png")
                },
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao3.png")
                },
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao4.png")
                },
                {
                    name: "Bruce Bo",
                    title: "大佬科技创始人",
                    intro: "虚拟现实领域的领军人",
                    num: "2023",
                    pho: require("../assets/img/icon-dalao5.png")
                }
            ]
        };
    },
    methods: {
        goRegister() {
            this.$router.push(`/register`);
        },
        goLogin() {
            this.$router.push(`/login`);
        },
        goIndex() {
            this.$router.push(`/index`);
        }
    }
};
</script>
<style lang="scss" scoped>
.index {
    width: 100%;
    .index-header {
        width: 100%;
        height: 800px;
        background-image: url("../assets/img/icon-background.png");
        background-size: 100% 100%;
        background-repeat: no-repeat;
        .header-wrapper {
            width: 1130px;
            margin: 0 auto;
            .header-top {
                padding-top: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .top-left {
                    display: flex;
                    align-items: center;
                    img {
                        height: 30px;
                        width: 120px;
                        margin-right: 70px;
                        cursor: pointer;
                    }
                    span {
                        margin-right: 30px;
                        font-size: 16px;
                        color: #ffffff;
                        cursor: pointer;
                        &:last-child {
                            margin-right: 0px;
                        }
                    }
                }
                .top-right {
                    display: flex;
                    align-items: center;
                    img {
                        width: 16px;
                        height: 16px;
                        margin-right: 30px;
                        cursor: pointer;
                    }
                    span {
                        margin-right: 30px;
                        font-size: 16px;
                        color: #ffffff;
                        cursor: pointer;
                        &:last-child {
                            margin-right: 0px;
                            border: 1px solid #ffffff;
                            border-radius: 4px;
                            padding: 5px 19px;
                        }
                    }
                }
            }
            .header-center {
                margin-top: 149px;
                display: flex;
                flex-direction: column;
                span {
                    font-size: 40px;
                    color: #ffffff;
                    line-height: 70px;
                    font-weight: 500;

                }
                .intro {
                    font-size: 18px;
                    width: 587px;
                    line-height: 25px;
                    margin-top: 30px;
                    // font-weight: 500;

                }
                .center-button {
                    border: 2px solid #ffffff;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #ffffff;
                    font-weight: 500;
                    width: 150px;
                    // height: 50px;
                    text-align: center;
                    line-height: 46px;
                    margin-top: 70px;
                    cursor: pointer;
                }
            }
        }
    }
    .index-container {
        width: 100%;
        background: #fff;
        .container-wrapper {
            width: 1130px;
            margin: 0 auto;
            .container-top {
                padding-top: 140px;
                display: flex;
                justify-content: space-between;
                align-items: center;

                .function {
                    height: 67px;
                    display: flex;
                    margin-right: 154px;
                    &:last-child {
                        margin-right: 0px;
                    }

                    img {
                        width: 40px;
                        height: 44px;
                        margin-right: 30px;
                    }
                    .text {
                        display: flex;
                        flex-direction: column;
                        font-weight: 500;

                        .text-top {
                            font-size: 24px;
                            color: #3d4852;
                        }
                        .text-bottom {
                            margin-top: 8px;
                            font-size: 14px;
                            color: #7b8d9d;
                        }
                    }
                }
            }
            .container-center {
                margin-top: 116px;
                display: flex;
                flex-wrap: wrap;
                width: 100%;

                .show-person {
                    // width: 25%;
                    img {
                        height: 340px;
                        width: 266px;
                        margin-right: 22px;
                        margin-bottom: 22px;
                        border-radius: 10px;
                    }
                    &:nth-child(4) {
                        img {
                            margin-right: 0;
                        }
                    }
                    .cover {
                        // width: 94%;
                        width: 0;
                        height: 0;
                        position: relative;
                        .display-text {
                            position: absolute;
                            // width: 100%;
                            width: 266px;
                            height: 340px;
                            top: -366px;
                            display: flex;
                            flex-direction: column;
                            border-radius: 10px;
                            background: rgba(0, 0, 0, 0.2);
                            cursor: pointer;
                            span {
                                font-weight: 500;
                                color: #ffffff;
                                &.name {
                                    padding: 20px;
                                    font-size: 24px;
                                }
                                &.title {
                                    padding-left: 20px;
                                    margin-top: 156px;
                                    font-size: 14px;
                                }
                                &.intro {
                                    padding-left: 20px;
                                    margin-top: 4px;
                                    font-size: 14px;
                                }
                                &.num {
                                    margin-top: 15px;
                                    width: 172px;
                                    background: #23abe2;
                                    border-radius: 0 18px 18px 0;
                                    padding: 7px 37px 7px 20px;
                                    font-size: 16px;
                                    font-weight: 400;

                                }
                            }
                        }
                    }
                }
                .show-more {
                    // width: 50%;
                    img {
                        width: 554px;
                        height: 340px;
                    }
                    .cover {
                        // width: 98%;
                        width: 0;
                        height: 0;
                        position: relative;
                        .display-text {
                            position: absolute;
                            width: 554px;
                            // width: 100%;
                            height: 340px;
                            top: -344px;
                            display: flex;
                            flex-direction: column;
                            border-radius: 10px;
                            background: rgba(0, 0, 0, 0.2);
                            cursor: pointer;
                            .more {
                                margin-top: 250px;
                                margin-left: 365px;
                                padding-left: 36px;
                                font-weight: 500;
                                padding-bottom: 4px;
                                font-size: 30px;
                                color: #ffffff;
                                margin-right: 34px;
                                border-bottom: 1px solid #ffffff;
                                .english {
                                    font-size: 16px;
                                }
                            }
                        }
                    }
                }
            }
            .container-bottom {
                margin-top: 98px;
                padding: 10px 0;
                display: flex;
                padding-bottom: 120px;
                justify-content: space-between;
                .bottom-left {
                    display: flex;
                    flex-direction: column;
                    .more {
                        font-size: 24px;
                        color: #3d4852;
                        font-weight: 500;
                    }
                    .intro {
                        margin-top: 30px;
                        font-size: 16px;
                        color: #7b8d9d;
                        width: 523px;
                    }
                    .get-mina {
                        margin-top: 49px;
                        border: 2px solid #23abe2;
                        border-radius: 4px;
                        font-size: 16px;
                        color: #23abe2;
                        width: 133px;
                        // height: 48px;
                        line-height: 44px;
                        text-align: center;
                        cursor: pointer;

                        // padding: 13px 26px;
                    }
                }
                .bottom-right {
                    img {
                        width: 232px;
                        height: 232px;
                    }
                }
            }
        }
    }
    .index-bottom {
        width: 100%;
        background: #3d4852;

        .bottom-contact {
            background: #f1f4f8;
            display: flex;
            flex-direction: column;
            height: 430px;
            align-items: center;
            justify-content: center;
            .concat {
                font-size: 22px;
                color: #3d4852;
                font-weight: 500;
            }
            .english {
                margin-top: 30px;
                font-size: 16px;
                color: #3d4852;
                margin-bottom: 60px;
            }
            .email {
                width: 456px;
                text-align: center;
                input {
                    background: #ffffff;
                    border-radius: 4px;
                    font-size: 14px;
                    width: 82%;
                    height: 48px;
                    padding-left: 20px;
                    &::-webkit-input-placeholder {
                        color: #7f8d9a;
                    }
                }
                span {
                    background: #23abe2;
                    border-radius: 4px;
                    font-size: 16px;
                    color: #ffffff;
                    padding: 13px 18px;
                    margin-left: 12px;
                    cursor: pointer;
                }
            }
        }
        .bottom-footer {
            height: 600px;
            text-align: center;
            width: 1130px;
            margin: 0 auto;
            .footer-top {
                display: flex;
                padding-top: 70px;
                justify-content: space-between;
                .intro {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    align-content: flex-start;
                    text-align: left;
                    img {
                        width: 124px;
                        height: 31px;
                    }
                    span {
                        margin-top: 37px;
                        font-size: 14px;
                        color: #9da7af;
                        line-height: 28px;
                        font-weight: 500;

                    }
                }
                .nav {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    span {
                        font-size: 14px;
                        color: #ffffff;
                        margin-bottom: 26px;
                        cursor: pointer;
                        font-weight: 500;

                        &.title {
                            font-size: 18px;
                            color: #9da7af;
                            margin-bottom: 40px;
                            cursor: auto;
                        }
                    }
                }
                .about {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    align-content: flex-start;
                    text-align: left;
                    span {
                        font-size: 14px;
                        color: #ffffff;
                        margin-bottom: 26px;
                        font-weight: 500;
                        &.title {
                            font-size: 18px;
                            color: #9da7af;
                            margin-bottom: 40px;
                        }
                        &:last-child {
                            margin-top: 32px;
                            font-size: 24px;
                        }
                    }
                }
                .focus {
                    width: 20%;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;

                    span {
                        font-size: 18px;
                        color: #9da7af;
                        font-weight: 500;
                    }
                    .focus-way {
                        margin-top: 43px;

                        img {
                            cursor: pointer;
                            width: 30px;
                            height: 24px;
                            margin-right: 30px;
                        }
                    }
                }
            }

            .footer-bottom {
                margin-top: 126px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .text {
                    font-size: 14px;
                    color: #9da7af;
                }
                .button {
                    display: flex;
                    flex-wrap: wrap;
                    span {
                        font-size: 14px;
                        color: #9da7af;
                        margin-left: 40px;
                        cursor: pointer;
                    }
                }
            }
        }
    }
}
</style>