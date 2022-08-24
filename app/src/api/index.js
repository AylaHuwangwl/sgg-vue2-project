// 对相应请求进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax";
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqGetBannerList = () => mockRequests.get("/banner");
//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");