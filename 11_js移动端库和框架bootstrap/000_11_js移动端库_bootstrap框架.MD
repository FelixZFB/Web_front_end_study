## Web前端笔记 ##


## 第十一部分：js移动端库和bootstrap框架



## 1. 移动端js事件
- 移动端的操作方式和PC端是不同的，移动端主要用手指操作，
    所以有特殊的touch事件，touch事件包括如下几个事件：
    1、touchstart: //手指放到屏幕上时触发
    2、touchmove: //手指在屏幕上滑动式触发
    3、touchend: //手指离开屏幕时触发
    4、touchcancel: //系统取消touch事件的时候触发，比较少用 
    
- 移动端一般有三种操作，点击、滑动、拖动，
    这三种操作一般是组合使用上面的几个事件来完成的，
    所有上面的4个事件一般很少单独使用，
    一般是封装使用来实现这三种操作，可以使用封装成熟的js库。
    
    
## 2. zeptojs库
- Zepto是一个轻量级的针对现代高级浏览器的JavaScript库， 
    它与jquery有着类似的api。 如果你会用jquery，那么你也会用zepto。
    Zepto的一些可选功能是专门针对移动端浏览器的；
    它的最初目标是在移动端提供一个精简的类似jquery的js库。

- zepto官网：http://zeptojs.com/
- zepto中文api：http://www.css88.com/doc/zeptojs_api/
- zepto包含很多模块，默认下载版本包含的模块有Core, Ajax, Event, Form, IE模块，如果还需要其他的模块，可以自定义构建。
- zepto自定义构建地址：http://github.e-sites.nl/zeptobuilder/ 


## 3. swiper滑动效果插件
- swiper.js是一款成熟稳定的应用于PC端和移动端的滑动效果插件，
    一般用来触屏焦点图、触屏整屏滚动等效果。 
    swiper分为2.x版本和3.x版本，
    2.x版本支持低版本浏览器(IE7)，
    3.x放弃支持低版本浏览器，适合应用在移动端。

    2.x版本中文网址：http://2.swiper.com.cn/
    3.x版本中文网地址：http://www.swiper.com.cn/