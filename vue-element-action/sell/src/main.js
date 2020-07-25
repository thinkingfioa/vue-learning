// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import Goods from '@/components/goods/goods'
import Ratings from '@/components/ratings/ratings'
import Seller from '@/components/seller/seller'

import '@/common/styles/index.styl'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

// 1. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
const routes = [
  { path: '/goods', component: Goods },
  { path: '/ratings', component: Ratings },
  { path: '/seller', component: Seller }
]

// 2. 创建router实例，然后传 `routes` 配置
// (缩写) 相当于 routes: routes
// linkActiveClass: 'active',
const router = new VueRouter({
  linkActiveClass: 'active',
  routes
})

// 3. 创建和载根实例
// 需要传入router，让整个项目有路由功能
// new Vue({
//   router
// }).$mount('#app')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

router.push('/goods')
