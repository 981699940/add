<template>
    <div class="login">
        <div class="login-header">
            <div class="header-content">

                <img class="brand" src="../assets/img/icon-brand.png" @click="goIndex">
                <span @click="goIndex">首页</span>
            </div>

        </div>
        <div class="login-container">
            <div class="container-content">
                <div class="login-title">
                    <span class="title">注册</span>
                    <span class="register">已有账号?
                        <span @click="goLogin">快捷登录</span>
                    </span>
                </div>
                <div class="login-input">
                    <input type="text" placeholder="手机号">
                    <div class="passport">
                        <input type="text" placeholder="验证码">
                        <div class="get-number">获取验证码</div>

                    </div>
                    <input type="text" placeholder="昵称">
                    <input type="password" placeholder="密码">
                </div>
                <div class="login-in">
                    <div class="login-button">注册</div>

                </div>
                <div class="login-forget">
                    <div class="absolute">
                        <input type="checkbox">
                    </div>

                    <span class="forget">我已经阅读并同意
                        <a target="_blank" href="http://static.innotick.com/smartwork/file/a34010326904b2366cc857c8261277b191d4f1cc53cc35b5fa489e31ff22a50e.docx">《业内人平台协议》</a>
                    </span>
                </div>

            </div>
        </div>
        <div class="login-footer">
            <div class="footer-content">
                <div class="footer-top">
                    <img src="../assets/img/icon-footer-logo.png">
                    <span class="intro">业内人旨在打造高品质专业服务社群空间，给你不一样的知识服务体验</span>
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
        return {};
    },
    methods: {
        goLogin() {
            this.$router.push(`/login`);
        },
        goIndex() {
            this.$router.push(`/layout`);
        }
    }
};
</script>
<style lang="scss" scoped>
.login {
    width: 100%;
    .login-header {
        background: #fff;
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        .header-content {
            display: flex;
            margin: 0 auto;
            min-width: 1130px;
            justify-content: space-between;
            .brand {
                width: 121px;
                height: 30px;
                cursor: pointer;
            }
            span {
                font-size: 16px;
                color: #3d4852;
                cursor: pointer;
            }
        }
    }
    .login-container {
        widows: 100%;
        padding-top: 80px;
        background: #f1f4f8;
        // height: 765px;
        min-height: 765px;
        height: 75vh;
        .container-content {
            margin: 0 auto;
            width: 500px;
            height: 550px;
            padding: 40px;
            background: #fff;
            .login-title {
                display: flex;

                justify-content: space-between;
                align-items: center;
                .title {
                    font-size: 24px;
                    color: #3d4852;
                }
                .register {
                    color: #7f8d9a;
                    font-size: 14px;

                    span {
                        font-size: 14px;
                        color: #23abe2;
                        cursor: pointer;
                    }
                }
            }
            .login-input {
                margin-top: 40px;
                input {
                    background: #f1f4f8;
                    border-radius: 4px;
                    font-size: 14px;
                    width: 100%;
                    height: 48px;
                    padding-left: 20px;
                    margin-top: 20px;
                }
                input:first-child {
                    margin-top: 0;
                }
                ::-webkit-input-placeholder {
                    color: #a9b5c0;
                }
                .passport {
                    margin-top: 20px;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    input {
                        width: 75%;
                    }
                    .get-number {
                        border: 1px solid #23abe2;
                        border-radius: 4px;
                        font-size: 14px;
                        color: #23abe2;
                        line-height: 46px;
                        width: 23%;
                        text-align: center;
                        overflow: hidden;
                        white-space: nowrap;
                        cursor: pointer;
                    }
                }
            }
            .login-in {
                margin-top: 20px;
                width: 100%;
                .login-button {
                    background: #23abe2;
                    border-radius: 4px;
                    font-size: 14px;
                    color: #ffffff;
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    cursor: pointer;
                }
            }
            .login-forget {
                width: 100%;
                display: flex;
                margin-top: 20px;
                justify-content: center;
                align-items: center;
                .absolute {
                    position: relative;
                    width: 0;
                    height: 0;
                    top: -5px;
                    input{
                        position: absolute;
                        width: 130px;

                    }
                }
                .forget {
                    font-size: 14px;
                    color: #7f8d9a;
                    margin-left: 20px;
                    a {
                        font-size: 14px;
                        color: #23abe2;
                        cursor: pointer;
                    }
                }
            }
            .login-other {
                margin-top: 86px;
                display: flex;
                align-items: center;

                .other {
                    font-size: 14px;
                    color: #7f8d9a;
                    cursor: pointer;
                }
                img {
                    width: 20px;
                    height: 17px;
                    margin-left: 20px;
                    cursor: pointer;
                }
            }
        }
    }
    .login-footer {
        width: 100%;
        background: #3d4852;
        padding-top: 70px;
        padding-bottom: 40px;
        height: 245px;
        // position: fixed;
        // bottom: 0;
        // left: 0;
        // right: 0;

        .footer-content {
            width: 1130px;
            margin: 0 auto;
            .footer-top {
                display: flex;
                align-items: center;
                justify-content: space-between;

                img {
                    width: 120px;
                    height: 31px;
                }
                .intro {
                    font-size: 14px;
                    color: #ffffff;
                }
            }
            .footer-bottom {
                margin-top: 84px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .text {
                    font-size: 14px;
                    color: #9da7af;
                }
                .button {
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
