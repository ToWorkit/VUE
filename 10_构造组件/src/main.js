// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*
http://mp.weixin.qq.com/s?__biz=MzIzMTU4MzMzOQ==&mid=2247485437&idx=1&sn=f1cde6632e7c22da7067fb1028a30f96&chksm=e8a0bcf9dfd735ef5e68e36793c4d93032fb08659e6f1d368a4a6a8ce32e36cba52bfdf87721&mpshare=1&scene=23&srcid=09207S19PeFFLLtxNeCiutbD#rd
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import Toast from './plugins/toast'
import './assets/style.css'
Vue.use(Toast)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
