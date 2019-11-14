## Web前端学习笔记 ##


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
               