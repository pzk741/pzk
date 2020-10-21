import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//引入基础css文件和自定义css文件
import "@/assets/style/base.css"
import "@/assets/style/el_reset.css"
import "@/assets/iconFonts/iconfont.css"

//引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//创建全局element
Vue.use(ElementUI);

//路由前置钩子(导航守卫)
router.beforeEach((to, from, next) => {
  //用户登入之后，localstroage中会保存token
  let token = localStorage.getItem("login-token")
  if(token){
    //如果是注册和登录页面，直接放行
    next()
  }else{//token没有找到
    //判断是否为登录页面
    if(to.path === "/"){
      next()
    }else{//访问的不是登录页，直接跳转到登录页
      next({ path:"/" })
    }
  }
  // next()
})

import "./utils/recursionRoutes.js"


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
