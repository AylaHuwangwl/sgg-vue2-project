// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
import Home from '@/pages/Home/index.vue';
import Search from '@/pages/Search/index.vue';
import Login from '@/pages/Login/index.vue';
import Register from '@/pages/Register/index.vue';
// 重写routerVue的push方法
// 先保存原push方法再进行重写
let originPush = VueRouter.prototype.push;
let originRepalce = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, reject, resolve)
  } else {
    originPush.call(this, location, () => {}, () => {});
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originRepalce.call(this, location, reject, resolve)
  } else {
    originRepalce.call(this, location, () => {}, () => {});
  }
}
// 配置路由
export default new VueRouter({
  routes: [{
      path: "/home",
      component: Home,
      // 路由元信息
      meta: {
        show: true
      }
    },
    {
      path: "/search/:keyword?",
      component: Search,
      meta: {
        show: true
      },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false
      }
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false
      }
    },
    {
      path: "/",
      redirect: "/home",
    }
  ]
})