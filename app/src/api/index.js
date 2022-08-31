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
export const reqUserRegister = (data) => requests({
  url: `/user/passport/register`,
  method: 'post',
  data,
})
export const reqUserLogin = (data) => requests({
  url: `/user/passport/login`,
  method: 'post',
  data,
})
// 获取用户信息
export const reqUserInfo = () => requests({
  url: '/user/passport/auth/getUserInfo',
  method: 'get'
});
//退出登录
//URL:/api/user/passport/logout  get
export const reqLogout = () => requests({
  url: '/user/passport/logout',
  method: 'get'
});
//获取用户地址信息
//URL:/api/user/userAddress/auth/findUserAddressList  method:get
export const reqAddressInfo = () => requests({
  url: '/user/userAddress/auth/findUserAddressList',
  method: 'get'
});
//获取商品清单
//URL:/api/order/auth/trade   method:get
export const reqOrderInfo = () => requests({
  url: '/order/auth/trade',
  method: 'get'
});
//提交订单的接口
//URL:/api/order/auth/submitOrder?tradeNo={tradeNo}  method:post
export const reqSubmitOrder = (tradeNo, data) => requests({
  url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
  data,
  method: 'post'
});