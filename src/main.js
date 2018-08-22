import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios);
window.axios = require('axios');


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
