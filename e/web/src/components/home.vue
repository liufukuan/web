import Vue from 'vue'
import App from './App'
import store from './store/store'
import axios from 'axios';
store.$http = axios;
Vue.prototype.$http=axios;
import router from './router'
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
