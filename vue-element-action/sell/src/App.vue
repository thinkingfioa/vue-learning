<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/ecmascript-6">
import {urlParse} from '@/common/js/util'
import header from '@/components/header/header.vue'

const ERR_OK = 0

export default {
  data () {
    return {
      // 定义数据的属性
      seller: {
        id: (() => {
          let queryParam = urlParse()
          return queryParam.id
        })()
      }
    }
  },
  // create在Vue创建时调用
  created () {
    // 使用vue-resource发起前后端请求
    this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    }, response => {
      // error callback
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./common/styles/mixin.styl"

#app
  .tab
    display : flex
    width : 100%
    height : 40px
    line-height : 40px
    border-1px(rgba(7, 27, 17, 0.1))
    .tab-item
      flex : 1
      text-align : center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
