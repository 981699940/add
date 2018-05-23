import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Goods from '../components/pages/goods'
import Ratings from '../components/pages/ratings'
import Seller from '../components/pages/seller'
// import Pages from '../components/pages'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/pages/goods',
          component: Goods
        },
        {
          path: '/pages/ratings',
          component: Ratings
        },
        {
          path: '/pages/seller',
          component: Seller
        }
        // {
        //   path: "/pages/:id",
        //   component: Pages
        // }

      ]
    },
    {
      path: '/',
      redirect: '/index'
    }
  ]
})
