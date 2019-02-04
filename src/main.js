import Vue from 'vue'
import App from './App.vue'
import 'amfe-flexible'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import VueRouter from 'vue-router'
import routes from '../route.js'
import axios from 'axios'
Vue.use(VueRouter)
Vue.use(Mint);
const router = new VueRouter({routes});

Vue.config.productionTip = false
Vue.prototype.$http= axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
