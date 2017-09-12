

<!-- https://mp.weixin.qq.com/s?__biz=MzIzMTU4MzMzOQ==&mid=2247485230&idx=1&sn=2c45b071eaa4764c67801d2510d99129&chksm=e8a0bc2adfd7353c0b3d38304846bca339302fd4c2bc421f1163f721eec0003c9f5a9a2c5de9&scene=0#rd -->




<template>
  <div class="container">
    <h1>父级组件</h1>
    <div>
      <child></child>
      <child2></child2>
    </div>
  </div>
</template>
<script>
  // 引入子组件，需要设定子组件的name
  import child from './child/child.vue'
  import child2 from './child/child2.vue'
  export default {
    name: 'helloWorld',
    data () {
      return {}
    },
    components: {child, child2} // 局部注册子组件
  }
</script>













<!-- <template>
  <div class="container">
    <h1>父级组件</h1>
    <span class="fromson">{{myMsg}}</span>
    <div>
      message 为子级控件上绑定的通知，二recieveMessage为父组件监听到后的方法
      <child @message='recieveMessage'></child>
    </div>
  </div>
</template>
<script>
  // 引入子组件，需要设定子组件的name为child
  import child from './child/child.vue'
  export default {
    name: 'helloworld',
    data () {
      return {
        myMsg: null
      }
    },
    methods: {
      recieveMessage (msg) {
        this.myMsg = msg
      }
    },
    components: {child} // 局部注册子组件
  }
</script>
 -->
