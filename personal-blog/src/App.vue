<template>
  <div id="app">
    <el-container>
      <el-header style="text-align:center;">
        <span>个人博客系统</span>
        <span style="float: right;">
          <el-button type="primary" size="mini" icon="el-icon-edit">发布文章</el-button>
          <el-button type="default" size="mini">登录</el-button>
        </span>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
