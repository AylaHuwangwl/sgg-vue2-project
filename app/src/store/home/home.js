import {
  reqgetCategoryList,
  reqGetBannerList
} from "@/api";
const state = {
  // 服务器返回的数据就是数组，服务器返回什么初始值就是什么
  categoryList: [],
  bannerList: [],
};
const mutations = {
  GETCATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
};
const actions = {
  async getCategoryList({
    commit
  }) {
    //reqgetCategoryList返回的是一个Promise对象
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqgetCategoryList();
    if (result.code == 200) {
      commit("GETCATEGORYLIST", result.data);
    }
  },
  async getBannerist({
    commit
  }) {
    //reqgetCategoryList返回的是一个Promise对象
    //需要用await接受成功返回的结果，await必须要结合async一起使用（CP）
    let result = await reqGetBannerList();
    console.log(result);
    // if (result.code == 200) {
    //   commit("GETBANNERLIST", result.data);
    // }
  },
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};