<template>
  <div>
    <el-row>
      <el-col :span="6" :offset="9">
        <el-form label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="model.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="model.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" size="small" @click="submit">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      model: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    submit () {
      this.$axios.post('https://f9cacc37-6f00-45f3-8dc7-46a5f77bfa95.mock.pstmn.io/login', this.model)
        .then(res => {
          if (res.data.success) {
            this.$message.success('登录成功')
            this.router.push('/edit')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
