// vue的插件必须暴露一个对象，且该对象有install方法
let myPlugins = {};
myPlugins.install = function(Vue,options){
//   // console.log("调用");
// console.log(Vue);
// console.log(options);
// 全局指令，在标签中用v-${options.name}调用
  Vue.directive(options.name,(element,params)=>{
    // element.innerHTML = params.value.toUpperCase();
    // console.log(params);
  })
}
export default myPlugins;