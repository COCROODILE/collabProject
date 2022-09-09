import { request } from "./request";

export function getLogindata(username,password){
    return request({
        method:'POST',
        url:'/api/doLogin?username=xiaoxiao&password=123456',
        
    })
}