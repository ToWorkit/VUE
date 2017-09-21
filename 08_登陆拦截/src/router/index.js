/*
http://mp.weixin.qq.com/s?__biz=MzIzMTU4MzMzOQ==&mid=2247485415&idx=1&sn=a3ef819acfc2b5373c0f204ed7a0b621&chksm=e8a0bce3dfd735f54ec43ff3ad3d77300dd9552f503c41fa66d9110173aed7fee75c0be7294a&mpshare=1&scene=23&srcid=0920Hh532XbKB8Rl3NO4mAFF#rd
 */
import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/store'
import Index from '@/components/index'
import Login from '@/components/login'
import Detail from '@/components/detail'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '/',
    component: Index
  },
  {
    path: '/detail',
    name: 'detail',
    meta: {
      auth: true
    },
    component: Detail
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

// 页面刷新重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('login', window.locaStorage.getItem('token'))
}

let router = new Router({routes:routes})

// 作用于全局，当一个导航触发时，回调就会调用
/**
 * to：即将要进入的目标路由
 * from：当导航正要离开路由
 * next：继续执行
 */
router.beforeEach((to, from, next) => {
  /*在这个路由中，在detail页面，多增加了一个变量，这个变量名可以随便起，表示这是个需要经过登录验证后才能访问的路由；这还不够，还需保证token必须存在的情况下，才允许被访问，否则就跳转到login登录页面。*/
  if (to.meta.auth) {
    if (store.state.token) {
      next();
    } else {
      // 如果没有token，跳转到登录页面
      next({path: '/login'})
    }
  } else {
    next();
  }
})
export default router;

