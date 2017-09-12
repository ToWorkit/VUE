<template>
 <div>
  <x-header>乘机人信息</x-header>
  <group>
   <x-input title="联系人：" v-model="username" placeholder="请输入联系人姓名" text-align="right"></x-input>
  </group>

  <group title="怎么称呼您：">
   <radio v-bind:options="[{key:0,value:'先生'},{key:1,value:'女士'}]" @on-change="chooseSex"></radio>
  </group>

  <group>
   <datetime v-model="birthday" title="生日" :start-date="birthdaystart" :end-date="birthdayend"></datetime>
  </group>

  <group>
   <calendar v-model="startdate" title="出发日期" :weeks-list="weekList"></calendar>
  </group>

  <group>
   <x-number title="乘机人数量" v-model="num" :min="0" :max="5" @on-change="chooseNum" width="100px"></x-number>
  </group>

  <group>
   <x-switch title="婚否" prevent-default v-model="marriage" @on-click="chooseMarriage"></x-switch>
  </group>

  <group>
   <actionsheet v-model="isShow" v-bind:menus="['经济舱','商务舱','尊享特等舱']" @on-click-menu="chooseCabin"></actionsheet>
  </group>

  <group>
   <cell title="请选择舱位" v-model="cabin" v-on:click.native="showCabin" text-align="right" is-link></cell>
  </group>

  <group>
   <checklist title="请选择餐食或饮料（可多选）" v-bind:options="[{key: 'food0', value: '牛肉饭'}, {key: 'food1', value: '酸奶'}, {key: 'food2', value: '果汁'}]" v-model="food" @on-change="chooseFood"></checklist>
  </group>

  <group>
   <x-textarea title="详细家庭住址" v-model="address"></x-textarea>
  </group>

  <group>
   <x-button type="primary" v-on:click.native="sub">提交</x-button>
  </group>
 </div>
</template>
<script>
import { XHeader, Group, Cell, XInput,XButton, Selector, Datetime, Calendar, XNumber, XTextarea, XSwitch, Actionsheet, Radio, Checklist} from 'vux'

export default {
  name: 'MyForm',
  data () {
    // 日期
    let now = new Date()
    let cmonth = now.getMonth() + 1
    let day = now.getDate()
    if (cmonth < 10) cmonth = '0' + cmonth
    if (day < 10) day = '0' + day
    let today = now.getFullYear() + '-' + cmonth + '-' + day
    return {
      username: '',
      sex: 0,
      num: 0,
      marriage: false,
      isShow: false,
      showModal: true,
      cabin: '',
      food: [],  // 多选项，空数组
      address: '',
      birthday: '1990-01-01',
      birthdaystart: '1800-01-01',
      birthdayend: today,
      startdate: today,
      weekList: ['周日', '周日', '周二', '周三', '周四', '周五', '周六']
    }
  },
  methods: {
    chooseSex (value) {
      this.sex = value
      console.log(`radio的值${this.sex}`)
    },
    chooseNum (value) {
      this.num = value
      console.log(this.num)
    },
    chooseMarriage (newVal, oldVal) {
      this.marriage = newVal
      console.log(this.marriage)
    },
    chooseCabin(key,item) {
     console.log(key);
     console.log(item);
     this.cabin = item;
    },
    showCabin() {
     this.isShow = !this.isShow;
    },
    chooseFood(value) {
     console.log(value);
    },

    sub() {
     let that = this;
     console.log('姓名:', this.username);
     console.log('性别:', this.sex);
     console.log('乘机人数量:', this.num);
     console.log('婚否:', this.marriage);
     console.log('舱位:', this.cabin);
     console.log('餐食:', this.food);
     console.log('地址:', this.address);
     console.log('生日:', this.birthday);
     console.log('出发日期:', this.startdate);
     if (!this.username) {
  // 提示姓名不可为空
      this.$vux.alert.show({
       title: '温馨提示',
       content: '联系人姓名不可为空',
       onHide () {
        console.log('hide alert');
       }
      });
      return false;
     } else if (!this.address) {
       this.$vux.toast.text('请填写家庭住址', 'middle');
       return false;

     } else {
  // 确定提交信息？
      this.$vux.confirm.show({
       title: '温馨提示您',
       content: '确定提交所有信息？',
       onCancel () {
        console.log('cancel');
        return false;
       },
       onConfirm () {
        console.log('confirm');
        console.log(that.$http);
        that.$http.get('/static/check.json').then((res) => {
          console.log(res.data);
          if(res.data.status === 'ok') {
          that.$router.push({ path: '/' }) // 验证完成后跳转到首页
         }

       });
      }
    })

    }
   }
   },
   components: {
    XHeader,
    Group,
    Cell,
    XInput,
    Radio,
    XNumber,
    XSwitch,
    Actionsheet,
    Checklist,
    XTextarea,
    XButton,
    Datetime,
    Calendar
   }
  }
</script>
