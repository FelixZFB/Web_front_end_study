## Web前端笔记 ##


## 第七部分：jQuery


## 1. jQuery介绍
- jQuery是目前使用最广泛的javascript函数库。
    据统计，全世界排名前100万的网站，有46%使用jQuery，远远超过其他库。
    微软公司甚至把jQuery作为他们的官方库。
    
    jQuery的版本分为1.x系列和2.x、3.x系列，1.x系列兼容低版本的浏览器，
    2.x、3.x系列放弃支持低版本浏览器，目前使用最多的是1.x系列的。
    
    jquery是一个函数库，一个js文件，页面用script标签引入这个js文件就可以使用。
    <script type="text/javascript" src="js/jquery-1.12.2.js"></script>

- jquery的口号和愿望 Write Less, Do More（写得少，做得多）
    1、http://jquery.com/ 官方网站
    2、https://code.jquery.com/ 版本下载
    
- 下载方法：官网里面有不同的版本，高版本不支持低版本浏览器了
- 远程引用：点击不同的版本，直接将打开得到的script标签放到HTML中即可
    src="https://code.jquery.com/jquery-3.4.1.js"
    integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
    crossorigin="anonymous">
    </script>
- 下载后本地使用：比如上面3.X版本，复制打开src中的地址：https://code.jquery.com/jquery-3.4.1.js
    复制存储为本地的js文件，然后放在HTML里面的js文件夹中，然后引用即可



## 2. jQuery和原生js加载模块写法区别
- 原生js写法：
        window.onload = function () {
            var oDiv = document.getElementById('div1');
            alert('原生JS弹出的' + oDiv);
        }

- jquery完整写法：
        /*使用jquery的写法，$(document).ready相当于上面的window.onload*/
        /*表示当前页面节点都加载完毕，才执行ready括号里面的内容*/
        $(document).ready(function () {
            var $div = $('#div1');
            alert('jquery弹出的' + $div); /*jquery写在后面但是弹出来在前面，速度更快*/
        })
        
- jquery简写：
        /*jquery上面ready完整写法的简写,$(document).ready()简写为$()*/
        $(function () {
            var $div = $('#div1');
            alert('jquery简写弹出的' + $div);
        })

- /*ready比onload快的原因：*/
        /*onload标签和标签里面数据都加载完毕(类似于网页渲染)才开始运行内部函数，*/
        /*ready只要标签加载完毕就开始运行了，速度更快*/

- jquery有容错机制
    - 样式名称可以使用短横线(css中原始写法)也可以写成匈牙利命名(原生js中写法)    
    - 宽度高度等数字后面的px可以省略，不写px就不写引号，要写px就要加上引号     
        
## 3. jQuery选择器
- jquery用法思想一
    选择某个网页元素，然后对它进行某种操作

- 注意jQuery选择器，选择样式时候需要和样式写法一模一样，盒子样式前面需要.点
    - 但是使用属性或者修改样式属性时候.不需要，直接使用名称

- jquery选择器
    jquery选择器可以快速地选择元素，选择规则和css样式相同，使用length属性判断是否选择成功。
    $('#myId') //选择id为myId的网页元素
    $('.myClass') // 选择class为myClass的元素
    $('li') //选择所有的li元素
    $('#ul1 li span') //选择id为为ul1元素下的所有li下的span元素
    $('input[name=first]') // 选择name属性等于first的input元素

- 对选择集进行过滤
    $('div').has('p'); // 选择包含p元素的div元素
    $('div').not('.myClass'); //选择class不等于myClass的div元素
    $('div').filter('.myClass'); //选择class等于myClass的div元素
    $('div').eq(5); //选择第6个div元素------最常用的

- 选择集转移
    $('div').prev(); //选择div元素前面紧挨的同辈元素
    $('div').prevAll(); //选择div元素之前所有的同辈元素
    $('div').next(); //选择div元素后面紧挨的同辈元素
    $('div').nextAll(); //选择div元素后面所有的同辈元素
    $('div').parent(); //选择div的父元素--------------------------常用
    $('div').children(); //选择div的所有子元素---------------------常用
    $('div').siblings(); //选择除本div的其它同级元素-----------------------常用
    $('div').find('.myClass'); //选择div内的class等于myClass的元素

