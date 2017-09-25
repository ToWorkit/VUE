// 使用组件
import toastCom from './toast.vue'
// 瞅瞅
console.log(toastCom)
/**
 * two
 */
let Toast = {};
Toast.install = (Vue, options) => {
  Vue.prototype.$toast = (test) => {
    let ToastComponent = Vue.extend(toastCom);
    let dataObj = {
      data() {
        return {
          test
        }
      }
    }
    let tpl = new ToastComponent(dataObj).$mount().$el;
    document.body.appendChild(tpl)
  }
}
export default Toast















/**
 *  one
 */
/* vue插件 */
/*let Toast = {};

Toast.install = (Vue, options) => {
  Vue.prototype.$toast = (test) => {
    // 1. 创建构造器，定义好提示信息的模板
    let toastComponent = Vue.extend({
      template: `<div class="vue-test">${test}</div>`
    })
    // 2. 创建实例
    let tpl = new toastComponent().$mount().$el;
    // 3. 将创建的实例添加到body中
    document.body.appendChild(tpl);
    // 4. 延迟2秒后移除该提示
    setTimeout(() => {
      document.body.removeChild(tpl);
    }, 2000)
  }
}

export default Toast
*/
