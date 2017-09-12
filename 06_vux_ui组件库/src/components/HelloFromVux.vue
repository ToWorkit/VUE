<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png">
      <h1> </h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" :value="msg" is-link></cell>
    </group>
    <Loading v-model="isLoading"></Loading>
    <x-button type="primary" @click.native="clickMe()">显示/隐藏</x-button>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'
// 引入loading组件
import {Loading} from 'vux'
// 引入button组件
import {XButton} from 'vux'

export default {
  components: {
    Group,
    Cell,
    Loading,
    XButton
  },
  methods: {
    clickMe () {
      this.isLoading = !this.isLoading
    }
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!',
      isLoading: false
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px
}
</style>
