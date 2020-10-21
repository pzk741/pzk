import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//解决刷新页面userInfo为空的问题
let userInfo = localStorage.getItem("user-Info") || "{}";
userInfo = JSON.parse(userInfo)

export default new Vuex.Store({
  state: {
    userInfo
  },
  mutations: {
    SETUSERINFO(state,payload){
      state.userInfo = payload
    }
  },
  actions: {},
  getters: {},
  modules: {}
});
