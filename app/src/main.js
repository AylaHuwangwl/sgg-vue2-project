import Vue from 'vue'
import App from './App.vue'
// 把三级联动样式引入为全局组件
import TypeNav from '@/pages/Home/TypeNav'
// 引入路由
import router from '@/router'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  // 注册路由，注册完不管是路由组件还是非路由组件都有$route和$router属性
  router
}).$mount('#app')
