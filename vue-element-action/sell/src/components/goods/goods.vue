<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.index" class="menu-item">
          <span class="text border-1px">
            <span v-show="item.type > 0" class="icon" :class="classMap[item.type]"></span>
            {{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="item in goods" :key="item.index" class="foods-list">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li @click="selectFood(food, $event)" v-for="food in item.foods" :key="food.index" class="food-item">
              <div class="icon">
                <img :src="food.icon" width="57px" height="57px">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="sellCount">月售{{food.sellCount}}份</span>
                  <span class="rating">好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span>
                  <span v-show="food.oldPrice" class="old">¥{{food.oldPrice}}</span>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <food :food="selectdFood"></food>
  </div>
</template>

<script type="text/ecmascript-6">

import food from '@/components/food/food'

const ERR_OK = 0

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      goods: [],
      selectdFood: {}
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
    this.$http.get('/api/goods').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.goods = response.data
      }
    }, response => {
      // error callback
    })
  },
  methods: {
    selectFood (food, event) {
      if (!event._constructed) {
        return
      }
      this.selectdFood = food
    }
  },
  components: {
    food
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../../common/styles/mixin.styl"

  .goods
    display flex
    position absolute
    top 174px
    bottom 46px
    width 100%
    overflow hidden
    .menu-wrapper
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .menu-item
        display table
        padding 0 12px
        height 54px
        width 56px
        line-height 14px
        .icon
          display: inline-block
          vertical-align: top
          width: 12px
          height: 12px
          margin-right: 2px
          background-size: 12px 12px
          background-repeat: no-repeat
          &.decrease
            bg-image('decrease_3')
          &.discount
            bg-image('discount_3')
          &.guarantee
            bg-image('guarantee_3')
          &.invoice
            bg-image('invoice_3')
          &.special
            bg-image('special_3')
        .text
          display table-cell
          width 56px
          vertical-align middle
          border-1px(rgba(7, 17, 27, 0.1))
          font-size 12px
    .foods-wrapper
      flex 1
      .foods-list
        .title
          padding-left 14px
          line-height 26px
          height 26px
          background #f3f5f7
          border-left 2px solid #d9dde1
          font-size 12px
          color rgb(147, 153, 159)
        .food-item
          display flex
          margin 18px
          padding-bottom 18px
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border-none()
            margin-bottom 0px
          .icon
            flex 0 0 57px
            margin-left 10px
          .content
            flex 1
            margin-left 18px
            .name
              margin-top 2px
              font-size 14px
              color rgb(7, 17, 27)
              line-height 14px
              height 14px
            .desc, .extra
              margin-top 8px
              font-size 10px
              color rgb(147, 153, 159)
              line-height 10px
            .extra
              .sellCount
                margin-right 12px
            .price
              margin-top 8px
              font-weight 700
              line-height 24px
              .now
                margin-right 8px
                font-size 14px
                color rgb(240, 20, 20)
              .old
                text-decoration line-through
                font-size 10px
                color rgb(147, 153, 159)
</style>
