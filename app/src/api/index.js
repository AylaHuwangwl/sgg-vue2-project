// 对相应请求进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
// search界面请求数据，需要带参数,参数至少是一个空对象
export const reqGetSearchInfo = (params) => requests({
  url: "/list",
  method: "post",
  data: params
});
export const reqGetDetails = (skuId) => requests({
  url: `/item/${skuId}`,
  method: "get"
});
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: "post"
});
export const reqCartList = () => requests({
  url: '/cart/cartList ',
  method: 'get'
});
//URL:/api/cart/checkCart/{skuId}/{isChecked}   method:get 
export const reqUpdateCheckedByid = (skuId, isChecked) => requests({
  url: `/cart/checkCart/${skuId}/${isChecked}`,
  method: 'get'
});
// 删除购物车商品
export const reqDeleteCartById = (skuId) => requests({
  url: `/cart/checkCart/${skuId}`,
  method: 'delete'
});
// 获取验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'get'
});