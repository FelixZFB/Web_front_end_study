## Web前端笔记 ##


## 第十一部分：js移动端库和bootstrap框架，re正则



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
    使用时候直接script引入该库（库都放在js文件夹中）即可。
    <!--引入zepto库，引入和使用都和jQuery库一样-->

- zepto官网：http://zeptojs.com/
- zepto中文api：http://www.css88.com/doc/zeptojs_api/
- zepto包含很多模块，默认下载版本包含的模块有Core, Ajax, Event, Form, IE模块，如果还需要其他的模块，可以自定义构建。
- zepto自定义构建地址：http://github.e-sites.nl/zeptobuilder/ 

- 但是目前手机处理器越来越快，处理能力越来越强，实际开发直接使用jQuery库，不使用zepto


## 3. swiper滑动效果插件
- swiper.js是一款成熟稳定的应用于PC端和移动端的滑动效果插件，
    一般用来触屏焦点图、触屏整屏滚动等效果。 
    swiper分为2.x版本和3.x版本，
    2.x版本支持低版本浏览器(IE7)，
    3.x放弃支持低版本浏览器，适合应用在移动端。

    2.x版本中文网址：http://2.swiper.com.cn/
    3.x版本中文网地址：http://www.swiper.com.cn/
    
    swiper.jquery.min.js 页面引入了jQuery就使用该文件，依赖jQuery
    swiper.min.js 直接使用，不需要依赖jQuery
    swiper.min.css 一般要自定义样式，还需要引入该css文件(很多滑动的自定义样式，直接套用即可)
    如果页面引用了jquery或者zepto，就引用 swiper.jquery.min.js,它的容量比swiper.min.js
    
    - 实际开发：jQuery库  swiper.jquery.min.js   swiper.min.css一起使用
    - 参考web_rem_移动端天天生鲜动态首页实例
    
- 自定义swiper.min.css中的样式

    - 不要直接修改swiper.min.css文件，源文件不要改动，其它地方也会使用源文件
    - 我们自己的main.css是在swiper.min.css后面引入的，main.css的样式会覆盖swiper.min.css中的
    - 因此，我们将swiper.min.css要修改的样式部分，复制出来，放到main.css进行修改
    - 具体步骤：
    - 进火狐-查看元素-找到元素样式位置-点击进入swiper.min.css(自动定位在该样式处)-复制样式-粘贴到main.css末尾进行修改
    - 参考web_rem_移动端天天生鲜动态首页实例和里面的图片
    
    - 自定义css样式技巧：(火狐浏览器为例)
        - 查看元素，比如幻灯片底部切换的小圆点修改
        - 幻灯片是自动播放的，我们可以先将自动播放暂时关闭，方便元素的选择
        - 选择页面中的元素，选择小圆点部分
        - 查看器里面就会显示元素具体的样式，然后我们可以直接修改样式
        - 浏览器中修改bottom width就是调整小圆点部分的位置
        - 可以直接复制出来样式，也可以点击右上角swiper.min.css进入样式编辑器里面
        - 把要修改的样式部分复制到main.css中进行修改
        - 具体参考：web_rem_移动端天天生鲜动态首页_swiper滑动库案例和里面的图片
   
- 实际使用直接去查参考文档和API文档：
        Swiper5 使用方法
        https://www.swiper.com.cn/usage/index.html
        API文档
        https://www.swiper.com.cn/api/index.html
        
        
## 4. bootstrap框架
- 简单、直观、强悍的前端开发框架，让web开发更迅速、简单。 
    来自Twitter，是目前很受欢迎的前端框架之一。
    Bootrstrap是基于HTML、CSS、JavaScript的，
    让书写代码更容易。 移动优先，响应式布局开发。
- 中文网站：
    bootstrap中文网址：http://www.bootcss.com/
    中文文档及下载地址：https://v3.bootcss.com/getting-started/
- Bootstrap 插件全部依赖 jQuery
    请注意，Bootstrap 的所有 JavaScript 插件都依赖 jQuery，
    因此 jQuery 必须在 Bootstrap 之前引入，就像在基本模版中所展示的一样。
    在 bower.json 文件中 列出了 Bootstrap 所支持的 jQuery 版本。
    
