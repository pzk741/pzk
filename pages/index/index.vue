<template>
  <div class="index">
    <el-container>
      <!-- 左边部分 -->
      <el-aside width>
        <div class="logo"></div>
        <!-- 菜单选项 -->
        <el-menu
          default-active="/index"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          active-text-color="rgb(228, 120, 51)"
          text-color="rgb(78, 91, 248)"
          router
        >
          <el-menu-item index="/index">
            <i class="iconfont">&#xe6bb;</i><span>管理首页</span> 
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont" style="margin-right:10px;color:inherit;font-size:20px">&#xe649;</i>
              <span slot="title">
                <span>学员管理</span>
              </span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/index/StudentManager/studentProduct">
                <i class="iconfont">&#xe7a9;</i><span>学员项目管理</span>
              </el-menu-item>
              <el-menu-item index="/index/StudentManager/studentProfile">
                <i class="iconfont">&#xe60b;</i><span>学员资料</span>
              </el-menu-item>
              <el-menu-item index="/index/StudentManager/studentDormitory">
                <i class="iconfont">&#xe503;</i><span>学员宿舍</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/index/Attendance">
            <i class="iconfont">&#xe60f;</i><span>考勤管理</span>
          </el-menu-item>
          <el-menu-item index="/index/Statistics">
            <i class="iconfont">&#xe679;</i><span>数据统计</span>
          </el-menu-item>
          <el-menu-item index="/index/Mine">
            <i class="iconfont">&#xe618;</i><span>我的中心</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- header头部 -->
        <el-header>
          <!-- 切换按钮 -->
          <span class="iconfont" id="change-button" @click="change_menu">&#xe985;</span>
          <el-row :gutter="20">
            <el-col :span="6" :offset="6" :push="3">
              <div class="grid-content bg-purple">千锋管理系统</div>
            </el-col>
            <el-col :span="6" :offset="6">
              <div class="grid-content bg-purple">
                <el-avatar :src="circleUrl"></el-avatar>
                &nbsp;&nbsp;&nbsp;
                <span>欢迎您：</span>
                <a href="#" style="color:#fff">{{userInfo.nickname}}</a>&nbsp;&nbsp;&nbsp;
                <span class="quit" @click="quit">退出</span>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <!-- 主题部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { getLoginLog } from "../../api/index"
import { mapState } from "vuex"
import router from "@/router"
export default {
  // mounted () {
  //   getLoginLog()
  //   .then(res=>{
  //     console.log(res)
  //   })
  // },
  computed: {
    ...mapState(['userInfo'])
  },
  data() {
    return {
      // 导航菜单
       circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      isCollapse: false
    };
  },
  methods: {
    quit(){
      //鼠标点击返回登录页,并清除localstoarge
      localStorage.removeItem("user-Info")
      localStorage.removeItem("login-token")
      this.$router.push("/")
    },
    change_menu(el) {
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse) {
        el.target.innerHTML = "&#xe504;";
      } else {
        el.target.innerHTML = "&#xe985;";
      }
    },
    // 导航菜单
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    // 导航菜单
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style scoped>
.el-header,
.el-footer {
  width: 100%;
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  white-space: nowrap;
}
.el-header {
  background: linear-gradient(135deg, #4c67ff, #5635df);
  position: relative;
}
.el-aside {
  background: linear-gradient(135deg, #4c67ff, #5635df);
  color: #333;
  text-align: center;
  height: 100%;
  position: relative;
}
.el-menu{
  border: 1px solid black;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.index {
  height: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  height: 60px;
  color: #fff;
}
.logo {
  height: 60px;
  background-image: url("../../src/assets/imgs/logo..png");
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
#change-button {
  position: absolute;
  left: 20px;
  color: #fff;
  border: 0;
  background-color: inherit;
  font-size: 30px;
  z-index: 10;
}
.el-menu-item .iconfont{
  margin-right: 10px;
  font-size: 20px;
  color:inherit;
}
.quit{
  color:#ff69b4;
  cursor:pointer
}
.el-avatar--circle{
  vertical-align: middle;
}
.el-menu-vertical-demo[data-v-57280228]:not(.el-menu--collapse){
  min-height: 500px;
}
</style>
