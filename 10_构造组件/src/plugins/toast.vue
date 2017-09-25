<!-- 封装为组件 -->
<template>
  <div class="vue-toast" v-if='isShow'>
  {{test}}
  </div>
</template>
<script>
  export default {
    name: 'toastCom',
    data () {
      return {
        test: "",
        time: 2000,
        isShow: true
      }
    },
    mounted () {
      this.close()
    },
    methods: {
      close () {
        var that = this;
        setTimeout(() => {
          this.isShow = false
        }, this.time)
      }
    }
  }
</script>
<style scoped>
.vue-toast{
   width:200px;
   height:30px;
   line-height:30px;
   text-align:center;
   color:#fff;
   background:#000;
   margin:0 auto;
}
</style>
