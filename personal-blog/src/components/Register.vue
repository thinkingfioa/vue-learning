<template>
    <div>
      <el-row>
        <el-col :span="6" :offset="9">
          <el-form label-width="80px">
            <el-form-item prop="username" label="用户名">
              <el-input v-model="model.username"></el-input>
            </el-form-item>

            <el-form-item prop="password" label="密码">
              <el-input type="password" v-model="model.password"></el-input>
            </el-form-item>

            <el-form-item prop="rePassword" label="确认密码">
              <el-input type="password" v-model="model.rePassword"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" size="small" @click="submit" >注册</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      model: {
        username: '',
        password: '',
        rePassword: ''
      }
    }
  },
  methods: {
    submit () {
      if (this.model.password !== this.model.rePassword) {
        this.$message.error('两次出入密码不一致.')
        return
      }

      this.$axios.post('https://f9cacc37-6f00-45f3-8dc7-46a5f77bfa95.mock.pstmn.io/register', this.model)
        .then(res => {
          if (res.data.success) {
            this.$message.success('注册成功')
            this.$router.push('/login')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
