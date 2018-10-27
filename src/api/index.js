import axios from 'axios'
const baseURL = 'http://47.106.160.10:8082/api/'
axios.defaults.baseURL = baseURL

axios.defaults.headers = {
  'Content-Type': 'application/x-www-form-urlencoded'
}
axios.interceptors.request.use(function (config) {
  // Do something before request is sent:在请求之前需要做的事情就在这个位置写
  // 1.获取token
  var token = localStorage.getItem('mytoken')
  if (token) {
    // 2.写入请求头
    config.headers['Authorization'] = token
  }
  return config
}, function (error) {
  // Do something with request error：请求失败了的处理在这里写
  return Promise.reject(error)
})

// 登录
export const login = (params) => {
  return axios.post('user/login', params).then((res) => {
    return res.data
  })
}

// 打开对应的箱子
export const openIndexBox = () => {
  return axios.post('box/open/10a29ca3-f978-455b-81e9-de2b3ad5b3ce').then((res) => {
    return res.data
  })
}
