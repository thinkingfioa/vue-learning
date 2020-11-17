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
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
        <transition name="fade">
          <div @click.stop.prevent="addClick" class="buy" v-show="!food.count || food.count === 0">加入购物车</div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">

import Vue from 'vue'
import BScroll from 'better-scroll'
import cartcontrol from '@/components/cartcontrol/cartcontrol'

export default {
  props: {
    food: {
      type: Object
    }
  },
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
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
      this.$emit('cart-add', event.target)
      Vue.set(this.food, 'count', 1)
    }
  },
  components: {
    cartcontrol
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
      position: relative;
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
        width 100%
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
        position absolute
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
        &.fade-leave-active
          transition all 0.2s
          opacity 1
</style>
