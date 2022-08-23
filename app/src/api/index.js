// 对相应请求进行统一管理
import requests from "./request";
export const reqgetCategoryList = () =>requests.get(`/product/getBaseCategoryList`);