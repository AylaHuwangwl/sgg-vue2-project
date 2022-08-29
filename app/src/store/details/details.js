import {
  reqGetDetails,
  reqAddOrUpdateShopCart
} from "@/api";
// import { reqAddOrUpdateShopCart } from '@/api'
const state = {
  details: {},
};
const mutations = {
  GETDETAILS(state, details) {
    state.details = details;
  }
  // ADDORUPDATESHOPCART(state,details){
  //   state.details = details;
  // }
};
const actions = {
  async getGoodInfo({
    commit
  }, skuId) {
    let result = await reqGetDetails(skuId);
    if (result.code == 200) {
      commit("GETDETAILS", result.data);
    }
  },
  async addOrUpdateShopCart({
    commit
  }, {
    skuId,
    skuNum
  }) {
    //发请求:前端带一些参数给服务器【需要存储这些数据】，存储成功了，没有给返回数据
    //不需要在三连环（仓库存储数据了）
    //注意:async函数执行返回的结果一定是一个promise【要么成功，要么失败】
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    if (result.code == 200) {
      //返回的是成功的标记
      return "ok";
    } else {
      //返回的是失败的标记
      return Promise.reject(new Error("faile"));
    }
  },
};
const getters = {
  categoryView(state) {
    return state.details.categoryView || {};
  },
  skuInfo(state) {
    return state.details.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.details.spuSaleAttrList || {};
  },
};
export default {
  state,
  mutations,
  actions,
  getters,
}