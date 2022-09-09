import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/fonts/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

import axios from 'axios'

axios.defaults.baseURL='http://10.10.227.196:9090'
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
