<template>
    <div class="header">
        <!-- 内容区 -->
        <div class="content-wrapper">
            <!--  头像 -->
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar"/>
            </div>
            <!-- 内容区 -->
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span class="icon"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>
            <div class="bulletin-wrapper"></div>
        </div>
        <!-- 公告区 -->
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    seller: {
      type: Object
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "./../../common/styles/mixin.styl"

.header
    color: #fff
    background: #000
    .content-wrapper
        padding: 24px 12px 18px 24px
        font-size: 0
        .avatar
            display: inline-block
        .content
            display: inline-block
            font-size: 14px
            margin-left: 16px
            .title
                margin: 2px 0 8px 0
                .brand
                    display: inline-block
                    width: 30px
                    height: 18px
                    bg-image('brand')
                    background-size: 30px 18px
                    background-repeat: no-repeat
</style>
