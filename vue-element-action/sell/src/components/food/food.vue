<template>
  <transition name="move">
    <div v-show="showFlag" class="food" ref="foodWrapper">
      <div class="food-content">
        <div class="image-header">
          <img class="image" :src="food.image"/>
          <div class="back" @click="hide">
            <i class="icon-arrow_lift"/>
          </div>
        </div>
        <div class="content">
          <h1 class="title">{{food.name}}</h1>
          <div class="detail">
            <span class="sell-count">月售{{food.sellCount}}份</span>
            <span class="rating">好评率{{food.rating}}%</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
          </div>
          <div class="cartcontrol-wrapper">
            <cartcontrol :food="food" @cart-add="cartAdd"></cartcontrol>
          </div>
          <transition name="fade">
            <div @click.stop.prevent="addClick" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
          </transition>
        </div>
        <split v-show="food.info"></split>
        <div class="info" v-show="food.info">
          <h1 class="title">商品介绍</h1>
          <p class="text" >{{food.info}}</p>
        </div>
        <split></split>
        <div class="rating">
          <h1 class="title">商品评价</h1>
        </div>
        <ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings" @ratingtype-select="ratingtypeSelect" @content-toggle="contentToggle"></ratingselect>
        <div class="rating-wrapper">
          <ul v-show="food.ratings && food.ratings.length">
            <li v-for="(rating, index) in food.ratings" :key="index" class="rating-item border-1px" >
              <div class="user">
                <div class="name">{{rating.username}}</div>
                <img class="avatar" width="12" height="12" :src="rating.avatar">
              </div>
              <div class="time">{{rating.rateTime}}</div>
              <p class="text">
                <span :class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"></span>{{rating.text}}
              </p>
            </li>
          </ul>
          <div class="no-rating" v-show="!food.ratings || !food.ratings.length"></div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

import Vue from 'vue'
import BScroll from 'better-scroll'
import cartcontrol from '@/components/cartcontrol/cartcontrol'
import split from '@/components/split/split'
import ratingselect from '@/components/ratingselect/ratingselect'

// const POSITIVE = 0
// const NEGATIVE = 1
const ALL = 2

export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false,
      selectType: 0,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
  },
  methods: {
    show () {
      this.showFlag = true
      this.selectType = ALL
      this.onlyContent = true
      this.$nextTick(() => {
        // 为了避免每次添加都创建一个scroll，判断当其不存在是则创建，如果存在，则调用起refresh()方法刷新即可
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.foodWrapper, {
            mouseWheel: true,
            bounce: false,
            click: true,
            tap: true
          })
        } else {
          this.scroll.refresh()
        }
      })
    },
    hide () {
      this.showFlag = false
    },
    addClick (event) {
      Vue.set(this.food, 'count', 1)
      this.$emit('cart-add', event.target)
    },
    cartAdd (target) {
      this.$emit('cart-add', target)
    },
    ratingtypeSelect (selectType) {
      this.selectType = selectType
    },
    contentToggle (onlyContent) {
      this.onlyContent = onlyContent
    }
  },
  components: {
    cartcontrol,
    split,
    ratingselect
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "./../../common/styles/mixin.styl"

  .food
    position fixed
    z-index 30
    top 0
    left 0
    bottom 48px
    width 100%
    background #fff
    &.move-enter-active
      transition all 0.2s linear
      transform translate3d(0, 0, 0)
    &.move-enter
      transform translate3d(100%, 0, 0)
    &.move-leave-active
      transition all 0.2s linear
    &.move-leave-to
      transform translate3d(100%, 0, 0)
    .food-content
      .image-header
        position relative
        width 100%
        height 0
        padding-top 100%
        .image
          position absolute
          top 0
          left 0
          width 100%
          height 100%
        .back
          position absolute
          top 10px
          left 0
          .icon-arrow_lift
            display block
            padding 10px
            font-size 20px
            color #fff
      .content
        position relative
        padding 18px
        width 90%
        .title
          line-height 14px
          margin-bottom 8px
          font-size 14px
          font-weight 700
          color rgb(7, 17, 27)
        .detail
          margin-bottom 18px
          line-height 10px
          height 10px
          font-size 0
          .sell-count, .rating
            font-size 10px
            color rgb(147, 153, 159)
          .sell-count
            margin-right 12px
        .price
          line-height 24px
          font-weight 700
          font-size 0
          .now
            margin-right 8px
            font-size 14px
            color rgb(240, 20, 20)
          .old
            text-decoration line-through
            font-size 10px
            color rgb(147, 153, 159)
        .cartcontrol-wrapper
          position absolute
          right 12px
          bottom 12px
        .buy
          position absolute;
          right 18px
          bottom 18px
          z-index 10
          line-height 24px
          padding 0 12px
          box-sizing border-box
          border-radius 12px
          font-size 10px
          color #ffffff
          background rgb(0, 160, 220)
          &.buy-enter-active, &.buy-leave-active
            transition all 0.2s
            opacity 1
          &.buy-enter, &.buy-leave-active
            opacity 0
      .info
        position relative
        padding 18px
        .title
          line-height 14px
          margin-bottom 6px
          font-size 14px
          color rgb(7, 17, 27)
        .text
          padding 0px 8px
          line-height 24px
          font-size 12px
          color rgb(77, 85, 93)
      .rating
        padding-top 18px
        .title
          line-height 14px
          margin-left 18px
          font-size 14px
          color rgb(7, 17, 27)
      .rating-wrapper
        padding 0 18px
        .rating-item
          padding 16px 0
          border-1px(rgba(7, 17, 27, 0.1))
          .user
            position absolute
            right 0
            top 16px
            line-height 12px
            font-size 0
            .name
              display inline-block
              vertical-align top
              margin-right 6px
              font-size 10px
              color rgb(147, 153, 159)
            .avatar
              border-radius 50%
          .time
            margin-bottom 6px
            line-height 12px
            font-size 10px
            color rgb(147, 153, 159)
          .text
            line-height 16px
            font-size 12
</style>