- Bootstrap直接参考中文文档
    - 直接复制文档中样式代码过来自己修改
    - 有些部分源码不全，但是有效果展示，
    - 比如表格，直接查看网页元素，把源码中的表格部分源码复制过来进行修改即可

- 预编译版
    - 文档结构：
    bootstrap/
    ├── css/
    │   ├── bootstrap.css
    │   ├── bootstrap.css.map
    │   ├── bootstrap.min.css
    │   ├── bootstrap.min.css.map
    │   ├── bootstrap-theme.css
    │   ├── bootstrap-theme.css.map
    │   ├── bootstrap-theme.min.css
    │   └── bootstrap-theme.min.css.map
    ├── js/
    │   ├── bootstrap.js
    │   └── bootstrap.min.js
    └── fonts/
        ├── glyphicons-halflings-regular.eot
        ├── glyphicons-halflings-regular.svg
        ├── glyphicons-halflings-regular.ttf
        ├── glyphicons-halflings-regular.woff
        └── glyphicons-halflings-regular.woff2
    
    上面展示的就是 Bootstrap 的基本文件结构：预编译文件可以直接使用到任何 web 项目中。
    我们提供了编译好的 CSS 和 JS (bootstrap.*) 文件，还有经过压缩的 CSS 和 JS (bootstrap.min.*) 文件。
    同时还提供了 CSS 源码映射表 (bootstrap.*.map) ，
    可以在某些浏览器的开发工具中使用。同时还包含了来自 Glyphicons 的图标字体，
    在附带的 Bootstrap 主题中使用到了这些图标。
    
    实际开发中：
    bootstrap.min.css       放到web下的css文件夹中
    bootstrap.min.js        放到web下的js文件夹中
    jquery-1.12.4.min.js    放到web下的js文件夹中
    fonts字体文件直接放在web文件夹下
    
- css样式和js效果
    - class样式直接使用bootstrap的样式名称
    - 以data-开头的属性，都是bootstrap里面的一些js效果

## 4.1.  bootstrap 容器
- /*直接使用bootstrap中已经写好的样式container-fluid和container*/
    <div class="container-fluid">流体容器</div>
    <div class="container">响应式固定容器</div>
    
- /*流体容器，即100%宽度的容器，注意默认左右padding有15px*/  
- /*响应式布局容器, 注意默认盒子有左右padding有15px*/
        有四个响应式尺寸,宽度是实际显示页面的宽度:
            1170  大于等于1200宽度都设置为1170px
            970   大于等于992宽度都设置为970px
            750   7大于等于768宽度都设置为750px
            100%  小于768时候，宽度全部按浏览器窗口的100%显示
        内部还是使用的媒体查询，查询窗口大小，然后进行响应，@media (max-width: 1170px){}
        参考004案例和05文件夹中的响应式布局案例
        
- 接下来要做的东西都是放在container响应式容器里面，不然窗口缩放后会出不来想要的效果
        
## 4.2. bootstrap 栅格系统
- 栅格系统可以实现快速方便的响应式布局
- bootstrap将页面的横向一行为基准
    分为12等分(即宽度相当于有12竖列)，按照12等分定义了适应不同宽度等分的样式类，
    （以一行为基准，可以开一个div样式为container,然后下面多个div样式都为row，每个row里面包裹小div
    当然也可以单独开多个div样式为container，下面再开一个div样式为row，然后包裹小div，参考004和007）
    实际推荐每个row都用container包起来：
    使用容器container包裹row行然后在包裹小div：div.container>div.row>(div.box*4)
    
    这些样式类组成了一套响应式、移动设备优先的流式栅格系统：

- 栅格系统尺寸划分    
    1、col-lg-x   大尺寸     大于1200排成一行，小于1200分别占一行
    2、col-md-x   中尺寸     大于992排成一行，小于992分别占一行
    3、col-sm-x   小尺寸     大于768排成一行，小于768分别占一行
    4、col-xs-x   加小尺寸   始终排列成一行  不管宽度多大多小都是一行
    
    上面相当于四种样式，样式的分界点和响应式容器的分界点是一样的
    大于分界点，就排在一行，
    但是横向是要分割为12等分，数字加起来是12即可，
    不够12等分，会显示空白，或者使用下面的列偏移进行居中
    
    <!--通过修改像素分界点，对应的等分数量，不同的窗口宽度，一行对应不同的盒子，可以实现响应式布局-->
    <!--一行排列的盒子都是可以被12整除的数，上面的x值一般取能被12整除的数字： 6 4 3 2 1-->
    - 参考案例005/006
    
