import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import VueParticles from 'vue-particles'
Vue.use(VueParticles)

/* router.beforeEach((to,from,next)=>{
  if(to.matched.length!=0){
    if(to.meta.requireAuth){

    }
  }
}) */

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
