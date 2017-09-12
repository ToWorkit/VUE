<template>
  <div class="sub-container">
    <h3>{{title}}</h3>
    <button @click="press">改变state</button>
  </div>
</template>
<script>
  // 子组件
  export default {
    name: 'child',
    data () {
      // 参与流动变化的数据统一放入vuex管理
      return {
        title: '兄弟组件_01' // 单组件本身使用的变量
      }
    },
    methods: {
      // 当点击按钮时，就改变了state总的count值
      press () {
        // 改变state
        this.$store.dispatch({type: 'incrementAsync', amount: 10})
      }
    }
  }
</script>
