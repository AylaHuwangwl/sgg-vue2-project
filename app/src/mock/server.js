// 引入mockjs模块
import Mock from 'mockjs';
// 将JSON格式引入，JSON格式文件默认对外暴露
import banner from './banner.json'
import floor from './floor.json'
// 第一个参数请求地址，第二个参数：请求数据
Mock.mock('/mock/banner',{code:200,data:banner});
Mock.mock('/mock/floor',{code:200,data:floor});