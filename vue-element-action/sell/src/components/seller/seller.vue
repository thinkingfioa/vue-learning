<template>
    <div class="seller">
      <div class="seller-container">
        <div class="overview">
          <h1 class="title">{{seller.name}}</h1>
          <div class="desc">
            <star :size="36" :score="seller.score" class="star-wrapper"></star>
            <span class="text count">({{seller.ratingCount}})</span>
            <span class="text">月售{{seller.sellCount}}单</span>
          </div>
          <ul class="remark">
            <li class="block">
              <h2 class="title">起送价</h2>
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
  .seller
    .seller-container
      .overview
        padding 0 18px
        .title
          padding-top 18px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
          margin-bottom 8px
        .desc
          line-height 18px
          font-size 0
          border-bottom 1px solid rgba(7, 17, 27, 0.1)
          .star-wrapper
            display inline-block
            vertical-align top
          .text
            font-size 10px
            color rgb(77, 85, 93)
          .count
            margin 0 12px 0 8px
        .remark
          .block
            display inline-block
            vertical-align top
            padding-top 18px
            border-right 1px solidrgba(7, 17, 27, 0.1)
            .title
              line-height 10px
              font-size 10px
              color rgb(147, 153, 159)
            .content
              margin-top 4px
              font-size 10px
              .stress
                line-height 24px
                font-size 24px
                font-weight 200
                color rgb(7, 17, 27)
</style>
