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
                    <span class="title">登录</span>
                    <span class="register" @click="goRegister">立即注册</span>
                </div>
                <div class="login-input">
                    <input type="text" placeholder="手机号">
                    <input type="password" placeholder="密码">
                </div>
                <div class="login-in">
                    <div class="login-button">登录</div>

                </div>
                <div class="login-forget">
                    <span class="forget">忘记密码</span>
                </div>
                <div class="login-other">
                    <span class="other">其他方式登录</span>
                    <img src="../assets/img/icon-wechat.png">
                    <img src="../assets/img/icon-blog.png">
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
    methods:{
        goRegister(){
            this.$router.push(`/register`)

        },
        goIndex(){
            this.$router.push(`/layout`)
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
            width: 1130px;
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
        min-height: 765px;
        height: 75vh;
        .container-content {
            margin: 0 auto;
            width: 485px;
            height: 465px;
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
                    font-size: 14px;
                    color: #23abe2;
                    cursor: pointer;
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
                }
                input:last-child {
                    margin-top: 20px;
                }
                ::-webkit-input-placeholder {
                    color: #a9b5c0;
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
                justify-content: flex-end;
                .forget {
                    font-size: 14px;
                    color: #7f8d9a;
                    cursor: pointer;
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
        background: #3d4852;
        padding-top: 70px;
        padding-bottom: 40px;
        height: 245px;
        width: 100%;
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
// @media only screen and (max-height:1080px) {
//     .login-footer{
//         position: fixed;
//         bottom: 0;
//         left: 0;
//         right: 0;
//         background: #3d4852;
//         padding-top: 70px;
//         padding-bottom: 40px;
//         height: 245px;
//     }


    
// }
</style>