- 判断是否选择到了元素
    jquery有容错机制，即使没有找到元素，也不会出错，可以用length属性来判断是否找到了元素,length等于0，就是没选择到元素，length大于0，就是选择到了元素。
    var $div1 = $('#div1');
    var $div2 = $('#div2');
    alert($div1.length); // 弹出1
    alert($div2.length); // 弹出0
    ......
    <div id="div1">这是一个div</div>
  
## 4. jquery样式操作
- jquery用法思想二
    同一个函数完成取值和赋值

- 操作行间样式
    // 获取div的样式
    $("div").css("width");
    $("div").css("color");

    //设置div的样式
    $("div").css("width","30px");
    $("div").css("height","30px");
    $("div").css({fontSize:"30px",color:"red"});

- 特别注意
    选择器获取的多个元素，获取信息获取的是第一个，比如：$("div").css("width")，获取的是第一个div的width。

- 操作样式类名
    $("#div1").addClass("divClass2") //为id为div1的对象追加样式divClass2
    $("#div1").removeClass("divClass")  //移除id为div1的对象的class名为divClass的样式
    $("#div1").removeClass("divClass divClass2") //移除多个样式
    $("#div1").toggleClass("anotherClass") //重复切换anotherClass样式
 
 
## 5. jQuery特殊效果-动画
- 常用动画
    fadeOut() 淡出
    fadeToggle() 切换淡入淡出
    hide() 隐藏元素
    show() 显示元素
    toggle() 切换元素的可见状态
    slideDown() 向下展开
    slideUp() 向上卷起
    slideToggle() 依次展开或卷起某个元素  
    
    - 传入动画播放时间，swing不写就是默认该参数，可以传入一个回调函数
    - 回调函数是动画执行完毕后要执行的函数
    $btn.click(function(){

        $('#div1').fadeIn(1000,'swing',function(){
            alert('动画结束了!');
        });

    });
    
## 6. jquery链式调用
- 多个功能可以写在一句代码中，比如009案例
    $(this).addClass('current').siblings().removeClass('current');
    $div.eq($(this).index()).addClass('active').siblings().removeClass('active');
- jquery链式调用可以提高效率
- 比如下面就是一个链式调用：(可以换行书写，中间都是.连接)
    $('#div1') // id为div1的元素
    .children('ul') //该元素下面的ul子元素
    .slideDown('fast') //高度从零变到实际高度来显示ul元素
    .parent()  //跳到ul的父元素，也就是id为div1的元素
    .siblings()  //跳到div1元素平级的所有兄弟元素
    .children('ul') //这些兄弟元素中的ul子元素
    .slideUp('fast');  //高度实际高度变换到零来隐藏ul元素
    
## 7. jquery动画
- 通过animate方法可以设置元素某属性值上的动画，可以设置一个或多个属性值，动画执行完成后会执行一个函数。
- 函数是一个回调函数，可以不断的传入动画，就可以实现无限的动画
- 元素的属性可以传入数学表达式，通过表达式对属性进行有规律的修改

- css3和jquery中动画对比
    - 动画本质一样，都是两个状态之间切换的效果
    - css3中需要定义from起始状态到to终点状态，然后设置过渡动画效果
    - jQuery本身的css样式就是起始状态，只需要在函数中定义终点状态和动画效果
    - 参考04文件夹中的007和07文件夹中的013对比
    
## 8. 获取尺寸、滚动事件
- css获取属性时候，是使用的字典写法
    比如获取字体尺寸
    var sTr = $div1.css('font-size');
    我们这里获取尺寸直接使用$div1.width() 注意要写上小括号

- 1、获取和设置元素的尺寸
    width()、height()    获取元素width和height  
    innerWidth()、innerHeight()  包括padding的width和height  
    outerWidth()、outerHeight()  包括padding和border的width和height  
    outerWidth(true)、outerHeight(true)   包括padding和border以及margin的width和height

