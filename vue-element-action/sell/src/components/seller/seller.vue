<template>
  <div class="seller">
    <div class="seller-container">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <star :size="36" :score="seller.score" class="star-wrapper"></star>
          <span class="text">({{seller.ratingCount}})</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="title">商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2 class="title">平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
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
  components: {
    star
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/styles/mixin.styl"

  .seller
    position absolute
    top 174px
    bottom 0
    left 0
    width 100%
    overflow hidden
    .seller-container
      .overview
        padding 18px
        .title
          margin-bottom 8px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc
          padding-bottom 18px
          line-height 18px
          font-size 0
          border-1px(rgba(7, 17, 27, 0.1))
          .star-wrapper
            margin-right 8px
            display inline-block
            vertical-align top
          .text
            margin-right 12px
            display inline-block
            vertical-align top
            font-size 10px
            color rgb(77, 85, 93)
        .remark
          display flex
          padding-top 18px
          .block
            flex 1
            text-align center
            border-right 1px solid rgba(7, 17, 27, 0.1)
            &:last-child
              border none
            h2
              margin-bottom 4px
              line-height 10px
              font-size 10px
              color rgb(147, 153, 159)
            .content
              line-height 24px
              font-size 10px
              color rgb(7, 17, 27)
              .stress
                font-size 24px
                font-weight 200
</style>
