import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import '@/assets/js/rem.js'
import api from '@/api/api.js'
import '@/assets/css/reset.css'
import '@/assets/font/taobao_icon/iconfont.css'

import  '@/mock/mock.js'

Vue.config.productionTip = false;
Vue.prototype.$axios=axios;
Vue.prototype.$api=api;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
