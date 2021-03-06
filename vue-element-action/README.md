# Vue和Element实战

## 课程介绍

## 第二章 Vue.Js介绍
### 2.1 MVVM框架
Model ViewModel View
![](./pictures/2/mvvm.png)

著名的MVVM框架包括
- Angular.js
- react.js
- vue.js

### 2.2 什么是Vue.js
- 一个轻量级MVVM框架
- 数据驱动+组件化的前端开发

### 2.3 与其他MVVM框架对比
![](./pictures/2/compre_other_mvvm.png)

### 2.4 Vue.js核心思想

#### 2.4.1 数据驱动
![](./pictures/2/数据驱动.png)

#### 2.4.2 组件化
![](./pictures/2/组件化.png)

组件设计原则
- 页面上每个独立的可视/可交互的区域视为一个组件
- 每个组件对应于一个工程目录，组件所需的各种资源在这个目录下就近维护
- 页面不过是组件的容器，组件可以嵌套自由组合形成完整的页面

## 第三章 Vue-cli开始Vue项目(Sell)
### 3.1 Vue-cli
Vue-cli是Vue的脚手架工具。Vue-cli帮助搞定以下内容:
- 目录结构
- 本地调试
- 代码部署
- 热加载
- 单元测试

### 3.2 Vue-cli 安装
- 先安装node.js
- sudo npm install -g vue-cli
- 使用vue命令创建外卖项目: vue init webpack sell
- 安装依赖：cnpm install。运行完后，会生成node_modules文件夹
- dev环境下运行: cnpm run dev
- 打包：cnpm run build

### 3.3 项目文件介绍
- build／config目录: webpack配置相关
- node_modules: 通过npm install安装的依赖代码库
- src: 存放开发源码
- static: 存放第三方静态资源。其中.gitkeep是为了当这个目录为空，也可以在git代码仓库中找到该文件夹
- .babelrc: 通常项目都是ES6，但是浏览器不支持ES6，该文件负责将编译后文件转换为ES5
- .editorconfig: 编辑器的一些配置
- .eslintignore: 忽略语法检查的目录文件
- .eslintrc.js: eslint的配置文件
- .index.html: 项目入口文件。在项目通过webpack编译期间，会自动插入到这个文件中
- package.json: 描述项目的配置文件

### 3.4 项目运行
- 项目的入口文件是index.html，编译过程中，会自动插入到index.html中
- 页面入口js，是src/main.js
- 每个组件（如App.vue)，分为三个模块：template（模板）、script（逻辑）和style（样式)。其中script中export default {}将组件导出成对象，供外面的调用

#### 3.5 webpack打包
webpack目前是前端最火的构建工具。视屏中基本讲述了webpack工作方式和很多帮忙理解的地方，这要涉及的目录是: build/config
![](./pictures/3/webpack.png)

## 第四章 项目实战-准备工作
### 4.1 需求分析
- 商家页
- 商品详情页

### 4.2 素材
素材存放在resource目录下

### 4.3 图标字体文件的制作
SVG是单一颜色的文件，放大伸缩不会变形，但通常不会直接使用，而是转成图标字体文件使用

