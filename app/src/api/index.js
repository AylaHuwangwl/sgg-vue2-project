// 对相应请求进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
// search界面请求数据，需要带参数,参数至少是一个空对象
export const reqGetSearchInfo = (params)=>requests({url:"/list",method:"post",data:params});