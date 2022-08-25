import {
  reqGetSearchInfo
} from "@/api";
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({
    commit
  }, params = {}) {
    //当前这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数（空对象）
    //params形参：是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
}
// 在项目中，getters的主要作用于是为了简化仓库中的数据，把将来组件当中需要哦用的数据简化一下
const getters = {
  goodsList(state){
    // state是当前仓库中的state，不是大仓库中的state
    return state.searchList.goodsList || [];
  },
  trademarkList(state){
    return state.searchList.trademarkList || [];
  },
  attrsList(state){
    return state.searchList.attrsList || [];
  }
};
export default {
  state,
  mutations,
  actions,
  getters,
}