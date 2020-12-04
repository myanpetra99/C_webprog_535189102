import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/Login'

import User from '@/components/User'
import UserAdd from '@/components/UserAdd'
import UserDetail from '@/components/UserDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user-add',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/user-detail',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
