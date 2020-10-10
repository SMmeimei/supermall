import {request} from "./request";

export function getHomeMultdata() {
  return request({
    url: '/home/multidata'
  })
}




//函数调用 -> 压入函数栈(保存函数调用过程中所有变量)
//函数调用结束 -> 弹出函数栈(释放函数所有变量)
//函数执行完以后，函数体内部的所有东西都会被内从回收掉