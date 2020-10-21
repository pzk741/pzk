import Vue from "vue";
import VueRouter from "vue-router";
import login from "../../pages/login"
Vue.use(VueRouter);

import allRoutes from "./allRoutes"

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path :"*",
    component: () =>
    import(/* webpackChunkName: "my" */ "../../pages/page404")
  },
  {
    path: "/index",
    name: "index",
    component: () =>
    import(/* webpackChunkName: "my" */ "../../pages/index"),
    children:allRoutes
  }]

const router = new VueRouter({
  routes
});

export default router;
