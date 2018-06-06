<template>
    <div class="root">
        <!-- <div class="test1">
        </div> -->
        <div class="trapezoid-2">

        </div>

    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {}
};
</script>
<style lang="scss" scoped>
.root {
    background-color: #1c2573;
    height: 4000px;
    width: 100%;
    padding-top: 40px;
    .test1 {
        position: relative;
        background-color: #1f3f82;
        border: 1px solid #4d93f1;
        width: 200px;
        height: 200px;
    
        top: 100px;
        left: 800px;
        &::before {
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background-color: #1c2573;
            border-right: 1px solid #4d93f1;
            width: 42px;
            height: 44px;
            transform: translateX(-50%) translateY(-50%) rotate(45deg);
        }
    }
    .trapezoid-2 {
        margin-left: 80px;
        margin-bottom: 40px;
        height: 0;
        width: 600px;
        border-top: 50px solid #e5c3b2;
        border-left: 60px solid transparent;
        border-right: 60px solid transparent;
    }
}
</style>