import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/onlineAudit',
      name: 'onlineAudit',
      component: () => import('../views/admin/OnlineAudit.vue')
    }
  ]
})
