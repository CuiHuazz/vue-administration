import axios from 'axios'
// import Vue from 'vue'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false
})

const request = axios.create({
  baseURL: process.env.VUE_APP_API_HOST,
  timeout: 1000000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})
// 请求拦截器
request.interceptors.request.use(
  (config) => {
    NProgress.start() // 开始
    if (config.method === 'post') {
      config.data = config.data || {}
    }
    const token = sessionStorage.getItem('token')
    let divideId
    if (localStorage.getItem('orgName')) {
      divideId = JSON.parse(localStorage.getItem('orgName')).orgIds
    }
    if (token) {
      config.headers.token = token
      config.headers.Authorization = 'Bearer ' + token
    }
    if (divideId) {
      config.headers['divide-id'] = divideId
    }
    // 文件上传的请求超时时间设置为两分钟
    if (config.type && config.type === 'file') {
      config.timeout = 120000
    }
    // console.log(config)
    return config
  },
  (error) => {
    Message.error('网络错误！')
    // 触发promise的reject事件
    return Promise.reject(error)
  }
)
// 响应拦截器
request.interceptors.response.use(
  (response) => {
    NProgress.done()
    const res = response.data
    if (res) {
      return res
    } else {
      return Promise.reject(res)
    }
  },
  (error) => {
    // 如果返回错误信息，向上抛出 由接收者处理
    // 未验证跳转第三方登录接口
    if (error.response.status === 401) {
      console.log(error.response.data)
      if (error.response.data && error.response.data.authUrl) {
        window.location.href = error.response.data.authUrl
      }
    }
    if (error.response && error.response.data && error.response.data.message) {
      return Promise.reject(error.response)
    } else {
      if (error.message !== '取消上传') {
        Message.error(error.message || '网络错误！')
      }
      return Promise.reject(error.response)
    }
  }
)

export default request
