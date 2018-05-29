<template>
    <div class="position">
        <template v-if="currentPage ==1">
            <div class="time-set">
                <span>{{time}}</span>
                <span class="button-start" @click.stop="runTime">开始</span>
            </div>
        </template>
        <template v-if="currentPage ==2">
            <div>bbb</div>
        </template>
        <template v-if="currentPage ==3">
            <div>ccc</div>
        </template>
    </div>
</template>
<script>
export default {
    data() {
        return {
            currentPage: 1,
            time: 60
        };
    },
    watch: {
        $route: function(val) {
            this.currentPage = val.query.position | 0;
        }
    },
    mounted() {
        this.currentPage = this.$route.query.position | 0;
    },
    methods: {
        runTime() {
            let countdown = () => {
                if (this.time !== -1) {
                    this.flag = setTimeout(() => {
                        this.time--;
                        countdown();
                    }, 1000);
                } else {
                    this.time = 60;
                    clearTimeout(this.flag);
                }
            };
            
            countdown();
        }
    }
};
</script>
<style lang="scss">
span {
    &.button-start {
        border: 1px solid red;
        padding: 2px 8px;
        color: red;
        cursor: pointer;
        margin-left: 10px;
        border-radius: 8px;
    }
}
</style>