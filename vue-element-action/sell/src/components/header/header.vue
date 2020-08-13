<template>
    <div class="header">
        <!-- 内容区 -->
        <div class="content-wrapper">
            <!--  头像 -->
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar"/>
            </div>
            <!-- 内容区 -->
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div v-if="seller.supports" class="support-count" @click="showDetail">
                <span class="count">{{seller.supports.length}}个</span>
                <i class="icon-keyboard_arrow_right"></i>
            </div>
        </div>
        <!-- 公告区 -->
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
            <i class="icon-keyboard_arrow_right"></i>
        </div>
        <div class="background">
          <img :src="seller.avatar" width="100%" height="100%"/>
        </div>
        <!-- sticky footer套路写法 -->
        <div v-show="detailShow" class="detail">
          <div class="detail-wrapper clearfix">
            <div class="detail-main">
              <h1 class="name">{{seller.name}}</h1>
              <div class="star-wrapper">
                <star :size="48" :score="seller.score"></star>
              </div>
              <div class="title">
                <div class="line"></div>
                <div class="text">优惠信息</div>
                <div class="line"></div>
              </div>
            </div>
          </div>
          <div class="detail-close">
            <i class="icon-close"></i>
          </div>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
import star from '@/common/star/star'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      detailShow: false
    }
  },
  methods: {
    showDetail () {
      this.detailShow = true
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  components: {
    star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../../common/styles/mixin.styl"

.header
    position relative
    overflow hidden
    color: #fff
    background rgba(7, 17, 27, 0.5)
    .content-wrapper
        position: relative
        padding: 24px 12px 18px 24px
        font-size: 0
        .avatar
            display: inline-block
            vertical-align: top
            img
                border-radius: 2px
        .content
            display: inline-block
            font-size: 14px
            margin-left: 16px
            .title
                margin: 2px 0 8px 0
                .brand
                    display: inline-block
                    vertical-align: top
                    width: 30px
                    height: 18px
                    bg-image('brand')
                    background-size: 30px 18px
                    background-repeat: no-repeat
                .name
                    display: inline-block
                    margin-left: 6px
                    front-size: 16px
                    line-height: 18px
                    font-weight: bold
            .description
                display: inline-block
                margin: 0 12px 10px 0
                font-size: 12px
                font-weight: 200
                line-height: 12px
            .support
                .icon
                    display: inline-block
                    vertical-align: top
                    width: 12px
                    height: 12px
                    margin-right: 4px
                    background-size: 12px 12px
                    background-repeat: no-repeat
                    &.decrease
                        bg-image('decrease_1')
                    &.discount
                        bg-image('discount_1')
                    &.guarantee
                        bg-image('guarantee_1')
                    &.invoice
                        bg-image('invoice_1')
                    &.special
                        bg-image('special_1')
                .text
                    line-height: 12px
                    font-size: 10px
        .support-count
            position: absolute
            right: 12px
            bottom: 14px
            padding 0px 8px
            height: 24px
            line-height: 24px
            border-radius: 14px
            background: rgba(0 , 0, 0, 0.2)
            text-align: center
            .count
                vertical-align: top
                font-size: 10px
            .icon-keyboard_arrow_right
                line-height: 24px
                margin-left: 2px
                font-size: 10px
    .bulletin-wrapper
      height: 28px
      line-height: 28px
      padding: 0px 22px 0px 12px
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      background rgba(7, 17, 27, 0.2)
      .bulletin-title
        position relative
        display: inline-block
        vertical-align: top
        margin-top 8px
        width: 22px
        height: 12px
        bg-image('bulletin')
        background-size: 22px 12px
        background-repeat: no-repeat
      .bulletin-text
        vertical-align top
        margin 0px 4px
        font-size 10px
        font-weight 200
      .icon-keyboard_arrow_right
        position absolute
        font-size 10px
        right 12px
        line-height 28px
    .background
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      z-index -1
      filter blur(10px)
    .detail
      position fixed
      z-index 100
      top 0
      left 0
      width 100%
      height 100%
      overflow auto
      background rgba(7, 17, 27, 0.8)
      .detail-wrapper
        min-height 100%
        width 100%
        .detail-main
          margin-top 64px
          padding-bottom 64px
          .name
            line-height 16px
            text-align center
            font-size 16px
            font-weight 700
          .star-wrapper
            margin-top 18px
            padding 2px 0
            text-align center
          .title
            display flex
            width 80%
            margin 30px auto 24px auto
            .line
              flex 1
              position relative
              top -6px
              border-bottom 1px solid rgba(255, 255, 255, 0.2)
            .text
              padding 0 12px
              font-size 14px
      .detail-close
        position relative
        width 32px
        height 32px
        margin -64px auto 0 auto
        clear both
        font-size 32px
</style>
