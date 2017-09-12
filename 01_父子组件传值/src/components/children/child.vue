<template>
  <div class="sub-container">
    <h2>子级组件</h2>
    <div>父级传递下来的数据:</div>
    <div>字符串：{{sendMessage}}</div>
    <div>数字：{{sendNum}}</div>
    <div>
      <ul v-for="item of list">
        <li>{{item.name}}</li>
      </ul>
    </div>
<!--     <div>子级影响父级(不会)</div>
<input type="text" v-model="sendMessage"> -->
  </div>
</template>
<script>
  export default {
    name: 'child',  // 子级必须设置name， 否则无法在父组件import
    props: {
      sendMessage: {
        type: String, // 传入数据类型
        required: true // 必传
      },
      sendNum: {
        type: Number, // 传入类型必须是数字
        required: true
      },
      // 如果是数组或对象
      sendObj: {
        validator (val) {
          if (Object.prototype.toString.call(val) === '[object Array]' || Object.prototype.toString.call(val) === '[object Object]') {
            return true
          }
        }
      }
    },
    data () {
      /* let parentObj = this.sendObj // 父组件传递的json
      let childObj = JSON.parse(JSON.stringify(parentObj)) // 复制一份，避免父组件的数据被污染
      childObj.push({id: 3, name: 'make'}) // 追加一个对象
      return {
        list: childObj
      } */
      return {
        list: null
      }
    },
    // 监听父组件sendObj的变换
    watch: {
      // 发生变化时，第二个参数默认为旧值
      sendObj (newVal, oldVal) {
        console.log(newVal, oldVal)
        if (newVal !== oldVal) {
          let newObj = JSON.parse(JSON.stringify(newVal)) // 复制一份，避免父级数据污染
          newObj.push({id: 3, name: 'make_01'}) // 追加一个
          this.list = newObj // 将新值赋予data的list
        }
      }
    }
  }
</script>
<style scoped>
  .sub-container {
    background: #f1f1f1;
    color: #CCC;
  }
</style>
