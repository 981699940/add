<template>
    <div class="hmi">
        <div class="hmi-content">
            <label class="title">
                <img class="icon" src="../../assets/img/icon-hmi.png" />hmi
            </label>
            <div class="info  border-bottom">
                <div class="info-left">
                    <div class="item">
                        <label class="label">SN</label>
                        <el-input class="input" v-model="sn"></el-input>

                    </div>
               
                    <div class="item">
                        <label class="label">Model</label>
                        <el-input class="input" v-model="model"></el-input>
                    </div>
                    <div class="item">
                        <label class="label">Software Ver.</label>
                        <el-input class="input" v-model="software"></el-input>
                    </div>
                    <div class="item">
                        <label class="label">Hardware Ver.</label>
                        <el-input class="input" v-model="hardware"></el-input>
                    </div>
                    <div class="item">
                        <label class="label">total riding distance</label>
                        <el-input class="input" v-model="ridingDistance"></el-input>
                    </div>
                </div>

                <div class="info-right">
                    <div class="item" >
                        <label class="label">Customer NO.</label>
                        <el-input class="input" v-model="customer"></el-input>
                    </div>
                    <div class="item">
                        <label class="label">wheelDiameter</label>
                        <el-input class="input" v-model="wheelDiameter" disabled></el-input>
                    </div>
                    <div class="item">
                        <label class="label">speedLimit</label>
                        <el-input class="input" v-model="speedLimit" disabled></el-input>
                    </div>
                    <div class="item">
                        <label class="label">Total Modes</label>
                        <el-input class="input" v-model="totalModes"></el-input>
                    </div>
                </div>
            </div>

            <!-- <div class="info data">
                <div class="info-left">
                    <div class="info-left">
                        <div class="item" >
                            <label class="label">{{ $t('cNam.clientCode') }}</label>
                            <el-input class="input" v-model="clientCode"></el-input>
                        </div>
                        <div class="item">
                            <label class="label">{{ $t('cNam.wheelDiameter') }}</label>
                            <el-select v-model="wheelDiameter">
                                <el-option v-for="(item, index) in wheelDiameters" :key=index :label="item"
                                           :value="item">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="item">
                            <label class="label">{{ $t('cNam.speedLimit') }}</label>
                            <el-select v-model="speedLimit">
                                <el-option v-for="(item, index) in speedLimits" :key=index :label="item" :value="item">
                                </el-option>
                            </el-select>
                        </div>
                        <div class="btn-row">
                            <div class="btn-group">
                                <el-button type="preview" @click="clickWriteParam">{{ $t('cNam.write') }}</el-button>
                            </div>
                        </div>
                        <div>
                            <div class="item">
                                <label class="label">{{ $t('cNam.serviceMileage') }}</label>
                                <el-input class="input" v-model="serviceMileage"></el-input>
                            </div>
                            <div class="btn-row">
                                <div class="btn-group">
                                    <el-button type="primary" @click="clearServiceMileage">{{ $t('cNam.clear') }}
                                    </el-button>
                                </div>
                            </div>
                        </div>
                        <div v-if="org.type === Core.Const.ORG_TYPE.COMPONENT">
                            <div class="item" v-if="org.type === Core.Const.ORG_TYPE.COMPONENT">
                                <label class="label">{{ $t('cNam.setTimeZone') }}</label>
                                <el-select v-model="utcTime" placeholder="Select" class="input">
                                    <el-option
                                            v-for="item in timezone"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="btn-row">
                                <div class="btn-group">
                                    <el-button type="primary" @click="">{{ $t('cNam.write') }}</el-button>
                                </div>
                            </div>
                            <div class="clear-10"></div>
                        </div>

                    </div>
                </div>
            
            </div> -->
        </div>

        <!-- <el-dialog
                :title="$t('auth')"
                :visible.sync="dialogWriteAuthVisible">
            <div>
                <label>
                    {{ $t('noHmiAuthTip') }}
                </label>
                <div class="clear-20"></div>
                <el-select v-model="brandId" slot="append" class="input">
                    <el-option
                            v-for="item in brandList"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                    </el-option>
                </el-select>
            </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" >applyHmiAuth</el-button>
                  <el-button type="primary">applyAllAuth</el-button>
                <el-button type="primary">cNam.cancel</el-button>
            </span>
        </el-dialog> -->
    </div>
</template>

<script>

    export default {
        name: 'ToolHmi',
        components: {
        },
        data() {
            return {
               
            }
        },

        mounted() {

        },
        methods: {
     
        }
    }
</script>

<style lang="scss" rel="stylesheet/scss">
    .hmi {
        width: 100%;
        height: 100%;
        overflow: auto;
        padding: 44px 0;
        .hmi-content {
            width: 950px;
            margin: 0 auto;
            border: 1px solid rgb(86,87,90);
            background: #353945;
            display: flex;
            flex-direction: column;
            .title {
                margin-left: 33px;
                font-size: 16px;
                height: 60px;
                display: flex;
                align-items: center;
                border-bottom: 1px solid rgb(86,87,90);
                img {
                    width: 24px;
                    height: 24px;
                    margin-right: 16px;
                }
            }
            .info {
                overflow: hidden;
                background: #353945;
                width: 950px;
                height: 380px;
                margin-top: 22px;
                box-shadow: 0 1px 0 #2B2F3B;
                display: flex;
                
                .info-left {
                    width: 474px;
                    border-right: 1px dotted #2B2F3B;
                    .item {
                        margin-left: 33px;
                        height: 60px;
                        line-height: 60px;
                        .label {
                            width: 110px;
                            display: inline-block;
                            line-height: 20px;
                            vertical-align: middle;
                        }
                        .input {
                            width: 290px;
                            // margin-left: 10px;
                            & > input {
                                height: 29px;
                            }
                        }
                        .el-select {
                            width: 290px;
                        }
                    }
                    .btn-group {
                        position: absolute;
                        right: 40px;
                    }
                    .sn {
                        height: 60px;
                        margin-left: 33px;
                        line-height: 60px;
                        width: 410px;
                        .label {
                            width: 90px;
                            display: inline-block;
                        }
                        .sn-input {
                            width: 150px;
                            margin-left: 10px;
                        }
                        .btn-read {
                            width: 70px;
                            margin-left: 7px;
                        }
                        .btn-write {
                            margin-left: 1px;
                            height: 29px;
                            width: 70px;
                        }
                    }
                }
                .info-right {
                    float: left;
                    margin-top: 9px;
                    width: 474px;
                    .item {
                        margin-left: 33px;
                        height: 60px;
                        line-height: 60px;
                        display: flex;
                        align-items: center;
                        .el-select {
                            width: 187px;
                        }
                        .tip {
                            display: inline-block;
                            border-radius: 50%;
                            width: 10px;
                            height: 10px;
                            background: #E26829;
                            margin: 0 6px;
                        }
                        .connect {
                            background: #76EE00;
                        }
                        .label {
                            width: 120px;
                            display: inline-block;
                            line-height: 20px;
                            vertical-align: middle;
                        }
                        .input {
                            width: 290px;
                        }
                        > button {
                            margin-right: 12px;
                        }

                    }
                    .btn-group {
                        position: absolute;
                        right: 26px;
                    }
                    .btns {
                        display: inline-block;
                    }
                    .loading {
                        display: inline-block;
                        vertical-align: middle;
                    }
                }
            }
            .data {
                min-height: 180px;
                height: 100%;
                margin-top: 1px;
            }
        }
    }
</style>