- 2、获取元素相对页面的绝对位置
    offset()

- 3、获取浏览器可视区宽度高度
    $(window).width();
    $(window).height();

- 4、获取页面文档的宽度高度
    $(document).width();
    $(document).height();

- 5、获取页面滚动距离
    $(document).scrollTop();  
    $(document).scrollLeft();

- 6、页面滚动事件
    $(window).scroll(function(){  
        ......  
    })
    
## 9. jquery属性操作，循环操作
- 1、html() 取出或设置html内容
    类似原生JS中的innerHtml
    /*写(修改)元素的内容*/
    oDiv.innerHTML = "修改标签内部的内容";
    
    // 取出html内容
    var $htm = $('#div1').html();
    
    // 设置html内容
    $('#div1').html('<span>添加文字</span>');

- 2、prop() 取出或设置某个属性的值
    // 取出图片的地址
    var $src = $('#img1').prop('src');
    
    // 设置图片的地址和alt属性
    $('#img1').prop({src: "test.jpg", alt: "Test Image" });
 
- jquery循环
    对jquery选择的对象集合分别进行操作，
    需要用到jquery循环操作，此时可以用对象上的each方法
    
## 10. jquery事件
- 事件函数列表：
    blur() 元素失去焦点
    focus() 元素获得焦点
    click() 鼠标单击
    mouseover() 鼠标进入（进入子元素也触发）
    mouseout() 鼠标离开（离开子元素也触发）
    mouseenter() 鼠标进入（进入子元素不触发）
    mouseleave() 鼠标离开（离开子元素不触发）
    hover() 同时为mouseenter和mouseleave事件指定处理函数
    ready() DOM加载完成
    resize() 浏览器窗口的大小发生改变
    scroll() 滚动条的位置发生变化
    submit() 用户递交表单 （input的提交按钮,点击提交触发的事件，默认提交数据到数据库）

- 绑定事件的其他方式
    bind第一个参数，传入事件名称，可以同时传入多个触发事件，第二个参数就是匿名函数
    $(function(){
        $('#div1').bind('mouseover click', function(event) {
            alert($(this).html());
        });
    });

- 取消绑定事件
    $(function(){
        $('#div1').bind('mouseover click', function(event) {
            alert($(this).html());
    
            // $(this).unbind();
            $(this).unbind('mouseover');
    
        });
    });

## 11. 事件冒泡
- 什么是事件冒泡
    在一个对象上触发某类事件（比如单击onclick事件），如果此对象定义了此事件的处理程序，
    那么此事件就会调用这个处理程序，如果没有定义此事件处理程序或者事件返回true，
    那么这个事件会向这个对象的父级对象传播，从里到外，直至它被处理（父级对象所有同类事件都将被激活），
    最上级div上面一般是body,或者它到达了对象层次的最顶层(html标签)，即document对象（有些浏览器是window）。
    
    // 事件一直会向上传，子级向父级，父级在向自己的父级，直到最顶层
    // 传递事件的顺序是按照标签的级别循序，一级一级向上传递
    // 父级有的同类事件都会自动激活执行，没有的话就继续向上执行
    - 参考实例025
    
- 事件冒泡的作用
    事件冒泡允许多个操作被集中处理
    （把事件处理器添加到一个父级元素上，避免把事件处理器添加到多个子级元素上），
    它还可以让你在对象层的不同级别捕获事件。

- 阻止事件冒泡
    事件冒泡机制有时候是不需要的，需要阻止掉，通过 event.stopPropagation() 来阻止

    阻止默认行为，即阻止表单默认提交行为，因为默认点击表单的提交，会提交数据到到数据库
    event就是指的该事件对象，此处指的就是提交事件
    $('#form1').submit(function(event){
        event.preventDefault() // 阻止表单默认提交行为
    })
    - 实际开发，不是使用默认提交，而是使用ajax进行数据提交，就需要阻止默认行为

