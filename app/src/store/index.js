import Vue from 'vue';
import Vuex from 'vuex';
import home from "./home/home";
import search from "./search/search";
import details from "./details/details";
import shopcart from "./shopcart/shopcart";
// 使用插件一次
Vue.use(Vuex);
// 仓库存储数据的地方
const state = {
};
// 修改state的唯一地方
const mutations = {
};
// 书写自己的业务逻辑，处理异步
const actions = {
};
// 可以理解为计算属性
const getters = {};
export default new Vuex.Store({
  //模块：把小仓库进行合并变为大仓库
  modules: {
    home,
    search,
    details,
    shopcart,
  },
  namespaced:true
});