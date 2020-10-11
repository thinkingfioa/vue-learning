<template>
    <div class="cartcontrol">
      <div class="cart-decrease icon-remove_circle_outline" v-show="food.count > 0" @click="decreaseCart"></div>
      <div class="cart-count" v-show="food.count > 0"> {{food.count}}</div>
      <div class="cart-add icon-add_circle" @click="addCart"></div>
    </div>
</template>

<script  type="text/ecmascript-6">
import Vue from 'vue'

export default {
  props: {
    food: {
      type: Object
    }
  },
  created () {
  },
  methods: {
    addCart () {
      if (!this.food.count) {
        Vue.set(this.food, 'count', 1)
      } else {
        this.food.count++
      }
    },
    decreaseCart () {
      if (this.food.count > 0) {
        this.food.count--
      }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease, .cart-add
      display inline-block
      vertical-align top
      padding 6px
      line-height 24px
      font-size 24px
      color rgb(0, 160, 220)
    .cart-count
      display inline-block
      vertical-align top
      width 12px
      padding-top 6px
      line-height 24px
      text-align center
      font-size 10px
      color rgb(147, 153, 159)
    .cart-add
      display inline-block
      vertical-align top
</style>
