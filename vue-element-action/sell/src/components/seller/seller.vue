<template>
  <div class="seller" ref="seller">
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
        <div class="favorite" @click="toggleFavorite">
          <span class="icon-favorite" :class="{'active':favorite}"></span>
          <span class="text">{{favoriteText}}</span>
        </div>
      </div>
      <split></split>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p class="content">{{seller.bulletin}}</p>
        </div>
        <ul v-if="seller.supports" class="supports">
          <li class="support-item border-1px" v-for="item in seller.supports" :key="item.index">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <split></split>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="picWrapper" ref="picWrapper">
          <ul class="picList"  ref="picList">
            <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index">
              <img width="120px" height="90px" :src="pic">
            </li>
          </ul>
        </div>
      </div>
      <split></split>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item border-1px" v-for="(info, index) in seller.infos" :key="index">
            <p>{{info}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import star from '@/common/star/star'
import split from '@/components/split/split'
import BScroll from 'better-scroll'
import {saveToLocal, loadFromLocal} from '@/common/js/store'

export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      favorite: loadFromLocal(this.seller.id, 'favorite', false)
    }
  },
  computed: {
    favoriteText () {
      return this.favorite ? '已收藏' : '收藏'
    }
  },
  created () {
    this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee']
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
      this._initPics()
    })
  },
  watch: {
    'seller' () {
      this.$nextTick(() => {
        this._initScroll()
        this._initPics()
      })
    }
  },
  methods: {
    toggleFavorite () {
      this.favorite = !this.favorite
      saveToLocal(this.seller.id, 'favorite', this.favorite)
    },
    _initScroll () {
      if (!this.sellerScroll) {
        this.sellerScroll = new BScroll(this.$refs.seller, {
          mouseWheel: true,
          bounce: false,
          click: true,
          tap: true
        })
      } else {
        this.sellerScroll.refresh()
      }
    },
    _initPics () {
      if (this.seller.pics) {
        let picWidth = 120
        let margin = 6
        let width = (picWidth + margin) * this.seller.pics.length - margin
        this.$refs.picList.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.picScroll) {
            this.picScroll = new BScroll(this.$refs.picWrapper, {
              scrollX: true,
              eventPassthrough: 'vertical',
              mouseWheel: true,
              bounce: false,
              click: true,
              tap: true
            })
          } else {
            this.picScroll.refresh()
          }
        })
      }
    }
  },
  components: {
    star,
    split
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
        position relative
        padding 18px
        .title
          margin-bottom 8px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .desc
          padding-bottom 18px
          font-size 0
          border-1px(rgba(7, 17, 27, 0.1))
          .star-wrapper
            margin-right 8px
            display inline-block
            vertical-align top
          .text
            display inline-block
            vertical-align top
            margin-right 12px
            line-height 18px
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
        .favorite
          position absolute
          width 50px
          right 11px
          top 18px
          text-align center
          .icon-favorite
            display block
            margin-bottom 4px
            line-height 24px
            font-size 24px
            color #d4d6d9
            &.active
              color rgb(240, 20, 20)
          .text
            line-height 10px
            font-size 10px
            color rgb(77, 85, 93)
      .bulletin
        padding 18px 18px 0 18px
        .title
          margin-bottom 8px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .content-wrapper
          padding 0 12px 16px 12px
          border-1px(rgba(7, 17, 27, 0.1))
          .content
            line-height 24px
            font-size 12px
            color rgb(240, 20, 20)
        .supports
          .support-item
            padding 16px 12px
            font-size 0
            border-1px(rgba(7, 17, 27, 0.1))
            &:last-child
              border-none()
            .icon
              display inline-block
              width 16px
              height 16px
              vertical-align top
              margin-right 6px
              background-size 16px 16px
              background-repeat no-repeat
              &.decrease
                bg-image('decrease_4')
              &.discount
                bg-image('discount_4')
              &.guarantee
                bg-image('guarantee_4')
              &.invoice
                bg-image('invoice_4')
              &.special
                bg-image('special_4')
            .text
              line-height 16px
              font-size 12px
              color rgb(7, 17, 27)
      .pics
        padding 18px
        .title
          margin-bottom 12px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
        .picWrapper
          width 100%
          overflow hidden
          white-space nowrap
          .picList
            font-size 0
            .pic-item
              display inline-block
              margin-right 6px
              width 120px
              height 90px
              &:last-child
                margin-right 0
      .info
        padding 18px 18px 0 18px
        color rgb(7, 17, 27)
        .title
          padding-bottom 12px
          line-height 14px
          font-size 14px
          color rgb(7, 17, 27)
          border-1px(rgba(7, 17, 27, 0.1))
        .info-item
          padding 16px 12px
          line-height 16px
          font-size 12px
          border-1px(rgba(7, 17, 27, 0.1))
          &:last-child
            border none
</style>
