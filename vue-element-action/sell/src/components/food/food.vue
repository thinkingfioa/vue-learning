<template>
  <div v-show="showFlag" class="food">

  </div>
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
</style>
