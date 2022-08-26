// 配置路由
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes'
// 使用插件
Vue.use(VueRouter);
// 引入路由组件
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
  routes,
  scrollBehavior(to, from, savedPosition) {
    // 始终滚动到顶部
    return { top: 0 }
  },
})