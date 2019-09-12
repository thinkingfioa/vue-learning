<template>
  <div class='onlineAudit'>
    <!-- 表格页面 -->
    <el-row :gutter="12">
      <el-col :span="24">
        <el-card shadow="always" class ="ml20, mr20" v-show="showTab">
          <!-- 表格上面 -->
          <el-form :inline="true" :model="formInline" label-width="100px" class="demo-form-inline mt20">
            <el-form-item label="患者名称">
              <el-input v-model="formInline.patientName" size="small" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="医院名称">
              <el-input v-model="formInline.hospitalName" size="small" clearable>
              </el-input>
            </el-form-item>
            <el-form-item label="志愿者">
              <el-input v-model="formInline.volunteer" size="small" clearable>
              </el-input>
            </el-form-item>
            <br>
            <el-form-item label="状态">
              <el-select v-model="formInline.checkStatus" size="small" clearable>
                <el-option label="待审核" :value="1">
                </el-option>
                <el-option label="审核通过" :value="2">
                </el-option>
                <el-option label="已驳回" :value="3">
                </el-option>
                <el-option label="全部" :value="0">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item class="block" label="创建时间">
              <el-date-picker
                v-model="date"
                @change="setDate"
                size="small"
                type="daterange"
                algin="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions">
              </el-date-picker>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" size="small">查询</el-button>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="downExcel" size="small">导出</el-button>
            </el-form-item>
          </el-form>
          <!-- 表格 -->
          <el-table
          v-loading="loading"
          size="small"
          :data="tableData.rows"
          style="width: 100%">
            <el-table-column prop="patientName" label="患者姓名">
            </el-table-column>
            <el-table-column prop="provinceName" label="省份">
            </el-table-column>
            <el-table-column prop="cityName" label="城市">
            </el-table-column>
            <el-table-column prop="hospitalName" label="医院">
            </el-table-column>
            <el-table-column prop="hospitalDeptName" label="科室">
            </el-table-column>
            <el-table-column prop="doctorName" label="医生">
            </el-table-column>
            <el-table-column prop="createUserName" label="志愿者">
            </el-table-column>
            <el-table-column prop="isFirst" label="类型" :fromatter="setIsFirst">
            </el-table-column>
            <el-table-column prop="createTime" label="填报日期" :formatter="setTime">
            </el-table-column>
            <el-table-column prop="commitTime" label="最后提交日期" :formatter="setTime">
            </el-table-column>
            <el-table-column prop="status" label="审核结果" :formatter="setStatus">
            </el-table-column>
            <el-table-column label="操作">
              <el-button type="text">审核</el-button>
            </el-table-column>
          </el-table>
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-sizes="[10, 20, 100]"
            :page-size="10"
            layout="total, sizes, prev, pager, next, jumper"
            :total="tableData.total"
            class="mt20 tr">
          </el-pagination>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'onlineAudit',
  data () {
    return {
      loading: false,
      showTab: true,
      currentPage: 1,
      tableData: {
        rows: [],
        total: 0
      },
      formInline: {
        startDate: '',
        endDate: '',
        patientName: '',
        hospitalName: '',
        volunteer: '',
        checkStatus: 1
      },
      date: [],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      create () {
        this.getList(...this.formInline)
      },
      methods: {
        setDate (date) {
          this.formInline.startDate = date[0]
          this.formInline.endDate = date[1]
        },
        handleSizeChange (val) {
          this.selectRows = val
        },
        onsubmit () {

        },
        downExcel () {

        },
        setIsFirst (row, column, cellValue) {
          return cellValue || cellValue === 0 ? this.$my.isFirst[cellValue] : ''
        },
        setTime (row, column, cellValue) {
          return cellValue ? this.$my.timestampToTime(cellValue, 'YMDHMS') : ''
        },
        setStatus (row, column, cellValue) {
          return cellValue || cellValue === 0 ? this.$my.status[cellValue] : ''
        },
        getList (val = {}) {
          let that = this
          this.loading = true
          let data = {
            page: 1,
            rows:that.selectRows?that.selectRows:that.$my.rows,
            flag:'online',
            ...val
          }
          data.number = data.number?data.number.join(','):''
          this.$axios.post(that.$my.api + '/bms/visit/getList', data,{headers:{token:JSON.parse(localStorage.getItem('userInfo')).token}}).then(res => {
            if(res.data&&res.data.code === 200){
              that.loading = false;
              that.tableData = res.data.data
            }else{
              that.loading = false
              that.$message({
                message: res.data.msg,
                type: 'error',
                duration: 1500
              })
              return false
            }
          }).catch(function (error) {
            that.loading = false
          })
        }
      }
    }
  }
}
</script>

<style scoped>
.ml20 {
  margin-left: 20px;
}
.mr20 {
  margin-right: 20px;
}
.mt20 {
  margin-top: 20px;
}
.tr {
  text-align: right;
}
.mt20 {
  margin-top: 20px;
}
</style>
