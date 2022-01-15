//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
import mockRequests from './mockAjax'

//示例
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
// export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
export const reqBannerList=()=>mockRequests.get(`/banner`)