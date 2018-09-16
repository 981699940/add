<template>
    <div class="test" >
        <button @click="showToast">点我</button>
    </div>
</template>

<script>
export default {
    data() {
      return {
          content:`【换汇价格科普】 
                    1. 通过银行换 银行以“汇买价”从普通用户手中购入外汇，再以“汇卖价”卖给其它需要外汇的用户（低买高卖，属于银行的收入来源之一；“汇买”与“汇卖”都是占在银行角度来说的） 如下图，汇买价都会低于汇卖价（人行价格根据其它行价格一起计算，每个工作日上午9：30左右更新一次，24小时不变；其它银行工作日工作时间都会变化，周末不变） 另：困中国实行外汇管制，每个人每年通过银行换汇最高为5W美元 
                    2. 个人换汇 一般参考中间价，对交换双方都较为公平（考虑市场变动因素，多数人参考招行中间价；也有人为了好约定价格，会参考人行中间价）。
                    列表中人行中间价（价格与中国银行中间价一样）
                    官方公布信息地址：
                    http://www.pbc.gov.cn/zhengcehuobisi/125207/125217/125925/index.html;
                    列表中招行中间价官方公布信息地址： 
                    http://m.cmbchina.com/Rate/FxRealrateDetail.aspx?name=%25u7F8E%25u5143`
          ,show:''
      };
    },
    mounted(){
        // let reg = /((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/
        let reg = /(http:\/\/|https:\/\/)((\w|=|\?|\.|\/|&|-|%)+)/g
        this.show = this.replaceReg(reg,this.content)

        // this.showToast()
    
         dd.ready(function(){
            dd.biz.util.share({
                type: 0,//分享类型，0:全部组件 默认； 1:只能分享到钉钉；2:不能分享，只有刷新按钮
                url: 'http://www.baidu.com',
                title: 'baidu',
                content: "百度",
                image: String,
                onSuccess : function() {
                    //onSuccess将在调起分享组件成功之后回调
                    /**/
                },
                onFail : function(err) {}
            })
        })

    },
    methods:{
        showToast() {
            dd.ready(function(){
            console.log(dd.version)
            dd.device.notification.confirm({
                message: "你爱我吗",
                title: "提示",
                buttonLabels: ['爱', '不爱'],
                onSuccess : function(result) {
                    //onSuccess将在点击button之后回调
                    /*
                    {
                        buttonIndex: 0 //被点击按钮的索引值，Number类型，从0开始
                    }
                    */
                },
                onFail : function(err) {}
            });
        });
        },
        replaceReg(reg,str){
            return str.replace(reg,function(m)
                {
                    return '<a href="'+m+'">'+m+'</a>';
                })
        },
        share(){
           
        }

    },
};
</script>
<style>

</style>