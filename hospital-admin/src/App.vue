<template>
  <div id="app">
    <el-container class="h100">
      <el-aside :width="collapse?'auto':'200px'" class="flex colu">
        <div class="logo"></div>
        <el-menu
          default-active="/OnlineAudit"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/onlineAudit">
            <i class="el-icon-finished"></i>
            <span slot="title">线上审核</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <span :class="[collapse?'el-icon-s-unfold':'el-icon-s-fold','lh60','cursor']" @click="collapse = !collapse"></span>
          <span>
            <el-dropdown @Command="handleCommand">
              <el-button type="info" size="mini">
                admin
                <i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="logout">退出</el-dropdown-item>
                <el-dropdown-item command="changePwd">修改密码</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </span>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      collapse: false
    }
  },
  methods: {
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #f1f1f1;
}
.el-header {
  color: #333;
  line-height: 60px;
}
.el-aside {
  background-color: rgb(238, 241, 246);
  line-height: 60px;
  display: flex;
  flex-direction: column;
}
.flex{
  display: flex;
}
.colu{
  flex-direction: column;
}
.h100 {
  height: 100%;
}
.logo {
  width: calc(100% - 1px);
  height: 60px;
  background: url('./assets/images/logo.jpg') no-repeat center center;
  background-size: 100% 100%;
  box-sizing: border-box;
}
.header {
  text-align: right;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
}
.lh60 {
  line-height: 60px;
}
.cursor {
  cursor: pointer;
}
</style>
