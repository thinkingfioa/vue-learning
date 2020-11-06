<template>
  <transition name="move">
    <div v-show="showFlag" class="food">
      <div class="food-content">
        <div class="image-header">
          <img :src="food.image">
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
    transition all 0.2s linear
    &.move-enter-active, &.move-leave-active
      transform translate3d(0, 0, 0)
    &.move-enter, &.move-leave
      transform translate3d(100%, 0, 0)
</style>
