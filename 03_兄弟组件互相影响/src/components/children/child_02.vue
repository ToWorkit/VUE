<template>
  <div class="sub-container_02">
    <h2>兄弟组件_02</h2>
    <div>兄弟组件_01传来的state值为：</div>
    <div class="attention">{{countNum}}</div>
    <ul class="attention">
      <li v-for="val in allGoods">
        {{val['id']}} -- {{val['name']}}
      </li>
    </ul>
  </div>
</template>
<script>
  // 子组件
  export default {
    name: 'child_02',
    computed: {
      countNum () {
        // 兄弟组件_01分发请求，这边就收数据
        // 读取state的值
        return this.$store.state.count
      },
      allGoods () {
        // 获取筛选后的数据
        return this.$store.getters.filterGoods
      }
    }
  }
</script>
