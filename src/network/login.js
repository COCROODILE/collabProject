import { request } from "./request";

export function getLogindata(){
    return request({
        method:'POST',
        url:'/doLogin'
    })
}