- 使用IcoMoon的工具，[主页地址](https://icomoon.io/)

### 4.4 项目目录设计

- main.js 是项目入口js文件
- App.vue 整个Vue的大组件
- components目录 存放组件文件。建议先建目录，然后创建vue文件，因为vue初了.vue文件外，还会包含一些相关图片等等，建议相关放在一个目录下，资源就近维护
- common主动创建的目录，存放公共模块和资源。一般包括三个子目录: js、styles和fonts
- 删除assets目录，不需要

### 4.5 mock后端数据
提供出data.json文件

- seller : 商家相关的数据
- goods : 商品相关的数据
- ratings : 评论相关的数据

本节视频内容稍有不兼容，可通过[网址](https://www.xiuyuan.info/?p=230)来完成

## 第五章 项目实战-页面骨架开发

### 5.1 组件拆分（上）
- main.js是项目入口JS
- /* eslint-disable no-new */，不是注释，为了屏蔽下面一个new 关键字无需赋值

### 5.2 组件拆分（中）

#### 5.2.1 引入其他的vue
- 第一步：创建vue，如header.vue
- 第二步：标签script标签中添加export default {}
- 第三步：在待加的vue文件中script标签中import，并export default {}
- 第四步：在待加的vue文件中template标签中使用

### 5.3 组件拆分（下）

#### 5.3.1 安装依赖
- 安装依赖包，如stylus-loader，先在package.json中加入，然后调用cnpm install安装
- 查看node_modules目录下是否安装成功，即可

#### 5.3.2 所有内部依赖组件命名
引入其他的vue组件时

#### 5.3.3 Flex布局
- 在写页面三等分：商品、评价、商家，用到移动端经典Flex布局，Flex 布局成为布局的首选方案。可参考文档[Flex 布局教程：语法篇](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
- 写样式时，建议依样式层级依次写
- 属性是id，用‘#’; 属性是class，用'.'

### 5.4 Vue-router（上）
- vue-router建议使用npm安装
- 使用参考[官方文档](https://router.vuejs.org/zh/guide/#html)
- router-view用于当路由地址变化时，将刷新该模块

### 5.5 Vue-router (下)
- 建议import 导入使用'@'来描述路径，其中'@'在build/webpack.base.conf.js中定义的alias中描述

#### 5.5.1 Vue-router默认展示
- 进入首页，未展示出第一个页面，使用router.push('/goods')，告知默认展示
- 添加css样式。 & 表示其父元素，即tab-view的样式
- display:block是让元素为一个整体
- text-decoration: none; 去掉字体的下划线，将将其加入static/css/reset.css中整体有效

#### 5.5.2 CSS 书写规范
- 1. 布局样式先写，如display
- 2. 宽高，一些触发页面重绘的一些不可继承的随后写，如width、height
- 3. 最后设置些字体颜色一些可被继承的写在最后，如font-size、color

#### 5.5.3 点选中后，样式高亮
- vue-router在具体某个后，绘默认填充router-link-active。我们可以在创建VueRouter是重新命名为active
- 然后&.active 定义为 color: rgb(240, 20, 20)

### 5.6 像素border实现

#### 5.6.1 PC端使用border-bottom
- border-bottom是设置下边框，通过配置css：border-bottom : 1px solid rgba(7, 27, 17, 0.1)
- 手机端这种不行，因为会缩放

#### 5.6.2 手机端看样式
- 访问路径换成具体IP，不要使用localhost
- 页面上通过草料二维码生成具体的访问二维码
- 电脑和手机使用同个网络
- 微信扫码，手机端查看样式

查看后，会发现像素比较粗，并不是正在意义上的1px，不推荐手机端使用border-bottom来设置样式，

#### 5.6.3 正确设置手机端的下边栏框，实现1px
- 定义一个mixin.styl的文件，本质上就是一个css
- 在mixin.styl中定义css方法，并在需要的地方使用。这样可以后期复用相同的CSS样式
- 使用':after'定义尾类样式，after告知其在某个元素尾部修饰。
- 再在tab标签下定义一个自动缩放的border-1px，其border-1px能根据不同
- 创建base.styl下编写自动缩放的border-1px
- 创建index.styl样式，将目录common/styles下的所有以styl结尾的包含进去

## 第六章 项目实战-header组件开发

### 6.1 Vue-resource应用（上)
Vue-resource主要用于处理前后端数据交互

- header组件主要是商家的一些数据。在App.vue中定义返回的数据，并通过vue-resource安装

#### 6.1.1 安装vue-resource
- 在package.json中配置vue-resource，并在github上查看下版本
- 调用npm install安装

#### 6.1.2 使用vue-resource
- 在main.js中导入vue-resource插件： import VueResource from 'vue-resource'
- 注册vue-resource：Vue.use(VueResource)

### 6.2 Vue-resource应用（下)
vue-resource在main.js中注册后，就可以使用了

#### 6.2.1 Vue组件的生命周期
- 在data()方法中定义seller属性，再通过vue-resource将其赋值
- 每个Vue组件都有其生命周期。每个Vue创建时，会调用created()方法，我们将基本数据的Get请求可以放到这个方法中
- 查看vue-resource的[官方地址](https://github.com/pagekit/vue-resource)使用方法使用
- 获取的response是一个属性，需要调用response = response.body转成Object对象
- this关键字就是Vue自己。由于Vue是单页面，所以就是其本身
- 可以通过console.log控制台输出看是否正确

### 6.3 外部组件（1）开发header组件
将vue-resource获取到的seller数据传递给header组件，使用v-bind（v-bind可以缩写为:)

- 在header.vue中，通过props属性获取传递过来的seller

#### 6.3.1 介绍布局
header.vue上下分为两个布局：内容区、公告区。内容区又分为：头像区和内容区

- 展示头像时，需要v-bind，也就是:src才可以。因为seller.avatar一开始是不存在的，需要通过异步请求绑定到具体，所以需要使用v-bind

#### 6.3.2 编写布局
- 其中如果数据可能不存在，需要使用v-if来判断。因为seller数据一开始是什么都没有，后来通过create()方法获取到后，再更新的

#### 6.3.3 编写样式
- 1. 字体都是白色的
- 2. 内容区上下左右内边距使用padding来写。padding: 24px 12px 18px 24 px
- 3. 头像和内容是一排，使用display: inline-block让其排在一行上

### 6.4 外部组件（2）开发header组件
- 发现头像和内容部分中间有缝隙，因为两个之间有空白字符，使用font-size:0去除之间的缝隙
- 设置子元素这是font-size:14px
- 设置内容区域的外边距margin-left
- span标签需要加上width和height设置宽高，同时加上display: inline-block。因为span是需要内容撑开的，没有内容是不行的
- 背景图片有2x和3x，需要写一个共用方法，可以在mixin.styl中定义一个函数bg-image

#### 6.4.1 设置一个title的样式
- template中使用<span class="brand"/>占位
- 编写css

```
.brand
    display: inline-block
    width: 30px
    height: 18px
    bg-image('brand')
    background-size: 30px 18px
    background-repeat: no-repeat
```

### 6.5 外部组件（3）开发header组件
- vertical-align: top，将brand和name行内对其方式为顶部对其

#### 6.5.1 全局属性定义
发现多个标签属性是一样的，如：font-weight: 200，可以定义到全局样式中：common/styles/base.styl

其中font-family字体设置多个，会依次查找，直到找到认识的，如果所有的都不认识，使用系统字体

#### 6.5.2 设置图片的圆角
- avatar是一个image标签，需要将图片设置成圆角。通过属性border-radius: 2px
- 所有的图片，需要通过display: inline-block修饰


#### 6.5.3 同一个地方，显示不同的图标
页面support地方，可能显示：折，减图标。根据后台的数据返回，对应于前端，就是显示不同的class

第一步：编写class的样式

```
&.decrease
    bg-image('descrease_1')
&.discount
    bg-image('discount_1')
&.guarantee
    bg-image('guarantee_1')
&.invoice
    bg-image('invoice_1')
&.special
    bg-image('special_1')
```

第二步：在created()定义映射关系
在create()方法定义属性classMap，将该属性seller.supports[0].type映射上，实现type数值变化，样式也改变

### 6.6 外部组件（4）开发header组件
开发右下角5个的按钮，明显这是一个绝对定位，仅在content对象的右下角显示。

#### 6.6.1 content右下角显示support-count，绝对定位
父元素需要加position: relative，因为是相对于父元素的绝对定位。自身元素添加position: absolute

该区域分为三块：整体、个数和右图标。其他都是基本样式

### 6.7 外部组件（5）开发header组件 
公告内容分为三块：左边图标、内容和右图标，其中内容部分显示...

#### 6.7.1 内容区域显示缺省
内容显示缺省CSS

```
white-space: nowrap
overflow: hidden
text-overflow: ellipsis
```

#### 6.7.2 图片设置

- 1. 将图片拷贝到header目录下。因为就近原则
- 2. 设置样式。所有图片都要设置display: inline-block; width:24px; height: 12px

通常图片格式：

```
display: inline-block
width: 22px
height: 12px
bg-image('bulletin')
background-size: 22px 12px
background-repeat: no-repeat
```
#### 6.7.3 两个span之间有空格
一般CSS中，两个span并列，会留空白，需要设置其父标签font-size: 0px，然后在需要的子标签中设置其自身的font-size

#### 6.7.4 font-size: 0px时，会让文字的省略失效
所以，我们需要把父标签中的font-size: 0px删除，然后让两个span标签并列一行即可

#### 6.7.5 元素绝对位置

第一步：父元素添加 position: relative
第二步：子元素添加 position: absolute

### 6.8 外部组件（6）换上图片背景
背景图片需要模糊处理。思路：将图片设置成绝对位置，然后宽高撑满head区域，同时设置z-index=-1设置成底层

设置元素filter: blur(10px)，达到模糊效果

```
position absolute
top 0
left 0
width 100%
height 100%
z-index -1
filter blur(10px)
```

### 6.9 详情弹层页（1）-实现弹出层
观察浮层，由于底部有关闭'X'按钮，不可用Flex布局，改为使用CSS Sticky footers布局。

浮层通过position: fixed绝对定位屏幕；使用z-index: 100置于屏幕顶层；使用overflow: auto来显示滚动条；top: 0和left: 0位于顶部显示

#### 6.9.1 详情弹层页（1）- 控制弹出层显示
使用v-show和属性来控制，默认v-show="detailShow"。添加一个data()方法，data()方法有返回值，返回值中定义detailShow=false

#### 6.9.2 详情弹层页（1）- 控制弹出层显示
定义一个方法，绑定到@click事件中，放到method()方法下，改变detailShow=true

#### 6.9.3 总结
- data()是方法，通过return返回需要定义的数据，返回的数据是一个json格式的
- method是this的属性，我们在这个属性定以方法，方法改变data中的数据，达到显示、关闭效果

#### 6.9.4 position中 absolute和fixed区别
fixed - 固定定位
absolute - 绝对定位

区别很简单：
1. 没有滚动条的情况下没有差异
2. 在fixed定位不会随着滚动条移动而移动，而absolute则会随滚动条移动

常用场合：
1. fixed常用于网站边缘的公司联系方式和快速回到顶部
2. absolute常用于页面

### 6.10 详情弹层页（2）-实现弹出层，使用Sticky footers
sticky footers用于解决：当页面不够长时，有块区域定在视窗的底部；当页面内容比较长，页脚块会被内容向下推送。[参考](https://www.w3cplus.com/css3/css-secrets/sticky-footers.html)
如果是flex则会一直在底部

#### 6.10.1 sticky footers
使用一个兼容性最好，较复杂的方法。有一定的套路。主要分为两个层，一层是wrapper，一层是底部层。wrapper需要设置自动清除浮动clearfix。

clearfix是为了清除浮动，避免撑开，我们更将其加入到通用base.styl中。html页面主要分为下面三个部分

```html
<div v-show="detailShow" class="detail">
  <div class="detail-wrapper clearfix">
    <div class="detail-main"></div>
  </div>
  <div class="detail-close">
    <i class="icon-close"></i>
  </div>
</div>
```

### 6.11 详情弹层页（3）- 标题布局Star

#### 6.11.1 设计star星星组件
star星星组件在其他地方也用，我们将其抽成star.vue，放在common中。允许接入两个参数: size, score；

利用vue框架提供的计算属性computed，来制定class="starType"具体样式。 &.表示与父亲同级别属性。我们定义出所有的CSS格式，然后通过方法，根据输入的参数，选择具体展示样式

computed是vue提供的计算属性，实时响应的，比如data里的值随时变化作出一些处理，就用computed

### 6.12 详情弹层页（3）- 标题布局Star
&:last-child - 表示最后一个循环体节点，一般对于循环体非常通用

### 6.13 详情弹层页（4）- 将star.vue引入到header.vue中
- 在标签<script>中调用导入import
- 在组件属性中components，声明star
- 通过':size="48" :score="seller.score"'传进入star.vue中

通常我们会使用wrapper包装下组件，再通过定义wrapper的样式，达到灵活性

- text-align 是剧中显示，不仅仅是文本

### 6.14 详情弹层页（5）- 自适应的flex布局
flex是Flexible Box的缩写，意为"弹性布局"

flex布局可参考[Flex布局教程](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

- flex: 1表示自动缩放
- 如果希望一个元素上下居中，通过通过设置 position: relative && top
- 画一条线：border-bottom 1px solid rgba(255, 255, 255, 0.2)

### 6.15 详情弹层页（6）
布局不复杂，使用v-for遍历各个support

### 6.16 详情弹层页（7）- 'X'按钮点击关闭
给底部'X'添加一个@click事件方法，在方法中修改属性detailShow=false

给详情页添加动画，使用Vue添加动画非常简单，可使用固定套路。具体需要网上查下

## 第七章 项目实战-商品页
商品页是页面最复杂的布局结构，页面主要是两栏布局，左侧大小固定，右侧与手机自适应。底部是购物车

### 7.1 布局编写
布局需要两个div标签，左侧是menu菜单，右侧是商品布局。左侧是固定的，右侧是一个随着手机变化而变化的页面。我们这里会再次使用到flex布局。

flex三个属性: 第一个(flew-grow)是等分，0-存在剩余空间，也不放大；第二个(flex-shrink)是缩放，1-空间不足时，都等比例缩小；第三个(flex-basis)是占位长度

所以左侧menu菜单固定长度： flex 0 0 80px。右侧商品布局是自动变大：flex 1

#### 7.1.1 自动缩放布局
自动变化的缩放布局，都用flex

```
display flex
    .wrapper1
        flex 0 0 80px
    .wrapper2
        flex 1
```

#### 7.1.2 导入goods数据

1. 使用vue-resource调用http的接口，在created()方法中添加，将获取的goods
2. 在data()方法中定义goods属性

### 7.2 左侧menu布局

- 左侧是列表，使用标签ul。
- 由于左侧列表中有些有图片，有些则不显示图片。使用v-show="item.type > 0"，来控制是否显示
- 所有的样式建议全部用class，不要用标签，否则可能导致性能问题
- 如果希望元素垂直居中，可以使用display table

#### 7.2.1 左侧menu垂直居中
使用标签display table和子元素display table-cell

```$xslt
.menu-item
    display table
    .text
        display table-cell
        vertical-align middle
```

### 7.3 右侧食品列表布局(1)
布局是两个列表嵌套显示的。存在部分可能不需要显示的使用v-show指令来控制

### 7.4 右侧食品列表布局(2)
右侧布局是左右，左边是图片，右边是描述。同样是一个flex布局

底部有一个border，我们需要padding来帮助置底，同时最后一个元素又没有border，需要使用&:last-child来控制末尾元素

#### 7.4.1 margin和padding区别
一个形象的比喻是，padding是填充物，如买首饰，加入的很多填充物。margin则是周围的空气，可重叠

### 7.5 右侧食品列表布局(2)
如果两个class的样式存在共性，可以使用并排写，比如.desc, .extra，然后在下面分别写.desc和.extra的特殊样式

字体上有删除线，可使用属性text-decoration line-through来描述

### 7.6 better-scroll运用(1)

- 在package.json中添加better-scroll的依赖
- 调用cnpm install
- 查看node_modules中是否已经安装better-scroll成功

#### 7.6.1 $refs 的使用是vue2.0 操作dom的一种方式
ref被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的$refs对象上。

vue数据的修改，DOM也会跟着做映射，但Vue更新DOM是异步的，用$nextTick()回调函数中确保DOM变化后能调用_initScroll()方法

特别提醒: better-scroll中在2.0.4版本中，要加上mouseWheel=true属性，否则不能滑动

### 7.7 better-scroll运用(2)
使用better-scroll实现左边的menu菜单和右边的商品菜单联动。左边点击某个菜单，右边可以直接跳转到固定商品地方；右边滑动商品，左边的菜单栏页联动。

#### 7.7.1 记录右边商品中每个地方的高度
计算出右边某个菜单下所有商品的高度，建立一个数组，通过计算鼠标Y坐标，得到数组的下标。然后在利用Vue的class绑定，把左边的菜单栏高亮表示出来。

第一步：获取DOM的高度，需要获取的是每个菜单的高低，所以定义一个class="foods-list-hook"。通常如果定义某个样式，如果是用于js获取的，喜欢加上hook字符串标记。

第二步：在data()方法中定一个listHeight[]数组，遍历每个food-list-hood，获取到单个元素的clientHeight，添加到listHeight[]数组中。

第三步：需要实时计算出滑动的纵坐标。在data()方法中，定义一个scrollY变量，通过better-scroll中传入参数probeType: 3，告知better-scroll实时获取到纵坐标。通过编写代码，获取变量值
```$xslt
this.foodsScroll.on('scroll', (pos) => {
    this.scrollY = Math.abs(Math.round(pos.y))
})
```

第四步：将scrollY与左侧的索引做映射。利用Vue提供的计算属性computed实现，定义一个currentIndex()，遍历listHeight数组，得到scrollY所在的下标值。Vue的计算属性会跟着scrollY重新计算
Vue的计算属性computed依赖于它的data属性，只要依赖的data属性发生了变化，就自定义调用计算属性执行一次。区别于watch，在Vue中多使用computed替代watch

注：Vue提供的计算属性computed可定义一些函数，只要data中的数据发生了变化computed会同步改变，使用计算属性时不要加上()，应该当作普通属性使用

### 7.8 better-scroll运用(3)

#### 7.8.1 滑动商品，高亮左边的菜单栏
定义class，实现左边菜单滑动，右边跟着滑动效果。判断当前的index与计算出来的currentIndex()是否相同，如果相同，应用current样式
```$xslt
:class="{'current' : currentIndex === index}"
```

其中current属性与menu-item属性是修饰同一个对象，所以使用&.current来定义CSS

#### 7.8.2 点击菜单，跳转至第一个商品
点击左边的菜单栏，右边的商品显示对应的商品。

第一步：在菜单中绑定一个点击事件 @click="selectMenu(index)"，并在methods属性中定义selectMenu方法.

第二步：由于better-scroll会阻止默认的事件，比如click，需要设置其属性开启click: true, tap: true

第三步：根据传入的index，获取到对应的dom

第四步：利用better-scroll中提供的方法scrollToElement传入dom，实现指定显示

### 7.9 shopcart购物车组件(1)

#### 7.9.1 创建一个购物车组件
第一步：在components下创建一个shopcart目录，并创建shopcart.vue。

第二步：随后引入到good.vue中，并在components属性中注册

#### 7.9.2 购物车布局分析
购物车永远在底部，是固定，所以需要使用的fixed布局。然后分为左右两部分，左边是一个变长的，右边是一个固定长度，使用的是flex布局。

#### 7.9.3 购物车样式
购物车位于页面的底部，所以使用position fixed布局，并设置left=0, bottom=0。其他样式按照UI配置

### 7.10 shopcart购物车组件(2)
购物车分为左边和右边，左边是一个自动变长的，右边是一个定长。所以使用flex布局
```$xslt
.content
    display flex
    .content-left
        flex 1
    .content-right
        flex 0 0 105px
        width 105px
```

#### 7.10.1 logo超出部分
三个元素都是并排的，所以使用display: inline-block限制为一行。由于logo存在超出部分，使用position relative并定义top: -10px超出
```$xslt
display inline-block
vertical-align top
position relative
top -10px
```

通常使用display: inline-block都会使用vertical-align: top顶部对齐方式

#### 7.10.2 固定logo的大小
定义logo的width + height，然后再使用box-sizing: border-box来确定其大小。让内容随着自动变化而变化。

了解box-sizing: border-box可[参考](https://blog.csdn.net/qq_26780317/article/details/80736514)

#### 7.10.3 logo的圆角处理
处理圆角有一个通用的做法是，将border-radius: 50%，这样就是一个圆形

#### 7.10.4 颜色取值
可以通过PS来获取颜色和长度

#### 7.10.5 如何使一个元素是垂直居中的
第一步：在其父元素上设置text-align: center（左右居中）

第二步：在其自元素上设置line-height: 44px固定高度（上下居中）

#### 7.10.6 设置一个竖线
使用属性border-right，来定义竖线

```$xslt
border-right 1px solid rgba(255, 255, 255, 0.1)
```

### 7.11 shopcart购物车组件(3)

#### 7.11.1 价格垂直居中
价格字段，可以使用line-height: 48px来实现垂直居中，但如果这样的话，右侧的竖线border也是撑满整个高度，所以使用line-height: 24px，同时加上margin-top: 12px来实现垂直居中
```$xslt
margin-top 12px
line-height 24px
```

#### 7.11.2 传入配送费和起送费
第一步：在goods组件中声明的shopcart标签中传入deliveryPrice和minPrice属性

第二步：在shopcart组件的props属性中这两个属性。注意，其中其类型使用的是Number。对于数字类的变量，我们会提供缺省值
```$xslt
props: {
    deliveryPrice: {
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    }
}
```

第三步：在需要使用的地方通过{{deliveryPrice}}来使用

### 7.12 shopcart购物车组件(4)
购物车最右侧的结算较为简单，仅需要按照UI设计编写。

#### 7.12.1 shopcart状态
购物车其实有很多的状态。比如满减，已选商品总价格等。这个状态其实是根据选择的商品决定的，所以需要传入某个属性selectFoods。这个属性其实是有goods元素告知的，类型应该是一个Array，缺省值是一个[]
```$xslt
props: {
    selectFoods: {
        type: Array,
        default () {
            return []
        }
    }
}
```

#### 7.12.1 购物车所有商品的总价
从foods组件中传入了一个数组selectFoods给shopcart组件，数组selectFoods中其实是每个food，相对于data.json中的food，多了一个count属性

利用计算属性computed，统计selectFoods中的总价格
```$xslt
computed: {
    totalPrice () {
        let total = 0
        this.selectFoods.forEach((food) => {
            total += food.price * food.count
        })
        return total
    }
}
```

#### 7.12.2 购物车所有商品数的总和
利用计算属性computed，统计selectFoods中的总数目
```$xslt
totalCount () {
  let count = 0
  this.selectFoods.forEach((food) => {
    count += food.count
  })
  return count
}
```

### 7.13 shopcart购物车组件(5)
显示出购物车中购买的总数目，使用position absolute来按照父亲元素的位置绝对定位，所以只需要加上top: 0和right: 0即可。接下来都是按照UI设计来编写样式

#### 7.13.1 存在购买的总数目时，logo颜色发生变化
当购买的总数目不为0时，logo的背景色和自身颜色发生变化。所以定义两个CSS，按照totalCount>0条件生效

第一步: 编写两个CSS
```$xslt
.logo
    width 100%
    height 100%
    border-radius 50%
    background #2b343c
    text-align center
    &.highlight
        background rgb(0, 160, 220)
        .icon-shopping_cart
            font-size 24px
            color #80858a
            line-height 44px
        &.highlight
            color #ffffff
```

第二步：使用表达式，动态绑定class
```$xslt
:class="{'highLight': totalCount > 0}"
```

#### 7.13.2 存在购买的总数目时，商品总数才会被显示出来
使用关键字v-show，如果v-show表达式不符合，则当前的class不再显示，即 v-show="totalCount > 0"。非常通用的方法，记住

### 7.14 shopcart购物车组件(6)
购物车最右侧部分，有三种状态，需要根据selectFoods属性来选择，所以同样定义一个computed计算属性payDesc。目前有三种状态

1. 价格为0元时，显示：¥{{price}}元起送
2. 当0 < 价格 <起送价时，显示：还差¥{{price}}元起送
3. 当 价格 >= 起送价时，显示：去结算

```$xslt
payDesc () {
  if (this.totalPrice === 0) {
    return `¥${this.minPrice}元起送`
  } else if (this.totalPrice > 0 && this.totalPrice < this.minPrice) {
    return `还差¥${this.minPrice - this.totalPrice}元起送`
  } else {
    return '去结算'
  }
}
```

注意：
1. 在JS代码中，建议等于判断使用'==='，不要使用'=='，因为'=='会做类型转换，可能有坑
2. 在使用计算属性时，无需加上()，因为他本身就是一个属性

#### 7.14.1  根据状态调整CSS
上面的payDesc只是显示的内容不同，由于不同的状态，CSS格式也不同，所以仍然需要一个computed属性控制payClass，通过返回不同的字符串，动态绑定到:class="payClass"上

### 7.15 cartcontrol组件(1)
购物车的按钮，在项目中多次复用的，所以，我们自然也需要将这个添加购物车按钮，抽象成组件

#### 7.15.1 创建cartcontrol.vue
仔细思考下，这个购物车按钮，其实是根据不同的food数量，展示内容也不相同。所以，在props属性中需要一个food

整个购物车按钮分为三个部分，左边是'减号'，中间是'数量'，右边是'加号'。并且左边在food.count=0时候不显示，所以使用v-show来控制；其中中间的'数量'也类似，需要使用v-show来控制

```$xslt
props: {
    food: {
        type: Object
    }
}
```

#### 7.15.2 引入cartcontrol.vue组件

第一步：在good.vue组件中，先import，再在components属性中注册
第二步：通过Vue传入food参数，<cartcontrol :food="food"></cartcontrol>

#### 7.15.3 编写cartcontrol的样式
cartcontrol共有对象，对象之间是横向排列，所以通过display: inline-block和vertical-align top来描述

为了用户点击时区域变大，可以通过padding来实现，方便点击操作

多个静态class可以一起写，比如<div class="class1 class2"></div>

### 7.16 cartcontrol组件(2)
点击添加按钮，增加数字，通过绑定@click="addCart"方法，增加food.count数目

#### 7.16.1 通过JS给food添加属性count
JS代码中，给一个JSON对象添加属性非常简单，只需要直接赋值就可以，无需过多代码。
```$xslt
food.count = 1
```

特别提醒：在Vue中给某个观察的对象food，添加一个不存在域时food.count，直接赋值是可以，但是Vue是检测不到新增域的变化，
所以，在我们新增或删除某个域时候，我们需要使用Vue的一个接口来添加属性，这样添加的属性就能被观察到，当food.count发生变化能自动更新

```$xslt
import Vue from 'vue'

Vue.set(this.food, 'count', 1)
```

### 7.17 cartcontrol组件(3)
添加商品进购物车，加号按钮，从右往左移动出减号。如果数量变成0，减号再从左往右消失。Vue2.0中对于transition做了较大的变化。需要进一步学习了解。

#### 7.17.1 JS对象引用传递
我们再good.vue中将food传入到cartcontrol.vue组件中，通过加号和减号按钮实现数量的变更，其实根本上也是对good.vue中的food产生影响

我们在调用shotcart.vue组件时，其实需要传入一个selectFoods数组列表。这个selectFoods数组列表其实是所有count>1组成的，我们通过计算属性，来实现selectFoods改变，当food中的count发生变化时，计算属性selectFoods也发生改变
```$xslt
selectFoods () {
  let foods = []
  this.goods.forEach((good) => {
    good.foods.forEach((food) => {
      if (food.count > 0) {
        foods.push(food)
      }
    })
  })
  return foods
}
```

### 7.18 购物车小球动画实现(1)
添加一个某个商品进购物车时，希望以动画的抛物线小球抛入购物车中

#### 7.18.1 定义小球
小球是从点击的地方开始，做抛物线落地到购物车中。抛物线有两个方向的变化，所以需要两个层，外层垂直方向，先上后下，内层控制水平向左移动。

由于在点击过程中，可能存在多个小球在空中，需要在data()方法中定一个balls数组，每个元素对应一个小球，暂定5个小球。然后获取鼠标点击位置，发起移动效果

#### 7.18.2 获取抛物线起点
抛物线起点是获取的，相对于界面的位置的横纵坐标。我们需要在点击购物车按钮时，派发一个事件，将他的dom传出来。

首先，我们在cartcontrol.vue中点击addCart()时，派发一个事件:this.$emit('cart-add', event.target)，并将event传出来

第二，在goods组件中通过在cartcontrol组件上添加v-on:cart-add='cartAdd'，注册事件。当收到'cart-add'事件时调用cartAdd(el)方法

第三，goods组件shopcart标签中添加 ref="shopcart"，然后在cartAdd(el)方法中调用drop方法。实现传入

第四，为了优化体验，使用Vue的nextTick方法实现异步调用

```
cartAdd (el) {
  // 体验优化，异步执行下落动画
  this.$nextTick(() => {
    this.$refs.shopcart.drop(el)
  })
}
``` 

### 7.19 购物车小球动画实现(2)
shopcart组件中drop方法很简单，其实就是遍历下balls组数中球，拿到一个show=false的球，来做动画。动画过程中，我们需要一个dropBalls来记录正在落的小球

```
drop (el) {
  for (let i = 0; i < this.balls.length; i++) {
    let ball = this.ball[i]
    if (ball.show) {
      ball.show = true
      ball.el = el
      this.dropBalls.push(ball)
      return
    }
  }
}
```

### 7.20 购物车小球动画实现(3)

#### 7.20.1 transition定义
小球是一个抛物线运动轨迹，使用transition标签来实现动画。同时为transition定一个三个JS运动轨迹的方法

- v-on:before-enter 进入时
- v-on:enter 
- v-on:after-enter 进入后

原视频基于V1.0开发，部分已经不适用，需自行查看文档实现。

### 7.21 购物车详情页(1) 结构 
购物车详情是点击底部购物车浮出的页面，页面高度固定，超过高度支持上下滑动的滚轮，小于高度的话，下面留空白。

整个结构分上下两个，上面是一个标题，下面是多个商品展示区。标题有左边的文本+右边清空按钮。商品展示区是一个列表，列表的每一项是一个商品。

```
<div class="shopcart-list" v-show="listShow">
  <div class="list-head">
    <h1 class="title">购物车</h1>
    <span class="empty">清空</span>
  </div>
  <div class="list-container">
    <ul>
      <li class="food" v-for="(food, index) in selectFoods" :key="index">
        <span class="name">{{food.name}}</span>
        <div class="price">
          <span>¥{{food.price*food.count}}</span>
        </div>
        <div class="cartcontrol-wrapper">
          <cartcontrol :food="food"></cartcontrol>
        </div>
      </li>
    </ul>
  </div>
</div>
```

### 7.22 购物车详情页(2) 样式
购物车详情页默认是不显示，我们定义一个computed计算属性listShow来控制详情页是否展开。展开有两个条件，且两个条件都必需满足才可以

1. 选中的totalCount > 0
2. 定义一个变量fold，来表示当前是否时折叠状态，默认是true

```
computed: {
  listShow () {
    if (!this.totalCount) {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.fold = true
      return false
    }
    return !this.fold
  }
}
```

由于点击底部的购物车按钮，能够实现展开/关闭功能，所以需要加一个方法，实现取反。这样选择商品后，点击底部的购物车能实现展开/关闭购物车详情
```
method: {
  toggleList () {
    if (!this.totalCount) {
      return
    }
    this.fold = !this.fold
  }
}
```

#### 7.22.1 购物车详情页 样式
购物车详情页是一个绝对定位，我们通过添加transition效果，让其往上移动。这里使用了一个技巧: transform translate3d(0, -100%, 0)，让其往上移动-100%效果，
然后通过设置某个域的最大长度max-height，以实现固定长度，超过最大长度，就支持滑动。

```
.shopcart-list
  position absolute
  left 0
  top 0
  z-index -1
  width 100%
  transform translate3d(0, -100%, 0)
  &.fade-enter-active, &.fade-leave-active
    transition: all 0.5s linear
    transform translate3d(0, -100%, 0) //每个表项相对于当前自身的高度做一个偏移
  &.fade-enter, &.fade-leave-active
    transform translate3d(0, 0, 0)
  .list-head
    height 40px
    line-height 40px
  .list-container
    padding 0 18px
    max-height 217px
    overflow hidden
```

### 7.23 购物车通过BetterScroll实现滑动
当选择的商品过多时，详情页显示不下，需要支持滑动。这里我们类似，使用BetterScroll来实现滑动。我们在computed的计算属性listShow中做
列表的初始化，因为只有当listShow=true时，我们可能需要使用滑动功能。同时，每次创建前，先判断是否已经存在，如果已经存在则调用refresh()方法刷新即可

使用BetterScroll时，需要告知传入的是哪个dom对象，该处我们应该传入的是list-container对象，通过在其标签上添加ref="listContainerWrapper"
来找到并传入这个对象。

```
listShow () {
  if (!this.totalCount) {
    // eslint-disable-next-line vue/no-side-effects-in-computed-properties
    this.fold = true
    return false
  }
  let show = !this.fold
  if (show) {
    this.$nextTick(() => {
      // 为了避免每次添加都创建一个scroll，判断当其不存在是则创建，如果存在，则调用起refresh()方法刷新即可
      if (!this.scroll) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.scroll = new BScroll(this.$refs.listContainerWrapper, {
          mouseWheel: true,
          bounce: false,
          click: true,
          tap: true
        })
      } else {
        this.scroll.refresh()
      }
    })
  }
  return show
}
```

### 7.24 购物车详情(4)

#### 7.24.1 清空购物车
为清空添加清空事件，我们为在empty标签上添加@click="empty"方法

```
methods: {
    empty () {
      this.selectFoods.forEach((food) => {
        food.count = 0
      })
    }
}
```

#### 7.24.2 背景做模糊效果
背景是一个具有模糊效果的背景，同时与整个购物车同级的效果，同样我们使用transition来实现滑动，添加transform all 0.5s属性

模糊效果，使用backdrop-filter blur(10px)属性来实现模糊效果

#### 7.24.3 点击背景区域，同样可以折叠
我们在list-mask标签中，添加一个点击事件@click="hideList"，将变量fold设置为true，让其折叠。

```
methods: {
    hideList () {
      this.fold = true
    }
}
```

#### 7.24.3 去结算
点击去结算区域，发生结算跳转。我们在div=content-right中添加@click="pay"事件，我们不再写订单详情的页面，仅简单的弹框支付

```
methods: {
    pay () {
      if (this.totalPrice < this.minPrice) {
        return
      }
      window.alert(`支付${this.totalPrice}元`)
    }
}
```

我们发现，调用结算时，会@click="toggleList"展开商品详情页，因为属于点击的区间，Vue提供简单的修饰符，阻止默认事件。这样我们点击结算，就不会弹出商品详情页了
@click.stop.prevent="pay"。这样就不会展开

## 第八章 项目实战-商品详情页
商品详情页是通常是一个隐藏的。所以在data()方法中定义变量showFlag，缺省将其隐藏

### 8.1 商品详情页实现(1)

商品详情页是由商品页good.vue传入，在props中定义属性food，传入参数

商品详情页是一个相对于浏览器窗口是固定位置，使用position fixed。

```
position fixed
z-index 30
top 0
left 0
width 100%
background #fff
```

通常对于一个弹出的页面，都是一个绝对定位的布局，如果是有父亲存在，使用position:absolute

#### 8.1.1 使用导入的组件顺序.
比如，目前goods.vue点击了单个good，需要显示商品的详情页面，我们需要传参数，并引入good.vue

1. 编写<food>标签，使用:food=selectdFood来传参
2. 在data方法中selectdFood缺省变量
3. 在需要点击的地方添加@click="selectFood(food)"方法，实现调用
4. 在methods属性中添加方法selectFood(food)，该方法主要的目的就是将选中的food，赋值给data()中selectdFood=food
5. 导入food.vue，如: import food from '@/components/food/food'
6. 在components属性中定义food

### 8.2 商品详情页实现(2)
实现点击把food商品展开商品详情。我们在实现方法时，父组件可以调用子组件的方法，子组件不能调用父组件的方法。所以我们在子组件food.vue中定义一个方法show()，然后在父组件goods.vue中调用，实现商品页的展开

在VUE定义方法过程中，如果该方法仅在内部使用，方法名称一般以下划线"_"开头

```
selectFood (food) {
  this.selectdFood = food
  this.$refs.food.show()
}
```

#### 8.2.1 商品详情页动画
点击food商品页，实现从右往左出现的动画。首先我们声明标签transition，然后为其配置CSS格式

```
&.move-enter-active
  transition all 0.2s linear
  transform translate3d(0, 0, 0)
&.move-enter
  transform translate3d(100%, 0, 0)
&.move-leave-active
  transition all 0.2s linear
&.move-leave-to
  transform translate3d(100%, 0, 0)
```

#### 8.2.2 商品详情页 - 样式
首先，详情页最上面是一个图，对应于food.image地址。这里我们有一个需要思考的问题：

food.image是一个图片，这个图片的宽高是随着手机屏幕大小变化的，所以我们不能写死；另一方面，如果这个图片不先预留位置，等加载后，就会从给用户一个抖动过程，不太友好。

### 8.3 商品详情页实现(3)
我们如果让food.image图片随着手机屏幕大小变化而变化呢？这里我们使用到一个黑魔法，我们将属性height设置为0，然后设置width: 100%和padding-top: 100%

这样的话，padding就会和height保持一致了。这样就是一个宽高相等的容器了，接下来img就直接全部填充就可以了

```
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
```

#### 8.3.1 添加返回按钮
使用标签i=icon-arrow_lift，来引入一个返回按钮。返回按钮外面套一个div标签，方便定位。

外层使用的绝对定位，同时给标签i=icon-arrow_lift添加padding属性，让其点击范围比较大。我们为标签i=icon-arrow_lift添加

```
<div class="back" @click="hide">
    <i class="icon-arrow_lift"/>
</div>

.back
    position absolute 
    top 10px
    left 0
    .icon-arrow_lift
      display block
      padding 10px
      font-size 20px
      color #fff
```

#### 8.3.2 编写后续样式
后续是一个内容区域，内容区域分三块：标题、销售详情和价格

```
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
```

### 8.4 商品详情页实现(4)
先给上诉的内容区域三块：标题、销售详情和价格，添加CSS格式。

添加较为简单，其中想提醒下，商品原始价格使用横线删除线，可以通过属性text-decoration: line-through来实现

#### 8.4.1 为整个页面添加滚动效果
使用Better-Scroll滚动整个页面。 

- 第一步：引入better-scroll。 import BScroll from 'better-scroll'
- 第二步：我们应该在show()方法中添加better-scroll中。同时必须使用$nextTick方法中调用

```
methods: {
    show () {
      this.showFlag = true
      this.$nextTick(() => {
        // 为了避免每次添加都创建一个scroll，判断当其不存在是则创建，如果存在，则调用起refresh()方法刷新即可
        if (!this.scroll) {
          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
    }
}
```

#### 8.4.2 写购物车组件
购物车组件相对于父组件是绝对定位到设计稿的位置。同时这个位置其实有两个状态：一个是购物车按钮（当有购买数量的时候），一个是购买按钮。某个时刻只能显示一个按钮

- 购物车按钮。购物车按钮是我们原来就写好的cartcontrol组件。可以先通过import引入，然后在属性components组册好，就可以使用了。使用时，需要传入参数food
- 购买按钮。购买按钮，购买按钮是"加入购物车"字段样式，该样式在没有food.count时候或者food.count === 0时候展示

### 8.5 商品详情页实现(5)
购物车按钮和购买按钮我们都是绝对定位: position absolute。其中购物车按钮内部有6px的padding，所以right和bottom设置为12px

```
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
```

#### 8.5.1 添加点击加入购物车按钮
点击"加入购物车"按钮后，应该显示cartcontrol组件。通过添加click事件实现。由于food对象可能第一次有属性'count'，所以我们需要通过Vue.set设置属性，
以保证Vue可以看到属性变化。当然，需要先导入Vue控件: import Vue from 'vue'

```
addClick (event) {
  this.$emit('cart-add', event.target)
  Vue.set(this.food, 'count', 1)
}
```

#### 8.5.2 为cartcontrol组件添加stop.prevent属性
goods.vue界面点击cartcontrol时，会发现跳转进入详情，这不是我们希望的。为cartcontrol组件添加stop.prevent来阻止跳转

#### 8.5.3 商品详情页实现小球跳转

- 加入购物车。这个比较简单，只需要在方法中通过通过调用emit事件，发给good.vue父组件即可.

```
addClick (event) {
  Vue.set(this.food, 'count', 1)
  this.$emit('cart-add', event.target)
},
```

- cartcontrol组件由于在food.vue中使用，父组件则是food.vue，所以我们需要中转一次，将emit事件发送出去

```
<cartcontrol :food="food" @cart-add="cartAdd"></cartcontrol>
cartAdd (target) {
  this.$emit('cart-add', target)
}
```

### 8.6 split组件实现(6)
商品页接下来是一个分割，分割现象很多地方都有使用，我们封装成一个split.vue组件，被别的地方引用

- 第一步：建立split文件夹和split.vue组件
- 第二步: 在food.vue组件中引入split.vue组件，并注册到components属性中
- 第三步：使用split组件。 <split class="split"></split>

### 8.6.1 split组件样式
split样式很简单

- 上下有1像素的border。使用border-top和border-bottom
- 有一个背景色
- 宽度是100%。 高度是16px

### 8.6.2 商品介绍
split下方是一个商品介绍，为其添加布局。该布局共分为两个区域：title+信息。两部分都比较简单，直接按照UI设计稿编写即可

### 8.7 ratingselect组件(1)
商品评价区块。商品评价该部分相对复杂点。我们发现，该部分在商家评论中也是有类似结构，所以建议抽象成一个公共组件来使用。

#### 8.7.1 ratingselect设置一个props
使用ratingselect组件，为其设置一些props，传入props参数，也就是外部可以传入组件的一些变量。大概包括如下props参数

- ratings - 所有的评论
- 选择的类型selectType - 正面、负面和所有
- 只看有内容的评价onlyContent - 是一个Boolean类型
- 评价的描述desc - 定义一个对象，有三个属性: all、positive和negative

```
props: {
    ratings: {
      type: Array,
      default () {
        return []
      }
    },
    selecType: {
      // 全部=2，正向=0，负面=1
      type: Number,
      default: ALL
    },
    onlyContent: {
      type: Boolean,
      default: false
    },
    desc: {
      type: Object,
      default () {
        return {
          all: '全部',
          positive: '满意',
          negative: '不满意'
        }
      }
    }
}
```

#### 8.7.2 ratingselect编写dom组件
通常我们在写一个组件时，最外层都会写一个div，其class用的是组件的名字。随后，分成上下两个区块，第一个区块是上面的类型，第二个是下面的选择区域

第一个区块包含了三个部分：全部、正面和负面
第二个区域包含了两个部分：icon和text

```
<div class="ratingselect">
    <div class="rating-type">
      <span>{{desc.all}}</span>
      <span>{{desc.positive}}</span>
      <span>{{desc.negative}}</span>
    </div>
    <div class="switch">
      <span class="icon-check_circle"></span>
      <span class="text">只看有内容的评价</span>
    </div>
</div>
```

#### 8.7.4 引入ratingselect组件
在food.vue组件中引入ratingselect.vue

### 8.8 ratingselect组件(2)
在food.vue组件中引入ratingselect.vue后，需要在food.vue组件中使用ratingselect.vue时传入必要的参数

```
data () {
    return {
      selectType: ALL,
      onlyContent: true,
      desc: {
        all: '全部',
        positive: '推荐',
        negative: '吐槽'
      }
    }
}

<ratingselect :select-type="selectType" :only-content="onlyContent" :desc="desc" :ratings="food.ratings"></ratingselect>
```

### 8.8.1 ratingselect组件写一些样式
首先是先写food.vue组件中的商品评价样式。样式比较简单，只要注意，padding只能写padding-top，因为下方的评价有一个border是横穿整个屏幕了，如果页写了padding-left将无法写出整个border。

只能在title中使用margin-left来修饰

```
.rating
    padding-top 18px
    .title
      line-height 14px
      margin-left 18px
      font-size 14px
      color rgb(7, 17, 27)
```

#### 8.8.2 ratingselect组件写一些样式(2)
进入ratingselect.vue中样式编写

先写下三个组件: 全部、推荐和吐槽。UI设计稿这里的底部有一个border。需要非常注意的是，我们不能直接使用padding 18px 18px，否则底部的border将紧贴着作左右边框

使用padding和margin共同作用，达到效果

```
.ratingselect
    .rating-type
      padding 18px 0
      margin 0 18px
      border-1px(rgba(7, 17, 27, 0.1))
```

### 8.9 ratingselect组件(3)
接下来我们编写三个组件: 全部、推荐和吐槽样式。观察UI设计稿发现，三个框有共性和差一点，共性在于大小完全一样，差异在于颜色等不通。定义出三个class来应对：block、positive和negative

三个组件是并排的，所以使用display:block

```
.block
    display inline-block
    padding 8px 12px
    margin-right 8px
    line-height 16px
    border-radius 2px
    font-size 12px
    color rgb(77, 85, 93)
    .count
      margin-left 2px
      font-size 8px
    &.positive
      background rgba(0, 160, 220, 0.2)
    &.negative
      background rgba(77, 85, 93, 0.2)

<span class="block positive">{{desc.all}}<span class="count">47</span></span>
<span class="block positive">{{desc.positive}}<span class="count">40</span></span>
<span class="block negative">{{desc.negative}}<span class="count">7</span></span>
```

### 8.9.1 选中激活active表现

点击并排的三个组件，呈现激活按钮。active是一个选择添加的，也就是满足某个条件，添加上active样式。所以需要使用上:class="{'active':selectType=3}

```
<span class="block positive" :class="{'active':selectType===2}">{{desc.all}}<span class="count">47</span></span>
<span class="block positive" :class="{'active':selectType===0}">{{desc.positive}}<span class="count">40</span></span>
<span class="block negative" :class="{'active':selectType===1}">{{desc.negative}}<span class="count">7</span></span>
```

### 8.10 ratingselect组件(4)
接下来我们写switch样式。 switch由两部分组成：左边是icon，右边是文本。通过两个span让其并列排序

这里有一个技巧，让其内容垂直显示。通过添加display:inline-block && vertical-align:top居中显示

```
.switch
  padding 12px 18px
  line-height 24px
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  color rgb(147, 153, 159)
  font-size 0
  .icon-check_circle
    display inline-block
    vertical-align top
    margin-right 4px
    font-size 24px
  .text
    display inline-block
    vertical-align top
    line-height 24px
    font-size 12px
```

### 8.10.1 当按钮icon选中时，由绿色显示
通过PS获取到绿色的 #00c850，通过onlyContent=true来激活on属性。

```
&.on
    .icon-check_circle
      color #00c850
<div class="switch" :class="{'on':onlyContent}">
```

### 8.11 ratingselect组件(5)
接下来给ratingselect组件添加事件，主要包括两类：按钮的事件和switch事件

#### 8.11.1 给按钮添加事件
我们希望点中按钮，激活active的class，active的class是由selectType控制的，所以只需要添加一个@click方法，来修改selectType属性即可。

在ratingselect组件中修改了selectType属性，我们如何让父组件food.vue来感知，并修改其自己的selectType。这里我们通过使用this.$emit在父子组件中传递。

```
methods: {
    select (type) {
      this.$emit('ratingtype-select', type)
    }
}
```

我们在副组件food.vue中添加补充拦截事件，修改对应的值

```
<ratingselect :selectType="selectType" :onlyContent="onlyContent" :desc="desc" :ratings="food.ratings" @ratingtype-select="ratingtypeSelect" @content-toggle="contentToggle"></ratingselect>

ratingtypeSelect (selectType) {
  this.selectType = selectType
}
```

#### 8.11.2 填入补充的数
每个按钮中，其实有一个评论数需要展示，我们将评论的条数计算出来，填入。

### 8.12 评价列表(1)
商品评价列表分为两个状态：一个是有评价页，一个是显示无评价。我们在food.vue组件中定义

有评价页比较复杂，我们采用外部相对定位，内部绝对定位方式。内部主要分为两个部分：用户信息部分和评价部分

其中评价部分的第一个是一个icon，可能有两种样式，采用对象的动态绑定方式来实现:class="{'icon-thumb_up':rating.rateType===0,'icon-thumb_down':rating.rateType===1}"

```
<div class="rating-wrapper">
  <ul v-show="food.ratings && food.ratings.length">
    <li v-for="(rating, index) in food.ratings" :key="index" class="rating-item">
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
```

### 8.13 评价列表(2)
接下来我们写CSS的样式。样式和上面的类似。

```
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
        font-size 12px
        color rgb(7, 17, 27)
        .icon-thumb_up, .icon-thumb_down
          margin-right 4px
          line-height 24px
          font-size 12px
        .icon-thumb_up
          color rgb(0, 160, 220)
```

### 8.14 评价列表(3)
点击按钮：全部、推荐和吐槽。联动起下面的评论展示。

在遍历评价列表时，我们需要根据评价的内容和rating.type来控制显示不显示，所以，这里需要用一个v-show来绑定一个表达式，这个表达式控制该列表项是否显示。

```
<li v-show="needShow(rating.rateType, rating.text)" v-for="(rating, index) in food.ratings" :key="index" class="rating-item border-1px" >

needShow (type, text) {
  if (this.onlyContent && !text) {
    return false
  }
  if (this.selectType === ALL) {
    return true
  } else {
    return type === this.selectType
  }
}
```

这里有一个要提醒的地方：由于操作子组件ratingselect.vue中的按钮和选择时，发出了事件，在事件的方法中我们修改了this.selectType和this.onlyContent。
这个两个属性的改变，可能导致我们的betterScroll需要重新计算一次，所以这里我们需要手动调用一下: this.scroll.refresh()

Vue属性的改变，是异步的，我们需要再次使用this.$nextTick()方法异步刷新betterScroll

```
ratingtypeSelect (selectType) {
  this.selectType = selectType
  this.$nextTick(() => {
    this.scroll.refresh()
  })
},
contentToggle (onlyContent) {
  this.onlyContent = onlyContent
  this.$nextTick(() => {
    this.scroll.refresh()
  })
}
```

### 8.15 评价列表(4)
接下来，我们需要处理，当评价为空时，我们需要处理暂无评价的文案。这个文案很简单，

```
.no-rating
  padding 16px 0
  font-size 12px
  color rgb(147, 153, 159)
```

#### 8.15.1 显示时间
在Vue中格式化时间很简单，我们通过filters来实现。Vue中通过类似于管道'|'的方式，让数据通过管道后的方法来处理。

然后，我们在属性filters中声明formatDate的过滤器。

由于时间的转换是一个非常通用的方法，我们建议定义到一个共用的date.js中，以便后续的人都可以用。

```
<div class="time">{{rating.rateTime | formatDate}}</div>
filters: {
    formatDate (time) {
      let date = new Date(time)
      return fomateDate(date, 'yyyy-MM-dd hh:mm')
    }
}
```

#### 8.15.2 将共用的方法抽出，放到date.js中

第一步：在vue文件中，引用formatDate方法。import {formatDate} from '@/common/js/date'。可以引入多个方法，可以使用逗号','分割。
第二步：在vue中使用该方法。

### 8.16/17 评价列表(5/6) 
编写时间的计算方法。计算方法在date.js中定义并实现。主要思路是使用正则表达式的替换

```
export function formatDate (date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
```

## 第九章 项目实战-评价页
评价页也是和good.vue组件一样，是一个绝对定位position absolute

### 9.1 rating组件的开发 overview
overview组件是评价页中的纵览，即：评分和服务态度评星

overview组件有两个部分，左边是综合评分，右边是服务态度的星级。由于手机屏幕的宽度不同，这里我们需要使用flex布局，来自适应宽度的变化

左边是固定长度，所以使用flex 0 0 137px，右边是一个变化的内容，使用flex 1

```
.overview
  display flex
  padding 8px 0
  .overview-left
    flex 0 0 137px
    width 137px
    border-right 1px solid rgba(7, 17, 27, 0.1)
    text-align center
  .overview-right
    flex 1
    padding-left 24px
```

### 9.2 rating组件开发 overview开发2
overview组件中服务态度评星，星级主要是引入之前使用的star.vue组件来讲进行布局。

```
<div class="overview-right">
    <div class="score-wrapper">
      <span class="title">服务态度</span>
      <star :size="36" :score="seller.serviceScore"></star>
      <span class="score">{{seller.serviceScore}}</span>
    </div>
    <div class="score-wrapper">
      <span class="title">商品态度</span>
      <star :size="36" :score="seller.foodScore"></star>
      <span class="score">{{seller.foodScore}}</span>
    </div>
    <div class="delevier-wrapper">
      <span class="title">送达时间</span>
      <span class="deliveryTime">{{seller.deliveryTime}}分钟</span>
    </div>
</div>
```

#### 9.2.1 服务态度评星的样式
其中星级和评分是水平对齐，使用display inline-block属性来控制。其他的都是写常规的CSS格式

```
display inline-block
vertical-align top
```

### 9.3 rating组件开发 overview开发3
切换到iphone5下会错乱，数据会显示换行，因为：右侧剩余可显示的空间不足，只能换行显示，那我们如何处理呢？

我们需要通过添加@media来控制

```
@media only screen and (max-width 320px) {
  padding-left 6px
}
```
上面的意思是：当屏幕的宽度小于320px时，调整padding-left为6px。这种方法非常适用屏幕大小的兼容性

### 9.4 rating组件开发 评价列表
评价列表上面的分割栏split.vue和下面的评价ratingselect.vue都是可以复用的。我们按照导入组件的方式，复用下两个组件

split.vue组件很简单，导入即可直接使用。但是ratingselect.vue组件有部分需要传入参数，其中有ratings的参数，我们可以通过调用后端接口获取。通过在created()方法中，调用http请求（也就是vue-resource)，获取后端接口数据

```
created () {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.ratings = response.data
      }
    }, response => {
      // error callback
    })
}
```

### 9.4.1 评价列表
接下来开发评价列表。列表最外面肯定是一个ul结构，其中列表的每一项是一个左右分割的样式，左边是头像，右边是内容。

左边头像部分是不变化的，后边的内容是自适应变化的大小，所以这里也是一个flex布局的结构。

### 9.5 rating组件开发 评价列表2
rating.vue组件中的列表，按照设计稿一次写布局，其中有一行是时间，时间我们按照food.vue中的开发方式，使用filters属性来利用类似于管道的方式格式化时间字符串。

为了实现页面的滚动，我们引入better-scroll组件，仔细思考我们应该通过http接口获取到参数后，来初始化better-scroll

```
created () {
    this.$http.get('/api/ratings').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.ratings = response.data
        // 初始化better-scroll
        this.$nextTick(() => {
          // 为了避免每次添加都创建一个scroll，判断当其不存在是则创建，如果存在，则调用起refresh()方法刷新即可
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.ratings, {
              mouseWheel: true,
              bounce: false,
              click: true,
              tap: true
            })
          } else {
            this.scroll.refresh()
          }
        })
      }
    }, response => {
      // error callback
    })
}
```

#### 9.5.1 评价列表的样式
其中有一个非常要提醒的点：由于时间元素是一个绝对定位，所以其父元素content标签中，一定要加上position relative，以实现时间元素可以使用绝对定位.

布局上使用的flex布局，因为左边的头像是固定大小，右边的内容是变化的大小

### 9.6 rating组件开发 评价列表3
该部分主要是样式的编写，按照规则写即可

```
.recommend
    line-height 16px
    font-size 0
    .icon-thumb_up, .item
      display inline-block
      vertical-align top
      margin 0 8px 4px 0
      font-size 9px
    .icon-thumb_up
      color rgb(0, 160, 220)
    .item
      padding 0 6px
      border 1px solid rgba(7, 17, 27, 0.1)
      border-radius 2px
      color rgb(147, 153, 159)
      background rgb(255, 255, 255)
```

#### 9.6.1 时间的绝对定位
评价页有一个时间，位于每个的右上角，使用绝对定位。 这里要提醒，子组件是采用绝对定位的话，父组件需要是绝对定位，否则定位有问题.

```
.time
    position absolute
    top 0
    right 0
    line-height 12px
    font-size 10px
    font-weight 200
    color rgb(147, 153, 159)
```

### 10.1 seller组件开发overview开发(1)
overview是位于上面展示部分。布局较为简单，其中我们并排展示：起送价、商家配送和平均配送时间，采用列表ul结构来排列

```
<div class="overview">
  <h1 class="title">{{seller.name}}</h1>
  <div class="desc">
    <star :size="36" :score="seller.score"></star>
    <span class="text">({{seller.ratingCount}}})</span>
    <span class="text">{{seller.sellCount}}</span>
  </div>
  <ul class="remark">
    <li class="block">
      <h2>起送价</h2>
      <div class="content">
        <span class="stress">{{seller.minPrice}}</span>元
      </div>
    </li>
    <li class="block">
      <h2>商家配送</h2>
      <div class="content">
        <span class="stress">{{seller.deliveryPrice}}</span>元
      </div>
    </li>
    <li class="block">
      <h2>平均配送时间</h2>
      <div class="content">
        <span class="stress">{{seller.deliveryTime}}</span>分钟
      </div>
    </li>
  </ul>
</div>
```

### 10.2 seller组件开发overview开发(2)
overview组件的样式。

第一：整个页面是一个绝对定位，所以需要添加position absolute，再加上top和left来辅助定位。其他都是些正常写法
第二：并排的：起送价、商家配送和平均配送时间是通过ul列表标签来排列，很明显这部分是随着屏幕三等分，所以我们又用到了flex 1的布局，来均分三等分。
第三：三等分过程中，最后一个是没有border-right，采用&:last-child border none来控制 

### 10.3 公告与活动开发1
引入split.vue组件

公告活动的布局和界面都是非常普通的，按照常规书写即可。

#### 10.3.1 活动列表页
活动列表是和header.vue组件中的类似，布局格式都是列表形式

```
<ul v-if="seller.supports" class="supports">
  <li class="support-item border-1px" v-for="item in seller.supports" :key="item.index">
    <span class="icon" :class="classMap[item.type]"></span>
    <span class="text">{{item.description}}</span>
  </li>
</ul>
```

### 10.4 公告与活动开发2
接下来写活动列表的样式。活动列标的样式中前面的icon根据:class="classMap[item.type]"而动态变化

```
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
```

#### 10.3.2 活动列表页
引入BetterScroll.vue组件，以往我们都在created()方法中渲染dom，这次我们在mounted()方法中渲染，这样更安全些。

```
mounted () {
    this.$nextTick(() => {
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
    })
}
```

### 10.5 BScroll引用
如上面的做法，我们在mounted()中初始化BetterScroll方法，但这个有一个问题，在第一次刷新商家页面的时候，发现无法滚动屏幕，为什么呢？

mounted()方法调用后，变量seller还没被初始化(因为seller变量是由异步传入到内部组件中的)，页面还没有被撑开，所以BetterScroll无法准确计算出页面的高度，也就无法实现滚动。在这里，我们可以通过watch机制来实现，watch变量seller，
当seller变量发生变化时，初始化或刷新BetterScroll组件.

```
watch: {
    'seller' () {
      console.log(this.seller)
      this.$nextTick(() => {
        this._initScroll()
      })
    }
}
```

### 10.6 商家实景图
商家实景图难度在于，横向排列了多个图片，当多个图片超过屏幕的宽度时，是支持图片横向滑动

在写页面的布局时，我们将图片的地方通过写一个pics-wrapper包装下，这样在写CSS样式时，以实现让这个图片的地方滚动

```
<div class="pics">
    <h1 class="title">商家实景</h1>
    <div class="pic-wrapper">
      <ul class="pic-list">
        <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index">
          <img width="120px" height="90px" :src="pic">
        </li>
      </ul>
    </div>
</div>
```

#### 10.6.1 横向排列图片不换行
我们添加white-space nowrap来实现当图片超过宽度是，不换行
 
```
.pic-wrapper
  width 100%
  overflow hidden
  white-space nowrap
  .pic-list
    font-size 0
    .pic-item
      display inline-block
      vertical-align top
      margin-right 6px
      width 120px
      height 90px
      &:last-child
        margin-right 0
```

#### 10.6.2 图片支持左右滑动
图片的左右滑动，我们也是通过BetterScroll来实现。我们需要通过一段通过一段JS脚本，将width宽度绑定到组件上。

按照视频中的写法，图片的左右滑动效果并不好，不好操作。

### 10.7 商家信息
商家信息是非常简单的，页面布局是一个title + 循环展示info

```
<div class="info">
    <h1 class="title border-1px">商家信息</h1>
    <ul>
      <li class="info-item border-1px" v-for="(info, index) in seller.infos" :key="index">
        <p>{{info}}</p>
      </li>
    </ul>
</div>
``` 

### 10.8 收藏商家1
最有我们开发店铺收藏的逻辑。收藏相对于Overview组件的区块，来决定定位到右上角。

收藏主要由两部分组成：一个是icon='icon-favorite'，另一个是显示的内容。两个分别由两个状态，icon可能是激活状态或未激活状态，内容是'已收藏'和'未收藏'

```
<div class="favorite">
  <span class="icon-favorite" :class="{'active':favorite}"></span>
  <span class="text">{{favoriteText}}}</span>
</div>
```

为了刻画出两个状态，"favorite"我们定义一个变量来控制，favoriteText我们定义一个计算属性

```
data () {
    return {
      favorite: false
    }
},
computed: {
    favoriteText () {
      return this.favorite ? '已收藏' : '未收藏'
    }
}
```

### 10.8.1 收藏商标的样式
收藏的商标是绝对定位，所以对于父元素使用position relative，而其子元素使用position absolute来决定定位

```
.favorite
  position absolute
  right 18px
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
```

### 10.8.2 添加点击等操作
添加@click="toggleFavorite"方法

```
toggleFavorite () {
  this.favorite = !this.favorite
}
```

### 10.8.3 调整收藏的位置
页面样式运行展示时发现，点击收藏后，由于绝对定位的left和right都固定了，所以有变动，我们需要提供这个favorite的宽度，避免随着点击而摆动

```
.favorite
  position absolute
  width 50px
  right 5px
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
```

### 10.9 收藏商家2
我们发现，点击收藏变成"已收藏"，刷新页面后，又会变成"收藏"，我们希望把前端能够保持favorite这个变量的状态，也就是缓存其这个变量，刷新也不会改变。

真是的项目中，每个商家应该都会有一个id作为唯一标识。我们需要在App.vue变量中添加这个id，这个id从哪里来呢？我们需要从url中获取。

第一步：我们定义util.js中方法urlParse()

```
/**
 * 解析url参数
 * @example ?id=3423423&a=b
 * @return Object {id:3423423, a:b}
 */
export function urlParse () {
  let url = window.location.search
  let obj = {}
  let reg = /[?&][^?&]+=[^?&]+/g
  let arr = url.match(reg)
  // ['?id=3423423', '&a=b']
  if (arr) {
    arr.forEach((item) => {
      let tempArr = item.substring(1).split('=')
      let key = decodeURIComponent(tempArr[0])
      let value = decodeURIComponent(tempArr[1])
      obj[key] = value
    })
  }
  return obj
}
```

第二步：我们在app.vue中使用这个方法获取到obj

```
data () {
    return {
      // 定义数据的属性
      seller: {
        id: (() => {
          let queryParam = urlParse()
          console.log(queryParam)
          return queryParam.id
        })()
      }
    }
}
```

第三步：将从后端获取到的数据和从url中获取到的id数据进行合并
我们不能直接使用this.seller = response.data，因为这样会将id数据丢失，我们需要通过合并的方式。

Vue官网推荐我们使用Object.assign方法来进行赋值。

```
created () {
    // 使用vue-resource发起前后端请求
    this.$http.get('/api/seller?id=' + this.seller.id).then(response => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    }, response => {
      // error callback
    })
}
```

第四步：使用id来缓存favorite变量

### 10.10 收藏商家3
我们需要在每次点选收藏按钮时，把点选后的结果缓存到前端浏览器中。我们需要设计一个通用的localStorage存储库

新建store.js文件中有两个方法: saveToLocal和loadFromLocal，这两个方法都是通过字符串的形式将所需要的保存的结果存储到localStorage中

```
export function saveToLocal (id, key, value) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    seller = {}
    seller[id] = {}
  } else {
    seller = JSON.parse(seller)
    if (!seller[id]) {
      seller[id] = {}
    }
  }
  seller[id][key] = value
  window.localStorage.__seller__ = JSON.stringify(seller)
}

export function loadFromLocal (id, key, def) {
  let seller = window.localStorage.__seller__
  if (!seller) {
    return def
  }
  seller = JSON.parse(seller)[id]
  if (!seller) {
    return def
  }
  return seller[key] || def
}
```

方法写好后，我们在seller.vue页面中导入这两个JS方法，并实现保存。主要两个地方使用：第一，调用loalFromLocal()方法初始化favorite；第二，点击保存时，调用saveToLocal

### 10.11 体验优化
我们发现，点击商品、评价和商家时，原有页面的数据重新被获取，页面也重新被绘画一次，这肯定不是我们希望的。

Vue提供一个keep-alive来解决该问题，使用了keep-alive会组件的一些状态缓存在内存中，这样重新回到商品时，会直接从内存中获取到Dom。这样我们就不会反复调用后端接口

```
<keep-alive>
  <router-view :seller="seller"></router-view>
</keep-alive>
```

## 第十一章和第十二章

### 11. nodejs调试和webpack配置介绍
这一章节，主要学习将Vue组件打包。

我们发现在package.json文件中的scripts，有一个build: node build/build.js属性。当我们运行npm run build时，就是执行这个对应的脚本

成功运行完: npm run build时，会生成一个dist目录，这个目录下是项目打包后的结果。

#### 11.1 这些build后的文件怎么产生的呢？
其实执行的过程就是build.js文件（位于build目录下)，简单的来说：整个build过程就是将我们的源代码打包、压缩、hash到目录：dist/下。具体如何做的，可以参考build目录下的js脚本或视频介绍

#### 11.2 不提供别人调试
打包过程中，我们可以通过关闭sourceMap: false，来实现打包后的结果没有源代码，这样别人也无法调试



