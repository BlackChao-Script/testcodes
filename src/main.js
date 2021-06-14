import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 导入图片懒加载组件
import load from"vue-lazyload"

// 导入时间格式化组件
import moment from "moment";

// 引入字体图标
import iconfont from "./assets/fonts/iconfont.css";

// 定义时间格式化全局过滤器
Vue.filter("fromatDate", function(value) {
  return moment(value).format("MM-DD h:mm");
});

// 使用图片懒加载
Vue.use(load)

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
