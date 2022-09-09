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

// 请求拦截器，内部根据返回值，重新组装，统一管理。
/* axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    ElMessage.error('服务端异常！')
    return Promise.reject(res)
  }
  // if (res.data.code != 0) {
  //   if (res.data.message) {
  //     ElMessage.error(res.data.message)
  //   }
  //   if (res.data.code == 100000) {
  //     router.push({ path: '/login' })
  //   }
  //   return Promise.reject(res.data)
  // }
  return res.data.data
}) */


Vue.prototype.$http=axios




Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