## 4.3. bootstrap 列偏移、隐藏
- 列偏移
    都是自己为基准向右边偏移几份
    1、col-lg-offset-
    2、col-md-offset-
    3、col-sm-offset-
    4、col-xs-offset- 
    - 参考实例007
    
- 隐藏
    bootstrap 隐藏类
    某个尺寸时候隐藏某个div盒子
    1、hidden-xs 
    2、hidden-sm
    3、hidden-md
    4、hidden-lg 
    - 参考实例008
    
## 4.4. bootstrap 按钮
- bootstrap 按钮
- 使用input或者a标签创建按钮,还可以使用button作为标签制作按钮(参考014案例)
- 所有按钮，先使用btn样式声明是一个按钮，然后不同的按钮向后面加不同的样式
    1、btn 声明按钮
    2、btn-default 默认按钮样式 
    3、btn-primay  蓝色，不同主题色的按钮
    4、btn-success 绿色
    5、btn-info 浅蓝色
    6、btn-warning 黄色
    7、btn-danger 红色
    8、btn-link 链接按钮，透明色
    9、btn-lg  大号按钮
    10、btn-md 中号按钮
    11、btn-xs 下号按钮
    12、btn-block 宽度是父级宽100%的按钮
        占父级宽度100%的按钮，一般使用在移动端的最底部，按钮独自占据一行
    13、active  已经处于激活的按钮
    14、disabled  不能激活，即不能点击的按钮
    15、btn-group 定义按钮组
        按钮组使用a标签制作，使用input标签会出现bug
    - 参考实例009/010    
    
## 4.5. bootstrap 表单
- bootstrap 表单
    都使用form标签声明一个表单区域
    1、form 声明一个表单域
    2、form-inline 内联表单域     
        <!--网页端我们可以使用内联表单，表单都在一行-->
        <!--内联表单一直缩小，放不下元素的时候，还是会自动换行，每一行都占据100%宽度-->
    
    3、form-horizontal 水平排列表单域
        <!--水平排列表单，随便怎么拉伸，一个内联表单的元素总是在一行，始终不会换行-->
    
    4、form-group 表单组、包括表单文字和表单控件
        - 表单进行分组，比如用户名和输入框放在一个组，密码和输入框放在一个组，参考011
        
    5、form-control 文本输入框、下拉列表控件样式
    6、checkbox checkbox-inline 多选框样式
    7、radio radio-inline 单选框样式
    8、input-group 表单控件组
        - 可以实现输入提示，搜索小图标等效果参考014案例
        - <!--需要什么图标，直接使用图标的样式名称-->
        - <!--Glyphicons 字体图标地址：https://v3.bootcss.com/components/#glyphicons-->
        - <!--图标放在span标签里面，实际属于字体样式，当做文字使用，我们可以自己修改字体大小和颜色等参数，改变图标样式，参考顶部css样式-->
        - bootstrap 字体图标(glyphicons就是字体图标) 通过字体代替图标，font文件夹需要和css文件夹在同一目录 

    9、input-group-addon 表单控件组物件样式
    10、input-group-btn 表单控件组物件为按钮的样式
    11、form-group-lg 大尺寸表单
    12、form-group-sm 小尺寸表单
    
## 4.6. bootstrap 导航条
- 前面讲的都是使用container响应式容器包裹的按钮，表单等内容
- 导航条，使用navbar包裹container，然后下面再包裹内容
    1、navbar 声明导航条
    2、navbar-default 声明默认的导航条样式  灰色的导航条
    3、navbar-inverse 声明反白的导航条样式  黑色的导航条
    4、navbar-static-top 去掉导航条的圆角   
    
    5、navbar-fixed-top 固定到顶部的导航条
    6、navbar-fixed-bottom 固定到底部的导航条
    7、navbar-header 申明logo的容器
    8、navbar-brand 针对logo等固定内容的样式
    11、nav navbar-nav 定义导航条中的菜单
    12、navbar-form 定义导航条中的表单
    13、navbar-btn 定义导航条中的按钮
    14、navbar-text 定义导航条中的文本
    15、navbar-left 菜单靠左
    16、navbar-right 菜单靠右   
    
    - 参考015实例，写法都按照实例中的固定格式
    
