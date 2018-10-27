// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'

Vue.config.productionTip = false

Vue.use(ElementUI)
router.beforeEach((to, from, next) => {
  var token = localStorage.getItem('mytoken')
  // 如果有token值，则next
  if (token) {
    next()
  } else {
    // 如果没有token,判断如果是to到/login,next
    if (to.path === '/login') {
      next()
    } else {
    // 如果没有token,且不是进行登陆操作，则重定向到/login
      next({name: 'Login'})
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
