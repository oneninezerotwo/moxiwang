import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// import './assets/rem.js';
import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.use(iView);

new Vue({

  router,
  store,
  render: h => h(App)
}).$mount('#app')
