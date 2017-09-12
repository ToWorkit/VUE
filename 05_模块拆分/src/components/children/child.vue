<template>
  <div class="sub-container">
    <h3>{{title}}</h3>
    <div>积分：{{originalScore}}</div>
    <div>价格：{{originalPrice}}</div>
    <button @click="press">会员价格</button>
  </div>
</template>
<script>
  export default {
    name: 'child',
    data () {
      return {
        title: '兄弟组件_01'
      }
    },
    computed: {
      originalScore () {
        // score
        return this.$store.state.score.score
      },
      originalPrice () {
        return this.$store.state.price.price
      }
    },
    methods: {
      // 当点击按钮时就改变了state中的count的值
      press () {
        // 改变state
        this.$store.dispatch({type: 'findpriceSync'})
      }
    }
  }
</script>
