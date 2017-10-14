import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import Vueaxios from "vue-axios";
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
Vue.use(Element)
Vue.use(Vueaxios,axios)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