- 合并阻止操作
    实际开发中，一般把阻止冒泡和阻止默认行为合并起来写，合并写法可以用

    // event.stopPropagation();   阻止事件冒泡
    // event.preventDefault();    阻止默认行为（默认表单提交事件）
    
    // 上面两句的合并写法，event对象就不用写了：
    return false; --------实际开发写这句即可，上面两句一般不用  

## 12. 事件委托
- 事件委托就是利用冒泡的原理，把事件加到父级上，通过判断事件来源的子集，执行相应的操作，
- 事件委托的好处：
    1、事件委托首先可以极大减少事件绑定次数，提高性能
    2、其次可以让新加入的子元素也可以拥有相同的操作(后面添加的子元素一样可以执行已经委托的事件)
    3、简化代码
- 事件委托的写法
    $(function(){
        $list = $('#list');
        // $list是父级元素，li是委托的子元素，click是委托的事件
        // $(this)即要执行事件的子元素
        // 有三个参数：传入子元素标签的名称，要绑定的事件，然后事件发生时候要执行的函数
        $list.delegate('li', 'click', function() { 
            $(this).css({background:'red'});
        });
    })
    ...
    <ul id="list">
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
    </ul>

## 13. jquery元素节点操作
- 创建节点
    var $div = $('<div>');
    var $div2 = $('<div>这是一个div元素</div>');

- 插入节点
    1、append()和appendTo()：在现存元素的内部，从后面插入元素
        var $span = $('<span>这是一个span元素</span>');
        $('#div1').append($span);
        ......
        <div id="div1"></div>

    2、prepend()和prependTo()：在现存元素的内部，从前面插入元素
    3、after()和insertAfter()：在现存元素的外部，从后面插入元素
    4、before()和insertBefore()：在现存元素的外部，从前面插入元素

- 删除节点
    $('#div1').remove();
    
## 14. 滚轮事件与函数节流
- 鼠标滚轮事件需要使用jquery.mousewheel插件
- jquery.mousewheel插件使用
    jquery中没有鼠标滚轮事件，原生js中的鼠标滚轮事件不兼容，
    可以使用jquery的滚轮事件插件jquery.mousewheel.js
    将该js插件文件放在js文件中，先引入jQuery文件，然后引入该插件
- 函数节流
    javascript中有些事件的触发频率非常高，触发事件的动作会触发很多次(滚动鼠标会触发多次)
    比如onresize事件(jq中是resize)，
    onmousemove事件(jq中是mousemove)以及上面说的鼠标滚轮事件，
    在短事件内多处触发执行绑定的函数，可以巧妙地使用定时器来减少触发的次数，实现函数节流。
    - 使用定时器减少触发次数，参考案例037
    
## 15. jquery动画
- // css3实现动画使用的hover伪类的transition动画或者animation动画(定义一个动画函数的from起点状态to终点状态)
    // jquery可以直接将动画样式添加到盒子上去即可，代码更加的简单
    // 盒子最初有一个样式，jQuery函数加上了一个样式，两个样式之间就形成了动画
    
    // 网页打开时候，有一个样式，然后我们添加一个样式，相当于就有了一个起点和一个终点的变化
    // 两个样式的变化就可以形成一个动画,也可以直接使用transform变形，只需要写一个新样式(里面写变形终点状态即可，起点相对于css3可以省略，css3中起点一般写上不然容易出现bug)
    // 原来的样式本身里面就放有transition动画代码，只要有样式变化都会有动画显示，transition:all 1000ms ease;
    // 新的样式一般使用addClass()方法加上去，该方法激活的方法，可以是点击事件，滚动事件，鼠标移入等事件
    
    // 一般将终点样式，直接使用原始样式前面加一个动画名称，
        比如 本来样式是.box  动画终点的样式.moving .box ，.moving样式加在父级上
        此时终点样式的权限是大于初始状态的，样式就会被修改掉，两个样式就产生了动画效果
        .box中任何属性的变化都可以产生动画效果，相对于css3中的动画设置可以更加的灵活
        
    - 参考案例036/037   