## 4.7. bootstrap 模态框
- 模态框即弹框
    1、modal 声明一个模态框
    2、modal-dialog 定义模态框尺寸
    3、modal-lg 定义大尺寸模态框
    4、modal-sm 定义小尺寸模态框
    5、modal-header 弹框顶部信息
    6、modal-body 弹框中间内容
    7、modal-footer  弹框底部信息
    
## 4.8. 路径导航 breadcrumb
- breadcrumb 面包屑   
- 显示当前在哪个路径
- breadcrumb通用的路径导航单词，搜索引擎一般会搜索该单词


## 5. 正则表达式-表单验证
- 正则表达式

1、什么是正则表达式：
    能让计算机读懂的字符串匹配规则。

2、正则表达式的写法：
    var re=new RegExp('规则', '可选参数');
    var re=/规则/参数;

3、规则中的字符
    - 1）普通字符匹配：
        如：/a/ 匹配字符 ‘a’，/a,b/ 匹配字符 ‘a,b’
    - 2）转义字符匹配：
        \d 匹配一个数字，即0-9
        \D 匹配一个非数字，即除了0-9
        \w 匹配一个单词字符（字母、数字、下划线）
        \W 匹配任何非单词字符。等价于[^A-Za-z0-9_]
        \s 匹配一个空白符
        \S 匹配一个非空白符
        \b 匹配单词边界
        \B 匹配非单词边界
        . 匹配一个任意字符
        -
        var sTr01 = '123456asdf';
        var re01 = /\d+/;
        //匹配纯数字字符串
        var re02 = /^\d+$/;
        alert(re01.test(sTr01)); //弹出true
        alert(re02.test(sTr01)); //弹出false

4、量词：对左边的匹配字符定义个数
    ? 出现零次或一次（最多出现一次）
    + 出现一次或多次（至少出现一次）
    * 出现零次或多次（任意次）
    {n} 出现n次
    {n,m} 出现n到m次
    {n,} 至少出现n次

5、任意一个或者范围
    [abc123] : 匹配‘abc123’中的任意一个字符
    [a-z0-9] : 匹配a到z或者0到9中的任意一个字符

6、限制开头结尾
    ^ 以紧挨的元素开头
    $ 以紧挨的元素结尾

7、修饰参数：
    g： global，全文搜索，默认搜索到第一个结果接停止
    i： ingore case，忽略大小写，默认大小写敏感

8、常用函数
    1、test
    用法：正则.test(字符串) 匹配成功，就返回真，否则就返回假

    2、replace
    用法：字符串.replace(正则，新的字符串) 匹配成功的字符去替换新的字符
    
    正则默认规则
    匹配成功就结束，不会继续匹配，区分大小写

    var sTr01 = 'abcdefedcbaCef';
    var re01 = /c/;
    var re02 = /c/g;
    var re03 = /c/gi;
    
    var sTr02 = sTr01.replace(re01,'*');
    var sTr03 = sTr01.replace(re02,'*');
    var sTr04 = sTr01.replace(re03,'*');
    alert(sTr02); // 弹出 ab*defedcbaCef
    alert(sTr03); // 弹出 ab*defed*baCef
    alert(sTr04); // 弹出 ab*defed*ba*ef

9. 常用正则规则

    //用户名验证：(数字字母或下划线6到20位)
    var reUser = /^\w{6,20}$/;
    
    //邮箱验证：        
    var reMail = /^[a-z0-9][\w\.\-]*@[a-z0-9\-]+(\.[a-z]{2,5}){1,2}$/i;
    
    //密码验证：
    var rePass = /^[\w!@#$%^&*]{6,20}$/;
    
    //手机号码验证：
    var rePhone = /^1[3458]\d{9}$/;

        
        

            
       
        
        
    