<template>
    <div class="center">
        aa
        <i class="fas fa-paper-plane"></i>
        <font-awesome-icon icon="coffee" style="color:yellow"/>
    </div>
</template>
<script>
export default {
    data() {
      return {};
    },
    mounted(){
        var aa =document.getElementsByClassName('center')[0];
        // console.log(aa.childNodes[0].nodeValue,"chi_nodeValue")
        // console.log(aa.firstChild.nodeValue,"fir_nodeValue")
        // console.log(aa.innerHTML,"innerHTML")
        // 上面3条效果相同
        console.log(aa.parentNode)
        
    },

};
</script>
<style>
/* // .header-wrapper {
        //     height: 0;
        //     width: 600px;
        //     border-top: 109px solid rgba(57,4,251,.1);
        //     border-left: 100px solid transparent;
        //     border-right: 100px solid transparent;
        // } */

</style>