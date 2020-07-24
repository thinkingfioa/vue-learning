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