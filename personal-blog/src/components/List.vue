<template>
  <el-row>
    <el-col :span="16" :offset="4">
      <el-table :data="list">
        <el-table-column prop="id" label="#">
        </el-table-column>

        <el-table-column prop="title" label="标题">
        </el-table-column>
      </el-table>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$axios.get('https://f9cacc37-6f00-45f3-8dc7-46a5f77bfa95.mock.pstmn.io/list').then(res => {
        this.list = res.data.Data
      })
    }
  }
}
</script>

<style scoped>

</style>
