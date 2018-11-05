<template>
    <div class="test">
        <region-select :data="selectAddressRegionData"
                        :clear="selectRegionAddressClear"
                        @callback="selectRegionAddressCallback">
        </region-select>
        <span @click="clearContent" :title="title">清除内容</span>
        <span>{{a.b}} {{d[0]}} {{cgTitle}}</span>
        <input type="text" v-model="title">
    </div>
</template>
<script>
import RegionSelect from "./count-select.vue";
export default {
    components: {
        RegionSelect
    },
    data() {
        return {
            selectAddressRegionData:{},
            selectRegionAddressClear: false,
            org:{
                province:'',
                city:'',
                county:''
            },
            title:'测试title',
            a:{},
            d:[1,2]
        };
    },
    computed:{
       cgTitle:{
           get(){
               return  this.title
           },
           set(newValue){
               let a = newValue
               this.title = a + this.title
           }
       } 
    },
    mounted(){
        this.a.b = 2
        this.a.b =3
        this.d[0] = 100
        this.selectAddressRegionData = {
            province: '',
            city: '杭州市',
            county: '江干区'
        };
        this.cgTitle ='aaa'
    },
    methods:{
        
        clearContent(){
            // Core.Util.clearData(this.org)   //同时手动清除org内容
            this.selectRegionAddressClear = true;
        },
        selectRegionAddressCallback(val) {
            if (!val) return;
            this.org.province = val["province"];
            this.org.city = val["city"];
            this.org.county = val["county"];
            console.log(this.org,'org_detail')
            this.selectRegionAddressClear = false;
        },
    }
};
</script>
<style>

</style>