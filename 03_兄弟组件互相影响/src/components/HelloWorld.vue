<template>
  <div class="container">
    <h1>Hello World</h1>
    <!-- 兄弟组件 -->
    <child></child>
    <child2></child2>
  </div>
</template>
<script>
  import child from './children/child.vue'
  import child2 from './children/child_02.vue'
  export default {
    name: 'helloWorld',
    components: {child, child2}
  }
</script>


<!-- <template>
  <div class="container">
    <h1>{{title}}</h1>
    {{countnum}}
    <div>
      <button @click='press'>click</button>
      <br>
      <br>
      <button @click='press_02'>click_02</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'helloWorld',
    data () {
      return {
        title: 'Hello World'
      }
    },
    methods: {
      press () {
        // commit 方法，触发同步改变state动作
        this.$store.commit({
          type: 'increment',
          amount: 2
        })
      },
      press_02 () {
        // dispatch 方法，触发异步改变state动作
        this.$store.dispatch({
          type: 'incrementAsync',
          amount: 10
        })
      }
    },
    computed: {
      // 读取state， 要放在computed中，而不是data
      countnum () {
        return this.$store.state.count
      }
    }
  }
</script> -->
