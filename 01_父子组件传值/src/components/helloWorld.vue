<template>
  <div class="container">
    <h1>父级组件</h1>
    <input type="text" v-model="myMsg">
    <ul v-for="item of myObj">
      <li>{{item.name}}</li>
    </ul>
    <!-- 绑定父组件的变量，myMsg -->
    <div>
      <!-- 子组件接受变量时，需要变为驼峰命名法sendMessage -->
      <child :send-message="myMsg" :send-num="myNum" :send-obj="myObj"></child>
    </div>
  </div>
</template>
<script>
  // 引入子组件, 设定为 child
  import child from './children/child.vue'
  export default {
    name: 'helloWorld',
    data () {
      // 初始化obj
      let obj = {
        myMsg: 'Hello, My Son!',
        myNum: 123,
        myObj: []
      }
      // 延迟返回myObj, 模拟ajax
      setTimeout(() => {
        obj['myObj'] = [{id: 1, name: 'jack'}, {id: 2, name: 'tom'}]
      }, 2000)
      return obj
    },
    components: {child} // 局部注册子组件
  }
</script>
<style scoped>
  .container {
    background: #ccc;
    color: #DDD;
  }
</style>
