import { request } from "./request";

export function getLogindata(username,password){
    return request({
        method:'POST',
        url:'/api/doLogin',
        data:{
          username:username,
          password:password
        }
    })
}