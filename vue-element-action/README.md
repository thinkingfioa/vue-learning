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
小球是从点击的地方开始，做抛物线落地到购物车中。抛物线有两个方向的变化，所以需要两个层，外层控制水平向左移动，内层控制垂直方向变化，先上后下。

由于在点击过程中，可能存在多个小球在空中，需要在data()方法中定一个balls数组，每个元素对应一个小球，暂定5个小球。然后获取鼠标点击位置，发起移动效果

#### 7.18.2 获取抛物线起点
抛物线起点是获取的，相对于界面的位置的横纵坐标。我们需要在点击购物车按钮时，派发一个事件，将他的dom传出来。

首先，我们在cartcontrol.vue中点击addCart()时，派发一个事件:this.$emit('cart-add', event.target)，并将event传出来

第二，在goods组件中通过在cartcontrol组件上添加v-on:cart-add='cartAdd'，注册事件。当收到'cart-add'事件时调用cartAdd(el)方法

第三，goods组件shopcart标签中添加 ref="shopcart"，然后在cartAdd(el)方法中调用drop方法。实现传入

```
cartAdd (el) {
  this.$refs.shopcart.drop(el)
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




## 第八章 项目实战-商品详情页
商品详情页是通常是一个隐藏的。所以在data()方法中定义变量showFlag，缺省将其隐藏

### 8.1 商品详情页实现(1)

商品详情页是由商品页传入，在props中定义属性food，传入传入参数

商品详情页是一个相对于浏览器窗口是固定位置，使用position fixed

```
position fixed
z-index 30
top 0
left 0
width 100%
```

通常对于一个弹出的页面，都是一个绝对定位的布局，如果是有父亲存在，使用position:absolute

#### 8.1.1 使用导入的组件顺序.
比如，目前goods.vue点击了单个good，需要显示商品的详情页面，我们需要传参数，并引入good.vue

1. 编写<food>标签，使用:food=selectdFood来传参
2. 在data方法中selectdFood缺省变量
3. 在需要点击的地方添加@click="selectFood(food, $event)"方法，实现调用
4. 在methods属性中添加方法selectFood(food, $event)，该方法主要的目的就是将选中的food，赋值给data()中selectdFood
5. 导入food.vue，如: import food from '@/components/food/food'
6. 在components属性中定义food

