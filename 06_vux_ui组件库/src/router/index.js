import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import MyForm from '@/components/MyForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/myform',
      name: 'MyForm',
      component: MyForm
    }
  ]
})
