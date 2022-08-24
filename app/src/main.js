import Vue from 'vue'
import App from './App.vue'
// 把三级联动样式引入为全局组件
import TypeNav from '@/components/TypeNav'
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
import '@/mock/server'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  // 注册路由，注册完不管是路由组件还是非路由组件都有$route和$router属性
  router,
  // 注册仓库组件实例多出一个属性$store属性
  store,
}).$mount('#app')
