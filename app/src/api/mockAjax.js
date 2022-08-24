// 对axios进行二次封装
import axios from 'axios';
import nProgress from 'nprogress';
// 引入进度条样式
import "nprogress/nprogress.css";
// http://gmall-h5-api.atguigu.cn/
const requests = axios.create({
  baseURL:"/mock",
  timeout:5000
});
// 请求拦截器
requests.interceptors.request.use((config) =>{
  // 进度条开始
  nProgress.start();
  return config;
});
// 相应拦截器
requests.interceptors.response.use(
  (res) =>{
  // 进度条结束
  nProgress.done();
},(error)=>{
  // 服务器响应失败回调信息
  return Promise.reject(new Error('faile'))
});
export default requests;