<template>
  <transition name="move">
    <div v-show="showFlag" class="food">
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
            <span class="rating">好评率{{food.rating}}</span>
          </div>
          <div class="price">
            <span class="now">¥{{food.price}}</span>
            <span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
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
    },
    hide () {
      this.showFlag = false
    }
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
</style>
