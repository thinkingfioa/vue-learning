<template>
  <div>
    <el-row>
      <el-form>
        <el-form-item label="文章标题">
          <el-col :span="6">
            <el-input v-model="model.title"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col>
            <mavon-editor v-model="model.content"></mavon-editor>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col>
            <el-button type="primary" size="small" @click="submit">发表</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'edit',
  data () {
    return {
      model: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    submit () {
      this.$axios.post('https://f9cacc37-6f00-45f3-8dc7-46a5f77bfa95.mock.pstmn.io/publish', this.model)
        .then(res => {
          if (res.data.Code === 200) {
            this.$message.success('发布成功')
          }
        })
    }
  }
}
</script>

<style scoped>

</style>
