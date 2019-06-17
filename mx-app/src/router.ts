import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

import recommend from './components/Recommend.vue'
import cgoods from './components/Cgoods.vue'
import hgoods from './components/Hgoods.vue'
import jgoods from './components/Jgoods.vue'
import bonded from './components/Bonded.vue'
import details from './components/Details.vue'

import Classify from './views/Classify.vue'
import Activity from './views/Activity.vue'
import Cart from './views/Cart.vue'
import Mine from './views/Mine.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Goods from './views/Goods.vue'

import Setting from './views/Setting.vue'
Vue.use(Router)




export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/recommend',
      children: [
        { path: 'recommend', component: recommend, name: 'recommend' },
        { path: 'cgoods', component: cgoods, name: 'cgoods' },
        {
          path: 'hgoods', component: hgoods, name: 'hgoods',
        },
        { path: 'jgoods', component: jgoods, name: 'jgoods' },
        { path: 'bonded', component: bonded, name: 'bonded' },
      ]
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/setting',
      name: 'setting',
      component: Setting
    }, {
      path: '/goods/:id',
      name: 'Goods',
      component: Goods
    },
    { path: '/details', component: details, name: 'details' },

  ]
})
