<template>
    <div class="">
        <el-cascader
                class="form-control"
                expand-trigger="hover"
                :options="zhejiang"
                v-model="selectedRegion"
                filterable
                @change="handleSelectRegionChange">
        </el-cascader>
    </div>
</template>


<script type="text/ecmascript-6">
    import {regionData, CodeToText, TextToCode} from 'element-china-area-data'
    export default {
        components: {
            CodeToText,
            TextToCode
        },
        props: {
            data: {},
            clear: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                selectedRegion: [],
                regionData: regionData,
                province: "",
                city: "",
                county: "",
                zhejiang:[]
            }
        },
        watch: {
            data(newVal) {
                this.processData(newVal);
            },
            clear(val) {
                if (val) {
                    this.selectedRegion = [];
                    this.province = "";
                    this.city = "";
                    this.county = "";
                }
            }
        },
        mounted: function () {
            this.zhejiang = this.regionData[10].children
            // this.zhejiang.push(this.regionData[10])
            this.processData(this.data);
        },
        methods: {
            handleSelectRegionChange(data) {
                if (data.length >= 2) {
                    let emitData = {
                        province:'浙江省',
                        city: CodeToText[data[0]],
                        county: CodeToText[data[1]],
                        // city: CodeToText[data[1]],
                        // county: CodeToText[data[2]],
                    };

                    this.$emit('callback', emitData);
                }
            },
            processData(item) {
                
                // console.log(item,TextToCode[item.province].code,'item')
                let province = '浙江省'
                if (!item.city || !item.county) return;
                this.selectedRegion = [
                    // TextToCode['浙江省'].code,
                    TextToCode['浙江省'][item.city].code,
                    TextToCode['浙江省'][item.city][item.county].code
                ];
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
