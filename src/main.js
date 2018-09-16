// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VeLine from 'v-charts/lib/line'
import '../src/assets/style/base.css';
import '../src/assets/style/animate.css';
import VueMeta from 'vue-meta'
import VueHead from 'vue-head'


import VuePreview from 'vue-preview'
// Vue.use(VuePreview)
Vue.use(VuePreview, {
    mainClass: 'pswp--minimal--dark',
    barsSize: {top: 0, bottom: 0},
    captionEl: false,
    fullscreenEl: false,
    shareEl: false,
    bgOpacity: 0.85,
    tapToClose: true,
    tapToToggleControls: false
  })
Vue.use(VueMeta)
Vue.use(VueHead)
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// import VCharts from 'v-charts' 
// Vue.use(VCharts) //  全局引入
Vue.use(ElementUI);
Vue.component(VeLine.name,VeLine)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
