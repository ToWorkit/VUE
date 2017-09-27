import Vue from 'vue'
import Router from 'vue-router'

import List from '@/components/list'
import Detail from '@/components/detail'
Vue.use(Router)

const routes = [
  {
    path: '/',
    name: '/',
    component: List
  }, {
    path: '/detail',
    name: 'detail',
    component: Detail
  }
];

let router = new Router({routes:routes});
export default router;
