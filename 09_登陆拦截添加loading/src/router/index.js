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
];
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit('login',{token:window.localStorage.getItem('token')} );//注意载荷的写法
}

let router = new Router({routes:routes});

// 作用于全局，当一个导航触发时，回调就会调用
/**
 * to：即将要进入的目标路由
 * from：当导航正要离开路由
 * next：继续执行
 */
router.beforeEach((to, from, next)=>{
 if(to.meta.auth){
    // 两层判断
   if(store.state.token){
    next();
   }else{
//如果判断没有token，跳转到登录页面
    next({path:'/login'});
   }
 }else{
   next();
 }
});
export default router;
