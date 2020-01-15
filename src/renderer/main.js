import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
// axios.defaults.baseURL='http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false


import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad,{
    // error:'./assets/err.jpg',
    // loading:'./assets/loading.gif'
})



/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
