import axios from 'axios'

export function request(config){
  // 创建实例
  const instance=axios.create({
    baseURL:'http://10.10.227.196:9090',
    timeout:3000
  })

  // axios的拦截器
  instance.interceptors.request.use(config=>{
    return config
  },err=>{
    console.log(err);
  })

  instance.interceptors.response.use(res=>{
    return res.data
  },err=>{
    console.log(err);
  })

  // 发送网络请求
  return instance(config)
}