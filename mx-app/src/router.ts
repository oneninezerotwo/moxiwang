import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Classify from './views/Classify.vue'
import Activity from './views/Activity.vue'
import Cart from './views/Cart.vue'
import Mine from './views/Mine.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Loginn from './views/Loginn.vue'
import axios from 'axios'
Vue.prototype.$axios = axios;

import iView from 'iview';
import 'iview/dist/styles/iview.css';
import Setting from './views/Setting.vue'
Vue.use(Router)
Vue.use(iView);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
    },
  ]
})
