import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import {routes} from './routes.js';

import axios from 'axios';
axios.defaults.timeout = 5000;

Vue.config.productionTip = false
const router = new VueRouter({
  routes,
  linkActiveClass: "active",
});
Vue.use(VueRouter)
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
