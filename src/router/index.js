import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/doLogin'
  },
  {
    path: '/doLogin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login,
  },
  {
    path:'/home',
    component:Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// 挂载路由导航守卫
// 如果用户没有登录，但是直接通过URL访问特定页面，需要重新导航到登陆页面
router.beforeEach((to,from,next)=>{
  // to：将要访问的路径
  // from：从哪个路径跳转而来
  // next:是一个函数，表示放行
  // next() 放行  next('/login') 强制跳转
  if(to.path==='/doLogin') return next()
  // 如果用户需要访问一个有权限的页面，则需要判断用户是否携带token
  // 获取token
  const tokenStr=window.sessionStorage.getItem('token')
  // 如果用户没有token，则强制跳回login页面使其登录
  if(!tokenStr) return next('/doLogin')
  next()  //如果查询到用户有token，则next()放行
})

export default router
