import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Classify from '@/views/Classify.vue'
import Login from '@/views/Login.vue'
import Cart from '@/views/Cart.vue'
import My from '@/views/My.vue'
import Goodsinfo from '@/views/Goodsinfo.vue'
import Order from '@/views/Order.vue'
import Address from '@/views/Address.vue'
import Newaddress from '@/views/Newaddress.vue'
import Information from '@/views/Information.vue'
import Commentlist from '@/views/Commentlist.vue'
import Os from '@/views/Os.vue'
import Set from '@/views/Set.vue'
import Allorder from '@/views/Allorder.vue'
import Gslist from '@/views/Gslist.vue'
Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      // 主页
      path: '/home',
      component: Home
    },
    {
      // 分类
      path: '/classify',
      component: Classify
    },
    {
      // 购物车
      path: '/cart',
      component: Cart
    },
    {
      // 我的
      path: '/my',
      component: My
    },
    {
      // 商品详情
      path: '/goodsinfo',
      component: Goodsinfo
    },
    {
      // 结算
      path: '/order',
      component: Order
    },
    {
      // 登录
      path: '/login',
      component: Login
    },
    {
      // 地址列表页(收货地址管理)
      path: '/address',
      component: Address
    },
    {
      // 新增地址
      path: '/newaddress',
      component: Newaddress
    },
    {
      // 个人资料
      path: '/information',
      component: Information
    },
    {
      // 晒单评价
      path: '/commentlist',
      component: Commentlist
    },
    {
      // os
      path: '/os',
      component: Os
    },
    {
      // set
      path: '/set',
      component: Set
    },
    {
      // 全部订单
      path: '/allorder',
      component: Allorder
    },
    {
      path: '/gslist',
      component: Gslist
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})
