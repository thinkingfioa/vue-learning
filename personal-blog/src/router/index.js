import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/helloword',
      name: 'home',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../components/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/Login.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../components/Edit.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../components/List.vue')
    }
  ]
})
